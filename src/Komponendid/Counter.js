import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // Initialize state variable 'count'

    // Function to change the counter value
    const changeCounter = (change) => {
        setCount(count + change); // Update the count by adding the 'change' value
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            {/* Buttons to modify the counter */}
            <button onClick={() => changeCounter(-1)}>Decrement by 1</button>
            <button onClick={() => changeCounter(1)}>Increment by 1</button>
            <button onClick={() => changeCounter(-count)}>Reset</button>
        </div>
    );
};

export default Counter;
