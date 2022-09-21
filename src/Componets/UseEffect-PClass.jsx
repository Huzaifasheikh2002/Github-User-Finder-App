import React, { useState } from 'react'

const UseEffect = () => {
      const [name, setName] = useState("huzaifa")
      const foo = () => {
            console.log("useEffect console");
      };
      foo()
      return (<>
            <h1>{name}</h1>
            <button onClick={() => {
                  setName("Nadeem")
            }}>StateUpdate</button>
      </>)
}

export default UseEffect