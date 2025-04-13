---
title: Rysunek Roboczy Szyk z punktów
---
|  |
| --- |
| Rysunek Roboczy: Szyk z punktów |
| Lokalizacja w menu |
| Modyfikacja → Narzędzia szyku → Szyk z punktów Modyfikacja → Szyk z punktów |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.18 |
| Zobacz także |
| [Szyk ortogonalny](/Draft_OrthoArray/pl "Draft OrthoArray/pl"), [Szyk biegunowy](/Draft_PolarArray/pl "Draft PolarArray/pl"), [Szyk kołowy](/Draft_CircularArray/pl "Draft CircularArray/pl"), [Szyk po ścieżce](/Draft_PathArray/pl "Draft PathArray/pl"), Szyk z punktów, [Szyk powiązań w punktach](/Draft_PointLinkArray/pl "Draft PointLinkArray/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_PointArray.svg) **Szyk z punktów** tworzy regularną tablicę z wybranego obiektu bazowego poprzez umieszczenie kopii w punktach obiektu punktowego. Użyj polecenia [Szyk powiązań w punktach](/Draft_PointLinkArray/pl "Draft PointLinkArray/pl"), aby utworzyć bardziej wydajną tablicę [Łączy](/App_Link/pl "App Link/pl"). Z wyjątkiem typu tworzonego szyku, szyku łączy lub zwykłego szyku, polecenie [Szyk powiązań w punktach](/Draft_PointLinkArray/pl "Draft PointLinkArray/pl") działa identycznie jak to polecenie.

Narzędzie Szyk z punktów może być używane na obiektach 2D utworzonych za pomocą środowisk pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), ale może być również używane dla wielu typów obiektów 3D, takich jak te utworzone za pomocą środowisk pracy [Część](/Part_Workbench/pl "Part Workbench/pl"), [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") lub [BIM](/BIM_Workbench/pl "BIM Workbench/pl").

Obiektem punktowym może być dowolny obiekt z kształtem i wierzchołkami *(w tym [Std: Część](/Std_Part/pl "Std Part/pl") zawierający jeden lub więcej takich obiektów)*, a także [siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") i [chmura punktów](/Points_Workbench/pl "Points Workbench/pl"). Zduplikowane punkty w obiekcie punktowym są odfiltrowywane.

![](/images/Draft_PointArray_Example.png)

Szyk z punktów.

## Użycie

1. Wybierz obiekt, który chcesz wyświetlić.
2. Dodaj obiekt punktów do zaznaczenia.
3. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_PointArray.svg) **Szyk z punktów**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz opcję z menu **Modyfikacja → Narzędzia szyku → ![](/images/Draft_PointArray.svg) Szyk z punktów**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Modyfikacja → ![](/images/Draft_PointArray.svg) Szyk z punktów** z menu.
4. Tablica zostanie utworzona.
5. Opcjonalnie można zmienić [właściwości](#właściwości) tablicy w [edytorze właściwości](/Property_editor/pl "Property editor/pl").

## Uwagi

* Scalone szyki łączy nie są wyświetlane poprawnie, w widoku 3D ich elementy zawsze wyglądają na niescalone.

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Szyk z punktów, środowiska Rysunek Roboczy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości *(z wyjątkiem niektórych właściwości Widoku, które nie są dziedziczone przez szyki Łączy)*. Poniższe właściwości są dodatkowe, chyba że zaznaczono inaczej:

### Dane

Łącze

Właściwości w tej grupie są dostępne tylko dla szyków łączy. Więcej informacji można znaleźć na stronie [Std: Utwórz łącze](/Std_LinkMake/pl#Właściwości "Std LinkMake/pl").

* DANE**Skala** (`Float`)
* DANE (Ukryte)**Wektor skali** (`Vector`).
* DANE**Lista skali** (`VectorList`)
* DANE (Ukryte)**Lista widoczności** (`BoolList`)
* DANE (Ukryte)**Lista umiejscowienia** (`PlacementList`)
* DANE (Ukryte)**Lista elementów** (`LinkList`)
* DANE (Ukryte)**\_ Link Touched** (`Bool`)
* DANE (Ukryte)**\_ Child Cache** (`LinkList`)
* DANE (Hidden)**\_ Link Owner** (`Integer`)
* DANE (Ukryte)**Elementy kolorowe** (`LinkSubHidden`)
* DANE**Link Copy On Change** (`Enumeration`)
* DANE**Przekształcenie łącza** (`Bool`)

Draft

* DANE**Always Sync Placement** (`Bool`)

Obiekty

* DANE**Baza** (`Link`): określa obiekt do powielenia w szyku.
* DANE**Ilość** (`Integer`): *(tylko do odczytu)* określa liczbę elementów w szyku. Liczba ta jest określana przez liczbę punktów we właściwości DANE**Obiekt punktowy**.
* DANE**Rozszerz szyk** (`Bool`): określa, czy tablica ma zostać rozszerzona w [Widok drzewa](/Tree_view/pl "Tree view/pl"), aby umożliwić wybór jej poszczególnych elementów. Dostępne tylko dla szyków łączy.
* DANE**Dodatkowe umiejscowienie** (`Placement`): : określa dodatkowe [Umiejscowienie](/Placement/pl "Placement/pl"), przesunięcie i obrót dla każdego elementu w szyku.
* DANE**Połącz** (`Bool`): określa, czy nakładające się elementy w tablicy są łączone, czy nie. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl").
* DANE**Placement List** (`PlacementList`): umiejscowienie dla każdego elementu. Pojawia się w grupie Link dla szyków łączy. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
* DANE**Obiekt punktowy** (`Link`): określa obiekt, którego punkty są używane do pozycjonowania elementów w tablicy.

### Widok

Łącze

Właściwości w tej grupie, z wyjątkiem właściwości dziedziczonej, są dostępne tylko dla szyków łączy. Więcej informacji można znaleźć na stronie [Std: Utwórz łącze](/Std_LinkMake/pl#Właściwości "Std LinkMake/pl").

* WIDOK**Styl kreślenia** (`Enumeration`)
* WIDOK**Szerokość linii** (`FloatConstraint`)
* WIDOK**Nadpisanie materiału** (`Bool`)
* WIDOK**Rozmiar punktu** (`FloatConstraint`)
* WIDOK**Wybieralny** (`Bool`): jest to właściwość dziedziczona, która pojawia się w grupie "Wybór" dla innych szyków.
* WIDOK**Kształt materiału** (`Material`).

Podstawa

Właściwości w tej grupie, z wyjątkiem właściwości dziedziczonej, są dostępne tylko dla szyków łączy. Więcej informacji można znaleźć na stronie [Std: Utwórz łącze](/Std_LinkMake/pl#Właściwości "Std LinkMake/pl").

* WIDOK (Ukryte)**Dostawca widoku elementu podrzędnego** (`PersistentObject`).
* WIDOK (Ukryte)**Lista materiałów** (`MaterialList`)
* WIDOK (Ukryte)**Zastąp listę kolorów** (`ColorList`)
* WIDOK (Ukryte)**Zastąp listę materiałów** (`BoolList`)
* WIDOK (Ukryte)**Proxy** (`PythonObject`): jest to właściwość dziedziczona.

Opcje wyświetlania

Właściwości w tej grupie są dziedziczone. Więcej informacji można znaleźć na stronie [Część: Cecha](/Part_Feature/pl#Własności "Part Feature/pl").

* WIDOK**Ramka otaczająca** (`Bool`): ta właściwość nie jest dziedziczona przez szyk łączy.
* WIDOK**Tryb wyświetlania** (`Enumeration`): dla szyku Łączy może to być `Link` lub `ChildView`. Dla innych szyków może to być: `Cieniowany z krawędziami`, `Cieniowany`, `Szkieletowy` lub `Punkty`.
* WIDOK**Pokaż w drzewie** (`Bool`)
* WIDOK**Widoczność** (`Bool`)

Rysunek Roboczy

* WIDOK**Wzór** (`Enumeration`): niewykorzystane.
* WIDOK**Rozmiar wzoru** (`Float`): niewykorzystane.

Styl obiektu

Właściwości w tej grupie nie są dziedziczone przez szyk łączy.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć Szyk z punktów, należy użyć metody `make_point_array` ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")) modułu Rysunek Roboczy. Metoda ta zastępuje przestarzałą metodę `makePointArray`.

```
point_array = make_point_array(base_object, point_object, extra=None, use_link=True)

```

* `base_object` jest obiektem, który ma być użyty w szyku. Może to być również `Etykieta` *(ciąg znaków)* obiektu w bieżącym dokumencie.
* `point_object` jest obiektem zawierającym punkty. Może to być również `Etykieta` *(ciąg znaków)* obiektu w bieżącym dokumencie. Powinien mieć właściwość `Geomrtria`, `Łącze` lub `Komponenty` zawierające punkty.
* `extra` to `App.Placement`, `App.Vector` lub `App.Rotation`, które przesuwają każdy element.
* Jeśli właściwość `use_link` ma wartość `Prawda`, utworzone elementy są obiektami [App: Łącze](/App_Link/pl "App Link/pl") zamiast zwykłymi kopiami.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon = Draft.make_polygon(3, radius=500.0)

p1 = Draft.make_point(App.Vector(1500, 0, 0))
p2 = Draft.make_point(App.Vector(2500, 0, 0))
p3 = Draft.make_point(App.Vector(2000, 1000, 0))

compound = doc.addObject("Part::Compound", "Compound")
compound.Links = [p1, p2, p3]

point_array = Draft.make_point_array(polygon, compound)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PointArray/pl&oldid=1557896>"