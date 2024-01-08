import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';

const Form = ({addItem}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) {
            toast.error("Empty Value, please provide value");
            return;
        }        
        const newItem = {id: uuid(), name: value, completed: false};
        addItem(newItem);
        setValue('');
      };
  
  return (
    <section className='container'>
      <form className='color-form' onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className='form-control'>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)}          />
            <button className='btn' type='submit'>add item</button>
        </div>
      </form>
    </section>
  );
};
export default Form;