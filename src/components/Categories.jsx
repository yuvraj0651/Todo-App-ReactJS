import "./Categories.css";

const Categories = ({ onSelectedCategory, onSetSelectedCategory }) => {
    return (
        <>
            <div className="categories-tab__body">
                <div className="categories-tab__inner">
                    <select name="categories" id="categories-bar"  value={onSelectedCategory} onChange={(e) => onSetSelectedCategory(e.target.value)}>
                        <option value="select-status" hidden>Select Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="In-progress">In Progress</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Categories