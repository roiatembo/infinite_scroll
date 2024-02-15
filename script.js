const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash api
const count = 5;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//check if all images are loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;

  }
}

// helper function
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}


//create elements for links
function displayPhotos(photosArray) {
  totalImages = photosArray.length;
  imagesLoaded = 0;
  //foreach method
  photosArray.forEach((photo) => {
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank'
    })
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    })
    img.addEventListener('load', imageLoaded);
    item.appendChild(img);
    imageContainer.appendChild(item);
    console.log(photo.alt_description)
  })
}


// get photos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const photosArray = await response.json();
    displayPhotos(photosArray);
  } catch (error) {
    //error
  }
}

//check to see if we are near the bottom

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false;
    getPhotos();
  }
})

//On Load
getPhotos();
