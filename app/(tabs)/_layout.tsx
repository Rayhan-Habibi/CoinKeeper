import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeScreen from '.';
import TabTwoScreen from './explore';
import { faChartPie } from '@fortawesome/free-solid-svg-icons/faChartPie'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons/faPiggyBank'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
import { faHouse } from  '@fortawesome/free-solid-svg-icons/faHouse'
import Add from './add';
import Savings from './savings';
import Settings from './settings';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
     
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        animation: "shift",
        tabBarStyle: {
         position: "absolute",
         backgroundColor: "rrgba(255, 255, 255, 0.1)",
         bottom: 15,
         left: 10,
         right: 10,
         height: 70,
         borderRadius: 25,
         paddingHorizontal: 5,
         elevation: 0
        },
        tabBarIconStyle: {
          bottom: 15
        },
        tabBarLabelStyle: {
          bottom: 10,
          fontSize: 13,
          fontWeight: "bold"
        }
      }}
      >
      <Tab.Screen
        name="index"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused, size }) => 
           <FontAwesomeIcon icon={faHouse} size={size} color={color}/>
          ,
        }}
      />
      <Tab.Screen
        name="Stats"
        component={TabTwoScreen}
        options={{
          title: 'Stats',
          tabBarIcon: ({ color, focused, size }) => (
            <FontAwesomeIcon icon={faChartPie} size={size} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          title: 'Add',
          tabBarIcon: ({ color, focused, size }) => (
            <FontAwesomeIcon icon={faCirclePlus} size={size} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Savings"
        component={Savings}
        options={{
          title: 'Budgets',
          tabBarIcon: ({ color, focused, size }) => (
            <FontAwesomeIcon icon={faPiggyBank} size={size} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused, size }) => (
            <FontAwesomeIcon icon={faGear} size={size} color={color}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
