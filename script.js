
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bookingForm");

    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const checkin = document.getElementById("checkin").value;

        const checkout = document.getElementById("checkout").value;

        // Validate dates
        if (new Date(checkout) <= new Date(checkin)) {
            message.style.color = "red";
            message.textContent =
                "Check-out date must be after check-in date.";
            return;
        }

        // Success message
        message.style.color = "green";

        message.textContent =
            "Thank you, " + name +
            "! Your enquiry has been submitted successfully.";

        // Clear form
        form.reset();


    });

// Close mobile menu after clicking a navigation link
document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
    link.addEventListener('click', function () {
        const menu = document.querySelector('.navbar-collapse');

        if (menu && menu.classList.contains('show')) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});

});
