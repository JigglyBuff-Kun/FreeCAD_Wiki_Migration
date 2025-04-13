---
title: PartDesign Formelement
---
## Einleitung

Ein PartDesign-Formelement entspricht einem "Schritt" im Modellierungsprozess, der innerhalb eines [PartDesign Körpers](/PartDesign_Body/de "PartDesign Body/de") stattfindet. Zum Beispiel wird jedes Mal, wenn mit [PartDesign Quader](/PartDesign_AdditiveBox/de "PartDesign AdditiveBox/de") ein Festkörperquader hinzugefügt wird, ein Formelement hinzugefügt; wird mit [PartDesign Fase](/PartDesign_Chamfer/de "PartDesign Chamfer/de") eine Fase an eine Kante angefügt, wird ein weiteres Formelement hinzugefügt; wird mit [Skizze](/Sketch/de "Sketch/de") und [PartDesign Tasche](/PartDesign_Pocket/de "PartDesign Pocket/de") ein Loch ausgeschnitten, wird ein weiteres Formelement hinzugefügt.

![](/images/PartDesign_Feature_example.png)

Feature-Editing ein einem [PartDesign-Körper](/PartDesign_Body "PartDesign Body") mit drei aufeinanderfolgenden Formelementen

Es gibt viele Arten von Formelementen, die einem ursprünglichen Körper Volumen hinzufügen oder entfernen können. Das Wort "Formelement" bezieht sich auf die Bearbeitung selbst und auch auf den resultierenden Festkörper nach dieser Bearbeitung.

Um mehr über die Erstellung von Festkörperobjekten mit dem Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") zu erfahren, siehe [Formelemente bearbeiten](/Feature_editing/de "Feature editing/de").

## Anwendung

Fast alle Werkzeuge im Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") sind dazu gedacht, einem [PartDesign-Körper](/PartDesign_Body/de "PartDesign Body/de") Formelemente hinzuzufügen. Diese Werkzeuge können über die Menü- und Werkzeugleisten-Schaltflächen aufgerufen werden, während ein Objekt oder Unterelement (Knoten, Kante, Fläche) ausgewählt ist.

Die Formelemente können in verschiedene Kategorien eingeordnet werden:

