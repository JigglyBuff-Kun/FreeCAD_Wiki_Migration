---
title: Sketcher Ridurre la molteplicità di nodi di una BSpline
---
|  |
| --- |
| Diminuisci la molteplicità |
| Posizione nel menu |
| Sketch → Strumenti B-spline → Diminuisci la molteplicità |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Crea B-spline](/Sketcher_CompCreateBSpline/it "Sketcher CompCreateBSpline/it") |
|  |

## Descrizione

Diminuisce la molteplicità del nodo di curva B-spline (vedere: [B-spline](https://en.wikipedia.org/wiki/B-spline)).

## Utilizzo

1. Selezionare un nodo di una B-spline
2. Richiamare lo strumento usando uno di questi metodi:
   * Premere il pulsante ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) Diminuisci la molteplicità nella barra degli strumenti.
   * Usare la voce **Sketch → Strumenti B-spline → ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) Diminuisci la molteplicità** dal menu principale.

## Example

See [Sketcher\_BSplineIncreaseKnotMultiplicity](/Sketcher_BSplineIncreaseKnotMultiplicity#Example "Sketcher BSplineIncreaseKnotMultiplicity")

## Notes

If you decrease the multiplicity of a knot to zero, the knot vanishes. Mathematically it then appears zero times in the knot vector, meaning there is no longer a basis function. Understanding this requires some math, but it will also be clear if you look at the multiplicity. For example a knot with multiplicity 0 on a B-spline with degree 3
means that at the position of the knot two Bézier pieces are connected with *C3* continuity. So the third derivative should be equal on both sides of the knot. However for a cubic Bézier curve this means that both sides must be part of the same curve. There is then effectively no longer a knot connecting two Bézier curves.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineDecreaseKnotMultiplicity/it&oldid=1403949>"