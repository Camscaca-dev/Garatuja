# CSS
Linguagem de estilo, não alcança deficiencias e é nada sem o html, interessante até seria usar o SCSS("integrado no html")
importante demais para a estética
CSS (Cascading Style Sheets, ou Folhas de Estilo em Cascata) é uma linguagem de estilo utilizada para definir a aparência e o layout de documentos HTML, permitindo configurar cores, fontes, tamanhos e o posicionamento de elementos. Ela separa o conteúdo (HTML) da apresentação, tornando os sites responsivos e visualmente atraentes. 

# HTML
linguagem de MARCAÇÃO justamente pq é usada pra MARCAR trechos de código importantes. Algumas tags que são antigas e abreviadas são ruins pela falta dce acessibilidade(ex: não são descritas para pessoas deficientes visuais.). Fizemos um trabalho de uma página de apresentação/coisas que vc gosta. PROJ1.
HTML, sigla para HyperText Markup Language (Linguagem de Marcação de Hipertexto), é a linguagem base para estruturar páginas web. Ela organiza o conteúdo, como textos, imagens e links, agindo como o "esqueleto" de um site, que é posteriormente estilizado pelo CSS e tornado interativo pelo JavaScript. 

# Java vs TypeScript vs JS

PROJ2

    |          |     JAVA             |        JS            |          TS          |
    |          |                      |                      |                      |
    |var       | tipo nome = valor    | let nome = valor     |let nome: tipo = valor|
    |          |                      |                      |                      |
    |função    |metodos em bloco code |bloco de cod reutiliz-|igual o js mas com tip|
    |          |dentro de uma class   |avel pra prjt ou criar|agem forte            |
    |atributo  |                      |                      |                      |
    |          |                      |                      |                      |
    |          |                      |                      |                      |
    |metodo    |                      |                      |                      |
    |          |                      |                      |                      |
    |          |                      |                      |                      |


# Sintaxes

    //FUNCTION

JS
// Exemplo de uma função simples
function saudacao(nome) {
  return "Olá, " + nome + "!";
}


JAVA

public class Calculadora {
    // Definindo a função (método)
    public int somar(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        Calculadora calc = new Calculadora();
        // Chamando a função
        int resultado = calc.somar(5, 3);
        System.out.println("Resultado: " + resultado); // Saída: 8
    }
}



TS

// function nome(param: tipo): tipoRetorno { ... }
function somar(a: number, b: number): number {
    return a + b;
}
console.log(somar(5, 10)); // Saída: 15


TS
