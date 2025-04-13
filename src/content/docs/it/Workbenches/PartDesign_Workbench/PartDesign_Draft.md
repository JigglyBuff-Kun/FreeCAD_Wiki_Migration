---
title: Part Design Sformo
---
|  |
| --- |
| Sformo |
| Posizione nel menu |
| PartDesign → Sformo |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| *Nessuno* |
|  |

## Description

### Descrizione

Questo strumento crea uno sformo angolare (inclinazione delle facce) sulle facce selezionate di un oggetto. Nella struttura del progetto viene creata una nuova voce '*Draft* indipendente, seguita da un numero sequenziale il documento contiene già altri elementi Draft.

|  |  |
| --- | --- |
| Select one or more faces of the object before starting the tool. Here, 2 faces have been selected.    Showing Draft Parameters in TaskPanel.    2 faces have been added, and a 10 deg. draft applied. The bottom plane has remained dimensionally stable, while the draft has made the top plane smaller.    The Neutral Plane has been changed to the top. Now, the top plane has stayed dimensionally stable, while the draft has made the bottom plane larger.    Pull direction is set to the lower right edge, resulting in the draft pulling to the left.    Checking the Reverse Direction box has applied an inward draft rather than outward. |  |

## Usage

### Add a draft

|  |  |
| --- | --- |
| Sono state inserite 2 facce ed è stato impostato uno sformo di 10 gradi. La parte inferiore è rimasta dimensionalmente stabile e lo sformo ha ridotto la parte superiore.    Il Piano Neutro (Neutral Plane) è stato spostato sulla faccia superiore. Ora il piano superiore è rimasto stabile mentre il piano inferiore è diventato più grande.    La Direzione di trascinamento (Pull direction) è impostata secondo lo spigolo inferiore destro e questo produce uno sformo verso sinistra.    Selezionando la casella Reverse pull Direction si è applicato uno sformo verso l'interno invece che verso l'esterno. | Utilizzo  1. Selezionare una o più facce di un oggetto, quindi avviare lo strumento facendo clic sulla sua icona o nel menu. 2. In **Parametri di sformo** della scheda Azioni, impostare i parametri richiesti e/o le opzioni come descritto di seguito. 3. Fare clic su OK per confermare.  * Per modificare lo sformo dopo la sua creazione, fare doppio clic sulla relativa voce nell'albero del Progetto, oppure fare clic con il tasto destro del mouse e selezionare **Modifica sformo**.      Parametri e OpzioniAggiungi faccia / Rimuovi faccia Cliccare su **Aggiungi faccia** o su **Rimuovi faccia**, poi selezionare una faccia per aggiornare la lista delle facce attive. Se è necessario ripetere l'operazione. Angolo di sformo Impostare l'**angolo di sformo** inserendo il valore, o facendo clic sulle frecce su / giù. L'angolo di sformo applicato viene mostrato in tempo reale. Piano neutro Cliccare su **Piano neutro** poi selezionare il piano che non deve essere dimensionalmente modificato. La modifica viene mostrata in tempo reale. Pull Direction Fare clic su **Pull direction** (direzione di trascinamento), quindi selezionare un bordo. Pull Direction è efficace solo se è stato impostato il Piano neutro. I risultati possono essere imprevedibili. Reverse Pull Direction Selezionare **Reverse pull direction** per commutare tra positivo e negativo l'angolo dello sformo.       Casi particolari Lo strumento **Sformo** funziona solo su facce che sono normali tra loro. Se ci sono delle facce tangenziali collegate alla faccia a cui si desidera applicare uno sformo, lo strumento non funziona. Spesso l'operazione di sformo fallisce perché si tenta di applicarla a una faccia a cui è già applicato un raccordo o uno smusso. In questo caso, rimuovere la superficie tangenziale, applicare lo sformo desiderato, poi riapplicare il raccordo o lo smusso. |

:   *Remember*:

    * Since there must be at least one face for the feature, the last remaining face in the list cannot be removed.

### Edit a draft

1. Do one of the following:
   * Double-click the Draft object in the [Tree view](/Tree_view "Tree view").
   * Right-click the Draft object in the [Tree view](/Tree_view "Tree view") and select **Edit Draft** from the context menu.
2. The **Draft parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
3. Press the OK button to finish.

## Options

* **Add face**: Add faces to the selection by pressing the Add face button and selecting more faces.
* **Remove face**: Choose a way to remove faces from the selection:
  + Select one or more faces in the list and press the Del key or right-click the list and select **Remove** from the context menu.
  + Press the Remove face button. All previously selected faces are highlighted in purple. Select each face to be removed.
* **Draft angle**: Set the Draft angle either by entering a value or by clicking the up/down arrows.
* **Neutral plane**: Set the the neutral plane by pressing the Neutral plane button and selecting the plane that must not change dimensionally.
* **Pull direction**: Set the the pull direction by pressing the Pull direction button, then select an edge. Pull Direction is only effective if the Neutral Plane has been set. Results can be unpredictable.
* **Reverse pull direction**: Invert the pull direction by checking the **Reverse pull direction** checkbox. This will toggle the draft between positive and negative angles.

## Notes

* The Draft tool will only work on faces that are not tangentially connected to other faces. A common mistake is to attempt to apply draft to a face that already has a fillet applied to it. To solve this, remove the fillet, apply the draft as needed, then re-apply the fillet.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A PartDesign Draft object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Dati**Angle** (`Angle`): Cannot be negative. Default: `1.5 °`.
* Dati**Reversed** (`Bool`): Default: `false`.
* Dati**Base** (`LinkSub`): Sub-link to the parent feature's list of selected edges and faces.
* Dati**Support Transform** (`Bool`): Include the base additive/subtractive shape when used in pattern features. If disabled, only the dressed part of the shape is used for patterning. Default: `false`.
* Dati (hidden)**Add Sub Shape** (`PartShape`)
* Dati (hidden)**Base Feature** (`Link`): Link to the parent feature.
* Dati (hidden)**\_ Body** (`LinkHidden`): Link to the parent body.

Draft

* Dati**Neutral Plane** (`LinkSub`): Sub-link to the parent feature's list containing the neutral plane.
* Dati**Pull Direction** (`LinkSub`)

Part Design

* Dati**Refine** (`Bool`): Refine shape (clean up redundant edges) after adding/subtracting. The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Draft/it&oldid=1335716>"