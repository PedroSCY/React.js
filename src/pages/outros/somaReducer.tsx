import Pagina from "../../components/template/Pagina";
import Flex from "../../components/template/Flex";
import Display from "../../components/template/Display";
import InputFormatado from "../../components/formulario/InputFormatado";
import Botao from "../../components/template/Botao";
import { useReducer,Reducer } from "react";

function mudaDados(estadoAtual: any, acao: any) {
    switch (acao.type) {
        case "ALTERA_N1":
            return { ...estadoAtual, n1: acao.novoValor, validadeN1: acao.novoValor > 0 };
        case "ALTERA_N2":
            return { ...estadoAtual, n2: acao.novoValor, validadeN2: acao.novoValor > 0 };
        case "SOMA":
            if (estadoAtual.validadeN1 && estadoAtual.validadeN2) {
                let soma = estadoAtual.n1 + estadoAtual.n2;
                return { ...estadoAtual, soma };
            } else {
                return { ...estadoAtual, soma: -9999 };
            }
    }
}

export default function () {
    const [dados, dispatchDados] = useReducer<Reducer<any, any>>(mudaDados, {
        n1: 0,
        n2: 0,
        validadeN1: false,
        validadeN2: false,
        soma: 0,
    });

    return (
        <Pagina titulo="Soma com useReducer" subtitulo="Exemplo de soma com useReducer">
            <Flex col centerCross>
                <Display texto="Faça uma soma"></Display>
                <Flex center>
                    <InputFormatado
                        tipo="number"
                        valor={dados.n1}
                        onInput={(e) => {
                            dispatchDados({ type: "ALTERA_N1", novoValor: +e.target.value });
                        }}
                    />
                    <span className="text-4xl ml-2">+</span>
                    <InputFormatado
                        tipo="number"
                        valor={dados.n2}
                        onInput={(e) => {
                            dispatchDados({ type: "ALTERA_N2", novoValor: +e.target.value });
                        }}
                    />
                    <Botao cor="bg-orange-400" texto="=" onClick={()=> dispatchDados({type:"SOMA"})}></Botao>
                </Flex>
                <Display texto={dados.soma} />
            </Flex>
        </Pagina>
    );
}
