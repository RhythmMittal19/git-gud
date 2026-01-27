document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".acc-item");

  // Set initial height for active items
  items.forEach((item) => {
    if (item.classList.contains("active")) {
      const content = item.querySelector(".acc-content");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });

  items.forEach((item) => {
    const header = item.querySelector(".acc-header");

    header.addEventListener("click", () => {
      const content = item.querySelector(".acc-content");
      const isActive = item.classList.contains("active");

      // 1. Close all other items (Accordion behavior)
      // If you want them to stay open independently, remove this block
      items.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".acc-content").style.maxHeight = 0;
        }
      });

      // 2. Toggle clicked item
      if (isActive) {
        item.classList.remove("active");
        content.style.maxHeight = 0;
      } else {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
