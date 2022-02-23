import React from 'react';

import Routers from './telas/router/Routers';
import { NavigationContainer } from '@react-navigation/native';
import ModalEmotions from './telas/tab-bar/listView/list-modal/ModalEmotions';


function App() {
  
  return (
    <NavigationContainer>
      {/*<Routers />*/}
      <ModalEmotions />
    </NavigationContainer>
  );
}

export default App;
