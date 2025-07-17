document.addEventListener("DOMContentLoaded", function () {
    const toggleThemeButton = document.querySelector(".action")
    const toggleImagetag = document.getElementById("togglerimg")
    const body = document.getElementById("wholeBody")
    const contactImg = document.getElementById("contact-us")
    const profileImg = document.getElementById("profileImg")

    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
        body.classList.add("dark-mode")
        toggleImagetag.src = "sun.png"
        contactImg.src = "contactUs.png"
        profileImg.src = "https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
    } else {
        body.classList.remove("dark-mode")
        toggleImagetag.src = "moon.png"
        contactImg.src = "contactUs.jpg"
        profileImg.src = "https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
    }

    function toggleTheme() {
        body.classList.toggle("dark-mode")

        const isDark = body.classList.contains("dark-mode")
        localStorage.setItem("theme", isDark ? "dark" : "light")

        toggleImagetag.src = isDark
            ? "sun.png"
            : "moon.png"

        contactImg.src = isDark
            ? "contactUs.png"
            : "contactUs.jpg"

        profileImg.src = "https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
    }

    toggleThemeButton.addEventListener("click", toggleTheme)
})
