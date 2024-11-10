import React from 'react';
import './App.css'; // Optional: You can style your app here.
import Counter from './components/Counter'; // Import the Counter component

function App() {
  return (
    <div className="App">
      <h1>Simple Counter Application</h1>
      <Counter /> {/* Use the Counter component here */}
    </div>
  );
}

export default App;
