---
title: Std Środowiska pracy
---
|  |
| --- |
| Std: Środowiska pracy |
| Lokalizacja w menu |
| Widok → Środowiska pracy |
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

Polecenie **Środowiska pracy** aktywuje wybrane [Środowisko pracy](/Workbenches/pl "Workbenches/pl").

![](/images/Std_Workbench_ComboBox_Icons_And_Text.png)

Domyślny typ rozwijanej listy selektora środowisk pracy.

![](/images/Std_Workbench_TabBar_Icons_Only.png)

Opcjonalny typ Paska zakładek selektora środowisk pracy (tutaj wyświetlany tylko z ikonami) [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

## Użycie

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Wybierz środowisko pracy z listy rozwijanej lub paska zakładek ([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")) na pasku narzędzi Środowisko.
   * Wciśnij przycisk ![](/images/List-add.svg)![](/images/Toolbar_flyout_arrow.svg) na pasku zakładek aby z wyświetlonego menu wybrać środowisko pracy, które zostało wyłączone w [preferencjach](/Preferences_Editor/pl#Dostępne_środowiska_pracy "Preferences Editor/pl").
   * Wybierz środowisko pracy z menu podrzędnego **Widok → Środowiska pracy**.

## Uwagi

* Dodatkowe [zewnętrzne środowiska pracy](/External_workbenches/pl "External workbenches/pl") mogą być pobrane za pomocą ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").

## Ustawienia

Zapoznaj się z informacjami na stronie: [Edytor preferencji](/Preferences_Editor/pl "Preferences Editor/pl").

* [strona z powiązanymi preferencjami](/Preferences_Editor/pl#Dostępne_środowiska_pracy "Preferences Editor/pl") jest dostępna: **Edycja → Preferencje... → Środowiska pracy→ Dostępne środowiska pracy**. Możesz zmienić **Startowe środowisko pracy**,**Typ selektora środowisk pracy** i więcej. Przycisk ![](/images/List-add.svg)![](/images/Toolbar_flyout_arrow.svg) na pasku zakładek TabBar daje dostęp do tej strony przez menu.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby zmienić środowisko pracy należy użyć metody `activateWorkbench` modułu FreeCADGui.

```
import FreeCADGui

FreeCADGui.activateWorkbench("PartDesignWorkbench")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Workbench/pl&oldid=1494391>"