---
title: Projekt Części Subtraktywny stożek
---
|  |
| --- |
| Projekt Części: Subtraktywny stożek |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez odjęcie → Subtraktywny stożek |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Komponent bryła pierwotna do odjęcia](/PartDesign_CompPrimitiveSubtractive/pl "PartDesign CompPrimitiveSubtractive/pl"), [Addytywny stożek](/PartDesign_AdditiveCone/pl "PartDesign AdditiveCone/pl") |
|  |

## Opis

Funkcja ta wstawia pierwotny stożek odejmowany od aktywnej Zawartości. Jego kształt jest odejmowany od istniejącej bryły.

![](/images/PartDesign_SubtractiveCone_example.png)

*Po lewej: aktywna zawartość (A) pokazana w kolorze szarym i stożek do odjęcia (B) pokazany w kolorze czerwonym z przeźroczystością. Wynik po prawej*.

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_SubtractiveCone.svg) **Subtraktywny stożek**. **Uwaga**: Subtraktywny stożek jest częścią menu narzędzi o nazwie **Utwórz bryłę pierwotną do odjęcia**. Po uruchomieniu programu FreeCAD, Subtraktywny prostopadłościan wyświetlany jest na pasku narzędzi domyślnie. Aby przejść do funkcji Stożek, kliknij strzałkę w dół na widocznej ikonce i wybierz z menu opcję Subtraktywny stożek.
2. Ustaw parametry bryły i [dołączenia](/Part_EditAttachment/pl "Part EditAttachment/pl").
3. Kliknij OK.
4. Pod aktywnym obiektem Zawartość pojawi się element Stożek.

## Opcje

Stożek można edytować po jego utworzeniu na dwa sposoby:

* Klikając go dwukrotnie w drzewie modelu lub klikając prawym przyciskiem myszy i wybierając **Edytuj bryłę pierwotną** z menu podręcznego. Spowoduje to wyświetlenie parametrów bryły pierwotnej.
* Poprzez [Edytor właściwości](/Property_editor/pl "Property editor/pl").

## Właściwości

* DANE**Dołączenie**: definiuje tryb dołączania, a także przesunięcie dołączania. Zobacz też [Część: Edycja mocowania](/Part_EditAttachment/pl "Part EditAttachment/pl").
* DANE**Etykieta**: Etykieta nadana obiektowi Stożka. Zmień zgodnie z własnymi potrzebami.
* DANE**Promień1**: wartość promienia u podstawy stożka.
* DANE**Promień2**: wartość promienia na wierzchołku stożka. Wartość większa od zera tworzy stożek ścięty.
* DANE**Wysokość**: wysokość stożka wzdłuż jego osi.
* DANE**Kąt**: kąt obrotu przekroju *(360° dla pełnego stożka)*.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveCone/pl&oldid=1279227>"