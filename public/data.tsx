import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";
import { title } from "process";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "3 años de experiencia de experiencia academica ",
    },
    // {
    //     // id: 2,
    //     // name: "Clientes",
    //     // icon: <UsersRound />,
    //     // description: "+200 clientes satisfechos",
    // },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+10 completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/1.jpg",
    },
    {
        id: 2,
        url: "/2.png",
    },
    {
        id: 3,
        url: "/2.jpg",
    },
    // {
    //     id: 4,
    //     url: "/slider-4.jpg",
    // },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Eccomerce simulacion",
        image: "/vivero.jpg",
        urlGithub: "https://github.com/cristian1764/ecommerce_vivero.git",
        urlDemo: "https://developerscris.fun/",
    },
    {
        id: 2,
        title: "Manego de Apis",
        image: "/apis.jpg",
        urlGithub: "#!",
        urlDemo: "/apis.jpg",
    },
     {
         id: 3,
         title: "Feria en blender",
         image: "/parque.jpg",
         urlGithub: "#!",
         urlDemo: "/feria.mp4",
     },
    // {
    //     id: 4,
    //     title: "Navegando Ideas Creativas",
    //     image: "/image-4.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 5,
    //     title: "Sitios Web Impactantes",
    //     image: "/image-5.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 6,
    //     title: "Proyectos Web Dinámicos",
    //     image: "/image-6.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
];

export const dataCertifiquey = [
    {
        id:1,
        title:"ciberseguridad",
        image:"/1.jpg",
        urlDemo:"/1.jpg"
    },
    {
        id:1,
        title:"Talen Land",
        image:"/cert1.png",
        urlDemo:"/1.jpg"
    }

];

export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development  😗",
        experience: [
            {
                name: "HTML",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "CSS",
                subtitle: "Intermedio",
                value: 50,
            },
            {
                name: "JavaScript",
                subtitle: "Intermedio",
                value: 70,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Basico",
                value: 30,
            },
            {
                name: "React",
                subtitle: "Basico",
                value: 0,
            },
            {
                name: "Bootstrap",
                subtitle: "Basico",
                value: 50,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🥷",
        experience: [
            {
                name: "Node JS",
                subtitle: "Basico",
                value: 30,
            },
            {
                name: "Mongo DB",
                subtitle: "Basico",
                value: 45,
            },
            {
                name: "Python",
                subtitle: "Basico",
                value: 40,
            },
            {
                name: "MySQL",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "PHP",
                subtitle: "Experimentado",
                value: 80,
            },
            // {
            //     name: "Django",
            //     subtitle: "Basic",
            //     value: 60,
            // },
        ],
    },

        {
        id: 3,
        title: "Extras  😎🚀",
        experience: [
            {
                name: "Blender",
                subtitle: "Intermedio",
                value: 70,
            },
            {
                name: "Manejo de fibra óptica ",
                subtitle: "Intermedio",
                value: 45,
            },
            {
                name: "Ponchado y nodos de cable",
                subtitle: "Intermedio",
                value: 40,
            },
            // {
            //     name: "MySQL",
            //     subtitle: "Experimentado",
            //     value: 60,
            // },
            // {
            //     name: "PHP",
            //     subtitle: "Experimentado",
            //     value: 80,
            // },
            // {
            //     name: "Django",
            //     subtitle: "Basic",
            //     value: 60,
            // },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Proyectos escolares y personales con Laravel, Next.js y Tailwind",
            },
            {
                name: "Diseño y maquetación responsive",
            },
            {
                name: "Gestión de bases de datos con MySQL y phpMyAdmin",
            },
            {
                name: "Creación de APIs y manejo de endpoints",
            },
            {
                name: "E-commerce básico con importación de datos desde Excel",
            },
            {
                name: "Despliegue de proyectos en hosting con dominio propio y SSL",
            },
        ],
    },
    {
        id: 2,
        title: "Proyectos Multimedia",
        icon: <BellPlus />,
        features: [
            {
                name: "Modelado 3D en Blender (proyectos escolares, como juego mecánico Kamikaze)",
            },
            {
                name: "Edición y adaptación de imágenes con CSS y Tailwind",
            },
            {
                name: "Diseño de interfaces simples con Bootstrap y React",
            },
            {
                name: "Presentaciones escolares con integración de backend y frontend",
            },
            {
                name: "Prototipos de sistemas contables y de capacitación",
            },
        ],
    },
    {
        id: 3,
        title: "UI/UX Básico",
        icon: <Brush />,
        features: [
            {
                name: "Interfaz sencilla y centrada en la experiencia del usuario",
            },
            {
                name: "Uso de prototipado básico para visualizar ideas",
            },
            {
                name: "Aplicación de principios de usabilidad en proyectos académicos",
            },
            {
                name: "Diseño responsive para móviles y escritorio",
            },
            {
                name: "Iteración y mejora a partir de retroalimentación de usuarios",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+52 72 21 52 66 86",
        link: "tel:+527221526686",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "https://github.com/cristian1764",
        link: "https://github.com/cristian1764",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "cristianvaldes729@gmail.com",
        link: "mailto:cristianvaldes729@gmail.com",
        icon: <Inbox />,
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile-1.jpg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile-2.jpg",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile-3.jpg",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile-3.jpg",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile-2.jpg",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile-3.jpg", 
    },
];