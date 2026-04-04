# Atividades JavaScript - Tipo primitivo, Tipos Objetos e Estruturas condicionais

### Arquivo de referência: "Aula 30.pptx"
### Assunto: JavaScript - Tipo primitivo, Tipos Objetos e Estruturas condicionais
### *Status*: em andamento ⏳

---

Slide 312

1. O que são strings em JavaScript e qual a diferença entre aspas simples, aspas duplas e template literals (crases)? 
    - A string é um tipo de dado primitivo em java scritpt, ela representa um valor de texto imutável e pode ser declarada com o uso de aspas ou de crase(template literals). Ao usar aspas, sejam simples ou duplas, você declara apenas os textos com os caracteres entre as aspas, ao usar template literals, declarando a string entre crases, pode-se incluir outros tipos de valores dentro da string, como valores numéricos ou variáveis.

2. Explique por que strings são consideradas imutáveis e como funciona o autoboxing entre string primitiva e objeto String. 
    - Autoboxing é um processo automático em que o javascript acessa as propriedades de um tipo primitivo como se fosse um tipo objeto. Por exemplo: as strings são tipos primitivos, logo, são imutáveis, porém pode-se acessar suas propriedades com a criação de um objeto String atravez do autoboxing, permitindo criar e modificar strings com base nas propriedades da string original.

3. Faça uma função que inverte uma string. 
    ```js
        const umaString = "Socorram me subi no onibus em Marrocos!";
        let aoContrario = "";

        for(i = umaString.length -1; i >= 0; i--){
            letra = umaString[i];
            aoContrario = aoContrario + letra;
        }

        console.log(umaString);
        console.log(aoContrario);
    ```
    - [Arquivo](./questao3.js)

Slide 313

1. O que é o tipo BigInt e qual a diferença entre Number e BigInt? 
