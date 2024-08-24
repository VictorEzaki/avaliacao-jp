function escalar() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    switch (position) {
        case "pe":
            const divPE = document.getElementById('pe')
            const playerPE = document.createElement('p')
            playerPE.id = "player - " + number
            playerPE.innerText = name + " - " + number

            divPE.appendChild(playerPE)
            break;

        case "ca":
            const divCA = document.getElementById('ca')
            const playerCA = document.createElement('p')
            playerCA.id = "player - " + number
            playerCA.innerText = name + " - " + number

            divCA.appendChild(playerCA)
            break;

        case "pd":
            const divPD = document.getElementById('pd')
            const playerPD = document.createElement('p')
            playerPD.id = "player - " + number
            playerPD.innerText = name + " - " + number

            divPD.appendChild(playerPD)
            break;

        case "me":
            const divME = document.getElementById('me')
            const playerME = document.createElement('p')
            playerME.id = "player - " + number
            playerME.innerText = name + " - " + number

            divME.appendChild(playerME)
            break;

        case "mc":
            const divMC = document.getElementById('mc')
            const playerMC = document.createElement('p')
            playerMC.id = "player - " + number
            playerMC.innerText = name + " - " + number

            divMC.appendChild(playerMC)
            break;

        case "md":
            const divMD = document.getElementById('md')
            const playerMD = document.createElement('p')
            playerMD.id = "player - " + number
            playerMD.innerText = name + " - " + number

            divMD.appendChild(playerMD)
            break;

        case "le":
            const divLE = document.getElementById('le')
            const playerLE = document.createElement('p')
            playerLE.id = "player - " + number
            playerLE.innerText = name + " - " + number

            divLE.appendChild(playerLE)
            break;

        case "zc1":
            const divZC1 = document.getElementById('zc1')
            const playerZC1 = document.createElement('p')
            playerZC1.id = "player - " + number
            playerZC1.innerText = name + " - " + number

            divZC1.appendChild(playerZC1)
            break;

        case "zc2":
            const divZC2 = document.getElementById('zc2')
            const playerZC2 = document.createElement('p')
            playerZC2.id = "player - " + number
            playerZC2.innerText = name + " - " + number

            divZC2.appendChild(playerZC2)
            break;

        case "ld":
            const divLD = document.getElementById('ld')
            const playerLD = document.createElement('p')
            playerLD.id = "player - " + number
            playerLD.innerText = name + " - " + number

            divLD.appendChild(playerLD)
            break;

        case "gol":
            const divGOL = document.getElementById('gol')
            const playerGOL = document.createElement('p')
            playerGOL.id = "player - " + number
            playerGOL.innerText = name + " - " + number

            divGOL.appendChild(playerGOL)
            break;

        case "tec":
            const divTEC = document.getElementById('tec')
            const playerTEC = document.createElement('p')
            playerTEC.id = "player - " + number
            playerTEC.innerText = name + " - " + number

            divTEC.appendChild(playerTEC)
            break;

    
        default:
            alert("Erro ao escolher a posição")
            break;
    }

    document.getElementById('name').value = ""
    document.getElementById('number').value = ""
}

function remover() {
    const position = document.getElementById('remove_position').value
    const number = document.getElementById('remove_number').value
    const player = document.getElementById('player - ' + number)

    const confirmation = confirm("Deseja remover o jogador camisa " + number + "?")

    if (confirmation){
        document.getElementById(position).removeChild(player)
        document.getElementById('remove_number').value = ""
    }
}