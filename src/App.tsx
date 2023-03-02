import { Provider } from 'react-redux/es/exports'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store';

function App() {
  return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
  )
}

export default App
