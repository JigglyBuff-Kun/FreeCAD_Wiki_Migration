---
title: Mesh Leviga
---

|                                                |
| ---------------------------------------------- |
| Mesh Smoothing                                 |
| Posizione nel menu                             |
| Mesh → Leviga...                               |
| Ambiente                                       |
| [Mesh](/Mesh_Workbench/it "Mesh Workbench/it") |
| Avvio veloce                                   |
| _Nessuno_                                      |
| Introdotto nella versione                      |
| -                                              |
| Vedere anche                                   |
| _Nessuno_                                      |
|                                                |

## Descrizione

Il comando **Leviga** smussa gli oggetti mesh cambiando la posizione dei loro vertici.

![](/images/Meshes_Smooth.jpg)

Il pannello delle azioni Leviga dopo aver scelto l'opzione Solo selezione

## Utilizzo

1. Se si prevede di levigare solo alcune aree, tenere presente che il comando utilizza il colore rosso per contrassegnare le facce selezionate per questa opzione. Per vederli correttamente:
   - Vista**Display Mode** degli oggetti mesh idealmente dovrebbe essere `Flat lines`, e dovrebbe almeno mostrare le facce. Se necessario, utilizzare il comando [Stile di disegno](/Std_DrawStyle/it "Std DrawStyle/it") per sovrascrivere questa proprietà.
   - Vista**Shape Color** degli oggetti mesh non deve essere rosso.
2. Selezionare uno o più oggetti mesh.
3. Esistono diversi modi per richiamare il comando:
   - Premi il pulsante ![](/images/Mesh_Smoothing.svg) Leviga.
   - Selezionare l'opzione **Meshe → ![](/images/Mesh_Smoothing.svg) Leviga** dal menu.
4. Si apre il pannello delle attività **Leviga**.
5. Se si desidera smussare solo le aree selezionate: scegliere l'opzione **Solo selezione**:
   - Il pannello **Selezione** viene aggiunto al pannello delle attività.
   - Specificare le opzioni della selezione:
     - **Seleziona solo i triangoli visibili**
     - **Seleziona solo i triangoli con le normali in direzione verso lo schermo**
   - Premere il pulsante Aggiungi e mentre si tiene premuto il pulsante sinistro del mouse disegnare una regione, una spline chiusa, nella [Vista 3D](/3D_view/it "3D view/it"). Verranno selezionate le facce che corrispondono alle opzioni della selezione e che rientrano (parzialmente) all'interno della selezione.
   - Eventualmente, premere il pulsante Clear per cancellare la selezione.
6. Seleziona il **Metodo** di levigatura:
   - **Taubin**
   - **Laplace**
7. Specificare i **Parametri**:
   - **Iterazioni**: maggiore è questo numero, più fluido sarà il risultato finale. Il valore ha anche un impatto sul tempo di elaborazione totale del comando. Evitare valori elevati se gli oggetti mesh hanno molti punti.
   - **λ**: il valore deve essere compreso nell'intervallo `0` - `1`.
   - **μ**: il valore deve essere compreso nell'intervallo `0` - `1`.
8. Premere il pulsante OK per terminare il comando.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Smoothing/it&oldid=1342460>"
