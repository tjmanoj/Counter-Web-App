// dependencies

import Count from './Count';

const Counter = ({ id, count, increment, decrement }) => {
   return (
      <div>
         <Count count={count} />
         <button onClick={() => increment(id)}>Increment</button>{' '}
         <button onClick={() => decrement(id)}>Decrement</button>
      </div>
   );
};

export default Counter;
