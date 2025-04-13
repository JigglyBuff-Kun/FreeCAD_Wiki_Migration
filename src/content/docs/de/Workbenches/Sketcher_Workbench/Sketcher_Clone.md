---
title: Sketcher Klonen
---

:::caution
Dieses Werkzeug ist veraltet; es wird in1.0 und neuernicht mehr zur Verfügung stehen. Stattdessen kannSketcher Verschiebenverwendet werden.
:::

|                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------- |
| Sketcher Klonen                                                                                                         |
| Menüeintrag                                                                                                             |
| Sketch → Skizzen-Werkzeuge → Klonen                                                                                     |
| Arbeitsbereich                                                                                                          |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                              |
| Standardtastenkürzel                                                                                                    |
| Z L                                                                                                                     |
| Eingeführt in Version                                                                                                   |
| 0.16                                                                                                                    |
| Siehe auch                                                                                                              |
| [Sketcher Kopieren](/Sketcher_Copy/de "Sketcher Copy/de"), [Sketcher Verschieben](/Sketcher_Move/de "Sketcher Move/de") |
|                                                                                                                         |

## Beschreibung

Der Befehl ![](/src/assets/images/Sketcher_Clone.svg) Sketcher Klonen klont die ausgewählten Skizzenelemente von einem Punkt an einen anderen, wobei der zuletzt gewählte
Punkt als Referenzpunkt dient. Wenn die Quellelemente Beschränkungen enthalten, werden die neuen Beschränkungen mit den Quellbeschränkungen verbunden; wenn Beschränkungen in der Quelle verändert werden, ändern sich auch die Beschränkungen im Ziel. Um diese Verknüpfung zu vermeiden, siehe ![](/src/assets/images/Sketcher_Copy.svg)[Skizzierer Kopieren](/Sketcher_Copy/de "Sketcher Copy/de").

Ein Klon eines Klons wird eine [Kopie](/Sketcher_Copy/de "Sketcher Copy/de"). Wenn verbundene Beschränkungen erstellt werden sollen, sind die ursprünglichen Quellelemente zu klonen.

## Anwendung

1. Die zu klonenden Skizzenelemente auswählen.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_Clone.svg) Klonen drücken.
   - Den Menüeintrag **Sketch → Skizzen-Werkzeuge → ![](/src/assets/images/Sketcher_Clone.svg) Klonen** auswählen.
3. Die Maus in der [3D-Ansicht](/3D_view/de "3D view/de") auf die gewünschte Position für den Klon bewegen.  
   Wird Shift gedrückt gehalten, kann der Winkel um den Einsetzpunkt in 5°-Schritten angepasst werden. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")
4. Mit der linken Maustaste in die 3D-Ansicht klicken, um den Klon zu erstellen.

Es werden keine zusätzlichen Randbedingungen für den Klon hinzugefügt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Clone/de&oldid=1403967>"
