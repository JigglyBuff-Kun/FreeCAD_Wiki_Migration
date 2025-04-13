---
title: Criando uma peça simples com as bancadas Draft e Part
---

|                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tutorial                                                                                                                                                                                                                                                                                  |
| Topic                                                                                                                                                                                                                                                                                     |
| Modeling                                                                                                                                                                                                                                                                                  |
| Level                                                                                                                                                                                                                                                                                     |
| Beginner                                                                                                                                                                                                                                                                                  |
| Time to complete                                                                                                                                                                                                                                                                          |
| 1.5 hours                                                                                                                                                                                                                                                                                 |
| Authors                                                                                                                                                                                                                                                                                   |
| heda                                                                                                                                                                                                                                                                                      |
| FreeCAD version                                                                                                                                                                                                                                                                           |
| 0.19 or above                                                                                                                                                                                                                                                                             |
| Example files                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                           |
| See also                                                                                                                                                                                                                                                                                  |
| [Criando uma peça simples com a bancada Part](/Creating_a_simple_part_with_Part_WB/pt-br "Creating a simple part with Part WB/pt-br"), [Criando uma peça simples com a bancada Part Design](/Creating_a_simple_part_with_PartDesign/pt-br "Creating a simple part with PartDesign/pt-br") |
|                                                                                                                                                                                                                                                                                           |

## Introdução

Este tutorial pretende ser usado como uma primeira introdução à bancada [Draft](/Draft_Workbench "Draft Workbench") ![](/images/Switch_DraftWorkbench.JPG) no FreeCAD. O tutorial usa uma _forma 2D_ para criar um _sólido 3D_, o último é realizado através da bancada [Part](/Part_Workbench "Part Workbench"). Recomenda-se que o leitor trabalhe primeiro com o tutorial irmão _[Criando uma peça simples com a bancada Part](/Creating_a_simple_part_with_Part_WB/pt-br "Creating a simple part with Part WB/pt-br")_, que cria o mesmo modelo com uma técnica diferente e ao mesmo tempo cobre mais do básico da interface de usuário do FreeCAD. Este tutorial espera que o usuário esteja brevemente familiarizado com a interface do usuário e alguns fluxos de trabalho disponíveis no FreeCAD. O objetivo do tutorial não é necessariamente mostrar a forma mais eficiente de usar o programa, mas sim conscientizar o leitor sobre as diferentes funcionalidades disponíveis no FreeCAD, como utilizá-las e onde encontrá-las.

### O que o tutorial aborda

- O modelo a ser feito
- Criando o perfil 2D
- Por que a extrusão pode falhar
- Fazendo a extrusão do perfil
- Criando o buraco vazado
- Fazendo um esboço do perfil 2D
- Qualidade de modelos
- Finalizando

## O modelo a ser feito

![](/images/GGTuto1_Vue.PNG)

![](/images/T101pwb01-02_dims.png)

## Criando o perfil 2D

Crie um novo documento e salve-o diretamente com um novo nome. Altere a visualização para ![](/images/Std_ViewTop.svg) [Topo](/Std_ViewTop "Std ViewTop") e alterne para a visualização ![](/images/Workbench_Draft.svg) [Bancada Draft](/Draft_Workbench/pt-br "Draft Workbench/pt-br"). Sua tela deve ficar como abaixo. Se a grade não aparecer, ative/desative-a com ![](/images/Draft_ToggleGrid.svg) [Ligar/desligar grade](/Draft_ToggleGrid/pt-br "Draft ToggleGrid/pt-br").

![](/images/T101dwb01-01draftgrid.png)

Para iniciar o perfil, desenhe um ![](/images/Draft_Rectangle.svg) [Retângulo](/Draft_Rectangle/pt-br "Draft Rectangle/pt-br") aleatório no plano xy clicando em 2 pontos na [Visualização 3D](/3D_view/pt-br "3D view/pt-br") formando qualquer diagonal de um retângulo. Uma aba de _Dados_ se abrirá assim que o retângulo for traçado. Desta vez não vamos usá-la, mas é claro que você pode inserir as coordenadas do retângulo diretamente. Sua visualização 3D agora deve ter um retângulo desenhado, semelhante à imagem abaixo.

