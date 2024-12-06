import PropsTypes from 'prop-types'

function BotaoPadrao({btnName}) {

    function abrirForm(){
        alert('form aberto')
    }
    return(
    <button onClick={abrirForm}>{btnName}</button>
    )
}

BotaoPadrao.propsTypes = {
    btnName: PropsTypes.string
}

export default BotaoPadrao