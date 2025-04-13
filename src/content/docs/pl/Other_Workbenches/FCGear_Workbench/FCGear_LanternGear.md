---
title: FCGear Koło drabinkowe
---

|                                                      |
| ---------------------------------------------------- |
| Gear: Koło drabinkowe                                |
| Lokalizacja w menu                                   |
| Gear → Koło drabinkowe                               |
| Środowisko pracy                                     |
| [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl") |
| Domyślny skrót                                       |
| _brak_                                               |
| Wprowadzono w wersji                                 |
| v0.16                                                |
| Zobacz także                                         |
| _brak_                                               |
|                                                      |

## Opis

Zębatka latarniowa jest specjalną formą zębatki cykloidalnej, w której koło toczne i koło podziałowe są równej wielkości. Ponadto zęby większego koła w przekładni są zastąpione przez cylindry. Małe koło otrzymuje zazębienie cykloidalne. W ten sposób powstaje jednostronne przełożenie punktowe. Przekładnie latarniowe mogą mieć tylko uzębienie proste.

Ponieważ ich konstrukcja jest bardzo prosta, należą one do najstarszych form przekładni. Przekładnie latarniowe są stosowane, gdy wymagane są duże przełożenia, na przykład w przekładniach obrotowych młynów lub dźwigów do transportu drewna.

Koło zębate latarniowe z łańcuchami rolkowymi to ekonomiczna i wytrzymała alternatywa dla napędów zębatkowych. Prowadząc rozciągnięty łańcuch koła zębatego stycznie wzdłuż koła zębatego, ruch liniowy łańcucha jest przekształcany w ruch obrotowy koła. I odwrotnie, ruch liniowy łańcucha można również uzyskać poprzez ruch obrotowy koła zębatego latarni _(motocykl / rower)_.

![](/images/Lantern-Gear_example.png)

Powyżej: Przekładnia latarniowa

## Użycie

1. Przejdź do środowiska pracy ![](/images/FCGear_workbench_icon.svg) [FCGear](/FCGear_Workbench/pl "FCGear Workbench/pl").
2. Istnieje kilka sposobów na wywołanie polecenia:
   - Naciśnij przycisk ![](/images/FCGear_LanternGear.svg) **Koło drabinkowe** na pasku narzędzi.
   - Wybierz z menu opcję **Gear → ![](/images/FCGear_LanternGear.svg) Koło drabinkowe**.
3. Zmień parametry zębatki na wymagane _(patrz [Właściwości](#Właściwości))_.

## Właściwości

### Dane

Obiekt LanternGear wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

dokładność

- DANE**num_profiles** (`Integer`): Domyślnie `10`. Wartość zwykle nie musi być zmieniana.

Podstawowe

- DANE**bolt_radius** (`Length`): Domyślnie `1 mm`. Średnica cylindra na obracającym się dysku, który działa jako drugie "koło zębate".
- DANE**szerokość** (`Length`): Domyślnie `5 mm`. Wartość szerokości koła zębatego.
- DANE**moduł** (`Length`): Domyślnie `1 mm`. Moduł jest stosunkiem średnicy referencyjnej koła zębatego podzielonej przez liczbę zębów _(patrz [Uwagi](#Uwagi))_.

gear_parameter

- DANE**zęby** (`Integer`): Domyślnie `15`. Liczba zębów.

Tolerancja

- DANE**head** (`Float`): Domyślnie `0`.

Wersja

- DANE**Wersja** (`String`):

## Uwagi

- _module_: Korzystając z wytycznych ISO (Międzynarodowej Organizacji Normalizacyjnej), rozmiar modułu jest określany jako jednostka reprezentująca rozmiary zębów przekładni. Moduł (m): m = 1 (p = 3,1416), m = 2 (p = 6,2832), m = 4 (p = 12,566). Jeśli pomnożymy moduł przez Pi, otrzymamy Pitch - Skok (p). Skok to odległość między odpowiednimi punktami na sąsiednich zębach.

## Przydatne wzory

_średnica koła wierzchołkowego_ = _moduł_ \* _(zęby +2)_.

- _średnica podziałowa_ = _moduł_ \* _zęby_
- _rozstaw osi_ = *średnica podziałowa (średnica kół drabinkowych 1 + 2)* : 2

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_LanternGear/pl&oldid=1350558>"
