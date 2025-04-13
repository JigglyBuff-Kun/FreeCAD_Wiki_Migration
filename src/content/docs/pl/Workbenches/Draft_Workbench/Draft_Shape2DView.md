---
title: Rysunek Roboczy Widok 2D kształtu
---
|  |
| --- |
| Rysunek Roboczy: Widok 2D kształtu |
| Lokalizacja w menu |
| Modyfikacja → Widok 2D kształtu |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Rysunek Techniczny: Rzut kształtu](/TechDraw_ProjectShape/pl "TechDraw ProjectShape/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Shape2DView.svg) **Widok 2D kształtu** tworzy rzuty 2D z wybranych obiektów, zwykle brył przestrzennych lub [Płaszczyzny przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") środowiska Architektura. Rzuty są umieszczane w oknie [widoku 3D](/3D_view/pl "3D view/pl").

Rzuty **Widok 2D kształtu** mogą być wyświetlane w środowisku [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") używając polecenia [Wstaw widok rysunku](/TechDraw_DraftView/pl "TechDraw DraftView/pl"). Alternatywnie środowisko [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") oferuje swoje własne narzędzia do rzutowania. Tworzą one jednak rzuty, które są wyświetlane tylko na stronie rysunku a nie w oknie [widoku 3D](/3D_view/pl "3D view/pl").

![](/images/Draft_Shape2DView_example.jpg)

Rzutowanie brył na płaszczyznę XY.

## Użycie

1. Opcjonalnie obróć [widok 3D](/3D_view/pl "3D view/pl"). Kierunek ujęcia widoku w oknie [widoku 3D](/3D_view/pl "3D view/pl") określa wektor projekcji. Na przykład, [widok od góry](/Std_ViewTop/pl "Std ViewTop/pl") będzie rzutować na płaszczyznę XY. Wektor projekcji jest ignorowany dla rzutów utworzonych przez funkcję [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") środowiska Architektura.
2. Opcjonalnie wybierz jeden lub więcej obiektów.
3. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Draft_Shape2DView.svg) **Widok 2D kształtu**.
   * Wybierz opcję z menu **Modyfikacja → ![](/images/Draft_Shape2DView.svg) Widok 2D kształtu**.
4. Jeśli nie wybrałeś jeszcze żadnego obiektu: wybierz obiekt w oknie [widoku 3D](/3D_view/pl "3D view/pl").
5. Rzutowane obiekty są tworzone na płaszczyźnie XY.

## Jak tworzyć plany i przekroje o różnych szerokościach linii

![](/images/Draft_shape2dview_example_plan.png)

