---
title: Architektura Panel
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Arch Panel |
| Menu location |
| 3D / BIM → Narzędzia panelu → Panel |
| Workbenches |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Default shortcut |
| P A |
| Introduced in version |
| 0.15 |
| See also |
| [Panelizacja do cięcia](/Arch_Panel_Cut/pl "Arch Panel Cut/pl"), [Arkusz panela](/Arch_Panel_Sheet/pl "Arch Panel Sheet/pl") |
|  |

## Opis

Narzędzie **Panel** umożliwia tworzenie wszelkiego rodzaju elementów panelopodobnych, typowych dla konstrukcji panelowych, takich jak projekt [WikiHouse](https://www.wikihouse.cc/), ale także dla wszelkiego rodzaju obiektów opartych na płaskim profilu.

![](/images/Arch_Panel_example.jpg)

*Powyższy obraz przedstawia serię obiektów panelowych, utworzonych po prostu z zaimportowanych konturów 2D z pliku DXF. Można je następnie obracać i łączyć w celu tworzenia struktur.*

Od wersji wersja 0.17 i powyżej narzędzie Panel może być również używany do tworzenia profili falistych lub trapezowych:

![](/images/Arch_panel_wave.jpg)

## Użycie

1. Wybierz kształt 2D *(rysunek roboczy obiektu, ścianę lub szkic)* - opcjonalnie.
2. Naciśnij przycisk ![](/images/Arch_Panel.svg) **Panel** lub naciśnij P, a następnie A.
3. Dostosuj żądane właściwości.

### Ograniczenia

* Obecnie nie ma automatycznego systemu do tworzenia arkuszy cięcia 2D z obiektów panelowych, ale taka funkcja jest w planach i zostanie dodana w przyszłości.

## Opcje

* Grubość panelu można dostosować po jego utworzeniu.
* Naciśnij Esc lub przycisk Anuluj, aby przerwać bieżące polecenie.
* Dwukrotne kliknięcie panelu w widoku drzewa po jego utworzeniu umożliwia przejście do trybu edycji i uzyskanie dostępu do opcji dodawania i odejmowania.
* Możliwe jest automatyczne tworzenie paneli składających się z więcej niż jednego arkusza materiału, poprzez ustawienie właściwości Arkusze.
* Panele mogą wykorzystywać ![](/images/Arch_MultiMaterial.svg) [materiał złożony](/Arch_MultiMaterial/pl "Arch MultiMaterial/pl"). Podczas korzystania z materiału złożonego, panel stanie się wielowarstwowy, używając grubości określonych przez materiał złożony. Każda warstwa o grubości równej zero będzie miała grubość zdefiniowaną automatycznie przez pozostałą przestrzeń zdefiniowaną przez wartość Grubość panelu, po odjęciu innych warstw.

## Właściwości

* Panele mają wspólne właściwości i zachowania ze wszystkimi [komponentami](/Arch_Component/pl "Arch Component/pl") środowiska Architektura.

* DANE**Długość**: Długość panelu
* DANE**Szerokość**: Szerokość panelu
* DANE**Grubość**: Grubość panelu
* DANE**Obszar**: Obszar panelu (automatycznie)
* DANE**Arkusze**: Liczba arkuszy materiału, z którego wykonany jest panel
* DANE**Długość fali**: Długość fali dla paneli falistych
* DANE**Wysokość fali**: Wysokość fali dla paneli falistych
* DANE**Typ fali**: Typ fali dla paneli falistych, zakrzywiona, trapezowa lub kolczasta.
* DANE**Kierunek fali**: Kierunek fali dla paneli falistych.
* DANE**Fala denna**: Określa czy dolna fala panelu jest płaska czy nie.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Panel** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
Panel = makePanel(baseobj=None, length=0, width=0, thickness=0, placement=None, name="Panel")

```

* Tworzy obiekt `Panel` z podanego `baseobj`, który jest profilem zamkniętym i podanego wyciągnięcia `thickness`.
  + Jeśli nie podano `baseobj`, można podać wartości liczbowe dla `length`, `width` i `thickness`, aby utworzyć panel blokowy.
* Jeśli podano `placement`, zostanie on użyty.

Przykład:

```
import FreeCAD, Draft, Arch

Rect = Draft.makeRectangle(1000, 400)
Panel = Arch.makePanel(Rect, thickness=36)

```

## Poradniki

* [Poradnik przenoszenia Wikihouse](/Wikihouse_porting_tutorial/pl "Wikihouse porting tutorial/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel/pl&oldid=1539902>"