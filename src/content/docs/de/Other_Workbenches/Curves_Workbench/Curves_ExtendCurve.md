---
title: Curves KurveVerlängern
---
|  |
| --- |
| Curves KurveVerlängern |
| Menüeintrag |
| Curves → Extend Curve |
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

Das Werkzeug ![](/images/Curves_ExtendCurve.svg) **Curves KurveVerlängern** verlängert ausgewählte Kanten an beiden Enden um eine vorgegebene Länge.

## Anwendung

1. Eine oder mehrere Kanten in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Curves_ExtendCurve.svg) Kurve verlängern drücken.
   * Den Menüeintrag **Kurven → ![](/images/Curves_ExtendCurve.svg) Kurve verlängern** auswählen.
3. Eine Verlängerung, ein **ExtendedCurve**-Objekt, wird für jede ausgewählte Kante erstellt.
4. Wahlweise die Werte im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen, um die Länge und Art der Verlängerungen sowie die Ergebnisform einzustellen (siehe Eigenschaften).

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **ExtendCurve**-Objekt wird von einem [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Base

* Daten-Eigenschaft**Edge** (`LinkSub`): Zu verlängernde Kante.
* Daten-Eigenschaft**Output** (`Enumeration`): Ergebnisform.
  + `SingleEdge` (default): Eine einzelne zusammenhängende Kure
  + `Wire`: Separate Kurven.

Beginning

* Daten-Eigenschaft**Length Start** (`Float`): Verlängerung am Anfang.
* Daten-Eigenschaft**Type Start** (`Enumeration`): Verlängerungsart am Anfang.
  + `Straight` (default): Die Verlängerung ist eine gerade Linie.
  + `G2 curve`: Die Verlängerung ist eine weitere Kurve, die die lokale Krümmung der zu verlängernden Kante an ihrem gemeinsamen Knoten übernimmt (G2-Stetigkeit).

End

* Daten-Eigenschaft**Length End** (`Float`): Verlängerung am Ende.
* Daten-Eigenschaft**Type End** (`Enumeration`): Verlängerungsart am Ende.
  + `Straight` (default): Die Verlängerung ist eine gerade Linie.
  + `G2 curve`: Die Verlängerung ist eine weitere Kurve, die die lokale Krümmung der zu verlängernden Kante an ihrem gemeinsamen Knoten übernimmt (G2-Stetigkeit).

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_ExtendCurve/de&oldid=1567825>"