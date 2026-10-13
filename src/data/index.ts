import { Project, WorkExperience, Education, Skill } from '../interfaces/types';

// Definir los datos de los proyectos
export const projectsData: Project[] = [
    {
        title: "Verbose Potato",
        description: "API REST para la gestión de una biblioteca (usuarios, catálogo de libros y préstamos), enfocada en la aplicación práctica de Arquitectura Hexagonal (Ports & Adapters) y DDD sobre un monolito modular. Aplica reglas de negocio estrictas para garantizar la disponibilidad de ejemplares, el control de roles y la consistencia de los datos. Incluye autenticación con JWT, caché con Redis, más del 70 % de cobertura con pruebas unitarias, de integración y E2E, y un pipeline de CI/CD con GitHub Actions que publica la imagen en Docker Hub. Desarrollado con metodología Kanban.",
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
            { "name": "Swagger / OpenAPI", "color": "bg-tech-swagger" },
            { "name": "Kanban", "color": "bg-tech-kanban" }
        ],
        githubLink: "https://github.com/JohannGaviria/verbose-potato",
        createdAt: new Date('2026-09-01'),
        isCollaborative: false,
        role: "Backend Developer"
    },
    {
        title: "Miniature Adventure",
        description: "API REST con Django que conecta estudiantes y empresas con control de acceso por roles: las empresas crean y gestionan ofertas de trabajo, y los estudiantes consultan las ofertas disponibles y se postulan. Contenerizada con Docker y con pruebas automatizadas.",
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
        description: "API REST con Django y PostgreSQL para crear y responder encuestas. Ofrece gestión de perfiles, visualización de resultados y notificaciones sobre la actividad de las encuestas. Contenerizada con Docker y con pruebas automatizadas.",
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
        description: "Plataforma de gestión de cursos online, desarrollada como MVP en la simulación laboral de NoCountry.tech con un equipo multidisciplinario y metodología Scrum (Jira). Mi aporte fue la gestión de usuarios, el catálogo de cursos y los endpoints RESTful del backend.",
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
            { "name": "NodeJS", "color": "bg-tech-nodejs" },
            { "name": "Scrum", "color": "bg-tech-scrum" },
            { "name": "Jira", "color": "bg-tech-jira" }
        ],        
        githubLink: "https://github.com/Daniheto/No-Country-Back-End/pulls?q=is:pr+author:JohannGaviria+is:merged",
        createdAt: new Date('2024-10-31'),
        isCollaborative: true,
        role: "Desarrollador Backend Junior"
    }
];

// Definir los datos de la experencia de trabajo
export const workExperienceData: WorkExperience[] = [
    {
        company: "NoCountry.tech",
        logo: "/nocountry.svg",
        position: "Desarrollador Backend Junior",
        period: "5 semanas",
        description: "Participé en un equipo multidisciplinario remoto que construyó ProfeVirtual, un MVP para una plataforma de cursos online, en un ciclo de cinco semanas con metodología Scrum y seguimiento de tareas en Jira. Desarrollé la gestión de usuarios, el catálogo de cursos y los endpoints RESTful de la lógica de negocio, e integré mi trabajo con el del resto del equipo mediante Git y pull requests.",
        link: "https://www.nocountry.tech/"
    },
    {
        company: "sloptotal",
        position: "Colaborador Open Source",
        description: "Detector open source de texto generado por IA (\"VirusTotal para AI slop\"): analiza texto o URLs con 23 motores independientes que corren localmente en CPU. Contribuí con dos mejoras a la API, ambas mergeadas:",
        highlights: [
            "Agrupé los endpoints de la documentación interactiva (/docs) por dominio con tags de OpenAPI y agregué una prueba automatizada que verifica que cada ruta de la API tenga al menos uno.",
            "Añadí ejemplos de request a los modelos Pydantic para que \"Try it out\" parta con datos de muestra."
        ],
        tech: [
            { name: "Python", color: "bg-tech-python" },
            { name: "FastAPI", color: "bg-tech-fastapi" },
            { name: "Pytest", color: "bg-tech-pytest" }
        ],
        link: "https://github.com/pablocaeg/sloptotal/pulls?q=is:pr+author:JohannGaviria+is:merged"
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
    {name: "Postman", color: "bg-tech-postman"},
    {name: "Scrum", color: "bg-tech-scrum"},
    {name: "Kanban", color: "bg-tech-kanban"},
    {name: "Jira", color: "bg-tech-jira"}
];
