---
title: Szkicownik Sprawdź poprawność szkicu
---
|  |
| --- |
| Szkicownik: Sprawdź poprawność szkicu |
| Lokalizacja w menu |
| Szkic → Sprawdź poprawność szkicu ... |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Szkicownik: Wiązanie zbieżności punktów](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_ValidateSketch.svg) **Sprawdź poprawność szkicu** może być używane do analizowania i naprawiania szkicu, który nie jest już edytowalny lub ma nieprawidłowe wiązania, lub do dodawania brakujących [zbieżności punktów](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl") do szkicu utworzonego z importowanej geometrii, takiej jak pliki DXF. Może być również przydatny do zlokalizowania brakującej zbieżności w rodzimym szkicu, który generuje błąd **nie można zatwierdzić uszkodzonej powierzchni** podczas próby zastosowania elementu ze środowiska Projekt Części.

![](/images/Sketcher_ValidateSketch_taskpanel.png)

Panel zadań sprawdzania poprawności w środowisku pracy Szkicownik

## Użycie

1. Tego narzędzia nie można użyć na szkicu, który jest w trybie edycji. W razie potrzeby wyjdź z trybu edycji, wykonując jedną z następujących czynności:
   * Naciśnij przycisk ![](/images/Sketcher_LeaveSketch.svg) [Opuść szkic](/Sketcher_LeaveSketch/pl "Sketcher LeaveSketch/pl").
   * Naciśnij przycisk Zamknij w górnej części [panelu zadań](/Task_panel/pl "Task panel/pl").
   * Użyj skrótu klawiaturowego: Esc *(jeśli opcja jest włączona w [Preferencjach szkicownika](/Sketcher_Preferences/pl#Informacje_og.C3.B3lne "Sketcher Preferences/pl"))*.
2. W [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz szkic, który ma zostać sprawdzony, lub kliknij jedną z krawędzi w oknie [widoku 3D](/3D_view/pl "3D view/pl").
3. Aby otworzyć narzędzie sprawdzania poprawności szkicu, wykonaj jedną z następujących czynności:
   * Wybierz z menu opcję **Sketch → Validate sketch...**.
   * Naciśnij przycisk ![](/images/Sketcher_ValidateSketch.svg). Sprawdź poprawność szkicu *(nie jest dostępny w środowisku pracy [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"))*.
4. Zobacz [Opcje](#Opcje) poniżej, aby zapoznać się z dostępnymi operacjami.
5. Po zakończeniu naciśnij przycisk Zamknij.

1. To narzędzie nie może być używane, gdy szkic jest w trybie edycji. Aby zakończyć tryb edycji, zobacz informacje na stronie [Opuść szkic](/Sketcher_LeaveSketch/pl "Sketcher LeaveSketch/pl").
2. Wybierz szkic.
3. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_ValidateSketch.svg) **Sprawdź poprawność szkicu**.
   * Wybierz przycisk **Szkic → ![](/images/Sketcher_ValidateSketch.svg) Sprawdź poprawność szkicu ...** z menu.
4. Otworzy się panel zadań **Sprawdzenie poprawności szkicu**. Więcej informacji można znaleźć w sekcji [Opcje](#Opcje).
5. Naciśnij przycisk Zamknij, aby zakończyć.

## Opcje

### Brakujące zbieżności

Wyszukuje brakujące zbieżności dla nakładających się wierzchołków i dodaje je. Wciśnij przycisk Znajdź, pojawi się okno dialogowe informujące o liczbie znalezionych brakujących zbieżności, będą one widoczne w oknie widoku 3D jako żółte krzyżyki. Naciśnij przycisk OK, aby zamknąć okno dialogowe, a następnie naciśnij przycisk Napraw, aby dodać brakujące zbieżności.

W razie potrzeby w rozwijanym polu zdefiniować większą wartość tolerancji.

Naciśnij Podświetl otwarte wierzchołki, aby podświetlić wierzchołki, które nie spełniają tej tolerancji.

Tolerancja ta jest również używana przez proces Znajdź / Napraw.

Pozostaw pole wyboru "Ignoruj geometrię konstrukcji" zaznaczone, aby w analizie nie uwzględniać geometrii konstrukcyjnej.

### Nieprawidłowe wiązania

Sprawdza obecność zniekształconych wiązań.

Na przykład, jeśli istnieje wiązanie Okrąg-Linia-Styczna, ale odwołuje się ono do dwóch linii, jest uważane za niepoprawne.

*(To czasami zdarza się z powodu [problemu nazewnictwa topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl"), tj. zewnętrzna geometria zmienia typ)*.

Dokonuje również dodatkowych weryfikacji, np. pod kątem występowania nieważnych linków.

### Zdegenerowana geometria

Zdegenerowana geometria może być wynikiem działania solvera w szkicu.

Na przykład, jeśli linia jest zmuszona do skrócenia długości, tak aby stała się prawie punktem.

Inne przykłady: linia o zerowej długości lub okrąg/łuk o zerowym promieniu.

### Odwrócona geometria zewnętrzna

Odwrócona geometria zewnętrzna może się pojawić, ponieważ obsługa odwróconej geometrii została zmieniona mniej więcej w wersji 0.15.

Ten proces może być pomocny, jeśli szkice z zewnętrzną geometrią nie dają się rozwiązać z powodu tych zmian.

### Blokowanie orientacji wiązania

Realizowane są wiązania styczne i prostopadłe *(przez punkt)*.

Wewnętrznie działają one poprzez wiązanie kąta pomiędzy wektorami stycznymi. Na przykład w przypadku wiązania stycznego, kąt może wynosić 0 lub 180 stopni *(wektory współkierunkowe lub przeciwne)*. Rzeczywisty kąt jest zapamiętany w danych wiązania *(orientacja wiązania zablokowana)*, to chroni przed odwróceniem. Ale kąt może być wymazany *(orientacja wiązania odblokowana)* lub zaktualizowany; te narzędzia właśnie to robią.

Mechanizm blokujący zazwyczaj działa dobrze i narzędzie to nie powinno być potrzebne. **Powinno być używane tylko po wykonaniu kopii zapasowej otwartego dokumentu.**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ValidateSketch/pl&oldid=1388824>"