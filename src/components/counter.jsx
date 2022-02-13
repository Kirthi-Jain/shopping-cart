import {Fragment} from 'react';

export default ({counter,onDelete,onIncrement}) =>{
          const {value, id} = counter,
          formatCount = () => value || "Zero",
          getClassForCounter = () => {
            let classes = 'badge m-2 badge-';
            return value ? classes + "primary" : classes + "warning";
          }
   return (
    <Fragment>
    <span className={getClassForCounter()}>{formatCount()}</span>
    <button onClick = {()=>onIncrement(counter)} className='btn btn-secondary btn-sm'>Increment</button> 
    <button onClick = {() => onDelete(id)} className='btn btn-danger btn-small m-2'>Delete</button>
    </Fragment>
   );
};
 

        
 
