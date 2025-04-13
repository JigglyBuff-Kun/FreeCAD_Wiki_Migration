---
title: Arbeitsbereich OpenSCAD
---

![](/images/Workbench_OpenSCAD.svg)

Symbol des Arbeitsbereichs OpenSCAD

## Einleitung

Der Arbeitsbereich ![](/images/Workbench_OpenSCAD.svg) OpenSCAD soll Interoperabilität mit der Open-Source-Software [OpenSCAD](http://www.openscad.org/) bieten. Dieses Programm wird nicht als Bestandteil von FreeCAD verteilt, sollte aber installiert werden, um diesen Arbeitsbereich voll nutzen zu können. OpenSCAD sollte nicht mit [OpenCASCADE](/OpenCASCADE/de "OpenCASCADE/de") verwechselt werden, welches der geometrische Kernel ist, den FreeCAD zur Erstellung von Geometrie auf dem Bildschirm verwendet. Die OpenCASCADE-Bibliotheken werden immer benötigt, um FreeCAD zu verwenden, während die ausführbare OpenSCAD-Datei vollkommen optional ist.

Er enthält einen [CSG](/OpenSCAD_CSG/de "OpenSCAD CSG/de")-Importer zum Öffnen der CSG-Dateien aus OpenSCAD und einen Exporter zur Ausgabe eines CSG-basierten Baums. Geometrie, die nicht auf CSG-Operationen basiert, wird als Netz exportiert.

Dieser Arbeitsbereich enthält Funktionen, um den CSG-Funktionssbaum zu ändern und Modelle zu reparieren. Er enthält außerdem allgemein nutzbare Werkzeuge, die keine OpenSCAD-Installation erfordern; sie können in Verbindung mit anderen Arbeitsbereichen verwendet werden. Beispielsweise verwendet der Arbeitsbereich [Netz](/Mesh_Workbench/de "Mesh Workbench/de") intern die OpenSCAD-Funktionen, um Operationen mit [Netzen](/Mesh/de "Mesh/de") durchzuführen, da diese recht robust sind.

![](/images/OpenSCADexamaple1.png)

## Abhängigkeiten

In FreeCAD 0.19 wurde das Ply-Modul (Python-Lex-Yacc), das zum Importieren von CSG-Dateien verwendet wird, aus dem FreeCAD-Quellcode entfernt, da es sich um eine nicht von FreeCAD entwickelte Drittanbieter-Bibliothek handelt. Folglich musst du nun Ply installieren, bevor du den Arbeitsbereich OpenSCAD verwenden kannst. Wenn du eine vorkompilierte, stabile Version von FreeCAD verwendest, sollte diese Abhängigkeit auf allen Plattformen automatisch installiert werden; in anderen Fällen, z.B. wenn du [Kompilieren](/Compiling/de "Compiling/de") aus dem Quellcode verwendest, musst du es möglicherweise aus einem Online Repositorium installieren.

In openSUSE wird vorgenommen dies durch:

```
sudo zypper install python3-ply

```

In Debian/Ubuntu basierten Systemen wird dies wie nachfolgend gemacht.

```
sudo apt install python3-ply

```

Die allgemeine Installation auf allen Plattformen kann über den Python Paketindex durchgeführt werden.

```
pip3 install --user ply

```

## OpenSCAD Sprache und Dateiformat

Die OpenSCAD Sprache erlaubt die Benutzung von Variablen und Schleifen. Sie erlaubt die Deklarierung von Sub Modulen, um Geometrie und Code wieder zu verwenden. Dieser hohe Grad an Flexibilität macht parsing (Übersetzen) sehr kompliziert. Im Moment kann der OpenSCAD Arbeitsbereich in FreeCAD die OpenSCAD Sprache nicht direkt verarbeiten.
Andernfalls, wenn OpenSCAD installiert ist, kann es dazu verwendet werden, die Eingabe in ein Ausgabeformat namens "CSG" zu verwandeln.
Dies ist ein Unterbereich der OpenSCAD Sprache und kann als Eingabe für OpenSCAD zur weiteren Bearbeitung verwendet werden.
Während der Umwandlung wird jegliches parametrisches Verhalten verlorengehen - alle Variablennamen werden verworfen, Schleifen aufgelöst und mathematische Ausdrücke errechnet.

## Werkzeuge

- ![](/images/OpenSCAD_ColorCodeShape.svg) [Farbcodeform](/OpenSCAD_ColorCodeShape/de "OpenSCAD ColorCodeShape/de"): Ändert die Farbe von ausgewählten oder allen Formen, basierend auf ihrer Gültigkeit.
- ![](/images/OpenSCAD_ReplaceObject.svg) [Objekt ersetzen](/OpenSCAD_ReplaceObject/de "OpenSCAD ReplaceObject/de"): Ersetzt ein Objekt in der Baumstruktur. Bitte altes, neues und Elternobjekt auswählen.
- ![](/images/OpenSCAD_RemoveSubtree.svg) [Unterbaum entfernen](/OpenSCAD_RemoveSubtree/de "OpenSCAD RemoveSubtree/de"): Entfernt die ausgewählten Objekts und alle Kinder, die nicht von anderen Objekten referenziert werden.
- ![](/images/OpenSCAD_RefineShapeFeature.svg) [Formmerkmale verfeinern](/OpenSCAD_RefineShapeFeature/de "OpenSCAD RefineShapeFeature/de"): Entfernt unnötige Linien.
- ![](/images/OpenSCAD_MirrorMeshFeature.svg) [Spiegeln Netz Merkmale](/OpenSCAD_MirrorMeshFeature/de "OpenSCAD MirrorMeshFeature/de"): Erstelle Spiegel Netz Merkmal.
- ![](/images/OpenSCAD_ScaleMeshFeature.svg) [Skaliere Netz Merkmal](/OpenSCAD_ScaleMeshFeature/de "OpenSCAD ScaleMeshFeature/de"): Skalieren eines Netzmerkmals.
- ![](/images/OpenSCAD_ResizeMeshFeature.svg) [Größe des Netzmerkmals ändern](/OpenSCAD_ResizeMeshFeature/de "OpenSCAD ResizeMeshFeature/de"): Ändern der Größe eines Netzmerkmals.
- ![](/images/OpenSCAD_IncreaseToleranceFeature.svg) [Toleranzmerkmal erhöhen](/OpenSCAD_IncreaseToleranceFeature/de "OpenSCAD IncreaseToleranceFeature/de"): Erhöht die Toleranz von Kanten/Flächen/Knoten von ausgewählten Objekten.
- ![](/images/OpenSCAD_Edgestofaces.svg) [Kanten in Flächen umwandeln](/OpenSCAD_Edgestofaces/de "OpenSCAD Edgestofaces/de"): Wandelt Kanten in Flächen um. Nützlich zur Vorbereitung von importierter DXF Geometrie zur Extrusion.
- ![](/images/OpenSCAD_ExpandPlacements.svg) [Positionierungen erweitern](/OpenSCAD_ExpandPlacements/de "OpenSCAD ExpandPlacements/de"): Erweitert alle Platzierungen im Feature-Baum abwärts.
- ![](/images/OpenSCAD_ExplodeGroup.svg) [Explodiere Gruppe](/OpenSCAD_ExplodeGroup/de "OpenSCAD ExplodeGroup/de"): Löst eine Bindung oder einen Teilverbund in die einzelnen Teile auf.
- ![](/images/OpenSCAD_AddOpenSCADElement.svg) [Hinzufügen OpenSCAD Element](/OpenSCAD_AddOpenSCADElement/de "OpenSCAD AddOpenSCADElement/de"): Fügt durch Eingabe von OpenSCAD-Code in das Aufgabenpaneel ein OpenSCAD Element hinzu.
- ![](/images/OpenSCAD_MeshBoolean.svg) [Polygonnetz Boolean](/OpenSCAD_MeshBoolean/de "OpenSCAD MeshBoolean/de"): Erzeugt ein neues Netzobjekt durch eine boolesche Operation aus Formen.
- ![](/images/OpenSCAD_Hull.svg) [Hülle](/OpenSCAD_Hull/de "OpenSCAD Hull/de"): Wendet eine Hülle auf selektierte Formen an.
- ![](/images/OpenSCAD_Minkowski.svg) [Minkowski](/OpenSCAD_Minkowski/de "OpenSCAD Minkowski/de"): Wendet eine Minkowski-Summe auf selektierte Formen an.

## Einstellungen

- ![](/images/Std_DlgPreferences.svg) [Einstellungen](/OpenSCAD_Preferences/de "OpenSCAD Preferences/de"): verfügbare Einstellungen für die OpenSCAD Werkzeuge.

## Einschränkungen

OpenSCAD erstellt CSG (constructive solid geometry) genauso wie es Netz-Körper importiert und 2D-Geometrie extrudiert (aus [DXF](/DXF/de "DXF/de")-Dateien). FreeCAD erlaubt es, CSG auch mit Grundkörpern zu erstellen. Der Geometriekern von FreeCAD (OCCT) arbeitet mit einer Umgrenzungsdarstellung. Deshalb sollte die Umwandlung von CSG nach BREP in der Theorie möglich sein, während die Umwandlung von BREP nach CSG im Allgemeinen nicht funktionieren dürfte.

OpenSCAD nutzt intern Netz-Körper. Manche Operationen, die bei Netz-Körpern nützlich sind, sind bei BREP-Körpern nicht sinnvoll und können daher nicht voll unterstützt werden. Unter diesen sind konvexe Hülle, Minkowski-Summe, glide und subdiv. Im Moment benutzen wir die OpenSCAD-Ausführungsdatei, um Hüllen und Minkowski-Operationen durchzuführen und die Ergebnisse zu importieren. Das bedeutet, das die beteiligte Geometrie trianguliert (temporär in Netz-Körper verwandelt) wird. In OpenSCAD wird nicht-einheitliches Skalieren oft benutzt, das keinerlei Probleme bei der Benutzung mit Netz-Köpern macht. In unserem Geometriekern werden geometrische Grundelemente (Linien, Kreissegmente) in BSplines konvertiert, bevor man solche Operationen durchführt. Diese BSplines sind bekannt dafür, dass Sie später in booleschen Operationen Fehler verursachen. Eine automatisierte Lösung ist im Moment nicht verfügbar. Bitte posten Sie im Fourm, wenn Sie solche Fehler entdecken. Oft können solche Problem dadurch vermieden werden, dass man kleine Teile des Modelles anders aufbaut. Ein Zylindersegment kann ersetzt werden durch ein extrudiertes Stück einer Ellipse.

## Text importieren

Importing OpenSCAD code with texts requires that the fonts that are used are properly installed on your system. You can verify this by opening OpenSCAD as a standalone tool and checking the list in **Help → Font List**. The list will also give you the correct font names. If a font does not appear in the list after installing, you may have to manually copy the font file to the appropriate system directory.

Importing texts is relatively slow. Behind the scenes FreeCAD uses a DXF file created by OpenSCAD. The more contours there are the slower the import.

It can be a good idea to first import a simple test case (replace `NameOfFont` with the correct font name):

```
TESTFONT="NameOfFont";
linear_extrude(0.001) {
  text("A", size=5, font=TESTFONT, script="Latn");
};

```

The `script="Latn"` parameter can be left out here, but is required if the text string does not contain any letters, but only punctuation and/or numbers.

Please note that `use <FONT>;` statements in your source files are ignored when importing in FreeCAD. Under OpenSCAD the effect of a `use` statement is that the provided font file is temporarily added to the list of known fonts (although even there the statement does not work when a script is modified interactively).

## Hinweise

Wenn [DXF](/DXF/de "DXF/de") importiert wird, sollte die "Draft Präzision" auf einen sinnvollen Wert eingestellt werden, um so die Erkennung von verbundenen Kanten zu erleichtern.

Wenn FreeCAD beim Import von CSG abstürzt, wird dringend empfohlen, "Modell automatisch nach Boolescher Operation überprüfen" im Menü **Bearbeiten → Einstellungen → Part Design → Allgemein** zu aktivieren.

## Tutorien

- [OpenSCAD Code Importieren](/Import_OpenSCAD_code/de "Import OpenSCAD code/de")

## Verweise

- Das offizielle Quellcodeverzeichnis des OpenSCAD-Projekts wird auf [GitHub](https://github.com/openscad/openscad) gehosted.
- Offene Tickets gekennzeichnet mit "OpenSCAD" auf [FreeCADs Github-Issue-Tracker](https://github.com/FreeCAD/FreeCAD/labels/WB%20OpenSCAD). Es gibt auch Tickets auf dem jetzt archvierten [Mantis-Bugtracker](https://freecadweb.org/tracker/search.php?tag_string=OpenSCAD).
- Modelle gekennzeichnet mit "OpenSCAD" auf [Thingiverse](http://www.thingiverse.com/tag:openscad).

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_Workbench/de&oldid=1515793>"
