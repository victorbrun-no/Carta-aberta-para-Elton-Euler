# Especificação Técnica — Carta Aberta para Elton Euler

**Projeto:** Carta Aberta para Elton Euler  
**Autor:** Victor Bruno  
**Versão:** V3 — Documento Narrativo Interativo  
**Formato principal:** Web / GitHub Pages  
**Formato secundário:** PDF gerado a partir da própria página  
**Stack recomendada:** HTML5 + CSS3 + JavaScript Vanilla  
**Status:** Direção funcional e visual definida; requer implementação/refinamento final

---

## 1. Objetivo do projeto

Criar uma experiência web editorial para apresentar a **Carta Aberta para Elton Euler** de Victor Bruno.

O produto não deve parecer:

- uma landing page comercial;
- um currículo online;
- uma apresentação corporativa;
- um e-book estático;
- um template genérico de site.

A experiência deve parecer uma mistura intencional de:

1. **carta aberta pessoal**;
2. **livro/editorial digital**;
3. **caderno de raciocínio e laboratório**;
4. **apresentação cinematográfica interativa**.

A reação desejada no final não é **“que site bonito”**.

A reação desejada é:

> **“Eu quero conversar com esse cara.”**

Esse é o principal critério de produto e direção de arte.

---

## 2. Conceito central

### Título

**Carta aberta para Elton Euler**

### Frase-mãe

> **Eu sinto como se eu devesse estar aí.**

### Tese narrativa

Victor não está solicitando uma vaga nem tentando apenas entrar na Aliança Divergente.

Ele está mostrando que:

- reconheceu a lógica por trás da Teoria da Permissão;
- assimilou o método a ponto de começar a formular perguntas além dele;
- percebeu no episódio 2 de *A Caverna* ideias muito próximas das que já vinha organizando;
- entende a nova fase como um espaço de aprofundamento, experimentação e impacto;
- identifica a fala sobre **“parceiros de laboratório”** como uma possível abertura;
- acredita que pode contribuir na construção da próxima camada.

A progressão deve levar naturalmente à frase:

> **Eu não quero simplesmente participar da Aliança. Quero ajudar a construir a próxima versão dela.**

---

## 3. Fontes e materiais de referência

### Conteúdo-base

- Carta/racunho original de Victor Bruno.
- Versões refinadas da carta.
- Transcrição do episódio 2 de **A Caverna**.
- PDF editorial **Carta Aberta para Elton Euler**.

### Baseline técnico existente

Diretório atual:

```text
carta-aberta-elton-euler-v2/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── bloom.svg
    ├── cave.svg
    ├── favicon.svg
    ├── frequency.svg
    ├── lab-table.svg
    ├── manual-drive.svg
    ├── notes-grid.svg
    ├── prefall-detector.svg
    ├── question-scribble.svg
    ├── rocket-note.svg
    └── route-scribble.svg
```

A V2 deve ser tratada como **base funcional**, não como versão visual definitiva.

### Referências visuais geradas

As imagens conceituais mais recentes devem ser usadas como referência de composição, e não literalmente como páginas rasterizadas.

Principais referências:

```text
carta_aberta_para_elton_euler.png
carta_aberta_em_estilo_editorial.png
carta_aberta_em_tom_editorial.png
carta_01_as_três_camadas_da_permissão.png
quando_o_método_vira_linguagem.png
a_caverna_e_o_que_ela_revela.png
o_teclado_e_os_sinais_pequenos.png
a_high_resolution_multi_panel_graphic_design_layo.png
a_high_resolution_composite_of_four_magazine_book.png
```

> Regra: reproduzir os conceitos por HTML/CSS/SVG sempre que possível. Não transformar a página em uma sequência de imagens estáticas.

---

## 4. Princípios de UX

### 4.1 A carta é o conteúdo principal

A interface nunca deve competir com o texto.

Elementos gráficos servem para:

- destacar raciocínios;
- criar pausas;
- visualizar hipóteses;
- reforçar a sensação de documento pessoal;
- transformar momentos-chave em memória visual.

### 4.2 Duas vozes gráficas

