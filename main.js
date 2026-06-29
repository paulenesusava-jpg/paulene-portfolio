/* ==================================================
   MAIN.JS
   Application Initialization
   Version: v0.6.2
================================================== */

document.addEventListener("DOMContentLoaded", initializePortfolio);

function initializePortfolio() {

    renderFeaturedWork();

    renderCapabilities();

    renderProfessionalDevelopment();

    renderAbout();

    initializeCaseStudyModal();

    initializeCertificateButton();

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

        if (firstThumb) firstThumb.classList.add("active");
    }

    function closeCaseStudy() {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
    }

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
            return;
        }

        const thumbnail = event.target.closest(".gallery-thumb");
        if (thumbnail) {

            const mainImage = document.getElementById("gallery-main-image");
            if (!mainImage) return;

            mainImage.src = thumbnail.src;

            document.querySelectorAll(".gallery-thumb")
                .forEach(img => img.classList.remove("active"));

            thumbnail.classList.add("active");
            return;
        }

    });

    closeButton.addEventListener("click", closeCaseStudy);
    overlay.addEventListener("click", closeCaseStudy);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeCaseStudy();
    });

}

/* ==================================================
   TRAINING CERTIFICATES
================================================== */

function initializeCertificateButton() {

    document.addEventListener("click", (event) => {

        const button = event.target.closest("#view-training-certificates");
        if (!button) return;

        const modal = document.getElementById("case-study-modal");
        const body = document.getElementById("modal-body");

        body.innerHTML = `
<div class="case-study">

<p class="eyebrow">PROFESSIONAL DEVELOPMENT</p>

<h2>Sync2VA Training Certificates</h2>

<p class="case-subtitle">
US Real Estate Online Masterclass
</p>

<div class="certificate-gallery">

<img src="assets/Sync2VA Certificate 1.png" alt="Certificate 1">

<img src="assets/Sync2VA Certificate 2.png" alt="Certificate 2">

</div>

</div>
`;

        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";

    });

}
