document.addEventListener("DOMContentLoaded", () =>{
    // FUNCION PARA CONSUMIR LA API DE LOS IMAGEN VIDEOS Y PONERLOS EN EN HTML
    let informacion = async() =>{
        const responseChannel = await fetch("channel.json");
        let responseVideos = await fetch("videos.json");
        let videos = await responseVideos.json();
        let canal = await responseChannel.json();

        let banner = document.querySelector(".container")
            banner.insertAdjacentHTML("beforeend", /*HTML*/`
            <img src="${canal.banner.desktop[3].url}" class="fondo-grande">
            <div class="list-container">
                ${videos.contents.map((value) => /*HTML*/`
                    <div class="vid-list">
                        <div class="contenedor-video">
                            <img src="${value.video.thumbnails[3].url}" class="imagen-principal" data-video-id="${value.title}">
                            <video class="video" src="./images/video.mp4" controls></video>
                        </div>
                        <div  class="flex-div">
                            <img src="${canal.avatar[1].url}">
                            <div>
                                <a href="">${value.title}</a>
                                <p>${canal.title}</p>
                                <p>${value.video.stats.views} views ·${value.video.publishedTimeText}</p>
                            </div>
                        </div>
                    </div>
                `).join("")}
            </div>
        `)
        const info = document.querySelectorAll(".vid-list")
        
        info.forEach(video_info =>{
            const imagen_video = video_info.querySelector('.imagen-principal');
            const titulo = imagen_video.getAttribute('data-video-titulo');

            imagen_video.addEventListener('click', () =>{
                const videoSeleccionado = obtenerVideoInfo(videos, titulo);
                localStorage.setItem('videoSeleccionado', JSON.stringify(videoSeleccionado));
                window.location.href = 'single.html';
            })
        })
        console.log(localStorage);
        function obtenerVideoInfo(videos,title){
            const videoVideo = videos.contents.find(v => v.title = title)
            return videoVideo
        }
    }
    informacion();

    //FUNCION PARA QUE SE REPRODUZCA UNA PEQUEÑA PARTE DEL VIDEO
    // const contenedorVideos = document.querySelectorAll(".contenedor-video");
    // console.log("prueba1");

    //     contenedorVideos.forEach(contenedor => {
    //         const imagen = contenedor.querySelector(".imagen-principal");
    //         const video = contenedor.querySelector(".video");
    //         console.log("prueba2");

    //         contenedor.addEventListener("mouseover", () => {
    //             imagen.style.display = "none";
    //             video.style.display = "block";
    //             video.play();
    //             console.log("dentro");
    //         });

    //         contenedor.addEventListener("mouseout", () => {
    //             imagen.style.display = "block";
    //             video.style.display = "none";
    //             video.pause();
    //             console.log("fuera");
    //         });
    //     }
    // );



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