import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas"

const config = defineConfig({

    projectId: "7h9esbmd",

    dataset: "production",

    title: "My Portfolio",

    apiVersion: "2026-04-22",

    basePath: "/admin",

    plugins: [deskTool()],

    schema: { types: schemas },
});

export default config;