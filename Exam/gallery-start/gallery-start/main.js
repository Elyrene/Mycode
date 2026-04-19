const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const controller = new AbortController();

/* Declaring the array of image filenames */
const images = [
    "pic1.jpg:Closeup of a human eye",
    "pic2.jpg:Some image-2",
    "pic3.jpg:Some image-3",
    "pic4.jpg:Some image-4",
    "pic5.jpg:Some image-5",
];
/* Declaring the alternative text for each image file */

/* Looping through images */
for (const image  of images) {
    const newImage = document.createElement('img');
    const imageinfo = image.split(":");
    newImage.setAttribute('src', `images/${imageinfo[0]}`);
    newImage.setAttribute('alt', `images/${imageinfo[1]}`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", () => {
        displayedImage.setAttribute("src", `${newImage.getAttribute("src")}`);
        displayedImage.setAttribute("alt", `${newImage.getAttribute("alt")}`);
    },{ signal:controller.signal});
};
/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () => {
    const darkorlight = btn.getAttribute("class");
    if (darkorlight === "dark") {
        btn.setAttribute("class", `light`);
        btn.textContent = `Lighten`;
        overlay.style.backgroundColor = `rgba(0,0,0,0.5)`;
    } else {
        btn.setAttribute("class", `dark`);
        btn.textContent = `Darken`;
        overlay.style.backgroundColor = `rgba(0,0,0,0)`;
    };
},{ signal:controller.signal });