/* ==================================================
   MAIN.JS
   Application Initialization
================================================== */

document.addEventListener("DOMContentLoaded", initializePortfolio);

function initializePortfolio() {

    renderFeaturedWork();

    renderCapabilities();

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

        const firstThumb = document.querySelector(".gallery-thumb");

        if (firstThumb) {
            firstThumb.classList.add("active");
        }

    }

    function closeCaseStudy() {

        modal.classList.add("hidden");

        document.body.style.overflow = "";

    }

    document.addEventListener("click", (event) => {

        /* Featured button */

        const openButton = event.target.closest("#open-case-study");

        if (openButton) {

            openCaseStudy(portfolio.featuredProject);

            return;

        }

        /* Featured image */

        const featuredImage = event.target.closest("#featured-image");

        if (featuredImage) {

            openCaseStudy(portfolio.featuredProject);

            return;

        }

        /* Project cards */

        const card = event.target.closest(".project-card");

        if (card) {

            openCaseStudy(card.dataset.project);

            return;

        }

        /* Gallery thumbnails */

        const thumbnail = event.target.closest(".gallery-thumb");

        if (thumbnail) {

            const mainImage = document.getElementById("gallery-main-image");

            if (!mainImage) return;

            mainImage.src = thumbnail.src;

            document
                .querySelectorAll(".gallery-thumb")
                .forEach(image => image.classList.remove("active"));

            thumbnail.classList.add("active");

            return;

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