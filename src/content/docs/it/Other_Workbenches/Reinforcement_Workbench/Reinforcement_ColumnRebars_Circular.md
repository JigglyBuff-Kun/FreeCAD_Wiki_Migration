---
title: Arch Armatura di colonna
---

|                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Armatura di colonna                                                                                                                                                                                                                                                                           |
| Posizione nel menu                                                                                                                                                                                                                                                                            |
| Reinforcement → Column Reinforcement, Arch → Strumenti armatura                                                                                                                                                                                                                               |
| Ambiente                                                                                                                                                                                                                                                                                      |
| [Arch](/Arch_Workbench/it "Arch Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it")                                                                                                                                                                                                   |
| Avvio veloce                                                                                                                                                                                                                                                                                  |
| _Nessuno_                                                                                                                                                                                                                                                                                     |
| Introdotto nella versione                                                                                                                                                                                                                                                                     |
| 0.19                                                                                                                                                                                                                                                                                          |
| Vedere anche                                                                                                                                                                                                                                                                                  |
| [Reinforcement](/Reinforcement_Workbench/it "Reinforcement Workbench/it"), [Armatura di pilastro con 2 staffe e 6 barre](/Arch_Rebar_ColumnReinforcement_TwoTiesSixRebars/it "Arch Rebar ColumnReinforcement TwoTiesSixRebars/it"), [Armatura personalizzata](/Arch_Rebar/it "Arch Rebar/it") |
|                                                                                                                                                                                                                                                                                               |

## Descrizione

Lo strumento [Armatura di colonna](/Arch_Rebar_Circular_ColumnReinforcement/it "Arch Rebar Circular ColumnReinforcement/it") consente all'utente di creare delle barre di rinforzo all'interno di un oggetto [Struttura](/Arch_Structure/it "Arch Structure/it") Colonna.

Questo comando fa parte dell'ambiente aggiuntivo [Reinforcement](/Reinforcement_Workbench/it "Reinforcement Workbench/it"), che si può installare con ![](/images/Std_AddonMgr.svg) [Addon manager](/Std_AddonMgr/it "Std AddonMgr/it"), tramite il menu **Strumenti → Addon manager → Reinforcement**.

Three usage examples are available:

