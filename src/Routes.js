// import PropTypes from 'prop-types';
import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import CONTAINERS from './container';
import Sidebar from './component/Sidebar';

const routes = {
    Home: {
        label: 'HOME',
        sideMenu: true,
        screen: CONTAINERS.Home,
    },
    Register: {
        label: 'REGISTER',
        sideMenu: true,
        screen: CONTAINERS.Register,
    },
    Login: {
        label: 'Login',
        sideMenu: true,
        screen: CONTAINERS.Login,
    },
    AddTransaction: {
        label: 'TRANSACTION',
        sideMenu: true,
        screen: CONTAINERS.AddTransaction,
    },
    Tracking: {
        label: 'TRACKING',
        sideMenu: true,
        screen: CONTAINERS.Tracking,
    }
};

const SideMenu = ({ navigation }) => (
    <Sidebar
        navigation={navigation}
        routes={routes}
    />
);

const MainNavigation = createDrawerNavigator(
    routes,
    {
        initialRouteName: 'Home',
        contentComponent: SideMenu,
    }
);

export default createAppContainer(MainNavigation);

// export default () => (
//     <CONTAINERS.AddTransaction />
// );

// Sidebar.propTypes = {
//     navigation: PropTypes.shape({
//         navigate: PropTypes.func.isRequired,
//     }).isRequired,
// };
