---
title: Part Auseinanderschneiden
---

|                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| Part Auseinanderschneiden                                                                                                                   |
| Menüeintrag                                                                                                                                 |
| Formteil → Teilen → Auseinanderschneiden                                                                                                    |
| Arbeitsbereich                                                                                                                              |
| [Part](/Part_Workbench/de "Part Workbench/de")                                                                                              |
| Standardtastenkürzel                                                                                                                        |
| _Keiner_                                                                                                                                    |
| Eingeführt in Version                                                                                                                       |
| 0.18.15506                                                                                                                                  |
| Siehe auch                                                                                                                                  |
| [Part Teilen zu einem Verbund](/Part_Slice/de "Part Slice/de"), [Part Verbund Sprengen](/Part_ExplodeCompound/de "Part ExplodeCompound/de") |
|                                                                                                                                             |

## Beschreibung

Werkzeug zum zerteilen von Formen durch Überschneiden mit anderen Formen. Beispielsweise werden aus einem Quader und einer Ebene zwei Volumenkörper erzeugt.
![](/images/Part_Slice_Demo.png)

Oben: Die Stücke wurden anschließend manuell auseinandergeschoben, um das Zerschneiden sichtbar zu machen.

Auseinanderschneiden ist dasselbe wie ![](/images/Part_Slice.svg) [Zerschneiden](/Part_Slice/de "Part Slice/de"), gefolgt von ![](/images/Part_ExplodeCompound.svg) [Verbund sprengen](/Part_ExplodeCompound/de "Part ExplodeCompound/de"). Während "Zerschneiden" vollparametrisch ist und keine Probleme verursacht, wenn sich die Anzahl der Teile ändert, aktualisiert "Auseinanderschneiden" die Anzahl der Objekte nicht, wenn sich die Anzahl der Teile ändert.
Beide erzeugen ein parametrisches Scheiben Formelement, das die geschnittenen Teile in einen Verbund bringt, aber "Auseinander Schneiden" sprengt den resultierenden Verbund in separate Objekte.

Die Ausgabeform nimmt den gleichen Platz ein wie das Original. Sie wird jedoch dort wo andere Formen überschnitten werden, zerteilt. Die zerteilten Teile sind einzelne Stücke.

Bitte besuche die [Formteil Zerschneiden](/Part_Slice/de "Part Slice/de") Seite für weitere Informationen.

### Baumstruktur von Auseinanderschneiden

Der Befehl Auseinanderschneiden erzeugt mehr als nur das geschnittene Objekt. Im folgenden Beispiel wird ein Würfel durch eine Fläche geschnitten.

Die Scheibe wird erstellt und für jedes Stück davon wird ein [Part VerbundFilter](/Part_CompoundFilter/de "Part CompoundFilter/de") erstellt, so dass dieselbe Scheibe mehrfach unter jedem VerbundFilter auftritt. Alle diese VerbundFilter sind in einem Verbund zusammengefasst.

![](/images/Part_SliceApartTree.png)

## Beispiel

- Herstellung eines Puzzle: siehe [Formteil Zerschneiden](/Part_Slice/de "Part Slice/de") Beispielschritte 1 bis 6

## Skripten

Das Werkzeug kann in [Makros](/Macros/de "Macros/de") und aus der [Python](/Python/de "Python/de") Konsole heraus durch Verwendung der folgenden Funktionen verwendet werden:

```
BOPTools.SplitFeatures.makeSlice(name)

```

Setze Modus auf **zerschneiden** für Auseinander Schneiden

- Erstellt eine leeres Scheiben Formelement. Die 'Basis' und 'Werkzeug' Eigenschaften müssen anschließend explizit zugewiesen werden.
- Gibt das neu erstellte Objekt zurück.

Scheibe kann auch auf einfache Formen angewendet werden, ohne dass ein Dokumentobjekt erforderlich ist, über:

```
BOPTools.SplitAPI.slice(base_shape, tool_shapes, mode, tolerance = 0.0)

```

Dies kann nützlich sein, um benutzerdefinierte Python Skriptfunktionen zu erstellen.

Beispiel:

```
import BOPTools.SplitFeatures
j = BOPTools.SplitFeatures.makeSlice(name= 'Slice')
j.Base = FreeCADGui.Selection.getSelection()[0]
j.Tools = FreeCADGui.Selection.getSelection()[1:]

```

Das Werkzeug selbst ist in Python implementiert, siehe /Mod/Part/BOPTools/SplitFeatures.py ([GitHub link](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/BOPTools/SplitFeatures.py)) innerhalb des FreeCAD Installationsverzeichnisses.

## Hinweise

Auseinanderschneiden wurde in FreeCAD v0.18.15506 eingeführt. FreeCAD muss mit OCC 6.9.0 oder später kompiliert werden. Andernfalls ist das Werkzeug nicht verfügbar.

## Videotutorien

- <https://www.youtube.com/watch?v=tzHkQaHgrfQ> : FreeCad 0.18 PART WB using SLICE and SLICE APART (Englisch), Autor: Ha Gei

- <https://www.youtube.com/watch?v=JJAL5JmqqKQ> : FreeCAD Slice und Slice Apart und andere Tricks (Deutsch), Autor: Ha Gei

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_SliceApart/de&oldid=1134180>"
