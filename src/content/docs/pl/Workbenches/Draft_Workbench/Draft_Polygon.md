---
title: Rysunek Roboczy Wielokąt foremny
---
|  |
| --- |
| Rysunek Roboczy: Wielokąt foremny |
| Lokalizacja w menu |
| Kreślenie → Wielokąt foremny Kreślenie 2D → Wielokąt foremny |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| P G |
| Wprowadzono w wersji |
| 0.7 |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie ![](/images/Draft_Polygon.svg) **Wielokąt foremny** tworzy okrąg w bieżącej [płaszczyźnie roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl") na bazie punktu środkowego i promienia. Promień może być zdefiniowany przez wybranie punktu.

Szkic wielokąta może zostać przełączony z wpisanego na opisany poprzez zmianę jego właściwości DANE**Tryb kreślenia**. Narożniki szkicu wielokąta można zaokrąglić lub sfazować, zmieniając odpowiednio właściwości DANE**Promień zaokrąglenia** lub DANE**Promień sfazowania**.

![](/images/Draft_polygon_example.jpg)

Wielokąt foremny zdefiniowany przez dwa punkty, środek i promień.

## Użycie

Zapoznaj się również z informacjami na stronie: [Tacka narzędziowa](/Draft_Tray/pl "Draft Tray/pl"), [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") oraz [Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_Polygon.svg) **Wielokąt foremny**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz opcję z menu **Kreślenie → ![](/images/Draft_Polygon.svg) Wielokąt foremny**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Kreślenie 2D → ![](/images/Draft_Polygon.svg) Wielokąt foremny** z menu.
   * Użyj skrótu klawiaturowego: P, a następnie G.
2. Otworzy się panel zadań **Wielokąt**. Więcej informacji znajduje się w sekcji [Opcje](#Opcje).
3. Ustaw żądaną liczbę **Boków**.
4. Wybierz pierwszy punkt, środek wielokąta, w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
5. Wybierz drugi punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz **Promień**.

## Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi *(w wersji 1.0)*.

* Aby samodzielnie wprowadzić współrzędne środka, wprowadź komponent X, Y i Z i naciśnij Enter po każdym z nich. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy uzyskasz żądane wartości. Zaleca się przesunięcie wskaźnika poza obszar okna [widoku 3D](/3D_view/pl "3D view/pl") przed wprowadzeniem współrzędnych.
* Naciśnij G lub kliknij pole wyboru **Globalne**, aby włączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne są odnoszone do globalnego układu współrzędnych, w przeciwnym razie są odnoszone do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij F lub kliknij pole wyboru **Wypełniony**1.0 and below lub **Make face**[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"), aby przełączyć tryb tworzenia ściany. Jeśli tryb tworzenia ściany jest włączony, utworzony wielokąt będzie miał właściwość DANE**Make Face** ustawioną na wartość `PRAWDA` i będzie miał wypełnioną ścianę.
* Naciśnij N lub kliknij pole wyboru **Kontynuuj**, aby przełączyć tryb kontynuacji. Jeśli tryb kontynuacji jest włączony, polecenie uruchomi się ponownie po zakończeniu, umożliwiając dalsze tworzenie wielokątów.
* Naciśnij S, aby włączyć lub wyłączyć [przyciąganie](/Draft_Snap/pl "Draft Snap/pl").
* Naciśnij Esc lub przycisk Zamknij, aby przerwać wykonywanie polecenia.

## Uwagi

* Wielokąt foremny środowiska Rysunek Roboczy można edytować za pomocą polecenia [Edycja](/Draft_Edit/pl "Draft Edit/pl").

## Ustawienia

Zobacz także strony: [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") oraz [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl").

* Jeśli **Edycja → Preferencje ... → Rysunek Roboczy → Ustawienia ogólne → Opcje narzędzi do kreślenia → Użyj prymitywów części, gdy są dostępne**, polecenie utworzy [Wielokąt foremny](/Part_RegularPolygon/pl "Part RegularPolygon/pl") środowiska Część zamiast wielokąta środowiska Rysunek Roboczy.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Wielokąt foremny środowiska Rysunek Roboczy wywodzi się z obiektu [Część: Part2DObject](/Part_Part2DObject/pl "Part Part2DObject/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Rysunek Roboczy

* DANE**Obszar** (`Area`): *(tylko do odczytu)* określa obszar ściany wielokąta. Wartość będzie wynosić `0.0` jeśli włsściwość DANE**Utwórz ścianę** ma wartość `FAŁSZ`.
* DANE**Promień sfazowania** (`Length`): określa długość faz w narożnikach wielokąta.
* DANE**Tryb kreślenia** (`Enumeration`): określa, czy wielokąt jest `wpisany` w okrąg lub `opisany` okręgiem.
* DANE**Liczba ścian** (`Integer`): określa liczbę boków wielokąta.
* DANE**Promień zaokrąglenia** (`Length`): określa promień zaokrąglenia w rogach wielokąta.
* DANE**Utwórz ścianę** (`Bool`): określa, czy wielokąt tworzy ścianę, czy nie. Jeśli ma wartość `PRAWDA`, tworzona jest ściana, w przeciwnym razie tylko kontur jest uważany za część obiektu.
* DANE**Promień** (`Length`): określa promień okręgu definiującego wielokąt.

### Widok

Rysunek Roboczy

* WIDOK**Wzór** (`Enumeration`): określa [Wzór](/Draft_Pattern/pl "Draft Pattern/pl"), którym ma zostać wypełniona ściana wielokąta. Ta właściwość działa tylko jeśli właściwość DANE**Utwórz ścianę** ma wartość `true` i jeśli właściwość WIDOK**Tryb wyświetlania** ma wartość `Cieniowany z krawędziami`.
* WIDOK**Rozmiar wzoru** (`Float`): określa rozmiar [Wzoru](/Draft_Pattern/pl "Draft Pattern/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć **Wielokąt foremny** środowiska Rysunek Roboczy użyj metody `make_polygon` modułu Rysunek Roboczy ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")). Ta metoda zastępuje przestarzałą metodę `makePolygon`.

```
polygon = make_polygon(nfaces, radius=1, inscribed=True, placement=None, face=None, support=None)

```

* Tworzy obiekt `wielokąt` z podaną liczbą ścian (`nfaces`) i oparty na `promieniu` okręgu w milimetrach.
* Jeśli włściwość `wpisany` ma wartość `Prawda`, wielokąt zostanie wpisany w okrąg, w przeciwnym razie zostanie opisany.
* Jeśli włściwość `umiejscowienie` ma wartość `Brak`, wielokąt zostanie utworzony w punkcie początkowym, a jeden z jego wierzchołków będzie leżał na osi X.
* Jeśli włściwość `ściana` ma wartość `Prawda`, wielokąt utworzy ścianę, czyli będzie wyglądał na wypełniony.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(4, radius=500)
polygon2 = Draft.make_polygon(5, radius=750)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 90))

Polygon3 = Draft.make_polygon(6, radius=1450, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Polygon/pl&oldid=1556363>"