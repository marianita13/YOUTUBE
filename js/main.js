let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar")

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar")
}

const url = 'https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eed718e75amsh12482e2fc0e3f0ep117724jsn377ef8fba419',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};
const urlVideos = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eed718e75amsh12482e2fc0e3f0ep117724jsn377ef8fba419',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

let informacion = async() =>{
    try {
        const responseChannel = await fetch(url, options);
        const responseVideos = await fetch(urlVideos,options2);
        const videos = await responseVideos.json();
        const result = await responseChannel.json();
        console.log(result);
        console.log(videos);

        let banner = document.querySelector(".container")
        banner.insertAdjacentHTML("beforeend", /*HTML*/`
        <div class="banner">
            <img src="${result.banner.desktop[3].url}" class="fondo-grande">
        </div>
        <div class="list-container">
            <div class="vid-list">
                
            </div>
        </div>
        `)
    } catch (error) {
        console.error(error);
    }
}
informacion();