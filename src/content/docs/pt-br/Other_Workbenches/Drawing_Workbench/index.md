---
title: Bancada de trabalho Drawing
---

:::caution
TheDrawing Workbenchis no longer included after version 0.20.TheTechDraw Workbenchis its more advanced replacement.
:::
![](/images/Workbench_Drawing.svg)

Ícone da bancada de trabalho Drawing

## Introdução

O módulo Drawing permite que você coloque seu trabalho em 3D no papel. Ou seja, colocar vistas de seus modelos em uma janela 2D e inserir essa janela em um desenho, por exemplo, uma folha com uma borda, um título e seu logotipo e finalmente imprimir essa folha.

![](/images/Drawing_extraction.png)

## Ferramentas

Estas são ferramentas para criar, configurar e exportar folhas de desenho 2D

- ![](/images/Drawing_New.png) [Abrir um gráfico vetorial escalável](/index.php?title=Drawing_Open_SVG/pt-br&action=edit&redlink=1 "Drawing Open SVG/pt-br (page does not exist)"): Abre uma folha de desenho previamente salva como um arquivo SVG

- ![](/images/Drawing_Landscape_A3.png) [Nova folha de desenho A3 orientação paisagem](/index.php?title=Drawing_Landscape_A3/pt-br&action=edit&redlink=1 "Drawing Landscape A3/pt-br (page does not exist)"): Cria uma folha de desenho a partir do modelo padrão A3 do FreeCAD.

- ![](/images/Drawing_View.png) [Inserir uma vista](/index.php?title=Drawing_View/pt-br&action=edit&redlink=1 "Drawing View/pt-br (page does not exist)"): Insere uma visão do objeto selecionado na folha de desenho ativo

- ![](/images/Drawing_Annotation.png) [Anotação](/Drawing_Annotation "Drawing Annotation"): Acrescenta uma anotação à folha de desenho atual

- ![](/images/Drawing_Clip.png) [Corte](/index.php?title=Drawing_Clip/pt-br&action=edit&redlink=1 "Drawing Clip/pt-br (page does not exist)"): Acrescenta um grupo de recortes à folha de desenho atual

- ![](/images/Drawing_Openbrowser.png) [Open Browser](/Drawing_Openbrowser "Drawing Openbrowser"): Opens a preview of the current sheet in the browser

- ![](/images/Drawing_Orthoviews.png) [Ortho Views](/Drawing_Orthoviews "Drawing Orthoviews"): Automatically creates orthographic views of an object on the current drawing sheet

- ![](/images/Drawing_Symbol.png) [Symbol](/Drawing_Symbol "Drawing Symbol"): Adds the contents of a SVG file as a symbol on the current drawing sheet

- ![](/images/Drawing_DraftView.png) [Draft View](/Draft_Drawing "Draft Drawing"): Inserts a special Draft view of the selected object in the current drawing sheet

- ![](/images/Drawing_SpreadsheetView.png) [Spreadsheet View](/Drawing_SpreadsheetView "Drawing SpreadsheetView"): Inserts a view of a selected spreadsheet in the current drawing sheet

- ![](/images/Drawing_Save.png) [Save sheet](/Drawing_Save "Drawing Save"): Saves the current sheet as a SVG file

* [Project Shape](/Drawing_ProjectShape "Drawing ProjectShape"): Creates a projection of the selected object (Source) in the 3D view.

* _Note:_ the [Draft Drawing](/Draft_Drawing "Draft Drawing") tool is used with [Draft objects](/Draft_Workbench "Draft Workbench"). It has some additional capabilities over the Drawing tools, and supports specific objects like [Draft dimensions](/Draft_Dimension "Draft Dimension").

## Workflow

The document contains a 3D shape object (leg) from which we want to produce a drawing. Therefore a "Page" is created. A page it's instantiated from a template, for example, the "A3_Landscape" template. The template is an [SVG](/SVG "SVG") document which can hold a page frame, a logo, and other elements.

Nesta página, podemos inserir uma ou mais vistas. Cada vista tem uma posição na página, um fator de escala e propriedades adicionais. Cada vez que a página ou a vista ou o objeto referenciado muda, a página é regenerada e a exibição da página é atualizada.

## Scripting

No momento, o fluxo de trabalho da interface gráfica do usuário é muito limitado, por isso a API de scripting é mais interessante.

See the [Drawing API example](/Drawing_API_example "Drawing API example") page for a description of the functions used to create drawing pages and views.

## Extending the Drawing Module

Some notes on the programming side of the drawing module will be added to the [Drawing Documentation](/Drawing_Documentation "Drawing Documentation") page. This is to help quickly understand how the drawing module works, enabling programmers to rapidly start programming for it.

## External links

- [Intro to mechanical drawing on Youtube - by Normal Universe](https://www.youtube.com/watch?v=1Hm5Zyjmjac)

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Workbench/pt-br&oldid=1462062>"
