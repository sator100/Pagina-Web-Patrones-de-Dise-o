// Datos de los patrones y ejercicios
const patternsData = [
  // CREACIONALES
  {
    name: "Singleton",
    category: "creational",
    exercises: [
      {
        title: "Ejemplos de singleton con Oraculo",
        description: "Los ejemplos estan en un mismo proyecto.",
        downloadUrl: "https://drive.google.com/file/d/1Nb30gCgzVHLy8MSw7kwzjjiSUi9kJqzV/view?usp=drive_link"
      },
      {
        title: "Ejemplos de singleton con un Guardian de dimensiones",
        description: "Los ejemplos estan en un mismo proyecto.",
        downloadUrl: "https://drive.google.com/file/d/1Nb30gCgzVHLy8MSw7kwzjjiSUi9kJqzV/view?usp=drive_link"
      },
      {
        title: "Ejemplos de singleton con un Boton Existencial",
        description: "Los ejemplos estan en un mismo proyecto.",
        downloadUrl: "https://drive.google.com/file/d/1Nb30gCgzVHLy8MSw7kwzjjiSUi9kJqzV/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Factory Method",
    category: "creational",
    exercises: [
      {
        title: "Generador de Criaturas Mitologicas",
        description: "Genera distintas criaturas mitologicas para una batalla.",
        downloadUrl: "https://drive.google.com/file/d/1m3OjE8Drkfd_6-sayqYTjFK4gLNzvQr0/view?usp=drive_link"
      },
      {
        title: "Ruleta del Caos.",
        description: "un programa que simula una ruleta que crea diferentes tipos de caos.",
        downloadUrl: "https://drive.google.com/file/d/1AsDrNHyAo0O_GF6SqspkZ0zPtlmx0lYZ/view?usp=drive_link"
      },
      {
        title: "Generador de sueños lucidos.",
        description: "programa que genera diferentes sueños.",
        downloadUrl: "https://drive.google.com/file/d/1wNugFdnq2tqwHAXIKfbzc_JM4GFfZlZK/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Abstract Factory",
    category: "creational",
    exercises: [
      {
        title: "Animales Extintos",
        description: "Una empresa de tecnologia se dedica a crear 'IAs' que emulan el comportamiento de animales ya extintos.",
        downloadUrl: "https://drive.google.com/file/d/1pCk7v-R0mRLt5oIJEJEZP_9RGOZ1dWav/view?usp=drive_link"
      },
      {
        title: "Menus gastronomicos interplanetarios",
        description: "Un restaurante interestelar ofrece enus dependiendo del planeta donde sirvan, con bebida y plato fuerte.",
        downloadUrl: "https://drive.google.com/file/d/1IXbYHeXyLkoZhRbp2UmZvHqseIhRcd-d/view?usp=drive_link"
      },
      {
        title: "Mundo de Videojuegos Surrealistas",
        description: "Videojuego con el que se pueden crear mundos y cada uno tiene sus propios enemigos y excenarios.",
        downloadUrl: "https://drive.google.com/file/d/1gGTuRH2yXllVNN8sgq1bpq1fxdno0TTD/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Builder",
    category: "creational",
    exercises: [
      {
        title: "Constructor de Festivales Magicos",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1ATYS1o7fSaWIaHIK5784HcpZey4WBZlR/view?usp=drive_link"
      },
      {
        title: "Constructor de Galletas Magicas",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1QQmlUSPogFqnTh5Er-sQe6IVmgD6JLxD/view?usp=drive_link"
      },
      {
        title: "Constructor de Mazmorras con enemigos",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/1PqT-ZtDTwR35CxPaizDXRrrNBWdoGJOQ/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Prototype",
    category: "creational",
    exercises: [
      {
        title: "Ecos de Realidades",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/10tP8YYK4Jvj4V1DOx3pZW3bQ5lMukyTh/view?usp=drive_link"
      },
      {
        title: "Instrumentos Musicales",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/1wTrItHRDAzeSc7IWTZAfm6AQ4LJ_BVJ6/view?usp=drive_link"
      },
      {
        title: "Generador de NPC",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1pxXpFGuwgOzJWHUzAeLFRIH3ixC2HicT/view?usp=drive_link"
      }
    ]
  },
  // ESTRUCTURALES
  {
    name: "Adapter",
    category: "structural",
    exercises: [
      {
        title: "Adaptador de Candelario Historico",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/1YTY-wlp5wJHknXJReipfhdWfoExJ8nJY/view?usp=drive_link"
      },
      {
        title: "Adaptador de Juguetes magicos",
        description: "---",
        downloadUrl: "https://drive.google.com/file/d/1aHLmDL27MOcg7KO392IvjK8n66kRtS1n/view?usp=drive_link"
      },
      {
        title: "Adaptador de rituales para sistemas espirituales",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1X0_EF5loZN_r29ggAh9SNhpvsl6JflFi/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Bridge",
    category: "structural",
    exercises: [
      {
        title: "Bridge Baños Inteligentes",
        description: "-------",
        downloadUrl: "https://drive.google.com/file/d/1GJ8QBY-wAWKZpJ_aVrWtZufuDo3v8wIu/view?usp=drive_link"
      },
      {
        title: "Bridge Citas de Robots",
        description: "--------",
        downloadUrl: "https://drive.google.com/file/d/1_vhv0hVgv7BCXjAgSp8PYm_Tb3SZ7DCx/view?usp=drive_link"
      },
      {
        title: "Bridge de Pociones Cuanticas",
        description: "-------",
        downloadUrl: "https://drive.google.com/file/d/11aaqCvc6jz45eOYNqf0dx4iXh42JR4Cf/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Composite",
    category: "structural",
    exercises: [
      {
        title: "Estructura de civilizaciones extraterrestres",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/1z2KMULRZH5TVA3zxszYiVN9lVUfMehvY/view?usp=drive_link"
      },
      {
        title: "ADN sintetico con estructuras complejas",
        description: "-------",
        downloadUrl: "https://drive.google.com/file/d/1_1QJ7MOXoiaLjvSptB11gGLOwzQlUvkX/view?usp=drive_link"
      },
      {
        title: "Sistemas de herramientas de productividad",
        description: "-------",
        downloadUrl: "https://drive.google.com/file/d/16mKRCCFW64tqqJ7KU5jaHJq59WrF6qo-/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Decorator",
    category: "structural",
    exercises: [
      {
        title: "Ruta de Meditación personalizada",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/17_3hA62Io9_VhTbBTIpdCcFsIevfc-gB/view?usp=drive_link"
      },
      {
        title: "Mensaje Cifrado con capas de Secreto",
        description: "---",
        downloadUrl: "https://drive.google.com/file/d/1e6qqdyJWScNZmKHS9dRdweW5lvvoWIce/view?usp=drive_link"
      },
      {
        title: "Sistema de eventos historicos reinterpretados",
        description: "---",
        downloadUrl: "https://drive.google.com/file/d/1HEhHN8KaVVnTla2jvyCmmD78bwxi4IHu/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Facade",
    category: "structural",
    exercises: [
      {
        title: "Facade Obra Arte",
        description: "------",
        downloadUrl: "https://drive.google.com/file/d/1nDvVT2lyFOIdlYMhxLZxY7FGdR8SIprp/view?usp=drive_link"
      },
      {
        title: "Facade Conversaciones Incomodas",
        description: "------",
        downloadUrl: "https://drive.google.com/file/d/1sR9Rw3R52HPJpVreumjjhs9DMqkNJCfv/view?usp=drive_link"
      },
      {
        title: "Facade Transformacion de Vampiro a Humano y Viceversa",
        description: "Sistema que oculta la complejidad de múltiples servicios (verificación de disponibilidad, pago, notificaciones) tras una interfaz simple.",
        downloadUrl: "javascript:void(0)"
      }
    ]
  },
  {
    name: "Flyweight",
    category: "structural",
    exercises: [
      {
        title: "Pieza de rompecadezas infinita",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/1eXX-x3xRmovNaYrWj_kP_K-ly_ehxB0G/view?usp=drive_link"
      },
      {
        title: "Plumas en las alas de un Ave",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/1_-d9TFBCwKnn2bymsNvi9ZUSwvre9Nj8/view?usp=drive_link"
      },
      {
        title: "Estrellas en una Galaxia",
        description: "---",
        downloadUrl: "https://drive.google.com/file/d/18P54kYqL3lBKgYFq91MdIn4VtRic_val/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Proxy",
    category: "structural",
    exercises: [
      {
        title: "Libro Maldito",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1PI1w_jc0mjeGuiXCz6ueunjgLkc5SKUs/view?usp=drive_link"
      },
      {
        title: "Proxy de identidad teatral",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1EJAZ5jOTIDMsvsjbIQQ3JqOGUryNgEBK/view?usp=drive_link"
      },
      {
        title: "Proxy hacia el consejo astral",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/11-zc1sk36F2EYDf8sgv4Uca7hNNeu0uo/view?usp=drive_link"
      }
    ]
  },
  // COMPORTAMIENTO
  {
    name: "Chain of Responsibility",
    category: "behavioral",
    exercises: [
      {
        title: "Sistema de Entrega rapida",
        description: "---",
        downloadUrl: "https://drive.google.com/file/d/11w-JgFrgwY6pasJPzwN2LLsw1YrsbbKm/view?usp=drive_link"
      },
      {
        title: "Cadena de aprobación de un perfume sintetico",
        description: "---",
        downloadUrl: "https://drive.google.com/file/d/1-UsMU8ZuoMXcNYa-7EYcX3V26bmReUvn/view?usp=drive_link"
      },
      {
        title: "Cadena de globos que bajen sin explotar",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1ix1OaMpS_4_RkeUmqwbWNFprzKbhOplk/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Command",
    category: "behavioral",
    exercises: [
      {
        title: "Ceremonia del te Automatizada con gestos",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/1vOAslCNhT1TRRYPmc-LZCbN0ggdhnQis/view?usp=drive_link"
      },
      {
        title: "Lavadora Inteligente con comandos por prenda",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1hupS1BEPpQ3zt4laxld2sK1Zmd5Ve0Ba/view?usp=drive_link"
      },
      {
        title: "Comandos tacticos para calamares espias",
        description: "------",
        downloadUrl: "https://drive.google.com/file/d/12HVjDEBmkV0tKZW2YDR5c7B0I--Aoud-/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Iterator",
    category: "behavioral",
    exercises: [
      {
        title: "Iterador de platos según el antojo emocional",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1YzZxc5FmLPoh4yXyL1gYyGlAuBwY2gjI/view?usp=drive_link"
      },
      {
        title: "Iterador de libros que no terminaste ",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/1BEv0LWPyowF3zUkG5r4vOuSybs8HV9l8/view?usp=drive_link"
      },
      {
        title: "Iterador de prendas para climas caoticos",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/1zBjxn8NGJilPE1hzzv-59SrlP6W5x7xx/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Mediator",
    category: "behavioral",
    exercises: [
      {
        title: "Mediador entre órganos del cuerpo humano",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1ZAPsFGgRfMooGwBCClzKRpJLQHDgkvzY/view?usp=drive_link"
      },
      {
        title: "Mediador de apps en un celular",
        description: "---",
        downloadUrl: "https://drive.google.com/file/d/1_JM9ZLb6AZ1S7n3NDeXf8BVxrhFx9GL8/view?usp=drive_link"
      },
      {
        title: "Mediador de maletas en el aropuerto",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/1HRu91J9Sx3yrvzr49BK2FmCe1NQ-9tQv/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Memento",
    category: "behavioral",
    exercises: [
      {
        title: "Memento de un pedido antes de hacer Checkout",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/14hFt9RbV8DkqPLDGhUNz5PlGcK6WY3Ib/view?usp=drive_link"
      },
      {
        title: "Memento de edición no lineal en una pelicula",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/1yRNGX1HO5-JdpHEeG-U3dMpRfScZWWSy/view?usp=drive_link"
      },
      {
        title: "Memento de contraseñas mentales en un juego de escape",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/1STl3bllisVRS4kXLnmSnMGFQDX18lwan/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Observer",
    category: "behavioral",
    exercises: [
      {
        title: "Detector de actividades paranormal",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/134qsQ5SBW-89BsRmqXoBolKmkQUHAWKb/view?usp=drive_link"
      },
      {
        title: "Loro Chismoso en una oficina",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1O6FN6ZP5b0N8HeB9iM6S_YcoHT4dxu96/view?usp=drive_link"
      },
      {
        title: "Wifi de cafeteria que avisa a usuarios cuando baja la señal",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1tZuBFnTXzQEAz21rfts9JSN6fZ1cy_ac/view?usp=drive_link"
      }
    ]
  },
  {
    name: "State",
    category: "behavioral",
    exercises: [
      {
        title: "Estudiante virtual que cambia su forma de estudiar",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1d1hvcQabyuaJSaL67ZvlwYW4jGY4VgDM/view?usp=drive_link"
      },
      {
        title: "Bebida que cambia de sabor según la temperatura",
        description: "---",
        downloadUrl: "https://drive.google.com/file/d/1GLzXNU3ZqayHyRwuo3C4NRq9mpFN2Xtd/view?usp=drive_link"
      },
      {
        title: "Caja fuerte que cambie su nivel de protección",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/12EHjWEdEZDdFv8oy7PNMm2lT6zvdHFsH/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Strategy",
    category: "behavioral",
    exercises: [
      {
        title: "Juego de sigilo con modos de escape animal",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1U7GmA9ONBpTm1kAa2M48ZrZjZJF77C_j/view?usp=drive_link"
      },
      {
        title: "Mapa que cambia rutas según el estado de ánimo del viajero",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1XDNFqhbR1HUBgQhZGnmDXCjcTADtHopA/view?usp=drive_link"
      },
      {
        title: "Maquina tragamonedas con algoritmos de aleatoridad intercambiables",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1J3ZqgjTlZ0s6JCeG10POwd6XuSn89oPt/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Template Method",
    category: "behavioral",
    exercises: [
      {
        title: "Redacción de testamentos según tribu extraterrestre",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1NbL_zUDwmdKswQRxnv3QQ4JJTEsorJoe/view?usp=drive_link"
      },
      {
        title: "Empaque de recuerdos en capsulas del tiempo",
        description: "---",
        downloadUrl: "https://drive.google.com/file/d/1vQE4ZeKu8ra4qafeArWiUqCkr3OHLSAW/view?usp=drive_link"
      },
      {
        title: "Competencia de repostería en gravedad cero",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1-zVEbRw3dUetvGbvtKIQotO0ga-Mm2d9/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Visitor",
    category: "behavioral",
    exercises: [
      {
        title: "Auditorias a empresas ficticias en una simulación",
        description: "----",
        downloadUrl: "https://drive.google.com/file/d/1GjhiR7H7A7T-iSw6CxpA4AseIAVfh_9g/view?usp=drive_link"
      },
      {
        title: "Inspección de objetos de objetos magicos en una biblioteca",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/144BmLP19jlOX4mX1B5UVp9_h90Dowtb6/view?usp=drive_link"
      },
      {
        title: "Interacción con pociones parlantes en un caldero",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/1W7sud3iK7km9n9bkpHivQUunLGgXSZa_/view?usp=drive_link"
      }
    ]
  },
  {
    name: "Interpreter",
    category: "behavioral",
    exercises: [
      {
        title: "Lenguaje de comunicación de células",
        description: "----.",
        downloadUrl: "https://drive.google.com/file/d/1a_7AljJCB_fTJ0kGw3OcqnWPbMbSJ-Jd/view?usp=drive_link"
      },
      {
        title: "Lenguaje de ruinas de una civilización extinta",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/1PpNrQC-CGwCsjO2wKDDTP5EVJsDV2y2_/view?usp=drive_link"
      },
      {
        title: "Lenguaje de comandos de una consola retro invertiva",
        description: "-----",
        downloadUrl: "https://drive.google.com/file/d/1SlUD3R7AzpR-7yrafxLTlvN7QbFelPyx/view?usp=drive_link"
      }
    ]
  }
];

// Renderiza todas las tarjetas de patrones
function renderPatterns(patterns) {
  const container = document.getElementById('patterns-container');
  container.innerHTML = '';
  
  let visibleCount = 0;
  
  patterns.forEach(pattern => {
    visibleCount++;
    const categoryClass = pattern.category;
    const badgeText = pattern.category === 'creational' ? 'Creacional' : 
                    pattern.category === 'structural' ? 'Estructural' : 'Comportamental';
    
    const card = document.createElement('div');
    card.className = `pattern-card ${categoryClass} bg-white overflow-hidden`;
    card.dataset.category = pattern.category;
    
    let exercisesHTML = '';
    pattern.exercises.forEach(exercise => {
      exercisesHTML += `
        <div class="exercise-item pl-4 py-3 border-b border-gray-100 last:border-b-0">
          <h4 class="font-medium text-gray-800 mb-1">${exercise.title}</h4>
          <p class="text-sm text-gray-600 mb-2">${exercise.description}</p>
          <a href="${exercise.downloadUrl}" class="download-btn inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-800">
            <i class="fas fa-download mr-1"></i> Descargar proyecto
          </a>
        </div>
      `;
    });
    
    card.innerHTML = `
      <div class="pattern-header ${categoryClass} px-5 py-4">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-800">${pattern.name}</h3>
          <span class="badge ${categoryClass} text-xs px-2 py-1 rounded text-white font-medium">${badgeText}</span>
        </div>
      </div>
      <div class="pattern-content divide-y divide-gray-100">
        ${exercisesHTML}
      </div>
    `;
    
    container.appendChild(card);
  });
  
  // Mostrar mensaje si no hay resultados
  const noResults = document.getElementById('no-results');
  if (visibleCount === 0) {
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
  }
}

// Inicialización y filtrado
document.addEventListener('DOMContentLoaded', () => {
  // Renderizar todos los patrones al cargar
  renderPatterns(patternsData);
  
  // Configurar búsqueda
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
      // Si la búsqueda está vacía, mostrar según el filtro activo
      const activeFilter = document.querySelector('.filter-btn.active');
      const category = activeFilter.id.replace('filter-', '');
      
      if (category === 'all') {
        renderPatterns(patternsData);
      } else {
        const filtered = patternsData.filter(pattern => pattern.category === category);
        renderPatterns(filtered);
      }
    } else {
      // Filtrar por término de búsqueda
      const filtered = patternsData.filter(pattern => {
        // Buscar en el nombre del patrón
        if (pattern.name.toLowerCase().includes(searchTerm)) {
          return true;
        }
        
        // Buscar en los ejercicios
        return pattern.exercises.some(ex => 
          ex.title.toLowerCase().includes(searchTerm) || 
          ex.description.toLowerCase().includes(searchTerm)
        );
      });
      
      renderPatterns(filtered);
    }
  });
  
  // Configurar botones de filtro
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Quitar clase activa de todos los botones
      filterButtons.forEach(btn => btn.classList.remove('active', 'bg-blue-600', 'text-white'));
      
      // Añadir clase activa al botón clickeado
      button.classList.add('active', 'bg-blue-600', 'text-white');
      
      const category = button.id.replace('filter-', '');
      const searchTerm = searchInput.value.toLowerCase().trim();
      
      // Si hay término de búsqueda, aplicar ambos filtros
      if (searchTerm) {
        let filtered;
        
        if (category === 'all') {
          filtered = patternsData.filter(pattern => 
            pattern.name.toLowerCase().includes(searchTerm) || 
            pattern.exercises.some(ex => 
              ex.title.toLowerCase().includes(searchTerm) || 
              ex.description.toLowerCase().includes(searchTerm)
            )
          );
        } else {
          filtered = patternsData.filter(pattern => 
            pattern.category === category && (
              pattern.name.toLowerCase().includes(searchTerm) || 
              pattern.exercises.some(ex => 
                ex.title.toLowerCase().includes(searchTerm) || 
                ex.description.toLowerCase().includes(searchTerm)
              )
            )
          );
        }
        
        renderPatterns(filtered);
      } else {
        // Si no hay búsqueda, filtrar solo por categoría
        if (category === 'all') {
          renderPatterns(patternsData);
        } else {
          const filtered = patternsData.filter(pattern => pattern.category === category);
          renderPatterns(filtered);
        }
      }
    });
  });
});