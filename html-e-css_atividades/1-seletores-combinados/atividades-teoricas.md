# Atividades práticas - Seletores Combinados
### Arquivo de referência: "Aula 26.pptx"
### Assunto: Seletores combinados
### *Status*: Concluída ✅
---
### Slide 131:
1. Explique a diferença estrutural entre o seletor descendente e o seletor filho. 
- O seletor descendente é indicado apenas por um espaço entre os elementos, ele indica que todos os elementos da direita dentro do elemento da esquerda estão sendo selecionados, independente do nível, exemplo `section p`. 
- Enquanto, o seletor filho é indicado pelo sinal `>`, e indica que somente estão selecionados os elemento da direta que estão um nível dentro do elemento da esquerda (filhos filhos diretos), exemmplo `section > p`. 

2. Em quais situações o seletor descendente pode gerar efeitos colaterais indesejados na estilização? 
- Quando a muitos níveis de aninhamento no HTML, isso pode gerar a estilização de elementos muito internos, além do que se esperava.

3. Por que o seletor filho (>) é considerado mais restritivo que o seletor descendente? 
- Porque ele seleciona apenas filhos diretos, ou seja apenas um nível na hierarquia dos elementos, não incluindo camadas mais internas.

4. Explique o funcionamento do seletor irmão adjacente (+) e sua principal limitação. 
- O irmão adjacente seleciona um elemento que vem imediatamente após o outro, quando estão no mesmo nível de hierarquia, exemplo: `h1 + p`, aplicando-se apenas a tag `<p>` imediatamente após a tag `<h1>`.

5. Diferencie o seletor irmão adjacente (+) do seletor irmão geral (~).
- Irmão adijacente (`+`): seleciona apenas um elemento irmão imeditamente a após o outro.  
- Irmão geral (`~`): seleciona todos os elementos irmãos da direta que vem após o elemento da esquerda, exemplo `h2 ~ p`, seleciona todos as tags `<p>` após a tag `<h2>` que estão no mesmo nível de `<h2>`.

6. Descreva um cenário onde `div p` e `div > p` produzem resultados diferentes.
- Se há elementos `<p>` em níveis hierárquicos mais baixos, somente `div p` irá alcançar esses elementos, a escolha deve recair sobre a finalidade da estilização.
    ``` html
    <div>
    <p>Atingido por "div p" e "div > p"</p>
    <section>
        <p>Atingido apenas por "div p"</p>
    </section>
    </div>
    ```

7. O seletor + funciona se houver outro elemento entre os dois selecionados? 
- Não, apenas se o da direta estiver imediatamente após o dea esquerda. Exemplo:
    ``` html
    <main>
        <h2>Heading 2</h2> 
        <span>span</span>
        <p>Parágrafo</p>
    </main>
    ```
- Seletor `h2 + p` não funcionará para a tag `<p>` acima.
8. Justifique. O seletor ~ exige que os elementos sejam irmãos diretos? Explique.
- O seletor irmão geral (`~`), seleciona elementos da direita que estão no mesmo nível hierarquico do elemento da esquerda, ou seja compartilham o mesmo pai.

### Slide 132:
1. Analise o seletor section > article p e explique seu comportamento.
- Seleciona todos os elementos `<p>`, independente do nível hierarquico, que estão dentro de elementos `<article>`, os quais devem ser filhos diretos de elementos `<section>`.

2. Por que o seletor irmão geral pode afetar múltiplos elementos ao mesmo tempo? 
- Porque ele seleciona todos os elementos de direita que vem depois do elemento da esquerda e estão no mesmo nível de hierarquia.

3. Qual seletor é mais adequado para selecionar apenas elementos filhos diretos? Justifique.
- Sletor filho (`>`), pois ele não se aplica a níveis mais profundos.

4. O que acontece quando usamos h2 + p em um documento HTML? 
- Estamos selecionando as tags `<p>` que vem diretamente após tags `<h2>` para estilização.

5. Como a profundidade da árvore DOM influencia o seletor descendente?
- Todos os elementos da direita que tiverem como pai um elemento da esquerda serão afetados, mesmo se eles estiverem em um nível de profundidade maior na árvore DOM. Isso pode causa estilização indesejada e dificuldade de manutenção do código. 

6. É possível combinar seletor filho com seletor irmão adjacente? Explique conceitualmente.
- Sim, pode-se slecionar um elemento `<p>`, irmão adjacente de um elemento `<h2>` que seja filho de um elemento `<section>` - `div > h2 + p`.

7. Em termos de organização de código, quando é mais indicado utilizar o seletor filho em vez do descendente?
- Quando se deseja selecionar apenas elementos filhos diretos e não estender a seleção a demais níveis hierárquicos.