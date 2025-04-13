---
title: Projekt Części Addytywna sfera
---
|  |
| --- |
| Projekt Części: Addytywna sfera |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez dodanie → Addytywna sfera |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Komponent bryła pierwotna do dodania](/PartDesign_CompPrimitiveAdditive/pl "PartDesign CompPrimitiveAdditive/pl"), [Subtraktywna sfera](/PartDesign_SubtractiveSphere/pl "PartDesign SubtractiveSphere/pl") |
|  |

## Opis

Funkcja ta wstawia pierwotną sferę do aktywnej Zawartości jako pierwszy element lub łączy ją z istniejącymi elementami.

![](/images/PartDesign_AdditiveSphere_example.png)

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_AdditiveCylinder.svg) **Addytywna sfera**. **Uwaga**: Addytywna sfera jest częścią menu narzędzi o nazwie **Utwórz bryłę pierwotną do dodania**. Po uruchomieniu programu FreeCAD, Addytywny prostopadłościan wyświetlany jest na pasku narzędzi domyślnie. Aby przejść do funkcji Sfera, kliknij strzałkę w dół na widocznej ikonce i wybierz z menu opcję Addytywny walec.
2. Ustaw parametry bryły i [dołączenia](/Part_EditAttachment/pl "Part EditAttachment/pl").
3. Kliknij OK.
4. Pod aktywnym obiektem Zawartość pojawi się element Sfera.

## Opcje

Sferę można edytować po jej utworzeniu na dwa sposoby:

* Klikając go dwukrotnie w drzewie modelu lub klikając prawym przyciskiem myszy i wybierając **Edytuj bryłę pierwotną** z menu podręcznego. Spowoduje to wyświetlenie parametrów bryły pierwotnej.
* Poprzez [Edytor właściwości](/Property_editor/pl "Property editor/pl").

## Właściwości

* DANE**Dołączenie**: definiuje tryb dołączania, a także przesunięcie dołączania. Zobacz też [Część: Edycja mocowania](/Part_EditAttachment/pl "Part EditAttachment/pl").
* DANE**Etykieta**: Etykieta nadana obiektowi Sfery. Zmień zgodnie z własnymi potrzebami.
* DANE**Promień**: Promień sfery.
* DANE**Kąt1**: *(oznaczony jako **parametr V** w parametrach Primitywu)* dolne obcięcie kuli, równoległe do przekroju kołowego *(-90° w pełnej kuli)*.
* DANE**Kąt2**: *(nieoznaczony w parametrach Primitywu)* górne obcięcie sfery, równoległe do przekroju kołowego *(90° w pełnej sferze)*.
* DANE**Kąt3**: *(oznaczony jako **parameter U** w parametrach Primitywu)* kąt obrotu przekroju poprzecznego *(360° w pełnej kuli)*.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveSphere/pl&oldid=1279166>"