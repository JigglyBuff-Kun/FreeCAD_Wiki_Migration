---
title: App Cechy geometrii
---

## Wprowadzenie

![](/images/Feature.svg)

Obiekt **App: Cechy geometrii**, lub formalnie `App::GeoFeature`, jest klasą bazową większości obiektów wyświetlających elementy geometryczne w oknie [widoku 3D](/3D_view/pl "3D view/pl"), ponieważ zawiera właściwość DANE**Umiejscowienie**.

![](/images/FreeCAD_core_objects.svg)

Uproszczony diagram zależności pomiędzy podstawowymi obiektami w programie FreeCAD.

## Użycie

App: Cechy geometrii jest obiektem wewnętrznym, więc nie można go utworzyć z poziomu interfejsu graficznego. Zasadniczo nie jest on przeznaczony do bezpośredniego użycia, a raczej może być podklasowany, aby uzyskać obiekt typu bare-bones, który ma tylko podstawową właściwość DANE**Umiejscowienie** do zdefiniowania jego pozycji w oknie [Widoku 3D](/3D_view/pl "3D view/pl").

Niektóre z najważniejszych obiektów pochodnych są następujące:

- Klasa [Część: Cecha](/Part_Feature/pl "Part Feature/pl"), rodzic większości obiektów o kształtach [topologicznych](/Part_TopoShape/pl "Part TopoShape/pl") 2D i 3D.
- Klasa [Siatka: Cecha](/Mesh_Feature/pl "Mesh Feature/pl"), rodzic większości obiektów wykonanych z [Siatka](/Mesh_MeshObject/pl "Mesh MeshObject/pl"), a nie brył.
- Klasa [MES: FemMeshObject](/FEM_Mesh/pl "FEM Mesh/pl"), rodzic siatek elementów skończonych utworzonych za pomocą [środowiska pracy MES](/FEM_Workbench/pl "FEM Workbench/pl").
- Klasa [CAM: Cecha](/index.php?title=CAM_Feature/pl&action=edit&redlink=1 "CAM Feature/pl (page does not exist)"), rodzic ścieżek utworzonych za pomocą [środowiska pracy CAM](/CAM_Workbench/pl "CAM Workbench/pl") do użytku w obróbce CNC.
- Klasa [App: Część](/App_Part/pl "App Part/pl"), która definiuje [Std: Część](/Std_Part/pl "Std Part/pl"), które mogą być używane jako kontenery korpusów do wykonywania złożeń.

