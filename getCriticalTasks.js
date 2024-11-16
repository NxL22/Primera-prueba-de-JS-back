const fs = require('fs');

// Leer el archivo JSON y convertirlo en un objeto JavaScript
const readJson = fs.readFileSync('proyectos.json', 'utf8');
const data = JSON.parse(readJson);

// Función para encontrar el proyecto por ID
function findProject(data, id) {
  for (let key in data) {
    if (data[key].id === id) {
      return data[key];
    }
  }
  return null;
}

// Función para calcular los días restantes entre la fecha actual y la fecha límite
function diasRestantes(fechaProyecto) {
  const myDate = new Date();
  const endDate = new Date(fechaProyecto);
  const timeDiff = endDate - myDate;
  return Math.max(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)), 0); // Evitar días negativos
}

// Función para obtener las tareas críticas
function getCriticalTasks(tareas) {
  return tareas.filter(tarea => {
    const dias = diasRestantes(tarea.fecha_limite);
    return dias <= 3 && tarea.status !== "completada";
  });
}

// Encontrar tareas críticas del proyecto
const project = findProject(data, 2); // Cambia el ID según el proyecto

if (project && project.tareas) {
  const tareasCriticas = getCriticalTasks(project.tareas);
  console.log("Tareas críticas del proyecto seleccionado:", tareasCriticas);
} else {
  console.error("Proyecto no encontrado");
}