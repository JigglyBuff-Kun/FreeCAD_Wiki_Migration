---
title: Std Okno dialogowe rejestruj makropolecenie
---
|  |
| --- |
| Std: Rejestrator makrodefinicji |
| Lokalizacja w menu |
| Makrodefinicje → Rejestrator makrodefinicji ... |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Zatrzymaj nagrywanie makra](/Std_MacroStopRecord/pl "Std MacroStopRecord/pl") |
|  |

## Opis

Polecenie **Rejestrator makrodefinicji** uruchamia sesję nagrywania [makrodefinicji](/Macros/pl "Macros/pl"), podczas której działania użytkownika są zapisywane w makrze FreeCAD, pliku z rozszerzeniem .FCMacro. Makrodefinicja może być później odtworzona, wykonana, w celu powtórzenia zarejestrowanych działań.

![](/images/Std_DlgMacroRecord_dialog.png)

Okienko dialogowe Rejestrator makrodefinicji

## Użycie

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Std_DlgMacroRecord.svg) Rejestrator makrodefinicji ....
   * Wybierz z menu opcję **Makrodefinicje → ![](/images/Std_DlgMacroRecord.svg) Rejestrator makrodefinicji ...**.
2. Otwiera się okno dialogowe Rejestrator makrodefinicji.
3. Wprowadź nazwę dla makra w polu wejściowym **Nazwa makrodefinicji**.
4. Opcjonalnie zmień **ścieżkę do pliku makrodefinicji**, naciskając przycisk ....
5. Przycisk Stop nie działa w tej chwili.
6. Naciśnij przycisk Nagrywanie, aby zamknąć okno dialogowe i rozpocząć sesję nagrywania.
7. Obraz przycisku polecenia zmienia się na ![](/images/Std_MacroStopRecord.svg), a tekst menu zmienia się na **Zatrzymaj nagrywanie makra**.
8. Wykonaj czynności, które chcesz nagrać.
9. Aby zakończyć sesję nagrywania wykonaj jedną z następujących czynności:
   * Naciśnij przycisk ![](/images/Std_MacroStopRecord.svg) [Zatrzymaj nagrywanie makra](/Std_MacroStopRecord/pl "Std MacroStopRecord/pl").
   * Naciśnij przycisk ![](/images/Std_MacroStopRecord.svg) Rejestrator makrodefinicji.
   * Wybierz z menu opcję **Makrodefinicje → ![](/images/Std_MacroStopRecord.svg) Zatrzymaj nagrywanie makra**.

## Opcje

* Po wyświetleniu okna dialogowego Rejestrator makrodefinicji: naciśnij przycisk Esc lub Zamknij, aby przerwać wykonywanie polecenia.

## Uwagi

* Aby wykonać nagraną makrodefinicję należy użyć polecenia [Wykonaj makro](/Std_DlgMacroExecute/pl "Std DlgMacroExecute/pl").
* Aby dowiedzieć się więcej o makrach zobacz stronę [Makrodefinicje](/Macros/pl "Macros/pl").

## Ustawienia

Zobacz też: [Edytor preferencji](/Preferences_Editor/pl "Preferences Editor/pl").

* Ścieżkę do makrodefinicji można również zmienić w preferencjach: **Edycja → Preferencje ... → Python → Makropolecenia → Ścieżka do plików makrodefinicji**.
* W większości przypadków niepożądane jest rejestrowanie akcji, które nie zmieniają modelu: pod **Edycja → Preferencje ... → Python → Makropolecenia → Polecenia GUI** wykonaj jedną z następujących czynności:
  + Aby wykluczyć te działania odznacz pole wyboru **Nagrywanie poleceń GUI**.
  + Aby uwzględnić je tylko jako komentarze zaznacz oba pola wyboru **Nagrywanie poleceń GUI** i **Zarejestruj jako komentarz**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DlgMacroRecord/pl&oldid=1468910>"