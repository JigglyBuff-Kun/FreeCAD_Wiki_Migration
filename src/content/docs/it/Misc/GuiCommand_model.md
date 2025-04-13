---
title: Maschera del modello di base per la descrizione dei comandi
---

:::caution
Questa pagina mostra un modello di una pagina per documentare unComando GUI. Sotto ilSelectable blocknella sezione sottostante si trova lo stesso contenuto facilmente selezionabile per incollarlo in una nuova pagina.
:::

|                                                                                                                |
| -------------------------------------------------------------------------------------------------------------- |
| Esempio di comando                                                                                             |
| Posizione nel menu                                                                                             |
| Menu → Sottomenu → Comando                                                                                     |
| Ambiente                                                                                                       |
| [Ambiente](/index.php?title=Workbench_Name/it&action=edit&redlink=1 "Workbench Name/it (page does not exist)") |
| Avvio veloce                                                                                                   |
| _Nessuno_                                                                                                      |
| Introdotto nella versione                                                                                      |
| 0.17                                                                                                           |
| Vedere anche                                                                                                   |
| _Nessuno_                                                                                                      |
|                                                                                                                |

## Descrizione

Mentre la pagina è in costruzione, aggiungere il template [Template:UnfinishedDocu](/Template:UnfinishedDocu "Template:UnfinishedDocu") nella parte superiore della pagina semplicemente digitando: **{{UnfinishedDocu}}**

In questo primo paragrafo fornire una breve descrizione di ciò che fa il comando. La descrizione può fare riferimento ad altri ambienti di lavoro come ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it"). (_Nota dell'editore:_ l'immagine è 24px, non 16px)

Remember to use [Template:Version](/Template:Version "Template:Version"), [Template:VersionMinus](/Template:VersionMinus "Template:VersionMinus"), [Template:VersionPlus](/Template:VersionPlus "Template:VersionPlus") and [Template:Obsolete](/Template:Obsolete "Template:Obsolete"), or their superscript variants [Template:VersionNote](/Template:VersionNote "Template:VersionNote"), [Template:VersionNoteMinus](/Template:VersionNoteMinus "Template:VersionNoteMinus"), [Template:VersionNotePlus](/Template:VersionNotePlus "Template:VersionNotePlus") and [Template:VersionNoteObsolete](/Template:VersionNoteObsolete "Template:VersionNoteObsolete") (to avoid brackets), when applicable.

For example:

- The `App::Link` feature ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) allows linking between sub-assemblies etc...

* ![](/images/Assembly_CreateSimulation.svg) [Create Simulation](/Assembly_CreateSimulation "Assembly CreateSimulation"): creates a simulation of the current assembly. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ...workbenches, macros, preference packs, bundles[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"), and generic "other" collections of tools[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")...

Aggiungere un'immagine se possibile, e per favore seguire le linee guida di [WikiPages#Graphics](/WikiPages#Graphics "WikiPages"). Esempio tratto da Draft Linea:

![](/images/Part_Sweep_simple.png)

Facoltativo: aggiungere una didascalia sotto l'immagine per spiegare cosa sta facendo lo strumento.

Chiudere e riaprire i tag di traduzione prima e dopo le immagini e gli altri elementi fissi, se non c'è bisogno di tradurli. La didascalia dovrebbe sempre essere tradotta.

## Utilizzo

1. There are several ways to invoke the command:
   - Press the ![](/images/Std_Open.svg) [Base ExampleCommandModel](/GuiCommand_model "GuiCommand model") button. (_Editor note:_ This uses the [Template:Button](/Template:Button "Template:Button") template, it is necessary to link to the command as shown in this example)
   - Select the **Menu → Submenu → ![](/images/Std_Open.svg) Menu text for the command** option from the menu. (_Editor note:_ This uses the [Template:MenuCommand](/Template:MenuCommand "Template:MenuCommand") template)
   - Select the **Submenu → ![](/images/Std_Open.svg) Menu text for the command** option from the [Tree view](/Tree_view "Tree view") context menu or [3D view](/3D_view "3D view") context menu. (_Editor note:_ This also uses the [Template:MenuCommand](/Template:MenuCommand "Template:MenuCommand") template, not all commands can be accessed from a context menu)
   - Use the keyboard shortcut F then C or Ctrl+Z. (_Editor note:_ This uses the [Template:KEY](/Template:KEY "Template:KEY") template, not all commands have a keyboard shortcut)
