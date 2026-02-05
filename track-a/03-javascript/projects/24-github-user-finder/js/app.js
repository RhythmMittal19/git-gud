// ═══════════════════════════════════════════════════════════════════════════
// APP.JS - Main Application Controller
// ═══════════════════════════════════════════════════════════════════════════

console.log("✅ app.js loaded");

// ─────────────────────────────────────────────────────────────────────────────
// DOM REFERENCES
// ─────────────────────────────────────────────────────────────────────────────

// Search Elements
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchLoader = document.getElementById("searchLoader");
const clearBtn = document.getElementById("clearBtn");

// Hero Elements
const recentTagsHero = document.getElementById("recentTagsHero");
const recentSearchesHero = document.getElementById("recentSearchesHero");
const quickStats = document.getElementById("quickStats");
const scrollIndicator = document.getElementById("scrollIndicator");

// Profile Elements
const profileAvatar = document.getElementById("profileAvatar");
const profileName = document.getElementById("profileName");
const profileUsername = document.getElementById("profileUsername");
const profileBio = document.getElementById("profileBio");
const profileType = document.getElementById("profileType");
const profileBadges = document.getElementById("profileBadges");

// Meta Elements
const metaLocation = document.getElementById("metaLocation");
const metaCompany = document.getElementById("metaCompany");
const metaBlog = document.getElementById("metaBlog");
const metaTwitter = document.getElementById("metaTwitter");
const metaJoined = document.getElementById("metaJoined");
const locationText = document.getElementById("locationText");
const companyText = document.getElementById("companyText");
const blogLink = document.getElementById("blogLink");
const twitterLink = document.getElementById("twitterLink");
const joinedText = document.getElementById("joinedText");

// Stats Elements
const statRepos = document.getElementById("statRepos");
const statFollowers = document.getElementById("statFollowers");
const statFollowing = document.getElementById("statFollowing");
const statGists = document.getElementById("statGists");
const quickRepos = document.getElementById("quickRepos");
const quickFollowers = document.getElementById("quickFollowers");
const quickStars = document.getElementById("quickStars");

// Bento Grid Elements
const totalStarsEl = document.getElementById("totalStars");
const languagesChart = document.getElementById("languagesChart");
const activityList = document.getElementById("activityList");
const orgsGrid = document.getElementById("orgsGrid");
const orgsCount = document.getElementById("orgsCount");
const followersPreview = document.getElementById("followersPreview");

// Repos Elements
const reposGrid = document.getElementById("reposGrid");
const loadMoreContainer = document.getElementById("loadMoreContainer");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const showingCount = document.getElementById("showingCount");
const totalReposCount = document.getElementById("totalReposCount");

// Action Elements
const viewAllFollowers = document.getElementById("viewAllFollowers");
const viewAllRepos = document.getElementById("viewAllRepos");
const followGithubBtn = document.getElementById("followGithubBtn");
const copyLinkBtn = document.getElementById("copyLinkBtn");
const shareProfileBtn = document.getElementById("shareProfileBtn");

// Navigation Elements
const themeToggle = document.getElementById("themeToggle");
const shortcutsBtn = document.getElementById("shortcutsBtn");
const historyBtn = document.getElementById("historyBtn");
const historyCount = document.getElementById("historyCount");
const searchTrigger = document.getElementById("searchTrigger");

// Error Elements
const errorMessageEl = document.getElementById("errorMessage");
const errorTitle = document.getElementById("errorTitle");
const retryBtn = document.getElementById("retryBtn");
const newSearchBtn = document.getElementById("newSearchBtn");

// Footer Elements
const apiStatus = document.getElementById("apiStatus");
const apiStatusText = document.getElementById("apiStatusText");
const rateLimitRemaining = document.getElementById("rateLimitRemaining");

// ─────────────────────────────────────────────────────────────────────────────
// STATE MANAGEMENT
// ─────────────────────────────────────────────────────────────────────────────

let currentUser = null;
let allRepos = [];
let displayedReposCount = 0;
let currentFilter = "all";
let currentSort = "updated";
let lastSearchedUsername = "";

