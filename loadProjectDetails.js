const fs = require('fs');

// Leer el archivo JSON y convertirlo en un objeto JavaScript
const readJson = fs.readFileSync('proyectos.json', 'utf8');
const data = JSON.parse(readJson);

// Función para simular la carga de detalles de un proyecto de forma asíncrona
async function cargarDetallesProyecto(id) {
  return new Promise((resolve, reject) => {
    // Simulamos un retraso en la solicitud con setTimeout
    setTimeout(() => {
      const proyecto = Object.values(data).find(proyecto => proyecto.id === id);

      if (proyecto) {
        resolve(proyecto); // Proyecto encontrado, resolvemos la promesa
      } else {
        reject(`Proyecto con ID ${id} no encontrado`); // Proyecto no encontrado, rechazamos la promesa
      }
    }, 5000); // Simula un retraso de 5 segundos
  });
}

// Usar la función con async y await
async function main() {
  try {
    const detallesProyecto = await cargarDetallesProyecto(4); // Cambia el ID según el proyecto que quieras cargar
    console.log("Detalles del proyecto cargados:", detallesProyecto);
  } catch (error) {
    console.error("Error al cargar detalles del proyecto:", error);
  }
}

// LLamarla
main();
