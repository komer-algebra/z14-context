import { useState } from 'react'
import ContextName from './components/ContextComponent'
import CountButton from './components/CountButton'
import Paragraph from './components/Paragraph'
import ConsumerParagraph from './components/ConsumerParagraph'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incNum = () => {
    const newCount = count+1;
    setCount(newCount)
  }

  const useless = "beskoristan";

  return (
    <ContextName.Provider value={['čokolade', 3]}>
      <h1>App kao &quot;context provider&quot;</h1>
      <Paragraph korisnost={useless}/>
      <CountButton count={count} setCount={incNum} korisnost={useless} />
      <ConsumerParagraph />
    </ContextName.Provider>
  )
}

export default App