A experiência possui duas vozes visuais:

**Voz editorial**  
Texto serifado, organizado, calmo e preciso.

**Voz manuscrita**  
Anotações laterais, perguntas, reações, correções, rabiscos e pensamentos que parecem acrescentados depois.

A manuscrita deve soar como o Victor interrompendo a própria carta para registrar um pensamento.

### 4.3 A densidade visual acompanha a densidade mental

- Início: limpo e organizado.
- Meio: mais diagramas, hipóteses, setas, notas e cruzamentos.
- *A Caverna*: ruptura visual completa.
- Laboratório / pré-queda: momento mais investigativo.
- Final: a interface volta a ficar limpa.

### 4.4 Não parecer conteúdo gerado por IA

Evitar:

- frases perfeitas demais e excessivamente simétricas;
- todos os blocos com a mesma dimensão;
- excesso de cards;
- mesma estrutura visual em todos os capítulos;
- títulos, parágrafos e boxes sempre alinhados do mesmo jeito;
- excesso de travessões;
- palavras corporativas genéricas;
- abstrações sem exemplos pessoais.

Preservar expressões autênticas como:

- “E o resto você já sabe...”
- “desculpinha esfarrapada”;
- “Hello, World mental”;
- “Tá de sacanagem...” quando fizer sentido editorial;
- perguntas genuínas sem resposta fechada.

---

## 5. Arquitetura da experiência

A página terá **dois modos** sobre o mesmo conteúdo:

### Modo 1 — LER

Leitura vertical contínua.

- experiência principal;
- scroll natural;
- texto completo;
- ritmo de carta/livro;
- diagramas e notas aparecem no fluxo;
- otimizada para desktop e mobile portrait.

### Modo 2 — APRESENTAR

Apresentação em telas **16:9**.

- 12 a 15 slides;
- fullscreen;
- desktop prioritário;
- mobile landscape;
- swipe horizontal;
- teclado `←` `→`;
- progresso;
- animações por tela;
- quantidade de texto reduzida;
- composições próprias, não simples recortes do modo leitura.

A troca de modo deve ser discreta:

```text
LER | APRESENTAR
```

---

## 6. Estrutura narrativa ideal

### 00 — Capa

**Tema:** preto + dourado + papel/tinta.

Conteúdo:

```text
CARTA ABERTA PARA

Elton Euler

Eu sinto como se eu devesse estar aí.

Victor Bruno · 2026
```

Complemento curto:

> Para entender por que essa frase faz sentido, eu preciso voltar um pouco.

#### Comportamento

- altura: `100svh`;
- título responsivo com `clamp()`;
- linha SVG desenhada progressivamente;
- elementos de fundo quase invisíveis;
- scroll cue discreto;
- não colocar menu tradicional chamativo.

#### Elementos de fundo permitidos

- ondas de frequência;
- círculos incompletos;
- traço manuscrito;
- pequena caverna;
- fórmulas apagadas;
- fragmentos de palavras;
- linhas de conexão.

Opacidade recomendada: **0.03 a 0.12**.

---

### 01 — Antes de começar

Esta deve ser a verdadeira primeira página da carta.

#### Texto de abertura aprovado

> **Euler,**  
> Meu nome é **Victor Bruno**, tenho 28 anos. Sou autodidata, ou, **“aquele que ensinou a si próprio”**, procrastinador e criativo, o que me torna membro honorário do grupo **“melhor pessoa do mundo em dar desculpas”** e, assim como você, um **“menino de ouro”**.

Depois, isolado em manuscrito:

> **E o resto você já sabe...**

Explicar em seguida que Victor conheceu a história de Euler antes de Euler conhecer a dele e que essas características já permitem imaginar boa parte do caminho.

#### Portfólio

Usar exatamente:

**[Victor Bruno | Portifólio Curriculum]**

URL:

```text
https://victorbrun-no.github.io/portifolio-curriculo/
```

#### Explicação antes da carta

Deve aparecer cedo:

> Isto começou como uma mensagem curta. Só que, toda vez que eu tentava resumir, eu apagava justamente o que fazia a frase **“eu sinto como se eu devesse estar aí”** ter sentido.

