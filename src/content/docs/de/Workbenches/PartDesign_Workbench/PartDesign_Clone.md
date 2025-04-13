---
title: PartDesign Klon
---
|  |
| --- |
| PartDesign Klon |
| Menüeintrag |
| Part Design → Klon erzeugen |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [Draft Klon](/Draft_Clone/de "Draft Clone/de") |
|  |

## Beschreibung

**PartDesign Klon** erstellt eine verknüpfte Kopie eines ausgewählten Objekts, das allen zukünftigen Bearbeitungen des Originalobjekts (außer der Positionierung) folgt. Ein Anwendungsfall ist z.B., wenn [PartDesign boolesche Operationen](/PartDesign_Boolean/de "PartDesign Boolean/de") für ein in einem anderen Arbeitsbereich erstelltes Objekt ausgeführt werden sollen. Die meisten Objektarten werden akzeptiert, solange es sich um einzelne Festkörper handelt. Sollen mehrere Objekte (d.h. Körper) oder ein [Part-Behälter](/Std_Part/de "Std Part/de") geklont werden, könnte man [Draft Klonen](/Draft_Clone/de "Draft Clone/de") verwenden. Ein Unterschied ist, dass der Klon des Arbeitsbereichs PartDesign die aktuelle Positionierung des Klons auf Null setzt (sowohl die kartesische Bewegung als auch die räumliche Orientierung), während der Klon des Arbeitsbereichs Draft die Zahlenwerte der aktuellen Positionierung und Orientierung der geklonten Objekte unter Berücksichtigung des Behälters für geklonte Objekte berechnet und einsetzt.

![Clone of the inner gear while being translated in 3D space as an independent object](/images/Clone.png)

Klon des Innenzahnrades, der als eigenständiges Objekt im 3D-Raum bewegt wird

## Anwendung

1. Das zu klonenden Objekt im Modellbaum auswählen.
2. Die Schaltfläche ![](/images/PartDesign_Clone.svg) **Klon erzeugen**.

## Eigenschaften

* Daten-Eigenschaft**Base Feature**: Bestimmt das Ausgangsobjekt, auf dem der Klon basiert. Um es auszutauschen klickt man auf die Schaltfläche ... und erhält eine Liste vorhandener Objekte.
* Daten-Eigenschaft**Placement**: bestimmt die Ausrichtung und die Position des Klons im 3D-Raum. Siehe [Positionierung](/Placement/de "Placement/de").
* Daten-Eigenschaft**Label**: Bezeichnung die dem Klon-Objekt gegeben wurde. Nach eigenem Bedarf änderbar.

## Begrenzungen

* Nur ein einzelnes Objekt kann für einen PartDesign-Klon verwendet werden.
* Nur Objekte, die aus einem einzelnen Festkörper bestehen, werden unterstützt. Deshalb werden [Verbunde](/Glossary/de#Compound "Glossary/de") wie [Part-Container](/Std_Part/de "Std Part/de"), [Part-Verbund](/Part_MakeCompound/de "Part MakeCompound/de") oder [Draft RechtwinkligeAnordnung](/Draft_OrthoArray/de "Draft OrthoArray/de") nicht unterstützt.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Clone/de&oldid=1424982>"