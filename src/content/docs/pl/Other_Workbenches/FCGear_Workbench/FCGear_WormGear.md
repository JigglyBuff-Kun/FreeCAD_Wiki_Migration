---
title: FCGear Przekładnia ślimakowa
---

|                                                                                     |
| ----------------------------------------------------------------------------------- |
| FCGear: Przekładnia ślimakowa                                                       |
| Lokalizacja w menu                                                                  |
| Gear → Przekładnia ślimakowa                                                        |
| Środowisko pracy                                                                    |
| [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl")                                |
| Domyślny skrót                                                                      |
| None                                                                                |
| Wprowadzono w wersji                                                                |
| v0.16                                                                               |
| Zobacz także                                                                        |
| [Koło zębate ewolwentowe](/PartDesign_InvoluteGear/pl "PartDesign InvoluteGear/pl") |
|                                                                                     |

## Opis

Ślimak można uznać za szczególny przypadek koła zębatego walcowego. Wyobraź sobie, że na kole zębatym czołowym znajduje się tylko jeden ząb. Teraz zwiększ kąt pochylenia linii śrubowej tak bardzo, że ząb owija się wokół koła zębatego czołowego kilka razy, zanim pojawi się po przeciwnej stronie. Rezultatem będzie ślimak z pojedynczym gwintem.

W przypadku ślimaka o pojedynczym rozruchu każdy pełny obrót _(360 stopni)_ ślimaka przesuwa przekładnię o jeden ząb. Zatem przekładnia z 24 zębami zapewni redukcję przełożenia 24:1. W przypadku ślimaka wielostartowego redukcja przekładni jest równa liczbie zębów koła zębatego podzielonej przez liczbę uruchomień ślimaka.

Ślimak może być używany tylko z kołem ślimakowym. Nazywa się to napędem ślimakowym. Podobnie jak inne przekładnie, napęd ślimakowy może zmniejszać prędkość obrotową lub przenosić wyższy moment obrotowy. Jedną z głównych zalet przekładni ślimakowych jest to, że mogą one przenosić ruch pod kątem 90 stopni. Przekładnia ślimakowa jest również samoblokująca.

![](/images/Worm-Gear_example.png)

Przekładnia ślimakowa _(liczba zębów 3)_

## Użycie

1. Przejdź do środowiska pracy ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl").
2. Istnieje kilka sposobów na wywołanie polecenia:
   - Naciśnij przycisk ![](/images/FCGear_WormGear.svg) **Przekładnia ślimakowa** na pasku narzędzi.
   - Wybierz z menu opcję **Gear → ![](/images/FCGear_WormGear.svg) Przekładnia ślimakowa**.
3. Zmień parametry zębatki na wymagane _(patrz [Właściwości](#Właściwości))_.

## Właściwości

Obiekt Przekładnia ślimakowa wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Podstawowe

- DANE**średnica** (`Length`): Wartością domyślną jest `5 mm`. Średnica podziałki.
- DANE**wysokość** (`Length`): Wartością domyślną jest `5 mm`. Wartość długości ślimaka.
- DANE**moduł** (`Length`): Wartością domyślną jest `1 mm`. Moduł jest stosunkiem średnicy referencyjnej koła zębatego podzielonej przez liczbę zębów _(patrz [Uwagi](#Uwagi))_.
- DANE**odwrotny_skok** (`Bool`): Wartością domyślną jest `Fałsz`, `Prawda` zmienia kierunek obrotu z prawego na lewy.
- DANE**zęby** (`Integer`): Wartością domyślną jest `3`. Ilość zębów _(patrz [Uwagi](#Uwagi))_.

Obliczone

- DANE**beta** (`Angle`): (tylko do odczytu) Kąt natarcia _(zobacz także informacje w sekcji [Uwagi](#Uwagi) i [Przydatne wzory](#Przydatne_wzory))_.

Ewolwenta

- DANE**kąt_natarcia** (`Angle`): Wartością domyślną jest `20 °` _(patrz sekcja [Uwagi](#Uwagi))_.

Tolerancja

- DANE**prześwit** (`Float`): Domyślną wartością jest `0.25`. _(patrz sekcja [Uwagi](#Uwagi))_.
- DANE**head** (`Float`): Domyślną wartością jest `0`. Ta wartość jest używana do zmiany wysokości zęba.

Wersja

- DANE**Wersja** (`String`):

## Uwagi

- _beta_: Jeśli kąt wyprzedzenia jest mniejszy niż 5°, jest to przekładnia samohamowalna. Typowym przykładem są kołki strojeniowe na gitarze lub ukulele.
- _luz_: W przypadku przekładni ślimakowej, luz jest odległością pomiędzy wierzchołkiem zęba ślimaka a nasadą zęba koła ślimakowego.
- _moduł_: Korzystając z wytycznych ISO _(Międzynarodowej Organizacji Normalizacyjnej)_, rozmiar modułu jest określany jako jednostka reprezentująca rozmiary zębów przekładni. Moduł _(m)_: m = 1 (p = 3,1416), m = 2 (p = 6,2832), m = 4 (p = 12,566). Jeśli pomnożymy moduł przez Pi, otrzymamy Skok (p). Skok to odległość między odpowiednimi punktami na sąsiednich zębach. Jeśli moduł zostanie zmieniony, zmieni się również kąt wyprzedzenia (_beta_).
- _zęby_: Liczba zębów w ślimacznicy nazywana jest liczbą zwojów. W związku z tym mówi się o ślimacznicach jedno-, dwu- lub wielokrotnych. Ogólnie rzecz biorąc, produkowane są głównie pojedyncze ślimacznice, ale w szczególnych przypadkach liczba startów może wynosić do czterech _(czasami także więcej)_. Jeśli zmienia się liczba zębów, zmienia się również _beta_.
- _pressure_parameter_: Parametr należy zmieniać tylko wtedy, gdy dostępna jest wystarczająca wiedza na temat geometrii przekładni.

## Przydatne wzory

- _beta_ (kąt natarcia)' **= arctan (_moduł_ \* *ilość zębów* : _pitchdiameter_ (średnica)'**)
- _podziałka osiowa_ = _pi_ \* _moduł_ \* _ilość zębów_
- _beta_ (kąt natarcia)' **= arctan (*podziałka osiowa* : (_pitchdiameter_ (średnica)'** \* _pi_))
- _długość ślimacznicy_ = 4,5 \* _moduł_ \* _pi_

## Koło ślimakowe

Koło ślimakowe musi być zaprojektowane ręcznie. W tym celu można użyć [koła zębatego ewolwentowego](/FCGear_InvoluteGear/pl "FCGear InvoluteGear/pl") aby uprościć konstrukcję. W każdym przypadku wymagana jest dogłębna znajomość typów przekładni.

![](/images/Worm-Gear_example3.png)

Ślimak z kołem ślimakowym.

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_WormGear/pl&oldid=1350562>"
