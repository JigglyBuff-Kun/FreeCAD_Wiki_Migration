---
title: Rysunek Roboczy Wymiar
---
|  |
| --- |
| Draft: Wymiar |
| Lokalizacja w menu |
| Adnotacja → Wymiar |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") |
| Domyślny skrót |
| D I |
| Wprowadzono w wersji |
| 0.8 |
| Zobacz także |
| [Obróć wymiar](/Draft_FlipDimension/pl "Draft FlipDimension/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Dimension.svg) **Draft Dimension** [tworzy](#Tworzenie) [Wymiar liniowy](#Zastosowanie_wymiaru_liniowego), [Wymiar promieniowy](#Zastosowanie_wymiaru_promieniowego) lub [Wymiar kątowy](#Zastosowanie_wymiaru_kątowego).

Wymiary liniowe oparte na krawędziach i wymiary promieniowe są parametryczne. Oznacza to, że będą one aktualizowane, jeśli zmierzona krawędź zostanie zmodyfikowana. Zmierzone krawędzie mogą należeć do obiektów środowiska Rysunek Roboczy, ale także do brył. Wymiary kątowe nie są parametryczne.

Wymiary środowiska pracy Rysunek Techniczny mogą być wyświetlane na stronie [Rysunku Technicznego](/TechDraw_Workbench/pl "TechDraw Workbench/pl") za pomocą poleceń [Wstaw widok rysunku](/TechDraw_DraftView/pl "TechDraw DraftView/pl") lub [Wstaw obiekt środowiska Architektura](/TechDraw_ArchView/pl "TechDraw ArchView/pl"). środowisko [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") oferuje swoje własne narzędzia wymiarowania. Tworzą one jednak wymiary, które są wyświetlane tylko na stronie rysunku, a nie w oknie [widoku 3D](/3D_view/pl "3D view/pl").

![](/images/Screenshot_Draft_Dimension.jpg)

Wymiar określony przez trzy punkty

## Użycie

Zapoznaj się również z informacjami na stronie: [Tacka narzędziowa](/Draft_Tray/pl "Draft Tray/pl"), [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") oraz [Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

### Wymiar liniowy

1. Opcjonalnie wybierz prostą krawędź w oknie [widoku 3D](/3D_view/pl "3D view/pl").
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_Dimension.svg) **Wymiar**.
   * Wybierz z menu opcję **Opisy → ![](/images/Draft_Dimension.svg) Wymiar**.
   * Użyj skrótu klawiaturowego: D, a następnie I.
3. Otworzy się panel zadań **Wymiar**. Więcej informacji znajduje się w sekcji [Opcje](#Opcje).
4. Jeśli krawędź nie została jeszcze wybrana, wykonaj jedną z poniższych czynności:
   * Naciśnij E lub przycisk ![](/images/View-select.svg) Wybierz krawędź i wybierz prostą krawędź w [3D view](/3D_view/pl "3D view/pl").
   * Przytrzymaj klawisz Alt, wybierz prostą krawędź w oknie [widoku 3Di](/3D_view/pl "3D view/pl") zwolnij klawisz Alt.
   * Zdefiniuj zmierzoną odległość, wybierając punkty:
     + Wybierz pierwszy punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
     + Wybierz drugi punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg). Wprowadź punkt.
5. Aby ustawić linię wymiarową, wykonaj jedną z poniższych czynności:
   * Dla wymiaru wyrównanego:
     + Wybierz punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
   * Dla wymiaru poziomego:
     + Przesuń wskaźnik powyżej lub poniżej krawędzi lub punktów.
     + Przytrzymaj klawisz Shift, przesuń wskaźnik i wybierz punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl").
   * Dla wymiaru pionowego:
     + Przesuń wskaźnik w lewo lub w prawo od krawędzi lub punktów.
     + Przytrzymaj klawisz Shift, przesuń wskaźnik i wybierz punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl").

### Wymiaru promieniowy

1. Opcjonalnie wybierz okrągłą krawędź w oknie [widoku 3D](/3D_view/pl "3D view/pl").
2. Wywołaj polecenie jak opisano wyżej.
3. Otworzy się panel zadań **Wymiar**. Więcej informacji znajduje się w sekcji [Opcje](#Opcje).
4. Jeśli krawędź nie została jeszcze wybrana, wykonaj jedną z poniższych czynności:
   * Naciśnij E lub przycisk ![](/images/View-select.svg) Wybierz krawędź i wybierz okrągłą krawędź w oknie [widoku 3D](/3D_view/pl "3D view/pl").
   * Przytrzymaj klawisz Alt, wybierz okrągłą krawędź w oknie [widoku 3D](/3D_view/pl "3D view/pl") i zwolnij klawisz Alt.
5. Aby ustawić linię wymiarową, wykonaj jedną z poniższych czynności:
   * Dla wymiaru średnicy:
     + Wybierz punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
   * Dla wymiaru radialnego:
     + Przytrzymaj klawisz Shift i wybierz punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl").

### Wymiaru kątowy

1. Wywołaj polecenie jak opisano wyżej.
2. Otworzy się panel zadań **Wymiar**. Więcej informacji znajduje się w sekcji [Opcje](#Opcje).
3. Wykonaj jedną z następujących czynności:
   * Naciśnij E lub przycisk ![](/images/View-select.svg) Wybierz krawędź i wybierz pierwszą prostą krawędź w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Powtórz tę czynność, aby wybrać drugą prostą krawędź.
   * Przytrzymaj klawisz Alt, wybierz dwie proste krawędzie w oknie [widoku 3D](/3D_view/pl "3D view/pl") i zwolnij klawisz Alt.
4. Aby ustawić łuk wymiarowy, wybierz punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl").
5. Wyświetlany kąt zależy od krawędzi i wybranego punktu.

### Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi *(w wersji 1.0)*.

* Aby ręcznie wprowadzić współrzędne, wprowadź element X, Y i Z i naciśnij Enter po każdym z nich. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy uzyskasz żądane wartości. Zaleca się przesunięcie wskaźnika poza obszar okna [widoku 3D](/3D_view/pl "3D view/pl") przed wprowadzeniem współrzędnych.
* Wciśnij R lub kliknij pole wyboru **Względnie**, aby przełączyć tryb względny. Jeśli tryb względny jest włączony, współrzędne są względne do ostatniego punktu, jeśli jest dostępny, w przeciwnym razie są one względne do początku układu współrzędnych.
* Naciśnij G lub kliknij pole wyboru **Globalne**, aby przełączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne odnoszą się do globalnego układu współrzędnych, w przeciwnym razie odnoszą się do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij N lub kliknij pole wyboru **Kontynuuj**, aby włączyć tryb kontynuacji. Tryb ten działa tylko dla wymiarów liniowych. Jeśli tryb kontynuacji jest włączony, polecenie uruchomi się ponownie po zakończeniu, umożliwiając dalsze tworzenie wymiarów. Wszystkie kolejne wymiary będą rozpoczynać się od ostatniego punktu poprzedniego wymiaru i będą używać tej samej linii bazowej co pierwszy wymiar. Należy pamiętać, że wybór krawędzi nie jest możliwy dla kolejnych wymiarów.
* Naciśnij S, aby włączyć lub wyłączyć [przyciąganie](/Draft_Snap/pl "Draft Snap/pl").
* Naciśnij Esc lub przycisk Zamknij, aby zakończyć polecenie.

## Uwagi

Liniowe i promieniowe wymiary środowiska Rysunek Roboczy można edytować za pomocą polecenia [Edytuj](/Draft_Edit/pl "Draft Edit/pl").

* Wymiary szkicu utworzone lub zapisane w [wersji FreeCAD 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") nie są kompatybilne wstecz.

## Ustawienia

* [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl"): Po utworzeniu, tekst wymiarów jest automatycznie orientowany względem bieżącej [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl") poprzez ich właściwość WIDOK**Flip Text**. Dostępny jest [parametr dostrajania](/Fine-tuning/pl#środowisko_pracy_Rysunek_Roboczy "Fine-tuning/pl") umożliwiający wyłączenie tego zachowania.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Wymiar środowiska pracy Rysunek Roboczy wywodzi się z obiektu [App: FeaturePython](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Poniższe właściwości są dodatkowe, chyba że zaznaczono inaczej.

### Dane w wymiarze liniowym i promieniowym

Wymiar

* DANE**Dimline** (`VectorDistance`): określa punkt, przez który przechodzi linia wymiaru.
* DANE**Połączona geometria** (`LinkSubList`): określa obiekt i jego elementy podrzędne, z którymi powiązany jest wymiar.
* DANE**Normalna** (`Vector`): określa normalną płaszczyzny tekstu.
* DANE (hidden)**Podparcie** (`Link`): określa mierzony obiekt.

Wymiar liniowy / promieniowy

* DANE**Kierunek** (`Vector`): określa kierunek pomiaru.
* DANE**Odległość** (`Length`): *(tylko do odczytu)* określa wartość pomiaru.
* DANE**Koniec** (`VectorDistance`): określa punkt końcowy pomiaru.
* DANE**Początek** (`VectorDistance`): określa punkt początkowy pomiaru.

Wymiar promieniowy

* DANE**Średnica** (`Bool`): określa, czy wymiar promieniowy jest wyświetlany jako wymiar średnicy. Nie jest używane w przypadku wymiarów liniowych.

### Dane wymiaru kątowego

Wymiar kątowy

* DANE**Kąt** (`Angle`): (tylko do odczytu) określa wartość pomiaru.
* DANE**Środek** (`VectorDistance`): określa środek pomiaru.
* DANE**Kąt pierwszy** (`Angle`): określa kąt początkowy pomiaru.
* DANE**Kąt drugi** (`Angle`): określa kąt końcowy pomiaru.

Wymiar

* DANE**Dimline** (`VectorDistance`): określa punkt, przez który przechodzi łuk wymiaru.
* DANE (hidden)**Połączona geometria** (`LinkSubList`): nieużywane.
* DANE (hidden)**Normalna** (`Vector`): określa normalną płaszczyzny wymiaru.
* DANE (hidden)**Podparcie** (`Link`): nieużywane.

### Widok

Adnotacja

* WIDOK**Styl adnotacji** (`Enumeration`): określa styl adnotacji zastosowany do wymiaru. Zobacz stronę [Edytor stylów adnotacji](/Draft_AnnotationStyleEditor/pl "Draft AnnotationStyleEditor/pl").
* WIDOK**Mnożnik skali** (`Float`): określa ogólny współczynnik skalowania zastosowany do tekstu.

Opcje wyświetlania

* WIDOK**Tryb wyświetlania** (`Enumeration`): określa sposób wyświetlania tekstu. Jeśli wartością jest `World`, tekst będzie wyświetlany na płaszczyźnie zdefiniowanej przez DANE**Normalną** pomiaru. Jeśli jest to `Ekran`, tekst będzie zawsze skierowany w stronę ekranu. To jest dziedziczona własność. Wspomniane opcje to opcje o zmienionych nazwach *([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))*.

Grafika

* WIDOK**Rozmiar strzałki** (`Length`): określa rozmiar symbolu wyświetlanego na końcu krzywej.
* WIDOK**Typ strzałki** (`Enumeration`): określa typ symbolu wyświetlanego na końcu krzywej, którym może być `Punkt`, `Okrąg`, `Strzałka`, `Grot` lub `Grot-2`.
* WIDOK**Przekroczenie wymiaru** (`Distance`): określa dodatkową długość dodaną do linii wymiarowej. Nie używane dla wymiarów kątowych.
* WIDOK**Przedłużenie linii** (`Distance`): określa długość linii przedłużających, które biegną od linii wymiarowej do mierzonych punktów. Użyj `0` dla pełnych linii przedłużających. Wartość ujemna określa odstęp między końcami linii przedłużających a punktami pomiarowymi. Wartość dodatnia określa maksymalną długość linii przedłużających. Używane tylko dla wymiarów liniowych.
* WIDOK**Przekroczenie przedłużenia** (`Distance`): określa dodatkową długość linii przedłużających poza linią wymiarową. Nieużywane w przypadku wymiarów kątowych.
* WIDOK**Odwróć strzałki** (`Bool`): określa, czy odwrócić orientację symboli na końcach linii wymiarowej lub łuku. Działa tylko wtedy, gdy symbole są strzałkami.
* WIDOK**Kolor linii** (`Color`): określa kolor linii wymiarowej lub łuku oraz strzałek.
* WIDOK**Szerokość linii** (`Float`): określa szerokość linii lub łuku należącego do wymiaru.
* WIDOK**Pokaż linię** (`Bool`): określa, czy wyświetlać linię wymiaru. Nie ma wpływu na wyświetlanie linii przedłużających i przekroczeń. Nieużywane w przypadku wymiarów kątowych.

Tekst

* WIDOK**Odwróć tekst** (`Bool`): określa, czy odwrócić orientację tekstu.
* WIDOK**Nazwa czcionki** (`Font`): określa czcionkę używaną do rysowania tekstu. Może to być nazwa czcionki, taka jak `Arial`, domyślny styl, taki jak `sans`, `serif` lub `mono`, rodzina, taka jak `Arial,Helvetica,sans`, lub nazwa ze stylem, takim jak `Arial:Bold`. Jeśli podana czcionka nie zostanie znaleziona w systemie, zamiast niej zostanie użyta czcionka domyślna.
* WIDOK**Rozmiar czcionki** (`Length`): określa rozmiar liter. Tekst może być niewidoczny w oknie[widoku 3D](/3D_view "3D view"), jeśli ta wartość jest bardzo mała.
* WIDOK**Nadpisz** (`String`): określa niestandardowy tekst do wyświetlenia zamiast rzeczywistego pomiaru. Użyj ciągu `$dim` wewnątrz tekstu, aby dołączyć pomiar.
* WIDOK**Kolor tekstu** (`Color`): określa kolor tekstu. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21").
* WIDOK**Pozycja tekstu** (`VectorDistance`): określa położenie tekstu we współrzędnych bezwzględnych. `[0, 0, 0]` wyświetli tekst w domyślnej pozycji w pobliżu linii wymiarowej lub łuku.
* WIDOK**Odstępy tekstu** (`Length`): określa odstęp między tekstem a linią wymiarową lub łukiem.

Jednostki

* WIDOK**Miejsca dziesiętne** (`Integer`): określa liczbę miejsc dziesiętnych wyświetlanych dla pomiaru.
* WIDOK**Pokaż jednostki** (`Bool`): określa, czy jednostka ma być wyświetlana obok wartości liczbowej pomiaru. Nie używane dla wymiarów kątowych.
* WIDOK**Nadpisanie jednostki** (`String`): określa jednostkę, w której ma być wyrażony pomiar, na przykład `km`, `m`, `cm`, `mm`, `mi`, `ft`, `in` lub `arch` dla jednostek łukowych. Pozostaw to pole puste, aby użyć jednostki domyślnej. Nie używane dla wymiarów kątowych.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć **Wymiar** środowiska Rysunek Roboczy użyj metody `make_dimension` modułu Rysunek Roboczy ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")). Ta metoda zastępuje przestarzałą metodę `makeDimension`.

```
dimension = make_dimension(p1, p2, p3=None, p4=None)

```

Istnieją różne sposoby wywołania tej metody, w zależności od przekazanych do niej argumentów:

```
dimension = make_dimension(p1, p2, p3=None)
dimension = make_dimension(object, i1, i2, p4=None)
dimension = make_dimension(object, i1, mode, p4=None)

```

* Tworzy `wymiar` liniowy, mierząc odległość między punktami `p1` i `p2`.
* Tworzy liniowy `wymiar` powiązany z `obiektem`, mierząc odległość między jego wierzchołkami indeksowanymi `i1` i `i2`.
* Tworzy `wymiar` kołowy powiązany z `obiektem`, z `i1` będącym indeksem zakrzywionej krawędzi do zmierzenia i `trybem` będącym `"promieniem"` lub `"średnicą"` określającym typ wymiaru.
  + `p3` w pierwszym wywołaniu i `p4` w pozostałych dwóch, określają opcjonalny punkt, przez który powinna przechodzić linia wymiarowa.
  + Wszystkie punkty są zdefiniowane przez ich `FreeCAD.Vector`.

Aby utworzyć wymiar kątowy, użyj następującej metody:

```
dimension = make_angular_dimension(center, angles, p3, normal=None)
dimension = make_angular_dimension(center, [angle1, angle2], p3, normal=None)

```

* Tworzy `wymiar` kąta z podanego punktu `środka`, listy `kątów` z dwoma elementami i punktu `p3`, przez który ma przechodzić łuk.
  + Jeśli `angle1 > angle2`, wyświetlany kąt jest różnicą `angle1 - angle2`; w przeciwnym razie wyświetlany jest kąt dopełniający, `360 - (angle2 - angle1)`.
  + Kąty powinny być podane w stopniach.

Właściwości widoku `wymiaru` można zmienić poprzez nadpisanie jego atrybutów. Na przykład, nadpisać `ViewObject.FontSize` nowym rozmiarem w milimetrach.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(-2500, 0, 0)
dimension1 = Draft.make_dimension(p1, p2, p3)
dimension1.ViewObject.FontSize = 200

polygon = Draft.make_polygon(3, radius=1000)
doc.recompute()

p4 = App.Vector(-2000, 1500, 0)
dimension2 = Draft.make_dimension(polygon, 1, 2, p4)
dimension2.ViewObject.FontSize = 200

center = App.Vector(2000, 0, 0)
p5 = App.Vector(3000, 1000, 0)
angle1 = 45
angle2 = 10
dimension3 = Draft.make_angular_dimension(center, [angle1, angle2], p5)
dimension3.ViewObject.FontSize = 200

dimension4 = Draft.make_angular_dimension(center, [angle2, angle1], p5*1.2)
dimension4.ViewObject.FontSize = 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Dimension/pl&oldid=1565134>"