const fs = require('fs');


const readJson = fs.readFileSync('proyectos.json', 'utf8');
const data = JSON.parse(readJson);

function orderAllTasksByDate(data) {
  // Extraer todas las tareas de todos los proyectos
  const todasLasTareas = Object.values(data).flatMap(proyecto => proyecto.tareas);

  // Ordenar todas las tareas por fecha límite
  const tareasOrdenadas = todasLasTareas.sort((a, b) => {
    const fechaA = new Date(a.fecha_limite);
    const fechaB = new Date(b.fecha_limite);
    return fechaA - fechaB;
  });

  return tareasOrdenadas;
}

console.log(orderAllTasksByDate(data));
