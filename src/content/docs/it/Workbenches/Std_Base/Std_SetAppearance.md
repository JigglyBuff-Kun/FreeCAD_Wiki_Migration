---
title: Visualizza Impostare l'aspetto degli oggetti
---

|                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Impostare l'aspetto degli oggetti                                                                                                                                                    |
| Posizione nel menu                                                                                                                                                                   |
| Visualizza → Aspetto...                                                                                                                                                              |
| Ambiente                                                                                                                                                                             |
| [Material](/Material_Workbench/it "Material Workbench/it"), [Part](/Part_Workbench/it "Part Workbench/it"), [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") e altro |
| Avvio veloce                                                                                                                                                                         |
| Ctrl+D                                                                                                                                                                               |
| Introdotto nella versione                                                                                                                                                            |
| -                                                                                                                                                                                    |
| Vedere anche                                                                                                                                                                         |
| [Impostare il materiale](/Std_SetMaterial/it "Std SetMaterial/it"),[Part Colore per faccia](/Part_ColorPerFace/it "Part ColorPerFace/it")                                            |
|                                                                                                                                                                                      |

## Descrizione

Il comando **Aspetto** imposta le proprietà di visualizzazione degli oggetti selezionati.

Questa pagina è stata aggiornata per la versione 1.0.

![](/images/Std_SetAppearance_Taskpanel.png)

Il pannello delle azioni delle proprietà di Visualizzazione

## Utilizzo

1. Selezionare uno o più oggetti.
2. Esistono diversi modi per invocare il comando:
   - Selezionare l'opzione **Visualizza → ![](/images/Std_SetAppearance.svg) Aspetto...** dal menu.
   - Selezionare l'opzione **![](/images/Std_SetAppearance.svg) Aspetto...** dal menu contestuale [Vista albero](/Tree_view/it "Tree view/it") o dal menu contestuale [Vista 3D](/3D_view/it "3D view/it").
   - Usare la scorciatoia da tastiera: Ctrl+D.
3. Si apre il pannello delle azioni **Proprietà di visualizzazione**. Vedere [Opzioni](#Opzioni).
4. Modificare una o più proprietà.
5. Gli oggetti vengono aggiornati immediatamente.
6. Facoltativamente selezionare uno o più nuovi oggetti di cui si desidera modificarne le proprietà.
7. Premere il pulsante Chiudi per chiudere il pannello delle azioni e terminare il comando.

## Opzioni

### Modalità di visualizzazione

- Selezionare una Vista**Modalità di visualizzazione** dall'elenco a discesa. Le opzioni disponibili sono: `Linee piatte`, `Ombreggiato` (non per oggetti [Draft](/Draft_Workbench/it "Draft Workbench/it")), `Fil di ferro` e `Punti`. Vedere il comando [Stile di disegno](/Std_DrawStyle/it "Std DrawStyle/it") per maggiori informazioni.

### Materiale

- Selezionare un materiale dall'elenco.
  1. Selezionare facoltativamente una categoria dall'elenco a discesa sotto l'elenco dei materiali per filtrare i materiali. Le categorie disponibili sono `Aspetto base`, `Aspetto texture` (tali materiali non sono ancora disponibili) e `Tutti i materiali`.
  2. Facoltativamente, premere il pulsante Avvia editor per avviare l'[Editor materiale](/Material_Edit/it "Material Edit/it").
- **Aspetto personalizzato:** premere il pulsante ... per sovrascrivere l'aspetto del materiale. Si apre la finestra di dialogo **Proprietà del materiale**. Vedere [Part Colore per faccia](/Part_ColorPerFace/it#Utilizzo "Part ColorPerFace/it").
- **Color plot:** non supportata al momento.
- **Colore linea:** imposta la proprietà Vista**Line Color**. Premere il pulsante per aprire la finestra di dialogo Seleziona colore.
- **Colore punto:** imposta la proprietà Vista**Point Color**. Premere il pulsante per aprire la finestra di dialogo Seleziona colore.

### Visualizzazione

- **Dimensione punto:** imposta la proprietà Vista**Point Size** (in pixel).
- **Spessore linea:** imposta la proprietà Vista**Line Width** (in pixel).
- **Transparenza:** imposta la proprietà Vista**Transparency** (in percentuale). 0% è opaco, 100% è completamente trasparente.
- **Trasparenza linea:** non supportata al momento.

## Note

- Le proprietà di visualizzazione menzionate possono essere modificate anche nell'[Editor delle proprietà](/Property_editor/it "Property editor/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SetAppearance/it&oldid=1544603>"
