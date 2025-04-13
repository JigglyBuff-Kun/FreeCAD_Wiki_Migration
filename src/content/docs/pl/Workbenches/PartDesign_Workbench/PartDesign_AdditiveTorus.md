---
title: Projekt Części Addytywny torus
---
|  |
| --- |
| Projekt Części: Addytywny torus |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez dodanie → Addytywny torus |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Komponent bryła pierwotna do dodania](/PartDesign_CompPrimitiveAdditive/pl "PartDesign CompPrimitiveAdditive/pl"), [Subtraktywny torus](/PartDesign_SubtractiveTorus/pl "PartDesign SubtractiveTorus/pl") |
|  |

## Opis

Funkcja ta wstawia pierwotny torus do aktywnej Zawartości jako pierwszy element lub łączy go z istniejącymi elementami.

![](/images/PartDesign_AdditiveTorus_example.png)

## Użycie

1. Naciśnij przycisk ![](/images/PartDesign_AdditiveTorus.svg) **Addytywny torus**. **Uwaga**: Addytywny torus jest częścią menu narzędzi o nazwie **Utwórz bryłę pierwotną do dodania**. Po uruchomieniu programu FreeCAD, Addytywny prostopadłościan wyświetlany jest na pasku narzędzi domyślnie. Aby przejść do funkcji Torus, kliknij strzałkę w dół na widocznej ikonce i wybierz z menu opcję Addytywny walec.
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

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveTorus/pl&oldid=1279160>"