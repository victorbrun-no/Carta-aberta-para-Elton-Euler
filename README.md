# Pacote Visual — Carta Aberta para Elton Euler

Pacote de elementos para o HTML editorial/interativo.

## Conteúdo
- **SVG (65 arquivos):** setas, rabiscos, círculos, sublinhados, símbolos, diagramas e ilustrações temáticas. Os vetores novos usam `currentColor` para facilitar recoloração via CSS.
- **PNG (23 arquivos):** texturas e overlays, incluindo transparência quando aplicável.
- **WEBP (21 arquivos):** versões web otimizadas.
- **preview/**: folhas de contato dos assets reais.

## Uso visual
- Fundo claro: grafite/preto + dourado envelhecido.
- Fundo escuro: creme/branco + dourado envelhecido.
- Rabiscos de fundo normalmente em 4%–18% de opacidade.
- Para animar `stroke-dashoffset`, use SVG inline.
- Texturas WEBP são preferíveis no GitHub Pages.
- `cave-atmosphere` deriva da direção de arte aprovada para a seção *A Caverna*.

## Exemplo
```css
.paper { background: #f1ead8 url('./assets/webp/paper-light.webp') center/cover; }
.grain::after { content:''; position:absolute; inset:0; background:url('./assets/webp/grain-light.webp'); pointer-events:none; opacity:.22; }
.scribble { color:#b88943; opacity:.14; }
```
