import React from "react";
import s from './Dialods.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialogitem/DialogsItems";
import Message from "./Message/DialogsMessage";


const Dialogs = (props) => {



    let messageElements = props.state.messages.map( m => <Message message={m.message}/> )

    let dialogsElements = props.state.dialogs.map(  d => <DialogItem name={d.name} id={d.id}/>  )

    let newPostP = React.createRef()

    let PostP = () =>{
        let text = newPostP.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div>
                <textarea ref={newPostP}></textarea>
            </div>
            <div>
                <button onClick={PostP}>add post</button>
            </div>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>)


}
export default Dialogs