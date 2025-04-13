---
title: TechDraw Ansicht
---

|                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw Ansicht                                                                                                                                                                                                                                                                                                                                                           |
| Menüeintrag                                                                                                                                                                                                                                                                                                                                                                |
| TechDraw→ TechDraw Ansichten → Ansicht einfügen                                                                                                                                                                                                                                                                                                                            |
| Arbeitsbereich                                                                                                                                                                                                                                                                                                                                                             |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                                                                                                                                                                                                                                                                 |
| Standardtastenkürzel                                                                                                                                                                                                                                                                                                                                                       |
| _Keiner_                                                                                                                                                                                                                                                                                                                                                                   |
| Eingeführt in Version                                                                                                                                                                                                                                                                                                                                                      |
| -                                                                                                                                                                                                                                                                                                                                                                          |
| Siehe auch                                                                                                                                                                                                                                                                                                                                                                 |
| [TechDraw Ansichtengruppe](/TechDraw_ProjectionGroup/de "TechDraw ProjectionGroup/de"), [TechDraw Tabellenansicht](/TechDraw_SpreadsheetView/de "TechDraw SpreadsheetView/de"), [TechDraw ArchAnsicht](/TechDraw_ArchView/de "TechDraw ArchView/de"), [TechDraw Symbol](/TechDraw_Symbol/de "TechDraw Symbol/de"), [TechDraw Bild](/TechDraw_Image/de "TechDraw Image/de") |
|                                                                                                                                                                                                                                                                                                                                                                            |

## Beschreibung

