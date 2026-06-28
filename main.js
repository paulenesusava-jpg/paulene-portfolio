/* ==================================================
   MAIN.JS
   Application Initialization
================================================== */

document.addEventListener("DOMContentLoaded", initializePortfolio);

function initializePortfolio() {

    renderFeaturedWork();

    initializeCaseStudyModal();

}

/* ==================================================
   CASE STUDY MODAL
================================================== */

function initializeCaseStudyModal() {

    const modal = document.getElementById("case-study-modal");

    const closeButton = document.getElementById("close-modal");

    const overlay = document.querySelector(".case-modal-overlay");

    function openCaseStudy(projectId) {

        const project = portfolio.projects.find(
            project => project.id === projectId
        );

        if (!project) return;

        renderCaseStudy(project);
        modal.classList.remove("hidden");

        document.body.style.overflow = "hidden";

    }

    function closeCaseStudy() {

        modal.classList.add("hidden");

        document.body.style.overflow = "";

    }

    /* ==========================================
       Featured Button
    ========================================== */

    document.addEventListener("click", (event) => {

        const openButton = event.target.closest("#open-case-study");

        if (openButton) {

            openCaseStudy(portfolio.featuredProject);

            return;

        }

        const featuredImage = event.target.closest("#featured-image");

        if (featuredImage) {

            openCaseStudy(portfolio.featuredProject);

            return;

        }

        const card = event.target.closest(".project-card");

        if (card) {

            openCaseStudy(card.dataset.project);

        }const thumbnail = event.target.closest(".gallery-thumb");

if (thumbnail) {

    const mainImage = document.getElementById("gallery-main-image");

    if (!mainImage) return;

    mainImage.src = thumbnail.src;

    document
        .querySelectorAll(".gallery-thumb")
        .forEach(image => image.classList.remove("active"));

    thumbnail.classList.add("active");

}

    });

    closeButton.addEventListener("click", closeCaseStudy);

    overlay.addEventListener("click", closeCaseStudy);

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeCaseStudy();

        }

    });

}