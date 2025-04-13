---
title: Part Zerschneiden
---

|                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Part Zerschneiden                                                                                                                                                                                                                                                                 |
| Menüeintrag                                                                                                                                                                                                                                                                       |
| Part → Teilen → Schneiden zu Verbund                                                                                                                                                                                                                                              |
| Arbeitsbereich                                                                                                                                                                                                                                                                    |
| [Part](/Part_Workbench/de "Part Workbench/de")                                                                                                                                                                                                                                    |
| Standardtastenkürzel                                                                                                                                                                                                                                                              |
| _Keiner_                                                                                                                                                                                                                                                                          |
| Eingeführt in Version                                                                                                                                                                                                                                                             |
| 0.17                                                                                                                                                                                                                                                                              |
| Siehe auch                                                                                                                                                                                                                                                                        |
| [Part BoolescheFragmente](/Part_BooleanFragments/de "Part BooleanFragments/de"), [Part XOdeR](/Part_XOR/de "Part XOR/de"), [Part AuswahlVerbindungsmethoden](/Part_CompJoinFeatures/de "Part CompJoinFeatures/de"), [Part BoolescheOperation](/Part_Boolean/de "Part Boolean/de") |
|                                                                                                                                                                                                                                                                                   |

## Beschreibung

Das ![](/src/assets/images/Part_Slice.svg) Part zerschneiden auch bekannt als **Schnitt zu Verbund** Werkzeug wird verwendet, um Formen durch Überschneidung mit anderen Formen zu teilen. Zum Beispiel wird für einen Kasten und eine Ebene ein Verbund aus zwei Körpern erzeugt.

![](/src/assets/images/Part_Slice_Demo.png)

Oben: die Stücke wurden anschließend manuell auseinander bewegt, um das Zerschneiden deutlich zu machen

Es gibt zwei Befehle, um eine Form zu zerschneiden: ![](/src/assets/images/Part_SliceApart.svg)[Auseinanderschneiden](/Part_SliceApart/de "Part SliceApart/de") und ![](/src/assets/images/Part_Slice.svg) Schneiden zu Verbund. Beide erzeugen ein parametrisches Formelement 'Slice', das die zerschnittenen Teile in einen Verbund ablegt. Dabei sprengt ![](/src/assets/images/Part_SliceApart.svg) [Auseinanderschneiden](/Part_SliceApart/de "Part SliceApart/de") den resultierenden Verbund in separate Objekte. "Schneiden zu Verbund" ist voll parametrisch und verursacht keine Probleme, wenn sich die Anzahl der Teile ändert. "Auseinanderschneiden" aktualisiert die Anzahl der Objekte nicht, wenn sich die Anzahl der Teile ändert.

Die Ausgabeform nimmt den gleichen Raum ein wie das Original. Sie wird jedoch dort getrennt, wo sie sich mit anderen Formen überschneidet. Die getrennten Teile werden in einen Verbund (compsolid) abgelegt, so dass das Objekt in einem Stück zu bleiben scheint. Man muss den Verbund sprengen, um die separaten Teile zu erhalten. Soll auf die einzelnen Teile parametrisch zugegriffen werden, kann zu diesem Zweck ![](/src/assets/images/Part_CompoundFilter.svg) [Part VerbundFiltern](/Part_CompoundFilter/de "Part CompoundFilter/de") verwendet werden. Für schnellen nichtparametrischen Zugriff wird ![](/src/assets/images/Draft_Downgrade.svg) [Draft herabstufen](/Draft_Downgrade/de "Draft Downgrade/de") verwendet.

Das Werkzeug hat drei Modi: "Standard", "Geteilt" und "BildeVolumenkörper". Es gibt kein Auswahlformular, sie sind vordefiniert, können aber nach der Operation auf der Ebene der sich ergebenden Scheiben abgerufen werden.

"Standard" und "Geteilt" unterscheiden sich durch die Wirkung des Werkzeugs auf Drähte, Schalen und ZusammengesetzteVolumenkörper: Bei "Geteilt" werden diese getrennt; bei "Standard", werden sie zusammengehalten (zusätzliche Abschnitte entstehen).

Die Verbundstruktur in den "Standard" und "Geteilt" Modi folgt der Verbundstruktur der zu kappenden Form.

