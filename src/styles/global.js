import { createGlobalStyle } from 'styled-components';
import devices from '~/styles/config/device';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    user-select: none;
  }

  #root {
    overflow: hidden;
  }

  .toast-container {
    z-index: 10000;

    @media ${devices.mobile} {
      padding: 15px;
      top: 60px;
    }

    .Toastify__toast {
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 1px 2px 0 rgba(0,0,0, 0.1);
    }

    .Toastify__toast--success {
      background-color: #34C759;
    }

    .Toastify__toast--error {
      background-color: #FF3B30;
    }

    .Toastify__toast--warning {
      background-color: #FFCC00;
    }

    .Toastify__toast--info {
      background-color: #5AC8FA;
    }
  }

`;
