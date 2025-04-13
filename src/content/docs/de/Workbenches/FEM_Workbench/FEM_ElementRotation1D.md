---
title: FEM Elementdrehung1D
---
|  |
| --- |
| FEM Elementdrehung1D |
| Menüeintrag |
| Model → Element-Geometrie → Beam rotation |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|  |

| Solvers |
| --- |
| CalculiX |

## Beschreibung

Ein **ElementRotation1D**-Objekt wird zum drehen des Balkenprofils um die Achse der Balkenelemente verwendet.

## Anwendung

1. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ElementRotation1D.svg) Stabdrehung drücken.
   * Den Menüeintrag **Modell → Element-Geometrie → ![](/images/FEM_ElementRotation1D.svg) Stabdrehung** auswählen.
2. Den Winkel festlegen, um den das Stabprofil gedreht wird.

![](/images/FEM_beam_no_rotation.png)

No rotation, default orientation - local axis 1 aligned with the global Y axis (green)

![](/images/FEM_beam_rotation.png)

90 degree rotation

## Eigenschaften

Daten-Eigenschaft**Rotation**: Legt den Winkel der Drehung fest.

## Begrenzungen

* Derzeit werden mehrere Drehungen nicht unterstützt (Eine einzige Drehung wird auf alle Balken im Modell angewendet).

## Hinweise

* Um den gedrehten Querschnitt sehen zu können, muss die Eigenschaft `Beam Shell Result Output 3D` des [SolverCcxTools](/FEM_SolverCalculixCxxtools "FEM SolverCalculixCxxtools")-Objekts auf `True` gesetzt und die Analyse gestartet werden.
* Diese Funktion verwendet die [\*BEAM SECTION-Karte in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node162.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementRotation1D/de&oldid=1531322>"