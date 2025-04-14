---
title: Std AuswählbarkeitUmschalten
---

|                                                  |
| ------------------------------------------------ |
| Std AuswählbarkeitUmschalten                     |
| Menüeintrag                                      |
| Ansicht → Sichtbarkeit → Selektierbarkeit an/aus |
| Arbeitsbereich                                   |
| Alle                                             |
| Standardtastenkürzel                             |
| _Keiner_                                         |
| Eingeführt in Version                            |
| -                                                |
| Siehe auch                                       |
| _Keiner_                                         |
|                                                  |

## Beschreibung

Der Befehl **Std AuswählbarkeitUmschalten** schaltet die Auswählbarkeit von Objekten in den [3D-Ansichten](/3D_view "3D view") um.

## Anwendung

1. Ein oder mehrere Objekte auswählen.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   - Den Menüeintrag **Ansicht → Sichtbarkeit → ![](/images/Std_ToggleSelectability.svg) Selektierbarkeit an/aus** auswählen.
   - Die Menüoption **![](/images/Std_ToggleSelectability.svg) Selektierbarkeit an/aus** im Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") oder der 3D-Ansicht auswählen.

## Hinweise

- Die Auswählbarkeit eines Objekts kann auch durch die mit ihm verknüpfte Daten-Eigenschaft**Selectable** im [Eigenschafteneditor](/Property_editor/de "Property editor/de") geändert werden.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Die Eigenschaft `Selectable` eines Objekts bestimmt seine Auswählbarkeit.

```
import FreeCADGui

obj = FreeCADGui.ActiveDocument.myObjectName

obj.Selectable = not obj.Selectable

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleSelectability/de&oldid=1500130>"
