import Pagina from "../../components/template/Pagina"
import Flex from "../../components/template/Flex"
import { useRef } from "react";
import Botao from "../../components/template/Botao";
import InputComReferencia from "@/components/formulario/InputComReferencia";

export default function(){
    const referencia = useRef<any>();

    function apagar(){
        referencia.current.apagar();
    }
    
    function padrao(){
        referencia.current.textoPadrao();
    }

    return (<Pagina titulo="Modificando uma referência" subtitulo="Usando useRef e useImperativeHandle">
        <Flex col center>
            <InputComReferencia tipo="text" label="Digite o texto" ref={referencia}/>
            <Flex center>
                <Botao texto="Apagar" onClick={apagar}></Botao>
                <Botao texto="Padrão" onClick={padrao}></Botao>
            </Flex>
        </Flex>
    </Pagina>);
}