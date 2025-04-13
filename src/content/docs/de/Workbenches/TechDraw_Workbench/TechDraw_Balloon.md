---
title: TechDraw Hinweisfeld
---

|                                                                           |
| ------------------------------------------------------------------------- |
| TechDraw Hinweisfeld                                                      |
| Menüeintrag                                                               |
| TechDraw → Anmerkungen → Hinweisfeld einfügen                             |
| Arbeitsbereich                                                            |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                |
| Standardtastenkürzel                                                      |
| _Keiner_                                                                  |
| Eingeführt in Version                                                     |
| 0.19                                                                      |
| Siehe auch                                                                |
| [TechDraw Beschriftung](/TechDraw_Annotation/de "TechDraw Annotation/de") |
|                                                                           |

## Beschreibung

Das Werkzeug **TechDraw Hinweisfeld** kann einer Zeichnung Hinweisfelder mit zugehöriger Hinweislinie hinzufügen. (Voreingestellt ist ein kreisförmiges Hinweisfeld, das u.a. zur Kennzeichnung der Elemente einer Stückliste dienen kann)

![](/src/assets/images/Techdraw_balloon.png)

## Anwendung

1. Eins der folgenden auswählen:
   - Eine Ansicht (auf dem Blatt oder in der [Baumansicht](/Tree_view/de "Tree view/de")).
   - Einen Knoten in einer Ansicht.
   - Eine Kante in einer Ansicht.
   - Einen abgeschlossenen Bereich in einer Ansicht.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_Balloon.svg) Hinweisfeld einfügen drücken.
   - Den Menüeintrag **TechDraw → Anmerkungen → ![](/src/assets/images/TechDraw_Balloon.svg) Hinweisfeld einfügen** auswählen.
3. Wenn eine Ansicht oder ein Bereich ausgewählt wurde:
   1. Der Mauszeiger wird mit dem Symbol dieses Werkzeuges angezeigt.
   2. Einen Punkt auf dem Blatt angeklicken, um den Ursprung der Hinweisfeldes (Startpunkt der Hinweislinie) festzulegen.

Um ein Hinweisfeld zu verschieben, positioniert man den Mauszeiger über seiner Mitte, drückt und hält die linke Maustaste und zieht die Maus.

Um die Eigenschaften eines Hinweisfeldes zu ändern, wählt man es per Doppelklick auf dem Blatt oder in der [Baumansicht](/Tree_view/de "Tree view/de") aus. Dies Öffnet den Aufgabenbereich des Hinweisfeldes.

**Hinweis:** Die Position eines Hinweisfeldes ist relativ zu seiner Ursprungsansicht und verwendet den gleichen Maßstabsfaktor.

## Verwendung von Trennzeichen

Bei Verwendung der Rechteckform können mit "|" Trennzeichen im Text hinzugefügt werden. Zum Beispiel ergibt "AAA|TEST|111":

![](/src/assets/images/Balloon_separator.png)

## Eigenschaften

### Daten

- Daten-Eigenschaft**Text**: anzuzeigender Text
- Daten-Eigenschaft**Source View**: Ursprungsansicht des Hinweisfeldes.
- Daten-Eigenschaft**Origin X**: X-Lage des Ursprungs des Hinweisfeldes relativ zur Ansicht.
- Daten-Eigenschaft**Origin Y**: Y-Lage des Ursprungs des Hinweisfeldes relativ zur Ansicht.
- Daten-Eigenschaft**End Type**: Symbol am Ende der Hinweislinie

Optionen: ![](/src/assets/images/Arrowfilled.svg) Gefüllte Pfeilspitze, ![](/src/assets/images/Arrowopen.svg) Offene Pfeilspitze, ![](/src/assets/images/Arrowtick.svg) Schrägstrich, ![](/src/assets/images/Arrowdot.svg) Punkt, ![](/src/assets/images/Arrowopendot.svg) Ring, ![](/src/assets/images/Arrowfork.svg) Gabel, ![](/src/assets/images/Arrowpyramid.svg) gefülltes Dreieck,
![](/src/assets/images/Arrownone.svg) Kein.

- Daten-Eigenschaft**End Type Scale**: Vergrößerungsfaktor für **End Type**.
- Daten-Eigenschaft**Bubble Shape**: Form des Hinweisfeldes.

Optionen: ![](/src/assets/images/Circular.svg) Kreisförmig, Kein, ![](/src/assets/images/Triangle.svg) Dreieck, ![](/src/assets/images/Inspection.svg) Prüfmaß, ![](/src/assets/images/Hexagon.svg) Sechseck, ![](/src/assets/images/TechDraw_Square.svg) Quadrat, ![](/src/assets/images/Rectangle.svg) Rechteck (, Linie).

- Daten-Eigenschaft**Shape Scale**: Vergrößerungsfaktor für **Bubble Shape** (die Form des Hinweisfeldes).
- Daten-Eigenschaft**Text Wrap**: Länge für Textumbuch; -1 heißt, daß der Text nicht umbrochen wird und dass das Ergebnis in jedem Falle eine einzige Zeile ist.
- Daten-Eigenschaft**Kink Length**: Abstand vom **Hinweisfeld** zum Knick der Hinweislinie.
- Daten-Eigenschaft**X**: Horizontale Lage des Hinweisfeldes relativ zur Ansicht.
- Daten-Eigenschaft**Y**: Vertikale Lage des Hinweisfeldes relativ zur Ansicht.

### Ansicht

- Ansicht-Eigenschaft**Color**: Farbe des Textes im Hinweisfeld.
- Ansicht-Eigenschaft**Font**: Der Name der Schriftart, die für das Hinweisfeld verwendet werden soll.
- Ansicht-Eigenschaft**Fontsize**: Texthöhe in mm.
- Ansicht-Eigenschaft**Line Visible**: Ob die Linie des Hinweisfeldes sichtbar ist.
- Ansicht-Eigenschaft**Line Width**: Strichstärke der Linie des Hinweisfeldes

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Ballon-Werkzeug kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen benutzt werden:

```
bal1 = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewBalloon','Balloon')
rc = page.addView(bal1)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Balloon/de&oldid=1500187>"
