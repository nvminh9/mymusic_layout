// Hàm ẩn Song Player
function HideSongPlayer(){
    const middleContainer = document.querySelector('#middleContainer');
    const rightContainer = document.querySelector('#rightContainer');
    const buttonShowSongPlayer = document.getElementById('buttonShowSongPlayerContainer');
    const slideGenre = document.getElementById('slideGenre');
    const slideArtist = document.getElementById('slideArtist');
    const btnLeftSlideShow = document.getElementById('btnLeftSlideShow');
    const btnRightSlideShow = document.getElementById('btnRightSlideShow');
    const slideShow = document.getElementById('slideShow');
    const profileBanner = document.getElementById('profileBanner');
    const profileAvatar = document.getElementById('profileAvatar');

    // Thực hiện thay đổi
    middleContainer.classList.replace('l-6','l-9');
    rightContainer.classList.replace('l-3','l-0');
    buttonShowSongPlayer.style.display = 'block';
    slideGenre.style.height = '300px';
    slideArtist.style.height = '300px';
    btnLeftSlideShow.style.paddingTop = '14%';
    btnRightSlideShow.style.paddingTop = '14%';
    slideShow.style.height = '350px';
    profileBanner.style.height = '300px';
    profileAvatar.style.height = '200px';
}

// Hàm hiện Song Player
function ShowSongPlayer(){
    const middleContainer = document.querySelector('#middleContainer');
    const rightContainer = document.querySelector('#rightContainer');
    const buttonShowSongPlayer = document.getElementById('buttonShowSongPlayerContainer');
    const slideGenre = document.getElementById('slideGenre');
    const slideArtist = document.getElementById('slideArtist');
    const btnLeftSlideShow = document.getElementById('btnLeftSlideShow');
    const btnRightSlideShow = document.getElementById('btnRightSlideShow');
    const slideShow = document.getElementById('slideShow');
    const profileBanner = document.getElementById('profileBanner');
    const profileAvatar = document.getElementById('profileAvatar');

    // Thực hiện thay đổi
    middleContainer.classList.replace('l-9','l-6');
    rightContainer.classList.replace('l-0','l-3');
    buttonShowSongPlayer.style.display = 'none';
    slideGenre.style.height = '230px';
    slideArtist.style.height = '230px';
    btnLeftSlideShow.style.paddingTop = '18%';
    btnRightSlideShow.style.paddingTop = '18%';
    slideShow.style.height = '300px';
    profileBanner.style.height = '200px';
    profileAvatar.style.height = '150px';
}

// Hàm phóng to Song Player
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

// Hàm thu nhỏ Song Player
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

