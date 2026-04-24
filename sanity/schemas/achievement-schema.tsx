const achievement = {
	name: "achievement",
	title: "Achievements",
	type: "document",

	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
		name: "slug",
		title: "Slug",
		type: "slug",
		options: { source: "title" },
		},
		{
			name: "description",
			title: "Description",
			type: "text",
			rows: 4,
		},
		{
			name: "contributions",
			title: "Contributions",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "date",
			title: "Date",
			type: "date",
		},
		{
			name: "images",
			title: "Images",
			type: "array",
			of: [
				{
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
			],
		},
		{
			name: "thumbnail",
			title: "Thumbnail",
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
	],
};

export default achievement;
