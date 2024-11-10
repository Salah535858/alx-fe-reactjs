import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);  // Initialize state

  return (
    <div>
      <p>Current Count: {count}</p>  // Display the current count
      <button onClick={() => setCount(count + 1)}>Increment</button>  // Increment count
      <button onClick={() => setCount(count - 1)}>Decrement</button>  // Decrement count
      <button onClick={() => setCount(0)}>Reset</button>  // Reset count
    </div>
  );
}

export default Counter;
