
(() => {
  "use strict";

                                           
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

                       
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && !reducedMotion) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
      }
    );

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

                       
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  menuButton?.addEventListener("click", () => {
    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    nav?.classList.toggle("open", !isOpen);
  });

  nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton?.setAttribute("aria-expanded", "false");
    });
  });

                                                         
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

                 
  const glow = document.querySelector(".cursor-glow");

  if (
    glow &&
    window.matchMedia("(pointer: fine)").matches &&
    !reducedMotion
  ) {
    window.addEventListener(
      "pointermove",
      event => {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
        glow.style.opacity = "1";
      },
      { passive: true }
    );

    document.addEventListener("pointerleave", () => {
      glow.style.opacity = "0";
    });
  }

                                                 
  const toast = document.querySelector(".project-toast");
  const toastText = document.querySelector(".toast-text");
  const closeToast = document.querySelector(".toast-close");

  let toastTimer;

  document.querySelectorAll("[data-project]").forEach(card => {
    card.addEventListener("click", event => {
      const url = card.getAttribute("href");

                                                                  
      if (!url || url.trim() === "" || url === "#contact") {
        event.preventDefault();

        if (!toast || !toastText) return;

        const project = card.dataset.project || "Project";

        toastText.textContent =
          `${project}: its project link hasn't been added yet.`;

        toast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {
          toast.classList.remove("show");
        }, 4200);
      }

                                                            
    });
  });

                                    
  closeToast?.addEventListener("click", () => {
    toast?.classList.remove("show");
    clearTimeout(toastTimer);
  });
})();