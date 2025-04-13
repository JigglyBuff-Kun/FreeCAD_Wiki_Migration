---
title: Architektura Konstrukcja
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| BIM: Konstrukcja |
| Lokalizacja w menu |
| Narzędzi konstrukcyjne → Konstrukcja |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| S T |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Ściana](/Arch_Wall/pl "Arch Wall/pl"), [Zbrojenie](/Arch_Rebar/pl "Arch Rebar/pl") |
|  |

## Opis

Narzędzie Konstrukcja umożliwia budowanie elementów konstrukcyjnych, takich jak kolumny lub belki, poprzez określenie ich szerokości, długości i wysokości lub opierając się na profilu 2D *(powierzchni, linii lub szkicu)*.

Jeśli nie podano profilu, dostępny jest zestaw ustawień wstępnych umożliwiających szybkie utworzenie elementu konstrukcyjnego na podstawie wstępnie zdefiniowanego profilu standardowego.

![](/images/Arch_Structure_example.jpg)

Kolumna oparta na profilu podstawowym 2D. Kolumna i belka zdefiniowane przez ich wysokość, długość i szerokość, bez profilu podstawowego. Konstrukcja metalowa oparta na powierzchni 2D.

## Użycie

1. Wybierz kształt 2D *(obiekt środowiska Rysunek Roboczy, powierzchnia lub szkic)* *(opcjonalnie)*.
2. Naciśnij przycisk w menu '*Narzędzia → Narzędzia konstrukcyjne → ![](/images/Arch_Structure.svg) **Konstrukcja'***.
3. Dostosuj właściwości według potrzeb.

## Opcje

* Gdy nie jest wybrany żaden podstawowy obiekt 2D, narzędzie do tworzenia konstrukcji ma 2 tryby rysowania: Kolumna i belka:

```
 ** W trybie kolumny, zostaniesz poproszony o wybranie punktu na ekranie lub wprowadzenie współrzędnych. Nowy obiekt konstrukcji zostanie umieszczony w tym punkcie.
 ** W trybie belki, zostaniesz poproszony o wybranie dwóch punktów na ekranie lub wprowadzenie współrzędnych. Nowy obiekt konstrukcji będzie rozpięty między tymi dwoma punktami.

```

* Wysokość, szerokość i długość obiektu konstrukcji można dostosować po jej utworzeniu.
* Naciśnij Esc lub przycisk Anuluj, aby przerwać bieżące polecenie.
* Podwójne kliknięcie na konstrukcji w widoku drzewa po jej utworzeniu pozwala wejść w tryb edycji i uzyskać dostęp i modyfikować jej obiekty dołączone i odejmowane.
* W trybie edycji można również dodać [układy osi](/Arch_Axis/pl "Arch Axis/pl") do elementu konstrukcyjnego. Dodając jeden układ osi, element strukturalny zostanie skopiowany raz na każdą oś układu. Dodając dwa układy osi, element konstrukcyjny zostanie skopiowany raz na każdym przecięciu się obu układów.

## Właściwości

* Elementy konstrukcji mają wspólne właściwości i zachowania dla wszystkich [Komponentów Architektonicznych](/Arch_Component/pl "Arch Component/pl").

### Dane

* DANE**Narzędzie**: opcjonalna ścieżka wyciągnięcia, która może być dowolnym typem polilinii. Jeśli ta właściwość jest pusta, wyciąganie będzie proste i nastąpi w kierunku określonym przez właściwość Normalnej.
* DANE**Normalna**: określa kierunek, w którym będzie wyciągana podstawowa powierzchnia tej konstrukcji. Jeśli ta właściwość zostanie zachowana jako (0,0,0), kierunek zostanie automatycznie ustawiony na kierunek normalny do podstawowej powierzchni.
* DANE**Twórca ścian**: określa rodzaj algorytmu generacji powierzchni do zastosowania w celu zbudowania profilu. Dostępne opcje to:
  + `None`
  + `Simple`: tworzy ściany ze wszystkich zamkniętych polilinii ignorując nakładanie się linii.
  + `Cheese`: tworzy ściany z otworami, ale bez ścian w obrębie otworów.
  + `Bullseye`: tworzy ściany z otworami włączając wyspy w obrębie otworów.
* DANE**Długość**: określa długość konstrukcji. Jest to używane tylko wtedy, gdy konstrukcja nie jest oparta na profilu.
* DANE**Szerokość**: określa szerokość konstrukcji. Jest to używane tylko wtedy, gdy konstrukcja nie jest oparta na profilu.
* DANE**Wysokość**: określa wysokość konstrukcji lub długość wyciągania w przypadku bazowania na profilu. Jeśli nie podano wysokości, a konstrukcja znajduje się w obiekcie [Piętro Architektoniczne](/Arch_Floor/pl "Arch Floor/pl") ze zdefiniowaną wysokością, konstrukcja automatycznie przyjmie wartość wysokości piętra.
* DANE**Odsunięcie węzłów**: określa opcjonalne przesunięcie między linią środkową a linią węzłów.

