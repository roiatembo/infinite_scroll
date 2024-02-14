// Unsplash api
const count = 10;
const apiKey = "oZ1RWDX3sQ3_VeS33GhgPWaNpf09xnVrnGGTXaLma64";
const apiUrl = "https://api.unsplash.com/photos/random/?client_id=oZ1RWDX3sQ3_VeS33GhgPWaNpf09xnVrnGGTXaLma64&count=2"

// get photos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    //error
  }
}

//check to see if we are near the bottom

window.addEventListener('scroll', () => {
  console.log("scrolled")})

//On Load
getPhotos();
