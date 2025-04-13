---
title: SheetMetal KanteAnsetzen
---

:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|                                                                  |
| ---------------------------------------------------------------- |
| SheetMetal KanteAnsetzen                                         |
| Menüeintrag                                                      |
| Sheet Metal → Kante ansetzen                                     |
| Arbeitsbereich                                                   |
| [SheetMetal](/SheetMetal_Workbench/de "SheetMetal Workbench/de") |
| Standardtastenkürzel                                             |
| W                                                                |
| Eingeführt in Version                                            |
| -                                                                |
| Siehe auch                                                       |
| _Keiner_                                                         |
|                                                                  |

## Beschreibung

Der Befehl ![](/images/SheetMetal_AddWall.svg) Kante ansetzen erzeugt Kanten (Falze) an den ausgewählten Flächenrändern einer Grundplatte. Durch das Ändern der Daten-Eigenschaft**angle** kann aus einer Kante ein Falz werden.

Eine **Kante** (auch stehender Falz / Stehfalz genannt) besteht aus einem zylindrischen 90° Bogen und einem ebenen Streifen.

![](/images/SheetMetal_AddWall-12.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddWall-13.png)

Zwei gewählte Kanten (edges) → zwei Kanten (flanges)

Trägt man in einem zweiten Schritt die für die Daten-Eigenschaft**angle** ungefähr 180° ein erhält man einen **Falz** anstelle einer Kante.

![](/images/SheetMetal_AddWall-14.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddWall-15.png)

Zwei gewählte Kanten (edges) → zwei Falze (hems)

## Anwendung

1. Eine oder mehrere Randflächen einer Grundplatte auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/SheetMetal_AddWall.svg) Kante ansetzen drücken.
   - Den Menüeintrag **Sheet Metal → ![](/images/SheetMetal_AddWall.svg) Kante ansetzen** auswählen.
   - Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Sheet Metal → ![](/images/SheetMetal_AddWall.svg) Kante ansetzen** im Kontextmenü auswählen.
   - Das Tastaturkürzel: W.
3. Ein **Bend**-Objekt wird erstellt und das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Kanteneigenschaften** wird mit ausgewähltem Reiter **General** geöffnet.

   : Das Bend-Objekt enthält eine neue Kante (Streifen) an jeder ausgewählten Kante (Flächenrand).

4. Wahlweise die Schaltfläche Auswählen drücken, um weitere Kanten hinzuzufügen.
   - Wahlweise die Schaltfläche Clear selection drücken, um die Liste der ausgewählten Kanten zu löschen (eingeführt in 0.7.11 funktioniert aber nicht richtig).
   - Die Schaltfläche Vorschau drücken, um die Auswahl abzuschließen und die Äderungen anzuzeigen.
5. Wahlweise einen anderen Reiter auswählen und weitere Parameter im Aufgaben-Fenster anpassen.
6. Die Schaltfläche OK drücken, um den Befehl abzuschließen und das Aufgaben-Fenster zu schließen.
7. Wahlweise die Parameter im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

### Task panel

A [Task panel](/Task_panel "Task panel") with four tabs was introduced in 0.6.00

Double-click an existing Bend object in the [Tree view](/Tree_view "Tree view") to re-open the Task panel and edit the parameters.

#### General

![](/images/SheetMetal_AddWall-Task1.png)

- Select: Changes the amount of edges in the **base Object** property.
- **Length**: Sets the **length** property.
- ![](/images/Invert_On.svg) Reverse the wall: Toggles the **invert** property.
- **Length mode**: Sets the **Length Spec** property.
- **Bend radius**: Sets the **radius** property.
- **Bend angle**: Sets the **angle** property.
- ![](/images/FaceSelection_On.svg) Face reference: Toggles the **Angle Face Ref Mode** property.

  : If activated, it switches the **Bend angle** option to read-only mode and displays two further options:

  - **Reference**: Awaits a face to be selected in the 3d view and links it to the **Angle Face Reference** property.
  - **Relative angle**: Sets the **Relative Angle To Ref** property and also the **angle** property..

