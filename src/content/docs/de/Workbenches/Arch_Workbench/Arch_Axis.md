---
title: Arch Achse
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Achse |
| Menüeintrag |
| Anmerkung → Achse |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| A X |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arch Achsensystem](/Arch_AxisSystem/de "Arch AxisSystem/de"), [Arch Raster](/Arch_Grid/de "Arch Grid/de") |
|  |

## Beschreibung

Das ![](/images/Arch_Axis.svg) Arch Achse Werkzeug ermöglicht es dir, eine Reihe von Achsen im aktuellen Dokument zu platzieren. Der Abstand und der Winkel zwischen den Achsen ist anpassbar, ebenso wie der Nummerierungsstil. Die Achsen dienen hauptsächlich als Referenzen, auf die Objekte gefangen werden, können aber auch zusammen mit ![](/images/Arch_Axis_System.svg) [Arch Achsensystem](/Arch_AxisSystem "Arch AxisSystem") verwendet werden. Sie können auch von anderen Architekturobjekten referenziert werden, um parametrische Anordnungen, z.B. von Trägern oder Stützen, zu erstellen. ![](/images/Arch_Grid.svg) [Arch Gitter](/Arch_Grid/de "Arch Grid/de") können auch an Stellen von Achsen verwendet werden.

![](/images/Arch_Axis_example.jpg)

Zwei Achsenobjekte, die rechtwinklig zueinander ausgerichtet sind, um ein Raster zu erzeugen

## Anwendung

1. Die Schaltfläche ![](/images/Arch_Axis.svg)Achse drücken oder das Tastaturkürzel A dann X.
2. Das Achsensystem in die gewünschte Position [Verschieben](/Draft_Move/de "Draft Move/de")/[Drehen](/Draft_Rotate/de "Draft Rotate/de") .
3. Den Bearbeitungsmodus durch Doppelklicken des Achsensystems in der Baumansicht aufrufen, um dessen Einstellungen wie Anzahl der Achsen, Abstände und Winkel zwischen den Achsen anzupassen.

## Optionen

* Jede Achse in der Abfolge hat ihren eigenen Abstand und Winkel in Bezug auf die vorherige Achse. Dies ermöglicht sehr komplexe Systeme wie nicht-orthogonale Systeme, polare Systeme oder jede Art von nicht-uniformem System.
* Durch Doppelklicken auf die Achse in der Baumansicht erlaubt das bearbeiten der Abstände, Winkel und Beschriftungen jeder Achse.
* Achslänge, Größe der Blasen und Nummerierungsstile sind direkt über die Eigenschaften des Achsensystems anpassbar.
* Jede Achse kann auch eine Beschriftung anzeigen, die über den Dialog des Aufgabenbereichs bearbeitet werden kann.

## Eigenschaften

* Daten-Eigenschaft**Länge**: die Länge der Achsen
* Daten**Limit**: Falls größer als Null, wird jede Achse als zwei Linien in der gegebenen Länge dargestellt anstatt als eine durchgehende Linie [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
* Ansicht-Eigenschaft**Blasengröße**: die Größe der Achsenblasen
* Ansicht-Eigenschaft**Nummerierungsstil**: Wie die Achsen nummeriert sind: 1,2,3, A,B,C, usw..
* Ansicht-Eigenschaft**Blasenposition**: Wo die Blase auf der Achse platziert ist: Am Startpunkt, Endpunkt, beide oder keiner.
* Ansicht-Eigenschaft**Schriftname**: Einen Schrifttyp, um die Blasennummer und/oder eine Beschriftung anzubringen
* Ansicht-Eigenschaft**Schriftgröße**: nur die Größe des Beschriftungstextes (der Blasentext wird durch die Blasengröße bestimmt)
* Ansicht-Eigenschaft**Beschriftung anzeigen**: Schaltet die Anzeige der Etikettentexte ein/aus

## Verwendung als Abschnittsmarkierung

Durch setzen der Eigenschaft **Bubble Position** auf **Arrow left/right** oder **Bar left/right** wird die Achse einen gefüllten Pfeil oder einen Strich anstatt der Blase anzeigen, so dass sie als Schnittmarkierung genutzt werden kann [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Achse kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit der folgenden Funktion verwendet werden:

```
Axes = makeAxis(num=5, size=1000, name="Axes")

```

* Erzeugt ein `Axes` Objekt basierend auf der gegebenen Anzahl `num` der Achsen und dem Abstand `size` zwischen benachbarten Achsen.

Beispiel:

```
import Draft, Arch

Axes = Arch.makeAxis(5, 1000)

Axes.ViewObject.LineWidth = 3
Axes.ViewObject.BubbleSize = 200
Axes.ViewObject.FontSize = 150

Axes2 = Arch.makeAxis(6, 500)

Axes2.ViewObject.LineWidth = 2
Axes2.ViewObject.BubbleSize = 200
Axes2.ViewObject.FontSize = 150
Axes2.ViewObject.NumberingStyle = "A,B,C"
FreeCAD.ActiveDocument.recompute()

Axes2.Length = 6000
Draft.rotate(Axes2, -90)
Draft.move(Axes2, FreeCAD.Vector(-1000, 2500, 0))
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Axis/de&oldid=1541960>"