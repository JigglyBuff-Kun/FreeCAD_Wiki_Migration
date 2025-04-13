---
title: Crea un link relativo
---
|  |
| --- |
| Crea un link relativo |
| Posizione nel menu |
| Nessuna |
| Ambiente |
| Tutti |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.19 |
| Vedere anche |
| [Parte](/Std_Part/it "Std Part/it"), [Gruppo](/Std_Group/it "Std Group/it"), [Crea un link](/Std_LinkMake/it "Std LinkMake/it") |
|  |

## Descrizione

Lo strumento ![](/images/Std_LinkMakeRelative.svg) Crea un link relativo crea un [App Link](/App_Link/it "App Link/it") (classe `App::Link`), così come fa ![](/images/Std_LinkMake.svg) [Crea un link](/Std_LinkMake "Std LinkMake"), ma opera prima sui sottoelementi selezionati e imposta Dati**Link Transform** su `True`.

## Utilizzo

Con selezione:

1. Selezionare un sottoelemento nella [vista 3D](/3D_view/it "3D view/it"), ad esempio un vertice, uno spigolo o una faccia o una qualsiasi combinazione di questi. Questi sottoelementi devono appartenere a un singolo oggetto.
2. Premere il pulsante ![](/images/Std_LinkMakeRelative.svg) Crea un link relativo. L'oggetto prodotto ha la stessa icona dell'oggetto originale, ma ha due frecce sovrapposte che indicano che è un collegamento relativo.

Senza selezione:

* Se non è selezionato alcun oggetto, questo comando non fa nulla.
* Se un oggetto è selezionato solo nella [vista ad albero](/Tree_view/it "Tree view/it"), ma nella [vista 3D](/3D_view/it "3D view/it") non è selezionato nessun sottoelemento, questo comando non fa nulla.

![](/images/Std_Link_tree_sublink_example.png) ![](/images/Std_Link_sublink_example.png)

Corpo originale e tre collegamenti creati dai suoi elementi secondari, inclusi bordi e facce.

## Proprietà

Questo comando crea un nuovo [App Link](/App_Link/it "App Link/it"); le sue proprietà sono descritte in ![](/images/Std_LinkMake.svg) [Crea un link](/Std_LinkMake/it "Std LinkMake/it").

In particolare, Dati**Link Transform** è impostata su `True`, quindi Dati**Placement** viene nascosto e invece Dati**Link Placement** controlla la posizione del Link rispetto alla posizione di Dati**Linked Object**.

## Script

Vedere [Crea link](/Std_LinkMake/it "Std LinkMake/it") per le informazioni generali.

Viene creato un App Link con il metodo `addObject()` del documento. Per definire un collegamento relativo, il suo metodo `setLink` viene utilizzato per selezionare l'oggetto sorgente e uno o più dei suoi sottoelementi. Quindi l'attributo `LinkTransform` è impostato su `True`.

```
import FreeCAD as App

doc = App.newDocument()
body = App.ActiveDocument.addObject("Part::Box", "Box")

obj = App.ActiveDocument.addObject("App::Link", "Link")
obj.setLink(body, '', ['Edge1', 'Edge6', 'Edge7', 'Edge10', 'Face2', 'Face3'])
obj.LinkTransform = True
obj.LinkPlacement.Base = App.Vector(20, 20, 0)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkMakeRelative/it&oldid=1186479>"