import { useState } from 'react';
import ContextName from './components/ContextComponent';
import CountButton from './components/CountButton';
import Paragraph from './components/Paragraph';
import ConsumerParagraph from './components/ConsumerParagraph';

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const useless = "beskoristan";

  return (
    <ContextName.Provider value={['čokolade', 3]}>
      <h1>App kao &quot;context provider&quot;</h1>

      <h2>Četiri različita elementa ugniježđena u App-u</h2>
      <Paragraph korisnost={useless}>
        <ConsumerParagraph />
      </Paragraph>
      <CountButton count={count}
      incCount={() => { setCount(count => count +1 ) }} korisnost={useless} />

      <h2>Četiri ugniježđena elementa (jedan u drugom):</h2>
      <Paragraph korisnost="unutar app-a">
        <Paragraph korisnost="unutar paragraph-a unutar app-a">
          <Paragraph korisnost="unutar paragraph-a unutar paragraph-a unutar app-a">
            <ConsumerParagraph />
          </Paragraph>
        </Paragraph>
      </Paragraph>
    </ContextName.Provider>
  );
}

export default App;
