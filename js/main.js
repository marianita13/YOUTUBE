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

    let banner = document.querySelector(".container")
    console.log(videos.contents[0].video.movingThumbnails[0].url);
        banner.insertAdjacentHTML("beforeend", /*HTML*/`
        <div class="banner">
        <img src="${canal.banner.desktop[3].url}" class="fondo-grande">
        </div>
        <div class="list-container">
            ${videos.contents.map((value) => 
                /*HTML*/`
                <div class="vid-list">
                    <img src="${value.video.thumbnails[3].url}" class="imagen-principal">
                    <div class="flex-div">
                        <div class="video-container" class="imagen-video">
                            <img src="${canal.avatar[1].url}">
                             <!---<video class="video" loop class="small-video">
                               <source src="" type="video">
                            </video>--->
                        </div>
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

const videoContainer = document.querySelector(".video-container");
const image = document.querySelector(".imagen-video");
const video = document.querySelector(".small-video");

videoContainer.addEventListener("mouseenter", () => {
    video.play();
    image.style.opacity = "0";
    video.style.opacity = "1";
});

videoContainer.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
    image.style.opacity = "1";
    video.style.opacity = "0";
});


const contenedor = document.querySelector(".menu-lateral")
const videos = document.querySelector(".container")
const suscripcion = document.querySelector(".suscripcion")
const about = document.querySelector("#about-final")




const toggleClass = (elements, className) => {
    elements.forEach(element => element.classList.toggle(className));
  };
  
  document.querySelector("#hamburguesa").addEventListener('click', () => {
    contenedor.classList.toggle('active');
    videos.classList.toggle('active');
    about.classList.toggle('active');
  
    const textElements = [
      texto, texto1, texto2, texto3, texto4, texto5,
      texto6, texto7, texto8, texto9, texto10, texto11,
      texto12, texto13, Trending, Music, Live, Gaming,
      News, Sports, Learning, premium, studio, Musica,
      kids, suscripcion,Settings,report,Help,Send
    ];
  
    toggleClass(textElements, 'activado');
  
    setTimeout(() => {
      toggleClass([Trending, Music, Live, Gaming, News, Sports, Learning, premium, studio, Musica, kids, suscripcion,Settings,report,Help,Send]);
    }, 250);
  });
  