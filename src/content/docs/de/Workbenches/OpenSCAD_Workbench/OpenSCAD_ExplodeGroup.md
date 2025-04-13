---
title: OpenSCAD GruppeSprengen
---
|  |
| --- |
| OpenSCAD GruppeSprengen |
| Menüeintrag |
| OpenSCAD → Sprenge Gruppe‏‎ |
| Arbeitsbereich |
| [OpenSCAD](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Diese Funktion sprengt eine Vereinigung oder einen Verbund zurück in einzelne Teile, wobei diesen Teilen zufällige Farben zugeordnet werden.

## Anwendung

1. Zu sprengende(n) Vereinigung/Verbund auswählen.
2. Auf ![](/images/OpenSCAD_ExplodeGroup.svg) klicken oder den Menüeintrag  OpenSCAD → ![](/images/OpenSCAD_ExplodeGroup.svg) GruppeSprengen auswählen.

## Begrenzungen

Die Funktion arbeitet nur mit Vereinigungen/Verbunden bestehend aus

* Part-Grundelementen des Arbeitsbereichs Part
* Extrudierten Teilen des Arbeitsbereichs Part
* Gedrehten Teilen des Arbeitsbereichs Part

Die Funktion funktioniert **NICHT** bei

* Aufpolsterungen/gedrehten Teilen des Arbeitsbereichs PartDesign
* Anordnungen des Arbeitsbereichs Draft

## Hinweise

Um Anordnungen des Arbeitsbereichs Draft aufzulösen, wird das das Werkzeug [Draft Herabstufen](/Draft_Downgrade/de "Draft Downgrade/de") des Arbeitsbereichs Draft verwendet.

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_ExplodeGroup/de&oldid=1248481>"