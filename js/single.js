// FUNCION PARA QUE EL TEXTO APARECIERA ACORDE AL MOVIMIENTO DE LA BARRA LATERAL
const contenedor = document.querySelector(".menu-lateral")
const suscripcion = document.querySelector(".suscripcion")
const videos2 = document.querySelector(".container")
const about = document.querySelector("#about-final")


const toggleClass = (elements, className) => {
    elements.forEach(element => element.classList.toggle(className));
    };
    
    document.querySelector("#hamburguesa").addEventListener('click', () => {
        contenedor.classList.toggle('active');
        about.classList.toggle('active');
        videos2.classList.toggle('active');
    
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
    iframe.insertAdjacentHTML('afterbegin', /*HTML*/`
    <iframe width="100%" height="730" src="https://www.youtube.com/embed/${parametro}?si=czx-JXcyfxDxe0lv&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `)
}

let localID = localStorage.getItem('Id')
ponerVideo(localID)

// const url = `https://youtube138.p.rapidapi.com/video/details/?id=${localID}&hl=en&gl=US`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '14ea36ce51msh963ef976e572702p1cb575jsnd2637fba7f22',
// 		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
// 	}
// };


//FUNCION PARA LA INFORMACION DEL VIDEO
let informacion = async() =>{
    const responseChannel = await fetch(url,options);
    let respuesta = await responseChannel.json();
    console.log(respuesta);

    let infoVid = document.querySelector('.top-info')

if (respuesta.description == null){
    infoVid.insertAdjacentHTML('beforeend', /*HTML*/`
    
    
        <h3>${respuesta.title}</h3>

        <div class="play-video-info">
            <p>${respuesta.stats.views} Views &bull; Publish Date: ${respuesta.publishedDate}</p>
            <div>
                <a href=""><img src="../images/like-regular-24.png">${respuesta.stats.likes}</a>
                <a href=""><img src="../images/no-me-gusta.png"></a>
                <a href=""><img src="../images/share.png">Share</a>
                <a href=""><img src="../images/download-solid-24.png">Save</a>
            </div>
        </div>
        <hr>
        <div class="publisher">
            <img src="${respuesta.author.avatar[2].url}">
            <div>
                <p>${respuesta.author.title}</p>
                <span>${respuesta.author.stats.subscribersText}</span>
            </div>
            <button type="button">Subscribe</button>
        </div>

        <div class="vid-description" id="vid-description">
            <p>The author don't have a description</p>
            <hr>
        </div>
    
        <h4>0 Comments</h4>

        <div class="old-comment">
            <div>
                <p>
                    The Comments have been desactivated
                </p>
                <div class="comment-action">
                </div>
            </div>
        </div>
    </div>
`)
}
else{
    infoVid.insertAdjacentHTML('afterend', /*HTML*/`
    <div class="informacion">
        <h3>${respuesta.title}</h3>

        <div class="play-video-info">
            <p>${respuesta.stats.views} Views &bull; Publish Date: ${respuesta.publishedDate}</p>
            <div>
                <a href=""><img src="../images/like-regular-24.png">${respuesta.stats.likes}</a>
                <a href=""><img src="../images/no-me-gusta.png"></a>
                <a href=""><img src="../images/share.png">Share</a>
                <a href=""><img src="../images/download-solid-24.png">Save</a>
            </div>
        </div>
        <hr>
        <div class="publisher">
            <img src="${respuesta.author.avatar[2].url}">
            <div>
                <p>${respuesta.author.title}</p>
                <span>${respuesta.author.stats.subscribersText}</span>
            </div>
            <button type="button">Subscribe</button>
        </div>
        
        <div class="vid-description" id="vid-description">
            <p>${respuesta.description}</p>
            <hr>
        </div>
        <h4>0 Comments</h4>

        <div class="old-comment">
            <div>
                <p>
                    The Comments have been desactivated
                </p>
                <div class="comment-action">
                </div>
            </div>
        </div>
    </div>
    `)};
}

// informacion(url,options);

 let videos_right = async() => {
    let peticion = await fetch ('../storage/videos.json') 
    let respuesta2 = await peticion.json()
    console.log(respuesta2);

    // INSERTAR VIDEOS EN LA BARRA LATERAL DERECHA

    let rightSide = document.querySelector('.videos-sidebar')
    rightSide.insertAdjacentHTML('beforeend', /*HTML*/`
        ${respuesta2.contents.map((value)=> /*HTML*/`
        <div class="side-video-list" video-id='${value.video.videoId}'>
                <a href="./play-video.html" class="small-thumbnail"><img src="${value.video.thumbnails[3].url}"></a>
                <div class="vid-info">
                    <a href="./play-video.html">${value.video.title}</a>
                    <p>CreativeCode</p>
                    <p>${value.video.stats.views} Views &bull; ${value.video.publishedTimeText}</p>
                </div>
        </div>
        `).join("")}
    `)

    // FUNCION DE QUE ESCUCHARÁ TODAS LAS TARJETAS DE VIDEOS CREADOS AL HACERLE CLICK 
    const videoElements = document.querySelectorAll('.side-video-list');

    // Agrega un manejador de eventos a cada tarjeta video
    videoElements.forEach(video => {
        video.addEventListener('click', () => {
            let videoId = video.getAttribute('video-id');

             //GUARDO EL VALOR DEL ATRIBUTO ANTERIORMENTE CREADO
             // PARA SABER EL ID DEL VIDEO AL QUE SE LE DIÓ CLICK
            localStorage.setItem('ID', videoId)
            });
    });
}

videos_right()