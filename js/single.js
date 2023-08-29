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
    <iframe width="70%" height="730" src="https://www.youtube.com/embed/${parametro}?si=czx-JXcyfxDxe0lv&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `)
}

let localID = localStorage.getItem('Id')
ponerVideo(localID)

const url = `https://youtube138.p.rapidapi.com/video/details/?id=${localID}&hl=en&gl=US`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e686cac1e2msh4bf0ee1a8792a41p141384jsnbb36c7f36ea5',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

//FUNCION PARA LA INFORMACION DEL VIDEO



let informacion = async() =>{
    const responseChannel = await fetch(url,options);
    let respuesta = await responseChannel.json();
    console.log(respuesta);

    let infoVid = document.querySelector('.top-info')

if (respuesta.description == null){
    infoVid.insertAdjacentHTML('beforeend', 
`
    <h3>${respuesta.title}</h3>

    <div class="play-video-info">
        <p>${respuesta.stats.views} Views &bull; Publish Date: ${respuesta.publishedDate}</p>
        <div>
            <a href=""><img src="./IMG/like.png">${respuesta.stats.likes}</a>
            <a href=""><img src="./IMG/dislike.png"></a>
            <a href=""><img src="./IMG/share.png">Share</a>
            <a href=""><img src="./IMG/save.png">Save</a>
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
    <p>The author doesn't put a description</p>
    <hr>
    </div>
`)
}
else{
    infoVid.insertAdjacentHTML('afterend', 
    `
        <h3>${respuesta.title}</h3>

        <div class="play-video-info">
            <p>${respuesta.stats.views} Views &bull; Publish Date: ${respuesta.publishedDate}</p>
            <div>
                <a href=""><img src="./IMG/like.png">${respuesta.stats.likes}</a>
                <a href=""><img src="./IMG/dislike.png"></a>
                <a href=""><img src="./IMG/share.png">Share</a>
                <a href=""><img src="./IMG/save.png">Save</a>
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
    `)};
}

informacion(url,options);