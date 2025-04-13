---
title: BIM Bibliothek
---
|  |
| --- |
| BIM Bibliothek |
| Menüeintrag |
| 3D/BIM → Generische 3D-Werkzeuge → Objektbibliothek |
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

Das Werkzeug **BIM Bibliothek** ermöglicht im aktuellen Modell ein Objekt aus der [FreeCAD-Bauteilbibliothek](/Parts_Library_Workbench/de "Parts Library Workbench/de") einzusetzen, die über den ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden muss, damit dieses Werkzeug verfügbar ist.

![](/images/BIM_Library_screenshot.png)

Oben: Der Dialog *Library browser'* in der [Aufgaben-Tafel](/Task_panel/de "Task panel/de") auf der linken Seite.

## Anwendung

1. Die Schaltfläche ![](/images/BIM_Library.svg) Objektbibliothek drücken.

   :   Ergebnis: In der [Combo Ansicht](/Combo_view/de "Combo view/de") → [Aufgaben-Fenster](/Task_panel/de "Task panel/de") wird ein Dialog mit dem Titel **Bibliotheken-Browser** angezeigt.
2. Im Bibliotheken-Browser eine Datei anklicken.
3. Diese doppelt anklicken oder die Schaltfläche Einfügen drücken.
4. Einen Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") anklicken oder eine Koordinate manuell eingeben, um das Objekt zu positionieren

## Optionen

* Es werden [FCStd-](/File_Format_FCStd/de "File Format FCStd/de"), STEP- und [BREP](/File_Format_FCStd/de#*.brep "File Format FCStd/de")-Dateien unterstützt. Nur STEP- und BREP-Dateien sind postionierbar. Bei FCStd-Dateien kann keine Positionierung gewählt werden, da sie aus einer komplexen Reihe von Objekten mit signifikanten Positionen bestehen können. Wird eine FCStd-Datei ausgewählt, wird ihr Inhalt an der Position eingefügt, die in der Datei definiert ist.
* STEP- und BREP-Objekte werden als ![](/images/Arch_Equipment.svg) [Ausstattung](/Arch_Equipment/de "Arch Equipment/de") ohne separate Basisform eingefügt. Das nachträgliche Hinzufügen einer Basisform zu diesen Objekten zerstört deren aktuelle Form.
* Beim Positionieren eines Objekts kann dessen Einfügepunkt zwischen Original (dem in der Datei definierten Punkt (`0,0,0`)), oben, Mitte, unten und links, Mitte und rechts wählen.
* Die Bibliothek kann offline arbeiten, in diesem Fall ist sie darauf angewiesen, dass das Addon Parts Library installiert (und vom Benutzer aktualisiert) wird, oder online, in diesem Fall browst sie direkt aus dem [Parts-Library-Git-Repository](https://github.com/FreeCAD/FreeCAD-library) und ermöglicht das direkte Herunterladen von dort.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Library/de&oldid=1517576>"