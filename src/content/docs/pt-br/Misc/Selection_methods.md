---
title: Métodos de seleção
---
## Visão geral

Os métodos de seleção no FreeCAD permitem a seleção de objetos no [FreeCAD Interface](/Interface/pt-br "Interface/pt-br"): tais como [vista 3D](/3D_view/pt-br "3D view/pt-br"), [vista em árvore](/Tree_view/pt-br "Tree view/pt-br"), [métodos de seleção](/Selection_view/pt-br "Selection view/pt-br"), [vista de seleção](/Selection_view/pt-br "Selection view/pt-br"), e outros diálogos. Alguns métodos de seleção são específicos das bancadas de trabalho e estão documentados na documentação específica das bancadas de trabalho.

## Vista 3D

Na [vista 3D](/3D_view/pt-br "3D view/pt-br") há várias maneiras de selecionar objetos.

### Seleção simples

A seleção simples com o mouse (por padrão, clique com o botão esquerdo do mouse) e a pré-seleção são descritas na página [Estilos de Navegação](/Mouse_Model/pt-br "Mouse Model/pt-br").

### Cliques repetidos

O primeiro clique seleciona um sub-elemento (vértice, borda ou face) do objeto sob o mouse. Um segundo clique seleciona o objeto inteiro. [introduced in 0.18](/Release_notes_0.18 "Release notes 0.18")

O terceiro clique estende a seleção a seu objeto 'container' ([PartDesign Body](/PartDesign_Body "PartDesign Body"), [Std Part](/Std_Part "Std Part"), e outros). Outros cliques expandem a seleção até a cadeia de 'contêineres'. [introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")

### Comandos de seleção

* Para selecionar todos os objetos: [Std Std\_SelectAll](/Std_SelectAll/pt-br "Std SelectAll/pt-br").
* Para encaixotar selecione vários objetos principais: [Std Std BoxSelection](/Std_BoxSelection/pt-br "Std BoxSelection/pt-br").
* Para encaixotar selecione várias faces: [Std BoxElementSelection](/Std_BoxElementSelection/pt-br "Std BoxElementSelection/pt-br") ou [Part BoxSelection](/Part_BoxSelection/pt-br "Part BoxSelection/pt-br").

## Vista de seleção

A [vista de seleção](/Selection_view/pt-br "Selection view/pt-br") mostra os nomes dos objetos selecionados, incluindo seu nome completo de um objeto, por exemplo, Unnamed#Body.Box001.Face17.

Também permite realizar algumas ações como [Std ViewFitSelection](/Std_ViewFitSelection/pt-br "Std ViewFitSelection/pt-br"), e enviar o objeto para o [Python console](/Python_console/pt-br "Python console/pt-br").

### Exportação de objeto

"Isto deve estar na página [Vista de seleção](/Selection_view/pt-br "Selection view/pt-br")".

Selecione qualquer objeto complexo, por exemplo, [PartDesign Body](/PartDesign_Body/pt-br "PartDesign Body/pt-br") ou [Std Part](/Std_Part/pt-br "Std Part/pt-br"), depois na [vista de seleção](/Selection_view/pt-br "Selection view/pt-br") selecione novamente o objeto e pressione Ctrl. + C no teclado para abrir o diálogo **Object selection**. Isto permite copiar o objeto selecionado junto com todos ou apenas alguns dos objetos de dependência desse objeto. Por exemplo, para uma [Std Part](/Std_Part/pt-br "Std Part/pt-br") os possíveis objetos a serem selecionados incluem a [Std Part](/Std_Part/pt-br "Std Part/pt-br") em si, mas também sua Origem, seus três eixos base (XYZ), e seus três planos base (XY, YZ, XZ).

Após pressionar OK, os objetos selecionados são copiados para a memória, e depois podem ser colados no documento para duplicar apenas esses objetos.

![](/images/ObjectSelection.png)

Diálogo de seleção de objetos que é lançado a partir do [vista de seleção](/Selection_view/pt-br "Selection view/pt-br").

## Vista em árvore

Na [vista em árvore](/Tree_view/pt-br "Tree view/pt-br") os itens podem ser selecionados, ou desmarcados, um de cada vez, segurando a tecla Ctrl e clicando com o mouse.

Um intervalo de itens pode ser selecionado clicando no primeiro item, segurando Shift, e clicando no último item.

A seleção de um único item também mostrará suas propriedades no [editor de propriedade](/Property_editor/pt-br "Property editor/pt-br").

Um duplo clique abrirá qualquer [painel de tarefas](/Task_panel/pt-br "Task panel/pt-br") associado que contenha ações. Certifique-se de fechar este painel de tarefas antes de executar outro comando ou mudar para qualquer outra bancada de trabalho.

Mais métodos estão disponíveis abrindo o menu de contexto (clique com o botão direito do mouse), dependendo do objeto selecionado ou da bancada de trabalho ativa; veja as informações em [vista em árvore](/Tree_view/pt-br "Tree view/pt-br").

## Scripting

A seleção de objetos é inerentemente uma tarefa gráfica e, portanto, só está disponível quando a ‘interface’ gráfica do usuário é carregada.

Estes comandos podem ser usados em [macros](/Macros/pt-br "Macros/pt-br") ou a partir do [console Python](/Python_console/pt-br "Python console/pt-br").

```
import FreeCADGui as Gui

Gui.Selection.addSelection
Gui.Selection.addSelectionGate
Gui.Selection.Filter

```

O comando `addSelectionGate` restringe o usuário de selecionar objetos não especificados na cadeia de seleção. Um símbolo aparece quando o ponteiro está sobre um item que não está no grupo especificado.

```
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Edge")

#### or
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Face")

#### or
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Vertex")

```

To remove `SelectionGate()`:

```
Gui.Selection.removeSelectionGate()

```

Consulte a [Documentação do código-fonte](/Source_documentation/pt-br "Source documentation/pt-br") e [Ajuda Padrão do Python](/Std_PythonHelp/pt-br "Std PythonHelp/pt-br") para obter mais ajuda sobre o uso dessas ferramentas.

Retrieved from "<http://wiki.freecad.org/index.php?title=Selection_methods/pt-br&oldid=1268562>"