function renderFeaturedWork() {

    const section = document.getElementById("featured-work");

    if (!section) return;

    const featured = projects.find(project => project.featured);
    const others = projects.filter(project => !project.featured);

    section.innerHTML = `

<div class="container">

    <div class="section-header">

        <p class="section-number">
            01
        </p>

        <p class="eyebrow">
            SELECTED CASE STUDIES
        </p>

        <h2 class="section-title">
            Real Projects. Real Results.
        </h2>

        <p class="section-description">

            A curated collection of client-ready deliverables demonstrating my
            experience supporting real estate professionals through organized
            operations, transaction coordination, property research,
            listing management and marketing support.

        </p>

    </div>

    <div class="featured-case">

        <div class="featured-image">

            <img src="${featured.image}" alt="${featured.title}">

        </div>

        <div class="featured-content">

            <span class="case-category">

                ${featured.category}

            </span>

            <h3>

                ${featured.title}

            </h3>

            <p>

                ${featured.overview}

            </p>

            <div class="case-impact">

                <h4>

                    Client Value Delivered

                </h4>

                <p>

                    Organized and presented investment property research in a structured,
                    client-ready format that simplified evaluation and supported
                    informed decision-making.

                </p>

            </div>

            <div class="tool-tags">

                ${featured.tools.map(tool => `
                    <span>${tool}</span>
                `).join("")}

            </div>

            <button class="btn btn-primary">

                Explore Case Study →

            </button>

        </div>

    </div>

    <div class="other-projects">

        <div class="section-header small">

            <p class="section-number">
                02
            </p>

            <h3>
                Other Case Studies
            </h3>

        </div>

        <div class="project-grid">

            ${others.map(project => `

                <article class="project-card">

                    <img src="${project.image}" alt="${project.title}">

                    <div class="project-info">

                        <span>

                            ${project.category}

                        </span>

                        <h4>

                            ${project.title}

                        </h4>

                    </div>

                </article>

            `).join("")}

        </div>

    </div>

</div>

`;

}