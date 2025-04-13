---
title: PartDesign VerschiebeSpitze
---
|  |
| --- |
| PartDesign ArbeitspositionFestlegen |
| Menüeintrag |
| Kontextmenü → Arbeitsposition festlegen |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign FormelementVerschieben](/PartDesign_MoveFeature/de "PartDesign MoveFeature/de"), [PartDesign FormelementImBaumVerschieben](/PartDesign_MoveFeatureInTree/de "PartDesign MoveFeatureInTree/de") |
|  |

## Beschreibung

![](/images/PartDesign_MoveTip.svg) Arbeitsposition festlegen, wie diese Funktion im Kontextmenü heißt, definiert die Arbeitsposition (in älteren Versionen "Spitze" genannt) neu, welche die Darstellung des Bauteils nach außen hin beeinflusst. Standardmäßig ist die Arbeitsposition das letzte zum Körper hinzugefügte Formelement. Manchmal kann es jedoch nützlich sein, die Arbeitsposition vorübergehend auf ein eher eingefügtes Formelement im Baum zu setzen, um eine Skizze, eine Bezugsgeometrie oder ein Formelement einzufügen, das rückblickend früher in der Historie des Körpers hätte erstellt werden sollen.

Die Arbeitsposition wird im Modellbaum durch einen kleinen weißen Abwärtspfeil in einem grünen Kreis, der über dem Symbol des Formelements liegt, visuell unterschieden. Das folgende Formelement ist beispielsweise als Arbeitsposition gekennzeichnet:

![](/images/PartDesign_Body_tree-04.png)

## Anwendung

1. Im Modellbaum mit der rechten Maustaste auf das Formelement (Feature) klicken, das als Arbeitsposition festgelegt werden soll.
2. Aus der Liste im Kontextmenü ![](/images/PartDesign_MoveTip.svg) **Arbeitsposition festlegen** auswählen.
3. Die nun aktuelle Arbeitsposition wird auf sichtbar gesetzt und alle Elemente unterhalb der Arbeitsposition werden ausgeblendet. Von diesem Punkt aus neu erstellte Elemente werden unter der Arbeitsposition und über den anderen vorhandenen Elementen eingefügt.

**Hinweis**: Es ist wichtig, nicht zu vergessen, die Arbeitsposition wieder auf das letzte Formelement am unteren Rand im Baumabschnitt des Körpers zu setzen.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_MoveTip/de&oldid=1206475>"