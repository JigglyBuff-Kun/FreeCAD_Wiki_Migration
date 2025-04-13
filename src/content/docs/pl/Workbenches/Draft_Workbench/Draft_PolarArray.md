---
title: Rysunek Roboczy Szyk biegunowy
---
|  |
| --- |
| Rysunek Roboczy: Szyk biegunowy |
| Lokalizacja w menu |
| Modyfikacja → Narzędzia szyku → Szyk biegunowy Modyfikacja → Szyk biegunowy |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Szyk ortogonalny](/Draft_OrthoArray/pl "Draft OrthoArray/pl"), [Szyk kołowy](/Draft_CircularArray/pl "Draft CircularArray/pl"), [Szyk po ścieżce](/Draft_PathArray/pl "Draft PathArray/pl"), [Szyk powiązań po ścieżce](/Draft_PathLinkArray/pl "Draft PathLinkArray/pl"), [Szyk z punktów](/Draft_PointArray/pl "Draft PointArray/pl"), [Szyk powiązań w punktach](/Draft_PointLinkArray/pl "Draft PointLinkArray/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_PolarArray.svg) **Szyk biegunowy** tworzy szyk z wybranego obiektu poprzez umieszczenie kopii wzdłuż obwodu. Polecenie może opcjonalnie utworzyć szyk [łączy](/App_Link/pl "App Link/pl"), który jest bardziej wydajny niż zwykły szyk.

Narzędzie Przesuń może być używane na obiektach 2D utworzonych za pomocą środowisk pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), ale może być również używane dla wielu typów obiektów 3D, takich jak te utworzone za pomocą środowisk pracy [Część](/Part_Workbench/pl "Part Workbench/pl"), [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") lub [BIM](/BIM_Workbench/pl "BIM Workbench/pl").

![](/images/Draft_PolarArray_example.png)

Szyk biegunowy.

## Użycie

Zapoznaj się również z informacjami na stronie [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl").

1. Opcjonalnie wybierz jeden obiekt.
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_PolarArray.svg) **Szyk biegunowy**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Modyfikacja → Narzędzia szyku → ![](/images/Draft_PolarArray.svg) Szyk biegunowy**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Modyfikacja → ![](/images/Draft_PolarArray.svg) Szyk biegunowy** z menu.
3. Otworzy się panel zadań **Szyk biegunowy**. Więcej informacji znajduje się w sekcji [Opcje](#Opcje).
4. Jeśli nie wybrano jeszcze żadnego obiektu: wybierz jeden obiekt.
5. Wprowadź wymagane parametry w panelu zadań.
6. Aby zakończyć polecenie, wykonaj jedną z poniższych czynności:
   * Wybierz punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") dla **Środek obrotu**.
   * Naciśnij Enter.
   * Naciśnij przycisk OK.

## Opcje

* Wprowadź **Kąt zakresu szyku**, aby określić całkowity kąt szyku. Kąt jest dodatni w kierunku przeciwnym do ruchu wskazówek zegara.
* Wprowadź **Liczba elementów**. Musi ona wynosić co najmniej `2`. Maksymalna wartość, jaką można wprowadzić w panelu zadań to `99`, ale wyższe wartości są możliwe poprzez zmianę właściwości DANE**Ilość elementów polarnych** szyku.
* Wybierz punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl"), zauważ, że to również zakończy polecenie, lub wpisz współrzędne dla **Środka obrotu**. Oś obrotu tablicy będzie przechodzić przez ten punkt. Zaleca się przesunięcie wskaźnika poza obszar okna [widoku 3D](/3D_view/pl "3D view/pl") przed wprowadzeniem współrzędnych.
* Naciśnij przycisk **Zresetuj współrzędne punktu**, aby zresetować **Środek obrotu** do punktu początkowego.
* Jeśli pole wyboru **Scal** jest zaznaczone, nakładające się elementy w szyku są scalane.
* Jeśli pole wyboru **Szyk łączy** jest zaznaczone, tworzony jest szyk łączy zamiast zwykłego szyku. Szyk łączy jest bardziej wydajny, ponieważ jego elementami są obiekty [App Łącze](/App_Link/pl "App Link/pl").
* Naciśnij Esc lub przycisk Anuluj, aby przerwać polecenie.

## Uwagi

Zapoznaj się z informacjami zawartymi na stronie [Szyk ortogonalny](/Draft_OrthoArray/pl#Właściwości "Draft OrthoArray/pl").

* Domyślną osią obrotu dla szyku jest dodatnia oś Z. Można to zmienić edytując właściwość DANE**Oś**.

## Właściwości

Zapoznaj się z informacjami zawartymi na stronie [Szyk ortogonalny](/Draft_OrthoArray/pl#Właściwości "Draft OrthoArray/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

### Szyk parametryczny

Aby utworzyć parametryczny szyk biegunowy, należy użyć metody `make_array` *([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl"))* modułu Rysunek Roboczy. Metoda ta zastępuje przestarzałą metodę `makeArray`. Metoda `make_array` może tworzyć obiekty OrthoArrays środowiska Rysunek Roboczy, [Szyk ortogonalny](/Draft_OrthoArray/pl "Draft OrthoArray/pl") i [Szyk kołowy](/Draft_CircularArray/pl "Draft CircularArray/pl"). Dla każdego typu szyku dostępny jest jeden lub więcej elementów opakowujących.

Metoda podstawowa:

```
array = make_array(base_object, arg1, arg2, arg3, arg4=None, arg5=None, arg6=None, use_link=True)

```

Opakowaniem dla tablic biegunowych jest:

```
array = make_polar_array(base_object,
                         number=5, angle=360, center=App.Vector(0, 0, 0),
                         use_link=True)

```

* `obiekt_bazowy` jest obiektem, który ma zostać użyty w szyku. Może to być również `Etykieta` *(ciąg znaków)* obiektu w bieżącym dokumencie.
* `Ilość` jest liczbą elementów we wzorcu, włączając w to oryginalny obiekt.
* `Kąt` to kąt łuku biegunowego w stopniach.
* `Środek` jest wektorem definiującym środek wzorca.
* Jeśli `use_link` ma wartość `Prawda`, utworzone elementy są [App: Łącze](/App_Link/pl "App Link/pl") zamiast zwykłych kopii.
* `szyk` jest zwracany wraz z utworzonym obiektem szyku.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

tri = Draft.make_polygon(3, 600)
center = App.Vector(-1600, 0, 0)

array = Draft.make_polar_array(tri, 8, 270, center)
doc.recompute()

```

### Szyk nieparametryczny

Aby utworzyć nieparametryczny szyk biegunowy, należy użyć metody `array` modułu Rysunek Roboczy. Metoda ta zwraca `Brak`.

```
array(objectslist, center, angle, number)

```

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

tri = Draft.make_polygon(3, 600)
center = App.Vector(-1600, 0, 0)

Draft.array(tri, center, 270, 8)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PolarArray/pl&oldid=1557903>"