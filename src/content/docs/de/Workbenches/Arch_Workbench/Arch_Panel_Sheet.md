---
title: Arch Plattenzeichnung
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Panel Plattenzeichnung |
| Menüeintrag |
| Utils → Plattenwerkzeuge → Plattenzeichnung |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [Arch Platte](/Arch_Panel/de "Arch Panel/de"), [Arch Plattenzuschnitt](/Arch_Panel_Cut/de "Arch Panel Cut/de"), [Arch Verschachteln](/Arch_Nest/de "Arch Nest/de") |
|  |

## Beschreibung

Dieses Werkzeug ermöglicht eine 2D-Zeichnung zu erstellen, einschließlich einer beliebigen Anzahl von [Arch Plattenzuschnitt](/Arch_Panel_Cut/de "Arch Panel Cut/de") Objekten oder anderen 2D-Objekten, wie z.B. diejenigen, die mit den Arbeitsbereichen [Draft](/Draft_Workbench/de "Draft Workbench/de") und [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") erstellt wurden. Die Plattenzeichnung wird in der Regel für die Anordnung von Plattenzuschnitten (Beschnittkonturen) erstellt, die von einer CNC-Maschine ausgeschnitten werden sollen. Diese Zeichnungsblatter können dann in eine [DXF](/Draft_DXF/de "Draft DXF/de")-Datei exportiert werden.

![](/images/Arch_Wikihouse_03.jpg)

![](/images/Arch_Wikihouse_04.jpg)

*Das obige Bild zeigt, wie Plattenzeichnungen beim Export nach DXF erscheinen.*

## Anwendung

1. Wahlweise ein oder mehrere [Arch Plattenzuschnitt](/Arch_Panel_Cut/de "Arch Panel Cut/de")-Objekte auswählen oder jedes andere 2D-Objekt, das auf der XY-Ebene liegt.
2. Den Menüeintrag **Utils → Plattenwerkzeuge → ![](/images/Arch_Panel_Sheet.svg) Plattenzeichnung** auswählen.
3. Die gewünschten Eigenschaften anpassen.

## Optionen

* Nachdem die Plattenzeichnung erstellt wurde, mit oder ohne eingefügte Objekte, kann ein beliebiges Objekt eingefügt oder entfernt werden, indem es in der Baumansicht doppelt angeklickt wird und Objekte seinen Gruppenordnern hinzugefügt werden bzw. daraus entfernt werden.
* Ein Doppelklick auf die Platte in der Baumansicht ermöglicht auch die enthaltenen Objekte zu verschieben oder seine Beschriftung zu verschieben.
* Es ist möglich automatisch Platten aus mehr als einer Materiallage zu erstellen, indem... (by raising its Sheets property)
* Plattenzeichnungen können Ränder darstellen. Das hilft sicherzustellen, dass stets ein festgelegter Bereich zwischen den inneren Objekten und dem Zeichnungsrand vorhanden ist.
* Werden Plattenzeichnungen in eine DXF-Datei exportiert, werden Konturen, enthaltene Löcher und Beschriftungen ihrer enthaltenen Objekte auf verschiedene Layer abgelegt, wie in der obigen Abbildung dargestellt.

## Eigenschaften

### Daten

* Daten-Eigenschaft**Height**: Die Höhe des Zeichnungsblattes
* Daten-Eigenschaft**Width**: Die Breite des Zeichnungsblattes
* Daten-Eigenschaft**Fill Ratio**: Der Prozentsatz der Zeichnung, der von Zuschnitten belegt wird (automatisch)
* Daten-Eigenschaft**Tag Text** (Beschriftungstext): Der anzuzeigende Text
* Daten-Eigenschaft**Tag Size**: Die Höhe des Beschriftungstextes
* Daten-Eigenschaft**Tag Position**: Die Position des Beschriftungstextes. Automatische Mittenposition bei (0,0,0)
* Daten-Eigenschaft**Tag Rotation**: Die Drehung des Beschriftungstextes
* Daten-Eigenschaft**Font File**: Die Schriftart des Beschriftungstextes
* Daten-Eigenschaft**Make Face**: Falls True, ist die Platte eine Part-Fläche, anderenfalls ein Part-Linienzug
* Daten-Eigenschaft**Grain Direction**: Gibt einen Winkel für die Faserausrichtung an (im Uhrzeigersinn, 0° bedeutet oben)

### Ansicht

* Ansicht-Eigenschaft**Margin**: Ein Rand, der innerhalb der Plattenkontur angezeigt werden kann
* Ansicht-Eigenschaft**Show Margin**: Schaltet die Anzeige des Randes ein bzw. aus
* Ansicht-Eigenschaft**Show Grain**: Schaltet die Anzeige der Faserausrichtung ein bzw. aus (Make Face muss auf 'true' gesetzt sein)

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Plattenzeichnung kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit folgender Funktion verwendet werden:

```
Sheet = makePanelSheet(panels=[], name="PanelSheet")

```

* Erstellt ein `Sheet`-Objekt aus `panels`, welches eine Liste von [Arch Platten](/Arch_Panel "Arch Panel")-Objekten ist.

Beispiel:

```
import FreeCAD, Draft, Arch

Rect = Draft.makeRectangle(500, 200)
Polygon = Draft.makePolygon(5, 750)

p1 = FreeCAD.Vector(1000, 0, 0)
p2 = FreeCAD.Vector(2000, 400, 0)
p3 = FreeCAD.Vector(1250, 800, 0)
Wire = Draft.makeWire([p1, p2, p3], closed=True)

Panel1 = Arch.makePanel(Rect, thickness=36)
Panel2 = Arch.makePanel(Polygon, thickness=36)
Panel3 = Arch.makePanel(Wire, thickness=36)
FreeCAD.ActiveDocument.recompute()

Cut1 = Arch.makePanelCut(Panel1)
Cut2 = Arch.makePanelCut(Panel2)
Cut3 = Arch.makePanelCut(Panel3)
Cut1.ViewObject.LineWidth = 3
Cut2.ViewObject.LineWidth = 3
Cut3.ViewObject.LineWidth = 3
FreeCAD.ActiveDocument.recompute()

Sheet = Arch.makePanelSheet([Cut1, Cut2, Cut3])

```

## Tutorien

* [Wikihouse Portierungs Tutorium](/Wikihouse_porting_tutorial/de "Wikihouse porting tutorial/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel_Sheet/de&oldid=1541990>"