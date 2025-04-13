---
title: Jak zainstalować dodatkowe środowiska pracy
---
|  |
| --- |
| Ćwiczenie |
| Temat |
| Programowanie |
| Poziom trudności |
| Średniozaawansowany |
| Czas wykonania |
| 15 minut |
| Autorzy |
| [r-frank](/User:R-Frank "User:R-Frank") |
| Wersja FreeCAD |
| Wszystkie |
| Pliki z przykładami |
| brak |
| Zobacz również |
| *-* |
|  |

## Opis

Zaawansowani użytkownicy rozszerzyli FreeCAD o różne niestandardowe [zewnętrzne środowiska](/External_workbenches/pl "External workbenches/pl") pracy, które nie są zintegrowane z podstawowym kodem źródłowym, ale są łatwe do zainstalowania na istniejącej dystrybucji FreeCAD. Tutaj omówimy metody instalacji dla różnych systemów operacyjnych.

*Uwaga:* Począwszy od wersji 0.17, FreeCAD posiada ![](/images/Std_AddonMgr.svg) [Menadżer dodatków](/Std_AddonMgr "Std AddonMgr") w menu **Przybory → Menadżer dodatków**, który umożliwia instalację zarówno makrodefinicji, jak i środowisk pracy. Poniższe instrukcje są wymagane tylko wtedy, gdy chcesz zainstalować środowisko pracy samodzielnie. Może to być konieczne, jeśli z jakiegoś powodu Menedżer dodatków nie działa, ale masz dostęp do środowiska roboczego pobranego jako pakiet .zip.

## Instalacja w środowisku Windows

Jak zainstalować dodatkowe środowiska pracy i dodatki w systemie Windows

### Instalacja samodzielna