- **Unfold**: Toggles the **unfold** property.

#### Offsets

![](/images/SheetMetal_AddWall-Task2.png)

- **Gap A**: Sets the **gap1** property.
- **Gap B**: Sets the **gap2** property.
- **Extend A**: Sets the **extend1** property.
- **Extend B**: Toggles the **extend2** property.
- **Rectangle** and **Round** radio buttons: Toggle **Relief Type** property.
- **Width**: Sets the **reliefw** property.
- **Depth**: Toggles the **reliefd** property.

#### Miter

![](/images/SheetMetal_AddWall-Task3.png)

- **Auto Miter**: Toggles the **Auto Miter** property.

  : If checked:

  - **Minimum Gap**: Sets the **minGap** property.
  - **Max Extend Distance**: Sets the **max Extend Dist** property.

  : If unchecked:

  - **Angle 1**: sets the **miteralgle1** property.
  - **Angle 2**: sets the **miteralgle2** property.

#### Perforation

![](/images/SheetMetal_AddWall-Task4.png)

- **Perforate**: Toggles the **Perforate** property.

  : If checked:

  - **Angle**: Sets the **Perforation Angle** property.
  - **Initial Cut Length**: Sets the **Perforation Initial Length** property.
  - **Max Cut Length**: Sets the **Perforation Max Length** property.
  - **Max Tab Length**: Sets the **Nonperforation Max Length** property.

## Hinweise

Um eine Grundplatte zu erzeugen, wird eine geschlossene 2D-Kontur - vorzugsweise eine ![](/images/Sketcher_NewSketch.svg) [Skizze (sketch)](/Sketcher_NewSketch/de "Sketcher NewSketch/de") - mit dem Befehl ![](/images/SheetMetal_AddBase.svg) [Kante ansetzen](/SheetMetal_AddBase/de "SheetMetal AddBase/de") verwendet.

Alternativ kann eine Grundplatte (Platine) auch mit Befehlen der Arbeitsbereiche ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de") oder ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") erstellt werden.

Eine Platine mit dem Arbeitsbereich [Part](/Part_Workbench/de "Part Workbench/de") erstellen:

1. Einen Festkörper erstellen durch
   - Anwendung des Befehls ![](/images/Part_Box.svg) [Part Würfel (Box)](/Part_Box/de "Part Box/de")
   - Verwendung des Befehls ![](/images/Part_Extrude.svg) [Part Extrudieren...](/Part_Extrude/de "Part Extrude/de") mit
     - einem ![](/images/Draft_Rectangle.svg) [Draft Rechteck](/Draft_Rectangle/de "Draft Rectangle/de").
     - einem ![](/images/Draft_Wire.svg) [Draft Linienzug](/Draft_Wire/de "Draft Wire/de").
     - einer ![](/images/Sketcher_NewSketch.svg) [Skizze](/Sketcher_NewSketch/de "Sketcher NewSketch/de").
2. Es ist darauf zu achten, dass ein Maß der Box bzw. die Extrusionslänge der Blechstärke entspricht.

Eine Platine mit dem Arbeitsbereich [PartDesign](/PartDesign_Workbench "PartDesign Workbench") erstellen:

1. Einen Festkörper erstellen durch
   - Anwendung des Befehls ![](/images/PartDesign_AdditiveBox.svg) [Zu addierender Quader (Additive Box)](/PartDesign_AdditiveBox/de "PartDesign AdditiveBox/de").
   - Verwendung des Befehls ![](/images/PartDesign_Pad.svg) [Aufpolsterung (Pad)](/PartDesign_Pad/de "PartDesign Pad/de") mit einer ![](/images/Sketcher_NewSketch.svg) [Skizze](/Sketcher_NewSketch/de "Sketcher NewSketch/de").
