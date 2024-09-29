// Add event listener to WhatsApp button
document.addEventListener("DOMContentLoaded", function() {
    const whatsappBtns = document.querySelectorAll(".whatsapp-btn");
    whatsappBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            // Replace with your WhatsApp API or link
            window.open("https://wa.me/085717817801", "hi, i want to rent something, is it available?");
        });
    });
});