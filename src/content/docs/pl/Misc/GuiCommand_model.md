---
title: Model polecenia GUI
---

:::caution
Ta strona pokazuje model dokumentującyGui Command. W sekcjiSelectable blockponiżej znajduje się ta sama zawartość, którą można łatwo wybrać do wklejenia na nowej stronie.
:::

|                                                                                                           |
| --------------------------------------------------------------------------------------------------------- |
| Szablon polecenia GUI                                                                                     |
| Lokalizacja w menu                                                                                        |
| Menu → menu podrzędne → Tekst menu dla polecenia                                                          |
| Środowisko pracy                                                                                          |
| [Workbench](/index.php?title=Workbench_Name&action=edit&redlink=1 "Workbench Name (page does not exist)") |
| Domyślny skrót                                                                                            |
| F C                                                                                                       |
| Wprowadzono w wersji                                                                                      |
| 0.19                                                                                                      |
| Zobacz także                                                                                              |
| _brak_                                                                                                    |
|                                                                                                           |

## Opis

Gdy strona jest w budowie, dodaj szablon [Template:UnfinishedDocu](/Template:UnfinishedDocu "Template:UnfinishedDocu") na górze strony, wpisując po prostu: **{{UnfinishedDocu}}**.

W pierwszym akapicie należy podać krótki opis działania polecenia. Opis może odnosić się do innych stołów roboczych, takich jak ![](/images/Workbench_Sketcher.svg). [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"). *(*Uwaga edytora: _Obraz ma 24px, a nie 16px)_

Pamiętaj, aby używać [Template:Version](/Template:Version "Template:Version"), [Template:VersionMinus](/Template:VersionMinus "Template:VersionMinus"), [Template:VersionPlus](/Template:VersionPlus "Template:VersionPlus") i [Template:Obsolete](/Template:Obsolete "Template:Obsolete") lub ich wariantów w postaci indeksów górnych: [Template:VersionNote](/Template:VersionNote "Template:VersionNote"), [Template:VersionNoteMinus](/Template:VersionNoteMinus "Template:VersionNoteMinus"), [Template:VersionNotePlus](/Template:VersionNotePlus "Template:VersionNotePlus") i [Template:VersionNoteObsolete](/Template:VersionNoteObsolete "Template:VersionNoteObsolete") (aby uniknąć nawiasów), w stosownych przypadkach.

Na przykład:

- Funkcja `App::Link` ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) umożliwia łączenie między złożeniami podrzędnymi itp...

* ![](/images/Assembly_CreateSimulation.svg) [Utwórz symulację](/Assembly_CreateSimulation/pl "Assembly CreateSimulation/pl"): tworzy symulację aktualnego złożenia. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

- ...środowiska pracy, makrodefinicje, paczki preferencji, pakiety[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")i ogólne "inne" zestawy narzędzi[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")...

Dodaj obrazek, jeśli to możliwe, i postępuj zgodnie z wytycznymi w [WikiPages](/WikiPages#Grafika "WikiPages"). Przykład zaczerpnięty z [Wyciągnięcia po ścieżce](/Part_Sweep/pl "Part Sweep/pl"):

![](/images/Part_Sweep_simple.png)

Opcjonalnie: dodaj podpis pod obrazem, aby wyjaśnić działanie narzędzia.

Zamykające i otwierające znaczniki tłumaczenia powinny otaczać obrazy i inne stałe elementy, jeśli nie muszą być tłumaczone. Podpis powinien być zawsze przetłumaczony.

## Użycie

1. Istnieje kilka sposobów wywołania polecenia:
   - Naciśnij przycisk ![](/images/Std_Open.svg) Base ExampleCommandModel. *(*Uwaga edytora: _Wykorzystuje to szablon [Template:Button](/Template:Button "Template:Button"), konieczne jest powiązanie z poleceniem, jak pokazano w tym przykładzie)_
   - Wybierz opcję z menu **Menu → menu podrzędne → ![](/images/Std_Open.svg) Tekst menu dla opcji polecenia**. *(*Uwaga edytora: _To używa szablonu [Template:MenuCommand](/Template:MenuCommand "Template:MenuCommand"))_
   - Wybierz opcję **Submenu → ![](/images/Std_Open.svg) Tekst menu dla polecenia** z menu kontekstowego [Widoku drzewa](/Tree_view/pl "Tree view/pl") lub [Widoku 3D](/3D_view/pl "3D view/pl"). *(*Uwaga edytora: _Używa to również szablonu [Template:MenuCommand](/Template:MenuCommand "Template:MenuCommand"), nie wszystkie polecenia mogą być dostępne z menu kontekstowego)_
   - Użyj skrótu klawiaturowego F, a następnie C lub Ctrl + Z. *(*Uwaga edytora: _Wykorzystuje to szablon [Template:KEY](/Template:KEY "Template:KEY"), nie wszystkie polecenia mają skrót klawiaturowy)_
2. Szczegółowe kroki według potrzeb. Niektóre kroki mogą wymagać naciśnięcia Keyboard, podczas gdy inne mogą wymagać kliknięcia myszą na Przycisk.
3. Ustaw opcje i naciśnij OK.

## Opcje

- Opcjonalnie. Wymień tutaj opcje polecenia. Zobacz na przykład [Polilinia](/Draft_Wire/pl "Draft Wire/pl").

## Przykład

Opcjonalnie.

## Uwagi

- Opcjonalnie. Użyj listy punktów, jeśli jest wiele elementów. Można tu również wspomnieć o ograniczeniach.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt jest zwykle pochodną obiektu bazowego. Nie należy wymieniać właściwości, które są dziedziczone z tego obiektu bazowego. Zobacz na przykład [Polilinia](/Draft_Wire/pl#Właściwości "Draft Wire/pl").

### Dane

Grupa właściwości

- DANE**Property Name 1** (`PropertyType`): Opis właściwości. *(*Uwaga edytora: _aby znaleźć `PropertyType` wybierz **Pokaż ukryte** w menu kontekstowym [Edytora własciwości](/Property_editor/pl "Property editor/pl"). Podpowiedź każdej właściwości będzie zawierać te informacje. Ale `PropertyType` można również znaleźć w kodzie źródłowym)_.

### Widok

Grupa właściwości

- WIDOK**Property Name 2** (`PropertyType`): Opis właściwości.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Przykład polecenia GUI** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
Object = makeExampleCommandModel(Data1, Data2)

```

- Tworzy `Object` używając `Data1` i `Data2`.

Przykład:

```
import FreeCAD, Base

Model = Base.makeExampleCommandModel(FreeCAD.Data1, FreeCAD.Data2)

```

## Pozostałe

Opcjonalnie.

## Blok do zaznaczenia

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

[Template:Workbench Tools navi/pl](/index.php?title=Template:Workbench_Tools_navi/pl&action=edit&redlink=1 "Template:Workbench Tools navi/pl (page does not exist)")

Retrieved from "<http://wiki.freecad.org/index.php?title=GuiCommand_model/pl&oldid=1560934>"
