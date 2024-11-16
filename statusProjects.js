const fs = require('fs');

const readJson = fs.readFileSync('proyectos.json', 'utf8');
const data = JSON.parse(readJson);

// Contar tareas en los diferentes estados
function statusOfTheTask(data) {
  return Object.values(data).reduce((count, proyecto) => {
    proyecto.tareas.forEach(tarea => {
      if (tarea.status === 'pendiente') count.Pendientes += 1;
      else if (tarea.status === 'en progreso') count["En Progreso"] += 1;
      else if (tarea.status === 'completada') count.Completadas += 1;
    });
    return count;
  }, { Pendientes: 0, "En Progreso": 0, Completadas: 0 });
}

console.log(statusOfTheTask(data));

