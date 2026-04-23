import {  groq } from "next-sanity";
import { Project } from "@/types/Project";
import { client } from "./client";


export async function getProjects(): Promise<Project[]> {

    //groq query
    // * = all, [] = filter, {} = projection
    return client.fetch(

        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            description,
            subtitle,
            date,
            "image": image.asset->url,
            techStack,
            liveUrl,
            githubUrl, 
            featured,
            order,
        }`
    );

}

export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    description,
    subtitle,
    date,
    "image": image.asset->url,
    techStack,
    liveUrl,
    githubUrl,
    featured,
    order
  } `