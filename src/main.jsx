import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import firebaseConfig from "./firebase.config.js";
import { ContextApi } from "./components/ContextApi.jsx";
import { Provider } from 'react-redux'
import { store } from './store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ContextApi>
      <App />
    </ContextApi>
  </Provider>

);
