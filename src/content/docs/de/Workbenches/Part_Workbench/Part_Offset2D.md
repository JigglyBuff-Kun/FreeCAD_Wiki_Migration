---
title: Part 2DVersatz
---

|                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Part 2DVersatz                                                                                                                                              |
| Menüeintrag                                                                                                                                                 |
| Formteil → 2D-Versatz                                                                                                                                       |
| Arbeitsbereich                                                                                                                                              |
| [Part](/Part_Workbench/de "Part Workbench/de")                                                                                                              |
| Standardtastenkürzel                                                                                                                                        |
| _Keiner_                                                                                                                                                    |
| Eingeführt in Version                                                                                                                                       |
| 0.17                                                                                                                                                        |
| Siehe auch                                                                                                                                                  |
| [Part Versatz](/Part_Offset/de "Part Offset/de"), [Part Dicke](/Part_Thickness/de "Part Thickness/de"), [Draft Versatz](/Draft_Offset/de "Draft Offset/de") |
|                                                                                                                                                             |

## Beschreibung

Das Werkzeug ![](/images/Part_Offset2D.svg) **Part Offset2D** konstruiert einen Draht, parallel zum ursprünglichen Draht, in einem bestimmten Abstand von diesem. Oder vergrößert/schrumpft entsprechend eine ebene Fläche.

Der Draht/Fläche muss plan sein. Es kann mehrere Drähte in einem Objekt geben, nicht unbedingt koplanar.

![](/images/Part_Offset2D_Demo.png)

## Anwendung

1. Ein Objekt zum Versetzen auswählen.
2. Die Schaltfläche ![](/images/Part_Offset2D.svg) 2D Offset drücken.
3. Den Versatz im [Aufgabenbereich](/Task_Panel/de "Task Panel/de") einstellen.
4. OK drücken.

## Hinweise

- [App-Link](/App_Link/de "App Link/de")-Objekte, die auf geeignete Objektarten verweisen und [App-Part](/App_Part/de "App Part/de")-Container, die geeignete sichtbare Objekte enthalten, können auch als Quellobjekte verwendet werden. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

## Bekannte Probleme

- Die meisten nicht standardmäßigen Modi funktionieren nur mit OCC 7.0.0 oder höher.

- Die Verwendung des Werkzeugs kann zu einem Absturz von FreeCAD führen (siehe nächster Punkt). Unter Windows werden diese Abstürze in Ausnahmen umgewandelt und führen im Allgemeinen nicht zum Schließen von FreeCAD; unter anderen Betriebssystemen ist dies nicht der Fall, Daher ist es ratsam, das Projekt zu speichern, bevor versucht wird, das Werkzeug zu verwenden. Ellipsen werden ebenfalls nicht verarbeitet.

- Vergrößern von Flächen mit kreisförmigen Löchern um einen Betrag, der groß genug ist, um das Schließen der Löcher zu bewirken, tritt ein Crash auf (OCC 7.0.0.0). Das Problem scheint kreisförmig zu sein; andere Formen scheinen sich richtig zu schließen.

- Beim Versetzen von Kreisen, die eine Platzierung ungleich Null haben, wird das Ergebnis falsch platziert. (OCC 7.0.0.0)

- Beim Versatz von Kreisen werden diese manchmal in eine unerwartete Richtung versetzt (z.B. nach innen statt nach außen). (OCC 7.0.0.0)

- Fill="true" funktioniert nicht, wenn offene Drähte im "Skin"-Modus gemeinsam versetzt werden.

- "Tangente" Fügemodus funktioniert nicht (OCC 7.0.0.0)

- Versatzdrähte aus einem einzigen Liniensegment werden nicht unterstützt (da der Linienabschnitt keine Ebene definiert). Auch einzelne Linienabschnitte können nicht am Kollektivversatz teilnehmen.

## Eigenschaften

- Daten-Eigenschaft**Quelle**: Verbindung zur Originalform

- Daten-Eigenschaft**Wert**: Der Abstand, um den einen Draht versetzt / eine Fläche vergrößert wird. Falls negativ, wird stattdessen der Draht in die Gegenrichtung versetzt / die Fläche geschrumpft.

- Daten-Eigenschaft**Modus** ("Pipe" oder "Skin"): Legt fest, wie nicht geschlosseneDrähte verarbeitet werden. Bei "Pipe" wird der Draht so umrissen, als wäre er eine extrem dünne, geschlossene Kontur. Wenn "Skin", wird ein offener Draht erzeugt.

: ![](/images/Part_Offset2D_Mode.png)

- Daten-Eigenschaft**Fügen** ("Bogen", "Tangente", "Schnittpunkt"): legt das Verhalten um Knicke fest. Wenn "Bogen", sind Offsetsegmente mit einem Kreisbogen verbunden, der am Scheitelpunkt zentriert ist. "Tangente" wird auf OCC7.0.0.0. "Schnittpunkt" nicht unterstützt: Versetzte Segmente werden bis zum Schnittpunkt verlängert.

: ![](/images/Part_Offset2D_Join.png)

- Daten-Eigenschaft**Knotenpunkt** ("falsch", "wahr"): setzt, ob mehrere Drähte gemeinsam oder unabhängig behandelt werden. Wenn "falsch", werden die Drähte unabhängig voneinander versetzt, Knotenpunkte zwischen den resultierenden Drähten werden ignoriert. Wenn "true", werden die Drähte auf kollektive Weise versetzt.

: ![](/images/Part_Offset2D_Intersection.png)

: Nur Drähte innerhalb einer Verbindung werden gekoppelt. Wenn die Struktur beispielsweise wie der Verbund (Draht1, Draht2, Verbindung (Draht3, Draht4)) ist, werden Draht1 und Draht2 gemeinsam, aber unabhängig von Draht3 und Draht4 behandelt. Ebenso werden Draht3 und Draht4 gemeinsam, aber unabhängig von Draht1+Draht2 behandelt.

: Auch im kollektiven Modus sind die Richtungen der Drähte wichtig und beeinflussen die Richtung des Versatzes. Dies steht in engem Zusammenhang mit der Art und Weise, wie Löcher in Flächen behandelt werden.

: Drähte, die gemeinsam behandelt werden, müssen koplanar sein. Drähte, die unabhängig voneinander versetzt werden, müssen nicht koplanar sein.

- Daten-Eigenschaft**Ausfüllen** ("false", "true"): wenn "true", wird der Raum zwischen dem ursprünglichen Draht/Fläche und dem Offset mit einer Fläche gefüllt.

: ![](/images/Part_Offset2D_Fill.png)

## Skripten

Dieses Werkzeug kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit der folgenden Funktion verwendet werden:

```
f = App.ActiveDocument.addObject("Part::Offset2D", "Offset2D")
f.Source =  #some object
f.Value = 10.0

```

2D offset is also available as a method of Part.Shape. Example:

```
import Part
circle = Part.Circle().toShape()
enlarged_circle = circle.makeOffset2D(10.0)
Part.show(circle)
Part.show(enlarged_circle)
# makeOffset2D(offset, join = 0, fill = False, openResult = false, intersection = false)
#
# * offset: distance to expand the shape by.
#
# * join: method of offsetting non-tangent joints. 0 = arcs, 1 = tangent, 2 =
# intersection
#
# * fill: if true, the output is a face filling the space covered by offset. If
# false, the output is a wire/face.
#
# * openResult: True for "Skin" mode; False for Pipe mode.
#
# * intersection: collective offset
#
# Returns: result of offsetting (wire or face or compound of those). Compounding
# structure follows that of source shape.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Offset2D/de&oldid=1464590>"
