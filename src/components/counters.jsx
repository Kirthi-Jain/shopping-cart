import {Fragment} from 'react';
import Counter from './counter';

export default ({counters, onDelete, onReset, onIncrement}) => {
    return (
    <Fragment>
    <button onClick = {onReset} className='btn btn-primary btn-sm m-2'>Reset</button>   
    {counters.map(counter => <Counter key={counter.id} counter = {counter} onDelete = {onDelete} onIncrement = {onIncrement}/>)}
    </Fragment>);
    };