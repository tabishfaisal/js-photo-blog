const photoContainer = document.querySelector('.container');
const overlay = document.querySelector('.overlay');
const button = document.querySelector('.overlay-btn');
const overlayimage = document.querySelector('.overlay-img');
const card = document.querySelectorAll('.row');

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then((res)=>{
    const photos = res.data;

    photos.forEach(photo => {
        photoContainer.innerHTML += `<div class="row">
            <div class="card" onclick="showOverlay('${photo.url}')">
                <img class="img" src="${photo.thumbnailUrl}">
                <p>${photo.title}</p>
            </div>
        </div>
    </div>`;
    });
})

button.addEventListener('click', ()=>{
    overlay.style.display = 'none'
});
function showOverlay(imageUrl){
    overlayimage.src = imageUrl;
    overlay.style.display = 'flex';
}

