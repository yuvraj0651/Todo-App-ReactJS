import "./TodoList.css";
import Categories from "../Categories";

const TodoList = ({ todoDataList, onDataDelete, setEditTodo, selectedCategory, setSelectedCategory }) => {

    if (todoDataList.length === 0) {
        return (
            <h1 className="fallback-text">No Data To Show</h1>
        )
    }

    return (
        <>
            <Categories onSelectedCategory={selectedCategory} onSetSelectedCategory={setSelectedCategory} />
            {
                todoDataList.map((todoData) => {
                    console.log(todoData.status);
                    return (
                        <div className="card-todo__list" key={todoData.id}>
                            <div className="card-todo__inner">
                                <div className="todo-list__content">
                                    <h1>{todoData.todoName}</h1>
                                    <span className={`todo-status__badge ${todoData.status}`}>{todoData.status}</span>
                                </div>
                                <div className="todo-list__crud__meta">
                                    <button type='button'
                                        className='todo-delete__btn todo-bttn'
                                        onClick={(e) => {
                                            onDataDelete((prevState) => prevState.filter((todoList) => todoList.id !== todoData.id))
                                        }}
                                    >Delete</button>
                                    <button type='button' className='todo-edit__btn todo-bttn'
                                        onClick={(e) => {
                                            setEditTodo(todoData)
                                        }}
                                    >Edit</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TodoList