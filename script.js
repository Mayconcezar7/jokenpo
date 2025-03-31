
let pontosH = 0
let pontosM = 0

const escolhaHumano = (humano) => {
    vencedor(humano, escolhaMaquina())
}




const escolhaMaquina = () => {

    const maquinaOp = ['papel', 'pedra', 'tesoura']

    const sorteioMaquinaOp = Math.floor(Math.random() * 3)

    return maquinaOp[sorteioMaquinaOp]

}


const vencedor = (humano, maquina) => {
    const resultado = document.querySelector(".resultado")
    const pontosHumano = document.querySelector("#humano-ponto")
    const pontosMaquina = document.querySelector("#maquina-ponto")
    const maquinaEscolha = document.querySelector(".maquina-escolha")

    

   


    if (humano === maquina) {
        resultado.innerHTML = 'Deu empate'
        maquinaEscolha.innerHTML = `Ele escolheu:  ${maquina}`
    }

    else if ((humano === 'pedra' && maquina === 'tesoura') || (humano === 'tesoura' && maquina === 'papel') || (humano === 'papel' && maquina === 'pedra')) {

        pontosH++
        
        maquinaEscolha.innerHTML = `Ele escolheu:  ${maquina}`
        pontosHumano.innerHTML = pontosH
        resultado.innerHTML = `Ganhou!!!`


        
    } else {

        pontosM++
        
        maquinaEscolha.innerHTML = `Ele escolheu:  ${maquina}`
        pontosMaquina.innerHTML = pontosM
        resultado.innerHTML = `Perdeu`
    }
    
    
   
}