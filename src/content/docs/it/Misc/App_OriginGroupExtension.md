---
title: App Origin
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

## Introduzione

Un oggetto App Origin, o formalmente un `App::OriginGroupExtension`, è una classe che fornisce elementi selezionabili che rappresentano i tre assi standard (X, Y, Z) e tre piani standard (XY , XZ e YZ) agli oggetti che intendono disporre diversi tipi di geometria nello spazio.

![](/images/Std_Part.svg) Oggetti[Parte](/Std_Part/it "Std Part/it") [(App Part)](/App_Part/it "App Part/it") e oggetti ![](/images/PartDesign_Body.svg) [Corpi PartDesign](/PartDesign_Body/it "PartDesign Body/it") vengono creati con gli oggetti Origin per impostazione predefinita. Se necessario, gli oggetti Origin possono essere aggiunti agli oggetti ![](/images/Assembly_Assembly_Tree.svg) [Assembly](/index.php?title=Assembly3_CreateAssembly/it&action=edit&redlink=1 "Assembly3 CreateAssembly/it (page does not exist)") del workbench ![](/images/Assembly3_workbench_icon.svg) [Assembly3](/Assembly3_Workbench/it "Assembly3 Workbench/it"), pure.

![Tree view](/images/App_OriginGroupExtension_example.png) ![3D view](/images/App_OriginGroupExtension-02.png)

Sinistra: La [vista ad albero](/Tree_view/it "Tree view/it") mostra tre oggetti che utilizzano oggetti Origin. A destra: rappresentazione degli elementi Origin nella [vista 3D](/3D_view/it "3D view/it").

Gli assi e i piani sono oggetti di tipo `App::Line` e `App::Plane` rispettivamente. Ciascuno di questi elementi può essere nascosto e visualizzato individualmente con la barra Space. Questo può essere utile quando si seleziona il riferimento corretto per la creazione di altri oggetti, ad es. [Schizzi](/Sketch/it "Sketch/it").

![](/images/FreeCAD_core_objects.svg)

Diagramma semplificato delle relazioni tra gli oggetti principali del programma. Due di essi hanno un oggetto Origin per controllare il posizionamento degli oggetti raggruppati sotto di essi.

Retrieved from "<http://wiki.freecad.org/index.php?title=App_OriginGroupExtension/it&oldid=1312702>"