import './Home.css'
// import { useContext } from 'react'
// import CounterContext from "../context/CounterContext"
import ChangeCounter from '../components/ChangeCounter'

// 4 refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext'

// 5 context + complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'



const Home = () => {
  // const {counter} = useContext(CounterContext)
  const { counter } = useCounterContext()

  // context + complexo
  const { color, dispatch } = useTitleColorContext();

  // alterando estate complexo
  const setTitleColor = (color) => {
    dispatch({ type: color })
  }

  return (
    <div className='home'>
      <h1 style={{ color: color }}>HOME</h1>
      <p className='paragrafo'>Valor do contador: {counter}</p>
      {/* Alterando contexto valor */}
      <ChangeCounter />
      {/* alterando contexto complexto */}
      <div className='botoes'>
        <button onClick={() => setTitleColor("BLACK")}>Preto</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home