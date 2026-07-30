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


# Milestone 002 — Prova Social com Avaliações em Vídeo

## Funcionalidades

- Nova seção de resultados posicionada logo após o Hero.
- Remoção completa da antiga seção de benefícios.
- Carrossel horizontal com cinco avaliações em vídeo.
- Navegação por botões anterior e próximo.
- Indicadores visuais de posição do carrossel.
- Suporte a swipe e scroll horizontal no mobile.
- Vídeos verticais preparados no formato 9:16.
- Exibição de nome, cidade, avaliação e relato de cada cliente.
- Selo visual de “Avaliação verificada”.
- Ícone SVG personalizado no selo de verificação.
- Pausa automática dos outros vídeos ao iniciar uma nova reprodução.
- Fallback visual para vídeos ainda não cadastrados.
- Link “Ver resultados” direcionado diretamente à prova social.
- Navegação do header atualizada com acesso à seção de resultados.

## Melhorias Técnicas

- Extensão do contrato `Testimonial` com suporte a vídeo, poster, cliente e localização.
- Conteúdo das avaliações centralizado em `product-content.ts`.
- Carrossel desenvolvido sem bibliotecas externas.
- Controle de vídeos através de referências tipadas.
- Uso de `requestAnimationFrame` para atualizar o índice do carrossel durante o scroll.
- Tratamento seguro para elementos inexistentes.
- Navegação acessível com botões e labels descritivos.
- Estrutura preparada para adicionar ou remover avaliações sem alterar o componente.
- Separação entre conteúdo comercial, comportamento e apresentação visual.

## Performance

- Vídeos configurados com `preload="metadata"`.
- Reprodução automática desabilitada.
- Apenas um vídeo reproduzido por vez.
- Posters em formato WebP.
- Scroll horizontal nativo com `scroll-snap`.
- Ausência de dependências adicionais para o carrossel.
- Animações restritas a `opacity`, `transform` e propriedades leves.
- Suporte a `prefers-reduced-motion`.
- Atualização do índice limitada por `requestAnimationFrame`.
- Estrutura preparada para vídeos MP4 H.264 otimizados.

## Refatorações

- Substituição da seção de benefícios pela seção de resultados.
- Reorganização da ordem das seções da landing page.
- Atualização da navegação principal do header.
- Aplicação da fonte Georgia no título principal da prova social.
- Padronização visual dos títulos dos cards de avaliação.
- Substituição de textos provisórios por títulos e descrições comerciais.
- Ampliação do carrossel para cinco clientes.
- Organização dos vídeos em `public/videos/testimonials`.
- Organização dos posters em `public/images/testimonials`.
- Organização do ícone verificado em `public/icons/verified`.

## Correções

- Correção do caminho do ícone `verifed.svg`.
- Correção da renderização do ícone de avaliação verificada.
- Correção do estado ativo dos indicadores do carrossel.
- Correção da pausa entre diferentes vídeos.
- Correção da tipagem das referências dos vídeos.
- Correção do cálculo do card central durante o scroll.
- Correção da responsividade dos cards no mobile.
- Correção de textos provisórios e instruções internas exibidas ao usuário.


# Milestone 003 — Apresentação Interativa do Produto

## Funcionalidades

- Reformulação completa da seção “Conheça o produto”.
- Exibição de três imagens de mockup do produto.
- Alternância automática entre os mockups.
- Exibição de apenas uma imagem por vez.
- Transição suave com efeito de fade-in e fade-out.
- Imagens ocupando todo o card, de borda a borda.
- Remoção dos indicadores visuais inferiores do carrossel.
- Destaque visual para embalagem de 500 ml.
- Exibição dos principais diferenciais do produto.
- Inclusão de informações sobre uso profissional.
- Inclusão de informação sobre pagamento na entrega.
- Botão para escolha do kit.
- Link para a seção de dúvidas.
- Link textual para consulta das instruções do rótulo.
- Modal para visualização do PDF oficial do rótulo.
- Abertura alternativa do PDF em uma nova aba.
- Fechamento do modal por botão, clique externo e tecla Escape.
- Produto exibido antes do conteúdo textual no mobile.

## Melhorias Técnicas

