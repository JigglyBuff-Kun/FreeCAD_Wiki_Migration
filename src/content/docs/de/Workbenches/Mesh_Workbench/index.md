---
title: Arbeitsbereich Mesh
---

![](/src/assets/images/Workbench_Mesh.svg)

Symbol des Arbeitsbereichs Mesh

## Einleitung

Der Arbeitsbereich ![](/src/assets/images/Workbench_Mesh.svg)Mesh (Polygonnetz) behandelt [Dreiecksnetze](http://en.wikipedia.org/wiki/Triangle_mesh). Netze sind eine besondere Art von 3D-Objekten, die aus dreieckigen Flächen bestehen, die durch ihre Knoten und Kanten miteinander verbunden sind.

Viele 3D-Anwendungen, wie [Sketchup](http://de.wikipedia.org/wiki/SketchUp_%28Software%29), [blender](http://de.wikipedia.org/wiki/Blender_%28Software%29), [Maya](http://de.wikipedia.org/wiki/Maya_%28Software%29) und [3d studio max](http://de.wikipedia.org/wiki/3D-Studio_MAX), verwenden Polygonnetze als wichtigsten Typ von 3D-Objekten. Da Polygonnetze sehr einfache Objekte sind, die nur aus Knoten (Punkten), Kanten und dreieckigen Flächen bestehen, sind sie sehr einfach zu erstellen, zu bearbeiten, zu unterteilen und zu dehnen und können leicht und ohne Verlust an Details von einer Anwendung zur anderen übertragen werden. Außerdem können 3D-Anwendungen in der Regel sehr große Mengen davon ohne Probleme verwalten, da sie sehr einfache Daten enthalten. Aus diesen Gründen sind Netze oft das 3D-Objekt der Wahl, für Anwendungen im Umgang mit Filmen, Animationen und Bilderstellung.

Im technischen Bereich stellen Polygonnetze allerdings eine große Begrenzung dar: Sie können gekrümmte Flächen nicht präzise definieren. Deshalb setzt FreeCAD stattdessen auf [Brep](http://en.wikipedia.org/wiki/Boundary_representation "wikipedia:Boundary representation"). Der Arbeitsbereich Mesh bietet einige Befehle zur direkten Änderung von Polygonnetzen, wird aber am häufigsten verwendet, um 3D-Netzdaten zu importieren und in einen Festkörper umzuwandeln, zur Verwendung mit den Arbeitsbereichen ![](/src/assets/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de") oder ![](/src/assets/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de").

![](/src/assets/images/Mesh_example.jpg)

## Werkzeuge

Auf alle Werkzeuge des Arbeitsbereichs Mesh kann über das Menü **Netze** zugegriffen werden. Fast alle Werkzeuge sind auch in einer der Mesh-Symbolleisten verfügbar.

- ![](/src/assets/images/Mesh_Import.svg) [Netz importieren...](/Mesh_Import/de "Mesh Import/de"): Importiert ein Netzobjekt aus einer Datei.

- ![](/src/assets/images/Mesh_Export.svg) [Netz exportieren...](/Mesh_Export/de "Mesh Export/de"): Exportiert ein Netzobjekt in eine Datei.

- ![](/src/assets/images/Mesh_FromPartShape.svg) [Netz aus Form erstellen...](/Mesh_FromPartShape/de "Mesh FromPartShape/de"): Erstellt Netzobjekte aus Formobjekten.

- ![](/src/assets/images/Mesh_RemeshGmsh.svg)[Aufbereiten...](/Mesh_RemeshGmsh/de "Mesh RemeshGmsh/de"): Vernetzt ein Netzobjekt erneut.

* Analysieren
  - ![](/src/assets/images/Mesh_Evaluation.svg)[Netz auswerten und reparieren...](/Mesh_Evaluation/de "Mesh Evaluation/de"): Bewertet und repariert ein Netzobjekt.
  - ![](/src/assets/images/Mesh_EvaluateFacet.svg) [Flächeninfo](/Mesh_EvaluateFacet/de "Mesh EvaluateFacet/de"): Zeigt Informationen über Flächen von Netzobjekten an.
  - ![](/src/assets/images/Mesh_CurvatureInfo.svg)[Krümmungsinfo](/Mesh_CurvatureInfo/de "Mesh CurvatureInfo/de"): Zeigt Informationen über Flächen von Netzobjekten an: Zeigt die absolute Krümmung von [Krümmungsobjekte](/Mesh_VertexCurvature/de "Mesh VertexCurvature/de") an ausgewählten Punkten an.
  - ![](/src/assets/images/Mesh_EvaluateSolid.svg)[Festkörpernetz prüfen](/Mesh_EvaluateSolid/de "Mesh EvaluateSolid/de"): Prüft, ob ein Netzobjekt fest ist.
  - ![](/src/assets/images/Mesh_BoundingBox.svg)[Begrenzungsinfo...](/Mesh_BoundingBox/de "Mesh BoundingBox/de"): Zeigt die Begrenzungsrahmen Koordinaten eines Netzobjekts an.

- ![](/src/assets/images/Mesh_VertexCurvature.svg) [Krümmungsdiagramm](/Mesh_VertexCurvature/de "Mesh VertexCurvature/de"): Erstellt Netzkrümmungsobjekte für Netzobjekte.

- ![](/src/assets/images/Mesh_HarmonizeNormals.svg) [Normale harmonisieren](/Mesh_HarmonizeNormals/de "Mesh HarmonizeNormals/de"): Harmonisiert die Normalen von Netzobjekten.

- ![](/src/assets/images/Mesh_FlipNormals.svg) [Wendet Normalen](/Mesh_FlipNormals/de "Mesh FlipNormals/de"): Wendet die Normalen von Netzobjekten.

- ![](/src/assets/images/Mesh_FillupHoles.svg) [Löcher füllen...](/Mesh_FillupHoles/de "Mesh FillupHoles/de"): Füllt Löcher in Netzobjekten.

- ![](/src/assets/images/Mesh_FillInteractiveHole.svg) [Loch schließen](/Mesh_FillInteractiveHole/de "Mesh FillInteractiveHole/de"): Füllt ausgewählte Löcher in Netzobjekten.

- ![](/src/assets/images/Mesh_AddFacet.svg)[Dreieck hinzufügen](/Mesh_AddFacet/de "Mesh AddFacet/de"): Fügt Flächen entlang einer Begrenzung eines offenen Netzobjekts hinzu.

- ![](/src/assets/images/Mesh_RemoveComponents.svg) [Komponenten entfernen...](/Mesh_RemoveComponents/de "Mesh RemoveComponents/de"): Entfernt Flächen von Netzobjekten.

- ![](/src/assets/images/Mesh_RemoveCompByHand.svg)[Komponenten von Hand entfernen...](/Mesh_RemoveCompByHand/de "Mesh RemoveCompByHand/de"): Entfernt Komponenten von Netzobjekten.

- ![](/src/assets/images/Mesh_Segmentation.svg) [Netzsegmente erstellen...](/Mesh_Segmentation/de "Mesh Segmentation/de"): Erstellt separate Netzsegmente für bestimmte Oberflächentypen eines Netzobjekts.

- ![](/src/assets/images/Mesh_SegmentationBestFit.svg)[Netzsegmente aus bestpassenden Flächen erzeugen...](/Mesh_SegmentationBestFit/de "Mesh SegmentationBestFit/de"): Erstellt separate Netzsegmente für bestimmte Oberflächentypen eines Netzobjekts und kann deren Parameter identifizieren.

- ![](/src/assets/images/Mesh_Smoothing.svg)[Glätten...](/Mesh_Smoothing/de "Mesh Smoothing/de"): Glättet Netzobjekte.

- ![](/src/assets/images/Mesh_Decimating.svg)[Dezimierung...](/Mesh_Decimating/de "Mesh Decimating/de"): Reduziert die Anzahl der Flächen in Netzobjekten.

- ![](/src/assets/images/Mesh_Scale.svg) [Skalieren...](/Mesh_Scale/de "Mesh Scale/de"): Skaliert Netzobjekte.

- ![](/src/assets/images/Mesh_BuildRegularSolid.svg) [Regelmäßiger Festkörper...](/Mesh_BuildRegularSolid/de "Mesh BuildRegularSolid/de") Erzeugt ein regelmäßiges parametrisches Volumenkörper Netzobjekt.

* Boolsche Operation

- ![](/src/assets/images/Mesh_Union.svg)[Vereinigung](/Mesh_Union/de "Mesh Union/de"): Erzeugt ein Netzobjekt, das die Vereinigung von zwei Netzobjekten ist.
- ![](/src/assets/images/Mesh_Intersection.svg)[Schnitt](/Mesh_Intersection/de "Mesh Intersection/de"): Erstellt ein Netzobjekt, das die Schnittmenge zweier Netzobjekte ist.
- ![](/src/assets/images/Mesh_Difference.svg)[Differenz](/Mesh_Difference/de "Mesh Difference/de"): Erstellt ein Netzobjekt, das die Differenz von zwei Netzobjekten ist.

* Schneiden
  - ![](/src/assets/images/Mesh_PolyCut.svg) [Netz schneiden](/Mesh_PolyCut/de "Mesh PolyCut/de"): Schneidet ganze Flächen aus Netzobjekten heraus.
  - ![](/src/assets/images/Mesh_PolyTrim.svg)[Netz trimmen](/Mesh_PolyTrim/de "Mesh PolyTrim/de"): Trimmt Flächen und Teile von Flächen von Netzobjekten.
  - ![](/src/assets/images/Mesh_TrimByPlane.svg)[Netz mit Ebene trimmen](/Mesh_TrimByPlane/de "Mesh TrimByPlane/de"): Entfernt Flächen und Teile von Flächen, die sich auf der einen Seite einer Ebene befinden, aus einem Netzobjekt.
  - ![](/src/assets/images/Mesh_SectionByPlane.svg)[Schnitt aus Netz und Ebene erstellen](/Mesh_SectionByPlane/de "Mesh SectionByPlane/de"): Erzeugt eine ebene Schnittlinie über ein Netzobjekt.
  - ![](/src/assets/images/Mesh_CrossSections.svg)[Querschnitte...](/Mesh_CrossSections/de "Mesh CrossSections/de"): Erstellt mehrere parallele ebene Schnittlinien über Netzobjekte.

- ![](/src/assets/images/Mesh_Merge.svg)[Zusammenführen](/Mesh_Merge/de "Mesh Merge/de"): Erstellt ein Netzobjekt, indem die Netze von zwei oder mehr Netzobjekten kombiniert werden.

- ![](/src/assets/images/Mesh_SplitComponents.svg) [Komponenten trennen](/Mesh_SplitComponents/de "Mesh SplitComponents/de"): Zerlegt ein Netzobjekt in seine Bestandteile.

- ![](/src/assets/images/MeshPart_CreateFlatMesh.svg)[Netz abwickeln](/MeshPart_CreateFlatMesh/de "MeshPart CreateFlatMesh/de"): Erstellt eine ebene Darstellung eines Netzobjekts.

- ![](/src/assets/images/MeshPart_CreateFlatFace.svg)[Fläche abwickeln](/MeshPart_CreateFlatFace/de "MeshPart CreateFlatFace/de"): Erstellt eine ebene Darstellung einer Fläche eines Formobjekts.

## Einstellungen

Es gibt einige [Exporteinstellungen im Zusammenhang mit Netzformaten](/Import_Export_Preferences/de#Netzformate "Import Export Preferences/de"), aber diese werden von Befehlen, die zu diesem Arbeitsbereich gehören, nicht verwendet. Sie werden von dem Befehl [Std Export](/Std_Export/de "Std Export/de") verwendet.

Einstellungen des Arbeitsbereichs Mesh können in den folgenden Gruppen des [Voreinstellungseditors](/Preferences_Editor/de "Preferences Editor/de") gefunden werden:

- ![](/src/assets/images/Preferences-display.svg) [Anzeige](/Preferences_Editor/de#Anzeige_Einstellungen "Preferences Editor/de"): Auf der Seite [Netzansicht](/Preferences_Editor/de#Netzansicht "Preferences Editor/de") können verschiedene Einstellungen vorgenommen werden.
- ![](/src/assets/images/Preferences-openscad.svg) [OpenSCAD](/OpenSCAD_Preferences/de "OpenSCAD Preferences/de"): Die Befehle [Mesh Vereinigung](/Mesh_Union/de "Mesh Union/de"), [Mesh Schnitt](/Mesh_Intersection/de "Mesh Intersection/de") und [Mesh Differenz](/Mesh_Difference/de "Mesh Difference/de") erfordern [OpenSCAD](http://www.openscad.org/) und verwenden die Einstellung **OpenSCAD executable**, um die ausführbare Datei zu finden.

## Hinweise

- Weitere Netzwerkzeuge sind im Arbeitsbereich ![](/src/assets/images/Workbench_OpenSCAD.svg) [OpenSCAD](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de") verfügbar.
- Siehe [Mesh Skripten](/Mesh_Scripting/de "Mesh Scripting/de") zum Bearbeiten und Erstellen von Netzen mit [Python](/Python/de "Python/de").
- Siehe auch: [FreeCAD und Polygonnetz Import](/FreeCAD_and_Mesh_Import/de "FreeCAD and Mesh Import/de").
- Siehe [Asymptote](/Asymptote/de "Asymptote/de") zum Exportieren von Netzen in das Asymptote-Format.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Workbench/de&oldid=1498357>"
