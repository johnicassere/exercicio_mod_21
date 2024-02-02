document.addEventListener('DOMContentLoaded', function(){
    const button = document.querySelectorAll('[data-tab-button]');
    const expandir = document.querySelectorAll('[data-saiba-mais]');
    const pergunta = document.querySelectorAll('[data-faq-question]');
    


    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function(botao){
            const alvo = botao.target.dataset.tabButton;
            const elemento = document.querySelector(`[data-tab-id=${alvo}]`)
            ocultaAbaShows();
            elemento.classList.add("shows__list--is-active")
            removeClassButton();
            botao.target.classList.add('shows__tabs__button--is-active')
        });
          
    }


    for (let i = 0; i < expandir.length; i++) {
        expandir[i].addEventListener('click', abreOuFechaSaibaMais)
        
    }


    for(let i = 0; i < pergunta.length; i++){
        pergunta[i].addEventListener('click', abreFechaPerguntas)
    }   

})

function abreOuFechaSaibaMais(e){
    const classe = 'saiba-mais__links__item__expand__text--is-open';
    const elementoPai = e.target.parentNode;
    elementoPai.classList.toggle(classe);
    //console.log(elementoPai);

    }

function abreFechaPerguntas(elemento){
    const classeNome = 'faq__links__item__question__result--is-open';
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classeNome);
    console.log(elementoPai);
}




function removeClassButton(){
    const abaButton = document.querySelectorAll('[data-tab-button]')
    for(let i = 0; i < abaButton.length; i++){
        abaButton[i].classList.remove('shows__tabs__button--is-active')
    }

}



function ocultaAbaShows(){
    const abaShows = document.querySelectorAll('[data-tab-id]')
    for(let i = 0; i < abaShows.length; i++){
        abaShows[i].classList.remove('shows__list--is-active')
    }
}

