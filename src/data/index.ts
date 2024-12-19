import { Project, WorkExperience, Education } from '../interfaces/types';

// Definir los datos de los proyectos
export const projectsData: Project[] = [
    {
        title: "Shiny Umbrella",
        description: "Rest API para crear y participar en encuestas, con gestión de perfiles, visualización de resultados y notificaciones.",
        tech: [
            { "name": "Python", "color": "bg-yellow-500" },
            { "name": "Django", "color": "bg-green-600" },
            { "name": "PostgreSQL", "color": "bg-blue-600" },
            { "name": "SQLite", "color": "bg-gray-500" },
            { "name": "JWT", "color": "bg-yellow-400" },
            { "name": "Docker", "color": "bg-blue-600" },
            { "name": "GIT", "color": "bg-red-600" },
            { "name": "GitHub", "color": "bg-gray-900" },
            { "name": "Postman", "color": "bg-orange-500" },
            { "name": "Testing", "color": "bg-blue-400" }
        ],        
        githubLink: "https://github.com/JohannGaviria/shiny-umbrella",
        deployLink: "https://shiny-umbrella-production.up.railway.app/"
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
export const skillsData = [
    "Python", "Django", "Flask",
    "PostgreSQL", "MySQL", "MongoDB", "SQLite",
    "Docker", "Git", "GitHub",
    "Postman", "Testing", "JWT"
];
