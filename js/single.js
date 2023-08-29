// FUNCION PARA QUE EL TEXTO APARECIERA ACORDE AL MOVIMIENTO DE LA BARRA LATERAL
const contenedor = document.querySelector(".menu-lateral")
const suscripcion = document.querySelector(".suscripcion")
const videos2 = document.querySelector(".container")
const about = document.querySelector("#about-final")
const todo = document.querySelector(".todo")


const toggleClass = (elements, className) => {
    elements.forEach(element => element.classList.toggle(className));
    };
    
    document.querySelector("#hamburguesa").addEventListener('click', () => {
        contenedor.classList.toggle('active');
        about.classList.toggle('active');
        videos2.classList.toggle('active');
        todo.classList.toggle('active');
    
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

//FUNCION PARA PONER EL VIDEO EN EL HTML
function ponerVideo(parametro) {
    let iframe = document.querySelector("#video-left");
    iframe.insertAdjacentHTML('beforeend', /*HTML*/`
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/${parametro}?si=czx-JXcyfxDxe0lv&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `)
}

let localID = localStorage.getItem('Id')
ponerVideo(localID)


// let informacion = async() =>{
//     const responseChannel = await fetch("./storage/channel.json");
//     let responseVideos = await fetch("./storage/videos.json");
//     let videos = await responseVideos.json();
//     let canal = await responseChannel.json();

//     let banner = document.querySelector(".container")
//         banner.insertAdjacentHTML("beforeend", /*HTML*/`
//         <img src="${canal.banner.desktop[3].url}" class="fondo-grande">
//         <div class="list-container">
//             ${videos.contents.map((value) => /*HTML*/`
//                 <div class="vid-list" data-video-id="${value.video.videoId}">
//                     <div class="contenedor-video">
//                         <img src="${value.video.thumbnails[3].url}" class="imagen-principal" >
//                     </div>
//                     <div  class="flex-div">
//                         <img src="${canal.avatar[1].url}">
//                         <div>
//                             <a href="">${value.video.title}</a>
//                             <p>${canal.title}</p>
//                             <p>${value.video.stats.views} views ·${value.video.publishedTimeText}</p>
//                         </div>
//                     </div>
//                 </div>
//             `).join("")}
//         </div>
//     `)
// }
// informacion();