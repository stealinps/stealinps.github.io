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