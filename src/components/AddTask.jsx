import React, { useState } from 'react';
import './AddTask.css';
import Button from './Button.jsx';

const AddTask = ({handleTaskAddiction}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }
    const handleAddTaskClick = () => {
        handleTaskAddiction(inputData)
        setInputData('')
    }
    return ( 
    
        <div className='add-task-container'>
              <input onChange={handleInputChange} type="text" className='add-task-input' />
                <div className="add-task-button-container">
               <Button onClick={handleAddTaskClick}>Adicionar</Button>    
               </div>
            </div>
     );
}
 
export default AddTask;