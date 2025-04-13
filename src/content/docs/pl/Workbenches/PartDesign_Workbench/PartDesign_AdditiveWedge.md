---
title: Projekt części Addytywny klin
---
|  |
| --- |
| Projekt Części: Addytywny klin |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez dodanie → Addytywny klin |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Komponent bryła pierwotna do dodania](/PartDesign_CompPrimitiveAdditive/pl "PartDesign CompPrimitiveAdditive/pl"), [Subtraktywny klin](/PartDesign_SubtractiveWedge/pl "PartDesign SubtractiveWedge/pl") |
|  |

## Opis

Funkcja ta wstawia pierwotny klin do aktywnej Zawartości jako pierwszy element lub łączy go z istniejącymi elementami.

![](/images/PartDesign_AdditiveWedge_example.png)

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_AdditiveWedge.svg) **Addytywny klin**. **Uwaga**: Addytywny klin jest częścią menu narzędzi o nazwie **Utwórz bryłę pierwotną do dodania**. Po uruchomieniu programu FreeCAD, Addytywny prostopadłościan wyświetlany jest na pasku narzędzi domyślnie. Aby przejść do funkcji Klin, kliknij strzałkę w dół na widocznej ikonce i wybierz z menu opcję Addytywny walec.
2. Ustaw parametry bryły i [dołączenia](/Part_EditAttachment/pl "Part EditAttachment/pl").
3. Kliknij OK.
4. Pod aktywnym obiektem Zawartość pojawi się element Klin.

## Opcje

Klin można edytować po jego utworzeniu na dwa sposoby:

* Klikając go dwukrotnie w drzewie modelu lub klikając prawym przyciskiem myszy i wybierając **Edytuj bryłę pierwotną** z menu podręcznego. Spowoduje to wyświetlenie parametrów bryły pierwotnej.
* Poprzez [Edytor właściwości](/Property_editor/pl "Property editor/pl").

## Właściwości

Korzystając z domyślnego rozmieszczenia, poniższe dane wejściowe są następujące:

* DANE**X min/max**: Rozpiętość osi X ściany bazowej.
* DANE**Y min/max**: Rozpiętość wysokości klina
* DANE**Z min/max**: rozpiętość osi Z ściany bazowej
* DANE**X2 min/max**: Rozpiętość osi X ściany górnej
* DANE**Z2 min/max**: Rozpiętość osi Z górnej ściany

## Piramidy

Kliny mogą być używane do tworzenia piramid poprzez ustawienie DANE**X2 min/max** i DANE**Z2 min/max** tak, aby wartość min = max.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveWedge/pl&oldid=1278723>"