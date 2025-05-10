import { useState } from "react";

const Quiz = ({ preguntas, setStage, setPuntaje, tema }) => {
  const [respuestas, setRespuestas] = useState({});
  const [index, setIndex] = useState(0);

  const actual = preguntas[index];

  const seleccionarRespuesta = (opcion) => {
    setRespuestas({ ...respuestas, [index]: opcion });
    if (index + 1 < preguntas.length) {
      setIndex(index + 1);
    } else {
      finalizarJuego();
    }
  };

  const finalizarJuego = async () => {
    let puntaje = 0;
    const detalles = preguntas.map((p, i) => {
      const rUsuario = respuestas[i];
      const correcta = p.respuesta_correcta;
      if (rUsuario === correcta) puntaje++;
      return {
        pregunta: p.pregunta,
        respuesta_usuario: rUsuario,
        respuesta_correcta: correcta,
      };
    });

    setPuntaje(puntaje);
    await fetch("https://preguntados-back-theta.vercel.app/api/guardar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tema, preguntas: detalles, puntaje }),
    });

    setStage("result");
  };

  return (
    <div className="w-full max-w-xl bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Pregunta {index + 1}</h2>
      <p className="mb-4">{actual.pregunta}</p>
      <div className="grid gap-2">
        {Object.entries(actual.opciones).map(([letra, texto]) => (
          <button
            key={letra}
            onClick={() => seleccionarRespuesta(letra)}
            className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded text-left"
          >
            <strong>{letra}.</strong> {texto}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
