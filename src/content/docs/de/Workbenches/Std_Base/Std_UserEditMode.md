---
title: Std BenutzerBearbeitungsModus
---
|  |
| --- |
| Std BenutzerBearbeitungsmodus |
| Menüeintrag |
| Bearbeiten → Bearbeitungsmodus → ... |
| Arbeitsbereich |
| Alle |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.20 |
| Siehe auch |
| [Std Berbeiten](/Std_Edit/de "Std Edit/de") |
|  |

## Beschreibung

Die Anweisung **Std BenutzerBearbeitungsmodus** legt den Bearbeitungsmodus fest, der verwendet wird, wenn ein Objekt mit einem Doppelklick in der [Baumansicht](/Tree_view/de "Tree view/de") gewählt wird.

## Anwendung

1. * Unter dem Menüpunkt **Bearbeiten → Bearbeitungsmodus** einen Bearbeitungsmodus wählen.

## mögliche Bearbeitungsmodi

### Vorgabe

Das Objekt wird mit seinem vorgegebenen Bearbeitungsmodus bearbeitet. Dieser Bearbeitungsmodus wird intern mit dem am besten passend für den Objekttyp festgelegt, z.B. wird dies die Formeigenschaftsbearbeitung für [Part Grundelemente](/Part_Primitives/de "Part Primitives/de") und [PartDesign Formelemente](/PartDesign_Feature/de "PartDesign Feature/de") sein, die Positionierungsbearbeitung für [Part Boolesche Operationen](/Part_Boolean/de "Part Boolean/de") etc.

### Bewegen

Die Positionierung eines Objektes lässt sich mit dem Befehl [Std Bewegen](/Std_TransformManip/de "Std TransformManip/de") bearbeiten.

### Abtrennen

Dieser Bearbeitungsmodus ist verwendbar, scheint aber durch kein Objekt verwendet zu werden.

### Farbe

Mit der Anweisung [Part FarbeProFläche](/Part_ColorPerFace/de "Part ColorPerFace/de") kann das Erscheinungsbild jeder einzelnen Fläche des Objektes bearbeitet werden.

## Hinweise

Nicht jedes Objekt kann durch alle Bearbeitungsmodi bearbeitet werden. Ist ein Bearbeitunsmodus für ein Objekt nicht zutreffend, wird stattdessen der vorgegebene Bearbeitungsmodus verwendet.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um mögliche Bearbeitungsmodi anzuzeigen:

```
import FreeCADGui
FreeCADGui.listUserEditModes()

```

Um den aktiven Bearbeitungsmodus zu erhalten:

```
import FreeCADGui
FreeCADGui.getUserEditMode()

```

Um den aktiven Bearbeitungsmodus zu einzustellen:

```
import FreeCADGui
FreeCADGui.setUserEditMode(MODENAME)  # Where MODENAME is a string available in the list of edit modes

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_UserEditMode/de&oldid=1537344>"