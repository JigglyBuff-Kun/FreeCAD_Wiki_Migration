---
title: Sketcher UnterbestimmteElementeAuswählen
---

|                                                               |
| ------------------------------------------------------------- |
| Sketcher UnterbestimmteElementeAuswählen                      |
| Menüeintrag                                                   |
| Skizze → Sketcher visuell → Unterbestimmte Elemente auswählen |
| Arbeitsbereich                                                |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")    |
| Standardtastenkürzel                                          |
| Z F                                                           |
| Eingeführt in Version                                         |
| 0.18                                                          |
| Siehe auch                                                    |
| _Keiner_                                                      |
|                                                               |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_SelectElementsWithDoFs.svg) Sketcher UnterbestimmteElementeAuswählen Wählt die nicht vollständig bestimmten Elemente der Skizze aus.

Sind solche Elemente in einer Skizze vorhanden, zeigt der Abschnitt [Meldungen des Lösers](/Sketcher_Dialog/de#Meldungen_des_Gleichungslösers "Sketcher Dialog/de") im Sketcher-Dialog diese Meldung:

- Unterbestimmt: n Freiheitsgrade

Wobei _n_ die Anzahl der noch nicht bestimmten (festgelegten) Freiheitsgrade ist. Anklicken des unterstrichenen Textes wählt die unterbestimmten Elemente aus.

Bitte beachten, dass eine Skizze auch überflüssige Randbedingungen enthalten kann, wenn eine der anderen [Meldungen des Gleichungslösers](/Sketcher_Dialog/de#Meldungen_des_Gleichungslösers "Sketcher Dialog/de") angezeigt wird.

## Anwendung

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:

   - Den unterstrichenen Text im Sketcher-Dialog anklicken, wie oben beschrieben.
   - Den Menüeintrag **Skizze → Sketcher visuell → ![](/images/Sketcher_SelectElementsWithDoFs.svg) Unterbestimmte Elemente auswählen** auswählen.
   - Das Tastaturkürzel Z dann F.

1. Die unterbestimmten Elemente werden ausgewählt.
1. Wahlweise in einen leeren Bereich der [3D-Ansicht](/3D_view "3D view") klicken, um die Auswahl zu leeren.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectElementsWithDoFs/de&oldid=1462897>"
