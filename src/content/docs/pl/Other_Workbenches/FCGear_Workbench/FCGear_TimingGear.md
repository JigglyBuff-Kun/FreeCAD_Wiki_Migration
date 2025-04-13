---
title: FCGear Koło pasa zębatego
---

|                                                      |
| ---------------------------------------------------- |
| FCGear: Koło pasa zębatego                           |
| Lokalizacja w menu                                   |
| Gear → Koło pasa zębatego                            |
| Środowisko pracy                                     |
| [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl") |
| Domyślny skrót                                       |
| Brak                                                 |
| Wprowadzono w wersji                                 |
| v0.16                                                |
| Zobacz także                                         |
| _brak_                                               |
|                                                      |

## Opis

Celem kół zębatych rozrządu jest umożliwienie wałowi rozrządu i wału korbowego obracanie łańcucha rozrządu. Wał korbowy obraca się, aby poruszać tłokami w górę i w dół wewnątrz cylindrów. Wałek rozrządu obraca się, aby umożliwić otwieranie i zamykanie zaworów wlotowych i wylotowych w cylindrach. Te elementy są ważne dla prawidłowego sterowania rozrządem silnika.

Koła zębate są połączone z paskiem rozrządu lub łańcuchem rozrządu.

![](/images/Timing-Gear_example.png)

Powyżej: Koło pasa zębatego

## Użycie

1. Przejdź do środowiska pracy ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl").
2. Istnieje kilka sposobów na wywołanie polecenia:
   - Naciśnij przycisk ![](/images/FCGear_TimingGear.svg) **Koło pasa zębatego** na pasku narzędzi.
   - Wybierz z menu opcję **Gear → ![](/images/FCGear_TimingGear.svg) Koło pasa zębatego**.
3. Zmień parametry zębatki na wymagane _(patrz [Właściwości](#Właściwości))_.

## Właściwości

Obiekt Koło pasa zębatego wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Podstawowe

- DANE**wysokość** (`Length`): Domyślnie `5 mm`. Wartością domyślną jest szerokości koła zębatego.
- DANE**zęby** (`Integer`): Wartością domyślną jest `15`. Liczba zębów.
- DANE**typ** (`Enumeration`): Wartością domyślną jest `gt2`. Typ koła zębatego - podziałka profilu dla pasków zębatych _(patrz [Uwagi](#Uwagi))_.

Obliczone

- DANE**h** (`Length`): _(tylko do odczytu)_ Promieniowa wysokość zębów.
- DANE**offset** (`Length`): _(tylko do odczytu)_ Przesunięcie X punktu środkowego drugiego łuku.
- DANE**podziałka** (`Length`): _(tylko do odczytu)_ Skok koła zębatego.
- DANE**r0** (`Length`): _(tylko do odczytu)_ Promień pierwszego łuku.
- DANE**r1** (`Length`): _(tylko do odczytu)_ Promień drugiego łuku.
- DANE**rs** (`Length`): _(tylko do odczytu)_ Promień trzeciego łuku.
- DANE**u** (`Length`): _(tylko do odczytu)_ Różnica promieniowa między skokiem ... średnicą a głowicą koła zębatego.

Wersja

- DANE**Wersja** (`String`):

## Uwagi

- _typ_: Podziałka pasów zębatych _(odległość od środka zęba do środka kolejnego zęba)_ jest określona w typach. GT2 ma podziałkę 2 mm, GT3 - 3 mm, GT5 - 5 mm itd.

## Przydatne wzory

- _średnica wierzchołkowa_ = _średnica podziałowa_ + 2 \* _moduł_
- _długość pasa_ = 2 \* _rozstaw osi_ + *podziałka zębów pasa* : 2 \* _(zęby 1 + 2)_ + *podziałka zębów pasa²* : 4 \* pi² \* _rozstaw osi_ \* _(zęby 1 - 2)²_
- _rozstaw osi_ = *długość pasa* : 4 - *podziałka zębów pasa* : 8 \* _(zęby 1+2)_ + ¼ \* pierwiastek kwadratowy [*długość pasa* - ½ \* *podziałka zębów pasa* \* *(zęby 1+2)²* - 2 \* *podziałka zębów pasa²* \* *(zęby 1+2)²* : pi²]

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_TimingGear/pl&oldid=1350560>"
