---
title: Arkusz Kalkulacyjny Definiuj alias
---
|  |
| --- |
| Arkusz Kalkulacyjny: Definiuj alias |
| Lokalizacja w menu |
| - |
| Środowisko pracy |
| [Arkusz Kalkulacyjny](/Spreadsheet_Workbench/pl "Spreadsheet Workbench/pl") |
| Domyślny skrót |
| Ctrl + Shift + A |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Spreadsheet_SetAlias.svg) **Definiuj alias** otwiera okno dialogowe, w którym można ustawić alias dla komórki. Zamiast używać przypisanej nazwy komórki, takiej jak A2, B3 lub C4, można użyć nazwy niestandardowej.

## Użycie

1. Upewnij się, że jest aktywny [arkusz kalkulacyjny](/Spreadsheet_CreateSheet/pl "Spreadsheet CreateSheet/pl").
2. Wybierz komórkę.
3. Istnieje kilka sposobów wywołania tego narzędzia:
   * Naciśnij przycisk ![](/images/Spreadsheet_SetAlias.svg) Definiuj alias.
   * Użyj skrótu klawiaturowego: Ctrl+Shift+A.
4. Wprowadź alias:
   * Dozwolone są tylko znaki alfanumeryczne i znak podkreślenia (od `A` do `Z`, od `a` do `z`, od `0` do `9` oraz `_`).
   * Pierwszy znak musi być literą.
   * Nie wolno używać 1 lub 2 wielkich liter, po których następuje od 1 do 5 cyfr, na przykład `AB123`, ponieważ jest to zarezerwowane dla adresu komórki.
   * Sekwencje znaków, które są jednostkami, nie są dozwolone. Na przykład `W` jest nieprawidłowym aliasem, ponieważ jest to jednostka dla [Wata](https://en.wikipedia.org/wiki/Watt). Ponieważ FreeCAD obsługuje wiele jednostek, najlepiej jest unikać krótkich aliasów. Zobacz stronę [Wyrażenia](/Expressions/pl#Jednostki "Expressions/pl").
   * Używanie stałych matematycznych `pi` i `e` jako aliasów prowadzi do błędów i należy ich unikać.
   * Nie używaj spacji w aliasach, ponieważ będą one również prowadzić do błędów.

Retrieved from "<http://wiki.freecad.org/index.php?title=Spreadsheet_SetAlias/pl&oldid=1507053>"