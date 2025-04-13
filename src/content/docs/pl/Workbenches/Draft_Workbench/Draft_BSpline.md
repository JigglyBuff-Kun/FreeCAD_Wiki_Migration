---
title: Rysunek Roboczy Krzywa złożona
---
|  |
| --- |
| Draft: Krzywa złożona |
| Lokalizacja w menu |
| Kreślenie → Krzywa złożona Kreślenie 2D → Krzywa złożona |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| B S |
| Wprowadzono w wersji |
| 0.7 |
| Zobacz także |
| [Polilinia](/Draft_Wire/pl "Draft Wire/pl"), [Sześcienna krzywa Béziera](/Draft_CubicBezCurve/pl "Draft CubicBezCurve/pl"), [Krzywa Béziera](/Draft_BezCurve/pl "Draft BezCurve/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_BSpline.svg) **Krzywa złożona** tworzy krzywą [B-spline](http://en.wikipedia.org/wiki/B-spline) na podstawie kilku punktów.

Polecenie Krzywa złożona określa punkty *exact points*, przez które będzie przechodzić krzywa. Polecenia [Krzywa złożona](/Draft_BezCurve/pl "Draft BezCurve/pl") i [Sześcienna krzywa Beziera](/Draft_CubicBezCurve/pl "Draft CubicBezCurve/pl") używają z kolei *punktów kontrolnych* do określenia położenia i krzywizny odcinka krzywej.

![](/images/Draft_bspline_example.jpg)

Odcinek krzywej zdefiniowany przez wiele punktów.

## Użycie

Zapoznaj się również z informacjami na stronie: [Tacka narzędziowa](/Draft_Tray/pl "Draft Tray/pl"), [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") oraz [Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_BSpline.svg) **Krzywa złożona**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz opcję **Kreślenie → ![](/images/Draft_BSpline.svg) Krzywa złożona** z menu.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Kreślenie 2D → ![](/images/Draft_BSpline.svg) Krzywa złożona** z menu.
   * Użyj skrótu klawiaturowego: B, a następnie S.
2. Otworzy się panel zadań **Krzywa złożona**. Więcej informacji znajduje się w sekcji [Opcje](#Opcje).
3. Wybierz pierwszy punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt
4. Wybierz dodatkowe punkty w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
5. Naciśnij Esc lub przycisk Zamknij, aby zakończyć polecenie.

## Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi *(w wersji 1.0)*.

* Aby ręcznie wprowadzić współrzędne, wprowadź element X, Y i Z i naciśnij Enter po każdym z nich. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy uzyskasz żądane wartości. Zaleca się przesunięcie wskaźnika poza obszar okna [widoku 3D](/3D_view/pl "3D view/pl") przed wprowadzeniem współrzędnych.
* Wciśnij R lub kliknij pole wyboru **Relatywnie**, aby przełączyć tryb względny. Jeśli tryb względny jest włączony, współrzędne są względne do ostatniego punktu, jeśli jest dostępny, w przeciwnym razie są one względne do początku układu współrzędnych.
* Naciśnij G lub kliknij pole wyboru **Globalne**, aby przełączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne są odniesione do globalnego układu współrzędnych, w przeciwnym razie odnoszą się do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij F lub kliknij pole wyboru **Wypełnij**1.0 and below lub **Make face**[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"), aby przełączyć tryb tworzenia ściany. Jeśli tryb tworzenia ściany jest włączony, utworzony splajn będzie miał właściwość DANE**Make Face** ustawioną na wartość `PRAWDA` i będzie miał wypełnioną ścianę, pod warunkiem, że jest zamknięty i nie następuje samoprzecinanie. Samoprzecinający się splajn ze ścianą nie będzie wyświetlany poprawnie, dla takiego splajnu właściwość DANE**Make Face** musi być ustawione na wartość `FAŁSZ`.
* Naciśnij N lub kliknij pole wyboru **Kontynuuj**, aby włączyć tryb kontynuacji. Jeśli tryb kontynuacji jest włączony, polecenie uruchomi się ponownie po użyciu przycisku ![](/images/Draft_FinishLine.svg) Zakończ lub ![](/images/Draft_CloseLine.svg) Zamknij, lub po utworzeniu zamkniętego splajnu poprzez przyciągnięcie do pierwszego punktu splajnu, umożliwiając dalsze tworzenie splajnów.
* Naciśnij / lub przycisk ![](/images/Draft_UndoLine.svg) Cofnij, aby cofnąć ostatni punkt.
* Naciśnij A lub przycisk ![](/images/Draft_FinishLine.svg) Zakończ, aby zakończyć polecenie i pozostawić otwartą krzywą.
* Naciśnij O lub przycisk ![](/images/Draft_CloseLine.svg) Zamknij, aby zakończyć polecenie i zamknąć linię krzywą. Zamkniętą krzywą można również utworzyć poprzez przyciągnięcie do pierwszego punktu splajnu.
* Naciśnij W lub przycisk ![](/images/Draft_Wipe.svg) Wyczyść, aby usunąć już umieszczone segmenty krzywej, ale kontynuować pracę od ostatniego punktu.
* Naciśnij U lub przycisk ![](/images/Draft_SelectPlane.svg) [ustaw płaszczyzne roboczą](/Draft_SelectPlane/pl "Draft SelectPlane/pl"), aby ustawić bieżącą płaszczyznę roboczą w orientacji określonej przez ostatni i poprzedni punkt.
* Naciśnij S, aby włączyć lub wyłączyć [przyciąganie](/Draft_Snap "Draft Snap").
* Naciśnij Esc lub przycisk Zamknij, aby zakończyć polecenie.

## Uwagi

* Krzywa złożona środowiska Rysunek Roboczy może być edytowana za pomocą polecenia [Edytuj](/Draft_Edit "Draft Edit").
* Krzywa złożona środowiska Rysunek Roboczy może zostać przekonwertowany na [polilinię](/Draft_Wire/pl "Draft Wire/pl") za pomocą narzędzia [Polilinia na krzywą złożoną](/Draft_WireToBSpline/pl "Draft WireToBSpline/pl").

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Krzywa złożona środowiska Rysunek Roboczy wywodzi się z obiektu [Część: Part2DObject](/Part_Part2DObject/pl "Part Part2DObject/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Rysunek Roboczy

* DANE**Obszar** (`Area`): *(tylko do odczytu)* określa obszar powierzchni krzywej. Wartość będzie wynosiła `0.0` jeśli właściwość DANE**Utwórz ścianę** ma wartość `FAŁSZ` lub ściana nie może zostać utworzona.
* DANE**Zamknięty** (`Bool`): określa czy krzywa jest zamknięta czy nie. Jeśli odcinek jest początkowo otwarty, wartość ta wynosi `FAŁSZ`, ustawienie jej na `PRAWDA` spowoduje narysowanie segmentu krzywej w celu zamknięcia krzywej. Jeśli krzywa jest początkowo zamknięta, ta wartość to `PRAWDA`, ustawienie jej na `FAŁSZ` spowoduje usunięcie ostatniego segmentu krzywej i otwarcie krzywej.
* DANE**Utwórz ścianę** (`Bool`): określa, czy krzywa tworzy ścianę, czy nie. Jeśli ma wartość `PRAWDA`, tworzona jest ściana, w przeciwnym razie tylko krawędź jest uważana za część obiektu. Ta właściwość działa tylko wtedy, gdy włąściwość DANE**Zamknięty** ma wartość `PRAWDA` i jeśli krzywa nie przecina się sama.
* DANE**Parametryzacja** (`Float`): wpływa na kształt krzywej.
* DANE**Punkty** (`VectorList`): określa punkty krzywej w jego lokalnym układzie współrzędnych.

### Widok

Rysunek Roboczy

* WIDOK**Rozmiar strzałki** (`Length`): określa rozmiar symbolu wyświetlanego na końcu krzywej.
* WIDOK**Typ strzałki** (`Enumeration`): określa typ symbolu wyświetlanego na końcu krzywej, którym może być `Punkt`, `Okrąg`, `Strzałka`, `Grot` lub `Grot-2`.
* WIDOK**Zakończenie strzałki** (`Bool`): określa, czy na końcu krzywej ma być wyświetlany symbol, aby można go było użyć jako linii adnotacji.
* WIDOK**Wzór** (`Enumeration`): określa [Wzór](/Draft_Pattern/pl "Draft Pattern/pl"), którym ma być wypełniona powierzchnia zamkniętej krzywej. Ta właściwość działa tylko jeśli właściiwość DANE**Utwórz ścianę** ma wartość `PRAWDA` i jeśli właściwość WIDOK**Tryb wyświetlania** ma wartość `Cieniowany z krawędziami`.
* WIDOK**Rozmiar wzoru** (`Float`): określa rozmiar [Wzoru](/Draft_Pattern/pl "Draft Pattern/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć linię Krzywa złożona użyj metody `make_line` modułu Rysunek Roboczy ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")). Ta metoda zastępuje przestarzałą metodę `makeLine`.

```
bspline = make_bspline(pointslist, closed=False, placement=None, face=None, support=None)
bspline = make_bspline(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* Tworzy obiekt `Krzywej złóżonej` z podaną listą punktów, `pointslist`.
  + Każdy punkt na liście jest zdefiniowany przez jego `FreeCAD.Vector`, z jednostkami w milimetrach.
  + Alternatywnie, dane wejściowe mogą być typu `Part.Wire`, z których wyodrębniane są punkty.
* Jeśli właściwość `Zamknięty` ma wartość `Prawda`, lub jeśli pierwszy i ostatni punkt mają identyczne wartości, krzywa jest zamknięta.
* Jeśli `umiejscowienie` ma wartość `Brak`, kształt jest tworzony w punkcie początkowym.
* Jeśli właściwość `ściana` ma wartość `Prawda`, a krzywą jest zamknięta, to krzywa będzie ścianą, czyli będzie wyglądała na wypełnioną.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

spline1 = Draft.make_bspline([p1, p2, p3], closed=False)
spline2 = Draft.make_bspline([p1, 2*p3, 1.3*p2], closed=False)
spline3 = Draft.make_bspline([1.3*p3, p1, -1.7*p2], closed=False)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BSpline/pl&oldid=1556372>"