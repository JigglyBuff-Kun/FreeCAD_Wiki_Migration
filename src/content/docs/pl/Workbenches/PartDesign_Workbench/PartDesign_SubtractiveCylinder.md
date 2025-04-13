---
title: Projekt Części Subtraktywny walec
---
|  |
| --- |
| Projekt Części: Subtraktywny walec |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez odjęcie → Subtraktywny walec |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Komponent bryła pierwotna do odjęcia](/PartDesign_CompPrimitiveSubtractive/pl "PartDesign CompPrimitiveSubtractive/pl"), [Addytywny walec](/PartDesign_AdditiveCylinder/pl "PartDesign AdditiveCylinder/pl") |
|  |

## Opis

Funkcja ta wstawia pierwotny walec odejmowany od aktywnej Zawartości. Jego kształt jest odejmowany od istniejącej bryły.

![](/images/PartDesign_SubtractiveCylinder_example.svg)

*Po lewej: aktywna zawartość (A) pokazana w kolorze szarym i walec do odjęcia (B) pokazany w kolorze czerwonym z przeźroczystością. Wynik po prawej*.

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_SubtractiveCylinder.svg) **Subtraktywny walec**. **Uwaga**: Subtraktywny walec jest częścią menu narzędzi o nazwie **Utwórz bryłę pierwotną do odjęcia**. Po uruchomieniu programu FreeCAD, Subtraktywny prostopadłościan wyświetlany jest na pasku narzędzi domyślnie. Aby przejść do funkcji Walec, kliknij strzałkę w dół na widocznej ikonce i wybierz z menu opcję Subtraktywny walec.
2. Ustaw parametry bryły i [dołączenia](/Part_EditAttachment/pl "Part EditAttachment/pl").
3. Kliknij OK.
4. Pod aktywnym obiektem Zawartość pojawi się element Walec.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveCylinder/pl&oldid=1279229>"