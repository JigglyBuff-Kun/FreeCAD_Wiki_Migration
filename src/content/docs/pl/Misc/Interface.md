---
title: Interfejs użytkownika
---
## Wprowadzenie

[Interfejs](/Interface "Interface") FreeCAD oparty jest na Qt, znanym graficznym zestawie narzędzi interfejsu użytkownika *(GUI)*, szczególnie używanym w Linuksie, ale dostępnym również w systemie Windows i MacOS.

![](/images/FreeCAD_interface_base_divisions.svg)

Standardowy interfejs w wersji 0.19.

Główne okno aplikacji można podzielić z grubsza na 11 sekcji:

1. [Widok 3D](/3D_view "3D view").
2. W górnej części [Widok połączony](/Combo_view "Combo view"), który zawiera [Widok drzewa](/Tree_view "Tree view") oraz [Panel zadań](/Task_panel "Task panel").
3. W dolnej części [Widoku połączonoeg](/Combo_view "Combo view"), jest do dyspozycji [Edytor właściwości](/Property_editor "Property editor").
4. [Widok wyboru opcji](/Selection_view "Selection view").
5. [Widok raportu](/Report_view "Report view").
6. [Python console](/Python_console "Python console").
7. [Pasek stanu pracy](/Status_bar "Status bar").
8. Obszar paska narzędzi, zobacz następujące informacje na pasku narzędziowym
9. [Przełącznik Środowiska pracy](/Std_Workbench "Std Workbench"), który sam w sobie jest paskiem narzędzi.
10. [Menu standardowe](/Standard_Menu "Standard Menu").

## Elementy interfejsu użytkownika

Podobnie jak wiele innych programów, FreeCAD zawiera standardowy pasek menu, a następnie serię pasków narzędzi i paneli, w których znajdują się narzędzia użytkownika.

### Menu

Dostępne są następujące menu [standardowe menu](/Standard_Menu "Standard Menu"): [**Plik**](/Std_File_Menu "Std File Menu"), [**Edycja**](/Std_Edit_Menu "Std Edit Menu"), [**Widok**](/Std_View_Menu "Std View Menu"), [**Narzędzia**](/Std_Tools_Menu "Std Tools Menu"), [**Makro**](/Std_Macro_Menu "Std Macro Menu"), [**Okna**](/Std_Windows_Menu "Std Windows Menu"), [**Pomoc**](/Std_Help_Menu "Std Help Menu").

### Paski narzędzi

Standardowe paski narzędzi, które pojawiają się w interfejsie to:

* Pasek narzędzi do plików: narzędzia do pracy z plikami, otwierania dokumentów, kopiowania, wklejania, cofania i ponownego wykonywania czynności.
* [Pasek narzędzi Środowiska pracy](/Std_Workbench "Std Workbench"): zawiera jeden widżet do wyboru aktywnego [Środowiska pracy](/Workbenches "Workbenches").
* Pasek narzędzi Makro: narzędzia do nagrywania, edycji i wykonywania [Makrodefinicji](/Macros "Macros").
* Pasek narzędzi widoku: narzędzia do kontrolowania wyglądu obiektów w [Widok 3D](/3D_view "3D view").
* Pasek narzędzi struktury: narzędzia do organizowania obiektów w dokumencie i tworzenia łączy do dodatkowych dokumentów.

Można je włączyć i wyłączyć klikając prawym przyciskiem myszy na puste miejsce na jednym z pasków narzędzi i wybierając żądany element, lub z menu **Widok → Paski narzędzi**.

### Panele

Panelami głównymi, które umożliwiają pracę z obiektami są:

* [Widok 3D](/3D_view/pl "3D view/pl"): obszar, na którym narysowana jest geometria 2D i 3D.
* [Widok połączony](/Combo_view/pl "Combo view/pl"): panel, który zawiera [widok drzewa](/Tree_view/pl "Tree view/pl"), [panel zadań](/Task_panel/pl "Task panel/pl"), oraz [edytor właściwości](/Property_editor/pl "Property editor/pl").
* [Widok drzewa](/Tree_view/pl "Tree view/pl"): element, który pokazuje wszystkie obiekty w dokumencie i ich historię parametryczną.
* [Panel zadań](/Task_panel/pl "Task panel/pl"): panel, który pokazuje różne działania i opcje w zależności od wybranego narzędzia do rysowania.
* [Edytor właściwości](/Property_editor/pl "Property editor/pl"): miejsce, w którym właściwości obiektu są modyfikowane.
* [Widok wyboru](/Selection_view/pl "Selection view/pl"): panel, który pokazuje aktualnie wybrane elementy.
* [Widok raportu](/Report_view/pl "Report view/pl"): pole tekstowe, które pokazuje różne wiadomości z aplikacji i jej narzędzi.
* [Konsola Pythona](/Python_console/pl "Python console/pl"): edytor, który umożliwia interaktywne uruchamianie kodu [Python](/Python/pl "Python/pl"), aby zobaczyć wyniki bezpośrednio w [widoku 3D](/3D_view/pl "3D view/pl").
* [Pasek statusu](/Status_bar/pl "Status bar/pl"): pasek, który pokazuje pewne komunikaty z aplikacji i posiada selektor [nawigacja myszy](/Mouse_navigation/pl "Mouse navigation/pl").
* [Widok DAG](/DAG_view/pl "DAG view/pl"): alternatywa dla [Widok drzewa](/Tree_view/pl "Tree view/pl"), który pokazuje relacje pomiędzy różnymi obiektami za pomocą wykresu.

Z wyjątkiem widoku 3D, wszystkie te elementy można włączać i wyłączać klikając prawym przyciskiem myszy na puste miejsce w jednym z górnych pasków narzędzi i wybierając żądany element. Innym sposobem jest wybór menu **Widok → Panele**.

Aby aktywować i dezaktywować pasek stanu, użyj menu **Widok → Pasek stanu**.

### Pozostałe elementy

Inne użyteczne interfejsy i okna zawierają:

* [Inspektor sceny](/Std_SceneInspector/pl "Std SceneInspector/pl"): panel, który pokazuje węzły Coin3D tworzące [scenogram](/Scenegraph/pl "Scenegraph/pl"). Dla zaawansowanych użytkowników i programistów pomocne może być rozwiązywanie problemów związanych z bezpośrednią manipulacją sceną i obiektami utworzonymi w [widok 3D](/3D_view/pl "3D view/pl").
* [Wykres zależności](/Std_DependencyGraph/pl "Std DependencyGraph/pl"): okno pokazujące wykres zależności wszystkich obiektów w dokumencie, utworzonych za pomocą programu pomocniczego [Graphviz](https://graphviz.org/). Pomocne jest rozpoznanie problemów w tworzeniu obiektów, takich jak zależności kołowe, które mogą nie być całkowicie widoczne z [widok drzewa](/Tree_view/pl "Tree view/pl") lub [widok DAG](/DAG_view/pl "DAG view/pl").

### Możliwość dostosowania

Paski narzędzi mogą mieć więcej lub mniej przycisków. Niestandardowe paski narzędzi można tworzyć w celu przygotowania mieszanki różnych narzędzi i przechowywania opracowanych makrodefinicji.

Opcje te znajdują się w menu, **Narzędzia → Dostosuj**. Patrz [Dostosowywanie interfejsu](/Interface_Customization "Interface Customization").

Retrieved from "<http://wiki.freecad.org/index.php?title=Interface/pl&oldid=1076004>"