![](/images/T101dwb01-02rectangleraw.png)

Ao trabalhar na bancada **Draft** quase sempre se desenha em um plano 2D. Esse plano 2D é chamado de _[Plano de trabalho](/Draft_SelectPlane/pt-br "Draft SelectPlane/pt-br")_ e, se as configurações padrão forem usadas, ele sempre se alinhará automaticamente à visão 3D atual. Portanto, até que o perfil 2D seja concluído, é melhor simplesmente manter a visualização _Topo_ (posição da câmera) e não brincar com a rotação da visualização. Se por acaso você o alterou, basta voltar para a visualização _Topo_ antes de iniciar qualquer novo comando na bancada **Draft**.

A vista lateral do nosso modelo final tem o contorno externo de 100 x 50 mm, e seria bom se o canto inferior esquerdo fosse colocado na posição zero global. Isso pode ser feito através das _Propriedades_. Certifique-se de que o objeto **Rectangle** criado está selecionado na árvore e, em seguida, altere a _Posição_ do retângulo para **(0, 0, 0)**, modifique a _Altura_ (Height) para **50**mm e o _Comprimento_ (Lenght) para **100**mm conforme as imagens abaixo.

![](/images/T101dwb01-03rectangleprops.png)

O **Rectangle** está finalizado e deve ficar assim depois de aplicar ![](/images/Std_ViewFitAll.svg) [Enquadrar tudo](/Std_ViewFitAll "Std ViewFitAll") na visualização.

![](/images/T101dwb01-04rectangledone.png)

Em seguida, vamos dividir o retângulo em suas quatro bordas, isso é feito selecionando primeiro o **Rectangle** e então o comando ![](/images/Draft_Downgrade.svg) [Regredir](/Draft_Downgrade/pt-br "Draft Downgrade/pt-br") (ou rebaixar), a face preenchida desaparecerá e o objeto na árvore agora é um **Wire** (arame) ao invés de um **Rectangle**, mostrado na figura abaixo à esquerda. Usar **Regredir** mais uma vez quebrará o _Wire_ em suas _bordas_ (edges), mostradas na figura do meio abaixo.

![](/images/T101dwb01-05rectangledowngrade.png)

Quem for observador notará que o ícone do objeto na árvore já mudou do _Wire_ para uma _caixa azul_. Esta caixa azul é o ícone usado para objetos geométricos genéricos (objetos geométricos da bancada Part mais especificamente, mas isso é para leitores avançados). Selecione a borda vertical esquerda e clique em ![](/images/Draft_Upgrade.svg) [Promover](/Draft_Upgrade "Draft Upgrade"). O objeto _Edge_ agora terá um ícone diferente e mudou o nome para **Line**. Agora é um objeto da bancada **Draft** onde se pode editar, por exemplo, o _ponto inicial_ (Start) e o _ponto final_ (End) na aba _Propriedades_. Isso não é possível com o _objetos de borda_.

### Criando o arredondamento (Filete)

Comece selecionando as laterais superior e direita. Use o menu **Editar → Caixa de seleção\*- ![](/images/Std_BoxSelection.svg) [Seleção de caixa](/Std_BoxSelection/pt-br "Std BoxSelection/pt-br"), clique no ![](/images/Mouse_LMB.svg) **botão esquerdo do mouse\**, arraste da direita pra esquerda, passando a caixa de seleção sobre as laterais e solte-o. Ao arrastar *da direita para a esquerda*, a seleção resultante inclui tudo total ou parcialmente dentro da área de seleção. Se arrastar *da esquerda para a direita\*, apenas os objetos totalmente incluídos na área de seleção serão incluídos na seleção resultante. A seleção propriamente dita acontece quando o botão esquerdo do mouse é solto, não sendo mostrada previsão do que será selecionado.

![](/images/T101dwb02-01filletboxselection.png)

