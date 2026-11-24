import config from "../config/config";

const GITHUB_USERNAME = "11ranamegha";

const GithubProfile = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(GITHUB_USERNAME)}`
    );
    if (!response.ok) {
      throw new Error(`GitHub profile request failed (${response.status})`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub Profile:", error);
    return null;
  }
};

const GithubHeatMap = async () => {
  const query = `{
    user(login: "${GITHUB_USERNAME}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }`;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.personalAccessToken}`,
      },
      body: JSON.stringify({ query }),
    });

    const json = await res.json();

    if (!res.ok || !json?.data?.user) {
      throw new Error("GitHub API returned invalid or missing heatmap data.");
    }

    return json.data.user.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error("Error fetching GitHub Heatmap:", error);
    return null;
  }
};

const GithubLanguageStats = async () => {
  const query = `{
    user(login: "${GITHUB_USERNAME}") {
      repositories(first: 100) {
        nodes {
          languages(first: 10) {
            edges {
              size
              node {
                name
                color
              }
            }
          }
        }
      }
    }
  }`;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.personalAccessToken}`,
      },
      body: JSON.stringify({ query }),
    });

    const json = await response.json();
    const repositories = json?.data?.user?.repositories?.nodes;

    if (!response.ok || !Array.isArray(repositories)) {
      throw new Error("GitHub API returned invalid or missing language data.");
    }

    const languageMap = {};
    repositories.forEach((repo) => {
      repo.languages?.edges?.forEach(({ size, node }) => {
        if (!node?.name) return;
        if (languageMap[node.name]) {
          languageMap[node.name].size += size;
        } else {
          languageMap[node.name] = { size, color: node.color };
        }
      });
    });

    return languageMap;
  } catch (error) {
    console.error("Error fetching GitHub Language Stats:", error);
    return {};
  }
};

export { GithubHeatMap, GithubLanguageStats, GithubProfile };