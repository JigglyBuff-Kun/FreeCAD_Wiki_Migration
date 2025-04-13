---
title: Part Formgenerator
---
|  |
| --- |
| Part Formgenerator |
| Menüeintrag |
| Part → Formgenerator... |
| Arbeitsbereich |
| [Part](/Part_Workbench/de "Part Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Part Grundkörper](/Part_Primitives/de "Part Primitives/de") |
|  |

## Beschreibung

Ein Werkzeug zur Erstellung von komplexeren Formen aus verschiedenen parametrischen geometrischen Grundkörpern.

## Anwendung

Dieses Werkzeug kann die folgenden Objekte erstellen:

### Kante aus zwei Knoten

1. Wähle zwei Knoten aus
2. Klicke auf Erstellen

![](/images/Edge_from_verts-1.gif)

### Draht aus Kanten

1. Wählein der [3D Ansicht](/3D_view/de "3D view/de") eine Reihe von benachbarten Kanten aus.
2. Klicke auf Erstellen

![](/images/Wire_from_edges-1.gif)

### Fläche aus Knoten

1. Wähle Knoten, die die Fläche in der [3D Ansicht](/3D_view/de "3D view/de") umschließen.
2. Wähle, ob die Fläche planar sein soll.
3. Klicke auf Erstellen
4. Objekt wird in der [3D Ansicht](/3D_view/de "3D view/de") erstellt und in der [Baumansicht](/Tree_view/de "Tree view/de") aufgelistet

![](/images/Face_from_verts.gif)

### Fläche aus Kanten

1. Wähle eine geschlossene Satz von Kanten, die die Fläche in der [3D Ansicht](/3D_view/de "3D view/de") umschließen.
2. Wähle ob die Fläche planar sein soll.
3. Klicke auf Erstellen
4. Objekt wird in der [3D Ansicht](/3D_view/de "3D view/de") erstellt und in der [Baumansicht](/Tree_view/de "Tree view/de") aufgelistet

![](/images/Face_from_edges.gif)

### Hülle aus Flächen

1. Flächen in der [3D Ansicht](/3D_view/de "3D view/de") auswählen
2. Wähle ob die Form verfeinert werden soll.
3. Wähle ob alle Flächen in die Hülle aufgenommen werden sollen.
4. Klicke auf Erstellen
5. Objekt wird in der [3D Ansicht](/3D_view/de "3D view/de") erstellt und in der [Baumansicht](/Tree_view/de "Tree view/de") aufgelistet

### Festkörper aus Hülle

1. Wähle es, wenn die Form verfeinert werden soll.
2. Klicke auf Erstellen
3. Das Objekt wird in der [3D Ansicht](/3D_view/de "3D view/de") erstellt und in der [Baumansicht](/Tree_view/de "Tree view/de") aufgelistet

## Hinweise

Ein möglicher Arbeitsablauf könnte sein:

* Zeichne ein Drahtgittermodell deiner Form mit den Werkzeugen in der ![](/images/Workbench_Draft.svg) [Entwurf Arbeitsbereich](/Draft_Workbench/de "Draft Workbench/de") (z.B. Linie und Draht)
* Erzeuge alle Flächen mit "Fläche aus Kanten"
* Erzeuge eine "Hülle aus Flächen"
* Erzeuge einen "Festkörper aus Hülle"

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Builder/de&oldid=1517540>"