Rysunki z różnymi szerokościami linii dla linii widocznych i linii cięcia mogą być łatwo utworzone przez użycie dwóch obiektów *Widok 2D kształtu* z tego samego [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl"). Jeden z obiektów *Widok 2D kształtu* ma ustawiony tryb rzutowania na **Bryła**, który renderuje linie widoczne, a drugi ustawiony na **Linia cięcia** lub **Powierzchnia cięcia**, który renderuje linie cięcia. Oba obiekty *Widok 2D kształtu* są następnie umieszczone w tym samym miejscu, jeden na drugim.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt *Widok 2D kształtu* wywodzi się z obiektu [Część: Part2DObject](/Part_Part2DObject/pl "Part Part2DObject/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Rysunek Roboczy

* DANE**Aktualizacja automatyczna** (`Bool`): określa, czy rzut powinien być automatycznie obliczany ponownie, jeśli obiekt DANE**Podstawa** ulegnie zmianie. Wybór wartości `Fałsz` może być użyteczny, jeśli w dokumencie jest wiele obiektów *Widok 2D kształtu* lub jeśli są one złożone. Jeśli wybrano wartość `Fałsz`, do aktualizacji rzutów należy użyć polecenia [Std: Odśwież](/Std_Refresh/pl "Std Refresh/pl").
* DANE**Clip** (`Bool`): jeśli ma wartość `Prawda`, zawartość jest przycinana do granic płaszczyzny przekroju, jeśli ma to zastosowanie. Zastępuje to właściwość Clip obiektu bazowego.
* DANE**Podstawa** (`Link`): określa obiekt, który ma być wyświetlany.
* DANE**Numer ściany** (`IntegerList`): określa indeksy ścian, które mają być rzutowane. Działa tylko jeśli DANE**Tryb rzutowania** ma wartość `Poszczególne ściany`.
* DANE**Fuse Arch** (`Bool`): określa czy [obiekty BIM](/BIM_Workbench/pl "BIM Workbench/pl") tego samego typu i z tego samego materiału są łączone czy nie.
* DANE**Ukryte linie** (`Bool`): określa, czy ukryte linie są wyświetlane, czy nie.
* DANE**W miejscu** (`Bool`): działa tylko jeśli wybrany obiekt jest [płaszczyzną przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") środowiska Architektura, a DANE**Tryb rzutowania** to `Cutlines` lub `Cutfaces`, określa czy rzut będzie współplanarny z płaszczyzną przekroju.
* DANE**Rzut** (`Vector`): określa kierunek rzutowania. Ignorowane, jeśli DANE**Podstawa** jest [płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") Architektura.
* DANE**Tryb projekcji** (`Enumeration`): określa tryb projekcji. Dostępne są następujące tryby:
  + `Bryła`: rzutuje cały wybrany obiekt.
  + `Poszczególne ściany`: wyświetla tylko ściany z listy DANE**Numer ściany**.
  + `Cutlines`: działa tylko wtedy, gdy wybranym obiektem jest [płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") środowiska BIM, rzutuje tylko krawędzie przecięte przez płaszczyznę przekroju.
  + `Cutfaces`: działa tylko wtedy, gdy wybranym obiektem jest [płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") środowiska BIM, rzutuje powierzchnie przecięte płaszczyzną przekroju przez bryłę jako powierzchnie czołowe.
  + `Ściany bryły`: rzutuje cały wybrany obiekt poprzez cięcie powierzchni jedna po drugiej. Może być użyty, jeśli tryb `Bryła` daje złe wyniki.
* DANE**Długość segmentu** (`Float`): określa rozmiar w milimetrach odcinków liniowych, jeżeli parametr DANE**Tesselacja** ma wartość `PRAWDA`.
* DANE**Tesselacja** (`Bool`): określa czy teselacja powinna zostać wykonana. Teselacja oznacza, że krzywe są zastępowane przez sekwencje segmentów liniowych. Może to być pracochłonne obliczeniowo, jeśli wartość DANE**Długość segmentu** jest zbyt krótka.
* DANE**Wyłącznie widoczne** (`Bool`): określa, czy rzut powinien być obliczany ponownie tylko wtedy, gdy jest widoczny.
* DANE**Punkty wykluczenia** (`Vector list`): Lista punktów wykluczenia. Krawędź przechodząca przez którykolwiek z tych punktów nie zostanie narysowana.
* DANE**Nazwy wykluczeń** (`String list`): Lista nazw obiektów. Każdy oglądany lub wycinany obiekt podrzędny o nazwie zawartej w tej liście nie będzie rysowany. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

### Widok

Rysunek Roboczy

* WIDOK**Wzór** (`Enumeration`): niewykorzystane.
* WIDOK**Rozmiar wzoru** (`Float`): niewykorzystane.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć rzut 2D użyj metody `make_shape2dview` modułu Rysunek Roboczy ([dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl")). Ta metoda zastępuje przestarzałą metodę `makeShape2DView`.

```
shape2dview = make_shape2dview(baseobj, projectionVector=None, facenumbers=[])

```

* `baseobj` to obiekt, który ma być rzutowany.
* `projectionVector` jest wektorem projekcji. Jeżeli nie jest podany, używana jest oś Z.
* `facenumbers` jest listą numerów ścian (0 - bazowy). Jeśli podano, tylko te ściany są brane pod uwagę.
* `shape2dview` jest zwracana wraz z utworzonym rzutem 2D.

W razie potrzeby zmień właściwość `Tryb projekcji` tworzonego obiektu. Może to być: `"Bryła"`, `"Poszczególne ściany"`, `"Cutlines"`, `"Cutfaces"` lub `"Ściany bryły"`.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

box = doc.addObject("Part::Box", "Box")
box.Length = 2300
box.Width = 500
box.Height = 1000

shape1 = Draft.make_shape2dview(box)

shape2 = Draft.make_shape2dview(box, App.Vector(1, -1, 1))

shape3 = Draft.make_shape2dview(box, App.Vector(-1, 1, 1), [0, 5])
shape3.ProjectionMode = "Individual Faces"

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Shape2DView/pl&oldid=1513659>"