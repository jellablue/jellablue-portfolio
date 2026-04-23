export type Project = {

    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    description: string;
    subtitle?: string;
    date?: string;
    image?: string;
    techStack?: string[]; //PortableTextBlock[]; //how sanity stores rich texts
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    order?: number;
}