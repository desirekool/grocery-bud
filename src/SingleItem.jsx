import { FaTrash } from "react-icons/fa";

const SingleItem = ({id, name, completed, editItem, deleteItem}) => {
    return (
        <div className="single-item">            
            <input type="checkbox" checked={completed} onChange={()=> {editItem(id)}}/>            
            <p style={{
                textTransform: 'capitalize',
                textDecoration: completed && 'line-through',
                }}
            >{name}</p>
            <button type="button" className="btn remove-btn" onClick={() => deleteItem(id)}><FaTrash /></button>
        </div>
    )
};

export default SingleItem;
