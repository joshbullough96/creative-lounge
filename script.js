const filterButtons = document.querySelectorAll("[data-filter]");
const catalogCards = document.querySelectorAll(".catalog-card");

if (filterButtons.length && catalogCards.length) {
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach((item) => item.classList.remove("is-active"));
            button.classList.add("is-active");

            catalogCards.forEach((card) => {
                const tags = card.dataset.tags || "";
                const shouldShow = selectedFilter === "all" || tags.includes(selectedFilter);

                card.classList.toggle("is-hidden", !shouldShow);
            });
        });
    });
}
