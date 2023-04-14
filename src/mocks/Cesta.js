import logo from '../../assets/logo.png';
import topo from '../../assets/topo.png'
import abobora from '../../assets/frutas/Abóbora.png'
import batata from '../../assets/frutas/Batata.png'
import brocolis from '../../assets/frutas/Brócolis.png'
import pepino from '../../assets/frutas/Pepino.png'
import tomate from '../../assets/frutas/Tomate.png'
const cesta = {
    topo: {
        titulo: "Detalhe da cesta",
        imagemTopo: topo
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamenteda fazenda direfo para sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate
            }, {
                nome: "Brócolis",
                imagem: brocolis
            }, {
                nome: "Batata",
                imagem: batata
            }, {
                nome: "Pepino",
                imagem: pepino
            }, {
                nome: "Abóbora",
                imagem: abobora
            },
        ]
    }
}

export default cesta;