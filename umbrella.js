const imageContainer = document.querySelector(".image-container");
const loaderContainer = document.getElementById("loader-container");    
const logoUploadButton = document.getElementById("logo-upload-button");
const logoUploadInput = document.createElement("input");

  logoUploadInput.setAttribute("type", "file");
  logoUploadInput.setAttribute("accept", ".jpg, .png");
  logoUploadInput.style.display = "none";

    // under construction
    // function showLoader() {
    //   loaderContainer.style.opacity = "1";
    // }
    
    // function hideLoader() {
    //   loaderContainer.style.opacity = "0";
    // }

    function changeImageBlue(fileName,color) {
    let img = document.querySelector("#blue");
    img.setAttribute("src", fileName);
    document.body.style.background= color ;
    logoUploadButton.style.backgroundColor="#3499f2";
    }
    function changeImageYellow(fileName,color) {
      let img = document.querySelector("#blue");
      img.setAttribute("src", fileName);
      document.body.style.background= color ;
      logoUploadButton.style.backgroundColor="rgb(240, 200, 10)";
    }
      function changeImagePink(fileName,color) {
        let img = document.querySelector("#blue");
        img.setAttribute("src", fileName);
        document.body.style.background= color ;
        logoUploadButton.style.backgroundColor="rgb(250, 41, 76)";
        }

  function handleLogoUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const uploadedLogo = document.getElementById("uploaded-logo");
      uploadedLogo.src = reader.result;
      uploadedLogo.style.display = "block";
      umbrellaImage.style.zIndex = "-1";
    };
  }
  logoUploadButton.addEventListener("click", () => {
    logoUploadInput.click();
  });
  
  logoUploadInput.addEventListener("change", handleLogoUpload);
  