# Dashboard Analytics - E-commerce

Um dashboard SPA moderno e profissional para análise de dados de E-commerce, com foco em Cohort Analysis, Segmentação RFM e Análise Descritiva.

## 🎨 Características

- **Design Dark & Futuristic** com efeitos glassmorphism
- **Cores Neon** (Ciano e Roxo) para destaques visuais
- **Totalmente Responsivo** para desktop, tablet e mobile
- **Visualizações Interativas** com ApexCharts
- **Arquitetura Modular** com separação de responsabilidades

## 📁 Estrutura do Projeto

```
Analysis-Excel/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   ├── variables.css   # Variáveis CSS (design tokens)
│   │   ├── reset.css       # Reset e estilos base
│   │   ├── layout.css      # Layout e grid systems
│   │   ├── components.css  # Componentes reutilizáveis
│   │   └── responsive.css  # Media queries e responsividade
│   └── js/
│       ├── data.js         # Dados mockados
│       ├── navigation.js   # Sistema de navegação
│       ├── charts.js       # Gerenciamento de gráficos
│       └── main.js         # Entry point da aplicação
├── Excel.xlsx              # Dados originais
└── README.md               # Documentação
```

## 🚀 Como Usar

### Opção 1: Abrir Diretamente

Simplesmente abra o arquivo `index.html` em um navegador moderno (Chrome, Firefox, Edge).

### Opção 2: Servidor Local

Para evitar problemas com CORS ao usar módulos ES6:

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server -p 8000

# Usando PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## 📊 Páginas do Dashboard

### 1. O Problema de Negócio

Apresenta o contexto, objetivos estratégicos e impacto esperado das análises.

### 2. Análise de Cohort

- **Heatmap interativo** mostrando retenção de clientes
- KPIs de retenção (M1, M6, M12)
- Identificação da melhor cohort

### 3. Segmentação RFM

- **Treemap** com distribuição de clientes por segmento
- Métricas de Recência, Frequência e Monetização
- 11 segmentos de clientes identificados

### 4. Análise Descritiva

- **Top 10 Produtos** por vendas (bar chart)
- **Vendas por Categoria** (donut chart)
- KPIs de vendas totais e ticket médio

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna (Grid, Flexbox, Custom Properties)
- **JavaScript ES6+** - Módulos, Classes, Arrow Functions
- **ApexCharts** - Biblioteca de gráficos interativos
- **Phosphor Icons** - Ícones modernos

## 📦 Dependências Externas (CDN)

- [ApexCharts](https://apexcharts.com/) - v3.x
- [Phosphor Icons](https://phosphoricons.com/) - Latest

## 🎯 Arquitetura

### CSS Modular

- `variables.css` - Design tokens centralizados
- `reset.css` - Normalização e estilos base
- `layout.css` - Estrutura de layout
- `components.css` - Componentes UI
- `responsive.css` - Breakpoints e adaptações

### JavaScript Modular

- `data.js` - Camada de dados (mock)
- `navigation.js` - Gerenciamento de rotas SPA
- `charts.js` - Renderização de gráficos (lazy loading)
- `main.js` - Inicialização da aplicação

## 🔄 Próximos Passos

1. **Integração com Dados Reais**
   - Substituir dados mockados por dados do `Excel.xlsx`
   - Criar parser para ler as planilhas

2. **Funcionalidades Adicionais**
   - Filtros de data
   - Exportação de relatórios
   - Comparação entre períodos

3. **Otimizações**
   - Lazy loading de imagens
   - Service Worker para cache
   - Minificação de assets

## 📱 Responsividade

- **Desktop**: Layout completo com sidebar expandida
- **Tablet** (≤1024px): Grid adaptado
- **Mobile** (≤768px): Sidebar colapsada em ícones
- **Small Mobile** (≤480px): Layout otimizado para telas pequenas

## 🎨 Paleta de Cores

```css
--bg-primary: #0f172a /* Slate 900 */ --bg-secondary: #1e293b /* Slate 800 */
  --accent-cyan: #06b6d4 /* Cyan 500 */ --accent-purple: #8b5cf6
  /* Purple 500 */ --text-primary: #f1f5f9 /* Slate 100 */;
```

## 📄 Licença

Este projeto é de uso interno para análise de dados de E-commerce.

## 👨‍💻 Autor

Analytics Team - 2026
