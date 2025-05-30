---
title: Std Gruppe
---

|                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Std Gruppe                                                                                                                                                                     |
| Menüeintrag                                                                                                                                                                    |
| Baumansicht → Rechtsklick auf den Dokumentennamen                                                                                                                              |
| Arbeitsbereich                                                                                                                                                                 |
| Alle                                                                                                                                                                           |
| Standardtastenkürzel                                                                                                                                                           |
| _Keiner_                                                                                                                                                                       |
| Eingeführt in Version                                                                                                                                                          |
| -                                                                                                                                                                              |
| Siehe auch                                                                                                                                                                     |
| [Standard Teil](/Std_Part/de "Std Part/de"), [Wähle Gruppe](/Draft_SelectGroup/de "Draft SelectGroup/de"), [zur Gruppe hinzufügen](/Draft_AddToGroup/de "Draft AddToGroup/de") |
|                                                                                                                                                                                |

## Beschreibung

Eine Std Gruppe, intern [App-DocumentObjectGroup](/App_DocumentObjectGroup/de "App DocumentObjectGroup/de") genannt, ist ein allgemein verwendeter Behälter für die Gruppierung unterschiedlicher Objekttypen in der [Baumansicht](/Tree_view/de "Tree view/de"), unabhängig von ihrem Datentyp. Er wird als einfacher Ordner zur Kategoriesierung und Organisation der Objekte im Modell verwendet, um eine logische Struktur zu erhalten. Std Gruppen können in anderen Std Gruppen eingebettet werden.

Das Werkzeug Std Group ist nicht durch einen speziellen Arbeitbereich definiert, sondern durch das Basissystem. Daher befindet es sich in der **Structure**-Werkzeugleiste, die in allen [Arbeitsbereichen](/Workbenches/de "Workbenches/de") zugänglich ist.

Um 3D-Objekte zu einer einzelnen Einheit zu gruppieren und damit eine Baugruppe zu erstellen, sollte stattdessen [Std Teil](/Std_Part/de "Std Part/de") verwendet werden.

![](/images/Std_Group_example.png)

Verschiedene Elemente innerhalb von Std Gruppen in der Baumansicht.

## Anwendung

1. Es gibt mehrere Möglichkeiten eine Gruppe anzulegen:
   - Ein Rechtsklick auf den Namen des Dokuments in der [Baumansicht](/Tree_view/de "Tree view/de") und im Kontextmenü **Gruppe erstellen...** auswählen.
   - Die Schaltfläche ![](/images/Std_Group.svg) Gruppe erstellen drücken.
2. Eine leere Gruppe wird erstellt.
3. Objekte werden einer Gruppe hinzugefügt, indem sie in der [Baumansicht](/Tree_view/de "Tree view/de") ausgewählt und auf die Gruppe gezogen und abgelegt werden.
4. Objekte werden aus einer Gruppe entfernt, indem sie aus der Gruppe herausgezogen und auf der Dokumentbezeichnung ganz oben in der [Baumansicht](/Tree_view/de "Tree view/de") abgelegt werden.
5. Objekte können auch hinzugefügt und entfernt werden, indem die Daten-Eigenschaft**Group** der Gruppe bearbeitet wird.

## Eigenschaften

Die Std Gruppe wird intern [App-DocumentObjectGroup](/App_DocumentObjectGroup/de "App DocumentObjectGroup/de") genannt (Klasse `App::DocumentObjectGroup`) und wird von einem [App-DocumentObject](/App_DocumentObject/de "App DocumentObject/de") (Klasse `App::DocumentObject`) abgeleitet und erbt all seine Eigenschaften.

Die Std Gruppe hat dieselben Eigenschaften wie ein [App-FeaturePython](/App_FeaturePython/de#Eigenschaften "App FeaturePython/de"), das die grundlegendste Instanz eines [App-DocumentObjects](/App_DocumentObject/de "App DocumentObject/de") ist. Es zeigt auch die folgenden zusätzlichen Eigenschaften im [Eigenschafteneditor](/Property_editor/de "Property editor/de"). Ausgeblendete Eigenschaften können mit dem Befehl **Ausgeblendete anzeigen** im Kontextmenü des [Eigenschafteneditors](/Property_editor/de "Property editor/de") angezeigt werden.

### Daten

Base

- Daten-Eigenschaft**Group** (`LinkList`): Eine Liste referenzierter Objekte. Voreingestellt ist eine leere Liste `[]`.
- Daten-Eigenschaft (versteckt)**\_ Group Touched** (`Bool`): Gibt an, ob die Gruppe -?- (touched) ist oder nicht.

## Skripten

_Siehe auch:_ [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de") und [Skriptgenerierte Objekte](/Scripted_objects/de "Scripted objects/de").

Siehe [Part Formelemente](/Part_Feature/de "Part Feature/de") zu allgemeinen Informationen über das Hinzufügen von Objekten zum Dokument.

Eine 'Std Gruppe' ([App-DocumentObjectGroup](/App_DocumentObjectGroup/de "App DocumentObjectGroup/de")) wird mit der Methode `addObject()` des Dokuments erstellt. Sobald eine Gruppe existiert, können weitere Objekte mit den Methoden `addObject()` oder `addObjects()` zur Gruppe hinzugefügt werden.

```
import FreeCAD as App

doc = App.newDocument()
group = App.ActiveDocument.addObject("App::DocumentObjectGroup", "Group")

obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("Part::Box", "Box")

group.addObjects([obj1, obj2])
App.ActiveDocument.recompute()

```

Diese grundlegende `App::DocumentObjectGroup` hat kein Proxyobjekt und kann daher nicht vollständig zur Erstellung von Unterklassen verwendet werden.

Für die Instanziierung von Unterklassen mit [Python](/Python/de "Python/de") sollte ein `App::DocumentObjectGroupPython`-Objekt erstellt werden.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::DocumentObjectGroupPython", "Name")
obj.Label = "Custom label"

```

Zum Beispiel ist ein [FEM Analyse](/FEM_Analysis/de "FEM Analysis/de") ein `App::DocumentObjectGroupPython`-Objekt mit einem benutzerdefinierten Icon und zusätzlichen Eigenschaften.

## Verweise

- [Arch Tutorium](/Arch_tutorial/de#Organizing_your_model "Arch tutorial/de")
- [Dokumentenstruktur](/Document_structure/de "Document structure/de")
- [Arch Tutorium/Ihr Modell organisieren](http://www.freecadweb.org/wiki/index.php?title=Arch_tutorial/de#Ihr_Modell_organisieren)

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Group/de&oldid=1560874>"
