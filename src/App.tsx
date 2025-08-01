import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import ChatContainer from './components/ChatContainer/ChatContainer';

interface AppProps {
  userId?: string;
  token?: string;
}

function App({ userId, token }: AppProps) {
  return (
    <Provider store={store}>
      <ChatContainer userId={userId} token={token} />
    </Provider>
  );
}

export default App;
