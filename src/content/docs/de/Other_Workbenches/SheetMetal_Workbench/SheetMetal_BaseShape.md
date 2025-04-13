---
title: SheetMetal Grundform
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| SheetMetal Grundform |
| Menüeintrag |
| SheetMetal → Add base shape |
| Arbeitsbereich |
| [SheetMetal](/SheetMetal_Workbench/de "SheetMetal Workbench/de") |
| Standardtastenkürzel |
| H |
| Eingeführt in Version |
| 0.3.10 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl ![](/images/SheetMetal_BaseShape.svg) **SheetMetal Grundform** erzeugt ein SheetMetal-Basisobjekt (BaseShape-Objekt) aus Parametern.

![](/images/SheetMetal_BaseShape-01.png)

Die fünf möglichen Grundformen: L-Form, U-Form, Wanne, Hut, und Kasten

Eine rechteckige sechste Form, Platine genannt (Flat), wurde eingeführt mit Version 0.4.10.

## Anwendung

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/SheetMetal_BaseShape.svg) Add base shape drücken.
   * Den Menüeintrag **SheetMetal → ![](/images/SheetMetal_BaseShape.svg) Add base shape** auswählen.
   * Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **SheetMetal → ![](/images/SheetMetal_BaseShape.svg) Add base shape** im Kontextmenü auswählen.
   * Das Tastaturkürzel H.
2. Das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Eigenschaften der Blech-Grundform** wird geöffnet.
3. Die gewünschte Form aus den Optionen von **Art der Grundform** auswählen.
4. Die Position des Ursprungs im Widget **Lage des Bauteilursprungs** auswählen.
5. Wahlweise die Parameter im Aufgaben-Fenster anpassen.
6. Die Schaltfläche OK drücken, um den Befehl abzuschließen und das Aufgaben-Fenster zu schließen.
7. Ein **BaseShape**-Objekt wird erstellt.
8. Wahlweise die Parameter im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein SheetMetal-BaseShape-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet oder, wenn es sich in einem [PartDesign-Körper](/PartDesign_Body/de "PartDesign Body/de") befindet, von einem [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de")
und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Parameters

* Daten-Eigenschaft**fill Gaps** (`Bool`): Erweitert die Seite und die Kanten (Flansche), um alle Lücken zu schließen. Standardwert: `true`.
* Daten-Eigenschaft**flangeWidth** (`Length`): Breite der oberen Kante (Flansch). Standardwert: `5,00 mm`.
* Daten-Eigenschaft**height** (`Length`): Höhe der Form. Standardwert: `10,00 mm`.
* Daten-Eigenschaft**length** (`Length`): Länge der Form. Standardwert: `30,00 mm`.
* Daten**origin Loc** (`Enumeration`): Lage des Ursprungs.

  :   `-X,-Y`, `-X,0`, `-X,+Y`, `0,-Y`, `0,0` (default), `0,+Y`, `+X,-Y`, `+X,0`, and `+X,+Y`
* Daten-Eigenschaft**radius** (`Length`): Biegeradius. Standardwert: `1,00 mm`.
* Daten-Eigenschaft**shape Type** (`Enumeration`): Art der Grundform.

  :   `Flat` (eingeführt in Version 0.4.10), `L-Shape` (standard), `U-Shape`, `Tub`, `Hat`, `Box`.
* Daten-Eigenschaft**thickness** (`Length`): Blechstärke. Standardwert: `1,00 mm`.
* Daten-Eigenschaft**width** (`Length`): Breite der Form. Standardwert: `20,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_BaseShape/de&oldid=1545390>"