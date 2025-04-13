---
title: Draft Tutorium
---
|  |
| --- |
| Tutorium |
| Thema |
| Technisches Zeichnen |
| Niveau |
| Anfänger |
| Zeit zum Abschluss |
| 30 Minuten |
| Autoren |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) und vocx |
| FreeCAD-Version |
| 0.19 |
| Beispieldateien |
| [Entwurf Tutorium aktualisiert](https://forum.freecad.org/viewtopic.php?f=36&t=43651) |
| Siehe auch |
| *None* |
|  |

## Einleitung

Diese Anleitung wurde ursprünglich von Drei geschrieben und von vocx überarbeitet und illustriert.

Diese Anleitung soll den Leser in den grundlegenden Arbeitsablauf des Arbeitsbereichs ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/de "Draft Workbench/de") einführen.

Der Leser wird üben:

* die Erstellung von Linien, Bögen und Polygonen
* die Verwendung von Arbeitsebenen
* die Erstellung von Bemaßungen, Text und Textformen
* die Erstellung einer technischen Zeichnung

Diese Anleitung verwendet die Schreibweise `(x, y, z)`, um die zur Definition von Punkten in einem Objekt erforderlichen Koordinaten zu bezeichnen. Die Standardeinheit ist Millimeter `mm`.

![](/images/00_Dr01_Draft_Tutorial_final.png)

Endgültige Zeichnung mit verschiedenen Draft-Objekten.

## Einrichtung

1. Öffne FreeCAD, erstelle ein neues leeres Dokument mit **Datei → ![](/images/Std_New.svg) [Neu](/Std_New "Std New")**.

:   1.1. Wechsle zum [Arbeitsbereich Draft](/Draft_Workbench/de "Draft Workbench/de") über die [Arbeitsbereich-Auswahl](/Std_Workbench/de "Std Workbench/de") oder das Menü **Ansicht → Arbeitsbereich → ![](/images/Workbench_Draft.svg) Draft**.
:   1.2. Stelle sicher, dass du verstehst, wie der [Eigenschafteneditor](/Property_editor/de "Property editor/de"), insbesondere die Rreiter **Daten** und **Ansichten** zum Ändern der Eigenschaften zu verwenden sind.

Wenn Eigenschaften geändert werden, musst du eventuell eine ![](/images/Std_Refresh.svg) [Std Aktualisierung](/Std_Refresh/de "Std Refresh/de") vornehmen, um das Ergebnis in der [3D-Ansicht](/3D_view/de "3D view/de") zu sehen.

:   1.3. Da es sich bei den Draft-Objekten um ebene Formen handelt, sind sie von oben besser zu sehen. Verwende ![](/images/Std_ViewTop.svg) [Draufsicht](/Std_ViewTop/de "Std ViewTop/de") zum setzen der [3D-Ansicht](/3D_view/de "3D view/de").
:   1.4. Obwohl es in dieser Anleitung nicht verwendet wird, ist das Draft-Raster hilfreich, um geometrische Elemente zu positionieren. Verwende ![](/images/Draft_SelectPlane.svg) [Ebene auswählen](/Draft_SelectPlane/de "Draft SelectPlane/de"), um sowohl die Arbeitsebene als auch das Raster festzulegen, und dann das Raster mit ![](/images/Draft_ToggleGrid.svg) [Raster umschalten](/Draft_ToggleGrid/de "Draft ToggleGrid/de") anzuzeigen und auszublenden.

## Werkzeugleiste Draft-Einrasten

2. Die Werkzeugleiste [Draft-Einrasten](/Draft_Snap/de "Draft Snap/de") wird normalerweise aktiviert, wenn du zum Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") wechselst.

