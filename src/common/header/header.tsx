import React from 'react'
import { increment } from "../../store/action";
import { useDispatch, useSelector } from 'react-redux';

interface Props { }
interface State {
    renameReducer: number
}
function Header(props: Props) {
    const counter = useSelector((state: State) => state)
    const dispatch = useDispatch();
    
    return (
        <div>{counter.renameReducer}
        <button onClick={()=>dispatch(increment())}>+</button>
        </div>
    )
}

export default Header
