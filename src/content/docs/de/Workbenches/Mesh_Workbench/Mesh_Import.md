---
title: Mesh Importieren
---

|                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------- |
| Mesh Importieren                                                                                                                             |
| Menüeintrag                                                                                                                                  |
| Netze → Netz importieren...                                                                                                                  |
| Arbeitsbereich                                                                                                                               |
| [Mesh](/Mesh_Workbench/de "Mesh Workbench/de")                                                                                               |
| Standardtastenkürzel                                                                                                                         |
| _Keiner_                                                                                                                                     |
| Eingeführt in Version                                                                                                                        |
| -                                                                                                                                            |
| Siehe auch                                                                                                                                   |
| [Std Import](/Std_Import/de "Std Import/de"),[Std Öffnen](/Std_Open/de "Std Open/de"), [Import Export](/Import_Export/de "Import Export/de") |
|                                                                                                                                              |

## Beschreibung

Der Befehl **Mesh Import** importiert Geometrie aus einem Netz-Dateiformat in das aktive Dokument, wobei unterschiedliche Dateiformate unterstützt werden. Der Befehl erzeugt ein nicht-parametrisches Netzobjekt, ein [Mesh Formelement](/Mesh_Feature/de "Mesh Feature/de").

## Anwendung

1. - Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Mesh_Import.svg) Netz importieren... drücken.
   - Den Menüeintrag **Netze → ![](/src/assets/images/Mesh_Import.svg) Netz importieren...** auswählen.
   - Die Menüoption **![](/src/assets/images/Mesh_Import.svg) Netz importieren...** im Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") auswählen. Diese Option steht nur zur Verfügung, wenn ein vorhandenes Netzobjekt ausgewählt wurde. Man beachte, dass das ausgewählte Objekt durch den Befehl eigentlich nicht verwendet oder verändert wird.
2. Wahlweise das richtige Dateiformat im Dialogfeld auswählen.
3. Eine Datei auswählen.
4. Die Schaltfläche Öffnen drücken.

## Unterstützte Dateiformate

Der Befehl unterstützt: stl-, ast-, bms-, obj-, off-, iv-, ply-, nas- und bdf-Dateien. Für das NASTRAN-Dateiformat (nas/bdf) werden nur die Karten GRID, CTRIA3 und CQUAD4 unterstützt.

## Einstellungen

- Der zuletzt verwendete Dateispeicherort wird gespeichert: **Werkzeuge → Parameter bearbeiten... → BaseApp (BasisAnwendung) → Preferences (Einstellungen) → General (Allgemein) → FileOpenSavePath**.

## Eigenschaften

Siehe: [Mesh Formelement](/Mesh_Feature/de "Mesh Feature/de").

## Skripten

Siehe auch: [FreeCAD Skripten Grundlagen](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um eine Netzdatei zu importieren, wird die Methode `insert` des Mesh-Moduls verwendet.

```
import Mesh
Mesh.insert('D:/testfiles/cylinder.stl')

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Import/de&oldid=1350526>"
