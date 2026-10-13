import { useState, useEffect, useLayoutEffect } from 'react';
import { Github, Linkedin, ExternalLink, Calendar, Download, Flame, X } from 'lucide-react';
import { projectsData, workExperienceData, educationData, skillsData } from '../data/index';
import { Project } from '../interfaces/types';

// Normaliza un nombre de tecnología para emparejar etiquetas largas (p. ej.
// "Pytest (Unitarias, ...)" con "Pytest": minúsculas, sin paréntesis ni símbolos.
const normalizeTech = (s: string) =>
    s.toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z0-9]/g, '');

export default function Perfil() {
    // Estado para alternar la tecnología destacada de cada proyecto
    const [techIndexes, setTechIndexes] = useState<number[]>(
        projectsData.map(() => 0)
    );
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setTechIndexes((prevIndexes) =>
                prevIndexes.map((index, i) => {
                    const projectTechCount = projectsData[i].tech.length;
                    return (index + 1) % projectTechCount;
                })
            );
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Filtra proyectos basados en las habilidades seleccionadas
    const filteredProjects = selectedSkills.length
        ? projectsData.filter((project) =>
            project.tech.some((tech) =>
                selectedSkills.some((skill) => {
                    const normSkill = normalizeTech(skill);
                    const normTech = normalizeTech(tech.name);
                    return normSkill === normTech
                        || normSkill.includes(normTech)
                        || normTech.includes(normSkill);
                })
            )
        )
        : projectsData;

    // Clave del conjunto visible para re-observar las tarjetas al filtrar/desfiltrar
    const filteredKeys = filteredProjects.map((p) => p.title).join('|');

    // Revela progresivamente los bloques al hacer scroll (respeta prefers-reduced-motion).
    // Se re-ejecuta al cambiar el conjunto de proyectos para re-observar las tarjetas
    // que se montan/desmontan al filtrar, evitando que queden ocultas (opacity 0).
    useLayoutEffect(() => {
        if (!('IntersectionObserver' in window)) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.revealed)'));
        if (!elements.length) return;

        elements.forEach((el) => el.classList.add('reveal'));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [filteredKeys]);

    const handleSkillClick = (skill: string) => {
        setSelectedSkills((prev) =>
            prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
        );
    };

    // Determina si un proyecto es nuevo (creado en los últimos 30 días)
    const isNewProject = (createdAt: Date) => {
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - new Date(createdAt).getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 30;
    };

    // Maneja el clic en los enlaces de los proyectos para evitar que el modal se abra
    const handleProjectLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, project: Project) => {
        e.stopPropagation();
        setSelectedProject(null);
    };

    return (
        <div className="min-h-screen bg-background text-text">
            <main className="max-w-7xl mx-auto px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-1" data-reveal>
                        {/* Información de perfil */}
                        <div className="bg-[#151325]/70 backdrop-blur-md rounded-2xl border border-[#8F8AF6]/20 shadow-2xl shadow-black/40 p-6">
                            <div className="relative flex flex-col items-center gap-4 mb-6">
                                <div className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-b from-accent/50 via-backgroundCard to-background">
                                    {/* Resplandor ambiental detrás de la foto */}
                                    <div aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8F8AF6] opacity-30 blur-3xl" />
                                    <div className="relative aspect-square w-full h-full rounded-full overflow-hidden ring-1 ring-borderSoft">
                                        <img
                                            src="/profile.webp"
                                            alt="Foto de Johann Gaviria"
                                            width={160}
                                            height={160}
                                            className="absolute inset-0 w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </div>
                                <h1 className="text-2xl font-bold text-title">Johann Gaviria</h1>
                                <p className="font-medium text-accent">Desarrollador Backend Junior</p>
                            </div>
                            <p className="text-text text-sm leading-relaxed mb-6">
                                Especializado en el ecosistema Python (FastAPI, Django) y bases de datos PostgreSQL. Me enfoco en el desarrollo de APIs RESTful escalables aplicando principios de arquitectura limpia y buenas prácticas de diseño. Apasionado por la calidad de código mediante pruebas automatizadas con Pytest y el despliegue con Docker.
                            </p>
                            {/* Enlaces de redes sociales */}
                            <div className="flex gap-4 justify-start mb-8">
                                <a
                                    href="/JOHANN-GAVIRIA-CV.pdf"
                                    className="text-text hover:text-accentHover hover:-translate-y-0.5 transition-[color,transform] duration-150 ease-out"
                                    download
                                    aria-label="Descargar CV"
                                >
                                    <Download size={24} />
                                </a>
                                <a href="https://github.com/JohannGaviria" className="text-text hover:text-accentHover hover:-translate-y-0.5 transition-[color,transform] duration-150 ease-out" target='_blank' aria-label="Perfil de GitHub">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/johanngaviria" className="text-text hover:text-accentHover hover:-translate-y-0.5 transition-[color,transform] duration-150 ease-out" target='_blank' aria-label="Perfil de LinkedIn">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                            {/* Botón de contacto */}
                            <button className="w-full bg-accent text-background font-semibold py-2.5 px-6 rounded-lg text-sm tracking-wide hover:bg-accentHover active:scale-[0.97] transition-[background-color,transform] duration-150 ease-out mt-4 mb-6">
                                <a href="https://cal.com/johanngaviria/15min" target='_blank'>
                                    CONTÁCTAME
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-2 space-y-12">
                        {/* Sección de proyectos destacados */}
                        <section>
                            {/* Barra de filtros flotante (sticky) sobre Proyectos Destacados */}
                            <div className="sticky top-4 z-20 -mx-1 mb-6 px-1">
                                <div className="relative rounded-2xl bg-[#01030C]/80 backdrop-blur-md border border-borderSoft shadow-card p-3">
                                    <div className="flex overflow-x-auto no-scrollbar gap-2 py-2">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedSkills([])}
                                            aria-pressed={!selectedSkills.length}
                                            className={`shrink-0 cursor-pointer border px-3 py-1.5 rounded-lg text-xs transition-colors duration-150 ${
                                                !selectedSkills.length
                                                    ? 'bg-accent border-accent text-background font-medium shadow-[0_0_12px_rgba(143,138,246,0.4)]'
                                                    : 'bg-backgroundCard border-borderSoft text-text hover:text-white hover:border-[#8F8AF6]'
                                            }`}
                                        >
                                            ✨ Todos
                                        </button>
                                        {skillsData.map((skill) => (
                                            <button
                                                type="button"
                                                key={skill.name}
                                                title={skill.name}
                                                onClick={() => handleSkillClick(skill.name)}
                                                aria-pressed={selectedSkills.includes(skill.name)}
                                                className={`shrink-0 cursor-pointer border whitespace-nowrap px-3 py-1.5 rounded-lg text-xs transition-colors duration-150 ${
                                                    selectedSkills.includes(skill.name)
                                                        ? 'bg-accent border-accent text-background font-medium shadow-[0_0_12px_rgba(143,138,246,0.4)]'
                                                        : 'bg-backgroundCard border-borderSoft text-text hover:text-white hover:border-[#8F8AF6]'
                                                }`}
                                            >
                                                {skill.name}
                                            </button>
                                        ))}
                                    </div>
                                    {/* Fade a la derecha indica que hay más chips */}
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-y-0 right-0 w-10 rounded-r-2xl bg-gradient-to-l from-[#01030C]/80 to-transparent"
                                    />
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold mb-8 text-title" data-reveal>Proyectos Destacados</h2>
                            {filteredProjects.length === 0 ? (
                                <p className="text-center text-lg text-text">No hay proyectos que coincidan con las tecnologías seleccionadas.</p>
                            ) : (
                                <div className="grid md:grid-cols-2 gap-6">
                                    {filteredProjects.map((project, projectIndex) => (
                                        <div
                                            key={project.title}
                                            data-reveal
                                            style={{ transitionDelay: `${projectIndex * 70}ms` }}
                                            className="reveal relative flex flex-col justify-between rounded-2xl bg-backgroundCard border border-borderSoft p-6 min-h-full cursor-pointer shadow-card transition-[transform,box-shadow,border-color] duration-300 ease-out-expo hover:-translate-y-1.5 hover:shadow-card-hover hover:border-accent hover:bg-backgroundSecondary active:scale-[0.99]"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            {isNewProject(project.createdAt) && (
                                                <span className="absolute top-4 right-4 flex items-center gap-1 rounded-full border border-borderSoft bg-backgroundSecondary px-2.5 py-1 text-[11px] font-medium text-title">
                                                    <Flame size={13} className="text-accent" /> Nuevo
                                                </span>
                                            )}
                                            <h3 className="text-xl font-semibold mb-2.5 text-title">{project.title}</h3>
                                            <p className="text-text text-sm leading-relaxed mb-5 line-clamp-3">{project.description}</p>
                                            <div className="flex h-6 items-center justify-between gap-3">
                                                <div className="flex min-w-0 items-center gap-2">
                                                    <div className={`h-2 w-2 flex-shrink-0 rounded-full ring-1 ring-background ${project.tech[techIndexes[projectIndex]].color}`} />
                                                    <span className="truncate text-sm text-text">{project.tech[techIndexes[projectIndex]].name}</span>
                                                </div>
                                                <div className="flex flex-shrink-0 items-center gap-3">
                                                    {project.githubLink && (
                                                        <a
                                                            href={project.githubLink}
                                                            className="text-text hover:text-accentHover transition-colors duration-150"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => handleProjectLinkClick(e, project)}
                                                            aria-label={`Repositorio de ${project.title}`}
                                                        >
                                                            <Github size={20} />
                                                        </a>
                                                    )}
                                                    {project.deployLink && (
                                                        <a
                                                            href={project.deployLink}
                                                            className="text-text hover:text-accentHover transition-colors duration-150"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => handleProjectLinkClick(e, project)}
                                                            aria-label={`Deploy de ${project.title}`}
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
                            <h2 className="text-2xl font-bold mb-8 text-title" data-reveal>Experiencia Colaborativa</h2>
                            {workExperienceData.map((work, index) => (
                                <div
                                    key={work.company}
                                    data-reveal
                                    style={{ transitionDelay: `${index * 70}ms` }}
                                    className="reveal rounded-2xl bg-backgroundCard border border-borderSoft p-6 mb-4 shadow-card"
                                >
                                    <div className="flex items-center gap-4">
                                        {work.logo ? (
                                            <img
                                                src={work.logo}
                                                alt={work.company}
                                                width={48}
                                                height={48}
                                                className="rounded-lg ring-1 ring-borderSoft"
                                            />
                                        ) : (
                                            <div
                                                aria-hidden="true"
                                                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-backgroundSecondary ring-1 ring-borderSoft text-sm font-bold tracking-wide text-accent"
                                            >
                                                {work.company.slice(0, 2).toUpperCase()}
                                            </div>
                                        )}
                                        <div className="flex flex-col">
                                            <h3 className="text-xl font-semibold text-title">{work.position}</h3>
                                            {work.link ? (
                                                <a href={work.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accentHover transition-colors duration-150">{work.company}</a>
                                            ) : (
                                                <span className="text-accent">{work.company}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        {work.period && (
                                            <div className="flex items-center gap-2 text-text text-sm mt-2 mb-2">
                                                <Calendar size={15} className="text-accent" />
                                                <span>{work.period}</span>
                                            </div>
                                        )}
                                        <p className="text-text text-sm leading-relaxed">{work.description}</p>
                                        {work.highlights && (
                                            <ul className="mt-3 space-y-2">
                                                {work.highlights.map((highlight) => (
                                                    <li key={highlight} className="flex gap-2 text-text text-sm leading-relaxed">
                                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {work.tech && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {work.tech.map((tech) => (
                                                    <span key={tech.name} className="bg-backgroundSecondary border border-borderSoft inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-title">
                                                        <span className={`w-1.5 h-1.5 rounded-full ${tech.color}`} aria-hidden="true" />
                                                        {tech.name}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </section>
                        {/* Sección de educación */}
                        <section>
                            <h2 className="text-2xl font-bold mb-8 text-title" data-reveal>Educación</h2>
                            <div className="relative border-l border-borderSoft">
                                {educationData.map((edu, index) => (
                                    <div key={edu.institution} data-reveal style={{ transitionDelay: `${index * 70}ms` }} className="reveal flex items-start gap-3 mb-10 -ml-[13px]">
                                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-background rounded-full ring-8 ring-borderSoft/70">
                                            <svg
                                                aria-hidden="true"
                                                className="w-3 h-3 text-accent"
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
                                        <div className="flex-1">
                                            <h3 className="mb-1 text-lg font-semibold text-title">
                                                {edu.degree}
                                            </h3>
                                            <time className="block mb-2 text-sm font-normal leading-none text-accent">
                                                {edu.period}
                                            </time>
                                            <p className="mb-2 text-base font-normal text-text">
                                                {edu.institution}
                                            </p>
                                            {edu.description && (
                                                <p className="text-base font-normal text-text">{edu.description}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            {/* Modal para el proyecto seleccionado */}
            {selectedProject && (
                <div className="fixed inset-0 bg-background/75 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedProject(null)} role="dialog" aria-modal="true" aria-label={selectedProject.title}>
                    <div className="modal-enter bg-backgroundCard border border-borderSoft rounded-2xl p-6 md:p-8 w-11/12 md:w-2/3 lg:w-1/2 max-h-[85vh] overflow-y-auto shadow-card-hover" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-start gap-4 mb-4">
                            <h2 className="text-2xl font-bold text-title">{selectedProject.title}</h2>
                            <button onClick={() => setSelectedProject(null)} className="text-text hover:text-accentHover transition-colors duration-150 p-1 -m-1 rounded-md" aria-label="Cerrar modal">
                                <X size={24} />
                            </button>
                        </div>
                        <p className="text-text leading-relaxed mb-5">{selectedProject.description}</p>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {selectedProject.tech.map((tech) => (
                                <span key={tech.name} className="bg-backgroundSecondary border border-borderSoft inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-title">
                                    <span className={`w-1.5 h-1.5 rounded-full ${tech.color}`} aria-hidden="true" />
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                        <p className="text-text mb-3"><strong className="font-semibold text-accent">Rol:</strong> {selectedProject.role}</p>
                        <p className="text-text mb-6"><strong className="font-semibold text-accent">Tipo de Proyecto:</strong> {selectedProject.isCollaborative ? 'Colaborativo' : 'Personal'}</p>
                        <div className="flex items-center gap-6 border-t border-borderSoft pt-6 pb-1">
                            {selectedProject.githubLink && (
                                <a
                                    href={selectedProject.githubLink}
                                    className="text-text hover:text-accentHover transition-colors duration-150"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => handleProjectLinkClick(e, selectedProject)}
                                    aria-label={`Repositorio de ${selectedProject.title}`}
                                >
                                    <Github size={24} />
                                </a>
                            )}
                            {selectedProject.deployLink && (
                                <a
                                    href={selectedProject.deployLink}
                                    className="text-text hover:text-accentHover transition-colors duration-150"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => handleProjectLinkClick(e, selectedProject)}
                                    aria-label={`Deploy de ${selectedProject.title}`}
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