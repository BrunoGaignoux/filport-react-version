import React from 'react';
import {View, SafeAreaView} from 'react-native';
import DashCard from '../components/DashCard';
import home from '../assets/styles/home';
import SidebarUserInfo from '../components/SidebarUserInfo';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={dashboard.container}>
      <View style={{flexDirection: 'column'}}>
        <View style={dashboard.viewArea}>
          <SidebarUserInfo />
        </View>
      </View>
      <View style={dashboard.viewLine}>
        <View style={dashboard.lineStyle} />
      </View>
      <View style={{flexDirection: 'column'}}>
        <View style={dashboard.viewArea}>
          <DashCard
            iconName='assignment-late'
            description='Relatórios não finalizados' />
          <DashCard
            iconName='assignment-turned-in'
            description='Relatórios finalizados' />
        </View>
        <View style={dashboard.viewArea}>
          <DashCard
            iconName='assignment'
            description='Total de Relatórios' />
          <DashCard
            iconName='event-note'
            description='Ordem de Serviços abertas' />
        </View>
      </View>
    </SafeAreaView>
  );
};

const dashboard = home;

export default Home;
