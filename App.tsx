/**
 * Monc
 * @format
 */

import React from 'react';
import { Container } from 'native-base';
import { NativeBaseProvider } from 'native-base';
import theme from './theme';
import { AppNavigation } from 'navigation/appNavigation';

const App:React.FC = () => {
  return (
    <NativeBaseProvider theme = {theme}>
      <Container>
        <AppNavigation/>
      </Container>
    </NativeBaseProvider>
  );
}

export default App;
