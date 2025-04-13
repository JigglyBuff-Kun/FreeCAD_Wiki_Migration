---
title: TechDraw ArchAnsicht
---

|                                                                                                         |
| ------------------------------------------------------------------------------------------------------- |
| TechDraw ArchAnsicht                                                                                    |
| Menüeintrag                                                                                             |
| TechDraw→ Views From Other Workbenches → Objekt des Arbeitsbereichs BIM einfügen                        |
| Arbeitsbereich                                                                                          |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel                                                                                    |
| _Keiner_                                                                                                |
| Eingeführt in Version                                                                                   |
| -                                                                                                       |
| Siehe auch                                                                                              |
| [Arch Schnittebene](/Arch_SectionPlane/de "Arch SectionPlane/de")                                       |
|                                                                                                         |

## Beschreibung

Das Werkzeug **TechDraw ArchAnsicht** fügt eine Arch-Ansicht, eine Ansicht einer ![](/src/assets/images/Arch_SectionPlane.svg) [Arch Schnittebene](/Arch_SectionPlane/de "Arch SectionPlane/de"), auf einem [TechDraw Zeichnungsblatt](/TechDraw_PageDefault/de "TechDraw PageDefault/de") ein.

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Auch das Werkzeug [TechDraw Ansicht](/TechDraw_View/de "TechDraw View/de") kann eine Arch-Ansicht erstellen.

![](/src/assets/images/TechDraw_Arch_example.jpg)

## Anwendung

1. Eine Arch-Schnittebene in der [3D-Ansicht](/3D_view/de "3D view/de") oder der [Baumansicht](/Tree_view/de "Tree view/de") auswählen.
2. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind: Wahlweise das gewünschte Zeichnungsblatt durch Auswahl in der [Baumansicht](/Tree_view/de "Tree view/de") zur Auswahl hinzufügen.
   - Den Menüeintrag **TechDraw → Ansichten von anderen Arbeitsbereichen → ![](/src/assets/images/TechDraw_ArchView.svg) Objekt des Arbeitsbereichs BIM einfügen** auswählen.
3. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind und kein Blatt im [Hauptansichtsbereich](/Main_view_area/de "Main view area/de") angezeigt wird und außerdem noch kein Blatt aktiviert wurde, wird das Dialogfenster **Blattauswahl** geöffnet:
   1. Das gewünschte Blatt auswählen.
   2. Die Schaltfläche OK drücken.

## Optionen

