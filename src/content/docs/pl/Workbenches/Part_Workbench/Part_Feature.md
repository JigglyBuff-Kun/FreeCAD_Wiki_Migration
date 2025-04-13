---
title: Część Cecha
---
## Wprowadzenie

![](/images/Part_3D_object.svg)

Obiekt Cecha Części, lub formalnie `Part::Feature`, jest prostym elementem [kształtu topologicznego](/Part_TopoShape/pl "Part TopoShape/pl"), który może być wyświetlany w oknie [widoku 3D](/3D_view/pl "3D view/pl").

Cecha części jest klasą nadrzędną dla większości obiektów 2D *(Rysunek roboczy, Szkicownik)* i 3D *(Część, Projekt części)*, z wyjątkiem siatek, które są zwykle oparte na [cechach siatek](/Mesh_Feature/pl "Mesh Feature/pl"), lub [obiektach FemMesh](/FEM_Mesh/pl "FEM Mesh/pl") dla obiektów MES.

![](/images/FreeCAD_core_objects.svg)

Uproszczony diagram zależności pomiędzy podstawowymi obiektami w programie FreeCAD.

## Użycie

Obiekt cecha części jest obiektem wewnętrznym, więc nie można go utworzyć z poziomu interfejsu graficznego, tylko z poziomu [konsoli Python](/Python_console/pl "Python console/pl") jak opisano w sekcji [tworzenie skryptów](#Tworzenie_skrypt.C3.B3w).

Klasa `Part::Feature` jest zdefiniowana w środowisku [Część](/Part_Workbench/pl "Part Workbench/pl") ale może być użyta jako klasa bazowa dla [obiektów tworzonych skryptami](/Scripted_objects/pl "Scripted objects/pl") we wszystkich [środowiskach pracy](/Workbenches/pl "Workbenches/pl") które produkują kształty geometryczne 2D i 3D. Zasadniczo wszystkie obiekty produkowane w środowisku pracy [Część](/Part_Workbench/pl "Part Workbench/pl") są instancjami `Part::Feature`.

`Part::Feature` jest również klasą nadrzędną [zawartości Projektu części](/PartDesign_Body/pl "PartDesign Body/pl"), [cechy Projektu części](/PartDesign_Feature/pl "PartDesign Feature/pl"), oraz [Part2DObject](/Part_Part2DObject/pl "Part Part2DObject/pl"), która jest wyspecjalizowana dla kształtów 2D *(planarnych)*.

Środowisko pracy może dodać więcej właściwości do tego podstawowego elementu, aby stworzyć obiekt o złożonym wyglądzie.

## Własności

Zobacz stronę [Właściwości](/Property/pl "Property/pl") dla wszystkich typów właściwości, które mogą mieć obiekty tworzone skryptami.

Cecha części *(klasa `Part::Feature`)* wywodzi się z podstawowej [App: GeoFeature](/App_GeoFeature/pl "App GeoFeature/pl") *(klasa `App::GeoFeature`)*, i dziedziczy wszystkie jego właściwości. Posiada również kilka dodatkowych właściwości. W szczególności właściwość DANE**Kształt**, która przechowuje [kształt topologiczny](/Part_TopoShape/pl "Part TopoShape/pl") obiektu. Jest to geometria, która jest wyświetlana w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Inne właściwości tego obiektu to te związane z wyglądem jego [kształtu topologicznego](/Part_TopoShape/pl "Part TopoShape/pl").

Są to właściwości dostępne w [edytorze właściwości|](/Property_editor/pl "Property editor/pl"). Ukryte właściwości można pokazać za pomocą polecenia **Pokaż ukryte** w menu kontekstowym okna [edycji właściwości](/Property_editor/pl "Property editor/pl").

### Dane

Podstawa

* DANE (Ukryte)**Pośrednik** (`PythonObject`): klasa własna związana z tym obiektem. Występuje to tylko w wersji [Python](/Python/pl "Python/pl"). Zobacz rozdział [tworzenie skryptów](#Tworzenie_skrypt.C3.B3w).
* DANE (Ukryte)**Kształt** (`PartShape`): klasa [Część: Kształt topologiczny](/Part_TopoShape/pl "Part TopoShape/pl") związana z tym obiektem.
* DANE**Umieszczenie** (`Placement`): pozycja obiektu w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Umieszczenie jest określone przez punkt `Base` *(wektor)* i `Rotation` *(oś i kąt)*. Zobacz stronę [Umiejscowienie](/Placement/pl "Placement/pl").
  + DANE**Kąt**: kąt obrotu wokół osi DANE**Oś**. Domyślnie jest to `0°` *(zero stopni)*.
  + DANE**Oś**: wektor jednostkowy określający oś obrotu dla położenia. Każda składowa jest wartością zmiennoprzecinkową pomiędzy `0` a `1`. Jeśli jakakolwiek wartość jest powyżej `1`, wektor jest normalizowany tak, aby jego wielkość wynosiła `1`. Domyślnie jest to dodatnia oś Z, `(0, 0, 1)`.
  + DANE**Pozycja**: wektor zawierający współrzędne 3D punktu bazowego. Domyślnie jest to początek `(0, 0, 0)`.
* DANE**Etykieta** (`String`): nazwa obiektu edytowalna przez użytkownika, jest to dowolny ciąg znaków w kodowaniu UTF8.
* DANE (Ukryte)**Etykieta2** (`String`): dłuższy, edytowalny przez użytkownika opis tego obiektu, jest to dowolny ciąg znaków UTF8, który może zawierać znaki nowej linii. Domyślnie jest to pusty łańcuch `""`.
* DANE (Ukryte)**Silnik wyrażeń** (`ExpressionEngine`): lista wyrażeń. Domyślnie jest ona pusta `[]`.
* DANE (Ukryte)**Widoczność** (`Bool`): określa, czy obiekt ma być wyświetlany, czy nie.

### Widok

Większość obiektów we FreeCAD ma coś, co nazywa się „[dostawca widoku](/Viewprovider/pl "Viewprovider/pl")”, jest to klasa definiująca wygląd obiektu w oknie [widoku 3D](/3D_view/pl "3D view/pl") oraz w [drzewie widoku](/Tree_view/pl "Tree view/pl"). Domyślny dostawca widoku obiektów elementu części definiuje właściwości prezentowane poniżej. Obiekty skryptowe, które pochodzą z elementu cecha części, również będą miały dostęp do tych właściwości.

Podstawowe

* WIDOK (Ukryte)**Pośrednik** (`PythonObject`): klasa własna [dostawca widoku](/Viewprovider/pl "Viewprovider/pl") związana z tym obiektem. Istnieje wyłącznie dla wersji środowiska [Python](/Python/pl "Python/pl"). Zobacz sekcję [tworzenie skryptów](#Tworzenie_skrypt.C3.B3w).

Opcje wyświetlania

* WIDOK**Ramka otaczająca** (`Bool`): jeśli wartość to `PRAWDA`, obiekt wyświetli ramkę ograniczającą w [widoku 3D](/3D_view/pl "3D view/pl").
* WIDOK**Tryb wyświetlania** (`Enumeration`): `Linie główne` *(regularna wizualizacja)*, `Zacieniony` *(bez krawędzi)*, `Model krawędziowy` *(bez ścian)*, `Punkty` *(tylko wierzchołki)*.
* WIDOK**Pokaż na drzewie** (`Bool`): wartość domyślna to `PRAWDA`, w którym to przypadku obiekt pojawi się w widoku [widoku drzewa](/Tree_view/pl "Tree view/pl"). W przeciwnym razie obiekt zostanie ukryty w widoku drzewa. Gdy obiekt w drzewie jest niewidoczny, można go ponownie wyświetlić, otwierając menu kontekstowe nad nazwą dokumentu *(prawy przycisk myszy)* i wybrać ![](/images/CheckBoxTrue.svg) Pokaż ukryte elementy. Następnie można wybrać ukryty element i wartość WIDOK**Pokaż na drzewie** przełączyć z powrotem na `PRAWDA`.
* WIDOK**Widoczność** (`Bool`): jeśli ma wartość `true`, obiekt pojawia się w [widoku 3D](/3D_view/pl "3D view/pl"). W przeciwnym razie jest niewidoczny. Standardowo właściwość ta może być przełączana przez naciśnięcie klawisza Spacja na klawiaturze.

Wygląd obiektu

* WIDOK**Odchylenie kątowe** (`Angle`): jest to towarzysz WIDOK**Odchylenia**. Jest to kolejny sposób na określenie, jak precyzyjnie wygenerować siatkę do renderowania na ekranie lub podczas eksportu. Domyślną wartością jest `28.5 stopni`, lub `0.5 radiana`. Jest to wartość maksymalna, im mniejsza wartość tym gładszy będzie wygląd w [widoku 3D](/3D_view/pl "3D view/pl"), i tym drobniejsza będzie siatka, która zostanie wyeksportowana.
* WIDOK**Odchylenie** (`FloatConstraint`): jest to towarzysz WIDOK**Odchylenia kątowego**. Jest to kolejny sposób na określenie, jak drobna ma być generowana siatka do renderowania na ekranie lub podczas eksportu. Domyślną wartością jest `0.5%`. Jest to wartość maksymalna, im mniejsza wartość tym gładszy będzie wygląd w [widoku 3D](/3D_view/pl "3D view/pl") i tym drobniejsza będzie siatka, która zostanie wyeksportowana.
* WIDOK (Ukryte)**Kolor rozproszenia** (`ColorList`): jest to lista krotek RGB definiujących kolory, podobna do WIDOK**Kolor kształtu**. Domyślnie jest to lista zawierająca jeden ciąg  `[(0,8, 0,8, 0,8)]`.
* WIDOK**Styl kreślenia** (`Enumeration`): `Ciągła` *(domyślnie)*, `Kreskowana`, `Kropkowana`, `Kreska kropka`; definiuje styl krawędzi w widoku oknie [widoku 3D](/3D_view/pl "3D view/pl").
* WIDOK**Oświetlenie** (`Enumeration`): `Dwustronne` *(domyślnie)*, `Jednostronne`, oświetlenie pada z dwóch stron lub z jednej strony w oknie [widoku 3D](/3D_view/pl "3D view/pl").
* WIDOK**Kolor linii** (`Color`): krotka trzech zmiennoprzecinkowych wartości RGB `(r,g,b)` do określenia koloru krawędzi w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Domyślnie jest to `(0.09, 0.09, 0.09)`, który jest wyświetlany jako `[25,25,25]` o podstawie 255,  almost black .
* WIDOK (Ukryte)**Macierz kolorów linii** (`ColorList`): jest to lista krotek RGB określających kolory, podobnie jak w przypadku WIDOK**Kolor linii**. Domyślnie jest to lista składająca się z jednej wartości `[(0.09, 0.09, 0.09)]`.
* WIDOK (Ukryte)**Materiał linii** (`Material`): [Materiał](/Material "Material") powiązany z krawędziami w tym obiekcie. Domyślnie wartość ta jest pusta.
* WIDOK**Szerokość linii** (`FloatConstraint`): wartość typu zmiennoprzecinkowego, która określa szerokość krawędzi w pikselach w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Domyślnie przyjmuje wartość `2.0`.

* WIDOK**Kolor wierzchołka** (`Color`): podobnie jak WIDOK**Kolor linii**, definiuje kolor wierzchołków.
* WIDOK (Ukryte)**Macierz kolorów wierzchołków** (`ColorList`): jest to lista krotek RGB określających kolory, podobna do WIDOK**Kolor wierzchołka**. Domyślnie jest to lista `[(0.09, 0.09, 0.09)]`.
* WIDOK (Ukryte)**Materiał wierzchołka** (`Material`): [Materiał](/Material "Material") powiązany z wierzchołkami w tym obiekcie. Domyślnie wartość jest pusta.
* WIDOK**Rozmiar wierzchołka** (`FloatConstraint`): podobnie jak WIDOK**Szerokość linii**, definiuje rozmiar wierzchołków.

* WIDOK**Kolor kształtu** (`Color`): podobnie jak WIDOK**Kolor linii**, określa kolor powierzchni. Domyślnie jest to `(0.8, 0.8, 0.8)`, co jest wyświetlane jako `[204, 204, 204]` na podstawie 255, a zatem jasny szary.
* WIDOK (Ukryte)**Materiał kształtu** (`Material`): [Materiał](/Material "Material") związany z tym obiektem. Domyślnie wartość jest pusta.
* WIDOK**Przejrzystość** (`Percent`): liczba całkowita z zakresu `0` do `100`. *(wartość procentowa)* określająca poziom przezroczystości ścian w [widoku 3D](/3D_view/pl "3D view/pl"). Wartość `100` oznacza całkowicie niewidoczne ściany Ściany są niewidoczne, ale nadal można je wybierać tak długo, jak wartość WIDOK**Do wyboru** wynosi `PRAWDA`.

Wybieranie

* WIDOK**Na wierzchu po zaznaczeniu** (`Enumeration`): kontroluje sposób, w jaki zaznaczenie pojawia się w oknie [widoku 3D](/3D_view/pl "3D view/pl"), jeśli obiekt ma [kształt](/Part_TopoShape/pl "Part TopoShape/pl") i jest wiele obiektów częściowo zakrytych przez inne. Domyślna wartość to `Wyłaczone`, co oznacza, że nie pojawi się żadne specjalne podświetlenie. Wartość `Włączone` oznacza, że obiekt pojawi się na wierzchu każdego innego obiektu, gdy zostanie wybrany, `Object` oznacza, że obiekt pojawi się na wierzchu tylko jeśli cały obiekt jest zaznaczony w [widoku drzewa](/Tree_view/pl "Tree view/pl"). Wartość `Element` oznacza, że obiekt pojawi się na wierzchu tylko jeśli element podrzędny *(wierzchołek, krawędź, ściana)* jest zaznaczony w [widoku 3D](/3D_view/pl "3D view/pl").
* WIDOK**Do wyboru** (`Bool`): jeśli parametr ma wartość `PRAWDA`, obiekt może być wybrany kursorem myszki w [widoku 3D](/3D_view/pl "3D view/pl"). W przeciwnym razie, obiekt nie może być wybrany dopóki ta opcja nie zostanie ustawiona na `PRAWDA`.
* WIDOK**Styl wyboru** (`Enumeration`): kontroluje sposób podświetlania obiektu. Jeśli wybrano `Kształt`, cały kształt *(wierzchołki, krawędzie i ściany)* będzie podświetlony w [widoku 3D](/3D_view/pl "3D view/pl"); jeśli jest to `Ramka otaczająca`, pole ograniczające pojawi się wokół obiektu i zostanie podświetlone.

### Ugięcie kątowe i odchylenie

![](/images/View_property_Deviation.svg)

Ugięcie kątowe i parametry odchylenia; d < odchylenie liniowe, α < ugięcie kątowe.

Odchylenie jest wartością w procentach, która jest związana z wymiarami w milimetrach ramki otaczającej obiekt. Odchylenie w milimetrach można obliczyć w następujący sposób:

```
deviation_in_mm = (w + h + d)/3 * deviation/100

```

gdzie `w`, `h`, `d` są wymiarami ramki otaczającej.

## Tworzenie skryptów

*Zobacz również:* [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"), oraz [Obiekty skryptowe](/Scripted_objects/pl "Scripted objects/pl").

Cecha części jest tworzona za pomocą metody dokumentu `addObject()`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::Feature", "Name")
obj.Label = "Custom label"

```

Dlatego też, dla klasy podrzędnej [Python](/Python/pl "Python/pl"), powinieneś stworzyć obiekt `Part::FeaturePython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("Part::FeaturePython", "Name")
obj.Label = "Custom label"

```

### Nazwa

Zobacz również: [Nazwa obiektu](/Object_name/pl "Object name/pl"), aby uzyskać więcej informacji na temat właściwości `Nazwy`.

Metoda `addObject` posiada dwa podstawowe argumenty typu string.

* Pierwszy argument wskazuje typ obiektu, w tym przypadku `"Part::FeaturePython"`.
* Drugi argument jest łańcuchem określającym atrybut `Name`. Jeśli nie zostanie podany, domyślnie przyjmuje taką samą nazwę jak klasa, czyli `"Part__FeaturePython"`. Nazwa `Name` może zawierać tylko proste znaki alfanumeryczne oraz podkreślnik, `[_0-9a-zA-Z]`. Jeśli podane zostaną inne symbole, zostaną one zamienione na znaki podkreślenia, na przykład `"A+B:C*"` jest zamieniane na `"A_B_C_"`.

### Etykieta

W razie potrzeby atrybut `Etykieta` może zostać zmieniony na bardziej wymowny tekst.

* `Etykieta` może przyjąć dowolny ciąg znaków UTF8, włączając w to akcenty i spacje. Ponieważ [widok drzewa](/Tree_view/pl "Tree view/pl") wyświetla `Etykietę`, dobrą praktyką jest zmiana atrybutu `Etykiety` na bardziej opisowy ciąg znaków.
* Domyślnie `Etykieta` jest unikalna, tak jak `Nazwa`. Jednak to zachowanie może być zmienione w [Edytorze Preferencji](/Preferences_Editor/pl "Preferences Editor/pl"), **Edycja → Preferencje → Ogólne → Dokument → Zezwalaj na duplikowanie etykiet obiektów w jednym dokumencie**. Oznacza to, że ogólnie `Etykieta` może być powtarzana w tym samym dokumencie, podczas testowania dla konkretnego elementu użytkownik powinien polegać na `Nazwie`, a nie na `Etykiecie`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Feature/pl&oldid=1560932>"