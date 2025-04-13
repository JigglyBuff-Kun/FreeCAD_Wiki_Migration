---
title: Arch Armatura a L
---

|                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Armatura a L                                                                                                                                                                                   |
| Posizione nel menu                                                                                                                                                                             |
| Arch → Strumenti di armatura → Armatura a forma di L BIM → Reinforcement tools → Armatura a forma di L                                                                                         |
| Ambiente                                                                                                                                                                                       |
| [Arch](/Arch_Workbench/it "Arch Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it")                                                                                                    |
| Avvio veloce                                                                                                                                                                                   |
| _Nessuno_                                                                                                                                                                                      |
| Introdotto nella versione                                                                                                                                                                      |
| 0.17                                                                                                                                                                                           |
| Vedere anche                                                                                                                                                                                   |
| [Reinforcement](/Reinforcement_Workbench/it "Reinforcement Workbench/it"), [Armature](/Arch_Rebar/it "Arch Rebar/it"), [Armatura sagomata](/Arch_Rebar_BentShape/it "Arch Rebar BentShape/it") |
|                                                                                                                                                                                                |

## Descrizione

Lo strumento [Armatura a L](/Arch_Rebar_LShape/it "Arch Rebar LShape/it") consente all'utente di creare un set di barre d'armatura a forma di L all'interno di un oggetto [Struttura](/Arch_Structure/it "Arch Structure/it").

Questo comando fa parte dell'ambiente [Reinforcement](/Reinforcement_Workbench/it "Reinforcement Workbench/it"), un [ambiente esterno](/External_workbenches/it "External workbenches/it") che si può installare con ![](/images/Std_AddonMgr.svg) [Addon manager](/Std_AddonMgr/it "Std AddonMgr/it"), tramite il menu **Strumenti → Addon manager → Reinforcement**.

![](/images/Arch_Rebar_LShape_example.png)

Quattro serie di barre di rinforzo a forma di L all'interno di una [Struttura](/Arch_Structure/it "Arch Structure/it")

## Utilizzo

1. Selezionare una qualsiasi faccia dell'oggetto ![](/images/Arch_Structure.svg) [Struttura](/Arch_Structure/it "Arch Structure/it") creato in precedenza.
2. Quindi selezionare ![](/images/Arch_Rebar_LShape.svg) [Armatura a L](/Arch_Rebar_LShape/it "Arch Rebar LShape/it") dagli strumenti dell'armatura.
3. Sul lato sinistro dello schermo appare un [pannello](/Task_panel/it "Task panel/it") come quello sottostante.
4. Selezionare l'orientamento desiderato.
5. Fornire i dati per 'Copriferro sinistro', 'Copriferro destro', 'Copriferro superiore', 'Copriferro inferiore', 'Copriferro anteriore', 'Bent Angle', 'Bent Factor', 'Arrotondamento' e 'Diametro' dell'armatura.
6. Selezionare la modalità di distribuzione 'Quantità' o 'Passo'.
   - Se è selezionato 'Passo' l'utente può anche optare per una [Passo personalizzato](/Custom_Spacing/it "Custom Spacing/it").
7. Usa lato selezionato serve per verificare o modificare la faccia per la distribuzione dell'armatura.
8. Cliccare OK o Apply per generare l'armatura.
9. Cliccare Annulla per uscire dal pannello.

![](/images/LShapeDialog.png)

Pannello Azioni per lo strumento Armatura a L di Arch

## Proprietà

- Dati**Orientation**: Decide l'orientamento dell'armatura (es. verso il basso, verso l'alto, a destra o a sinistra).
- Dati**Front Cover**: La distanza tra l'armatura e la faccia selezionata. Copriferro anteriore
- Dati**Right Cover**: La distanza tra l'estremità destra della barra di destra e la faccia destra della struttura. Copriferro destro
- Dati**Left Cover**: La distanza tra l'estremità sinistra della barra di sinistra e la faccia sinistra della struttura. Copriferro sinistro
- Dati**Bottom Cover**: La distanza tra l'armatura e la parte inferiore della struttura. Copriferro inferiore
- Dati**Top Cover**: La distanza tra l'armatura e la parte superiore della struttura. Copriferro superiore
- Dati**Rounding**: Il raggio di curvatura da applicare agli angoli delle barre, espresso quantità di diametro delle barre.
- Dati**Amount**: La quantità di barre.
- Dati**Spacing**: La distanza tra gli assi di ogni barra.

## Scripting

_Vedere anche:_ [API Arch](/Arch_API/it "Arch API/it"), [API Reinforcement](/Reinforcement_API/it "Reinforcement API/it") e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Armatura a L può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
Rebar = makeLShapeRebar(f_cover, b_cover, l_cover, r_cover,
                        diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom Left",
                        structure=None, facename=None):

```

- Crea un oggetto `Rebar` dalla `structure` data, che è una [Struttura](/Arch_Structure/it "Arch Structure/it"), e da una `facename`, che è una faccia di quella struttura.
  - Se non è data nessuna `structure` e neppure una `facename`, prende come riferimento la faccia selezionata dall'utente.
- `f_cover`, `b_cover`, `l_cover`, `r_cover`, e `t_cover` sono le distanze di offset interne per gli elementi dell'armatura rispetto alle facce della struttura. Sono rispettivamente gli offset anteriore, inferiore, sinistro, destro e superiore.
- `diameter` è il diametro delle barre di rinforzo all'interno della struttura.
- `rounding` è il parametro che determina il raggio di curvatura al centro delle barre di armatura.
- Se `amount_spacing_check` è `True` crea tante barre di rinforzo quante sono definite da `amount_spacing_value`; se è `False` crea le barre di rinforzo separate dal valore numerico indicato in `amount_spacing_value`.
- `amount_spacing_value` specifica il numero di barre di rinforzo o il valore della separazione tra di esse, secondo come sono indicate in `amount_spacing_check`.
- `orientation` specifica l'orientamento della barra d'armatura; può essere `"Bottom Right"`, `"Bottom Left"`, `"Top Right"`, o `"Top Left"`.

### Esempio

```
import FreeCAD, Arch, LShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=400)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = LShapeRebar.makeLShapeRebar(50, 20, 20, 20,
                                    8, 50, 4, True, 6, "Bottom Left", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = LShapeRebar.makeLShapeRebar(50, 50, 20, 20,
                                     8, 50, 4, True, 6, "Bottom Left", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Edition of the rebar

### Modifica delle barre

È possibile modificare le proprietà dell'armatura con la seguente funzione:

```
editLShapeRebar(Rebar, f_cover, b_cover, l_cover, r_cover,
                diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation,
                structure=None, facename=None)

```

- `Rebar` è l'oggetto `LShapeRebar` creato in precedenza.
- Gli altri parametri sono gli stessi richiesti dalla funzione `makeLShapeRebar()`.
- `structure` e `facename` possono essere omesse in modo che l'armatura rimanga nella struttura originale.

```
import LShapeRebar

LShapeRebar.editLShapeRebar(Rebar, 50, 50, 20, 20,
                            12, 50, 6, True, 5, "Top Right")

LShapeRebar.editLShapeRebar(Rebar2, 50, 50, 20, 20,
                            12, 70, 6, True, 5, "Top Right")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_LShapeRebar/it&oldid=1433650>"