### Widok

* WIDOK**Typ węzłów**: Typ węzłów konstrukcji tego obiektu, liniowy lub obszarowy.
* WIDOK**Wyświetl węzły**: Pokazuje lub ukrywa węzły konstrukcji.

## Nastawy wstępne

Narzędzie Konstrukcja zawiera również szereg ustawień wstępnych, które umożliwiają szybkie tworzenie standardowych profili metalowych lub prefabrykowanych elementów betonowych.

![](/images/Arch_presets_example.jpg)

Wybrane ustawienia wstępne dla konstrukcji stalowych.

Ustawienia wstępne są uzyskiwane poprzez wybór **Kategorii** z panelu opcji konstrukcji. Dostępne kategorie to **Beton prefabrykowany** lub dowolne standardowe profile metalowe takie jak **HEA**, **HEB** lub **INP**. Dla każdej z tych kategorii dostępnych jest kilka ustawień wstępnych. Po wybraniu ustawienia wstępnego, można dostosować jego poszczególne parametry, takie jak **Długość**, **Szerokość** lub **Wysokość**. Jednakże dla profili metalowych rozmiar profilu jest ustawiany przez ustawienie wstępne i nie może być zmieniony.

Przycisk **Przełącz L/H** może być użyty do przełączenia wartości długości i wysokości, a tym samym do zbudowania poziomej belki zamiast pionowej kolumny.

![](/images/Arch_precast_example.jpg)

Wybrane ustawienia wstępne dla prefabrykowanych konstrukcji betonowych.

## Węzły konstrukcji

Obiekty konstrukcyjne mają również możliwość wyświetlania węzłów konstrukcyjnych. Węzły konstrukcyjne są sekwencją punktów 3D przechowywanych we właściwości "Węzły". Włączając/wyłączając właściwość widoku "Pokaż węzły", można zobaczyć węzły konstrukcyjne elementu konstrukcyjnego:

![](/images/Arch_structural_nodes.jpg)

Węzły konstrukcyjne widoczne dla zestawu struktur.

* Węzły są obliczane i aktualizowane automatycznie, o ile nie są one modyfikowane ręcznie. Jeśli zostały one zmodyfikowane, nie będą one aktualizowane, gdy kształt obiektu konstrukcyjnego zmieni się, chyba że użyjesz narzędzia "Resetuj węzły" poniżej.
* KOnstrukcje architektoniczne mogą mieć nie tylko węzły liniowe, ale także węzły płaskie. Aby to osiągnąć, 1- Musi wystąpić co najmniej 3 wektory w właściwości "Węzły" obiektu, 2- właściwość "NodesType" ich widoku musi być ustawiona na "Obszar".
* Gdy obliczenia węzłów są automatyczne *(czyli jeśli nigdy nie dotknąłeś ich ręcznie)*, ustawiając właściwość "Rola" konstrukcji na "Płyta", automatycznie stanie się ona węzłem płaskim *(będzie więcej niż 3 wektory i właściwość NodesType zostanie ustawiona na "Obszar")*.
* Podczas edytowania obiektu struktury *(podwójne kliknięcie)*, w panelu zadań dostępne są kilka narzędzi do pracy z węzłami:
  + Resetowanie węzłów do automatycznego obliczenia, jeśli zostały one zmodyfikowane ręcznie.
  + Edycja węzłów graficznie, działa tak samo jak [Edycja Wzorców](/Draft_Edit/pl "Draft Edit/pl").
  + Rozszerzenie węzłów edytowanego obiektu do momentu dotknięcia węzła innego obiektu.
  + Zrobienie węzła tego obiektu i innego zbieżnym.
  + Przełączanie wyświetlania wszystkich węzłów wszystkich obiektów konstrukcyjnych dokumentu włącz / wyłącz.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Konstrukcja** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
structure = makeStructure(baseobj=None, height=None)
structure = makeStructure(baseobj=None, length=None, width=None, height=None, name="Structure")

```

* Tworzy obiekt `structure` z podanego `baseobj`, który jest profilem zamkniętym i podanego wyciągnięcia `height`.
  + Jeśli nie podano `baseobj`, można podać wartości liczbowe dla `length`, `width` i `height`, aby utworzyć konstrukcję blokową.
  + `baseobj` może być również dowolnym istniejącym obiektem bryłowym.

Przykład:

```
import FreeCAD, Draft, Arch

rect = Draft.make_rectangle(200, 300)
structure1 = Arch.makeStructure(rect, height=2000)
FreeCAD.ActiveDocument.recompute()

structure2 = Arch.makeStructure(None, length=500, width=1000, height=3000)
Draft.move(structure2, FreeCAD.Vector(2000, 0, 0))
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Structure/pl&oldid=1539905>"