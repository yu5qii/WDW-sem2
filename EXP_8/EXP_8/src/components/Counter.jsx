import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);      //setting a default state

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div>
            <h2>React counter application</h2>

            <h2>{count}</h2>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>

        </div>
    )
}

export default Counter