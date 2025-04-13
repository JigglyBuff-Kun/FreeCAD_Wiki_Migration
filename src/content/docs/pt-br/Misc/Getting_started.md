---
title: Começando a usar
---
## Prefácio

FreeCAD é uma aplicação de modelagem 3D [aplicação de modelagem paramétrica](/About_FreeCAD/pt-br "About FreeCAD/pt-br"). Ele é feito principalmente para projetos mecânicos, mas também serve a todos os outros usos onde você precisa modelar objetos 3D com precisão e controle sobre o histórico da modelagem.

O FreeCAD está em desenvolvimento desde 2002 e oferece uma grande lista de  [recursos](/Feature_list/pt-br "Feature list/pt-br"). Ainda faltam recursos, mas elas são suficientemente poderosas para o uso por hobby e pequenas oficinas. Existe uma comunidade em rápido crescimento de usuários entusiastas que participam do [fórum do FreeCAD](http://forum.freecadweb.org/index.php) e você pode encontrar nele muitos [exemplos](https://forum.freecadweb.org/viewforum.php?f=24) de projetos de qualidade desenvolvidos com o FreeCAD.

Como todos os projetos de software livre, o FreeCAD depende de sua comunidade para crescer, ganhar recursos e corrigir bugs. Não se esqueça disso ao usar o FreeCAD; se você gostar, pode [doar](/Donate/pt-br "Donate/pt-br") e [ajude o FreeCAD](/Help_FreeCAD/pt-br "Help FreeCAD/pt-br") de várias maneiras, como escrever documentação e fazer traduções.

Veja também:

* [Migrando para o FreeCAD do Fusion360](/Migrating_to_FreeCAD_from_Fusion360/pt-br "Migrating to FreeCAD from Fusion360/pt-br")
* [Que bancada de trabalho devo escolher?](/Which_workbench_should_I_choose "Which workbench should I choose")
* [Tutoriais](/Tutorials/pt-br "Tutorials/pt-br")
* [Tutorials em video](/Video_tutorials/pt-br "Video tutorials/pt-br")

## Instalação

Primeiro, visite a página de [Download](/Download "Download") para baixar a versão mais recente do FreeCAD. Caso precise de mais informações sobre a instalação ou atualizações para o seu sistema operacional, acesse: ([Windows](/Installing_on_Windows "Installing on Windows"), [Linux](/Installing_on_Linux "Installing on Linux") ou [macOS](/Installing_on_Mac "Installing on Mac")).

Lembrando que o FreeCAD é um software de código aberto. Isso significa que você pode baixar e usar o programa gratuitamente. Se preferir, também é possível compilar o FreeCAD a partir do código-fonte.

## Explorando a interface

![](/images/FreeCAD_interface_base_divisions.svg)

Interface padrão do FreeCAD

*Ver uma explicação completa em [Interface](/Interface/pt-br "Interface/pt-br").*

:   1. O [área de visão principal](/Main_view_area/pt-br "Main view area/pt-br"), que pode conter diferentes janelas com abas, principalmente o [3D view](/3D_view/pt-br "3D view/pt-br").
:   2. A [3D view](/3D_view/pt-br "3D view/pt-br"), que mostra os objetos geométricos do documento.
:   3. A [vista em árvore](/Tree_view/pt-br "Tree view/pt-br"). (parte do [visualização combinada](/Combo_view/pt-br "Combo view/pt-br")), mostrando a hierarquia e o histórico de construção dos objetos no documento; também pode exibir o [painel\_de\_tarefa](/Task_panel/pt-br "Task panel/pt-br") para comandos ativos.
:   4. O editor [editor de propriedade](/Property_editor/pt-br "Property editor/pt-br"). (parte do [visualização combinada](/Combo_view/pt-br "Combo view/pt-br")), que permite visualizar e modificar as propriedades dos objetos selecionados.
:   5. A [vista de seleção](/Selection_view/pt-br "Selection view/pt-br"), que indica os objetos ou subelementos dos objetos (vértices, bordas, faces) que são selecionados.
:   6. A [visualização de relatório](/Report_view/pt-br "Report view/pt-br"). (ou janela de saída), onde são mostradas mensagens, avisos e erros.
:   7. O [console Python](/Python_console/pt-br "Python console/pt-br"), onde todos os comandos executados são impressos, e onde você pode digitar o código [Python](/Python/pt-br "Python/pt-br").
:   8. A [barra de status](/Status_bar/pt-br "Status bar/pt-br"), onde algumas mensagens e dicas de ferramentas aparecem.
:   9. A área da barra de ferramentas, onde as barras de ferramentas estão ancoradas.
:   10. O [seletor de bancada](/Std_Workbench/pt-br "Std Workbench/pt-br"), onde você seleciona a [bancada de trabalho](/Workbenches/pt-br "Workbenches/pt-br") ativa.
:   11. O [menu padrão](/Standard_Menu/pt-br "Standard Menu/pt-br"), que contém as operações básicas do programa.

O principal conceito por trás da interface do FreeCAD é que está separada em [bancadas de trabalho](/Workbenches/pt-br "Workbenches/pt-br"). Uma bancada de trabalho é uma coleção de ferramentas agrupadas para uma tarefa específica, como trabalhos com [malhas](/Mesh_Workbench/pt-br "Mesh Workbench/pt-br"), desenhos de [objetos 2D](/Draft_Workbench/pt-br "Draft Workbench/pt-br") ou [esboços restritos](/Sketcher_Workbench/pt-br "Sketcher Workbench/pt-br"). Você pode alternar o ambiente de trabalho atual com o  [seletor de bancada de trabalho](/Std_Workbench/pt-br "Std Workbench/pt-br"). Você pode  [customizar](/Interface_Customization/pt-br "Interface Customization/pt-br") as ferramentas incluídas em cada ambiente de trabalho, adicionar ferramentas de outros ambientes ou até mesmo ferramentas criadas por nós, que chamamos de  [macros](/Macros/pt-br "Macros/pt-br"). Os pontos de partida amplamente utilizados são o  [bancada de trabalho PartDesign](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br") e o  [bancada de trabalho Part](/Part_Workbench/pt-br "Part Workbench/pt-br").

Quando você inicia o FreeCAD pela primeira vez, é apresentada a página inicial (Start page). Veja como ela se parece na versão 0.19:

![](/images/Start_center_0.19_screenshot.png)

A Start page (página inicial) te permite saltar rapidamente para as bancadas de trabalho mais comuns, abrir arquivos recentes ou ver as últimas novidades do universo FreeCAD. Você pode alterar a bancada de trabalho predefinida em [Preferências](/Preferences_Editor "Preferences Editor").

## Navegando no espaço 3D

FreeCAD tem vários modos diferentes [uso do mouse](/Mouse_navigation/pt-br "Mouse navigation/pt-br") disponíveis, que mudam a maneira como você usa o mouse para interagir com os objetos na visualização 3D e a própria visualização. Um deles é feito especificamente para [touchpads](/Mouse_navigation/pt-br#Touchpad_navigation "Mouse navigation/pt-br"), onde o botão do meio do mouse não é usado. O modo padrão de navegação é chamado de [CAD](/Mouse_navigation/pt-br#CAD_navigation "Mouse navigation/pt-br"). Você pode alterar rapidamente o modo de navegação atual usando o botão ![](/images/NavigationCAD_dark.svg) na [barra de status](/Status_bar "Status bar") ou clicando com o botão direito do mouse em uma área vazia da [Visualização 3D](/3D_view/pt-br "3D view/pt-br").

Você também tem várias predefinições de visualização (vista superior, vista frontal, etc.) disponíveis no menu Ver, na barra de ferramentas Ver, e por atalhos numéricos (1, 2, etc...). Clicando com o botão direito do mouse em um objeto ou em uma área vazia da visualização 3D, você tem acesso rápido a algumas operações comuns, tais como definir uma determinada visualização, ou localizar um objeto na visualização em árvore.

## Primeiros passos com FreeCAD

O foco do FreeCAD é permitir que você crie modelos 3D de alta precisão, mantenha controle total sobre esses modelos (podendo voltar ao histórico de modelagem e alterar parâmetros) e, eventualmente, construa esses modelos (por meio de impressão 3D, usinagem CNC ou até mesmo em canteiros de obras). Portanto, é muito diferente de algumas outras aplicações 3D feitas para outros propósitos, como filmes de animação ou jogos. Sua curva de aprendizado pode ser íngreme, especialmente se esta for sua primeira experiência com modelagem 3D. Se você ficar preso em algum ponto, não se esqueça de que a comunidade amigável de usuários no [fórum do FreeCAD](http://forum.freecadweb.org/index.php) pode ser capaz de ajudá-lo em pouco tempo.

A bancada de trabalho que você começará a usar no FreeCAD depende do tipo de trabalho que você precisa fazer: Se você vai trabalhar em modelos mecânicos, ou mais geralmente qualquer objeto de pequena escala, você provavelmente vai querer experimentar o [Bancadas de trabalho PartDesign](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br"). Se você vai trabalhar em 2D, então mude para o [Bancada de trabalho Draft](/Draft_Workbench/pt-br "Draft Workbench/pt-br"), ou para o [Bancada de trabalho Sketcher](/Sketcher_Workbench/pt-br "Sketcher Workbench/pt-br") se você precisar de restrições. Se você quiser fazer o BIM, abra o [Bancadas de trabalho Arch](/Arch_Workbench/pt-br "Arch Workbench/pt-br"). E se você vem do mundo OpenSCAD, experimente o [Bancadas de trabalho OpenSCAD](/OpenSCAD_Workbench/pt-br "OpenSCAD Workbench/pt-br") . Há também muitos [Bancadas de trabalho externas](/External_workbenches/pt-br "External workbenches/pt-br") desenvolvidos pela comunidade disponíveis.

Você pode trocar de bancada de trabalho a qualquer momento, e também [customizar](/Interface_Customization/pt-br "Interface Customization/pt-br") sua bancada de trabalho favorita para adicionar ferramentas de outras bancadas de trabalho.

## Trabalhando com as bancadas PartDesign e Sketcher

O [Bancadas de trabalho PartDesign](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br") é feito para construir objetos complexos, a partir de formas simples, e adicionar ou remover peças (chamadas de "características"), até chegar ao seu objeto final. Todas as características que você aplicou durante o processo de modelagem são armazenadas em uma visão separada chamada [vista de árvore](/Document_structure/pt-br "Document structure/pt-br"), que também contém os outros objetos em seu documento. Você pode pensar em um objeto PartDesign como uma sucessão de operações, cada uma aplicada ao resultado do anterior, formando uma grande cadeia. Na visualização em árvore, você vê seu objeto final, mas pode expandi-lo e recuperar todos os estados anteriores, e alterar qualquer um de seus parâmetros, o que atualiza automaticamente o objeto final.

A bancada de trabalho PartDesign faz uso pesado de outra bancada de trabalho, a [Bancada de trabalho Sketcher](/Sketcher_Workbench/pt-br "Sketcher Workbench/pt-br"). O desenhista permite desenhar formas 2D, que são definidas pela aplicação de Restrições à forma 2D. Por exemplo, você pode desenhar um retângulo e definir o tamanho de um lado, aplicando uma restrição de comprimento a um dos lados. Esse lado então não pode mais ser redimensionado (a menos que a restrição seja alterada).

Essas formas 2D feitas com o desenhista são muito utilizadas na bancada de trabalho PartDesign, por exemplo para criar volumes 3D, ou para desenhar áreas nas faces de seu objeto que serão então escavadas a partir de seu volume principal. Este é um fluxo de trabalho típico do PartDesign:

1. Criar um novo sketch (esboço)
2. desenhar uma forma fechada (assegure-se de que todos os pontos estão unidos)
3. Fechar o sketch (esboço)
4. Transformar o sketch (esboço) num solido 3D usando a ferramenta "pad"
5. Selecionar uma face do sólido
6. Criar um segundo sketch (esboço) (desta vez ele vai ser desenhado sobre a face selecionada)
7. Desenhar uma forma fechada
8. Fechar o sketch (esboço)
9. Criar um pocket (bolso) a partir do segundo sketch (esboço), no primeiro objeto

O que lhe dá um objeto como este:

![](/images/Partdesign_example.jpg)

A qualquer momento, você pode selecionar os esboços originais e modificá-los, ou alterar os parâmetros de extrusão das operações de bloco ou bolso, o que atualizará o objeto final.

## Trabalhando com as bancadas Draft e Arch

O [Bancada de Trabalho Draft](/Draft_Workbench/pt-br "Draft Workbench/pt-br") e o [Bancada de Trabalho Arch](/Arch_Workbench/pt-br "Arch Workbench/pt-br") comportam-se de forma um pouco diferente dos outros bancos de trabalho acima, embora sigam as mesmas regras, que são comuns a todos os FreeCAD. Em resumo, enquanto o Sketcher e o PartDesign são feitos principalmente para desenhar peças únicas, o Draft e o Arch são feitos para facilitar seu trabalho quando se trabalha com vários objetos mais simples.

A [bancada de trabalho Draft](/Draft_Workbench/pt-br "Draft Workbench/pt-br") oferece ferramentas 2D um pouco semelhantes ao que você pode encontrar em aplicações CAD 2D tradicionais, tais como [AutoCAD](https://en.wikipedia.org/wiki/AutoCAD). Entretanto, estando o esboço 2D longe do escopo do FreeCAD, não espere encontrar ali toda a gama de ferramentas que estas aplicações dedicadas oferecem. A maioria das ferramentas de rascunho funciona não apenas em um plano 2D, mas também em todo o espaço 3D, e se beneficia de sistemas de ajuda especiais como [Work planes](/Draft_SelectPlane/pt-br "Draft SelectPlane/pt-br") e [object snapping](/Draft_Snap/pt-br "Draft Snap/pt-br").

A [bancada de trabalho Arch](/Arch_Workbench "Arch Workbench") acrescenta a ferramentas [BIM](http://en.wikipedia.org/wiki/Building_Information_Modeling) ao FreeCAD, permitindo construir modelos arquitetônicos com objetos paramétricos. A bancada de trabalho Arch se baseia amplamente em outros módulos, como Draft e Sketcher. Todas as ferramentas Draft também estão presentes no bancada de trabalho Arch, e a maioria das ferramentas Arch faz uso dos sistemas de ajuda Draft.

O fluxo de trabalho típico com a as bancadas de trabalho "Arch" (Arquitetura) e "Draft" (traço) será:

1. Desenhar algumas linhas com a ferramenta de **Linha** "Draft"
2. Selecionar cada linha e clicar na ferramenta **Parede** para construir uma parede em cada uma delas
3. Unir as paredes selecionando-as e pressionando a ferramenta **Adicionar** da bancada "Arch"
4. Criar um objeto piso, e mover as paredes para dentro dele na vista de árvore
5. Criar um objeto edifício, e mover o piso para dentro dele na vista de árvore
6. criar uma janela clicando na ferramenta **Janela**, selecionar uma predefinição no painel, e depois clicar na face de uma parede
7. Adicionar cotas dimensionais selecionando primeiro o plano de trabalho se necessário, e depois usando a ferramenta **Dimensão** do "Draft"

O que lhe dará isto:

![](/images/Arch_workflow_example.jpg)

Para mais informações, visite a página [Tutoriais](/Tutorials "Tutorials") .

## Addons, Macro e Bancadas Externas

O princípio [Extensões](/Addon/pt-br "Addon/pt-br") é baseado no desenvolvimento de um complemento de bancada de trabalho. Qualquer usuário pode desenvolver uma função que ele ou ela considere faltar para suas próprias necessidades ou, em última instância, para a comunidade.
Com o fórum, o usuário pode solicitar uma opinião, ajuda no fórum. Ele pode compartilhar, ou não, o objeto de seu desenvolvimento de acordo com as regras de direitos autorais a definir. Livre para ela/ele.
Para desenvolver, o usuário tem disponíveis funções [scripting](/Power_users_hub/pt-br "Power users hub/pt-br").

Há dois tipos de extensões:

1. [Macros](/Macros/pt-br "Macros/pt-br"): pequenos trechos de código Python que fornecem uma nova ferramenta ou funcionalidade. As macros geralmente começam como uma forma de simplificar ou automatizar a tarefa de desenhar ou editar um determinado objeto. Se muitas destas macros forem coletadas dentro de um diretório, o diretório inteiro pode ser distribuído como uma nova bancada de trabalho.
2. [Bancadas de trabalho externas](/External_workbenches/pt-br "External workbenches/pt-br"): coleções de ferramentas programadas em Python ou C++ que estendem o FreeCAD de uma forma importante. Se uma bancada de trabalho estiver suficientemente desenvolvida e bem documentada, ela pode ser incluída como uma das bancadas de trabalho de base no FreeCAD. Em [bancos de trabalho externos](/External_workbenches/pt-br "External workbenches/pt-br"), você encontrará o princípio e uma lista da biblioteca existente.

## Scripting

E, finalmente, um dos recursos mais poderosos do FreeCAD é o ambiente  [scripting](/Scripting "Scripting"). No console python integrado (ou em qualquer outro script Python externo) você pode acessar quase qualquer parte do FreeCAD, criar ou modificar geometria, modificar a representação desses objetos na cena 3D ou acessar e modificar a interface do FreeCAD. O script Python também pode ser usado em  [macros](/Macros "Macros"), que fornece um método fácil para criar comandos personalizados.

## Novidades

* Veja as [notas de lançamento](/Feature_list/pt-br#Notas_de_lançamento "Feature list/pt-br") para uma lista detalhada de recursos.

Retrieved from "<http://wiki.freecad.org/index.php?title=Getting_started/pt-br&oldid=1480481>"