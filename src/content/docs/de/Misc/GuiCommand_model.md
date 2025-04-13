---
title: GuiBefehl Modell
---

:::caution
Diese Seite zeigt ein Modell zur Dokumentation einesGUI-Befehls. Unter dem AbschnittAuswählbarer Blockunten findet man den gleichen Inhalt leicht auswählbar zum Einfügen in eine neue Seite.
:::

|                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------- |
| Base BeispielBefehlModell                                                                                               |
| Menu location                                                                                                           |
| Menü → Untermenü → Menütext des Befehls                                                                                 |
| Workbenches                                                                                                             |
| [Name de Arbeitsbereichs](/index.php?title=Workbench_Name&action=edit&redlink=1 "Workbench Name (page does not exist)") |
| Default shortcut                                                                                                        |
| F C                                                                                                                     |
| Introduced in version                                                                                                   |
| 0.19                                                                                                                    |
| See also                                                                                                                |
| _None_                                                                                                                  |
|                                                                                                                         |

## Beschreibung

So lange die Seite in Bearbeitung ist, fügt man oben auf der Seite die Vorlage [Template:UnfinishedDocu](/Template:UnfinishedDocu "Template:UnfinishedDocu") ein, einfach durch tippen von: **{{UnfinishedDocu}}**

In diesem ersten Absatz beschreibt man kurz, was der Befehl macht. Die Beschreibung kann auf andere Arbeitsbereiche verweisen, wie z. B. Arbeitsbereich ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de"). (_Editor note:_ Das Symbol hat 24px, nicht 16px)

Nicht vergessen [Template:Version](/Template:Version "Template:Version"), [Template:VersionMinus](/Template:VersionMinus "Template:VersionMinus"), [Template:VersionPlus](/Template:VersionPlus "Template:VersionPlus") und [Template:Obsolete](/Template:Obsolete "Template:Obsolete") oder ihre hochgestellten Varianten [Template:VersionNote](/Template:VersionNote "Template:VersionNote"), [Template:VersionNoteMinus](/Template:VersionNoteMinus "Template:VersionNoteMinus"), [Template:VersionNotePlus](/Template:VersionNotePlus "Template:VersionNotePlus") und [Template:VersionNoteObsolete](/Template:VersionNoteObsolete "Template:VersionNoteObsolete") (um Klammern zu vermeiden) einzusetzen, wo sie anwendbar sind. (Zum Übersetzen gibt es /de-Varianten)

Zum Beispiel:

- Das `App::Link`-Objekt ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")) ermöglicht die Verbindung zwischen Unterbaugruppen usw...

* ![](/images/Assembly_CreateSimulation.svg) [Simulation erstellen](/Assembly_CreateSimulation/de "Assembly CreateSimulation/de"): erstellt eine Simulation der aktiven Baugruppe. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")

- ...Arbeitsbereiche, Makros, Preference-Packs, Bundles[eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de"), und generische "andere" Werkzeugsammlungen[eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")...

Wenn möglich, eine Abbildung hinzufügen, dabei bitte den Leitfaden unter [WikiSeiten](/WikiPages/de#Grafiken "WikiPages/de") befolgen. Das Beispiel stammt von [Part Sweep](/Part_Sweep/de "Part Sweep/de"):

![](/images/Part_Sweep_simple.png)

Wahlweise: Eine Bildunterschrift unter der Abbildung hinzufügen, die beschreibt, was das Werkzeug macht

Schließende und öffnende Übersetzungs-Tags sollten Bilder und andere unveränderliche Elemente einfassen, wenn sie nicht übersetzt werden müssen. Die Bildunterschriften sollten immer übersetzt werden.

## Anwendung

1. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Std_Open.svg) [Base ExampleCommandModel](/GuiCommand_model "GuiCommand model") drücken. (_Editor note:_ Hier wird Die Vorlage [Template:Button](/Template:Button "Template:Button") verwendet; es ist wichtig, auf den Befehl, wie in diesem Beispiel gezeigt, zu verweisen)
   - Den Menüeintrag **Menü → Untermenü → ![](/images/Std_Open.svg) Menütext des Befehls** auswählen. (_Editor note:_ Hier wird die Vorlage [Template:MenuCommand](/Template:MenuCommand "Template:MenuCommand") verwendet)
   - Den Menüeintrag **Untermenü → ![](/images/Std_Open.svg) Menütext des Befehls** im Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3DAnsicht](/3D_view/de "3D view/de") auswählen. (_Editor note:_ Auch hier wird die Vorlage [Template:MenuCommand](/Template:MenuCommand "Template:MenuCommand") verwendet. Es können nicht alle Befehle über ein Kontextmenü erreicht werden.)
   - Das Tastaturkürzel F dann C oder Ctrl+Z. (_Editor note:_ Hier wird die Vorlage [Template:KEY](/Template:KEY "Template:KEY") verwendet; nicht alle Befehle haben ein Tastaturkürzel)
2. Schritte mit der erforderlichen Genauigkeit beschreiben. Einige Schritte brauchen einen Tastendruck auf der Tastatur, während andere das Anklicken einer Schaltfläche mit der Maus benötigen.
3. Optionen bearbeiten und OK drücken.

## Optionen

- Wahlweise werden hier die Befehlsoptionen aufgelistet. Siehe z.B. [Draft Wire](/Draft_Wire "Draft Wire").

## Beispiel

Optional.

## Hinweise

- Wahlweise kann man eine Stichpunktliste verwenden, wenn es mehrere Optionen gibt. Man kann hier auch Einschränkungen erwähnen.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

ein Objekt ist normalerweise von einem Basisobjekt abgeleitet. Man sollte nicht die vom Basisobjekt vererbten Eigenschaften auflisten. Siehe z.B [Draft Wire](/Draft_Wire#Properties "Draft Wire").

### Daten

Property Group

- Daten**Property Name 1** (`PropertyType`): Beschreibung der Eigenschaft. (_Editor note:_ Um den `PropertyType` zu finden, wählt man **Ausgeblendete anzeigen** im Kontextmenü des [Eigenschafteneditors](/Property_editor/de "Property editor/de") aus. Die QuickInfo jeder Eigenschaft enthält dann diese Information. Aber der `PropertyType` kann auch im Quellcode gefunden werden.)

### Ansicht

Property Group

- Ansicht**Property Name 2** (`PropertyType`): Beschreibung der Eigenschaft.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug BeispielBefehlsModell kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen verwendet werden:

```
Object = makeExampleCommandModel(Data1, Data2)

```

- Erstellt ein `Object` unter Verwndung von `Data1` und `Data2`.

Beispiel:

```
import FreeCAD, Base

Model = Base.makeExampleCommandModel(FreeCAD.Data1, FreeCAD.Data2)

```

## Andere

Optional.

## Auswählbarer Block

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

[Template:Workbench Tools navi/de](/index.php?title=Template:Workbench_Tools_navi/de&action=edit&redlink=1 "Template:Workbench Tools navi/de (page does not exist)")

Retrieved from "<http://wiki.freecad.org/index.php?title=GuiCommand_model/de&oldid=1560888>"
