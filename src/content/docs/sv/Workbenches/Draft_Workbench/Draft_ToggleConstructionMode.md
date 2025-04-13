---
title: Draft ToggleConstructionMode
---
|  |
| --- |
| Draft ToggleConstructionMode |
| Menyplacering |
| Draft -> Utilities -> Toggle construction mode |
| Arbetsbänkar |
| [Draft](/Draft_Workbench/sv "Draft Workbench/sv"), [Arch](/Arch_Workbench/sv "Arch Workbench/sv") |
| Standard genväg |
| *Ingen* |
| Introducerad i version |
| - |
| Se även |
| *Ingen* |
|  |

## Description

Konstruktionsläget i Skissmodulen är en enkel inställning som tillåter dig att rita konstruktionsgeometri (vilket är geometri som endast används till att hjälpa dig med att konstruera mer komplexa element) i en speciell grupp, med en speciell färg, så det är lätt att separera dem från resten och stänga av dem när du inte behöver dem.

* **Konstruktion** knappen i Skisskommandolådan sätter på och stänger av konstruktionsläget
* När den knappen trycks in, så kommar alla objekt som du sedan ritar att få konstruktionsfärgen och placeras i konstruktionsgruppen
* Färgen och gruppnamnet kan ändras i [alternativfönstret](/Draft_Preferences/sv "Draft Preferences/sv").
* En tangentbordsgenväg kan tilldelas till knappen för att lätt kunna stänga på/av funktionen från tangentbordet (Verktyg -> Anpassa -> Tangentbord -> Python -> Toggle Construction Mode)

## Description

The Draft module features a construction mode, which allows to draw certain objects in a special group, with a defined color, so it is easy to separate them from the other objects and switch it off when you don't need it, or delete them after you don't need them anymore.

![](/images/Draft_construction_mode_example.jpg)

![](/images/Draft_construction_mode_example.jpg)

## Usage

1. There are several ways to invoke the command:
   * Press the ![](/images/Draft_tray_button_construction.png) button in the [Draft Tray](/Draft_Tray "Draft Tray"). This button is depressed if Draft construction mode is currently on.
   * [Draft](/Draft_Workbench "Draft Workbench"): Select the **Utilities → ![](/images/Draft_ToggleConstructionMode.svg) Toggle construction mode** option from the menu, or from the [Tree view](/Tree_view "Tree view") or [3D view](/3D_view "3D view") context menu.
   * Draft: Use the keyboard shortcut: C then M.
2. The button in the [Draft Tray](/Draft_Tray "Draft Tray") is updated.

## Notes

* If Draft construction mode is switched on the active [layer](/Draft_Layer "Draft Layer") is ignored.

## Preferences

* To change the label of the construction group: **Edit → Preferences... → Draft → General → Construction group label**.
* To change the color that is used: **Edit → Preferences... → Draft → General → Construction geometry color**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ToggleConstructionMode/sv&oldid=1473319>"