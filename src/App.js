import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm.jsx'

function App() {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <div className="App">
      <ChatEngine 
        height='100vh'
        projectID='0e397b78-2f28-46ba-a23d-87d52b61bd21'
        userName='alek'
        userSecret='qwerty'
        renderChatFeed = { (chatAppProps)  => <ChatFeed {...chatAppProps } />}
        onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play }
      />
    </div>
  );
}

export default App;
