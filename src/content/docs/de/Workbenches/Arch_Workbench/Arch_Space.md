---
title: Arch Raum
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Raum |
| Menüeintrag |
| 3D/BIM → Raum |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| S P |
| Eingeführt in Version |
| 0.14 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug **Arch Raum** ermöglicht ein leeres Volumen festzugelegen, entweder auf einer Festkörperform basierend oder indem seine Grenzen festgelegt werden oder eine Mischung aus beidem. Wenn es ausschließlich auf Begrenzungen basiert, wird das Volumen berechnet, indem von der Begrenzungsbox aller gegebenen Begrenzungen ausgegangen und die Räume hinter jeder Begrenzung subtrahiert werden. Ein Raum (Space-Objekt) definiert immer ein Festkörper-Volumen. Die Bodenfläche eines Raumobjekts, die berechnet wird, indem es in seinem Massenschwerpunkt mit einer horizontale Ebene geschnitten wird, kann ebenfalls angezeigt werden.

![](/images/Arch_Space_example.jpg)

Raumobjekt, das aus einem vorhandenen Volumenobjekt erstellt wird, dann werden zwei Wandflächen als Begrenzungen hinzugefügt.

## Anwendung

1. Ein vorhandenes Festkörperobjekt oder Flächen auf Begrenzungsobjekten auswählen.
2. Den Befehl mit einer der folgenden Methoden aufrufen:
   * Die Schaltfläche ![](/images/Arch_Space.svg) Raum drücken.
   * Das Tastaturkürzel S dann P.
   * Den Menüeintrag **3D/BIM → Raum** auswählen.

Once a space has been created, you can also add or remove boundaries to/from it using the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") or ![](/images/Arch_Remove.svg) [Remove](/Arch_Remove "Arch Remove") buttons in the toolbar. Alternatively, you can also do this in the Tasks panel or in the [Property editor](/Property_editor "Property editor").

As an example, to add a boundary, given a space that intersects a wall:

1. Select the wall face that intersects the space. That will be the new boundary.
2. Keeping the Ctrl key pressed, select the space.
3. Press the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") button in the toolbar.
4. The wall face now defines a new boundary, and the space will only extend up to the wall face in the direction facing it.

The same example: add a boundary, given a space that intersects a wall. This time we're using the Tasks panel:

1. Double-click the space object in the Tree View. This will activate its Tasks panel.
2. Select the wall face that intersects the space. That will be the new boundary.
3. Press the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") button in the Tasks panel. The name of the wall face will be displayed in the "Space boundaries" section there.
4. Press the OK button in the Tasks panel.
5. The wall face now defines a new boundary, and the space will only extend up to the wall face in the direction facing it.

Yet another alternative: add a boundary, given a space that intersects a wall. This time we're using the Property editor:

1. Navigate to the Property View and locate the Daten**Boundaries** property under the "Space" group.
2. On the right hand side of the Daten**Boundaries** property, click on the ellipsis button.
3. Select the wall face that intersects the space. That will be the new boundary. The "Link" dialog will reflect your selection.
4. Press the OK button in the "Link" dialog.
5. The wall face now defines a new boundary, and the space will only extend up to the wall face in the direction facing it.

### Begrenzungen

