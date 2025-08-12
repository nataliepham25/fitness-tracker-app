import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../constants/Colors';
import { Layout } from '../constants/Layout';
import AddEntryModal from './AddEntryModal';

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={[styles.tabBarContainer, { paddingBottom: insets.bottom }]}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          // Skip rendering a tab item for the middle slot if it's meant for the add button
          if (index === Math.floor(state.routes.length / 2)) {
            return <View key={route.key} style={styles.navItemPlaceholder} />;
          }

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.navItem}
            >
              <Text style={{ color: isFocused ? Colors.textDark : Colors.textLight, fontSize: 20 }}>
                {options.tabBarIcon ? options.tabBarIcon({ focused: isFocused, color: isFocused ? Colors.textDark : Colors.textLight, size: 24 }) : '●'}
              </Text>
              <Text style={[styles.navLabel, { color: isFocused ? Colors.textDark : Colors.textLight }]}>
                {typeof label === 'string' ? label : ''}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={toggleModal}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <AddEntryModal isVisible={isModalVisible} onClose={toggleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    borderRadius: Layout.borderRadius.navigation,
    // Convert shadow string to StyleSheet object
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 5, // For Android
    paddingHorizontal: Layout.spacing.md,
    paddingVertical: Layout.spacing.md,
    position: 'relative',
    width: '90%', // Adjust as needed
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Layout.spacing.sm,
  },
  navItemPlaceholder: {
    width: 56, // Width of the add button
    height: '100%', // Take up full height
  },
  navLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.textDark,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -28, // Half of its height to float above
    // Convert shadow string to StyleSheet object
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // Stronger shadow for the button
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 10, // For Android
  },
  addButtonText: {
    color: Colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CustomTabBar;