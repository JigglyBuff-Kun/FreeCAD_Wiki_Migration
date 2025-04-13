---
title: Draft KonstruktionsmodusUmschalten
---
|  |
| --- |
| Draft KonstruktionsmodusUmschalten |
| Menüeintrag |
| Dienstprogramme → Konstruktionsmodus umschalten |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| Draft: C M |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Draft HilfsgeometrieHinzufügen](/Draft_AddConstruction/de "Draft AddConstruction/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_ToggleConstructionMode.svg) **Draft KonstruktionsmodusUmschalten** schaltet den Draft Konstruktionsmodus ein oder aus. Falls der Konstruktionsmodus eingeschaltet ist, werden neue [Draft](/Draft_Workbench/de "Draft Workbench/de")-Objekte einer bestimmen Gruppe zugeordnet und erhalten eine vordefinierte Farbe. Diese Möglichkeit ist für - oftmals temporäre - Hilfsgeometrie gedacht, um für die Erzeugung weiterer Objekte neue [Einrastpunkte](/Draft_Snap/de "Draft Snap/de") bereitzustellen. Wenn die Hilfsgeometrie nicht länger benötigt wird, kann die Konstruktionsgruppe einfach [ausgeblendet](/Std_HideSelection/de "Std HideSelection/de") oder [gelöscht](/Std_Delete/de "Std Delete/de") werden.

![](/images/Draft_construction_mode_example.jpg)

Hilfsgeometrie, in blau, hilft bei der Festlegung von Mittelpunkt und Radius eines Kreises

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_tray_button_construction.png) in der [Draft Ablage](/Draft_Tray/de "Draft Tray/de"). Diese Schaltfläche ist heruntergedrückt, wenn der Konstruktionsmodus gerade eingeschaltet ist.
   * [Draft](/Draft_Workbench "Draft Workbench"): Den Menüeintrag **Dienstprogramme → ![](/images/Draft_ToggleConstructionMode.svg) Konstruktionsmodus umschalten** auswählen oder die Menüoption im Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   * Draft: Das Tastaturkürzel C dann M.
2. Die Schaltfläche in der [Draft Ablage](/Draft_Tray/de "Draft Tray/de") wird aktualisiert.

## Hinweise

* Falls der Draft Konstruktionsmodus eingeschaltet ist, wird die aktive [Ebene](/Draft_Layer/de "Draft Layer/de") ignoriert.

## Einstellungen

* Zur Änderung der Bezeichnung der Hilfsgeometriegruppe: **Bearbeiten → Einstellungen... → Draft → Allgemein → Benennung der Hilfsgeometriegruppen**.
* Zur Änderung der zu verwendenden Farbe: **Bearbeiten → Einstellungen... → Draft → Allgemein → Farbe der Hilfsgeometrie**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ToggleConstructionMode/de&oldid=1513904>"