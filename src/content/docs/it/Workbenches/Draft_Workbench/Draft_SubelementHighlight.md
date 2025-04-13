---
title: Draft Evidenzia sottoelemento
---
|  |
| --- |
| Draft Evidenzia sottoelemento |
| Posizione nel menu |
| Draft → Evidenzia sottoelemento |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it") |
| Avvio veloce |
| H S |
| Introdotto nella versione |
| 0.19 |
| Vedere anche |
| [Draft Muovi](/Draft_Move/it "Draft Move/it"), [Draft Ruota](/Draft_Rotate/it "Draft Rotate/it"), [Draft Scala](/Draft_Scale/it "Draft Scale/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_SubelementHighlight.svg) **Draft Evidenzia sottoelemento** evidenzia temporaneamente gli oggetti selezionati o gli oggetti di base degli oggetti selezionati. È concepito per essere utilizzato in combinazione con la modalità del sottoelemento del comando [Draft Muovi](/Draft_Move/it "Draft Move/it"), il comando [Draft Ruota](/Draft_Rotate "Draft Rotate") o il comando [Draft Scala](/Draft_Scale "Draft Scale"). Attualmente la modalità sottoelemento funziona correttamente solo per [Draft Linee](/Draft_Line/it "Draft Line/it") e [Draft Polilinee](/Draft_Wire/it "Draft Wire/it").

![](/images/Draft_SubelementHighlight_example.png)

Un muro ad arco la cui base, una polilinea, è stata evidenziata

## Utilizzo

1. Facoltativamente, selezionare una o più [Linee](/Draft_Line/it "Draft Line/it") o [Draft Polilinee](/Draft_Wire/it "Draft Wire/it"), o oggetti i cui oggetti Dati**Base** sono [Draft Linee](/Draft_Line/it "Draft Line/it") o [Draft Polilinee](/Draft_Wire/it "Draft Wire/it").
2. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_SubelementHighlight.svg) Evidenzia sottoelemento.
   * Seleziona l'opzione **Modifiche → ![](/images/Draft_SubelementHighlight.svg) Evidenzia sottoelemento** dal menu.
   * Usare la scorciatoia da tastiera: H poi S.
3. Se non si ha ancora selezionato un oggetto: selezionare un oggetto nella [Vista 3D](/3D_view/it "3D view/it").
4. Gli oggetti selezionati vengono resi visibili (se richiesto), il loro Vista**Line Color** e Vista**Point Color** vengono modificati in rosso e il loro Vista**Point Size** viene modificato in `10`.
5. È consigliabile ora deselezionare la selezione esistente, ad esempio facendo clic su un punto casuale nella [Vista 3D](/3D_view/it "3D view/it").
6. Selezionare uno o più sottoelementi, spigoli o punti, degli oggetti che sono stati contrassegnati in rosso.
7. Richiamare [Draft Muovi](/Draft_Move/it "Draft Move/it"), [Draft Ruota](/Draft_Rotate/it "Draft Rotate/it") o [Draft Scala](/Draft_Scale/it "Draft Scale/it").
8. Attivare/disattivare la modalità dei sottoelementi nel pannello delle attività di quel comando selezionando la casella di controllo **Modifica sottoelementi**.
9. Modificare i sottoelementi selezionati e completare il comando Draft Modifica.
10. Premere Esc per ripristinare i cambiamenti visivi temporanei degli oggetti.

## Note

* Se gli oggetti sono stati evidenziati con questo comando, le modifiche visive temporanee devono essere annullate prima di salvare e riaprire il file.
* Gli oggetti evidenziati non devono essere copiati se la modalità sottoelemento è disattivata. Le modifiche visive temporanee non possono essere ripristinate per le copie create in questo modo.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SubelementHighlight/it&oldid=1457444>"