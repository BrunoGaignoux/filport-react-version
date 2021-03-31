import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../views/Home';
import Report from '../views/Report';

const Menu = createDrawerNavigator(
    {
        Home,
        "Criar Relatório": Report,
    }
);


export default createAppContainer(Menu);