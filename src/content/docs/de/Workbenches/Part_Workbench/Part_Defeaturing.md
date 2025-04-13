---
title: Part FormelementEntfernen
---

|                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Part FormelementEntfernen                                                                                                                                         |
| Menüeintrag                                                                                                                                                       |
| Part → Formelement entfernen                                                                                                                                      |
| Arbeitsbereich                                                                                                                                                    |
| [Part](/Part_Workbench/de "Part Workbench/de")                                                                                                                    |
| Standardtastenkürzel                                                                                                                                              |
| _Keiner_                                                                                                                                                          |
| Eingeführt in Version                                                                                                                                             |
| 0.18                                                                                                                                                              |
| Siehe auch                                                                                                                                                        |
| [Defeaturing](/Defeaturing_Workbench/de "Defeaturing Workbench/de"), [Macro Parametric Defeaturing](/Macro_Parametric_Defeaturing "Macro Parametric Defeaturing") |
|                                                                                                                                                                   |

## Beschreibung

Das Werkzeug **FormelementEntfernen** ist für die Entfernung ausgewählter Formelemente aus dem Modell vorgesehen. In diesem Zusammenhang sind es Formelemente wie Löcher, Vorsprünge, Lücken, Fasen, Verrundungen usw., die sich in dem Modell befinden.

Das Werkzeug 'FormelementEntfernen' kann in verschiedenen Zusammenhängen sehr nützlich sein:

- Um einen importierten Festkörper zu bearbeiten, wenn keine Historie der Bearbeitung verfügbar ist.
- Beheben von Fehlern im Modell, z. B. Füllen von Lücken, Löchern usw.
- Modellvereinfachung für die numerische Analyse, Anzeige auf mobilen Geräten, usw.

Die entfernten Formelemente werden durch die Verlängerung der angrenzenden Flächen gefüllt, so dass keine unerwarteten Teile im Ergebnis erscheinen sollten. Bitte beachte, dass das Ergebnis eine neue Form ist, die nicht mit dem Original verbunden ist; es ist also nicht-parametrisch.

Um verfügbar zu sein, muss FreeCAD auf Open Cascade 7.3.0 oder höher basieren. Falls es in deiner Version von FreeCAD nicht verfügbar ist, kannst du einen Blick auf die [Merkmal aus einer Form entfernen](/Defeaturing_Workbench/de "Defeaturing Workbench/de") Erweiterung werfen, die ähnliche Funktionen auch mit älteren Versionen von OCC oder FreeCAD anbietet.

![](/src/assets/images/Part_Defeaturing_example.png)

## Anwendung

1. Die zu entfernende(n) Fläche(n) des Modells auswählen.
2. Die Schaltfläche ![](/src/assets/images/Part_Defeaturing.svg) **Formelement entfernen** drücken.
3. Ein neues Objekt mit der Bezeichnung '_Defeatured_ wird unter Modell in der [Baumansicht](/Tree_view/de "Tree view/de") erstellt und das ursprüngliche Objekt wird ausgeblendet.

## Verweise

- [3D Model Defeaturing](https://dev.opencascade.org/index.php?q=node/1211), die offizielle Ankündigung auf dem Open Cascade Collaborative Development Portal.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Defeaturing/de&oldid=1471670>"
