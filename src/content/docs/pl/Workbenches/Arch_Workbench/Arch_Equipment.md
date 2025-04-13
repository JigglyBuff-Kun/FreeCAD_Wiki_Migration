---
title: Architektura Wyposażenie
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| BIM: Wyposażenie |
| Lokalizacja w menu |
| 3D / BIM → Wyposażenie |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| E Q |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Wyposażenie** oferuje prosty i wygodny sposób wstawiania do projektów niekonstrukcyjnych, samodzielnych elementów, takich jak meble, sprzęt hydro-sanitarny lub urządzenia elektryczne. Elementy wyposażenia są oparte na [kształcie części](/Part_Workbench/pl "Part Workbench/pl"), co pozwala im korzystać z solidności i możliwości geometrii BRep, a także generować ładne widoki podczas renderowania do widoków planu i przekroju.

![](/images/Arch_equipment_example.jpg)

Obiekty meblowe zamknięte w obiekcie **Wyposażenie**. Rzuty płaskie można uzyskać za pomocą narzędzia [Widok 2D kształtu](/Draft_Shape2DView/pl "Draft Shape2DView/pl").

Od wersji 0.17 obiekty wyposażenia mają również właściwość DANE**HiRes**, do której można dołączyć obiekt [siatki](/Mesh_Workbench/pl "Mesh Workbench/pl"). Obiekty wyposażenia mogą być następnie wyświetlane w widoku 3D zamiast ich kształtu, co pozwala na użycie dowolnych obiektów siatkowych o wysokiej rozdzielczości, takich jak szczegółowe meble powszechnie spotykane na stronach internetowych.

![](/images/Arch_equipment_mesh.jpg)

Obiekty meblowe zamknięte w obiekcie **Wyposażenie** z dołączoną siatką o wysokiej rozdzielczości.

Podczas korzystania z eksportera OBJ wszystkie obiekty wyposażenia, które są w trybie wyświetlania siatki, zostaną wyeksportowane jako ich siatka zamiast kształtu.

## Użycie

1. Wybierz kształt [części](/Part_Workbench/pl "Part Workbench/pl") i opcjonalnie obiekt [siatki](/Mesh_Workbench/pl "Mesh Workbench/pl").
2. Naciśnij przycisk ![](/images/Arch_Equipment.svg) **Wyposażenie** lub naciśnij klawisze E, a następnie Q.

## Właściwości

* Obiekt Wyposażenie dzieli wspólne właściwości i zachowania wszystkich [komponentów](/Arch_Component/pl "Arch Component/pl").

* DANE**Model**: Opis modelu tego urządzenia.
* DANE**Url**: Adres URL strony produktu, na której można znaleźć więcej informacji o tym urządzeniu.
* DANE**Siatka**: Reprezentacja [siatki](/Mesh_Workbench/pl "Mesh Workbench/pl") do użycia dla tego sprzętu. Po ustawieniu dostępny staje się tryb wyświetlania **Siatka**.

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Wyposażenie** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
Equipment = makeEquipment(baseobj=None, placement=None, name="Equipment")

```

* Tworzy obiekt `Equipment` z podanego `baseobj`, który może być `Part` lub `Mesh`.
* Jeśli podano `placement`, jest on używany.
* Zwraca `None` jeśli operacja się nie powiedzie.

Przykład:

```
import FreeCAD, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 500
Box.Width = 2000
Box.Height = 600

Equip = Arch.makeEquipment(Box)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Equipment/pl&oldid=1539894>"