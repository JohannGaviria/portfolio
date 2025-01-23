import { Project, WorkExperience, Education, Skill } from '../interfaces/types';

// Definir los datos de los proyectos
export const projectsData: Project[] = [
    {
        title: "Miniature Adventure",
        description: "Desarrollo de una API REST para la gestión de ofertas de trabajo entre estudiantes y empresas, permite a los usuarios, ya sean estudiantes o empresas, registrarse y utilizar la plataforma. Las empresas tienen la capacidad de crear, gestionar y eliminar ofertas de trabajo. Por otro lado, los estudiantes pueden visualizar ofertas disponibles y postularse a las ofertas de su preferencia.",
        tech: [
            { "name": "Python", "color": "bg-tech-python" },
            { "name": "Django", "color": "bg-tech-django" },
            { "name": "PostgreSQL", "color": "bg-tech-postgresql" },
            { "name": "JWT", "color": "bg-tech-jwt" },
            { "name": "Docker", "color": "bg-tech-docker" },
            { "name": "GIT", "color": "bg-tech-git" },
            { "name": "GitHub", "color": "bg-tech-github" },
            { "name": "Postman", "color": "bg-tech-postman" },
            { "name": "Testing", "color": "bg-tech-testing" },
            { "name": "RestAPI", "color": "bg-tech-restapi" },
        ],
        githubLink: "https://github.com/JohannGaviria/miniature-adventure",
        createdAt: new Date('2025-01-23'),
        isCollaborative: false,
        role: "Desarrollador Principal"
    },
    {
        title: "Shiny Umbrella",
        description: "Desarrollo de una API REST que permite a los usuarios crear y participar en encuestas. Ofrece gestión de perfiles, visualización de resultados y notificaciones sobre la actividad de las encuestas, facilitando la recopilación de datos para la toma de decisiones.",
        tech: [
            { "name": "Python", "color": "bg-tech-python" },
            { "name": "Django", "color": "bg-tech-django" },
            { "name": "PostgreSQL", "color": "bg-tech-postgresql" },
            { "name": "JWT", "color": "bg-tech-jwt" },
            { "name": "Docker", "color": "bg-tech-docker" },
            { "name": "GIT", "color": "bg-tech-git" },
            { "name": "GitHub", "color": "bg-tech-github" },
            { "name": "Postman", "color": "bg-tech-postman" },
            { "name": "Testing", "color": "bg-tech-testing" },
            { "name": "RestAPI", "color": "bg-tech-restapi" },
        ],        
        githubLink: "https://github.com/JohannGaviria/shiny-umbrella",
        createdAt: new Date('2024-12-09'),
        isCollaborative: false,
        role: "Desarrollador Principal"
    },
    {
        title: "ProfeVirtual",
        description: "Plataforma de gestión de cursos online desarrollada como parte del MVP para NoCountry.tech. Este proyecto fue realizado en colaboración con un equipo multidisciplinario, combinando habilidades de desarrollo backend, diseño de experiencia de usuario y gestión de proyectos, con el objetivo de crear una solución eficiente y escalable para la administración de cursos en línea.",
        tech: [
            { "name": "Python", "color": "bg-tech-python" },
            { "name": "Django", "color": "bg-tech-django" },
            { "name": "PostgreSQL", "color": "bg-tech-postgrsql" },
            { "name": "JWT", "color": "bg-tech-jwt" },
            { "name": "Docker", "color": "bg-tech-docker" },
            { "name": "GIT", "color": "bg-tech-git" },
            { "name": "GitHub", "color": "bg-tech-github" },
            { "name": "RestAPI", "color": "bg-tech-restapi" },
            { "name": "JavaScript", "color": "bg-tech-javascript" },
            { "name": "React", "color": "bg-tech-react" },
            { "name": "NodeJS", "color": "bg-tech-nodejs" }
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
    {name: "Python", color: "bg-tech-python"},
    {name: "Django", color: "bg-tech-django"},
    {name: "Flask", color: "bg-tech-flask"},
    {name: "PostgreSQL", color: "bg-tech-postgresql"},
    {name: "MySQL", color: "bg-tech-mysql"},
    {name: "MongoDB", color: "bg-tech-mongodb"},
    {name: "SQLite", color: "bg-tech-sqlite"},
    {name: "Docker", color: "bg-tech-docker"},
    {name: "GIT", color: "bg-tech-git"},
    {name: "GitHub", color: "bg-tech-github"},
    {name: "Postman", color: "bg-tech-postman"},
    {name: "Testing", color: "bg-tech-testing"},
    {name: "JWT", color: "bg-tech-jwt"},
    {name: "RestAPI", color: "bg-tech-restapi"}
];
