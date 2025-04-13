---
title: Rysunek Roboczy Prostokąt
---
|  |
| --- |
| Rysunek Roboczy: Prostokąt |
| Lokalizacja w menu |
| Kreślenie → Prostokąt Kreślenie 2D → Prostokąt |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| R E |
| Wprowadzono w wersji |
| 0.7 |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie ![](/images/Draft_Rectangle.svg) **Prostokąt** tworzy prostokąt w bieżącej [płaszczyźnie roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl") przy uzyciu dwóch punktów.

Rogi prostokąta mogą być zaokrąglone lub sfazowane poprzez zmianę właściwości DANE**Promień zaokrąglenia** lub DANE**Rozmiar fazki**. Możliwe jest również podzielenie prostokąta przez zmianę jego właściwości DANE**Kolumny** i/lub DANE**Rzędy**.

![](/images/Draft_Rectangle_example.jpg)

Prostokąt zdefiniowany przez dwa punkty

## Użycie

Zapoznaj się również z informacjami na stronie: [Tacka narzędziowa](/Draft_Tray/pl "Draft Tray/pl"), [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") oraz [Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Draft_Rectangle.svg) Prostokąt.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Kreślenie → ![](/images/Draft_Rectangle.svg) Prostokąt**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Kreślenie 2D → ![](/images/Draft_Rectangle.svg) Prostokąt** z menu.
   * Użyj skrótu klawiaturowego: R, a następnie E.
2. Otworzy się panel zadań **Prostokąt**. Zobacz akapit [Opcje](#Opcje), aby uzyskać więcej informacji.
3. Wybierz pierwszy punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl"), lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
4. Wybierz drugi punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt. Ten punkt nie może być związany z osią X, Y lub Z.

## Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi *(w wersji 1.0)*.

* Aby ręcznie wprowadzić współrzędne, wprowadź składowe X, Y i Z, i naciśnij klawisz Enter po każdej z nich. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy masz już żądane wartości. Wskazane jest, aby przed wprowadzeniem współrzędnych wysunąć kursor myszki poza okno [widoku 3D](/3D_view/pl "3D view/pl").
* Naciśnij klawisz R lub kliknij pole wyboru **Względnie**, aby przełączyć tryb względny. Jeśli tryb względny jest włączony, współrzędne drugiego punktu są odniesione do pierwszego punktu, w przeciwnym razie są one odniesione do początku układu współrzędnych.
* Naciśnij klawisz G lub kliknij w pole wyboru **Globalnie**, aby przełączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne są odniesione do globalnego układu współrzędnych, w przeciwnym razie są one odniesione do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij klawisz F lub kliknij pole wyboru **Wypełnienie**1.0 and below lub **Make face**[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"), aby przełączyć tryb tworzenia ściany. Jeśli tryb tworzenia ściany jest włączony, utworzony prostokąt będzie miał właściwość DANE**Make Face** ustawioną na wartość `PRAWDA` i będzie miał wypełnioną ścianę.
* Naciśnij klawisz N lub kliknij pole wyboru **Kontynuuj**, aby przełączyć tryb kontynuacji. Jeśli tryb kontynuacji jest włączony, polecenie zostanie uruchomione ponownie po zakończeniu operacji, umożliwiając dalsze tworzenie prostokątów.
* Naciśnij klawisz S, aby włączyć lub wyłączyć [przyciąganie](/Draft_Snap/pl "Draft Snap/pl").
* Naciśnij klawisz Esc lub przycisk Zamknij, aby przerwać działanie polecenia.

## Uwagi

* Szkic prostokąta można edytować za pomocą polecenia [Edycja](/Draft_Edit/pl "Draft Edit/pl").

## Ustawienia

Zobacz także strony: [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") oraz [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl").

* Jeśli opcja **Edycja → Preferencje → Kreślenie → Ustawienia ogólne → Opcje narzędzi szkicu → Używaj elementów pierwotnych, gdy jest to możliwe** jest zaznaczona, polecenie utworzy [płaszczyznę części](/Part_Plane/pl "Part Plane/pl") zamiast szkicu prostokąta.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Prostokąt wywodzi się z obiektu [Część: Part2DObject](/Part_Part2DObject/pl "Part Part2DObject/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Rysunek Roboczy

* DANE**Powierzchnia**: *(tylko do odczytu)* określa powierzchnię prostokąta. Wartość ta będzie równa `0.0`, jeśli właściwość DANE**Utwórz ścianę** ma wartość `false`.
* DANE**Rozmiar fazki**: określa długość faz na rogach prostokąta.
* DANE**Kolumny**: określa liczbę kolumn o równej wielkości, na które podzielony jest prostokąt.
* DANE**Promień zaokrąglenia**: określa promień zaokrągleń na rogach prostokąta.
* DANE**Wysokość**: określa wysokość prostokąta.
* DANE**Długość**: określa długość prostokąta.
* DANE**Utwórz ścianę**: określa, czy prostokąt tworzy powierzchnię, czy nie. Jeśli wartość jest równa `true`, tworzona jest ściana, w przeciwnym razie tylko obwód jest uważany za część obiektu.
* DANE**Rzędy**: określa liczbę równej wielkości rzędów, na które podzielony jest prostokąt.

### Widok

Rysunek Roboczy

* WIDOK**Wzór**: określa [wzór](/Draft_Pattern/pl "Draft Pattern/pl"), którym ma być wypełniona powierzchnia prostokąta. Ta właściwość działa tylko wtedy, gdy właściwość DANE**Utwórz ścianę** ma wartość `true` i gdy właściwość WIDOK**Tryb wyświatlania** ma wartość `Płaskie linie`.
* WIDOK**Rozmiar wzoru**: określa rozmiar [wzoru](/Draft_Pattern/pl "Draft Pattern/pl").
* WIDOK**Obraz tekstury**: określa ścieżkę pliku obrazu, który ma zostać odwzorowany na powierzchni prostokąta. Wyczyszczenie tej właściwości spowoduje usunięcie obrazu. Prostokąt powinien mieć takie same proporcje jak obraz, aby uniknąć zniekształceń.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć prostokąt użyj metody `mmake_rectangle` modułu Rysunek Roboczy ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")). Ta metoda zastępuje przestarzałą metodę `makeRectangle`.

```
rectangle = make_rectangle(length, height, placement=None, face=None, support=None)

```

* Tworzy obiekt `Prostokąt` o `Długości` w kierunku X i `Wysokości` w kierunku Y, z jednostkami w milimetrach.
* Jeśli parametr `Umiejscownienie` ma wartość `Brak`, prostokąt zostanie utworzony w punkcie początkowym, a jego długość będzie równoległa do osi X.
* Jeśli parametr `Ściana` ma wartość `Prawda`, prostokąt zostanie utworzony jako powierzchnia, czyli będzie wyglądał na wypełniony.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle1 = Draft.make_rectangle(4000, 1000)
rectangle2 = Draft.make_rectangle(1000, 4000)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 45))

rectangle3 = Draft.make_rectangle(3500, 250, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Rectangle/pl&oldid=1556361>"