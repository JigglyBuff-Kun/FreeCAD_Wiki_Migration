---
title: App FeaturePython
---
## Einleitung

Ein ![](/images/Feature.svg) App FeaturePython-Objekt oder formal ein `App::FeaturePython`, ist eine einfache Instanz des [App DocumentObject](/App_DocumentObject/de "App DocumentObject/de") in [Python](/Python/de "Python/de").

Hierbei handelt es sich um ein einfaches Objekt, das standardmäßig nicht viele Eigenschaften hat, z.B. hat es keine [Positionierung](/Placement/de "Placement/de") und keine [topologische Form](/Part_TopoShape/de "Part TopoShape/de"). Abhängig von den Eigenschaften, die ihm zugeordnet sind, kann es zur Verwaltung verschiedener Datentypen verwendet werden.

![](/images/FreeCAD_core_objects.svg)

Vereinfachtes Diagramm der Beziehungen zwischen den Kernobjekten in FreeCAD

## Anwendung

Das App FeaturePython-Objekt ist ein internes Objekt, so dass es nicht über die grafische Oberfläche erstellt werden kann. Es ist dazu gedacht, von ihm Unterklassen abzuleiten, die unterschiedliche Arten von Daten verarbeiten.

Beispielsweise sind die Elemente [Draft Text](/Draft_Text/de "Draft Text/de"), [Draft Maß](/Draft_Dimension/de "Draft Dimension/de"), und [Arbeitsebenen Proxy](/Draft_WorkingPlaneProxy/de "Draft WorkingPlaneProxy/de") des Arbeitsbereichs [Draft](/Draft_Workbench/de "Draft Workbench/de") `App::FeaturePython`-Objekte mit einem benutzerdefinierten Symbol und zusätzlichen Eigenschaften. Sie enthalten Daten, aber keine tatsächliche [Part TopoForm](/Part_TopoShape/de "Part TopoShape/de").

Wenn das gewünschte Objekt eine Positionierung, eine Form, einen Anhang oder andere komplexe Eigenschaften haben soll, ist es besser, eine der komplexeren Klassen zu erstellen, zum Beispiel [App GeoFeature](/App_GeoFeature/de "App GeoFeature/de"), [Part Feature](/Part_Feature/de "Part Feature/de"), oder [Part Part2DObject](/Part_Part2DObject/de "Part Part2DObject/de").

## Eigenschaften

Siehe  [Objekteigenschaften](/Property/de "Property/de") für alle Arten von Eigenschaften, die skriptgenerierte Objekte besitzen können.

Das App FeaturePython-Objekt (Klasse `App::FeaturePython`) wird von einem [App DocumentObject](/App_DocumentObject/de "App DocumentObject/de") (Klasse `App::DocumentObject`) abgeleitet und erbt alle seine Eigenschaften. Es besitzt einige zusätzliche Eigenschaften.

Diese sind die im [Eigenschafteneditor](/Property_editor/de "Property editor/de") vorhandenen Eigenschaften. Ausgeblendete Eigenschaften können mit dem Befehl **Ausgeblendete anzeigen** im Kontextmenü des [Eigenschafteneditors](/Property_editor/de "Property editor/de") angezeigt werden.

### Daten

Basis

* Daten-Eigenschaft (versteckt)**Proxy** (`PythonObject`): Eine spezielle, mit diesem Objekt verbundene Klasse.
* Daten-Eigenschaft**Label** (`String`): Die vom Anwender editierbare Bezeichnung dieses Objekts; es ist eine beliebige UTF8-Zeichenfolge.
* Daten-Eigenschaft**Label2** (`String`): Eine längere, vom Anwender editierbare Beschreibung dieses Objekts; es ist eine beliebige UTF8-Zeichenfolge, die Zeilenumbrüche enthalten kann. Standardmäßig ist es eine leere Zeichenkette `""`.
* Daten-Eigenschaft (versteckt)**Expression\_Engine** (`ExpressionEngine`): Eine Liste von Ausdrücken. a list of expressions. Standardmäßig ist sie leer `[]`.
* Daten-Eigenschaft (versteckt)**Visibility** (`Bool`): Bestimmt, ob das Objekt angezeigt werden soll oder nicht.

