    let listSong = [];
    
    // get ALL song API
    fetch('https://nvminh9.github.io/playlist/playlist.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Lỗi, mã lỗi ' + response.status);
        return;
      }
      // parse response data
      response.json().then(data => {
        for(let i=0;i<data["songs"].length; i++){
            listSong[i] = data["songs"][i]
        }
        document.getElementById('audioSong').innerHTML = `<audio src="${listSong[0]["audio"]}" controls></audio>`;
        document.getElementById('songPlayedImg').innerHTML = `<img src="${listSong[0]["albumart"]}" alt="Ảnh Nhạc">`
      })
    }
  )
  .catch(err => {
    console.log('Error :-S', err)
  });

