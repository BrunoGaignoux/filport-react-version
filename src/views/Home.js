import React from 'react';
import {View, SafeAreaView} from 'react-native';
import DashCard from '../components/DashCard';
import home from '../assets/styles/home';

const Home = ({navigation}) => {
  const cardTitle1 = 'Relatórios não finalizados';
  const cardTitle2 = 'Relatórios finalizados';
  const cardTitle3 = 'Total de Relatórios';
  const cardTitle4 = 'Ordem de Serviços abertas';

  return (
    <SafeAreaView style={dashboard.container}>
      <View style={dashboard.viewArea}>
        <DashCard description={cardTitle1} />
        <DashCard description={cardTitle2} />
      </View>
      <View style={dashboard.viewArea}>
        <DashCard description={cardTitle3} />
        <DashCard description={cardTitle4} />
      </View>
    </SafeAreaView>
  );
};

const dashboard = home;

export default Home;
