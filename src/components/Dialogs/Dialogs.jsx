import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <div className={s.dialog}>
                    <NavLink to="/dialogs/1"> Vasiliy </NavLink>
                </div>

                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Alexey</NavLink>
                </div>

                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Ignat</NavLink>
                </div>

                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Evgeniy</NavLink>
                </div>

                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Sergey</NavLink>
                </div>

                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Oleg</NavLink>
                </div>

                <div className={s.dialog}>
                    <NavLink to="/dialogs/7">Vyacheslav</NavLink>
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.dialog}>hi</div>
                <div className={s.dialog}>how are you?</div>
                <div className={s.dialog}>it so fucking good</div>
            </div>
        </div>
    )
}
export default Dialogs;