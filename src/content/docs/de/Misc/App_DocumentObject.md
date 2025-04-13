---
title: App DocumentObject
---
## Einleitung

![](/images/Px.svg)

Ein App DocumentObject oder formal ein `App::DocumentObject` ist die Basisklasse aller im Dokument behandelten Objektklassen.

Allgemein ausgedrückt ist ein "DocumentObject" jedes "Ding", das in der [Baumansicht](/Tree_view/de "Tree view/de") erscheinen kann und das gespeichert und beim Öffnen eines Dokuments wiederhergestellt wird.

![](/images/App_DocumentObject_example.png)

Baumansicht, die verschiedene Objekte im Dokument anzeigt. Jedes von ihnen ist ein "Dokumentobjekt", das letztlich von der Basisklasse `App::DocumentObject` abgeleitet ist.

![](/images/FreeCAD_core_objects.svg)

Vereinfachtes Diagramm der Beziehungen zwischen den Kernobjekten in FreeCAD

## Anwendung

Das App DocumentObject ist eine interne Klasset; es kann daher nicht von der grafischen Oberfläche aus erstellt werden. Es ist auch nicht dafür vorgesehen, selbst eingesetzt zu werden. Es definiert lediglich das grundlegende Verhalten und die Eigenschaften von Objekten im Programm.

Einige der wichtigsten Dokumentobjekte sind die folgenden:

* Die Klasse [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de"), ein leeres Objekt, das je nach den hinzugefügten Eigenschaften für verschiedene Zwecke verwendet werden kann.
* Die Klasse [App GeoFeature](/App_GeoFeature/de "App GeoFeature/de"), das Basisobjekt aller geometrischen Objekte, d.h. von Objekten, die eine Eigenschaft [Placement](/Placement/de "Placement/de") besitzen, die ihre Position in der [3D-Ansicht](/3D_view/de "3D view/de") bestimmt.
* Die Klasse [Part Feature](/Part_Feature/de "Part Feature/de") (Part-Formelement), abgeleitet vom App GeoFeature, ist die übergeordnete Klasse von Objekten mit 2D- und 3D-[TopoFormen](/Part_TopoShape/de "Part TopoShape/de").
* Die Klasse [Mesh Feature](/Mesh_Feature/de "Mesh Feature/de") (Mesh-Formelement), abgeleitet von App GeoFeature, ist die übergeordnete Klasse von Objekten mit 2D- und 3D-[Netzobjekten](/Mesh_MeshObject/de "Mesh MeshObject/de").

## Eigenschaften

Siehe [Objekteigenschaften](/Property/de "Property/de") für alle Arten von Eigenschaften, die skriptgenerierte Objekte besitzen können.

Dies sind die grundlegenden Eigenschaften, die im Wesentlichen alle Objekte haben. Auf diese Eigenschaften kann über die [Python-Konsole](/Python_console/de "Python console/de") zugegriffen werden.

* Daten-Eigenschaft**Label** (`String`): Die vom Benutzer editierbare Benennung dieses Objekts; sie ist eine beliebige "UTF8-Zeichenkette. Standardmäßig entspricht sie dem Inhalt von `Name`.
* Daten-Eigenschaft**Label2** (`String`): Eine längere, vom Benutzer editierbare Beschreibung dieses Objekts, es ist eine beliebige UTF8-Zeichenfolge, die Zeilenumbrüche enthalten kann. Standardmäßig ist es eine leere Zeichenfolge `""`.
* Daten-Eigenschaft**Expression Engine** (`ExpressionEngine`): Eine Liste von Ausdrücken.
* Daten-Eigenschaft**Visibility** (`Bool`): Bestimmt, ob das Objekt dargestellt werden soll oder nicht.

Für abgeleitete Objekte wird standardmäßig nur die Daten-Eigenschaft**Label** im [Eigenschafteneditor](/Property_editor/de "Property editor/de") aufgelistet. Die anderen Eigenschaften werden ausgeblendet.

## Skripten

*Siehe auch:* [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de") und [Skriptgenerierte Objekte](/Scripted_objects/de "Scripted objects/de").

Siehe [Part Formelement](/Part_Feature/de "Part Feature/de") für allgemeine Informationen zum Hinzufügen von Objekten zu einem Dokument.

Ein Dokumentobjekt wird mit der Methode `addObject()` des Dokuments erstellt. Im Allgemeinen ist es jedoch nicht erforderlich, dieses Objekt von Hand zu erstellen. In der Regel ist es besser, eine der komplexeren Klassen als Unterklasse abzuleiten, z.B. [App FeaturePython](/App_FeaturePython/de "App FeaturePython/de"), [App GeoFeature](/App_GeoFeature/de "App GeoFeature/de"), [Part Feature](/Part_Feature/de "Part Feature/de"), [Part Part2DObjekt](/Part_Part2DObject/de "Part Part2DObject/de"), usw.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::DocumentObject", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=App_DocumentObject/de&oldid=1399956>"