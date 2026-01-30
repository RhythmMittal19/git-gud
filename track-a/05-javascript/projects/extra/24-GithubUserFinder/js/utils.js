// ═══════════════════════════════════════════════════════════════════════════
// UTILS.JS - Helper/Utility functions
// ═══════════════════════════════════════════════════════════════════════════

console.log("✅ utils.js loaded");

function formatNumber(num) {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return String(num);
}

function timeAgo(dateString) {
  const currentTime = new Date();
  const pastTime = new Date(dateString);

  const timeDiff = currentTime - pastTime;
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  // 🆕 Handle "just now" for very recent times
  if (seconds < 5) {
    return "Just now";
  }
  if (seconds < 60) {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  }
  if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }
  if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }
  if (days < 30) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }
  if (months < 12) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  }
  return `${years} ${years === 1 ? "year" : "years"} ago`;
}

function formatDate(dateString) {
  const fDate = new Date(dateString);

  return fDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getLanguageColor(language) {
  return LANGUAGE_COLORS[language] ?? LANGUAGE_COLORS.default;
}

function calculateTotalStars(repos) {
  if (!repos || repos.length === 0) return 0;

  let total = 0;
  repos.forEach((repo) => {
    total += repo.stargazers_count || 0;
  });
  return total;
}

function calculateLanguageStats(repos) {
  if (!Array.isArray(repos) || repos.length === 0) return [];

  const languageCounts = {};

  repos.forEach((repo) => {
    if (repo.language) {
      languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
    }
  });

  const total = Object.values(languageCounts).reduce(
    (sum, count) => sum + count,
    0,
  );

  return Object.entries(languageCounts)
    .map(([name, count]) => ({
      name,
      percentage: (count / total) * 100,
      color: getLanguageColor(name),
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, APP_CONFIG.MAX_LANGUAGES_SHOWN);
}
