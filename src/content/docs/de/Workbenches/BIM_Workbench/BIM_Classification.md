---
title: BIM Klassifizierung
---
|  |
| --- |
| BIM Klassifizierung |
| Menüeintrag |
| Manage → Manage classification... |
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

Die **Klassifizierung** ermöglicht, einem BIM-Objekt oder -Material eine Standardklasse zuzuordnen. FreeCAD enthält keine Standardsysteme; die, die man verwenden möchte, müssen vor dem Einsatz dieses Werkzeuges heruntergeladen werden. Siehe den Abschnitt [Klassifizierungssysteme herunterladen](#Downloading_classification_systems/de) weiter unten.

![](/images/BIM_classification_screenshot.png)

Klassifizierungsdialog

## Anwendung

1. Eine oder mehrere XML- oder -IFC-Dateien für den Klassifikations-Standard wie oben erklärt installieren.
2. Soll eine Klasse für ein Objekt hinzugefügt oder bearbeitet werden, wird das Objekt ausgewählt und die Schaltfläche Manage classification... gedrückt.
3. Soll eine Klasse für ein Material hinzugefügt oder bearbeitet werden, wird nichts ausgewählt und nur die Schaltfläche Manage classification... gedrückt. Die Materialien können direkt vom Fenster des Klassifizierungsmanagers aus durchsucht werden.

## Klassifizierungssysteme herunterladen

Es stehen mehrere Klassifizierungssysteme in XML- oder IFC-Form zur Verfügung (beide werden von diesem Werkzeug unterstützt), von <https://github.com/Moult/IfcClassification>, direkt von ihren Herausgebern oder von <https://www.graphisoft.com/downloads/archicad/BIM_Data.html>. Damit FreeCAD diese XML- oder IFC-Dateien (er-) kennt, müssen sie in einem BIM-Unterordner des FreeCAD-Benutzerordners abgelegt werden. Der genaue Ablageort im System wird im BIM-Klassifizierungsdialog angegeben. Wenn sowohl eine IFC- als auch eine XML- Datei vorhanden sind, wird das BIM-Klassifizierungswerkzeug die IFC-Datei bevorzugen.

Es gibt ein [nützliches Makro](/index.php?title=Macro_Download_Classifications/de&action=edit&redlink=1 "Macro Download Classifications/de (page does not exist)"), das alle bereitgestellten Systeme von <https://github.com/Moult/IfcClassification> herunterladen und direkt in den richtigen Ordner ablegen kann. Nach dem Ausführen des Makros ist dieses Werkzeug einsatzbereit einsatzbereit.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Classification/de&oldid=1534873>"