2. Detailed steps as needed. Some steps may need Keyboard presses while others may require using the mouse to click on a Button.
3. Set options and press OK.

## Opzioni

- Qui elencare le opzioni del comando. Dare un'occhiata a due esempi, [Linea di Draft](/Draft_Line/it "Draft Line/it") e [Pad di PartDesign](/PartDesign_Pad/it "PartDesign Pad/it") .

## Esempio

Optionale

Optional.

## Limitazioni

- Facoltativo, utilizzare l'elenco puntato se ci sono più elementi

- Optional. Use a bullet list if there are multiple items. You can also mention limitations here.

## Proprietà

See also: [Property editor](/Property_editor "Property editor").

An object is usually derived from a base object. You should not list the properties that are inherited from that base object. See for example [Draft Wire](/Draft_Wire#Properties "Draft Wire").

### Dati

Property Group

- Dati**Nome della proprietà 1**: descrizione della proprietà

### Vista

Property Group

- Vista**Nome della proprietà 2**: descrizione della proprietà

## Script

_Vedere anche:_ [TechDraw API](/TechDraw_API/it "TechDraw API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento ExampleCommandModel può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla [console Python](/Python/it "Python/it") tramite la seguente funzione:

```
Object = makeExampleCommandModel(Data1, Data2)

```

- Crea un `Object` usando `Data1` e `Data2`.

Esempio:

```
import FreeCAD, Base

Model = Base.makeExampleCommandModel(FreeCAD.Data1, FreeCAD.Data2)

```

## Ulteriori informazioni

Optionale

Optional.

## Selectable block

```
<languages/>
{{UnfinishedDocu}}
<translate>

{{Docnav
|[[Base_PreviousCommand|PreviousCommand]]
|[[Base_NextCommand|NextCommand]]
|[[Workbench_Name|Workbench]]
|IconL= <!--filename of icon with extension (e.g. svg, png)-->
|IconR= <!--filename of icon with extension (e.g. svg, png)-->
|IconC= <!--filename of icon with extension (e.g. svg, png)-->
}}

{{GuiCommand
|Name=Base ExampleCommandModel
|Icon= <!--filename of icon with extension (e.g. svg, png) if not the same name as command-->
|MenuLocation=Menu → Submenu → Menu text for the command
|Workbenches=[[Workbench_Name|Workbench]]
|Shortcut={{KEY|F}} {{KEY|C}}
|Version=0.19
|SeeAlso= <!--add links to similar commands and related pages-->
}}

== Description ==

While the page is under construction, add the [[Template:UnfinishedDocu]] template at the top of the page by simply typing: '''{{UnfinishedDocu}}'''

In this first paragraph give a short description of what the command does. The description can refer to other workbenches such as the [[Image:Workbench_Sketcher.svg|24px]] [[Sketcher_Workbench|Sketcher Workbench]]. (''Editor note:'' The image is 24px, not 16px)

Remember to use [[Template:Version]], [[Template:VersionMinus]], [[Template:VersionPlus]] and [[Template:Obsolete]], or their superscript variants [[Template:VersionNote]], [[Template:VersionNoteMinus]], [[Template:VersionNotePlus]] and [[Template:VersionNoteObsolete]] (to avoid brackets), when applicable.

For example:
* The {{incode|App::Link}} feature ({{Version|0.19}}) allows linking between sub-assemblies etc...
* [[Image:Assembly_CreateSimulation.svg|32px]] [[Assembly_CreateSimulation|Create Simulation]]: creates a simulation of the current assembly. {{Version|1.1}}
* ...workbenches, macros, preference packs, bundles{{VersionNote|1.1}}, and generic "other" collections of tools{{VersionNote|1.1}}...

Add an image if possible, and please follow the guidelines in [[WikiPages#Graphics|WikiPages]]. Example taken from [[Part_Sweep|Part Sweep]]:
</translate>
[[Image:Part_Sweep_simple.png|none]]
<translate>
{{Caption|Optional: add a caption below the image to explain what the tool does}}

Closing and opening translate tags should surround images, and other fixed elements, if they don't need to be translated. The caption should always be translated.

== Usage ==

# There are several ways to invoke the command:
#* Press the {{Button|[[Image:Std_Open.svg|16px]] [[GuiCommand_model|Base ExampleCommandModel]]}} button. (''Editor note:'' This uses the [[Template:Button]] template, it is necessary to link to the command as shown in this example)
#* Select the {{MenuCommand|Menu → Submenu → [[Image:Std_Open.svg|16px]] Menu text for the command}} option from the menu. (''Editor note:'' This uses the [[Template:MenuCommand]] template)
#* Select the {{MenuCommand|Submenu → [[Image:Std_Open.svg|16px]] Menu text for the command}} option from the [[Tree_view|Tree view]] context menu or [[3D_view|3D view]] context menu. (''Editor note:'' This also uses the [[Template:MenuCommand]] template, not all commands can be accessed from a context menu)
#* Use the keyboard shortcut {{KEY|F}} then {{KEY|C}} or {{KEY|Ctrl}}+{{KEY|Z}}. (''Editor note:'' This uses the [[Template:KEY]] template, not all commands have a keyboard shortcut)
# Detailed steps as needed. Some steps may need {{KEY|Keyboard}} presses while others may require using the mouse to click on a {{Button|Button}}.
# Set options and press {{Button|OK}}.

== Options ==

* Optional. List the command options here. See for example [[Draft_Wire|Draft Wire]].

== Example ==

Optional.

== Notes ==

* Optional. Use a bullet list if there are multiple items. You can also mention limitations here.

== Properties ==

See also: [[Property_editor|Property editor]].

An object is usually derived from a base object. You should not list the properties that are inherited from that base object. See for example [[Draft_Wire#Properties|Draft Wire]].

=== Data ===

{{Properties_Title|Property Group}}

* {{PropertyData|Property Name 1|PropertyType}}: Description of the property. (''Editor note:'' to find the {{Value|PropertyType}} select {{MenuCommand|Show hidden}} in the context menu of the [[Property_editor|Property editor]]. The tooltip of each property will then include this information. But the {{Value|PropertyType}} can also be found in the source code.)

=== View ===

{{Properties_Title|Property Group}}

* {{PropertyView|Property Name 2|PropertyType}}: Description of the property.

== Scripting ==

See also: [https://freecad.github.io/SourceDoc/ Autogenerated API documentation] and [[FreeCAD_Scripting_Basics|FreeCAD Scripting Basics]].

The ExampleCommandModel tool can be used in [[Macros|macros]] and from the [[Python|Python]] console by using the following function:

</translate>
{{Code|code=
Object = makeExampleCommandModel(Data1, Data2)
}}
<translate>

* Creates an {{incode|Object}} using {{incode|Data1}} and {{incode|Data2}}.

Example:

</translate>
{{Code|code=
import FreeCAD, Base

Model = Base.makeExampleCommandModel(FreeCAD.Data1, FreeCAD.Data2)
}}
<translate>

== Other ==

Optional.

{{Docnav
|[[Base_PreviousCommand|PreviousCommand]]
|[[Base_NextCommand|NextCommand]]
|[[Workbench_Name|Workbench]]
|IconL= <!--filename of icon with extension (e.g. svg, png)-->
|IconR= <!--filename of icon with extension (e.g. svg, png)-->
|IconC= <!--filename of icon with extension (e.g. svg, png)-->
}}

</translate>
{{Workbench_Tools_navi{{#translation:}}}} <!--use the Tools navi belonging to the workbench -->
{{Userdocnavi{{#translation:}}}}

```

[Template:Workbench Tools navi/it](/index.php?title=Template:Workbench_Tools_navi/it&action=edit&redlink=1 "Template:Workbench Tools navi/it (page does not exist)")

Retrieved from "<http://wiki.freecad.org/index.php?title=GuiCommand_model/it&oldid=1560790>"
