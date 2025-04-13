---
title: Sketcher Vincolo perpendicolare
---
|  |
| --- |
| Sketcher Vincolo perpendicolare |
| Posizione nel menu |
| Schizzo → Vincoli Sketcher → Vincolo perpendicolare |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| N |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Sketcher Vincolo angolare](/Sketcher_ConstrainAngle/it "Sketcher ConstrainAngle/it") |
|  |

## Descrizione

Lo strumento ![](/images/Sketcher_ConstrainPerpendicular.svg) Sketcher Vincolo perpendicolare vincola due linee ad essere perpendicolari, o due bordi, o un bordo ed un asse, ad essere perpendicolari alla loro intersezione. Le linee vengono trattate come infinite e anche le curve aperte vengono virtualmente estese. Il vincolo può anche connettere due bordi, costringendoli ad essere perpendicolari in corrispondenza del giunto.

## Utilizzo

Vedere anche: [Aiuti per il disegno](/Sketcher_Workbench/it#Drawing_aids "Sketcher Workbench/it").

### [Modalità continua](/Sketcher_Workbench/it#Continue_modes "Sketcher Workbench/it")

1. Assicurarsi che non ci sia alcuna selezione.
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/Sketcher_ConstrainPerpendicular.svg) Vincolo perpendicolare.
   * Selezionare l'opzione **Schizzo → Vincoli Sketcher → ![](/images/Sketcher_ConstrainPerpendicular.svg) Vincolo perpendicolare** dal menu.
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [Vista 3D](/3D_view/it "3D view/it") e selezionare l'opzione **Vincolo → ![](/images/Sketcher_ConstrainPerpendicular.svg) Vincolo perpendicolare** dall'elenco menu contestuale.
   * Usare la scorciatoia da tastiera: N.
3. Il cursore si trasforma in una croce con l'icona dello strumento.
4. Effettuare una delle seguenti operazioni:
   * Selezionare due bordi. Uno dei bordi deve essere una linea retta o un asse. L'altro può essere qualsiasi bordo tranne una B-spline.
   * Selezionare un punto e due bordi (in quest'ordine).
   * Selezionare un bordo, un punto e un altro bordo (idem).
5. Viene aggiunto un vincolo Perpendicolare. Se sono stati selezionati un punto e due bordi, è possibile aggiungere anche fino a due [Vincoli punto su oggetto](/Sketcher_ConstrainPointOnObject/it "Sketcher ConstrainPointOnObject/it"). Vedere [Esempi](#Tra_due_bordi_in_un_punto).
6. Facoltativamente, continuare a creare vincoli.
7. Per terminare, fare clic con il pulsante destro del mouse o premere Esc oppure avviare un altro strumento di creazione di geometrie o vincoli.

### Modalità di esecuzione una sola volta

1. Effettuare una delle seguenti operazioni:
   * Selezionare due bordi (vedere sopra).
   * Selezionare due punti finali appartenenti a bordi diversi.
   * Selezionare un bordo e il punto finale di un altro bordo (in qualsiasi ordine).
   * Selezionare un punto e due bordi (idem).
2. Richiamare lo strumento come spiegato sopra o con la seguente opzione aggiuntiva:
   * [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): fare clic con il pulsante destro del mouse nella [3D view](/3D_view/it "3D view/it") e selezionare l'opzione **![](/images/Sketcher_ConstrainPerpendicular.svg) Vincolo perpendicolare** dal menu contestuale .
3. Viene aggiunto un vincolo Perpendicolare. Se sono stati selezionati un punto e due bordi, è possibile aggiungere anche fino a due [Vincoli punto su oggetto](/Sketcher_ConstrainPointOnObject/it "Sketcher ConstrainPointOnObject/it"). Vedere [Esempi](#Tra_due_bordi_in_un_punto).

## Esempi

### Tra due bordi

![](/images/Sketcher_ConsraintPerpendicular_mode1.png)

I due bordi sono resi perpendicolari nella loro intersezione (virtuale). Se uno dei bordi è una [conica](/Sketcher_Workbench/it#Sketcher_CompCreateConic "Sketcher Workbench/it"), viene aggiunto un [Oggetto punto](/Sketcher_CreatePoint/it "Sketcher CreatePoint/it") che ha un [Vincolo punto su oggetto](/Sketcher_ConstrainPointOnObject/it "Sketcher ConstrainPointOnObject/it") con entrambi i bordi (estesi).

### Tra due punti finali

![](/images/Sketcher_ConsraintPerpendicular_mode2.png)

I punti finali vengono resi coincidenti e i bordi vengono resi perpendicolari in quel punto.

### Tra bordo e punto finale

![](/images/Sketcher_ConsraintPerpendicular_mode3.png)

Il punto finale di un bordo è vincolato a giacere sull'altro bordo e i bordi vengono resi perpendicolari in quel punto.

### Tra due bordi in un punto

![](/images/Sketcher_ConsraintPerpendicular_mode4.png)

I due bordi sono resi perpendicolari in un dato punto. Il punto può essere qualsiasi punto, ad es. il centro di un cerchio, il punto finale di un bordo o l'origine, può appartenere ad uno dei bordi e può anche essere un [Oggetto punto](/Sketcher_CreatePoint/it "Sketcher CreatePoint/it"). Se necessario, vengono aggiunti [Vincoli punto su oggetto](/Sketcher_ConstrainPointOnObject/it "Sketcher ConstrainPointOnObject/it") per garantire che il punto si trovi su entrambi i bordi (estesi). Questi vincoli aggiuntivi sono chiamati [vincoli di supporto](/Sketcher_helper_constraint/it "Sketcher helper constraint/it").

## Script

Il vincolo perpendicolare può essere creato da [macro](/Macros/it "Macros/it") e dalla console Python utilizzando quanto segue:

```
# direct perpendicularity
Sketch.addConstraint(Sketcher.Constraint('Perpendicular',icurve1,icurve2))

# point-to-point perpendicularity
Sketch.addConstraint(Sketcher.Constraint('Perpendicular',icurve1,pointpos1,icurve2,pointpos2))

# point-to-curve perpendicularity
Sketch.addConstraint(Sketcher.Constraint('Perpendicular',icurve1,pointpos1,icurve2))

# perpendicular-via-point (plain constraint, helpers are not added automatically)
Sketch.addConstraint(Sketcher.Constraint('PerpendicularViaPoint',icurve1,icurve2,geoidpoint,pointpos))

```

dove:

:   * `Sketch` è un oggetto schizzo
    * `icurve1`, `icurve2` sono due numeri interi che identificano le curve da rendere perpendicolari. Gli interi sono indici nello schizzo (il valore, restituito da `Sketch.addGeometry`).
    * `pointpos1`, `pointpos2` dovrebbe essere `1` per il punto iniziale e `2` per il punto finale.
    * `geoidpoint` e `pointpos` in PerpendicularViaPoint sono gli indici che specificano il punto di perpendicolarità.

La pagina [Sketcher scripting](/Sketcher_scripting/it "Sketcher scripting/it") spiega i valori che possono essere utilizzati per `icurve1`, `icurve2`, `pointpos1`, `pointpos2` e `geoidpoint` e contiene ulteriori esempi su come creare vincoli da script Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainPerpendicular/it&oldid=1509624>"