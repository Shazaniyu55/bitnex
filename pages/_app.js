import '@/styles/globals.css'
import Layouts from '@/components/layout'
import 'tailwindcss/tailwind.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store , persistor} from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }) {
  return(
    <PersistGate persistor={persistor}>
    <Provider store={store}>
  
    <Layouts>
        <Component {...pageProps} />


    </Layouts>
    </Provider>
    </PersistGate>
  )
 
}
