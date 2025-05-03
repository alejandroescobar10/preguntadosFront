import { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const [stage, setStage] = useState('home');
  const [tema, setTema] = useState('');
  const [preguntas, setPreguntas] = useState([]);
  const [puntaje, setPuntaje] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {stage === 'home' && <Home setStage={setStage} setTema={setTema} setPreguntas={setPreguntas} />}
      {stage === 'quiz' && <Quiz preguntas={preguntas} setStage={setStage} setPuntaje={setPuntaje} tema={tema} />}
      {stage === 'result' && <Result puntaje={puntaje} preguntas={preguntas} tema={tema} />}
    </div>
  );
}

export default App;
