import { addDoc, collection } from "firebase/firestore";
import { db } from "../Config/FirebaseConfig";

const products = [
    //! Botas de futbol

    {name:"ADIDAS PREDATOR ACCURACY .1 FG", price: 249.99, category: "botas", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black.", img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/8eb689fadc7c4a97bd04b21d718d2972_9366/copa-mundial.jpg", stock:10 },

    {name:"Nike Phantom GX 2 Elite LV8", price: 269.99, category: "botas", description:"¿Te obsesiona perfeccionar tu destreza? Estas botas son para ti. En medio de la tormenta, con el caos arremolinándose a tu alrededor, has llegado tranquilamente al último tercio del campo gracias a tu asombrosa mezcla de astucia y habilidad con el balón. Ponle la guinda al pastel con las Phantom GX 2 Elite. El revolucionario material Nike Gripknit cubre el área de impacto de las botas, y la tracción Nike Cyclone 360 orienta tu agilidad espontánea. Hemos diseñado las botas Elite para ti y para las mayores estrellas del mundo con el fin de ofrecerte la máxima calidad, porque sabemos que te exiges grandeza a ti y a tus botas.", img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aaeeca04-5668-41b2-b947-d8a45a3e7903/phantom-gx-2-elite-lv8-botas-de-futbol-de-perfil-bajo-fg-6057lF.png", stock:10 },
    
    {name:"FUTURE 7 ULTIMATE FG/AG", price: 230.00, category:"botas", description:"Estrategas del fútbol, entrad de lleno en el FUTURO. La parte superior rediseñada combina PWRPRINT, PWRTAPE, punto extraelástico y malla doble suave para un ajuste adaptable de nueva generación, para que puedas crear sin limitaciones a lo largo de los 90 minutos. El sistema de movimiento dinámico proporciona tracción y agilidad para hacer recortes y cambios de ritmo rápidos. Cuando llevas el FUTURO, eres el FUTURO. Anímate a crear.",img: "https://www.futbolemotion.com/imagesarticulos/220548/540/bota-puma-future-7-ultimate-fgag-white-black-poison-pink-0.jpg", stock:10},
    
    {name:"MIZUNO Α ELITE", price: 200, category: "botas", description:"Totalmente diseñada para la velocidad. El ajuste perfecto de Mizuno Football realizado a través de la confección tejida Engineered Fit. Tacos triangulares para maximizar la velocidad del jugador. Placa Bare Foot incorporada en la plantilla para lograr la sensación de ir descalzo. La espuma MIZUNO ENERZY permite jugar duro durante todo el partido.",img: "https://emea.mizuno.com/dw/image/v2/BDBS_PRD/on/demandware.static/-/Sites-masterCatalog_Mizuno/default/dwe0d4b348/SS24/Football/SH_P1GA246250_00.png?sw=900&sh=900", stock:10 },
    //! Guantes de futbol
    {name:"GUANTES PORTERO PREDATOR PRO", price: 130, category: "guantes", description:"Mientras algunos jugadores sueñan con marcar el gol perfecto, otros aspiran a detenerlo. Impón tu dominio con los guantes de portero Predator Pro, un diseño exclusivo creado para potenciar tus habilidades bajo los tres palos.",img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5a0ca8c64141485885bcf560a3224fa1_9366/Guantes_portero_Predator_Pro_Negro_IQ4034_HM1.jpg", stock:10 },
    
    {name:"Phantom Elite Goalkeeper", price: 120, category: "guantes", description:"Los guantes Phantom Elite Goalkeeper cuentan con una espuma duradera para bloquear los disparos. El tejido flexible te permite mover las manos con comodidad. La tecnología All Conditions Control (ACC) proporciona un agarre uniforme tanto en terreno mojado como en seco.",img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4893dd35-67b3-4fb7-af42-05ef62a08be7/phantom-elite-goalkeeper-guantes-de-futbol-fPMdfX.png", stock:10 },
   
    {name:"Guantes de portero FUTURE Ultimate NC", price: 140, category: "guantes", description:"Los nuevos guantes FUTURE Ultimate NC están diseñados para ofrecer a tus manos la máxima libertad de movimiento y sujeción donde se necesita. Inspirados en los rituales de encintado de los porteros, están equipados con un soporte específico y ultramoderno. Al utilizar diferentes elasticidades y grosores en los materiales, cada parte del guante se beneficia de un tratamiento específico para llevar el rendimiento al máximo.",img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/041923/02/fnd/EEA/fmt/png/Guantes-de-portero-FUTURE-Ultimate-NC", stock:10 },
    
    {name:"GUANTES RINAT NKAM PRO ONANA", price: 99.99, category: "guantes", description:"Se el guerrero que tu tribu necesita y cuida tu arco con tenacidad y valentía. Los nuevos NKAM te ayudaran a cumplir tus objetivos y a mejorar tu desempeño. La versión PRO fue hecha al entero gusto de André Onana, quien eligió construcción, corte y tipo de látex. Después de varias semanas de trabajo en conjunto se llegó a este modelo, dotado de muchos detalles técnicos y comodidad absoluta.",img: "https://www.futbolemotion.com/imagesarticulos/219344/750/guante-rinat-nkam-pro-onana-red-yellow-black-0.webp", stock:10 },
    //! Equipaciones de futbol
    {name:"CAMISETA PRIMERA EQUIPACIÓN ARGENTINA 24", price: 75, category: "equipacion", description:"PASIÓN ALBICELESTE. Un estilo atemporal para los eternos campeones del mundo. Desde el icónico diseño a rayas hasta el legendario Sol de Mayo, esta camiseta adidas de la primera equipación de Argentina luce todos los detalles tradicionales que las nuevas generaciones de hinchas sabrán apreciar. A ello se suman unos toques dorados y tres estrellas como homenaje a la épica victoria en Catar. Y porque el confort es lo primero, se ha confeccionado en un tejido transpirable AEROREADY que mantiene la piel seca mientras animas a tu selección sin descanso. El escudo bordado en el pecho remata su look futbolístico. Este producto se ha fabricado con un 100% de materiales reciclados. Utilizando materiales reciclados, reducimos los residuos, nuestra dependencia de los recursos finitos y la huella que generan los productos que fabricamos.",img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c10bd6539ad0435f9dc939c9f3357e43_9366/Camiseta_primera_equipacion_Argentina_24_Adolescentes_Blanco_IP8387_01_laydown.jpg", stock:10 },
    
    { name:"CAMISETA PRIMERA EQUIPACIÓN ESPAÑA 24", price: 75, category: "equipacion", description:"Una tradición futbolística profundamente arraigada. Esta camiseta adidas de la primera equipación de España luce un llamativo estampado del mismo tono inspirado en la belleza del clavel, nuestra flor nacional, y en el movimiento rítmico de las olas del mar. Diseñada para jóvenes hinchas, se ha confeccionado en un tejido transpirable AEROREADY que mantiene la piel seca mientras animas sin descanso. El escudo de la selección cosido en el pecho y el clavel en la nuca ponen el broche final.",img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eb28d02c163841b0b5de4d2fbbd7c296_9366/Camiseta_primera_equipacion_Espana_24_Adolescentes_Rojo_IP9351_01_laydown.jpg", stock:10 },
    
    { name:"CAMISETA PRIMERA EQUIPACIÓN ALEMANIA 24", price: 75, category: "equipacion", description:"La quintaesencia del fútbol germano. Esta versión para jóvenes promesas de la camiseta adidas de la primera equipación de Alemania combina los símbolos más representativos de los tetracampeones del mundo. Luce un estampado inspirado en las plumas del águila en los hombros y el emblema de la DFB (Federación Alemana de Fútbol) repetido en la parte frontal. Se ha confeccionado en un tejido transpirable AEROREADY que mantiene la piel seca. El escudo de la selección cosido en el pecho remata su look futbolístico.",img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/17ed1fd94a6b4b1d967ec2fbfe1c21ab_9366/Camiseta_primera_equipacion_Alemania_24_Adolescentes_Blanco_IP6130_01_laydown.jpg", stock:10 },
    
    { name:"CAMISETA PRIMERA EQUIPACIÓN ITALIA 24", price: 75, category: "equipacion", description:"Aunque es célebre por jugar de azul, su bandera nacional ondea en verde, blanco y rojo. Esta versión para jóvenes promesas de la camiseta adidas de la primera equipación de Italia luce las emblemáticas 3 bandas con un diseño tricolor para que muestres tu pasión futbolera con orgullo. Se ha confeccionado en un tejido suave con tecnología transpirable AEROREADY que mantiene la piel seca mientras animas a tu selección sin descanso. El escudo cosido en el pecho demuestra tu compromiso inquebrantable.",img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d4b05b80c0144e6fb7fd96d4e750d5c4_9366/Camiseta_primera_equipacion_Italia_24_Adolescentes_Azul_IQ0496_01_laydown.jpg", stock:10 },
    //! Accesorios de futbol
    { name:"BALÓN UCL LEAGUE 23/24 KNOCKOUT", price: 40, category: "accesorios", description:"La joya de la corona de Londres. Este balón de fútbol adidas UCL League luce un impresionante diseño inspirado en el estampado del león del esférico oficial de la final de la UEFA Champions League. Perfecto tanto para partidos como sesiones de entrenamiento, presenta una superficie sin costuras con tecnología TSBE y una resistente cámara de butilo que te ofrecen un rendimiento excepcional. Deja que tus habilidades brillen con un balón tan icónico como la competición que representa.",img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/373b49a5fb164c43bfb5f1235f064709_9366/Balon_UCL_League_23-24_Knockout_Blanco_IN9334_02_standard_hover.jpg", stock:10 },
    
    { name:"Nike Mercurial Lite SuperLock", price: 42.99, category: "accesorios", description:"Cuando estás jugando, no quieres pensar en otra cosa. La parte posterior de las espinilleras Nike Mercurial Lite SuperLock está hecha con espuma moldeada para ofrecer un ajuste personalizable, al tiempo que las capas SuperLock se sujetan a las fibras de los calcetines para mantenerlas en su sitio. Además, las fundas cuentan con tecnología de capilarización de la humedad para repeler el sudor.",img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d905f71f-43eb-40f3-af15-3f727cf6ddce/mercurial-lite-superlock-espinilleras-de-futbol-dnxvcb.png", stock:10 },
    
    { name:"Guantes de fútbol individual WINTERIZED", price: 22, category: "accesorios", description:"Los guantes individuales WINTERIZED están realizados para que los uses cuando juegues durante esos días fríos de estación. Mantén las manos abrigadas mientras corres arriba y abajo por el campo de juego.",img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/041873/01/fnd/EEA/fmt/png/Guantes-de-f%C3%BAtbol-individual-WINTERIZED", stock:10 },
    
    { name:"DETERGENTE SP FÚTBOL PARA GUANTES", price: 12.99, category: "accesorios", description:"Nuevo detergente que devuelve la limpieza al guante, mantiene las propiedades de adherencia casi com el primer día y elimina de raiz las bacterias que provocan el mal olor. Además el detergente contiene olor perfumado. Capacidad de 500 ml. Modo de empleo: 1- Utilizar después de un partido, nunca antes. 2- Misma acción de lavarse las manos. Ponerse el guante y humedecerlo. 3- Verter una pequeña cantidad de producto y frotar la espuma sobre el látex (tanto palma como dorso). 4- Aclarar. 5- Quitarse el guante y escurrirlo . 6- Dejarlo secar a temperatura ambiente, nunca cerca de cualquier fuente de calor (sol, calefacción,...)",img: "https://www.futbolemotion.com/imagesarticulos/88778/750/detergente-sp-para-guantes-0.webp", stock:10 },
    ];

    export const seedProducts = () =>{
        products.forEach( product => {
            addDoc(collection (db, "products"), product)
        })
    }