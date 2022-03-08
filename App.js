import React from 'react';

import Routers from './telas/router/Routers';
import { NavigationContainer } from '@react-navigation/native';



function App() {

  return (
    <NavigationContainer>
     <Routers />
    </NavigationContainer>
  );
}

export default App;
