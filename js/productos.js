/* ============================================================
   CATÁLOGO — Remember Kit
   Cada producto es un bloque { ... }. Para cambiar un precio,
   editá el número (sin puntos). Para ocultar un producto,
   poné  visible: false.

   LINKS DE COMPRA (pegalos entre las comillas):
   - mercadoPago:  link de pago de Mercado Pago de ese producto
   - mercadoLibre: link de la publicación en Mercado Libre
   Si un link queda vacío, ese botón no aparece. El botón de
   WhatsApp aparece siempre.

   IMÁGENES: pueden ser códigos de Wix (como están ahora; se
   descargan solas al publicar) o fotos tuyas subidas a la
   carpeta img/, escritas así: "img/mi-foto.jpg".

   DESCRIPCIÓN: cada renglón es un párrafo.
   - Si empieza con "## " es un subtítulo.
   - Si empieza con "- " es un ítem de lista.
   ============================================================ */
window.RK_CATEGORIAS = [
  { id: "parejas", nombre: "Parejas" },
  { id: "bebes", nombre: "Bebés" },
  { id: "familias", nombre: "Familias" },
  { id: "mascotas", nombre: "Mascotas" },
  { id: "repuestos", nombre: "Repuestos" },
];

window.RK_PRODUCTOS = [
  {
    id: "kit-dia-de-la-madre",
    visible: true,
    nombre: "KIT Día de la Madre [con Base de Madera]",
    categoria: "parejas",
    etiqueta: "Perfecto para regalo",
    precio: 85000,
    precioOferta: 70000,
    precioTransferencia: 70000,
    cuotas: true,
    envioGratis: true,
    mercadoPago: "",
    mercadoLibre: "",
    imagenes: [
      "4d2cf1_e43edf81ed964d4e8cab6758dec6548e~mv2.png",
      "4d2cf1_533e163a184f4ac8a33143290e0e3da9~mv2.jpg",
    ],
    resumen: "Escultura de manos entrelazadas con base de madera grabada FELIZ DÍA. Para 2 manos adultas.",
    descripcion: `Este kit es para 2 manos adultas. Si son más manos, corresponde el Kit Familiar.
## Un recuerdo para toda la vida
Solo necesitan una tarde, ganas de crear juntos y el kit hace el resto.
Sorprendé a mamá con una experiencia única y un recuerdo que quedará para siempre. Nuestro Kit con base de madera Feliz Día te permite crear una escultura detallada de manos entrelazadas, capturando un momento especial entre madre, hijos y familia de una forma original y emotiva.
El kit incluye todos los materiales necesarios para realizar el molde y la escultura en casa, junto con una elegante base de madera con la inscripción FELIZ DÍA, diseñada para exhibir la pieza terminada y convertirla en un objeto decorativo lleno de significado.
## El kit incluye
- Materiales para realizar el molde de las manos
- Yeso de alta calidad para la escultura
- Instrucciones paso a paso
- Base de madera para exhibición
- Apto para todas las edades
El Remember Hands Kit Feliz Día no es un simple molde. Es una escultura real, con acabado profesional, hecha por ustedes mismos.`,
    aliasWix: ["con-base-de-madera-kit-día-del-padre", "con-base-de-madera-kit-d%C3%ADa-del-padre"],
  },
  {
    id: "kit-escultura-duo",
    visible: true,
    nombre: "KIT Parejas Dúo - Escultura",
    categoria: "parejas",
    etiqueta: "3 cuotas sin interés",
    precio: 78000,
    precioOferta: null,
    precioTransferencia: 66000,
    cuotas: true,
    envioGratis: true,
    mercadoPago: "",
    mercadoLibre: "",
    imagenes: [
      "4d2cf1_1e5fb11ea2154859a0c63884081ee37c~mv2.png",
      "4d2cf1_e7312c122ada442fab57eab8504dd7c0~mv2.png",
      "4d2cf1_41045398a95f418090e0dd160ddebdaa~mv2.png",
      "4d2cf1_029a8cc766e7438d98f1dc02a1d2ee6b~mv2.png",
      "4d2cf1_5ac0712d3ea0407fbd795284ca88a5f1~mv2.png",
      "4d2cf1_93d82cf7746e49a78661648ff1a25488~mv2.png",
      "8713cb_51e6e1a8d38b46e0a8a4999728b7e00a~mv2.jpg",
      "8713cb_a2f9bfbc7b334686afedbbcfc7ed8442~mv2.png",
      "8713cb_3b9e358c0b6940dd9b1e77a7c72fd410~mv2.png",
      "8713cb_789bb618a7f24a5c95c02f8df1e99ea9~mv2.png",
      "4d2cf1_5c94a81fe6a446d38a56b8ffa7eff69b~mv2.png",
    ],
    resumen: "Sus manos juntas, sus anillos, la textura de su piel: en una escultura que van a tener toda la vida.",
    descripcion: `Hay momentos que merecen quedarse para siempre. El Kit Remember Dúo Parejas fue diseñado para capturar ese vínculo único entre dos personas: cada detalle de sus manos juntas, sus anillos, la textura de su piel, en una escultura de calidad que van a tener en casa toda la vida.
No hace falta experiencia. Solo necesitan una tarde, ganas de crear juntos y el kit hace el resto.
## ¿Qué podés esculpir?
- Manos tomadas
- Manos entrelazadas
- Mano sobre mano
💍 Podés dejarte los anillos puestos: quedan espectaculares en la escultura.
## Tips para el mejor resultado
- Definan la pose antes de empezar.
- Cuanto más quietas queden las manos, mayor detalle va a tener la escultura.
- Hacerlo de a dos hace todo más fácil: uno mezcla, el otro prepara las manos.
- Podés pintarla o dejarla en su color natural.
## El kit incluye todo lo necesario
- Materiales de alta impresión hipoalergénicos
- Yeso
- Guantes
- Instructivo que detalla todo paso a paso
Sin tóxicos · Hipoalergénico · Seguro para la piel · Fraguado rápido.
El Remember Hands Kit no es un simple molde. Es una escultura real, con acabado profesional, hecha por ustedes mismos desde casa.`,
  },
  {
    id: "kit-escultura-baby",
    visible: true,
    nombre: "KIT Baby Escultura [con Base de Madera]",
    categoria: "bebes",
    etiqueta: "3 cuotas sin interés",
    precio: 75000,
    precioOferta: null,
    precioTransferencia: 63000,
    cuotas: true,
    envioGratis: true,
    mercadoPago: "",
    mercadoLibre: "",
    imagenes: [
      "4d2cf1_cc3d5b85aa0a4404ab23030e8111b315~mv2.png",
      "4d2cf1_21082e4fe4a2445aa082fe68f45e8d87~mv2.png",
      "4d2cf1_d734b40739814071866ca0315d4e6e35~mv2.png",
      "4d2cf1_173028944fa24381ae7b130016912826~mv2.png",
      "4d2cf1_13e2fd936d3848ee9b72c73b0335667d~mv2.png",
      "4d2cf1_520b04883505408091603d94a7e377ac~mv2.png",
      "4d2cf1_d1b6da146bd045039094fa3eee97d79c~mv2.png",
      "8713cb_96ab4b1831704bf0946429c718cc55d8~mv2.png",
      "8713cb_3b9e358c0b6940dd9b1e77a7c72fd410~mv2.png",
      "8713cb_789bb618a7f24a5c95c02f8df1e99ea9~mv2.png",
    ],
    resumen: "Esa manito que hoy cabe en tu palma, capturada con todos sus detalles antes de que crezca.",
    descripcion: `Esa manito chiquita que cabe entera en tu palma no va a ser así para siempre. El Kit Baby fue pensado especialmente para capturar cada detalle de tu bebé (sus deditos, su pie, o sus manos junto a las tuyas) en una escultura que va a durar toda la vida.
Incluye materiales de alta impresión, yeso, balde, paleta mezcladora, una base de madera para exhibirla, 2 lijas para mejorar el acabado e instructivo paso a paso. No se necesita experiencia previa: en menos de 30 minutos tenés tu escultura lista.
## ¿Qué podés hacer con el Kit Baby?
- Escultura de la mano del bebé junto a la de mamá o papá
- Escultura de la mano del bebé sola
- Escultura del pie del bebé
## Tips para el mejor resultado
- Hacelo cuando el bebé esté tranquilo o dormido, así la escultura queda más detallada.
- El material de alta impresión es suave y agradable al tacto: no le va a molestar.
- Cuanto más quieta quede la manito, mayor detalle va a tener la escultura.
- Si es la primera vez, practicá la pose antes de meter la mano en el PASO 1.
## Precauciones
- No recomendado para bebés menores de 3 meses.
- Siempre realizá el proceso con supervisión adulta.
- No dejar al bebé sin supervisión durante el proceso.
💍 ¿Tenés anillos? Dejátelos puestos. Quedan perfectos.`,
  },
  {
    id: "kit-escultura-family",
    visible: true,
    nombre: "KIT Familiar Escultura",
    categoria: "familias",
    etiqueta: "Más vendido",
    precio: 99000,
    precioOferta: 85000,
    precioTransferencia: 70000,
    cuotas: true,
    envioGratis: true,
    mercadoPago: "",
    mercadoLibre: "",
    imagenes: [
      "8713cb_c3424512ed40463f84991bfc4d5af8d3~mv2.png",
      "4d2cf1_fe201c64ba8a4705b397173db13f7ad4~mv2.png",
      "4d2cf1_7bc94ff664954fdbaa1ab3d39898bb47~mv2.png",
      "4d2cf1_029a8cc766e7438d98f1dc02a1d2ee6b~mv2.png",
      "4d2cf1_41045398a95f418090e0dd160ddebdaa~mv2.png",
      "8713cb_a2f9bfbc7b334686afedbbcfc7ed8442~mv2.png",
      "8713cb_3b9e358c0b6940dd9b1e77a7c72fd410~mv2.png",
      "8713cb_789bb618a7f24a5c95c02f8df1e99ea9~mv2.png",
    ],
    resumen: "Materiales para hasta 5 personas. La familia entera en una escultura para toda la vida.",
    descripcion: `Hay momentos que merecen ser guardados para siempre.
El Kit Familiar fue diseñado para capturar una familia en escultura con calidad premium. Incluye materiales para hasta 5 personas: todo lo necesario en mayor cantidad, yeso, balde de gran capacidad, paleta mezcladora e instructivo paso a paso.
No hace falta experiencia. Es fácil, rápido y divertido. Solo necesitan una tarde, ganas de crear juntos y el kit hace el resto.
## ¿Qué podés esculpir?
- Manos tomadas
- Manos entrelazadas
- Mano sobre mano
💍 Podés dejarte los anillos puestos: quedan espectaculares en la escultura.
## Tips para el mejor resultado
- Definan la pose antes de empezar y practíquenla unos minutos: una vez que meten las manos en el paso 1 no pueden moverlas.
- Cuanto más quietas queden las manos, mayor detalle va a tener la escultura.
- El agua más fría alarga el tiempo de fraguado.
## El kit incluye todo lo necesario
- Materiales de alta impresión 100% hipoalergénicos
- Yeso
- Guantes
- Instrucciones paso a paso
El Remember Hands Kit no es un simple molde. Es una escultura real, con acabado profesional, hecha por ustedes mismos.`,
  },
  {
    id: "kit-dog-adulto-animal",
    visible: true,
    nombre: "KIT Mascotas Escultura (Adulto + Mascota)",
    categoria: "mascotas",
    etiqueta: "3 cuotas sin interés",
    precio: 65000,
    precioOferta: null,
    precioTransferencia: null,
    cuotas: true,
    envioGratis: true,
    mercadoPago: "",
    mercadoLibre: "",
    imagenes: [
      "4d2cf1_5ccdeeef320141dcab91de6beb09fd4f~mv2.png",
      "4d2cf1_c2e63f88de4f4eab989646e325976aea~mv2.jpg",
      "4d2cf1_0672900c60d2431aaeb9d5e6a9d3cf19~mv2.png",
      "8713cb_789bb618a7f24a5c95c02f8df1e99ea9~mv2.png",
      "8713cb_96ab4b1831704bf0946429c718cc55d8~mv2.png",
      "8713cb_4778bcf847ef4f2f9e07e5c77cf3c95c~mv2.png",
    ],
    resumen: "Tu mano y la patita de tu mejor amigo, juntas en una escultura única.",
    descripcion: `Capturá para siempre la huella de tu mejor amigo. Con este kit vas a poder crear una escultura única con la patita de tu mascota, inmortalizando ese vínculo especial que solo quienes aman a sus animales entienden.
Este kit incluye una reposición de los materiales por si no salió como esperaban con tu mascota: escribinos por WhatsApp y te mandamos un nuevo envío para que todos puedan hacer la experiencia.
## Por qué te va a encantar
- Un recuerdo lleno de amor: ideal para perros (y también gatos).
- Fácil de hacer en casa: no necesitás experiencia previa. Incluye instrucciones paso a paso.
- Seguro para tu mascota: materiales no tóxicos y amigables con la piel.
- Un regalo diferente: perfecto para amantes de los animales, cumpleaños o para homenajear a tu mascota.
- Resultado único: cada escultura es irrepetible, con todos los detalles reales de la patita.
Se recomienda realizar el proceso con tranquilidad y paciencia para lograr el mejor resultado.`,
  },
  {
    id: "kit-abuelos-nietos",
    visible: true,
    nombre: "Kit Abuelos + Nietos",
    categoria: "familias",
    etiqueta: "Perfecto para regalo",
    precio: 70000,
    precioOferta: null,
    precioTransferencia: null,
    cuotas: true,
    envioGratis: true,
    mercadoPago: "",
    mercadoLibre: "",
    imagenes: [
      "4d2cf1_ec9de7ba5d024ce298dfcef3bc081cf5~mv2.png",
      "4d2cf1_358704195ffb4b1fb9e5fe2c4df9306a~mv2.jpg",
      "4d2cf1_519d1608e9ac474aa510b81867d9d14b~mv2.png",
      "4d2cf1_39302fa4b6764e4f9e0e8f28f3fc5afb~mv2.png",
      "8713cb_a2f9bfbc7b334686afedbbcfc7ed8442~mv2.png",
    ],
    resumen: "Las manos de un abuelo y su nieto cuentan una historia que ninguna foto puede capturar.",
    descripcion: `Hay momentos que merecen quedarse para siempre.
Las manos de un abuelo y su nieto cuentan una historia que ninguna foto puede capturar. Con el Kit Remember Abuelos + Nietos, ese momento queda inmortalizado en una escultura única, hecha por ustedes mismos en casa.
No hace falta experiencia. Solo necesitan una tarde, ganas de crear juntos y el kit hace el resto.
## ¿Qué incluye el kit?
- Materiales para realizar el molde de las manos
- Yeso de alta calidad para la escultura
- Instrucciones paso a paso
- Base de madera para exhibición
## ¿Cómo funciona?
En dos pasos simples: mezclan el molde, unen las manos 3 minutos, vierten el yeso y en 20 minutos tienen su escultura lista.`,
  },
  {
    id: "extra-repuesto-kit-familias-materiales",
    visible: true,
    nombre: "Extra Repuesto KIT FAMILIAS [Materiales]",
    categoria: "repuestos",
    etiqueta: "",
    precio: 40000,
    precioOferta: null,
    precioTransferencia: null,
    cuotas: false,
    envioGratis: false,
    mercadoPago: "",
    mercadoLibre: "",
    imagenes: ["4d2cf1_5569416a52da41928672250ad860e6bc~mv2.webp"],
    resumen: "Todos los insumos del Kit Familiar para repetir la actividad. Reutilizás tu base de madera.",
    descripcion: `¿Quieren volver a intentarlo o hacer otra pose? Te mandamos todo lo que necesitan para repetir la actividad.
A veces la mezcla no sale exactamente como esperábamos, los dedos se movieron, o simplemente querés hacerlo de nuevo con otro ser querido. Para eso existe el Repuesto Kit Familias.
## Incluye
- 2 bolsas PASO 1 para molde
- 2 bolsas PASO 2 polvo de yeso para la figura
- Lija
- Espátula mezcladora
- Manual de instrucciones
No incluye la base de madera, ya que la del kit original se reutiliza.`,
  },
  {
    id: "repuesto-kit",
    visible: true,
    nombre: "Extra Repuesto KIT PAREJAS [Materiales]",
    categoria: "repuestos",
    etiqueta: "",
    precio: 22000,
    precioOferta: null,
    precioTransferencia: null,
    cuotas: false,
    envioGratis: false,
    mercadoPago: "",
    mercadoLibre: "",
    imagenes: ["4d2cf1_5569416a52da41928672250ad860e6bc~mv2.webp"],
    resumen: "Todos los insumos del Kit Parejas para repetir la actividad. Reutilizás tu base de madera.",
    descripcion: `¿Quieren volver a intentarlo o hacer otra pose? Te mandamos todo lo que necesitan para repetir la actividad.
A veces la mezcla no sale exactamente como esperábamos, los dedos se movieron, o simplemente querés hacerlo de nuevo con otro ser querido. Para eso existe el Repuesto Kit Parejas.
## Incluye
- 1 polvo para molde (PASO 1)
- 1 polvo de yeso para la figura
- Lija
- Espátula mezcladora
- Manual de instrucciones
No incluye la base de madera, ya que la del kit original se reutiliza.`,
  },
];
