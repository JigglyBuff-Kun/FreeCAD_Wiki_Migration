---
title: Arch Referenz
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Referenz |
| Menüeintrag |
| 3D/BIM → Generic 3D tools → Externe Referenz |
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

Das Werkzeug **Arch Referenz** ermöglicht im aktuellen Dokument ein Objekt zu platzieren, das die Form und Farben eines in einer anderen Datei gespeicherten [Part](/Part_Workbench/de "Part Workbench/de")-basierten Objekts (einschließlich [Arch Gebäudeteil](/Arch_BuildingPart/de "Arch BuildingPart/de")) kopiert. Wenn sich die FreeCAD-Datei ändert, wird das Objekt für eine Aktualisierung vorgemerkt.

![](/images/Arch_reference_screenshot.png)

## Anwendung

1. Die Schaltfläche ![](/images/Arch_Reference.svg) ExterneReferenz drücken.
2. Die Schaltfläche Datei auswählen... drücken und eine vorhandene FreeCAD-Datei auswählen.
3. Eins der enthaltenen auf Part basierenden Objekte in der Aufklappliste auswählen.
4. OK drücken.

## Optionen

* Das Referenz-Objekt kann bewegt und gedreht werden, die aktuelle Position wird bei einem Neuladen des Objekts beibehalten.
* Falls das Original-Objekt in der externen Datei bewegt wird, wird sich diese Bewegung auf das Referenz-Objekt auswirken.
* Bei Rechtsklick eines Referenz-Objekts in der Baumansicht hast du die Optionen, das Original-Objekt neuzuladen oder die externe Datei zu öffnen.
* Um mehrere Objekte auf einmal zu referenzieren, platziere sie in einem [Arch Gebäudeteil](/Arch_BuildingPart/de "Arch BuildingPart/de").
* Beim Ausschalten der **Update Colors**-Eigenschaft der Referenz werden die Originalfarben nicht mehr neugeladen, so dass du sie gefahrlos ändern kannst.

## Eigenschaften

* Daten-Eigenschaft**File**: Die zugrunde liegende Datei, auf der diese Komponente basiert
* Daten-Eigenschaft**Part**: Das zu verwendende Teil aus der zugrunde liegenden Datei
* Ansicht-Eigenschaft**Update Colors**: Falls `true`, werden die Farben auf Basis der verbundenen Datei aktualisiert

## Skripten

Das Werkzeug Referenz kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus durch Verwendung der folgenden Funktion verwendet werden:

```
reference = makeReference([filepath], [partname], [name])

```

erstellt ein Objekt `reference` mit dem Namen `name` vom Objekt `partname` in der Datei `filepath`. Alle Argumente sind optional.

Beispiel:

```
import Arch
Arch.makeReference("/path/to/some/file.FSCtd", "myPart")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Reference/de&oldid=1482634>"