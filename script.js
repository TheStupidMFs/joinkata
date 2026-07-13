const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector(".site-menu");

if (menuToggle && siteMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    document.body.classList.toggle("menu-open", isOpen);
  });

  siteMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      document.body.classList.remove("menu-open");
    });
  });
}

/* ---------------------------------
   INTERACTIVE PRODUCT DEMO
---------------------------------- */

const demoContent = {
  create: {
    number: "01",
    eyebrow: "Create the event",
    title: "Give the group one clear plan.",
    description:
      "Add the name, date, people, and first stops so everybody knows what is happening before the day begins.",
    event: "Beach Day + Dinner",
    label: "Next Step",
    main: "Create your group experience",
    button: "Continue",
    items: [
      ["1", "Choose the event", "Ready"],
      ["2", "Add the date", "Ready"],
      ["3", "Invite the group", "Next"]
    ]
  },

  invite: {
    number: "02",
    eyebrow: "Invite the group",
    title: "Bring everybody into one shared experience.",
    description:
      "Invite friends, confirm the group, and keep the plan accessible without digging through separate messages.",
    event: "Saturday Crew",
    label: "Group Status",
    main: "6 people are joining",
    button: "View Group",
    items: [
      ["1", "Friend 01", "Joined"],
      ["2", "Friend 02", "Joined"],
      ["3", "Friend 03", "Pending"]
    ]
  },

  track: {
    number: "03",
    eyebrow: "Track every detail",
    title: "Keep stops, receipts, and purchases together.",
    description:
      "Update the itinerary, add expenses, scan receipts, and make every purchase visible to the people involved.",
    event: "Event Activity",
    label: "Active Stop",
    main: "Smoothie + Protein Shop",
    button: "Add Receipt",
    items: [
      ["1", "Beach Run", "Done"],
      ["2", "Smoothie Shop", "Active"],
      ["3", "Gas Station", "Next"]
    ]
  },

  settle: {
    number: "04",
    eyebrow: "Settle the tab",
    title: "Close the event without awkward math.",
    description:
      "Show the group exactly what was spent, who covered it, and what each person needs to settle.",
    event: "Final Balances",
    label: "Ready to Settle",
    main: "$184.50 across 6 people",
    button: "Settle Event",
    items: [
      ["1", "Food & drinks", "$126"],
      ["2", "Gas", "$38.50"],
      ["3", "Parking", "$20"]
    ]
  }
};

const stepButtons = document.querySelectorAll(".step-button");

function updateProductDemo(key) {
  const content = demoContent[key];

  if (!content) {
    return;
  }

  const demoNumber = document.querySelector("#demo-number");
  const demoEyebrow = document.querySelector("#demo-eyebrow");
  const demoTitle = document.querySelector("#demo-title");
  const demoDescription = document.querySelector("#demo-description");
  const previewEvent = document.querySelector("#preview-event");
  const previewLabel = document.querySelector("#preview-label");
  const previewMain = document.querySelector("#preview-main");
  const previewButton = document.querySelector("#preview-button");
  const previewList = document.querySelector("#preview-list");

  if (demoNumber) {
    demoNumber.textContent = content.number;
  }

  if (demoEyebrow) {
    demoEyebrow.textContent = content.eyebrow;
  }

  if (demoTitle) {
    demoTitle.textContent = content.title;
  }

  if (demoDescription) {
    demoDescription.textContent = content.description;
  }

  if (previewEvent) {
    previewEvent.textContent = content.event;
  }

  if (previewLabel) {
    previewLabel.textContent = content.label;
  }

  if (previewMain) {
    previewMain.textContent = content.main;
  }

  if (previewButton) {
    previewButton.textContent = content.button;
  }

  if (previewList) {
    previewList.innerHTML = "";

    content.items.forEach(([number, label, status]) => {
      const item = document.createElement("div");

      const numberElement = document.createElement("span");
      numberElement.textContent = number;

      const labelElement = document.createElement("p");
      labelElement.textContent = label;

      const statusElement = document.createElement("b");
      statusElement.textContent = status;

      item.appendChild(numberElement);
      item.appendChild(labelElement);
      item.appendChild(statusElement);

      previewList.appendChild(item);
    });
  }
}

stepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedStep = button.closest(".step");

    if (!selectedStep) {
      return;
    }

    const key = selectedStep.dataset.step;

    document.querySelectorAll(".step").forEach((step) => {
      const isSelected = step === selectedStep;
      const stepButton = step.querySelector(".step-button");

      step.classList.toggle("active", isSelected);

      if (stepButton) {
        stepButton.setAttribute("aria-expanded", String(isSelected));
      }
    });

  });
});

/* ---------------------------------
   FAQ ACCORDION
---------------------------------- */

const faqButtons = document.querySelectorAll(".faq-item > button");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");

    if (!item) {
      return;
    }

    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

/* ---------------------------------
   SCROLL REVEAL
---------------------------------- */

const revealTargets = [
  ...document.querySelectorAll(".section-heading"),
  ...document.querySelectorAll(".feature-card"),
  ...document.querySelectorAll(".step"),
  ...document.querySelectorAll(".product-demo"),
  ...document.querySelectorAll(".use-case-grid article"),
  ...document.querySelectorAll(".settlement-copy"),
  ...document.querySelectorAll(".settlement-card"),
  ...document.querySelectorAll(".roadmap-card"),
  ...document.querySelectorAll(".community-inner"),
  ...document.querySelectorAll(".faq-item"),
  ...document.querySelectorAll(".final-cta-inner")
];

revealTargets.forEach((element, index) => {
  element.classList.add("reveal");

  if (index % 4 === 1) {
    element.classList.add("reveal-delay-1");
  }

  if (index % 4 === 2) {
    element.classList.add("reveal-delay-2");
  }

  if (index % 4 === 3) {
    element.classList.add("reveal-delay-3");
  }
});

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
  revealTargets.forEach((element) => {
    element.classList.add("visible");
  });
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px"
    }
  );

  revealTargets.forEach((element) => {
    revealObserver.observe(element);
  });
}

/* ---------------------------------
   CLOSE MOBILE MENU IF SCREEN GROWS
---------------------------------- */

window.addEventListener("resize", () => {
  if (window.innerWidth > 880 && siteMenu && menuToggle) {
    siteMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    document.body.classList.remove("menu-open");
  }
});
