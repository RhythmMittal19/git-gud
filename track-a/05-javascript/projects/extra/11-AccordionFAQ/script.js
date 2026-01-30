document.addEventListener("DOMContentLoaded", () => {
  /* DOCUMENT REFERENCES */
  let accordionList = document.querySelector(".accordion-container");
  if (!accordionList) return;

  document
    .querySelectorAll(".acc-item.active .acc-content")
    .forEach((content) => {
      content.style.maxHeight = content.scrollHeight + "px";
    });

  /* EVENT LISTENER */
  accordionList.addEventListener("click", (e) => {
    const clickedHeader = e.target.closest(".acc-header");
    if (!clickedHeader) return;

    const parent = clickedHeader.closest(".acc-item");
    const isActive = parent.classList.contains("active");

    document.querySelectorAll(".acc-item").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".acc-content").style.maxHeight = null;
    });

    if (!isActive) {
      parent.classList.add("active");
      const content = parent.querySelector(".acc-content");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
