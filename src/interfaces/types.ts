export interface Tech {
    name: string;
    color: string;
}

export interface Project {
    title: string;
    description: string;
    tech: Tech[];
    githubLink?: string;
    deployLink?: string;
    createdAt: Date;
    isCollaborative: boolean;
    role: string;
}

export interface WorkExperience {
    company: string;
    logo: string;
    position: string;
    period: string;
    description: string;
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    description?: string;
}

export interface Skill {
    name: string;
    color: string;
}