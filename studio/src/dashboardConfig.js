export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61357dd1f37407b7b9fd2a7b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-t3s1mnu5",
                  apiId: "9416e68f-81d7-4e00-8f26-0cb0cc3c1b3d",
                },
                {
                  buildHookId: "61357dd20a7c8ccf3cfc09c8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-55w7e7mi",
                  apiId: "1dfea36d-7b15-49b1-bf4c-8494dd614110",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/yerArias/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-55w7e7mi.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
