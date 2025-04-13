---
title: Curves IsoKurve
---
|  |
| --- |
| Curves IsoKurve |
| Menüeintrag |
| Surfaces → IsoCurve |
| Arbeitsbereich |
| [Curves](/Curves_Workbench/de "Curves Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Curves KurveVerbinden](/Curves_JoinCurve/de "Curves JoinCurve/de") |
|  |

## Beschreibung

Das Werkzeug ![](/images/Curves_IsoCurve.svg) Curves IsoKurve überspannt eine ausgewählte Fläche mit einem Gitter in UV-Ausrichtung.

![](/images/Curves_IsoCurve_Demo.jpg)

Eine Fläche vor (links) und nach (rechts) der Anwendung dieses Werkzeuges

## Anwendung

1. Eine oder mehrere Flächen in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Curves_IsoCurve.svg) Iso-Kurve drücken.
   * Den Menüeintrag **Oberflächen → ![](/images/Curves_IsoCurve.svg) Iso-Kurve** auswählen.
3. Ein **IsoCurve**-Objekt, wird für jede ausgewählte Fläche erstellt und bildet ein Gitter in UV-Ausrichtung auf jeder Fläche ab.
4. Wahlweise die Werte im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen, um die Anzahl der Iso-Kurven in U- und V-Ausrichtung anzupassen und die zugehörigen Eigenschaften einzustellen (siehe Eigenschaften).

## Hinweise

* Einzelne Kurven können für andere Anwendungen extrahiert werden (z.B. mit [Curves KurvenVerbinden](/Curves_JoinCurve/de "Curves JoinCurve/de")) oder nur zur Darstellung der Form dienen.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **IsoCurve**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Iso Curve

* Daten**Face** (`LinkSub`): Input face.
* Daten**Mode** (`Enumeration`): Number of IsoCurves.
  + `Multi` (default): ...
  + `Single`: ...
* Daten**Number U** (`Integer`): Number of IsoCurves in U direction.
* Daten**Number V** (`Integer`): Number of IsoCurves in V direction.
* Daten**Orientation** (`Enumeration`): Curve Orientation.
  + `U` (default): ...
  + `V`: ...
* Daten**Parameter** (`Float`): IsoCurve parameter.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_IsoCurve/de&oldid=1566843>"