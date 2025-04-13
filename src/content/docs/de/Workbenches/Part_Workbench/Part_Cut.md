---
title: Part Differenz
---
|  |
| --- |
| Part Differenz |
| Menüeintrag |
| Part → Boolesche Verknüpfungen → Differenz |
| Arbeitsbereich |
| [Part](/Part_Workbench/de "Part Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Part Boolesche Verknüpfung](/Part_Boolean/de "Part Boolean/de"), [Part Vereinigung](/Part_Fuse/de "Part Fuse/de"), [Part Schnitt](/Part_Common/de "Part Common/de") |
|  |

## Beschreibung

Das Werkzeug ![](/images/Part_Cut.svg) **Part Differenz** beschneidet ausgewählte Part-Objekte, wobei das zuletzt ausgewählte vom ersten abgezogen (subtrahiert) wird. Diese Operation ist voll parametrisch und die Komponenten können modifiziert und das Ergebnis neu berechnet werden.

Dieses Werkzeug ist eine automatisierte Form der ![](/images/Part_Booleans.svg) [Booleschen Verknüpfung](/Part_Boolean/de "Part Boolean/de").

![](/images/Part_Cut_01.png)

## Anwendung

1. Zwei Formen auswählen
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Part_Cut.svg) Differenz drücken
   * Den Menüeintrag **Part → Boolesche Verknüpfung → ![](/images/Part_Cut.svg) Differenz** auswählen.

## Unterstützte Eingaben

Eingabeobjekte müssen [OpenCASCADE](/OpenCASCADE/de "OpenCASCADE/de")-Formen sein. Zum Beispiel Objekte die mit den Arbeitsbereichen Part, PartDesign oder Sketcher erstellt wurden. Für Polygonnetze gibt es eigene boolesche Werkzeuge im Arbeitsbereich [Mesh](/Mesh_Workbench/de "Mesh Workbench/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Cut/de&oldid=1497141>"