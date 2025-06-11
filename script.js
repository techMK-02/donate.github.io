function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

function handleMenuClick(imageUrl, event) {
  if (event) event.preventDefault(); // Prevent default anchor scroll/jump

  changeImage(imageUrl);

  // Sidebar ko close karo
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("active");
}

function changeImage(imageUrl) {
  const image = document.getElementById("mainImage");
  const downloadLink = document.getElementById("downloadLink");

  image.src = imageUrl;
  image.alt = "QR Code for " + imageUrl.split('/').pop();
  downloadLink.href = imageUrl;
}
