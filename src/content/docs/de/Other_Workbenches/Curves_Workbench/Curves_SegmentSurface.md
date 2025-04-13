---
title: Curves FlächeAufteilen
---
|  |
| --- |
| Curves FlächeAufteilen |
| Menüeintrag |
| Surfaces → Segment surface |
| Arbeitsbereich |
| [Curves](/Curves_Workbench/de "Curves Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/Curves_SegmentSurface.svg) Curves FlächeAufteilen ermöglicht eine Fläche anhand von Iso-Kurven aufzuteilen.

## Anwendung

1. Eine Fläche in der [3D-Ansicht](/3D_view "3D view") auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Curves_SegmentSurface.svg) Fläche aufteilen drücken.
   * Den Menüeintrag **Curves → ![](/images/Curves_SegmentSurface.svg) Fläche aufteilen** auswählen.
3. Es wird eine geteilte Oberfläche, ein **Segment\_Surface**-Objekt, erstellt.
4. Wahlweise die Werte im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen, um die zugehörigen Eigenschaften einzustellen (siehe Eigenschaften).

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **Segment\_Surface**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Base

* Daten**Option** (`Enumeration`): Option list.
  + `Custom` (default): ...
  + `Auto`: ...
* Daten**Source** (`LinkSub`): Initial Face.

Option Auto

* Daten**Direction** (`Enumeration`): Segmenting direction.
  + `U` (default): ...
  + `V`: ...
  + `Both`: ...

UDirection

* Daten**Knots U** (`FloatList`): Splitting parameters in U direction.
* Daten**Knots UProvider** (`Link`): Object generating normalized parameters in U direction.
* Daten**Number U** (`Integer`): Split the U parameter range in the given number of segments.

VDirection

* Daten**Knots V** (`FloatList`): Splitting parameters in V direction.
* Daten**Knots VProvider** (`Link`): Object generating normalized parameters in V direction.
* Daten**Number V** (`Integer`): Split the V parameter range in the given number of segments.

## Skripten

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_SegmentSurface/de&oldid=1566723>"