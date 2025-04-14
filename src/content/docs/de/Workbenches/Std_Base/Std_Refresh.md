---
title: Std Aktualisieren
---

|                            |
| -------------------------- |
| Std Aktualisieren          |
| Menüeintrag                |
| Bearbeiten → Aktualisieren |
| Arbeitsbereich             |
| Alle                       |
| Standardtastenkürzel       |
| F5                         |
| Eingeführt in Version      |
| -                          |
| Siehe auch                 |
| _Keiner_                   |
|                            |

## Beschreibung

Der Befehl **Std Aktualisieren** berechnet das aktuelle Dokument neu. Der Befehl ist deaktiviert, solange das Dokument keine Neuberechnung benötigt.

## Anwendung

1. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Std_Refresh.svg) Aktualisieren drücken.
   - Den Menüeintrag **Bearbeiten → ![](/images/Std_Refresh.svg) Aktualisieren** auswählen.
   - Das Tastaturkürzel F5.

## Optionen

- Um eine Neuberechnung zu erzwingen, wählt man das Dokument oder ein bzw. mehrere Objekte in der [Baumansicht](/Tree_view/de "Tree view/de") aus, markiert den Menüeintrag **![](/images/Std_MarkToRecompute.svg) Markieren, um neu zu berechnen** im Kontextmenü, und ruft den Befehl auf.
- Für Objekte, aber nicht für Dokumente, kann man auch **Objekt neu berechnen** aus demselben Kontextmenü auswähen.

## Hinweise

- Für ein Makro, das das aktive Dokument neu berechnet, siehe: [Makro Neuberechnung Erzwingen](/Macro_ForceRecompute/de "Macro ForceRecompute/de").

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um ein Dokument neu zu berechnen, verwendet man die Methode `recompute` des Document-Objekts.

```
import FreeCAD

doc = FreeCAD.newDocument()
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Refresh/de&oldid=1500062>"
