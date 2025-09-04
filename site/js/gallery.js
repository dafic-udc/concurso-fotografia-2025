/* Get gallery element */
const gallery = document.getElementById("gallery");

const imageUrls = [
];

let currentImageIndex = 0;

const overlay_on = () => {
    document.getElementById("overlay").style.display = "block";
};

const overlay_off = () => {
    document.getElementById("overlay").style.display = "none";
};

const updateOverlayImage = () => {
    const overlay = document.getElementById("overlay");
    overlay.innerHTML = `
        <img src="${imageUrls[currentImageIndex]}" alt="Fotografía ${currentImageIndex + 1}" class="overlay-image">
        <button id="prev-btn" class="overlay-btn">&#10094;</button>
        <button id="next-btn" class="overlay-btn">&#10095;</button>
    `;

    document.getElementById("prev-btn").addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
        updateOverlayImage();
    });

    document.getElementById("next-btn").addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
        updateOverlayImage();
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay_off();
    });
};

/* Populate gallery with images */
imageUrls.forEach((url, index) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");

    const img = document.createElement("img");
    img.id = `foto-${index + 1}`;
    img.src = url;
    img.alt = `Fotografía ${index + 1}`;
    item.appendChild(img);

    const caption = document.createElement("p");
    caption.textContent = `Fotografía ${index + 1}`;

    item.appendChild(caption);
    gallery.appendChild(item);

    // Add click event to open image in overlay
    img.addEventListener("click", () => {
        currentImageIndex = index;
        overlay_on();
        updateOverlayImage();
    });
});

