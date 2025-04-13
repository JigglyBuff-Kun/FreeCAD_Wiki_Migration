---
title: Draft ZeichnungZuSkizze
---
|  |
| --- |
| Draft ZeichnungZuSkizze |
| Menüeintrag |
| Änderung → Zeichnung zu Skizze Bearbeiten → Zeichnung zu Skizze |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Draft2Sketch.svg) **Draft ZeichnungZuSkizze** wandelt [Draft](/Draft_Workbench/de "Draft Workbench/de")-Objekte in [Sketcher-Skizzen](/Sketcher_NewSketch/de "Sketcher NewSketch/de") um und umgekehrt.

![](/images/Draft_Draft2Sketch_example.png)

Konvertieren von Draft-Objekten in Sketcher-Skizzen

## Anwendung

1. Wahlweise ein oder mehrere Draft-Objekte oder [Sketcher Skizzen](/Sketcher_NewSketch/de "Sketcher NewSketch/de") auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_Draft2Sketch.svg) Zeichnung zu Skizze drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Änderung → ![](/images/Draft_Draft2Sketch.svg) Zeichnung zu Skizze** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Bearbeiten → ![](/images/Draft_Draft2Sketch.svg) Zeichnung zu Skizze** auswählen.
3. Wenn noch kein Objekt ausgewählt wurde: Ein Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
4. Ein neues Objekt wird erstellt.

## Anmerkungen

* Nicht-Entwurf Objekte, die vollkommen planar sind, können ebenfalls konvertiert werden.
* Der Befehl kann nur Objekte verarbeiten, die aus **geraden Linien, Kreisbögen, elliptischen Bögen, B-Splines und Bézier Kurven** bestehen.
* [Entwurf BezKurven](/Draft_BezCurve/de "Draft BezCurve/de") werden durch [Skizzierer BSplines](/Sketcher_CreateBSpline/de "Sketcher CreateBSpline/de") angenähert.
* Der externe [KicadStepUp Arbeitsbereich](/KicadStepUp_Workbench/de "KicadStepUp Workbench/de") enthält einen Befehl, um eine [Entwurf BSpline](/Draft_BSpline/de "Draft BSpline/de") in eine Reihe von [Skizzierer Bögen](/Sketcher_CreateArc/de "Sketcher CreateArc/de") zu konvertieren. Weitere Informationen findest du im Forumsbeitrag [BSplines to Shape2DView and Sketcher](https://forum.freecadweb.org/viewtopic.php?f=9&t=25082).
* [Dieser andere Forenbeitrag](https://forum.freecadweb.org/viewtopic.php?f=3&t=58781#p505207) enthält ein Makro für eine solche Konvertierung.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um Objekte in eine Skizze zu konvertieren, wird die Methode `make_sketch` des Draft-Moduls verwendet ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")). Diese Methode ersetzt die veraltete Methode `makeSketch`.

```
sketch = make_sketch(objects_list, autoconstraints=False, addTo=None, delete=False, name="Sketch", radiusPrecision=-1, tol=1e-3)

```

* `objects_list` enthält die zu konvertierenden Objekte. Es ist entweder ein einzelnes Objekt oder eine Liste von Objekten. Unterstützt werden `Draft` Objekte, `Part::Feature` Objekte und `Part.Shape` Objekte.
* Wenn `autoconstraints` `True` ist, werden übereinstimmende Zwangsbedingungen zu Knoten hinzugefügt, die zum selben Quellobjekt gehören.
* `addTo` ist das vorhandene Skizzenobjekt, zu dem die Geometrie hinzugefügt wird. Wenn nicht angegeben, wird eine neue Skizze erstellt.
* Wenn `delete` gleich `True` ist, werden die Quellobjekte gelöscht.
* `name` ist der Name für die neue Skizze.
* `radiusPrecision` gibt an, wie die Radiusbeschränkungen behandelt werden sollen:
  + Verwenden Sie `-1`, um Radiuseinschränkungen zu deaktivieren.
  + Verwenden Sie `0`, um einzelne Radiusbeschränkungen hinzuzufügen.
  + Verwenden Sie eine positive Zahl, um Radien entsprechend dieser Genauigkeit zu runden und um gleiche Zwangsbedingungen zwischen Kurven mit gleichen Radien hinzuzufügen.
* `tol` ist die Toleranz, die verwendet wird, um zu prüfen, ob Formen planar und koplanar sind. Verwenden Sie `-1` für eine strenge Prüfung.
* `sketch` wird mit dem Skizzenobjekt zurückgegeben.

Um eine Skizze in Draft-Objekte umzuwandeln, wird die Methode `draftify` des Draft-Moduls verwendet.

```
draftify(objectslist, makeblock=False, delete=True)

```

* `objectslist` enthält die zu konvertierenden Objekte. Es ist entweder ein einzelnes Objekt oder eine Liste von Objekten.
* Wenn `makeblock` gleich `True` ist, werden die konvertierten Objekte in einem `Part::Part2DObject` gruppiert.
* Wenn `delete` gleich `True` ist, werden die Quellobjekte gelöscht.

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(2000, 1000)
circle = Draft.make_circle(500)
doc.recompute()

sketch_from_draft = Draft.make_sketch([rectangle, circle], autoconstraints=True, delete=False, radiusPrecision=0)
doc.recompute()

draft_from_sketch = Draft.draftify(sketch_from_draft, delete=False)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Draft2Sketch/de&oldid=1499992>"