import React from "react";
import s from './Dialods.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Mark" id="1"/>
                <DialogItem name="Anna" id="2"/>
                <DialogItem name="Aleksandr" id="3"/>
                <DialogItem name="Nikita" id="4"/>
                <DialogItem name="Oleg" id="5"/>
                <DialogItem name="Valera" id="6"/>

            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your MMM"/>
                <Message message="yo"/>
                <Message message="yo"/>
                <Message message="yo"/>
            </div>
        </div>)


}
export default Dialogs