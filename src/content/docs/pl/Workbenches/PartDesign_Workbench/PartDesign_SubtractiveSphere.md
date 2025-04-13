---
title: Projekt Części Subtraktywna sfera
---
|  |
| --- |
| Projekt Części: Subtraktywna sfera |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez odjęcie → Subtraktywna sfera |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Komponent bryła pierwotna do odjęcia](/PartDesign_CompPrimitiveSubtractive/pl "PartDesign CompPrimitiveSubtractive/pl"), [Addytywna sfera](/PartDesign_AdditiveSphere/pl "PartDesign AdditiveSphere/pl") |
|  |

## Opis

Funkcja ta wstawia pierwotną sferę odejmowaną od aktywnej Zawartości. Jej kształt jest odejmowany od istniejącej bryły.

![](/images/PartDesign_SubtractiveSphere_example.svg)

*Po lewej: aktywna zawartość (A) pokazana w kolorze szarym i sfera do odjęcia (B) pokazana w kolorze czerwonym z przeźroczystością. Wynik po prawej*.

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_SubtractiveSphere.svg) **Subtraktywna sfera**. **Uwaga**: Subtraktywna sfera jest częścią menu narzędzi o nazwie **Utwórz bryłę pierwotną do odjęcia**. Po uruchomieniu programu FreeCAD, Subtraktywny prostopadłościan wyświetlany jest na pasku narzędzi domyślnie. Aby przejść do funkcji Sfera, kliknij strzałkę w dół na widocznej ikonce i wybierz z menu opcję Addytywny walec.
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

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveSphere/pl&oldid=1279152>"