function showState(stateName) {
  // Hide all state containers
  document.querySelectorAll(".state-container").forEach((el) => {
    el.classList.remove("show");
  });
  document.getElementById("profileContent").classList.remove("show");

  // Show target state
  const targetId = STATE_ELEMENTS[stateName];
  if (!targetId) {
    console.error(`Invalid state: ${stateName}`);
    return;
  }

  const targetEl = document.getElementById(targetId);
  if (targetEl) {
    targetEl.classList.add("show");
  }

  // Toggle scroll indicator visibility
  if (scrollIndicator) {
    scrollIndicator.classList.toggle("visible", stateName === STATES.PROFILE);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// SEARCH FUNCTIONALITY
// ─────────────────────────────────────────────────────────────────────────────

async function handleSearch(username) {
  const query = (username || searchInput.value).trim();

  if (!query) {
    showToast(ERROR_MESSAGES.EMPTY_USERNAME, "warning");
    searchInput.focus();
    return;
  }

  // Validate username format
  if (!/^[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(query)) {
    showToast(ERROR_MESSAGES.INVALID_USERNAME, "warning");
    return;
  }

  lastSearchedUsername = query;
  searchInput.value = query;
  searchLoader.classList.add("show");
  showState(STATES.LOADING);

  try {
    const data = await getUserProfile(query);

    currentUser = data.user;
    allRepos = data.repos || [];
    displayedReposCount = 0;

    saveToHistory({
      login: data.user.login,
      avatar_url: data.user.avatar_url,
      name: data.user.name,
      timestamp: Date.now(),
    });

    updateProfileUI(data);
    renderHistoryUI();
    showState(STATES.PROFILE);
    showToast(`Found ${data.user.login}!`, "success");

    // Smooth scroll to profile on mobile
    if (window.innerWidth < 768) {
      document.getElementById("profileContent").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  } catch (error) {
    console.error("Search Error:", error.message);
    handleSearchError(error);
  } finally {
    searchLoader.classList.remove("show");
  }
}

function handleSearchError(error) {
  if (error.message === ERROR_MESSAGES.RATE_LIMIT) {
    showState(STATES.RATE_LIMIT);
    startRateLimitTimer();
  } else {
    errorTitle.textContent =
      error.message === ERROR_MESSAGES.USER_NOT_FOUND
        ? "User Not Found"
        : "Something Went Wrong";
    errorMessageEl.textContent = error.message;
    showState(STATES.ERROR);
  }
  showToast(error.message, "error");
}

function startRateLimitTimer() {
  const timerEl = document.getElementById("rateLimitTimer");
  const progressEl = document.getElementById("rateLimitProgress");
  let secondsLeft = 60;

  const interval = setInterval(() => {
    secondsLeft--;
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    progressEl.style.width = `${(secondsLeft / 60) * 100}%`;

    if (secondsLeft <= 0) {
      clearInterval(interval);
      showState(STATES.EMPTY);
    }
  }, 1000);
}

// ─────────────────────────────────────────────────────────────────────────────
// PROFILE UI RENDERING
// ─────────────────────────────────────────────────────────────────────────────

function updateProfileUI(data) {
  const { user, repos, orgs, followers, events } = data;

  // Profile Identity
  profileAvatar.src = user.avatar_url;
  profileAvatar.alt = `${user.login}'s avatar`;
  profileName.textContent = user.name || user.login;
  profileUsername.querySelector("span").textContent = `@${user.login}`;
  profileUsername.href = user.html_url;
  profileType.textContent = user.type;

  // Bio with typing cursor effect
  if (user.bio) {
    profileBio.innerHTML = `<span class="bio-text">${escapeHtml(user.bio)}</span><span class="bio-cursor">|</span>`;
  } else {
    profileBio.innerHTML = `<span class="bio-text text-muted">No bio available</span>`;
  }

  // Profile Badges
  renderBadges(user);

  // Meta Information
  updateMetaItem(metaLocation, locationText, user.location);
  updateMetaItem(metaCompany, companyText, user.company);
  updateMetaItem(
    metaJoined,
    joinedText,
    `Joined ${formatDate(user.created_at)}`,
  );
  updateBlogMeta(user.blog);
  updateTwitterMeta(user.twitter_username);

  // Stats Cards
  animateCounter(statRepos, user.public_repos);
  animateCounter(statFollowers, user.followers);
  animateCounter(statFollowing, user.following);
  animateCounter(statGists, user.public_gists);

  // Quick Stats (Hero)
  const totalStars = calculateTotalStars(repos);
  quickRepos.textContent = formatNumber(user.public_repos);
  quickFollowers.textContent = formatNumber(user.followers);
  quickStars.textContent = formatNumber(totalStars);
  quickStats.classList.add("show");

  // Bento Grid
  animateCounter(totalStarsEl, totalStars);
  triggerStarsCelebration(totalStars);
  renderLanguagesUI(calculateLanguageStats(repos));
  renderActivityUI(events);
  renderOrganizationsUI(orgs);
  renderFollowersUI(followers, user.followers);

  // Repositories
  renderRepositoriesUI(repos);
  updateReposCounts();

  // External Links
  viewAllFollowers.href = `${user.html_url}?tab=followers`;
  viewAllRepos.href = `${user.html_url}?tab=repositories`;
  followGithubBtn.href = user.html_url;
}

function renderBadges(user) {
  let badges = "";

  if (user.site_admin) {
    badges += `<span class="badge pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>Staff</span>`;
  }

  if (user.hireable) {
    badges += `<span class="badge hireable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>Hireable</span>`;
  }

  if (user.type === "Organization") {
    badges += `<span class="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>Organization</span>`;
  }

  profileBadges.innerHTML = badges;
}

function updateMetaItem(container, textEl, value) {
  if (value && value.trim()) {
    textEl.textContent = value;
    container.classList.add("show");
  } else {
    container.classList.remove("show");
  }
}

function updateBlogMeta(blog) {
  if (blog && blog.trim()) {
    const url = blog.startsWith("http") ? blog : `https://${blog}`;
    blogLink.href = url;
    blogLink.textContent = blog.replace(/^https?:\/\//, "").replace(/\/$/, "");
    metaBlog.classList.add("show");
  } else {
    metaBlog.classList.remove("show");
  }
}

function updateTwitterMeta(username) {
  if (username) {
    twitterLink.href = `https://twitter.com/${username}`;
    twitterLink.textContent = `@${username}`;
    metaTwitter.classList.add("show");
  } else {
    metaTwitter.classList.remove("show");
  }
}

function animateCounter(element, target) {
  const duration = 1000;
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * easeOut);

    element.textContent = formatNumber(current);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = formatNumber(target);
    }
  }

  requestAnimationFrame(update);
}

function triggerStarsCelebration(stars) {
  if (stars >= 100) {
    const celebration = document.getElementById("starsCelebration");
    celebration.classList.add("animate");
    setTimeout(() => celebration.classList.remove("animate"), 1500);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT RENDERERS
// ─────────────────────────────────────────────────────────────────────────────

function renderLanguagesUI(stats) {
  if (!stats || stats.length === 0) {
    languagesChart.innerHTML = `<div class="languages-empty"><p>No language data available</p></div>`;
    return;
  }

  languagesChart.innerHTML = stats
    .map(
      (lang) => `
      <div class="language-bar">
        <div class="language-info">
          <span class="language-dot" style="background: ${lang.color}"></span>
          <span class="language-name">${lang.name}</span>
        </div>
        <div class="language-track">
          <div class="language-fill" style="width: 0%; background: ${lang.color}" data-width="${lang.percentage}"></div>
        </div>
        <span class="language-percent">${Math.round(lang.percentage)}%</span>
      </div>
    `,
    )
    .join("");

  // Animate bars after render
  requestAnimationFrame(() => {
    languagesChart.querySelectorAll(".language-fill").forEach((bar) => {
      bar.style.width = `${bar.dataset.width}%`;
    });
  });
}

function renderActivityUI(events) {
  if (!events || events.length === 0) {
    activityList.innerHTML = `<div class="activity-empty"><p>No recent public activity</p></div>`;
    return;
  }

  const recentEvents = events.slice(0, APP_CONFIG.MAX_ACTIVITY_ITEMS);

  activityList.innerHTML = recentEvents
    .map((event) => {
      const repoName = event.repo?.name || "unknown";
      return `
        <div class="activity-item">
          <div class="activity-icon">${getEventIcon(event.type)}</div>
          <div class="activity-info">
            <p class="activity-text">${getEventText(event.type, repoName, event.payload)}</p>
            <span class="activity-time">${timeAgo(event.created_at)}</span>
          </div>
        </div>
      `;
    })
    .join("");
}

function getEventIcon(type) {
  const icons = {
    PushEvent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`,
    CreateEvent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>`,
    DeleteEvent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>`,
    WatchEvent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    ForkEvent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v1a2 2 0 01-2 2H8a2 2 0 01-2-2V9M12 12v3"/></svg>`,
    IssuesEvent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    IssueCommentEvent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
    PullRequestEvent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9v9a3 3 0 003 3h6M18 9V6h-3"/><path d="M15 9l3-3 3 3"/></svg>`,
    PullRequestReviewEvent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>`,
    ReleaseEvent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`,
    PublicEvent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
  };
  return (
    icons[type] ||
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`
  );
}

function getEventText(type, repoName, payload) {
  const repoLink = `<a href="https://github.com/${repoName}" target="_blank" rel="noopener">${repoName.split("/")[1] || repoName}</a>`;

  const texts = {
    PushEvent: `Pushed ${payload?.commits?.length || ""} commit${payload?.commits?.length !== 1 ? "s" : ""} to ${repoLink}`,
    CreateEvent: `Created ${payload?.ref_type || "repository"} ${payload?.ref ? `<strong>${payload.ref}</strong> in ` : ""}${repoLink}`,
    DeleteEvent: `Deleted ${payload?.ref_type || "branch"} from ${repoLink}`,
    WatchEvent: `Starred ${repoLink}`,
    ForkEvent: `Forked ${repoLink}`,
    IssuesEvent: `${payload?.action || "Updated"} issue in ${repoLink}`,
    IssueCommentEvent: `Commented on issue in ${repoLink}`,
    PullRequestEvent: `${payload?.action || "Updated"} PR in ${repoLink}`,
    PullRequestReviewEvent: `Reviewed PR in ${repoLink}`,
    ReleaseEvent: `Released ${payload?.release?.tag_name || "version"} of ${repoLink}`,
    PublicEvent: `Made ${repoLink} public`,
  };

  return texts[type] || `Activity in ${repoLink}`;
}

function renderOrganizationsUI(orgs) {
  orgsCount.textContent = orgs?.length || 0;

  if (!orgs || orgs.length === 0) {
    orgsGrid.innerHTML = `<div class="orgs-empty"><p>No public organizations</p></div>`;
    return;
  }

  orgsGrid.innerHTML = orgs
    .map(
      (org) => `
      <div class="org-item">
        <a href="https://github.com/${org.login}" target="_blank" rel="noopener">
          <img src="${org.avatar_url}" alt="${org.login}" class="org-avatar" loading="lazy" />
        </a>
        <span class="org-tooltip">${org.login}</span>
      </div>
    `,
    )
    .join("");
}

function renderFollowersUI(followers, totalCount) {
  if (!followers || followers.length === 0) {
    followersPreview.innerHTML = `<div class="followers-empty"><p>No followers yet</p></div>`;
    return;
  }

  const previewFollowers = followers.slice(0, APP_CONFIG.MAX_FOLLOWERS_PREVIEW);
  const remaining = totalCount - previewFollowers.length;

  let html = previewFollowers
    .map(
      (f) => `
      <img
        src="${f.avatar_url}"
        alt="${f.login}"
        class="follower-avatar"
        title="${f.login}"
        loading="lazy"
        onclick="handleSearch('${f.login}')"
      />
    `,
    )
    .join("");

  if (remaining > 0) {
    html += `<span class="followers-more" title="View all followers">+${formatNumber(remaining)}</span>`;
  }

  followersPreview.innerHTML = html;
}

function renderRepositoriesUI(repos) {
  allRepos = repos || [];
  displayedReposCount = 0;
  reposGrid.innerHTML = "";
  loadMoreRepos();
}

function loadMoreRepos() {
  const filteredRepos = filterRepos(allRepos);
  const sortedRepos = sortRepos(filteredRepos);
  const nextBatch = sortedRepos.slice(
    displayedReposCount,
    displayedReposCount + APP_CONFIG.REPOS_PER_PAGE,
  );

  nextBatch.forEach((repo) => {
    reposGrid.insertAdjacentHTML("beforeend", createRepoCard(repo));
  });

  displayedReposCount += nextBatch.length;
  updateReposCounts();
}

function createRepoCard(repo) {
  const langColor = getLanguageColor(repo.language);
  const isForked = repo.fork ? "fork" : "";
  const isArchived = repo.archived ? "archived" : "";

  return `
    <article class="repo-card ${isForked} ${isArchived}">
      <div class="repo-header">
        <a href="${repo.html_url}" target="_blank" rel="noopener" class="repo-name">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
          </svg>
          ${escapeHtml(repo.name)}
        </a>
        <span class="repo-visibility">${repo.visibility || (repo.private ? "private" : "public")}</span>
      </div>
      <p class="repo-description">${escapeHtml(repo.description) || '<span class="text-muted">No description provided</span>'}</p>
      <div class="repo-meta">
        ${
          repo.language
            ? `
          <div class="repo-meta-item">
            <span class="repo-language-dot" style="background: ${langColor}"></span>
            ${repo.language}
          </div>
        `
            : ""
        }
        <div class="repo-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          ${formatNumber(repo.stargazers_count)}
        </div>
        <div class="repo-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/>
            <path d="M18 9v1a2 2 0 01-2 2H8a2 2 0 01-2-2V9M12 12v3"/>
          </svg>
          ${formatNumber(repo.forks_count)}
        </div>
        ${repo.archived ? '<span class="repo-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4"/></svg>Archived</span>' : ""}
        ${repo.fork ? '<span class="repo-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v1a2 2 0 01-2 2H8a2 2 0 01-2-2V9M12 12v3"/></svg>Fork</span>' : ""}
      </div>
      ${
        repo.topics && repo.topics.length > 0
          ? `
        <div class="repo-topics">
          ${repo.topics
            .slice(0, 3)
            .map((t) => `<span class="repo-topic">${escapeHtml(t)}</span>`)
            .join("")}
        </div>
      `
          : ""
      }
    </article>
  `;
}

function filterRepos(repos) {
  switch (currentFilter) {
    case "source":
      return repos.filter((r) => !r.fork);
    case "fork":
      return repos.filter((r) => r.fork);
    case "archived":
      return repos.filter((r) => r.archived);
    default:
      return repos;
  }
}

function sortRepos(repos) {
  const sorted = [...repos];
  switch (currentSort) {
    case "stars":
      return sorted.sort((a, b) => b.stargazers_count - a.stargazers_count);
    case "forks":
      return sorted.sort((a, b) => b.forks_count - a.forks_count);
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "created":
      return sorted.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at),
      );
    case "updated":
    default:
      return sorted.sort(
        (a, b) => new Date(b.updated_at) - new Date(a.updated_at),
      );
  }
}

function updateReposCounts() {
  const filteredCount = filterRepos(allRepos).length;
  showingCount.textContent = Math.min(displayedReposCount, filteredCount);
  totalReposCount.textContent = filteredCount;

  if (displayedReposCount >= filteredCount) {
    loadMoreContainer.classList.add("hide");
  } else {
    loadMoreContainer.classList.remove("hide");
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UI
// ─────────────────────────────────────────────────────────────────────────────

function renderHistoryUI() {
  const history = getHistory();

  // Update nav badge
  historyCount.textContent = history.length;
  historyCount.dataset.count = history.length;

  // Hero recent tags
  if (history.length === 0) {
    recentSearchesHero.classList.remove("show");
    recentTagsHero.innerHTML = "";
  } else {
    recentSearchesHero.classList.add("show");
    recentTagsHero.innerHTML = history
      .slice(0, 5)
      .map(
        (user) => `
        <button class="recent-tag" onclick="handleSearch('${user.login}')">
          ${user.login}
          <span class="recent-tag-remove" onclick="event.stopPropagation(); removeHistoryItem('${user.login}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </span>
        </button>
      `,
      )
      .join("");
  }

  // History modal list
  const historyList = document.getElementById("historyList");
  const historyEmpty = document.getElementById("historyEmpty");

  if (history.length === 0) {
    historyEmpty.style.display = "flex";
    historyList.querySelectorAll(".history-item").forEach((el) => el.remove());
  } else {
    historyEmpty.style.display = "none";
    const items = history
      .map(
        (user) => `
        <div class="history-item" onclick="handleSearch('${user.login}'); closeModal('historyModal')">
          <img src="${user.avatar_url}" alt="${user.login}" class="history-avatar" loading="lazy" />
          <div class="history-info">
            <span class="history-name">${user.name || user.login}</span>
            <span class="history-time">${user.timestamp ? timeAgo(new Date(user.timestamp).toISOString()) : ""}</span>
          </div>
          <button class="history-remove" onclick="event.stopPropagation(); removeHistoryItem('${user.login}')" aria-label="Remove">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      `,
      )
      .join("");

    // Keep the empty state element, replace only items
    historyList.innerHTML = items + historyEmpty.outerHTML;
  }

  // Dropdown recent searches
  const dropdownRecent = document.getElementById("dropdownRecent");
  const recentSearchList = document.getElementById("recentSearchList");

  if (history.length === 0) {
    dropdownRecent.classList.add("hide");
  } else {
    dropdownRecent.classList.remove("hide");
    recentSearchList.innerHTML = history
      .slice(0, 5)
      .map(
        (user) => `
        <li class="dropdown-item" data-username="${user.login}">
          <img src="${user.avatar_url}" alt="${user.login}" class="dropdown-avatar" loading="lazy" />
          <div class="dropdown-info">
            <span class="dropdown-name">${user.name || user.login}</span>
            <span class="dropdown-username">@${user.login}</span>
          </div>
          <button class="remove-btn" onclick="event.stopPropagation(); removeHistoryItem('${user.login}')" aria-label="Remove">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </li>
      `,
      )
      .join("");
  }

  // Palette recent searches
  const paletteRecentSection = document.getElementById("paletteRecentSection");
  const paletteRecentList = document.getElementById("paletteRecentList");

  if (history.length === 0) {
    paletteRecentSection.style.display = "none";
  } else {
    paletteRecentSection.style.display = "block";
    paletteRecentList.innerHTML = history
      .slice(0, 5)
      .map(
        (user) => `
        <li class="palette-item" data-username="${user.login}">
          <img src="${user.avatar_url}" alt="${user.login}" class="palette-avatar" loading="lazy" />
          <div class="palette-info">
            <span class="palette-name">${user.name || user.login}</span>
            <span class="palette-username">@${user.login}</span>
          </div>
        </li>
      `,
      )
      .join("");
  }
}

function removeHistoryItem(login) {
  removeFromHistory(login);
  renderHistoryUI();
  showToast(`Removed ${login} from history`, "info");
}

function clearAllHistory() {
  clearHistory();
  renderHistoryUI();
  showToast("History cleared", "info");
}

// ─────────────────────────────────────────────────────────────────────────────
// UTILITY FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ─────────────────────────────────────────────────────────────────────────────
// EVENT LISTENERS
// ─────────────────────────────────────────────────────────────────────────────

// Search Events
searchBtn.addEventListener("click", () => handleSearch());

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSearch();
  }
});

searchInput.addEventListener("input", () => {
  clearBtn.classList.toggle("show", searchInput.value.length > 0);
});

searchInput.addEventListener("focus", () => {
  document.getElementById("searchDropdown").classList.add("show");
});

searchInput.addEventListener("blur", (e) => {
  // Delay to allow click on dropdown items
  setTimeout(() => {
    document.getElementById("searchDropdown").classList.remove("show");
  }, 200);
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearBtn.classList.remove("show");
  searchInput.focus();
});

// Dropdown Item Clicks (using event delegation)
document.getElementById("searchDropdown").addEventListener("click", (e) => {
  const item = e.target.closest(".dropdown-item");
  if (item && !e.target.closest(".remove-btn")) {
    const username = item.dataset.username;
    if (username) handleSearch(username);
  }
});

document
  .getElementById("clearRecentSearches")
  .addEventListener("click", (e) => {
    e.preventDefault();
    clearAllHistory();
  });

// Filter & Sort Dropdowns
document.getElementById("filterTrigger").addEventListener("click", (e) => {
  e.stopPropagation();
  toggleDropdown("filterContainer");
});

document.getElementById("sortTrigger").addEventListener("click", (e) => {
  e.stopPropagation();
  toggleDropdown("sortContainer");
});

document.getElementById("filterMenu").addEventListener("click", (e) => {
  const option = e.target.closest(".dropdown-option");
  if (!option) return;

  document
    .querySelectorAll("#filterMenu .dropdown-option")
    .forEach((el) => el.classList.remove("active"));
  option.classList.add("active");

  currentFilter = option.dataset.filter;
  document.getElementById("filterLabel").textContent =
    option.textContent.trim();

  displayedReposCount = 0;
  reposGrid.innerHTML = "";
  loadMoreRepos();
  closeAllDropdowns();
});

document.getElementById("sortMenu").addEventListener("click", (e) => {
  const option = e.target.closest(".dropdown-option");
  if (!option) return;

  document
    .querySelectorAll("#sortMenu .dropdown-option")
    .forEach((el) => el.classList.remove("active"));
  option.classList.add("active");

  currentSort = option.dataset.sort;
  document.getElementById("sortLabel").textContent = option.textContent.trim();

  displayedReposCount = 0;
  reposGrid.innerHTML = "";
  loadMoreRepos();
  closeAllDropdowns();
});

document.addEventListener("click", closeAllDropdowns);

// Load More Repos
loadMoreBtn.addEventListener("click", () => {
  loadMoreBtn.classList.add("loading");
  setTimeout(() => {
    loadMoreRepos();
    loadMoreBtn.classList.remove("loading");
  }, 300);
});

// Profile Actions
copyLinkBtn.addEventListener("click", function () {
  const url = currentUser
    ? `https://github.com/${currentUser.login}`
    : profileUsername.href;
  navigator.clipboard.writeText(url).then(() => {
    this.classList.add("copied");
    showToast("Profile link copied!", "success");
    setTimeout(() => this.classList.remove("copied"), 2000);
  });
});

shareProfileBtn.addEventListener("click", () => openModal("shareModal"));

// Share Options
document.getElementById("shareTwitter").addEventListener("click", () => {
  if (!currentUser) return;
  const text = `Check out ${currentUser.name || currentUser.login}'s GitHub profile!`;
  const url = `https://github.com/${currentUser.login}`;
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    "_blank",
  );
  closeModal("shareModal");
});

document.getElementById("shareLinkedIn").addEventListener("click", () => {
  if (!currentUser) return;
  const url = `https://github.com/${currentUser.login}`;
  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    "_blank",
  );
  closeModal("shareModal");
});

document.getElementById("shareCopyLink").addEventListener("click", () => {
  if (!currentUser) return;
  navigator.clipboard
    .writeText(`https://github.com/${currentUser.login}`)
    .then(() => {
      showToast("Link copied to clipboard!", "success");
      closeModal("shareModal");
    });
});

// Modal Controls
document.querySelectorAll(".modal-close").forEach((btn) => {
  btn.addEventListener("click", closeAllModals);
});

document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeAllModals();
  });
});

