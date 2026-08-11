import { useContext } from "react";
import CounterContext from "../context/CounterContext";
import "./ChangeCounter.css"


const ChangeCounter = () => {
    const {counter,setCounter} = useContext(CounterContext);

    return (
        <div className="botoes">
            <button onClick={()=> setCounter(counter +1)}>Adicione valor ao counter</button>
            <button onClick={()=> setCounter(counter -1)}>Retire valor ao counter</button>
        </div>
    )
}

export default ChangeCounter