import React, { useState } from "react";

// Si utilizzano le props per passare informazioni ad un componente
// Il loro contenuto non deve essere alterato dal componente
export const Counter = (props) => {
    // useState() hook che si occupa della memorizzazione e dela gestione dell'evoluzione di uno stato 
   let [count, setCount ] = useState(0);
  
    // Un componente React restituisce un albero JSX
    return (
      <div className = "counter" >
          <h2> Contatore </h2>
          <div className="valueCounter"> {count} </div>
          <button onClick = { () => setCount(count+1) }> + </button>
          <button onClick = { () => setCount(count-1) }> - </button>
      </div>
    );
  }


