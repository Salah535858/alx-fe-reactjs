// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <div className="App">
            <Header />
            <MainContent />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <Footer />
        </div>
    );
}

export default App;
// src/App.jsx
import React from 'react';
import WelcomeMessage from './WelcomeMessage'; // Ensure the path is correct

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to My React App!</h1>
      <WelcomeMessage /> {/* Renders the imported component */}
    </div>
  );
}

export default App;
