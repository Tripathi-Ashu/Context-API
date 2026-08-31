
import Counter from './Counter.jsx'

function Body ({count , setCount}) {


    return (
        <>
        <h1>I am the Blinkit Body </h1>
        <Counter count={count} setCount={setCount}></Counter>
        </>
    )
}

export default Body;
