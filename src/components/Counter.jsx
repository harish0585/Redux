import {useSelector, useDispatch} from "react-redux";
import { decCounter, incCounter } from "../Redux/actions";

export const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const handleAdd = () => { dispatch(incCounter(1))}
    const handleRed = () => {
        if(counter === 0)
        return 
        dispatch(decCounter(1))}

    return (
        <>
        <div>Counter is: {counter}</div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRed}>Red</button>
        </>
    )
}