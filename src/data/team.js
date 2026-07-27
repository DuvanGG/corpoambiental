/**
 * Datos del equipo — Galería "Nuestro Equipo"
 *
 * Para actualizar una imagen:
 * 1. Ve a la publicación de Instagram en el navegador.
 * 2. Clic derecho sobre la imagen → "Copiar dirección de imagen".
 * 3. Reemplaza el valor de `src` en el objeto correspondiente.
 *
 * Nota: Las URLs directas de imagen de Instagram (scontent-*.fbcdn.net)
 * funcionan como src de <img>. Si la URL expira, simplemente repite el paso 2.
 *
 * `size` controla el peso visual en el mosaico:
 *   "tall"  → columna doble de altura  (destacado vertical)
 *   "wide"  → fila doble de ancho       (destacado horizontal)
 *   "large" → 2×2                       (imagen principal)
 *   ""      → tamaño estándar 1×1
 */

export const teamMembers = [
  {
    id: 1,
    name: "Ilva Nubia Herrera Gálvez",
    role: "Experta Comisionada de la #CR",
    src: "https://scontent.cdninstagram.com/v/t51.82787-15/714651453_17940439284217741_473916735980389808_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=8A-61AXM4uEQ7kNvwH5OL6y&_nc_oc=AdrVT_MDFYI-Kmpqs0AkVfg1KaoGRmXm_pYRVOuGiCXyE5_zYcKFWhSLfoeMvv8Euj7LnA7wN2MCWOfytI5IFoUQ&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=wtKnBOAGueEIC_RUsfgbOg&_nc_ss=7b689&oh=00_AQAtQEfZLPC8UDFU6X0pcxQV4UrZ8rdciimtvY0zGyQLqQ&oe=6A6CA44A",
    size: "tall",
    alt: "Ilva Nubia Herrera Gálvez – Experta Comisionada de la #CRA",
  },
  {
    id: 2,
    name: "Carlos Mendez",
    role: "Coordinador de Campo",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    size: "",
    alt: "Carlos Mendez – Coordinador de Campo",
  },
  {
    id: 3,
    name: "Laura Torres",
    role: "Bióloga Ambiental",
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    size: "large",
    alt: "Laura Torres – Bióloga Ambiental",
  },
  {
    id: 4,
    name: "Rafael Díaz",
    role: "Ingeniero Forestal",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    size: "",
    alt: "Rafael Díaz – Ingeniero Forestal",
  },
  {
    id: 5,
    name: "Sofía Reyes",
    role: "Educadora Ambiental",
    src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80",
    size: "wide",
    alt: "Sofía Reyes – Educadora Ambiental",
  },
  {
    id: 6,
    name: "Miguel Ruiz",
    role: "Técnico en Reciclaje",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    size: "",
    alt: "Miguel Ruiz – Técnico en Reciclaje",
  },
  {
    id: 7,
    name: "Valentina Cruz",
    role: "Gestora de Proyectos",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    size: "tall",
    alt: "Valentina Cruz – Gestora de Proyectos",
  },
  {
    id: 8,
    name: "Daniel Herrera",
    role: "Especialista en Fauna",
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
    size: "",
    alt: "Daniel Herrera – Especialista en Fauna",
  },
  {
    id: 9,
    name: "Lucía Vargas",
    role: "Comunicadora Social",
    src: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=800&q=80",
    size: "",
    alt: "Lucía Vargas – Comunicadora Social",
  },
  {
    id: 10,
    name: "Andrés Morales",
    role: "Hidrólogo",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    size: "",
    alt: "Andrés Morales – Hidrólogo",
  },
  {
    id: 11,
    name: "Isabella Ospina",
    role: "Voluntaria Líder",
    src: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=800&q=80",
    size: "",
    alt: "Isabella Ospina – Voluntaria Líder",
  },
  {
    id: 12,
    name: "Equipo en campo",
    role: "Jornada de reforestación",
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    size: "wide",
    alt: "Equipo Corpoambiental en jornada de campo",
  },
];
