import { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink, Calendar, Download } from 'lucide-react';
import { projectsData, workExperienceData, educationData, skillsData } from '../data/index';

export default function Perfil() {
    const [techIndexes, setTechIndexes] = useState<number[]>(
        projectsData.map(() => 0) // Inicializa el índice de tecnología a 0 para cada proyecto
    );
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    // Cambio de tecnología para cada proyecto cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setTechIndexes((prevIndexes) =>
                prevIndexes.map((index, i) => {
                    const projectTechCount = projectsData[i].tech.length;
                    return (index + 1) % projectTechCount; // Reinicia el índice cuando llega al final
                })
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Manejo de clics en las habilidades seleccionadas
    const handleSkillClick = (skill: string) => {
        setSelectedSkills((prev) =>
            prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
        );
    };

    // Filtrar proyectos según las habilidades seleccionadas
    const filteredProjects = selectedSkills.length
        ? projectsData.filter((project) =>
            project.tech.some((tech) => selectedSkills.includes(tech.name))
        )
        : projectsData;

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200">
            <main className="max-w-7xl mx-auto px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                        {/* Información de perfil */}
                        <div className="bg-gray-800 rounded-lg border border-transparent shadow-sm p-6">
                            <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-b from-gray-700 to-gray-800 mx-auto mb-6">
                                <img
                                    src="/assets/profile.webp"
                                    alt="Foto de Johann Gaviria"
                                    width={192}
                                    height={192}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h1 className="text-2xl font-bold mb-1">Johann Gaviria</h1>
                            <p className="text-gray-300 mb-4">Desarrollador Software</p>
                            <p className="text-gray-400 text-sm mb-6">
                                Mi enfoque principal es el desarrollo backend, con una fuerte pasión por Python. Me motiva aprender nuevas tecnologías, crear soluciones eficientes y trabajar en equipo. A corto plazo, busco mi primera experiencia laboral como desarrollador backend, y a largo plazo, quiero seguir creciendo en el campo del software y liderar equipos en proyectos innovadores.
                            </p>
                            {/* Enlaces de redes sociales */}
                            <div className="flex gap-4 justify-start mb-6">
                                <a
                                    href="/assets/CV-JohannGaviria.pdf"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    download
                                >
                                    <Download size={24} />
                                </a>
                                <a href="https://github.com/JohannGaviria" className="text-gray-400 hover:text-white transition-colors" target='_blank'>
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/johanngaviria" className="text-gray-400 hover:text-white transition-colors" target='_blank'>
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://dev.to/johanngaviria" className="text-gray-400 hover:text-white transition-colors" target='_blank'>
                                    <ExternalLink size={24} />
                                </a>
                            </div>

                            {/* Botón para contacto */}
                            <button className="w-full bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors mb-6">
                                <a href="https://cal.com/johanngaviria/15min" target='_blank'>
                                    CONTACTAME
                                </a>
                            </button>

                            {/* Sección de habilidades */}
                            <div className="border-t border-gray-700 pt-6">
                                <h2 className="text-lg font-semibold mb-4">Habilidades</h2>
                                <div className="flex flex-wrap gap-2">
                                    {skillsData.map((skill) => (
                                        <span
                                            key={skill}
                                            onClick={() => handleSkillClick(skill)}
                                            className={`cursor-pointer px-3 py-1 rounded-md text-sm ${selectedSkills.includes(skill)
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-700 text-gray-300'
                                                }`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección de proyectos */}
                    <div className="md:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Proyectos Destacados</h2>
                            {filteredProjects.length === 0 ? (
                                <p className="text-center text-lg text-gray-400">No hay proyectos que coincidan con las tecnologías seleccionadas.</p>
                            ) : (
                                <div className="grid md:grid-cols-2 gap-6">
                                    {filteredProjects.map((project, projectIndex) => (
                                        <div key={project.title} className="rounded-lg bg-gray-800 p-6 min-h-full">
                                            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                                            <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex items-center gap-1">
                                                        <div className={`w-2 h-2 rounded-full ${project.tech[techIndexes[projectIndex]].color}`} />
                                                        <span className="text-sm text-gray-400">{project.tech[techIndexes[projectIndex]].name}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    {project.githubLink && (
                                                        <a
                                                            href={project.githubLink}
                                                            className="text-gray-400 hover:text-white transition-colors"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Github size={20} />
                                                        </a>
                                                    )}
                                                    {project.deployLink && (
                                                        <a
                                                            href={project.deployLink}
                                                            className="text-gray-400 hover:text-white transition-colors"
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

                        {/* Experiencia laboral */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-white">Experiencia Laboral</h2>
                            {workExperienceData.map((work) => (
                                <div key={work.company} className="rounded-lg bg-gray-800 p-6 mb-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={work.logo}
                                            alt={work.company}
                                            width={48}
                                            height={48}
                                            className="rounded"
                                        />
                                        <div className="flex flex-col">
                                            <h3 className="text-xl font-semibold text-white">{work.position}</h3>
                                            <p className="text-gray-400">{work.company}</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex items-center gap-2 text-gray-500 text-sm mt-2 mb-2">
                                            <Calendar size={16} />
                                            <span>{work.period}</span>
                                        </div>
                                        <p className="text-gray-400">{work.description}</p>
                                    </div>
                                </div>
                            ))}
                        </section>

                        {/* Educación */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-white">Educación</h2>
                            <div className="relative border-l border-gray-200 pl-4">
                                {educationData.map((edu, index) => (
                                    <div key={edu.institution} className="mb-10 ml-6">
                                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                                            <svg
                                                aria-hidden="true"
                                                className="w-3 h-3 text-blue-800"
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
                                        <h3 className="flex items-center mb-1 text-lg font-semibold text-white-400">
                                            {edu.degree}
                                        </h3>
                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                                            {edu.period}
                                        </time>
                                        <p className="mb-2 text-base font-normal text-gray-500">
                                            {edu.institution}
                                        </p>
                                        {edu.description && (
                                            <p className="text-base font-normal text-gray-500">{edu.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
