function alterarStatus(id){
    let gameEscolhido = document.getElementById(`game-${id}`);
    let imagem = gameEscolhido.querySelector('.dashboard__item__img');
    let botao = gameEscolhido.querySelector('.dashboard__item__button');
    

    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else{
        botao.classList.add('dashboard__item__button--return')
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
    }
}

  
