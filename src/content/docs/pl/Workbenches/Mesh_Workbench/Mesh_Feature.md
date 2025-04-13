---
title: Siatka Cecha
---
## Wprowadzenie

![](/images/Mesh_Tree.svg)

Obiekt Cecha siatki, lub formalnie `Mesh::Feature`, jest prostym elementem z powiązanym [obiektem siatki](/Mesh_MeshObject/pl "Mesh MeshObject/pl"), który może być wyświetlany w oknie [widoku 3D](/3D_view/pl "3D view/pl").

Cecha siatki jest podobna koncepcyjnie do cechy [Część: Cecha](/Part_Feature/pl "Part Feature/pl"). Pierwsza jest obiektem bazowym dla elementów z informacją o "siatce", podczas gdy druga jest obiektem bazowym dla elementów z informacją o "kształcie geometrycznym".

Proszę zauważyć, że środowisko pracy [MES](/FEM_Workbench/pl "FEM Workbench/pl") również używa siatek, ale używa innego obiektu, zwanego [MES: Siatka](/FEM_Mesh/pl "FEM Mesh/pl") *(klasa `Fem::FemMeshObject`)*. Obiekt ten nie jest pochodną cechy Siatka i ma inne właściwości.

![](/images/FreeCAD_core_objects.svg)

Uproszczony diagram zależności pomiędzy podstawowymi obiektami w programie FreeCAD.

## Użycie

