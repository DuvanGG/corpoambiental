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
    size: "tall",
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
    name: "Somos Corpoambiental",
    role: "💚♻️",
    src: photo3,
    size: "large",
    alt: "Somos Corpoambiental – 💚♻️",
  },
  {
    id: 4,
    name: "Somos Corpoambiental",
    role: "💚♻️",
    src: photo4,
    size: "",
    alt: "Somos Corpoambiental – 💚♻️",
  },
  {
    id: 5,
    name: "Somos Corpoambiental",
    role: "💚♻️",
    src: photo5,
    size: "large",
    alt: "Somos Corpoambiental – 💚♻️",
  },
  {
    id: 6,
    name: "Somos Corpoambiental",
    role: "💚♻️",
    src: photo6,
    size: "tall",
    alt: "Somos Corpoambiental - 💚♻️",
  },
  {
    id: 7,
    name: "Somos Corpoambiental",
    role: "💚♻️",
    src: photo7,
    size: "tall",
    alt: "Somos Corpoambiental - 💚♻️",
  },
  {
    id: 8,
    name: "Somos Corpoambiental",
    role: "💚♻️",
    src: photo1,
    size: "tall",
    alt: "Somos Corpoambiental – 💚♻️",
  },
  {
    id: 9,
    name: "Recicla",
    role: "A estos materiales les espera una segunda vida ♻️",
    src: photo9,
    size: "",
    alt: "Maryoris – RECICLADORES PA’ LA FIFA",
  },
  {
    id: 10,
    name: "Reutiliza",
    role: "A estos materiales les espera una segunda vida ♻️",
    src: photo10,
    size: "tall",
    alt: "Reutiliza – A estos materiales les espera una segunda vida ♻️",
  },
  {
    id: 11,
    name: "Separa",
    role: "A estos materiales les espera una segunda vida ♻️",
    src: photo11,
    size: "tall",
    alt: "Separa – A estos materiales les espera una segunda vida ♻️",
  },
  {
    id: 12,
    name: "El planeta necesita cuidado",
    role: "A estos materiales les espera una segunda vida ♻️",
    src: photo12,
    size: "",
    alt: "El planeta necesita cuidado - A estos materiales les espera una segunda vida ♻️",
  },
];
