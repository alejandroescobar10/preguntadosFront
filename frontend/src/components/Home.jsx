const temas = ['moda', 'historia', 'ciencia', 'deporte', 'arte'];

const Home = ({ setStage, setTema, setPreguntas }) => {
  const elegirTema = async (tema) => {
    const res = await fetch(`http://localhost:5000/api/preguntas/${tema}`);
    const data = await res.json();
    setTema(tema);
    setPreguntas(data.preguntas);
    setStage('quiz');
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Elige una categoría</h1>
      <div className="grid grid-cols-2 gap-4">
        {temas.map((t) => (
          <button
            key={t}
            onClick={() => elegirTema(t)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
