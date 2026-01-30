# Portal Parcerias – Amorim
## Contexto oficial do projeto (fonte da verdade)

Este projeto é um portal interno da área de Parcerias da Amorim.
Ele NÃO é um site público. É documentação operacional viva.

A IA que trabalhar neste projeto deve:
- Priorizar clareza operacional acima de estética
- Nunca simplificar processos
- Nunca remover regras, SLAs ou checklists
- Preservar textos exatamente como enviados, a menos que solicitado
- Perguntar antes de alterar textos de processo
- Tratar este arquivo como a verdade absoluta do sistema

---

## Estrutura técnica

Projeto em HTML/CSS/JS puro (sem framework)

index.html
- Carrega header, nav e footer via JS
- Carrega páginas dinamicamente no <main id="content">

components/
- header.html
- nav.html
- footer.html

pages/
- home.html
- estrutura.html
- juridico.html
- sourcing.html
- deal.html
- onboarding.html
- ferramentas.html

scripts/
- main.js (router, loaders e lógica de navegação)

styles/
- main.css (estilos globais)

---

## Regras de arquitetura

- Cada página é independente
- Nenhuma página contém <html>, <head> ou <body>
- Apenas conteúdo
- Navegação ocorre por JS (SPA simples)
- IDs de páginas devem ser únicos e estáveis
- Nunca misturar conteúdo de páginas diferentes
- Não mover conteúdo entre páginas sem pedir confirmação

---

## Regras de conteúdo

Este portal é um PLAYBOOK OPERACIONAL.
Todo texto representa processo real.

Proibido:
- Resumir
- Reescrever
- “Otimizar” texto
- “Melhorar leitura” sem autorização
- Alterar ordem de passos
- Juntar seções

Permitido:
- Ajustes visuais (CSS)
- Organização estrutural (divs, cards, grids)
- Correções ortográficas APENAS se solicitadas
- Modularização de layout

---

## Como a IA deve trabalhar

Quando o usuário pedir mudanças:
1. Identificar arquivo afetado
2. Perguntar se pode alterar texto (se envolver texto)
3. Devolver arquivo COMPLETO pronto para colar
4. Nunca responder com trechos soltos
5. Nunca assumir contexto fora deste arquivo

---

## Estado atual

Todas as páginas existem e estão completas.
O problema atual é APENAS visual (CSS não aplicado corretamente).
Nenhum conteúdo deve ser reescrito.
