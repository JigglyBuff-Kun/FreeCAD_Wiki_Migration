---
title: Estrutura do documento
---
![](/images/Screenshot_treeview.jpg)

Um documento FreeCAD contém todos os objetos de sua cena. Pode conter tanto grupos quanto objetos criados com qualquer oficina. Assim, você pode alternar entre as oficinas e ainda trabalhar no mesmo documento. Este documento é o que é salvo em disco quando você salva seu trabalho. Você também pode abrir vários documentos em simultâneo, no FreeCAD, e abrir várias visualizações do mesmo documento.

No documento, os objetos podem ser movidos em grupos, e ter um nome único. O gerenciamento de grupos, objetos e nomes de objetos é feito principalmente a partir da [Vista em árvore](/Tree_view/pt-br "Tree view/pt-br"). **Nota:** Também pode ser feito, é claro, como tudo no FreeCAD, a partir do intérprete [Python](/Python/pt-br "Python/pt-br"). Na [Vista em árvore](/Tree_view/pt-br "Tree view/pt-br"), você pode criar ![](/images/Std_Group.svg). [grupos](/Std_Group/pt-br "Std Group/pt-br"), mover objetos para grupos, apagar objetos ou grupos, clicando com o botão direito na [Vista em árvore](/Tree_view/pt-br "Tree view/pt-br") ou em um objeto, renomear objetos clicando duas vezes em seus nomes, ou possivelmente outras operações, dependendo da bancada de trabalho atual.

Os objetos em um documento FreeCAD podem ser de diferentes tipos. Cada bancada de trabalho pode criar seus próprios tipos de objetos; por exemplo, o ![](/images/Workbench_Mesh.svg) [Bancada de trabalho Mesh](/Mesh_Workbench/pt-br "Mesh Workbench/pt-br") cria malhas, o ![](/images/Workbench_Part.svg) [Bancada de trabalho Part](/Part_Workbench/pt-br "Part Workbench/pt-br") cria objetos de peças (Part), o ![](/images/Workbench_Draft.svg) [Bancada de trabalho Draft](/Draft_Workbench/pt-br "Draft Workbench/pt-br") também cria objetos de peças (Part), etc.

Se há pelo menos um documento aberto no FreeCAD, só pode haver um documento ativo. Este é o documento que é exibido na visualização 3D atual, o documento em que você está trabalhando.

## Aplicação e interface do usuário

Como a arquitetura do FreeCAD é totalmente modular, a interface gráfica ou o ambiente gráfico é separado da parte da aplicação. Isto também é válido para os documentos. Os documentos também são separados em duas partes: o documento de Aplicação, que contém os objetos, e o documento Exibir, que contém a representação em tela dos objetos.

Pense nisso como dois espaços nos quais os objetos são definidos. Seus parâmetros de construção (é um cubo? um cone? de que tamanho?) são armazenados no documento de Aplicação, enquanto sua representação gráfica (o objeto é desenhado com linhas pretas? com faces azuis?) é armazenada no documento de Visualização. Por que isso acontece? Porque o FreeCAD também pode ser usado sem a interface gráfica, por exemplo, dentro de outros programas, e precisamos ser capazes de manipular os objetos, mesmo que nada seja exibido na tela.

Outra coisa que está contido dentro do documento Vista são as vistas em 3D. Um documento pode ter vários pontos de vista aberta, para que possa inspecionar o seu documento a partir de vários pontos de vista, em simultâneo. Talvez você gostaria de ver uma vista de topo e uma vista frontal do seu trabalho, em simultâneo? Então, você vai ter duas vistas do mesmo documento, ambos armazenados no documento Vista. A criação de novos pontos de vista ou vistas de fechamento pode ser feito a partir do menu Vistar, ou clicando com o botão direito em uma guia vista.

## Scripting

Os documentos podem ser criados, acessados e modificados facilmente a partir do intérprete [Python](/Python/pt-br "Python/pt-br"). Por exemplo :

```
FreeCAD.ActiveDocument

```

Irá devolver o documento atual (ativo)

```
FreeCAD.ActiveDocument.Blob

```

Acessaria um objeto chamado "Blob" dentro do seu documento.

```
FreeCADGui.ActiveDocument

```

Retornará a visualização do documento associado com o documento atual

```
FreeCADGui.ActiveDocument.Blob

```

Acessa a representação gráfica (vista) do objeto "Blob"

```
FreeCADGui.ActiveDocument.ActiveView

```

Retorna à visão atual

Retrieved from "<http://wiki.freecad.org/index.php?title=Document_structure/pt-br&oldid=1536748>"