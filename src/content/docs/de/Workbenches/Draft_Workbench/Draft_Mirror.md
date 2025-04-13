---
title: Draft Spiegeln
---
|  |
| --- |
| Draft Spiegeln |
| Menüeintrag |
| Änderung → Spiegeln Bearbeiten → Spiegeln |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| M I |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Draft Klonen](/Draft_Clone/de "Draft Clone/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Mirror.svg) **Draft Spiegeln** erstellt gespiegelte Kopien, [Part-Mirror](/Part_Mirror/de "Part Mirror/de")-Objekte, von ausgewählten Objekten. Ein [Part-Mirror](/Part_Mirror/de "Part Mirror/de")-Objekt ist parametrisch, d.h. es aktualisiert sich, wenn sich sein Quellobjekt ändert.

Der Befehl kann auf 2D-Objekte angewendet werden, die im Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") oder im Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") erstellt wurden, aber auch auf viele 3D-Objekte, wie jene, die in den Arbeitsbereichen [Part](/Part_Workbench/de "Part Workbench/de"), [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") oder [BIM](/BIM_Workbench/de "BIM Workbench/de") erstellt wurden.

![](/images/Draft_Mirror_example.jpg)

Ein Objekt Spiegeln

## Anwendung

Siehe auch: [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") und [Draft Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Wahlweise ein oder mehrere Objekte auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Mirror.svg) Spiegeln drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Änderung → ![](/images/Draft_Mirror.svg) Spiegeln** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Bearbeiten → ![](/images/Draft_Mirror.svg) Spiegeln** auswählen.
   * Das Tastaturkürzel M dann I.
3. Wurde noch kein Objekt ausgewählt: Ein Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
4. Der Aufgaben-Bereich **Spiegeln** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
5. Den ersten Punkt der Spiegelebene in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen, oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
6. Den zweiten Punkt der Spiegelebene in der [3D Ansicht](/3D_view/de "3D view/de") auswählen, oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.
7. Die Spiegelebene wird durch die ausgewählten Punkte und die Normale der [Draft-Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") definiert.

## Optionen

Die im Aufgaben-Bereich verfügbaren Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastenkürzel sind die Standardtastenkürzel.

* Um die Koordinaten des Basispunktes von Hand einzugeben, gib die X, Y und Z Komponenten ein und drücke nach jeder Enter. Oder du kannst die ![](/images/Draft_AddPoint.svg) Enter point Schaltfläche betätigen sobald du die gewünschten Werte hast. Es ist ratsam den Zeiger vor der Eingabe der Koordinaten aus der [3D Ansicht](/3D_view/de "3D view/de") heraus zu bewegen.
* Drücke R oder wähle das **Relative** Optionsfeld um in den relativ Modus umzuschalten. Wenn der relativ Modus aktiv ist, dann sind die Koordinaten des zweiten Punktes relativ zu denen des ersten Punktes, sonst sind sie relativ zum Ursprung des Koordinatensystems
* Drücke G oder wähle das **Global** Optionsfeld um den globalen Modus umzuschalten. Wenn der Global Modus aktiv ist, dann sind die Koordinaten relativ zum globalen Koordinatensystem, sonst sind sie relativ zum Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
* Drücke S um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein oder auszuschalten.
* Drücke Esc oder die Abbrechen Schaltfläche um den Befehl abzubrechen.

## Hinweise

* Gespiegelte Kopien von [Draft Linie](/Draft_Line/de "Draft Line/de"), [Draft Linienzug](/Draft_Wire/de "Draft Wire/de"), [Draft Bogen](/Draft_Arc/de "Draft Arc/de") und [Draft Kreis](/Draft_Circle/de "Draft Circle/de") können durch Verwenden von  [Herabstufen](/Draft_Downgrade/de "Draft Downgrade/de") in unabhängig editierbare Draft Objekte verwandelt werden und dann [Draft Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de").
* Der Befehl [Part EinfacheKopie](/Part_SimpleCopy/de "Part SimpleCopy/de") kann verwendet werden, um eine Kopie eines gespiegelten Objektes zu erzeugen, die nicht mit dem Ursprungsobjekt verbunden ist

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein [Part Mirror](/Part_Mirror "Part Mirror")-Objekt ist von einem [Part Feature](/Part_Feature "Part Feature")-Objekt abgeleitet und erbt alle Eigenschaften. Es besitzt zusätzlich folgende Eigenschaften:

### Daten

Base

* Daten**Source** (`Link`): nennt das gespiegelte Objekt.

Plane

* Daten**Base** (`Vector`): bezeichnet den Ursprung der Spiegelfläche.
* Daten**Normal** (`Vector`): bezeichnet die Normale auf die Spiegelfläche.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Spiegeln von Objekten wird die Methode `mirror` des Draft-Moduls verwendet.

```
mirrored_list = mirror(objlist, p1, p2)

```

* `objlist` enthält die Objekte die gespiegelt werden sollen. Entweder ein einzelnes Objekt oder eine Liste von Objekten.
* `p1` ist der erste Punkt der Spiegelebene.
* `p2` ist der zweite Punkt der Spiegelebene.
* Wenn [Draft EbeneAuswählen](/Draft_SelectPlane/de "Draft SelectPlane/de") vorhanden ist, dann wird der Anschluss der Spiegelebene durch ihre Normale festgelegt, sonst wird die Blickrichtung der Kamera in der aktiven [3D Ansicht](/3D_view/de "3D view/de") verwendet. Wenn keine graphische Schnittstelle vorhanden ist, dann wird die Z Achse verwendet.
* `mirrored_list` wird mit den neuen `Part::Mirroring` Objekten zurückgegeben. Ist abhängig von `objlist` entweder ein einzelnes Objekt oder eine Liste von Objekten.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

place = App.Placement(FreeCAD.Vector(1000, 0, 0), App.Rotation())
polygon1 = Draft.make_polygon(3, 750)
polygon2 = Draft.make_polygon(5, 750, placement=place)

p1 = App.Vector(2000, -1000, 0)
p2 = App.Vector(2000, 1000, 0)

line1 = Draft.make_line(p1, p2)
mirrored1 = Draft.mirror(polygon1, p1, p2)

Line2 = Draft.make_line(-p1, -p2)
mirrored2 = Draft.mirror([polygon1, polygon2], -p1, -p2)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Mirror/de&oldid=1513868>"