- [Single tie rectangular column](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars")
- [Two ties six rebars rectangular column](/Reinforcement_ColumnRebars_TwoTiesSixRebars "Reinforcement ColumnRebars TwoTiesSixRebars")
- [Circular column (see below)](#Usage)

![](/images/Arch_Rebar_Circular_ColumnReinforcement_example.png)

Rinforzo di colonna all'interno di una [Struttura](/Arch_Structure/it "Arch Structure/it") colonna

## Utilizzo

1. Select top face of a previously created ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") object.

2. Then select ![](/images/Reinforcement_ColumnRebars.svg) [Column Reinforcement](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars") from the rebar tools.

3. A dialog box will pop-out on screen as shown below.

: ![](/images/ColumnReinforcementDialog_Ties.png)

Finestra di dialogo per lo strumento Armatura di colonna

4. Select the Circular Column radio button in column reinforcement dialog.

: ![](/images/CircularColumnReinforcementDialog.png)

Finestra di dialogo per l'armatura della colonna circolare

5. Give inputs for data related to circular column reinforcement.

6. Click OK or Apply to generate circular column reinforcement.

7. Click Cancel to exit the dialog box.

## Proprietà

**Helical Rebars:**

**Helical Rebars:**

- Dati**Side Cover**: La distanza tra l'armatura e la faccia curva.
- Dati**Top Cover**: La distanza tra l'armatura e la parte superiore della struttura. Copriferro superiore
- Dati**Bottom Cover**: La distanza tra l'armatura e la parte inferiore della struttura. Copriferro inferiore
- Dati**Pitch**: Il passo dell'elica, che è l'altezza di un giro completo di elica, misurato parallelo all'asse dell'elica.
- Dati**Diameter**: Diametro della barra elicoidale.

**Main Rebars:**

**Main Rebars:**

- Dati**Top Offset**: La distanza tra l'armature e la faccia superiore della struttura.
- Dati**Bottom Offset**: La distanza tra l'armature e la faccia inferiore della struttura.
- Dati**Diameter**: Diametro delle armature principali.
- Dati**Number**: Il numero di armature principali.
- Dati**Angle**: La distanza angolare tra le legature.

## Script

_Vedere anche:_ [API Arch](/Arch_API/it "Arch API/it"), [API di Reinforcement](/Reinforcement_API/it "Reinforcement API/it") e [Basi di script per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Armatura di colonna può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando la seguente funzione:

### Creare una armatura di colonna

```
RebarGroup = CircularColumn.makeReinforcement(
    s_cover,
    helical_rebar_t_offset,
    helical_rebar_b_offset,
    pitch,
    dia_of_helical_rebar,
    main_rebars_t_offset,
    main_rebars_b_offset,
    dia_of_main_rebars,
    number_angle_check,
    number_angle_value,
    structure=None,
    facename=None,
)

```

- Crea un oggetto `RebarGroup` dalla `structure` data, che è una [Arch Structure](/Arch_Structure/it "Arch Structure/it"), e `facename`, che è una faccia di quella struttura .
  - Se non vengono forniti né `structure` né `facename`, verrà utilizzata la faccia selezionata dall'utente come input.
- `s_cover`, `helical_rebar_t_offset` e `helical_rebar_b_offset` sono le distanze di offset interne per l'armatura elicoidale rispetto alle facce della struttura. Sono rispettivamente gli offset laterale, superiore e inferiore.
- `pitch` è il parametro che determina quanto vicini o distanti sono tra loro ciascun anello elicoidale.
- `dia_of_helical_rebar` è il diametro dell'armatura elicoidale all'interno della struttura.
- `main_rebars_t_offset` e `main_rebars_b_offset` sono le distanze di offset interne per le armature principali rispetto alle facce superiore e inferiore della struttura, rispettivamente.
- `dia_of_main_rebars` è il diametro delle armature principali.
- `number_angle_check` se è `True` creerà tante armature principali quante indicate da `number_angle_value`; se è `False` creerà le armature principali con un angolo di `number_spacing_value`, specificato in gradi.
- `number_angle_value` specifica il numero di armature principali o il valore dell'angolo tra le armature principali, a seconda del valore di `number_angle_check`.

#### Esempio

```
import FreeCAD, Draft, Arch
from ColumnReinforcement import CircularColumn

Circle = Draft.makeCircle(radius=250)
Structure = Arch.makeStructure(Circle)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

RebarGroup = CircularColumn.makeReinforcement(
    s_cover=20,
    helical_rebar_t_offset=40,
    helical_rebar_b_offset=40,
    pitch=50,
    dia_of_helical_rebar=8,
    main_rebars_t_offset=20,
    main_rebars_b_offset=20,
    dia_of_main_rebars=16,
    number_angle_check=True,
    number_angle_value=6,
    structure=Structure,
    facename="Face3",
).rebar_group

```

### Edition of Circular Column Reinforcement

### Modificare una armatura di colonna

È possibile modificare le proprietà delle armature elicoidali e principali con la seguente funzione

```
rebar_group = editReinforcement(
    rebar_group,
    s_cover,
    helical_rebar_t_offset,
    helical_rebar_b_offset,
    pitch,
    dia_of_helical_rebar,
    main_rebars_t_offset,
    main_rebars_b_offset,
    dia_of_main_rebars,
    number_angle_check,
    number_angle_value,
    structure=None,
    facename=None,
)

```

- `rebar_group` è il gruppo di oggetti `ColumnReinforcement` creato in precedenza..
- Gli altri parametri sono gli stessi richiesti dalla funzione `makeSingleTieFourRebars()`.
- `structure` e `facename` possono essere omesse in modo che l'armatura rimanga nella struttura originale..

#### Esempio

```
from ColumnReinforcement import CircularColumn

rebar_group = CircularColumn.editReinforcement(
    rebar_group,
    s_cover=30,
    helical_rebar_t_offset=30,
    helical_rebar_b_offset=30,
    pitch=60,
    dia_of_helical_rebar=10,
    main_rebars_t_offset=-30,
    main_rebars_b_offset=-30,
    dia_of_main_rebars=18,
    number_angle_check=False,
    number_angle_value=45,
    structure=Structure,
    facename="Face3",
)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_ColumnRebars_Circular/it&oldid=1433593>"
