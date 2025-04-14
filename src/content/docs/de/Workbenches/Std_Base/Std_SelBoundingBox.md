---
title: Std WahlBegrenzungRahmen
---

|                                                         |
| ------------------------------------------------------- |
| Std WahlBegrenzungRahmen                                |
| Menüeintrag                                             |
| Ansicht → Begrenzungsrahmen                             |
| Arbeitsbereich                                          |
| Alle                                                    |
| Standardtastenkürzel                                    |
| _Keiner_                                                |
| Eingeführt in Version                                   |
| 0.19                                                    |
| Siehe auch                                              |
| [Std ZeichenStil](/Std_DrawStyle/de "Std DrawStyle/de") |
|                                                         |

## Beschreibung

Der **Std WahlBegrenzungRahmen** Befehl schaltet den Modus der globalen Begrenzungsrahmenhervorhebung ein und aus. Wenn dieser Modus eingeschaltet ist, werden ausgewählte Objekte in einer [3D Ansicht](/3D_view/de "3D view/de") mit einem hervorgehobenen Begrenzungsrahmen markiert, auch wenn ihr Ansicht-Eigenschaft**Auswahlstil** auf 'Form' eingestellt ist.

## Anwendung

1. - Die Menüoption **Ansicht → ![](/images/Std_SelBoundingBox.svg) Begrenzungsrahmen** auswählen.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um den Parameter ShowSelectionBoundingBox zu ändern, wird die Methode `SetBool` des entsprechenden Parameters grp verwendet.

```
import FreeCAD, FreeCADGui

grp = FreeCAD.ParamGet("User parameter:BaseApp/Preferences/View")
if grp.GetBool("ShowSelectionBoundingBox"):
    grp.SetBool("ShowSelectionBoundingBox", False)
else:
    grp.SetBool("ShowSelectionBoundingBox", True)

FreeCADGui.updateCommands()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SelBoundingBox/de&oldid=1500066>"
