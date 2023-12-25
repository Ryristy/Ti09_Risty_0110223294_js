function displayImage() {
    var dropdown = document.getElementById("imageDropdown");
    var selectedValue = dropdown.value;
    var imageContainer = document.getElementById("imageContainer");
    var displayedImage = document.getElementById("displayedImage");
    var alertBox = document.getElementById("alertBox");
  
    // Ganti path gambar sesuai dengan struktur folder Anda
    var imagePath = "images/" + selectedValue + ".jpg";
  
    displayedImage.src = imagePath;
    imageContainer.style.display = "block";
  
    // Menampilkan kotak alert dengan nama file gambar
    alertBox.innerHTML = "Nama file gambar: " + selectedValue + ".jpg";
    alertBox.style.display = "block";
  }