Das Werkzeug **TechDraw Ansicht** fügt eine Darstellung eines oder mehrerer Objekte einer Zeichnungsseite hinzu. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Es kann [Elemente einer Ansichtengruppe (einzelne Ansichten)](#Properties_Projection_Group_Item), eine [Ansichtengruppe](/TechDraw_ProjectionGroup/de "TechDraw ProjectionGroup/de"), eine [Tabellenansicht](/TechDraw_SpreadsheetView/de "TechDraw SpreadsheetView/de"), eine [Arch-Ansicht](/TechDraw_ArchView/de "TechDraw ArchView/de"), ein [Symbol](/TechDraw_Symbol/de "TechDraw Symbol/de") oder eine [Bildansicht](/TechDraw_Image/de "TechDraw Image/de") erstellen.

In 0.21 und davor kann das Werkzeug nur eine [Bauteilansicht](#Properties_Part_View/de) erstellen, die einem Element der Ansichtengruppe sehr ähnlich ist.

![](/src/assets/images/TechDraw_View_example.png)

Ansicht eines Würfel-Volmenkörpers mit verdeckten Kanten

## Anwendung der Elemente einer Ansichtengruppe und der Ansichtengruppe

1. Wahlweise die [3D-Ansicht](/3D_view/de "3D view/de") ausrichten. Die Richtung der Kamera in der 3D-Ansicht kann zum Festlegen der Projektionsrichtung der primären Ansicht eingesetzt werden.
2. Ein oder mehrere Objekte mit einer Daten-Eigenschaft**Shape** in der 3D-Ansicht oder der [Baumansicht](/Tree_view/de "Tree view/de") auswählen. Es können auch [Std Parts](/Std_Part/de "Std Part/de") oder [Std Gruppen](/Std_Group/de "Std Group/de") ausgewählt werden, die solche Objekte enthalten. Wird in der 3D-Ansicht ausgewählt, kann die erste ausgewählte Fläche zum Festlegen der Projektionsrichtung der primären Ansicht eingesetzt werden. Es sollte kein Objekt in der 3D-Ansicht ausgewählt werden, wenn die aktuelle Kameraausrichtung verwendet werden soll.
3. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind: Wahlweise das gewünschte Zeichnungsblatt durch Auswählen in der [Baumansicht](/Tree_view/de "Tree view/de") zur Auswahl hinzufügen.
4. Es gibt mehrere Möglichkeiten das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_View.svg) Ansicht einfügen drücken.
   - Den Menüeintrag **TechDraw → TechDraw Ansichten → ![](/src/assets/images/TechDraw_View.svg) Ansicht einfügen** auswählen.
5. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind und kein Blatt im [Hauptansichtsbereich](/Main_view_area/de "Main view area/de") angezeigt wird und außerdem noch kein Blatt aktiviert wurde, wird das Dialogfeld **Blattauswahl** geöffnet:
   1. Das gewünschte Zeichnungsblatt auswählen.
   2. Die Schaltfläche OK drücken.
6. Das Aufgaben-Fenster **Ansichtengruppe** wird geöffnet. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
7. Wahlweise die Parameter anpassen:
   - **Skalieren**: `Seite`, `Automatisch` oder `Benutzerdefiniert` auswählen. Wurde die letzte Möglichkeit ausgewählt: Zähler und Nenner des Maßstabs eingeben.
   - **Richtung**: Mit den zur Verfügung stehenden Schaltflächen die Projektionsrichtung einstellen und die primäre Ansicht drehen:
     - Die Schaltfläche [#.## #.## #.##] in der Mitte zeigt die aktuelle Projektionsrichtung an. Die anfänglichen Werte hängen von der [Voreinstellung](/TechDraw_Preferences/de#Allgemeines "TechDraw Preferences/de") **3D-Kamerarichtung verwenden** ab. Die Schaltfläche drücken, um Ausrichtung und Drehung der Ansicht manuell einzustellen.
     - Die Schaltfläche ![](/src/assets/images/Arrow-up.svg), ![](/src/assets/images/Arrow-down.svg), ![](/src/assets/images/Arrow-left.svg) oder ![](/src/assets/images/Arrow-right.svg) drücken, um die Projektionsrichtung in 90°-Schritten um die horizontale bzw. vertikale Achse der Ansicht zu drehen.
     - Die Schaltfläche ![](/src/assets/images/Arrow-cw.svg) oder ![](/src/assets/images/Arrow-ccw.svg) drücken, um die Ansicht in 90°-Schritten um die Projektionsrichtung zu drehen.
     - Die Schaltfläche ![](/src/assets/images/TechDraw_ProjFront.svg) drücken, um die Projektionsrichtung der primären Ansicht auf die normale [Vorderansicht](/Std_ViewFront/de "Std ViewFront/de") einzustellen.
     - Die Schaltfläche ![](/src/assets/images/TechDraw_CameraOrientation.svg) drücken, um die Projektionsrichtung auf die zuerst ausgewählte Fläche auszurichten, falls möglich, oder andernfalls entsprechend der aktuellen Kameraausrichtung.
   - **Sekundäre Ansichten**: Wahlweise sekundäre Ansichten zusätzlich zu der Primären Ansicht erstellen. Es muss wenigstens eine sekundäre Ansicht aktiviert werden, damit alle Bedienelemente für diesen Bereich angezeigt werden.
8. Wurden einige Parameter geändert, kann es erforderlich sein, die Schaltfläche Anwenden zu drücken, um die Ansicht(en) zu aktualisieren.
9. Die Schaltfläche OK drücken.
10. Ein [Element der Ansichtengruppe](#Properties_Projection_Group_Item/de) wird eingefügt oder, wenn es eine oder mehrere sekundäre Ansichten gibt, eine [Ansichtengruppe](/TechDraw_ProjectionGroup/de "TechDraw ProjectionGroup/de").

![](/src/assets/images/TechDraw_View_Taskpanel.png)

[Ansicht-Fenster](/Task_panel/de "Task panel/de") Bauteilansicht

## Anwendung der anderen Ansichtsarten

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

1. Wahlweise eine [Kalkulationstabelle](/Spreadsheet_CreateSheet/de "Spreadsheet CreateSheet/de") in der [Baumansicht](/Tree_view/de "Tree view/de") oder eine [Arch-Schnittebene](/Arch_SectionPlane/de "Arch SectionPlane/de") in der [3D-Ansicht](/3D_view/de "3D view/de") oder der Baumansicht auswählen.
2. Die Schritte 3, 4 und 5 durchführen, wie [oben](#Anwendung_der_Elemente_einer_Ansichtengruppe_und_der_Ansichtengruppe) beschrieben.
3. Wurde noch keine Tabelle oder Arch-Schnittebene ausgewählt:
   1. Ein warnendes Dialogfenster wird geöffnet.
   2. Die Checkbox **Do not show this message again** aktivieren, um dieses Dialogfenster in Zukunft zu vermeiden.
   3. Die Schaltfläche OK drücken.
   4. Ein Datei-Browser wird geöffnet.
   5. Eine SVG- oder Bilddatei auswählen.
4. Eine [Tabellenansicht](/TechDraw_SpreadsheetView/de "TechDraw SpreadsheetView/de"), eine [Arch-Ansicht](/TechDraw_ArchView/de "TechDraw ArchView/de"), ein [Symbol](/TechDraw_Symbol/de "TechDraw Symbol/de") oder eine [Bildansicht](/TechDraw_Image/de "TechDraw Image/de") wird eingefügt.
5. Im Falle einer Tabellenansicht: Den Bereich der Zellen einstellen; hierfür ihre Daten-Eigenschaft**Cell Start** und Daten-Eigenschaft**Cell End** anpassen.
6. Im Falle eines Symbols oder einer Bildansicht: Wahlweise die Daten-Eigenschaft**Scale** anpassen, um die Größe einzustellen.

## Eigenschaften der Bauteilansicht

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Eine Bauteilansicht, oder formal ein `TechDraw::DrawViewPart`-Objekt, besitzt die folgenden Eigenschaften:

### Daten

Basis

- Daten-Eigenschaft**X** (`Distance`): Die horizontale Position der Ansicht auf der Seite. (1)
- Daten-Eigenschaft**Y** (`Distance`): Die vertikale Position der Ansicht auf der Seite. (1)
- Daten-Eigenschaft**Lock Position** (`Bool`): Ist der Wert auf `true` gesetzt, wird verhindert, dass Ansichten mit der Benutzerschnittstelle (GUI) bewegt werden können. Die Ansicht kann weiterhin durch Ändern der X- und Y-Eigenschaften bewegt werden. (1)
- Daten-Eigenschaft**Rotation** (`Angle`): Drehung der Ansicht auf dem Zeichnungsblatt gegen den Uhrzeigersinn in Grad. (1)
- Daten-Eigenschaft**Scale Type** (`Enumeration`): Die Art der Skalierung. Optionen: (1)
  - `Seite`: Verwendet die Maßstabseinestellung des [Zeichnungsblattes](/TechDraw_PageDefault/de "TechDraw PageDefault/de").
  - `Automatisch`: Passt die Ansicht an die Blattgröße an.
  - `Benutzerdefiniert`: Verwendet den in der Daten-Eigenschaft**Scale** definierten Maßstab.
- Daten-Eigenschaft**Scale** (`FloatConstant`): Die Ansicht wird auf dem Zeichnungsblatt im Verhältnis Scale:1 zur Quelle gerendert. (1)
- Daten-Eigenschaft**Caption** (`String`): Optionale kurze Textunterschrift. (1)

Cosmetics

- Daten-Eigenschaft (versteckt)**Cosmetic Vertexes** (`TechDraw::PropertyCosmeticVertexList`)
- Daten-Eigenschaft (versteckt)**Cosmetic Edges** (`TechDraw::PropertyCosmeticEdgeList`)
- Daten-Eigenschaft (versteckt)**Center Lines** (`TechDraw::PropertyCenterLineList`)
- Daten-Eigenschaft (versteckt)**Geom Formats** (`TechDraw::PropertyGeomFormatList`)

HLR Parameters

- Daten-Eigenschaft**Coarse View** (`Bool`) (Grobansicht): Wenn `true`, verwendet TechDraw eine Polygonnäherung zur Berechnung der Zeichnungsgeometrie. Wenn `false`, verwendet TechDraw einen Präzisionsalgorithmus. Eine Grobansicht kann bei komplexen Modellen sehr viel schneller sein. Die Qualität der Zeichnung wird verringert, da jede Kurve als eine Reihe kurzer Liniensegmente angenähert wird. Knoten werden in einer Grobansicht nicht angezeigt, da jedes kurze Segment zu zwei neuen Knoten führen würde und damit die Anzeige unübersichtlich werden ließe. Lineare Maße können einer Grobansicht hinzugefügt werden, sind aber wahrscheinlich nicht sinnvoll.
- Daten-Eigenschaft**Smooth Visible** (`Bool`): Sichtbare Flächenübergangslinien ein/aus.
- Daten-Eigenschaft**Seam Visible** (`Bool`): Sichtbare Seam-Lines on/off.
- Daten-Eigenschaft**Iso Visible** (`Bool`): Sichtbare isoparametrische (U-, V-) Linien ein/aus.
- Daten-Eigenschaft**Hard Hidden** (`Bool`): Verdeckte Kanten ein/aus.
- Daten-Eigenschaft**Smooth Hidden** (`Bool`): Verdeckte Flächenübergangslinien ein/aus.
- Daten-Eigenschaft**Seam Hidden** (`Bool`): Verdeckte Seam-Lines ein/aus.
- Daten-Eigenschaft**Iso Hidden** (`Bool`): Verdeckte isoparametrische (U-, V-) Linien ein/aus.
- Daten-Eigenschaft**Iso Count** (`Integer`): Anzahl der isoparametrischen (U-, V-) Linien, die auf jede Fläche gezeichnet werden.
- Daten**Scrub Count** (`Integer`): Die Anzahl der Versuche, die FreeCAD zur Bereinigung von HLR-Ergebnissen durchführen soll. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

Projection

- Daten-Eigenschaft**Source** (`LinkList`): Verweise auf die darstellbaren Objekte, die abgebildet werden sollen.
- Daten-Eigenschaft**XSource** (`XLinkList`): Verweise auf die darstellbaren Objekten in einer externen Datei.
- Daten-Eigenschaft**Direction** (`Vector`): Dieser Vektor steuert die Richtung, aus der das Objekt betrachtet wird. +X ist rechts, -X ist links, +Y ist hinten, -Y ist vorne (Blick auf den Bildschirm), +Z ist oben und -Z ist unten. Eine Vorderansicht ist also (0,-1,0) und eine isometrische Ansicht ist (1,-1,1).
- Daten-Eigenschaft**XDirection** (`Vector`): Dieser Vektor steuert die Rotation der Ansicht um die Blickrichtung (Direction).
- Daten-Eigenschaft**Perspective** (`Bool`): `true` für perspektivische Projektion `false` für orthogonale Projektion.
- Daten-Eigenschaft**Focus** (`Distance`): Abstand von der Kamera zur Projektionsebene für perspektivische Projektionen. Muss auf das Objekt eingestellt werden. Zu weit und die Perspektive geht verloren, zu nah und das Objekt wird verzerrt.

### Ansicht

Basis

- Ansicht-Eigenschaft**Keep Label** (`Bool`): Zeigt die Bezeichnung (Label) der Ansicht immer an, wenn `true`. (1)
- Ansicht-Eigenschaft**Stack Order** (`Integer`): Liegt davor oder dahinter im Bezug auf andere Ansichten. (1) [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

Broken View

- Ansicht-Eigenschaft**Break Line Style** (`Enumeration`): Legt die Linienart der Bruchlinien fest, falls anwendbar. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
- Ansicht-Eigenschaft**Break Line Type** (`Enumeration`): Bestimmt die Darstellungsart der Bruchlinien in unterbrochenen Ansichten, falls anwendbar: `None`, `ZigZag` or `Simple`. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Decoration

- Ansicht-Eigenschaft**Arc Center Marks** (`Bool`): Markierungen der Kreisbogenmitten ein/aus.
- Ansicht-Eigenschaft**Center Scale** (`Float`): Größeneinstellung für Markierungen der Kreisbogenmitten, wenn aktiviert.
- Ansicht-Eigenschaft**Horiz Center Line** (`Bool`): Stellt eine horizontale Mittellinie durch die Ansicht dar.
- Ansicht-Eigenschaft**Show All Edges** (`Bool`): Stellt verdeckte Kanten zeitweise dar.
- Ansicht-Eigenschaft**Vert Center Line** (`Bool`): Stellt eine Vertikale Mittellinie durch die Ansicht dar.

Faces

- Ansicht-Eigenschaft**Face Color** (`Color`): Legt die Farbe der Flächen fest. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
- Ansicht-Eigenschaft**Face Transparency** (`Percent`): Legt die Transparenz der Flächen fest. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Highlight

- Ansicht-Eigenschaft**Highlight Adjust** (`Float`): Passt die Drehung des Detail-Auswahlrahmens an, wenn vorhanden.
- Ansicht-Eigenschaft**Highlight Line Color** (`Color`): Bestimmt die Linienfarbe des Auswahlrahmens, wenn vorhanden.
- Ansicht-Eigenschaft**Highlight Line Style** (`Enumeration`): Bestimmt die Linienart des Auswahlrahmens, wenn vorhanden.

Lines

- Ansicht-Eigenschaft**Extra Width** (`Length`): Noch nicht implementiert.
- Ansicht-Eigenschaft**Hidden Width** (`Length`): Linienstärke von verdeckten Kanten, wenn aktiviert.
- Ansicht-Eigenschaft**Iso Width** (`Length`): Die Linienstärke von isoparametrischen (U-, V-) Oberflächenl und Maßlinien.
- Ansicht-Eigenschaft**Line Width** (`Length`): Die Linienstärke von sichtbaren Kanten. Siehe [Liniengruppen](/TechDraw_LineGroup/de "TechDraw LineGroup/de").

Section Line

- Ansicht-Eigenschaft**Include Cut Line** (`Bool`): Blendet nur die eigentliche Schnittlinie ein- bzw. aus, falls anwendbar. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
- Ansicht-Eigenschaft**Section Line Color** (`Color`): Legt die Farbe der Schnittlinie fest, falls anwendbar.
- Ansicht-Eigenschaft**Section Line Marks** (`Bool`): Blendet die Markierungen an Richtungswechseln der Schnittlinie einer komplexen Schnittansicht ein- bzw. aus, falls anwendbar. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")
- Ansicht-Eigenschaft**Section Line Style** (`Enumeration`): Legt die Linienart der Schnittlinie fest, falls anwendbar.
- Ansicht-Eigenschaft**Show Section Line** (`Bool`): Blendet die Schnittlinie (alle Bestandteile) ein- bzw. aus, falls anwendbar.

(1) Diese Eigenschaften sind allen Ansichtstypen gemeinsam.

## Eigenschaften der Elemente einer Ansichtengruppe

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Element der Ansichtengruppe, formal ein `TechDraw::DrawProjGroupItem`-Objekt, wird von einer [Bauteilansicht](#Properties_Part_View/de), formal ein `TechDraw::DrawViewPart`-Objekt abgeleitet und erbt alle seine Eigenschaften. Es besitzt außerdem die folgenden Eigenschaften:

### Daten

Basis

- Daten-Eigenschaft**Type** (`Enumeration`): Die Art der Ansicht (`Vorderansicht`, `Ansicht von links` usw.).
- Daten-Eigenschaft**Rotation Vector** (`Vector`): Veraltet, stattdessen Daten-Eigenschaft**XDirection** verwenden.

## Eigenschaften der Ansichtengruppe

Siehe [TechDraw Ansichtengruppe](/TechDraw_ProjectionGroup/de#Eigenschaften "TechDraw ProjectionGroup/de").

## Eigenschaften der Tabellenansicht

Siehe [TechDraw Tabellenansicht](/TechDraw_SpreadsheetView/de#Eigenschaften "TechDraw SpreadsheetView/de").

## Eigenschaften der Arch-Ansicht

Siehe [TechDraw Arch-Ansicht](/TechDraw_ArchView/de#Eigenschaften "TechDraw ArchView/de")

## Eigenschaften des Symbols

Siehe [TechDraw Symbol](/TechDraw_Symbol/de#Eigenschaften "TechDraw Symbol/de").

## Eigenschaften der Bildansicht

Siehe [TechDraw Bild](/TechDraw_Image/de#Eigenschaften "TechDraw Image/de").

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Eine Bauteilansicht kann mit [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen erstellt werden:

```
import FreeCAD as App

doc = App.ActiveDocument
box = doc.addObject("Part::Box", "Box")

page = doc.addObject("TechDraw::DrawPage", "Page")
template = doc.addObject("TechDraw::DrawSVGTemplate", "Template")
template.Template = App.getResourceDir() + "Mod/TechDraw/Templates/A4_LandscapeTD.svg"
page.Template = template

# Toggle the visibility of the page to ensure its width and height are updated (hack):
page.Visibility = False
page.Visibility = True

view = doc.addObject("TechDraw::DrawViewPart", "View")
page.addView(view)
view.Source = [box]
view.Direction = (0, 0, 1)

view.X = page.PageWidth / 2
view.Y = page.PageHeight / 2

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_View/de&oldid=1500225>"
