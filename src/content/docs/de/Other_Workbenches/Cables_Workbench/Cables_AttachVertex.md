---
title: Cables KnotenBefestigen
---
|  |
| --- |
| Cables KnotenBefestigen |
| Menüeintrag |
| Leitungsverlauf → Knoten befestigen |
| Arbeitsbereich |
| [Cables](/Cables_Workbench/de "Cables Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| [Cables KnotenBefestigungEntfernen](/Cables_RemoveVertexAttachment/de "Cables RemoveVertexAttachment/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Cables_AttachVertex.svg) KnotenBefestigen befestigt einen bestehenden Knoten des ![](/images/Cables_WireFlex.svg) [Leitungsverlaufs](/Cables_WireFlex/de "Cables WireFlex/de") an einem externen Knoten oder Objekt. Die Befestigungen von Knoten werden in speziellen Eigenschaften des Leitungsverlaufs festgehalten. Für Details siehe [Leitungsverlauf-Eigenschaften](/Cables_WireFlex/de#Properties "Cables WireFlex/de").

Sobald der Leitungs-Knoten angehängt ist, behält er dieselbe Position im 3D-Raum wie der externe Knoten, an den er angehängt ist. Wenn der externe Knoten bewegt wird, bewegt sich der angehängte Leitungs-Knoten mit. Wenn die Leitung in [Draft Bearbeiten](/Draft_Edit/de "Draft Edit/de") bearbeitet wird, kann der angehängte Knoten nicht verschoben werden. Er springt auf seine angehängte Position zurück.

## Anwendung

1. Wähle einen Knoten des bestehenden [Leitungsverlauf](/Cables_WireFlex/de "Cables WireFlex/de")-Objekts in der [3D-Ansicht](/3D_view/de "3D view/de") aus.
2. Wähle einen externen Knoten in der [3D-Ansicht](/3D_view/de "3D view/de") mit gedrückter STRG-Taste aus.
3. Erzeuge einen neuen Leitungsverlauf-**Knoten befestigen** mit einer dieser Methoden:
   * Drücke den Knopf ![](/images/Cables_AddVertex.svg) [Knoten hinzufügen](/Cables_AddVertex/de "Cables AddVertex/de").
   * Wähle die Option **Leitungsverlauf → ![](/images/Cables_AddVertex.svg) Knoten hinzufügen** aus dem Menü.
   * Rechts-Klick in der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") und wähle den Befehl **Leitungsverlauf → ![](/images/Cables_AddVertex.svg) Knoten hinzufügen** aus dem Kontextmenü.

Hinweis: Die Auswahl von externen Elementen, die keine Knoten sind, wird wie eine Auswahl des gesamten Objekts behandelt. Das Anhängen an ein Objekt wird als Anhängen an seine Placement.Base verstanden.

## Hinweise

* Siehe [Linienzug-Beschreibung](/Cables_WireFlex/de#Description "Cables WireFlex/de") und [Linienzug-Nutzung](/Cables_WireFlex/de#Usage "Cables WireFlex/de") für Details zu Linienzug-Nutzung

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_AttachVertex/de&oldid=1557686>"