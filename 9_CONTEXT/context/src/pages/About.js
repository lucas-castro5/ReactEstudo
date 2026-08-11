// import { useContext } from "react"
// import CounterContext from "../context/CounterContext"
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";
const About = () => {
  const { counter } = useCounterContext();
  // context + complexo
    const { color } = useTitleColorContext();
  return (
    <div>
      <h1 style={{color : color}}>
        ABOUT
      </h1>
      <p>
        Valor do countador: {counter}
      </p>
    </div>
  )
}

export default About