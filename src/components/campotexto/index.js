// Estilo de código derente do Banner.js, porém mais comum.
// Função anônima, ajuda em problemas de escopo (Arrow function)
import './campotexto.css'

// Por dentro -> const CampoTexto = (props) => {
const CampoTexto = (props) => {
    // OBS: "props" é nome mais comum usado
// No VSCode o argumento fica apagado (props) quando não está em uso para nada o parâmetro que veio
// Parâmetros vindo: 'label' e 'placeholder'

    // console.log(props)          // Pega o que foi passada em qualquer parâmetro
    // console.log(props.label)    // Pega só o que foi passada no parâmetro Label
    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label> {/*Quando quero usar a propriedade, é entre chaves. Ele espera uma variável JS*/}

            <input placeholder={props.placeholder}></input> {/*Quando quer usar um argumento na propriedade do CSS*/}

            {/*
            <input placeholder={`${props.placeholder}... adendo que é string`}/>
            
            Quando quer usar um argumento na propriedade do CSS*/
            }
        </div>

        
    )
}

export default CampoTexto