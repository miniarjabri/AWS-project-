import './App.css';
import awsconfig from './aws-exports';
import { amplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify'; // Correct import

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <amplifySignOut /> {/* Use amplifySignOut directly */}
        <h2>My app content</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