Im "Volumenkörperverbund" Modus ist das Ergebnis ein zusammengesetzterVolumenkörper (oder ein Verbund von zusammengesetztenVolumenkörpern wenn die resultierenden Festkörper mehr als eine Insel der Verbundenheit bilden). Volumenkörperverbund ist ein Satz von Körpern; Sie sind mit Festkörpern verwandt, so wie Drähte mit Kanten und Schalen mit Flächen verwandt sind; der Name ist wahrscheinlich ein verkürzter Ausdruck von "Zusammengesetzter Volumenkörper".

Die Gesamtwirkung des Werkzeugs ist der von ![](/src/assets/images/Part_BooleanFragments.svg) [Part BoolescheFragmente](/Part_BooleanFragments/de "Part BooleanFragments/de") sehr ähnlich, außer dass nur die Teile aus der ersten Form im Ergebnis enthalten sind.

## Anwendung

1. Zuerst das zu zerschneidende Objekt auswählen und dann einige Objekte, die damit zerschnitten werden sollen.  
   Die Reihenfolge der Auswahl ist wichtig. Verbünde mit Selbstüberschneidungen sind nicht zulässig (Selbstüberschneidungen lassen sich manchmal dadurch erklären, dass der Verbunds

![](/src/assets/images/Part_BooleanFragments.svg)[Part BoolescheFragmente](/Part_BooleanFragments/de "Part BooleanFragments/de")) durchläuft.

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:

   - Die Schaltfläche ![](/src/assets/images/Part_Slice.svg) Zerschneiden in der Part-Werkzeugleiste drücken.
   - Den Menüeintrag **Part → Aufteilen → Zerschneiden** auswählen.

1. Hinweis: Die zu zerschneidenden Objekte müssen das zu schneidende Objekt vollständig trennen. Daher kann ein Würfel nicht durch einen Draht geschnitten werden, sondern z.B. durch eine von einem extrudierten Draht abgeleitete Ebene.

Ein parametrisches Slice-Objekt wird erzeugt. Die Originalobjekte werden ausgeblendet, und das Ergebnis der Überschneidung wird in der [3D-Ansicht](/3D_view/de "3D view/de") dargestellt.

### Baumstruktur der Slice-Objekte

Der Befehl Zerschneiden erzeugt ein geteiltes Objekt. Im folgenden Beispiel wird ein Würfel durch eine Fläche geteilt.

Die Scheibe wird erzeugt, und jedes Stück davon wird in einem Verbund vereint.

![](/src/assets/images/Part_SliceTree.png)

## Eigenschaften

Scheiben

- Daten-Eigenschaft**Basis**: Zu zerschneidendes Objekt.
- Daten-Eigenschaft**Werkzeuge**: Liste der damit zu schneidenden Objekte. (bis v0.17.8053 wird diese Eigenschaft nicht im Eigenschaftseditor angezeigt und kann nur über Python abgerufen werden).
- Daten-Eigenschaft**Modus**: "Standard", "Geteilt" oder "ZusammengesetzterVolumenkörper". "Zerschnitten" ist Vorgabe. Standard und Geteilt unterscheiden sich durch die Wirkung des Werkzeugs auf Formen des Gruppierungsstyps: Wenn Geteilt, werden diese getrennt, andernfalls werden sie zusammengehalten (erhalten zusätzlicher Abschnitte).
- Daten-Eigenschaft**Toleranz**:"Unschärfe" Wert. Dies ist eine zusätzliche Toleranz, die bei der Suche nach Schnittpunkten angewendet wird, zusätzlich zu den in den Eingabeformen gespeicherten Toleranzen.

Hinweisː Eigenschaften sind auf dem inneren Objekt der Scheiben zugänglich, nicht auf der Ergebnisebene.

## Beispiel

### Puzzle erstellen

