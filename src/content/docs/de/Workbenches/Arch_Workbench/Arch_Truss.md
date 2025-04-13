---
title: Arch Fachwerkträger
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Fachwerkträger |
| Menüeintrag |
| 3D/BIM → Träger |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug **Arch Fachwerkträger** baut einen [Fachwerkträger](https://de.wikipedia.org/wiki/Fachwerk) (Truss-Objekt) auf, entweder aus einem ausgewählten linearen Objekt (d.h.einer [Draft-Linie](/Draft_Line/de "Draft Line/de") oder einer [Skizze](/Sketcher_NewSketch/de "Sketcher NewSketch/de")) oder von Grund auf neu, wenn beim Aufruf des Befehls kein Objekt ausgewählt ist.

![](/images/Arch_Truss_example.png)

## Anwendung

### Aus einem ausgewählten Objekt erstellen

1. Eine einzelne Linie in einem Arbeitsbereich nach Wahl erstellen.
2. Diese Linie auswählen.
3. Die Schaltfläche ![](/images/Arch_Truss.svg) Arch Träger
4. Die Einstellungendes Trägers wie gewünscht anpassen.

### Von Grund auf neu erstellen

1. Sicherstellen, dass nichts ausgewählt ist.
2. Die Schaltfläche ![](/images/Arch_Truss.svg) Arch Träger drücken.
3. In die 3D-Ansicht klicken, um einen ersten Punkt festzulegen oder die X-, Y- und Z-Koordinaten eingeben.
4. In die 3D-Ansicht klicken, um einen zweiten Punkt festzulegen oder die X-, Y- und Z-Koordinaten eingeben.
5. Die Eigenschaften des Trägers wie gewünscht anpassen.

## Eigenschaften

### Daten

* Daten**TrussAngle**: Der Winkel des Trägers
* Daten**SlantType**: Der Neigungstyp dieses Trägers
* Daten**Normal**: Die normale Ausrichtung dieses Trägers
* Daten**HeightStart**: Die Höhe des Trägers an der Startposition
* Daten**HeightEnd**: Die Höhe des Trägers an der Endposition
* Daten**StrutStartOffset**: Ein optionaler Startversatz für die obersten Strebe
* Daten**StrutEndOffset**: Ein optionaler Endversatz für die obere Strebe
* Daten**StrutHeight**: Die Höhe der oberen und unteren Hauptelemente des Trägers
* Daten**StrutWidth**: Die Breite der oberen und unteren Hauptelemente des Trägers
* Daten**RodType**: Der Typ der mittleren Elemente des Trägers
* Daten**RodDirection**: Die Richtung der Stäbe
* Daten**RodSize**: Der Durchmesser oder die Breite der Stäbe
* Daten**RodSections**: Die Anzahl der Stababschnitte
* Daten**RodEnd**: Ob der Träger am Ende einen Stab hat
* Daten**RodMode**: Wie die Stäbe zu zeichnen sind

## Skripten

Das Werkzeug Fachwerkträger kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus durch Verwendung der folgenden Funktion verwendet werden:

```
Truss = makeFence([baseobj])

```

Beispiel:

```
import FreeCAD
import Draft
import Arch

p1 = FreeCAD.Vector(0,0,0)
p2 = FreeCAD.Vector(2000,0,0)
baseline = Draft.makeLine(p1,p2)
truss = Arch.makeTruss(baseline)
truss.HeightStart = 200
truss.HeightEnd = 400
# adjust other needed properties

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Truss/de&oldid=1438811>"