import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import firebaseConfig from "./firebase.config.js";
import { ContextApi } from "./components/ContextApi.jsx";

createRoot(document.getElementById('root')).render(
  <ContextApi>
    <App />
  </ContextApi>

);
