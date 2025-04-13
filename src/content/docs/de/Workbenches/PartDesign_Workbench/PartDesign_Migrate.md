---
title: PartDesign Migrieren
---
:::caution
Dieses Werkzeug ist veraltet, es wird in1.0 und neuernicht mehr enthalten sein.
:::

|  |
| --- |
| PartDesign Migrieren |
| Menüeintrag |
| Part Design → Migrieren |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der PartDesign Arbeitsbereich in FreeCAD v0.17 enthält neue Werkzeuge und Elemente, die von älteren FreeCAD-Versionen (0.16 und älter) nicht erkannt werden. FreeCAD Dokumente, die in älteren Versionen erstellt wurden, können weiterhin geöffnet und bearbeitet werden. Um von den neuen Funktionen zu profitieren, müssen sie über das Menü PartDesign → Migrieren migriert werden.

[eingeführt in 0.17](/Release_notes_0.17/de "Release notes 0.17/de")

## Anwendung

1. Öffne ein älteres FreeCAD Dokument 0.16 und davor
2. Wechsle zum ![](/images/Workbench_PartDesign.svg) [PartDesign Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de").
3. Gehe zum **PartDesign** → **Migrieren** Menü.
4. Wenn die Migration funktioniert, wird eine ![](/images/Std_Part.svg) [Part Behälter](/Std_Part/de "Std Part/de") erstellt, welche eine oder mehrere ![](/images/PartDesign_Body.png) [Körper](/PartDesign_Body/de "PartDesign Body/de") enthält, die jeweils eine Reihe von Formelementen enthalten.

## Begrenzungen

* Überprüfe vor dem Start des Migrationsprozesses, ob das Modell mit aktivierten automatischen Verfeinerungsoptionen erstellt wurde (unter **Bearbeiten → Voreinstellungen → Part Design → Allgemein**) und lege deine Einstellungen entsprechend fest. Dies kann leicht bestimmt werden, indem nacheinander die Sichtbarkeit der Merkmale in der Modellstruktur umgeschaltet wird. Wenn keine verbleibenden Kanten zwischen Formelementen wie Polster und Taschen verbleiben, wurden die automatischen Verfeinerungsoptionen deaktiviert.
* Wenn ein zu migrierendes Dokument nur Skizzen und PartDesign Formelemente enthält, ist der Migrationsprozess wahrscheinlich erfolgreich. Einige Funktionen wie Fasen und Verrundungen müssen möglicherweise neu erstellt werden.
* Wenn das zu migrierende Dokument einen gemischten Teil- / Teileentwurf / Entwurf Arbeitsablauf aufweist, wird die Konvertierung wahrscheinlich fehlschlagen oder bestenfalls zu unerwarteten Ergebnissen führen und muss manuell migriert werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Migrate/de&oldid=1462749>"