Continuar explicando que a história precisou ser organizada em capítulos.

---

## 7. Mini sumário

O mini sumário deve aparecer **logo após a introdução**, não no meio da página.

Título recomendado:

```text
MINI SUMÁRIO
```

Estrutura ideal:

```text
01 — O que eu vi
     As três camadas da Permissão.

02 — O que eu não mandei
     A pergunta do “módulo avançado”.

03 — O que mudou
     Quando parei de consultar o manual.

04 — O que me surpreendeu
     A Caverna, frequência e a confirmação.

05 — As perguntas que vieram depois
     Pré-queda, sinais e laboratório.

06 — O que eu comecei a enxergar
     Impacto, educação e escala.

07 — O que eu quero te propor
     Iniciativa Divergentes?
```

### Regra narrativa importante

No começo, **não explicar a Iniciativa Divergentes**.

Exibir apenas como anotação manuscrita:

> **Iniciativa Divergentes?**

A interrogação deve permanecer até o capítulo em que o conceito é apresentado.

---

## 8. Ponte após o sumário

Manter o trecho com ritmo quase poético:

> Tem Permissão. Tem pré-queda. Tem profundidade. Tem *A Caverna*. Tem frequência. Tem propósito. Tem a nova Aliança. Tem o que você chamou de evolução.

Não explicar a Iniciativa Divergentes aqui.

Depois:

> Para chegar no que eu quero te propor sem parecer que eu simplesmente acordei um dia e resolvi dizer *“Euler, confia em mim que eu tive uma ideia”*, eu preciso te mostrar o caminho.

E em manuscrito grande:

> **Então esta é uma carta aberta.**  
> **Não exatamente curta.**  
> **Mas necessária.**

---

## 9. Capítulo — As três camadas da Permissão

Título:

```text
O que eu vi na Teoria da Permissão
```

Texto-chave:

> Acompanho seu trabalho há pouco mais de 2 anos e, nesse tempo, não pude deixar de notar o trabalho incrível que você fez. Uma das coisas que mais me chamou atenção foi a profundidade das camadas daquilo que você conseguiu transformar em método.

Estrutura visual:

```text
01  O que é ensinado.
02  O que conseguimos compreender.
03  O que só aparece quando assimilamos tudo.
```

A terceira camada deve receber maior peso visual.

Anotação manuscrita:

> **E aí começou o problema: eu queria ir mais fundo.**

### Direção de arte

- papel claro;
- três colunas apenas no desktop;
- no mobile, sequência vertical;
- números circulados à mão;
- pequenos sublinhados imperfeitos;
- desenho de caverna muito discreto ao fundo ou margem.

---

## 10. Capítulo — O módulo avançado que eu nunca pedi

Título:

```text
O “módulo avançado” que eu nunca pedi
```

Visual principal:

- caixa de mensagem/rascunho;
- botão “ENVIAR” que nunca foi acionado;
- foguete desenhado à mão;
- anotação: **“lançar primeiro. aprofundar depois.”**;
- anotação: **“desculpinha esfarrapada”**.

Tese:

> Talvez a profundidade não estivesse faltando. Talvez ela ainda não pudesse ser o ponto de partida.

Metáfora:

> primeiro colocar o foguete no ar com o essencial; depois aumentar a complexidade voo a voo.

---

## 11. Capítulo — Parar de consultar o manual

Este capítulo deve ganhar uma microexperiência própria.

Fluxo:

```text
CONSULTAR O MANUAL
        ↓
REPETIR O MÉTODO
        ↓
ASSIMILAR A LÓGICA
        ↓
ENXERGAR ALÉM
```

No desktop, pode ser horizontal.

No mobile, vertical.

### Animação

1. os quatro passos aparecem sequencialmente;
2. os três primeiros perdem opacidade;
3. “ENXERGAR ALÉM” permanece;
4. ocorre transição para fundo escuro.

Depois entrar a frase de Euler:

> **“Agora o papo é sobre evolução.”**

Logo abaixo:

