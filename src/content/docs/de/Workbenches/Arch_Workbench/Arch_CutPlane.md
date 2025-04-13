---
title: Arch Schnittebene
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Schnittebene |
| Menüeintrag |
| Modify → Mit einer Ebene beschneiden |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug **Arch Schnittebene** beschneidet einen Arch-Festkörper (Arch-Objekt), wie z.B. eine [Arch Wand](/Arch_Wall/de "Arch Wall/de") oder [Arch Struktur](/Arch_Structure "Arch Structure") mit einer ebenen Fläche.

![](/images/Arch_CutPlane_example.jpg)

Links: Vor der Anwendung des Werkzeugs Schnittebene. Mitte: Resultierende Wand nach dem Beschnitt. Rechts: Ein weiteres optionales Ergebnis

## Anwendung

1. Soll die Schnittebene von einer geraden Kante abgeleitet werden ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")), kann wahlweise die [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") ausgerichtet werden:
   * Die ausgewählte Kante kann (darf) nicht parallel zur Normale der Arbeitsebene sein.
   * Die erstellte Schnittebene steht senkrecht auf der Arbeitsebene.
2. Das zu schneidende Objekt auswählen.
3. Eine der folgende Möglichkeiten auswählen:
   * Ein Objekt mit einer einzelnen ebenen Fläche auswählen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
   * Eine ebene Fläche in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   * Ein Objekt mit einer einzelnen geraden Kante auswählen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
   * Eine gerade Kante in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
4. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Arch_CutPlane.svg) [Mit einer Ebene beschneiden](/Arch_CutPlane "Arch CutPlane") drücken.
   * Den Menüeintrag **Modify → ![](/images/Arch_CutPlane.svg) Mit einer Ebene beschneiden** auswählen.
5. **Hinter** oder **Vorne** auswählen, um die Seite der Schnittfläche zu bestimmen, auf der Material entfernt werden soll.
6. Die Schaltfläche OK drücken.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Schnittebene kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de") Konsole aus mit folgender Funktion verwendet werden:

```
cutObj = cutComponentwithPlane(archObject, cutPlane, sideFace)

```

* Erstellt ein `cutObj`-Objekt aus dem gegebenen `archObject`, das mit `cutPlane` beschnitten wird, das eine Fläche eines anderen Objekts ist.
  + `archObject` sollte ein `SelectionObject` sein, das aus `FreeCADGui.Selection.SelectionEx()[0]` stammt.
  + `cutPlane` sollte ein `FaceObject` sein, das aus `FreeCADGui.Selection.SelectionEx()[0].SubObjects[0]` stammt.
* `sideFace` gibt an, auf welcher Seite des `FaceObject` ein Volumenkörper erzeugt werden soll; dieser Volumenkörper wird dann von dem `archObject` abgezogen (subtracted). Falls `sideFace` den Wert `0` hat, wird ein Volumenkörper hinter der Fläche erzeugt, anderenfalls vor der Fläche.

Beispiel:

```
import FreeCAD, FreeCADGui, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 2000, 0)

Line = Draft.makeWire([p1, p2])
Wall = Arch.makeWall(Line, width=150, height=2000)

p3 = FreeCAD.Vector(0, 2000, 0)
p4 = FreeCAD.Vector(3000, 0, 0)

Line2 = Draft.makeWire([p3, p4])
Wall2 = Arch.makeWall(Line2, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

# Select the Wall
main_object = FreeCADGui.Selection.getSelectionEx()[0]

# Select the face of Wall2
selection = FreeCADGui.Selection.getSelectionEx()[0]
cut_face = selection.SubObjects[0]

cutObj = Arch.cutComponentwithPlane(main_object, cut_face, 0)
FreeCAD.ActiveDocument.recompute()

Wall3 = Draft.move(Wall, FreeCAD.Vector(-4000, 0, 0), copy=True)
Wall4 = Draft.move(Wall2, FreeCAD.Vector(-4000, 0, 0), copy=True)
FreeCAD.ActiveDocument.recompute()

# Select the Wall3
main_object2 = FreeCADGui.Selection.getSelectionEx()[0]

# Select the face of Wall4
selection2 = FreeCADGui.Selection.getSelectionEx()[0]
cut_face2 = selection2.SubObjects[0]

cutObj2 = Arch.cutComponentwithPlane(main_object2, cut_face2, 1)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CutPlane/de&oldid=1541974>"