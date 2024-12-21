import { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink, Calendar, Download, Flame, X } from 'lucide-react';
import { projectsData, workExperienceData, educationData, skillsData } from '../data/index';
import { Project } from '../interfaces/types';

export default function Perfil() {
    // Estado para gestionar el índice de tecnología actual para cada proyecto
    const [techIndexes, setTechIndexes] = useState<number[]>(
        projectsData.map(() => 0) // Inicializa el índice de tecnología a 0 para cada proyecto
    );
    // Estado para gestionar las habilidades seleccionadas
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    // Estado para gestionar el proyecto seleccionado para el modal
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Cambia la tecnología para cada proyecto cada 2 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setTechIndexes((prevIndexes) =>
                prevIndexes.map((index, i) => {
                    const projectTechCount = projectsData[i].tech.length;
                    return (index + 1) % projectTechCount; // Reinicia el índice cuando llega al final
                })
            );
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Maneja los clics en las habilidades seleccionadas
    const handleSkillClick = (skill: string) => {
        setSelectedSkills((prev) =>
            prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
        );
    };

    // Obtiene el color para una habilidad
    const getSkillColor = (skill: string): string => {
        for (const skillData of skillsData) {
            if (skillData.name === skill) {
                return `bg-tech-${skillData.name.toLowerCase()}`;
            }
        }
        return 'bg-button';
    };

    // Filtra proyectos basados en las habilidades seleccionadas
    const filteredProjects = selectedSkills.length
        ? projectsData.filter((project) =>
            project.tech.some((tech) => selectedSkills.includes(tech.name))
        )
        : projectsData;

    // Determina si un proyecto es nuevo (creado en los últimos 30 días)
    const isNewProject = (createdAt: Date) => {
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - new Date(createdAt).getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 30;
    };

    return (
        <div className="min-h-screen bg-background text-text">
            <main className="max-w-7xl mx-auto px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                        {/* Información de perfil */}
                        <div className="bg-backgroundCard rounded-lg border border-transparent shadow-sm p-6">
                            <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-b from-backgroundCard to-background mx-auto mb-6">
                                <img
                                    src="/profile.webp"
                                    alt="Foto de Johann Gaviria"
                                    width={192}
                                    height={192}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h1 className="text-2xl font-bold mb-1 text-title-max">Johann Gaviria</h1>
                            <p className="text-subtitle-max mb-4">Desarrollador Software</p>
                            <p className="text-text text-sm mb-6">
                                Mi enfoque principal es el desarrollo backend, con una fuerte pasión por Python. Me motiva aprender nuevas tecnologías, crear soluciones eficientes y trabajar en equipo. A corto plazo, busco mi primera experiencia laboral como desarrollador backend, y a largo plazo, quiero seguir creciendo en el campo del software y liderar equipos en proyectos innovadores.
                            </p>
                            {/* Enlaces de redes sociales */}
                            <div className="flex gap-4 justify-start mb-6">
                                <a
                                    href="/CV-JohannGaviria.pdf"
                                    className="text-iconsSocial hover:text-iconsSocialHover transition-colors"
                                    download
                                >
                                    <Download size={24} />
                                </a>
                                <a href="https://github.com/JohannGaviria" className="text-iconsSocial hover:text-iconsSocialHover transition-colors" target='_blank'>
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/johanngaviria" className="text-iconsSocial hover:text-iconsSocialHover transition-colors" target='_blank'>
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://dev.to/johanngaviria" className="text-iconsSocial hover:text-iconsSocialHover transition-colors" target='_blank'>
                                    <ExternalLink size={24} />
                                </a>
                            </div>
                            {/* Botón de contacto */}
                            <button className="w-full bg-button text-text py-2 px-6 rounded-md hover:bg-buttonHover transition-colors mb-6">
                                <a href="https://cal.com/johanngaviria/15min" target='_blank'>
                                    CONTACTAME
                                </a>
                            </button>
                            {/* Sección de habilidades */}
                            <div className="border-t border-button pt-6">
                                <h2 className="text-lg font-semibold mb-4 text-title-min">Habilidades</h2>
                                <div className="flex flex-wrap gap-2">
                                    {skillsData.map((skill) => (
                                        <span
                                            key={skill.name}
                                            onClick={() => handleSkillClick(skill.name)}
                                            className={`cursor-pointer px-3 py-1 rounded-md text-sm ${
                                                selectedSkills.includes(skill.name)
                                                    ? getSkillColor(skill.name)
                                                    : 'bg-button'
                                            } text-text`}
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 space-y-12">
                        {/* Sección de proyectos destacados */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-title-min">Proyectos Destacados</h2>
                            {filteredProjects.length === 0 ? (
                                <p className="text-center text-lg text-subtitle">No hay proyectos que coincidan con las tecnologías seleccionadas.</p>
                            ) : (
                                <div className="grid md:grid-cols-2 gap-6">
                                    {filteredProjects.map((project, projectIndex) => (
                                        <div key={project.title} className="relative rounded-lg bg-backgroundCard p-6 min-h-full cursor-pointer" onClick={() => setSelectedProject(project)}>
                                            {isNewProject(project.createdAt) && (
                                                <Flame size={24} className="absolute top-2 right-2 text-red-500" />
                                            )}
                                            <h3 className="text-xl font-semibold mb-2 text-subtitle-max">{project.title}</h3>
                                            <p className="text-text mb-4 line-clamp-3">{project.description}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex items-center gap-1">
                                                        <div className={`w-2 h-2 rounded-full bg-tech-${project.tech[techIndexes[projectIndex]].name.toLowerCase()}`} />
                                                        <span className="text-sm text-text">{project.tech[techIndexes[projectIndex]].name}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    {project.githubLink && (
                                                        <a
                                                            href={project.githubLink}
                                                            className="text-iconsSocial hover:text-iconsSocialHover transition-colors"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Github size={20} />
                                                        </a>
                                                    )}
                                                    {project.deployLink && (
                                                        <a
                                                            href={project.deployLink}
                                                            className="text-iconsSocial hover:text-iconsSocialHover transition-colors"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <ExternalLink size={20} />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                        {/* Sección de experiencia laboral */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-title-min">Experiencia Laboral</h2>
                            {workExperienceData.map((work) => (
                                <div key={work.company} className="rounded-lg bg-backgroundCard p-6 mb-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={work.logo}
                                            alt={work.company}
                                            width={48}
                                            height={48}
                                            className="rounded"
                                        />
                                        <div className="flex flex-col">
                                            <h3 className="text-xl font-semibold text-subtitle-max">{work.position}</h3>
                                            <p className="text-subtitle-min">{work.company}</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex items-center gap-2 text-text text-sm mt-2 mb-2">
                                            <Calendar size={16} />
                                            <span>{work.period}</span>
                                        </div>
                                        <p className="text-text">{work.description}</p>
                                    </div>
                                </div>
                            ))}
                        </section>
                        {/* Sección de educación */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-title-min">Educación</h2>
                            <div className="relative border-l border-white-200 pl-4">
                                {educationData.map((edu, index) => (
                                    <div key={edu.institution} className="mb-10 ml-6">
                                        <span className="absolute flex items-center justify-center w-6 h-6 bg-background rounded-full -left-3 ring-8 ring-backgroundCard">
                                            <svg
                                                aria-hidden="true"
                                                className="w-3 h-3 text-iconSocial"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                        <h3 className="flex items-center mb-1 text-lg font-semibold text-subtitle-max">
                                            {edu.degree}
                                        </h3>
                                        <time className="block mb-2 text-sm font-normal leading-none text-subtitle-min">
                                            {edu.period}
                                        </time>
                                        <p className="mb-2 text-base font-normal text-text">
                                            {edu.institution}
                                        </p>
                                        {edu.description && (
                                            <p className="text-base font-normal text-text">{edu.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            {/* Modal para el proyecto seleccionado */}
            {selectedProject && (
                <div className="fixed inset-0 bg-background bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-backgroundCard rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-subtitle-max">{selectedProject.title}</h2>
                            <button onClick={() => setSelectedProject(null)} className="text-iconsSocial hover:text-iconsSocialHover transition-colors">
                                <X size={24} />
                            </button>
                        </div>
                        <p className="text-text mb-4">{selectedProject.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {selectedProject.tech.map((tech) => (
                                <span key={tech.name} className={`px-3 py-1 rounded-md text-sm bg-tech-${tech.name.toLowerCase()} text-text`}>
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                        <p className="text-text mb-4"><strong className="text-subtitle-min">Rol:</strong> {selectedProject.role}</p>
                        <p className="text-text mb-4"><strong className="text-subtitle-min">Tipo de Proyecto:</strong> {selectedProject.isCollaborative ? 'Colaborativo' : 'Personal'}</p>
                        <div className="flex gap-3">
                            {selectedProject.githubLink && (
                                <a
                                    href={selectedProject.githubLink}
                                    className="text-iconsSocial hover:text-iconsSocialHover transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github size={24} />
                                </a>
                            )}
                            {selectedProject.deployLink && (
                                <a
                                    href={selectedProject.deployLink}
                                    className="text-iconsSocial hover:text-iconsSocialHover transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink size={24} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}