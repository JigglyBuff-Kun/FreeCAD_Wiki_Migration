---
title: Sostituisci con il link
---
|  |
| --- |
| Sostituisci con il link |
| Posizione nel menu |
| Nessuna |
| Ambiente |
| Tutti |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.19 |
| Vedere anche |
| [Crea un link](/Std_LinkMake/it "Std LinkMake/it"), [Crea un link relativo](/Std_LinkMakeRelative/it "Std LinkMakeRelative/it"), [Annulla il link](/Std_LinkUnlink/it "Std LinkUnlink/it") |
|  |

## Descrizione

Lo strumento ![](/images/Std_LinkReplace.svg) Sostituisci con il link sostituisce un oggetto all'interno di un altro con una versione [App Link](/App_Link/it "App Link/it") del primo oggetto.

Questa operazione agisce sui "figli" di un oggetto "genitore" come si vede nella [vista ad albero](/Tree_view/it "Tree view/it"). Ad esempio, dati due oggetti (A e B) che partecipano a una ![](/images/Part_Boolean.svg) [operazione booleana](/Part_Boolean/it "Part Boolean/it"), ad esempio `C = A + B`, l'oggetto A può essere sostituito da un link, in modo che `C = A_link + B`.

Questa operazione può essere eseguita per sostituire con un link gli oggetti nidificati che si trovano in un [assemblaggio](/Assembly/it "Assembly/it") complesso, il che può essere più efficiente se l'oggetto nidificato viene utilizzato molte volte in diversi sottoassiemi. L'operazione inversa è ![](/images/Std_LinkUnlink.svg) [Annulla il link](/Std_LinkUnlink/it "Std LinkUnlink/it"). Per creare un link generico vedere ![](/images/Std_LinkMake.svg) [Crea un link](/Std_LinkMake/it "Std LinkMake/it").

## Utilizzo

1. Assicurarsi di avere un oggetto all'interno di un altro. Ad esempio, si consideri che è stata realizzata una ![](/images/Part_Fuse.svg) [Unione](/Part_Fuse/it "Part Fuse/it") con due oggetti creati in precedenza, una ![](/images/Part_Sphere.svg) [sfera](/Part_Sphere/it "Part Sphere/it") e un ![](/images/Part_Cylinder.svg) [cilindro](/Part_Cylinder/it "Part Cylinder/it").
2. Selezionare la [![](https://upload.wikimedia.org/wikipedia/commons/5/5b/Sphere.svg)](/File:Sphere.svg) [sfera](/Part_Sphere/it "Part Sphere/it") nella [vista ad albero](/Tree_view/it "Tree view/it").
3. Premere ![](/images/Std_LinkReplace.svg) Sostituisci con il link.

L'originale ![](/images/Part_Sphere.svg) [Sfera](/Part_Sphere/it "Part Sphere/it") deve ora essere al di fuori del ![](/images/Part_Fuse.svg) [Unione](/Part_Fuse/it "Part Fuse/it"), e all'interno ci deve essere invece un Link (una piccola freccia in sovraimpressione viene visualizzata nell'icona).

![](/images/Std_Link_tree_replace_fuse_1_example.png) ![](/images/Std_Link_tree_replace_fuse_2_example.png)

Un oggetto all'interno di un altro viene sostituito da un link; ora il link è all'interno e l'oggetto reale è posizionato all'esterno.

Questo può essere fatto anche con oggetti contenuti all'interno di ![](/images/Std_Part.svg) [Parti](/Std_Part/it "Std Part/it") e ![](/images/Std_Group.svg) [Gruppi](/Std_Group/it "Std Group/it").

![](/images/Std_Link_tree_replace_part_1_examples.png) ![](/images/Std_Link_tree_replace_part_2_examples.png)

Un oggetto all'interno di un contenitore viene sostituito da un link; ora il link è all'interno e l'oggetto reale è posizionato all'esterno.

## Proprietà

Questo comando crea un nuovo [App Link](/App_Link/it "App Link/it"); le sue proprietà sono descritte in ![](/images/Std_LinkMake.svg) [Crea un link](/Std_LinkMake/it "Std LinkMake/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkReplace/it&oldid=1453129>"