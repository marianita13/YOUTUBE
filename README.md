# Creación de una Página Similar a YouTube - README.md

Este es un archivo `README.md` que te guiará a través de los pasos básicos para crear una página web similar a YouTube. A continuación, se describen los pasos fundamentales que utilice para realizar la pagina..

## Crear una Página Similar a YouTube

### 1. **Planificación y Diseño:**
Antes de comenzar, es importante tener una idea clara de cómo quieres que se vea y funcione tu página. Diseña un esquema o boceto que incluya elementos como la barra de navegación, la sección de videos destacados, la lista de videos y los controles de reproducción.

### 2. **Herramientas y Tecnologías:**
Archivos como:
- index.html
- style.css
- main.js
- channel.json
- videos.json
- Distintas imagenes e iconos

### 3. **Estructura HTML Básica:**
Por ejemplo la barra de navegacion
```html
<nav class="flex-div">
        <div class="nav-left flex-div">
            <img src="images/menu-regular-36.png" alt="Menu" class="menu-icon">
            <img src="images/YouTube_Logo_(2013-2017).svg.png" alt="logo youtube" height="38" class="logo">
        </div>
        <div class="nav-middle flex-div">
            <div class="search-box flex-div">
                <input type="text" placeholder="Search">
                <img src="images/search.png" alt="Search">
            </div>
            <img src="images/voice-search.png" alt="voice-icon" class="mic-icon">
        </div>
        <div class="nav-right flex-div">
            <img src="images/upload.png" alt="Menu">
            <img src="images/more.png" alt="More">
            <img src="images/notification.png" alt="Notification">
            <img src="images/gerard.png" alt="Gerard" class="user-icon">
        </div>
    </nav>
```

### 4. **Estilización con CSS:**
```css
nav{
    padding: 10px 2%;
    justify-content: space-between;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background: #fff;
    position: sticky;
    top: 0;
    z-index: 10;
}
.nav-right img{
    width: 25px;
    margin-right: 25px;
}
.nav-right .user-icon{
    width: 35px;
    border-radius: 50%;
    margin-right: 0;
}
.nav-left .menu-icon{
    width: 22px;
    margin-right: 25px;
}

.nav-left .logo{
    width: 130px;
}

.nav-middle .mic-icon{
    width: 16px;
}
.nav-middle .search-box{
    border: 1px solid #ccc;
    margin-right: 15px;
    padding: 8px 12px;
    border-radius: 25px;
}
.nav-middle .search-box input{
    width: 400px;
    border: none;
    outline: 0;
    background: transparent;
}
.nav-middle .search-box img{
    width: 15px;
}
```

### 5. **Consumo de la API de un canal en especifico:**
```Javascript
    let informacion = async() =>{
        const responseChannel = await fetch("channel.json");
        let responseVideos = await fetch("videos.json");
        let videos = await responseVideos.json();
        let canal = await responseChannel.json();
        console.log(canal);
        console.log(videos);
    }
```

## Notas Finales

Este `README.md` proporciona una visión general de los pasos básicos para crear una página similar a YouTube. Ten en cuenta que la implementación real puede ser más compleja y requerir un conocimiento profundo de las tecnologías web. Si eres nuevo en la programación y el diseño web, es posible que desees comenzar con tutoriales más simples y construir gradualmente tus habilidades antes de emprender un proyecto de esta magnitud. ¡Buena suerte!