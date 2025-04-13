---
title: Architektura Cięcie panelu
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| BIM: Cięcie panelu |
| Lokalizacja w menu |
| Narzędzia → Narzędzia panelu → Cięcie panelu |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| P C |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Panel](/Arch_Panel/pl "Arch Panel/pl"), [Arkusz panelu](/Arch_Panel_Sheet/pl "Arch Panel Sheet/pl"), [Zagnieżdżanie](/Arch_Nest/pl "Arch Nest/pl") |
|  |

## Opis

Narzędzie **Cięcie panelu** tworzy w dokumencie 3D płaski widok 2D [panelu](/Arch_Panel/pl "Arch Panel/pl"), który może zostać włączony do [arkusza](/Arch_Panel_Sheet/pl "Arch Panel Sheet/pl") lub bezpośrednio wyeksportowany do formatu [DXF](/Draft_DXF/pl "Draft DXF/pl"). Obiekty Cięcia panelu są również obsługiwane przez środowisko pracy [CAM](/CAM_Workbench/pl "CAM Workbench/pl").

![](/images/Arch_Wikihouse_02.jpg)

## Użycie

1. Wybierz jeden lub więcej obiektów [panelu](/Arch_Panel/pl "Arch Panel/pl").
2. Z menu wybierz narzędzie '*Narzędzia → Narzędzia panelu → ![](/images/Arch_Panel_Cut.svg) **Cięcie panelu'***.
3. Dostosuj żądane właściwości.

## Opcje

* Jeśli panel nie jest płaski *(na przykład pofałdowany)*, podcięcie nie pojawi się w panelu cięcia. Narzędzie to jest przydatne głównie w przypadku płaskich paneli
* Cięcie panelu może wyświetlać znacznik. Znacznik ten może być niestandardową linią tekstu lub może automatycznie wyświetlać znacznik, etykietę lub opis powiązanego panelu.
* Aby znacznik był przydatny w obróbce CNC, powinien być napisany przy użyciu czcionki typu stick, w której litery są prostymi poliliniami, łatwymi do odtworzenia przez maszynę. Po utworzeniu obiekt Cięcie panelu automatycznie użyje czcionki określonej w preferencjach: **Edycja → Preferencje ... → Rysunek Roboczy → Teksty i wymiary → Domyślny plik czcionki dla kształtu z tekstu**.
* Dwukrotne kliknięcie obiektu Cięcie panelu w widoku drzewa po jego utworzeniu umożliwia przejście do trybu edycji i zmodyfikowanie położenia znacznika.
* W przypadku konieczności ułożenia różnych wycięć panelu razem, wycięcia panelu mogą wyświetlać margines, który jest przydatny, aby upewnić się, że między jednym wycięciem a drugim zawsze znajduje się określona przestrzeń.

## Właściwości

### Dane

* DANE**Źródło**: Obiekt [panelu](/Arch_Panel/pl "Arch Panel/pl") pokazywany przez to cięcie.
* DANE**Tekst Tagu**: Tekst do wyświetlenia. Może to być %tag%, %label% lub %description%, aby wyświetlić tag panelu lub etykietę.
* DANE**Rozmiar Tagu**: Rozmiar tekstu znacznika.
* DANE**Pozycja Tagu**: Pozycja tekstu znacznika. Zachowaj (0,0,0) dla automatycznej pozycji środkowej.
* DANE**Obrót Tagu**: Obrót tekstu znacznika.
* DANE**Plik Czcionki**: Czcionka tekstu znacznika.
* DANE**Utwórz ścianę**: Jeśli przyjmie wartość `Prawda`, panel jest obiektem ściana środowiska Część , w przeciwnym razie polilinią środowiska Część.

### Widok

* WIDOK**Margines**: Margines, który może być wyświetlany poza kształtem wycięcia panelu.
* WIDOK**Pokaż Margines**: Włącza / wyłącza wyświetlanie marginesu.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Cięcie panelu** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
View = makePanelCut(panel, name="PanelView")

```

* Tworzy obiekt `View` *(rzut 2D)* z istniejącego `panel`.

Przykład:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(500, 0, 0)
p3 = FreeCAD.Vector(500, 50, 0)
p4 = FreeCAD.Vector(550, 50, 0)
p5 = FreeCAD.Vector(600, 0, 0)
p6 = FreeCAD.Vector(1000, 0, 0)
p7 = FreeCAD.Vector(1000, 400, 0)
p8 = FreeCAD.Vector(600, 400, 0)
p9 = FreeCAD.Vector(600, 350, 0)
p10 = FreeCAD.Vector(550, 350, 0)
p11 = FreeCAD.Vector(500, 400, 0)
p12 = FreeCAD.Vector(0, 400, 0)

Wire = Draft.makeWire([p1, p2, p3, p4, p5, p6,
                       p7, p8, p8, p9, p10, p11, p12], closed=True)
Panel = Arch.makePanel(Wire, thickness=36)
FreeCAD.ActiveDocument.recompute()

View = Arch.makePanelCut(Panel)
View.ViewObject.LineWidth = 3
FreeCAD.ActiveDocument.recompute()

```

## Poradniki

* [Poradnik przenoszenia Wikihouse](/Wikihouse_porting_tutorial/pl "Wikihouse porting tutorial/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel_Cut/pl&oldid=1438147>"