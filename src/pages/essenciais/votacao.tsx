import Pagina from "../../components/template/Pagina"
import Flex from "../../components/template/Flex"
import Display from "../../components/template/Display"
import Botao from "../../components/template/Botao"
import { useState } from "react"

export default function(){
    const [dados, setDados] = useState({votosRoxo:0, votosVerde:0});

    function votoRoxo(){
        //Pode ser que a variável dados tenha algum membro alterado durante a atualização
        //setDados({votosRoxo: dados.votosRoxo+1, votosVerde:dados.votosVerde})
        //Para garantir que a variável dados seja atualizada com base no seu valor atual,
        //podemos passar uma função para o setDados que recebe o valor atual e retorna o novo valor
        setDados((dadosAtuais)=>{
            return {votosRoxo:dadosAtuais.votosRoxo+1,
                    votosVerde:dadosAtuais.votosVerde}
        })
    }

    function votoVerde(){
        setDados((dadosAtuais)=>{
            return {votosRoxo:dadosAtuais.votosRoxo,
                votosVerde:dadosAtuais.votosVerde+1}
        })
    }

    function zerarVotacao(){
        setDados(()=>{
            return {votosRoxo:0,
                votosVerde:0}
        })
    }

    return (<Pagina titulo="Votação" subtitulo="Usando estado com objeto">
        <Flex col center>
            <Display texto="Qual a melhor cor?"
            textoComplementar={`Verde:${dados.votosVerde} | Roxo: ${dados.votosRoxo}`}/>
            <Flex gap={5}>
                <Botao cor="bg-green-600" onClick={votoVerde} redondo tamanho="2xl"/>
                <Botao cor="bg-purple-600" onClick={votoRoxo} redondo tamanho="2xl"/>
            </Flex>
            <Botao texto="Zerar" onClick={zerarVotacao} cor="bg-gray-700" tamanho="lg"/>
        </Flex>
    </Pagina>)
}