function toProfile(){
    const buttonShowSongPlayer = '<!-- Button Show Song Player -->'
    +'<div id="buttonShowSongPlayerContainer" class="col l-12 m-12 c-12 buttonShowSongPlayerContainer">'
    +    '<button class="buttonShowSongPlayer" onclick="ShowSongPlayer()"><span class="material-symbols-outlined">'
    +        'arrow_left'
    +    '</span></button>'
    +'</div>'
    const middleContainer = document.querySelector('#middleContainer');
    
    const wholeProfileForm = `<!-- Button Settings -->
    <div id="buttonSettingsProfile" class="col l-12 m-12 c-12 buttonSettingsProfile" >
        Profile
        <button><span class="material-symbols-outlined">
            settings
        </span></button>
    </div>
    <!-- Profile Chính -->
    <div class="row mainProfile">
        <!-- Ảnh bìa Profile -->
        <div id="profileBanner" class="col l-12 m-12 c-12 profileBanner">
            <img src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-bia-dep-cute-7.jpg" alt="Ảnh bìa hồ sơ">
        </div>
        <!-- Hình đại diện và tên Profile -->
        <div id="profileAvatar" class="col l-12 m-12 c-12 profileAvatar">
            <div class="row">
                <div class="col l-3 m-12 c-12 avatar">
                    <img src="https://ew.com/thmb/pKJRS5tQCFTptZBFXTac64EeE7E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Playboi-Carti-021423-db8c81a42c88419b8cd58e2c8ead244d.jpg" alt="">
                </div>
                <div class="col l-9 m-12 c-12 name">
                    <h5>Minh Ngô</h5>
                </div>
            </div>
        </div>
        <!-- Thông tin hồ sơ -->
        <div class="col l-12 m-12 c-12 profileInfor">
            <div class="row">
                <div class="col l-12 m-12 c-12 infor">
                    <h5 class="profileBirth"><b>Ngày sinh :</b> 18/4/2003</h5>
                    <h5 class="profileGender"><b>Giới tính :</b> Nam</h5>
                    <h5 class="profileEmail"><b>Email :</b> minhcorn.2@gmail.com</h5>
                </div>
            </div>
        </div>

        <!-- Danh sách danh sách phát của Người dùng -->
        <h5 style="padding-left: 16px; margin: 0px; font-size: 20px; font-weight: 600;">Danh sách phát</h5>
        <div class="col l-12 m-12 c-12 profileDsp">
            <div class="col l-4 m-6 c-12 ">
                <button class="dspInProfile">
                    <img src="https://bizweb.dktcdn.net/100/411/628/products/booklet-2-1-1-86f8961a-2c66-4dbe-b979-f0466a7c3083.jpg?v=1677758994023" alt="">
                    <div class="title">
                        <h5>99%</h5>
                    </div>
                </button>
            </div>
            <div class="col l-4 m-6 c-12 ">
                <button class="dspInProfile">
                    <img src="https://bizweb.dktcdn.net/100/411/628/products/harpers-bazaar-wren-evans-ra-mat-album-loi-choi-03-1024x1024.jpg?v=1702651230007" alt="">
                    <div class="title">
                        <h5>Loi Choi</h5>
                    </div>
                </button>
            </div>
            <div class="col l-4 m-6 c-12 ">
                <button class="dspInProfile">
                    <img src="https://upload.wikimedia.org/wikipedia/en/0/03/Yeezus_album_cover.png" alt="">
                    <div class="title">
                        <h5>Yeezus</h5>
                    </div>
                </button>
            </div>
            <!--  -->
            <div class="col l-4 m-6 c-12 ">
                <button class="dspInProfile">
                    <img src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/7/6/9/b/769b97d91b5f2ec104d6ba7c9bd7a2d3.jpg" alt="">
                    <div class="title">
                        <h5>420ent</h5>
                    </div>
                </button>
            </div>
        </div>
        <!-- Kết thúc danh sách danh sách phát của người dùng -->

        <!-- Danh sách nhạc của Người dùng -->
        <h5 style="padding-left: 16px; margin: 0; margin-top: 35px; font-size: 20px; font-weight: 600;">Nhạc đã đăng tải</h5>
        <div class="col l-12 m-12 c-12 profileMusic">
            <div class="col l-12 m-6 c-12 ">
                <button class="musicInProfile">
                    <img src="https://i.ytimg.com/vi/dz6xe0xXqYE/maxresdefault.jpg" alt="">
                    <div class="title">
                        <h5>Ừ Thì Anh Đã Ổn Hơn - MCK</h5>
                    </div>
                </button>
            </div>
            <div class="col l-12 m-6 c-12 ">
                <button class="musicInProfile">
                    <img src="https://i.ytimg.com/vi/FBM70NaZuVI/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEygUMA8=&rs=AOn4CLCu6aKku07pQYgxJp-rS1FbXvf_pA" alt="">
                    <div class="title">
                        <h5>Mơ Làm Ma - Ngọt</h5>
                    </div>
                </button>
            </div>
            <div class="col l-12 m-6 c-12 ">
                <button class="musicInProfile">
                    <img src="https://i.ytimg.com/vi/CPJYGL0XkC4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHsCYAC0AWKAgwIABABGE0gZShjMA8=&rs=AOn4CLB-V2unA-g33o9xjr8F5Qqc4SRtAg" alt="">
                    <div class="title">
                        <h5>Muốn anh đau - Hustlang Robber</h5>
                    </div>
                </button>
            </div>
            <!--  -->
            <div class="col l-12 m-6 c-12 ">
                <button class="musicInProfile">
                    <img src="https://i1.sndcdn.com/artworks-Z2Gy7JdqY0ed8ko3-ex8YFA-t500x500.jpg" alt="">
                    <div class="title">
                        <h5>Nhạc trap căng nhất 2023 - Wxrdie</h5>
                    </div>
                </button>
            </div>
        </div>
        <!-- Kết thúc danh sách nhạc của người dùng -->

    </div>`

    // Thực hiện thay đổi 
    middleContainer.innerHTML = `${buttonShowSongPlayer}` 
                                + wholeProfileForm;
}