```text
~~conseguir ou não usar a solução~~
```

E manuscrito:

> **nem precisar dela.**

Anotação:

> **Hello, World mental.**

---

## 12. Capítulo — A Caverna

Esse deve ser o principal **momento de ruptura visual**.

### Atmosfera

- fundo preto profundo;
- textura mineral;
- entrada de luz quente;
- dourado envelhecido;
- composição mais cinematográfica;
- referências discretas ao mito da caverna de Platão.

### Princípio visual

> Existe aquilo que vemos projetado na parede. E existe o momento em que alguém resolve virar o rosto.

Palavras distribuídas no espaço:

```text
frequência
energia
vibração
expansão da consciência
```

Rabisco sobre elas:

> **Sem deixar isso virar fumaça.**

Contraponto estrutural:

```text
explicação · desenho · teste · método
```

Frases de impacto:

> **“Eu nunca criei nada. Eu só lembrei.”**

E:

> **Como assim? É exatamente isso que eu estava tentando formular.**

---

## 13. Capítulo — A questão da sintonia

Não usar cards genéricos “Possibilidade A / Possibilidade B”.

Desenhar como investigação.

No centro:

```text
EU PENSEI NISSO
        ×
VOCÊ ANUNCIOU ISSO
```

Ao redor, manuscrito:

```text
imersão?
lógica previsível?
intenção?
frequência?
causa e efeito?
```

Centro final:

> **Eu não sei.**

Depois:

> **Mas reconheci aquilo como uma confirmação.**

Conclusão:

> Se estamos olhando para o mesmo ponto por caminhos diferentes, eu quero descobrir o que acontece quando colocamos as duas cabeças na mesma mesa.

---

## 14. Capítulo — O teclado e a pré-queda

Texto a preservar:

> **Meu teclado deu defeito, e parava de funcionar em momentos aleatórios, no entanto muito específicos, decisórios, então eu me peguei pensando: e se pequenas anomalias fossem registradas antes que uma sequência ganhasse volume? Seria possível “esgotar” a quantidade de pré-quedas, apenas emulando em ambiente controlado?**

Pode receber revisão ortográfica mínima posteriormente, sem alterar a voz.

### Visual

Ilustração vetorial de teclado.

Algumas teclas destacadas como falhas intermitentes.

Notas:

```text
parava aqui.
sempre aqui.
por que aqui?
```

Diagrama A:

```text
ANOMALIA → REPETIÇÃO → PADRÃO → PERCEPÇÃO → INTERVENÇÃO
```

Diagrama B:

```text
EMULAÇÃO → OBSERVAÇÃO → HIPÓTESE → TESTE
```

Nota manuscrita importante:

> **Eu não sei se funciona. É justamente por isso que eu quero testar.**

Evitar apresentar a hipótese como fato comprovado.

---

## 15. Capítulo — Parceiros de laboratório

A fala sobre “parceiros de laboratório” deve entrar **depois** das perguntas e do teclado.

Visual principal:

- mesa vista de cima;
- duas ou mais cadeiras;
- papéis, rabiscos, café, desenhos;
- sensação de espaço de trabalho real.

Frase de Euler:

> **“Parceiro de laboratório, senta aqui, vem cá.”**

Realização manuscrita central:

> **Talvez eu não estivesse procurando um módulo.**  
> **Talvez estivesse procurando um laboratório.**

Esse é um dos principais picos emocionais da experiência.

---

## 16. Capítulo — Atenção → impacto

Mostrar mudança de escala.

Equação visual:

```text
MENSAGEM + AUDIÊNCIA + EXECUÇÃO = IMPACTO
```

Ou, na montagem mais conceitual:

```text
ATENÇÃO → IMPACTO
```

Aplicações possíveis citadas no conteúdo:

- educação;
- empresas;
- comunidades;
- saúde;
- tecnologia;
- cultura;
- impacto social.

Visual recomendado:

- árvore desenhada à mão;
- raízes = princípios;
- tronco = método;
- galhos = aplicações;
- frutos = impacto.

Evitar iconografia corporativa genérica.

---

## 17. Capítulo — Iniciativa Divergentes

