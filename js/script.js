// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika tombol menu diklik
document.querySelector("#menu").onclick = (event) => {
  // Menghentikan event default untuk mencegah perubahan halaman
  event.preventDefault();

  // Toggle class "active" pada elemen navbarNav
  navbarNav.classList.toggle("active");
};

// Ketika suatu elemen menu diklik
document.querySelectorAll(".navbar-nav a").forEach((menuItem) => {
  menuItem.addEventListener("click", (event) => {
    // Menghentikan event default untuk mencegah perubahan halaman
    event.preventDefault();

    // Menutup menu dengan menghapus kelas "active"
    navbarNav.classList.remove("active");

    // Scroll ke elemen yang ditentukan oleh href
    const targetId = menuItem.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

// Klik di luar sidebar untuk menutupnya
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// Hitung Mundur
// Hitung Mundur
// Set the date we're counting down to
var countDownDate = new Date("March 2, 2024 16:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = separateDigits(days);
  document.getElementById("hours").innerHTML = separateDigits(hours);
  document.getElementById("minutes").innerHTML = separateDigits(minutes);
  document.getElementById("seconds").innerHTML = separateDigits(seconds);

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// Function to separate each digit into individual p elements
function separateDigits(number) {
  return number
    .toString()
    .split("")
    .map((digit) => "<p>" + digit + "</p>")
    .join("");
}

// INI ZOOM UNTUK RULES
document.addEventListener("DOMContentLoaded", function () {
  const originalImage = document.getElementById("originalImage");
  const zoomedImage = document.getElementById("zoomedImage");

  originalImage.addEventListener("click", function () {
    zoomedImage.innerHTML =
      '<img src="' + originalImage.src + '" alt="Zoomed Image">';
    zoomedImage.style.display = "flex";
  });

  zoomedImage.addEventListener("click", function () {
    zoomedImage.style.display = "none";
  });
});
// INI ZOOM UNTUK MAPS
document.addEventListener("DOMContentLoaded", function () {
  const zoomableImages = document.querySelectorAll(".zoomable-image");
  const zoomedImage = document.querySelector(".zoomedImage");

  zoomableImages.forEach(function (image) {
    image.addEventListener("click", function () {
      zoomedImage.innerHTML =
        '<img src="' + image.src + '" alt="Zoomed Image">';
      zoomedImage.style.display = "flex";
    });
  });

  zoomedImage.addEventListener("click", function () {
    zoomedImage.style.display = "none";
  });
});
