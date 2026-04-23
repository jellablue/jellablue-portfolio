export type Project = {

    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    description: string;
    subtitle?: string;
    date?: string;
    role?: string;
    duration?: string;
    contributions?: string[];
    image?: string;
    images?: any[];
    body?: any[];
    techStack?: string[]; //PortableTextBlock[]; //how sanity stores rich texts
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    order?: number;
}