:   2.1. Um sicherzustellen, dass sie immer vorhanden ist, gehe zu den [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"), **Bearbeiten → Einstellungen → Draft → Raster und Einrasten**.
:   2.2. Stelle sicher, dass die **Werkzeugleiste Draft-Einrasten anzeigen** aktiv ist.

Du kannst auch die Sichtbarkeit und die Eigenschaften des Draft-Rasters im gleichen Fenster ändern.

## Arbeitsebenen

Die meisten Draft-Objekte sind ebene Formen, so dass sie natürlich auf einer *Arbeitsebene* aufbauen. Eine Arbeitsebene kann eine der globalen Hauptkoordinatenebenen XY, XZ und YZ sein, oder es kann eine Ebene sein, die parallel zu diesen Ebenen mit einem positiven oder negativen Versatz verläuft, oder es kann eine Ebene sein, die durch die Fläche eines Festkörperobjekts definiert ist.

3. Drücke ![](/images/Draft_SelectPlane.svg) [Ebene auswählen](/Draft_SelectPlane/de "Draft SelectPlane/de"), oder gehe zum Menü **Dienstprogramme → ![](/images/Draft_SelectPlane.svg) [Ebene auswählen](/Draft_SelectPlane/de "Draft SelectPlane/de")**, um die [Aufgaben-Bereich](/Task_panel/de "Task panel/de") Arbeitsebene einrichten zu öffnen.

:   3.1. Drücke ![](/images/Std_ViewTop.svg) Draufsicht (XY).

Vor dem drücken der Taste kannst du auch den Wert des Versatzes in Millimetern sowie den Rasterabstand, die Hauptlinien und den Einrastradius ändern.

## Linien und Bögen

4. Wir werden Bögen und Linien erstellen.

:   4.1. Drücke ![](/images/Draft_Arc.svg) [Kreisogen](/Draft_Arc/de "Draft Arc/de").
:   4.2. Setze den **Mittelpunkt** auf `(0, 0, 0)`, und drücke Enter.
:   4.3. Setze den **Radius** auf `30 mm`, und drücke Enter.
:   4.4. Setze den **Startwinkel** auf `60.0°`, und drücke Enter.
:   4.5. Setze den **Öffnungswinkel** auf `60.0°`, und drücke Enter.
:   4.6. Wiederhole das gleiche Verfahren für einen zweiten Bogen mit einem Radius von `25 mm`, die anderen Eigenschaften sind die gleichen.

5. Wir werden nun ein geschlossenes Profil erzeugen, indem wir die Bögen mit Linien verbinden.

:   5.1. Drücke ![](/images/Draft_Line.svg) [Linie](/Draft_Line/de "Draft Line/de").
:   5.2. Stelle in der Werkzeugleiste [Draft-Einrasten](/Draft_Snap/de "Draft Snap/de") sicher, dass ![](/images/Draft_Snap_Lock.svg) [Einrasten sperren](/Draft_Snap_Lock/de "Draft Snap Lock/de") aktiv ist, und außerdem nur ![](/images/Draft_Snap_Endpoint.svg) [Einrasten auf Endpunkt](/Draft_Snap_Endpoint/de "Draft Snap Endpoint/de"). Wenn du den Zeiger auf einen Endpunkt eines Bogens bewegst, sollte das ![](/images/Draft_Snap_Endpoint.svg) Symbol [Einrasten auf Endpunkt](/Draft_Snap_Endpoint/de "Draft Snap Endpoint/de") erscheinen. Klicke diesen Punkt zum auswählen.
:   5.3. Bewege den Zeiger auf den nächstgelegenen Endpunkt des anderen Bogens, um die beiden Bögen miteinander zu verbinden.
:   5.4. Wiederhole den Vorgang für die andere Seite des Bogens, um das Profil zu schließen.

![](/images/01_Dr01_Draft_Arc_profile.png)

Geschlossenes Profil, das durch zwei Bögen und zwei Linien erzeugt wird.

## Verschmelzen oder Zusammensetzen

Wir haben jetzt mehrere Objekte in der [Baumansicht](/Tree_view/de "Tree view/de"), die ein geschlossenes Profil bilden. Dieses Profil besteht jedoch nach wie vor aus unverbundenen Objekten; jedes von ihnen kann unabhängig von den anderen bearbeitet und verschoben werden. Es ist möglich, mit den Elementen auf diese Weise weiter zu arbeiten, aber es ist auch möglich, sie zu einem einzigen Objekt zu verschmelzen.

6a. Beachte, dass das Verschmelzen der Objekte zu einem einzigen Objekt ein Objekt erzeugt, das nicht mehr parametrisch ist, so dass ihre Eigenschaften nicht weiter geändert werden können.

:   6a.1 Wähle alle vier Objekte in der [Baumansicht](/Tree_view/de "Tree view/de") oder mit gedrückt gehaltener Ctrl-Taste in der [3D-Ansicht](/3D_view/de "3D view/de") .

6a.2 Wenn diese Objekte ausgewählt sind, klicke auf ![](/images/Draft_Upgrade.svg) [Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de").

:   6a.3 Dadurch werden die vier Objekte zu einer einzigen `Polylinie` aufgewertet.

6b. Wenn du die parametrische Natur der Objekte beibehalten möchtest, kannst du stattdessen einen Verbund erstellen.

:   6b.1. Wechsle zum Arbeitsbereich ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de").
:   6b.2 Wenn diese Objekte ausgewählt sind, klicke auf ![](/images/Part_Compound.svg) [Part Erzeuge Verbund](/Part_Compound/de "Part Compound/de").

## Rechtecke, Kreise und Polygone

7. Wir werden einen rechteckigen Rahmen zeichnen.
(Wechsle zurück zum Arbeitsbereich ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/de "Draft Workbench/de").)

:   7.1. Drücke ![](/images/Draft_Rectangle.svg) [Rechteck](/Draft_Rectangle/de "Draft Rectangle/de").
:   7.2. Gib die Werte des ersten Punktes `(-100, -60, 0)` ein und drücke Enter.
:   7.3. Stelle sicher, dass die **Relativ** Option nicht angehakt ist, da wir absolute Einheiten verwenden werden. Du kannst R auf der Tastatur drücken, um diese Option schnell ein- und auszuschalten.
:   7.4. Gib die Werte für den zweiten Punkt `(140, 90, 0)` ein und drücke Enter.

Ein Rechteck wird erstellt. Gehe in den [Eigenschafteneditor](/Property_editor/de "Property editor/de"), um seine Eigenschaften zu ändern. Wenn das Rechteck keine Fläche erzeugen soll, setze die Daten-Eigenschaft**Make Face** auf `false`. Wenn du eine Fläche erstellen möchtest, aber nur die Drähte dieses Objekts siehst, lass die Daten-Eigenschaft**Make Face** auf `true`, aber setze die Ansicht-Eigenschaft**Display Mode** auf `Wireframe`.

8. Wir werden einen Kreis zeichnen.

:   8.1. Drücke ![](/images/Draft_Circle.svg) [Kreis](/Draft_Circle "Draft Circle").
:   8.2. Gib die Werte des Zentrums `(0, 0, 0)` ein und drücke Enter.
:   8.3. Setze den Radius auf `15 mm` und drücke Enter.

9. Wir werden ein regelmäßiges Vieleck (Polygon) zeichnen.

:   9.1. Drücke ![](/images/Draft_Polygon.svg) [Vieleck](/Draft_Polygon/de "Draft Polygon/de").
:   9.2. Gib die Werte des Zentrums `(0, 0, 0)` ein, und drücke Enter.
:   9.3. Setze die Anzahl der Seiten auf `6`, und drücke Enter.
:   9.4. Setze den Radius auf `50 mm`, und drücke Enter.

Auch hier kannst du die Daten-Eigenschaft**Make Face** und die Ansicht-Eigenschaft**Anzeigemodus** im [Eingenschafteneditor](/Property_editor/de "Property editor/de") ändern, wenn du möchtest.

Das Rechteck, der Kreis, das Vieleck und die meisten anderen Objekte, die mit dem Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") erstellt werden, haben viele gemeinsame Daten- und Ansicht-Eigenschaften, da sie von derselben Basisklasse [Part Part2DObject](/Part_Part2DObject/de "Part Part2DObject/de") abgeleitet sind.

![](/images/02_Dr01_Draft_Rectangle_circle_polygon.png)

Rechteck, Kreis und Polygon hinzugefügt.

## Anordnungen

Anordnungen werden verwendet, um ein Objekt mehrmals in einer orthogonalen Richtung (X, Y, Z), um eine Drehachse oder entlang eines Pfades zu vervielfältigen.

10. Wir werden eine polare Anordnung erstellen.

:   10.1. Wähle das `Wire`-Objekt (Polylinie), das zuvor mit dem Werkzeug ![](/images/Draft_Upgrade.svg) [Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de") erstellt wurde, oder den `Verbund` erstellt mit dem Werkzeug ![](/images/Part_Compound.svg) [Part Erzeuge Verbund](/Part_Compound/de "Part Compound/de").
:   10.2. Drücke ![](/images/Draft_PolarArray.svg) [Polare Anordnung](/Draft_PolarArray/de "Draft PolarArray/de").
:   10.3. Stelle den Polarwinkel auf `360°` ein.
:   10.4. Setze die Anzahl der Elemente auf `4`.
:   10.5. Gib die Werte für den Drehmittelpunkt `(0, 0, 0)` ein und drücke Enter.

Die Anordnung (Array-Objekt) stellt Kopien des Objekts um den Ursprung herum dar.

![](/images/03_Dr01_Draft_PolarArray.png)

Polare Anordnung des kleinen Profils um den Ursprung zentriert.

## Abmessungen

Lineare Maße funktionieren am besten, wenn die geeigneten Methoden zum [Draft-Einrasten](/Draft_Snap/de "Draft Snap/de") für die Auswahl der zu messenden Punkte und Kanten eingesetzt werden. Sie können jedoch auch durch Angabe absoluter Koordinaten erstellt werden.

11. Maße für die verschiedenen Objekte erstellen.

:   11.1. Drücke ![](/images/Draft_Dimension.svg) [Abmessung](/Draft_Dimension/de "Draft Dimension/de").
:   11.2. Nimm den ersten Punkt. In diesem Tutorial wird der erste Punkt immer der Ursprung sein. `(0, 0, 0)`.
:   11.3. In der Werkzeugleiste [Draft-Einrasten](/Draft_Snap/de "Draft Snap/de") stelle sicher das ![](/images/Draft_Snap_Lock.svg) [Einrasten sperren](/Draft_Snap_Lock/de "Draft Snap Lock/de") aktiv ist und außerdem nur ![](/images/Draft_Snap_Midpoint.svg) [Einrasten auf Mittelpunkt](/Draft_Snap_Midpoint/de "Draft Snap Midpoint/de"). Sowie du den Zeiger auf die Oberkante des Polygons bewegst, sollte das Symbol ![](/images/Draft_Snap_Midpoint.svg) [Einrasten auf Mittelpunkt](/Draft_Snap_Midpoint/de "Draft Snap Midpoint/de") erscheinen; klicke, um diesen Punkt auszuwählen.
:   11.4. Bewege den Cursor nach rechts, um die Position des Maßes anzugeben, und klicke dann, um die Endposition um `(100, 20, 0)` festzulegen. Das Maß zeigt automatisch den zwischen den beiden Punkten gemessenen Längenwert an.
:   11.5. Wähle das Maß (Dimension-Objekt) in der [Baumansicht](/Tree_view/de "Tree view/de") aus und ändere im [Eigenschafteneditor](/Property_editor/de "Property editor/de") die Ansicht-Eigenschaft**Fontsize** auf `6 mm`, setze die Ansicht-Eigenschaft**Ext Lines** auf `45 mm`, und die Ansicht-Eigenschaft**Show Unit** auf `false`.

12. Wiederhole den Vorgang für die beiden Bögen des geschlossenen Profils. Der erste Punkt des Maßes ist immer noch der Ursprung, und der zweite Punkt verwendet den ![](/images/Draft_Snap_Midpoint.svg) [Mittelpunkt](/Draft_Snap_Midpoint/de "Draft Snap Midpoint/de") des Bogens.

13. Wiederhole den Vorgang für den Kreis in der Mitte. Der erste Punkt des Maßes ist immer noch der Ursprung. Um den zweiten Punkt auszuwählen, stelle sicher, dass ![](/images/Draft_Snap_Lock.svg) [Einrasten sperren](/Draft_Snap_Lock/de "Draft Snap Lock/de") aktiv ist und außerdem nur ![](/images/Draft_Snap_Angle.svg) [Einrastwinkel](/Draft_Snap_Angle/de "Draft Snap Angle/de"). Sobald du den Zeiger an den oberen Rand des Kreises bewegst, sollte das Symbol ![](/images/Draft_Snap_Angle.svg) [Einrastwinkel](/Draft_Snap_Angle/de "Draft Snap Angle/de") erscheinen; klicke, um diesen Punkt auszuwählen. Bewege dann den Cursor nach rechts, und klicke, um das Maß zu fixieren.

Denke daran, die Ansicht-Eigenschaft**Font Size** und andere Eigenschaften anzupassen, damit das Maß korrekt angezeigt wird.

![](/images/04_Dr01_Draft_Dimension.png)

Maße, die den vertikalen Abstand vom Ursprung bis zur Oberkante des Kreises, der Bögen und des Polygons messen.

## Texte und Textformen

14. Textobjekte sind einfache planare Figuren, die in der [3D-Ansicht](/3D_view/de "3D view/de") erstellt werden, denen aber keine tatsächliche "[Form](/Shape/de "Shape/de")" zugrunde liegt. Das bedeutet, dass sie nicht in komplexen Operationen mit Formen wie Extrusionen oder boolesche Verknüpfungen verwendet werden können.

:   14.1. Die Schaltfläche ![](/images/Draft_Text.svg) [Text](/Draft_Text/de "Draft Text/de") drücken.
:   14.2. Den Referenzpunkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen. In der Werkzeugleiste [Draft-Einrasten](/Draft_Snap/de "Draft Snap/de") sollte sichergestellt werden, dass ![](/images/Draft_Snap_Lock.svg) [Einrasten sperren](/Draft_Snap_Lock/de "Draft Snap Lock/de") aktiv ist, und außerdem nur ![](/images/Draft_Snap_Midpoint.svg) [Einrasten auf Mittelpunkt](/Draft_Snap_Midpoint/de "Draft Snap Midpoint/de"). Den Mauszeiger auf die Oberkante des höchsten Bogens bewegen, so dass das Symbol ![](/images/Draft_Snap_Midpoint.svg) [Mittelpunkt](/Draft_Snap_Midpoint/de "Draft Snap Midpoint/de") erscheint; klicken um diesen Punkt auszuwählen.
:   14.3. Den gewünschten **Text** eingeben und einmal Enter drücken, um eine neue Zeile zu beginnen; bei Bedarf weitere Textzeilen hinzufügen.
:   14.4. Ist alles eingegeben, zum Beenden zweimal Enter drücken.
:   14.5. Das Textobjekt in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen, und im [Eigenschafteneditor](/Property_editor/de "Property editor/de") Ansicht-Eigenschaft**Schriftgröße** auf `6 mm` und Ansicht-Eigenschaft**Ausrichtung** auf `Center` ändern.

15. Textformen sind Formen aus primitiven Linienzügen, die Linien folgen, die durch eine bestimmte Schriftart vorgegeben werden. Das bedeutet, dass diesen Objekten eine echte "[Form](/Shape/de "Shape/de")" zugrunde liegt und sie daher in komplexen Operationen wie Extrusionen und booleschen Verknüpfungen verwendet werden können.

:   15.1. Die Schaltfläche ![](/images/Draft_ShapeString.svg) [Textform](/Draft_ShapeString/de "Draft ShapeString/de") drücken.
:   15.2. Den Mauszeiger an die gewünschte Stelle in der [3D-Ansicht](/3D_view/de "3D view/de") über dem regelmäßigen Vieleck bewegen und einmal klicken. Dadurch wird der Basispunkt für die Textform festgelegt. Die Koordinaten können auch manuell eingegeben werden, zum Beispiel `(-20, 65, 0)`.
:   15.3. Die gewünschte **Zeichenkette** eingeben und die gewünschte **Höhe** auswählen.
:   15.4. Ist keine Standardschriftartdatei vorhanden: Die Schaltfläche ... anklicken, um ein Dialogfeld zur Auswahl des Speicherorts der Schriftart im System zu öffnen.
:   15.5. Wenn eine gültige Schriftartdatei ausgewählt wurde, kann zum Fortfahren OK angeklickt oder Entergedrückt werden.

![](/images/05_Dr01_Draft_Text_ShapeString.png)

Text und Textform hinzugefügt.

Um Buchstaben zu extrudieren und in Festkörper zu gravieren, siehe die [Draft Textform-Anleitung](/Draft_ShapeString_tutorial/de "Draft ShapeString tutorial/de").

## Eine technische Zeichnung erstellen

So wie es jetzt ist, können die von uns erstellten Objekte gespeichert, in andere Formate wie [SVG](/SVG/de "SVG/de") oder [DXF](/DXF/de "DXF/de") exportiert oder gedruckt werden.

Jetzt kann eine technische Zeichnung erstellt werden, um diese Objekte zusammen mit weiteren Informationen wie einem Rahmen darzustellen.

Vor allen anderen Tätigkeiten sollte das Raster durch Drücken der Schaltfläche ![](/images/Draft_ToggleGrid.svg) [Raster umschalten](/Draft_ToggleGrid/de "Draft ToggleGrid/de") ausgeblendet werden.

16. Zum Arbeitsbereich ![](/images/Workbench_TechDraw.svg) [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") wechseln.

:   16.1. Eine Standardseite durch Drücken von ![](/images/TechDraw_PageDefault.svg) [TechDraw Neues Zeichnungsblatt aus der Standardvorlage erstellen](/TechDraw_PageDefault/de "TechDraw PageDefault/de") erstellen.
:   16.2. In der [Baumansicht](/Tree_view/de "Tree view/de") alle erstellten Objekte außer dem Zeichnungsblatt auswählen und dann die Schaltfläche ![](/images/TechDraw_ActiveView.svg) [TechDraw Aktive (3D)-Ansicht einfügen](/TechDraw_ActiveView/de "TechDraw ActiveView/de") drücken. Mit den Standardoptionen OK drücken; es kann einige Sekunden dauern, bis die Ansicht auf dem Blatt erstellt ist.
:   16.3. In der [Baumansicht](/Tree_view/de "Tree view/de") das Zeichnungsblatt auswählen; damit wird das Blatt automatisch im Hauptfenster anzeigen. Mit ausgewähltem Blatt im [Eigenschafteneditor](/Property_editor/de "Property editor/de") die Daten-Eigenschaft**Maßstab** auf `0.75` setzen.
:   16.4. Das Zeichnungsblatt in der [Baumansicht](/Tree_view/de "Tree view/de") erweitern und das Objekt Aktive Ansicht auswählen. Im [Eigenschafteneditor](/Property_editor/de "Property editor/de") die Daten-Eigenschaft**Scale Type** auf `Page` setzen.
:   16.5. Die schaltfläche ![](/images/Std_Refresh.svg) [Aktualisieren](/Std_Refresh/de "Std Refresh/de") oder F5 drücken, um das Modell neu zu berechnen.
:   16.6. Die Rahmen der Ansichten werden durch drücken der Schaltfläche ![](/images/TechDraw_ToggleFrame.svg) [TechDraw Ansichtsrahmen ein- oder ausschalten](/TechDraw_ToggleFrame/de "TechDraw ToggleFrame/de") ausgeblendet.

Erfahre mehr über den Arbeitsbereich [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") durch Lesen des [TechDraw Grundlagen Tutorium](/Basic_TechDraw_Tutorial/de "Basic TechDraw Tutorial/de").

![](/images/06_Dr01_Draft_TechDraw_page.png)

TechDraw Zeichnungsblatt mit einer Projektion der mit dem Arbeitsbereich Draft erstellten Formen.

TechDraw funktioniert am besten mit Objekten, die eine [Part TopoForm](/Part_TopoShape/de "Part TopoShape/de") besitzen. Da einige Objekte aus Draft, wie [Draft-Text](/Draft_Text/de "Draft Text/de") und [Draft-Maß](/Draft_Dimension/de "Draft Dimension/de"), nicht über solche "[Formen](/Shape/de "Shape/de")" verfügen, funktionieren einige Operationen von TechDraw nicht mit diesen Elementen.

Werkzeuge wie ![](/images/TechDraw_ActiveView.svg) [TechDraw AktiveAnsicht](/TechDraw_ActiveView/de "TechDraw ActiveView/de"), ![](/images/TechDraw_DraftView.svg) [TechDraw DraftAnsicht](/TechDraw_DraftView/de "TechDraw DraftView/de"), und ![](/images/TechDraw_ArchView.svg) [TechDraw ArchAnsicht](/TechDraw_ArchView/de "TechDraw ArchView/de") arbeiten, indem sie ein internes SVG-Bild erhalten, das von internen Draft-Funktionen erzeugt wird; daher hat TechDraw keine große Kontrolle darüber, wie diese Ansichten angezeigt werden. Die weitere Integration von Draft und TechDraw ist noch in Arbeit.

## Schlussbemerkungen

Der Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") ähnelt in vielerlei Hinsicht dem Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de"), da beide zur Erzeugung von 2D-Formen gedacht sind. Der Hauptunterschied besteht in der Art und Weise, wie jeder Arbeitsbereich Koordinatensysteme handhabt und wie die Objekte positioniert werden. In Draft werden die Objekte frei im globalen Koordinatensystem positioniert, wobei ihre Punkte normalerweise an einem Raster oder an anderen Objekten einrasten. Im Sketcher definiert ein "[Sketch-Objekt](/Sketch/de "Sketch/de")" ein lokales Koordinatensystem, das als Referenz für alle geometrischen Elemente innerhalb dieser Skizze dient. Darüber hinaus stützt sich die Skizze auf "Randbedingungen", um die endgültige Position ihrer Punkte festzulegen.

* Der Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") ist für 2D-Zeichnungen vorgesehen, die sich zum Zeichnen auf einem Gitter eignen. Der Arbeitsbereich [BIM](/BIM_Workbench/de "BIM Workbench/de") baut meist auf den im Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") definierten Werkzeugen auf.

* Der Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") ist für 2D-Zeichnungen gedacht, die präzise Beziehungen zwischen ihren Punkten erfordern. Er stützt sich nicht auf ein Raster, sondern auf Positionierungsregeln (Randbedingungen), um zu bestimmen, wo die Punkte und Kanten platziert werden sollen. Der Arbeitsbereich [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") wird meistens zusammen mit dem Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") für die Erstellung von Festkörpern [Körper](/Body/de "Body/de") verwendet.

* Es ist möglich, ein Draft-Objekt in eine [Skizze](/Sketch/de "Sketch/de") umzuwandeln und umgekehrt, indem man das Werkzeug ![](/images/Draft_Draft2Sketch.svg) [Draft ZeichnungZuSkizze](/Draft_Draft2Sketch "Draft Draft2Sketch") verwendet.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_tutorial/de&oldid=1464398>"