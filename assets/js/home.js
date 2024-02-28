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