O teaser inicial volta.

Primeiro:

```text
Iniciativa Divergentes?
```

A interrogação é riscada/desenhada para fora.

Então:

```text
Iniciativa Divergentes.
```

### Definição

Não apresentar como clube de gênios ou projeto fechado.

Apresentar como:

> **uma hipótese de estrutura para aprofundar, traduzir, experimentar e escalar ideias.**

### Quatro pilares

#### 01 — APROFUNDAR

Ir onde a explicação padrão começa a ficar curta.

#### 02 — TRADUZIR

Transformar o complexo em linguagem compreensível sem matar a essência.

#### 03 — EXPERIMENTAR

Tirar ideias do abstrato e colocá-las em protótipo, protocolo, piloto e teste.

#### 04 — ESCALAR

Levar o que funciona para educação, empresas, comunidades, saúde e impacto real.

### Referência tecnológica

Usar como anotação lateral:

```text
refactor()
```

Legenda manuscrita:

> manter o que funciona; reorganizar para suportar a próxima escala.

Não transformar isso em seção de portfólio técnico.

---

## 18. Capítulo — O que eu coloco na mesa

Mostrar capacidade sem parecer candidatura tradicional.

Pontos:

- aprende sozinho;
- desmonta ideias até entender a lógica;
- conecta assuntos distantes;
- reconhece padrões;
- organiza informação complexa;
- une repertório criativo e técnico;
- transforma abstração em protótipo;
- pergunta automaticamente como algo pode ficar 10× maior sem perder a essência.

Contraponto humano:

- procrastinação;
- justificativas convincentes;
- tendência a transformar movimento em projeto mental.

Objetivo: demonstrar **autoconsciência + capacidade**, não autopromoção vazia.

---

## 19. Final — O convite

O final deve limpar novamente a interface.

### Sequência

Tela escura.

Primeira frase:

> **Eu não quero simplesmente participar da Aliança.**

Depois:

> **Quero ajudar a construir a próxima versão dela.**

Depois:

> **Euler, me dê uma mesa e alguns minutos.**

Final:

# AÍ.

Em manuscrito:

> **Eu sinto como se eu devesse estar aí.**

Assinatura:

```text
Victor Bruno
Victor Bruno | Portifólio Curriculum
```

Não usar CTA comercial forte.

A própria carta é o CTA.

---

# 20. Sistema visual

## 20.1 Paleta

```css
:root {
  --paper:      #F1EADC;
  --paper-2:    #E7DDCA;
  --paper-3:    #FBF7EE;

  --ink:        #1B1915;
  --ink-soft:   #504B42;
  --muted:      #766E61;

  --gold:       #A27A43;
  --gold-dark:  #74552E;
  --rust:       #8B4E38;
  --green:      #53634B;

  --cave:       #0C0D0C;
  --cave-2:     #121512;
  --cave-text:  #E9E1D2;
}
```

### Uso

- `paper`: páginas editoriais;
- `ink`: corpo de texto;
- `gold`: destaques, números, linhas;
- `rust`: rabiscos pessoais/perguntas;
- `green`: impacto/crescimento pontual;
- `cave`: capítulos cinematográficos.

Não usar roxo, azul corporativo ou gradientes “AI-style”.

---

## 20.2 Tipografia

### Display / títulos

```text
Cormorant Garamond
fallback: Georgia, serif
```

### Corpo

```text
Source Serif 4
fallback: Georgia, serif
```

### Manuscrita

```text
Caveat
fallback: Segoe Print, cursive
```

### Regras

- corpo nunca em cursiva manuscrita;
- manuscrita apenas para segunda voz;
- largura ideal do texto: `62–76ch`;
- corpo desktop: `19–22px`;
- mobile: `17–19px`;
- line-height: `1.65–1.85`;
- títulos grandes usando `clamp()`.

---

## 20.3 Texturas

O papel deve ter textura muito suave.

Preferir:

- CSS gradients;
- noise SVG pequeno;
- grain repetível;
- linhas de caderno com opacidade mínima.

Evitar imagens de textura muito grandes.

