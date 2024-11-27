import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './store/appStore.js'

createRoot(document.getElementById('root')).render(
  <div className='bg-background'>
  <BrowserRouter>
  <Provider store={appStore}>
    <App />
  </Provider>
  </BrowserRouter>
  </div>
)
