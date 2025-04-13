---
title: Architektura Schody
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| BIM: Schody |
| Lokalizacja w menu |
| 3D / BIM → Schody |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| S R |
| Wprowadzono w wersji |
| 0.14 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Schody** umożliwia automatyczne tworzenie kilku rodzajów schodów. Proste schody *(z centralnym podestem lub bez)* mogą być tworzone od podstaw. Bardziej złożone schody wymagają obiektów bazowych.

Zobacz wpis [Schody w Wikipedii](https://pl.wikipedia.org/wiki/Schody), aby zapoznać się z definicją różnych terminów używanych do opisania części schodów.

![](/images/Arch_Stairs_example.jpg)

Dwa modele schodów, jeden z masywną konstrukcją i podestem, drugi z pojedynczą podłużnicą.

## Opcje

## Użycie

1. Opcjonalnie wybierz jeden lub więcej obiektów bazowych, na przykład [linie](/Draft_Line/pl "Draft Line/pl"), [polilinie](/Draft_Wire/pl "Draft Wire/pl") i [szkice](/Sketch/pl "Sketch/pl"):
   * Polilinie lub szkice z dwoma lub więcej segmentami będą używane do tworzenia spoczników. Muszą one znajdować się na płaszczyźnie równoległej do globalnej płaszczyzny XY. Na przykład, wybierz linię w kształcie litery U na spocznik z półobrotem i linię w kształcie litery L na spocznik narożny.
   * Linie i szkice z jedną krawędzią będą używane do tworzenia biegów.
   * Jeśli wierzchołki wszystkich linii i polilinii mają prawidłowe współrzędne Z, utworzone schody wykorzystają te informacje. Szkic (na płaszczyźnie równoległej do XY) z pojedynczą krawędzią lub linia bez delta Z również zadziała do biegu, wtedy Wysokość jest używana do skonstruowania biegu.
   * Obiekty bazowe muszą być wybrane w odpowiedniej kolejności, zaczynając od najniższego obiektu.
2. Naciśnij przycisk ![](/images/Arch_Stairs.svg) **Schody** lub naciśnij klawisze S, R.
3. Dostosuj żądane właściwości. Niektóre części schodów, takie jak konstrukcja, mogą nie pojawić się od razu, jeśli któraś z właściwości to uniemożliwia, np. grubość konstrukcji równa `0`.

![](/images/Stairs_and_Landing_02.png)

![](/images/Stairs_and_Landing_01.png)

![](/images/Arch_Stairs_Complex_Example.png)

Złożone schody oparte na wybranych liniach i poliliniach, jak pokazano po lewej stronie.  
Na czerwono zaznaczono polilinie używane na spoczniki w Z=1500mm, Z=3000mm oraz Z=4500mm.  
Na czarno linie łączące je używane do utworzenia biegów.

## Właściwości

Obiekt Architektura: Schody dzieli wspólne właściwości i zachowania ze wszystkimi [Komponentami](/Arch_Component/pl "Arch Component/pl").

### Dane

Segment i części

* DANE**Abs Top** (`Vector`): *(tylko do odczytu)* Absolutnie najwyższy poziom, na który prowadzą schody.
* DANE**Last segment** (`Link`): Ostatni segment *(bieg lub spocznik)* schodów łączących się z tym segmentem. Poziom początkowy schodów będzie poziomem końcowym tego ostatniego segmentu.
* DANE**Outline Left** (`VectorList`): Lewy kontur schodów (tylko do odczytu).
* DANE**Outline Left All** (`VectorList`): Lewy kontur wszystkich segmentów schodów (tylko do odczytu).
* DANE**Outline Right** (`VectorList`): Prawy kontur schodów (tylko do odczytu).
* DANE**Outline Right All** (`VectorList`): Prawy kontur wszystkich segmentów schodów (tylko do odczytu).
* DANE**Railing Height Left** (`Length`): Wysokość lewej poręczy schodów lub spocznika.
* DANE**Railing Height Right** (`Length`): Wysokość prawej poręczy schodów lub spocznika.
* DANE**Railing Left** (`LinkHidden`): Obiekt lewej poręczy. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl"): Zaktualizowano typ właściwości z `String` do `LinkHidden`.
* DANE**Railing Offset Left** (`Length`): Odsunięcie lewej poręczy od krawędzi schodów lub podestu.
* DANE**Railing Offset Right** (`Length`): Odsunięcie prawej poręczy od krawędzi schodów lub spocznika.
* DANE**Railing Right** (`LinkHidden`): Prawy obiekt poręczy. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl"): Zaktualizowano typ właściwości z `String` do `LinkHidden`.

Schody

* DANE**Wyrównanie** (`Enumeration`): Wyrównanie schodów na linii bazowej. Używane tylko jeśli zdefiniowano linię bazową. Może być `Lewa`, `Prawa` lub `Środek`.
* DANE**Wysokość** (`Length`): Całkowita wysokość schodów. Używane tylko jeśli nie zdefiniowano linii bazowej lub jeśli linia bazowa jest pozioma. Ignorowane, jeśli wartość właściwości DANE**Riser Height Enforce** jest niezerowa.
* DANE**Długość** (`Długość`): Całkowita długość schodów, jeśli nie zdefiniowano linii bazowej. Ignorowane, jeśli wartość właściwości DANE**Tread Depth Enforce** jest niezerowa.
* DANE**Szerokość** (`Length`): Szerokość schodów.
* DANE**Szerokość spocznika** (`FloatList`): Jeśli DANE**Liczba stopni** wynosi `1`, obiekt schodów działa jak spocznik. W takim przypadku, gdy linia bazowa jest wielosegmentowa, szerokość pierwszego segmentu spocznika jest zgodna z właściwościa DANE**Szerokość**, a szerokości kolejnych segmentów są zgodne z ustawioną tutaj listą.

Stopnie

* DANE**współczynnik Blondel** (`Float`): *(tylko do odczytu)* Obliczony współczynnik Blondela. Współczynnik ten wskazuje wygodne schody i powinien wynosić od 62 do 64 cm lub od 24,5 do 25,5 cala.
* DANE**Głębokość spocznika** (`Length`): Głębokość spocznika, jeśli jest włączona w właściwości DANE**Spoczniki**. Domyślnie równa właściwości DANE**Szerokość** jeśli wartość wynosi `0`.
* DANE**Noski** (`Length`): Rozmiar noska.
* DANE**Liczba stopni** (`Integer`): Liczba stopni (pionów). Musi wynosić co najmniej 2 dla pojedynczego biegu i co najmniej 4 dla schodów z centralnym spocznikiem.
* DANE**Wysokość stopnia** (`Length`): *(tylko do odczytu)* Wysokość stopni. Jeśli wartość właściwości DANE**Wymuszona wysokość pionu** wynosi `0`, jest ona obliczana *(DANE**Wysokość** / DANE**Ilość stopni**)*. W przeciwnym razie jest taka sama jak wartość właściwości DANE**Wymuszona wysokość pionu**.
* DANE**Wymuszona wysokość pionu** (`Length`): Wymuszona wysokość pionów.
* DANE**Grubość pionu** (`Długość`): Grubość pionów.
* DANE**Głębokość stopnic** (`Length`): *(tylko do odczytu)* Głębokość stopnic. Jeśli wartość właściwości DANE**Wymuszona głębokość stopnic** wynosi 0, jest ona obliczana (DANE**Długość** / DANE**Ilość stopni**). W przeciwnym razie jest taka sama jak DANE**Wymuszona głębokość stopnicy**.
* DANE**Wymuszona głębokość stopnicy** (`Length`): Wymuszona głębokość stopnicy.
* DANE**Grubość stopnicy** (`Length`): Grubość stopnicy.

Konstrukcja

* DANE**Dolne połączenie początku schodów** (`Enumeration`): Typ połączenia między dolną płytą podłogi a początkiem schodów. Może mieć wartość `HorizontalCut`, `VerticalCut` lub `HorizontalVerticalCut`.
* DANE**Górne połączenie końca schodów** (`Enumeration`): Typ połączenia między końcem schodów a górną płytą podłogową. Może być `toFlightThickness` lub `toSlabThickness`.
* DANE**Grubość płyty dolnej** (`Length`): Grubość dolnej płyty podłogowej.
* DANE**Bieg** (`Enumeration`): Kierunek biegu po spoczniku. Może być `Straight`, `HalfTurnLeft` lub `HalfTurnRight`. Właściwość DANE**Spoczniki** musi być ustawiona na `Na środku`.
* DANE**Spoczniki** (`Enumeration`): Rodzaj spocznika. Może być `Brak` lub `Na środku` *(`Na każdym narożniku` jeszcze nie zaimplementowane)*.
* DANE**Zakładka podłużnic** (`Length`): Zakładka podłużnic nad dolną częścią stopni.
* DANE**Szerokość podłużnicy.** (`Length`): Szerokość podłużnicy.
* DANE**Konstrukcja** (`Enumeration`): Typ konstrukcji schodów. Może być `Brak`, `Masywne`, `Jedna podłużnica` lub `Dwie podłużnice`. Dla dwóch ostatnich opcji właściwości DANE**Stringer Width** i DANE**Tread Thickness** muszą mieć niezerowe wartości.
* DANE**Odsunięcie konstrukcji** (`Length`): Przesunięcie między krawędzią schodów a konstrukcją.
* DANE**Grubość konstrukcji** (`Length`): Grubość konstrukcji.
* DANE**Grubość płyty w górę** (`Length`): Grubość górnej płyty podłogowej.
* DANE**Uzwojenie** (`Enumeration`): Typ uzwojenia. Nie zaimplementowano.

## Ograniczenia

* Obecnie dostępne są schody proste, z połową skrętu w lewo lub w prawo i półpiętra.
* Zobacz [wpis na forum](http://forum.freecadweb.org/viewtopic.php?f=23&t=6534) dla schodów okrągłych.
* Zobacz ogłoszenie na forum [[1]](http://forum.freecadweb.org/viewtopic.php?f=9&t=4564).

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Schody** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
Stairs = makeStairs(baseobj=None, length=None, width=None, height=None, steps=None, name="Stairs")

```

* Tworzy obiekt `Stairs` z podanego `baseobj`.
* Jeśli `baseobj` nie zostanie podany, użyje `length`, `width`, `height` i `steps`, aby zbudować solidny obiekt.

Przykład:

```
import Arch

Stairs = Arch.makeStairs(length=5000, width=1200, height=3000, steps=14)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Stairs/pl&oldid=1539885>"