shortcutsBtn.addEventListener("click", () => openModal("shortcutsModal"));
historyBtn.addEventListener("click", () => openModal("historyModal"));

document.getElementById("clearAllHistoryBtn").addEventListener("click", () => {
  clearAllHistory();
  closeModal("historyModal");
});

// Error State Actions
retryBtn.addEventListener("click", () => {
  if (lastSearchedUsername) handleSearch(lastSearchedUsername);
});

newSearchBtn.addEventListener("click", () => {
  showState(STATES.EMPTY);
  searchInput.value = "";
  searchInput.focus();
});

document.querySelectorAll(".suggestion-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    handleSearch(chip.dataset.username);
  });
});

// Theme Toggle
themeToggle.addEventListener("click", (e) => {
  createRipple(e);
  const newTheme = toggleTheme();
  document.documentElement.setAttribute("data-theme", newTheme);
  showToast(`Switched to ${newTheme} mode`, "info");
});

// Command Palette
const commandPalette = document.getElementById("commandPalette");
const paletteInput = document.getElementById("paletteInput");

searchTrigger.addEventListener("click", () => {
  commandPalette.classList.add("active");
  paletteInput.focus();
});

document
  .getElementById("paletteClearHistory")
  .addEventListener("click", clearAllHistory);

paletteInput.addEventListener("input", (e) => {
  // Could add live search here
});

paletteInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && paletteInput.value.trim()) {
    handleSearch(paletteInput.value.trim());
    commandPalette.classList.remove("active");
    paletteInput.value = "";
  }
});

document
  .getElementById("paletteSuggestedList")
  .addEventListener("click", (e) => {
    const item = e.target.closest(".palette-item");
    if (item) {
      handleSearch(item.dataset.username);
      commandPalette.classList.remove("active");
      paletteInput.value = "";
    }
  });

document.getElementById("paletteRecentList").addEventListener("click", (e) => {
  const item = e.target.closest(".palette-item");
  if (item) {
    handleSearch(item.dataset.username);
    commandPalette.classList.remove("active");
    paletteInput.value = "";
  }
});

// Palette Actions
document.querySelectorAll(".palette-action").forEach((action) => {
  action.addEventListener("click", () => {
    const actionType = action.dataset.action;
    commandPalette.classList.remove("active");

    switch (actionType) {
      case "theme":
        themeToggle.click();
        break;
      case "random":
        const randomDevs = [
          "torvalds",
          "gaearon",
          "sindresorhus",
          "yyx990803",
          "addyosmani",
          "getify",
          "tj",
          "substack",
        ];
        handleSearch(randomDevs[Math.floor(Math.random() * randomDevs.length)]);
        break;
      case "shortcuts":
        openModal("shortcutsModal");
        break;
    }
  });
});