Com as bordas do canto superior direito selecionadas, dê o comando ![](/images/Draft_Fillet.svg) [Filete](/Draft_Fillet/pt-br "Draft Fillet/pt-br") na bancada **Draft**. Marque _Excluir objetos originais_, altere o _raio_ para 20mm e pressione enter.

![](/images/T101dwb02-02fillettaskpanel.png)

O objeto **Fillet** é criado e seu modelo agora deve ficar como abaixo.

![](/images/T101dwb02-03filletdone.png)

### Criando o chanfro

Para fazer o _chanfro_ precisamos ter uma linha com a inclinação correta e também saber posicioná-la corretamente. Comecemos pela posição, que está na coordenada _(50, 50, 0)_. No perfil atual não temos um ponto lá, então vamos criar um fazendo uma _linha de ajuda temporária_. Primeiro selecione a **Linha** vertical esquerda, então crie a linha de ajuda com ![](/images/Std_DuplicateSelection.svg) [Duplicar seleção](/Std_DuplicateSelection "Std DuplicateSelection") em **Editar → Duplicar seleção**, **Line001** é criada. Use as _Propriedades_ e mova **Line001** 50 mm na direção x usando a propriedade _Placement_. Em seguida, duplique a _borda horizontal inferior_, e altere o _ângulo_ da aresta para 30 graus, mais uma vez usando a propriedade _Placement_. O modelo agora deve se parecer com a imagem abaixo.

![](/images/T101dwb03-01chamferhelp.png)

Em seguida, mova a _linha inclinada_ para a posição. Para isso, usamos ![](/images/Draft_Move.svg) [Draft Move](/Draft_Move/pt-br "Draft Move/pt-br") juntamente com a funcionalidade _snap_ na bancada **Draft**, mais especificamente "ponto final" (Adquirir ponto final). Primeiro, certifique-se de que sua barra de ferramentas de encaixe seja semelhante à abaixo.

![](/images/T101pwb03-02_snap.png)

Em seguida, selecione a linha inclinada, **Edge001**, pressione **Mover** e um painel _Tarefas_ se abrirá.

![](/images/T101dwb03-03_movetaskpanel.png)

Certifique-se de que _Copiar_ esteja desmarcado. Passe o mouse sobre o _quarto superior_ da _linha inclinada_, uma vez que o _ponto branco_ é exibido no ponto certo e o símbolo do _ponto final_ aparece, clique no botão [24px](/index.php?title=Imagem:Mouse_LMB.svg&action=edit&redlink=1 "Imagem:Mouse LMB.svg (page does not exist)") esquerdo do mouse. Mova o mouse para o quarto superior da linha auxiliar, assim que o ponto branco e o símbolo do ponto final aparecerem, clique no botão esquerdo do mouse. A sequência é ilustrada abaixo.

![](/images/T101dwb03-04_moveline.png)

A linha agora está na posição correta, mas é muito longa. Para ajustar o comprimento ![](/images/Draft_Trimex.svg) [Trimex](/Draft_Trimex/pt-br "Draft Trimex/pt-br") será usado. Selecione a _linha inclinada_, **Edge001**, pressione Trimex e depois clique na parte inferior da _linha vertical mais à esquerda_, **Line**, para usá-la como a aresta de corte. A projeção do ponto onde a aresta de corte é selecionada na aresta a ser cortada, determina o resultado. Se você selecionar a linha vertical mais à esquerda perto de sua extremidade superior, a parte errada da linha angular será aparada. A imagem abaixo mostra o comando **Trim**, a linha vertical pré-selecionada e o cursor pairando sobre o lado errado dessa linha. Se você olhar com atenção, poderá ver a visualização do resultado.

![](/images/T101dwb03-05_trimline.png)

Apare também a linha vertical mais à esquerda para formar o canto inferior do chanfro. Selecione a _linha inclinada_, **Edge001**, perto de seu ponto final superior direito para obter um resultado correto. Se você cometer um erro ao aparar, basta usar ![](/images/Std_Undo.svg) [Undo](/Std_Undo "Std Undo") e ![](/images/Std_Refresh.svg) [Refresh](/Std_Refresh "Std Refresh") (o último geralmente chamado _atualizar_) e tente novamente.

