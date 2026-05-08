import { useState } from "react";

function Counter() {
    const[count, setCount] = useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    const reset = () => setCount(0)

    return (
        <div className="container">
            <div className="title">React Counter Application</div>

            <h1 className="display">{count}</h1>

            <div className="buttons">
                <button className="inc" onClick={increment}>INCREMENT +</button>
                <button className="dec" onClick={decrement}>DECREMENT -</button>
                <button className="reset" onClick={reset}>RESET</button>
            </div>


        </div>
    )
}

export default Counter