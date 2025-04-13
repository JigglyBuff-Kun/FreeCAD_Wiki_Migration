---
title: Rysunek Roboczy Krzywa Béziera
---
|  |
| --- |
| Rysunek Roboczy: Krzywa Béziera |
| Lokalizacja w menu |
| Kreślenie → Narzędzia krzywych Béziera → Krzywa Béziera Kreślenie 2D → Krzywa Béziera |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| B Z |
| Wprowadzono w wersji |
| 0.14 |
| Zobacz także |
| [Sześcienna krzywa Béziera](/Draft_CubicBezCurve/pl "Draft CubicBezCurve/pl"), [Krzywa złożona](/Draft_BSpline/pl "Draft BSpline/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_BezCurve.svg) **Krzywa Béziera** tworzy krzywą [Béziera](http://en.wikipedia.org/wiki/Bezier_curve) na podstawie kilku punktów.

Polecenie tworzy pojedynczą krzywą Béziera o DANE**Stopniu** równym `number_of_points - 1`. Można ją przekształcić w fragmentaryczną krzywą Béziera, zmniejszając tę właściwość.

Polecenia Krzywa Béziera i [Sześcienna krzywa Béziera](/Draft_CubicBezCurve/pl "Draft CubicBezCurve/pl") używają *punktów kontrolnych* do zdefiniowania położenia i krzywizny odcinka krzywej. Z kolei polecenie [Krzywa złożona](/Draft_BSpline/pl "Draft BSpline/pl") określa *dokładne punkty*, przez które będzie przechodzić krzywa.

![](/images/Draft_BezCurve_Example.png)

Krzywa Beziera zdefiniowana przez wiele punktów

## Użycie

Zapoznaj się również z informacjami na stronie: [Tacka narzędziowa](/Draft_Tray/pl "Draft Tray/pl"), [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") oraz [Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Istnieje kilka sposobów wywołania polecenia:
   * Naciśnij przycisk ![](/images/Draft_BezCurve.svg) **Krzywa Beziera**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Kreślenie → Narzędzia krzywych Béziera → ![](/images/Draft_BezCurve.svg) Krzywa Béziera**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Kreślenie 2D → ![](/images/Draft_BezCurve.svg) Krzywa Béziera** z menu.
   * Użyj skrótu klawiaturowego: B, a następnie Z.
2. Zostanie otwarty panel zadań **Krzywa Béziera**. Więcej informacji można znaleźć w sekcji [Opcje](#Opcje).
3. Wybierz pierwszy punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
4. Wybierz dodatkowe punkty w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
5. Naciśnij Esc lub przycisk Zamknij, aby zakończyć polecenie.

## Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi *(w wersji 1.0)*.

* Aby ręcznie wprowadzić współrzędne, wprowadź składowe X, Y i Z, a następnie naciśnij klawisz Enter po każdej z nich. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy masz już żądane wartości. Wskazane jest, aby przed wprowadzeniem współrzędnych wysunąć kursor poza obszar okna [widoku 3D](/3D_view/pl "3D view/pl").
* Wciśnij R lub kliknij pole wyboru **Względnie**, aby przełączyć tryb względny. Jeśli tryb względny jest włączony, współrzędne są względne do ostatniego punktu, jeśli jest dostępny, w przeciwnym razie są one względne do początku układu współrzędnych.
* Naciśnij G lub kliknij pole wyboru **Globalnie**, aby przełączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne odnoszą się do globalnego układu współrzędnych, w przeciwnym razie odnoszą się do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij F lub kliknij pole wyboru **Wypełniony**1.0 and below lub **Make face**[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"), aby przełączyć tryb tworzenia ściany. Jeśli tryb tworzenia ściany jest włączony, utworzona krzywa będzie miała właściwość DANE**Make Face** ustawioną na `PRAWDA` i będzie miała wypełnioną ścianę, pod warunkiem, że jest zamknięta i nie przecina się samoczynnie. Samoprzecinająca się krzywa ze ścianą nie będzie wyświetlana poprawnie, dla takiej krzywej właściwość DANE**Make Face** musi być ustawiona na `FAŁSZ`.
* Naciśnij N lub kliknij pole wyboru **Kontynuuj**, aby włączyć tryb kontynuacji. Jeśli tryb kontynuacji jest włączony, polecenie uruchomi się ponownie po użyciu ![](/images/Draft_FinishLine.svg) Zakończ lub ![](/images/Draft_CloseLine.svg) Zamknij, lub po utworzeniu zamkniętej krzywej poprzez przyciągnięcie do pierwszego punktu krzywej, umożliwiając dalsze tworzenie krzywych.
* Naciśnij / lub przycisk ![](/images/Draft_UndoLine.svg) Cofnij, aby anulować ostatni punkt.
* Naciśnij A lub przycisk ![](/images/Draft_FinishLine.svg) Zakończ, aby zakończyć polecenie i pozostawić krzywą otwartą.
* Naciśnij O lub przycisk ![](/images/Draft_CloseLine.svg) Zamknij, aby zakończyć polecenie i zamknąć krzywą. Zamkniętą krzywą można również utworzyć, przyciągając ją do pierwszego punktu krzywej.
* Naciśnij W lub przycisk ![](/images/Draft_Wipe.svg) Wyczyść, aby usunąć już umieszczone segmenty, ale kontynuować pracę od ostatniego punktu.
* Naciśnij U lub przycisk ![](/images/Draft_SelectPlane.svg) [Ustaw płaszczyznę roboczą](/Draft_SelectPlane/pl "Draft SelectPlane/pl"), aby ustawić bieżącą płaszczyznę roboczą w orientacji określonej przez ostatni i poprzedni punkt.
* Naciśnij S, aby włączyć lub wyłączyć [Przyciąganie](/Draft_Snap "Draft Snap").
* Naciśnij Esc lub przycisk Zamknij, aby zakończyć polecenie.

## Uwagi

* Krzywa Beziera środowiska Rysunek Roboczy może być edytowana za pomocą polecenia [Edytuj](/Draft_Edit/pl "Draft Edit/pl").
* OpenCascade, a tym samym FreeCAD, nie obsługuje krzywych Béziera o stopniach większych niż 25. W praktyce nie powinno to stanowić problemu, ponieważ większość użytkowników zazwyczaj używa krzywych Béziera o stopniach od 3 do 5.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Krzywa Beziera środowiska Rysunek Roboczy wywodzi się z obiektu [Część: Part2DObject](/Part_Part2DObject/pl "Part Part2DObject/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Rysunek Roboczy

* DANE**Obszar** (`Area`): *(tylko do odczytu)* określa obszar powierzchni krzywej. Wartość będzie `0.0` jeśli właściwość DANE**Utwórz ścianę** ma wartość `FAŁSZ` lub ściana nie może zostać utworzona.
* DANE**Zamknięta** (`Bool`): określa czy krzywa jest zamknięta czy nie. Jeśli krzywa jest początkowo otwarta, wartość ta wynosi `FAŁSZ`, ustawienie jej na `PRAWDA` spowoduje narysowanie segmentu w celu zamknięcia krzywej. Jeśli krzywa jest początkowo zamknięta, wartość ta wynosi `PRAWDA`, ustawienie jej na `FAŁSZ` spowoduje usunięcie ostatniego segmentu i otwarcie krzywej.
* DANE**Ciągła** (`IntegerList`): *(tylko do odczytu)* określa ciągłość krzywej.
* DANE**Stopień** (`Integer`): określa stopień krzywej.
* DANE**Długość** (`Length`): *(tylko do odczytu)* określa całkowitą długość krzywej.
* DANE**Utwórz ścianę** (`Bool`): określa czy krzywa tworzy powierzchnię czy nie. Jeśli jest `PRAWDA`, tworzona jest ściana, w przeciwnym razie tylko obwód jest uważany za część obiektu. Ta właściwość działa tylko wtedy, gdy właściwość DANE**Zamknięta** ma wartość `PRAWDA` i jeśli krzywa nie przecina się samoczynnie.
* DANE**Punkty** (`VectorList`): określa punkty kontrolne krzywej w jej lokalnym układzie współrzędnych.

### Widok

Rysunek Roboczy

* WIDOK**Rozmiar strzałki** (`Length`): określa rozmiar symbolu wyświetlanego na końcu krzywej.
* WIDOK**Typ strzałki** (`Enumeration`): określa typ symbolu wyświetlanego na końcu krzywej, którym może być `Punkt`, `Okrąg`, `Strzałka`, `Grot` lub `Grot-2`.
* WIDOK**Zakończenie strzałki** (`Bool`): określa, czy na końcu krzywej ma być wyświetlany symbol, aby można go było użyć jako linii adnotacji.
* WIDOK**Wzór** (`Enumeration`): określa [Wzór](/Draft_Pattern/pl "Draft Pattern/pl"), którym ma być wypełniona powierzchnia zamkniętej krzywej. Ta właściwość działa tylko jeśli właściiwość DANE**Utwórz ścianę** ma wartość `PRAWDA` i jeśli właściwość WIDOK**Tryb wyświetlania** ma wartość `Cieniowany z krawędziami`.
* WIDOK**Rozmiar wzoru** (`Float`): określa rozmiar [Wzoru](/Draft_Pattern/pl "Draft Pattern/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć Krzywa Beziera środowiska Rysunek Roboczy użyj metody `make_bezcurve` modułu Rysunek Roboczy ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")). Ta metoda zastępuje przestarzałą metodę `makeBezCurve`.

```
bezcurve = make_bezcurve(pointslist, closed=False, placement=None, face=None, support=None, degree=None)
bezcurve = make_bezcurve(Part.Wire, closed=False, placement=None, face=None, support=None, degree=None)

```

* Tworzy obiekt `bezcurve` z podaną listą punktów, `pointslist`.
  + Każdy punkt na liście jest zdefiniowany przez jego `FreeCAD.Vector`, z jednostkami w milimetrach.
  + Alternatywnie, dane wejściowe mogą być typu `Part.Wire`, z których wyodrębniane są punkty.
* Jeśli `closed` ma wartość `Prawda`, lub jeśli pierwszy i ostatni punkt mają identyczne wartości, krzywa jest zamknięta.
* Jeśli `placement` ma wartość `Brak`, kształt jest tworzony w punkcie początkowym.
* Jeśli parametr `ściana` ma wartość `Prawda`, a krzywa jest zamknięta, to krzywa będzie ścianą, czyli będzie wyglądała na wypełnioną.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)
p4 = App.Vector(1500, -2000, 0)

bezcurve1 = Draft.make_bezcurve([p1, p2, p3, p4], closed=True)
bezcurve2 = Draft.make_bezcurve([p4, 1.3*p2, p1, 4.1*p3], closed=True)
bezcurve3 = Draft.make_bezcurve([1.7*p3, 1.5*p4, 2.1*p2, p1], closed=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BezCurve/pl&oldid=1556370>"