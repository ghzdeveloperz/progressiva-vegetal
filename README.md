# Progressiva Vegetal — Landing Page

Landing page mobile-first em Next.js, React e TypeScript, organizada por design system e seções independentes.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validar antes do commit

```bash
npm run check
```

## Conteúdo

Edite `src/features/product-landing/data/product-content.ts` para alterar textos, preços, ofertas, avaliações e FAQ sem mexer na estrutura visual.



# Milestone 001 — Fundação da Landing Page Progressiva Vegetal

## Funcionalidades

- Landing page responsiva desenvolvida com React, Next.js e TypeScript.
- Hero com banners específicos para desktop e mobile.
- Header sobreposto ao banner e fixo durante a navegação.
- Logo horizontal responsiva.
- Navegação por âncoras para benefícios, avaliações, ofertas e dúvidas.
- Barra de confiança com ícones personalizados.
- Rotação automática dos benefícios da barra no mobile.
- Comunicação destacada de pagamento somente na entrega.
- CTA “Escolher kit” conectado à seção de ofertas.
- CTA “Ver resultados” conectado à seção de avaliações.
- Seções independentes para benefícios, produto, avaliações, ofertas, pagamento e FAQ.

## Melhorias Técnicas

- Arquitetura organizada por feature e por seção.
- Componentes reutilizáveis para botões, containers e títulos.
- Conteúdo comercial separado dos componentes visuais.
- Contratos fortemente tipados com TypeScript.
- Design System centralizado com tokens CSS.
- Integração com Tailwind CSS 4 e CSS Modules.
- Header controlado com `IntersectionObserver`.
- Tratamento defensivo para entradas possivelmente indefinidas.
- Imagens processadas com `next/image`.
- Estrutura preparada para futura integração com backend e checkout.

## Performance

- Server Components utilizados por padrão.
- Client Components restritos às interações necessárias.
- Imagens responsivas com tamanhos declarados.
- Banner específico para dispositivos móveis.
- Carregamento prioritário dos elementos principais do Hero.
- Animações baseadas em `opacity` e `transform`.
- Listener de rotação com limpeza adequada.
- Suporte a `prefers-reduced-motion`.
- Hero limitado à altura visível da tela.
- Dependências externas mantidas no mínimo necessário.

## Refatorações

- Remoção da estrutura duplicada de `app`.
- Centralização do App Router em `src/app`.
- Substituição do avatar textual pela logo oficial.
- Migração da logo circular para uma versão horizontal.
- Remoção do card duplicado do produto no Hero.
- Substituição do card pesado por uma apresentação visual limpa.
- Redução da altura da barra de confiança.
- Compactação do header em desktop e mobile.
- Remoção de CTAs duplicados no mobile.
- Unificação visual dos botões “Escolher kit”.
- Padronização do CTA principal com verde-oliva da identidade visual.

## Correções

- Correção da configuração do Tailwind CSS e PostCSS.
- Correção da duplicidade de arquivos `globals.css`, `layout.tsx` e `page.tsx`.
- Correção dos caminhos de importação dos tokens e estilos.
- Correção do corte da logo no header.
- Correção do tamanho excessivo da logo no mobile.
- Correção do posicionamento do header durante o scroll.
- Correção da transição visual do fundo do header.
- Correção do erro TypeScript `entry is possibly undefined`.
- Correção da exibição simultânea dos itens da barra de confiança no mobile.
- Correção da altura excessiva do Hero.
- Correção da inconsistência visual entre os CTAs.
