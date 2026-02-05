// ═══════════════════════════════════════════════════════════════════════════
// API.JS - All API/fetch functions
// ═══════════════════════════════════════════════════════════════════════════

console.log("✅ api.js loaded");

/* HELPER FUNCTION */
async function fetchGitHubData(endpoint) {
  try {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `token ${API_CONFIG.TOKEN}`,
      },
    });

    // If the response is not 200-299, handle specific errors
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(ERROR_MESSAGES.USER_NOT_FOUND);
      } else if (response.status === 429) {
        throw new Error(ERROR_MESSAGES.RATE_LIMIT);
      } else {
        // Generic fallback for other statuses (401, 500, etc)
        throw new Error(`GitHub API Error: ${response.status}`);
      }
    }

    return await response.json();
  } catch (error) {
    // Check: Is this an error WE threw above? If so, pass it on.
    if (Object.values(ERROR_MESSAGES).includes(error.message)) {
      throw error;
    }
    // If it's a real crash (e.g., No Internet), use our specific message
    throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
  }
}

/* INDIVIDUAL FUNCTIONS */

async function fetchUser(username) {
  return fetchGitHubData(`${API_CONFIG.ENDPOINTS.USER}${username}`);
}
async function fetchRepos(username) {
  return fetchGitHubData(
    `${API_CONFIG.ENDPOINTS.USER}${username}${API_CONFIG.ENDPOINTS.REPOS}`,
  );
}
async function fetchOrgs(username) {
  return fetchGitHubData(
    `${API_CONFIG.ENDPOINTS.USER}${username}${API_CONFIG.ENDPOINTS.ORGS}`,
  );
}
async function fetchFollowers(username) {
  return fetchGitHubData(
    `${API_CONFIG.ENDPOINTS.USER}${username}${API_CONFIG.ENDPOINTS.FOLLOWERS}`,
  );
}
async function fetchEvents(username) {
  return fetchGitHubData(
    `${API_CONFIG.ENDPOINTS.USER}${username}${API_CONFIG.ENDPOINTS.EVENTS}`,
  );
}

/* MAIN FUNCTION */

async function getUserProfile(username) {
  try {
    // Parallel requests using Promise.all for maximum speed
    const [user, repos, orgs, followers, events] = await Promise.all([
      fetchUser(username),
      fetchRepos(username),
      fetchOrgs(username),
      fetchFollowers(username),
      fetchEvents(username),
    ]);

    return { user, repos, orgs, followers, events };
  } catch (error) {
    // Re-throw so app.js can show the Error State
    throw error;
  }
}
