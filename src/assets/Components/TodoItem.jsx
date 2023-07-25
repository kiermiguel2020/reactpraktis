function TodoItem (props) {
    
    return (
        <>
        <input type="checkbox" />
        <label htmlFor="">{props.taskName}</label>
        </>
    )
}
export default TodoItem