---
title: Draft Ebene
---
|  |
| --- |
| Draft Ebene |
| Menüeintrag |
| Dienstprogramme → Neue Ebene |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| [Draft AutoGruppieren](/Draft_AutoGroup/de "Draft AutoGroup/de"), [Draft EbenenManager](/Draft_LayerManager/de "Draft LayerManager/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Layer.svg) **Draft Ebene** erstellt eine Draft-Ebene (Layer-Objekt - eine Zeichnungsebene, die einer Folienschicht bei mehrlagigen Zeichnungen entspricht). Eine Ebene ist eine besondere Art von Gruppe mit einigen [Darstellungseigenschaften](#Ansicht). Diese Eigenschaften und alle Änderungen an ihnen werden an die Objekte auf dieser Ebene weitergegeben. Die Ebenen an sich werden in einer weiteren besonderen Gruppe abgelegt: dem Draft-Ebenen-Behälter (LayerContainer-Objekt).

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Layer.svg) Ebene drücken.
   * Den Menüeintrag **Dienstprogramme → ![](/images/Draft_Layer.svg) Neue Ebene** auswählen oder die Menüoption im Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   * Falls der Ebenen-Behälter schon vorhanden ist: Diesen mit der rechten Maustaste in der [Baumansicht](/Tree_view/de "Tree view/de") anklicken und die Menüoption **![](/images/Draft_NewLayer.svg) Neue Ebene hinzufügen** aus dem Kontextmenü auswählen.
