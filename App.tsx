/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux-store/store';
import Main from './AppContainer';



function App(): JSX.Element {

  return (
   <Provider store={store}>
    <Main/>
 
   </Provider>
  );
}

export default App;
