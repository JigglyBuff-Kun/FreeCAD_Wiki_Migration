---
title: Körper
---
## Einleitung

In FreeCAD wird das Wort "Körper" normalerweise verwendet, um sich auf ein [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de") Objekt (`PartDesign::Body` Klasse ) zu beziehen, das vom [PartDesign Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de") definiert wird. Dies ist ein Behälterobjekt, das [2D Skizzen](/Sketch/de "Sketch/de") und [3D geometrische Formelemente](/PartDesign_Feature/de "PartDesign Feature/de") aufnehmen kann, um eine Volumenkörperform zu erstellen.

Siehe [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de") für weitere Informationen über diesen Objekttyp.

## Anwendung

1. Wechsle zum [PartDesign Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de").
2. Drücke ![](/images/PartDesign_Body.svg) [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de").
3. Drücke ![](/images/PartDesign_NewSketch.svg). [PartDesign NeueSkizze](/PartDesign_NewSketch/de "PartDesign NewSketch/de"), um eine neue  [Skizze](/Sketch/de "Sketch/de") zu erstellen.
4. Erstelle einen geschlossenen Draht und verwende dann ![](/images/PartDesign_Pad.svg) [PartDesign Polster](/PartDesign_Pad/de "PartDesign Pad/de"), um die Skizze zu extrudieren und einen ersten Volumenkörper zu erstellen.
5. Füge weitere Skizzen und Polster hinzu, und verwende andere Werkzeuge des [PartDesign Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de"), um den ersten Volumenkörper zu ändern und umzuwandeln.

Alternativ kannst Du statt [Skizzen](/Sketch/de "Sketch/de") auch primitive [PartDesign Formelemente](/PartDesign_Feature/de "PartDesign Feature/de") hinzufügen, zum Beispiel eine ![](/images/PartDesign_AdditiveBox.svg) [PartDesign HinzuzufügenderQuader](/PartDesign_AdditiveBox/de "PartDesign AdditiveBox/de"). Eine beliebige Anzahl hinzuzufügender und abzuziehender Funktionselemente kann zur Erstellung eines Endvolumens verwendet werden.

## Hinweise

Ein Körper ist erforderlich, wenn der [PartDesign Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de") in einer [Funktionselementbearbeitungs](/Feature_editing/de "Feature editing/de") Methodik verwendet wird.

Ein Körper ist nicht erforderlich, wenn der [Part Arbeitsbereich](/Part_Workbench/de "Part Workbench/de") verwendet wird, da dieser Arbeitsbereich einen [Konstructive Voumenkörpergeometrie](/Constructive_solid_geometry/de "Constructive solid geometry/de") Arbeitsablauf verwendet, der auf [Primitivformen](/Part_Primitives/de "Part Primitives/de") und booleschen Operationen basiert.

Retrieved from "<http://wiki.freecad.org/index.php?title=Body/de&oldid=1332519>"