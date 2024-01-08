import SingleItem from "./SingleItem";
import {v4 as uuid} from 'uuid';

const Items = ({items, editItem, removeItem}) => {
    
    return (
        <div className="items">
            {items.map(item => 
                <SingleItem 
                    {...item} 
                    key={item.id} 
                    editItem={editItem}
                    deleteItem={removeItem}
                />)}
        </div>
    )
};

export default Items;
