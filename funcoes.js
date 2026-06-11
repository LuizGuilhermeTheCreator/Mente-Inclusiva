let tamanhoFonte = 18

function aumentarFonte(){

    if(tamanhoFonte < 30){

        tamanhoFonte += 2

        document.querySelectorAll('.texto p, .texto li, .texto label, .texto select, .texto textarea, .texto legend')
        .forEach(elemento => {
            elemento.style.fontSize = tamanhoFonte + 'px'
        })


    }

   
}

function diminuirFonte() {

    if(tamanhoFonte > 12){

        tamanhoFonte -= 2

        document.querySelectorAll('.texto p, .texto li, .texto label, .texto select, .texto textarea, .texto legend')
        .forEach(elemento => {
            elemento.style.fontSize = tamanhoFonte + 'px'
        })

    }

    

}

function alternarContraste() {

    document.body.classList.toggle('alto-contraste')

}