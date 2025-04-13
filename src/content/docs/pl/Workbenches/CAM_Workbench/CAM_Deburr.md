---
title: CAM Usuwanie zadziorów
---
|  |
| --- |
| CAM: Usuwanie zadziorów |
| Lokalizacja w menu |
| CAM → Usuwanie zadziorów |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.18 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/CAM_Deburr.svg) **Usuwanie zadziorów** służy przede wszystkim do gratowania krawędzi.

## Użycie

1. Istnieje kilka sposobów wywołania tego polecenia:
   * Wciśnij przycisk ![](/images/CAM_Deburr.svg) Usuwanie zadziorów.
   * Wybierz opcję **CAM → ![](/images/CAM_Deburr.svg) Usuwanie zadziorów** z menu.
2. Otwiera się panel zadań **Usuwanie zadziorów**. Zobacz [Opcje](#Opcje).
3. Wybierz **Geometrię bazową**.
4. Określ wymagane parametry.
5. Naciśnij przycisk OK.

## Opcje

Po wybraniu geometrii w sekcji **Geometria bazowa** panelu zadań możesz wcisnąć przycisk Zastosuj aby zobaczyć ścieżkę narzędzia zdefiniowaną z domyślnymi opcjami.

Następnie możesz sprawdzić swoje głębokości/zejścia i wysokości, jak z innymi poleceniami ścieżki.

Ostatnim krokiem jest aktywacja sekcji **Operacja**, w której można określić następujące parametry:

* **Kontroler narzędzia**: Wybierz narzędzie do użycia.
* **Tryb chłodzenia**: Wybierz `Żaden`, `Zalewanie` lub `Mgiełka`.
* **Directions**: Wybierz `CW` (zgodnie z ruchem wskazówek zegara) lub `CCW` (przeciwnie do ruchu wskazówek zegara).
* **W**: Wymiar krawędzi.
* **h**: Przesunięcie od dolnej części narzędzia. To funkcja bezpieczeństwa, ponieważ jeśli końcówka narzędzia znajdzie się powyżej krawędzi, nie będzie już cięła.

:   ![Interfejs usuwania zadziorów z opcjami](/images/Path_Deburr_Operations-tab.png)

## Właściwości

### Dane

Podstawa

* DANE**Placement**:
* DANE**Label**: Dostosowywalna nazwa obiektu (UTF-8)

Usuwanie zadziorów

* DANE**Direction**: `CCW` lub `CW`.
* DANE**Entry Point**: Punkt wejścia operacji; jeśli ustawiony na 2, będzie przechodzić w 2 narożnikach od domyślnego.
* DANE**Extra depth**: Dodatkowa głębokość (**h** w panelu zadań).
* DANE (Hidden)**Join**: Sposób łączenia segmentów fazy, `Round` lub `Miter`.
* DANE (Hidden)**Side**: Strona operacji, `Outside` lub `Inside`.
* DANE**Width**: Szerokość fazy (**W** w panelu zadań).

Głębokość

* DANE**Clearance Height**: Wysokość potrzebna do przejścia ponad zaciskami i przeszkodami (domyślnie ustawione na `OpStockZMax + SetupSheet.ClearanceHeightOffset`).
* DANE**Safe Height**: Wysokość, powyżej której dozwolone są szybkie ruchy (ustawione na `OpStockZMax + SetupSheet.SafeHeightOffset`).
* DANE**Start Depth**: Początkowa głębokość narzędzia, pierwsza głębokość cięcia w osi Z.
* DANE**Step Down**: Krok narzędzia w dół.

Wartości operacyjne

* DANE**Op Stock ZMax**: Maksymalna wartość Z materiału.
* DANE**Op Stock ZMin**: Minimalna wartość Z materiału.
* DANE**Op Tool Diameter**: Średnica narzędzia.

Ścieżka

* DANE**Active**: Ustaw na `Fałsz`, aby zapobiec generowaniu kodu przez operację.
* DANE**Base**: Geometria bazowa dla tej operacji, krawędzie lub powierzchnia.
* DANE**Comment**: Opcjonalny komentarz do tej operacji.
* DANE**Coolant Mode**: Tryb chłodzenia dla tej operacji.
* DANE**Cycle Time**: Szacunkowy czas cyklu dla tej operacji.
* DANE**Tool Controller**: Kontroler narzędzia, który będzie używany do obliczenia ścieżki.
* DANE**User Label**: Etykieta przypisana przez użytkownika.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Deburr/pl&oldid=1480211>"