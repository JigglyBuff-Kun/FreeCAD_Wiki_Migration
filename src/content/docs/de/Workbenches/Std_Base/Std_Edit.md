---
title: Std Bearbeiten
---

|                                                                             |
| --------------------------------------------------------------------------- |
| Std Bearbeiten                                                              |
| Menüeintrag                                                                 |
| Bearbeiten → Umschalten Bearbeitungsmodus                                   |
| Arbeitsbereich                                                              |
| Alle                                                                        |
| Standardtastenkürzel                                                        |
| _Keiner_                                                                    |
| Eingeführt in Version                                                       |
| -                                                                           |
| Siehe auch                                                                  |
| [Std BenutzerBearbeitungsModus](/Std_UserEditMode/de "Std UserEditMode/de") |
|                                                                             |

## Beschreibung

Der **Std Bearbeiten**-Befehl aktiviert oder deaktiviert den Bearbeitungsmodus eines Objekts.

## Anwendung

1. Falls kein Objekt im Bearbeitungsmodus ist: wähle ein einzelnes Objekt.
2. Wähle die **Bearbeiten → ![](/src/assets/images/Std_Edit.svg) Bearbeitungsmodus umschalten**-Option aus dem Menü.
3. Entweder wird der vorgegebene Bearbeitungsmodus des gewählten Objekts aktiviert oder der bestehende Bearbeitungsmodus wird deaktiviert.

## Hinweise

- Einige Werkzeuge sind in der Benutzeroberfläche deaktiviert (ausgegraut), während der Bearbeitungsmodus eines Objekts aktiviert ist.
- Nicht alle Objekttypen haben einen Bearbeitungsmodus.
- Die verfügbare Funktionalität im Bearbeitungsmodus hängt vom Objekttyp ab.
- Der Bearbeitungsmodus kann auch durch Doppelklicken auf ein Objekts in der [Baumansicht](/Tree_view/de "Tree view/de") aktiviert werden. In diesem Fall kann der verwendete Bearbeitungsmodus mit der [Std BenutzerBearbeitungsModus](/Std_UserEditMode/de "Std UserEditMode/de")-Anweisung festgelegt werden.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zur Aktivierung des Bearbeitungsmodus eines Objekts benutze die `setEdit`-Methode des document-Objekts. Diese Methode ist nicht verfügbar, wenn sich FreeCAD im Konsolenmodus befindet.

```
import FreeCADGui

FreeCADGui.ActiveDocument.setEdit("myObjectName",0)

```

Das zweite Argument ist der EditMode. Die folgenden Optionen sind verfügbar:

```
0 = Default
1 = Transform
2 = Cutting
3 = Color

```

Zur Deaktivierung des Bearbeitungsmodus eines Objekts benutze die `resetEdit`-Methode des document-Objekts.

```
import FreeCADGui

FreeCADGui.ActiveDocument.resetEdit()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Edit/de&oldid=1500050>"
