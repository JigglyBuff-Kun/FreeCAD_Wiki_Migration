---
title: Projekt Części Subtraktywny graniastosłup
---
|  |
| --- |
| Projekt Części: Subtraktywny graniastosłup |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez odjęcie → Subtraktywny graniastosłup |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Komponent bryła pierwotna do odjęcia](/PartDesign_CompPrimitiveSubtractive/pl "PartDesign CompPrimitiveSubtractive/pl"), [Addytywny graniastosłup](/index.php?title=V/pl&action=edit&redlink=1 "V/pl (page does not exist)") |
|  |

## Opis

Funkcja ta wstawia pierwotny graniastosłup odejmowany od aktywnej Zawartości. Jego kształt jest odejmowany od istniejącej bryły.

![](/images/PartDesign_SubtractivePrism_example.svg)

*Po lewej: aktywna zawartość (A) pokazana w kolorze szarym i graniastosłup do odjęcia (B) pokazany w kolorze czerwonym z przeźroczystością. Wynik po prawej*.

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_SubtractivePrism.svg) **Subtraktywny graniastosłup**. **Uwaga**: Subtraktywny graniastosłup jest częścią menu narzędzi o nazwie **Utwórz bryłę pierwotną do dodania**. Po uruchomieniu programu FreeCAD, Subtraktywny prostopadłościan wyświetlany jest na pasku narzędzi domyślnie. Aby przejść do funkcji Graniastosłup, kliknij strzałkę w dół na widocznej ikonce i wybierz z menu opcję Subtraktywny graniastosłup.
2. Ustaw parametry bryły i [dołączenia](/Part_EditAttachment/pl "Part EditAttachment/pl").
3. Kliknij OK.
4. Pod aktywnym obiektem Zawartość pojawi się element Graniastosłup.

## Opcje

Możliwe jest tworzenie przekrzywionych graniastosłupów poprzez określenie kątów w odniesieniu do wektora normalnego wybranego dołaczenia.

Graniastosłup można edytować po jego utworzeniu na dwa sposoby:

* Klikając go dwukrotnie w drzewie modelu lub klikając prawym przyciskiem myszy i wybierając **Edytuj bryłę pierwotną** z menu podręcznego. Spowoduje to wyświetlenie parametrów bryły pierwotnej.
* Poprzez [Edytor właściwości](/Property_editor/pl "Property editor/pl").

## Właściwości

* DANE**Dołączenie**: definiuje tryb dołączania, a także przesunięcie dołączania. Zobacz też [Część: Edycja mocowania](/Part_EditAttachment/pl "Part EditAttachment/pl").
* DANE**Etykieta**: Etykieta nadana obiektowi Granistosłup. Zmień zgodnie z własnymi potrzebami.
* DANE**Wielokąt**: liczba boków w wielokącie przekroju pryzmatu.
* DANE**Obwód**: [promień obwodu](https://en.wikipedia.org/wiki/Circumscribed_circle) wielokąta przekroju poprzecznego graniastosłupa.
* DANE**Wysokość**: wysokość pryzmatu.
* DANE**Pierwszy kąt**: kąt w pierwszym kierunku.
* DANE**Drugi kąt**: kąt w drugim kierunku.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractivePrism/pl&oldid=1279221>"