---
title: Arch Staffe
---

|                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Staffe                                                                                                                                                                                       |
| Posizione nel menu                                                                                                                                                                           |
| Arch → Strumenti di armatura → Staffa BIM → Reinforcement tools → Staffa                                                                                                                     |
| Ambiente                                                                                                                                                                                     |
| [Arch](/Arch_Workbench/it "Arch Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it")                                                                                                  |
| Avvio veloce                                                                                                                                                                                 |
| _Nessuno_                                                                                                                                                                                    |
| Introdotto nella versione                                                                                                                                                                    |
| 0.17                                                                                                                                                                                         |
| Vedere anche                                                                                                                                                                                 |
| [Reinforcement](/Reinforcement_Workbench/it "Reinforcement Workbench/it"), [Armatura](/Arch_Rebar/it "Arch Rebar/it"), [Armatura elicoidale](/Arch_Rebar_Helical/it "Arch Rebar Helical/it") |
|                                                                                                                                                                                              |

## Descrizione

Lo strumento [Staffa](/Arch_Rebar_Stirrup/it "Arch Rebar Stirrup/it") consente all'utente di creare un set di staffe d'armatura all'interno di un oggetto [Struttura](/Arch_Structure/it "Arch Structure/it").

Questo comando fa parte dell'ambiente [Reinforcement](/Reinforcement_Workbench/it "Reinforcement Workbench/it"), un [ambiente esterno](/External_workbenches/it "External workbenches/it") che si può installare con ![](/images/Std_AddonMgr.svg) [Addon manager](/Std_AddonMgr/it "Std AddonMgr/it"), tramite il menu **Strumenti → Addon manager → Reinforcement**.

![](/images/Arch_Rebar_Stirrup_example.png)

Un set di staffe di rinforzo all'interno di una [Struttura](/Arch_Structure/it "Arch Structure/it")

## Utilizzo

1. Selezionare una qualsiasi faccia dell'oggetto ![](/images/Arch_Structure.svg) [Struttura](/Arch_Structure/it "Arch Structure/it") creato in precedenza.
2. Quindi selezionare ![](/images/Arch_Rebar_Stirrup.svg) [Staffa](/Arch_Rebar_Stirrup/it "Arch Rebar Stirrup/it") dagli strumenti dell'armatura.
3. Sul lato sinistro dello schermo appare un [pannello](/Task_panel/it "Task panel/it") come quello sottostante.
4. Selezionare l'orientamento desiderato.
5. Fornire i dati per 'Copriferro sinistro', 'Copriferro destro', 'Copriferro superiore', 'Copriferro inferiore', 'Copriferro anteriore', 'Angolo di piegatura', 'Fattore di piegatura', 'Arrotondamento' e 'Diametro' dell'armatura.
6. Selezionare la modalità di distribuzione 'Quantità' o 'Passo'.
   - Se è selezionato 'Passo' l'utente può anche optare per una [Passo personalizzato](/Custom_Spacing/it "Custom Spacing/it").
7. Usa lato selezionato serve per verificare o modificare la faccia per la distribuzione dell'armatura.
8. Cliccare OK o Applica per generare l'armatura.
9. Cliccare Annulla per uscire dal pannello.

![](/images/StirrupDialog.png)

Pannello Azioni per lo strumento Staffe armatura di Arch

## Proprietà

- Dati**Orientation**: Decide l'orientamento dell'armatura (es. in basso, in alto, a destra e a sinistra).
- Dati**Front Cover**: La distanza tra l'armatura e la faccia selezionata. Copriferro anteriore
- Dati**Right Cover**: La distanza tra l'estremità destra della barra di destra e la faccia destra della struttura. Copriferro destro
- Dati**Left Cover**: La distanza tra l'estremità sinistra della barra di sinistra e la faccia sinistra della struttura. Copriferro sinistro
- Dati**Bottom Cover**: La distanza tra l'armatura e la parte inferiore della struttura. Copriferro inferiore
- Dati**Top Cover**: La distanza tra l'armatura e la parte superiore della struttura. Copriferro superiore
- Dati**Bent Angle**: L'angolo del gancio finale della staffa.
- Dati**Bent Factor**: Lunghezza del gancio finale della staffa.
- Dati**Amount**: La quantità di barre.
- Dati**Spacing**: La distanza tra gli assi di ogni barra.

## Scripting

_Vedere anche:_ [API Arch](/Arch_API/it "Arch API/it"), [API Reinforcement](/Reinforcement_API/it "Reinforcement API/it") e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Staffe armatura può essere usato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando la seguente funzione:

```
Rebar = makeStirrup(l_cover, r_cover, t_cover, b_cover, f_cover,
                    bentAngle, bentFactor, diameter, rounding, amount_spacing_check, amount_spacing_value,
                    structure=None, facename=None)

```

- Crea un oggetto `Rebar` dalla `structure` data, che è una [Struttura](/Arch_Structure/it "Arch Structure/it"), e da una `facename`, che è una faccia di quella struttura.
  - Se non è data nessuna `structure` e neppure una `facename`, prende come riferimento la faccia selezionata dall'utente.
- `l_cover`, `r_cover`, `t_cover`, `b_cover`, e `f_cover` sono le distanze di offset interne per gli elementi dell'armatura rispetto alle facce della struttura. Sono rispettivamente gli offset sinistro, destro, superiore, inferiore e frontale.
- `diameter` è il diametro delle barre di rinforzo all'interno della struttura.
- `rounding` è il parametro che determina il raggio di curvatura delle barre di armatura quando creano un giro.
- `bentLength` e `bentAngle` definiscono la lunghezza e l'angolo della punta dell'anello di rinforzo.
- Se `amount_spacing_check` è `True` creerà tanti giri come indicato in `amount_spacing_value`; se è `False` crea loop di rinforzo separati dal valore numerico di `amount_spacing_value`.
- `amount_spacing_value` specifica il numero di barre di rinforzo o il valore della separazione tra di esse, secondo come sono indicato in `amount_spacing_check`.

### Esempio

```
import Draft, Arch, Stirrup

# It doesn't work if the structure is not based on a face
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure = Arch.makeStructure(Rect, height=1600)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = Stirrup.makeStirrup(20, 20, 20, 20, 20,
                            115, 4, 8, 2, True, 10, Structure, "Face6")

```

### Edition of the rebar

### Modifica delle barre

È possibile modificare le proprietà dell'armatura con la seguente funzione:

```
editStirrup(Rebar, l_cover, r_cover, t_cover, b_cover, f_cover,
            bentAngle, bentFactor, diameter, rounding, amount_spacing_check, amount_spacing_value,
            structure=None, facename=None)

```

- `Rebar` è l'oggetto `StirrupRebar` creato in precedenza.
- Gli altri parametri sono gli stessi richiesti dalla funzione `makeStirrup()`.
- `structure` e `facename` possono essere omesse in modo che l'armatura rimanga nella struttura originale.

```
import Stirrup

Stirrup.editStirrup(Rebar, 20, 20, 20, 20, 50,
                    100, 4, 14, 8, True, 8)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_StirrupRebar/it&oldid=1433672>"
