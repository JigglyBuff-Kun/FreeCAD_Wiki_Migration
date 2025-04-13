---
title: Projekt Części Addytywny graniastosłup
---
|  |
| --- |
| Projekt Części: Addytywny graniastosłup |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez dodanie → Addytywny graniastosłup |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Komponent bryła pierwotna do dodania](/PartDesign_CompPrimitiveAdditive/pl "PartDesign CompPrimitiveAdditive/pl"), [Subtraktywny graniastosłup](/PartDesign_SubtractivePrism/pl "PartDesign SubtractivePrism/pl") |
|  |

## Opis

Funkcja ta wstawia pierwotny graniastosłup do aktywnej Zawartości jako pierwszy element lub łączy go z istniejącymi elementami.

![](/images/PartDesign_AdditivePrism_example.png)

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_AdditivePrism.svg) **Addytywny graniastosłup**. **Uwaga**: Addytywny graniastosłup jest częścią menu narzędzi o nazwie **Utwórz bryłę pierwotną do dodania**. Po uruchomieniu programu FreeCAD, Addytywny prostopadłościan wyświetlany jest na pasku narzędzi domyślnie. Aby przejść do funkcji Graniastosłup, kliknij strzałkę w dół na widocznej ikonce i wybierz z menu opcję Addytywny walec.
2. Ustaw parametry bryły i [dołączenia](/Part_EditAttachment/pl "Part EditAttachment/pl").
3. Kliknij OK.
4. Pod aktywnym obiektem Zawartość pojawi się element Torus.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditivePrism/pl&oldid=1278725>"