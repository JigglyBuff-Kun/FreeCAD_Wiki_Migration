---
title: Draft UnterelementHervorheben
---
|  |
| --- |
| Draft UnterelementHervorheben |
| Menüeintrag |
| Änderung → Unterelement hervorheben |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de") |
| Standardtastenkürzel |
| H S |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| [Draft Verschieben](/Draft_Move/de "Draft Move/de"), [Draft Drehen](/Draft_Rotate/de "Draft Rotate/de"), [Draft Skalieren](/Draft_Scale/de "Draft Scale/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_SubelementHighlight.svg) **Draft UnterelementHervorheben** hebt ausgewählte Objekte oder die Basisobjekte ausgewählter Objekte temporär hervor. Er ist in Verbindung mit dem Unterelementmodus des Befehls [Draft Verschieben](/Draft_Move/de "Draft Move/de"), dem Befehl [Draft Drehen](/Draft_Rotate/de "Draft Rotate/de") oder dem Befehl [Draft Skalieren](/Draft_Scale/de "Draft Scale/de") zu verwenden. Zurzeit funktioniert der Unterelementmodus nur bei [Draft-Linien](/Draft_Line/de "Draft Line/de") und [Draft-Linienzügen](/Draft_Wire/de "Draft Wire/de") richtig.

![](/images/Draft_SubelementHighlight_example.png)

Eine Arch-Wand, deren Basis, ein Draft-Linienzug, markiert wurde

## Anwendung

1. Wahlweise eine oder mehrere [Draft-Linien](/Draft_Line/de "Draft Line/de"), [Draft-Linienzüge](/Draft_Wire/de "Draft Wire/de") oder Objekte deren Daten-Eigenschaft**Basis** Objekte enthält, die [Draft-Linien](/Draft_Line/de "Draft Line/de") oder [Draft-Linienzüge](/Draft_Wire/de "Draft Wire/de") sind.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_SubelementHighlight.svg) Unterelement hervorheben drücken.
   * Den Menüeintrag **Änderung → ![](/images/Draft_SubelementHighlight.svg) Unterelement hervorheben** auswählen.
   * Das Tastaturkürzel H dann S.
3. Wurde noch kein Element ausgewählt: Ein Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
4. Die ausgewählten Ojekte werden (bei Bedarf) eingeblendet, ihre Ansicht-Eigenschaft**Line Color** und Ansicht-Eigenschaft**Point Color** werden auf rot geändert und ihre Ansicht-Eigenschaft**Point Size** wird auf `10` geändert.
5. Es ist ratsam, jetzt die bestehende Auswahl abzuwählen, z.B. durch klicken auf einen beliebigen Punkt in der [3D-Ansicht](/3D_view/de "3D view/de").
6. Ein oder mehrere Unterelemente, Kanten oder Punkte, des Objekts, die rot markiert wurden, auswählen.
7. [Draft Verschieben](/Draft_Move/de "Draft Move/de"), [Draft Drehen](/Draft_Rotate/de "Draft Rotate/de") oder [Draft Skalieren](/Draft_Scale/de "Draft Scale/de") aufrufen.
8. Unterelement-Modus im Aufgaben-Fenster des Befehls umschalten, indem die Checkbox **Unterelemente ändern** aktiviert wird.
9. Die ausgewählten Unterelemente ändern und den laufenden Draft-Befehl fertigstellen.
10. Esc drücken, um die temporären visuellen Änderungen der Objekte zurückzunehmen.

## Hinweise

* Wurden Objekte mit diesem Befehl hervorgehoben, sollten die temporären visuellen Änderungen zurückgenommen werden, bevor die Datei gespeichert und wieder geöffnet wird.
* Hervorgehobene Objekte sollten nicht Kopiert werden, wenn der Unterelement-Modus ausgeschaltet ist. Die temporären visuellen Änderungen können für Kopien, die auf diese Art erstellt wurden, nicht zurückgenommen werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SubelementHighlight/de&oldid=1500179>"