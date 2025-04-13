---
title: Mesh Affinamento
---

|                                                                          |
| ------------------------------------------------------------------------ |
| Affinamento                                                              |
| Posizione nel menu                                                       |
| Mesh → Affinamento...                                                    |
| Ambiente                                                                 |
| [Mesh](/Mesh_Workbench/it "Mesh Workbench/it")                           |
| Avvio veloce                                                             |
| _Nessuno_                                                                |
| Introdotto nella versione                                                |
| 0.19                                                                     |
| Vedere anche                                                             |
| [Crea mesh da una forma](/Mesh_FromPartShape/it "Mesh FromPartShape/it") |
|                                                                          |

## Descrizione

Il comando **Affinamento** rigenera un oggetto mesh utilizzando il mesher [Gmsh](https://gmsh.info/). La nuova mesh può essere più fine o più grossolana.

## Utilizzo

1. Selezionare un singolo oggetto mesh.
2. Esistono diversi modi per richiamare il comando:
   - Premere il pulsante ![](/images/Mesh_RemeshGmsh.svg) Affinamento.
   - Selezionare l'opzione **Meshes → ![](/images/Mesh_RemeshGmsh.svg) Affinamento...** dal menu.
3. Si apre il pannello delle azioni **Rigenera con gmsh**.
4. Specificare le impostazioni richieste. Vedere le [Impostazioni del mesher Gmsh](/Mesh_FromPartShape/it#Mesher_Gmsh "Mesh FromPartShape/it") del comando [Crea mesh da una forma](/Mesh_FromPartShape/it "Mesh FromPartShape/it").
5. Premere il pulsante Applica per rimodellare l'oggetto mesh.
6. Facoltativamente, modificare una o più impostazioni e premere nuovamente il pulsante Applica fino a quando la nuova mesh non è di proprio gradimento.
7. Premere il pulsante Chiudi per chiudere il pannello delle azioni e terminare il comando.

## Note

- In alcuni casi questo comando produce una mesh con le normali capovolte. Per correggere questo problema si può utilizzare il comando [Inverti le normali](/Mesh_FlipNormals/it "Mesh FlipNormals/it").

## Proprietà

Vedere: [Mesh Feature](/Mesh_Feature/it "Mesh Feature/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_RemeshGmsh/it&oldid=1334329>"
