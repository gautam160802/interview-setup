// // Implement a Counter in React
// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Counter: {count}</h2>
//       <button onClick={handleIncrement}>+</button>
//       <button onClick={handleIncrement} style={{ marginLeft: "10px" }}>
//         -
//       </button>
//     </div>
//   );
// }

// import React, { useState } from "react";
// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);
//   const decrement = () => {
//     if (count > 0) setCount(count - 1);
//   };

//   return (
//     <div>
//       <h2>Counter: {count} </h2>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement} style={{ marginLeft: "10px" }}>
//         -
//       </button>
//     </div>
//   );
// }

// export default Counter;

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
