var button  = document.getElementById('header_button_mobile');
var list = document.querySelector('.header_menu');

button.onclick = function(){
    if(!!button.classList.value){
        button.classList.remove('header_button_open_menu')
        list.classList.remove('open_menu')
        list.classList.add('close_menu')
    }else{
        button.classList.add('header_button_open_menu')
        list.classList.remove('close_menu')
        list.classList.add('open_menu')
    }
    
}