commandPalette.addEventListener("click", (e) => {
  if (e.target === commandPalette) {
    commandPalette.classList.remove("active");
  }
});

// Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
  const isInputFocused = ["INPUT", "TEXTAREA"].includes(
    document.activeElement.tagName,
  );
  const isModalOpen = document.querySelector(".modal-overlay.active");
  const isPaletteOpen = commandPalette.classList.contains("active");

  // Escape - close everything
  if (e.key === "Escape") {
    if (isPaletteOpen) {
      commandPalette.classList.remove("active");
      paletteInput.value = "";
    }
    closeAllModals();
    closeAllDropdowns();
    searchInput.blur();
    return;
  }

  // Command/Ctrl + K - open command palette
  if ((e.metaKey || e.ctrlKey) && e.key === "k") {
    e.preventDefault();
    commandPalette.classList.add("active");
    paletteInput.focus();
    return;
  }

  // Skip other shortcuts if input focused or modal open
  if (isInputFocused || isModalOpen || isPaletteOpen) return;

  switch (e.key) {
    case "/":
      e.preventDefault();
      searchInput.focus();
      break;
    case "t":
    case "T":
      themeToggle.click();
      break;
    case "?":
      openModal("shortcutsModal");
      break;
    case "r":
    case "R":
      const randomDevs = [
        "torvalds",
        "gaearon",
        "sindresorhus",
        "yyx990803",
        "addyosmani",
      ];
      handleSearch(randomDevs[Math.floor(Math.random() * randomDevs.length)]);
      break;
    case "c":
    case "C":
      if (currentUser) copyLinkBtn.click();
      break;
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// INITIALIZATION
// ─────────────────────────────────────────────────────────────────────────────

function initApp() {
  // Apply saved theme
  const savedTheme = getTheme();
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Initialize UI
  renderHistoryUI();
  showState(STATES.EMPTY);

  // Check API status
  checkApiStatus();

  // Hide keyboard hint after first interaction
  const keyboardHint = document.getElementById("keyboardHint");
  document.addEventListener(
    "keydown",
    () => keyboardHint?.classList.add("hide"),
    { once: true },
  );

  console.log("🚀 DevScope initialized successfully!");
}

async function checkApiStatus() {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/rate_limit`, {
      headers: API_CONFIG.TOKEN
        ? { Authorization: `token ${API_CONFIG.TOKEN}` }
        : {},
    });

    const data = await response.json();
    const statusDot = apiStatus.querySelector(".status-dot");

    if (response.ok) {
      statusDot.classList.add("online");
      statusDot.classList.remove("offline");
      apiStatusText.textContent = "API Online";
      rateLimitRemaining.textContent = data.rate?.remaining || "--";
      document.getElementById("rateLimitTotal").textContent =
        data.rate?.limit || "60";
    } else {
      throw new Error("API check failed");
    }
  } catch {
    const statusDot = apiStatus.querySelector(".status-dot");
    statusDot.classList.add("offline");
    statusDot.classList.remove("online");
    apiStatusText.textContent = "API Offline";
  }
}

// Global function exposure for onclick handlers
window.handleSearch = handleSearch;
window.removeHistoryItem = removeHistoryItem;
window.closeModal = closeModal;

// Start the app
document.addEventListener("DOMContentLoaded", initApp);
