---
title: Część Część na obiekt 2D
---
## Wprowadzenie

![](/images/Tree_Part2D.svg)

Obiekt Part2DObject środowiska Część, lub formalnie `Part::Part2DObject`, jest prostym elementem [kształtu topologicznego](/Part_TopoShape/pl "Part TopoShape/pl"), który może być wyświetlany w oknie [widoku 3D](/3D_view/pl "3D view/pl").

Obiekt `Part::Part2DObject` wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl"), ale jest wyspecjalizowany do geometrii 2D, ponieważ jego kształt będzie leżał na płaszczyźnie. Płaszczyzna ta jest zdefiniowana przez właściwość DANE**Umiejscowienie** ( pozycja, normalna i obrót). Płaszczyzna może być jednak również zdefiniowana przez pomocnicze elementy geometryczne, takie jak płaszczyzna utworzona przez trzy dowolne wierzchołki lub ściana bryły.

![](/images/FreeCAD_core_objects.svg)

Uproszczony diagram zależności pomiędzy podstawowymi obiektami w programie FreeCAD.

## Użycie

Obiekt Part Part2DObject jest obiektem wewnętrznym, więc nie można go utworzyć z poziomu interfejsu graficznego, tylko z poziomu [konsoli Python](/Python_console/pl "Python console/pl") jak opisano w sekcji [tworzenie skryptów](/Part_Feature/pl#Tworzenie_skrypt.C3.B3w "Part Feature/pl").

Obiekt `Part::Part2DObject` jest zdefiniowany w środowisku pracy [Część](/Part_Workbench/pl "Part Workbench/pl"), ale może być używany jako klasa bazowa dla [obiektów tworzonych skryptami](/Scripted_objects/pl "Scripted objects/pl") we wszystkich [środowiskach pracy](/Workbenches/pl "Workbenches/pl"), które tworzą dwuwymiarowe kształty geometryczne. Na przykład, jest to obiekt bazowy dla szkiców *([obiektów szkicu](/Sketcher_SketchObject/pl "Sketcher SketchObject/pl"))* i dla większości obiektów tworzonych za pomocą środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl").

Środowisko pracy może dodać więcej właściwości do tego podstawowego elementu, aby stworzyć obiekt o złożonym wyglądzie.

## Właściwości

Zobacz stronę [Właściwości](/Property/pl "Property/pl") dla wszystkich typów właściwości, które mogą mieć obiekty tworzone skryptami.

Obiekt [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") *(klasa `Part::Part2DObject`)* wywodzi się z [Część: Cecha](/Part_Feature "Part Feature") *(klasa `Part::Feature`)* i dziedziczy wszystkie jej właściwości.

Obiekt Part2DObject ma także następujące dodatkowe właściwości w obszarze [edytora właściwości](/Property_editor/pl "Property editor/pl"). Ukryte właściwości można pokazać za pomocą polecenia **Pokaż ukryte** w menu kontekstowym okna [edycji właściwości](/Property_editor/pl "Property editor/pl").

### Dane

Dołączenie

* DANE (ukryty)**Typ mocowania** (`String`): nazwa klasy obiektu attach engine sterującego dołączeniem. Domyślnie jest to `Attacher::AttachEnginePlane`.
* DANE**Podparcie** (`LinkSubList`): jest to płaszczyzna lub powierzchnia obsługująca geometrię 2D. Domyślnie jest to pusta lista `[]`.
* DANE**Tryb odłączenia** (`Enumeration`): `Dezaktywowany` domyślnie. Ta właściwość określa płaszczyznę, która będzie używana przez obiekt jako odniesienie dla geometrii 2D. Kliknięcie na elipsę ... *(trzy kropki)*, po prawej stronie pola edycyjnego, uruchamia polecenie [Część: Edycja mocowania](/Part_EditAttachment "Part EditAttachment"), które umożliwia wybór płaszczyzny pomocniczej poprzez wybranie różnych elementów w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Dostępne są różne tryby: `Deactivated`, `Przemieść położenie odniesienia`, `Objekt XY`, `Objekt XZ`, `Objekt YZ`, `Płaszczyzna ściany`, `Stycznie do powierzchni`, `Normalna do krawędzi`, `Frenet NB`, `Frenet TN`, `Frenet TB`, `Współśrodkowo`, `Płaszczyzna przez 3 punkty`, `Normalna do 3 punktów`, `Składanie`, `Bezwładność 2-3`, `Wyrównane O-N-X`, `Wyrównane O-N-Y`, `Wyrównane O-X-Y`, `Wyrównane O-X-N`, `Wyrównane O-X-N`, `Wyrównane O-Y-N`, `Wyrównane O-Y-X`.
* DANE**Dołączenie odwrotne** (`Bool`): wartość domyślna to `FAŁSZ`.Jeśli parametr ma wartość `PRAWDA`, kierunek Z zostanie odwrócony. Na przykład [szkic](/Sketch/pl "Sketch/pl") zostanie odwrócony do góry nogami. Ukryje, jeśli parametr DANE**Tryb dołączenia** ma wartość `Dezaktywowany`.
* DANE (ukryty)**Ścieżka dołączenia** (`Float`): ustawia punkt krzywej, na który ma być mapowany [szkic](/Sketch/pl "Sketch/pl"). Przebiega od `0` do `1`, co odpowiada wartościom `początek` i `koniec`. Domyślnie przyjmuje wartość `0`.
* DANE**Odsunięcie mocowania** (`umocowanie`): pozycja obiektu w oknie [widoku 3D](/3D_view/pl "3D view/pl"), w odniesieniu do umiejscowienia obiektu dołączonego. Położenie jest określone przez punkt `Bazowy` *(wektor)* i punkt `Obrotu` *(oś i kąt)*. Zobacz [Umiejscowienie](/Placement/pl "Placement/pl"). Ukryje, jeśli DANE**Tryb dołączenia** ma wartość `Dezaktywowany`.

## Tworzenie skryptów

*Zobacz również:* [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"), oraz [Obiekty skryptowe](/Scripted_objects/pl "Scripted objects/pl").

Ogólne informacje na temat dodawania obiektów do dokumentu można znaleźć na stronie [Część: właściwość](/Part_Feature/pl "Part Feature/pl").

Obiekt Part2DObject jest tworzony za pomocą metody `addObject()`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Part2DObject", "Name")
obj.Label = "Custom label"

```

Dlatego też, dla klasy podrzędnej [Python](/Python/pl "Python/pl"), powinieneś stworzyć obiekt `Part::Part2DObject`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Part2DObjectPython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Part2DObject/pl&oldid=1560959>"