![](/images/T101dwb03-06_chamferlowercornerdone.png)

Para aparar a _linha superior_, o **Fillet** precisa ser _Rebaixado_ para que a linha superior seja seu próprio objeto na visualização em árvore. Se você tentar apará-lo sem primeiro ter feito o rebaixamento, a função de aparo tentará aparar o arco no filete. Como a borda de corte, a _linha vertical do meio_, é perpendicular à borda a ser cortada, você não pode controlar o resultado do corte escolhendo um ponto correto na borda de corte. Aqui você precisa inverter a solução padrão mantendo pressionada a tecla Alt enquanto seleciona a aresta de corte.

O perfil está pronto e mostrado abaixo com as bordas organizadas em um ![](/images/Std_Group.svg) [Grupo](/Std_Group/pt-br "Std Group/pt-br") chamado **Profile** (ou _rotulado_ para ser preciso no jargão do FreeCAD), juntamente com a linha de ajuda excluída. Os grupos podem ser usados para organizar os recursos em seus _documentos FreeCAD_, seu uso é semelhante a uma estrutura de pastas no sistema de arquivos de um computador. Para mover itens para dentro e para fora do grupo, basta _arrastar e soltar_ na árvore.

![](/images/T101dwb03-07_profiledone.png)

## Por que a extrusão pode falhar

Salve o documento. Vamos experimentar neste parágrafo e queremos poder voltar ao modelo atual.

Vamos direto ao assunto: selecione todas as arestas no _grupo_ **Profile**, e na bancada ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/pt-br "Part Workbench/pt-br") chame o comando ![](/images/Part_Extrude.svg) [Extrusão](/Part_Extrude/pt-br "Part Extrude/pt-br"). Um painel _Tarefas_ se abre, aceite todos os padrões e clique em OK.

![](/images/T101dwb04-01_extrudelineserror.png)

Isso não funcionou, mas parece fácil corrigir o erro, só precisamos especificar uma direção. Clique em OK para voltar ao painel de _Tarefas_ e selecione _Direção personalizada_.

![](/images/T101dwb04-02_extrudelineszaxis.png)

Aceite o eixo z padrão e mais uma vez clique em OK.

![](/images/T101dwb04-03_extrudelinessheets.png)

Conseguimos fazer uma estrutura semelhante a uma cerca, a julgar pela visualização em árvore, cada aresta é tratada separadamente. Não é o sólido preenchido que queremos. Clique em [Undo](/Std_Undo "Std Undo") e vamos tentar outra coisa.

Rolando até a parte inferior do painel _Tarefas_ da **Extrusão** há uma opção _Criar um sólido_, marque essa opção e clique em OK.

![](/images/T101dwb04-04_extrudelinesfilled.png)

Tudo desapareceu, claro que também não funcionou. Vamos ver por que nenhuma dessas maneiras está funcionando. No primeiro caso, recebemos um erro de que a direção não pôde ser determinada. Uma face plana tem uma normal, ou seja, uma direção, uma linha não. Pela nossa segunda tentativa, sabemos que funcionou quando fornecemos uma direção, então esse erro veio da tentativa de extrudar uma linha sem saber a direção. Alguém pode pensar que um arco tem uma (direção) normal, isso é verdade. Se você selecionar apenas a aresta que é o arco, o FreeCAD fará a extrusão, também com as configurações padrão.

No segundo caso funcionou, mas também conseguimos uma extrusão para cada borda que tínhamos em nossa seleção. Os objetos resultantes, entretanto, não são o que queremos, ou seja, um sólido.

