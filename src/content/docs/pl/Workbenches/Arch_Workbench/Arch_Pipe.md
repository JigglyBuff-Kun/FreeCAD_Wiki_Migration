---
title: Architektura Rura
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| BIM: Rura |
| Lokalizacja w menu |
| 3D / BIM → Rura |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| P I |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Rura** umożliwia tworzenie rur od podstaw lub z wybranych obiektów. Wybrane obiekty muszą zawierać jedną otwartą polilinię.

## Użycie

Opcjonalnie wybierz liniowy kształt [Części](/Part_Workbench/pl "Part Workbench/pl"), taki jak [linia](/Draft_Line/pl "Draft Line/pl"), [polilinia](/Draft_Wire/pl "Draft Wire/pl") środowiska Rysunek Roboczy lub otwarty [szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl").

1. Polecenie to można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Arch_Pipe.svg) Rura na pasku narzędzi.
   * Naciśnij P, a następnie I skrót klawiaturowy.
   * **3D / BIM → Rura** z menu głównego.

## Opcje

## Właściwości

Obiekt Architektura: Rura dzieli wspólne właściwości i zachowania ze wszystkimi [Komponentami](/Arch_Component/pl "Arch Component/pl").

### Dane

Komponent

* DANE**Base** (`Link`): Polilinia bazowa tej rury, jeśli istnieje.

Informacje o innych właściwościach w tej grupie można znaleźć na stronie [Komponent](/Arch_Component/pl#Właściwości "Arch Component/pl").

Rura

* DANE**Średnica** (`Length`): Średnica tej rury, jeśli jej DANE**Typ profilu** to `Okrąg`.
* DANE**Wysokość** (`Length`): Wysokość tej rury, jeśli jej DANE**Typ profilu** to `Prostokąt`.
* DANE**Długość** (`Length`): Długość tej rury, jeśli nie jest oparta na polilinii.
* DANE**Offset End** (`Length`): Przesunięcie od punktu końcowego rury. Automatycznie ustawiane, jeśli w tym punkcie zostanie dodana [Kształtka](/Arch_PipeConnector/pl "Arch PipeConnector/pl"), aby dopasować rurę do łącznika. Zobacz [Typowy przepływ pracy](#Typowy_przepływ_pracy) poniżej.
* DANE**Początek odsunięcia** (`Length`): Przesunięcie od punktu początkowego rury. Jak wyżej.
* DANE**Profil** (`Link`): Bazowy profil tej rury. Jeśli nie jest ustawiony, profil rury jest określany przez DANE**Typ profilu**.
* DANE**Typ profilu** (`Enumeration`): Profil tej rury. Używany tylko, jeśli DANE**Profil** nie jest ustawiony. Opcje to: `Okrąg`, `Kwadrat` lub `Prostokąt`.
* DANE**Grubość ściany** (`Length`): Grubość ściany tej rury.
* DANE**Szerokość** (`Length`): Szerokość tej rury, jeśli jej DANE**Typ profilu** to `Kwadrat` lub `Prostokąt`.

## Typowy przepływ pracy

* Zacznij od umieszczenia urządzeń sanitarnych / hydraulicznych *(poniżej znajduje się zaimportowany plik step)*. Obiekty te można przekształcić w wyposażenie Architektury, wybierając je i naciskając przycisk [Wyposażenie](/Arch_Equipment/pl "Arch Equipment/pl").

![](/images/Arch_pipe_example_01.jpg)

* Wyposażenie Architektury ma teraz nową właściwość **Punkty przyciągania**, która jest listą wektorów 3D. Pozwala to na dodanie niestandardowych punktów przyciągania, do których można przyciągać, gdy nowy przycisk przyciągania [specjalnego](/Draft_Snap_Special/pl "Draft Snap Special/pl") jest włączony. Obecnie ta właściwość jest dostępna tylko w środowisku Python. W powyższym przypadku dodałem nowy punkt przyciągania przy wyjściu z urządzenia WC. Wektory wewnątrz Punktów Przyciągania pojawiają się na modelu jako białe kropki:

```
FreeCAD.ActiveDocument.Equipment.SnapPoints=[FreeCAD.Vector(0,0,100)]

```

![](/images/Arch_pipe_example_02.jpg)

* Dzięki nowemu [specjalnemu](/Draft_Snap_Special/pl "Draft Snap Special/pl") przyciąganiu, możesz teraz przyciągać do tych punktów niestandardowych:

![](/images/Arch_pipe_example_03.jpg)

* Teraz możemy narysować orurowanie przy użyciu linii, polilinii środowiska Rysunek Roboczy lub szkiców. Najlepszym sposobem jest jednak użycie tylko linii rysunku roboczego:

![](/images/Arch_pipe_example_04.jpg)

* Narzędzie [Ustaw nachylenie](/Draft_Slope/pl "Draft Slope/pl") pozwala na zmianę nachylenia linii środowiska Rysunek Roboczy, na przykład do 5% (0.05). Dzięki temu możemy szybko nadać naszym liniom odpadów prawidłowe nachylenie. Narzędzie to zmienia tylko współrzędne z, więc musimy tylko przyciągnąć je do siebie, rzut z góry pozostanie niezmieniony.

![](/images/Arch_pipe_example_05.jpg)

* Teraz wystarczy zaznaczyć wszystkie linie i nacisnąć przycisk Rura. Narzędzie Rura działa z każdym obiektem opartym na Części, który zawiera jedną i tylko jedną otwartą polilinię.

![](/images/Arch_pipe_example_06.jpg)

* Możemy teraz tworzyć połączenia, wybierając 2 lub 3 zbiegające się rury i naciskając przycisk [Kształtka](/Arch_PipeConnector/pl "Arch PipeConnector/pl"). Jeśli wybrano 3 rury, dwie z nich muszą być wyrównane, aby utworzyć trójnik:

![](/images/Arch_pipe_example_07.jpg)

* Zmiana promienia łączników nie zmienia długości linii bazowej, a jedynie wynikową rurę *(poprzez zmianę ich właściwości StartOdsunięcia lub ZakończenieOdsunięcia)*. W ten sposób można nadal rysować układ linii tylko z liniami prostymi, bez konieczności dbania o krzywe i promienie.

Możliwe jest również tworzenie rur bez linii bazowej, w tym przypadku należy użyć właściwości "Długość" do zdefiniowania długości.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Rura** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
pipe = makePipe(baseobj=None, diameter=0, length=0, placement=None, name="Pipe")

```

* Tworzy obiekt `pipe` z danego `baseobj` i `diameter`.
  + `baseobj` to [Rysunek Roboczy: Linia](/Draft_Line/pl "Draft Line/pl") lub [Rysunek Roboczy: Polilinia](/Draft_Wire/pl "Draft Wire/pl").
  + Jeśli `baseobj` jest pominięty, można utworzyć prostą rurę podając tylko `diameter` (średnicę) i `length` (długość w kierunku Z).
* Jeśli `placement` jest podane, będzie użyte.

```
import Draft, Arch

p1 = FreeCAD.Vector(1000, 0, 0)
p2 = FreeCAD.Vector(2500, 200, 0)
p3 = FreeCAD.Vector(3100, 1000, 0)
p4 = FreeCAD.Vector(3500, 500, 0)
line = Draft.make_wire([p1, p2, p3, p4])

pipe = Arch.makePipe(line, 200)
FreeCAD.ActiveDocument.recompute()

pipe2 = Arch.makePipe(diameter=120, length=3000)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Pipe/pl&oldid=1539881>"