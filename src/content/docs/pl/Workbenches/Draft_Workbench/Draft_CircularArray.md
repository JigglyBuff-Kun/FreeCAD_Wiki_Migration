---
title: Rysunek Roboczy Szyk kołowy
---
|  |
| --- |
| Rysunek Roboczy: kołowy |
| Lokalizacja w menu |
| Modyfikacja → Narzędzia szyku → Szyk kołowy |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Szyk ortogonalny](/Draft_OrthoArray/pl "Draft OrthoArray/pl"), [Szyk biegunowy](/Draft_PolarArray/pl "Draft PolarArray/pl"), [Szyk po ścieżce](/Draft_PathArray/pl "Draft PathArray/pl"), [Szyk powiązań po ścieżce](/Draft_PathLinkArray/pl "Draft PathLinkArray/pl"), [Szyk z punktów](/Draft_PointArray/pl "Draft PointArray/pl"), [Szyk powiązań w punktach](/Draft_PointLinkArray/pl "Draft PointLinkArray/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_CircularArray.svg) **Szyk kołowy** tworzy tablicę z wybranego obiektu poprzez umieszczenie kopii wzdłuż współśrodkowych okręgów. Polecenie może opcjonalnie utworzyć szyk [łączy](/App_Link "App Link"), który jest bardziej wydajny niż zwykły szyk.

Narzędzie Przesuń może być używane na obiektach 2D utworzonych za pomocą środowisk pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), ale może być również używane dla wielu typów obiektów 3D, takich jak te utworzone za pomocą środowisk pracy [Część](/Part_Workbench/pl "Part Workbench/pl"), [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") lub [BIM](/BIM_Workbench/pl "BIM Workbench/pl").

![](/images/Draft_CircularArray_example.png)

Szyk kołowy

## Użycie

Zapoznaj się również z informacjami na stronie [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl").

1. Opcjonalnie wybierz jeden obiekt.
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_CircularArray.svg) **Szyk kołowy**.
   * Wybierz opcję z manu **Modyfikacja → Narzędzia szyku → ![](/images/Draft_CircularArray.svg) Szyk kołowy**.
3. Otworzy się panel zadań **Szyk kołowy**. Więcej informacji znajduje się w sekcji [Opcje](#Opcje).
4. Jeśli nie wybrano jeszcze żadnego obiektu: wybierz jeden obiekt.
5. Wprowadź wymagane parametry w panelu zadań.
6. Aby zakończyć polecenie, wykonaj jedną z następujących czynności:
   * Wybierz punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") dla **Środek obrotu**.
   * Naciśnij Enter.
   * Naciśnij przycisk OK.

## Opcje

* Wprowadź **Odległość promieniowa**, aby określić odległość między okrągłymi warstwami oraz między środkiem a pierwszą okrągłą warstwą.
* Wprowadź **Odległość styczna**, aby określić odległość między elementami na tej samej warstwie kołowej. Musi być ona większa od zera.
* Wprowadź **Liczba warstw kołowych**. Element w środku liczy się jako jedna warstwa. Liczba ta musi wynosić co najmniej `2`. Maksymalna wartość, jaką można wprowadzić w panelu zadań to `99`, ale wyższe wartości są możliwe poprzez zmianę właściwości DANE**Liczba okręgów** szyku.
* Wprowadź wartość **Odbicie lustrzane**. Liczba ta określa sposób rozmieszczenia elementów. Wartość `3`, na przykład, skutkuje wzorem z trzema równymi segmentami kołowymi 120°. Większe wartości **Odbicia lustrzanego** i **Odległość styczna** skutkują mniejszą liczbą lub nawet brakiem elementów na wewnętrznych warstwach.
* Wybierz punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl"), zauważ, że zakończy to również polecenie, lub wpisz współrzędne dla **Środka obrotu**. Oś obrotu tablicy będzie przechodzić przez ten punkt. Zaleca się przesunięcie wskaźnika poza obszar okna [widoku 3D](/3D_view/pl "3D view/pl") przed wprowadzeniem współrzędnych.
* Naciśnij przycisk **Zresetuj współrzędne punktu**, aby zresetować **Środek obrotu** do punktu odniesienia położenia.
* Jeśli pole wyboru **Scal** jest zaznaczone, nakładające się elementy w tablicy są łączone.
* Jeśli pole wyboru **Szyk łączy** jest zaznaczone, tworzony jest szyk łączy zamiast zwykłego szyku. Szyk łączy jest bardziej wydajny, ponieważ jego elementami są obiekty [App: Łącze](/App_Link/pl "App Link/pl").
* Naciśnij Esc lub przycisk Cancel, aby przerwać wykonywanie polecenia.

## Uwagi

Zapoznaj się z informacjami zawartymi na stronie [Szyk ortogonalny](/Draft_OrthoArray/pl#Właściwości "Draft OrthoArray/pl").

* Domyślną osią obrotu dla szyku jest dodatnia oś Z. Można to zmienić edytując właściwość DANE**Oś**.

## Właściwości

Zapoznaj się z informacjami zawartymi na stronie [Szyk ortogonalny](/Draft_OrthoArray/pl#Właściwości "Draft OrthoArray/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć parametryczny szyk kołowy, należy użyć metody `make_array` *([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl"))* modułu Rysunek Roboczy. Metoda ta zastępuje przestarzałą metodę `makeArray`. Metoda `make_array` może tworzyć obiekty [Szyk ortogonalny](/Draft_OrthoArray/pl "Draft OrthoArray/pl"), [Szyk biegunowy](/Draft_PolarArray/pl "Draft PolarArray/pl") i Szyk kołowy środowiska Rysunek Roboczy. Dla każdego typu szyku dostępny jest jeden lub więcej elementów opakowujących.

Metoda podstawowa:

```
array = make_array(base_object, arg1, arg2, arg3, arg4=None, arg5=None, arg6=None, use_link=True)

```

Opakowaniem dla szyków kołowych jest:

```
array = make_circular_array(base_object,
                            r_distance=100, tan_distance=50,
                            number=3, symmetry=1,
                            axis=App.Vector(0, 0, 1), center=App.Vector(0, 0, 0),
                            use_link=True)

```

* `base_object` jest obiektem, który ma zostać użyty w szyku. Może to być również `Etykieta` (ciąg znaków) obiektu w bieżącym dokumencie.
* `r_distance` i `tan_distance` są odległościami radialnymi i stycznymi między elementami.
* `Liczba` to liczba okrągłych warstw we wzorze, oryginalny obiekt liczy się jako pierwsza warstwa.
* `symetria` to liczba całkowita używana w niektórych obliczeniach, które wpływają na sposób rozmieszczenia elementów na obwodzie. Zwykle przyjmuje się wartości od 1 do 6. Wyższe wartości nie są zalecane i spowodują zniknięcie elementów w wewnętrznych warstwach.
* `Oś` i `Środek` to wektory opisujące kierunek osi obrotu i punkt, przez który ta oś przechodzi.
* Jeśli `use_link` ma wartość `Prawda`, utworzone elementy są [App: Łącze](/App_Link/pl "App Link/pl") zamiast zwykłych kopii.
* `szyk` jest zwracany wraz z utworzonym obiektem szyku.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

tri = Draft.make_polygon(3, 600)

array = Draft.make_circular_array(tri, 1800, 1200, 4, 1)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_CircularArray/pl&oldid=1557909>"