1. Zum Arbeitsbereich ![](/src/assets/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") wechseln.
   - Eine neue Skizze erstellen.
   - Ein Rechteck zeichnen, das die gesamte Form des Puzzles umfasst.
   - Die Skizze schließen.  
     ![](/src/assets/images/Slice_example_step1.png)
2. Zum Arbeitsbereich ![](/src/assets/images/Workbench_Part.svg) [Part](/Part_Workbench "Part Workbench") wechseln.
   - Die Skizze auswählen und **Part → ![](/src/assets/images/Part_MakeFace.svg) [Fläche aus Liniezug erstellen](/Part_MakeFace "Part MakeFace")** auswählen.  
     ![](/src/assets/images/Slice_example_step2.png)
3. Zum Arbeitsbereich ![](/src/assets/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") zurück wechseln.
   - Eine neue Skizze auf derselben Ebene erstellen.
   - Mit dem Werkzeug Linienzug erstellen die Linien zeichnen, die das Puzzle in Stücke teilt.  
     ![](/src/assets/images/Slice_example_step3.png)
4. Zum Arbeitsbereich ![](/src/assets/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de") zurück wechseln.
   - Die Aufteilungsskizze auswählen und ![](/src/assets/images/Part_BooleanFragments.svg) [Boolesche Bestandteile](/Part_BooleanFragments/de "Part BooleanFragments/de") anwenden. Dies setzt Knotenpunkte an die Schnittstellen der Linien in der Aufteilungsskizze ein. Diese werden gebraucht, damit der nächste Schritt funktioniert.  
     ![](/src/assets/images/Slice_example_step4.png)
5. Die rechteckige Fläche sowie die booleschen Bestandteile der Aufteilungsskizze auswählen und ![](/src/assets/images/Part_Slice.svg) Part Zerschneiden anwenden.  
   ![](/src/assets/images/Slice_example_step5.png)
6. ![](/src/assets/images/Part_ExplodeCompound.svg) [Part VerbundobjektSprengen](/Part_ExplodeCompound/de "Part ExplodeCompound/de") auf die zerteilte Fläche anwenden, um dem von Part Zerschneiden erstellten Verbund in einzelne Stücke aufzubrechen.

_Hinweis:'_ Die Schritte 5 und 6 können mit einem einzigen Klick auf ![](/src/assets/images/Part_SliceApart.svg) [Part Auseinanderschneiden](/Part_SliceApart/de "Part SliceApart/de") durchgeführt werden.

## Hinweise

- Das Werkzeug wurde in FreeCAD v0.17.8053 eingeführt. FreeCAD muss mit OCC 6.9.0 oder höher kompiliert werden, andernfalls steht das Werkzeug nicht zur Verfügung.
- Eigenschaften sind über die inneren Elemente des Slice-Objekts erreichbar, nicht über das Ergebniselements.
- Die Objekte, mit denen zerteilt werden soll, müssen das zu teilende Objekt vollständig durchtrennen. So kann z. B. ein Würfel nicht durch einen Draht zerteilt werden, aber durch eine Ebene, die von einem extrudierten Draht abgeleitet ist.
- Das Zerteilungsobjekt muss die BOP-Prüfung bestehen. Siehe ![](/src/assets/images/Part_CheckGeometry.svg) [Part GeometriePrüfen](/Part_CheckGeometry "Part CheckGeometry").

## Skripten

Dieses Werkzeug kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus durch folgende Funktion verwendet werden:

```
BOPTools.SplitFeatures.makeSlice(name)

```

- Erstellt ein leeres Slice-Formelement. Die Eigenschaften 'Base' und 'Tools' müssen anschließend explizit zugewiesen werden.
- Gibt das neu erstellte Objekt zurück.

Zerschneiden kann auch auf einfache Formen angewendet werden, ohne dass ein Dokumentobjekt erforderlich ist, durch:

```
BOPTools.SplitAPI.slice(base_shape, tool_shapes, mode, tolerance = 0.0)

```

Dies kann nützlich sein, um angepasste Funktionen mit Python-Skripten zu erstellen.

Beispiel:

```
import BOPTools.SplitFeatures
j = BOPTools.SplitFeatures.makeSlice(name= 'Slice')
j.Base = FreeCADGui.Selection.getSelection()[0]
j.Tools = FreeCADGui.Selection.getSelection()[1:]

```

Das Werkzeug selbst ist in Python implementiert, siehe /Mod/Part/BOPTools/SplitFeatures.py ([GitHub link](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/BOPTools/SplitFeatures.py)) innerhalb des FreeCAD-Installationsverzeichnisses.

## Tutorien

- <https://www.youtube.com/watch?v=tzHkQaHgrfQ> FreeCad 0.18 PART WB using Slice and Slice Apart (Englisch), Autor: Ha Gei

- <https://www.youtube.com/watch?v=JJAL5JmqqKQ> FreeCAD Slice und Slice Apart und andere Tricks (Deutsch), Autor: Ha Gei

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Slice/de&oldid=1255043>"
