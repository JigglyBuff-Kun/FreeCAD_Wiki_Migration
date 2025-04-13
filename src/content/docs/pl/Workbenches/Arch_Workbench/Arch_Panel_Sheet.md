---
title: Architektura Arkusz panelu
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| BIM: Arkusz panelu |
| Lokalizacja w menu |
| Narzędzia → Narzędzia panelu → Arkusz panelu |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| P S |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Panel](/Arch_Panel/pl "Arch Panel/pl"), [Cięcie panelu](/Arch_Panel_Cut/pl "Arch Panel Cut/pl"), [Zagnieżdżanie](/Arch_Nest/pl "Arch Nest/pl") |
|  |

## Opis

Narzędzie to pozwala zbudować arkusz 2D, zawierający dowolną liczbę obiektów [Cięcia panelu](/Arch_Panel_Cut/pl "Arch Panel Cut/pl") lub dowolny inny obiekt 2D, taki jak te wykonane za pomocą środowisk [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") i [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"). Arkusz panelu jest zwykle tworzony w celu rozplanowania cięć, które mają być wykonane przez maszynę CNC. Arkusze te można następnie wyeksportować do pliku [DXF](/Draft_DXF/pl "Draft DXF/pl").

![](/images/Arch_Wikihouse_03.jpg)

![](/images/Arch_Wikihouse_04.jpg)

*Powyższy obraz przedstawia wygląd arkuszy paneli po wyeksportowaniu do formatu DXF*.

## Użycie

1. Opcjonalnie wybierz jeden lub więcej obiektów [Cięcia panelu](/Arch_Panel_Cut/pl "Arch Panel Cut/pl") lub dowolny inny obiekt 2D leżący na płaszczyźnie XY.
2. Z menu wybierz narzędzie '*Narzędzia → Narzędzia panelu → ![](/images/Arch_Panel_Sheet.svg) **Arkusz panelu'***.
3. Dostosuj żądane właściwości.

## Opcje

* Po utworzeniu arkusza panelu, z obiektami podrzędnymi lub bez, każdy inny obiekt podrzędny można dodać lub usunąć z arkusza panelu, klikając go dwukrotnie w widoku drzewa i dodając lub usuwając obiekty z jego folderu Group.
* Dwukrotne kliknięcie panelu w widoku drzewa umożliwia również przenoszenie obiektów zawartych w tym arkuszu lub przenoszenie jego znacznika.
* Możliwe jest automatyczne tworzenie paneli składających się z więcej niż jednego arkusza materiału, poprzez zwiększenie jego właściwości Arkusze.
* Arkusze paneli mogą wyświetlać margines, który jest przydatny, aby upewnić się, że między obiektami wewnętrznymi a granicą arkusza zawsze znajduje się pewna przestrzeń.
* Gdy arkusze panelu są eksportowane do DXF, kontury, wewnętrzne otwory, znaczniki ich wewnętrznych elementów podrzędnych są umieszczane na różnych warstwach, jak pokazano na powyższym obrazku.

## Właściwości

### Dane

* DANE**Wysokość**: Wysokość arkusza.
* DANE**Szerokość**: Szerokość arkusza.
* DANE**Współczynnik wypełnienia**: Procent obszaru arkusza, który jest wypełniony wycięciami *(automatycznie)*.
* DANE**Tekst Tagu**: Tekst do wyświetlenia.
* DANE**Rozmiar Tagu**: Rozmiar tekstu znacznika.
* DANE**Pozycja Tagu**: Pozycja tekstu znacznika. Zachowaj (0,0,0) dla automatycznej pozycji środkowej.
* DANE**Obrót Tagu**: Obrót tekstu znacznika.
* DANE**Plik czcionki**: Czcionka tekstu znacznika.
* DANE**Utwórz ścianę**: Jeśli przyjmie wartość `Prawda`, panel jest obiektem ściana środowiska Część , w przeciwnym razie polilinią środowiska Część.
* DANE**Kierunek ziarna**: Pozwala poinformować o głównym kierunku włókien panelu *(kierunek zgodny z ruchem wskazówek zegara, 0° oznacza w górę)*.

### Widok

* WIDOK**Margines**: Margines, który może być wyświetlany poza kształtem wycięcia panelu.
* WIDOK**Pokaż Margines**: Włącza / wyłącza wyświetlanie marginesu.
* WIDOK**Show Grain**: Pokazuje teksturę włókna *(właściwość Utwórz ścianę musi być ustawione na `Prawda`)*.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Arkusz panelu** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
Sheet = makePanelSheet(panels=[], name="PanelSheet")

```

* Tworzy obiekt `Sheet` z `panels`, który jest listą obiektów [Panelu](/Arch_Panel/pl "Arch Panel/pl").

Przykład:

```
import FreeCAD, Draft, Arch

Rect = Draft.makeRectangle(500, 200)
Polygon = Draft.makePolygon(5, 750)

p1 = FreeCAD.Vector(1000, 0, 0)
p2 = FreeCAD.Vector(2000, 400, 0)
p3 = FreeCAD.Vector(1250, 800, 0)
Wire = Draft.makeWire([p1, p2, p3], closed=True)

Panel1 = Arch.makePanel(Rect, thickness=36)
Panel2 = Arch.makePanel(Polygon, thickness=36)
Panel3 = Arch.makePanel(Wire, thickness=36)
FreeCAD.ActiveDocument.recompute()

Cut1 = Arch.makePanelCut(Panel1)
Cut2 = Arch.makePanelCut(Panel2)
Cut3 = Arch.makePanelCut(Panel3)
Cut1.ViewObject.LineWidth = 3
Cut2.ViewObject.LineWidth = 3
Cut3.ViewObject.LineWidth = 3
FreeCAD.ActiveDocument.recompute()

Sheet = Arch.makePanelSheet([Cut1, Cut2, Cut3])

```

## Poradniki

* [Poradnik przenoszenia Wikihouse](/Wikihouse_porting_tutorial/pl "Wikihouse porting tutorial/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel_Sheet/pl&oldid=1434623>"