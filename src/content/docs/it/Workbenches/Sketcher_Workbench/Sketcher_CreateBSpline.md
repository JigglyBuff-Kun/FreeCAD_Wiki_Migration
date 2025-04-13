---
title: Sketcher Crea B-spline dai punti di controllo
---

|                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- |
| Sketcher Crea B-spline dai punti di controllo                                                              |
| Posizione nel menu                                                                                         |
| Schizzo → Geometrie Sketcher → Crea B-spline                                                               |
| Ambiente                                                                                                   |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it")                                                 |
| Avvio veloce                                                                                               |
| G B B                                                                                                      |
| Introdotto nella versione                                                                                  |
| 0.17                                                                                                       |
| Vedere anche                                                                                               |
| [Sketcher Crea B-spline periodica](/Sketcher_CreatePeriodicBSpline/it "Sketcher CreatePeriodicBSpline/it") |
|                                                                                                            |

## Descrizione

Lo strumento ![](/images/Sketcher_CreateBSpline.svg) Sketcher Crea B-spline crea una curva [B-spline](/B-Splines/it "B-Splines/it") dai punti di controllo. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): o facoltativamente tramite i punti nodo.

![](/images/Sketcher_CreateBSpline_Example.png)

Curva B-spline (bianca) definita da 5 punti di controllo.  
Il poligono di controllo (verde) collega i punti di controllo (contrassegnati con cerchi di peso giallo scuro).  
Il numero 3 (verde, senza parentesi) al centro si riferisce al [grado](/Sketcher_BSplineIncreaseDegree/it#Description "Sketcher BSplineIncreaseDegree/it") della B-spline.  
I numeri (1) e (4) (verde, tra parentesi tonde) si riferiscono alla [molteplicità](/Sketcher_BSplineDecreaseKnotMultiplicity/it#Description "Sketcher BSplineDecreaseKnotMultiplicity/it") dei punti nodo.  
I numeri [1.00] (verde, tra parentesi quadre) si riferiscono ai pesi dei punti di controllo.

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

1. Esistono diversi modi per richiamare lo strumento:
   - Premere il pulsante ![](/images/Sketcher_CreateBSpline.svg) B-spline dai punti di controllo.
   - Selezionare l'opzione **Schizzo → Geometrie Sketcher → ![](/images/Sketcher_CreateBSpline.svg) Crea B-spline** dal menu.
   - Fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_CreateBSpline.svg) Crea B-spline** dal menu contestuale. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
   - Usare la scorciatoia da tastiera: G quindi B, quindi B.
2. Il cursore si trasforma in una croce con l'icona dello strumento.
3. La sezione **Parametri B-spline** ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")) è stata aggiunta nella parte superiore della finestra [Dialogo Sketcher](/Sketcher_Dialog/it "Sketcher Dialog/it").
4. Facoltativamente, premere il tasto M o selezionare dall'elenco a discesa nella sezione dei parametri per modificare la modalità dello strumento:
   - ![](/images/Sketcher_CreateBSpline.svg) **Da punti di controllo**:
     1. Modifica facoltativamente il **Grado** (possibile anche dopo aver posizionato i punti):
        - Inserire un numero maggiore di zero.
        - Premere il tasto U per aumentare il grado.
        - Premere il tasto J per diminuire il grado.
   - ![](/images/Sketcher_CreateBSplineByInterpolation.svg) **Per nodi**: [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
     1. Le B-spline tramite nodi vengono sempre create con grado 3. Ma il loro grado può essere modificato in seguito. Vedere [Note](#Note).
5. Facoltativamente, premere il tasto R o selezionare la casella **Periodico** per creare una B-spline chiusa (possibile anche dopo che i punti sono stati selezionati). [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
6. Scegliere diversi punti.
7. Facoltativamente, premere il tasto F prima di terminare per eliminare l'ultimo punto. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
8. Fare clic con il pulsante destro del mouse o premere Esc per terminare l'input.
9. Viene creata la B-spline, incluso un insieme di geometrie interne (cerchi di peso e punti di nodo).
10. Se lo strumento viene eseguito in [modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it"):
    1. Facoltativamente, continuare a creare B-spline.
    2. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

## Note

- Gli elementi della geometria interna possono essere cancellati. Possono essere ricreati in qualsiasi momento con [Sketcher Mostra o Nascondi la geometria interna](/Sketcher_RestoreInternalAlignmentGeometry/it "Sketcher RestoreInternalAlignmentGeometry/it").
- Dopo aver creato una B-spline, è possibile definire il peso dei punti di controllo modificando i raggi dei cerchi del peso. I vincoli di uguaglianza sui cerchi devono prima essere eliminati. Il vincolo del raggio è arbitrario, il peso dei punti di controllo sarà definito dai raggi relativi dei cerchi. Funziona in modo simile alla gravità: più un cerchio è grande rispetto agli altri, più la curva sarà attratta da quel punto di controllo.
- Il grado di una B-spline creata può essere [aumentato](/Sketcher_BSplineIncreaseDegree/it "Sketcher BSplineIncreaseDegree/it") o [diminuito](/index.php?title=Sketcher_BSplineDecreaseDegree/it&action=edit&redlink=1 "Sketcher BSplineDecreaseDegree/it (page does not exist)"), e la molteplicità dei suoi nodi può essere allo stesso modo [aumentata](/Sketcher_BSplineIncreaseKnotMultiplicity/it "Sketcher BSplineIncreaseKnotMultiplicity/it") o [diminuita](/Sketcher_BSplineIncreaseKnotMultiplicity/it "Sketcher BSplineIncreaseKnotMultiplicity/it").
- La visibilità del [grado](/Sketcher_BSplineDegree/it "Sketcher BSplineDegree/it"), del [poligono di controllo](/Sketcher_BSplinePolygon/it "Sketcher BSplinePolygon/it"), del [pettine di curvatura](/Sketcher_BSplineComb/it "Sketcher BSplineComb/it"), della [molteplicità dei nodi](/Sketcher_BSplineKnotMultiplicity/it "Sketcher BSplineKnotMultiplicity/it") e del [peso del punto di controllo](/Sketcher_BSplinePoleWeight/it "Sketcher BSplinePoleWeight/it") può essere attivato/disattivato da Barra degli strumenti [Visualizzazione dello Schizzo](/Sketcher_Workbench/it#Sketcher_visivo "Sketcher Workbench/it").

## Limitazioni

- Al momento non sono supportati diversi vincoli.
- La molteplicità dei nodi definita potrebbe non essere sempre rispettata:
  - Per una spline periodica, il primo nodo (coincidente con l'ultimo) ha sempre molteplicità pari a 2.
  - Per una spline non periodica, il primo e l'ultimo nodo hanno sempre una molteplicità pari a 4.
  - Se i punti subito prima e subito dopo hanno molteplicità >=3, il tratto tra questi due è completamente continuo e questo punto (centrale) sarà vincolato solo con il punto sull'oggetto. Se è necessario un nodo, considerare l'utilizzo dello strumento [inserisci nodo](/index.php?title=Sketcher_BSplineInsertKnot/it&action=edit&redlink=1 "Sketcher BSplineInsertKnot/it (page does not exist)").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateBSpline/it&oldid=1504295>"
