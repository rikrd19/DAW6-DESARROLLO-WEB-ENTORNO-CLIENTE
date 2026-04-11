/**
 * Client-side checks only — server must validate again in production.
 */
(function () {
    "use strict";

    var form = document.getElementById("registration-form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        var passwordInput = document.getElementById("password");
        var password = passwordInput ? passwordInput.value : "";

        if (password.length < 8) {
            event.preventDefault();
            alert("Password must be at least 8 characters long.");
            return;
        }

        event.preventDefault();

        var name = document.getElementById("full-name").value.trim();
        var email = document.getElementById("email").value.trim();
        var languageSelect = document.getElementById("favorite-language");
        var language =
            languageSelect.options[languageSelect.selectedIndex].text;
        var motivation = document.getElementById("motivation").value.trim();

        console.log(
            "Welcome, " +
                name +
                "! Thanks for registering with " +
                email +
                ". Favorite language: " +
                language +
                ". Motivation: " +
                (motivation || "(not provided)")
        );
    });
})();
