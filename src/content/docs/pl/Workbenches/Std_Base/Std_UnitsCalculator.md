---
title: Std Przelicznik jednostek
---
|  |
| --- |
| Std: Przelicznik jednostek |
| Lokalizacja w menu |
| Przybory → Przelicznik jednostek |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie **Przelicznik jednostek** otwiera okno dialogowe Przelicznika jednostek. Narzędzie to może być używane do konwersji wartości z jednego systemu miar na inny.

![](/images/Std_UnitsCalculator_Dialog.png)

Okno dialogowe Przelicznika jednostek

## Użycie

1. Wybierz z menu opcję **Przybory → ![](/images/Std_UnitsCalculator.svg) Przelicznik jednostek ...**.
2. Otwiera się okno dialogowe Przelicznik jednostek. Więcej informacji znajdziesz w sekcji [Opcje](#Opcje).
3. Okno dialogowe jest niemodalne, co oznacza, że może pozostać otwarte podczas dalszej pracy z programem FreeCAD.
4. Naciśnij przycisk Zamknij, aby zamknąć okno dialogowe.

## Opcje

### Wiersz górny

1. Wprowadź wartość z jednostkami w pierwszym polu. Na przykład `10 mm`.
   * Jednostki z wykładnikami powinny być wprowadzane przy użyciu notacji `^`. Na przykład `1 m^2`.
   * Jeśli wartość wejściowa nie może być rozpoznana lub jeśli jednostki są nieznane, w polu **=>'** pojawi się komunikat "błąd składni".
2. Wprowadź jednostki docelowe w polu **jako**. Na przykład `in`.
   * Jeśli jednostki są nieznane, w polu **=>** pojawi się komunikat "nieznana jednostka".
   * Jeśli jednostki w pierwszym i drugim polu wejściowym nie pasują do siebie, w polu **=>** pojawi się komunikat o niedopasowaniu jednostek. W przykładzie jednostki pasują, ponieważ 'mm' i 'in' są jednostkami długości.
3. Jeżeli nie ma błędów w danych wejściowych, pole **=>** natychmiast pokaże wynik. Dla przykładowych wartości wynik to `0,394 in`.
4. Opcjonalnie naciśnij przycisk Kopiuj, aby skopiować zawartość pola **=>** do schowka. Wartość ta może być następnie np. wklejona w panelu zadań programu FreeCAD lub w oknie dialogowym.

### Obszar tekstowy

1. Konwersja wykonana w najwyższym wierszu może być skopiowana do obszaru tekstowego poprzez naciśnięcie Enter w pierwszym lub drugim polu wejściowym.
2. Obszar tekstowy może zawierać wiele konwersji, a jego zawartość można zaznaczyć i skopiować do schowka za pomocą skrótu Ctrl+C i wykorzystać w innych programach.

### Ilość

1. Wybierz opcję z listy rozwijanej **System jednostek**. Będzie to docelowy system jednostek. Wybierz **System preferencji** aby użyć systemu jednostek zdefiniowanego w [Preferencje](/Preferences_Editor/pl#Jednostki "Preferences Editor/pl").
2. Wybierz opcję z listy rozwijanej **Kategoria jednostek**.
3. Wpisz wartość z jednostkami w polu **Ilość**. Jednostki muszą być zgodne z kategorią jednostek.
4. Kliknij w polu wprowadzania **Miejsca dziesiętne** i naciśnij Enter, aby przeliczyć wartość w polu wprowadzania **Ilość**.

## Uwagi

* Zobacz stronę [Wyrażenia](/Expressions/pl#Jednostki "Expressions/pl"), aby uzyskać listę wszystkich znanych jednostek.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_UnitsCalculator/pl&oldid=1468383>"