* Die Grenzeigenschaften können momentan nicht über die GUI bearbeitet werden.
* Siehe die [Forumsankündigung](http://forum.freecadweb.org/viewtopic.php?f=9&t=4275).

## Eigenschaften

* Daten-Eigenschaft**Basis**: Das Basisobjekt, falls vorhanden (muss ein Festkörper sein)
* Daten-Eigenschaft**Boundaries**: Eine Liste möglicher Begrenzungselemente
* Daten-Eigenschaft**Area**: Die berechnete Bodenfläche dieses Raumes
* Daten-Eigenschaft**FinishFloor**: Die Endbearbeitung des Fußbodens in diesem Raum
* Daten-Eigenschaft**FinishWalls**: Die Endbearbeitung der Wände dieses Raumes
* Daten-Eigenschaft**FinishCeiling**: Die Endbearbeitung der Decke dieses Raumes
* Daten-Eigenschaft**Group**: Objekte, die sich in diesem Raum befinden, wie zum Beispiel Möbel
* Daten-Eigenschaft**SpaceType**: Der Typ dieses Raumes
* Daten-Eigenschaft**FloorThickness**: Die Dicke des Fußbodenbelags
* Daten-Eigenschaft**NumberOfPeople**: Die Anzahl der Personen, die sich üblicherweise in diesem Raum aufhalten
* Daten-Eigenschaft**LightingPower**: Die zur Beleuchtung dieses Raumes benötigte elektrische Leistung in Watt
* Daten-Eigenschaft**EquipmentPower**: Die für die Ausrüstung dieses Raumes benötigte elektrische Leistung in Watt
* Daten-Eigenschaft**AutoPower**: Wenn dies zutrifft, wird die Geräteleistung automatisch von den in diesem Feld aufgeführten Geräten übernommen.
* Daten-Eigenschaft**Conditioning**: Die Art der Klimatisierung dieses Raumes
* Daten-Eigenschaft**Internal**: Gibt an, ob dieser Raum intern oder extern ist

* Ansicht-Eigenschaft**Text**: Der anzuzeigende Text. Verwende $area, $label, $floor, $walls, $ceiling, um die entsprechenden Daten einzufügen
* Ansicht-Eigenschaft**Font Name**: Der Name der Schriftart
* Ansicht-Eigenschaft**Text Color**: Die Farbe des Textes
* Ansicht-Eigenschaft**Font Size**: Die Schrifthöhe des Textes
* Ansicht-Eigenschaft**First Line**: Die Höhe der ersten Zeile (als Vielfaches der Schrifthöhe. 1 = gleiche Höhe, 2 = doppelte Höhe, usw.)
* Ansicht-Eigenschaft**Line Spacing**: Der Abstand zwischen den Textzeilen
* Ansicht-Eigenschaft**Text Position**: Die Position des Textes. Wird die Vorgabe (0,0,0) nicht geändert, wird der Text automatisch positioniert
* Ansicht-Eigenschaft**Text Align**: Die Ausrichtung des Textes
* Ansicht-Eigenschaft**Decimals**: Die Anzahl der zu verwendenden Dezimalstellen für berechnete Texte
* Ansicht-Eigenschaft**Show Unit**: Nachgestellte Maßeinheiten anzeigen oder nicht

## Optionen

* Um Zonen zu erstellen, die mehrere Räume gruppieren, wird ein [Arch Gebäudeteil](/Arch_BuildingPart/de "Arch BuildingPart/de") verwendet und sein IFC-Typ auf "Spatial Zone" (Räumliche Zone) gesetzt.
* Das Raumobjekt (Space-Objekt) hat dieselben Anzeigemodi wie andere Arch- und Part-Objekte, mit einem weiteren, **Fußabdruck** (Footprint) genannten, der nur die Unterseite des Raumes anzeigt.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Raum kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit der folgenden Funktion verwendet werden:

```
Space = makeSpace(objects=None, baseobj=None, name="Space")

```

* Erstellt ein `Space`-Objekt aus den gegebenen `objects` oder `baseobj`, die
  + ein Dokumentobjekt sein können, wodurch es zur Basisform des Raumobjekts wird oder
  + eine Liste von Auswahlobjekten wie von `FreeCADGui.Selection.getSelectionEx()` oder
  + eine Liste von Tupeln `(object, subobjectname)`

Beispiel:

```
import FreeCAD, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 1000
Box.Width = 1000
Box.Height = 1000

Space = Arch.makeSpace(Box)
Space.ViewObject.LineWidth = 2
FreeCAD.ActiveDocument.recompute()

```

Nach der Erstellung eines Raum-Objekts können ausgewählte Flächen durch den folgenden Code hinzugefügt werden:

```
import FreeCAD, FreeCADGui, Draft, Arch

points = [FreeCAD.Vector(-500, 0, 0), FreeCAD.Vector(1000, 1000, 0)]
Line = Draft.makeWire(points)
Wall = Arch.makeWall(Line, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

# Select a face of the wall
selection = FreeCADGui.Selection.getSelectionEx()
Arch.addSpaceBoundaries(Space, selection)

```

Begrenzungen können auch entfernt werden, wieder durch auswählen der angegebenen Flächen:

```
selection = FreeCADGui.Selection.getSelectionEx()
Arch.removeSpaceBoundaries(Space, selection)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Space/de&oldid=1559475>"