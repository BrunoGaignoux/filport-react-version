import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../views/Home';
import Report from '../views/Report';

const Routes = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                headerTitle: 'Home'
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