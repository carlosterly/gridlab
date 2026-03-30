// Suppress AbortError from skipped view transitions
window.addEventListener("unhandledrejection", (e) => {
  if (e.reason?.name === "AbortError") e.preventDefault();
});
