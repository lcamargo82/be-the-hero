import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        //deve ir em volta de tudo
        <NavigationContainer>
            {/* //deve ir em volta das rotas */}
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                {/* para cada uma das rotas. AppStack.Screen recebe uma propriedade component que e o component da pagina */}
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
            
        </NavigationContainer>
    );
}