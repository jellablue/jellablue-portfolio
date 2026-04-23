const project = {
  name: "project",
  title: "Projects",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
        name: 'description',
        title: "Short Description",
        type: 'text',
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {   
        name: 'techStack',
        title: 'Tech Stack',
        type: 'array',
        of: [{ type: 'string'}],
    },
    {
      name: "liveUrl",
      title: "Live URL",
      type: "url",
    },
    {
      name: "githubUrl",
      title: "Github URL",
      type: "url",
    },
    {
      name: 'featured',
      title: 'Featured?',
      type: 'boolean'
    },
    {
        name: 'order',
        title: 'Display Order',
        type: 'number',
    },
  ],
};

export default project;
