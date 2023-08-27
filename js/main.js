// FUNCION PARA CONSUMIR LA API DE LOS IMAGEN VIDEOS Y PONERLOS EN EN HTML
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
            ${videos.contents.map((value) => /*HTML*/`
                <div class="vid-list">
                    <div class="contenedor-video">
                        <img src="${value.video.thumbnails[3].url}" class="imagen-principal">
                        <video class="video" scr="./images/video.mp4" controls></video>
                    </div>
                    <div  class="flex-div">
                        <img src="${canal.avatar[1].url}" class="imagen-video">
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

//FUNCION PARA QUE SE REPRODUZAC UNA PEQUEÑA PARTE DEL VIDEO
const imagen = document.querySelector(".imagen-principal")
const video = document.querySelector(".video")

imagen.addEventListener("mouseover", () =>{
    imagen.style.display="none"
    video.style.display="block"
    video.play()
})
imagen.addEventListener("mouseout", () =>{
    imagen.style.display="block"
    video.style.display="none"
    video.pause()
})


// FUNCION PARA QUE EL TEXTO APARECIERA ACORDE AL MOVIMIENTO DE LA BARRA LATERAL
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
  