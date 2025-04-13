---
title: Mesh Rimuovi componenti a mano
---

|                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Rimuovi componente a mano‏‎                                                                                                                            |
| Posizione nel menu                                                                                                                                     |
| Mesh → Rimuovi componente a mano...                                                                                                                    |
| Ambiente                                                                                                                                               |
| [Mesh](/Mesh_Workbench/it "Mesh Workbench/it")                                                                                                         |
| Avvio veloce                                                                                                                                           |
| _Nessuno_                                                                                                                                              |
| Introdotto nella versione                                                                                                                              |
| -                                                                                                                                                      |
| Vedere anche                                                                                                                                           |
| [Rimuovi componente](/Mesh_RemoveComponents/it "Mesh RemoveComponents/it"), [Arch Suddividere un oggetto mesh](/Arch_SplitMesh/it "Arch SplitMesh/it") |
|                                                                                                                                                        |

## Descrizione

Il comando **Rimuovi componenti a mano** rimuove i componenti dagli oggetti mesh.

## Utilizzo

1. Un componente si riferisce a un gruppo completo di facce connesse. Di solito un oggetto mesh contiene un singolo componente. Ma, ad esempio, dopo aver utilizzato il comando [Unisci mesh](/Mesh_Merge/it "Mesh Merge/it"), un oggetto mesh può contenere più componenti.
2. Il comando utilizza il colore rosso per contrassegnare le facce selezionate. Per vederle correttamente:
   - La Vista**Modalità di visualizzazione** degli oggetti mesh idealmente dovrebbe essere `Flat lines`, ma dovrebbe almeno mostrare le facce. Se necessario, utilizzare il comando [Stile di disegno](/Std_DrawStyle/it "Std DrawStyle/it") per sovrascrivere questa proprietà.
   - Il Vista**Shape Color** degli oggetti mesh non dovrebbe essere rosso.
3. Selezionare l'opzione **Mesh → ![](/images/Mesh_RemoveCompByHand.svg) Rimuovi componenti a mano...** dal menu.
4. Il cursore si trasforma in un'icona mano.
5. Selezionare i componenti che si desidera eliminare nella [vista 3D](/3D_view/it "3D view/it").
6. Se necessario selezionare **Cancella facce selezionate** dal menu contestuale della vista 3D per deselezionare tutti i componenti.
7. Selezionare **Elimina le facce selezionate** dal menu contestuale della vista 3D per eliminare i componenti selezionati.
8. Selezionare **Esci dalla modalità di rimozione** dal menu contestuale della vista 3D per terminare il comando.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_RemoveCompByHand/it&oldid=1188084>"
