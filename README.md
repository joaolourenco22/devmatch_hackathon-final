# Dashboard do Recrutador

Aplicação web para listar, filtrar, ordenar e comparar candidatos, combinando hard skills (mock do GitHub/stack) e soft skills (mock Likert) com visualização em gráfico radar (SVG puro).

Principais telas/componentes: página de filtros (filtro.js), cards dos candidatos (CandidateCardAll/CandidateCard), KPI simples e radares (Radar, ComparisonRadar).

## Funcionalidades
- Filtros combináveis: Role, Localização, Home office, Modalidade, Carga, Relocate, Experiência, Stacks (multi), Soft mínimo (Likert 1–5).
- Ordenação: Score Total, Soft skills, Hard (GitHub).
- Comparação: seleção de até 3 candidatos com radar comparativo (Hard • Soft • Total).
- Radar individual de soft skills em cada card (6 eixos).
- Tema consistente via variáveis CSS em `:root` (cores de painel, texto, borda, primária etc.).
- Dados mockados ampliados para garantir resultados nas combinações de filtros.

## Tecnologias
- Next.js (React), CSS utilitário (Tailwind via @import) + variáveis CSS personalizadas em `src/styles/globals.css`.
- SVG puro para gráficos (componente `Radar`).

## Como executar
1) Instalar dependências
```bash
npm install
```

2) Rodar em desenvolvimento
```bash
npm run dev
```

3) Acessar
- App: http://localhost:3000
- Página de filtros: http://localhost:3000/filtro

Observação: a aplicação funciona 100% com dados mockados (não requer backend/DB). Os módulos em `src/services/api.js` e `server.js` podem ser ignorados para o fluxo de mocks.

## Dados mockados (e localização)
- A lista de candidatos é expandida automaticamente a partir de um conjunto base para aumentar a diversidade.
- As localizações foram normalizadas para quatro opções: Porto, Lisboa, Algarve e Braga (apenas estas devem aparecer no filtro de Localização).

## Como usar os filtros
- Role: seleção exata do cargo.
- Stacks: seleção múltipla (todos os itens selecionados devem existir no candidato).
- Home office/Modalidade/Localização: quando Home office = “Sim” ou Modalidade = “Remoto”, o filtro de Localização é desativado.
- Experiência: mapeia para anos mínimos.
- Soft mínimo: média Likert (1–5) convertida internamente para 0–100; ex.: 4.0 equivale a ≥ 80.
- Ordenar por: altera a ordenação sem mudar o conjunto filtrado.
- Chips de “Filtros ativos” mostram/removem rapidamente critérios aplicados.
- Botão “Aplicar Filtros” roda a filtragem/ordenação com o estado atual.

## Comparação de candidatos
- Marque até 3 candidatos clicando no seletor no canto do card.
- A seção “Selecionados para comparação” mostra chips e o radar comparativo.

## Tema e Cores
As cores são definidas em `src/styles/globals.css` (seção `:root`). Componentes usam as variáveis abaixo para manter consistência entre claro/escuro:
- `--background`, `--foreground`
- `--primary`, `--primary-2`
- `--panel-bg`, `--panel-border`, `--panel-shadow`
- `--text-muted`

## Estrutura do projeto
```
src/
  components/
    CandidateCard.jsx
    CandidateCardAll.jsx
    ComparisonRadar.jsx
    Filters.jsx
    KPIs.jsx
    Nav.jsx
    Radar.jsx
    Ranking.jsx
    Sidebar2.jsx
  pages/
    _app.js
    _document.js
    index.js
    filtro.js             # Página principal de filtros (usa mocks)
  services/
    api.js                # Módulos de API (não necessários para mocks)
  styles/
    globals.css           # Variáveis de tema e utilitários
server.js                 # Next + Express (opcional)
```

## Dicas e solução de problemas
- Se os filtros não responderem, verifique o botão “Aplicar Filtros”. Ele usa o estado atual; mudar selects/sliders e clicar aplica o conjunto correto.
- Em “Ordenar por”, o valor “Soft skills” depende da média calculada das soft skills do candidato (Likert 1–5 → 0–100).
- Localização permanece desativada quando Home office = “Sim” ou Modalidade = “Remoto”.

## Licença
Uso interno durante o hackathon (sem licença pública definida).