### Ansicht

Basis

* Ansicht-Eigenschaft (versteckt)**Proxy** (`PythonObject`): Eine spezielle [Viewprovider](/Viewprovider/de "Viewprovider/de")-Klasse, die mit diesem Objekt verbunden ist.

Display Options

* Ansicht-Eigenschaft**Display Mode** (`Enumeration`): ist standardmäßig leer.
* Ansicht-Eigenschaft**Show In Tree** (`Bool`): die Standardeinstellung ist `true`; in diesem Fall erscheint das Objekt in der [Baumansicht](/Tree_view/de "Tree view/de"). Andernfalls wird das Objekt in der Baumansicht ausgeblendet. Ist ein Objekt unsichtbar in der Baumansicht, kann es wieder sichtbar gemacht werden, indem das Kontextmenü über den Namen des Dokuments geöffnet wird (Rechtsklick) und ![](/images/CheckBoxTrue.svg) Ausgeblendete Elemente anzeigen ausgewählt wird. Dann kann das ausgeblendete Element ausgewählt und die Ansicht-Eigenschaft**Show In Tree** wieder auf `true` zurückgesetzt werden.
* Ansicht-Eigenschaft**Visibility** (`Bool`): auf `true` voreingestellt. In diesem Fall ist das Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") sichtbar, wenn es eine [Form](/Part_TopoShape/de "Part TopoShape/de") hat, andernfalls ist es unsichtbar. Standardmäßig kann diese Eigenschaft ein- und ausgeschaltet werden, indem das Objekt ausgewählt und die Leertaste gedrückt wird.

Auswahl

* Ansicht-Eigenschaft**On Top When Selected** (`Enumeration`): Sie steuert die Art und Weise, wie die Auswahl in der [3D-Ansicht](/3D_view/de "3D view/de") erfolgt, wenn das Objekt eine [Form](/Part_TopoShape/de "Part TopoShape/de") hat und es viele Objekte gibt, die teilweise von anderen abgedeckt werden. Die Standardeinstellung ist `Disabled`, was bedeutet, dass keine besondere Hervorhebung erfolgt; `Enabled` bedeutet, dass das Objekt über jedem anderen Objekt erscheint, wenn es ausgewählt wird; `Object` bedeutet, dass das Objekt nur dann oben erscheint, wenn das gesamte Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") ausgewählt wird; `Element` bedeutet, dass das Objekt nur dann oben erscheint, wenn ein Unterelement (Knoten, Kante, Fläche) in der [3D-Ansicht](/3D_view/de "3D view/de") ausgewählt wird.
* Ansicht-Eigenschaft**Selection Style** (`Enumeration`): steuert die Art und Weise, wie das Objekt hervorgehoben wird, wenn es eine [Form](/Part_TopoShape/de "Part TopoShape/de") hat. Ist es `Shape`, wird die gesamte Form (Knoten, Kanten und Flächen) in der [3D-Ansicht](/3D_view/de "3D view/de") hervorgehoben; ist es  `BoundBox`, erscheint ein Begrenzungsrahmen um das Objekt herum und wird hervorgehoben.

## Skripten

*Siehe auch:* [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de") und [Skriptgenerierte Objekte](/Scripted_objects/de "Scripted objects/de").

Siehe [Part Formelement](/Part_Feature/de "Part Feature/de") für die allgemeinen Informationen über das Hinzufügen von Objekten zum Dokument.

Ein App-FeaturePython-Objekt wird mit der Methode `addObject()` des Dokuments erstellt.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::FeaturePython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=App_FeaturePython/de&oldid=1560876>"