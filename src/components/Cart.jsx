import { useSelector } from "react-redux"

export const Cart = () => {

    const counter = useSelector(state => state.counter)
    return (
        <>
       <div>Counter is: {counter}</div>
        </>
    )
}