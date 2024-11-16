const fs = require('fs');

// Leer el archivo JSON y convertirlo en un objeto JavaScript
const readJson = fs.readFileSync('proyectos.json', 'utf8');
const data = JSON.parse(readJson);

function findProject(data, id) {
  for (let key in data) {
    if (data[key].id === id) {
      return data[key];
    }
  }
  return null;
}

// Función para calcular la diferencia en días entre la fecha actual y la fecha límite de una tarea
function diasRestantes(fechaProyecto) {
  const myDate = new Date();
  const endDate = new Date(fechaProyecto);
  const timeDiff = endDate - myDate;
  return Math.max(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)), 0); // Convertir de milisegundos a días y evitar negativos
}

// Encontrar el proyecto
const project = findProject(data, 2);

if (project) {
  // Calcular los días restantes acumulados por estado de tarea
  const GroupTask = project.tareas.reduce((count, task) => {
    if (task.status === "pendiente" || task.status === "en progreso") {
      const daysRemaining = diasRestantes(task.fecha_limite);

      // Si el estado no existe en el objeto, inicialízalo a 0
      if (!count[task.status]) {
        count[task.status] = 0;
      }
      // Acumular los días restantes
      count[task.status] += daysRemaining;
    }
    return count;
  }, {});

  console.log(`Tiempo restante en días por estado:`, GroupTask);
} else {
  console.log("Proyecto no encontrado");
}
