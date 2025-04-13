---
title: Cables KnotenLöschen
---
|  |
| --- |
| Cables KnotenLöschen |
| Menüeintrag |
| Leitungsverlauf → Knoten löschen |
| Arbeitsbereich |
| [Cables](/Cables_Workbench/de "Cables Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| [Cables KnotenHinzufügen](/Cables_AddVertex/de "Cables AddVertex/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Cables_DelVertex.svg) Knoten löschen löscht einen bestehenden Knoten aus dem ![](/images/Cables_WireFlex.svg) [Leitungsverlauf](/Cables_WireFlex/de "Cables WireFlex/de")-Objekt. Die bestehende Zuweisung von Knoten auf Leitungsverläufen bleibt dabei erhalten. Er sollte anstatt des Befehls "Punkt löschen" aus [Draft Bearbeiten](/Draft_Edit/de "Draft Edit/de") genutzt werden, siehe die Beschreibung des [Leitungsverlaufs](/Cables_WireFlex/de#Description "Cables WireFlex/de").

## Anwendung

1. Wähle einen mittleren Knoten des [Leitungsverlaufs](/Cables_WireFlex/de "Cables WireFlex/de")-Objekt in der [3D-Ansicht](/3D_view/de "3D view/de").
2. Lösche die gewählten Knoten des **Leitungsverlaufs** mittels einer dieser Methoden:
   * Drücke den Knopf ![](/images/Cables_DelVertex.svg) Knoten löschen.
   * Wähle die Option **Leitungsverlauf → ![](/images/Cables_DelVertex.svg) Knoten löschen** aus dem Menü.
   * Rechts-Klick in der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") und wähle den Befehl **Leitungsverlauf → ![](/images/Cables_DelVertex.svg) Knoten löschen** aus dem Kontextmenü.

Nur mittlere Knoten können mit diesem Werkzeug gelöscht werden. Die ersten und letzen Knoten (Vrtx\_start und Vrtx\_end) können nicht gelöscht werden. Die Position der verbliebenen Knoten kann später mit dem Befehl [Draft Bearbeiten](/Draft_Edit/de "Draft Edit/de") bearbeitet werden, oder an ein anderes Objekt mit der Funktion ![](/images/Cables_AttachVertex.svg) [KnotenBefestigen](/Cables_AttachVertex/de "Cables AttachVertex/de") angehangen werden.

## Hinweise

* Siehe [Linienzug-Beschreibung](/Cables_WireFlex/de#Description "Cables WireFlex/de") und [Linienzug-Nutzung](/Cables_WireFlex/de#Usage "Cables WireFlex/de") für Details zu Linienzug-Nutzung

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_DelVertex/de&oldid=1557694>"