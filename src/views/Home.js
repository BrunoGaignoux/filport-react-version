import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, ScrollView, RefreshControl} from 'react-native';
import DashCard from '../components/DashCard';
import home from '../assets/styles/home';
import SidebarUserInfo from '../components/SidebarUserInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import service from '../services/default';

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [statistic, setStatistic] = useState({
    open: 0,
    commited: 0,
    all: 0,
    os: 0
  });

  async function getStatistics() {
    try {
      setRefreshing(true);
      service.dashboard().then(response => {
        if (response.success) {
          setStatistic(response.data);
          setRefreshing(false);
        }
      });
    } catch (e) {
      alert('Failed to fetch the data from api');
      setRefreshing(false);
    }
  }

  useEffect(getStatistics, []);

  return (
    <SafeAreaView style={dashboard.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={getStatistics}
          />
        }
      >
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
              quantity={statistic.open}
              description='Relatórios não finalizados' />
            <DashCard
              iconName='assignment-turned-in'
              quantity={statistic.commited}
              description='Relatórios finalizados' />
          </View>
          <View style={dashboard.viewArea}>
            <DashCard
              iconName='assignment'
              quantity={statistic.all}
              description='Total de Relatórios' />
            <DashCard
              iconName='event-note'
              quantity={statistic.os}
              description='OS abertas' />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const dashboard = home;

export default Home;
