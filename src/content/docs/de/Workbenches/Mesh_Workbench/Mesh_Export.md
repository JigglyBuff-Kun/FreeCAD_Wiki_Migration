---
title: Mesh Exportieren
---

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| Mesh Exportieren                                                                                    |
| Menüeintrag                                                                                         |
| Netze → Netz exportieren...                                                                         |
| Arbeitsbereich                                                                                      |
| [Mesh](/Mesh_Workbench/de "Mesh Workbench/de")                                                      |
| Standardtastenkürzel                                                                                |
| _Keiner_                                                                                            |
| Eingeführt in Version                                                                               |
| -                                                                                                   |
| Siehe auch                                                                                          |
| [Std Export](/Std_Export/de "Std Export/de"), [Import Export](/Import_Export/de "Import Export/de") |
|                                                                                                     |

## Beschreibung

Der Befehl **Mesh Exportieren** exportiert ein Netzobjekt in ein Netz-Dateiformat, wobei unterschiedliche Dateiformate unterstützt werden.

## Anwendung

1. Ein einzelnes Netzobjekt auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Mesh_Export.svg) Netz exportieren... drücken.
   - Den Menüeintrag **Netze → ![](/src/assets/images/Mesh_Export.svg) Netz exportieren...** auswählen.
   - Die Menüoption **![](/src/assets/images/Mesh_Export.svg) Netz exportieren...** im Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
3. Im Dialogfeld das richtige Dateiformat auswählen.
4. Einen Dateinamen eingeben. Wenn im vorherigen Schritt die Option `Alle Dateien (*.*)` ausgewählt wurde und hier keine Dateierweiterung angegeben wird, wird die Erweiterung .stl verwendet.
5. Die Schaltfläche Speichern drücken.

## Hinweise

Es gibt einige [Exporteinstellungen im Zusammenhang mit Netzformaten](/Import_Export_Preferences/de#Verfügbare_Einstellungen "Import Export Preferences/de"), aber sie stehen diesem Befehl nicht zur Verfügung. Sie werden von dem Befehl [Std Export](/Std_Export/de "Std Export/de") verwendet.

## Einstellungen

- Der zuletzt verwendete Dateispeicherort wird gespeichert: **Werkzeuge → Parameter bearbeiten... → BaseApp (BasisAnwendung) → Preferences (Einstellungen) → General (Allgemein) → FileOpenSavePath**.

## Skripten

Siehe auch: [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um Objekte (einschließlich Netzobjekte) in ein Netz-Dateiformat zu exportieren, wird die Methode `export` des Mesh-Moduls verwendet.

```
import FreeCAD
import Mesh

doc = FreeCAD.ActiveDocument

Mesh.export([doc.Cone, doc.Cylinder], 'D:/testfiles/mymodel.stl')

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Export/de&oldid=1350609>"
