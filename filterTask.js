const fs = require('fs');



function readData(filePath) {
  const readJson = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(readJson);
}

// Bloque de función para agrupar las tareas por estado y proyecto utilizando reduce con mensajes de depuración
function agruparTareasPorEstado(data) {
  return Object.keys(data).reduce((agrupadoPorEstado, nombreProyecto) => {
    const proyecto = data[nombreProyecto];

    // Usamos reduce en las tareas del proyecto
    proyecto.tareas.reduce((account, tarea) => {
      const estado = tarea.status;
      console.log(`  Procesando tarea: ${tarea.descripcion} con estado: ${estado}`);


  // Inicializa el proyecto dentro del estado si no existe
      if (!account[estado][nombreProyecto]) {
        account[estado][nombreProyecto] = {
          id: proyecto.id, // ID del proyecto
          nombre: proyecto.nombre, // Nombre del proyecto
          tareas: [] // Array para almacenar las tareas del proyecto
        };
        console.log(`    Inicializando proyecto dentro del estado "${estado}": ${proyecto.nombre}`); // Depuración
      }

      // Agregar la tarea al proyecto dentro del estado correspondiente
      account[estado][nombreProyecto].tareas.push(tarea);
      console.log(`    Agregando tarea: ${tarea.descripcion} al estado: "${estado}" del proyecto: ${proyecto.nombre}`);

      // Mostrar el estado actual de account después de la modificación
      console.log("    account después de la modificación:", JSON.stringify(account, null, 2));

      return account;
    }, agrupadoPorEstado);

    console.log("Estado de agrupadoPorEstado después de procesar todas las tareas del proyecto:", JSON.stringify(agrupadoPorEstado, null, 2));
    return agrupadoPorEstado;
  }, {
    "pendiente": {},
    "en progreso": {},
    "completada": {}
  });
}

// Bloque de función para mostrar las tareas agrupadas por estado y proyecto
function mostrarTareasAgrupadas(tareasAgrupadas) {
  for (const estado in tareasAgrupadas) {
    console.log(`\nTareas en estado: ${estado.toUpperCase()}`);
    
    for (const nombreProyecto in tareasAgrupadas[estado]) {
      const proyecto = tareasAgrupadas[estado][nombreProyecto];
      console.log(`\nNombre del Proyecto: ${proyecto.nombre.toUpperCase()}`);
      
      proyecto.tareas.forEach(tarea => {
        console.log(`${tarea.descripcion} (ID: ${tarea.id}, Fecha límite: ${tarea.fecha_limite})`);
      });
    }
  }
}

// Función principal que recibe los datos y un callback para agrupar las tareas
function procesarTareas(data) {
  const tareasAgrupadas = agruparTareasPorEstado(data);  // Llamamos al callback para agrupar las tareas
  mostrarTareasAgrupadas(tareasAgrupadas); // Mostramos las tareas agrupadas
}

// Ejecución del código
const data = readData('proyectos.json');  // Leer y parsear 
procesarTareas(data);    // Procesar y mostrar las tareas