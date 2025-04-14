---
title: TechDraw Ausschnittsgruppe
---

|                                                            |
| ---------------------------------------------------------- |
| TechDraw Ausschnittsgruppe                                 |
| Menüeintrag                                                |
| TechDraw → TechDraw Ansichten → Ausschnittsgruppe einfügen |
| Arbeitsbereich                                             |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") |
| Standardtastenkürzel                                       |
| _Keiner_                                                   |
| Eingeführt in Version                                      |
| -                                                          |
| Siehe auch                                                 |
| _Keiner_                                                   |
|                                                            |

## Beschreibung

Das Werkzeug **TechDraw Ausschnittsgruppe** erstellt ein Ausschnittfenster, das Ansichten enthalten kann.

![](/images/TechDraw_Clipview.png)

Ausschnittfenster, das verschiedene vorhandene Ansichten beschneidet

## Anwendung

1. # Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind: Wahlweise das gewünschte Zeichnungsblatt durch Auswahl in der [Baumansicht](/Tree_view/de "Tree view/de") aktivieren.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/TechDraw_ClipGroup.svg) Ausschnittsgruppe einfügen drücken.
   - Den Menüeintrag **TechDraw → TechDraw Ausschnittsgruppe → ![](/images/TechDraw_ClipGroup.svg) Ausschnittsgruppe einfügen** auswählen.
3. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind und noch kein Blatt aktiviert wurde, wird das Dialogfeld **Blattauswahl** geöffnet:
   1. Das gewünschte Blatt auswählen.
   2. Die Schaltfläche OK drücken.
4. Ansichten können durch Ziehen und Ablegen in der Baumansicht der Ausschnittsgruppe hinzugefügt und aus ihr entfernt werden. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Eine Ausschnittsgruppe, oder formal ein `TechDraw::DrawViewClip`-Objekt, besitzt die gemeinsamen [Eigenschaften](/TechDraw_View/de#Eigenschaften_der_Bauteilansicht "TechDraw View/de") aller Ansichtsarten. Sie enthält außerdem die folgenden Eigenschaften:

### Daten

Clip Group

- Daten-Eigenschaft**Width** (`Length`): Die Breite des Ausschnittfensters in Einheiten.
- Daten-Eigenschaft**Height** (`Length`): Die Höhe des Ausschnittfensters in Einheiten.
- Daten-Eigenschaft**ShowFrame** (`Bool`): Wenn `true`, wird ein Rahmen um das Ausschnittfenster herum dargestellt.
- Daten-Eigenschaft**Views** (`LinkList`): Die im Ausschnittfenster enthaltenen Ansichten.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ClipGroup/de&oldid=1490732>"
