import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import Stats from './Components/Stats';

const initialState = [
   {
      id: 1,
      count: 0,
   },
   {
      id: 2,
      count: 0,
   },
];

function App() {
   const [state, setState] = useState(initialState);

   //  total counter
   const totalCounter = () => {
      return state.reduce((total, counter) => total + counter.count, 0);
   };

   // increment
   const increment = (id) => {
      const updatedState = state.map((c) => {
         if (c.id === id) {
            return {
               ...c,
               count: c.count + 1,
            };
         }
         return { ...c };
      });

      setState(updatedState);
   };

   // decrement
   const decrement = (id) => {
      const updatedState = state.map((c) => {
         if (c.id === id) {
            return {
               ...c,
               count: c.count - 1,
            };
         }
         return { ...c };
      });
      setState(updatedState);
   };

   return (
      <div className="App">
         {/* heading */}
         <h1> Counter App</h1>

         {state.map((count) => (
            <Counter
               key={count.id}
               id={count.id}
               count={count.count}
               increment={increment}
               decrement={decrement}
            />
         ))}

         <Stats count={totalCounter()} />
      </div>
   );
}

export default App;
