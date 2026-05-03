const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

let activeTags = new Set();

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const tag = btn.dataset.tag;

        if (activeTags.has(tag)) {
            activeTags.delete(tag);
            btn.classList.remove("active");
        } else {
            activeTags.add(tag);
            btn.classList.add("active");
        }

        cards.forEach(card => {
            const cardTags = card.dataset.tags.split(",");

            const matches = [...activeTags].every(t => cardTags.includes(t));

            if (activeTags.size === 0 || matches) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });
});

function toggleHeader() {
    const header = document.getElementById("headerstuff");
    const btn = document.getElementById("toggle-btn");
    header.classList.toggle("hidden");
    btn.classList.toggle("shifted");
}

document.querySelectorAll(".readme-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
        const repo = btn.dataset.repo;
        const contentDiv = btn.nextElementSibling;
        const isVisible = contentDiv.style.display === "block";

        if (isVisible) {
            contentDiv.style.display = "none";
            btn.textContent = "View More ▾";
            return;
        }

        btn.textContent = "Loading...";
        contentDiv.style.display = "block";

        if (contentDiv.dataset.loaded) {
            btn.textContent = "View Less ▴";
            return;
        }

        try {
            const res = await fetch(`https://api.github.com/repos/${repo}/readme`);
            const data = await res.json();
            const decoded = atob(data.content);
            contentDiv.innerHTML = marked.parse(decoded);  // ← changed
            contentDiv.dataset.loaded = "true";
            btn.textContent = "View Less ▴";
        } catch (err) {
            contentDiv.textContent = "Failed to load README.";
            btn.textContent = "View More ▾";
        }
    });
});