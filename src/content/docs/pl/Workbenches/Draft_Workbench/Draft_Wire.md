---
title: Rysunek Roboczy Polilinia
---
|  |
| --- |
| Rysunek Roboczy: Polilinia |
| Lokalizacja w menu |
| Kreślenie → Polilinia Kreślenie 2D → Polilinia |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| P L |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie ![](/images/Draft_Wire.svg) **Polilinia** [tworzy](#Utwórz) linię łamaną, czyli sekwencję kilku połączonych segmentów linii. Polecenie to może być również użyte do [łączenia](#Przyłącz) [linii](/Draft_Line/pl "Draft Line/pl") i polilinii.

Rogi prostokąta mogą być zaokrąglone lub sfazowane poprzez zmianę właściwości DANE**Promień zaokrąglenia** lub DANE**Rozmiar fazki**. Możliwe jest również dzielenie krawędzi polilinii poprzez zmianę jego właściwości DANE**Podziały**.

![](/images/Draft_Polyline_example.jpg)

Linia zdefiniowana przez wiele punktów

## Utwórz

## Użycie

Zapoznaj się również z informacjami na stronie: [Tacka narzędziowa](/Draft_Tray/pl "Draft Tray/pl"), [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") oraz [Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Draft_Wire.svg) **Polilinia**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz opcję z menu **Kreślenie → ![](/images/Draft_Wire.svg) Polilinia**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Kreślenie 2D → ![](/images/Draft_Wire.svg) Polilinia** z menu.
   * Użyj skrótu klawiaturowego: P, a następnie L.
2. Otworzy się panel zadań **Polilinia**. Zobacz [opcje](#Opcje) aby uzyskać więcej informacji.
3. Wybierz pierwszy punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl"), lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg). Wprowadź punkt.
4. Wybierz dodatkowe punkty w oknie [widoku 3D](/3D_view/pl "3D view/pl"), lub wpisz współrzędne i wciśnij przycisk ![](/images/Draft_AddPoint.svg). Wprowadź punkt.
5. Naciśnij przycisk Esc lub przycisk Zamknij, aby zakończyć działanie polecenia.

### Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi *(w wersji 1.0)*.

* Aby ręcznie wprowadzić współrzędne, wprowadź składowe X, Y i Z, i naciśnij klawisz Enter za każdym razem. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy ustawisz żądane wartości. Wskazane jest, aby przed wprowadzeniem współrzędnych przesunąć kursor myszki poza okno [widoku 3D](/3D_view/pl "3D view/pl").
* Naciśnij klawisz R lub kliknij pole wyboru **Względnie**, aby przełączyć tryb względny. Jeśli tryb względny jest włączony, współrzędne są odnoszone do ostatniego punktu, jeśli jest dostępny, w przeciwnym razie są odnoszone do początku układu współrzędnych.
* Naciśnij klawisz G lub kliknij pole wyboru **Globalnie**, aby przełączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne odnoszone są do globalnego układu współrzędnych, w przeciwnym razie są odnoszone do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij klawisz F lub kliknij pole wyboru **Wypełniony** 1.0 and below lub **Make face**[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"), aby przełączyć tryb tworzenia ściany. Jeśli tryb tworzenia ściany jest włączony, utworzona polilinia będzie miała właściwość DANE**Make Face** ustawioną na `Prawda` i będzie miała wypełnioną powierzchnię, pod warunkiem, że jest zamknięta i nie przecina się sama. Samoprzecinająca się polilinia ze ścianą nie będzie wyświetlana poprawnie, dla takiej konstrukcji wartość DANE**Make Face** musi być ustawiona na `Fałsz`.
* Naciśnij klawisz N lub kliknij w pole wyboru **Kontynuuj**, aby przełączyć tryb kontynuacji. Jeśli tryb kontynuacji jest włączony, polecenie uruchomi się ponownie po użyciu przycisku ![](/images/Draft_FinishLine.svg) Zakończ lub ![](/images/Draft_CloseLine.svg) Zamknij, lub po utworzeniu zamkniętej polilinii przez przyciągnięcie do pierwszego punktu polilinii, co pozwala na kontynuowanie tworzenia polilinii.
* Naciśnij klawisz / lub przycisk ![](/images/Draft_UndoLine.svg) Cofnij, aby cofnąć ostatni punkt.
* Naciśnij przycisk A lub przycisk ![](/images/Draft_FinishLine.svg) Zakończ, aby zakończyć polecenie i pozostawić polilinię otwartą.
* Naciśnij klawisz O lub przycisk ![](/images/Draft_CloseLine.svg) Zamknij, by zakończyć polecenie i zamknąć polilinię. Zamknięta polilinia może być także utworzona przez przyciągnięcie do pierwszego punktu polilinii.
* Wciśnij klawisz W lub przycisk ![](/images/Draft_Wipe.svg) Wyczyść, aby usunąć już umieszczone segmenty, ale kontynuować pracę od ostatniego punktu.
* Wciśnij klawisz U lub przycisk ![](/images/Draft_SelectPlane.svg) [Ustaw płaszczyznę roboczą](/Draft_SelectPlane/pl "Draft SelectPlane/pl") aby ustawić aktualną płaszczyznę roboczą w orientacji ostatniego odcinka.
* Naciśnij klawisz S, aby włączyć lub wyłączyć [przyciąganie](/Draft_Snap/pl "Draft Snap/pl").
* Naciśnij klawisz Esc lub przycisk Zamknij, aby zakończyć polecenie.

## Przyłącz

## Użycie

1. Punkty końcowe [linii](/Draft_Line/pl "Draft Line/pl") i / lub polilinii, które mają być połączone muszą się dokładnie pokrywać. Jeśli jest to wymagane, najpierw dopasuj punkty, aby to zapewnić.
2. Wybierz dwie lub więcej [linii](/Draft_Line/pl "Draft Line/pl") i / lub polilinii.
3. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Draft_Wire.svg) **Polilinia**.
   * Wybierz opcję w menu **Kreślenie → ![](/images/Draft_Wire.svg) Polilinia**.
   * Użyj skrótu klawiaturowego: P, a następnie L.

## Uwagi

* Polilinia środowiska Rysunek Roboczy może być edytowana za pomocą polecenia [Edytuj](/Draft_Edit/pl "Draft Edit/pl").
* Polilinia środowiska Rysunek Roboczy może być przekształcona w [Krzywą złożoną](/Draft_BSpline/pl "Draft BSpline/pl") za pomocą polecenia [Poililinia na krzywą złożoną](/Draft_WireToBSpline/pl "Draft WireToBSpline/pl").
* [Linie](/Draft_Line/pl "Draft Line/pl") i polilinia środowiska Rysunek Roboczy, mogą być również połączone za pomocą polecenia [Połącz](/Draft_Join/pl "Draft Join/pl") lub [Ulepsz kształt](/Draft_Upgrade/pl "Draft Upgrade/pl").

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt polilinia wywodzi się z obiektu [Część: Part2DObject](/Part_Part2DObject/pl "Part Part2DObject/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Rysunek Roboczy

* DANE**Obszar**: *(tylko do odczytu)* Określa powierzchnię polilinii. Wartość będzie wynosić `0.0` jeśli DANE**Utwórz powierzchnię** przyjmuje wartość `Fałsz` lub powierzchnia nie może zostać utworzona.
* DANE**Podstawowa**
* DANE**Wielkość fazki**: określa długość fazek na rogach polilinii.
* DANE**Zamknięta**: określa czy polilinia jest zamknięta czy nie. Jeśli polilinia jest początkowo otwarta, wartość ta wynosi `FAŁSZ`, ustawienie jej na `PRAWDA` spowoduje narysowanie segmentu linii zamykającego polilinię. Jeśli polilinia jest początkowo zamknięta, wartość ta wynosi `true`, a ustawienie jej na `FAŁSZ` spowoduje usunięcie ostatniego segmentu i otwarcie polilinii.
* DANE**Koniec**: określa punkt końcowy polilinii.
* DANE**Promień zaokrąglenia**: określa promień zaokrągleń na rogach polilinii.
* DANE**Długość**: *(tylko do odczytu)* określa całkowitą długość przewodu.
* DANE**Utwórz powierzchnię**: określa czy polilinia tworzy ścianę, czy też nie. Jeśli posiada wartość `PRAWDA`, to tworzona jest powierzchnia, w przeciwnym razie tylko krawędzie są uważane za część obiektu. Właściwość ta działa tylko wtedy, gdy parametr DANE**Zamknięty** ma wartość `PRAWDA` i gdy polilinia nie przecina się samoistnie.
* DANE**Punkty**: określa punkty polilinii w jej lokalnym układzie współrzędnych.
* DANE**Start**: określa punkt początkowy polilinii.
* DANE**Pododdziały**: określa liczbę podziałów dla każdej krawędzi polilinii. Jeśli jest to wartość `1` każda krawędź zostanie podzielona na równe segmenty o wartości `2`. Podziały są stosowane przed fazowaniem i zaokrąglaniem.
* DANE**Narzędzia**

### Widok

Rysunek Roboczy

* WIDOK**Rozmiar strzałki** (`Length`): określa wielkość symbolu wyświetlanego na końcu polilinii.
* WIDOK**Typ strzałki** (`Enumeration`): określa typ symbolu wyświetlanego na końcu przewodu, którym może być `Dot`, `Circle`, `Arrow`, `Tick` lub `Tick-2`.
* WIDOK**Zakończenie strzałki.** (`Bool`): określa, czy pokazywać symbol na końcu przewodu, aby można go było użyć jak linii adnotacji.
* WIDOK**Wzór** (`Enumeration`): określa rodzaj [wypełnienia](/Draft_Pattern/pl "Draft Pattern/pl"), którym ma być pokryta powierzchnia zamkniętej linii. Ta właściwość działa tylko wtedy, gdy właściwość DANE**Utwórz powierzchnię** ma wartość `PRAWDA` i gdy WIDOK**Display Mode** ma wartość `Flat Lines`.
* WIDOK**Rozmiar wzoru** (`Float`): określa rozmiar [wypełnienia](/Draft_Pattern/pl "Draft Pattern/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć polilinię użyj metody `make_wire` modułu Rysunek Roboczy ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")). Ta metoda zastępuje przestarzałą metodę `makeWire`.

```
wire = make_wire(pointslist, closed=False, placement=None, face=None, support=None)
wire = make_wire(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* Tworzy obiekt `Wire` z podaną listą punktów, `pointslist`.
  + Każdy punkt na liście jest zdefiniowany przez jego `FreeCAD.Vector`, z jednostkami w milimetrach.
  + Alternatywnie, dane wejściowe mogą być typu `Part.Wire`, z których wyodrębniane są punkty.
* Jeśli `closed` ma wartość `True`, lub jeśli pierwszy i ostatni punkt mają identyczne wartości, polilinia jest zamknięta.
* Jeśli `placement` ma wartość `None`, kształt jest tworzony w punkcie początkowym.
* Jeśli parametr `face` ma wartość `True`, a polilinia jest zamknięta, to polilinia będzie ścianą, czyli będzie wyglądała na wypełnioną.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

wire1 = Draft.make_wire([p1, p2, p3], closed=True)
wire2 = Draft.make_wire([p1, 2*p3, 1.3*p2], closed=True)
wire3 = Draft.make_wire([1.3*p3, p1, -1.7*p2], closed=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Wire/pl&oldid=1556357>"