Podczas tworzenia tego obiektu w środowisku [Python](/Python/pl "Python/pl"), zamiast klasy podrzędnej `App::GeoFeature`, należy utworzyć klasę podrzędną `App::GeometryPython`, ponieważ ta ostatnia zawiera domyślnego dostawcę widoku oraz atrybuty `Proxy` dla samego obiektu i jego dostawcy widoku. Zobacz także sekcję [tworzenie skryptów](#Tworzenie_skryptów).

## Właściwości App GeoFeature

Zobacz stronę [Właściwości](/Property/pl "Property/pl") dla wszystkich typów właściwości, które mogą mieć obiekty tworzone skryptami.

App: Cechy geometrii _(klasa`App::GeoFeature`)_ jest pochodną podstawowego obiektu [App DocumentObject](/App_DocumentObject/pl "App DocumentObject/pl") _(klasa `App::DocumentObject`)_ i dziedziczy wszystkie jego właściwości. Dodatkowo posiada właściwość DANE**Umiejscowienie**, która kontroluje jego pozycję w oknie [Widoku 3D](/3D_view/pl "3D view/pl").

## Właściwości App GeometryPython

Zobacz stronę [Właściwości](/Property/pl "Property/pl") dla wszystkich typów właściwości, które mogą mieć obiekty tworzone skryptami.

Obiekt **App: Cechy geometrii Python** _(klasa `App::GeometryPython`)_ jest pochodną podstawowego obiektu App: Cechy geometrii _(klasa `App::GeoFeature`)_ i dziedziczy wszystkie jego właściwości. Posiada również kilka dodatkowych właściwości.

Są to właściwości dostępne w [edytorze właściwości](/Property_editor/pl "Property editor/pl"). Ukryte właściwości można wyświetlić za pomocą polecenia **Pokaż ukryte** w menu kontekstowym [edytora właściwości](/Property_editor/pl "Property editor/pl").

### Dane

Podstawa

- DANE (Ukryte)**Proxy** (`PythonObject`): niestandardowa klasa powiązana z tym obiektem.
- DANE**Umiejscowienie** (`Placement`): pozycja obiektu w [widoku 3D](/3D_view/pl "3D view/pl"). Umiejscowienie jest definiowane przez punkt `Bazowy` _(wektor)_ i `Obrót` _(oś i kąt)_. Zobacz informacje na stronie [Umiejscowienie](/Placement/pl "Placement/pl").
  - DANE**Kąt**: kąt obrotu wokół DANE**Osi**. Domyślnie jest to `0°` _(zero stopni)_.
  - DANE**Oś**: wektor jednostkowy definiujący oś obrotu dla umiejscowienia. Każdy element jest wartością zmiennoprzecinkową pomiędzy `0` i `1`. Jeśli jakakolwiek wartość znajduje się powyżej `1`, wektor jest normalizowany tak, aby jego wielkość wynosiła `1`. Domyślnie jest to dodatnia oś Z, `(0, 0, 1)`.
  - DANE**Pozycja**: wektor ze współrzędnymi 3D punktu bazowego. Domyślnie jest to punkt odniesienia połażenia `(0, 0, 0)`.
- DANE**Etykieta** (`String`): edytowalna przez użytkownika nazwa tego obiektu, jest to dowolny ciąg UTF8.
- DANE (Ukryte)**Etykieta2** (`String`): dłuższy, edytowalny przez użytkownika opis tego obiektu, jest to dowolny ciąg UTF8, który może zawierać nowe linie. Domyślnie jest to pusty ciąg `""`.
- DANE**SilnikWyrażeń** (`Ukryte`): lista wyrażeń. Domyślnie jest pusta `[]`.
- DANE (Ukryte)**Widoczność** (`Bool`): określa czy obiekt ma być wyświetlany czy nie.

### Widok

Baza

- WIDOK (Ukryte)**Proxy** (`PythonObject`): niestandardowa klasa [dostawcy widoku](/Viewprovider/pl "Viewprovider/pl") powiązana z tym obiektem.

Opcje wyświetlania.

- WIDOK**Ramka otaczająca** (`Bool`): jeśli ma wartość `PRAWDA`, obiekt wyświetli obwiednię w oknie [widoku 3D](/3D_view/pl "3D view/pl").
- WIDOK**Tryb wyświetlania** (`Enumeration`): zobacz informacje w [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl").
- WIDOK**Pokaż w drzewie** (`Bool`): zobacz informacje w [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl").
- WIDOK**Widoczność** (`Bool`): zobacz informacje w [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl").

Styl obiektu

- WIDOK**Kolor kształtu** (`Color`): krotka trzech zmiennoprzecinkowych wartości RGB `(r,g,b)` do definiowania koloru ścian w [widoku 3D](/3D_view/pl "3D view/pl"). Domyślnie jest to `(0. 8, 0.8, 0.8)`, co jest wyświetlane jako `[204, 204, 204]` na podstawie 255, a jasnoszary .
- WIDOK (ukryte)**Materiał kształtu** (`Material`): powiązany z tym obiektem [Materiał](/index.php?title=App_Material/pl&action=edit&redlink=1 "App Material/pl (page does not exist)"). Domyślnie włąściwość jest pusta.
- WIDOK**Przeźroczystość** (`Percent`): wartość całkowita od `0` do `100`, która określa poziom przeźroczystości ścian w [widoku 3D](/3D_view "3D view"). Wartość `100` oznacza całkowicie niewidoczne ściany, ściany są niewidoczne, ale nadal można je wybrać, o ile właściwość WIDOK**Wybieralny** ma wartość `PRAWDA`.

Wybór

- WIDOK**Na górze po wybraniu** (`Enumeration`): zobacz informacje na stronie [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl").
- WIDOK**Wybieralny** (`Bool`): jeśli ma wartość `PRAWDA`, obiekt może zostać wybrany za pomocą kursora w oknie [widoku 3D](/3D_view/pl "3D view/pl"). W przeciwnym razie obiekt nie może zostać wybrany, dopóki ta właściwość nie zostanie ustawiona na `PRAWDA`.
- WIDOK**Styl wyboru** (`Enumeration`): zobacz informacje na ten temat zawarte na stronie [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl").

## Tworzenie skryptów

_Zobacz również:_ [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"), oraz [Obiekty skryptowe](/Scripted_objects/pl "Scripted objects/pl").

Ogólne informacje na temat dodawania obiektów do dokumentu można znaleźć na stronie [Część: właściwość](/Part_Feature/pl "Part Feature/pl").

Obiekt Cechy geometrii jest tworzony za pomocą metody `addObject()` dokumentu. Jeśli chcesz utworzyć obiekt o kształcie 2D lub 3D [kształt topologiczny](/Part_TopoShape/pl "Part TopoShape/pl"), lepszym rozwiązaniem może być utworzenie jednej z klas podrzędnych wyspecjalizowanych do obsługi kształtów, na przykład [Część: Cecha](/Part_Feature/pl "Part Feature/pl") lub [Część: Część na obiekt 2D](/Part_Part2DObject/pl "Part Part2DObject/pl").

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::GeoFeature", "Name")
obj.Label = "Custom label"

```

Dlatego też, dla klasy podrzędnej [Python](/Python/pl "Python/pl"), powinieneś stworzyć obiekt `App::GeometryPython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::GeometryPython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=App_GeoFeature/pl&oldid=1560940>"
