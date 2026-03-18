# Atividades teóricas - Seletores de Atributos
### Arquivo de referência: "Aula 26.pptx"
### Assunto: Seletores de Atributos
### *Status*: em andamento ✅
---

### Slide 164:
1. O que é um seletor de atributo em CSS e qual sua principal utilidade? 
    - Um seletor que permite selecionar elementos com base na presença de atributos ou em valores específicos de um atributo.

2. Explique o funcionamento do seletor `[attr]` (atributo presente). Em quais situações ele é mais útil?
    - Seleciona todos oss elementos que possuem o atributo especificado, independente do valor atribuido no HTML. É útil para situações em se quer selecionar todos os elementos que tenham um atributo, como todas as imagens que tem texto alternativo (alt),  exemplo: `[alt]`.

3. Descreva como funciona o seletor `[attr="valor"]` (valor exato) e dê exemplos de uso prático. 
    - Ele seleciona, dentre os elementos que tem aquele atributo, somente aqueles que possem o valor especificado. Exemplo: `[type="submit"]` seleciona apenas os elementos que possuem o atributo `type` E o valor deste seja `submit`.

4. Qual a diferença entre os seletores `[attr="valor"]` e `[attr*="valor"]`? Explique com exemplos.
    - `[attr="valor"]` é usado para uma correspondência exata de valores, enquanto `[attr*="valor"]` é usado para indicar uma parte do valor, ou seja, ele seleciona o elemento que contiver dentro do valor do atributo especificado aquele mencionado no seletor. Exemplo `[alt="foto"]` selecionaria somente elementos em que o valor completo do atributo `alt` fosse exatamente `"foto"`, contudo `[alt*="foto"]` selecionaria todos os elementos que possuissem a palavra `foto` dentro do valor do atributo `alt`.


5. Como o seletor `[attr^="valor"]` (começa com) funciona? Cite cenários onde ele seria a melhor escolha. 
    - Seleciona elementos em que o valor do atributo começa com o valor especificado no sletor. É útil para quando se quer selecionar links ou arquivos com prefixos específicos.

6. Explique o funcionamento do seletor `[attr$="valor"]` (termina com). Em que tipo de situação ele é mais adequado?
    - Seleciona elementos onde o valor do atributo termina com o texto especificado no seletor. É adequado para selecionar arquivos de extensão específica, exemplo `[src$=".png"]`

7. Descreva o seletor `[attr*="valor"]` (contém) e compare com os seletores de prefixo e sufixo.
    - `[attr*="valor"]` seleciona o elemento que contiver dentro do valor do atributo especificado aquele mencionado no seletor independente da localização.
    - Já seletores de prefixo e sufixo determinam localização onde o trecho do valor mencionado deve estar situado, inicío ou fim do valor, respectivamente. 


8. O que é o seletor `[attr~="valor"]` (lista de valores) e como ele difere do seletor `[attr*="valor"]`? 
    - `[attr~="valor"]` seleciona elementos cujo atributo selecionado possua o trecho de valor especificado separado por espaços, ou seja, exige que o valor especificado seja uma palavra completa. 
    - Já no seletor `[attr*="valor"]` o trecho do valor especificado pode estar situado em qualquer parte do valor do atributo, sem necessitar de espaços.

9. Explique o seletor `[attr|="valor"]` (com hífen) e dê exemplos de quando utilizá-lo. 
    - Seleciona elementos onde o valor do atributo é exatamente igual ao do seletor ou começa por este seguido de hífen, é utilizado para selecionar idiomas que podem ter mais de uma nacionalidade, exemplo `[lang|=pt]` seleciona os elementos cujo atributo `lang` tem valor `"pt"` ou `"pt-BR"` ou `"pt-PT"` etc.

10. Como você selecionaria todos os links externos (que começam com http ou https) usando seletores de atributo?
    - `a[href^="http"]`

### Slide 165:
1. De que forma os seletores de atributo podem melhorar a acessibilidade de uma página web?
    - Eles permitem a estilização elementos com base em atributos específicos ou de acessibilidade, melhorando a experiência para usuários que usam tecnologias assistivas.

2. Qual a vantagem de usar seletores de atributo em vez de classes extras no HTML? 
    - Permite a estilização com base no estado do elemento, mantém o HTML mais limpo e legível, foca em atributos e valores específicos, selecionando com maior precisão.

3. Quais cuidados devem ser tomados ao usar seletores de atributo em relação à performance? 
    - Deve-se evitar seletores muito complexos e combinados. Ou seletores que possam ser muito gerais e interferir em outras áreas do documento html como `[attr*="valor"]` com valor muito comum.

4. Como os seletores de atributo se comportam com valores que contêm espaços ou caracteres especiais? 
    - Resposta não encontrada

5. É possível combinar múltiplos seletores de atributo em uma mesma regra CSS? Como? 
    - Sim. Colocando os dois seletores entre colchetes `input[type="tel"][id="userTelephoneNumber"]`

6. Como você selecionaria inputs que são ao mesmo tempo do tipo texto e obrigatórios? 
    - `input[type="text"][required]`

7. De que forma os seletores de atributo podem ser usados para estilizar diferentes estados de links? 
    - Resposta não encontrada


8. Como selecionar elementos que possuem um atributo, mas com um valor específico ignorando maiúsculas/minúsculas? 
    - Adicionando i (case-insensitive) ao seletor. `input[type="email" i]`

9. Qual a diferença de especificidade entre um seletor de atributo e um seletor de classe? 
    - Utilizando seletores de atributo evita-se criar muitas classes no html. 
    - Seletores de classe selecionam pelo nome da classe, que deve ser atribuido em cada elemento que se quer selecionar.
    - Seletores de atributos selecionam pelo atributo e por seus valores ou trecho de valores, de forma mais específica.

10. Como os seletores de atributo podem ser úteis em formulários para estilizar campos com validação?
    - Para estilizar campos de imput de acordo com os valores dos atributos associados às pseudo-classes de validação  `:valid` ou `:invalid`.