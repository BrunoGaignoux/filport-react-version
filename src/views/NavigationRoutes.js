import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../views/Home';
import ReportScreen from '../views/Report';
import MyReportsScreen from '../views/MyReports';
import NavigationHeader from '../components/NavigationHeader';

const HomeStack = createStackNavigator();

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Painel de Controle"
        component={HomeScreen}
        options={{
          headerRight: () => <NavigationHeader navigation={navigation} />,
          headerStyle: {
            backgroundColor: '#800080',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

const MyReportsStack = createStackNavigator();

function MyReportsStackScreen({navigation}) {
  return (
    <MyReportsStack.Navigator>
      <MyReportsStack.Screen
        name="Meus Relatórios"
        component={MyReportsScreen}
        options={{
          headerRight: () => <NavigationHeader navigation={navigation} />,
          headerStyle: {
            backgroundColor: '#800080',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </MyReportsStack.Navigator>
  );
}

const ReportStack = createStackNavigator();

function ReportStackScreen({navigation}) {
  return (
    <ReportStack.Navigator>
      <ReportStack.Screen
        name="Criar Relatório"
        component={ReportScreen}
        options={{
          headerRight: () => <NavigationHeader navigation={navigation} />,
          headerStyle: {
            backgroundColor: '#800080',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </ReportStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const NavigationRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'graphic-eq' : 'dashboard';
          } else if (route.name === 'Meus Relatórios') {
            iconName = focused ? 'folder-open' : 'folder';
          } else {
            iconName = focused ? 'event-note' : 'note-add';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#800080',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Dashboard" component={HomeStackScreen} />
      <Tab.Screen name="Meus Relatórios" component={MyReportsStackScreen} />
      <Tab.Screen name="Criar Relatório" component={ReportStackScreen} />
    </Tab.Navigator>
  );
};

export default NavigationRoutes;
