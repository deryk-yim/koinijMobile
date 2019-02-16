import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { Svg, Line } from 'react-native-svg';
import Button from '../Button';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#775FFB', //THEME PURPLE
    },
    header: {
        flex: 0.15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 45,
        paddingRight: 45,
    },
    body: {
        flex: 0.85,
        backgroundColor: 'green',
        paddingLeft: 45,
        paddingRight: 45,
    },
    koinij: {
        color: '#FFFFFF',
        fontSize: 26,
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    closeBtn: {
        fontSize: 30,
        color: '#775FFB', //THEME PURPLE
    }
});

export default () => {
    // getMenuItems = () => {
    //     const { routes, navigation } = this.props;
    //     const routesArr = Object.keys(routes).map((routeName) => {
    //         if (routes[routeName].sideMenu) {
    //             return (
    //                 <TouchableOpacity
    //                     key={routes[routeName].label}
    //                     style={styles.touchableOpacity}
    //                     onPress={() => {
    //                         navigation.navigate(routeName);
    //                     }}
    //                 >
    //                     <Text style={styles.label}>
    //                         {routes[routeName].label}
    //                     </Text>
    //                 </TouchableOpacity>
    //             );
    //         }
    //         return null;
    //     }).filter(item => item);
    //     return routesArr;
    // };
    const { container, header, body, koinij } = styles;
    return (
        <SafeAreaView style={container}>
            <View style={header}>
                <Button.Circular>
                    <Text>Close</Text>
                </Button.Circular>
                <Text style={koinij}>Koinij.</Text>
            </View>
            <View style={body} />
        </SafeAreaView>
        
    );
};
