---
title: Std LinkSelectLinkedFinal (Vincula vinculo final selecionado - Padrão)
---
Translations:Std LinkSelectLinkedFinal/1/pt-br

|  |
| --- |
| Std LinkSelectLinkedFinal |
| Menu location |
| View → Link navigation → Go to the deepest linked object |
| Workbenches |
| All |
| Default shortcut |
| S D |
| Introduced in version |
| 0.19 |
| See also |
| [Std LinkSelectLinked](/Std_LinkSelectLinked "Std LinkSelectLinked"), [Std LinkSelectAllLinks](/Std_LinkSelectAllLinks "Std LinkSelectAllLinks") |
|  |

## Descrição

The **Std LinkSelectLinkedFinal** command selects the Dados**Linked Object**, the source object, of an [App Link](/App_Link "App Link") object, a link. But if that source object is also a link its linked object is selected instead. This is repeated until the linked object is not a link. This final source object is the deepest linked object.

## Utilização

1. Select a link.
2. There are several ways to invoke the command:
   * Select the **View → Link navigation → ![](/images/Std_LinkSelectLinkedFinal.svg) Go to the deepest linked object** option from the menu.
   * Select the **Link actions → ![](/images/Std_LinkSelectLinkedFinal.svg) Go to the deepest linked object** option from the [Tree view](/Tree_view "Tree view") context menu.
   * Use the keyboard shortcut: S then D.
3. The deepest linked object is selected. If this object belongs to an external document that document is activated.
4. Optionally use ![](/images/Std_SelBack.svg) [Std SelBack](/Std_SelBack "Std SelBack") to reselect the link.

Translations:Std LinkSelectLinkedFinal/1/pt-br

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkSelectLinkedFinal/pt-br&oldid=1453511>"