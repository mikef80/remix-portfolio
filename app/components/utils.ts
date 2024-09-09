import { Octokit } from "@octokit/core";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";

export const octoFetch = async () => {
  const MyOctokit = Octokit.plugin(restEndpointMethods);
  const octokit = new MyOctokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const {
    data: { items },
  } = await octokit.rest.search.repos({
    q: "user:mikef80+topic:portfolio-project",
    sort: "updated",
    order: "desc",
  });

  const mappedArray = await Promise.all(
    items.map(async ({ id, name, description, html_url: url, homepage }) => {
      const { data: languages } = await octokit.rest.repos.listLanguages({
        owner: "mikef80",
        repo: name,
      });

      let langCount = 0;

      for (let key in languages) {
        langCount += languages[key];
      }

      languages.total = langCount;

      return { id, name, description, url, homepage, languages };
    })
  );

  console.log(mappedArray, '<-- mappedArray');

  return mappedArray;
};
