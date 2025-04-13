---
title: Arch Plattenzuschnitt
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Plattenzuschnitt |
| Menüeintrag |
| Utils → Plattenwerkzeuge → Plattenzuschnitt |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [Arch Platte](/Arch_Panel/de "Arch Panel/de"), [Arch Plattenzeichnung](/Arch_Panel_Sheet/de "Arch Panel Sheet/de"), [Arch Verschachteln](/Arch_Nest/de "Arch Nest/de") |
|  |

## Beschreibung

Das Werkzeug **Arch Plattenzuschnitt** erstellt im 3D-Dokument eine ebene 2D-Ansicht einer [Arch Platte](/Arch_Panel/de "Arch Panel/de"), die in eine [Arch Plattenzeichnung](/Arch_Panel_Sheet/de "Arch Panel Sheet/de") eingefügt oder direkt nach [DXF](/Draft_DXF/de "Draft DXF/de") exportiert wird. Die Plattenzuschnitt-Objekte werden auch durch den Arbeitsbereich [CAM](/CAM_Workbench/de "CAM Workbench/de") unterstützt.

![](/images/Arch_Wikihouse_02.jpg)

## Anwendung

1. Ein oder mehrere [Arch Platten](/Arch_Panel/de "Arch Panel/de")-Objekte auswählen.
2. Den Menüeintrag **Utils → Plattenwerkzeuge → ![](/images/Arch_Panel_Cut.svg) Plattenzuschnitt** auswählen.
3. Die gewünschten Eigenschaften anpassen.

## Optionen

* Falls die Platte nicht eben ist (z.B. gewellt), wird die Wölbung nicht im Plattenzuschnitt erscheinen. Dieses Werkzeug ist hauptsächlich für ebene Platten geeignet.
* Der Plattenzuschnitt kann eine Beschriftung anzeigen. Diese Beschriftung kann eine benutzerdefinierte Textzeile sein oder automatisch die Beschriftung, Benennung oder Beschreibung seiner verknüpften Platte anzeigen.
* Für eine CNC-Verarbeitung sollte die Beschriftung in einer einfachen Linien-Schriftart sein, in der die Zeichen einfache Polylinien sind, denen eine Maschine einfach folgen kann. Bei der Erstellung wird das Plattenzuschnitt-Objekt automatisch die Schriftart nutzen, die in Bearbeiten → Einstellungen → Draft → Texte und Bemaßungen → Standardschriftart für Textformen angegeben ist
* Doppelklicken des Plattenzuschnitts in der Baumansicht nach der Erstellung aktiviert den Änderungsmodus und ermöglicht die Änderung der Position der Beschriftung
* Sollen verschiedene Plattenzuschnitte angeordnet werden, kann Plattenzuschnitt einen Rand anzeigen, der hilft zu prüfen, ob genug Platz zwischen den einzelnen Zuschnitten ist

## Eigenschaften

### Daten

* Daten**Source**: Das von diesem Zuschnitt gezeigte [Arch Platten](/Arch_Panel/de "Arch Panel/de")-Objekt.
* Daten**Tag Text**: Der anzuzeigende Text. Kann %tag%, %label% oder %description% sein, um die entsprechenden Informationen der Platte anzuzeigen.
* Daten**Tag Size**: Die Größe des Beschriftungstextes.
* Daten**Tag Position**: Die Position des Beschriftungstextes, (0,0,0) für automatische Mittenposition.
* Daten**Tag Rotation**: Die Drehung des Textes.
* Daten**Font File**: Die Schriftart der Beschriftung.
* Daten**Make Face**: Falls `True` ist die Platte eine Part-Fläche, anderenfalls ein Part-Linienzug.

### Ansicht

* Ansicht**Margin**: Ein Rand, der um die Form des Plattenzuschnitts herum angezeigt wird.
* Ansicht**Show Margin**: Schaltet die Anzeige des Randes ein bzw. aus

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Plattenzuschnitt kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit folgender Funktion verwendet werden:

```
View = makePanelCut(panel, name="PanelView")

```

* Erstellt ein `View`-Objekt (2D-Projektion) aus dem existierenden (Plattenobjekt) `panel`.

Beispiel:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(500, 0, 0)
p3 = FreeCAD.Vector(500, 50, 0)
p4 = FreeCAD.Vector(550, 50, 0)
p5 = FreeCAD.Vector(600, 0, 0)
p6 = FreeCAD.Vector(1000, 0, 0)
p7 = FreeCAD.Vector(1000, 400, 0)
p8 = FreeCAD.Vector(600, 400, 0)
p9 = FreeCAD.Vector(600, 350, 0)
p10 = FreeCAD.Vector(550, 350, 0)
p11 = FreeCAD.Vector(500, 400, 0)
p12 = FreeCAD.Vector(0, 400, 0)

Wire = Draft.makeWire([p1, p2, p3, p4, p5, p6,
                       p7, p8, p8, p9, p10, p11, p12], closed=True)
Panel = Arch.makePanel(Wire, thickness=36)
FreeCAD.ActiveDocument.recompute()

View = Arch.makePanelCut(Panel)
View.ViewObject.LineWidth = 3
FreeCAD.ActiveDocument.recompute()

```

## Tutorien

* [Wikihouse Portierungs Tutorium](/Wikihouse_porting_tutorial/de "Wikihouse porting tutorial/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel_Cut/de&oldid=1541988>"