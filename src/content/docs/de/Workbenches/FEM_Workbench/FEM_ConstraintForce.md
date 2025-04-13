---
title: FEM RandbedingungKraft
---
|  |
| --- |
| FEM RandbedingungKraft |
| Menüeintrag |
| Modell → Mechanische Randbedingungen und Belastungen → Randbedingung Krafteinwirkung |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM RandbedingungDruck](/FEM_ConstraintPressure/de "FEM ConstraintPressure/de") |
|  |

| Gleichungslöser |
| --- |
| Alle |

## Beschreibung

Wendet eine Kraft mit einem gegebenen Wert [N] auf die ausgewählte Geometrie an.

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen, um eine Kraft in eine Fläche, eine Linie oder einen Punkt einzuleiten:
   * Die Schaltfläche ![](/images/FEM_ConstraintForce.svg) Krafteinwirkung drücken.
   * Den Menüeintrag **Modell → Mechanische Randbedingungen und Belastungen → ![](/images/FEM_ConstraintForce.svg) Krafteinwirkung** auswählen.
2. Das Netzobjekt wird automatisch ausgeblendet und gibt den Blick auf das originale Modell frei. Ist das Netzobjekt noch sichtbar, gibt es zwei Möglichkeiten es auszublenden:
   * Das Netzobjekt in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen und die Leertaste drücken.
   * Das Netzobjekt in der [Baumansicht](/Tree_view/de "Tree view/de") mit der rechten Maustaste anklicken und **Auswahl ausblenden** aus seinem Kontextmenü auswählen.
3. Der Dialog **Analyseelement-Parameter** im [Aufgaben-Bereich](/Task_panel/de "Task panel/de") wurde auch geöffnet.
4. Die Schaltfläche Add drücken und eine oder mehrere von entweder *Flächen*, *Kanten* oder *Knoten* in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen, auf die die Krafteinwirkung angewendet werden soll. Die ausgewählten Elemente erscheinen in der Liste der geometrischen Objekte.
5. Wahlweise die Schaltfläche Entfernen drücken und ein oder mehrere der ausgewählten Elemente in der [3D-Ansicht](/3D_view/de "3D view/de") abwählen. Die abgewählten Elemente der werden von der Liste der geometrischen Objekte entfernt.
6. Den Wert der **Kraft** in N festlegen.
7. Wahlweise eine Fläche oder eine Kante auswählen und die Schaltfläche Richtung drücken, um die Kraftrichtung zu ändern. In einem typischen Anwendungsfall lässt man dieses Feld leer, um die Kraft in Richtung der Normale anzuwenden.
8. Wahlweise die Checkbox **Richtung umkehren** aktivieren, um die Kraftrichtung umzukehren.
9. Zum Beenden OK anklicken.

![](/images/FEM_ConstraintForce_example.JPG)

## Hinweise

* Die festgelegte Kraft wird gleichmäßig auf die ausgewählten Objekte angewendet. Wird z.B. eine Belastung mit einer Kraft von 200 N auf zwei Flächen angewendet, die den gleichen Flächeninhalt besitzen, wird jede Fläche gleichmäßig mit 100 N belastet.
* Diese Funktion verwendet die [\*CLOAD-Karte in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node172.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintForce/de&oldid=1464018>"