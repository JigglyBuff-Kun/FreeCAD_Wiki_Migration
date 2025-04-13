---
title: Vista 3D
---
## Introdução

A  [vista 3D](/3D_view "3D view"),que constitui a janela mais importante da  [interface](/Interface "Interface") do FreeCAD, é uma instância da Coin3D, biblioteca para implementação de área de modelagem que segue o padrão OpenInventor 2.1  [scenegraph](/Scenegraph "Scenegraph")

Certas propriedades da visualização, como cor de fundo, estilo  [de navegação do mouse](/Mouse_navigation "Mouse navigation"), e tarefas como fazer um zoom, podem ser configuradas no  [editor de preferências](/Preferences_Editor "Preferences Editor").

![](/images/FreeCAD_3D_view.png)

A [visualização 3D](/index.php?title=Visualiza%C3%A7%C3%A3o_3D&action=edit&redlink=1 "Visualização 3D (page does not exist)") é um componente do FreeCAD [interface](/Interface "Interface"). Por padrão, ele mostra um pequeno widget com eixos de coordenadas e o cubo de navegação, que também tem eixos de coordenadas; a grade pode ser exibida e configurada carregando a bancada de trabalho  [Draft](/Draft_Workbench "Draft Workbench").

## Menu de contexto

The options in the context menu of the 3D view depend on the selected object(s) and the currently active workbench. To display this menu optionally select one or more objects and then right-click in the 3D view.

## Detalhes

O FreeCAD usa a biblioteca integradora Quarter, para que a biblioteca de visualização de alto nível Coin3D seja utilizada junto ao framework Qt.

É possível interagir diretamente com o cenário de visualização 3D do [console Python](/Python_console "Python console") usando a biblioteca Python Pivy.

Para mais informações, veja a documentação para usuários avançados:

* [Scenegraph](/Scenegraph "Scenegraph"), descrição da biblioteca Coin3D.
* [Pivy](/Pivy "Pivy"), uso da Coin3D a partir do console Python.
* [Bibliotecas de terceiros](/Third_Party_Libraries "Third Party Libraries") usadas pelo FreeCAD.
* [Coin3D](https://grey.colorado.edu/coin3d/index.html): documentação para C++ da Coin 3D.

Retrieved from "<http://wiki.freecad.org/index.php?title=3D_view/pt-br&oldid=1452171>"