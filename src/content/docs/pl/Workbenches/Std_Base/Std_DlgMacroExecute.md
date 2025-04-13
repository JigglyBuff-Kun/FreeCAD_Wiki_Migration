---
title: Std Okno dialogowe Makrodefinicje ...
---
|  |
| --- |
| Std: Okno dialogowe Makrodefinicje |
| Lokalizacja w menu |
| Makrodefinicje → Makrodefinicje ... |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wykonaj makrodefinicję w trakcie edycji](/Std_DlgMacroExecuteDirect/pl "Std DlgMacroExecuteDirect/pl") |
|  |

## Opis

Polecenie **Makrodefinicje ...** otwiera okno dialogowe Wykonaj makro. W tym oknie dialogowym można wykonywać makra, edytować je i zarządzać nimi.

![](/images/Std_DlgMacroExecute_dialog.png)

The Execute macro dialog box

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Std_DlgMacroExecute.svg) Makrodefinicje ....
   * Wybierz opcję **Makrodefinicje → ![](/images/Std_DlgMacroExecute.svg) Makrodefinicje ...**z menu.
2. Zostanie otwarte okno dialogowe **Wykonaj makro**. Zobacz dostępne [opcje](#Opcje).

## Opcje

### Znajdź plik / Znajdź w plikach

:   [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

:   Te dwa pola wejściowe mogą być używane do filtrowania makrodefinicji z listy plików na karcie " Makrodefinicje użytkownika" lub " Makrodefinicje systemowe". Można użyć wyrażeń regularnych lub po prostu wprowadzić tekst. Wielkość liter nie ma znaczenia dla wszystkich dopasowań.

**Znajdź plik** filtruje listę według nazwy pliku. Tylko nazwy plików pasujące do wprowadzonego tekstu pojawią się na liście. **Znajdź w plikach** filtruje listę według zawartości pliku. Na liście pojawią się tylko pliki, których zawartość tekstowa odpowiada wprowadzonemu tekstowi.

:   Usuń cały tekst z pola wprowadzania filtra, aby go wyłączyć. Jeśli oba pola wprowadzania zawierają tekst, stosowane są oba filtry. Filtrowanie może spowodować wyświetlenie pustej listy.

### Makrodefinicje użytkownika

:   Zakładka **Makrodefinicje użytkownika** zawiera listę makrodefinicji dostępnych w lokalizacji **Makrodefinicje użytkownika**.

1. Kliknij makrodefinicję z listy, aby ją wybrać.
2. Nazwa wybranej makrodefinicji zostanie wyświetlona w polu **Nazwa makrodefinicji**.

### Makrodefinicje systemowe

:   Aby skorzystać z zakładki **Makrodefinicje systemowe** należy utworzyć folder o nazwie Macro jako folder podrzędny folderu bin, w którym zainstalowany jest FreeCAD i umieścić tam kilka makrodefinicji.

:   Aby znaleźć folder bin wpisz następujące polecenie w [konsoli Python](/Python_console/pl "Python console/pl"):

:   ```
    App.getHomePath()

    ```

1. Kliknij makrodefinicję z listy, aby ją wybrać.
2. Nazwa wybranej makrodefinicji zostanie wyświetlona w polu **Nazwa makrodefinicji**.

### Lokalizacja makrodefinicji użytkownika

1. Naciśnij przycisk ..., aby zmienić lokalizację pliku makroinstrukcji użytkownika.
2. Przejdź do innego folderu i wybierz go.

### Wykonaj

1. Aby wykonać dowolną makrodefinicję, należy postępować w jeden z następujących sposobów:
   * Zaznacz odpowiednia pozycję na liście i naciśnij przycisk Wykonaj.
   * Kliknij dwukrotnie makrodefinicję z listy.
2. Okno dialogowe zostanie zamknięte.
3. Makrodefinicja zostanie wykonana.

### Zamknij

1. Naciśnij Esc lub przycisk Zamknij, aby zamknąć okno dialogowe.

### Utwórz

1. Naciśnij przycisk Utwórz, aby utworzyć nowy plik makrodefinicji.
2. Wpisz nazwę w oknie dialogowym, które się pojawi. Nie musisz dołączać rozszerzenia .FCMacro.
3. Naciśnij klawisz Enter lub przycisk OK.
4. Oba okna dialogowe zostaną zamknięte.
5. Nowy plik zostanie otwarty w edytorze makr.

### Usuń

1. Zaznacz na liście makro, które chcesz usunąć.
2. Naciśnij przycisk Usuń.
3. Naciśnij przycisk Tak w oknie dialogowym potwierdzenia, które się pojawi.

### Edycja

1. Wybierz z listy makrodefinicję, która ma zostać poddana edycji.
2. Naciśnij przycisk Edycja.
3. Okno dialogowe zostanie zamknięte.
4. Wybrany plik zostanie otwarty w edytorze makroinstrukcji.

### Zmień nazwę

1. Zaznacz na liście pozycję, której nazwę chcesz zmienić.
2. Naciśnij przycisk Zmień nazwę.
3. Wpisz nową nazwę w oknie dialogowym, które się pojawi. Nie musisz dołączać rozszerzenia .FCMacro.
4. Naciśnij klawisz Enter lub przycisk OK.

### Duplikuj

1. Zaznacz na liście wybrane makropolecenie, które chcesz powielić.
2. Naciśnij przycisk Duplikuj.
3. Wpisz nową nazwę w oknie dialogowym, które się pojawi. Nie musisz dołączać rozszerzenia .FCMacro.
4. Naciśnij klawisz Enter lub przycisk OK.

### Pasek narzędzi

1. Wybierz z listy wybrane makropolecenie, które chcesz dodać do niestandardowego paska narzędzi.
2. Naciśnij przycisk Pasek narzędzi.
3. Dwa okna dialogowe "opis postępowania" poprowadzą Cię przez wymagane kroki. Więcej informacji na ten temat można znaleźć w opisie [Dostosowywanie interfejsu użytkownika do własnych potrzeb](/Interface_Customization/pl "Interface Customization/pl").

## Do pobrania

1. Naciśnij przycisk Pobierz, aby uruchomić [Menadżer dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").

## Uwagi

* Aby dowiedzieć się więcej o makropoleceniach, zobacz stronę [Makrodefinicje](/Macros/pl "Macros/pl").

## Ustawienia

Zobacz też: [Edytor preferencji](/Preferences_Editor/pl "Preferences Editor/pl").

Lokalizację plików makroinstrukcji użytkownika można również zmienić w preferencjach: **Edycja → Preferencje ... → Python → Makropolecenia → Ścieżka do plików makrodefinicji**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DlgMacroExecute/pl&oldid=1462241>"