- Separação do slideshow em um Client Component dedicado.
- Manutenção da seção principal como Server Component.
- Uso de `next/image` com preenchimento responsivo.
- Controle automático das imagens com `setInterval`.
- Limpeza segura do intervalo ao desmontar o componente.
- Isolamento do modal de PDF em componente reutilizável.
- Renderização do modal através de portal.
- Bloqueio do scroll da página durante a abertura do modal.
- Restauração do foco no botão acionador após o fechamento.
- Suporte ao fechamento do modal pela tecla Escape.
- Uso de atributos ARIA para slideshow, modal e controles.
- Organização dos documentos públicos em `public/documents`.
- Organização dos mockups em `public/images/products`.

## Performance

- Primeira imagem carregada com prioridade.
- Imagens seguintes carregadas sob demanda.
- Uso de `sizes` para geração responsiva das imagens.
- Ausência de bibliotecas externas para o slideshow.
- Transições baseadas apenas em `opacity` e `transform`.
- Carregamento do PDF somente ao abrir o modal.
- Uso de iframe isolado para a visualização do documento.
- Redução de animações para usuários com `prefers-reduced-motion`.
- Remoção dos controles e indicadores desnecessários.
- Reutilização do mesmo espaço visual para os três mockups.

## Refatorações

- Substituição da imagem única por slideshow automático.
- Remoção da composição antiga com três produtos sobrepostos.
- Remoção das classes `.mockup`, `.left`, `.center` e `.right`.
- Remoção dos indicadores e barras inferiores do slideshow.
- Remoção do padding interno aplicado às imagens.
- Substituição do texto provisório por conteúdo comercial.
- Reorganização do layout responsivo da seção.
- Ajuste do tamanho do card para melhor equilíbrio visual.
- Aplicação de imagem em modo `cover`.
- Centralização das informações do rótulo em uma constante.
- Separação entre apresentação do produto, modal e conteúdo da seção.

## Correções

- Correção da ordem da imagem e do conteúdo no mobile.
- Correção do card excessivamente alto no desktop.
- Correção das imagens que não ocupavam todo o card.
- Correção das margens internas ao redor dos mockups.
- Correção da exibição simultânea dos três produtos.
- Correção da navegação inferior indesejada.
- Correção do overflow visual do card.
- Correção do foco após o fechamento do modal.
- Correção do bloqueio de rolagem durante a visualização do PDF.
- Correção da responsividade da seção em notebooks e dispositivos móveis.
# Milestone 004 — Ofertas e Checkout Seguro

## Funcionalidades

- Criação de uma seção exclusiva para comparação dos kits disponíveis.
- Exibição das opções com uma, duas e três unidades.
- Aplicação dos valores oficiais de R$198,00, R$247,00 e R$398,00.
- Destaque visual do kit com duas unidades como principal recomendação.
- Exibição de preço original e economia nos kits promocionais.
- Inclusão de benefícios específicos para cada opção.
- Botões de compra conectados às respectivas rotas de checkout.
- Navegação interna para checkout através de identificadores controlados.
- Seção responsiva para desktop, tablet e dispositivos móveis.
- Aplicação de título principal em fonte Georgia.
- Inclusão de descrição comercial profissional para orientação da escolha.
- Card central ampliado em relação às demais opções.
- Aplicação de aura clara em diagonal atrás do card principal.
- Inclusão de sombra escura inferior para reforçar a profundidade visual.
- Remoção de emojis e elementos visuais informais.

## Melhorias Técnicas

- Extensão do tipo `Offer` com `checkoutKey`, `eyebrow` e `savingsLabel`.
- Centralização dos dados de preço e conteúdo das ofertas.
- Criação de rota interna para redirecionamento seguro ao checkout.
- Validação de identificadores de oferta no backend.
- Redirecionamento de ofertas inválidas para a seção de kits.
- Aplicação de `Cache-Control: no-store` na rota de checkout.
- Remoção dos links externos diretos dos componentes visuais.
- Desativação de prefetch nos links de compra.
- Separação entre regras de checkout, conteúdo comercial e apresentação.
- Uso de atributos semânticos e identificação acessível da seção.
- Estrutura preparada para logs, analytics e regras adicionais de validação.

## Performance

- Ausência de bibliotecas externas para renderização dos cards.
- Layout construído integralmente com CSS Grid.
- Uso de gradientes e sombras sem carregamento de assets adicionais.
- Transições restritas ao botão de compra.
- Compatibilidade com `prefers-reduced-motion`.
- Redução de espaçamentos e dimensões excessivas nos cards.
- Uso de efeitos visuais estáticos para evitar animações desnecessárias.
- Manutenção do frontend sem processamento de regras de checkout.
- Redirecionamento executado diretamente pelo backend do Next.js.

