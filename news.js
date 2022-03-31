
const world_result = document.getElementById('world_result');
const entertainment_result = document.getElementById('entertainment_result');
const world_btn = document.getElementById('world_btn');
const entertainment_btn = document.getElementById('entertainment_btn');

world_btn.addEventListener('click', getRandomWorld)
entertainment_btn.addEventListener('click', getRandomEntertainment)



function getRandomWorld() {
    fetch('https://inshortsapi.vercel.app/news?category=world')
    .then(res => res.json())
    .then(data => {
        world_result.innerHTML = `<img src="${data.file}"/>`
    })

}

function getRandomEntertainment() {
    fetch('https://inshortsapi.vercel.app/news?category=entertainment')
    .then(res => res.json())
    .then(data => {
        if(data.url.includes('.mp4')) {
            getRandomEntertainment()
        } else  {
        entertainment_result.innerHTML = `<img src="${data.url}"/>`
    }

})
}