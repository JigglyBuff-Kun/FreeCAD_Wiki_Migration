---
title: Curves Druckfeder
---
|  |
| --- |
| Curves Druckfeder |
| Menüeintrag |
| Surfaces → Compression Spring |
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

Das Werkzeug ![](/images/Curves_CompressionSpring.svg) Curves Druckfeder erstellt eine Druckfeder.

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Curves_CompressionSpring.svg) Druckfeder drücken.
   * Den Menüeintrag **Oberflächen → ![](/images/Curves_CompressionSpring.svg) Druckfeder** auswählen.
2. Eine Druckfeder, ein **CompSpring**-Objekt, wird erstellt und zeigt nur die Spine\_Kurve (Linienzug).
3. Wahlweise die Werte im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen, um die Form des Festkörpers anzuzeigen und die zugehörigen Eigenschaften einzustellen (siehe Eigenschaften).

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **CompSpring**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Comp Spring

* Daten**Diameter** (`Float`): Diameter of the spring.
* Daten**Length** (`Float`): Spring Length.
* Daten**Reverse Helix** (`Bool`): Left hand if true.
* Daten**Turns** (`Integer`): Number of turns.
* Daten**Wire Diameter** (`Float`): Diameter of the spring wire.

Setting

* Daten**Flatness** (`Integer`): Flatness of spring extremities from 0 to 4.
* Daten**Wire Output** (`Bool`): Output a wire shape.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_CompressionSpring/de&oldid=1566597>"