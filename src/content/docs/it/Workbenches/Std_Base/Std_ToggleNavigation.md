---
title: Visualizza Attiva/disattiva la modalità modifica
---

|                                                    |
| -------------------------------------------------- |
| Attiva/disattiva la modalità modifica              |
| Posizione nel menu                                 |
| Visualizza → Attiva/disattiva la modalità modifica |
| Ambiente                                           |
| Tutti                                              |
| Avvio veloce                                       |
| Esc                                                |
| Introdotto nella versione                          |
| -                                                  |
| Vedere anche                                       |
| _Nessuno_                                          |
|                                                    |

## Descrizione

Il comando **Attiva/disattiva la modalità modifica** è destinato a determinate operazioni di ispezione ed a determinate operazioni interattive di modifica della mesh. Queste operazioni sono abbastanza "onerose" e quindi si basano su una modalità di modifica durante la quale la maggior parte delle opzioni di navigazione sono disabilitate. Con questo comando è possibile passare temporaneamente dalla modalità di modifica alla modalità di navigazione e, dopo aver modificato la [Vista 3D](/3D_view/it "3D view/it"), tornare alla modalità di modifica.

Non confondere questo comando con il comando [Modalità modifica](/Std_Edit/it "Std Edit/it").

## Utilizzo

_Un esempio per dimostrare il comando:_

1. Passare all'ambiente ![](/images/Workbench_Mesh.svg) [Mesh](/Mesh_Workbench/it "Mesh Workbench/it").
2. Premere il pulsante ![](/images/Mesh_BuildRegularSolid.svg) [Solido regolare...](/Mesh_BuildRegularSolid/it "Mesh BuildRegularSolid/it").
3. Si apre la finestra di dialogo **Solido regolare**.
4. Scegliere **Ellissoide** dall'elenco a discesa.
5. Premere il pulsante Crea.
6. Premere il pulsante Chiudi per chiudere la finestra di dialogo.
7. Selezionare l'oggetto mesh.
8. Premere il pulsante ![](/images/Mesh_PolyCut.svg) [Taglia la mesh](/Mesh_PolyCut/it "Mesh PolyCut/it").
9. Scegliere i punti nella vista 3D per definire un poligono che si sovrapponga a metà della mesh.
10. Fare clic con il tasto destro e scegli **Interno** dal menu contestuale.
11. Il risultato è una mesh aperta con un contorno.
12. Assicurarsi che la mesh sia ancora selezionata.
13. Premere il pulsante ![](/images/Mesh_AddFacet.svg) [Aggiungi triangolo](/Mesh_AddFacet/it "Mesh AddFacet/it") per avviare il comando [Aggiungi triangolo](/Mesh_AddFacet/it "Mesh AddFacet/it").
14. Se si passa con il mouse su un punto di confine, apparirà un indicatore giallo e un clic sinistro lo selezionerà.
15. Facoltativamente, selezionare altri due punti e aggiungere un triangolo alla mesh.
16. Ora ci si trova in modalità di modifica ed è impossibile ruotare o eseguire una panoramica della vista 3D, sebbene lo zoom funzioni ancora.
17. Invocare il comando **Attiva/disattiva la modalità modifica** per passare alla modalità di navigazione:
    - Selezionare l'opzione **Visualizza → ![](/images/Std_ToggleNavigation.svg) Attiva/disattiva navigazione/Modifica** dal menu.
    - Oppure usare la scorciatoia da tastiera: Esc.
18. Ora si può ruotare e spostare la vista 3D, ma non si può selezionare i punti per aggiungere triangoli.
19. Invocare il comando **Attiva/disattiva la modalità modifica** per tornare alla modalità di modifica:
    - Selezionare l'opzione **Visualizza → ![](/images/Std_ToggleNavigation.svg) Attiva/disattiva navigazione/Modifica** dal menu.
    - Oppure usa la scorciatoia da tastiera: Esc.
20. Si può nuovamente selezionare punti ed aggiungere triangoli.
21. Fare clic con il pulsante destro del mouse nella vista 3D e scegliere **Termina** dal menu contestuale per terminare il comando [Aggiungi triangolo](/Mesh_AddFacet/it "Mesh AddFacet/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleNavigation/it&oldid=1457868>"