Meta: textura < **50 KB** quando possível.

---

# 21. SVGs necessários

## Já existentes

```text
bloom.svg
cave.svg
frequency.svg
lab-table.svg
manual-drive.svg
notes-grid.svg
prefall-detector.svg
question-scribble.svg
rocket-note.svg
route-scribble.svg
```

## Adicionar/refinar

```text
keyboard-anomaly.svg
plato-cave-rays.svg
hand-underline-01.svg
hand-underline-02.svg
hand-circle.svg
hand-arrow-long.svg
hypothesis-cross.svg
attention-impact-tree.svg
refactor-note.svg
meeting-table.svg
signature-victor.svg
```

### Regra técnica

SVGs animáveis devem usar:

```css
stroke-dasharray
stroke-dashoffset
```

E animação por `transform`/`opacity` sempre que possível.

---

# 22. Animações

## 22.1 Filosofia

Animações devem parecer **anotação surgindo**, não interface de app.

### Permitidas

- fade + translateY pequeno;
- stroke drawing;
- sublinhado sendo traçado;
- círculo manuscrito desenhando;
- palavra aparecendo com pequeno atraso;
- paralaxe leve em elementos de fundo;
- mudança gradual de atmosfera na entrada de *A Caverna*.

### Evitar

- bounce;
- zoom exagerado;
- glow neon;
- partículas genéricas;
- transições > 700 ms em elementos comuns;
- animação em todo parágrafo.

---

## 22.2 Scroll reveal

Usar `IntersectionObserver`.

Exemplo de comportamento:

```js
threshold: 0.15
rootMargin: "0px 0px -10% 0px"
```

Classes sugeridas:

```text
.reveal
.reveal-stagger
.draw-path
.is-visible
```

---

## 22.3 Reduced motion

Obrigatório:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Conteúdo nunca pode depender da animação para ser compreendido.

---

# 23. Modo apresentação / carrossel

## 23.1 Aspect ratio

```text
16:9
```

Viewport interno deve preservar a proporção.

### Desktop

Centralizar no viewport com letterboxing quando necessário.

### Mobile portrait

Mostrar aviso:

> **Isso fica melhor de lado. Gire o telefone para continuar.**

### Mobile landscape

Ocupar o máximo possível da tela.

---

## 23.2 Slides recomendados

```text
01  Carta aberta para Elton Euler
02  Antes de começar
03  Mapa da carta
04  As três camadas
05  O módulo avançado que eu nunca pedi
06  Parar de consultar o manual
07  A Caverna
08  A questão da sintonia
09  O teclado / pré-queda
10  Parceiros de laboratório
11  Atenção → impacto
12  Iniciativa Divergentes
13  O que eu coloco na mesa
14  O convite
15  AÍ.
```

Pode reduzir para 12–13 se duas telas tiverem pouca densidade.

---

## 23.3 Navegação

Desktop:

```text
←
→
Space
Esc
```

Mobile:

```text
swipe left
swipe right
```

UI mínima:

```text
07 / 15
────────────── progress
```

Botões:

```text
Tela cheia
Sair
```

---

## 23.4 Deep link

Suportar:

```text
?present=1
?present=1&slide=7
```

Opcionalmente usar hash:

```text
#slide-07
```

---

# 24. Responsividade

Breakpoints orientativos:

```css
@media (max-width: 1120px) {}
@media (max-width: 820px)  {}
@media (max-width: 520px)  {}
```

### Mobile portrait

- leitura prioritária;
- sem conteúdo lateral essencial;
- notas de margem migram para blocos entre parágrafos;
- grids viram sequência;
- SVGs decorativos simplificados;
- corpo mínimo: `17px`.

### Tablet

- duas colunas apenas quando houver ganho real;
- texto ainda precisa ser dominante.

### Desktop

- usar margem editorial ampla;
- permitir notas fora da coluna principal;
- largura máxima geral: `1120–1280px`;
- coluna de leitura: `720–800px`.

---

# 25. Acessibilidade

Obrigatório:

