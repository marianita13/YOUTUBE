document.addEventListener("DOMContentLoaded", () =>{
    // FUNCION PARA CONSUMIR LA API DE LOS IMAGEN VIDEOS Y PONERLOS EN EN HTML
    let informacion = async() =>{
        const responseChannel = await fetch("./storage/channel.json");
        let responseVideos = await fetch("./storage/videos.json");
        let videos = await responseVideos.json();
        let canal = await responseChannel.json();

        let banner = document.querySelector(".container")
            banner.insertAdjacentHTML("beforeend", /*HTML*/`
            <img src="${canal.banner.desktop[3].url}" class="fondo-grande">
            <div class="list-container">
                ${videos.contents.map((value) => /*HTML*/`
                    <div class="vid-list" data-video-id="${value.video.videoId}">
                        <div class="contenedor-video">
                            <img src="${value.video.thumbnails[3].url}" class="imagen-principal" >
                        </div>
                        <div  class="flex-div">
                            <img src="${canal.avatar[1].url}">
                            <div>
                                <a href="">${value.video.title}</a>
                                <p>${canal.title}</p>
                                <p>${value.video.stats.views} views ·${value.video.publishedTimeText}</p>
                            </div>
                        </div>
                    </div>
                `).join("")}
            </div>
        `)

        // FUNCION PARA GUARDAR EL ID DEL VIDEO EN EL LOCAL STORAGE
        const info = document.querySelectorAll(".vid-list")
        console.log(info);
        
        info.forEach(video =>{
            video.addEventListener('click', () =>{
                let videoID = video.getAttribute("data-video-id")
                console.log(videoID);

                localStorage.setItem('Id', videoID)
                window.location.href = 'single.html';
            })
        })
    }
    informacion();


// FUNCION PARA QUE EL TEXTO APARECIERA ACORDE AL MOVIMIENTO DE LA BARRA LATERAL
const contenedor = document.querySelector(".menu-lateral")
const videos2 = document.querySelector(".container")
const suscripcion = document.querySelector(".suscripcion")
const about = document.querySelector("#about-final")
const todo = document.querySelector(".todo")


const toggleClass = (elements, className) => {
    elements.forEach(element => element.classList.toggle(className));
    };
    
    document.querySelector("#hamburguesa").addEventListener('click', () => {
        contenedor.classList.toggle('active');
        videos2.classList.toggle('active');
        about.classList.toggle('active');
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

})