## Refatorações

- Substituição da seção genérica de ofertas por uma composição comercial própria.
- Remoção do componente genérico `SectionHeading` nesta seção.
- Criação de título e descrição específicos para controle tipográfico.
- Aplicação direta da fonte Georgia ao título principal.
- Reorganização da hierarquia de título, quantidade, preço e benefícios.
- Redução da altura vertical dos cards.
- Ajuste da escala do card central.
- Criação das classes `cardInner`, `featuredAura` e variações dos botões.
- Separação entre card padrão e card destacado.
- Padronização dos textos de quantidade.
- Reorganização do conteúdo responsivo em coluna única no mobile.

## Correções

- Correção dos preços exibidos para corresponder aos links oficiais.
- Correção do link de compra de cada kit.
- Correção da exposição direta dos links externos no componente.
- Correção do excesso de altura dos cards.
- Correção da falta de destaque visual do card central.
- Correção da aura pouco visível atrás da oferta principal.
- Correção da sombra inferior com aplicação de tom preto.
- Correção da tipografia do título principal da seção.
- Correção de textos provisórios e pouco comerciais.
- Correção da escala dos cards laterais.
- Correção da disposição da seção em telas menores.


# Milestone 005 — Prova Social em Áudio

## Funcionalidades

- Substituição do bloco informativo final por um card de prova social em áudio.
- Inclusão de depoimento real em formato MP3.
- Reprodução e pausa do áudio através de controle personalizado.
- Exibição do tempo atual e da duração total.
- Navegação pelo áudio através da faixa sonora.
- Representação visual da forma de onda inspirada em mensagens de voz.
- Destaque progressivo das barras conforme o áudio é reproduzido.
- Inclusão de foto da cliente.
- Inclusão de nome fictício para apresentação do depoimento.
- Layout compacto para reduzir a altura total do card.
- Player responsivo para desktop e dispositivos móveis.
- Alinhamento horizontal entre botão de reprodução e faixa sonora no mobile.

## Melhorias Técnicas

- Criação de componente dedicado para prova social em áudio.
- Isolamento do player como Client Component.
- Uso da API nativa de áudio do navegador.
- Controle de reprodução através de `HTMLAudioElement`.
- Sincronização do progresso com o evento `timeupdate`.
- Leitura automática da duração através de `loadedmetadata`.
- Tratamento do término do áudio com o evento `ended`.
- Limpeza dos event listeners ao desmontar o componente.
- Navegação manual pela faixa sonora com cálculo proporcional.
- Formatação segura de minutos e segundos.
- Uso de referências tipadas para áudio e faixa interativa.
- Uso de atributos acessíveis nos controles de reprodução.

## Performance

- Áudio configurado com `preload="metadata"`.
- Ausência de bibliotecas externas para reprodução e waveform.
- Forma de onda construída apenas com CSS e elementos leves.
- Imagem da cliente otimizada com `next/image`.
- Carregamento responsivo da foto.
- Atualização de estado limitada aos eventos nativos do áudio.
- Transições aplicadas somente em propriedades leves.
- Suporte a `prefers-reduced-motion`.
- Redução de conteúdo textual para diminuir a altura do componente.

## Refatorações

- Remoção do antigo card “Nenhum pagamento antecipado”.
- Remoção do botão “Consultar dúvidas” desse bloco.
- Substituição do conteúdo institucional por prova social.
- Criação da pasta `audio-social-proof-card`.
- Organização do áudio em `public/audios`.
- Organização da imagem em `public/images/social-proof`.
- Remoção do rótulo “Prova social em áudio”.
- Remoção do título genérico “Relato de cliente”.
- Remoção da descrição extensa da cliente.
- Simplificação do cabeçalho para foto e nome.
- Reorganização do player para grid responsivo.
- Redução dos paddings e espaçamentos internos.

## Correções

