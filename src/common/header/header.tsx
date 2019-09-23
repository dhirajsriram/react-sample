import React from 'react'
import { increment } from "../../store/action";
import { useDispatch, useSelector } from 'react-redux';

interface Props { }
interface State {
    renameReducer: number
}
function Header(props: Props) {
    
    return (
        <div>
        <button>+</button>
        </div>
    )
}

export default Header
