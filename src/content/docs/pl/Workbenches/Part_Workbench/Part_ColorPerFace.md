---
title: Część Kolor dla ściany
---
|  |
| --- |
| Część: Kolor dla ściany |
| Lokalizacja w menu |
| Widok → Kolor dla ściany |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl"), [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wygląd zewnętrzny](/Std_SetAppearance/pl "Std SetAppearance/pl") |
|  |

## Opis

Polecenie **Kolor dla ściany** ustawia właściwości wyświetlania wybranych powierzchni. Aby dokonać zmiany całego obiektu, należy użyć [Wygląd zewnętrzny](/Std_SetAppearance/pl "Std SetAppearance/pl").

Ta strona została zaktualizowana do wersji 1.0.

![](/images/Part_ColorPerFace_Taskpanel.png)

Panel zadaniowy Ustaw wygląd dla ściany.

## Użycie

1. Wybierz pojedynczy obiekt.
2. Istnieje kilka sposobów wywołania polecenia:
   * Jeśli aktywne jest [środowisko pracy Część](/Part_Workbench/pl "Part Workbench/pl"): wciśnij przycisk ![](/images/Part_ColorPerFace.svg) Kolor dla ściany.
   * Wybierz opcję **Widok → ![](/images/Part_ColorPerFace.svg) Kolor dla ściany** z menu.
   * Wybierz opcję **![](/images/Part_ColorPerFace.svg) Ustaw wygląd dla ściany...** z menu kontekstowego [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Otworzy się panel zadań **Ustaw wygląd dla ściany**.
4. Wybierz jedną lub więcej ścian:
   * Przytrzymaj Ctrl, aby wybrać wiele ścian.
   * Opcjonalnie naciśnij przycisk Zaznacz obszarem, kliknij w pustym obszarze i przeciągnij pole zaznaczenia, aby zaznaczyć wszystkie powierzchnie należące do obiektu, które znajdują się *(częściowo)* wewnątrz obszaru prostokąta. Możliwe jest zaznaczenie wielu pól.
5. Wykonaj jedną z następujących czynności:
   * Wybierz materiał z listy.
     1. Opcjonalnie naciśnij przycisk Uruchom edytor, aby uruchomić [Edytor materiałów](/Material_Edit/pl "Material Edit/pl").
   * Określ **Wygląd niestandardowy**:
     1. Naciśnij przycisk ....
     2. Otworzy się okno dialogowe **Właściwości materiału**:  
        ![](/images/Material_Properties_Dialog.png)
     3. Te właściwości można edytować:
        + **Kolor otoczenia**: kolor cieni na obiekcie.
        + **Kolor rozproszenia**: rzeczywisty/podstawowy kolor obiektu.
        + **Kolor emisji**: kolor światła promieniującego z obiektu.
        + **Kolor odbicia**: kolor podświetlenia (odbicia) na połyskliwej powierzchni obiektu.
        + **Stopień połysku**
        + **Przezroczystość**
     4. Opcjonalnie naciśnij przycisk Reset, aby zmienić wygląd na taki, jaki został zdefiniowany przez materiał.
     5. Opcjonalnie naciśnij przycisk Domyślny, aby zmienić wygląd tak, aby odpowiadał bieżącym [preferencjom](/PartDesign_Preferences/pl#Shape_appearance "PartDesign Preferences/pl").
     6. Naciśnij przycisk Zamknij po zakończeniu.
   * Naciśnij przycisk Ustaw na domyślne, aby zmienić wygląd na taki, jaki został zdefiniowany przez materiał.
6. Opcjonalnie wybierz jedną lub więcej nowych powierzchni, których właściwości chcesz zmienić.
7. Naciśnij przycisk OK, aby zamknąć panel zadań i zakończyć polecenie.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ColorPerFace/pl&oldid=1540802>"