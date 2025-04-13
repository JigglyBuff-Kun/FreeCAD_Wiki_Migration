---
title: Projekt Części Addytywny walec
---
|  |
| --- |
| Projekt Części: Addytywny walec |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez dodanie → Addytywny walec |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Komponent bryła pierwotna do dodania](/PartDesign_CompPrimitiveAdditive/pl "PartDesign CompPrimitiveAdditive/pl"), [Subtraktywny walec](/PartDesign_SubtractiveCylinder/pl "PartDesign SubtractiveCylinder/pl") |
|  |

## Opis

Funkcja ta wstawia pierwotny walec do aktywnej Zawartości jako pierwszy element lub łączy go z istniejącymi elementami.

![](/images/PartDesign_AdditiveCylinder_example.png)

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_AdditiveCylinder.svg) **Addytywny walec**. **Uwaga**: Addytywny walec jest częścią menu narzędzi o nazwie **Utwórz bryłę pierwotną do dodania**. Po uruchomieniu programu FreeCAD, Addytywny prostopadłościan wyświetlany jest na pasku narzędzi domyślnie. Aby przejść do funkcji Walec, kliknij strzałkę w dół na widocznej ikonce i wybierz z menu opcję Addytywny walec.
2. Ustaw parametry bryły i [dołączenia](/Part_EditAttachment/pl "Part EditAttachment/pl").
3. Kliknij OK.
4. Pod aktywnym obiektem Zawartość pojawi się element Prostopadłościanu.

## Opcje

Możliwe jest tworzenie przekrzywionych walców poprzez określenie kątów w odniesieniu do wektora normalnego wybranego dołaczenia. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

Walec można edytować po jego utworzeniu na dwa sposoby:

* Klikając go dwukrotnie w drzewie modelu lub klikając prawym przyciskiem myszy i wybierając **Edytuj bryłę pierwotną** z menu podręcznego. Spowoduje to wyświetlenie parametrów bryły pierwotnej.
* Poprzez [Edytor właściwości](/Property_editor/pl "Property editor/pl").

## Właściwości

* DANE**Dołączenie**: definiuje tryb dołączania, a także przesunięcie dołączania. Zobacz też [Część: Edycja mocowania](/Part_EditAttachment/pl "Part EditAttachment/pl").
* DANE**Etykieta**: Etykieta nadana obiektowi Walca. Zmień zgodnie z własnymi potrzebami.
* DANE**Promień**: wartość promienia cylindra.
* DANE**Kąt**: kąt obrotu przekroju *(360° tworzy pełny walec)*.
* DANE**Wysokość**: wysokość walca wzdłuż jego osi.
* DANE**Pierwszy kąt**: kąt w pierwszym kierunku. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")
* DANE**Drugi kąt**: kąt w drugim kierunku. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveCylinder/pl&oldid=1279168>"