---
title: Atualizar
---
|  |
| --- |
| Std Refresh |
| Menu location |
| Edit → Refresh |
| Workbenches |
| All |
| Default shortcut |
| F5 |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descrição

The **Std Refresh** command recomputes the active document. The command is disabled if the document does not require a recompute.

## Uso

1. There are several ways to invoke the command:
   * Press the ![](/images/Std_Refresh.svg) [Refresh](/Std_Refresh "Std Refresh") button.
   * Select the **Edit → ![](/images/Std_Refresh.svg) Refresh** option from the menu.
   * Use the keyboard shortcut: F5.

## Opções

* To force a recompute select the document or one or more objects in the [Tree view](/Tree_view "Tree view"), choose the **![](/images/Std_MarkToRecompute.svg) Mark to recompute** option from the context menu, and invoke the command.
* For objects, but not for documents, you can also choose **Recompute object** from the same context menu.

## Notas

* For a macro that will recompute the active document see: [Macro ForceRecompute](/Macro_ForceRecompute "Macro ForceRecompute").

## Scripting

*Veja também:* [FreeCAD Noções básicas de programação](/FreeCAD_Scripting_Basics/pt-br "FreeCAD Scripting Basics/pt-br").

To recompute a document use the `recompute` method of the document object.

```
import FreeCAD

doc = FreeCAD.newDocument()
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Refresh/pt-br&oldid=1448950>"