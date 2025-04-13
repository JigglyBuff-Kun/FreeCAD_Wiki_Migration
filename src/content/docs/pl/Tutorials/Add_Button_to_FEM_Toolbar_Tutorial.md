---
title: Poradnik Dodaj przycisk do paska narzędzi MES
---

|                                                                                                        |
| ------------------------------------------------------------------------------------------------------ |
| Ćwiczenie                                                                                              |
| Temat                                                                                                  |
| MES                                                                                                    |
| Poziom trudności                                                                                       |
| Zaawansowany                                                                                           |
| Czas wykonania                                                                                         |
| 60 min                                                                                                 |
| Autorzy                                                                                                |
| [JohnWang](/index.php?title=User:JohnWang&action=edit&redlink=1 "User:JohnWang (page does not exist)") |
| Wersja FreeCAD                                                                                         |
| 0.19                                                                                                   |
| Pliki z przykładami                                                                                    |
|                                                                                                        |
| Zobacz również                                                                                         |
| _-_                                                                                                    |
|                                                                                                        |

## Wprowadzenie

Środowisko pracy MES ma paski narzędzi i menu. Ten poradnik pokazuje jak dodać testowy przycisk do paska narzędzi. Przedstawia też dodawanie obiektu do menu.

Zadanie można podzielić na cztery części:

- **Utwórz plik nowej ikony**.
- **Zarejestruj plik nowej ikony**. Wymagana modyfikacja w `src/Mod/Fem/Gui/Resources/Fem.qrc`
- **Utwórz klasę nowego polecenia**. Wymagana modyfikacja w `src/Mod/Fem/femcommands/commands.py`
- **Dodaj nowe polecenie do środowiska pracy MES**. Wymagana modyfikacja w `src/Mod/Fem/Gui/Workbench.cpp`

## Utwórz plik nowej ikony

Potrzebujemy pliku ikony dla przycisku. Możesz skorzystać z dowolnego narzędzia aby go utworzyć, ale musi być zapisany w formacie SVG. W tym przykładzie skorzystamy z pliku FEM_testButton.svg.

Musi być umieszczony w: `src/Mod/Fem/Gui/Resources/icons/`.

## Zarejestruj plik nowej ikony

Plik SVG nowej ikony musi być zarejestrowany dla przycisku GUI poprzez wstawienie go do `src/Mod/Fem/Gui/Resources/Fem.qrc`:

```
<file>icons/FEM_testButton.svg</file>

```

## Utwórz klasę nowego polecenia

Nowa klasa polecenia musi być dodana do modułu `src/Mod/Fem/femcommands/commands.py`.

Po prostu skopiuj i wklej istniejące polecenie, następnie dostosuj ikonę, tekst menu i wskazówkę narzędzia w `__init__(self)`:

```
class _testButton(CommandManager):
    "The FEM_testButton command definition"

    def __init__(self):
        super(_testButton, self).__init__()
        self.menuetext = "test Button"
        self.tooltip = "This is a test button"
        self.is_active = "always"
        #self.do_activated = "add_obj_on_gui_selobj_noset_edit"

```

Nie zapomnij zarejestrować polecenia na dole pliku modułu poprzez metodę `addCommand(...)`:

```
FreeCADGui.addCommand(
    "FEM_testButton",
    _testButton()
)

```

**Uwaga**: Zobacz [ten wątek na forum](https://forum.freecadweb.org/viewtopic.php?f=18&t=46693&start=10#p402004) w kwestii ikon.

## Dodaj nowe polecenie do środowiska pracy MES

Dodamy nowe polecenie do paska **solve** (Rozwiąż) i menu **solve** (Rozwiąż).

Poszukaj następującego fragmentu kodu w `/Gui/Workbench.cpp` i dodaj nowe polecenie:

```
Gui::ToolBarItem* solve = new Gui::ToolBarItem(root);
     solve->setCommand("Solve");
     *solve << "FEM_SolverCalculixCxxtools"
            << "FEM_SolverCalculiX"
            << "FEM_SolverElmer"
+           << "FEM_testButton"
            << "Separator"

```

Aby dodać polecenie do menu **solve** (Rozwiąż) środowiska pracy MES, poszukaj następującego fragmentu kodu w `Workbench.cpp`:

```
Gui::MenuItem* solve = new Gui::MenuItem;
    root->insertItem(item, solve);
    solve->setCommand("&Solve");
    *solve << "FEM_SolverCalculixCxxtools"
           << "FEM_SolverCalculiX"
           << "FEM_SolverElmer"
           << "FEM_SolverZ88"
+          << "FEM_testButton"
           << "Separator"

```

**Efekt**: Powinieneś właśnie prawidłowo dodać testowy przycisk do paska narzędzi i menu środowiska pracy MES. Teraz możesz [skompilować FreeCAD](/Compiling/pl "Compiling/pl") i przetestować swój nowy przycisk.

## Powiązane

- [Rozszerzenie modułu MES](/Extend_FEM_Module/pl "Extend FEM Module/pl")
- [Wprowadzenie do MES dla programistów](/Onboarding_FEM_Devs/pl "Onboarding FEM Devs/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Add_Button_to_FEM_Toolbar_Tutorial/pl&oldid=1354433>"
