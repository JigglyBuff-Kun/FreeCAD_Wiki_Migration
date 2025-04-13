---
title: SheetMetal BasisprofilErstellen
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                                          |
| ------------------------------------------------------------------------ |
| SheetMetal BasisprofilErstellen                                          |
| Menüeintrag                                                              |
| SheetMetal → Make Base Wall                                              |
| Arbeitsbereich                                                           |
| [SheetMetal (Blech)](/SheetMetal_Workbench/de "SheetMetal Workbench/de") |
| Standardtastenkürzel                                                     |
| C B                                                                      |
| Eingeführt in Version                                                    |
| -                                                                        |
| Siehe auch                                                               |
| _Keiner_                                                                 |
|                                                                          |

## Beschreibung

Der Befehl ![](/images/SheetMetal_AddBase.svg) Basisprofil erstellen erzeugt ein SheetMetal-Basisobjekt aus einer Skizze.

Aus einer offenen Kontur erzeugt er ein prismatisches **Profil**:

![](/images/SheetMetal_AddBase-01.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddBase-02.png)

Aus einer geschlossenen Kontur erzeugt er eine Grund**platte** (Platine):

![](/images/SheetMetal_AddBase-03.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddBase-04.png)

## Anwendung

### Profil

1. Eine ![](/images/Workbench_Sketcher.svg) [Skizze](/Sketcher_Workbench/de "Sketcher Workbench/de") **mit offener Kontur** auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/SheetMetal_AddBase.svg) Basisobjekt erstellen drücken.
   - Den Menüeintrag **Sheet Metal → ![](/images/SheetMetal_AddBase.svg) Basisobjekt erstellen** auswählen.
   - Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Sheet Metal → ![](/images/SheetMetal_AddBase.svg) Basisobjekt erstellen** im Kontextmenü auswählen.
   - Das Tastenkürzel C dann B.
3. Ein **BaseBend**-Objekt wird erstellt und das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Eigenschaften der skizzierten Grundform** wird geöffnet.
4. Ecken im Verlauf der Kontur werden automatisch in zylindrische Bögen gewandelt.
5. Wahlweise die Schaltfläche Sketch drücken und eine andere Skizze auswählen.
6. Die Parameter des Profils im Aufgaben-Fenster einstellen.
7. Die Schaltfläche OK drücken, um das Aufgaben-Fenster zu schließen und den Befehl abzuschließen.
8. Wahlweise die Parameter des Profils im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

### Platine

1. Eine ![](/images/Workbench_Sketcher.svg) [Skizze](/Sketcher_Workbench/de "Sketcher Workbench/de") **mit geschlossener Kontur** auswählen.
2. Den Befehl aufrufen, wie oben beschrieben.
3. Ein **BaseBend**-Objekt wird erstellt und das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Blech-Grundform erstellen** wird geöffnet.
4. Wahlweise die Schaltfläche Sketch drücken und eine andere Skizze auswählen.
5. Die Parameter der Platine im Aufgaben-Fenster einstellen.
6. Die Schaltfläche OK drücken, um das Aufgaben-Fenster zu schließen und den Befehl abzuschließen.
7. Wahlweise die Parameter der Platine im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

## Aufgaben-Fenster

Ein Aufgaben-Fenster wurde in Version 0.6.01 eingeführt

Ein vorhandenes BaseBend-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt anklicken, um das Aufgaben-Fenster erneut zu öffnen und die Parameter zu bearbeiten.

![](/images/SheetMetal_AddBase-Task.png)

- Sketch: Verknüpft eine andere Skizze mit der Eigenschaft **Bend Sketch**.
- **Bend Plane**: Auswahl für die Eigenschaft **Bend Side**.
- **Radius**: Eingabe für die Eigenschaft **Radius**.
- **Thickness**: Eingabe für die Eigenschaft **Thickness**.
- **Length**: Eingabe für die Eigenschaft **Length**.
- **Symmetric**: Schaltet die Eigenschaft **Mid Plane** um.
- **Reverse Direction**: Schaltet die Eigenschaft **Reverse** um. (ausgeblendet, wenn **Symmetric** aktiviert ist)

Die zuletzt eingegebenen Werte für Radius und Thickness werden als Standardwerte für das folgende neue BaseBend-Objekt gespeichert.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein SheetMetal-BaseBend-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet oder, wenn es sich in einem [PartDesign-Körper](/PartDesign_Body/de "PartDesign Body/de") befindet, von einem [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de")
und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Parameters

- Daten-Eigenschaft**Bend Side** (`Enumeration`): Profillage, legt fest, zu welcher Seite der Profilkurve die Wandstärke aufgetragen wird. `Outside` außen (Standardwert), `Inside` innen oder `Middle` mittig. (wird nicht für Platinen verwendet)
- Daten-Eigenschaft**Bend Sketch** (`Link`): "Wall Sketch object". Verweis zur Profil- bzw. Umriss-Skizze.
- Daten-Eigenschaft**Length** (`Length`): Extrusionslänge eines Profils. Standardwert: `100,00 mm`. (wird nicht für Platinen verwendet)
- Daten-Eigenschaft**Mid Plane** (`Bool`): Symmetrisch zur Ebene extrudieren. Die Ausdehnung eines Profils oder die Wandstärke einer Platine befindet sich auf einer Seite der der Skizzenebene, wenn `false` gesetzt ist (Standardwert) oder ist symmetrisch zur Skizzenebene, wenn `true` gesetzt ist.
- Daten-Eigenschaft**Radius** (`Length`): Innenradius der automatisch hinzugefügten Bögen. Standardwert: `1,00 mm`. (wird nicht für Platinen verwendet)
- Daten-Eigenschaft**Reverse** (`Bool`): Kehrt die Richtung der Extrusion eines Profils bzw. der Wandstärke einer Platine um. Standardwert: `false`.
- Daten-Eigenschaft**thickness** (`Length`): Wandstärke eines Blechprofils oder einer Platine. Standardwert: `1,00 mm`.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddBase/de&oldid=1545441>"