- Correção do desalinhamento entre botão de reprodução e faixa sonora no mobile.
- Correção da quebra do player em duas linhas.
- Correção do excesso de altura do card.
- Correção do espaçamento entre identidade e áudio.
- Correção da largura da faixa sonora em telas pequenas.
- Correção do avanço manual no áudio.
- Correção do estado de reprodução ao finalizar o áudio.
- Correção da exibição da duração antes do carregamento dos metadados.
- Correção do foco visível nos controles.
- Correção da responsividade da foto e do nome da cliente.


# Milestone 006 — FAQ Interativo e Acessível

## Funcionalidades

- Reformulação completa da seção de dúvidas frequentes.
- Substituição dos accordions nativos por controles interativos em React.
- Abertura de uma pergunta por vez.
- Possibilidade de fechar a pergunta atualmente aberta.
- Primeira pergunta aberta automaticamente ao carregar a seção.
- Animação suave ao abrir e fechar as respostas.
- Transição visual do ícone entre os estados de abrir e fechar.
- Inclusão de título e descrição comerciais para orientar o cliente.
- Organização das dúvidas sobre produto, aplicação, entrega e pagamento.
- Layout responsivo para desktop, tablet e dispositivos móveis.
- Aplicação da fonte Georgia nos títulos e perguntas.

## Melhorias Técnicas

- Conversão da seção de FAQ em Client Component.
- Controle centralizado do item aberto com `useState`.
- Associação acessível entre botão e resposta com `aria-controls`.
- Informação do estado atual através de `aria-expanded`.
- Aplicação de `role="region"` nos painéis de resposta.
- Identificadores únicos para botões e painéis.
- Navegação completa por teclado.
- Inclusão de estado de foco visível nos botões.
- Estrutura preparada para adicionar ou remover perguntas pelo conteúdo.
- Remoção da dependência do comportamento nativo de `<details>` para animações.

## Performance

- Animação feita apenas com CSS.
- Uso de `grid-template-rows` para expansão sem cálculo manual de altura.
- Ausência de bibliotecas externas para o accordion.
- Renderização contínua e leve das respostas.
- Transições restritas à resposta e ao ícone.
- Suporte a `prefers-reduced-motion`.
- Uso de estado único para controlar toda a lista.
- Layout construído com CSS Grid responsivo.

## Refatorações

- Remoção do componente genérico `SectionHeading` da seção.
- Criação de cabeçalho exclusivo para o FAQ.
- Substituição da descrição técnica sobre HTML por conteúdo comercial.
- Substituição dos elementos `<details>` e `<summary>` por botões acessíveis.
- Separação visual entre perguntas através de linhas discretas.
- Criação de botão circular para expansão e recolhimento.
- Remoção do posicionamento `sticky` do título lateral.
- Simplificação do fundo e dos elementos decorativos.
- Aplicação de tipografia editorial e espaçamento premium.
- Reorganização do layout para coluna única em telas menores.

## Correções

- Correção do movimento do título ao abrir e fechar perguntas.
- Correção do salto causado pelo posicionamento `sticky`.
- Correção do reposicionamento automático provocado pelo scroll anchoring.
- Aplicação de `overflow-anchor: none` nos elementos relevantes.
- Correção da animação brusca no fechamento das respostas.
- Correção do desaparecimento imediato do conteúdo.
- Correção do alinhamento dos botões em telas pequenas.
- Correção do espaçamento interno das respostas no mobile.
- Correção das margens padrão dos títulos e parágrafos.
- Correção do comportamento para usuários com redução de movimento.
# Milestone 007 — CTA Final e Rodapé Institucional

## Funcionalidades

- Reformulação completa da seção final da landing page.
- Criação de CTA final com direcionamento para a seção de ofertas.
- Inclusão de título comercial em fonte Georgia.
- Inclusão de descrição objetiva para orientar a escolha do kit.
- Criação de rodapé institucional com identidade visual da Havana.
- Inclusão de descrição resumida do produto no rodapé.
- Inclusão de navegação interna para produto, resultados, ofertas, pagamento e dúvidas.
- Inclusão de informações de atendimento e cobertura.
- Exibição automática do ano atual no copyright.
- Inclusão de link da marca para retorno ao início da página.
- Substituição do selo textual pelo ícone SVG verificado.
- Estrutura responsiva para desktop, tablet e mobile.

## Melhorias Técnicas

