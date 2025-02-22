// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Search functionality for topics
    const searchInput = document.getElementById("search");
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const query = searchInput.value.toLowerCase();
            const topics = document.querySelectorAll(".topic-card");

            topics.forEach(topic => {
                const text = topic.innerText.toLowerCase();
                if (text.includes(query)) {
                    topic.style.display = "block";
                } else {
                    topic.style.display = "none";
                }
            });
        });
    }

    // Handle topic selection and redirect to article page
    const topicCards = document.querySelectorAll(".topic-card");
    topicCards.forEach(card => {
        card.addEventListener("click", function () {
            const topic = card.innerText.toLowerCase().replace(/\s+/g, "-");
            window.location.href = `article.html?topic=${topic}`;
        });
    });
});
