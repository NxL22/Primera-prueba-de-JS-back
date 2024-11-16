const fs = require('fs'); 


// Leer el archivo JSON y convertirlo en un objeto JavaScript
const readJson = fs.readFileSync('proyectos.json', 'utf8'); // Lee el contenido del archivo 'proyectos.json'
const data = JSON.parse(readJson); // Convierte el contenido en un objeto JavaScript
console.log("Contenido inicial del archivo JSON:", data); // Muestra el contenido inicial del JSON

// Objeto de la tarea que queremos agregar al proyecto
const objTarea = {
  status: "pendiente",
  fecha_limite: "2024-12-12",
  descripcion: "Bañar a taquito antes de irme a la Luna"
};

// Función para agregar una tarea a un proyecto específico
function agregarTarea(proyecto, task) {
  console.log(`Agregando tarea al proyecto: ${proyecto}`); // Indica en qué proyecto se agregará la tarea

  const taskWithId = generateId(proyecto, task); // Genera un ID único para la nueva tarea
  console.log("Tarea generada con ID:", taskWithId); // Muestra la tarea con su ID asignado

  data[proyecto].tareas.push(taskWithId); // Agrega la nueva tarea al array de tareas del proyecto
  console.log(`Nueva lista de tareas en ${proyecto}:`, data[proyecto].tareas); // Muestra las tareas actualizadas

  const dataToJson = JSON.stringify(data, null, 2); // Convierte el objeto actualizado en una cadena JSON con formato
  fs.writeFileSync('proyectos.json', dataToJson, 'utf8'); // Sobrescribe el archivo con los datos actualizados
  console.log("Archivo JSON actualizado correctamente."); // Indica que el archivo ha sido actualizado
}

// Función para generar un ID único para una nueva tarea
function generateId(proyecto, task) {
  console.log(`Generando ID para una nueva tarea en el proyecto: ${proyecto}`); // Indica en qué proyecto se generará el ID

  // Encuentra el ID más alto entre las tareas existentes
  const lastTaskId = data[proyecto].tareas.reduce((max, tarea) => {
    console.log(`Revisando tarea con ID: ${tarea.id}`); // Muestra el ID de cada tarea durante la revisión
    return tarea.id > max ? tarea.id : max; // Actualiza el máximo si el ID actual es mayor
  }, 0);

  task.id = lastTaskId + 1; // Asigna un ID único sumando 1 al ID más alto
  console.log(`Nuevo ID generado: ${task.id}`); // Muestra el nuevo ID generado
  return task; // Devuelve la tarea con el ID asignado
}

// Llamada a la función para agregar una tarea a un proyecto específico, como "proyectoZero"
agregarTarea("proyectoZero", objTarea); // Agrega la tarea al proyecto "proyectoZero"
