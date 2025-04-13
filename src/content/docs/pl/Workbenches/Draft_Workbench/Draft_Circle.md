---
title: Rysunek Roboczy Okrąg
---
|  |
| --- |
| Rysunek roboczy: Okrąg |
| Lokalizacja w menu |
| Kreślenie → Okrąg Kreślenie 2D → Okrąg |
| Środowisko pracy |
| [Rysunek roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| C I |
| Wprowadzono w wersji |
| 0.7 |
| Zobacz także |
| [Łuk](/Draft_Arc/pl "Draft Arc/pl"), [Łuk przez 3 punkty](/Draft_Arc_3Points/pl "Draft Arc 3Points/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Circle.svg) **Okrąg** tworzy okrąg w bieżącej [płaszczyźnie roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl") na bazie punktu środkowego i promienia. Promień może być zdefiniowany przez wybranie punktu.

Rysunek okręgu można przekształcić w łuk eliptyczny, ustawiając jego właściwości DANE**Kąt Pierwszy** i DANE**Kąt Ostatni** na odmienne wartości.

![](/images/Draft_Circle_example.jpg)

Okrąg wyznaczony przez dwa punkty, środek i promień

## Użycie

Zapoznaj się również z informacjami na stronie: [Tacka narzędziowa](/Draft_Tray/pl "Draft Tray/pl"), [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") oraz [Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Draft_Circle.svg) **Okrąg**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Kreślenie → ![](/images/Draft_Circle.svg) Okrąg**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Kreślenie 2D → ![](/images/Draft_Circle.svg) Okrąg** z menu.
   * Użyj skrótu klawiaturowego: C, a następnie I.
2. Otworzy się panel zadań **Okrąg**. Zobacz [Opcje](#Opcje), aby uzyskać więcej informacji.
3. Wybierz pierwszy punkt, środek okręgu, w oknie [widoku 3D](/3D_view/pl "3D view/pl"), lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
4. Wybierz drugi punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl"), lub wpisz wartość **Promienia**.

## Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi *(w wersji 1.0)*.

* Aby ręcznie wprowadzić współrzędne środka, wprowadź składowe X, Y i Z, a następnie naciśnij klawisz Enter po każdej z nich. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy masz już żądane wartości. Wskazane jest, aby przed wprowadzeniem współrzędnych wysunąć kursor poza obszar okna [widoku 3D](/3D_view/pl "3D view/pl").
* Naciśnij G lub kliknij pole wyboru **Globalnie**, aby przełączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne są odniesione do globalnego układu współrzędnych, w przeciwnym razie są one odniesione do układu współrzędnych [płaszczyzny robocza](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij klawisz F lub kliknij pole wyboru **Wypełniony**1.0 and below lub **Make face**[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"), aby przełączyć tryb tworzenia ściany. Jeśli tryb tworzenia ściany jest włączony, utworzony okrąg będzie miał właściwość DANE**Make Face** ustawioną na `PRAWDA` i będzie miał wypełnioną ścianę.
* Naciśnij klawisz N lub kliknij pole wyboru **Kontynuuj**, aby przełączyć tryb kontynuacji. Jeśli tryb kontynuacji jest włączony, polecenie zostanie uruchomione ponownie po zakończeniu, umożliwiając dalsze tworzenie okręgów.
* Naciśnij klawisz S, aby włączyć lub wyłączyć [przyciąganie](/Draft_Snap/pl "Draft Snap/pl").
* Naciśnij klawisz Esc lub przycisk Zamknij, aby przerwać działanie polecenia.

## Uwagi

* Szkic okręgu można edytować za pomocą polecenia [Edycja](/Draft_Edit/pl "Draft Edit/pl").

## Ustawienia

Zobacz także strony: [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") oraz [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl").

* Jeśli w oknie ustawień opcja **Edycja → Preferencje → Rysunek Roboczy → Ustawienia ogólne → Opcje narzędzi do kreślenia → Używaj elementów pierwotnych, gdy jest to możliwe** jest zaznaczona, polecenie utworzy [okrąg](/Part_Circle/pl "Part Circle/pl") środowiska Część, zamiast okręgu Rysunku Roboczego.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt okrąg wywodzi się z obiektu [Część: Part2DObject](/Part_Part2DObject/pl "Part Part2DObject/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Rysunek Roboczy

* DANE**Powierzchnia**: *(tylko do odczytu)* określa pole powierzchni koła. Wartość będzie równa `0.0`, jeśli właściwość DANE**Utwórz ścianę** ma wartość `false` lub powierzchnia nie może zostać utworzona.
* DANE**Kąt pierwszy**: określa kąt początkowy okręgu, zwykle `0°`.
* DANE**Kąt ostatni**: określa kąt końcowy okręgu, zwykle `0°`.
* DANE**Utwórz ścianę**: określa, czy okrąg tworzy ścianę, czy nie. Jeśli ma wartość `true`, tworzona jest ściana, w przeciwnym razie tylko obwód jest uważany za część obiektu. Właściwość ta działa tylko wtedy, gdy DANE**Kąt pierwszy** i DANE**Kąt ostatni** mają tę samą wartość. Zauważ, że `0°` i `360°` nie są uważane za takie same.
* DANE**Promień**: określa długość promienia okręgu.

### Widok

Rysunek Roboczy

* WIDOK**Wzór**: określa [wzór](/Draft_Pattern/pl "Draft Pattern/pl"), którym ma być wypełniona powierzchnia koła. Ta właściwość działa tylko wtedy, gdy DANE**Utwórz ścianę** ma wartość `true` i gdy WIDOK**Tryb wyświetlania** ma wartość `Linie płaskie`.
* WIDOK**Rozmiar wzoru**: określa rozmiar [wzoru](/Draft_Pattern/pl "Draft Pattern/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć okrąg użyj metody `make_circle` modułu Rysunek Roboczy ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")). Ta metoda zastępuje przestarzałą metodę `makeCircle`.

```
circle = make_circle(radius, placement=None, face=None, startangle=None, endangle=None, support=None)
circle = make_circle(Part.Edge, placement=None, face=None, startangle=None, endangle=None, support=None)

```

* Tworzy obiekt `Okrąg` o podanej wartości `Promienia` w milimetrach.
  + `Promień` może być również obiektem `Część.krawędź`, którego atrybut `Krzywa` musi być obiektem `Część.okrąg`.
* Jeśli `Umiejscowienie` ma wartość `Brak`, okrąg jest tworzony w punkcie początkowym.
* Jeśli `Ściana` ma wartość `Prawda`, okrąg zostanie utworzony jako powierzchnia, czyli będzie wyglądał na wypełniony.
* Jeśli `Kąt pierwszy` i `Kąt ostatni` są podane w stopniach i mają różne wartości, zostaną one użyte, a obiekt pojawi się jako [Łuk](/Draft_Arc/pl "Draft Arc/pl").

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

circle1 = Draft.make_circle(200)

zaxis = App.Vector(0, 0, 1)
p2 = App.Vector(1000, 1000, 0)
place2 = App.Placement(p2, App.Rotation(zaxis, 0))
circle2 = Draft.make_circle(500, placement=place2)

p3 = App.Vector(-1000, -1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 0))
circle3 = Draft.make_circle(750, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Circle/pl&oldid=1556368>"