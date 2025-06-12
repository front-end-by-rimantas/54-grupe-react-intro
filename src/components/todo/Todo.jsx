import style from './Todo.module.css';

export function Todo() {
    return (
        <div className={style.todo}>
            <form className={style.form}>
                <input className={style.input} type="text" />
                <button className={style.btn} type='submit'>Create</button>
            </form>
            <ul className={style.ul}>
                <li className={style.li}>
                    <p className={style.p}>Text</p>
                    <div className={style.actions}>
                        <button className={style.btn}>Delete</button>
                    </div>
                </li>
            </ul>
        </div>
    );
}
