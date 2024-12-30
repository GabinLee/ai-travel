import React from 'react';
import { Tabs } from 'expo-router';

import TabBarBackground from '@/components/ui/TabBarBackground';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "rgb(17, 24, 39)",
        tabBarInactiveTintColor: "rgb(156, 163, 175)",
        headerShown: false,
        tabBarBackground: TabBarBackground,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'AI여행',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="navigate" color={color} />,
        }}
      />
      <Tabs.Screen
        name="keep"
        options={{
          title: '저장됨',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="bookmark-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="mypage"
        options={{
          title: '내 정보',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="person-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