- Separação entre CTA final e rodapé institucional.
- Uso de `next/link` para navegação interna.
- Uso de `next/image` para renderização otimizada do ícone.
- Uso de constantes tipadas para os links de navegação.
- Aplicação de elementos semânticos como `footer` e `nav`.
- Inclusão de labels acessíveis nas áreas de navegação.
- Uso de ano dinâmico com `new Date().getFullYear()`.
- Organização do layout com CSS Grid e Flexbox.
- Preparação do código para futura implementação de páginas legais.

## Performance

- Ausência de bibliotecas externas.
- Ícone carregado como SVG otimizado.
- Layout baseado em CSS nativo.
- Transições aplicadas apenas nos links interativos.
- Suporte a `prefers-reduced-motion`.
- Uso de estrutura responsiva sem cálculos em JavaScript.
- Reutilização dos tokens visuais existentes no projeto.

## Refatorações

- Remoção do antigo rodapé escuro.
- Remoção dos textos provisórios de CNPJ e atendimento.
- Remoção da mensagem técnica sobre checkout futuro.
- Substituição do antigo símbolo com a letra “Y”.
- Aplicação do ícone `verifed.svg` na assinatura da marca.
- Reorganização das colunas de marca, navegação e atendimento.
- Simplificação da área inferior do rodapé.
- Remoção temporária dos links de políticas da interface.
- Manutenção comentada das políticas para ajuste futuro.
- Aplicação de tipografia Georgia na marca e no CTA final.

## Correções

- Correção de informações provisórias exibidas no rodapé.
- Correção da inconsistência visual entre o rodapé e o restante da landing page.
- Correção do alinhamento das colunas em telas menores.
- Correção do espaçamento entre marca, navegação e atendimento.
- Correção da ausência de navegação interna no rodapé.
- Correção da exibição das políticas antes de sua implementação.
- Correção do selo visual da marca.
- Correção da responsividade do CTA final.
- Correção do alinhamento do copyright no mobile.

# Milestone 008 — Vídeos Inteligentes na Prova Social

## Funcionalidades

- Reprodução automática do vídeo em destaque ao entrar na seção de avaliações.
- Pausa automática dos vídeos ao sair da área visível da seção.
- Reprodução de apenas um vídeo por vez.
- Troca automática do vídeo ativo conforme a navegação pelo carrossel.
- Inclusão de botão para ativar e desativar o som.
- Reprodução automática iniciada sem áudio para compatibilidade com navegadores.
- Exibição de poster antes do início da reprodução.
- Reprodução contínua em loop do vídeo ativo.
- Manutenção da navegação manual entre avaliações.
- Redução da altura dos vídeos em dispositivos móveis.
- Destaque visual do card atualmente ativo.
- Manutenção dos dados de cliente, localização e avaliação verificada.

## Melhorias Técnicas

- Inclusão de `IntersectionObserver` para detectar a visibilidade da seção.
- Pausa centralizada de todos os vídeos ao sair da viewport.
- Controle das instâncias de vídeo através de `Map` tipado.
- Gerenciamento do vídeo ativo com base no índice central do carrossel.
- Uso de `requestAnimationFrame` para limitar atualizações durante o scroll.
- Controle individual do estado de áudio dos vídeos.
- Tratamento seguro de bloqueios de autoplay.
- Limpeza do observer, eventos e vídeos ao desmontar o componente.
- Manutenção de `playsInline` para reprodução adequada no mobile.
- Uso de `preload="metadata"` para reduzir carregamento inicial.
- Desativação do prefetch e de comportamentos desnecessários no fluxo visual.

## Performance

- Reprodução limitada ao vídeo central.
- Pausa imediata dos vídeos fora da seção.
- Carregamento inicial apenas dos metadados.
- Uso de posters em WebP para evitar telas pretas.
- Redução das dimensões dos cards no mobile.
- Transições baseadas apenas em `opacity`, `transform` e `box-shadow`.
- Ausência de bibliotecas externas para autoplay e detecção de visibilidade.
- Atualização do índice do carrossel limitada por frame.
- Suporte a `prefers-reduced-motion`.
- Redução do consumo de CPU e bateria fora da viewport.

## Refatorações

- Substituição dos controles nativos permanentes por uma experiência visual mais limpa.
- Inclusão de botão contextual para controle de som.
- Criação do estado `isSectionVisible`.
- Criação do estado `unmutedVideoId`.
- Separação das responsabilidades de pausar, reproduzir e identificar o vídeo ativo.
- Ajuste da proporção e altura da mídia nos cards.
- Redução dos paddings do conteúdo no mobile.
- Aplicação de alinhamento central no `scroll-snap`.
- Inclusão da classe visual para card ativo.
- Reorganização dos breakpoints da seção de avaliações.

