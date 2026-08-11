// import { useContext } from "react"
// import CounterContext from "../context/CounterContext"
import { useCounterContext } from "../hooks/useCounterContext";

const Info = () => {
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>INFORMAÇÕES</h1>
      <p>
        Valor do countador: {counter}
      </p>
    </div>
  )
}

export default Info