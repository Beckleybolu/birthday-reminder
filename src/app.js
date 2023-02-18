import React,{useState} from "react";
import Example from "./example"
import { data } from "./data"




function App(){
const[people, setPeople] = useState(data)

const resetEvent =()=>{
    setPeople([])
}
return(
<main className="content">
<h3>{people.length} birthdays today</h3>
<Example people={people}/>
<button onClick={resetEvent}>Clear All</button>
</main>
    
)
}

export default App