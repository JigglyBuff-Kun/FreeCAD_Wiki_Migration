---
title: Złożenie 3 Utwórz element
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Assembly3 CreateElement |
| Menu location |
| Assembly3 → Create element |
| Workbenches |
| [Assembly3](/Assembly3_Workbench "Assembly3 Workbench") |
| Default shortcut |
| A E |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

The ![](/images/Assembly_New_Element.svg) [Create element](/Assembly3_CreateElement "Assembly3 CreateElement") command creates new elements from selected objects.

It can be used to prepare **elements** before the use of constraints.   
This could come in handy to select e.g. hidden geometry. Once an object is represented by an element, it can easily be accessed by its assembly tree object.

(Usually elements are created from selected objects when a constraint command is applied on them)

## Usage

1. Select one or more objects of the boundary representation such as planar **faces**, straight **edges**, or **points**
2. There are several ways to invoke the command:
   * Press the ![](/images/Assembly_New_Element.svg) [Create element](/Assembly3_CreateElement "Assembly3 CreateElement") button.
   * Select the **Assembly3 → ![](/images/Assembly_New_Element.svg) Create element** option from the menu.
   * Use the keyboard shortcut A then E
3. (optional but recommended) Rename the elements by editing their **Label** properties.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_CreateElement/pl&oldid=1529299>"