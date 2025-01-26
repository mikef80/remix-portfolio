import { octoFetch } from "~/utils/utils";
import NodeCache from "node-cache";
import type { Languages } from "~/components/LanguagesBar";

export type Project = {
  id: number;
  name: string;
  description: string;
  url: string;
  homepage: string;
  languages: Languages;
  updated_at: string; // Consider `Date` if parsing it later
};


const localDataSource: Project[] = [
  {
    "id": 816973734,
    "name": "remix-portfolio",
    "description": "💼 Rebuilding my portfolio as a full stack app in Remix",
    "url": "https://github.com/mikef80/remix-portfolio",
    "homepage": "https://mikefrancis.uk",
    "languages": {
      "TypeScript": 29684,
      "JavaScript": 1934,
      "CSS": 59,
      "total": 31677
    },
    "updated_at": "2025-01-24T09:06:49Z"
  },
  {
    "id": 802387192,
    "name": "word-cloud",
    "description": "☁️ A project to create a dynamic wordcloud based on user input",
    "url": "https://github.com/mikef80/word-cloud",
    "homepage": "https://wordcloud.mikefrancis.uk/",
    "languages": {
      "JavaScript": 7564,
      "HTML": 5682,
      "CSS": 58,
      "total": 13304
    },
    "updated_at": "2024-12-04T21:07:23Z"
  },
  {
    "id": 467957363,
    "name": "colourdle",
    "description": "🌈 My take on a Wordle-inspired game, based on guessing RGB codes for colours!",
    "url": "https://github.com/mikef80/colourdle",
    "homepage": "https://colourdle.co.uk/",
    "languages": {
      "JavaScript": 30899,
      "HTML": 8160,
      "CSS": 5083,
      "total": 44142
    },
    "updated_at": "2024-10-04T20:45:11Z"
  },
  {
    "id": 721078524,
    "name": "be-nc-news",
    "description": "📰 Backend API for a reddit-style website. One of my key projects for my Northcoders Software Development Bootcamp (October 2023 Cohort)",
    "url": "https://github.com/mikef80/be-nc-news",
    "homepage": "",
    "languages": {
      "JavaScript": 178584,
      "Shell": 62,
      "total": 178646
    },
    "updated_at": "2025-01-23T22:17:25Z"
  },
  {
    "id": 748695311,
    "name": "radiation-calc-ts",
    "description": "☢️ Radiation Exposure calculator. This app enables you to carry out various calculations to ensure that Radiation Workers can work within the required boundaries of acceptable exposure limits.",
    "url": "https://github.com/mikef80/radiation-calc-ts",
    "homepage": "https://radiation-calculator.mikefrancis.uk/",
    "languages": {
      "TypeScript": 76144,
      "JavaScript": 848,
      "HTML": 786,
      "total": 77778
    },
    "updated_at": "2024-10-19T20:11:13Z"
  },
  {
    "id": 734283083,
    "name": "quotesnap-fe",
    "description": "👨‍💻 The frontend for the final group project for our Northcoders Software Developer Bootcamp (October 2023 Cohort)",
    "url": "https://github.com/mikef80/quotesnap-fe",
    "homepage": "",
    "languages": {
      "JavaScript": 43516,
      "Java": 12289,
      "total": 55805
    },
    "updated_at": "2024-03-09T19:05:37Z"
  },
  {
    "id": 734284178,
    "name": "quotesnap-be",
    "description": "🗄️ The backend for the final group project for our Northcoders Software Developer Bootcamp (October 2023 Cohort)",
    "url": "https://github.com/mikef80/quotesnap-be",
    "homepage": "",
    "languages": {
      "JavaScript": 36401,
      "total": 36401
    },
    "updated_at": "2024-01-26T20:30:02Z"
  },
  {
    "id": 730141497,
    "name": "fe-nc-news",
    "description": "🗞️ React frontend app for a reddit-style website. One of my key projects for my Northcoders Software Development Bootcamp (October 2023 Cohort)",
    "url": "https://github.com/mikef80/fe-nc-news",
    "homepage": "https://nc-news.mikefrancis.uk/",
    "languages": {
      "JavaScript": 22907,
      "HTML": 743,
      "CSS": 58,
      "total": 23708
    },
    "updated_at": "2024-05-16T20:26:56Z"
  }
];

const cache = new NodeCache({ stdTTL: 60 * 60 }); // Cache for 1 hour

const fetchGitHubData = async () => {
  const cacheKey = "githubData";
  const cachedData = cache.get<Project[]>(cacheKey);

  if (cachedData) {
    console.log("returning cached data");
    return cachedData;
  }

  console.log("Fetching from github");
  const ghtoken: string | undefined = process.env.GITHUB_TOKEN;
  const response = await octoFetch(ghtoken);
  console.log("completed fetch");

  cache.set(cacheKey, response);
  return response;
};

export const getDataSource = async () => {
  if (process.env.NODE_ENV === "development") {
    console.log("Returning local data source");

    return localDataSource;
  }
  return await fetchGitHubData();
};