2. Es ist darauf zu achten, dass ein Maß des Quaders bzw. die Daten-Eigenschaft**Length** des Pads der Blechstärke entspricht.

Wenn mit ![](/images/PartDesign_Body.svg) [Körper erstellen](/PartDesign_Body/de "PartDesign Body/de") gestartet wird, können SheetMetal-Werkzeuge mit PartDesign-Werkzeugen wie z.B. ![](/images/PartDesign_Pocket.svg) [Tasche](/PartDesign_Pocket/de "PartDesign Pocket/de") oder ![](/images/PartDesign_Hole.svg) [Bohrung](/PartDesign_Hole/de "PartDesign Hole/de") kombiniert werden.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein SheetMetal-Bend-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet oder, wenn es sich in einem [PartDesign-Körper](/PartDesign_Body/de "PartDesign Body/de") befindet, von einem [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de")
und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Parameters

- Daten-Eigenschaft**Bend Type** (`Enumeration`): "Bend Type". `Material Outside` (standard), `Material Inside`, `Thickness Outside`, `Offset`.
- Daten-Eigenschaft**Length Spec** (`Enumeration`): "Type of Length Specification". Art der Längenbestimmung. `Leg` (standard), `Outer Sharp`, `Inner Sharp`, `Tangential`.
- Daten-Eigenschaft**angle** (`Angle`): "Bend Angle". Biegewinkel. Standardwinkel `90,00°`.
- Daten-Eigenschaft**base Object** (`LinkSub`): "Base Object". Verknüpfung zur ebenen Fläche, an die eine Kante angesetzt werden soll.
- Daten-Eigenschaft**extend1** (`Distance`): "Extend from Left Side". Verlängern der linken Seite. Standardwert: `0,00 mm`.
- Daten-Eigenschaft**extend2** (`Distance`): "Extend from Right Side". Verlängern der rechten Seite. Standardwert: `0,00 mm`.
- Daten-Eigenschaft**gap1** (`Distance`): "Gap from Left side". Lücke von links. Standardwert: `0,00 mm`.
- Daten-Eigenschaft**gap2** (`Distance`): "Gap from Right side". Lücke von rechts. Standardwert: `0,00 mm`.
- Daten-Eigenschaft**invert** (`Bool`): "Invert Bend Direction". Biegerichtung umkehren. Standardwert: `false`.
- Daten-Eigenschaft**length** (`Length`): "Length of Wall". Schenkellänge (ab Bogen). Standardwert: `10,00 mm`.
- Daten-Eigenschaft**radius** (`Length`): "Bend Radius". Biegeradius (Innenradius). Der Standardwert hängt von der Eigenschaft radius des Übergeordneten Formelements ab:
  - Jene Eigenschaft ist nicht vorhanden: Diese Eigenschaft wird auf `1,00 mm` gesetzt.
  - Jene Eigenschaft enthält einen numerischen Wert: Ein Ausdruck, der auf jene Eigenschaft verweist, wird in dieser Eigenschaft eingefügt.
  - Jene Eigenschaft enthält einen Ausdruck: Der Ausdruck wird in diese Eigenschaft kopiert.

Parameters Ext.

- Daten-Eigenschaft**Angle Face Ref Mode** (`Bool`): "Enable face reference for angle". Flächenreferenz für Winkel aktivieren. Standardwert: `true`. eingeführt in 0.7.11
- Daten-Eigenschaft**Angle Face Referene** (`LinkSub`): "Face reference for angle". Flächenreferenz für Winkel. Standardwert: `true`. eingeführt in 0.7.11
- Daten-Eigenschaft**Auto Miter** (`Bool`): "Enable Auto Miter". Automatische Gehrung aktivieren. Standardwert: `true`.
- Daten-Eigenschaft**Offset Face Ref Mode** (`Bool`): "Enable face reference for offset". Flächenreferenz für Versetzen aktivieren. Standardwert: `true`. eingeführt in 0.7.11
- Daten-Eigenschaft**Offset Face Reference** (`LinkSub`): "Face reference for offset". Flächenreferenz für Versetzen. Standardwert: `true`. eingeführt in 0.7.11
- Daten-Eigenschaft**Offset Type** (`Enumeration`): "Offset Type". Ausführung der Kantung. eingeführt in 0.7.11

  : Values: `Material außen`, `Material innen` (Standardwert), `Wandstärke außen`, `Abstand`.

- Daten-Eigenschaft**Offset Type Offset** (`Distance`): "Works when offset face reference is on. It offsets by a normal distance from the offset reference face". Funktioniert, wenn **Offset Face Reference** aktiv ist. Es versetzt entlang der Flächennormale der Referenzfläche. Standardwert: `0.00`. eingeführt in 0.7.11
- Daten-Eigenschaft**Relative Angle To Ref** (`Angle`): "Relative angle to the face reference". Relativer Winkel zur Flächenreferenz. Standardwert: `0.00`. eingeführt in 0.7.11
- Daten-Eigenschaft**Suppl Angle Ref** (`Bool`): "Supplementary angle reference". Ergänzungswinkel-Referenz. Standardwert: `true`. eingeführt in 0.7.11
- Daten-Eigenschaft**kfactor** (`FloatConstraint`): "Location of Neutral Line. Caution: Using ANSI standards, not DIN.". Lage der neutralen Faser nach ANSI-Norm, nicht nach DIN.  
   Standardwert: `0,50`. K factor (also known as neutral factor) for the bend. Used to calculate bend allowance when unfolding.
- Daten-Eigenschaft**max Extend Dist** (`Length`): "Auto Miter maximum Extend Distance". Automatische Gehrung, maximale Länge der Erweiterung. Standardwert: `5,00 mm`.
- Daten-Eigenschaft**min Gap** (`Length`): "Auto Miter Minimum Gap". Automatische Gehrung, minimale Lücke. Standardwert: `0,20 mm`.
- Daten-Eigenschaft**min Relief Gap** (`Length`): "Minimum Gap to Relief Cut". Standardwert: `1,00 mm`.
- Daten-Eigenschaft**offset** (`Distance`): "Offset Bend". Versatz der Biegung. Standardwert: `0,00 mm`.
- Daten-Eigenschaft**unfold** (`Bool`): "Shows Unfold View of Current Bend". Abwicklung des aktuellen Bend-Objekts anzeigen. Standardwert: `false`  
   `true` erstellt die Abwicklung des Bend-Objekts.

Parameters Ex2

- Daten-Eigenschaft**Sketch** (`Link`): "Sketch Object". Skizzenobjekt.
- Daten-Eigenschaft**sketchflip** (`Bool`): "Flip Sketch Direction". Skizzenrichtung umkehren. Standardwert: `false`.
- Daten-Eigenschaft**sketchinvert** (`Bool`): "Invert Sketch Start". Standardwert: `false`.

Parameters Ex3

- Daten-Eigenschaft**Length List** (`FloatList`): "Length of Wall List". Standardwert: `[10.00]`.
- Daten-Eigenschaft**bend AList** (`FloatList`): "Bend Angle List". Standardwert: `[90.00]`.

Parameters Miterangle

- Daten-Eigenschaft**miterangle1** (`Angle`): "Bend Miter Angle from Left Side". Gehrungswinkel der linken Seite. Standardwinkel: `0,00°`.
- Daten-Eigenschaft**miterangle2** (`Angle`): "Bend Miter Angle from Right Side". Gehrungswinkel der rechten Seite. Standardwinkel: `0,00°`.

Parameters Perforation

- Daten-Eigenschaft**Nonperforation Max Length** (`Length`): "Non-Perforation Max Length" (Maximale Länge ohne Perforation). Standardwert `5 mm`.
- Daten-Eigenschaft**Perforate** (`Bool`): "Enable perforation" (Perforation aktivieren). Standardwert `false`.
- Daten-Eigenschaft**Perforation Angle** (`Angle`): "Perforation Angle" (Perforationswinkel). Standardwert `0 °`.
- Daten-Eigenschaft**Perforation initial Length** (`Length`): "Initial Perforation Length" (Anfängliche Länge der Perforation). Standardwert `5 mm`.
- Daten-Eigenschaft**Perforation Max Length** (`Length`): "Perforation Max Length" (Maximale Länge der Perforation). Standardwert `5 mm`.

Parameters Relief

- Daten-Eigenschaft**Relief Factor** (`Float`): "Relief Factor". Standardwert: `0,70`.
- Daten-Eigenschaft**Use Relief Factor** (`Bool`): "Use Relief Factor". Standardwert: `false`.
- Daten-Eigenschaft**relief Type** (`Enumeration`): "Relief Type". `Rectangle` (standard), `Round`. Enabled only when a gap value is set.
- Daten-Eigenschaft**reliefd** (`Length`): "Relief Depth". Standardwert: `1,00 mm`. Enabled only when a gap value is set.
- Daten-Eigenschaft**reliefw** (`Length`): "Relief Width". Standardwert: `0,80 mm`. Enabled only when a gap value is set.

## Beispiel

![](/images/SheetMetal_AddWall-01.png)

Eine einfache Schale

### Vorbereitung

Diese Schale besteht aus einer rechteckigen Platine mit an ihren Umrisskanten (-Linien) angefügten Kanten.
Also muss eine Skizze für die Platine vorbereitet werden.

![](/images/SheetMetal_AddWall-02.png)

Nur eine rechteckige Kontur

### Arbeitsablauf

1. Eine Platine erstellen
   1. Die Konturskizze auswählen  
      ![](/images/SheetMetal_AddWall-03.png)
   2. Schaltfläche ![](/images/SheetMetal_AddBase.svg) [Basisprofil erstellen](/SheetMetal_AddBase/de "SheetMetal AddBase/de") drücken  
      oder Tastenkürzel C dann F verwenden  
      ![](/images/SheetMetal_AddWall-04.png)  
      (Die Platine wird in Z-Richtung aufgedickt)
2. Kanten an die Umrisskanten anfügen
   1. Auswahl der **Umrisskanten** der Platine  
      ![](/images/SheetMetal_AddWall-05.png)
   2. Schaltfläche ![](/images/SheetMetal_AddWall.svg) Kante ansetzen drücken  
      oder Tastenkürzel W verwenden  
      ![](/images/SheetMetal_AddWall-06.png)
   3. Wenn die Kanten mit 90° nach unten zeigen, setzt man den Wert der Eigenschaft **invert** auf true, um die Richtung umzukehren (und den von **length** auf einen niedrigeren Wert für kürzere Kanten)  
      ![](/images/SheetMetal_AddWall-01.png)
3. Noch mehr Kanten hinzufügen
   1. Die **oberen Umrisskanten** auswählen  
      ![](/images/SheetMetal_AddWall-08.png)
   2. Schaltfläche ![](/images/SheetMetal_AddWall.svg) [Kante ansetzen](/SheetMetal_AddWall "SheetMetal AddWall") drücken  
      oder Tastenkürzel W verwenden  
      ![](/images/SheetMetal_AddWall-09.png)
   3. Die Kanten sind jetzt ein wenig zu lang (aber schön beschnitten), also muss die Eigenschaft **length** auf einen niedrigeren Wert gesetzt werden  
      ![](/images/SheetMetal_AddWall-10.png)
   4. Sollen die Kanten nach außen aufgestellt werden, muss der Wert **invert** auf true gesetzt werden  
      ![](/images/SheetMetal_AddWall-11.png)

Fertig!

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddWall/de&oldid=1546751>"
