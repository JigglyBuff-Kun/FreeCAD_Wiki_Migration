---
title: Curves Parameterkamm
---
|  |
| --- |
| Curves Parameterkamm |
| Menüeintrag |
| Curves → Comb plot |
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

Das Werzeug ![](/images/Curves_ParametricComb.svg) **Curves Parameterkamm** kann helfen die Regelmäßigkeit und Glattheit einer Kurve sowie die Stetigkeit einer Kurvenverbindung (eines Kurvenübergangs) darzustellen.

Ein Parameterkamm dient nur zum Visualisieren.

Ein 3D-Kamm wird für 3D-Kurven erstellt. Die Werte für Sample (Anzahl) und Scale (Vergrößerungsfaktor) können angepasst werden.

![](/images/Curves_ParametricComb_demo.jpg)

Eine Kurve vor (links) und nach (rechts) der Anwendung dieses Werkzeuges

## Anwendung

1. Eine oder mehrere Formen (Skizze, Linienzug, Fläche, usw.) auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Curves_ParametricComb.svg) Kammdiagramm drücken.
   * Den Menüeintrag **Kurven → ![](/images/Curves_ParametricComb.svg) Kammdiagramm** auswählen.
3. Ein Kammdiagramm, ein **Comb**-Objekt wird erstellt und zeigt die Krümmung der ausgewählten Formen (Skizzen, Linienzüge) oder ihrer Teilelemente an (im Falle von Flächen Randkurven und Iso-Kurven).
4. Wahlweise die Werte im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen (siehe Eigenschaften):
   * Die Anzahl der Meßpunkte und die Skalierung für alle Kammdiagramme einstellen.
   * Die Anzahl der Kammdiagramme und ihre Ausrichtung für Flächenobjekte einstellen.

## Hinweise

* Dieses Werkzeug dient als Darstellungshilfe.
* Dieses Werkzeug akzeptiert verschiedene Arten von Kurven sowie Flächenelementen und erstellt zusätzliche Iso-Kurven in U- und V-Ausrichtung für letztere.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **Comb**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Comb

* Daten**Comb Points** (`VectorList`): Comb Points.
* Daten**Edge** (`LinkSubList`): List of input shapes.
* Daten**Samples** (`IntegerConstraint`): Number of samples per comb plot.
* Daten**Scale** (`Float`): Scale (%). 0 for AutoScale.
* Daten**Shape** (`PartShape`): Shape of comb plot.

Surface

* Daten**Number** (`Integer`): Number of surface samples (comb plots) in U and/or V direction.
* Daten**Orientation** (`Enumeration`): Surface Comb Orientation to distribute the surface samples (comb plots).
  + `U` (default): Displays comb plots along U direction only.
  + `V`: Displays comb plots along V direction only.
  + `UV`: Displays comb plots along both directions.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_ParametricComb/de&oldid=1566819>"