## Correções

- Correção da tela preta exibida antes da reprodução.
- Correção do excesso de altura dos vídeos no mobile.
- Correção da reprodução simultânea de múltiplos vídeos.
- Correção de vídeos continuando ativos após sair da seção.
- Correção da reprodução automática com áudio bloqueada pelo navegador.
- Correção da troca de vídeo ao navegar pelo carrossel.
- Correção do carregamento visual sem poster.
- Correção do alinhamento e tamanho dos cards em telas menores.
- Correção do destaque insuficiente do vídeo central.
- Correção do consumo desnecessário de recursos fora da área visível.


# Milestone 009 - Apenas adicionei o favicon


# Milestone 010 — Carrossel Mobile de Ofertas

## Funcionalidades

- Conversão da seção de ofertas em carrossel horizontal no mobile.
- Exibição dos três kits em navegação por arraste.
- Centralização automática do kit com duas unidades.
- Inclusão de seletores superiores para uma, duas e três unidades.
- Navegação direta para cada card ao tocar no seletor correspondente.
- Sincronização entre seletor ativo e card central do carrossel.
- Atualização automática do seletor ao arrastar manualmente os cards.
- Destaque visual permanente do kit com duas unidades.
- Inclusão de badges em formato de tiara no topo dos cards.
- Aplicação de animação 2D no card principal.
- Inclusão de aura pulsante atrás da oferta destacada.
- Inclusão de brilho diagonal atravessando o card principal.
- Inclusão de contorno animado ao redor do card destacado.
- Redução das dimensões dos cards em dispositivos móveis.
- Manutenção do layout em três colunas no desktop.

## Melhorias Técnicas

- Conversão da seção de ofertas em Client Component.
- Controle do card ativo através de `useState`.
- Uso de referências para controle programático do carrossel.
- Identificação automática do card mais próximo ao centro.
- Uso de `requestAnimationFrame` durante o evento de rolagem.
- Inclusão de controle para diferenciar scroll manual e programático.
- Bloqueio temporário das atualizações intermediárias durante a navegação.
- Tratamento do evento `scrollend`.
- Cancelamento da navegação programática ao iniciar arraste manual.
- Limpeza segura de timeouts e frames ao desmontar o componente.
- Normalização dos índices antes da navegação.
- Manutenção dos links de checkout pela rota interna segura.

## Performance

- Carrossel implementado sem bibliotecas externas.
- Uso de scroll nativo com `scroll-snap`.
- Atualizações de estado limitadas por frame.
- Transições restritas a transformações, opacidade e sombras.
- Animação aplicada apenas ao card principal.
- Cards laterais renderizados com menor escala e opacidade.
- Uso de `overscroll-behavior-inline` para melhorar a navegação.
- Ocultação da barra de rolagem sem bloquear o scroll.
- Suporte a `prefers-reduced-motion`.
- Preservação do layout estático no desktop.

## Refatorações

- Substituição do grid vertical mobile por carrossel horizontal.
- Criação dos estados `activeIndex` e controle de rolagem programática.
- Criação das funções `scrollToOffer` e `updateActiveCardFromScroll`.
- Criação dos seletores mobile de quantidade.
- Remoção dos antigos indicadores inferiores.
- Reorganização das badges para fora do conteúdo interno.
- Transformação das badges em tiaras flutuantes.
- Separação entre aura, contorno e brilho do card principal.
- Redução de paddings, tipografia e altura dos cards mobile.
- Aplicação de estilos específicos para o seletor ativo.
- Simplificação da hierarquia visual dos cards laterais.

## Correções

- Correção do kit inicial exibido no mobile.
- Correção do card principal que não permanecia centralizado.
- Correção do texto escuro no seletor ativo.
- Correção da perda da cor branca após trocar de opção.
- Correção do piscar do fundo durante a rolagem programática.
- Correção da troca momentânea entre seletores intermediários.
- Correção do excesso de altura dos cards em telas pequenas.
- Correção do excesso de escala do card principal.
- Correção do alinhamento das badges no topo dos cards.
- Correção do estado ativo durante o arraste manual.
- Correção da sincronização entre seletor e carrossel.
