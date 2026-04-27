/**
 * EliteStay Global Matrix - Affiliate Logic
 * Centralized Partner ID: 8132800
 */

const PARTNER_CONFIG = {
    aid: "8132800",
    base_url: "https://www.booking.com/searchresults.html",
    default_city: "New York",
    label: "vulture-matrix-2026"
};

// Global redirect function used by buttons and cards
function go(destination) {
    const searchTarget = destination || document.getElementById("target")?.value || PARTNER_CONFIG.default_city;
    
    // Construct the high-converting affiliate URL
    const finalUrl = `${PARTNER_CONFIG.base_url}?aid=${PARTNER_CONFIG.aid}&ss=${encodeURIComponent(searchTarget)}&nflt=price%3D1&order=price&label=${PARTNER_CONFIG.label}`;
    
    // Smooth transition to partner portal
    window.location.href = finalUrl;
}

// Add event listeners to all elements with class 'affiliate-link'
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".affiliate-link");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const city = link.getAttribute("data-city");
            go(city);
        });
    });
});
