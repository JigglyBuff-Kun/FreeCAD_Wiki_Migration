---
title: Part FormUmkehren
---

|                                                |
| ---------------------------------------------- |
| Part FormUmkehren                              |
| Menüeintrag                                    |
| Part → Formen umkehren                         |
| Arbeitsbereich                                 |
| [Part](/Part_Workbench/de "Part Workbench/de") |
| Standardtastenkürzel                           |
| _Keiner_                                       |
| Eingeführt in Version                          |
| -                                              |
| Siehe auch                                     |
| _Keiner_                                       |
|                                                |

## Beschreibung

Der Befehl ![](/images/Part_ReverseShape.svg) **Part FormUmkehren** erstellt aus ausgewählten Objekten parametrische Kopien mit umgekehrten Flächennormalen.

## Anwendung

1. Eine oder mehrere Formen auswählen.
2. Den Menüeintrag **Part → ![](/images/Part_ReverseShape.svg) Formen umkehren** auswählen.
3. Zu jedem ausgewählten Objekt wird eine umgekehrte Form erstellt.

## Hinweise

- [App Link](/App_Link "App Link")-Objekte, die mit dem passenden Objekttyp verbunden sind und [App Part](/App_Part "App Part")-Behälter mit den passenden, sichtbaren Objekten darin, können ebenfalls als Quellobjekte verwendet werden. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")
- Die Auswirkung der Anweisung kann man sehen, wenn die Ansicht**Lighting**eigenschaft der umgekehrten Form nach `On side` und gegebenenfalls **Bearbeiten → Einstellungen... → Anzeige → 3D-Viewer → Rendern → Farbe der Hintergrundbeleuchtung** geändert wird.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Part ReverseShape-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgende zusätzliche Eigenschaft:

### Daten

Reverse

- Daten**Source** (`Link`): Gibt die verknüpfte Ausgangsform an.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ReverseShape/de&oldid=1471986>"
