---
title: BIM Ansichten
---
|  |
| --- |
| BIM Ansichten |
| Menüeintrag |
| Manage → Views manager |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der **BIM views and levels manager** ist ein andockbares Fenster, das sich unterhalb der normalen Baumansicht öffnet und alle [Gebäudeteile](/Arch_BuildingPart/de "Arch BuildingPart/de") und [Arbeitsebenen-Proxies](/Draft_WorkingPlaneProxy/de "Draft WorkingPlaneProxy/de") des Modells enthält.

Das Ziel dieses Fensters ist es, einen schnellen Zugriff auf deine Ebenen- und Arbeitsebenen-Konfigurationen zu ermöglichen, ohne dass du durch den Baum navigieren musst, um sie zu finden.

![](/images/BIM_views_screenshot.png)

Der BIM views and levels manager

## Anwendung

Der BIM Ansichtenverwalter zeigt alle Ebenen (Gebäudeteile) und Arbeitsebenen Proxys deines Dokuments an. Er kann an einer beliebigen Stelle in der FreeCAD Oberfläche angedockt oder in einem eigenständigen Fenster belassen werden. Gebäudeteile zeigen auch ihre Ebene an (die Z Koordinate ihrer Positionierung).

* Drücken des TastaturkürzelsStrg+9 oder der Schaltfläche **BIM Ansichten-Manager** in der Statusleiste blendet den BIM-Ansichten-Manager ein bzw. aus.
* Anklicken eines beliebigen Eintrags wählt das entsprechende Objekt aus.
* Ein Doppelklick auf die Höhe eines Stockwerks ermöglicht, sie zu ändern.
* Ein Doppelklick auf den Namen eines beliebigen Objekts richtet die Arbeitsebene darauf aus und wenn die Eigenschaft **Restore View** auf True gesetzt ist und die Konfiguration einer Ansicht darin gespeichert wurde, wird der Blickpunkt ebenfalls wiederhergestellt.
* Der BIM-Views-Manager besitzt ein Rechtsklick-Kontextmenü mit den folgenden Optionen:
  + **Stockwerk hinzufügen** erstellt ein neues [Stockwerk](/Arch_BuildingPart/de "Arch BuildingPart/de")
  + **Proxy hinzufügen** erstellt einen neuen [Arbeitsebenen-Proxy](/Draft_WorkingPlaneProxy/de "Draft WorkingPlaneProxy/de")
  + **Löschen** löscht das ausgewählte Element.
  + **Ein-/Ausschalten** schaltet die Sichtbarkeit eines Stockwerks ein bzw. aus (genau wie die Leertaste).
  + **Isolieren** schaltet die Sichtbarkeit aller Stockwerke, bis auf das ausgewählte, aus.
  + **Ansichtsposition speichern** speichert die Einstellungen der aktuellen Ansicht im ausgewählten Objekt und ermöglicht so, sie wiederherzustellen, wenn seine Eigenschaft **Restore View** auf True gesetzt ist.
  + **Umbenennen** ermöglicht das Umbenennen eines ausgewählten Objekts.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Views/de&oldid=1474617>"