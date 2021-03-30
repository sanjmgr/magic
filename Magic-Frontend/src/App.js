import React from 'react';
import Buttons from './Buttons';
import Login from './Login';
import MagicProvider from './helpers/magicProvider';

import './App.css';
import 'semantic-ui-css/semantic.min.css';
import './bootstrap-grid.css';
import 'react-toastify/dist/ReactToastify.css';

import { Card } from 'semantic-ui-react';
import UserTable from './UserTable';
import { UsersProvider } from './context';

function App() {
  return (
    <MagicProvider>
      <UsersProvider>
        <div
          style={{ backgroundColor: 'black' }}
          className='pb-4 row d-flex align-items-center justify-content-center'>
          <Card
            centered
            style={{ backgroundColor: 'black', color: 'white' }}
            className='p-3 m-2'>
            <h1 className='mainHeader'>MAGIC BULB</h1>
          </Card>

          <div className='faucet'>
            <a
              href='https://icon-faucet.ibriz.ai/'
              rel='noopener noreferrer'
              target='_blank'>
              Testnet ICX Faucet
            </a>
          </div>
        </div>

        <div className='row appContainer pt-3'>
          <div className='col-md-6 col-lg-7 col-sm-12 p-1'>
            <Buttons />
          </div>

          <div className='loginContainer col-md-5 col-lg-4 col-sm-12'>
            <Login />
          </div>
        </div>

        <div className='row d-flex justify-content-center pt-5 pb-5'>
          <div className='col-md-6 col-lg-7 col-sm-12 p-1'>
            <UserTable />
          </div>
        </div>
      </UsersProvider>
    </MagicProvider>
  );
}
export default App;
