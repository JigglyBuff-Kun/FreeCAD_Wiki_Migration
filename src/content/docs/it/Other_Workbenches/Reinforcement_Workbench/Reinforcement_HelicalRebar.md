---
title: Arch Armatura elicoidale
---

|                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Armatura elicoidale                                                                                                                                                                                                                                                                 |
| Posizione nel menu                                                                                                                                                                                                                                                                  |
| Arch → Strumenti armatura → Armatura elicoidale 3D/BIM → Reinforcement tools → Armatura elicoidale                                                                                                                                                                                  |
| Ambiente                                                                                                                                                                                                                                                                            |
| [Arch](/Arch_Workbench/it "Arch Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it")                                                                                                                                                                                         |
| Avvio veloce                                                                                                                                                                                                                                                                        |
| _Nessuno_                                                                                                                                                                                                                                                                           |
| Introdotto nella versione                                                                                                                                                                                                                                                           |
| 0.17                                                                                                                                                                                                                                                                                |
| Vedere anche                                                                                                                                                                                                                                                                        |
| [Ambiente Rinforzi](/Reinforcement_Workbench/it "Reinforcement Workbench/it"), [Armatura](/Arch_Rebar/it "Arch Rebar/it"), [Staffe](/Arch_Rebar_Stirrup/it "Arch Rebar Stirrup/it"), [Armatura di pilastro](/Arch_Rebar_ColumnReinforcement/it "Arch Rebar ColumnReinforcement/it") |
|                                                                                                                                                                                                                                                                                     |

## Descrizione

Lo strumento [Armatura elicoidale](/Arch_Rebar_Helical/it "Arch Rebar Helical/it") consente all'utente di creare una barra di rinforzo elicoidale continua all'interno di un oggetto [Struttura](/Arch_Structure/it "Arch Structure/it").

Questo comando fa parte dell'ambiente aggiuntivo [Reinforcement](/Reinforcement_Workbench/it "Reinforcement Workbench/it"), che si può installare con ![](/images/Std_AddonMgr.svg) [Addon manager](/Std_AddonMgr/it "Std AddonMgr/it"), tramite il menu **Strumenti → Addon manager → Reinforcement**.

: ![](/images/Arch_Rebar_Helical_example.png)

Una barra di rinforzo elicoidale continua all'interno di una [Struttura](/Arch_Structure/it "Arch Structure/it")

## Utilizzo

1. Selezionare una qualsiasi faccia dell'oggetto ![](/images/Arch_Structure.svg) [Struttura](/Arch_Structure/it "Arch Structure/it").
2. Quindi selezionare ![](/images/Arch_Rebar_Helical.svg) [Armatura elicoidale](/Arch_Rebar_Helical/it "Arch Rebar Helical/it") dagli strumenti dell'armatura.
3. Sul lato sinistro dello schermo appare un [pannello](/Task_panel/it "Task panel/it") come quello sottostante.
4. Selezionare l'orientamento desiderato.
5. Fornire i dati per 'Copriferro sinistro', 'Copriferro destro', 'Top Cover', 'Bottom Cover', 'Front Cover', 'Bent Angle', 'Bent Factor', 'Rounding' e 'Diametro' dell'armatura.
6. Selezionare la modalità di distribuzione 'Quantità' o 'Passo'.
   - Se è selezionato 'Passo', l'utente può anche optare per un [Passo personalizzato](/Custom_Spacing/it "Custom Spacing/it").
7. Usa lato selezionato serve per verificare o modificare la faccia per la distribuzione dell'armatura.
8. Cliccare OK o Applica per generare l'armatura.
9. Cliccare Annulla per uscire dal pannello.

![](/images/HelicalRebarDialog.png)

Pannello per lo strumento Armatura elicoidale di Arch

## Proprietà

- Dati**Side Cover**: La distanza tra l'armatura e la faccia curva.
- Dati**Bottom Cover**: La distanza tra l'armatura e la parte inferiore della struttura. Copriferro inferiore
- Dati**Top Cover**: La distanza tra l'armatura e la parte superiore della struttura. Copriferro superiore
- Dati**Pitch**: Il passo dell'elica, che è l'altezza di un giro completo di elica, misurato parallelo all'asse dell'elica.
- Dati**Diameter**: Diametro della barra elicoidale.

## Scripting

_Vedere anche:_ [API Arch](/Arch_API/it "Arch API/it"), [API Reinforcement](/Reinforcement_API/it "Reinforcement API/it") e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Armatura elicoidale può essere usato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando la seguente funzione:

```
Rebar = makeHelicalRebar(s_cover, b_cover, diameter, t_cover, pitch, structure=None, facename=None)

```

- Crea un oggetto `Rebar` da una data `structure`, che è una [Struttura](/Arch_Structure/it "Arch Structure/it"), e da una `facename`, che è una faccia di quella struttura.
  - Se non è data nessuna `structure` e neppure una `facename`, prende come riferimento la faccia selezionata dall'utente..
- `s_cover`, `b_cover`, e `t_cover` sono le distanze di offset interne per gli elementi dell'armatura rispetto alle facce della struttura. Sono rispettivamente gli offset laterali, inferiori e superiori.
- `diameter` è il diametro della spirale di rinforzo all'interno della struttura.
- `pitch` è il parametro che determina la distanza tra le spire dell'armatura.

### Esempio

```
import FreeCAD, Draft, Arch, HelicalRebar

Circle = Draft.makeCircle(radius=250)
Structure = Arch.makeStructure(Circle)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = HelicalRebar.makeHelicalRebar(10, 50, 8, 50, 50, structure, "Face2")

```

### Edition of the rebar

### Modifica delle barre

È possibile modificare le proprietà dell'armatura con la seguente funzione:

```
editHelicalRebar(Rebar, s_cover, b_cover, diameter, t_cover, pitch, structure=None, facename=None)

```

- `Rebar` è l'oggetto `HelicalRebar` creato in precedenza.
- Gli altri parametri sono gli stessi richiesti dalla funzione `makeHelicalRebar()`.
- `structure` e `facename` possono essere omesse in modo che l'armatura rimanga nella struttura originale.

```
import HelicalRebar

HelicalRebar.editHelicalRebar(Rebar, 20, 100, 20, 20, 100)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_HelicalRebar/it&oldid=1433640>"
