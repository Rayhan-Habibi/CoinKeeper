import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeScreen from '.';
import TabTwoScreen from './explore';
import { faReceipt } from '@fortawesome/free-solid-svg-icons/faReceipt'
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
        tabBarInactiveTintColor: Colors.light.text,
        animation: "shift",
        tabBarStyle: {
         position: "absolute",
         backgroundColor: "rrgba(255, 255, 255, 0.1)",
         bottom: 15,
         left: 10,
         right: 10,
         borderColor: "rrgba(255, 255, 255, 0.1)",
         height: 70,
         borderRadius: 25,
         paddingHorizontal: 5,
         elevation: 0
        },
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#061934"
        },
        headerTitleStyle: {
          color: "white",
          fontSize: 25
        },
        headerTitleAlign: "center",
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
          title: 'Transactions',
          tabBarIcon: ({ color, focused, size }) => (
            <FontAwesomeIcon icon={faReceipt} size={size} color={color}/>
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
