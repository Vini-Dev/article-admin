import React from 'react';
import { useSelector } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';
import { ToastContainer } from 'react-toastify';
import { IoIosClose } from 'react-icons/io';
import { usePromiseTracker } from 'react-promise-tracker';
import TopLoadBar from '~/components/Material/TopLoadBar';
import ModalDeleteProvider from '~/components/ModalDelete';
import light from '~/styles/theme/light';
import dark from '~/styles/theme/dark';

import Routes from './routes/index';
import GlobalStyle from './styles/global';

const history = createBrowserHistory();

const App = () => {
  const theme = useSelector(state => state.theme);

  const { promiseInProgress } = usePromiseTracker();

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <Router history={history}>
        <ModalDeleteProvider>
          <TopLoadBar loading={promiseInProgress} />
          <ToastContainer
            position="top-right"
            className="toast-container"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
            closeButton={
              <>
                <IoIosClose size={24} />
              </>
            }
          />
          <GlobalStyle />
          <Routes />
        </ModalDeleteProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
