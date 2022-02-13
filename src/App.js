import {Fragment, useState} from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';

export default () => {
  const [counters, setCounter] = useState([{value: 0, id: 1},{ value: 2, id: 2}]),
  handleDelete = i => {
      setCounter(counters.filter(({id})=> id !== i));
  },
  handleReset = () => {
      setCounter(counters.map(counter => { 
          counter.value = 0
          return counter;
      }));
  },
  handleIncrement = counter => {
      const setCounters = [...counters],
      index = setCounters.indexOf(counter);
      setCounters[index].value++
      setCounter(setCounters);
  }
  return (
   <Fragment>
     <Navbar totalCounters = {counters.filter(({value}) => value).length}/>
       <main className='container'>
         <Counters 
         onDelete = {handleDelete} 
         onReset = {handleReset}
         onIncrement = {handleIncrement}
         counters = {counters}
         />
       </main>
   </Fragment>
  );
};
