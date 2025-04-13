---
title: App Obiekt dokumentu
---

## Wprowadzenie

![](/images/Px.svg)

**Obiekt Dokumentu**, lub formalnie `App::DocumentObject`, jest klasą bazową wszystkich klas obiektów obsługiwanych w dokumencie.

Ogólnie rzecz biorąc, "ObiektDokumentu" to dowolna "rzecz", która może pojawić się w [widoku drzewa](/Tree_view/pl "Tree view/pl") i która jest zapisywana i przywracana podczas otwierania dokumentu.

![](/images/App_DocumentObject_example.png)

Widok drzewa pokazujący różne obiekty w dokumencie. Każdy z nich jest "obiektem dokumentu", wywodzącym się z klasy bazowej `App::DocumentObject`.

![](/images/FreeCAD_core_objects.svg)

Uproszczony diagram zależności pomiędzy podstawowymi obiektami w programie FreeCAD.

## Użycie

Obiekt dokumentu jest klasą wewnętrzną, więc nie może być tworzona z poziomu interfejsu graficznego, ani nie jest przeznaczona do samodzielnego użytku. Definiuje ona jedynie podstawowe zachowanie i właściwości obiektów w programie.

Niektóre z najważniejszych obiektów dokumentu to:

- Klasa [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl"), pusty obiekt, który może być używany do różnych celów, w zależności od dodanych atrybutów.
- Klasa [App: Cechy geometrii](/App_GeoFeature/pl "App GeoFeature/pl"), podstawowy obiekt wszystkich obiektów geometrycznych, czyli obiektów posiadających atrybut [Umiejscowienie](/Placement/pl "Placement/pl"), który definiuje ich pozycję w [widoku 3D](/3D_view/pl "3D view/pl").
- Klasa [Część: cCecha](/Part_Feature/pl "Part Feature/pl"), pochodna klasy App GeoFeature, i nadrzędna klasa obiektów z 2D i 3D [kształtami topologicznymi](/Part_TopoShape/pl "Part TopoShape/pl").
- Klasa [Mesh Feature](/Mesh_Feature/pl "Mesh Feature/pl"), pochodna klasy App GeoFeature, i nadrzędna klasa obiektów z [siatkami](/Mesh_MeshObject/pl "Mesh MeshObject/pl") 2D i 3D.

## Właściwości

Zobacz stronę [Właściwości](/Property/pl "Property/pl") dla wszystkich typów właściwości, które mogą mieć obiekty tworzone skryptami.

Są to podstawowe właściwości, które posiadają zasadniczo wszystkie obiekty. Dostęp do tych właściwości można uzyskać z [Konsoli Python](/Python_console/pl "Python console/pl").

- DANE**Etykieta** (`String`): użytkownik może edytować nazwę tego obiektu, jest to dowolny ciąg znaków UTF8. Domyślnie jest to samo co `Nazwa`.
- DANE**Etykieta2** (`String`): dłuższy, użytkownik może edytować opis tego obiektu, jest to dowolny ciąg znaków UTF8, który może zawierać nowe linie. Domyślnie jest to pusty ciąg znaków `""`.
- DANE**Silnik wyrażeń** (`ExpressionEngine`): lista wyrażeń.
- DANE**Widoczność** (`Bool`): definiuje czy wyświetlać obiekt czy nie.

Dla obiektów pochodnych, tylko DANE**Etykieta** będzie domyślnie wyświetlane w [edytorze właściwości](/Property_editor/pl "Property editor/pl"). Pozostałe właściwości będą ukryte.

## Tworzenie skryptów

_Zobacz również:_ [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"), oraz [Obiekty skryptowe](/Scripted_objects/pl "Scripted objects/pl").

Ogólne informacje na temat dodawania obiektów do dokumentu można znaleźć na stronie [Część: właściwość](/Part_Feature/pl "Part Feature/pl").

Obiekt dokumentu tworzy się za pomocą metody `addObject()` dokumentu. Jednakże, ogólnie rzecz biorąc, nie ma potrzeby ręcznego tworzenia tego obiektu. Zazwyczaj lepiej jest podklasować jedną z bardziej złożonych klas, na przykład [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl"), [App: Cechy geometrii](/App_GeoFeature/pl "App GeoFeature/pl"), [Część: Cecha](/Part_Feature/pl "Part Feature/pl"), [Część: Część na obiekt 2D](/Part_Part2DObject/pl "Part Part2DObject/pl"), itd.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::DocumentObject", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=App_DocumentObject/pl&oldid=1389651>"
