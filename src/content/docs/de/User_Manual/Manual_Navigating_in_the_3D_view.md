---
title: Handbuch Navigieren in der 3D-Ansicht
---

- [Einführung](/Manual:Introduction/de "Manual:Introduction/de")
- FreeCAD entdecken
  - [Was ist FreeCAD?](/Manual:What_is_FreeCAD/de "Manual:What is FreeCAD/de")
  - [Installieren](/Manual:Installing/de "Manual:Installing/de")
    - [Installation unter Windows](/Manual:Installing/de#Installation_unter_Windows "Manual:Installing/de")
    - [Installation unter Linux](/Manual:Installing/de#Installation_unter_Linux "Manual:Installing/de")
    - [Installation unter Mac OS](/Manual:Installing/de#Installation_unter_Mac_OS "Manual:Installing/de")
    - [Deinstallation](/Manual:Installing/de#Deinstallation "Manual:Installing/de")
    - [Setzen der Grundeinstellungen](/Manual:Installing/de#Setzen_der_Grundeinstellungen "Manual:Installing/de")
    - [Installieren zusätzlicher Inhalte](/Manual:Installing/de#Installieren_zusätzlicher_Inhalte "Manual:Installing/de")
  - [Die FreeCAD Oberfläche](/Manual:The_FreeCAD_Interface/de "Manual:The FreeCAD Interface/de")
    - [Arbeitsbereiche](/Manual:The_FreeCAD_Interface/de#Arbeitsbereiche "Manual:The FreeCAD Interface/de")
    - [Die Oberfläche](/Manual:The_FreeCAD_Interface/de#Die_Oberfläche "Manual:The FreeCAD Interface/de")
    - [Anpassung der Oberfläche](/Manual:The_FreeCAD_Interface/de#Anpassung_der_Oberfläche "Manual:The FreeCAD Interface/de")
  - Navigieren in der 3D Ansicht
    - [Ein Wort zum 3D Raum](#Ein_Wort_zum_3D_Raum)
    - [Die FreeCAD 3D Ansicht](#Die_FreeCAD_3D_Ansicht)
    - [Objekte anwählen](#Objekte_anwählen)
  - [Das FreeCAD Dokument](/Manual:The_FreeCAD_document/de "Manual:The FreeCAD document/de")
  - [Parametrische Objekte](/Manual:Parametric_objects/de "Manual:Parametric objects/de")
  - [Import und Export in andere Dateitypen](/Manual:Import_and_export_to_other_filetypes/de "Manual:Import and export to other filetypes/de")
- Arbeiten mit FreeCAD
  - [Alle Arbeitsbereiche auf einen Blick](/Manual:All_workbenches_at_a_glance/de "Manual:All workbenches at a glance/de")
  - [Herkömmliche Modellierung, der CSG Weg](/Manual:Traditional_modeling,_the_CSG_way/de "Manual:Traditional modeling, the CSG way/de")
  - [Herkömmliches 2D Entwerfen](/Manual:Traditional_2D_drafting/de "Manual:Traditional 2D drafting/de")
  - [Modellierung für Produktdesign](/Manual:Modeling_for_product_design/de "Manual:Modeling for product design/de")
  - [Modelle für den 3D Druck vorbereiten](/Manual:Preparing_models_for_3D_printing/de "Manual:Preparing models for 3D printing/de")
    - [Exportieren zu Zerschneidern](/Manual:Preparing_models_for_3D_printing/de#Exportieren_zu_Zerschneidern "Manual:Preparing models for 3D printing/de")
    - [Umwandeln von Objekten in Polygonnetze](/Manual:Preparing_models_for_3D_printing/de#Umwandeln_von_Objekten_in_Polygonnetze "Manual:Preparing models for 3D printing/de")
    - [Verwendung von Slic3r](/Manual:Preparing_models_for_3D_printing/de#Verwendung_von_Slic3r "Manual:Preparing models for 3D printing/de")
    - [Verwendung der Cura Erweiterung](/Manual:Preparing_models_for_3D_printing/de#Verwendung_der_Cura_Erweiterung "Manual:Preparing models for 3D printing/de")
    - [Erzeugung von G-Code](/Manual:Preparing_models_for_3D_printing/de#Erzeugung_von_G-Code "Manual:Preparing models for 3D printing/de")
  - [Erstellen von 2D Zeichnungen](/Manual:Generating_2D_drawings/de "Manual:Generating 2D drawings/de")
  - [BIM Modellierung](/Manual:BIM_modeling/de "Manual:BIM modeling/de")
  - [Verwendung von Kalkulationstabellen](/Manual:Using_spreadsheets/de "Manual:Using spreadsheets/de")
    - [Leseeigenschaften](/Manual:Using_spreadsheets/de#Leseeigenschaften "Manual:Using spreadsheets/de")
    - [Schreibeigenschaften](/Manual:Using_spreadsheets/de#Schreibeigenschaften "Manual:Using spreadsheets/de")
  - [Erstellen von FEM Analysen](/Manual:Creating_FEM_analyses/de "Manual:Creating FEM analyses/de")
  - [Erstellen von Bildsynthesen](/Manual:Creating_renderings/de "Manual:Creating renderings/de")
- Skripte in Python erstellen
  - [Eine sanfte Einführung](/Manual:A_gentle_introduction/de "Manual:A gentle introduction/de")
    - [Schreiben von Python Code](/Manual:A_gentle_introduction/de#Schreiben_von_Python_Code "Manual:A gentle introduction/de")
    - [Handhabung von FreeCAD Objekten](/Manual:A_gentle_introduction/de#Handhabung_von_FreeCAD_Objekten "Manual:A gentle introduction/de")
    - [Vektoren und Platzierungen](/Manual:A_gentle_introduction/de#Vektoren_und_Platzierungen "Manual:A gentle introduction/de")
  - [Erstellung und Handhabung von Geometrie](/Manual:Creating_and_manipulating_geometry/de "Manual:Creating and manipulating geometry/de")
  - [Erstellung parametrischer Objekte](/Manual:Creating_parametric_objects/de "Manual:Creating parametric objects/de")
  - [Erstellen von Oberflächenwerkzeugen](/Manual:Creating_interface_tools/de "Manual:Creating interface tools/de")
- [Die Gemeinschaft](/Manual:The_Community/de "Manual:The Community/de")

### Ein Wort zum 3D-Raum

Wenn du mit 3D-Modellierungsanwendungen noch nicht vertraut bist, musst du zunächst einige grundlegende Konzepte verstehen. Wenn du bereits Erfahrung mit dieser Software hast, kannst du diese Einführung überspringen.

FreeCAD arbeitet in einem dreidimensionalen [euklidischen Raum](https://de.wikipedia.org/wiki/Euklidischer_Raum), dessen Mittelpunkt ein durch drei Achsen, X, Y und Z, definierter Ursprungspunkt ist. Wenn man FreeCAD von oben betrachtet, verläuft die X-Achse normalerweise horizontal nach rechts, die Y-Achse nach hinten und die Z-Achse vertikal nach oben. Der Schnittpunkt dieser Achsen, an dem jede Koordinate Null ist, wird als Ursprung bezeichnet.

Jeder Ort im Raum von FreeCAD wird durch die Koordinaten (x, y, z) bestimmt. Beispielsweise ist ein Punkt bei den Koordinaten (2,3,1) 2 Einheiten entlang der X-Achse, 3 Einheiten entlang der Y-Achse und 1 Einheit entlang der Z-Achse positioniert. Das Navigieren in diesem Raum ist vergleichbar mit der Bedienung einer Kamera. Du kannst die Kamera nach links, rechts, oben oder unten bewegen (Schwenken), sie um den Brennpunkt schwenken (Drehen) oder sie näher an Objekte heran oder von ihnen weg bewegen (Zoomen), sodass du dein Design aus verschiedenen Perspektiven erkunden kannst.

![](/images/3dspace_coordinates.jpg)

### Die FreeCAD-3D-Ansicht

#### Mausnavigation

Die Navigation in der [3D-Ansicht](/3D_view/de "3D view/de") in FreeCAD kann mithilfe verschiedener Eingaben erfolgen, darunter eine Maus, ein Space Navigator-Gerät, Tastaturkürzel, ein Touchpad oder eine beliebige Kombination davon. FreeCAD bietet eine Reihe von [Navigationsstilen](/Mouse_navigation/de "Mouse navigation/de"), die definieren, wie die drei grundlegenden Anzeigevorgänge – Schwenken, Drehen und Zoomen – ausgeführt werden. Darüber hinaus bestimmen diese Stile, wie Objekte im Arbeitsbereich ausgewählt werden. Um auf diese Navigationsstile zuzugreifen und zwischen ihnen zu wechseln, kannst du zum Bildschirm „Einstellungen“ navigieren oder einfach mit der rechten Maustaste in die [3D-Ansicht](/3D_view/de "3D view/de") klicken. Darüber hinaus gibt es eine dritte, unmittelbarere Option zum Ändern des Navigationsstils direkt über die Benutzeroberfläche im unteren rechten Teil des Bildschirms.

![](/images/FreeCAD_022_NavigationMethod.png)

Jeder dieser Stile weist diesen vier Operationen unterschiedliche Maustasten, Maus- und Tastaturkombinationen oder Mausgesten zu. Die folgende Tabelle zeigt die wichtigsten verfügbaren Stile. Magenta markierte Tastatur- und Maustasten müssen gedrückt gehalten werden.

| Stil                                                                         | Auswahl                                                                                                | Zoom                                                                                                                                                                                                                                                                                | Drehen                                                                                                                                                                                                                                                                                                                                                                                                                                 | Schwenken                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blender                                                                      | [Linke Maustaste drücken](/File:Mouse_LMB.svg "Linke Maustaste drücken")                               | [Mausrad drehen](/File:Mouse_MMB_rotate.svg "Mausrad drehen")                                                                                                                                                                                                                       | [Mittlere Maustaste gedrückt halten](/File:Mouse_MMB_hold.svg "Mittlere Maustaste gedrückt halten")                                                                                                                                                                                                                                                                                                                                    | [Linke + rechte Maustaste gedrückt halten](/File:Mouse_LMB%2BRMB_hold.svg "Linke + rechte Maustaste gedrückt halten") oder Shift + [Mittlere Maustaste gedrückt halten](/File:Mouse_MMB_hold.svg "Mittlere Maustaste gedrückt halten") |
| CAD **(Standardeinstellung)**                                                | [Linke Maustaste drücken](/File:Mouse_LMB.svg "Linke Maustaste drücken")                               | [Mausrad drehen](/File:Mouse_MMB_rotate.svg "Mausrad drehen") oder Ctrl + Shift + [Rechte Maustaste drücken](/File:Mouse_RMB.svg "Rechte Maustaste drücken")                                                                                                                        | [Mittlere Maustaste gedrückt halten dann linke Maustaste drücken](/File:Mouse_MMB%2BLMB_hold.svg "Mittlere Maustaste gedrückt halten dann linke Maustaste drücken") oder [Mittlere Maustaste gedrückt halten dann rechte Maustaste drücken](/File:Mouse_MMB%2BRMB_hold.svg "Mittlere Maustaste gedrückt halten dann rechte Maustaste drücken") oder Shift + [Rechte Maustaste drücken](/File:Mouse_RMB.svg "Rechte Maustaste drücken") | [Mittlere Maustaste gedrückt halten](/File:Mouse_MMB_hold.svg "Mittlere Maustaste gedrückt halten") oder Ctrl + [Rechte Maustaste drücken](/File:Mouse_RMB.svg "Rechte Maustaste drücken")                                             |
| Gesten                                                                       | [Linke Maustaste drücken](/File:Mouse_LMB.svg "Linke Maustaste drücken")                               | [Mausrad drehen](/File:Mouse_MMB_rotate.svg "Mausrad drehen")                                                                                                                                                                                                                       | [Linke Maustaste gedrückt halten](/File:Mouse_LMB_hold.svg "Linke Maustaste gedrückt halten")                                                                                                                                                                                                                                                                                                                                          | [Rechte Maustaste gedrückt halten](/File:Mouse_RMB_hold.svg "Rechte Maustaste gedrückt halten")                                                                                                                                        |
| Maya-Gesten                                                                  | [Linke Maustaste drücken](/File:Mouse_LMB.svg "Linke Maustaste drücken")                               | [Mausrad drehen](/File:Mouse_MMB_rotate.svg "Mausrad drehen") oder Alt + [Rechte Maustaste gedrückt halten](/File:Mouse_RMB_hold.svg "Rechte Maustaste gedrückt halten")                                                                                                            | Alt + [Linke Maustaste gedrückt halten](/File:Mouse_LMB_hold.svg "Linke Maustaste gedrückt halten")                                                                                                                                                                                                                                                                                                                                    | Alt + [Mittlere Maustaste gedrückt halten](/File:Mouse_MMB_hold.svg "Mittlere Maustaste gedrückt halten")                                                                                                                              |
| OpenCascade                                                                  | [Linke Maustaste drücken](/File:Mouse_LMB.svg "Linke Maustaste drücken")                               | [Mausrad drehen](/File:Mouse_MMB_rotate.svg "Mausrad drehen") or Ctr + [Linke Maustaste gedrückt halten](/File:Mouse_LMB_hold.svg "Linke Maustaste gedrückt halten")                                                                                                                | [Mittlere Maustaste gedrückt halten](/File:Mouse_MMB%2BRMB_hold.svg "Mittlere Maustaste gedrückt halten") oder Ctr + [Rechte Maustaste gedrückt halten](/File:Mouse_RMB_hold.svg "Rechte Maustaste gedrückt halten")                                                                                                                                                                                                                   | [Mittlere Maustaste gedrückt halten](/File:Mouse_MMB_hold.svg "Mittlere Maustaste gedrückt halten") oder Ctr + [Mittlere Maustaste gedrückt halten](/File:Mouse_MMB_hold.svg "Mittlere Maustaste gedrückt halten")                     |
| OpenInventor                                                                 | Shift + [Linke Maustaste drücken](/File:Mouse_LMB.svg "Linke Maustaste drücken")                       | [Mausrad drehen](/File:Mouse_MMB_rotate.svg "Mausrad drehen") oder [Mittlere Maustaste gedrückt halten dann linke Maustaste drücken](/File:Mouse_MMB%2BLMB_hold.svg "Mittlere Maustaste gedrückt halten dann linke Maustaste drücken")                                              | [Linke Maustaste gedrückt halten](/File:Mouse_LMB_hold.svg "Linke Maustaste gedrückt halten")                                                                                                                                                                                                                                                                                                                                          | [Mittlere Maustaste gedrückt halten](/File:Mouse_MMB_hold.svg "Mittlere Maustaste gedrückt halten")                                                                                                                                    |
| OpenSCAD                                                                     | [Linke Maustaste drücken](/File:Mouse_LMB.svg "Linke Maustaste drücken")                               | [Mausrad drehen](/File:Mouse_MMB_rotate.svg "Mausrad drehen") oder [Mittlere Maustaste gedrückt halten](/File:Mouse_MMB_hold.svg "Mittlere Maustaste gedrückt halten") oder Shift + [Rechte Maustaste gedrückt halten](/File:Mouse_RMB_hold.svg "Rechte Maustaste gedrückt halten") | [Linke Maustaste gedrückt halten](/File:Mouse_LMB_hold.svg "Linke Maustaste gedrückt halten") oder [Mittlere Maustaste gedrückt halten dann rechte Maustaste drücken](/File:Mouse_MMB%2BRMB_hold.svg "Mittlere Maustaste gedrückt halten dann rechte Maustaste drücken")                                                                                                                                                               | [Rechte Maustaste gedrückt halten](/File:Mouse_RMB_hold.svg "Rechte Maustaste gedrückt halten")                                                                                                                                        |
| Revit                                                                        | [Linke Maustaste drücken](/File:Mouse_LMB.svg "Linke Maustaste drücken")                               | [Mausrad drehen](/File:Mouse_MMB_rotate.svg "Mausrad drehen")                                                                                                                                                                                                                       | [Mittlere Maustaste gedrückt halten dann rechte Maustaste drücken](/File:Mouse_MMB%2BRMB_hold.svg "Mittlere Maustaste gedrückt halten dann rechte Maustaste drücken") oder Shift + [Mittlere Maustaste gedrückt halten](/File:Mouse_MMB_hold.svg "Mittlere Maustaste gedrückt halten")                                                                                                                                                 | [Mittlere Maustaste gedrückt halten](/File:Mouse_MMB_hold.svg "Mittlere Maustaste gedrückt halten") oder [Linke + rechte Maustaste gedrückt halten](/File:Mouse_LMB%2BRMB_hold.svg "Linke + rechte Maustaste gedrückt halten")         |
| SolidWorks [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de") | [Linke Maustaste drücken](/File:Mouse_LMB.svg "Linke Maustaste drücken")                               | [Mausrad drehen](/File:Mouse_MMB_rotate.svg "Mausrad drehen") oder Shift + [Mittlere Maustaste gedrückt halten](/File:Mouse_MMB_hold.svg "Mittlere Maustaste gedrückt halten")                                                                                                      | [Mittlere Maustaste gedrückt halten](/File:Mouse_MMB_hold.svg "Mittlere Maustaste gedrückt halten")                                                                                                                                                                                                                                                                                                                                    | Ctrl + [Mittlere Maustaste gedrückt halten](/File:Mouse_MMB_hold.svg "Mittlere Maustaste gedrückt halten")                                                                                                                             |
| TinkerCAD                                                                    | [Linke Maustaste drücken](/File:Mouse_LMB.svg "Linke Maustaste drücken")                               | [Mausrad drehen](/File:Mouse_MMB_rotate.svg "Mausrad drehen")                                                                                                                                                                                                                       | [Rechte Maustaste gedrückt halten](/File:Mouse_RMB_hold.svg "Rechte Maustaste gedrückt halten")                                                                                                                                                                                                                                                                                                                                        | [Mittlere Maustaste gedrückt halten](/File:Mouse_MMB_hold.svg "Mittlere Maustaste gedrückt halten")                                                                                                                                    |
| Touchpad                                                                     | [Linke Touchpad- (Maus-) Taste drücken](/File:Touchpad_LB.svg "Linke Touchpad- (Maus-) Taste drücken") | Ctrl + Shift + [Touchpad- (Maus-) Zeiger](/File:Touchpad.svg "Touchpad- (Maus-) Zeiger")                                                                                                                                                                                            | Alt + [Touchpad- (Maus-) Zeiger](/File:Touchpad.svg "Touchpad- (Maus-) Zeiger") oder Shift + [Linke Touchpad- (Maus-) Taste gedrückt halten](/File:Touchpad_LB_hold.svg "Linke Touchpad- (Maus-) Taste gedrückt halten")                                                                                                                                                                                                               | Shift + [Touchpad- (Maus-) Zeiger](/File:Touchpad.svg "Touchpad- (Maus-) Zeiger")                                                                                                                                                      |

Beachte, dass ein Tooltip angezeigt wird, wenn ein Benutzer mit der Maus über das Navigationsstilmenü unten rechts auf dem Bildschirm fährt. Dieser Tooltip enthält eine kurze Beschreibung des hervorgehobenen Navigationsstils und bietet sofortige Hinweise zu seiner Verwendung.

![](/images/FreeCAD_022_NavigationHover.png)

#### Tastaturnavigation

Alternativ sind einige Bedienelemente der Tastatur immer verfügbar, unabhängig vom Navigationsstil:

- Strg + ![](/images/Ascii_043.svg) und Strg + ![](/images/Ascii_022.svg) oder Bild auf und Bild ab zum Vergrößern bzw. Verkleinern.
- Die Pfeiltasten, ![](/images/Ascii_017.svg)![](/images/Ascii_016.svg)![](/images/Ascii_030.svg)![](/images/Ascii_031.svg), um die Ansicht nach links/rechts und oben/unten zu schwenken.
- Shift + ![](/images/Ascii_017.svg) und Shift + ![](/images/Ascii_016.svg), um die Ansicht um 90 Grad zu drehen.
- Die Zifferntasten, ![](/images/Ascii_048.svg)![](/images/Ascii_049.svg)![](/images/Ascii_050.svg)![](/images/Ascii_051.svg)![](/images/Ascii_052.svg)![](/images/Ascii_053.svg)![](/images/Ascii_054.svg), für die sieben Standardansichten: ![](/images/Std_ViewIsometric.svg) [Isometric](/Std_ViewIsometric "Std ViewIsometric"), ![](/images/Std_ViewFront.svg) [Front](/Std_ViewFront "Std ViewFront"), ![](/images/Std_ViewTop.svg) [Oben](/Std_ViewTop "Std ViewTop"), ![](/images/Std_ViewRight.svg) [Rechts](/Std_ViewRight "Std ViewRight"), ![](/images/Std_ViewRear.svg) [Hinten](/Std_ViewRear "Std ViewRear"), ![](/images/Std_ViewBottom.svg) [Unten](/Std_ViewBottom "Std ViewBottom") und ![](/images/Std_ViewLeft.svg) [Links](/Std_ViewLeft "Std ViewLeft").
- VO stellt die Kamera in der ![](/images/View-isometric.svg) [Orthographischen Ansicht](/Std_OrthographicCamera "Std OrthographicCamera") ein.
- Während VP es in ![](/images/View-perspective.svg) [Perspektivansicht](/Std_PerspectiveCamera "Std PerspectiveCamera") einstellt.
- Mit Strg kannst du mehr als ein Objekt oder Element auswählen.

Diese Steuerelemente sind auch über das [Menü Ansicht](/Std_View_Menu/de "Std View Menu/de") und einige über die Symbolleiste Ansicht verfügbar.

#### Verwenden des Navigationswürfels

In der Grundeinstellung befindet sich oben rechts in der 3D-Ansicht ein [Navigationswürfel](/Navigation_Cube/de "Navigation Cube/de"). Dieser kann zum Ändern der Ansicht verwendet werden.

![](/images/FreeCAD_022_Cube.png)

Wenn du auf eine Fläche des Würfels klickst, wird die Ansicht auf diese Fläche umgeschaltet. Wenn du auf einen der vier dreieckigen Pfeile klickst, wird die Ansicht um 45 Grad in die angegebene Richtung gedreht. Wenn du auf einen der beiden gebogenen Pfeile klickst, wird die Ansicht um 45 Grad in die angegebene Richtung um eine auf dich zeigende Linie gedreht. Wenn du auf die runde Schaltfläche in der oberen rechten Ecke des Würfels klickst, wird die Ansicht um 180 Grad um die vertikale Ansichtsachse gedreht.

Unten rechts im Navigationswürfel befindet sich ein kleiner Miniwürfel, der ein Dropdown-Menü mit mehreren Optionen aktiviert, darunter eine Option zum Bewegen des Würfels, mit der der Würfel durch Ziehen vorübergehend an eine andere Position verschoben werden kann.

### Objekte anwählen

Objekte in der 3D-Ansicht können je nach Navigationsstil (oben beschrieben) durch Anklicken mit der entsprechenden Maustaste ausgewählt werden.

- Mit einem einzigen Klick werden das Objekt und eins seiner Unterelemente (Kante, Fläche, Knoten) ausgewählt.
- Ein Doppelklick wählt das Objekt und alle seine Unterelemente aus.
- Es kann mehr als ein Objekt und mehr als ein Unterelement desselben oder verschiedener Objekte ausgewählt werden, indem die STRG-Taste gedrückt wird.
- Wird mit dem Auswahlknopf auf einen leeren Bereich der 3D-Ansicht geklickt, wird alles abgewählt.

Ein Paneel namens "Auswahlansicht", das im Menü "Ansicht" verfügbar ist, kann ebenfalls eingeschaltet werden; es zeigt dir, was gerade ausgewählt ist:

![](/images/Selection_view.jpg)

Du kannst auch die Auswahlansicht verwenden, um Objekte durch die Suche nach einem bestimmten Objekt auszuwählen.

**Weiterlesen**

- [Die FreeCAD Navigationsstile](/Mouse_navigation/de "Mouse navigation/de")
- [Navigationswürfel](/Navigation_Cube/de "Navigation Cube/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:Navigating_in_the_3D_view/de&oldid=1552341>"
