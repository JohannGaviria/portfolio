import { Project, WorkExperience, Education, Skill } from '../interfaces/types';

// Definir los datos de los proyectos
export const projectsData: Project[] = [
    {
        title: "Shiny Umbrella",
        description: "Desarrollo de una API REST que permite a los usuarios crear y participar en encuestas. Ofrece gestión de perfiles, visualización de resultados y notificaciones sobre la actividad de las encuestas, facilitando la recopilación de datos para la toma de decisiones.",
        tech: [
            { "name": "Python", "color": "bg-blue-600" },
            { "name": "Django", "color": "bg-green-600" },
            { "name": "PostgreSQL", "color": "bg-blue-900" },
            { "name": "SQLite", "color": "bg-blue-400" },
            { "name": "JWT", "color": "bg-yellow-400" },
            { "name": "Docker", "color": "bg-blue-600" },
            { "name": "GIT", "color": "bg-red-500" },
            { "name": "GitHub", "color": "bg-gray-900" },
            { "name": "Postman", "color": "bg-orange-500" },
            { "name": "Testing", "color": "bg-green-500" }
        ],        
        githubLink: "https://github.com/JohannGaviria/shiny-umbrella",
        deployLink: "https://shiny-umbrella-production.up.railway.app/",
        createdAt: new Date('2024-12-09'),
        isCollaborative: false,
        role: "Desarrollador Principal"
    },
    {
        title: "ProfeVirtual",
        description: "Plataforma de gestión de cursos online desarrollada como parte del MVP para NoCountry.tech. Este proyecto fue realizado en colaboración con un equipo multidisciplinario, combinando habilidades de desarrollo backend, diseño de experiencia de usuario y gestión de proyectos, con el objetivo de crear una solución eficiente y escalable para la administración de cursos en línea.",
        tech: [
            { "name": "Python", "color": "bg-blue-600" },
            { "name": "Django", "color": "bg-green-600" },
            { "name": "PostgreSQL", "color": "bg-blue-900" },
            { "name": "JWT", "color": "bg-yellow-400" },
            { "name": "Docker", "color": "bg-blue-600" },
            { "name": "GIT", "color": "bg-red-500" },
            { "name": "GitHub", "color": "bg-gray-900" },
            { "name": "JavaScript", "color": "bg-yellow-500" },
            { "name": "React", "color": "bg-blue-600" },
            { "name": "NodeJS", "color": "bg-green-600" }
        ],        
        githubLink: "https://github.com/Daniheto/No-Country-Back-End",
        deployLink: "https://boisterous-cocada-c1efb2.netlify.app/",
        createdAt: new Date('2024-10-31'),
        isCollaborative: true,
        role: "Desarrollador Backend"
    }
];

// Definir los datos de la experencia de trabajo
export const workExperienceData: WorkExperience[] = [
    {
        company: "NoCountry.tech",
        logo: "/nocountry.svg",
        position: "Desarrollador Backend",
        period: "Sep 2024 - Nov 2024",
        description: "Participé en la creación de un MVP para una plataforma de cursos online, implementando gestión de usuarios, cursos e integración de pagos, desarrollando la lógica de negocio y endpoints necesarios."
    }
];

// Definir los datos de la educación
export const educationData: Education[] = [
    {
        degree: "Tecnología en Desarrollo de Software",
        institution: "Inst. Uni. Pascual Bravo",
        period: "2024 - Presente",
    },
    {
        degree: "Técnica Laboral en Desarrollo Software",
        institution: "Inst. Uni. Pascual Bravo / Inst. Edu. Sol de Oriente",
        period: "2022 - 2023",
    }
];

// Definir los datos de las habilidades
export const skillsData: Skill[] = [
    {name: "Python", color: "bg-blue-600"},
    {name: "Django", color: "bg-green-600"},
    {name: "Flask", color: "bg-gray-900"},
    {name: "PostgreSQL", color: "bg-blue-900"},
    {name: "MySQL", color: "bg-blue-500"},
    {name: "MongoDB", color: "bg-green-600"},
    {name: "SQLite", color: "bg-blue-400"},
    {name: "Docker", color: "bg-blue-600"},
    {name: "GIT", color: "bg-red-500"},
    {name: "GitHub", color: "bg-gray-900"},
    {name: "Postman", color: "bg-orange-500"},
    {name: "Testing", color: "bg-green-500"},
    {name: "JWT", color: "bg-yellow-400"},
];
