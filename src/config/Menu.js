import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../views/Home';
import MyReports from '../views/MyReports';
import Report from '../views/Report';

const Menu = createDrawerNavigator(
    {
        Home,
        MyReports,
        Report,
    }
);


export default createAppContainer(Menu);