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
   PROFESSIONAL DEVELOPMENT
========================================== */

function renderProfessionalDevelopment() {

    const section = document.getElementById("professional-development");

    if (!section) return;

    section.innerHTML = `

<section class="container">

    <div class="section-header">

        <p class="eyebrow">

            CONTINUOUS PROFESSIONAL DEVELOPMENT

        </p>

        <h2 class="section-title">

            Committed to Continuous Learning

        </h2>

        <p class="section-description">

            I continuously invest in developing industry-specific knowledge to
            better support real estate professionals through organized
            operations, efficient systems, and modern technology.

        </p>

    </div>

    <div class="professional-development-grid">

        <!-- Professional Training -->

        <article class="pd-card training-card">

            <div class="pd-card-header">

                <div class="pd-icon">

                    🏆

                </div>

                <div>

                    <h3>

                        Professional Training

                    </h3>

                </div>

            </div>

            <div class="pd-card-body">

                <h4 class="pd-training-title">

                    Sync2VA<br>
                    US Real Estate Online Masterclass

                </h4>

                <p class="pd-training-meta">

                    40-Hour Intensive • 4-Week Training Program

                </p>

                <p class="pd-training-description">

                    Successfully completed structured training focused on
                    U.S. real estate operations, transaction coordination,
                    property management and administrative support through
                    practical exercises and real-world workflows.

                </p>

                <div class="pd-competencies">

                    <p class="pd-competencies-title">

                        Key Competencies

                    </p>

                    <ul>

                        <li>Transaction Coordination</li>

                        <li>Listing Coordination</li>

                        <li>Comparative Market Analysis</li>

                        <li>Property Management</li>

                        <li>Tenant Screening</li>

                        <li>Trust Accounting</li>

                        <li>Administrative Support</li>

                        <li>Real Estate Content Creation</li>

                    </ul>

                </div>

            </div>

            <div class="pd-card-footer">

                <button
    id="view-training-certificates"
    class="btn btn-outline">

    View Training Certificates

</button>

            </div>

        </article>

        <!-- Currently Learning -->

        <article class="pd-card learning-card">

            <div class="pd-card-header">

                <div class="pd-icon">

                    📚

                </div>

                <div>

                    <h3>

                        Currently Learning

                    </h3>

                </div>

            </div>

            <div class="pd-card-body">

                <div class="learning-badges">

                    <span class="tag">Buildium</span>

                    <span class="tag">Follow Up Boss</span>

                    <span class="tag">MLS</span>

                    <span class="tag">Google Workspace</span>

                    <span class="tag">Canva</span>

                    <span class="tag">AI Tools</span>

                    <span class="tag">Automation</span>

                </div>

                <p class="pd-learning-note">

                    Continuously expanding my knowledge of real estate
                    operations, modern software, and automation tools to
                    provide more efficient and reliable support.

                </p>

            </div>

        </article>

        <!-- Professional Philosophy -->

        <article class="pd-card philosophy-card">

            <div class="pd-card-header">

                <div class="pd-icon">

                    💡

                </div>

                <div>

                    <h3>

                        Professional Philosophy

                    </h3>

                </div>

            </div>

            <div class="pd-card-body">

                <blockquote>

                    I believe exceptional real estate operations are built
                    through continuous learning, organized systems, and
                    reliable execution.

                    <br><br>

                    Every new skill I develop helps me provide greater value
                    to the professionals and clients I support.

                </blockquote>

            </div>

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