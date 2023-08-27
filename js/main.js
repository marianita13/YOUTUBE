document.addEventListener("DOMContentLoaded", () =>{
// FUNCION PARA CONSUMIR LA API DE LOS IMAGEN VIDEOS Y PONERLOS EN EN HTML
    let informacion = async() =>{
        const responseChannel = await fetch("channel.json");
        let responseVideos = await fetch("videos.json");
        let videos = await responseVideos.json();
        let canal = await responseChannel.json();

        let banner = document.querySelector(".container")
        console.log(videos.contents[0].video.movingThumbnails[0].url);
            banner.insertAdjacentHTML("beforeend", /*HTML*/`
            <img src="${canal.banner.desktop[3].url}" class="fondo-grande">
            <div class="list-container">
                ${videos.contents.map((value) => /*HTML*/`
                    <div class="vid-list">
                        <div class="contenedor-video">
                        <a href="single.html" class="a-principal"><img src="${value.video.thumbnails[3].url}" class="imagen-principal"></a>
                            <video class="video" src="./images/video.mp4" controls></video>
                        </div>
                        <div  class="flex-div">
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

//FUNCION PARA QUE SE REPRODUZAC UNA PEQUEÑA PARTE DEL VIDEO
    const contenedorVideos = document.querySelectorAll(".contenedor-video");
    console.log("prueba1");

        contenedorVideos.forEach(contenedor => {
            const imagen = contenedor.querySelector(".imagen-principal");
            const video = contenedor.querySelector(".video");
            console.log("prueba2");

            contenedor.addEventListener("mouseover", () => {
                imagen.style.display = "none";
                video.style.display = "block";
                video.play();
                console.log("dentro");
            });

            contenedor.addEventListener("mouseout", () => {
                imagen.style.display = "block";
                video.style.display = "none";
                video.pause();
                console.log("fuera");
            });
        }
    );
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


  //FUNCION PARA PASAR LA INFORMACION DE UN HTML A OTRO
  
  