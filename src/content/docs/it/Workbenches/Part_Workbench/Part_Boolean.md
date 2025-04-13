---
title: Part Operazione booleana
---

|                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Part Operazione booleana                                                                                                                                                                    |
| Posizione nel menu                                                                                                                                                                          |
| Parte → Operazioni booleane → Operazione booleana...                                                                                                                                        |
| Ambiente                                                                                                                                                                                    |
| [Part](/Part_Workbench/it "Part Workbench/it")                                                                                                                                              |
| Avvio veloce                                                                                                                                                                                |
| _Nessuno_                                                                                                                                                                                   |
| Introdotto nella versione                                                                                                                                                                   |
| -                                                                                                                                                                                           |
| Vedere anche                                                                                                                                                                                |
| [Part Taglio](/Part_Cut/it "Part Cut/it"), [Part Unione](/Part_Fuse/it "Part Fuse/it"), [Part Intersezione](/Part_Common/it "Part Common/it"), [Part Seziona](/Part_Section "Part Section") |
|                                                                                                                                                                                             |

## Descrizione

![](/images/Part_Boolean.svg) Part Operazione booleana è uno strumento booleano generico tutto in uno. Consente di specificare gli oggetti e le operazioni da eseguire tramite un'unica finestra di dialogo.

Per un accesso più rapido a queste operazioni, usare ![](/images/Part_Cut.svg) [Part Taglio](/Part_Cut/it "Part Cut/it"), ![](/images/Part_Fuse.svg) [Part Unione](/Part_Fuse/it "Part Fuse/it"), ![](/images/Part_Common.svg) [Part Intersezione](/Part_Common/it "Part Common/it") and ![](/images/Part_Section.svg) [Part Seziona](/Part_Section/it "Part Section/it").

![](/images/PartBooleansDialog.png)

Finestra di dialogo per selezionare gli oggetti ed eseguire operazioni booleane con essi.

## Utilizzo

Vedere i singoli comandi:

- ![](/images/Part_Cut.svg) [Part Taglio](/Part_Cut/it "Part Cut/it")
- ![](/images/Part_Fuse.svg) [Part Unione](/Part_Fuse/it "Part Fuse/it")
- ![](/images/Part_Common.svg) [Part Intersezione](/Part_Common/it "Part Common/it")
- ![](/images/Part_Section.svg) [Part Seziona](/Part_Section/it "Part Section/it")

## Problemi di complanarità

Le operazioni booleane sono eseguite dal kernel di geometria interno, [OpenCASCADE Technology](/OpenCASCADE/it "OpenCASCADE/it") (OCCT). Questa libreria a volte ha problemi a produrre risultati booleani quando gli oggetti di input condividono un bordo o una faccia. Per essere sicuri che l'operazione booleana abbia successo, la raccomandazione è che le forme si intersechino tra loro; ciò significa che nella maggior parte dei casi, una forma dovrebbe sporgere o essere di dimensioni maggiori rispetto all'altra forma.

In caso di complanarità, anche se la prima operazione booleana riesce, le successive operazioni booleane potrebbero non riuscire. In questo caso, il problema potrebbe non essere nell'ultima operazione eseguita, ma in quelle precedenti, ovvero nelle operazioni nidificate come indicato nella [vista ad albero](/Tree_view/it "Tree view/it"). Per risolvere questi problemi, si consiglia di utilizzare lo strumento ![](/images/Part_CheckGeometry.svg) [Controlla la geometria](/Part_CheckGeometry/it "Part CheckGeometry/it") per ispezionare tutti gli oggetti alla ricerca di problemi.

![](/images/Part_Boolean_cut_coplanar_1.png)

![](/images/Part_Boolean_cut_coplanar_2.png)

A sinistra: forme che condividono una faccia, un taglio booleano può produrre risultati errati. A destra: forme che si intersecano chiaramente tra loro, il taglio booleano avrà successo nella maggior parte dei casi.

![](/images/Part_Boolean_fusion_coplanar_1.png)

![](/images/Part_Boolean_fusion_coplanar_2.png)

A sinistra: forme che condividono una faccia, un'unione booleana può produrre risultati errati. A destra: forme che si intersecano chiaramente tra loro, l'unione booleana avrà successo nella maggior parte dei casi.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Boolean/it&oldid=1497992>"
