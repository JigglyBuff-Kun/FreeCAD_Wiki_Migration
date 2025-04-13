---
title: Std SichtbarkeitUmschalten
---

|                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Std SichtbarkeitUmschalten                                                                                                                                                                                                                                                                                                                                |
| Menüeintrag                                                                                                                                                                                                                                                                                                                                               |
| Ansicht → Ein/Ausblenden                                                                                                                                                                                                                                                                                                                                  |
| Arbeitsbereich                                                                                                                                                                                                                                                                                                                                            |
| Alle                                                                                                                                                                                                                                                                                                                                                      |
| Standardtastenkürzel                                                                                                                                                                                                                                                                                                                                      |
| Space                                                                                                                                                                                                                                                                                                                                                     |
| Eingeführt in Version                                                                                                                                                                                                                                                                                                                                     |
| -                                                                                                                                                                                                                                                                                                                                                         |
| Siehe auch                                                                                                                                                                                                                                                                                                                                                |
| [Std AuswahlEinblenden](/Std_ShowSelection/de "Std ShowSelection/de"), [Std AuswahlAusblenden](/Std_HideSelection/de "Std HideSelection/de"), [Std ObjekteUmschalten](/Std_ToggleObjects/de "Std ToggleObjects/de"), [Std ObjekteEinblenden](/Std_ShowObjects/de "Std ShowObjects/de"), [Std ObjekteAusblenden](/Std_HideObjects/de "Std HideObjects/de") |
|                                                                                                                                                                                                                                                                                                                                                           |

## Beschreibung

Der Befehl **Std SichtbarkeitUmschalten** schaltet die Sichtbarkeit von ausgewählten Objekten in der [3D-Ansicht](/3D_view/de "3D view/de") ein/aus.

## Anwendung

1. Ein oder mehrere Objekte auswälen.
   - Unsichtbare Objekte können in der [Baumansicht](/Tree_view/de "Tree view/de") ausgewählt werden.
   - Vorsicht bei der Verwendung von Ctrl+A zur Auswahl von Objekten in der Baumansicht. Dies schließt auch die Unterelemente von [PartDesign Körpern](/PartDesign_Body/de "PartDesign Body/de") und Objekte, die von [Part Boolesche Operationen](/Part_Boolean/de "Part Boolean/de") verwendet werden, ein. In den meisten Fällen sollten sie unsichtbar bleiben.
   - Objekte, die von [Part Boolesche Operationen](/Part_Boolean/de "Part Boolean/de") verwendet werden, werden auch ausgewählt, wenn man Ctrl+A in einer 3D-Ansicht verwendet.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Den Menüeintrag **Ansicht → Sichtbarkeit → ![](/src/assets/images/Std_ToggleVisibility.svg) Ein/Ausblenden** auswählen.
   - Die Menüoption **![](/src/assets/images/Std_ToggleVisibility.svg) Ein/Ausblenden** im Kontextmenü der Baumansicht oder der 3d-Ansicht auswählen.
   - Das Tastaturkürzel Leertaste.

## Hinweise

- Nicht sichtbare Objekte werden mit ausgegrautem Label und ausgegrautem Symbol in der [Baumansicht](/Tree_view/de "Tree view/de") dargestellt.
- Objekte, die in einem [Std Teil](/Std_Part/de "Std Part/de") enthalten sind, oder eine [Std Verknüpfung](/Std_LinkMake/de "Std LinkMake/de") zu einer [Std Gruppe](/Std_Group/de "Std Group/de") oder einer LinkGroup, und [Formelemente](/PartDesign_Feature/de "PartDesign Feature/de") eines [PartDesign-Körpers](/PartDesign_Body/de "PartDesign Body/de") sind nur dann in den [3D-Ansichten](/3D_view/de "3D view/de") sichtbar, wenn auch alle übergeordneten Bestandteile sichtbar sind. Das heißt, dass ein Formelement in einem PartDesign-Körper, der sich in einem Std Teil befindet, nur dann in 3D-Ansichten zu sehen ist, wenn auch der PartDesign-Körper und das Std Teil sichtbar sind. Befindet sich dieses Std Teil wiederum auch in einem weiteren Std Teil, dann muss auch letzteres sichtbar sein.
- Wird die Sichbarkeit einer [Std Gruppe](/Std_Group/de "Std Group/de") geändert (oder eines davon abgeleitete Objekts, wie ein [Arch Gebäudeteil](/Arch_BuildingPart/de "Arch BuildingPart/de")), wird die Sichtbarkeit der enthaltenen Objekte entsprechend geändert. Ihre Schtbarkeit kann aber auch unabhängig geändert werden.
- Die Ausführung dieses Befehls kann nur dann mit [Std Rückgängig](/Std_Undo/de "Std Undo/de") rückgängig gemacht werden, wenn der [Fine-Tuning](/Fine-tuning/de "Fine-tuning/de")-Parameter **AutoTransactionView** auf `true` gesetzt ist.
- Die Sichtbarkeit eines Objekts kann auch durch seine zugehörige Daten-Eigenschaft**Visibility** im [Eigenschafteneditor](/Property_editor/de "Property editor/de") geändert werden.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Mit den Methoden `show` und `hide` eines Objekts ändert man seine Sichtbarkeit. Die Eigenschaft `Visibility` eines Objekts kann auch direkt angepasst werden.

```
import FreeCADGui

obj = FreeCADGui.ActiveDocument.myObjectName

if obj.Visibility == True:
    obj.hide()
else:
    obj.show()

# Alternatively:
obj.Visibility = not obj.Visibility

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleVisibility/de&oldid=1500132>"
