---
title: Arch Achsensystem
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Achsensystem |
| Menüeintrag |
| Anmerkung → Achsensystem |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Arch Achse](/Arch_Axis/de "Arch Axis/de"), [Arch Raster](/Arch_Grid/de "Arch Grid/de") |
|  |

## Beschreibung

Das Werkzeug Achsensystem ermöglicht zwei oder drei [Achsensystem](/Arch_Axis/de "Arch Axis/de")-Objekte zu kombinieren.

Dies ist nützlich, um die Schnittpunkte zwischen den verschiedenen Achsen festzulegen. Arch Objekte können dann dieses System verwenden, um ihre Form an den verschiedenen Schnittpunkten zu duplizieren.

![](/images/Arch_AxisSystem_example.jpg)

Drei [Arch Achsen](/Arch_Axis/de "Arch Axis/de")-Objekte zu einem Arch Achsensystem zusammengefasst. Ein [Arch Struktur](/Arch_Structure/de "Arch Structure/de")-Objekt verwendet dieses System als seine Daten-Eigenschaft**Achsen**, um seine Form an jedem Schnittpunkt zu duplizieren.

## Anwendung

1. Wahlweise die [Arch Achsen](/Arch_Axis/de "Arch Axis/de")-Objekte auswählen, die in dieses System aufgenommen werden sollen.
2. Die Schaltfläche ![](/images/Arch_AxisSystem.svg) Achsensystem drücken.
3. Mit der rechten Maustaste auf das neu erstellte Achsensystem Objekt in der Baumansicht klicken, um die in diesem System enthaltenen [Arch Achsen](/Arch_Axis/de "Arch Axis/de")-Objekte hinzuzufügen/zu bearbeiten.
4. Eine vorhandene [Arch Achse](/Arch_Axis/de "Arch Axis/de") auswählen und die Schaltfläche ![](/images/Arch_Add.svg) [Hinzufügen](/Arch_Add/de "Arch Add/de") oder ![](/images/Arch_Remove.svg) [Entfernen](/Arch_Remove/de "Arch Remove/de") drücken, um sie zu diesem System hinzuzufügen bzw. zu entfernen.
5. Die Daten-Eigenschaft**Achse** eines beliebigen Arch-Objekts so festlegen, dass es auf dieses System zeigt, damit seine Form auf die Schnittpunkte dieses Systems dupliziert wird.

## Optionen

* Dasselbe [Arch Achsen](/Arch_Axis/de "Arch Axis/de")-Objekt kann Teil von mehr als einem System sein.
* Jedes formbasierte Objekt kann auch als Eigenschaft **Achse** von Arch-Objekten verwendet werden. In diesem Fall wird die Objektform entlang der Knoten des Achsen Objekts dupliziert.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Achsensystem kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus verwendet werden, indem die folgende Funktion verwendet wird:

```
AxisSystem = makeAxisSystem(axes, name="Axis System")

```

* Erstellt aus den gegebenen `Achsen` ein `AchsenSystem`-Objekt, das aus einer einzelnen [Arch Achse](/Arch_Axis/de "Arch Axis/de") besteht oder aus einer Liste von ihnen.

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

AxisSystem = Arch.makeAxisSystem([Axes, Axes2])

Structure = Arch.makeStructure(length=200, width=200, height=100)
Draft.move(Structure, FreeCAD.Vector(-100, 0, 0))
Structure.Axis = AxisSystem
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_AxisSystem/de&oldid=1541962>"