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
            <div class="vid-list">
                ${videos.contents.map((value) => /*HTML*/`
                    <img src="${value.video.thumbnails[3].url}">
                    <div class="flex-div">
                        <img src="${canal.avatar[1].url}">
                        <div>
                            <a href="">${value.video.title}</a>
                            
                        </div>
                    </div>
                `)}
            </div>
        </div>
        `)
}
informacion();