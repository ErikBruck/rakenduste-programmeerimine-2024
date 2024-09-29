import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);


    const changeCounter = (change) => {
        setCount(count + change);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => changeCounter(-1)}>Decrement by 1</button>
            <button onClick={() => changeCounter(1)}>Increment by 1</button>
            <button onClick={() => changeCounter(-count)}>Reset</button>
        </div>
    );
};

export default Counter;
