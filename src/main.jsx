import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router"
import {Provider} from "react-redux"
import stores from './store/store.js'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={stores}>
  <App />
  </Provider>
  </BrowserRouter>
  
)
