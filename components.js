/* ==================================================
   COMPONENTS.JS
   Portfolio Rendering Components
   Version: v0.5.2
================================================== */

/* ==========================================
   HELPERS
========================================== */

function createTags(items = []) {

    return items.map(item =>
        `<span class="tag">${item}</span>`
    ).join("");

}

/* ==========================================
   FEATURED WORK
========================================== */

function renderFeaturedWork() {

    const section = document.getElementById("featured-work");

    if (!section) return;

    const featured = portfolio.projects.find(
        project => project.featured
    );

    section.innerHTML = `

<section class="container">

    <div class="section-header">

        <p class="eyebrow">
            FEATURED WORK
        </p>

        <h2 class="section-title">
            Real Estate Operations in Practice
        </h2>

        <p class="section-description">

            A curated selection of client-ready deliverables demonstrating
            property research, transaction coordination,
            property management and marketing support.

        </p>

    </div>

    <div class="featured-case">

        <div
            id="featured-image"
            class="featured-image">

            <img
                src="${featured.image}"
                alt="${featured.title}">

        </div>

        <div class="featured-content">

            <span class="case-category">

                ${featured.categoryLabel}

            </span>

            <h3>

                ${featured.title}

            </h3>

            <p class="case-subtitle">

                ${featured.subtitle}

            </p>

            <p>

                ${featured.summary}

            </p>

            <div class="case-impact">

                <h4>

                    Outcome

                </h4>

                <p>

                    ${featured.outcome}

                </p>

            </div>

            <div class="tool-tags">

                ${createTags(featured.tools)}

            </div>

            <button
                id="open-case-study"
                class="btn btn-primary">

                Explore Case Study →

            </button>

        </div>

    </div>

    <div class="section-header small">

        <h3>

            More Projects

        </h3>

    </div>

    <div
        id="project-grid"
        class="project-grid">

    </div>

</section>

`;

    renderProjectGrid();

}

/* ==========================================
   PROJECT GRID
========================================== */

function renderProjectGrid() {

    const grid = document.getElementById("project-grid");

    if (!grid) return;

    const projects = portfolio.projects.filter(
        project => !project.featured
    );

    grid.innerHTML = projects.map(project => `

<article
    class="project-card"
    data-project="${project.id}">

    <img
        src="${project.image}"
        alt="${project.title}">

    <div class="project-info">

        <span>

            ${project.categoryLabel}

        </span>

        <h4>

            ${project.title}

        </h4>

        <p>

            ${project.subtitle}

        </p>

    </div>

</article>

`).join("");

}

/* ==========================================
   CAPABILITIES
========================================== */

function renderCapabilities() {

    const section = document.getElementById("capabilities");

    if (!section) return;

    section.innerHTML = `

<section class="container">

    <div class="section-header">

        <p class="eyebrow">

            CAPABILITIES

        </p>

        <h2 class="section-title">

            How I Support Real Estate Professionals

        </h2>

        <p class="section-description">

            Practical operational support that helps
            agents, brokers, investors and property
            managers stay organized, responsive
            and focused on growth.

        </p>

    </div>

    <div class="capabilities-grid">

        <article class="capability-card">

            <h3>🏠 Property Research</h3>

            <p>

                Research-driven support that helps
                identify investment opportunities
                and evaluate market conditions.

            </p>

            <ul>

                <li>Investment Property Research</li>

                <li>Comparative Market Analysis</li>

                <li>Zillow Research</li>

                <li>Market Data Collection</li>

            </ul>

        </article>

        <article class="capability-card">

            <h3>📋 Transaction Coordination</h3>

            <p>

                Organized transaction support from
                listing preparation through
                buyer coordination.

            </p>

            <ul>

                <li>Listing Coordination</li>

                <li>Buyer Transaction Support</li>

                <li>Timeline Tracking</li>

                <li>Document Management</li>

            </ul>

        </article>
                <article class="capability-card">

            <h3>🏢 Property Management</h3>

            <p>

                Administrative support that keeps
                rental operations organized
                and efficient.

            </p>

            <ul>

                <li>Tenant Screening</li>

                <li>Property Accounting</li>

                <li>Buildium</li>

                <li>Record Management</li>

            </ul>

        </article>

        <article class="capability-card">

            <h3>🎨 Marketing & Administrative Support</h3>

            <p>

                Professional marketing materials
                and administrative support
                for real estate businesses.

            </p>

            <ul>

                <li>Canva Marketing</li>

                <li>Open House Materials</li>

                <li>CRM Updates</li>

                <li>Process Documentation</li>

            </ul>

        </article>

    </div>

</section>

`;

}

/* ==========================================
   CASE STUDY
========================================== */

function renderCaseStudy(project) {

    const body = document.getElementById("modal-body");

    if (!body) return;

    body.innerHTML = `

<div class="case-study">

    <p class="eyebrow">

        FEATURED CASE STUDY

    </p>

    <h2>

        ${project.title}

    </h2>

    <p class="case-subtitle">

        ${project.subtitle}

    </p>

    <div class="gallery-viewer">

        <img
            id="gallery-main-image"
            class="case-study-image"
            src="${project.gallery[0]}"
            alt="${project.title}">

    </div>

    <div class="gallery-thumbnails">

        ${project.gallery.map((image, index) => `

            <img
                class="gallery-thumb"
                data-index="${index}"
                src="${image}"
                alt="Gallery ${index + 1}">

        `).join("")}

    </div>

    <section class="case-section">

        <h3>

            Outcome

        </h3>

        <p>

            ${project.outcome}

        </p>

    </section>

    <section class="case-section">

        <h3>

            Deliverable

        </h3>

        <p>

            ${project.deliverable}

        </p>

    </section>

    <section class="case-section">

        <h3>

            Summary

        </h3>

        <p>

            ${project.summary}

        </p>

    </section>

    <section class="case-section">

        <h3>

            Tools

        </h3>

        <div class="tool-tags">

            ${createTags(project.tools)}

        </div>

    </section>

    <section class="case-section">

        <h3>

            Core Skills

        </h3>

        <div class="tool-tags">

            ${createTags(project.skills)}

        </div>

    </section>

</div>

`;

}