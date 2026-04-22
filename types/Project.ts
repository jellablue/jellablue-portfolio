import { PortableTextBlock } from "sanity";

export type Project = {

    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    description: string;
    image?: string;
    techStack?: string[]; //PortableTextBlock[]; //how sanity stores rich texts
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    order?: number;
}