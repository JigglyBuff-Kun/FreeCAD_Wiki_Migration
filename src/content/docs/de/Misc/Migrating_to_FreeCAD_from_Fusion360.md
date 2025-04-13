---
title: Umstieg auf FreeCAD von Fusion360
---
## Hintergrund

Diese Seite ist für Anwender gedacht, die aus der Fusion 360 Welt nach FreeCAD umsteigen möchten.

## Was muss ich tun?

1. Das erste, was du tun musst, ist, deine Dateien aus proprietären Formaten und Speichern herauszuholen. Beginne mit dem Exportieren deiner Modelle aus der Cloud auf deinen lokalen Rechner.
   * Eine beliebte Methode ist die Verwendung dieses [Fusion360 total exporter](https://github.com/Jnesselr/fusion-360-total-exporter) Skripts.
   * Wir empfehlen den Export in das STEP Format.

## Glossar

:::caution
Bitte bezieh dich auch auf das in Arbeit befindlicheCAD Rosetta StoneProjekt, um die analogen Namen zu lernen, die beliebte proprietäre CADs verwenden
:::

Verweise auf die [Glossar](/Glossary/de "Glossary/de") Seite im Allgemeinen, aber hier ist eine kurze Liste von spezifischen Begriffen, die F360 Leute besonders hilfreich finden könnten:

* Tangentiale Beschränkung - FreeCADs Form der **Kollinearen Beschränkung**. Siehe ![](/images/Sketcher_ConstrainTangent.svg) [Skizzierer BeschränkeTangential](/Sketcher_ConstrainTangent/de#Zwischen_zwei_Linien_.28kollinear.29 "Sketcher ConstrainTangent/de").
* Polster - Die **Extrusions**funktion in FreeCAD. Lies die ![](/images/PartDesign_Pad.svg) [PartDesign Polster](/PartDesign_Pad/de "PartDesign Pad/de") Dokumentation um mehr zu lernen.
* Topobenennung - Kurz für [Topologisches Benennungsproblem](/Topological_naming_problem/de "Topological naming problem/de"). Wird sehr gut in [Brodie Fairhall's Youtube Kurzvideo](https://www.youtube.com/watch?v=6p2vqEEmWq4)] behandelt.

## Häufig Gestellte Fragen (HGF)

1. * Welche Formate werden in FreeCAD unterstützt?
   * Das native Dateiformat in FreeCAD ist BREP, [boundary representation](https://en.wikipedia.org/wiki/Boundary_representation), bereitgestellt vom internen [OpenCASCADE (OCCT)](/OpenCASCADE/de "OpenCASCADE/de") Geometriekern.
   * FreeCAD unterstützt alle Formate, die OCCT unterstützt, also zumindest STEP und IGES.
2. Welche Formate sollte ich verwenden, um zu FreeCAD zu migrieren?
   * STEP ist das beste Format, da es ein solides [Form](/Shape/de "Shape/de") Format ist, im Gegensatz zu einem [Polygonnetz](/Mesh/de "Mesh/de") (STL, OBJ, DAE). Beispiel, [Step mit Farben importieren](https://forum.freecadweb.org/viewtopic.php?f=3&t=50308).
   * Der Import eines STL ist möglich, aber dieses Polygonnetz Format lässt sich nur schwer weiter bearbeiten. Wir empfehlen, importierte Polygonnetze mit ![](/images/Part_ShapeFromMesh.svg) [PartFormAusNetz](/Part_ShapeFromMesh/de "Part ShapeFromMesh/de") in Festkörper Formen zu konvertieren. Am besten modellierst du das Objekt in FreeCAD nach, während du das Netz als Referenz verwenden.

## Tips

* @MPetrika ([twitter](https://twitter.com/MPetrikas/status/1362051484704264198)) empfiehlt die Installation der [ModernUI Arbeitsbereich](/ModernUI_Workbench/de "ModernUI Workbench/de") von HakanSeven12

## Lernmaterialien

* [Fusion360 nach FreeCAD Einführung](https://www.youtube.com/watch?v=_GxJkB23ZHM), Video von Brodie Fairhall.
* [Fusion360 nach FreeCAD - Teil 2](https://www.youtube.com/watch?v=IESZD4QS3P8), Video von Brodie Fairhall.
* [V0.19 Leistungsvergleich - 2019 Monatliche Herausforderungen](https://forum.freecadweb.org/viewtopic.php?f=36&t=50492) werden eine Reihe von Objekten, die mit Fusion360 erstellt wurden, von dem erfahrenen Anwender ppemawm mit FreeCAD nachmodelliert.
* [Schriftliches Tutorium für Anfänger: vom ersten Teil zur technischen Zeichnung.](https://github.com/macdroid53/LearningFreeCAD) von macdroid53.
* [Eine Online Quelle für uns regelmäßige FreeCAD Anwender](https://www.freecad.info/).

## Vergleichsvideos

* [Modellieren einer Verdichterturbine in FreeCAD und Fusion360](https://www.youtube.com/watch?v=kirDbZd0dvI&feature=youtu.be)

## Hilfe

Fehlt auf dieser Wiki-Seite etwas. Bitte stelle eine Anfrage für [Wiki Berechtigungen](https://forum.freecadweb.org/viewtopic.php?f=21&t=6830) im Forum, um diese Seite zu bearbeiten.

## Verwandt

* [Umstieg auf FreeCAD von OnShape](/Migrating_to_FreeCAD_from_OnShape/de "Migrating to FreeCAD from OnShape/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Migrating_to_FreeCAD_from_Fusion360/de&oldid=978304>"