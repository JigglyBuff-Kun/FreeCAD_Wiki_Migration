---
title: TechDraw Allgemeine Beispiele
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

## Einleitung

Der Arbeitsbereich ![](/images/Workbench_TechDraw.svg) [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") enthält viele Werkzeuge, aber was sind die erforderlichen Elemente, um ein Blatt Papier in eine richtige Zeichnung zu verwandeln? Diese Seite beabsichtigt, einige Erkärungen und einige Beispiele zu geben, was mit TechDraw schon alles möglich ist.

## Zeichnungen

Eine Zeichnung enthält eine oder mehrere Ansichten, die ein Bauteil geometrisch darstellen... Aber, das ist ja schon bekannt,oder?

Sehen wir uns die grundlegenden Elemente an.

### Manuell erstellte Zeichnungen

#### Ein Blatt Papier

Papierformate sind genormt und damit sie ohne Skalieren gedruckt werden können, sollte das Format unseres Zeichnungsblattes dem gewünschten Druckformat entsprechen.

#### Rahmen

Als noch von Hand gezeichnet wurde, mussten die Zeichnungsblätter mit Nadeln oder Klebefilm auf der Zeichenmaschine bzw. dem Zeichentisch befestigt werden. Die fertige Zeichnung wurde gelocht, damit sie nach Norm gefaltet in eine Mappe oder einem Ordner abgeheftet werden kann. Der dafür genutzte äußere Bereich wird mit einem rechteckigen Rahmen abgegrenzt. Ein weiterer rechteckiger Rahmen innerhalb des ersten legt die Zeichenfläche fest. Zwischen beiden Rahmen befinden sich meistens noch fortlaufende Indizes und Trennlinien, die verwendet werden, um die Position bestimmter Zeichnungselemente anzugeben.

#### Schriftfeld

Das Schriftfeld enthält schriftliche Informationen über das Bauteil und die Zeichnung wie z.B. Sachnummer, Benennung, Ersteller, Eigentümer usw.

#### Stückliste

Wahlweise können Zusammenbauzeichnungen auch Stücklisten enthalten. Die Stückliste kann auch als separates Zeichnungsblatt oder als Kalkulationstabelle erstellt werden.

#### Änderungstabelle

Änderungen am Bauteil oder an der Zeichnung werden in einer Änderungstabelle auf der Zeichnung protokolliert oder in einem separaten Dokument, das über die entsprechenden Indizes verknüpft ist.

#### Ansichten

Ansichten enthalten die grafische Beschreibung eines Bauteils aus einer bestimmten Richtung. Die Meisten Bauteile benötigen mindestens zwei Ansichten, um vollständig beschrieben zu sein.

#### Beschriftung

Zusätzliche Texte die nicht zu den oben aufgeführten Elementen gehören.

### Mit TechDraw erstellte Zeichnungen

TechDraw verwendet ein Page-Objekt als Behälter für alle zur Zeichnung gehörenden Elemente; dieses kann nicht alleine existieren, sondern muss eine Vorlage (Template) enthalten. Daher gibt es keinen Befehl "Neues Zeichnungsblatt", und wann immer eine Vorlage eingefügt wird, wird automatisch auch ein Page-Objekt erstellt.

#### Vorlagen

Eine [Vorlage](/TechDraw_Templates/de "TechDraw Templates/de") (Template)-Objekt ist eine [SVG](/SVG/de "SVG/de")-Abbildung, deren Code sämtliche Informationen enthält, um ein virtuelles Blatt Papier mit passenden Rahmen und Schriftfeld zu erstellen sowie wahlweise mit einer Stückliste.

SVG-Abbildungen sind nicht parametrisch. Das heißt, dass für jedes Format eine eigene Vorlage erstellt werden muss; solch ein Satz Vorlagen wird für jede Variation von Rahmen- und Schriftfeldobjekten benötigt. Das ist eine ziemlich große Menge Code, zu schreiben und zu verwalten, aber dafür können Vorlagen innerhalb von FreeCAD nicht aus Versehen ändert werden.

Es gibt mehrere Möglichkeiten, eine Vorlage zu erstellen:

1. Zeichnen mit with [Inkscape](https://de.wikipedia.org/wiki/Inkscape), siehe Anleitung [TechDraw-Vorlagen](/TechDraw_TemplateHowTo/de "TechDraw TemplateHowTo/de").
2. Manuelles Tippen, siehe [Template explained](/Sandbox:TechDraw_TemplateExplained "Sandbox:TechDraw TemplateExplained") (engl.).
3. Ein Makro verwenden, siehe [TechDraw Vorlagengenerator](/TechDraw_TemplateGenerator/de "TechDraw TemplateGenerator/de") und [Makro TemplateHelper](/Macro_TemplateHelper/de "Macro TemplateHelper/de").

![](/images/TechDraw_ExampleDrawing-01.png)

Ergebnis von Template explained

![](/images/Macro_TemplateHelper_A3%2BBOM.png)

Ergebnis des Makros TemplateHelper, ISO A3 + Stückliste

#### Die Zeichnung bis hier

Bis hierher kann man wohl sicher sagen, dass TechDraw in Verbindung mit eingebetteten SVG-Vorlagen ein richtiges Zeichnungsblatt mit einem Rahmen und einem Schriftfeld erstellen kann. Einige Einträge können angepasst werden, dank editierbarer Texte und einige Inhalte können automatisch eingefügt werden, wenn Makros verwendet werden.

[Anfang](#top)

## Ansichten

Views contain the geometrical 2D description of an object. The content of a TechDraw view can be derived from 3D geometry or obtained from another workbench like ![](/images/TechDraw_ArchView.svg) [Arch Views](/TechDraw_ArchView "TechDraw ArchView") and ![](/images/TechDraw_DraftView.svg) [Draft views](/TechDraw_DraftView "TechDraw DraftView").

Since FreeCAD is a 3D modelling application TechDraw's key function is deriving 2D views from 3D geometry. Let's have a look at an easy example, the part from the [Basic Part Design Tutorial](/Basic_Part_Design_Tutorial "Basic Part Design Tutorial") that is also used with the [Basic TechDraw Tutorial](/Basic_TechDraw_Tutorial "Basic TechDraw Tutorial"):

![](/images/Tut17_final_refined.png)

Part from the Basic Part Design Tutorial

### Aktive Ansicht

An ![](/images/TechDraw_ActiveView.svg) [Active View](/TechDraw_ActiveView "TechDraw ActiveView") is more or less a screen shot of the [3D view](/3D_View "3D View") in its own kind of TechDraw view.

![](/images/TechDraw_ExampleDrawing-02.png)

The item displayed in an Active View with No background option enabled

### Ansicht

A ![](/images/TechDraw_View.svg) [View](/TechDraw_View "TechDraw View") is TechDraw's basic view object to derive proper drawings. In contrast to an Active View it is not restricted to visible objects on the screen, but also displays selected objects outside the screen. The preferred scale depends on the available space and the level of detail that has to be displayed.

![](/images/TechDraw_ExampleDrawing-03.png)

The item displayed in an arbitrary View like the Active View above

### Ansichtengruppe

A ![](/images/TechDraw_ProjectionGroup.svg) [Projection Group](/TechDraw_ProjectionGroup "TechDraw ProjectionGroup") is a set of views. Each view direction is perpendicular to its neighbor and all depend on the 3D window's direction by default. TechDraw provides six views matching with the [Navigation Cube](/Navigation_Cube "Navigation Cube") sides, and four isometric views.

![](/images/TechDraw_ExampleDrawing-04.png)

The item displayed in a Projection Group consisting of three views (in first angle projection mode)

### Schnittansicht

TechDraw provides tools to create a ![](/images/TechDraw_SectionView.svg) [Simple Section View](/TechDraw_SectionView "TechDraw SectionView") or a ![](/images/TechDraw_ComplexSection.svg) [Complex Section View](/TechDraw_ComplexSection "TechDraw ComplexSection"). Both depend on a base view and on tools to define a section line and to derive the view direction. Have a look at [TechDraw Section Examples](/TechDraw_Section_Examples "TechDraw Section Examples") for an overview.

![](/images/TechDraw_ExampleDrawing-05.png)

The cut item displayed in a Section A-A based on the Front view

### Hilfsansicht

If we need a view of a tilted plane to see its true lengths we would define the view direction in a base view and place the Auxiliary view accordingly, but TechDraw provides no tool for Auxiliary views yet.

Good news: It is quite easy to emulate using the ![](/images/TechDraw_SectionView.svg) [Simple Section View](/TechDraw_SectionView "TechDraw SectionView") tool:

1. Select a base view.
2. Create a ![](/images/TechDraw_SectionView.svg) [Simple Section View](/TechDraw_SectionView "TechDraw SectionView") with default settings.
3. Use ![](/images/TechDraw_AngleDimension.svg) [Insert Angle Dimension](/TechDraw_AngleDimension "TechDraw AngleDimension") to measure the angle of the plane.
4. Edit the section view angle in the Set View Direction area of its task panel.
5. Edit the section view coordinates in the Section Plane Location area of its task panel. Use **small steps** to move the section line outside the object or FreeCAD may crash.
6. Hide unwanted annotation elements such as section line, section arrows, and section name.
7. Add needed items like view arrow, and view name.

![](/images/TechDraw_ExampleDrawing-06.png)

A default section view based on the Left view displaying the section line angle

![](/images/TechDraw_ExampleDrawing-07.png)

Section view with section line angle set to `218,93°` (38,93° plus 180° to flip direction)

![](/images/TechDraw_ExampleDrawing-08.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleDrawing-09.png)

Section view with relocated section line → Finished Auxiliary view

### Detailansicht

A ![](/images/TechDraw_DetailView.svg) [Detail View](/TechDraw_DetailView "TechDraw DetailView") is a copy of an area of a base view usually to magnify hardly visible geometry.

![](/images/TechDraw_ExampleDrawing-10.png)

Detail (view) Y based on Section A-A

#### Imperfections

- Detail views according to ISO standard do not have a frame/border (the upper part of the enclosing circle). Editor's note: what is meant here?? Frames are not printed...
- The break line that cuts the detail off from the rest should be a thin freehand line or the cad equivalent, a thin zigzag line. FreeCAD/TechDraw do not provide freehand/zigzag lines (yet).
- Hatched areas in the base view should be hatched in the detail view, too.

### Arch-Ansicht

An ![](/images/TechDraw_ArchView.svg) [Arch View](/TechDraw_ArchView "TechDraw ArchView") displays a view of an ![](/images/Arch_SectionPlane.svg) [Arch SectionPlane](/Arch_SectionPlane "Arch SectionPlane"). Its content is rendered by the ![](/images/Workbench_BIM.svg) [BIM workbench](/BIM_Workbench "BIM Workbench").

### Draft-Ansicht

A ![](/images/TechDraw_DraftView.svg) [Draft View](/TechDraw_DraftView "TechDraw DraftView") displays a view of a selected [Part](/Part_Workbench "Part Workbench")-based object or Group object. It is intended for 2D objects. Its content is rendered by the ![](/images/Workbench_Draft.svg) [Draft workbench](/Draft_Workbench "Draft Workbench").

![](/images/05_Dr01_Draft_Text_ShapeString.png) ![](/images/Button_right.svg)
![](/images/06_Dr01_Draft_TechDraw_page.png)

Some Draft elements in the 3D view → The same elements displayed in a Draft View on a drawing

### Tabellenansicht

A ![](/images/TechDraw_SpreadsheetView.svg) [Spreadsheet View](/TechDraw_SpreadsheetView "TechDraw SpreadsheetView") displays a view of a [Spreadsheet Workbench](/Spreadsheet_Workbench "Spreadsheet Workbench") sheet.

![](/images/TechDraw_Spreadsheetview.png)

Spreadsheet element displayed in a Spreadsheet View

### Die Ansichten bis hier

TechDraw needs some additions like break lines, and a proper auxiliary view tool and also some improvement of the Detail View tool. But even in this state we can describe our objects visually quite well:

![](/images/TechDraw_ExampleDrawing-11.png)

This is how a drawing with a set of views of the example item could look

[Anfang](#top)

## Bemaßung

Now that our item is described geometrically, dimensions will be added to further define the shape, and tolerances to define the allowed deviation.
TechDraw supplies several tools to apply dimensions to the 2D representation of our item:

- ![](/images/TechDraw_LengthDimension.svg) [Length Dimension](/TechDraw_LengthDimension "TechDraw LengthDimension")
- ![](/images/TechDraw_HorizontalDimension.svg) [Horizontal Dimension](/TechDraw_HorizontalDimension "TechDraw HorizontalDimension")
- ![](/images/TechDraw_VerticalDimension.svg) [Vertical Dimension](/TechDraw_VerticalDimension "TechDraw VerticalDimension")
- ![](/images/TechDraw_RadiusDimension.svg) [Radius Dimension](/TechDraw_RadiusDimension "TechDraw RadiusDimension")
- ![](/images/TechDraw_DiameterDimension.svg) [Diameter Dimension](/TechDraw_DiameterDimension "TechDraw DiameterDimension")
- ![](/images/TechDraw_AngleDimension.svg) [Angle Dimension](/TechDraw_AngleDimension "TechDraw AngleDimension")
- ![](/images/TechDraw_3PtAngleDimension.svg) [3-Point Angle Dimension](/TechDraw_3PtAngleDimension "TechDraw 3PtAngleDimension")

They have in common that they measure the projected shape of the item. If you have learned drafting the manual way, you know how to use auxiliary views to turn the item into a position where projected lengths equal true lengths. For visualization other than this old school way, dimensions can be linked to 3D geometry using ![](/images/TechDraw_DimensionRepair.svg) [TechDraw DimensionRepair](/TechDraw_DimensionRepair "TechDraw DimensionRepair") to display "true dimensions".

Two other tools measure the overall length horizontally or vertically respectively:

- ![](/images/TechDraw_HorizontalExtentDimension.svg) [Insert Horizontal Extent Dimension](/TechDraw_HorizontalExtentDimension "TechDraw HorizontalExtentDimension")
- ![](/images/TechDraw_VerticalExtentDimension.svg) [Insert Vertical Extent Dimension](/TechDraw_VerticalExtentDimension "TechDraw VerticalExtentDimension")

These cannot be linked with 3D geometry (yet).

See [Dimension dialog](/TechDraw_LengthDimension#Dimension_dialog "TechDraw LengthDimension") (and the following properties section) for all settings that are not mentioned in this overview.

### Einfache Maße

The dimension text depends mainly on these properties:

- Daten**Format Spec**
- Daten**Format Spec Over Tolerance**
- Daten**Format Spec Under Tolerance**

: By default their defaults are `%.2f`

To "cheat" we can use these two properties:

- Daten**Arbitrary**

: : Set to `false` to use the content of the **Format Spec** to format the actual dimensional value.
: Set to `true` to use the content of the **Format Spec** to be displayed as text instead if the dimension value.

- Daten**Arbitrary Tolerances**: Like Daten**Arbitrary**, but for the tolerance.

If we only need the dimension value there's nothing to do but to change the number of decimals if desired.

: For example: `%.2f` → `%.3f` to display 3 decimals, or `%.2f` → `%.0f` to display whole numbers.

#### Längenmaße

There are three tools to add length dimensions: ![](/images/TechDraw_LengthDimension.svg) [Length Dimension](/TechDraw_LengthDimension "TechDraw LengthDimension"), ![](/images/TechDraw_HorizontalDimension.svg) [Horizontal Dimension](/TechDraw_HorizontalDimension "TechDraw HorizontalDimension"), and ![](/images/TechDraw_VerticalDimension.svg) [Vertical Dimension](/TechDraw_VerticalDimension "TechDraw VerticalDimension").

![](/images/TechDraw_ExampleDrawing-17.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleDrawing-18.png)

Left: Two views of an object with length dimensions applied → Right: The same Front view rotated by 20°

This shows that it is important to rotate a front view in the Projection Group dialog or otherwise the connected views will not follow. On the other hand that would restrict us to 90° turns.

If a dimension has to run parallel to an edge it needs another selectable line perpendicular to the edge and the ![](/images/TechDraw_LengthDimension.svg) [Length Dimension](/TechDraw_LengthDimension "TechDraw LengthDimension") tool, that can find the shortest (= perpendicular) distance between a point and a line. An edge will not be automatically extended by an imaginary line and so we need to create an auxiliary (cosmetic) line manually. (A cosmetic point could be used as well, but that requires even more work).

- The black (point to line) ![](/images/TechDraw_LengthDimension.svg) [Length Dimension](/TechDraw_LengthDimension "TechDraw LengthDimension") depends on a cosmetic line that doesn't rotate with the view. (A cosmetic point wouldn't be helpful either.)
- The ![](/images/TechDraw_HorizontalDimension.svg) [Horizontal Dimension](/TechDraw_HorizontalDimension "TechDraw HorizontalDimension") and ![](/images/TechDraw_VerticalDimension.svg) [Vertical Dimension](/TechDraw_VerticalDimension "TechDraw VerticalDimension") (red and green) stay with the page orientation and change their values accordingly.
- The blue is a point to line ![](/images/TechDraw_LengthDimension.svg) [Length Dimension](/TechDraw_LengthDimension "TechDraw LengthDimension"), too but rotates with the view as there is no cosmetic geometry involved.

#### Winkelmaße

TechDraw provides two tools to add angle dimensions: ![](/images/TechDraw_AngleDimension.svg) [Angle Dimension](/TechDraw_AngleDimension "TechDraw AngleDimension") and ![](/images/TechDraw_3PtAngleDimension.svg) [3-Point Angle Dimension](/TechDraw_3PtAngleDimension "TechDraw 3PtAngleDimension").

![](/images/TechDraw_ExampleDrawing-19.png)

Two Ways to to add an angle dimension

- Blue: an ![](/images/TechDraw_AngleDimension.svg) [Angle Dimension](/TechDraw_AngleDimension "TechDraw AngleDimension") between two edges.
- Red: a ![](/images/TechDraw_3PtAngleDimension.svg) [3-Point Angle Dimension](/TechDraw_3PtAngleDimension "TechDraw 3PtAngleDimension") using both end points and the center point of an arc.

#### Fasenmaß

A chamfer dimension can be applied as a [length dimension](#Length_dimension) with a manually edited Daten**Format Spec** property or by using ![](/images/TechDraw_ExtensionCreateHorizChamferDimension.svg) [Create Horizontal Chamfer Dimension](/TechDraw_ExtensionCreateHorizChamferDimension "TechDraw ExtensionCreateHorizChamferDimension") and ![](/images/TechDraw_ExtensionCreateVertChamferDimension.svg) [Create Vertical Chamfer Dimension](/TechDraw_ExtensionCreateVertChamferDimension "TechDraw ExtensionCreateVertChamferDimension") to create a size and angle dimension for a chamfer.

![](/images/TechDraw_ExampleDrawing-14.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleDrawing-15.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleDrawing-16.png)

Left: Chamfer dimensions applied to an object with horizontal and vertical sides → Center: The same view rotated by 10° → Right: Object tilted by 10°, view is at 0°

The chamfer tools work well for objects with horizontal and vertical sides as long as they are parallel to the view's = the page's X and Y axes, but many parts won't do us the favor of being perfectly aligned.

The angle values are not parametric! They do not change if the view is tilted. The last page shows the correct angles, but dimensions positioned like this are pointless.

To align the chamfer dimension along an edge we need an auxiliary (cosmetic) point where the unchamfered edges would meet and have to use ![](/images/TechDraw_LengthDimension.svg) [Length Dimension](/TechDraw_LengthDimension "TechDraw LengthDimension"); but cosmetic point won't follow the edges if the view is tilted. (also see [Length dimension](#Length_dimension).)

#### Radienmaß

A ![](/images/TechDraw_RadiusDimension.svg) [Radius Dimension](/TechDraw_RadiusDimension "TechDraw RadiusDimension") adds a radius dimension to a circle or circular arc, no more no less.

![](/images/TechDraw_ExampleDrawing-20.png)

Two ways to add a radius dimension, the red one with flipped arrowheads

To change the arrowhead direction just set the Ansicht**Flip Arrowheads** property to `true`.

#### Durchmessermaß

Diameter dimensions can be added as a ![](/images/TechDraw_DiameterDimension.svg) [Diameter Dimension](/TechDraw_DiameterDimension "TechDraw DiameterDimension") or one of the length dimensions ![](/images/TechDraw_LengthDimension.svg) [Length Dimension](/TechDraw_LengthDimension "TechDraw LengthDimension"), ![](/images/TechDraw_HorizontalDimension.svg) [Horizontal Dimension](/TechDraw_HorizontalDimension "TechDraw HorizontalDimension"), and ![](/images/TechDraw_VerticalDimension.svg) [Vertical Dimension](/TechDraw_VerticalDimension "TechDraw VerticalDimension"). (Or in connection with a leader line pointing to a circle center or a center line - not displayed.)

![](/images/TechDraw_ExampleDrawing-12.png)

Several ways to place a diameter dimension (please ignore the missing center line)

- Blue: a ![](/images/TechDraw_VerticalDimension.svg) length dimension in the side view of the hole needs a "⌀" prefixed to distinguish this from a rectangular hole.

: ![](/images/TechDraw_ExtensionInsertDiameter.svg) [Insert '⌀' Prefix](/TechDraw_ExtensionInsertDiameter "TechDraw ExtensionInsertDiameter") is an easy way to do this, but the Daten**Format Spec** property can be edited manually as well.

- Green: a simple ![](/images/TechDraw_VerticalDimension.svg) length dimension.

: It needs some auxiliary geometry (cosmetic points) as it cannot be applied to circles directly.

- Red: a ![](/images/TechDraw_DiameterDimension.svg) diameter dimension. In case you look along the hole axis and can see the circular shape of the hole the "⌀" may be omitted. To remove it edit the Daten**Format Spec** property manually.

#### Gewindemaß

Thread dimensions can be applied just like diameter dimensions, but they require some auxiliary geometry created beforehand: ![](/images/TechDraw_ExtensionThreadHoleSide.svg) [Add Cosmetic Thread Hole Side View](/TechDraw_ExtensionThreadHoleSide "TechDraw ExtensionThreadHoleSide"), ![](/images/TechDraw_ExtensionThreadHoleBottom.svg) [Add Cosmetic Thread Hole Bottom View](/TechDraw_ExtensionThreadHoleBottom "TechDraw ExtensionThreadHoleBottom"), ![](/images/TechDraw_ExtensionThreadBoltSide.svg) [Add Cosmetic Thread Bolt Side View](/TechDraw_ExtensionThreadBoltSide "TechDraw ExtensionThreadBoltSide"), or ![](/images/TechDraw_ExtensionThreadBoltBottom.svg) [Add Cosmetic Thread Bolt Bottom View](/TechDraw_ExtensionThreadBoltBottom "TechDraw ExtensionThreadBoltBottom").

![](/images/TechDraw_ExampleDrawing-13.png)

A countersunk thread with several ways to place a thread dimension (and a counter sink diameter)

All Thread dimensions are applied to auxiliary (cosmetic) lines or circles (in connection with cosmetic points) and all Daten**Format Spec** properties need to be edited manually to prefix the "M" for metric threads.

#### Toleranzen

Tolerances express how much a measured dimension may deviate from the dimension value on the drawing. To suffix a tolerance values to the dimension value simply set the Daten**Over Tolerance** property to a value other than `0`, this results in a symmetric tolerance such as `±0,5`.

For an asymmetric tolerance set Daten**Equal Tolerance** property to `false` and specify also a lower value for the Daten**Under Tolerance** property.

The values can be set in the [Dimension dialog](/TechDraw_LengthDimension#Dimension_dialog "TechDraw LengthDimension") or directly in the [Property editor](/Property_editor "Property editor").

#### Wellen- und Bohrungspassungen

Fit tolerances can be added by suffixing tolerance classes to a dimension. A tolerance class consist of a tolerance field specifier (letter, upper case for holes, lower case for shafts) and a tolerance grade specifier (number) and can be suffixed in three ways:

1. Set the Daten**Arbitrary Tolerances** property to `true` and specify both tolerance classes in the Daten**Over Tolerance** and Daten**Under Tolerance** properties.
2. Use the ![](/images/TechDraw_HoleShaftFit.svg) [Add hole or shaft fit](/TechDraw_HoleShaftFit "TechDraw HoleShaftFit") tool. This suffixes only one tolerance class but adds the related values to the Daten**Over Tolerance** and Daten**Under Tolerance** properties.
3. For a single tolerance simply suffix the tolerance class to the format specifier in the Daten**Format Spec** property.

#### Gewindepassung

Thread fit tolerances can be suffixed like described above for hole/shaft fit tolerances, except method 2. The thread tolerance classes display the tolerance grade specifier (number) in front of the tolerance field specifier (letter, upper case for internal threads, lower case for external threads).

### Prüfmaße

Inspection dimensions (test dimensions) are not yet implemented.

: (Maybe obsolete already. See [...test dimension was withdrawn...](https://forum.freecad.org/viewtopic.php?p=691914#p691914) on the forum)

To fake an inspection dimension we set the Daten**Format Spec** property to " " (one space - no character at all and we would have no handle to grab the dimension line to move it) and then set the Daten**Arbitrary** property to `true`; this results in a dimension without value. The value can now be substituted with a balloon without leader line. This only works with horizontal dimensions since we cannot rotate balloons.

![](/images/TechDraw_ExampleDrawing-21.png)

The example item with an inspection dimension. In this case 100% of the production items have to be checked if they are within the tolerance

### Form- und Lagetolerierung

The system of [geometric dimensioning and tolerancing](/TechDraw_Geometric_dimensioning_and_tolerancing "TechDraw Geometric dimensioning and tolerancing") (GD&T) aims at describing shapes more precisely than toleranced dimensions alone can do. It is built on datums, theoretically exact dimensions, and tolerance indicators.

#### Bezüge

Datums are virtual surfaces, planes, lines, and points used as references to describe geometrical features with theoretically exact dimensions and tolerance indicators. They can be used to built a theoretically exact virtual coordinate system.

#### Bezugselemente

A datum feature is a geometric feature of an object corresponding with a certain datum. Datum feature symbols are added using ![](/images/TechDraw_Balloon.svg) [Balloon](/TechDraw_Balloon "TechDraw Balloon") annotations.

![](/images/TechDraw_ExampleDrawing-22.png)

Example item with datum features. Both views display exactly the same datum features

The Daten**Kink Length** property has to be set to `0` for vertical leader lines. On 0.21 and below this results in a portion of the line shown within the frame.

![](/images/TechDraw_ExampleDrawing-27.png)

Now the leader line starts on the frame which is perfect for horizontal ones, but now it is impossible to draw vertical leader lines correctly

#### Datum target

Datum targets are points or relatively small areas that denote where to derive a datum from. Most common use is to create a theoretically exact virtual coordinate system from a set of six datum targets.

![](/images/TechDraw_ExampleDrawing-23.png)

This kind of datum target is not implemented yet

There is no known workaround at the moment.

: Special point symbols to indicate the reference point of the datum target are not yet included in the options of leader lines.
: The circles have to be derived from 3D geometry and are hard to handle in projection groups.

#### Theoretisch exakte Maße

Theoretically exact dimensions are added the same way as [simple dimensions](#Simple_dimensions) and the Theoretically exact checkbox makes the difference: It sets the Daten**Theoretically Exact** property to `true` which adds a rectangular frame to the dimension value and deactivates tolerances and all tolerance settings.

#### Toleranzrahmen

A tolerance indicator, also called "feature control frame", is a frame containing tolerance information about:

- which geometric characteristic is tolerated
- the shape and size of the tolerance field
- the datums to be referenced
- some more symbols to describe the features even more precisely.

![](/images/TechDraw_ExampleDrawing-24.png)

Theoretically exact dimensions (red) and tolerance indicators with reference to datum feature A (blue)

Tolerance indicators are like datum feature symbols added using ![](/images/TechDraw_Balloon.svg) [Balloon](/TechDraw_Balloon "TechDraw Balloon") annotations but using the `Rectangle`option. Use ![](/images/TechDraw_ExtensionCustomizeFormat.svg) [Customize format label](/TechDraw_ExtensionCustomizeFormat "TechDraw ExtensionCustomizeFormat") to insert special characters.

In most cases tolerance indicators are aligned with a dimension line which is impossible in TechDraw except for horizontal dimensions since, as already mentioned, balloon annotations can not be rotated.

[Anfang](#top)

## Beschriftung

### Hinweislinien

A ![](/images/TechDraw_LeaderLine.svg) [Leader line](/TechDraw_LeaderLine "TechDraw LeaderLine") points to a vertex, edge, or face where the attached information is valid.

: Tools that provide information and attach to a preselected leader line are ![](/images/TechDraw_RichTextAnnotation.svg) [RichTextAnnotation](/TechDraw_RichTextAnnotation "TechDraw RichTextAnnotation"), and ![](/images/TechDraw_WeldSymbol.svg) [WeldSymbol](/TechDraw_WeldSymbol "TechDraw WeldSymbol").

### Balloons

A ![](/images/TechDraw_Balloon.svg) [Balloon](/TechDraw_Balloon "TechDraw Balloon") is a combination of a leader line and a short text. It requires a preselected view, or an item belonging to a view or the command will return an error message. The leader line starts horizontally without exception and turns towards the selected item after a short distance defined in the Daten**Kink Length** property. Its value can also be set to `0`.

### Text

Techdraw supplies two tools to add text to a drawing:

- ![](/images/TechDraw_Annotation.svg) [Insert Annotation](/TechDraw_Annotation "TechDraw Annotation") adds a plain text block as annotation to a page. Annotations use the same default settings as dimensions, some parameters can be changed, and they can be edited and rotated, but they cannot be attached.
- ![](/images/TechDraw_RichTextAnnotation.svg) [Insert Rich Text Annotation](/TechDraw_RichTextAnnotation "TechDraw RichTextAnnotation") adds a rich text block as annotation to a page, a leader line, or a view. Annotations attached to a leader line or a view move synchronously with the view or leader line when their positions change.

### Schweißsymbole

The ![](/images/TechDraw_WeldSymbol.svg) [WeldSymbol](/TechDraw_WeldSymbol "TechDraw WeldSymbol") tool attaches to a preselected leader line and adds information about how to create a certain seam between two objects to avoid modelling the seam faces on the raw parts. The fork text determines which welding or soldering process has to be used for the seam.

: It seems like the weld symbols demand an integrated leader line to get a fork symbol that matches the size of the text, otherwise the symbols on the leader line have to be scalable.

![](/images/TechDraw_ExampleDrawing-26.png)

A weld symbol for a circumferential V-seam, 111 meaning manual arc welding - Don't beat me if I have cited the internet wrongly

### Oberflächensymbole

![](/images/TechDraw_SurfaceFinishSymbols.svg) [Add Surface Finish Symbol](/TechDraw_SurfaceFinishSymbols "TechDraw SurfaceFinishSymbols") adds a surface finish symbol to the page, which means these symbols do not move with their referenced geometry.

![](/images/TechDraw_ExampleDrawing-25.png)

A surface finish symbol in comparison with a dimension

These symbols cannot be customized regarding line width and font type to match with the dimensions and they can hardly be edited after creation.

[Anfang](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_General_Examples/de&oldid=1485812>"