* Formelement-Basis: bezieht sich auf das Base-Feature-Objekt, das in einem [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de") erstellt werden kann.
* Hinzufügende (additive) und abziehende bzw. entfernende (subtraktive) Formelemente
  + Hinzufügende Grundkörper-Formen: [Quader](/PartDesign_AdditiveBox/de "PartDesign AdditiveBox/de"), [Kegel](/PartDesign_AdditiveCone/de "PartDesign AdditiveCone/de"), [Zylinder](/PartDesign_AdditiveCylinder/de "PartDesign AdditiveCylinder/de"), [Ellipsoid](/PartDesign_AdditiveEllipsoid/de "PartDesign AdditiveEllipsoid/de"), [Prisma](/PartDesign_AdditivePrism/de "PartDesign AdditivePrism/de"), [Kugel](/PartDesign_AdditiveSphere/de "PartDesign AdditiveSphere/de"), [Torus](/PartDesign_AdditiveTorus/de "PartDesign AdditiveTorus/de") und [Keil](/PartDesign_AdditiveWedge/de "PartDesign AdditiveWedge/de").
  + Abziehende Grundkörper-Formen: [Abzuziehender Quader](/PartDesign_SubtractiveBox/de "PartDesign SubtractiveBox/de"), [Abzuziehender Kegel](/PartDesign_SubtractiveCone/de "PartDesign SubtractiveCone/de"), [Abzuziehender Zylinder](/PartDesign_SubtractiveCylinder/de "PartDesign SubtractiveCylinder/de"), [Abzuziehendes Ellipsoid](/PartDesign_SubtractiveEllipsoid/de "PartDesign SubtractiveEllipsoid/de"), [Abzuziehendes Prisma](/PartDesign_SubtractivePrism/de "PartDesign SubtractivePrism/de"), [Abzuziehende Kugel](/PartDesign_SubtractiveSphere/de "PartDesign SubtractiveSphere/de"), [Abzuziehender Torus](/PartDesign_SubtractiveTorus/de "PartDesign SubtractiveTorus/de") und [Abzuziehender Keil](/PartDesign_SubtractiveWedge/de "PartDesign SubtractiveWedge/de").
  + Hinzufügende profilbasierte Formelemente: [Block](/PartDesign_Pad/de "PartDesign Pad/de"), [Drehteil](/PartDesign_Revolution/de "PartDesign Revolution/de"), [Ausformung](/PartDesign_AdditiveLoft/de "PartDesign AdditiveLoft/de"), [Rohr](/PartDesign_AdditivePipe/de "PartDesign AdditivePipe/de").
  + Abziehende profilbasierte Formelemente: [Vertiefung](/PartDesign_Pocket/de "PartDesign Pocket/de"), [Bohrung](/PartDesign_Hole/de "PartDesign Hole/de"), [Nut](/PartDesign_Groove/de "PartDesign Groove/de"), [Abzuziehende Ausformung](/PartDesign_SubtractiveLoft/de "PartDesign SubtractiveLoft/de"), [Abzuziehendes Rohr](/PartDesign_SubtractivePipe/de "PartDesign SubtractivePipe/de").
* [Boolesche Verknüpfung](/PartDesign_Boolean/de "PartDesign Boolean/de") mit Vereinigung, Differenz und Schnittmenge.
* Modifikationen
  + [Fase](/PartDesign_Chamfer/de "PartDesign Chamfer/de")
  + [Formschräge](/PartDesign_Draft/de "PartDesign Draft/de")
  + [Verrundung](/PartDesign_Fillet/de "PartDesign Fillet/de")
  + [Dicke](/PartDesign_Thickness/de "PartDesign Thickness/de")
* Muster anwenden
  + [Lineares Muster](/PartDesign_LinearPattern/de "PartDesign LinearPattern/de")
  + [Spiegeln](/PartDesign_Mirrored/de "PartDesign Mirrored/de")
  + [Mehrfach-Transformation](/PartDesign_MultiTransform/de "PartDesign MultiTransform/de")
  + [Polares Muster](/PartDesign_PolarPattern/de "PartDesign PolarPattern/de")
  + [Skalierte Transformation](/PartDesign_Scaled/de "PartDesign Scaled/de")

## Vererbung

![](/images/FreeCAD_core_objects.svg)

Vereinfachtes Diagramm der Beziehungen zwischen den Kernobjekten im Programm. Die `PartDesign::Feature`-Objekte werden zum Aufbau parametrischer 3D-Festkörper verwendet und werden daher vom Basisobjekt `Part::Feature` abgeleitet.

## Skripten

*Siehe auch:* [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de") und [Skriptgenerierte Objekte](/Scripted_objects/de "Scripted objects/de").

Siehe [Part Formelement](/Part_Feature/de "Part Feature/de") für allgemeine Informationen über das Hinzufügen von Objekten aus der [Python-Konsole](/Python_console/de "Python console/de") heraus.

Siehe [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de") für die allgemeinen Informationen zum Hinzufügen eines Körpers. Sobald ein Körper vorhanden ist, können Formelemente mit der Methode `addObject()` des Körpers daran befestigt werden.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject('PartDesign::Body', 'Body')
obj.Label = "Custom label"

feature = App.ActiveDocument.addObject('PartDesign::AdditiveBox', 'Box')
feature.Width = 200
feature.Length = 300
feature.Height = 500
obj.addObject(feature)
App.ActiveDocument.recompute()

feature2 = App.ActiveDocument.addObject('PartDesign::SubtractiveBox', 'Box')
feature2.Width = 50
feature2.Length = 200
feature2.Height = 400
obj.addObject(feature2)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Feature/de&oldid=1536887>"