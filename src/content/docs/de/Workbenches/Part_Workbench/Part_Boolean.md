---
title: Part BoolescheOperation
---

|                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Part BoolescheOperation                                                                                                                                                                                       |
| Menüeintrag                                                                                                                                                                                                   |
| Formteil → Boolesche Operation → Boolesche Operation...                                                                                                                                                       |
| Arbeitsbereich                                                                                                                                                                                                |
| [Part](/Part_Workbench/de "Part Workbench/de")                                                                                                                                                                |
| Standardtastenkürzel                                                                                                                                                                                          |
| _Keiner_                                                                                                                                                                                                      |
| Eingeführt in Version                                                                                                                                                                                         |
| -                                                                                                                                                                                                             |
| Siehe auch                                                                                                                                                                                                    |
| [Part Differenz](/Part_Cut/de "Part Cut/de"), [Part Vereinigung](/Part_Fuse/de "Part Fuse/de"), [Part Schnitt](/Part_Common/de "Part Common/de"), und [Part Schnittkurve](/Part_Section/de "Part Section/de") |
|                                                                                                                                                                                                               |

## Beschreibung

![](/images/Part_Boolean.svg) Part BoolescheOperation ist ein generisches boolesches Multifunktionswerkzeug. Es erlaubt dir die Objekte und die durchzuführende Operation in einem einzigen Dialog anzugeben.

Für einen schnelleren Zugriff auf diese Operationen benutze ![](/images/Part_Cut.svg) [Part Differenz](/Part_Cut/de "Part Cut/de"), ![](/images/Part_Fuse.svg) [Part Vereinigung](/Part_Fuse/de "Part Fuse/de"), ![](/images/Part_Common.svg) [Part Schnitt](/Part_Common/de "Part Common/de") und ![](/images/Part_Section.svg) [Part Schnittkurve](/Part_Section/de "Part Section/de").

![](/images/PartBooleansDialog.png)

Dialog zur Auswahl von Objekten und der auszuführenden booleschen Operation.

## Anwendung

Siehe die einzelnen Befehle:

- ![](/images/Part_Cut.svg) [Part Differenz](/Part_Cut/de "Part Cut/de")
- ![](/images/Part_Fuse.svg) [Part Vereinigung](/Part_Fuse/de "Part Fuse/de")
- ![](/images/Part_Common.svg) [Part Schnitt](/Part_Common/de "Part Common/de")
- ![](/images/Part_Section.svg) [Part Schnittkurve](/Part_Section/de "Part Section/de")

## Koplanare Probleme

Die booleschen Operationen werden vom internen Geometriekernel, der [OpenCASCADE Technologie](/OpenCASCADE/de "OpenCASCADE/de") (OCCT), durchgeführt. Diese Bibliothek hat manchmal Probleme, boolesche Ergebnisse zu erzeugen, wenn sich die Eingabeobjekte eine Kante oder eine Fläche teilen. Um sicherzugehen, dass die boolesche Operation erfolgreich ist, wird empfohlen, dass sich die Formen deutlich überschneiden; das bedeutet, dass in den meisten Fällen eine Form vorstehen oder größer als die andere Form sein sollte.

In Fällen von Koplanarität können, selbst wenn die erste boolesche Operation erfolgreich ist, nachfolgende boolesche Operationen fehlschlagen. In diesem Fall liegt das Problem möglicherweise nicht in der zuletzt durchgeführten Operation, sondern in den älteren, d.h. in den verschachtelten Operationen, wie in der [Baumansicht](/Tree_view/de "Tree view/de") angegeben. Zur Behebung dieser Probleme wird empfohlen, das Werkzeug ![](/images/Part_CheckGeometry.svg) [Part GeometriePrüfen](/Part_CheckGeometry/de "Part CheckGeometry/de") zu verwenden, um alle Objekte auf Probleme zu untersuchen.

![](/images/Part_Boolean_cut_coplanar_1.png)

![](/images/Part_Boolean_cut_coplanar_2.png)

Links: Bei Formen, die eine gemeinsame Fläche haben, kann eine boolesche Differenz zu falschen Ergebnissen führen. Rechts: Bei Formen, die sich deutlich überschneiden, wird ein boolescher Schnitt in den meisten Fällen erfolgreich sein.

![](/images/Part_Boolean_fusion_coplanar_1.png)

![](/images/Part_Boolean_fusion_coplanar_2.png)

Links: Bei Formen, die eine gemeinsame Fläche haben, kann eine boolesche Vereinigung zu falschen Ergebnissen führen. Rechts: Bei Formen, die sich deutlich überschneiden, wird die boolesche Vereinigung in den meisten Fällen erfolgreich sein.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Boolean/de&oldid=1466658>"
