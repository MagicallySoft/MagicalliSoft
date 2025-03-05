document.addEventListener("DOMContentLoaded", function () {
  // ----- Desktop Tab Functionality -----
  const navLinks = document.querySelectorAll(".what-do .nav-item .nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const key = this.getAttribute("data-rr-ui-event-key");

      // Remove active class from all nav links
      navLinks.forEach((lnk) => lnk.classList.remove("active"));
      this.classList.add("active");

      // Hide all tab panes
      const tabPanes = document.querySelectorAll(
        ".what-do .tab-content .tab-pane"
      );
      tabPanes.forEach((pane) => {
        pane.classList.remove("active", "show");
      });

      // Show the matching tab pane
      const paneToShow = document.querySelector(
        `.what-do .tab-content .tab-pane[id$="${key}"]`
      );
      if (paneToShow) {
        paneToShow.classList.add("active", "show");
      }
    });
  });

  // ----- Mobile Accordion Functionality -----
  const accordionButtons = document.querySelectorAll(".accordion-button");
  accordionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // For single-open accordion, collapse other items
      accordionButtons.forEach(function (btn) {
        if (btn !== button) {
          btn.setAttribute("aria-expanded", "false");
          const otherCollapse = btn
            .closest(".accordion-item")
            .querySelector(".accordion-collapse");
          if (otherCollapse) {
            otherCollapse.classList.remove("show");
          }
        }
      });

      // Toggle current accordion item
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !isExpanded);
      const collapseElement = button
        .closest(".accordion-item")
        .querySelector(".accordion-collapse");
      if (collapseElement) {
        collapseElement.classList.toggle("show", !isExpanded);
      }
    });
  });
});
