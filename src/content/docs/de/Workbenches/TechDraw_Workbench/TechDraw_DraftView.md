---
title: TechDraw DraftAnsicht
---

|                                                                                                               |
| ------------------------------------------------------------------------------------------------------------- |
| TechDraw DraftAnsicht                                                                                         |
| Menüeintrag                                                                                                   |
| TechDraw → Ansichten von anderen Arbeitsbereichen → Objekt des Arbeitsbereichs Draft einfügen                 |
| Arbeitsbereich                                                                                                |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de"), [Draft](/Draft_Workbench/de "Draft Workbench/de") |
| Standardtastenkürzel                                                                                          |
| _Keiner_                                                                                                      |
| Eingeführt in Version                                                                                         |
| -                                                                                                             |
| Siehe auch                                                                                                    |
| [TechDraw ArchAnsicht](/TechDraw_ArchView/de "TechDraw ArchView/de")                                          |
|                                                                                                               |

## Beschreibung

Das Werkzeug **TechDraw DraftAnsicht** fügt eine Ansicht eines ausgewählten [Part](/Part_Workbench/de "Part Workbench/de")-basierten Objekts oder eines Gruppenobjekts in ein Zeichnungsblatt ein. Anders als beim Standardwerkzeug ![](/images/TechDraw_View.svg) [Ansicht](/TechDraw_View/de "TechDraw View/de"), werden die mit diesem Werkzeug erstellten Ansichten mit dem Arbeitsbereich ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/de "Draft Workbench/de") bearbeitet und sind besonders für die Darstellung von 2D-Objekten entwickelt. Siehe [Hinweise](#Hinweise).

![](/images/TechDraw_DraftView_example.png)

Draft-Elemente wie Kreise und Anordnungen importiert in ein TechDraw-Zeichnungsblatt

## Anwendung

1. Wahlweise die [3D-Ansicht](/3D_view/de "3D view/de") drehen. Die Kameraausrichtung der [3D-Ansicht](/3D_view/de "3D view/de") legt den Startwert der Daten-Eigenschaft**Direction** der Ansicht fest.
2. Ein oder mehrere Objekte in der [3D-Ansicht](/3D_view/de "3D view/de") oder der [Baumansicht](/Tree_view/de "Tree view/de") auswählen. Für jedes Objekt wird eine separate Ansicht erstellt.
3. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind: Wahlweise das gewünschte Zeichnungsblatt durch Auswahl in der [Baumansicht](/Tree_view/de "Tree view/de") aktivieren.
4. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/TechDraw_DraftView.svg) Objekt des Arbeitsbereichs Draft einfügen drücken.
   - Den Menüeintrag **TechDraw → Views From Other Workbenches → ![](/images/TechDraw_DraftView.svg) Objekt des Arbeitsbereichs Draft einfügen** auswählen.
5. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind und noch kein Blatt aktiviert wurde, wird das Dialogfeld **Blattauswahl** geöffnet:
   1. Das gewünschte Blatt auswählen.
   2. Die Schaltfläche OK drücken.

## Optionen

- Das Erstellen einer Draft-Ansicht (DraftView-Objekt) von einer Ebene verwendet rekursiv alle Objekte, die auf dieser Ebene gefunden wurden. Die Ansicht wird automatisch aktualisiert, wenn sich der Inhalt der Ebene ändert.
- Es werden keine verdeckten Kanten entfernt. Jede Fläche, die in dem (den) verwendeten Objekt(en) gefunden wird, wird einfach entlang des Richtungsvektors projiziert, es werden keine besonderen Maßnahmen ergriffen, wenn sich Flächen überlappen.
- Die Draft-Ansicht unterstützt auch alle Draft-Objekte, die nicht auf Bauteilen basierten, wie z.B. Maße und Texte.
- Farbe, Linienbreite und Linienart können in den Eigenschaften angegeben werden. Linienarten können durch direkte Angabe eines [stroke-dasharray](https://www.w3.org/TR/SVG/painting.html#StrokeProperties) Wertes, wie z.B. 3,5 fein abgestimmt werden.
- Projizierte Flächen werden mit der Flächenfarbe gefüllt

## Hinweise

Die Draft-Ansicht wird innerhalb des Arbeitsbereiches [Draft](/Draft_Workbench/de "Draft Workbench/de") gerendert, daher hat TechDraw nur eingeschränkte Kontrolle über ihr Erscheinungsbild. Man muss möglicherweise Änderungen innerhalb von Draft vornehmen, um die gewünschte Darstellung zu erhalten.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Eine Draft-Ansicht, oder formal ein `TechDraw::DrawViewDraft`-Objekt, besitzt die gemeinsamen [Eigenschaften](/TechDraw_View/de#Eigenschaften_der_Bauteilansicht "TechDraw View/de") aller Ansichtsarten. Sie enthält außerdem die folgenden Eigenschaften:

### Daten

Draft view

- Daten-Eigenschaft**Source** (`Link`): Das Draft-Objekt, das angezeigt werden soll.
- Daten-Eigenschaft**Line Width** (`Float`): Die Breite der Linien, unabhängig vom Maßstab.
- Daten-Eigenschaft**Font Size** (`Float`): Die Schrifthöhe aller Texte in dieser Ansicht (Texte und Maße).
- Daten-Eigenschaft**Direction** (`Vector`): Die zu verwendende Projektionsrichtung.
- Daten-Eigenschaft**Color** (`Color`): Die Linienfarbe.
- Daten-Eigenschaft**Line Style** (`String`): Eine Linienart, die für diese Ansicht zu verwenden ist. Kann `Solid`, `Dashed`, `Dashdot`, `Dot` (für Voll-, Strich-, Strich-Punkt-, Punktlinie) oder ein SVG-Linienmuster wie `0.20,0.20` sein..
- Daten-Eigenschaft**Line Spacing** (`Float`): Der zu verwendende Zeilenabstand bei mehrzeiligen Texten.
- Daten-Eigenschaft**Override Style** (`Bool`): Wenn `true`, überschreiben Linienfarbe, Linienbreite und Linienart dieser Ansicht jene des gerenderten Objekts.

Drawing view

- Daten-Eigenschaft (versteckt)**Symbol** (`String`): Der SVG-Code, der dieses Symbol definiert.
- Daten-Eigenschaft (versteckt)**Editable Texts** (`StringList`): Ersatzwert für bearbeitbare Zeichenfolgen in diesem Symbol.
- Daten-Eigenschaft**Owner** (`Link`): Element dem das Symbol zugeordnet ist. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug DraftAnsicht kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit folgenden Funktionen verwendet werden:

```
dv = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewDraft','TestDraft')
dv.Source = myDraftbject
rc = page.addView(dv)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_DraftView/de&oldid=1500191>"
