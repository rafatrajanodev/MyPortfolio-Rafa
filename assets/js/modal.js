// Declarando Variaveis
let imagens = document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal');
let modalContent = document.querySelector('.modal_content');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal= "";


// percorre todas as imagens e adiciona o evento de click
for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}

// botão fechar usa o toggle para alternar em ativo ou não
btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
});
modalContent.addEventListener('click', function(){
    console.log("imagens");
    modal.classList.toggle('modal_active');
});
