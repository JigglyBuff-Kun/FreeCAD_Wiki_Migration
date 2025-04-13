---
title: Std Darstellung
---

|                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Std Darstellung                                                                                                                                                                          |
| Menüeintrag                                                                                                                                                                              |
| Ansicht → Darstellung…                                                                                                                                                                   |
| Arbeitsbereich                                                                                                                                                                           |
| [Material](/Material_Workbench/de "Material Workbench/de"), [Part](/Part_Workbench/de "Part Workbench/de"), [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") und weitere |
| Standardtastenkürzel                                                                                                                                                                     |
| Ctrl+D                                                                                                                                                                                   |
| Eingeführt in Version                                                                                                                                                                    |
| -                                                                                                                                                                                        |
| Siehe auch                                                                                                                                                                               |
| [Std SetMaterial](/Std_SetMaterial/de "Std SetMaterial/de"), [Part FarbeProFläche](/Part_ColorPerFace/de "Part ColorPerFace/de")                                                         |
|                                                                                                                                                                                          |

## Beschreibung

Das Werkzeug **Std Darstellung** legt die Anzeigeeigenschaften der ausgewählten Objekte fest.

Diese Seite wurde für Version 1.0 aktualisiert.

![](/src/assets/images/Std_SetAppearance_Taskpanel.png)

Der Aufgabenbereich Anzeigeeigenschaften

## Anwendung

1. Ein oder mehrere Objekt(e) auswählen.
2. Es gibt mehrere Möglichkeiten das Werkzeug aufzurufen:
   - Den Menüeintrag **Ansicht → ![](/src/assets/images/Std_SetAppearance.svg) Darstellung...** im Hauptmenü auswählen.
   - Den Menüeintrag **![](/src/assets/images/Std_SetAppearance.svg) Darstellung...** im Kontextmenü der [Baumansicht](/Tree_view "Tree view") (siehe Screenshot) oder im Kontextmenü der [3D-Ansicht](/3D_view "3D view") auswählen.
   - Das Tastaturkürzel Ctrl+D.
3. Das Aufgaben-Fenster **Anzeigeeigenschaften** wird geöffnet. Siehe [Optionen](#Optionen).
4. Eine oder mehrere Anzeigeeigenschaften ändern.
5. Die Objekte werden sofort aktualisiert.
6. Wahlweise weitere Objekte auswählen, deren Anzeigeeigenschaften geändert werden sollen.
7. Schaltfläche Schließen drücken, um den Aufgabenbereich zu schließen und den Befehl abzuschließen.

## Optionen

### Ansichtsmodus

- Einen Wert für die Ansicht-Eigenschaft**Display Mode** (Anzeigemodus) aus der Ausklappliste auswählen. Die vorhandenen Optionen sind: `Flat lines`, `Shaded` (nicht für [Draft](/Draft_Workbench/de "Draft Workbench/de")-Objekte), `Wireframe` und `Points`. Siehe Befehl [Std Darstellungsart](/Std_DrawStyle/de "Std DrawStyle/de") für weitere Informationen.

### Werkstoff

- Ein Material in der Liste auswählen.
  1. Wahlweise eine Kategorie in der Ausklappliste unter der Materialliste auswählen, um die Materialien zu filtern. Die vorhandenen Kategorien sind `Basic Appearance`, `Texture Appearance` (solche Materialien stehen noch nicht zur Verfügung) und `Alle Materials`.
  2. Wahlweise die Schaltfläche Launch editor drücken, um den [Material-Editor](/Material_Edit/de "Material Edit/de") zu starten.
- **Custom appearance**: Die Schaltfläche ... drücken, um das Erscheinungsbild des Materials zu überschreiben. Das Dialogfenster **Material properties** wird geöffnet. Siehe [Part FarbePro Fläche](/Part_ColorPerFace/de#Anwendung "Part ColorPerFace/de").
- **Farb-Plot:** Wird derzeit nicht unterstützt.
- _Linienfarbe:'_ Legt die Ansicht-Eigenschaft**Line Color** fest. Die Schaltfläche drücken, um den Farbauswahldialog zu öffnen.
- **Punktfarbe:** Legt die Ansicht-Eigenschaft**Point Color**fest. Die Schaltfläche drücken, um den Farbauswahldialog zu öffnen.

### Anzeige

- **Punktgröße:** Legt die Ansicht-Eigenschaft**Point Size** (in Pixeln) fest.
- **Linienbreite:** Legt die Ansicht-Eigenschaft**Line Width** (in Pixeln) fest.
- **Transparenz:** Legt die Ansicht-Eigenschaft**Transparency** (in Prozent) fest. 0% ist opak (undurchsichtig), 100% ist vollständig transparent.
- **Linientransparenz:** Wird derzeit nicht unterstützt.

## Hinweise

- Die genannten Ansicht-Eigenschaften können auch im [Eigenschafteneditor](/Property_editor/de "Property editor/de") geändert werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SetAppearance/de&oldid=1540944>"
