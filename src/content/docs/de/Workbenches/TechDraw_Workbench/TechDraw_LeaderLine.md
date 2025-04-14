---
title: TechDraw Hinweislinie
---

|                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw Hinweislinie                                                                                                                                                                                                                                      |
| Menüeintrag                                                                                                                                                                                                                                                |
| TechDraw → Linien hinzufügen → Hinweislinie zur Ansicht hinzufügen                                                                                                                                                                                         |
| Arbeitsbereich                                                                                                                                                                                                                                             |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                                                                                                                                                 |
| Standardtastenkürzel                                                                                                                                                                                                                                       |
| _Keiner_                                                                                                                                                                                                                                                   |
| Eingeführt in Version                                                                                                                                                                                                                                      |
| 0.19                                                                                                                                                                                                                                                       |
| Siehe auch                                                                                                                                                                                                                                                 |
| [TechDraw FormatierteBeschriftung](/TechDraw_RichTextAnnotation/de "TechDraw RichTextAnnotation/de"), [TechDraw Schweißsymbol](/TechDraw_WeldSymbol/de "TechDraw WeldSymbol/de"), [TechDraw Liniengruppen](/TechDraw_LineGroup/de "TechDraw LineGroup/de") |
|                                                                                                                                                                                                                                                            |

## Beschreibung

Das Werkzeug **TechDraw Hinweislinie** fügt einer Ansicht eine Hinweislinie hinzu. Andere Beschriftungsobjekte (wie z.B. die [FormatierteTextAnmerkung](/TechDraw_RichTextAnnotation/de "TechDraw RichTextAnnotation/de")) können mit der Hinweislinie verbunden werden, um komplexe Beschriftungen zusammenzustellen.

![](/images/TechDraw_LeaderLine_sample.png)

Hinweislinie zur Ansicht View hinzugefügt

## Anwendung, Erstellen

1. Eine Ansicht auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/TechDraw_LeaderLine.svg) Hinweislinie zur Ansicht hinzufügen drücken.
   - Den Menüeintrag **TechDraw → Page → ![](/images/TechDraw_LeaderLine.svg) Hinweislinie zur Ansicht hinzufügen** auswählen.
