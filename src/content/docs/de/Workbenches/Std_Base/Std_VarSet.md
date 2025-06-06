---
title: Std Variablensatz erstellen
---

|                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Std Variablensatz erstellen                                                                                                                                                                          |
| Menüeintrag                                                                                                                                                                                          |
| _Keiner_                                                                                                                                                                                             |
| Arbeitsbereich                                                                                                                                                                                       |
| Alle                                                                                                                                                                                                 |
| Standardtastenkürzel                                                                                                                                                                                 |
| _Keiner_                                                                                                                                                                                             |
| Eingeführt in Version                                                                                                                                                                                |
| 1.0                                                                                                                                                                                                  |
| Siehe auch                                                                                                                                                                                           |
| [Spreadsheet](/Spreadsheet_Workbench/de "Spreadsheet Workbench/de"), [DynamicData](/index.php?title=DynamicData_Workbench/de&action=edit&redlink=1 "DynamicData Workbench/de (page does not exist)") |
|                                                                                                                                                                                                      |

## Beschreibung

Der Befehl **Std Variablensatz erstellen** erstellt einen Variablensatz. Ein Variablensatz ist ein Objekt, das einen Satz von Eigenschaften verwaltet, die als Variablen in [Ausdrücken](/Expressions/de "Expressions/de") verwendet werden können.

![](/images/Std_VarSet_Dialog.png)

Das Dialogfeld Eigenschaft hinzufügen

## Anwendung

1. Die folgenden Möglichkeiten bestehen:
   - Anlegen eines neuen Variablensatzes: Schaltfläche ![](/images/Std_VarSet.svg) Variablensatz erstellen drücken.
   - Bearbeitung eines bestehenden Variablensatzes: Doppelklick auf den Variablensatz in der [Baumansicht](/Tree_view/de "Tree view/de").
2. Das Dialogfeld **Eigenschaften hinzufügen** wird angezeigt.
3. **Name** der Eigenschaft eingeben.
   - Der Name muss für den Variablensatz eindeutig sein.
   - Nur alphanumerische Zeichen und Unterstriche (`A` bis `Z`, `a` bis `z`, `0` bis `9` und `_`) sind zulässig.
   - Das erste Zeichen darf keine Ziffer sein.
   - FreeCAD verwendet die [Binnenmajuskel](https://de.wikipedia.org/wiki/Binnenmajuskel) Konvention für seine Eigenschaftsnamen, d.h. jedes Wort beginnt mit einem Großbuchstaben, und es gibt keine Leerzeichen oder Unterstriche. Wenn der [Eigenschafteneditor](/Property_editor/de "Property editor/de") einen solchen Namen anzeigt, werden Leerzeichen zwischen den Wörtern eingefügt, um die Lesbarkeit des Namens zu verbessern. Es ist ratsam, diese Konvention zu befolgen.
4. Name der **Gruppe** der Eigenschaft eingeben oder eine Gruppe aus der Liste auswählen. Für Gruppennamen gelten die gleichen Einschränkungen wie für Eigenschaftsnamen.
5. Auswahl der Eigenschaft **Typ** aus der Auswahlliste. Siehe unten für [gebräuchliche Typen von Eigenschaften](#Gebräuchliche_Typen_von_Eigenschaften).
6. **Wert** der Eigenschaft eingeben. Die Eingabe einer Einheit wird akzeptiert, falls eine Einheit für die Eigenschaft vorgesehen ist.
7. Optional Kontrollkästchen **Weitere hinzufügen** auswählen, um weitere Eigenschaften hinzuzufügen.
8. Optional Eingabe von **Quick-Info** zur Eigenschaft.
9. Klick auf Schaltfläche OK.
10. Falls Kontrollkästchen **Weitere hinzufügen** ausgewählt, wird das Dialogfeld **Eigenschaften hinzufügen** erneut angezeigt, um eine weitere Eigenschaft in den Variablensatz einzugeben.
11. Klick auf Abbrechen, um Hinzufügen von Eigenschaften zu beenden.

## Gebräuchliche Typen von Eigenschaften

FreeCAD unterstützt viele Eigenschaftstypen. Die folgende Tabelle listet einige der gebräuchlichsten Typen auf. Siehe [PythonFunktion Benutzerdefinierte Eigenschaften](/FeaturePython_Custom_Properties/de "FeaturePython Custom Properties/de") für weitere Informationen.

| Eigenschaftstyp         | Standardeinheit (falls vorhanden) | Bemerkung                                                                                                                      |
| ----------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `App::PropertyAngle`    | ° (oder deg)                      |                                                                                                                                |
| `App::PropertyBool`     |                                   | `true` oder `false`, kann in [Bedingten Ausdrücken](/Expressions/de#Conditional_expressions "Expressions/de") verwendet werden |
| `App::PropertyDistance` | mm                                |                                                                                                                                |
| `App::PropertyFloat`    |                                   | Dezimalzahl                                                                                                                    |
| `App::PropertyInteger`  |                                   | Ganze Zahl                                                                                                                     |
| `App::PropertyLength`   | mm                                | Ähnlich wie `App::PropertyDistance` kann aber nicht negativ sein                                                               |
| `App::PropertyString`   |                                   | Zeichenkette                                                                                                                   |

## Hinweise

- Eigenschaften können auch zu bestehenden Variablensätzen über den [Ausdrucks-Editor](/Expressions/de "Expressions/de") hinzugefügt werden, wenn das Kontrollkästchen **Variablensätze anzeigen** ausgewählt ist.
- Eine Eigenschaft kann über das [Kontextmenü](/Property_editor/de#Kontextmenü "Property editor/de") des [Eigenschafteneditors](/Property_editor/de#Kontextmenü "Property editor/de") aus einem Variablensatz entfernt werden.
- Der Name einer Gruppe kann über das gleiche Kontextmenü geändert werden.
- Der Befehl kann derzeit nicht die Liste der zulässigen Elemente einer `App::PropertyEnumeration`-Eigenschaft festlegen. Dies kann mit [Python-Code](/FeaturePython_Custom_Properties/de#App::PropertyEnumeration "FeaturePython Custom Properties/de") erfolgen oder im Eigenschafteneditor. Die Schritte für letztere Möglichkeit sind:
  1. **Show hidden** im Kontextmenü des Eigenschafteneditors auswählen.
  2. Den Eintrag der Eigenschaft erweitern.
  3. In das Feld **Aufzählung** klicken.
  4. Die Schaltfläche ... drücken, die jetzt angezeigt wird.
  5. Werte im Dialogfenster **Liste** eingeben, das geöffnet wird.
  6. Die Schaltfläche OK drücken.

## Skripten

```
import FreeCAD as App

doc = App.ActiveDocument

var_set = doc.addObject("App::VarSet", "VarSetName")
var_set.addProperty("App::PropertyInteger", "MyNumber")  # Property is added to the Base group.
var_set.MyNumber = 123
var_set.addProperty("App::PropertyString", "MyText", group="SomeGroup", doc="Some tooltip information")
var_set.MyText = "Abc"

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_VarSet/de&oldid=1527720>"