Prawie wszystkie obiekty siatkowe tworzone poleceniami dostępnymi w środowisku pracy [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") są cechami siatki. Wyjątek stanowią parametryczne obiekty siatkowe tworzone poleceniem [Utwórz bryłę pierwotną](/Mesh_BuildRegularSolid/pl "Mesh BuildRegularSolid/pl"). Obiekt cecha siatki można również utworzyć z poziomu [konsoli Python](/Python_console/pl "Python console/pl"), jak opisano w sekcji [tworzenie skryptów](#Tworzenie_skrypt.C3.B3w).

Klasa `Mesh::Feature` jest zdefiniowana w środowisku pracy [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl"), ale może być użyta jako klasa bazowa dla [obiektów tworzonych skryptami](/Scripted_objects/pl "Scripted objects/pl") we wszystkich [środowiskach pracy](/Workbenches/pl "Workbenches/pl"), które wytwarzają płaskie i przestrzenne siatki.

Obiekt `Mesh::Feature` posiada proste właściwości, takie jak [umiejscowienie](/Placement/pl "Placement/pl"), oraz właściwości wizualne określające wygląd jego krawędzi i ścian.

## Właściwości

Zapoznaj się z treścią na stronie [Właściwości](/Property/pl "Property/pl") aby poznać wszystkie typy właściwości, które mogą mieć obiekty tworzone skryptami.

Klasa Siatka: Cecha (`Mesh::Feature`) wywodzi się z podstawowej [Cechy geometrii](/App_GeoFeature/pl "App GeoFeature/pl") (`App::GeoFeature`) i dziedziczy wszystkie jej właściwości. Posiada również kilka dodatkowych właściwości. Przede wszystkim właściwość DANE**Siatka**, która przechowuje jej [obiekt siatki](/Mesh_MeshObject/pl "Mesh MeshObject/pl"). Jest to geometria, która jest wyświetlana w oknie [widoku 3D](/3D_view/pl "3D view/pl").

Są to właściwości dostępne w [edytorze właściwości](/Property_editor/pl "Property editor/pl"). Ukryte właściwości można wyświetlić za pomocą polecenia **Pokaż ukryte** w menu kontekstowym [edytora właściwości](/Property_editor/pl "Property editor/pl").

### Dane

Podstawa

* DANE (Hidden)**Pośrednik** (`PythonObject`): niestandardowa klasa związana z tym obiektem. Istnieje to tylko dla wersji [Python](/Python "Python"). Zobacz akapit [Tworzenie skryptów](#Tworzenie_skryptów/pl).
* DANE**Siatka** (`MeshKernel`): klasa [Siatka: MeshObject](/Mesh_MeshObject/pl "Mesh MeshObject/pl") związana z tym obiektem. Wymienia ona liczbę `Punktów`, `Krawędzi` i `Ścian` siatki.
* DANE**Umiejscowienie** (`Placement`): pozycja obiektu w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Umiejscowienie jest określone przez `Base` punkt *(wektor)*, oraz `Obrót` *(oś i kąt)*. Zobacz stronę [Umiejscowienie](/Placement/pl "Placement/pl")
  + DANE**Kąt**: kąt obrotu wokół DANE**Oś**. Domyślnie jest to wartość `0°` *(zero stopni)*.
  + DANE**Oś**: wektor jednostkowy określający oś obrotu dla umiejscowienia. Każdy element jest wartością zmiennoprzecinkową pomiędzy `0` a `1`. Jeśli jakakolwiek wartość jest większa od `1`, wektor jest normalizowany tak, aby jego wielkość wynosiła `1`. Domyślnie jest to dodatnia oś Z, `(0, 0, 1)`.
  + DANE**Pozycja**: wektor zawierający współrzędne 3D punktu bazowego. Domyślnie jest to początek układu odniesienia `(0, 0, 0)`.
* DANE**Etykieta** (`String`): edytowalna przez użytkownika nazwa tego obiektu, jest to dowolny ciąg znaków UTF8.
* DANE (Hidden)**Etykieta2** (`String`): dłuższy, edytowalny przez użytkownika opis tego obiektu, jest to dowolny ciąg UTF8, który może zawierać znaki nowej linii. Domyślnie jest to pusty ciąg `""`.
* DANE**Silnik wyrażeń** (`Hidden`): lista wyrażeń. Domyślnie jest pusta `[]`.
* DANE (Hidden)**Widoczność** (`Bool`): decyduje czy wyświetlać obiekt, czy nie.

### Widok

Podstawa

* WIDOK (Ukryte)**Proxy** (`PythonObject`): klasa własna [dostawca widoku](/Viewprovider/pl "Viewprovider/pl") związana z tym obiektem. Istnieje wyłącznie dla wersji środowiska [Python](/Python/pl "Python/pl"). Zobacz sekcję [tworzenie skryptów](#Tworzenie_skrypt.C3.B3w).

Opcje wyświetlania

* WIDOK**Ramka Otaczająca** (`Bool`): jeśli ma wartość `PRAWDA`, obiekt będzie pokazywał Ramkę otaczającą w oknie [widoku 3D](/3D_view/pl "3D view/pl").
* WIDOK**Tryb wyświetlania** (`Enumeration`): `Cieniowany` *(bez krawędzi)*, `Szkielet` *(bez ścian)*, `Cieniowany z krawędziami` *(zwykła wizualizacja)*, `Punkty` *(tylko wierzchołki)*.
* WIDOK**Pokazuj na drzewie** (`Bool`): jeśli ma wartość `PRAWDA`, obiekt pojawia się w oknie [Widoku Drzewa](/Tree_view/pl "Tree view/pl"). W przeciwnym razie jest niewidoczny.
* WIDOK**Widoczność** (`Bool`): jeśli ma wartość `PRAWDA`, obiekt pojawia się w oknie [widoku 3D](/3D_view/pl "3D view/pl"). W przeciwnym razie jest niewidoczny. Domyślnie właściwość ta może być włączana i wyłączana przez naciśnięcie klawisza Spacja.

Styl obiektu

* WIDOK (Hidden)**Kolorowanie** (`Bool`): wartość domyślna to `FAŁSZ`.
* WIDOK**Kąt zagięcia** (`FloatConstraint`):
* WIDOK**Oświetlenie** (`Enumeration`): `Jednostronnie` *(wartość domyślna)*, `Dwustronnie`. Oświetlenie pochodzi z dwóch stron lub z jednej strony w oknie [widoku 3D](/3D_view/pl "3D view/pl").
* WIDOK**Kolor linii** (`Color`): krotka trzech zmiennoprzecinkowych wartości RGB `(r,g,b)`, aby określić kolor krawędzi w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Domyślnie jest to wartość `(0. 0, 0.0, 0.0)`, która jest wyświetlana jako `[0,0,0]` w zakresie 255, completely black .
* WIDOK**Przejrzystość linii** (`Percent`): wartość całkowita od `0` do `100` *(wartość procentowa)* określająca poziom przezroczystości krawędzi w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Wartość `100` oznacza całkowicie niewidoczne krawędzie. Krawędzie są niewidoczne, ale nadal można je wybrać, o ile parametr WIDOK**Do wyboru** ma wartość `PRAWDA`.
* WIDOK**Szerokość linii** (`FloatConstraint`): wartość typu zmiennoprzecinkowego określająca szerokość krawędzi w pikselach wyświetlane w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Wartość domyślna to `1.0`.
* WIDOK**Otwarte krawędzie** (`Bool`): wartość domyślna to `FAŁSZ`.
* WIDOK**Rozmiar punktu** (`FloatConstraint`): podobnie jak WIDOK**Szerokość linii**, określa rozmiar wierzchołków.
* WIDOK**Kolor kształtu** (`Color`): podobnie jak WIDOK**Kolor linii**, definiuje kolor ścian. Wartość domyślna to `(0.8, 0.8, 0.8)`, która jest wyświetlana jako `[204,204,204]` w zakresie 255, a light gray.
* WIDOK (Hidden)**Materiał kształtu** (`Material`): obiekt [Materiał](/index.php?title=App_Material/pl&action=edit&redlink=1 "App Material/pl (page does not exist)") związany z tym obiektem. Domyślnie jest on pusty.
* WIDOK**Przezroczystość** (`Percent`): wartość całkowita od `0` do `100` *(wartość procentowa)* określająca poziom przezroczystości ścian w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Wartość `100` oznacza całkowicie niewidoczne ściany. Ściany są niewidoczne, ale nadal można je wybrać, o ile parametr WIDOK**Do wyboru** ma wartość `PRAWDA`.

Wybieranie

* WIDOK**Na górze po wybraniu** (`Enumeration`): `Wyłączony` *(domyślnie)*, `Włączony`, `Objekt`, `Element`.
* WIDOK**Do wyboru** (`Bool`): jeśli ma wartość `PRAWDA`, obiekt można wybrać kursorem w oknie [widoku 3D](/3D_view/pl "3D view/pl"). W przeciwnym razie obiekt nie może być wybrany, dopóki opcja ta nie zostanie ustawiona na wartość `PRAWDA`.
* WIDOK**Styl wyboru** (`Enumeration`): `Kształt` *(domyślnie)*, `Ramka Otaczająca`. Jeśli parametr ma wartość `Kształt`, cały kształt *(wierzchołki, krawędzie i ściany)* zostanie podświetlony w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Jeśli `Ramka Otaczająca`, podświetlone zostanie tylko pole ograniczające.

## Tworzenie skryptów

*Zobacz również:* [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"), oraz [Obiekty tworzone skryptami](/Scripted_objects/pl "Scripted objects/pl").

Ogólne informacje na temat dodawania obiektów do dokumentu można znaleźć na stronie [Część: właściwość](/Part_Feature/pl "Part Feature/pl").

Cecha siatki jest tworzona za pomocą metody dokumentu `addObject()`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Mesh::Feature", "Name")
obj.Label = "Custom label"

```

Dlatego też, dla klasy podrzędnej [Python](/Python/pl "Python/pl"), powinieneś stworzyć obiekt `Mesh::FeaturePython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Mesh::FeaturePython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Feature/pl&oldid=1560936>"