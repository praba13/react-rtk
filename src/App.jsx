import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import UserView from './features/user/UserView';
import CakeView from './features/cake/CakeView';
import IcecreamView from './features/icecream/IcecreamView';
import ApiView from './features/apiquery/ApiView';
import { productsApi } from './features/apiquery/apiSlice';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserView />
      <ApiProvider api={productsApi} >
        <ApiView />
      </ApiProvider>
    </div>
  );
}

export default App;
