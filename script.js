class Produto {
    constructor(id, nomeProduto, preco) {
        this.id = id;
        this.nomeProduto = nomeProduto;
        this.preco = preco;
        this.estoque = 10;
    }
    vender() {
        if (this.estoque > 0) {
            this.estoque--;
            alert(
                "Você vendeu: " + this.nomeProduto +
                ". Restam: " + this.estoque
            );
        } else {
            alert("O produto: " + this.nomeProduto + " acabou");
        }
    }
}
const produto1 = new Produto("p1", "GiftCard", 49);
const produto2 = new Produto("p2", "Mouse Pad", 80);
const produto3 = new Produto("p3", "Mouse", 65);
function clicouNoBotao1() {
    produto1.vender();
}
function clicouNoBotao2() {
    produto2.vender();
}
function clicouNoBotao3() {
    produto3.vender();
}
function alternarDetalhes(idElemento, botao) {
    const detalhes = document.getElementById(idElemento);
    detalhes.classList.toggle("oculto");
    if (detalhes.classList.contains("oculto")) {
        botao.textContent = "Ver Detalhes";
    } else {
        botao.textContent = "Ocultar Detalhes";
    }
}