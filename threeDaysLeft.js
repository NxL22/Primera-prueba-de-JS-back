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

// Función para calcular la diferencia en días entre la fecha actual y la fecha límite de una tarea
function diasRestantes(fechaProyecto) {
  const myDate = new Date();
  const endDate = new Date(fechaProyecto);
  const timeDiff = endDate - myDate;
  return Math.max(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)), 0); // Convertir de milisegundos a días y evitar negativos
}

// Función para obtener las tareas críticas (con 3 días o menos para completarse y que no estén en estado completado)
function obtenerTareasCriticas(tareas) {
  return tareas.filter(tarea => {
    const dias = diasRestantes(tarea.fecha_limite);
    return dias <= 3 && tarea.status !== "completada";
  });
}

// Buscar el proyecto específico
const project = findProject(data, 2);

if (project) {
  // Obtener y mostrar las tareas críticas
  const tareasCriticas = obtenerTareasCriticas(project.tareas);
  console.log("Tareas críticas:", tareasCriticas);
} else {
  console.log("Proyecto no encontrado");
}
