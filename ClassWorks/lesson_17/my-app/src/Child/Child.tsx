import React from 'react';

interface Pirat {
    name: string
    age: number
}
interface Props {
    pirat: Pirat
}
function Child(props: Props): JSX.Element {
   const { pirat } = props;
   const { name, age } = pirat;
   return (
       <div>
           <p>Имя: {name}</p>
           <p>Возраст: {age}</p>
       </div>
   );
}

export default Child;
