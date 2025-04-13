---
title: Projekt Części Addytywna elipsoida
---
|  |
| --- |
| Projekt Części: Addytywna elipsoida |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez dodanie → Addytywna elipsoida |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Komponent bryła pierwotna do dodania](/PartDesign_CompPrimitiveAdditive/pl "PartDesign CompPrimitiveAdditive/pl"), [Subtraktywna elipsoida](/PartDesign_SubtractiveEllipsoid/pl "PartDesign SubtractiveEllipsoid/pl") |
|  |

## Opis

Funkcja ta wstawia pierwotną elipsoidę do aktywnej Zawartości jako pierwszy element lub łączy ją z istniejącymi elementami.

![](/images/PartDesign_AdditiveEllipsoid_example.png)

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_AdditiveEllipsoid.svg) **Addytywna elipsoida**. **Uwaga**: Addytywna elipsoida jest częścią menu narzędzi o nazwie **Utwórz bryłę pierwotną do dodania**. Po uruchomieniu programu FreeCAD, Addytywna elipsoida wyświetlana jest na pasku narzędzi domyślnie. Aby przejść do funkcji Elipsoia, kliknij strzałkę w dół na widocznej ikonce i wybierz z menu opcję Addytywny walec.
2. Ustaw parametry bryły i [dołączenia](/Part_EditAttachment/pl "Part EditAttachment/pl").
3. Kliknij OK.
4. Pod aktywnym obiektem Zawartość pojawi się element Prostopadłościanu.

## Opcje

Elipsoidę można edytować po jej utworzeniu na dwa sposoby:

* Klikając ją dwukrotnie w drzewie modelu lub klikając prawym przyciskiem myszy i wybierając **Edytuj bryłę pierwotną** z menu podręcznego. Spowoduje to wyświetlenie parametrów bryły pierwotnej.
* Poprzez [Edytor właściwości](/Property_editor/pl "Property editor/pl").

## Właściwości

* DANE**Dołączenie**: definiuje tryb dołączania, a także przesunięcie dołączania. Zobacz też [Część: Edycja mocowania](/Part_EditAttachment/pl "Part EditAttachment/pl").
* DANE**Etykieta**: Etykieta nadana obiektowi Elipsoida. Zmień zgodnie z własnymi potrzebami.
* DANE**Promień1**: wartość promienia wzdłuż pionowej osi elipsoidy; domyślnie równoległa do osi Z.
* DANE**Promień2**: wartość promienia wzdłuż długości elipsoidy; domyślnie równoległa do osi X.
* DANE**Promień3**: wartość promienia wzdłuż szerokości elipsoidy; domyślnie równolegle do osi Y. Przy domyślnej wartości zero, elipsoida tworzy [spłaszczoną sferoidę](http://en.wikipedia.org/wiki/Oblate_spheroid). Ma to taką samą postać, jak gdyby parametr Promień3 był identyczny z Promień2.
* DANE**Kąt1**: *(oznaczony jako **parametr V** w parametrach Prymitywu)* dolne obcięcie elipsoidy, równoległe do przekroju kołowego *(-90° w pełnej sferoidzie)*.
* DANE**Kąt2**: *(nieoznaczone w parametrach Prymitywu)* górne obcięcie elipsoidy, równoległe do przekroju kołowego *(90° w pełnej sferoidzie)*.
* DANE**Kąt3**: *(oznaczony jako **parametr U** w parametrach Prymitywu)* kąt obrotu eliptycznego przekroju poprzecznego *(360° w pełnej sferoidzie)*.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveEllipsoid/pl&oldid=1279162>"