const fs = require('fs');
const path = require('path');

const proyectos = {
  proyectoZero: {
    id: 1,
    nombre: "Proyecto Zero to the Moon",
    fecha_inicio: "2024-11-30",
    tareas: [
      {
        status: "pendiente",
        fecha_limite: "2024-12-31",
        descripcion: "Ir a la luna",
        id: 1
      },
      {
        status: "en progreso",
        fecha_limite: "2024-11-30",
        descripcion: "Comprar un boleto en Space-xyz",
        id: 2
      },
      {
        status: "pendiente",
        fecha_limite: "2025-01-10",
        descripcion: "Preparar al equipo de astronautas",
        id: 3
      },
      {
        status: "completada",
        fecha_limite: "2024-12-17",
        descripcion: "Reunión con científicos para planeación",
        id: 4
      },
      {
        status: "pendiente",
        fecha_limite: "2024-11-17",
        descripcion: "Realizar simulación de aterrizaje lunar",
        id: 5
      },
      {
        status: "pendiente",
        fecha_limite: "2025-03-15",
        descripcion: "Pruebas de equipo de comunicación en el espacio",
        id: 6
      },
      {
        status: "pendiente",
        fecha_limite: "2025-04-01",
        descripcion: "Capacitar a la tripulación en protocolos de emergencia",
        id: 7
      }
    ]
  },
  proyectoUno: {
    id: 2,
    nombre: "Proyecto Oceanus",
    fecha_inicio: "2024-10-15",
    tareas: [
      {
        status: "completada",
        fecha_limite: "2024-10-20",
        descripcion: "Explorar la fosa de las Marianas",
        id: 1
      },
      {
        status: "pendiente",
        fecha_limite: "2024-11-17",
        descripcion: "Recolectar muestras del coral Rojo",
        id: 2
      },
      {
        status: "en progreso",
        fecha_limite: "2024-11-17",
        descripcion: "Analizar calidad del agua",
        id: 3
      },
      {
        status: "pendiente",
        fecha_limite: "2025-01-15",
        descripcion: "Preparar el informe de la biodiversidad",
        id: 4
      },
      {
        status: "pendiente",
        fecha_limite: "2025-02-20",
        descripcion: "Realizar mapeo del ecosistema submarino",
        id: 5
      },
      {
        status: "pendiente",
        fecha_limite: "2025-03-10",
        descripcion: "Establecer comunicación con científicos marinos",
        id: 6
      },
      {
        status: "pendiente",
        fecha_limite: "2025-04-05",
        descripcion: "Instalar sensores para monitoreo de temperatura",
        id: 7
      }
    ]
  },
  proyectoDos: {
    id: 3,
    nombre: "Proyecto Solar",
    fecha_inicio: "2024-09-05",
    tareas: [
      {
        status: "en progreso",
        fecha_limite: "2024-11-15",
        descripcion: "Instalar paneles solares en la ciudad",
        id: 1
      },
      {
        status: "pendiente",
        fecha_limite: "2024-11-17",
        descripcion: "Realizar talleres de energía renovable",
        id: 2
      },
      {
        status: "pendiente",
        fecha_limite: "2024-11-17",
        descripcion: "Evaluar quemaduras en la piel por el sol",
        id: 3
      },
      {
        status: "completada",
        fecha_limite: "2024-10-05",
        descripcion: "Estudio de viabilidad para paneles solares",
        id: 4
      },
      {
        status: "pendiente",
        fecha_limite: "2025-02-01",
        descripcion: "Inspeccionar el eclipse solar",
        id: 5
      },
      {
        status: "pendiente",
        fecha_limite: "2025-03-01",
        descripcion: "Calibrar equipos de monitoreo solar",
        id: 6
      },
      {
        status: "pendiente",
        fecha_limite: "2025-04-01",
        descripcion: "Revisión de instalaciones para maximizar eficiencia",
        id: 7
      }
    ]
  },
  proyectoCuatro: {
    id: 4,
    nombre: "Proyecto Terra",
    fecha_inicio: "2024-08-01",
    tareas: [
      {
        status: "completada",
        fecha_limite: "2024-08-15",
        descripcion: "Plantar 2 árboles y un bonsai",
        id: 1
      },
      {
        status: "en progreso",
        fecha_limite: "2024-11-17",
        descripcion: "Crear conciencia ecológica en la comunidad",
        id: 2
      },
      {
        status: "pendiente",
        fecha_limite: "2024-12-20",
        descripcion: "Organizar un evento de reforestación",
        id: 3
      },
      {
        status: "pendiente",
        fecha_limite: "2025-01-15",
        descripcion: "Contemplar el abismo",
        id: 4
      },
      {
        status: "pendiente",
        fecha_limite: "2025-03-01",
        descripcion: "Monitorear crecimiento de árboles plantados",
        id: 5
      },
      {
        status: "pendiente",
        fecha_limite: "2025-03-15",
        descripcion: "Realizar análisis de suelo",
        id: 6
      },
      {
        status: "pendiente",
        fecha_limite: "2024-11-17",
        descripcion: "Implementar sistema de riego automático",
        id: 7
      }
    ]
  }
};

// Convertir el objeto a JSON
const jsonToString = JSON.stringify(proyectos, null, 2);

// Guardar el JSON en un archivo
fs.writeFileSync(path.join(__dirname, 'proyectos.json'), jsonToString);

console.log("Archivo JSON se ha creado exitosamente :)");