No terceiro caso marcamos _Criar um sólido_, e acabamos com tudo desaparecendo. Os objetos na árvore também têm um ícone diferente, há um _ponto de exclamação_ branco em um fundo vermelho, esse _ícone de sobreposição_ específico significa que o objeto tem um erro que precisa ser corrigido. Pode-se ler sobre os diferentes tipos de [ícones de sobreposição](/Tree_view/pt-br#Overlay_icons "Tree view/pt-br") no wiki.

Ao passar o mouse sobre qualquer um dos objetos da árvore com o ícone de sobreposição, uma dica de ferramenta é exibida, dizendo _Wire is not closed_ (O fio não está fechado).

![](/images/T101dwb04-05_extrudelineserrortooltip.png)

No nosso caso, o erro não pode ser corrigido. É _geometricamente impossível_ criar um sólido a partir de uma única linha extrudada. Uma linha extrudada simplesmente se torna uma folha, ou _casca_ no jargão do FreeCAD. Em outras palavras, esta não é uma limitação do FreeCAD, é um resultado fundamental da teoria geométrica. A razão pela qual a visualização 3D fica completamente em branco é que os recursos criados, ou objetos na visualização em árvore, têm erros na _forma_ produzida e, portanto, não contêm nada para renderizar. No entanto, o FreeCAD cria os novos objetos do documento (neste caso, extrusões) e, portanto, oculta qualquer geometria/objeto usado para criar os novos objetos do documento. É por isso que a tela fica em branco ao tentar fazer um sólido a partir de uma linha ou linhas.

A dica da ferramenta diz tudo, para fazer a extrusão em um sólido é necessário um _fio fechado_ ou _uma face_. Uma face é, por definição, simplesmente um fio fechado que é preenchido. Uma maneira de criar um fio fechado a partir das bordas de nosso perfil é selecionar todas elas e aplicar ![](/images/Draft_Upgrade.svg) [Promover](/Draft_Upgrade/pt-br "Draft Upgrade/pt-br"). Se aplicado uma vez, torna-se um fio, enquanto ao mesmo tempo consome as arestas individuais da visualização em árvore. Se aplicado duas vezes, torna-se uma face, qualquer uma delas permite uma extrusão sólida bem-sucedida.

Antes de passar para o próximo parágrafo: abra a versão anterior do documento.

## Extrudando o perfil

Outra maneira de criar o fio fechado é com o comando ![](/images/Part_Builder.svg) [Construtor de forma](/Part_Builder "Part Builder") da bancada Part, que permite fazer um fio sem consumir as arestas individuais . O **Construtor de forma** do _Part_ é uma ferramenta poderosa para criar qualquer geometria no FreeCAD que pode ser usada posteriormente para criar sólidos complexos. O exemplo mais simples é criar uma linha entre dois vértices. Clique em **Construtor de forma** para abrir o painel _Tarefas_.

![](/images/T101dwb05-01_shapebuildertaskpanel.png)

Podemos usar _Arame a partir de arestas_ ou _Uma face a partir de arestas_. Várias seleções devem ser feitas com a tecla Ctrl pressionada. Vamos usar _Uma face a partir de arestas_. Uma vez que essa opção é selecionada, também pode-se selecionar _Planar_, faça isso também. Em seguida, selecione todas as arestas no perfil, a ordem não importa (neste caso) e clique em Criar, e depois em Close para voltar à Tree View. A _face_ foi criada.

![](/images/T101dwb05-02_shapebuilderfacedone.png)

Selecione **Face** na árvore e use a ferramenta **Extrusão**, defina o _comprimento_ da extrusão para **30mm** e clique em OK.

![](/images/T101dwb05-03_extrusiondone.png)

## Criando o furo passante

Para fazer o furo precisamos de um cilíndro corretamente posicionado para fazer um corte booleano.

Crie um cilindro e posicione-o corretamente. Neste caso, o _raio_ é de 5mm, a altura (_Height_) é definida para 60mm. Para o posicionamento, primeiro ele é _girado_ -90 graus ao redor do eixo x, então posicionado em _(65, -5, 15)_. O 5 negativo na direção y ocorre porque a altura é 10mm maior do que o necessário.

![](/images/T101dwb05-04_cylinderplaced.png)

Não faz mal aumentar a altura do cilindro mais do que o necessário. Para um modelo simples como este, não importa se o cilindro tem a altura exata do perfil. No entanto, é uma boa prática evitar faces coplanares para evitar erros numéricos no núcleo geométrico que podem, às vezes, resultar em efeitos estranhos ou falhas em operações subsequentes.

Com um corte booleano final, e depois de mudar a aparência do objeto resultante, o modelo é concluído.

![](/images/T101dwb05-05_modelcomplete.png)

## Fazendo um esboço (Sketch) a partir do perfil 2D

Usar a bancada **Draft** é uma maneira de criar um perfil 2D. Na bancada **Draft** uma linha pode ser feito no espaço 3D. O FreeCAD fornece outra ferramenta para fazer perfis 2D – a ![](/images/Workbench_Sketcher.svg) bancada [Sketcher](/Sketcher_Workbench/pt-br "Sketcher Workbench/pt-br"). Usar um _esboço_ é uma maneira mais versátil de criar um perfil 2D. Qualquer perfil 2D feito na bancada **Draft** pode ser convertido em um esboço _sem restrições_.

Comece escondendo o recurso **Cortar** e deixe as arestas do perfil visíveis. Selecione as bordas e na bancada **Draft** pressione o botão da barra de ferramentas ![](/images/Draft_Draft2Sketch.svg) [Traço para esboço](/Draft_Draft2Sketch/pt-br "Draft Draft2Sketch/pt-br"). Você deve ver o mesmo que na imagem abaixo.

![](/images/T101dwb06-01_draft2sketch.png)

Em seguida, oculte as bordas originais e clique duas vezes no objeto **Sketch** na árvore. Isso vai abrir o esboço na visão 3D e a aba _Tarefas_ na Tela combinada.

![](/images/T101dwb06-02_sketchedit.png)

É assim que fica quando se _edita um esboço_. Como este não é um tutorial para usar o Sketcher, vá em frente e feche-o. Se você deseja uma introdução ao processo, que é um fluxo de trabalho básico em qualquer CAD paramétrico 3D, siga o tutorial irmão _[Criando uma peça simples com Part Design](/Creating_a_simple_part_with_PartDesign/pt-br "Creating a simple part with PartDesign/pt-br")_.

Com o **Sketch** fechado e selecionado, na bancada **Part** use Extrude da mesma forma que antes. O bloco básico do modelo simples está pronto mais uma vez.

![](/images/T101dwb06-03_sketchextruded.png)

## Qualidade dos modelos

Mais cedo ou mais tarde, ao trabalhar com CAD paramétrico 3D, você encontrará um modelo quebrado, seja um que você mesmo criou ou um modelo que você importou. Um modelo quebrado pode funcionar para seu propósito, mas na maioria das vezes, há operações subsequentes que simplesmente não funcionarão. Para reparar um modelo quebrado, é preciso saber o que reparar, é aqui que entram as ferramentas de verificação de qualidade integradas no FreeCAD.

Primeiro, vamos verificar a qualidade do recém-criado **Extrude001**. Com a bancada **Part** ativa, primeiro selecione **Extrude001** e depois use o comando ![](/images/Part_CheckGeometry.svg) [Verificar a geometria](/Part_CheckGeometry/pt-br "Part CheckGeometry/pt-br"). Marque todas as caixas de seleção de configurações, exceto a superior, e clique no botão Executar verificação.

![](/images/T101dwb07-01_geocheck.png)

Nosso modelo está OK, nenhum erro é relatado. Há também uma listagem do conteúdo dos modelos, ou no jargão do FreeCAD, o conteúdo da _forma_, ou seja, como ela é montada desde o início. Aqui pode-se ver que, aparentemente, para fazer um _sólido_ é necessário também uma _casca_, e a casca é feita de _faces_, e assim por diante. Em outras palavras, você pode criar qualquer sólido simplesmente começando por fazer pontos, ou _vértices_, a partir desses se faz _arestas_, e a partir dessas se criam _fios_, e a partir dos fios faz-se _faces_ que são costuradas em uma _concha_, da qual se chega finalmente a um _sólido_. Um sólido só pode ser feito de uma casca estanque. Uma casca não estanque é uma fonte comum de modelos CAD problemáticos, pode acontecer, por exemplo, com a geometria importada criada em um software diferente, especialmente ao usar os formatos de arquivo neutros comumente disponíveis.

Outra verificação que se pode fazer é relacionada ao **Sketch**. Feche o painel _Tarefas_ para verificar a geometria. Selecione **Sketch**, expanda **Extrude001** na árvore, se necessário, para ver o objeto do esboço. Mude para ![](/images/Workbench_Sketcher.svg) bancada [Sketcher](/Sketcher_Workbench/pt-br "Sketcher Workbench/pt-br"), use o comando ![](/images/Sketcher_ValidateSketch.svg) [Validar um esboço](/Sketcher_ValidateSketch "Sketcher ValidateSketch"), abre-se um painel _Tarefas_. Clique no botão Procurar em _Coincidências faltantes_. Ele destaca e relata _6_ delas, ou seja, todos os pontos onde as arestas se encontram.

![](/images/T101dwb07-02_sketchvalidate.png)

Clique em OK na caixa de diálogo pop-up e, em seguida, clique no botão Consertar para corrigir as _Coincidências faltantes_. Se você fechar o painel _Tarefas_ e entrar no _modo de edição_ do **Esboço**, ele reportará _12 graus de liberdade_, ao contrário do _24_ anterior '. Isso foi conseguido adicionando _restrições coincidentes_ aos pontos finais das linhas.

O leitor atento percebe que ao usar as arestas do _Draft_, essas tiveram que ser unidas em uma linha fechada para fazer uma extrusão sólida, enquanto no Sketcher isso aparentemente não era necessário. A lógica aqui é que o esboço é um objeto, e a extrusão de um objeto o trata como se ele fosse uma linha fechada (neste caso).

Finalmente, deve-se ressaltar que, embora a criação de objetos subsequentes a partir de esboços com vértices abertos possa funcionar, é melhor prática não ter nenhum, bem como ter um totalmente esboço restrito (ao invés de um com graus de liberdade). A razão pela qual funciona aqui é que o esboço é criado a partir de um perfil _Draft_ construído de forma que os pontos finais das arestas coincidam sem nenhuma lacuna. Se você desenhar à mão em um esboço e também tentar combinar os pontos finais manualmente, é praticamente garantido que os pontos finais não coincidirão, ou seja, as lacunas (embora não sejam realmente visíveis na tela) serão grandes o suficiente para que o processo não possa considerar as arestas passíveis de serem unidas geometricamente.

## Finalizando

Depois de passar pelo tutorial, você se familiarizou um pouco com a funcionalidade básica do FreeCAD, junto com as bancadas principais **Part** e **Draft**. Você também está ciente da existência da bancada **Sketcher**, que para muitos usuários experientes é a única ferramenta usada para criar perfis 2D posteriormente utilizados em operações de sólidos. O uso de _esboços_ é um conceito central na bancada **Part Design**. Sugere-se que você aprenda as bancadas _Sketcher_ e **Part Design** se seu foco for criar sólidos. O tutorial irmão _[Criando uma peça simples com Part Design](/index.php?title=Creating_a_simple_part_with_Part_Design/pt-br&action=edit&redlink=1 "Creating a simple part with Part Design/pt-br (page does not exist)")_ cria o mesmo modelo deste tutorial. Se seu foco é modelar edifícios, seu próximo aprendizado deve ser as bancadas **Draft** e **Arch**.

Por fim, o FreeCAD é feito por voluntários em seu tempo livre. Se você quiser que os recursos do FreeCAD avancem ainda mais, considere [contribuir](/Help_FreeCAD "Help FreeCAD") para o FreeCAD, por exemplo, melhorando a documentação.

Retrieved from "<http://wiki.freecad.org/index.php?title=Creating_a_simple_part_with_Draft_and_Part_WB/pt-br&oldid=1246080>"