*Uwaga:* Ta metoda jest możliwa, ale nie jest konieczna po wprowadzeniu [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"). Niemniej jednak, informacje tutaj zawarte mogą być nadal przydatne dla niektórych.

* Pobierz środowisko pracy z GitHub, klikając przycisk Klonuj lub Pobierz na stronie GitHub *(prawy górny róg)* i wybierając "Pobierz ZIP".
* Rozpakuj pobrane archiwum na lokalnym dysku twardym.
* W programie FreeCAD zlokalizuj ścieżkę makra, wybierając **Edycja → Preferencje → Python → Makropolecenia** i poszukaj pozycji *Ścieżka do plików makrodefinicji*.
* Domyślna ścieżka makrodefinicji to %APPDATA%\FreeCAD, którą zwykle jest C:\Users\\'username*\Appdata\Roaming\FreeCAD**.*
* W katalogu makr utwórz *(jeśli jeszcze nie istnieje)* folder o nazwie "Mod".
* W folderze Mod utwórz folder z nazwą środowiska pracy, na przykład "Curves".
* Teraz przenieś rozpakowane pliki i podfoldery środowiska pracy do właśnie utworzonego folderu środowiska pracy.
* Po ponownym uruchomieniu FreeCAD powinieneś mieć teraz wpis w okienku wyboru [środowiska pracy](/Std_Workbench/pl "Std Workbench/pl").

**Dodatkowe zalecenia dotyczące aktualizacji środowisk pracy**

W systemie Windows, podczas aktualizacji już zainstalowanego środowiska pracy, system zachowuje stare pliki .py jako .pyc. Ponieważ może to prowadzić do problemów, zaleca się odinstalowanie środowiska pracy, ponowne uruchomienie FreeCAD i zainstalowanie nowej wersji środowiska pracy.

## Instalacja w środowisku Linux

Jak zainstalować dodatkowe środowiska pracy i dodatki w systemie Linux

### Przy użycu Git

Dodając [community-ppa](https://launchpad.net/~freecad-community/+archive/ubuntu/ppa) w ppa-manager.
  
Instalacja środowiska roboczego poprzez Synaptic Packet Manager.

```
$ sudo apt-get install git python-numpy python-pyside
$ mkdir ~/.FreeCAD/Mod
$ cd ~/.FreeCAD/Mod
$ git clone  https://github.com/tomate44/CurvesWB.git

```

W programie FreeCAD pojawi się teraz nowe środowisko pracy o nazwie "CurvesWB". Po zainstalowaniu użyj Git, aby zaktualizować je do najnowszej wersji:

```
$ cd ~/.FreeCAD/Mod/CurvesWB
$ git pull
$ rm *.pyc

```

### Instalacja samodzielna

*Uwaga:* Ta metoda jest możliwa, ale nie jest konieczna po wprowadzeniu [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"). Niemniej jednak, informacje tutaj zawarte mogą być nadal przydatne dla niektórych.

* Pobierz środowisko pracy z GitHub, klikając przycisk Klonuj lub Pobierz na stronie GitHub *(prawy górny róg)* i wybierając "Pobierz ZIP".
* Rozpakuj pobrane archiwum na lokalnym dysku twardym.
* W programie FreeCAD zlokalizuj ścieżkę makra, wybierając **Edycja → Preferencje → Python → Makropolecenia** i poszukaj pozycji *Ścieżka do plików makrodefinicji*.
* Domyślna ścieżka makrodefinicji to *(ukryty)* katalog **./.FreeCAD/** w twoim katalogu domowym.
* W katalogu makr utwórz *(jeśli jeszcze nie istnieje)* folder o nazwie "Mod".
* W folderze Mod utwórz folder z nazwą środowiska pracy, na przykład "Curves".
* Teraz przenieś rozpakowane pliki i podfoldery środowiska pracy do właśnie utworzonego folderu środowiska pracy.
* Po ponownym uruchomieniu FreeCAD powinieneś mieć teraz wpis w okienku wyboru [środowiska pracy](/Std_Workbench/pl "Std Workbench/pl").

## Instalacja w środowisku Mac

Jak zainstalować dodatkowe środowiska pracy i dodatki w systemie macOS

### Instalacja samodzielna

*Uwaga:* Ta metoda jest możliwa, ale nie jest konieczna po wprowadzeniu [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"). Niemniej jednak, informacje tutaj zawarte mogą być nadal przydatne dla niektórych.

Na potrzeby tego przykładu powiedzmy, że wybrałeś środowisko pracy [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl") jako zewnętrzne środowisko pracy, które chcesz zainstalować:

* Wybierz i pobierz repozytorium git wybranego zewnętrznego środowiska pracy jako plik ZIP.
* Istnieją dwie możliwe lokalizacje dla dodatkowych środowisk pracy "Mods":

1. Wszyscy użytkownicy: /Applications/FreeCAD.app/Contents/Resources/Mod
2. Tylko bieżący użytkownik: /Users/myusername/Library/Application Support/FreeCAD/Mod

* Jeśli używasz Findera do ręcznej nawigacji do lokalizacji Wszyscy użytkownicy w aplikacjach, będziesz musiał
  + przejść do /Applications" i wybrać FreeCAD.app
  + kliknąć prawym przyciskiem myszy i wybrać "Pokaż zawartość pakietu", pojawi się nowe okno z folderem o nazwie "Zawartość"
  + Pojedyncze kliknięcie na folderze "Zawartość", a następnie na "Zasoby" i podwójne kliknięcie, aby otworzyć folder "Mod".
* Gdy znajdziesz się w folderze "Mod", którego chcesz użyć, utwórz nowy folder o nazwie "Curves".
* Rozpakuj pobrane repozytorium do folderu "Mod/Curves".

## Rozwiązywanie problemów ogólnych

* Nie używaj znaków specjalnych (na przykład niemieckich umlautów) w nazwie użytkownika systemu Windows, w przeciwnym razie FreeCAD nie rozpozna plików i folderów w ścieżce makra.
* Jeśli już skonfigurowałeś nazwę użytkownika ze znakami specjalnymi, utwórz nową nazwę użytkownika lub wskaż ścieżkę makra do katalogu bez znaków specjalnych.
* Przejdź do menu **Edycja → Preferencje ... → Środowiska pracy** i upewnij się, że środowisko pracy nie jest ustawione jako niewidoczne.
* W przypadku systemów 32-bitowych i FreeCAD 0.16.6706, po próbie instalacji dodatkowe środowiska robocze mogą nie być dostępne. W takim przypadku
  + trzymaj [widok raportu](/Report_view/pl "Report view/pl") otwarty podczas uruchamiania FreeCAD i przeczytaj błąd,
  + zobacz ten wątek na forum [Assembly2 w wersji: 0.16.5602 *(Git)*](http://forum.freecadweb.org/viewtopic.php?t=12839#p102933).

Retrieved from "<http://wiki.freecad.org/index.php?title=How_to_install_additional_workbenches/pl&oldid=1297234>"