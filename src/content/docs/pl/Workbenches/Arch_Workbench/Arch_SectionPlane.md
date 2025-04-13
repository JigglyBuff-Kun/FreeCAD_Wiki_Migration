---
title: BIM Płaszczyzna przekroju
---

:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|                                                                   |
| ----------------------------------------------------------------- |
| BIM: Płaszczyzna przekroju                                        |
| Lokalizacja w menu                                                |
| Opisy → Płaszczyzna przekroju                                     |
| Środowisko pracy                                                  |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl")                       |
| Domyślny skrót                                                    |
| S P                                                               |
| Wprowadzono w wersji                                              |
| -                                                                 |
| Zobacz także                                                      |
| [Widok 2D kształtu](/Draft_Shape2DView/pl "Draft Shape2DView/pl") |
|                                                                   |

## Opis

Narzędzie **Płaszczyzna przekroju** umieszcza w bieżącym dokumencie płaszczyznę przekroju "rzecz", która definiuje przekrój lub płaszczyznę widoku. "Rzecz" przyjmuje swoje położenie zgodnie z bieżącą [płaszczyzną przekroju](/Draft_SelectPlane/pl "Draft SelectPlane/pl") i może być przenoszona i zmieniana jej orientacja poprzez przesuwanie i obracanie, aż opisze widok 2D, który chcesz uzyskać. Obiekt płaszczyzny przekroju uwzględnia tylko określony zestaw obiektów. Obiekty wybrane podczas tworzenia płaszczyzny przekroju zostaną automatycznie dodane do tego zestawu. Inne obiekty mogą być później dodawane lub usuwane z obiektu Płaszczyzny przekroju za pomocą narzędzi [Połącz obiekty](/Arch_Add/pl "Arch Add/pl") i [Usuń komponent](/Arch_Remove/pl "Arch Remove/pl") lub poprzez dwukrotne kliknięcie Płaszczyzny przekroju w widoku drzewa.

Sama Płaszczyzna przekroju nie utworzy żadnego widoku swojego zestawu obiektów. W tym celu należy utworzyć [Widok architektury](/TechDraw_ArchView/pl "TechDraw ArchView/pl"), aby utworzyć widok na stronie [rysunku technicznego](/TechDraw_Workbench/pl "TechDraw Workbench/pl").

![](/images/Arch_SectionPlane_example.jpg)

## Użycie

1. Opcjonalnie ustaw [płaszczyzne roboczą](/Draft_SelectPlane/pl "Draft SelectPlane/pl"), aby odzwierciedlała płaszczyznę, na której chcesz umieścić płaszczyznę przekroju.
2. Wybierz obiekty, które chcesz uwzględnić w widoku przekroju.
3. Naciśnij przycisk ![](/images/Arch_SectionPlane.svg) **Płaszczyzna przekroju** lub naciśnij S, a następnie P.
4. Ustaw płaszczyznę przekroju we właściwej pozycji [przesuwając](/Draft_Move/pl "Draft Move/pl") / [obracając](/Draft_Rotate/pl "Draft Rotate/pl"), jeśli to konieczne.
5. Wybierz płaszczyznę przekroju, jeśli nie została jeszcze wybrana.
6. Użyj narzędzia [Widok 2D kształtu](/Draft_Shape2DView/pl "Draft Shape2DView/pl") lub [Wstaw obiekt środowiska Architektura](/TechDraw_ArchView/pl "TechDraw ArchView/pl"), aby utworzyć widok.

## Opcje

- Obiekt Płaszczyzny przekroju będzie uwzględniał tylko określony zestaw obiektów, a nie wszystkie obiekty dokumentu. Obiekty mogą być dodawane lub usuwane z obiektu Płaszczyzny przekroju za pomocą narzędzi [Połącz obiekty](/Arch_Add/pl "Arch Add/pl") i [Usuń komponent](/Arch_Remove/pl "Arch Remove/pl") lub poprzez dwukrotne kliknięcie Płaszczyzny przekroju w widoku drzewa, wybranie obiektów na liście lub w scenie 3D i naciśnięcie przycisków **dodaj** lub **usuń**.

- Po wybraniu obiektu płaszczyzny przekroju użyj narzędzia [Widok 2D kształtu](/Draft_Shape2DView/pl "Draft Shape2DView/pl"), aby utworzyć obiekt kształtu reprezentujący widok przekroju w dokumencie.

![](/images/Arch_Section_example2.jpg)

- Utwórz [widok architektury](/TechDraw_ArchView/pl "TechDraw ArchView/pl").

![](/images/Arch_Section_example3.jpg)

- Płaszczyzna przekroju może być również użyta do pokazania całego widoku 3D przeciętego nieskończoną płaszczyzną. Ma to jedynie charakter wizualny i nie wpływa na geometrię przecinanych obiektów.

![](/images/Arch_SectionPlane_CutView.jpg)

## Właściwości

- DANE**Tylko bryły**: Jeśli ta opcja ma wartość `Prawda`, obiekty niebędące bryłami w zestawie nie będą brane pod uwagę.
- WIDOK**Długość wyświetlana**: Długość wskaźnika płaszczyzny przekroju w widoku 3D. Nie ma wpływu na widok wynikowy.
- WIDOK**Szerokość wyświetlana**: Wysokość wskaźnika płaszczyzny przekroju w widoku 3D. Nie ma wpływu na widok wynikowy.
- WIDOK**Rozmiar strzałki**: Rozmiar strzałek narzędzia płaszczyzny przekroju w widoku 3D. Nie ma wpływu na widok wynikowy
- WIDOK**Widok wcięcia**: Jeśli opcja ta ma wartość `Prawda`, cały widok 3D zostanie przycięty w miejscu tej płaszczyzny przekroju.
- WIDOK**Widok wycinka**: Jeśli opcja ma wartość `Prawda`, widok zostanie przycięty do wysokości wyświetlania i długości płaszczyzny przekroju. Skutecznie zmienia to płaszczyznę przekroju w kamerę prostopadłą, ograniczając pole widzenia.

![](/images/Arch_SectionPlane_ClipView.png)

Płaszczyzna przekroju architektury z opcją widoku wycinka będzie zachowywać się jak kamera, ograniczając pole widzenia.

## Ulepszenia

- Ręczne dodanie właściwości o nazwie **RotateSolidRender** typu **App::PropertyAngle** do właściwości **View** płaszczyzny → przekroju _(kliknij prawym przyciskiem myszy widok właściwości → pokaż ukryte, kliknij ponownie prawym przyciskiem myszy → dodaj właściwość)_ umożliwia obrócenie renderowania podczas korzystania z trybu bryłowego. Jest to przydatne, gdy renderowany widok zawiera na przykład elementy środowiska Architektura i Rysunek Roboczy, a renderowanie elementów Architektury jest obrócone w stosunku do elementów Rysunku Roboczego.

## Tworzenie skryptów

_Zobacz również:_ [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie Wstaw widok przekroju może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
Section = makeSectionPlane(objectslist=None, name="Section")

```

- Tworzy obiekt `Section` z `objectslist`, który jest listą obiektów.

Przykład:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
Structure = Arch.makeStructure(length=1000, width=1000, height=200)
FreeCAD.ActiveDocument.recompute()

BuildingPart = Arch.makeBuildingPart([Wall1, Wall2])

Floor = Arch.makeFloor([BuildingPart])
Building = Arch.makeBuilding([Floor, Structure])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

Section1 = Arch.makeSectionPlane([Wall1, Wall2])
Section2 = Arch.makeSectionPlane([Structure])
Section3 = Arch.makeSectionPlane([Site])
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SectionPlane/pl&oldid=1560938>"
