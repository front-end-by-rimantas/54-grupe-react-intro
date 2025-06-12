import style from './Todo.module.css';

export function Todo() {
    return (
        <div className={style.todo}>
            <p className={style}>CONTENT</p>
            <button className={style.btn}>Click me</button>
        </div>
    );
}
