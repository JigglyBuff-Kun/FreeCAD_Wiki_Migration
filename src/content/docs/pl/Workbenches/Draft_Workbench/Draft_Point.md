---
title: Rysunek Roboczy Punkt
---
|  |
| --- |
| Rysunek Roboczy: Punkt |
| Lokalizacja w menu |
| Kreślenie → Punkt Kreślenie 2D → Punkt |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.7 |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie ![](/images/Draft_Point.svg) **Punkt** środowiska Rysunek Roboczy tworzy zwykły punkt. Punkty mogą być przydatne jako odniesienie do umieszczania linii, polilinii lub innych obiektów.

![](/images/Draft_point_example.jpg)

## Użycie

Zapoznaj się również z informacjami na stronie: [Tacka narzędziowa](/Draft_Tray/pl "Draft Tray/pl"), [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") oraz [Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_Point.svg) **Punkt**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Kreślenie → ![](/images/Draft_Point.svg) Punkt**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Kreślenie 2D → ![](/images/Draft_Point.svg) Punkt** z menu.
2. Otworzy się panel zadań **Punkt**. Więcej informacji znajduje się w sekcji [Opcje](#Opcje).
3. Wybierz punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.

## Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi *(w wersji 1.0)*.

* Aby ręcznie wprowadzić współrzędne, wprowadź element X, Y i Z i naciśnij Enter po każdym z nich. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy uzyskasz żądane wartości. Zaleca się przesunięcie kursora poza obszar okna [widoku 3D](/3D_view/pl "3D view/pl") przed wprowadzeniem współrzędnych.
* Naciśnij G lub kliknij pole wyboru **Globalnie**, aby włączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne odnoszą się do globalnego układu współrzędnych, w przeciwnym razie odnoszą się do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij N lub kliknij pole wyboru **Kontynuuj**, aby włączyć tryb kontynuacji. Jeśli tryb kontynuacji jest włączony, polecenie uruchomi się ponownie po zakończeniu, umożliwiając dalsze tworzenie punktów.
* Wciśnij S by włączyć lub wyłączyć [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl").
* Naciśnij Esc lub przycisk Zamknij, aby przerwać wykonywanie polecenia.

## Uwagi

* Użyj narzędzia ![](/images/Draft_Snap_Endpoint.svg) [Przyciągnij do punktu końcowego](/Draft_Snap_Endpoint/pl "Draft Snap Endpoint/pl"), aby przyciągać do punktów szkicu.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Punkt środowiska pracy Rysunek Roboczy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Rysunek Roboczy

* DANE**X** (`Distance`): określa współrzędną punktu X.
* DANE**Y** (`Distance`): określa współrzędną punktu Y.
* DANE**Z** (`Distance`): określa współrzędną punktu Z.

### Widok

Rysunek Roboczy

* WIDOK**Wzór** (`Enumeration`): niewykorzystane.
* WIDOK**Rozmiar wzoru** (`Float`): niewykorzystane.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć Punkt środowiska Rysunek Roboczy użyj metody `make_point` modułu Rysunek Roboczy *([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl"))*. Ta metoda zastępuje przestarzałą metodę `makePoint`.

```
point = make_point(X=0, Y=0, Z=0, color=None, name="Point", point_size=5)
point = make_point(point, Y=0, Z=0, color=None, name="Point", point_size=5)

```

* Tworzy obiekt `point` w podanych współrzędnych `X`, `Y` i `Z`, z jednostkami w milimetrach. Jeśli nie podano współrzędnych, punkt zostanie utworzony w punkcie odniesienia położenia (0,0,0).
  + Jeśli `X` jest `point` zdefiniowanym przez `FreeCAD.Vector`, jest on używany.
* `color` jest krotką `(R, G, B)`, która wskazuje kolor punktu w skali RGB; Każda wartość w krotce powinna mieścić się w zakresie od `0` do `1`.
* `name` jest nazwą obiektu.
* `point_size` to rozmiar obiektu w pikselach, jeśli załadowany jest graficzny interfejs użytkownika.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

point1 = Draft.make_point(1600, 1400, 0)

p2 = App.Vector(-3200, 1800, 0)
point2 = Draft.make_point(p2, color=(0.5, 0.3, 0.6), point_size=10)

doc.recompute()

```

Przykład:

Ten kod tworzy `N` losowych punktów w kwadracie o boku `2L`. Wykonuje pętlę tworzącą `N` punktów, które mogą pojawić się w dowolnym miejscu od `-L` do `+L` na X i Y. Wybiera również losowy kolor i rozmiar dla każdego punktu. Zmień wartość `N`, aby zmienić liczbę punktów, i zmień wartość `L`, aby zmienić obszar pokryty przez punkty.

```
import random
import FreeCAD as App
import Draft

doc = App.newDocument()

L = 1000
centered = App.Placement(App.Vector(-L, -L, 0), App.Rotation())
rectangle = Draft.make_rectangle(2*L, 2*L, placement=centered)

N = 10
for i in range(N):
    x = 2*L*random.random() - L
    y = 2*L*random.random() - L
    z = 0
    r = random.random()
    g = random.random()
    b = random.random()
    size = 15*random.random() + 5
    Draft.make_point(x, y, z, color=(r, g, b), point_size=size)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Point/pl&oldid=1513705>"