2. Falls er noch nicht vorhanden ist, wird zuerst der Ebenen-Behälter erstellt.
3. Eine Ebene wird erstellt und im Ebenen-Behälter abgelegt.
4. Wahlweise die [Eigenschaften](#Eigenschaften) der Ebene anpassen.
5. Wahlweise Objekte der Ebene zuordnen, indem sie in der [Baumansicht](/Tree_view/de "Tree view/de") auf die Ebene gezogen und abgelegt werden. Objekte können auch einer Ebene zugeordnet werden, indem man die Daten-Eigenschaft**Group** der Ebene bearbeitet.
6. Wahlweise die Ebene [aktivieren](#Ebenen-Optionen).

## Kontextmenü

### Optionen des Ebenen-Behälters

Für ein Draft-Ebenen-Behälter sind diese zusätzlichen Optionen im Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") vorhanden:

* **![](/images/Draft_NewLayer.svg) Neue Ebene hinzufügen**: Fügt dem aktuellen Dokument eine neue Ebene hinzu.
* **![](/images/Draft_SetStyle.svg) Neuzuweisung der Eigenschaften aller Ebenen**: Ertfernt [overrides](#Overrides) von Objekten auf allen Ebenen durch Neuzuweisen der Eigenschaften der Ebene zu der sie gehören. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")
* **![](/images/Draft_Layers.svg) Ebenenduplikate zusammenführen**: Führt alle Ebenen mit der gleichen Basisbezeichnung (base label) zusammen.

:   Die Basisbezeichnung einer Ebene ist ihre Daten-Eigenschaft**Label** ohne nachgestellte Ziffern und Leerzeichen. Alle Ebenen mit derselben Basisbezeichnung werden zu einer einzigen Ebene zusammengeführt, deren Daten-Eigenschaft**Label** auf diese Basisbezeichnung eingestellt ist.

### Optionen der Ebene

Für eine Draft-Ebene sind diese zusätzlichen Optionen im Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") verfügbar:

* **![](/images/Button_right.svg) [Diese Ebene aktivieren](/Draft_AutoGroup/de "Draft AutoGroup/de")**: aktiviert die ausgewählte Ebene.
* **![](/images/Draft_SetStyle.svg) Neuzuweisung der Eigenschaften der Ebene**: entfernt [overrides](#Overrides) von Objekten auf allen Ebenen durch Neuzuweisen der Eigenschaften der Ebene. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")
* **![](/images/Draft_SelectGroup.svg) [Ebeneninhalt auswählen](/Draft_SelectGroup/de "Draft SelectGroup/de")**: wählt die Objekte innerhalb der ausgewählten Ebene aus.

## Verhalten von Ziehen und Ablegen

[eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

Wenn ein Objekt aus einer [Std Gruppe](/Std_Group/de "Std Group/de") oder einem gruppenähnlichen Objekt, wie z. B. einem [Arch Gebäudeteil](/Arch_BuildingPart/de "Arch BuildingPart/de"), auf einer Ebene in der [Baumansicht](/Tree_view/de "Tree view/de") abgelegt wird, wird es nicht aus der Gruppe entfernt und umgekehrt. Um ein Objekt von einer Ebene zu entfernen, muss es auf einer anderen Ebene oder auf dem Dokumentenknoten abgelegt werden. Beim Ziehen von einer Ebene oder Ablegen auf einer Ebene muss die Strg-Taste nicht gedrückt werden.

## Overrides

[eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")

Objects inside a layer can have overrides. The following logic applies:

* When an object is put in a layer it always adopts the properties of that layer.
* A property of the object that is subsequently changed is considered an override.
* When a property of the layer, or the object in the layer, is then changed so that they match again, there is no longer an override, and the property is synced again.

Der Ebenenbehälter und alle Ebenen besitzen eine Option im [Kontextmenü](#Kontextmenü) zum Neuzuordnen von Eigenschaften und gleichzeitigem Entfernen von "overrides".

## Hinweise

* Eine neue Ebene kann auch mit dem Befehl [Draft AutoGruppieren](/Draft_AutoGroup/de "Draft AutoGroup/de") erstellt werden oder mit dem [Draft EbenenManager](/Draft_LayerManager/de "Draft LayerManager/de").

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Draft Layer-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Layer

* Daten-Eigenschaft**Group** (`LinkList`): Gibt die Objekte an, die der Ebene zugeordnet sind.

### Ansicht

Layer

Die Eigenschaften in diesem Abschnitt werden auf Objekte angewendet, die sich innerhalb der Ebene befinden. Alle Änderungen an diesen Eigenschaften werden an sie weitergegeben. Für zwei Eigenschaften, die Ansicht-Eigenschaft**Line Color** und die Ansicht-Eigenschaft**Shape Color**, ist dieses Verhalten optional.

* Ansicht-Eigenschaft**Draw Style** (`Enumeration`): gibt den Zeichenstil der Ebene an: `Solid` (Vollinie), `Dashed` (Strichlinie), `Dotted` (Punktlinie) oder `Dashdot` Strich-Punkt-Linie
* Ansicht-Eigenschaft**Line Color** (`Color`): gibt die Linienfarbe der Ebene an.
* Ansicht-Eigenschaft**Line Width** (`Float`): gibt die Linienbreite der Ebene an.
* Ansicht-Eigenschaft**Override Line Color Children** (`Bool`): gibt an, ob Änderungen an der Ansicht-Eigenschaft**Line Color** der Ebene auf die Objekte innerhalb der Ebene übertragen werden.
* Ansicht-Eigenschaft**Override Shape Appearance Children** (`Bool`): gibt an, ob Änderungen an der Ansicht-Eigenschaft**Shape Appearance** der Ebene auf die Objekte innerhalb der Ebene übertragen werden. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
* Ansicht-Eigenschaft**Shape Appearance** (`MaterialList`): gibt das Erscheinungsbild der zur Ebene gehörenden Formen an. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
* Ansicht-Eigenschaft (versteckt)**Shape Color** (`Color`): gibt die Farbe der zur Ebene gehörenden Formen an. Sie wird mit der **Diffuse Color** (Streulichtfarbe) der Ansicht-Eigenschaft**Shape Appearance** synchronisiert.
* Ansicht-Eigenschaft**Transparency** (`Percent`): gibt die Transparenz der Ebene an. Sie wird mit der **Transparenz** der Ansicht-Eigenschaft**Shape Appearance** synchronisiert.

Print

* Ansicht-Eigenschaft**Line Print Color** (`Color`): gibt die Liniendruckfarbe der Ebene an.
* Ansicht-Eigenschaft**Use Print Color** (`Bool`): gibt an, ob die Ansicht-Eigenschaft**Line Print Color** der Ebene verwendet wird, wenn eine [TechDraw DraftAnsicht](/TechDraw_DraftView/de "TechDraw DraftView/de") aus den Objekten der Ebene erstellt wird.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um eine Draft-Ebene zu erstellen, wird die Methode `make_layer` des Draft-Moduls verwendet. Um Objekte zu einer Ebene hinzuzufügen oder daraus zu entfernen, wird ihre Eigenschaft `Group` geändert.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

layer = Draft.make_layer(line_color=(1.0, 0.0, 0.0, 0.0),
                         shape_color=(1.0, 1.0, 0.0, 0.0))

polygon1 = Draft.make_polygon(5, radius=1000)
polygon2 = Draft.make_polygon(3, radius=500)
polygon3 = Draft.make_polygon(6, radius=220)
layer.Group = [polygon1, polygon2, polygon3]

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Layer/de&oldid=1550766>"