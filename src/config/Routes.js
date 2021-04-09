import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../views/Home';
import Report from '../views/Report';
import MyReports from "../views/MyReports";

const Routes = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                headerTitle: 'Painel de Controle'
            }
        },
        MyReports: {
            screen: MyReports,
            navigationOptions: {
                headerTitle: 'Meus Relatórios'
            }
        },
        Report: {
            screen: Report,
            navigationOptions: {
                headerTitle: 'Criar Relatório'
            }
        }
    }
)

export default createAppContainer(Routes);