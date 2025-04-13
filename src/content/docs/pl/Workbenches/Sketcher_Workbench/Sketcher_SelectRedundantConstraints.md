---
title: Szkicownik Wybierz zbędne wiązania
---
|  |
| --- |
| Szkicownik: Wybierz zbędne wiązania |
| Lokalizacja w menu |
| Szkic → Widok szkicu → Wybierz zbędne wiązania |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| Z P R |
| Wprowadzono w wersji |
| 0.15 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Sketcher_SelectRedundantConstraints.svg) **Zaznacz nadmiarowe wiązania** wybiera zbędne wiązania w szkicu.

Jeśli takie wiązania istnieją w szkicu, [sekcja komunikatów Solvera w oknie dialogowym Szkicownika](/Sketcher_Dialog/pl#Komunikaty_solvera "Sketcher Dialog/pl") wyświetla następujący komunikat:

* Wiązania nadmiarowe: (#, #, #)

Gdzie *(#, #, #)* to indeksy więzów. Kliknięcie podkreślonego tekstu spowoduje wybranie zbędnych wiązań.

Należy pamiętać, że szkic może mieć również nadmiarowe wiązania, jeśli wyświetlany jest jeden z innych [komunikatów solvera](/Sketcher_Dialog/pl#Komunikaty_solvera "Sketcher Dialog/pl").

## Użycie

1. Narzędzie można wywołać na kilka sposobów:
   * Kliknij podkreślony tekst w oknie dialogowym szkicownika, jak opisano powyżej.
   * Wybierz z menu opcję **Szkic → Widok szkicu → ![](/images/Sketcher_SelectRedundantConstraints.svg) Zaznacz nadmiarowe wiązania**.
   * Użyj skrótu klawiaturowego: Z, następnie P, a potem R.
2. Nadmiarowe ograniczenia zostaną zaznaczone.
3. Opcjonalnie kliknij w pustym obszarze w [widoku 3D](/3D_view/pl "3D view/pl"), aby usunąć zaznaczenie.

## Uwagi

* Zbędne wiązania muszą zostać usunięte ze szkicu.
* Zamiast proponowanych indeksów możliwe jest również usunięcie innych wiązań.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SelectRedundantConstraints/pl&oldid=1462218>"