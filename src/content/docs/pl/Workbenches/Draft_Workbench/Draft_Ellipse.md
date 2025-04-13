---
title: Rysunek Roboczy Elipsa
---
|  |
| --- |
| Rysunek Roboczy: Elipsa |
| Lokalizacja w menu |
| Kreślenie → Elipsa Kreślenie 2D → Elipsa |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| E L |
| Wprowadzono w wersji |
| 0.7 |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie ![](/images/Draft_Ellipse.svg) **Elipsa** tworzy elipsę w bieżącej [płaszczyźnie roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl") z dwóch punktów definiujących prostokąt, w którym zmieści się elipsa.

Rysunek elipsy można przekształcić w łuk eliptyczny, ustawiając jego właściwości DANE**Kąt Pierwszy** i DANE**Kąt Ostatni** na odmienne wartości.

![](/images/Draft_ellipse_example.jpg)

Elipsa zdefiniowana przez narożniki prostokąta

## Użycie

Zapoznaj się również z informacjami na stronie: [Tacka narzędziowa](/Draft_Tray/pl "Draft Tray/pl"), [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") oraz [Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Draft_Ellipse.svg) Elipsa.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Kreślenie → ![](/images/Draft_Ellipse.svg) Elipsa**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Kreślenie 2D → ![](/images/Draft_Ellipse.svg) Elipsa** z menu.
   * Użyj skrótu klawiaturowego: E, a następnie L.
2. Otworzy się panel zadań **Elipsa**. Zobacz [Opcje](#Opcje), aby uzyskać więcej informacji.
3. Wybierz pierwszy punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl"), lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg). Wprowadź punkt.
4. Wybierz drugi punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt. Ten punkt nie może być związany z osią X, Y lub Z.

## Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi *(w wersji 1.0)*.

* Aby ręcznie wprowadzić współrzędne, wprowadź składowe X, Y i Z, i naciśnij Enter po każdej z nich. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy masz już żądane wartości. Wskazane jest, aby przed wprowadzeniem współrzędnych wysunąć kursor z okna [widoku 3D](/3D_view/pl "3D view/pl").
* Naciśnij klawisz R lub kliknij pole wyboru **Względnie**, aby przełączyć tryb względny. Jeśli tryb względny jest włączony, współrzędne drugiego punktu są odniesione do pierwszego punktu, w przeciwnym razie są one odniesione do początku układu współrzędnych.
* Naciśnij klawisz G lub kliknij pole wyboru **Globalnie**, aby przełączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne są zależne od globalnego układu współrzędnych, w przeciwnym razie są one odniesione do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij klawisz F lub kliknij pole wyboru **Wypełnienie**1.0 and below lub **Make face**[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"), aby przełączyć tryb tworzenia ściany. Jeśli tryb tworzenia ściany jest włączony, utworzona elipsa będzie miała właściwość DANE**Make Face** ustawioną na wartość `PRAWDA` i będzie miała wypełnioną ścianę.
* Naciśnij klawisz N lub kliknij pole wyboru **Kontynuuj**, aby przełączyć tryb kontynuacji. Jeśli tryb kontynuacji jest włączony, polecenie zostanie uruchomione ponownie po zakończeniu, umożliwiając dalsze tworzenie elips.
* Naciśnij klawisz S, aby włączyć lub wyłączyć [przyciąganie](/Draft_Snap/pl "Draft Snap/pl").
* Naciśnij przycisk Esc lub przycisk Zamknij, aby przerwać wykonywanie polecenia.

## Uwagi

* Elipsę szkicu można edytować za pomocą polecenia [Edycja](/Draft_Edit/pl "Draft Edit/pl").

## Ustawienia

Zobacz także strony: [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") oraz [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl").

* Jeśli opcja **Edycja → Preferencje → Rysunek Roboczy → Ustawienia ogólne → Opcje narzędzi do kreślenia → Używaj elementów pierwotnych, gdy jest to możliwe** jest zaznaczona, polecenie utworzy [Elipsę](/Part_Ellipse/pl "Part Ellipse/pl") środowiska Część, zamiast środowiska Rysunek Roboczy.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Elipsa wywodzi się z obiektu [Część: Part2DObject](/Part_Part2DObject/pl "Part Part2DObject/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Rysunek Roboczy

* DANE**Obszar**: (tylko do odczytu) określa pole powierzchni lica elipsy. Wartość będzie równa `0.0`, jeśli DANE**Utwórz ścianę** ma wartość `false` lub powierzchnia nie może zostać utworzona.
* DANE**Kąt pierwszy**: określa kąt pierwszego punktu elipsy, zwykle `0°`.
* DANE**Kąt ostatni**: określa kąt ostatniego punktu elipsy, zwykle `0°`.
* DANE**Promień główny**: określa promień główny elipsy.
* DANE**Utwórz ścianę**: określa, czy elipsa ma tworzyć ścianę, czy nie. Jeśli ma wartość `true` tworzona jest powierzchnia, w przeciwnym razie tylko obwód jest traktowany jako część obiektu. Ta właściwość działa tylko jeśli kształt jest pełną elipsą.
* DANE**Promień mniejszy**: określa promień mniejszy elipsy.

### Widok

Rysunek Roboczy

* WIDOK**Wzór**: określa [wzór](/Draft_Pattern/pl "Draft Pattern/pl"), którym ma być wypełniona powierzchnia elipsy. Ta właściwość działa tylko wtedy, gdy DANE**Utwórz ścianę** ma wartość `true` i gdy WIDOK**Tryb wyświetlania** ma wartość `Linie płaskie`.
* WIDOK**Rozmiar wzoru**: określa rozmiar [wzoru](/Draft_Pattern/pl "Draft Pattern/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć Elipsę użyj metody `make_ellipse` modułu Rysunek Roboczy ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")). Ta metoda zastępuje przestarzałą metodę `makeEllipse`.

```
ellipse = make_ellipse(majradius, minradius, placement=None, face=True, support=None)

```

* Tworzy obiekt `ellipse` o podanym promieniu głównym *(`majradius`)* i małym *(`minradius`)* w milimetrach.
  + Większa wartość zostanie użyta dla promienia głównego *(oś X)*, jeśli nie zostanie podane inne umiejscowienie.
* Jeśli `placement` ma wartość `None`, elipsa zostanie utworzona w punkcie początkowym.
* Jeśli `face` ma wartość `True`, elipsa zostanie utworzona jako powierzchnia, czyli będzie wyglądać na wypełnioną.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

ellipse1 = Draft.make_ellipse(3000, 200)
ellipse2 = Draft.make_ellipse(700, 1000)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 90))

ellipse3 = Draft.make_ellipse(700, 1000, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Ellipse/pl&oldid=1556365>"