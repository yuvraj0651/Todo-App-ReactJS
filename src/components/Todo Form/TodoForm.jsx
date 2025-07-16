import React, { useEffect, useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ todoFormData, setTodoData, editTodo, setEditTodo }) => {

    const [todo, setTodo] = useState("");
    const [status, setStatus] = useState("Pending")

    useEffect(() => {
        if (editTodo) {
            setTodo(editTodo.todoName)
        }
    }, [editTodo])

    console.log(todoFormData);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todo.trim() === "") {
            alert("Please enter an todo data");
            return
        }

        if (editTodo) {
            setTodoData((prevState) =>
                prevState.map((item) =>
                    item.id === editTodo.id ? { ...item, todoName: todo, status: status } : item
                )
            );
            setEditTodo(null);
            setStatus(editTodo.status)
            setTodo("");
            return;
        }


        let newTodo = {
            id: crypto.randomUUID(),
            todoName: todo,
            status: status
        }

        console.log(newTodo)

        setTodoData((prevState) => [...prevState, newTodo]);

        setTodo(""); 
        setStatus("Pending")

        console.log(todoFormData);
    };

    return (
        <>
            <div className="todo-form__container">
                <div className="todo-form__inner">
                    <div className="todo-form__header">
                        <h1 className="todo-heading">to-do app</h1>
                    </div>
                    <div className="todo-form__body">
                        <h4 className="todo-form-subheading">My Tasks - </h4>
                        <form className="todo-form__input" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="inputBox"
                                value={todo}
                                onChange={(e) => setTodo(e.target.value)}
                            />
                            <button type="submit" className="todo-btn">{editTodo ? "Save" : "Add"}</button>
                        </form>
                        <div className="categories-select-box">
                            <select name="categories" id="categories-bar" value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="select-status" hidden>Select Status</option>
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                                <option value="In-progress">In Progress</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default TodoForm;
