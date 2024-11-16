const fs = require('fs');

// Clase para manejar notificaciones de tareas
class TaskNotifications {
  constructor() {
    this.listeners = {}; // Objeto para almacenar eventos y sus suscriptores
  }

  // Método para leer y parsear el archivo JSON
  readData(filePath) {
    const readJson = fs.readFileSync(filePath, 'utf8'); // Lee el contenido del archivo
    return JSON.parse(readJson); // Convierte el contenido en un objeto JavaScript
  }

  // Método para escribir datos en el archivo JSON
  writeData(filePath, data) {
    const jsonData = JSON.stringify(data, null, 2); // Convierte el objeto actualizado a formato JSON
    fs.writeFileSync(filePath, jsonData, 'utf8'); // Escribe los datos en el archivo
  }

  // Método para suscribirse a un evento
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = []; // Inicializa el evento si no existe
    }
    this.listeners[event].push(callback); // Agrega la función callback a la lista de suscriptores
  }

  // Método para emitir un evento y notificar a los suscriptores
  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => callback(data)); // Llama a cada función suscrita al evento
    }
  }
}

// Instancia del sistema de notificaciones
const notifications = new TaskNotifications();

// Leer los datos del JSON
const filePath = 'proyectos.json';
const data = notifications.readData(filePath); // Asegúrate de que el archivo existe y tiene el formato correcto

// Función para completar una tarea y notificar a los suscriptores
function completeTask(project, taskId) {
  const task = data[project].tareas.find(tarea => tarea.id === taskId); // Encuentra la tarea por su ID en el proyecto
  if (task) {
    task.status = "completada"; // Actualiza el estado de la tarea
    console.log(`Tarea completada: ${task.descripcion}`); // Muestra un log indicando la tarea completada
    notifications.writeData(filePath, data); // Escribe los datos actualizados en el archivo JSON
    notifications.emit("taskCompleted", task); // Emite el evento "taskCompleted" y pasa la tarea como datos
  } else {
    console.error("Tarea no encontrada."); // Muestra un error si la tarea no existe
  }
}

// Suscripción a notificaciones de tareas completadas
notifications.on("taskCompleted", task => {
  console.log(`Notificación: Se completó la tarea "${task.descripcion}" con ID: ${task.id}`);
});

// Completar una tarea
completeTask("proyectoZero", 2); // Elige el ID
