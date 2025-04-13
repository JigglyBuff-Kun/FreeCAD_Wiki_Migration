---
title: Dateiformat FCStd
---
## Übersicht

Das **FreeCAD-Standard-Dateiformat** (.FCStd) ist das Hauptdateiformat von FreeCAD. Es ist ein zusammengesetztes Format, das die Komprimierung und Einbettung verschiedener Arten von Daten unterstützt.

## Internas von .FCStd-Dateien

FCStd ist eine [Standard-Zip-Datei, die eine oder mehrere Dateien in einer speziellen Struktur enthält](#Typische_Struktur). Daher ist es zwar möglich, eine .FCStd-Datei mit einem regulären Zip-Entpacker auszulesen, aber das Packen des Inhalts einer .FCStd-Datei erfordert etwas mehr Aufmerksamkeit. FreeCAD enthält ein "Projekt-Hilfsprogramm" zum erneuten Packen von .FCStd-Dateien, dessen Verwendung in [Die Quelle der .FCStd-Datei ändern](#Die_Quelle_der_.FCStd-Datei_ändern) weiter unten beschrieben wird.

### Document.xml

Dies ist die Haupt-.xml-Datei, die alle Objekte innerhalb eines FreeCAD-Dokuments beschreibt, d.h. nur die geometrische und parametrische Definition der Objekte, nicht ihre visuelle Darstellung. Wenn FreeCAD im Konsolenmodus (ohne die GUI) ausgeführt wird, wird nur dieses Dokument.xml verwendet.

#### Beispiel Document.xml

```
<?xml version='1.0' encoding='utf-8'?>
 <Document SchemaVersion="4">
    <Properties Count="9">
       <Property name="Comment" type="App::PropertyString">
          <String value=""/>
       </Property>
       <Property name="Company" type="App::PropertyString">
          <String value=""/>
       </Property>
       <Property name="CreatedBy" type="App::PropertyString">
          <String value=""/>
       </Property>
       <Property name="CreationDate" type="App::PropertyString">
          <String value="Fri Jan 29 15:14:38 2010 "/>
       </Property>
       <Property name="FileName" type="App::PropertyString">
          <String value="/tmp/test.FCStd"/>
       </Property>
       <Property name="Id" type="App::PropertyString">
          <String value="201b746f-a1ed-4297-bf3d-65d5ec11abe0"/>
       </Property>
       <Property name="Label" type="App::PropertyString">
          <String value="names"/>
       </Property>
       <Property name="LastModifiedBy" type="App::PropertyString">
          <String value=""/>
       </Property>
       <Property name="LastModifiedDate" type="App::PropertyString">
          <String value="Fri Jan 29 15:15:21 2010 "/>
       </Property>
    </Properties>
    <Objects Count="2">
       <Object type="Mesh::Cube" name="Cube" />
       <Object type="Part::Box" name="Box" />
    </Objects>
    <ObjectData Count="2">
       <Object name="Cube">
          <Properties Count="7">
             <Property name="Height" type="App::PropertyFloatConstraint">
                <Float value="10"/>
             </Property>
             <Property name="Label" type="App::PropertyString">
                <String value="Cube"/>
             </Property>
             <Property name="Length" type="App::PropertyFloatConstraint">
                <Float value="10"/>
             </Property>
             <Property name="Mesh" type="Mesh::PropertyMeshKernel">
                <Mesh file="MeshKernel.bms"/>
             </Property>
             <Property name="Placement" type="App::PropertyPlacement">
                <PropertyPlacement Px="0" Py="0" Pz="0" Q0="0" Q1="0" Q2="0" Q3="1"/>
             </Property>
             <Property name="Pos" type="App::PropertyPlacementLink">
                <Link value=""/>
             </Property>
             <Property name="Width" type="App::PropertyFloatConstraint">
                <Float value="10"/>
             </Property>
          </Properties>
       </Object>
       <Object name="Box">
          <Properties Count="7">
             <Property name="Height" type="App::PropertyLength">
                <Float value="10"/>
             </Property>
             <Property name="Label" type="App::PropertyString">
                <String value="Box2"/>
             </Property>
             <Property name="Length" type="App::PropertyLength">
                <Float value="10"/>
             </Property>
             <Property name="Placement" type="App::PropertyPlacement">
                <PropertyPlacement Px="0" Py="0" Pz="0" Q0="0" Q1="0" Q2="0" Q3="1"/>
             </Property>
             <Property name="Pos" type="App::PropertyPlacementLink">
                <Link value=""/>
             </Property>
             <Property name="Shape" type="Part::PropertyPartShape">
                <Part file="PartShape.brp2"/>
             </Property>
             <Property name="Width" type="App::PropertyLength">
                <Float value="10"/>
             </Property>
          </Properties>
       </Object>
    </ObjectData>
 </Document>

```

### GuiDocument.xml

Dies ist das GUI-Gegenstück zur Document.xml-Datei. Für jedes im Document.xml beschriebene Objekt gibt es ein entsprechendes Objekt im GuiDocument.xml, das die visuelle Darstellung dieses Objekts (Farbe, Linienbreite usw.) beschreibt.

### Thumbnails/thumbnail.png

Hierbei handelt es sich um eine 128x128 Pixel große Miniaturansicht des Dokuments, bei der es sich um ein Bildschirmfoto der 3D-Ansicht zur Speicherzeit handelt. Miniaturansichten werden nur erzeugt, wenn die entsprechende Option in den FreeCAD-Einstellungen aktiviert ist.

### \*.brep

Dies sind die [B-rep](http://en.wikipedia.org/wiki/Boundary_representation "wikipedia:Boundary representation")-Formen aller Objekte, die eine Part-Form im Document.xml haben. Jedes Objekt, auch wenn es parametrisch ist, hat seine Form als individuelle .brep-Datei gespeichert, so dass Komponenten darauf zugreifen können, ohne die Form neu berechnen zu müssen.

### \*.svg

Dies sind die SVG-Dateien, die als Vorlagen für [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")-Zeichnugsblätter verwendet werden.

### Typische Struktur

Struktur einer typischen .FCStd-Datei. Die Erweiterung kann in .zip geändert werden, um sie wie ein normales Verzeichnis zu untersuchen. Die Dokument.xml und GuiDocument.xml befinden sich zusammen mit einer beliebigen Anzahl von .brp-Dateien (BREP-Dateien) im Archivstamm. Ein Unterverzeichnis kann die Miniaturansicht und ein anderes die, von [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") verwendeten, SVG-Vorlagen enthalten.

```
File.FCStd (File.zip)
  |
  |--thumbnails/
  |  |
  |  :--Thumbnail.png
  |
  :--Document.xml
  :--GuiDocument.xml
  :--Shape1.brp
  :--Shape2.brp
  :--MyPage.svg
  :--etc.

```

## Andere Dateien einbetten

Um andere Dateitypen in eine FCStd-Datei einzubetten, muss zunächst ein [skriptgeneriertes Objekt](/Scripted_objects/de "Scripted objects/de") in der [Python-Konsole](/Python_console/de "Python console/de") erstellt und ihm dann eine `App::PropertyFileIncluded`-Eigenschaft gegeben werden.

Anschließend kann im [Eigenschafteneditor](/Property_editor/de "Property editor/de") der hinzugefügten Eigenschaft eine Datei auf dem Computer zugeordnet werden. Wird die FCStd-Datei gespeichert, wird auch die der Eigenschaft Daten**PropertyFileIncluded** zugewiesene Datei in das `.FCStd`-Dokument gepackt. Wenn das Dokument wiederhergestellt wird, wird dieselbe Datei mit der Eigenschaft Daten**PropertyFileIncluded** auch wiederhergestellt.

```
custom_obj = App.ActiveDocument.addObject("App::FeaturePython", "CustomObject")
custom_obj.addProperty("App::PropertyFileIncluded", "AttachedFile")

```

Siehe den Forumsbeitrag, [PDF innerhalb des Projekts](https://forum.freecadweb.org/viewtopic.php?t=38201).

## Die Quelle der .FCStd-Datei ändern

* Siehe [Std ProjektHilfsprogramm](/Std_ProjectUtil/de "Std ProjectUtil/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=File_Format_FCStd/de&oldid=1517605>"