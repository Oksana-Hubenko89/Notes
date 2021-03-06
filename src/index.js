import React from 'react';
import './index.css';
import { Provider } from 'react-redux'
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import store from './components/redux/store';
import { render } from 'react-dom';
import { PersistGate} from 'redux-persist/integration/react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <React.StrictMode>
   <Provider store={store.store}>
   <PersistGate loading="Загружаем" persistor={store.persistor}>
        <BrowserRouter>
          <DatePicker />
          <App/>
          
    </BrowserRouter>
    </PersistGate>
    </Provider>
    </React.StrictMode>
 ,
  document.getElementById('root')
)