- HTML semântico;
- `h1` único;
- hierarquia correta `h2`/`h3`;
- `nav` para mini sumário;
- `aria-label` em controles;
- foco visível;
- contraste WCAG AA;
- `alt` descritivo apenas para imagens informativas;
- SVGs puramente decorativos com `aria-hidden="true"`;
- apresentação deve atuar como dialog quando aberta;
- focus trap no modo apresentação;
- restaurar foco no botão que abriu a apresentação;
- `Escape` fecha;
- reduced motion.

---

# 26. Performance

Objetivos:

```text
LCP < 2.5 s
CLS < 0.1
INP < 200 ms
JS inicial < 80 KB gzip
CSS inicial < 70 KB gzip
```

### Regras

- JS vanilla, sem framework;
- SVG no lugar de PNG sempre que possível;
- imagens raster em WebP/AVIF;
- `loading="lazy"` abaixo da dobra;
- fontes com `display=swap`;
- evitar vídeos autoplay;
- nenhuma biblioteca de animação obrigatória;
- usar GPU apenas em `transform` e `opacity`;
- `will-change` apenas durante animação relevante.

---

# 27. GitHub Pages

Projeto deve funcionar como site estático.

Estrutura final recomendada:

```text
/
├── index.html
├── styles.css
├── script.js
├── print.css
├── assets/
│   ├── svg/
│   ├── img/
│   └── fonts/           # apenas se licença permitir e for necessário
├── favicon.svg
└── README.md            # opcional, apenas para o repositório
```

Não depender de backend.

Todos os paths devem ser relativos:

```html
./assets/svg/cave.svg
```

Evitar paths iniciados por `/` para não quebrar em repositório GitHub Pages publicado em subpath.

---

# 28. PDF / Print

O PDF deve nascer do HTML.

Criar `print.css` ou bloco `@media print`.

### Regras

- remover navegação;
- remover botões;
- remover controles de apresentação;
- preservar fundos escuros importantes;
- `print-color-adjust: exact`;
- capítulos podem iniciar nova página;
- evitar quebra de citação;
- evitar `position: fixed` decorativo;
- tamanho sugerido: A4 ou A5 conforme teste editorial.

A versão PDF não precisa replicar todas as animações; deve preservar a hierarquia e direção de arte.

---

# 29. Meta tags / compartilhamento

Adicionar:

```html
<title>Carta aberta para Elton Euler — Victor Bruno</title>
<meta name="description" content="Uma carta aberta de Victor Bruno para Elton Euler sobre Permissão, profundidade, A Caverna, laboratório e a próxima camada da Aliança Divergente.">
<meta name="theme-color" content="#181713">
```

Open Graph:

```text
og:title
og:description
og:image
og:type=website
```

Criar imagem de compartilhamento própria em `1200×630`.

---

# 30. Segurança e privacidade

Por ser site estático:

- não inserir tokens;
- não incluir e-mail privado se não for desejado;
- nenhum analytics invasivo por padrão;
- links externos com `rel="noopener noreferrer"` quando `target="_blank"`;
- evitar scripts de terceiros desnecessários.

---

# 31. Critérios de aceite visual

A página só está visualmente pronta se:

- [ ] não parece template de landing page;
- [ ] a capa causa impacto imediato;
- [ ] “Antes de começar” parece carta, não hero secundário;
- [ ] mini sumário aparece antes dos capítulos densos;
- [ ] “Iniciativa Divergentes?” aparece como teaser antes da explicação;
- [ ] manuscrito funciona como segunda voz, não como fonte decorativa aleatória;
- [ ] capítulos não repetem a mesma composição;
- [ ] *A Caverna* é uma ruptura visual clara;
- [ ] o teclado parece uma hipótese de laboratório;
- [ ] “parceiros de laboratório” é um pico emocional;
- [ ] o capítulo da Iniciativa parece construção de hipótese, não pitch corporativo;
- [ ] o final volta a ser simples;
- [ ] o CTA é a conversa, não um botão comercial.

---

# 32. Critérios de aceite técnico

