import {  groq } from "next-sanity";
import { Project } from "@/types/Project";
import { Achievement } from "@/types/Achievement";
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
    role,
    duration,
    contributions,
    "image": image.asset->url,
    "images": images[]{
      "url": asset->url,
      alt
    },
    body,
    techStack,
    liveUrl,
    githubUrl,
    featured,
    order
  } `


  export const projectSlugsQuery = `
  *[_type == "project"]{ "slug": slug.current }
`

  export async function getAchievements(): Promise<Achievement[]> {
    return client.fetch(
      groq`*[_type == "achievement"] | order(date desc, _createdAt desc){
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        description,
        contributions,
        date,
        "images": images[]{
          "url": asset->url,
          alt
        },
        "thumbnail": thumbnail{
          "url": asset->url,
          alt
        }
      }`
    );
  }

  export const achievementBySlugQuery = `
    *[_type == "achievement" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      description,
      contributions,
      date,
      "images": images[]{
        "url": asset->url,
        alt
      },
      "thumbnail": thumbnail{
        "url": asset->url,
        alt
      }
    }
  `;

  export const achievementSlugsQuery = `
    *[_type == "achievement"]{ "slug": slug.current }
  `;