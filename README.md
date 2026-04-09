# L&L Alumínio — Showroom Digital

Site institucional e catálogo de produtos para a L&L Alumínio, empresa especializada em utensílios de alumínio.

---

## Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Estilização | Tailwind CSS 3 + CSS Variables |
| Componentes | shadcn/ui (Radix UI) |
| Roteamento | React Router DOM 6 |
| Estado assíncrono | TanStack Query 5 |
| Formulários | React Hook Form + Zod |
| Ícones | Lucide React |
| Testes | Vitest + React Testing Library |

---

## Estrutura de Pastas

```
aluminum-showroom/
├── public/
│   ├── data/
│   │   └── imagens-catalogo.json   # Dados dos produtos (fonte de verdade)
│   └── images/
│       ├── catalogo/               # Imagens dos produtos (.webp)
│       ├── logo/                   # Logotipo da marca
│       └── Hero-bg.png             # Imagem de fundo do hero
├── src/
│   ├── pages/
│   │   ├── Home/Home.tsx           # Página inicial
│   │   ├── Catalogo/Catalogo.tsx   # Catálogo com filtros por categoria
│   │   ├── About/About.tsx         # Página institucional
│   │   └── NotFound.tsx            # Página 404
│   ├── components/
│   │   ├── Layout/Layout.tsx       # Wrapper (Header + Outlet + Footer)
│   │   ├── Header/Header.tsx       # Navegação (desktop e mobile)
│   │   ├── Footer/Footer.tsx       # Rodapé
│   │   ├── ProjectCard/            # Card de produto
│   │   ├── ReviewCard/             # Card de avaliação
│   │   ├── Main/ProductModal.tsx   # Modal de detalhes do produto
│   │   ├── ScrollToTop/            # Botão voltar ao topo
│   │   └── ui/                     # Biblioteca shadcn/ui
│   ├── routes/index.tsx            # Configuração de rotas
│   ├── hooks/
│   │   ├── useScrollAnimation.ts   # Animações ao rolar a página
│   │   ├── use-mobile.tsx          # Detecção de breakpoint mobile
│   │   └── use-toast.ts            # Notificações toast
│   ├── lib/utils.ts                # Funções utilitárias
│   ├── App.tsx                     # Componente raiz
│   ├── main.tsx                    # Ponto de entrada
│   └── index.css                   # Estilos globais + variáveis CSS
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Rotas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Hero, prévia de produtos e depoimentos |
| `/catalogo` | Catálogo | Grade completa com filtro por categoria |
| `/sobre` | Sobre | História da empresa e estatísticas |
| `/contato` | Contato | Redireciona para WhatsApp |
| `*` | NotFound | Página 404 |

---

## Funcionalidades

### Catálogo de Produtos
- Filtro por 8 categorias (Panelas, Frigideiras, Caldeirões, etc.)
- Cards com efeito de zoom ao passar o mouse
- Indicador visual de variantes de cor (até 4 swatches + badge `+N`)

### Modal de Produto
- Troca de imagem ao selecionar variante de cor
- Seleção de tamanho (quando disponível)
- Botão de interesse via WhatsApp com mensagem pré-formatada

### Página Inicial
- Hero com imagem de fundo e chamada para ação
- Prévia de 6 produtos em destaque
- 3 depoimentos de clientes

### UX
- Header fixo com efeito glassmorphism ao rolar
- Menu hamburger responsivo
- Animações de entrada (fade-up) usando Intersection Observer
- Botão de scroll to top
- Tema escuro com acento vermelho

---

## Dados dos Produtos

Os produtos são carregados do arquivo estático `public/data/imagens-catalogo.json`.

Estrutura de cada produto:

```json
{
  "id": 1,
  "nome": "Nome do Produto",
  "categoria": "Categoria",
  "imagem": "/images/catalogo/produto.webp",
  "variantes": [
    {
      "cor": "Preto",
      "codigoHex": "#1a1a1a",
      "imagem": "/images/catalogo/produto-preto.webp"
    }
  ]
}
```

Para adicionar ou editar produtos, modifique apenas esse arquivo — não é necessário alterar código.

---

## Como Rodar

### Pré-requisitos

- Node.js 18+
- npm ou Bun

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
# Servidor disponível em http://localhost:8080
```

### Build de Produção

```bash
npm run build
# Saída gerada em dist/
```

### Preview do Build

```bash
npm run preview
```

---

## Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento (porta 8080) |
| `npm run build` | Gera build de produção otimizado |
| `npm run build:dev` | Gera build em modo desenvolvimento |
| `npm run preview` | Serve a pasta `dist/` localmente |
| `npm run lint` | Executa ESLint em todos os arquivos |
| `npm run test` | Executa os testes uma vez |
| `npm run test:watch` | Executa os testes em modo watch |

---

## Configuração

### Alias de Importação

O alias `@/` aponta para `src/`. Exemplo:

```ts
import { Button } from "@/components/ui/button";
```

### Variáveis CSS (Tema)

Definidas em `src/index.css`:

```css
:root {
  --background: 0 0% 5%;       /* Fundo escuro */
  --primary: 0 72% 51%;        /* Vermelho principal */
  --foreground: 0 0% 98%;      /* Texto claro */
}
```

### WhatsApp

O número de contato está em `src/components/Main/ProductModal.tsx` e nos botões CTA. Para alterar:

```ts
const whatsappNumber = "5588933008270"; // DDD + número (sem + ou -)
```

---

## Deploy

O projeto gera um site estático (sem backend). O conteúdo de `dist/` pode ser hospedado em qualquer serviço de hospedagem estática:

- Vercel
- Netlify
- GitHub Pages
- Qualquer servidor web (Nginx, Apache)

---

## Contato

L&L Alumínio — WhatsApp: (88) 93300-8270
