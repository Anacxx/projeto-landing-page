function aparecerMenu(){
    const menu = document.querySelector('.navCel')
    if (menu.classList.contains('open')){
        menu.classList.remove('open')
    }else{
        menu.classList.add('open')
    }
}