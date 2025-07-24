import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import ChatContainer from './components/ChatContainer';

function App() {
  return (
    <Provider store={store}>
      <ChatContainer />
    </Provider>
  );
}

export default App;