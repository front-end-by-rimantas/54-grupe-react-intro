import { useEffect, useRef, useState } from 'react';
import style from './Todo.module.css';
import { randomNumber } from '../../lib/randomNumber';
import { TodoItem } from './TodoItem';

export function Todo() {
    const storageKey = '54gr_todo';

    const [todoList, setTodoList] = useState(null);
    const [text, setText] = useState('');
    const inputRef = useRef();

    // komponentui uzsikrovus
    useEffect(() => {
        try {
            const data = JSON.parse(localStorage.getItem(storageKey));
            if (data) {
                setTodoList(() => data);
            } else {
                setTodoList(() => []);
            }
        } catch (error) {
            console.log(error);
            setTodoList(() => []);
        }
    }, []);

    // keiciantis konkreciam state
    useEffect(() => {
        if (todoList === null) {
            return;
        }

        localStorage.setItem(storageKey, JSON.stringify(todoList));
    }, [todoList]);

    function handleInputChange(e) {
        setText(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        if (!text) {
            return;
        }
        console.log(todoList);

        setTodoList(list => [{ id: randomNumber(1, 1e6), text }, ...list]);
        setText(() => '');
        inputRef.current.focus();
    }

    function handleDeleteClick(id) {
        setTodoList(list => list.filter(item => item.id !== id));
    }

    function handleTextUpdate(id, newText) {
        setTodoList(() => todoList.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
    }

    return (
        <div className={style.todo}>
            <form onSubmit={handleFormSubmit} className={style.form}>
                <input ref={inputRef} onChange={handleInputChange} value={text} className={style.input} type="text" />
                <button className={style.btn} type="submit">Create</button>
            </form>
            <ul className={style.ul}>
                {todoList && todoList.map(todo =>
                    <TodoItem key={todo.id} data={todo}
                        handleDeleteClick={handleDeleteClick}
                        handleTextUpdate={handleTextUpdate} />)}
            </ul>
        </div>
    );
}
