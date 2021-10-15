//buat variabel
let form = document.getElementsByTagName('form')[0];
let username = document.getElementById('username');
let password = document.getElementById('password');

//ketika tombol kirim di klik
form.addEventListener('submit', function(e){
    //buat pengkondisian 
    //jika username nya kosong dan password nya kosong
    if(username.value==="" && password.value===""){     
        //buat sebuah peringatan
        alert('Maaf username dan password harus di isi!');
        //buat fungsi prevent default agar menolak untuk di kirim
        e.preventDefault();
    }//jika selain username nya kosong
    else if(username.value===""){
       //buat sebuah peringatan
        alert('Maaf username harus di isi!');
         //buat fungsi prevent default agar menolak untuk di kirim
        e.preventDefault();
    }//jika selain password nya kosong
    else if(password.value===""){
         //buat sebuah peringatan
        alert('Maaf password harus di isi!');
         //buat fungsi prevent default agar menolak untuk di kirim
        e.preventDefault();
    }
});

  