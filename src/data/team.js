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
    name: "Somos Corpoambiental",
    role: "💚♻️",
    src: "https://instagram.fbog10-1.fna.fbcdn.net/v/t51.82787-15/709266081_18084165728638997_5817757819488661180_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&ig_cache_key=MzkwNzI2MjIwOTQzNjYwMTk2NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMjU1My5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=FRti3Eiz29YQ7kNvwF_gcV-&_nc_oc=AdqR2pCf6Nt54t_B_WRsU2ocs3a2xqJwb6ZC6TGKztXqm26YgusiXVjyCTX6cMFMFcJ4iCzEcwJBFzVlG-1sQw0B&_nc_zt=23&_nc_ht=instagram.fbog10-1.fna&_nc_gid=O58mBv6hlIWWGMqw82Zy9g&_nc_ss=7b689&oh=00_AQBCAt71g5m5ujp5IVOUC_jtCwS_0-4-ruGqQ5Hd6Bu--w&oe=6A6D3A90",
    size: "",
    alt: "Somos Corpoambiental – 💚♻️",
  },
  {
    id: 3,
    name: "Somos Corpoambiental",
    role: "💚♻️",
    src: "https://instagram.fbog10-1.fna.fbcdn.net/v/t51.82787-15/709024171_18084165719638997_4635253121589906770_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&ig_cache_key=MzkwNzI2MjIwMzkxNjg2MTEyOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMjUzNS5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=ojOfRySO5sMQ7kNvwHrmMHR&_nc_oc=AdoTMG33JF_LwHK9LfN5CGvUn1ACvM0AcqWCFrpWL4pjICSVUzVivf-ZU3sSroIqqSweCQSn-1qn3bMCDfpf_pTj&_nc_zt=23&_nc_ht=instagram.fbog10-1.fna&_nc_gid=VeXOvjz2S_rHvI8THAho1A&_nc_ss=7b689&oh=00_AQBAgubzwhSrEZDDKR-H0DrqNkRQYO24RJkNRisc2mRY6Q&oe=6A6D201E",
    size: "large",
    alt: "Somos Corpoambiental – 💚♻️",
  },
  {
    id: 4,
    name: "Somos Corpoambiental",
    role: "💚♻️",
    src: "https://instagram.fbog11-1.fna.fbcdn.net/v/t51.82787-15/710795062_18084165737638997_3660403154591402151_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=110&ig_cache_key=MzkwNzI2MjIxNzQ5NzkzMDgzNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMjU1My5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=p30GiXJZVL8Q7kNvwHHuWKQ&_nc_oc=AdqEXDZnOCYcoBE16ncKvHJ8LT1FL9jZsmo2B62ybxtB3LD0jzfrUdAML4eUuOWvh_dW8qpaK_okL6tQRNCbSgI1&_nc_zt=23&_nc_ht=instagram.fbog11-1.fna&_nc_gid=O58mBv6hlIWWGMqw82Zy9g&_nc_ss=7b689&oh=00_AQC1aY9nwuL2arUvhc4aDtIWqqQHAxYOcmlPvTo4xdEsYQ&oe=6A6D2267",
    size: "",
    alt: "Somos Corpoambiental – 💚♻️",
  },
  {
    id: 5,
    name: "Somos Corpoambiental",
    role: "💚♻️",
    src: "https://instagram.fbog10-1.fna.fbcdn.net/v/t51.82787-15/709803097_18084165755638997_5467599802063311691_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&ig_cache_key=MzkwNzI2MjIyNDYxMTU3MzE0OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMjU1My5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=GQwGS4PTwXoQ7kNvwEJpfJa&_nc_oc=AdqUzNIC5GXC4LNi01nFYmaHcmbdXTRZ5XVzePzVLzN5B5bUMr10hidnbwlZuN6GsNe5_5CB4Z0jxmkO-gmWLkTE&_nc_zt=23&_nc_ht=instagram.fbog10-1.fna&_nc_gid=O58mBv6hlIWWGMqw82Zy9g&_nc_ss=7b689&oh=00_AQAidrZR_JYEaHSNQb-efwiqMe-8Q7G9QsbKknBfVtygCw&oe=6A6D447B",
    size: "large",
    alt: "Somos Corpoambiental – 💚♻️",
  },
  {
    id: 6,
    name: "Maryoris",
    role: "RECICLADORES PA’ LA FIFA",
    src: "https://instagram.fbog11-1.fna.fbcdn.net/v/t51.82787-15/714104331_18084992696638997_3684497065227234693_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzkxMTUyNDU3NDg2NTQ5NjAzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTAzNC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=HHZffSPLgnMQ7kNvwHyu6WT&_nc_oc=AdptlgB92BLfIfAiue5gpn56apAbSutIOqWbWHiEcR5laHRUTXtE8G1lLa4rbEN1mM_TYeJS8Lsm7NR5sG7rPzRT&_nc_zt=23&_nc_ht=instagram.fbog11-1.fna&_nc_gid=JdqLJITnLfndRzn9vPReAQ&_nc_ss=7b689&oh=00_AQCmYA8qCl2AIZ7yTzZtnxdELteo1lWFPL9ynMdaVLvFRQ&oe=6A6D289D",
    size: "",
    alt: "Maryoris – RECICLADORES PA’ LA FIFA",
  },
  {
    id: 7,
    name: "Modo FIFA",
    role: "Y los recicladores lo saben!!",
    src: "https://scontent.cdninstagram.com/v/t51.82787-15/721403690_18086212331638997_4002474348553630789_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=cfU3EIL-AdcQ7kNvwEER6KI&_nc_oc=AdrmUcb9SIsOvrNlXF4fUvE3tPOhGBkqDKCX789e9jaz-uWnya3F2gRRGMFfJn_Svk8PUSmraew1qNVTpyN1hsdG&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=xsFTbzDcmQzxU55aJELbZw&_nc_ss=7b689&oh=00_AQABfX9wZCgUGMMMleAFcABBUNwV8TbV98d3LP4bUq2TlQ&oe=6A6D2A72",
    size: "tall",
    alt: "Modo FIFA y los recicladores lo saben",
  },
  {
    id: 8,
    name: "Somos Corpoambiental",
    role: "💚♻️",
    src: "https://instagram.fbog11-1.fna.fbcdn.net/v/t51.82787-15/710118647_18084165746638997_8162142011149533167_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=102&ig_cache_key=MzkwNzI2MjIyMTcyNTc1NDI5MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMjU1My5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=bcgdHZhF28UQ7kNvwEALBqU&_nc_oc=AdqAtYE_-CE9f2q8RgM4Q96HLf2lakzAIhMLJ29RsEcJm944tm9V4FO7esSSj7Iee1Astbg_vCS3DnRUqV9DHbwJ&_nc_zt=23&_nc_ht=instagram.fbog11-1.fna&_nc_gid=O58mBv6hlIWWGMqw82Zy9g&_nc_ss=7b689&oh=00_AQC3mwtEX0Jd5-9_bjCfflbQk0RKLRPgkqLDEYlsv2ddCA&oe=6A6D3EB6",
    size: "",
    alt: "Somos Corpoambiental – 💚♻️",
  },
  {
    id: 9,
    name: "Recicla",
    role: "A estos materiales les espera una segunda vida ♻️",
    src: "https://instagram.fbog11-1.fna.fbcdn.net/v/t51.82787-15/704801869_18083336903638997_7296862331687129105_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzkwMjk2NTg0MzE4MDgyOTIyNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=_XQvw-0g4tIQ7kNvwE8MDJD&_nc_oc=AdrepAtCE2MhY1khiHkfnw2_8KwLaXdCjH9Czfc9Pltxc_e42QVV4Y2CioXTdoAPOt_7E60aY5eKzYZnL9YuOC_A&_nc_zt=23&_nc_ht=instagram.fbog11-1.fna&_nc_gid=zBXyINeS1uOncMj2Qq5zug&_nc_ss=7b689&oh=00_AQCvQ41IyyaTXRQ79PRkdVhsEb22OQds7GEscRWfE0Z7jQ&oe=6A6D278D",
    size: "tall",
    alt: "Maryoris – RECICLADORES PA’ LA FIFA",
  },
  {
    id: 10,
    name: "Reutiliza",
    role: "A estos materiales les espera una segunda vida ♻️",
    src: "https://instagram.fbog11-1.fna.fbcdn.net/v/t51.82787-15/705567869_18083336885638997_7075951033211431458_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzkwMjk2NTg0Mjg4NzE2MjUyNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=ZFh3O7LneQEQ7kNvwFvYkRl&_nc_oc=AdruYUiTcu3zl0yis7MSCcpRDBP3JcZnHz8CKGMqw-vmcKUZ2rMwz52QxtDpNJXkD0nOmHB0mtuuEabhK0dOIL3i&_nc_zt=23&_nc_ht=instagram.fbog11-1.fna&_nc_gid=zBXyINeS1uOncMj2Qq5zug&_nc_ss=7b689&oh=00_AQCYnmCTc-3UH6x5qBa6Ly1-DTUAwj4W3HBgFCdL83-AYA&oe=6A6D13CB",
    size: "tall",
    alt: "Reutiliza – A estos materiales les espera una segunda vida ♻️",
  },
  {
    id: 11,
    name: "Separa",
    role: "A estos materiales les espera una segunda vida ♻️",
    src: "https://instagram.fbog10-1.fna.fbcdn.net/v/t51.82787-15/705964649_18083336894638997_1452704741791740246_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzkwMjk2NTg0MzY4Mzk2OTkxOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=y5b7sFxPJ_oQ7kNvwFQ5ZXJ&_nc_oc=AdoRCqxQz4DYsQiFb2kn1jqKA9gZAw3G-y-lIlovwVDYtaAXZYCYDPIj7TuK41X1pnMxipBngRJJM9-vIhOhKG_0&_nc_zt=23&_nc_ht=instagram.fbog10-1.fna&_nc_gid=zBXyINeS1uOncMj2Qq5zug&_nc_ss=7b689&oh=00_AQCwp5Y5x4Ek8UKu8nydEX5kFlGV4eiG8EbZwLU8QSGqbA&oe=6A6D2942",
    size: "tall",
    alt: "Separa – A estos materiales les espera una segunda vida ♻️",
  },
  {
    id: 12,
    name: "El planeta necesita cuidado",
    role: "A estos materiales les espera una segunda vida ♻️",
    src: "https://instagram.fbog10-1.fna.fbcdn.net/v/t51.82787-15/705982350_18083336912638997_7227424270614564081_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzkwMjk2NTg0NDMyOTkzOTU3Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Ol6DMKBuzD0Q7kNvwEGEZa5&_nc_oc=AdqVY9dD61eaSSSQkNfTcbvrZFjOsw2K-R0OjxEDZtvlx-Pckakw5oNWsXtBF1AbsV2OuVG8JV8OvqSk1d0fKmUg&_nc_zt=23&_nc_ht=instagram.fbog10-1.fna&_nc_gid=zBXyINeS1uOncMj2Qq5zug&_nc_ss=7b689&oh=00_AQDB8gA0tORAJAfLqlw5sLTm826ovuIRlyAtEcc68J_JVw&oe=6A6D11D0",
    size: "tall",
    alt: "El planeta necesita cuidado - A estos materiales les espera una segunda vida ♻️",
  },
];
