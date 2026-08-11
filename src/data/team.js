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

import photo1 from "../assets/images/team/photo1.jpg";
import photo2 from "../assets/images/team/photo2.jpg";
import photo3 from "../assets/images/team/photo3.jpg";
import photo4 from "../assets/images/team/photo4.jpg";
import photo5 from "../assets/images/team/photo5.jpg";
import photo6 from "../assets/images/team/photo6.jpg";
import photo7 from "../assets/images/team/photo7.jpg";
import photo8 from "../assets/images/team/photo8.jpg";
import photo9 from "../assets/images/team/photo9.jpg";
import photo10 from "../assets/images/team/photo10.jpg";
import photo11 from "../assets/images/team/photo11.jpg";
import photo12 from "../assets/images/team/photo12.jpg";


export const teamMembers = [
  {
    id: 1,
    name: "Ilva Nubia Herrera Gálvez",
    role: "Experta Comisionada de la #CR",
    src: photo8,
    size: "",
    alt: "Ilva Nubia Herrera Gálvez – Experta Comisionada de la #CRA",
  },
  {
    id: 2,
    name: "Somos Corpoambiental",
    role: "💚♻️",
    src: photo2,
    size: "",
    alt: "Somos Corpoambiental – 💚♻️",
  },
  {
    id: 3,
    name: "Personas que cambian residuos por oportunidades.",
    role: "💚♻️",
    src: photo3,
    size: "",
    alt: "Personas que cambian residuos por oportunidades. 💚♻️",
  },
  {
    id: 4,
    name: "Reciclar también es cuidar a quienes reciclan.",
    role: "💚♻️",
    src: photo4,
    size: "",
    alt: "Reciclar también es cuidar a quienes reciclan. 💚♻️",
  },
  {
    id: 5,
    name: "La comunidad se fortalece cuando el reciclaje es de todos.",
    role: "💚♻️",
    src: photo5,
    size: "",
    alt: "La comunidad se fortalece cuando el reciclaje es de todos. 💚♻️",
  },
  {
    id: 6,
    name: "Cada bolsa separada es un gesto de respeto al territorio.",
    role: "💚♻️",
    src: photo6,
    size: "",
    alt: "Cada bolsa separada es un gesto de respeto al territorio. 💚♻️",
  },
  {
    id: 7,
    name: "La transformación empieza en las manos de la gente.",
    role: "💚♻️",
    src: photo7,
    size: "",
    alt: "La transformación empieza en las manos de la gente. 💚♻️",
  },
  {
    id: 8,
    name: "Detrás de cada material recuperado hay una historia digna.",
    role: "💚♻️",
    src: photo1,
    size: "",
    alt: "Detrás de cada material recuperado hay una historia digna. 💚♻️",
  },
  {
    id: 9,
    name: "Cuidar el planeta es cuidar a quienes viven de reciclar.",
    role: "💚♻️",
    src: photo9,
    size: "",
    alt: "Cuidar el planeta es cuidar a quienes viven de reciclar.",
  },
  {
    id: 10,
    name: "Donde otros ven basura, nosotros vemos futuro.",
    role: "💚♻️",
    src: photo10,
    size: "",
    alt: "Donde otros ven basura, nosotros vemos futuro.",
  },
  {
    id: 11,
    name: "Reciclar es trabajo, cuidado y justicia ambiental.",
    role: "💚♻️",
    src: photo11,
    size: "",
    alt: "Reciclar es trabajo, cuidado y justicia ambiental.",
  },
  {
    id: 12,
    name: "El reciclaje dignifica el oficio de quienes habitan el territorio.",
    role: "💚♻️",
    src: photo12,
    size: "",
    alt: "El reciclaje dignifica el oficio de quienes habitan el territorio.",
  },
];
