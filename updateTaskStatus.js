const fs = require('fs');

const readJson = fs.readFileSync('proyectos.json', 'utf8');
const data = JSON.parse(readJson);


function actualizarEstadoTarea(proyectoId, tareaId, nuevoEstado) {
  return new Promise((resolve, reject) => {
    // Simulamos una espera para representar una petición al servidor
    setTimeout(() => {
      const proyecto = data[proyectoId];
      
      if (proyecto) {
        const tarea = proyecto.tareas.find(tarea => tarea.id === tareaId);
        
        if (tarea) {
          // Caso de éxito: actualizamos el estado de la tarea
          tarea.status = nuevoEstado;
          resolve(`Estado de la tarea ${tareaId} actualizado a "${nuevoEstado}"`);
        } else {
          // Error si la tarea no se encuentra
          reject(`Error: Tarea con ID ${tareaId} no encontrada en el proyecto.`);
        }
      } 
    }, 2000); //  Demora de 2 segundo
  });
}


actualizarEstadoTarea("proyectoZero", 1, "completada")
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error(error));