3. Ein Dialog wird geöffnet.
4. Die Schaltfläche Punkte auswählen drücken
5. Den ersten Punkt auf dem Zeichnungsblatt auswählen, um den Startpunkt der Linie festzulegen.
6. Den nächsten Punkt auf dem Zeichnungsblatt auswählen. Wird Ctrl gedrückt gehalten, wird auf Winkeln eingerastet, die ein Vielfaches von 22.5° sind. Wahlweise kann anstatt eines einzelnen Klicks ein Doppelklick zum Beenden der Punkteingabe verwendet werden.
7. Wahlweise weitere Punkte auswählen.
8. Wurde der Punkt nicht mit Doppelklick ausgewählt: Die Schaltfläche Punkte speichern drücken.
9. Wahlweise **Startsymbol**, **Endsymbol**, **Farbe**, **Breite** und **Stil** der Hinweislinie anpassen. Siehe [Eigenschaften](#Eigenschaften) für weitere Informationen.
10. Die Schaltfläche OK drücken.

## Anwendung, Bearbeiten

1. Eine Hinweislinie in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt anklicken.
2. Ein Aufgaben-Bereich wird geöffnet.
3. Zum Bearbeiten der Punkte:
   1. Die Schaltfläche Punkte bearbeiten drücken.
   2. Die Hinweislinie wird mit temporären Punkten markiert.
   3. Einen oder mehrere Knoten auf eine neue Position ziehen.
   4. Die Schaltfläche Save changes drücken.
4. Wahlweise **Startsymbol**, **Endsymbol**, **Farbe**, **Breite** und **Stil** der Hinweislinie anpassen. Siehe [Eigenschaften](#Eigenschaften) für weitere Informationen.
5. Die Schaltfläche OK drücken.

## Hinweise

- Einer vorhandenen Hinweislinie können keine Punkte hinzugefügt oder von ihr entfernt werden.
- Wurden während der Erstellung der Hinweislinie keine Punkte festgelegt, wird eine kurze Linie in der Mitte der Ansicht positioniert. Es gibt keine Möglichkeit so eine Linie zu reparieren; sie sollte gelöscht werden.
- Standardmäßig ist die [Einstellung](/TechDraw_Preferences/de#Anmerkung "TechDraw Preferences/de") **Hinweislinie automatisch horizontal** aktiviert. Das bedeutet, dass der letzte Abschnitt neuer Hinweislinien horizontal ausgerichtet wird. Ist nur ein Abschnitt vorhanden, ist das Ergebnis eine einzelne horizontale Linie.

- Für vorhandene Hinweislinien kann diese automatische horizontale Ausrichtung ausgeschaltet werden, indem ihre Daten-Eigenschaft**Auto Horizontal** angepasst wird.

## Eigenschaften

### Daten

Basis

- Daten-Eigenschaft**Start Symbol** (`Enumeration`): Das Symbol am Anfang der Hinweislinie. Optionen (unter Einstellungen): ![](/images/Arrowfilled.svg) Filled Arrow (Gefüllte Pfeilspitze), ![](/images/Arrowopen.svg) Open Arrow (Offene Pfeilspitze), ![](/images/Arrowtick.svg) Tick (Schrägstrich), ![](/images/Arrowdot.svg) Dot (Punkt), ![](/images/Arrowopendot.svg) Open Circle (Ring), ![](/images/Arrowfork.svg) Fork (Gabel), ![](/images/Arrowpyramid.svg) Filled Triangle (Gefülltes Dreieck), None (Kein).
- Daten-Eigenschaft**End Symbol** (`Enumeration`): Das Symbol am Ende der Hinweislinie. Wie vorher.
- Daten-Eigenschaft**X** (`Distance`): Die X-Koordinate der Hinweislinie relativ zur Ansicht.
- Daten-Eigenschaft**Y** (`Distance`): Die Y-Koordinate der Hinweislinie relativ zur Ansicht.

Leader

- Daten-Eigenschaft**Leader Parent** (`Link`): Ansicht in der die Hinweislinie verankert ist.
- Daten-Eigenschaft**Way Points** (`VectorList`): Die Punkte der Hinweislinie.
- Daten-Eigenschaft**Scalable** (`Bool`): Legt fest, ob die Hinweislinie synchron zur Daten-Eigenschaft**Leader Parent** skaliert wird.
- Daten-Eigenschaft**Auto Horizontal** (`Bool`): Legt fest, ob, der letzte Abschnitt der Hinweislinie horizontal verlaufen muss.

### Ansicht

Basis

- Ansicht-Eigenschaft**Keep Label** (`Bool`): Nicht verwendet.
- Ansicht-Eigenschaft**Stack Order** (`Integer`): Angabe der Lage über oder unter anderen Zeichnungsobjekten. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

Line Format

- Ansicht-Eigenschaft**Color** (`Color`): Die Farbe der Hinweislinie.
- Ansicht-Eigenschaft**Line Style** (`Enumeration`): Der Stil der Hinweislinie. Optionen: NoLine (Keine), ![](/images/Continuous-line.svg) Continuous (Volllinie), ![](/images/Dash-line.svg) Dash (Strichlinie), ![](/images/Dot-line.svg) Dot (Punktlinie), ![](/images/DashDot-line.svg) DashDot (Strich-Punkt-Linie), ![Length](/images/DashDotDot-line.svg) DashDotDot (Strich-Zweipunkt-Linie).
- Ansicht-Eigenschaft**Line Width** (`Length`): Strichstarke der Hinweislinie.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Hinweislinie kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen verwendet werden:

```
myPage = FreeCAD.ActiveDocument().Page
myBase = FreeCAD.ActiveDocument().View
leaderObj = FreeCAD.ActiveDocument.addObject('TechDraw::DrawLeaderLine','DrawLeaderLine')
FreeCAD.activeDocument().myPage.addView(leaderObj)
FreeCAD.activeDocument().leaderObj.LeaderParent = myBase
#first waypoint is always (0,0,0)
#rest of waypoints are positions relative to (0,0,0)
leaderObj.WayPoints = [p0,p1,p2]
leaderObj.X = 5
leaderObj.Y = 5

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_LeaderLine/de&oldid=1551508>"
