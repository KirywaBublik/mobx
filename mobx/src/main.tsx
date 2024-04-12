import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import UserStore from './store/userStore'

interface State {
  store: UserStore
}


const store = new UserStore();

export const context = createContext<State>({
  store,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <context.Provider value={{
      store
    }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </context.Provider>
  </React.StrictMode>,
)
