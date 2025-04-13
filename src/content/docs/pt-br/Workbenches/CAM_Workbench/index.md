---
title: Bancada de trabalho Path
---

![](/images/Workbench_CAM.svg)

ícone da bancada de trabalho Path

## Introdução

A ![](/images/Workbench_CAM.svg) bancada de trabalho Path é utilizada para produzir instruções de máquina para [máquinas CNC](https://en.wikipedia.org/wiki/CNC_router) a partir de um modelo 3D do FreeCAD. Elas produzem objetos 3D do mundo real em máquinas CNC, como moinhos, tornos, lascadores ou similares. Normalmente, as instruções são um dialeto [G-Code](https://en.wikipedia.org/wiki/G-Code).

![](/images/Pathwb.png)

O fluxo de trabalho da bancada Path do FreeCAD Path cria essas instruções de máquina da seguinte maneira:

- Um modelo 3D é o objeto base, normalmente criado usando uma ou mais das Bancadas de trabalho [Part Design](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br"), [Part](/Part_Workbench/pt-br "Part Workbench/pt-br") ou [Draft](/Draft_Workbench/pt-br "Draft Workbench/pt-br").
- Um [Trabalho](/CAM_Job/pt-br "CAM Job/pt-br") é criado na bancada Path. Este contém todas as informações necessárias para gerar o G-Code necessário para processar o trabalho em uma fresadora CNC: há material de estoque, a fresadora possui um determinado [conjunto de ferramentas](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen") e segue certos comandos controlando a velocidade e os movimentos (geralmente G-Code).
- As ferramentas são selecionadas conforme exigido pelas operações do trabalho.
- Os caminhos de fresagem são criados usando, por exemplo, operações [Contorno](/CAM_Profile/pt-br "CAM Profile/pt-br") e [Corte](/CAM_Pocket_3D/pt-br "CAM Pocket 3D/pt-br"). Estes Objetos de caminho usam o dialeto interno do G-Code do FreeCAD, independente da máquina CNC.
- Exporte o trabalho com um G-Code, correspondente à sua máquina. Essa etapa é chamada de "pós-processamento"; existem diferentes pós-processadores disponíveis.

## General concepts

## Conceitos gerais

A bancada gera o G-Code que define os caminhos necessários para usinar o projeto representado pelo modelo 3D na fresadora alvo em [o caminho Tarefas de trabalho FreeCAD G- Dialeto de código](/CAM_scripting/pt-br#The_FreeCAD_Internal_GCode_Format "CAM scripting/pt-br"), que é posteriormente traduzido para o dialeto apropriado para o controlador CNC de destino, selecionando o pós-processador apropriado.

O G-Code é gerado a partir de diretivas e operações contidas em um trabalho de caminho. O Fluxo de Trabalho das listas na ordem em que serão executados. A lista é preenchida com a adição de Operações de Caminho, Dressups de Caminho, Comandos Parciais de Caminho e Modificações de Caminho do Menu de Caminho ou botões da GUI.

The G-code is generated from directives and Operations contained in a CAM Job. The Job Workflow lists these in the order they will be executed. The list is populated by adding CAM Operations, Path Dressups, Supplemental Commands, and Path Modifications from the CAM Menu, or GUI buttons.

A bancada Path fornece ferramentas de Gerenciador de Ferramentas (Biblioteca, Tabela de Ferramentas), Inspeção de Código G e Simulação. Ela vincula o pós-processador e permite importar e exportar modelos de trabalho.

A bancada de trabalho Path tem dependências externas, incluindo:

1. As unidades do modelo FreeCAD 3D são definidas nas configurações de **Editar → Preferências → Geral → Unidades da unidade**. A configuração do pós-processador define as unidades finais do G-Code.
2. O caminho do arquivo de macro e as tolerâncias geométricas são definidas na guia **Editar → Preferências → Caminho → Preferências de trabalho**.
3. As cores são definidas na guia **Editar → Preferências → Caminho → Cores do caminho**.
4. Os parâmetros da tag de retenção são definidos na guia **Editar → Preferências → Caminho → Dressups**.
5. Essa qualidade do modelo Base 3D suporta os requisitos da bancada de trabalho Path, passa a verificar geometria.

## Limitações

Algumas das limitações atuais das quais você deve estar ciente são:
A maioria das ferramentas Path Tools não são verdadeiras ferramentas 3D, mas apenas 2.5D capazes. Isto significa que elas assumem uma forma 2D fixa e podem cortá-lo até uma determinada profundidade. Entretanto, existem duas ferramentas que produzem verdadeiros caminhos em 3D:![](/images/CAM_3DPocket.svg) [Fenda 3D](/CAM_Pocket_3D/pt-br "CAM Pocket 3D/pt-br") e ![](/images/CAM_Surface.svg) [Superfície 3D](/CAM_Surface/pt-br "CAM Surface/pt-br") (que ainda é um [recurso experimental](/CAM_experimental/pt-br "CAM experimental/pt-br") a partir de novembro 2020).

- A maior parte da bancada de trabalho Path foi projetada para uma fresa/router CNC de 3 eixos (xyz) simples e padrão, mas as ferramentas de torno estão em desenvolvimento em 0,19_pre.
- A maioria das operações na bancada de trabalho Path retornará caminhos baseados apenas em uma ferramenta padrão de fresa/bit, independentemente do tipo de ferramenta/bit atribuído em um determinado controlador de ferramentas, com exceção dos ![](/images/CAM_Engrave.svg) [Gravação](/CAM_Engrave/pt-br "CAM Engrave/pt-br") e ![](/images/CAM_Surface.svg) [Superfície 3D](/CAM_Surface/pt-br "CAM Surface/pt-br") operações.
- As operações dentro da bancada de trabalho Path não estão conscientes dos mecanismos de fixação em uso para fixar o modelo à sua máquina. Consequentemente, por favor, revise e simule os caminhos que você gera antes de enviar o código para sua máquina. Se necessário, modele seus mecanismos de fixação no FreeCAD a fim de inspecionar melhor os caminhos gerados. Procure por possíveis colisões com grampos ou outros obstáculos ao longo dos caminhos.

## Unidades

A manipulação de unidades no Path pode ser confusa. Existem vários pontos para entender:

1. As unidades base do FreeCAD para comprimento e hora são 'mm' e 's' respectivamente. A velocidade é, portanto, 'mm / s'. Isto é o que o FreeCAD armazena internamente, independentemente de qualquer outra coisa.
2. O esquema unitário padrão usa as unidades padrão. Se você estiver usando o esquema padrão e inserir uma velocidade de avanço sem uma string de unidade, ela será inserida como 'mm / s'.
3. A maioria das máquinas CNC espera uma velocidade de avanço na forma de 'mm / min' ou 'in / min'. A maioria dos pós-processadores converterá automaticamente a unidade ao gerar o G-Code.

Esquemas:

1. Alterar esquema nas preferências altera a sequência de unidades padrão para os campos de entrada. Se você é um usuário do Path e prefere projetar em métrica, é altamente recomendável usar o esquema "Metric Small Parts & CNC". Se você projetar em unidades dos EUA, o Imperial Decimal e o Building US funcionarão.
2. Alterar seu esquema de unidade preferencial não afetará a saída, mas ajudará a evitar erros de entrada.

Saída:

1. Gerar a unidade correta na saída é de responsabilidade do pós-processador e é feito somente naquele momento.
2. A unidade de saída da máquina não tem relação alguma com o esquema de unidade selecionado.
3. Os pós-processadores produzem uma saída métrica (G21), uma saída Imperial (G20) ou são configuráveis.
4. Configuráveis pós-processadores padrão para métrica (G21).
5. Se você quiser que seu pós-processador configurável gere o código imperial (G20), defina o argumento correto na configuração de saída do trabalho (ou seja, inches para linuxcnc). Isso pode ser armazenado em um modelo de trabalho e definido como seu modelo padrão para torná-lo automático para todos os trabalhos futuros.

Inspeção de caminho:

1. Se você usar a ferramenta Inspecionar Caminho para ver o G-Code, verá em 'mm/s' porque não está sendo pós-processado.

## Heights and depths

## Comandos do Path

Muitos dos comandos têm várias alturas e profundidades:

![](/images/Path-DepthsAndHeights.gif)

Referência visual para propriedades de profundidade (configurações)

![](/images/Path-DepthsAndHeights.gif)

Visual reference for Depth properties (settings)

## Commands

Some commands are experimental and not available by default. To enable them see [CAM experimental](/CAM_experimental "CAM experimental").

### Project Commands

- ![](/images/CAM_Job.svg) [Trabalho](/CAM_Job/pt-br "CAM Job/pt-br"): Cria um novo trabalho CNC.

- ![](/images/CAM_Post.svg) [Pós-processar](/CAM_Post/pt-br "CAM Post/pt-br"): Exporta um projeto para o G-Code.

- ![](/images/CAM_Sanity.svg) [Erros do Path](/CAM_Sanity/pt-br "CAM Sanity/pt-br"): Verifica valores ausentes para os trabalhos (Job) selecionados.

- ![](/images/CAM_ExportTemplate.svg) [Exportar Template](/CAM_ExportTemplate/pt-br "CAM ExportTemplate/pt-br"): Exporta o trabalho atual como um modelo (template).

### Tool Commands

- ![](/images/CAM_Inspect.svg) [Inspecionar G-Code](/CAM_Inspect/pt-br "CAM Inspect/pt-br"): Mostra o G-Code para verificação.

- ![](/images/CAM_Simulator.svg) [Simulador](/CAM_Simulator/pt-br "CAM Simulator/pt-br"): Mostra a operação de fresagem como é feita na maquina.

- ![](/images/CAM_SimulatorGL.svg) [CAM SimulatorGL](/CAM_SimulatorGL "CAM SimulatorGL"): Enables the new, improved CAM simulator. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/CAM_SelectLoop.svg) [Completar volta](/CAM_SelectLoop/pt-br "CAM SelectLoop/pt-br"): Completa uma volta a partir de duas arestas selecionadas.

- ![](/images/CAM_OpActiveToggle.svg) [Operação ativar](/CAM_OpActiveToggle/pt-br "CAM OpActiveToggle/pt-br"): Utilizada para ativar ou desativar uma operação de caminho.

- ![](/images/CAM_ToolBitLibraryOpen.svg) [ToolBit Library editor](/CAM_ToolBitLibraryOpen "CAM ToolBitLibraryOpen"): Opens an editor to manage ToolBit libraries.

- ![](/images/CAM_ToolBitDock.svg) [ToolBit Dock](/CAM_ToolBitDock "CAM ToolBitDock"): Toggles the ToolBit Dock.

### Operações de Caminho Básico

- ![](/images/CAM_Profile.svg) [Perfil](/CAM_Profile/pt-br "CAM Profile/pt-br") (New in 0.19): Cria uma operação de perfil de todo o modelo, ou a partir de uma ou mais faces ou bordas selecionadas. Esta operação combina o Contorno, Faces de Perfil e Arestas de Perfil pré-existentes.

- ![](/images/CAM_Pocket.svg) [Corte](/CAM_Pocket_Shape/pt-br "CAM Pocket Shape/pt-br"): Cria uma operação de corte (furo) a partir de um ou mais cortes selecionados.

- ![](/images/CAM_Drilling.svg) [Perfuração](/CAM_Drilling/pt-br "CAM Drilling/pt-br"): Executa um ciclo de perfuração.

- ![](/images/Path_Face.svg) [Fresar face](/CAM_MillFace/pt-br "CAM MillFace/pt-br"): Cria um caminho de superfície.

- ![](/images/Path_Helix.svg) [Hélice](/CAM_Helix/pt-br "CAM Helix/pt-br"): Cria um caminho helicoidal.

- ![](/images/CAM_Adaptive.svg) [Adaptativo](/CAM_Adaptive/pt-br "CAM Adaptive/pt-br"): Cria uma operação de limpeza e perfilagem adaptativa

- ![](/images/CAM_Slot.svg) [Fenda](/CAM_Slot/pt-br "CAM Slot/pt-br") (New in 0.19): Cria uma operação de slotting a partir de características selecionadas ou pontos personalizados.

- ![](/images/Path_Engrave.svg) [Gravação](/CAM_Engrave/pt-br "CAM Engrave/pt-br"): Cria um caminho de gravação.

- ![](/images/CAM_Deburr.svg) [Deburr](/CAM_Deburr "CAM Deburr"): Creates a deburr path.

- ![](/images/CAM_Vcarve.svg) [Fenda V](/CAM_Vcarve/pt-br "CAM Vcarve/pt-br"): Cria um caminho para uma cavidade 3D

### 3D Operations

- ![](/images/Path_3DPocket.svg) [Fenda 3D](/CAM_Pocket_3D/pt-br "CAM Pocket 3D/pt-br"): Cria um caminho para o corte 3D.

- ![](/images/CAM_Surface.svg) [Superfície 3D](/CAM_Surface/pt-br "CAM Surface/pt-br"): Cria um caminho para uma superfície 3D.(experimental, 0.19)

- ![](/images/CAM_Waterline.svg) [Contorno por linhas de nível](/CAM_Waterline/pt-br "CAM Waterline/pt-br"): Cria uma trama de linha de nível para uma superfície 3D (experimental, 0.19)

### Otimização de percurso

- ![](/images/CAM_DressupAxisMap.svg) [Axis Map](/CAM_DressupAxisMap "CAM DressupAxisMap"): Remaps one axis to another.

- ![](/images/CAM_DressupPathBoundary.svg) [Limitação de contorno](/CAM_DressupPathBoundary/pt-br "CAM DressupPathBoundary/pt-br"): acrescenta um contorno de restrição de rota a uma rota selecionada.

- ![](/images/CAM_DressupDogbone.svg) [Trabalhando os cantos](/CAM_DressupDogbone/pt-br "CAM DressupDogbone/pt-br"): Adiciona uma modificação para usinagem de cantos a uma trajetória de usinagem selecionada

- ![](/images/CAM_DressupDragKnife.svg) [Usinage com estilete](/CAM_DressupDragKnife/pt-br "CAM DressupDragKnife/pt-br"): Adiciona uma modificação de usinage com estilete ao caminho selecionado.

- ![](/images/CAM_DressupLeadInOut.svg) [Ponto de entrada ou saída](/CAM_DressupLeadInOut/pt-br "CAM DressupLeadInOut/pt-br"): Adiciona um ponto de entrada ou saída ao caminho selecionado.

- ![](/images/CAM_DressupRampEntry.svg) [Rampa de entrada](/CAM_DressupRampEntry/pt-br "CAM DressupRampEntry/pt-br"): Adiciona uma rampa de entrada de usinagem a uma trajetória de usinagem selecionada.

- ![](/images/CAM_DressupTag.svg) [Baliza de fixação](/CAM_DressupTag/pt-br "CAM DressupTag/pt-br"): Adiciona uma modificação de baliza de fixação a um caminho selecionado.

- ![](/images/CAM_DressupZCorrect.svg) [Z Depth Correction](/CAM_DressupZCorrect "CAM DressupZCorrect"): Corrects the Z depth using Probe Map.

### Comandos Parciais

- ![](/images/CAM_Fixture.svg) [Fixação](/CAM_Fixture/pt-br "CAM Fixture/pt-br"): Modifica a posição da fixação.

- ![](/images/CAM_Comment.svg) [Comentário](/CAM_Comment/pt-br "CAM Comment/pt-br"): Insere um comentário no G-Code de um caminho.

- ![](/images/CAM_Stop.svg) [Parada](/CAM_Stop/pt-br "CAM Stop/pt-br"): Insere um ponto final da máquina.

- ![](/images/CAM_Custom.svg) [Customização](/CAM_Custom/pt-br "CAM Custom/pt-br"): Insere um G-Code customizado.

- ![](/images/CAM_Probe.svg) [Probe](/CAM_Probe "CAM Probe"): Creates a Probing Grid from a job stock.

* [File:CAM GcodeFromShape.svg](/index.php?title=Special:Upload&wpDestFile=CAM_GcodeFromShape.svg "File:CAM GcodeFromShape.svg") [G-Code para um contorno](/CAM_Shape/pt-br "CAM Shape/pt-br"): Cria um objeto de caminho de um objeto Part selecionado.

### Modificações do Path

- ![](/images/CAM_Copy.svg) [Cópia](/CAM_Copy/pt-br "CAM Copy/pt-br"): Cria uma cópia paramétrica de um objeto Path selecionado.

- ![](/images/CAM_Array.svg) [Matriz](/CAM_Array/pt-br "CAM Array/pt-br"): Cria uma matriz ao duplicar um caminho selecionado.

- ![](/images/CAM_SimpleCopy.svg) [Cópia simples](/CAM_SimpleCopy/pt-br "CAM SimpleCopy/pt-br"): Cria uma cópia não paramétrica de um objeto Path selecionado.

### Specialty Operations

- ![](/images/CAM_ThreadMilling.svg) [Thread Milling](/CAM_ThreadMilling "CAM ThreadMilling"): Creates a CAM Thread Milling operation from features of a base object. [_Experimental_](/CAM_experimental "CAM experimental").

### Miscellaneous

- ![](/images/CAM_Area.svg) [Feature area](/CAM_Area/pt-br "CAM Area/pt-br"): Cria uma área de recurso a partir de objetos selecionados.

- ![](/images/CAM_Area_Workplane.svg) [Plano de trabalho da área de recursos](/CAM_Area_Workplane/pt-br "CAM Area Workplane/pt-br"): Cria um plano de trabalho da área de recursos.

## ToolBit architecture

Manage tools, bits, and the Tool Library. Based on the ToolBit architecture.

- [CAM Tools](/CAM_Tools "CAM Tools")
- [CAM ToolShape](/CAM_ToolShape "CAM ToolShape")
- [CAM ToolBit](/CAM_ToolBit "CAM ToolBit")
- [CAM ToolBit Library](/CAM_ToolBit_Library "CAM ToolBit Library")
- [CAM ToolController](/CAM_ToolController "CAM ToolController")

## Other

A bancada Path compartilha muitos conceitos com outros pacotes de software CAM, mas possui suas próprias peculiaridades. Se algo parece errado, isso pode ser um bom lugar para começar.

### Preferências

- ![](/images/Std_DlgPreferences.svg) [Preferências...](/CAM_Preferences/pt-br "CAM Preferences/pt-br"): Preferências disponíveis nas ferramentas do Path.

## Scripting

Confira a página [Path scripting](/Path_scripting "Path scripting").

## Tutorials

- [CAM Walkthrough for the Impatient](/CAM_Walkthrough_for_the_Impatient "CAM Walkthrough for the Impatient"): a quick tutorial to get familiar with CAM.

## Videos

- [FreeCAD Path: Custom paths with Python - Part 1 - 5](https://www.youtube.com/playlist?list=PLEuOia-QxyFKgzAeTyH62GKqWKVURiWJL): A playlist with a series of 5 videos in English by sliptonic. This series shows how to work with the [CAM Workbench](/CAM_Workbench "CAM Workbench").
- [FreeCAD CAM Path Workbench](https://www.youtube.com/playlist?list=PLUrr_kHPp4vhGdLlj6IemtF-OPUlRvSTC): A playlist with a series of 7 videos in English by CAD CAM Lessons.
- [FreeCAD CAM CNC](https://www.youtube.com/playlist?list=PLUrr_kHPp4vh2n6DcIlegK4dEKIFjmISJ): A playlist with a series of 8 videos in English by CAD CAM Lessons.
- Also see the [Computer-Aided Manufacturing (CAM) section](</Video_tutorials#Computer-Aided_Manufacturing_(CAM)> "Video tutorials") of the [Video tutorials](/Video_tutorials "Video tutorials") wiki page.

## Roadmap

- [CAM Development Roadmap](/CAM_Development_Roadmap "CAM Development Roadmap"): Read this if you are a developer and want to contribute to CAM.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Workbench/pt-br&oldid=1494609>"
