---
title: Dodaj środowisko pracy do Menadżera dodatków
---
## Wprowadzenie

Przedstawiono tutaj instrukcje krok po kroku, jak dodać środowisko pracy zakodowane w Python do [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").

* Lokalne repozytorium Git.
* Zdalne repozytorium Git. Obsługiwane hosty git to [GitHub](https://github.com), [GitLab](https://about.gitlab.com/), [Framagit](https://framagit.org/public/projects) i [Debian Salsa](https://salsa.debian.org/public).
* Git musi być zainstalowany.

## Włącz tryb deweloperski

1. Otwórz [Edytor preferencji](/Preferences_Editor "Preferences Editor"): wybierz z menu opcję **Edycja → ![](/images/Std_DlgPreferences.svg) Preferencje ...**.
2. Wybierz opcję **![](/images/Std_AddonMgr.svg) Menadżer dodatków** na lewym pasku.
3. W zakładce **Opcje menedżera dodatków** zaznacz pole wyboru **Tryb dewelopera dodatków**. Spowoduje to włączenie przycisku Narzędzia programisty ... w menedżerze dodatków.
4. Naciśnij przycisk OK, aby zamknąć Edytor preferencji.

## Utwórz plik package.xml

1. Otwórz [Menadżer dodatków](/Std_AddonMgr "Std AddonMgr"): wybierz opcję **Narzędzia → ![](/images/Std_AddonMgr.svg) Menadżer dodatków** z menu.
2. Naciśnij przycisk Narzędzia programisty ....
3. Otworzy się okno dialogowe **Narzędzia dla twórców dodatków**.  
    ![](/images/Addon_Manager_Addon_Developer_Tools_Dialog.png)
4. Wprowadź następujące dane:
   * **Ścieżka do dodatku**: Ścieżka do lokalnego repozytorium git.
   * **Nazwa dodatku**: Ta nazwa pojawi się na liście w menedżerze dodatków.
   * **Opis**: Analogicznie.
   * **Wersja**: Analogicznie.
   * **URL repozytorium**
   * **Gałąź podstawowa**
   * **URL README**: Rekomendowane.
   * **Ikonka**: Ikonka musi być częścią repozytorium.
5. Press the ![](/images/List-add.svg) przycisk na dole okna dialogowego.
6. The **Zawartość elementu** otwiera się okno dialogowe.

![](/images/Addon_Manager_Content_Item_Dialog.png)

1. **Typ treści** powinien być ustawiony na `Workbench`.
2. Zaznacz pole wyboru **To jest jedyny element w dodatku**.
3. Wpisz **Nazwa klasy środowiska pracy**. Jest to nazwa klasy określona w pliku InitGui.py.
4. Dla **Katalog podrzędny** wpisz `./`.
5. Naciśnij przycisk OK, aby zamknąć okno dialogowe.
6. Naciśnij przycisk Zapisz, aby zamknąć okno dialogowe **Narzędzia dla twórców dodatków** i zapisać plik package.xml.
7. Naciśnij przycisk ![](/images/Process-stop.svg) Close, aby zamknąć Menedżer dodatków.
8. Prześlij utworzony plik do zdalnego repozytorium.

## Dodaj środowisko pracy do pliku .gitmodules

1. Utwórz rozwidlenie <https://github.com/FreeCAD/FreeCAD-addons>.
2. Utwórz nową gałąź.
3. Edytuj plik .gitmodules, aby uwzględnić nowy dodatek, w kolejności alfabetycznej.
4. Prześlij nową gałąź do GitHub.
5. Prześlij Pull Request do repozytorium FreeCAD-Addons z nowym plikiem .gitmodules.

## Zobacz również

* [Tworzenie środowiska pracy](/Workbench_creation/pl "Workbench creation/pl")
* [Metadane pakietu](/Package_Metadata/pl "Package Metadata/pl"): Szczegółowe informacje o pliku package.xml.

Retrieved from "<http://wiki.freecad.org/index.php?title=Add_Workbench_to_Addon_Manager/pl&oldid=1417678>"