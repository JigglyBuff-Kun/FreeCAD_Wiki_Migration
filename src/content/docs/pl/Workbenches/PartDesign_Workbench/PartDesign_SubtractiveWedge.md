---
title: Projekt Części Subtraktywny klin
---
|  |
| --- |
| Projekt Części: Subtraktywny klin |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez odjęcie → Subtraktywny klin |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Komponent bryła pierwotna do odjęcia](/PartDesign_CompPrimitiveSubtractive/pl "PartDesign CompPrimitiveSubtractive/pl"), [Addytywny klin](/PartDesign_AdditiveWedge/pl "PartDesign AdditiveWedge/pl") |
|  |

## Opis

Funkcja ta wstawia pierwotny klin odejmowany od aktywnej Zawartości. Jego kształt jest odejmowany od istniejącej bryły.

![](/images/PartDesign_SubtractiveWedge_example.svg)

*Po lewej: aktywna zawartość (A) pokazana w kolorze szarym i klin do odjęcia (B) pokazany w kolorze czerwonym z przeźroczystością. Wynik po prawej*.

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_SubtractiveWedge.svg) **Subtraktywny klin**. **Uwaga**: Subtraktywny klin jest częścią menu narzędzi o nazwie **Utwórz bryłę pierwotną do odjęcia**. Po uruchomieniu programu FreeCAD, na pasku narzędzi domyślnie wyświetlany jest Subtraktywny prostopadłościan. Aby przejść do funkcji Klin, kliknij strzałkę w dół na widocznej ikonce i wybierz z menu opcję Subtraktywny klin.
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

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveWedge/pl&oldid=1425172>"