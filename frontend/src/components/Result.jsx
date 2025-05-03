const Result = ({ puntaje, preguntas, tema }) => {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">¡Juego terminado!</h2>
        <p className="mb-2">Tema: <strong>{tema.toUpperCase()}</strong></p>
        <p className="mb-4">Tu puntaje es <strong>{puntaje} / {preguntas.length}</strong></p>
        <button onClick={() => window.location.reload()} className="bg-green-500 text-white py-2 px-4 rounded">
          Jugar de nuevo
        </button>
      </div>
    );
  };
  
  export default Result;
  