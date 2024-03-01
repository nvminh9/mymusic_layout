function HideSongPlayer(){
    const middleContainer = document.querySelector('#middleContainer');
    const rightContainer = document.querySelector('#rightContainer');
    const buttonShowSongPlayer = document.getElementById('buttonShowSongPlayerContainer');
    const slideGenre = document.getElementById('slideGenre');
    const slideArtist = document.getElementById('slideArtist');
    const btnLeftSlideShow = document.getElementById('btnLeftSlideShow');
    const btnRightSlideShow = document.getElementById('btnRightSlideShow');
    const slideShow = document.getElementById('slideShow');

    // Thực hiện thay đổi
    middleContainer.classList.replace('l-6','l-9');
    rightContainer.classList.replace('l-3','l-0');
    buttonShowSongPlayer.style.display = 'block';
    slideGenre.style.height = '300px';
    slideArtist.style.height = '300px';
    btnLeftSlideShow.style.paddingTop = '14%';
    btnRightSlideShow.style.paddingTop = '14%';
    slideShow.style.height = '350px';
}

function ShowSongPlayer(){
    const middleContainer = document.querySelector('#middleContainer');
    const rightContainer = document.querySelector('#rightContainer');
    const buttonShowSongPlayer = document.getElementById('buttonShowSongPlayerContainer');
    const slideGenre = document.getElementById('slideGenre');
    const slideArtist = document.getElementById('slideArtist');
    const btnLeftSlideShow = document.getElementById('btnLeftSlideShow');
    const btnRightSlideShow = document.getElementById('btnRightSlideShow');

    // Thực hiện thay đổi
    middleContainer.classList.replace('l-9','l-6');
    rightContainer.classList.replace('l-0','l-3');
    buttonShowSongPlayer.style.display = 'none';
    slideGenre.style.height = '230px';
    slideArtist.style.height = '230px';
    btnLeftSlideShow.style.paddingTop = '18%';
    btnRightSlideShow.style.paddingTop = '18%';
    slideShow.style.height = '300px';
}

function buttonZoomSongPlayer(){
    const middleContainer = document.querySelector('#middleContainer');
    const rightContainer = document.querySelector('#rightContainer');
    const brrightContainer = document.getElementById('rightContainer');
    const leftContainer = document.querySelector('#leftContainer');
    const buttonHideSongPlayer = document.getElementById('buttonHideSongPlayer');
    const vbuttonZoomSongPlayer = document.getElementById('buttonZoomSongPlayer');
    const buttonHideSongPlayerContainer = document.getElementById('buttonHideSongPlayerContainer');
    const songImg = document.getElementById('songImg');
    const audioSong = document.querySelector('#audioSong');
    const body = document.querySelector('body');

    // Thực hiện thay đổi
    middleContainer.classList.replace('l-6','l-0');
    rightContainer.classList.replace('l-3','l-12');
    leftContainer.classList.replace('l-3','l-0');
    vbuttonZoomSongPlayer.innerHTML = '<span class="material-symbols-outlined">zoom_in_map</span>';
    buttonHideSongPlayerContainer.innerHTML = 'Song Player'
    +'<button id="buttonZoomSongPlayer" class="buttonZoomSongPlayer" onclick="buttonZoomOutSongPlayer()"><span class="material-symbols-outlined">'
    +    'zoom_in_map'
    +'</span></button>';
    brrightContainer.style.borderRadius = '10px 10px 10px 10px';
    songImg.style.width = "40%";
    songImg.style.height = "170%";
    audioSong.classList.replace('l-12','l-4');
    audioSong.classList.add('l-o-4');
    audioSong.style.borderRadius = "10px 10px 0px 0px";
    body.style.padding = "0px"
    rightContainer.style.borderRadius = "0px"
    // buttonHideSongPlayer.style.display = 'none';
}

function buttonZoomOutSongPlayer(){
    const middleContainer = document.querySelector('#middleContainer');
    const rightContainer = document.querySelector('#rightContainer');
    const brrightContainer = document.getElementById('rightContainer');
    const leftContainer = document.querySelector('#leftContainer');
    const buttonHideSongPlayer = document.getElementById('buttonHideSongPlayer');
    const vbuttonZoomSongPlayer = document.getElementById('buttonZoomSongPlayer');
    const buttonHideSongPlayerContainer = document.getElementById('buttonHideSongPlayerContainer');
    const songImg = document.getElementById('songImg');
    const audioSong = document.querySelector('#audioSong');
    const body = document.querySelector('body');

    // Thực hiện thay đổi
    middleContainer.classList.replace('l-0','l-6');
    rightContainer.classList.replace('l-12','l-3');
    leftContainer.classList.replace('l-0','l-3');
    vbuttonZoomSongPlayer.innerHTML = '<span class="material-symbols-outlined">zoom_out_map</span>';
    buttonHideSongPlayerContainer.innerHTML = 'Song Player'
    +'<button id="buttonHideSongPlayer" class="buttonHideSongPlayer" onclick="HideSongPlayer()"><span class="material-symbols-outlined">'
    +    'arrow_right'
    +'</span></button>'
    +'<button id="buttonZoomSongPlayer" class="buttonZoomSongPlayer" onclick="buttonZoomSongPlayer()"><span class="material-symbols-outlined">'
    +    'zoom_out_map'
    +'</span></button>';
    brrightContainer.style.borderRadius = '0px 10px 10px 0px';
    songImg.style.width = "100%";
    songImg.style.height = "100%";
    audioSong.classList.replace('l-4','l-12')
    audioSong.classList.remove('l-o-4')
    audioSong.style.borderRadius = "0px";
    rightContainer.style.borderRadius = "0px 10px 10px 0px"
    body.style.padding = "8px"
    // buttonHideSongPlayer.style.display = 'block';
}