- Die Arch-Ansicht wird durch den Arbeitsbereich [BIM](/BIM_Workbench/de "BIM Workbench/de") gerendert.
- [Draft-Maße](/Draft_Snap_Dimensions/de "Draft Snap Dimensions/de"), [Draft-Texte](/Draft_Text/de "Draft Text/de") und jedes andere 2D-Objekt (Skizze oder Zeichnung), das von der Schnittebene berücksichtigt wird, wird "so wie es ist" (keine Schnitt- oder verdeckte Linien) über der Festkörpergeometrie gerendert.
- Das Volumen von [Arch-Räumen](/Arch_Space/de "Arch Space/de") wird nicht gerendert, nur die Beschriftung wird gerendert
- Schnittlinien, projizierte Linien (wenn die Eigenschaft Show Hidden auf True gesetzt ist) und 2D-Linien darüber können mit unterschiedlichen Linienbreiten gerendert werden. Dies kann in den Arch-Einstellungen konfiguriert werden.
- Die Arch-Ansicht verfügt über zwei Rendermodi:
  - Wireframe, der die OpenCasCade-Algorithmen des Arbeitsbereichs [TechDraw](/TechDraw_Workbench "TechDraw Workbench") verwendet, ist schnell und erzeugt nur Linien (keine Flächenfüllung möglich).
  - Solid (Festkörper), der auf dem [Maleralgorithmus](https://de.wikipedia.org/wiki/Maleralgorithmus) basiert und in der Lage ist, Flächen mit ihrer Formfarbe gefüllt darzustellen. Er ist jedoch viel langsamer und kann in vielen Situationen versagen.

: Die Abbildung unten veranschaulicht den Unterschied zwischen den beiden Rendermodi:

: ![](/src/assets/images/TechDraw_Arch_rendering.jpg)

- Nur die Basislinie von [Arch-Rohren](/Arch_Pipe/de "Arch Pipe/de") wird gerendert, nicht das volle Volumen des Rohrs:

: ![](/src/assets/images/TechDraw_Arch_piping.jpg)

## Hinweise

Die Arch-Ansicht wird innerhalb des Arbeitsbereichs [BIM](/BIM_Workbench/de "BIM Workbench/de") gerendert, daher hat TechDraw nur begrenzte Kontrolle über ihr Erscheinungsbild. Möglicherweise müssen Änderungen innerhalb von Arch vorgenommen werden, um die gewünschte Darstellung zu erhalten.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Eine Arch-Ansicht, oder formal ein `TechDraw::DrawViewArch`-Objekt, besitzt die gemeinsamen [Eigenschaften](/TechDraw_View/de#Eigenschaften_der_Bauteilansicht "TechDraw View/de") aller Ansichtsarten. Sie enthält außerdem die folgenden Eigenschaften:

### Daten

Arch view

- Daten-Eigenschaft**Source** (`Link`): Das anzuzeigende Objekt der Schnittebene.
- Daten-Eigenschaft**All On** (`Bool`): Gibt an, ob ausgeblendete Objekte angezeigt werden sollen oder nicht. Wenn `false`, werden nur Objekte gerendert, die in der 3D-Ansicht sichtbar sind.
- Daten-Eigenschaft**Render Mode** (`Enumeration`): Der zu verwendende Rendermodus, `Solid` oder `Wireframe`.
- Daten-Eigenschaft**Fill Spaces** (`Bool`): Wenn `true`, werden Arch-Räume als farbige Fläche dargestellt.
- Daten-Eigenschaft**Show Hidden** (`Bool`): Gibt an, ob die verdeckte Geometrie (der Teil der Geometrie, der hinter der Schnittebene liegt) angezeigt wird oder nicht. Sie wird mit einer Strichlinie dargestellt, die in den Arch-Einstellungen konfiguriert werden kann.
- Daten-Eigenschaft**Show Fill** (`Bool`): Gibt an, ob geschnittene Bereiche mit einer grauen Farbe gefüllt werden sollen oder nicht.
- Daten-Eigenschaft**Line Width** (`Float`): Die Breite der Hauptlinien. Die Breitenverhältnisse von Schnittlinien, projizierte und 2D-Linien können in den Arch-Einstellungen konfiguriert werden.
- Daten-Eigenschaft**Font Size** (`Float`): Die Schriftgröße aller Texte in dieser Ansicht.
- Daten-Eigenschaft**Cut Line Width** (`Float`): Linienbreite der Schnittlinien in dieser Ansicht.
- Daten-Eigenschaft**Join Arch** (`Bool`): Wenn `true`, werden Wände und Strukturen aus dem gleichen Material vereinigt.
- Daten-Eigenschaft**Line Spacing** (`Float`): Der Zeilenabstand, der für mehrzeiligen Text verwendet wird. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Drawing view

- Daten-Eigenschaft (versteckt)**Symbol** (`String`): Der SVG-Code, der dieses Zeichnungselement definiert.
- Daten-Eigenschaft (versteckt)**Editable Texts** (`StringList`): Ersatzwert für bearbeitbare Zeichenfolgen in diesem Zeichnungselement.
- Daten-Eigenschaft**Owner** (`Link`): Element dem dieses Zeichnungselement zugeordnet ist. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug ArchAnsicht kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen verwendet werden:

```
dv = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewArch','TestArch')
dv.Source = mySectionPlane
rc = page.addView(dv)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ArchView/de&oldid=1523080>"
