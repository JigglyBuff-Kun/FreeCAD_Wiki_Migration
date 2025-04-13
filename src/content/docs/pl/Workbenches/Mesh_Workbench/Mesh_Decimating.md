---
title: Siatka Uprość
---
|  |
| --- |
| Siatka: Decymacja |
| Lokalizacja w menu |
| Siatki → Decymacja ... |
| Środowisko pracy |
| [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie **Uprość** zmniejsza liczbę ścian w obiektach siatkowych.

## Użycie

1. Wybierz jeden lub więcej obiektów siatki.
2. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Mesh_Decimating.svg) **Uprość**.
   * Wybierz polecenie z menu **Siatki → ![](/images/Mesh_Decimating.svg) Uprość ...**.
3. Otworzy się panel zadań **Upraszczanie**.
4. Określ opcję **Redukcja**:
   * Jeśli zaznaczono tylko jeden obiekt siatkowy i wybrano opcję **Liczba bezwzględna**:
     + Przesuń suwak lub wpisz liczbę, aby określić nieprzekraczalną liczbę ścian.
   * W pozostałych przypadkach:
     + Przesuń suwak lub wprowadź liczbę, aby określić procentową liczbę ścian.
     + Określ parametr **Tolerancja**. Parametr tolerancji w procesie upraszczania siatki działa jak ustawienie kontroli jakości. Wyobraź sobie, że próbujesz uprościć szczegółową rzeźbę do bardziej szorstkiego kształtu bez utraty zbyt wielu ważnych cech. Ustawienie wyższej tolerancji pozwala na większe zmiany i większe uproszczenie, co skutkuje bardziej chropowatym kształtem. Niższa tolerancja oznacza, że proces upraszczania będzie bardziej ostrożny i wprowadzi tylko niewielkie poprawki, utrzymując kształt bliższy oryginałowi. Jeśli tolerancja jest ustawiona na zero, proces uprości kształt tak bardzo, jak to możliwe w ramach swoich zasad, dążąc do równowagi między zmniejszeniem złożoności a zachowaniem rozpoznawalności oryginalnej formy.
5. Naciśnij przycisk OK, aby zakończyć polecenie.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Decimating/pl&oldid=1445642>"