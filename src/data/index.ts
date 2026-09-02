import { Project, WorkExperience, Education, Skill } from '../interfaces/types';

// Definir los datos de los proyectos
export const projectsData: Project[] = [
    {
        title: "Verbose Potato",
        description: "API REST para la gestión de una biblioteca, enfocada en la aplicación práctica de Arquitectura Hexagonal (Ports & Adapters) y un Monolito Modular orientado al dominio. Permite administrar usuarios, catálogo de libros y préstamos, aplicando reglas de negocio estrictas para garantizar la disponibilidad de ejemplares, el control de roles y la consistencia de los datos. Incluye una suite de pruebas automatizadas con integración continua (CI/CD) para asegurar la calidad del código.",
        tech: [
            { "name": "Python", "color": "bg-tech-python" },
            { "name": "FastAPI", "color": "bg-tech-fastapi" },
            { "name": "PostgreSQL", "color": "bg-tech-postgresql" },
            { "name": "Redis", "color": "bg-tech-redis" },
            { "name": "SQLAlchemy", "color": "bg-tech-sqlalchemy" },
            { "name": "Alembic", "color": "bg-tech-alembic" },
            { "name": "Pydantic", "color": "bg-tech-pydantic" },
            { "name": "Docker", "color": "bg-tech-docker" },
            { "name": "Docker Compose", "color": "bg-tech-docker" },
            { "name": "Pytest", "color": "bg-tech-pytest" },
            { "name": "GitHub Actions", "color": "bg-tech-githubactions" },
            { "name": "Structlog", "color": "bg-tech-structlog" },
            { "name": "Arquitectura Hexagonal (Ports & Adapters)", "color": "bg-tech-hexagonal" },
            { "name": "Domain-Driven Design (DDD)", "color": "bg-tech-ddd" },
            { "name": "CI/CD", "color": "bg-tech-githubactions" },
            { "name": "Ruff", "color": "bg-tech-ruff" },
            { "name": "Mypy", "color": "bg-tech-mypy" },
            { "name": "Swagger / OpenAPI", "color": "bg-tech-swagger" }
        ],
        githubLink: "https://github.com/JohannGaviria/verbose-potato",
        createdAt: new Date('2026-09-01'),
        isCollaborative: false,
        role: "Backend Developer"
    },
    {
        title: "Miniature Adventure",
        description: "Desarrollo de una API REST para la gestión de ofertas de trabajo entre estudiantes y empresas, permite a los usuarios, ya sean estudiantes o empresas, registrarse y utilizar la plataforma. Las empresas tienen la capacidad de crear, gestionar y eliminar ofertas de trabajo. Por otro lado, los estudiantes pueden visualizar ofertas disponibles y postularse a las ofertas de su preferencia.",
        tech: [
            { "name": "Python", "color": "bg-tech-python" },
            { "name": "Django", "color": "bg-tech-django" },
            { "name": "PostgreSQL", "color": "bg-tech-postgresql" },
            { "name": "JWT", "color": "bg-tech-jwt" },
            { "name": "Docker", "color": "bg-tech-docker" },
            { "name": "Docker Compose", "color": "bg-tech-docker" },
            { "name": "GIT", "color": "bg-tech-git" },
            { "name": "GitHub", "color": "bg-tech-github" },
            { "name": "Postman", "color": "bg-tech-postman" },
            { "name": "Testing", "color": "bg-tech-testing" },
            { "name": "APIs RESTful", "color": "bg-tech-restapi" },
            { "name": "Django REST Framework (DRF)", "color": "bg-tech-drf" },
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
            { "name": "Docker Compose", "color": "bg-tech-docker" },
            { "name": "GIT", "color": "bg-tech-git" },
            { "name": "GitHub", "color": "bg-tech-github" },
            { "name": "Postman", "color": "bg-tech-postman" },
            { "name": "Testing", "color": "bg-tech-testing" },
            { "name": "APIs RESTful", "color": "bg-tech-restapi" },
            { "name": "Django REST Framework (DRF)", "color": "bg-tech-drf" },
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
            { "name": "PostgreSQL", "color": "bg-tech-postgresql" },
            { "name": "JWT", "color": "bg-tech-jwt" },
            { "name": "Docker", "color": "bg-tech-docker" },
            { "name": "Docker Compose", "color": "bg-tech-docker" },
            { "name": "GIT", "color": "bg-tech-git" },
            { "name": "GitHub", "color": "bg-tech-github" },
            { "name": "APIs RESTful", "color": "bg-tech-restapi" },
            { "name": "Django REST Framework (DRF)", "color": "bg-tech-drf" },
            { "name": "JavaScript", "color": "bg-tech-javascript" },
            { "name": "React", "color": "bg-tech-react" },
            { "name": "NodeJS", "color": "bg-tech-nodejs" }
        ],        
        githubLink: "https://github.com/Daniheto/No-Country-Back-End",
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
        description: "Participé en un equipo multidisciplinario en el desarrollo de ProfeVirtual, un MVP para una plataforma de cursos online. Implementé la gestión de usuarios, el catálogo de cursos y los endpoints RESTful necesarios para la lógica de negocio."
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
    {name: "FastAPI", color: "bg-tech-fastapi"},
    {name: "Django", color: "bg-tech-django"},
    {name: "Django REST Framework (DRF)", color: "bg-tech-drf"},
    {name: "Pydantic", color: "bg-tech-pydantic"},
    {name: "Arquitectura Hexagonal (Ports & Adapters)", color: "bg-tech-hexagonal"},
    {name: "Domain-Driven Design (DDD)", color: "bg-tech-ddd"},
    {name: "APIs RESTful", color: "bg-tech-restapi"},
    {name: "Swagger / OpenAPI", color: "bg-tech-swagger"},
    {name: "PostgreSQL", color: "bg-tech-postgresql"},
    {name: "Redis", color: "bg-tech-redis"},
    {name: "SQLAlchemy", color: "bg-tech-sqlalchemy"},
    {name: "Alembic", color: "bg-tech-alembic"},
    {name: "Pytest (Unitarias, Integración, E2E)", color: "bg-tech-pytest"},
    {name: "Ruff", color: "bg-tech-ruff"},
    {name: "Mypy", color: "bg-tech-mypy"},
    {name: "Structlog", color: "bg-tech-structlog"},
    {name: "Docker", color: "bg-tech-docker"},
    {name: "Docker Compose", color: "bg-tech-docker"},
    {name: "GitHub Actions", color: "bg-tech-githubactions"},
    {name: "CI/CD", color: "bg-tech-githubactions"},
    {name: "Git & GitHub", color: "bg-tech-git"},
    {name: "JWT", color: "bg-tech-jwt"},
    {name: "Postman", color: "bg-tech-postman"}
];
