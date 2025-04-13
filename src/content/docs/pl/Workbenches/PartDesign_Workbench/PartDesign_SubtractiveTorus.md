---
title: Projekt Części Subtraktywny torus
---
|  |
| --- |
| Projekt Części: Subtraktywny torus |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez odjęcie → Subtraktywny torus |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Komponent bryła pierwotna do odjęcia](/PartDesign_CompPrimitiveSubtractive/pl "PartDesign CompPrimitiveSubtractive/pl"), [Addytywny torus](/PartDesign_AdditiveTorus/pl "PartDesign AdditiveTorus/pl") |
|  |

## Opis

Funkcja ta wstawia pierwotny torus odejmowany od aktywnej Zawartości. Jego kształt jest odejmowany od istniejącej bryły.

![](/images/PartDesign_SubtractiveTorus_example.svg)

*Po lewej: aktywna zawartość (A) pokazana w kolorze szarym i torus do odjęcia (B) pokazany w kolorze czerwonym z przeźroczystością. Wynik po prawej*.

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_SubtractiveTorus.svg) **Subtraktywny torus**. **Uwaga**: Subtraktywny torus jest częścią menu narzędzi o nazwie **Utwórz bryłę pierwotną do odjęcia**. Po uruchomieniu programu FreeCAD, Subtraktywny prostopadłościan wyświetlany jest na pasku narzędzi domyślnie. Aby przejść do funkcji Torus, kliknij strzałkę w dół na widocznej ikonce i wybierz z menu opcję Subtraktywny torus.
2. Ustaw parametry bryły i [dołączenia](/Part_EditAttachment/pl "Part EditAttachment/pl").
3. Kliknij OK.
4. Pod aktywnym obiektem Zawartość pojawi się element Torus.

## Opcje

Torus można edytować po jego utworzeniu na dwa sposoby:

* Klikając go dwukrotnie w drzewie modelu lub klikając prawym przyciskiem myszy i wybierając **Edytuj bryłę pierwotną** z menu podręcznego. Spowoduje to wyświetlenie parametrów bryły pierwotnej.
* Poprzez [Edytor właściwości](/Property_editor/pl "Property editor/pl").

## Właściwości

* DANE**Dołączenie**: definiuje tryb dołączania, a także przesunięcie dołączania. Zobacz też [Część: Edycja mocowania](/Part_EditAttachment/pl "Part EditAttachment/pl").
* DANE**Etykieta**: Etykieta nadana obiektowi Stożka. Zmień zgodnie z własnymi potrzebami.
* DANE**Promiień1**: Promień umownej orbity, wokół której obraca się przekrój kołowy. *(Odległość między środkiem torusa a środkiem obracającego się przekroju)*
* DANE**Promiień2**: Promień okrągłego przekroju definiującego kształt torusa.
* DANE**Kąt1**: *(oznaczony jako **parametr V** w parametrach Prymitywu)* dolne obcięcie torusa, równoległe do przekroju kołowego *(-180° w pełnym torusie)*. Błąd w źródłach powoduje nieoczekiwane wyniki przy zmianie parametru Kąt1.
* DANE**Kąt2**: *(nieoznaczone w parametrach Prymitywu)* górne obcięcie elipsoidy, równoległe do przekroju kołowego *(180° w pełnym torusie)*. Błąd w źródłach powoduje nieoczekiwane wyniki przy zmianie parametru Kąt2.
* DANE**Kąt3**: *(oznaczony jako **parametr U** w parametrach Prymitywu)* kąt obrotu przekroju kołowego *(360° dla pełnego torusa)*.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveTorus/pl&oldid=1279223>"