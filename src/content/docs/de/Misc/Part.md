---
title: Teil
---
## Einleitung

In FreeCAD wird das Wort "Part" normalerweise verwendet, um auf eine ![](/images/Std_Part.svg) [Std Teil](/Std_Part/de "Std Part/de")(`App::Part` Klasse) zu verweisen, ein Typ eines Containerobjekts, das durch das Basissystem definiert ist. Dieses Teil wird zur Verwaltung der Position von 3D Formen verwendet, um mechanische Baugruppen zu erstellen.

Siehe ![](/images/Std_Part.svg) [Std Part](/Std_Part/de "Std Part/de") für weitere Informationen über diesen Objekttyp.

## Anwendung

Das Std Part Werkzeug wird nicht durch einen bestimmten Arbeitsbereich, sondern durch das Basissystem definiert, daher ist es in der **structure toolbar** zu finden, die in allen [Arbeitsbereiche](/Workbenches/de "Workbenches/de") verfügbar ist.

1. Drücke die ![](/images/Std_Part.svg) [Std Part](/Std_Part/de "Std Part/de") Taste. Ein leeres Part wird erzeugt und wird automatisch *[aktiv](/Std_Part#Active_status/de "Std Part")*.

## Hinweise

Im informellen Gebrauch kann ein *Part* jede geometrische Figur sein, die in der [3D-Ansicht](/3D_view/de "3D view/de") sichtbar ist, und daher kann sein Konzept mit dem von "[Körper](/Body/de "Body/de")" oder "[Zusammenbau](/Assembly/de "Assembly/de")" verwechselt werden.

Wenn jedoch mehr Präzision erforderlich ist, muss die Unterscheidung vorgenommen werden.

* Ein "[Körper](/Body/de "Body/de")" wird für einzelne, aneinandergrenzende Elemente verwendet, die normalerweise mit den Arbeitsbereichen [Part](/Part_Workbench/de "Part Workbench/de") oder [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") erstellt werden.
* Ein "Teil" wird verwendet, um einen einzelnen "Körper" oder mehrere von ihnen zu einer "Baugruppe" zu gruppieren.
* Eine "Baugruppe" ist eine Sammlung von "Teilen", die auf irgendeine Weise, manuell oder unter Verwendung eines Arbeitsbereichs für Baugruppen, angeordnet sind.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part/de&oldid=1225989>"