let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar")

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar")
}

let informacion = async() =>{
    const responseChannel = await fetch("channel.json");
    let responseVideos = await fetch("videos.json");
    let videos = await responseVideos.json();
    let canal = await responseChannel.json();
    console.log(canal);
    console.log(videos);

    let banner = document.querySelector(".container")
        banner.insertAdjacentHTML("beforeend", /*HTML*/`
        <div class="banner">
        <img src="${canal.banner.desktop[3].url}" class="fondo-grande">
        </div>
        <div class="list-container">
        ${videos.contents.map((value) => /*HTML*/`
            <div class="vid-list">
                <a href=""><img src="${value.video.thumbnails[3].url}" class="imagen-principal"></a>
                <div class="flex-div">
                    <img src="${canal.avatar[1].url}">
                    <div>
                        <a href="">${value.video.title}</a>
                        <p>${value.video.stats.views} views ·${value.video.publishedTimeText}</p>
                    </div>
                </div>
            </div>
        `).join("")}
        </div>
    `)
}
informacion();

const contenedor = document.querySelector(".menu-lateral")
const texto = document.querySelector("#texto")
const texto1 = document.querySelector("#texto1")
const texto2 = document.querySelector("#texto2")
const texto3 = document.querySelector("#texto3")
const texto4 = document.querySelector("#texto4")
const texto5 = document.querySelector("#texto5")
const texto6 = document.querySelector("#texto6")
const texto7 = document.querySelector("#texto7")
const texto8 = document.querySelector("#texto8")
const texto9 = document.querySelector("#texto9")
const texto10 = document.querySelector("#texto10")
const texto11 = document.querySelector("#texto11")
const texto12 = document.querySelector("#texto12")
const texto13 = document.querySelector("#texto13")
const Trending = document.querySelector("#Trending")
const Music = document.querySelector("#Music")
const Live = document.querySelector("#Live")
const Gaming = document.querySelector("#Gaming")
const News = document.querySelector("#News")
const Sports = document.querySelector("#Sports")
const Learning = document.querySelector("#Learning")
const videos = document.querySelector(".container")
const suscripcion = document.querySelector(".suscripcion")

document.querySelector("#hamburguesa").addEventListener('click', () =>{
    contenedor.classList.toggle('active')
    videos.classList.toggle('active')
    let bandera = true
    if (bandera){
        setTimeout(() => {
            texto.classList.toggle('activado')
            texto1.classList.toggle('activado')
            texto2.classList.toggle('activado')
            texto3.classList.toggle('activado')
            texto4.classList.toggle('activado')
            texto5.classList.toggle('activado')
            texto6.classList.toggle('activado')
            texto7.classList.toggle('activado')
            texto8.classList.toggle('activado')
            texto9.classList.toggle('activado')
            texto10.classList.toggle('activado')
            texto11.classList.toggle('activado')
            texto12.classList.toggle('activado')
            texto13.classList.toggle('activado')
            Trending.classList.toggle('activado')
            Music.classList.toggle('activado')
            Live.classList.toggle('activado')
            Gaming.classList.toggle('activado')
            News.classList.toggle('activado')
            Sports.classList.toggle('activado')
            Learning.classList.toggle('activado')
            suscripcion.classList.toggle('activado')
          }, 200);
    }
    
})