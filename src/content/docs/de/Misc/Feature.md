---
title: Formelement
---
## Einleitung

In FreeCAD wird das Wort "Formelement" normalerweise verwendet, um sich auf ein [PartDesign-Formelement](/PartDesign_Feature/de "PartDesign Feature/de")-Objekt (Klasse `PartDesign::Feature`) zu beziehen, das im Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") definiert ist. Dies ist eine Operation oder ein Modellierungsschritt zum Erstellen oder Ändern einer Festkörper-[Form](/Shape/de "Shape/de") nach dem Prinzip [Formelemente bearbeiten](/Feature_editing/de "Feature editing/de").

Siehe [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de") für weitere Informationen über diese Objektart.

## Anwendung

1. Zum Arbeitsbereich ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") wechseln.
2. Die Schaltfläche ![](/images/PartDesign_Body.svg) [PartDesign Körper erstellen](/PartDesign_Body/de "PartDesign Body/de") drücken.
3. Die Schaltfläche ![](/images/PartDesign_NewSketch.svg) [PartDesign Skizze erstellen](/PartDesign_NewSketch "PartDesign NewSketch") drücken, um eine neue [Skizze](/Sketch/de "Sketch/de") zu erstellen.
4. Einen geschlossenen Linienzug erstellen und dann die Schaltfläche ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad/de "PartDesign Pad/de") drücken, um die Skizze zu extrudieren und einen ersten Festkörper zu erstellen. Dieser erste Festkörper ist das Anfangsformelement.
5. Weitere Skizzen hinzufügen und mit anderen Werkzeuge des Arbeitsbereichs [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") verwenden, um den ursprünglichen Festkörper zu ändern und in Mustern anzuordnen. Alle diese Schritte entsprechen Formelementen des [Körpers](/Body/de "Body/de").
6. Alternativ können Grundkörper-Objekte hinzugefügt werden, wie ![](/images/PartDesign_AdditiveBox.svg) [PartDesign Quader](/PartDesign_AdditiveBox/de "PartDesign AdditiveBox/de") und abzuziehende ![](/images/PartDesign_SubtractiveCylinder.svg) [PartDesign Zylinder](/PartDesign_SubtractiveCylinder/de "PartDesign SubtractiveCylinder/de"). Jeder Schritt zum Hinzufügen und Abziehen entspricht einem Formelement, das zum Erstellen eines endgültigen Volumens verwendet wird.

## Hinweise

Nach allgemeinem Verständnis kann ein "Formelement" jeder Modellierungsschritt sein, der zum Erstellen einer endgültigen [Form](/Shape/de "Shape/de") mit einem beliebigen Werkzeug eines beliebigen [Arbeitsbereichs](/Workbenches/de "Workbenches/de") erfolgt.

* Zum Beispiel kann im Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") im Arbeitsablauf nach dem Prinzip [Konstruktive Festkörpergeometrie](/Constructive_solid_geometry/de "Constructive solid geometry/de") ein "Formelement" eine beliebige boolesche Verknüpfung sein, wie ![](/images/Part_Fuse.svg) [Part Vereinigung](/Part_Fuse/de "Part Fuse/de"), ![](/images/Part_Cut.svg) [Part Differenz](/Part_Cut "Part Cut"), oder ![](/images/Part_Common.svg) [Part Schnitt](/Part_Common/de "Part Common/de").

Im engeren Sinn ist ein "Formelement" ein Modellierungsschritt, der innerhalb eines [PartDesign Körpers](/PartDesign_Body/de "PartDesign Body/de") verwendet wird.

* Zum Beispiel: ![](/images/PartDesign_AdditiveCylinder.svg) [PartDesign Zylinder](/PartDesign_AdditiveCylinder/de "PartDesign AdditiveCylinder/de"), ![](/images/PartDesign_AdditiveLoft.svg) [PartDesign Ausformung](/PartDesign_AdditiveLoft/de "PartDesign AdditiveLoft/de"), ![](/images/PartDesign_Pocket.svg) [PartDesign Vertiefung](/PartDesign_Pocket/de "PartDesign Pocket/de"), ![](/images/PartDesign_SubtractiveCone.svg) abzuziehender [PartDesign Kegel](/PartDesign_SubtractiveCone "PartDesign SubtractiveCone") usw. sind alle "Formelemente".

Retrieved from "<http://wiki.freecad.org/index.php?title=Feature/de&oldid=1480515>"