- [ ] HTML semântico válido;
- [ ] zero IDs duplicados;
- [ ] zero links internos quebrados;
- [ ] zero assets faltando;
- [ ] JavaScript sem erro de sintaxe;
- [ ] nenhum erro de console no carregamento;
- [ ] layout testado em `375px`;
- [ ] layout testado em `768px`;
- [ ] layout testado em `1024px`;
- [ ] layout testado em `1440px`;
- [ ] sem overflow horizontal em mobile;
- [ ] apresentação funciona com mouse, teclado e touch;
- [ ] fullscreen falha de forma segura quando não suportado;
- [ ] orientação landscape não é requisito para acesso ao conteúdo;
- [ ] `prefers-reduced-motion` funciona;
- [ ] impressão/PDF não corta conteúdo importante;
- [ ] Lighthouse sem problemas críticos de acessibilidade;
- [ ] Core Web Vitals dentro de meta ou sem regressões relevantes.

---

# 33. Plano de implementação

## Fase 1 — Consolidar conteúdo

- revisar texto capítulo a capítulo;
- definir quais falas de Euler permanecem como citações;
- fixar sumário final;
- fixar sequência narrativa;
- marcar textos manuscritos e textos editoriais.

**Saída:** conteúdo congelado para implementação.

---

## Fase 2 — Refatorar estrutura HTML

- normalizar IDs;
- mover mini sumário para a introdução;
- reorganizar capítulos;
- separar conteúdo de leitura e conteúdo de apresentação por dados/estrutura compartilhada quando possível;
- melhorar semântica.

**Saída:** DOM estável.

---

## Fase 3 — Sistema visual

- consolidar tokens CSS;
- criar novos SVGs;
- refinar papel/texturas;
- implementar segunda voz manuscrita;
- criar composições únicas por capítulo.

**Saída:** versão desktop completa.

---

## Fase 4 — Animações

- stroke draw;
- scroll reveals;
- entrada da Caverna;
- fluxo do manual;
- interações sutis do teclado;
- teaser da Iniciativa;
- final.

**Saída:** experiência narrativa completa.

---

## Fase 5 — Modo apresentação

- 12–15 slides;
- fullscreen;
- swipe;
- teclado;
- deep links;
- landscape hint;
- foco e acessibilidade.

**Saída:** carrossel 16:9 funcional.

---

## Fase 6 — Mobile e print

- ajustar margens/notas;
- corrigir tipografia;
- otimizar SVGs;
- criar print stylesheet;
- validar PDF.

**Saída:** mobile + PDF.

---

## Fase 7 — Validação final

Executar:

```bash
node --check script.js
```

Se houver ferramentas disponíveis:

```bash
npx html-validate index.html
npx stylelint styles.css
npx eslint script.js
```

E2E / navegador:

- Chrome desktop;
- Chrome Android;
- Safari/iOS quando possível;
- Firefox desktop.

Testes manuais:

- navegação do sumário;
- fullscreen;
- swipe;
- teclado;
- print;
- links externos;
- reduced motion;
- orientação portrait/landscape.

---

# 34. Definition of Done

O projeto estará concluído quando:

1. a narrativa estiver aprovada;
2. a experiência de leitura estiver completa;
3. o modo apresentação estiver funcional;
4. as composições se aproximarem da direção de arte conceitual gerada;
5. mobile não parecer uma versão reduzida do desktop, mas uma leitura pensada para telefone;
6. PDF for exportado corretamente do mesmo código-base;
7. não houver erros funcionais conhecidos;
8. a página puder ser publicada diretamente no GitHub Pages;
9. a última tela levar naturalmente ao desejo de conversa.

---

# 35. Regra final de direção

Toda decisão nova deve responder a esta pergunta:

> **Isso ajuda Elton a entender Victor ou só deixa a página mais bonita?**

Se for apenas decoração, remover.

Se ajudar a visualizar uma ideia, sentir uma pausa, reconhecer uma conexão ou entender a personalidade de Victor, manter.

O projeto não é uma demonstração de frontend.

É uma carta que ganhou espaço suficiente para ser compreendida.

---

**Frase de encerramento do projeto:**

> **Eu sinto como se eu devesse estar aí.**

