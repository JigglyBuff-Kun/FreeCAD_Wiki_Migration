---
title: Arch Armatura di trave
---

|                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Armatura di trave                                                                                                                                                                                                                                                                      |
| Posizione nel menu                                                                                                                                                                                                                                                                     |
| Arch → Strumenti di armatura → Armatura trave 3D/BIM → Reinforcement tools → Armatura trave                                                                                                                                                                                            |
| Ambiente                                                                                                                                                                                                                                                                               |
| [Arch](/Arch_Workbench/it "Arch Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it")                                                                                                                                                                                            |
| Avvio veloce                                                                                                                                                                                                                                                                           |
| _Nessuno_                                                                                                                                                                                                                                                                              |
| Introdotto nella versione                                                                                                                                                                                                                                                              |
| 0.19                                                                                                                                                                                                                                                                                   |
| Vedere anche                                                                                                                                                                                                                                                                           |
| [Ambiente Rinforzi](/Reinforcement_Workbench/it "Reinforcement Workbench/it"), [Armatura](/Arch_Rebar/it "Arch Rebar/it"), [Armatura di pilastro con due staffe e sei barre](/Arch_Rebar_ColumnReinforcement_TwoTiesSixRebars/it "Arch Rebar ColumnReinforcement TwoTiesSixRebars/it") |
|                                                                                                                                                                                                                                                                                        |

## Descrizione

Lo strumento [Armatura trave](/Arch_Rebar_BeamReinforcement/it "Arch Rebar BeamReinforcement/it") consente all'utente di creare delle barre di rinforzo all'interno di un oggetto [Struttura](/Arch_Structure/it "Arch Structure/it") Trave.

Questo comando fa parte dell'ambiente aggiuntivo [Reinforcement](/Reinforcement_Workbench/it "Reinforcement Workbench/it"), che si può installare con ![](/images/Std_AddonMgr.svg) [Addon manager](/Std_AddonMgr/it "Std AddonMgr/it"), tramite il menu **Strumenti → Addon manager → Reinforcement**.

![](/images/Arch_Rebar_BeamReinforcement_example.png)

Rinforzo di trave all'interno di una [Struttura](/Arch_Structure/it "Arch Structure/it") trave

## Utilizzo

1. Seleziona la faccia a destra di un oggetto ![](/images/Arch_Structure.svg) [Struttura](/Arch_Structure/it "Arch Structure/it") trave precedentemente creato, avente la lunghezza sull'asse x. Oppure seleziona la faccia anteriore di un oggetto ![](/images/Arch_Structure.svg) [Struttura](/Arch_Structure/it "Arch Structure/it") trave precedentemente creata, avente la lunghezza sull'asse y.

2. Quindi selezionare ![](/images/Arch_Rebar_ColumnReinforcement.svg) [Rinforzo di trave](/Arch_Rebar_BeamReinforcement/it "Arch Rebar BeamReinforcement/it") dagli Strumenti armatura.

3. Appare una finestra di dialogo come quella mostrata sotto.

: ![](/images/BeamReinforcementDialog_Stirrups.png)

Finestra di dialogo per lo strumento Rinforzo di trave

4. Selezionare il tipo desiderato di rinforzo di trave.

5. Fornire gli input per i dati relativi alle staffe.

6. Fare clic su Avanti e la finestra di dialogo viene aggiornata come mostrato di seguito.

: ![](/images/BeamReinforcementDialog_TopRebars.png)

Finestra di dialogo per i dati della parte superiore dell'armatura

7. Impostare i dati per le armature superiori.

: Per editare i valori Number#Diameter@Offset, fare clic sul pulsante Modifica accanto all'etichetta Number#Diameter@Offset. Appare una finestra di dialogo come mostrato di seguito.

: ![](/images/Beam_TopReinforcement_NumberDiameterOffset.png)

: Per modificare il valore di Rebar Type, fare clic sul pulsante Modifica accanto all'etichetta Rebar Type. Appare una finestra di dialogo come mostrato di seguito.

: ![](/images/Beam_TopReinforcement_RebarType.png)

: Per modificare il valore di Hook Orientation, fare clic sul pulsante Modifica accanto all'etichetta Hook Orientation. Appare una finestra di dialogo come mostrato di seguito.

: ![](/images/Beam_TopReinforcement_HookOrientation.png)

: Per modificare il valore di Hook Extension, fare clic sul pulsante Modifica accanto all'etichetta Hook Extension. Appare una finestra di dialogo come mostrato di seguito.

: ![](/images/Beam_TopReinforcement_HookExtension.png)

: Per modificare il valore di Rounding, fare clic sul pulsante Modifica accanto all'etichetta Rounding. Appare una finestra di dialogo come mostrato di seguito.

: ![](/images/Beam_TopReinforcement_LRebarRounding.png)

: Per modificare il valore di Layer Spacing, fare clic sul pulsante Modifica accanto all'etichetta Layer Spacing. Appare una finestra di dialogo come mostrato di seguito.

: ![](/images/Beam_TopReinforcement_LayerSpacing.png)

8. Fare clic su Avanti e la finestra di dialogo viene aggiornata come mostrato di seguito.

: ![](/images/BeamReinforcementDialog_BottomRebars.png)

Finestra di dialogo per i dati della parte inferiore dell'armatura

9. Impostare i dati per le armature inferiori in modo simile ai dati delle armature superiori.

10. Fare clic su Avanti e la finestra di dialogo viene aggiornata come mostrato di seguito.

: ![](/images/BeamReinforcementDialog_LeftRebars.png)

Definire i dati per le barre di rinforzo sul lato sinistro.

11. Impostare i dati per le armature di taglio a sinistra.

: Per editare i valori Number#Diameter@Offset, fare clic sul pulsante Modifica accanto all'etichetta Number#Diameter@Offset. Appare una finestra di dialogo come mostrato di seguito.

: ![](/images/Beam_ShearReinforcement_NumberDiameterOffset.png)

: Per modificare il valore di Rebar Type, fare clic sul pulsante Modifica accanto all'etichetta Rebar Type. Appare una finestra di dialogo come mostrato di seguito.

: ![](/images/Beam_ShearReinforcement_RebarType.png)

: Per modificare il valore di Hook Orientation, fare clic sul pulsante Modifica accanto all'etichetta Hook Orientation. Appare una finestra di dialogo come mostrato di seguito.

: ![](/images/Beam_ShearReinforcement_HookOrientation.png)

: Per modificare il valore di Hook Extension, fare clic sul pulsante Modifica accanto all'etichetta Hook Extension. Appare una finestra di dialogo come mostrato di seguito.

: ![](/images/Beam_ShearReinforcement_HookExtension.png)

: Per modificare il valore di Rounding, fare clic sul pulsante Modifica accanto all'etichetta Rounding. Appare una finestra di dialogo come mostrato di seguito.

: ![](/images/Beam_ShearReinforcement_LRebarRounding.png)

12. Fare clic su Avanti e la finestra di dialogo viene aggiornata come mostrato di seguito.

: ![](/images/BeamReinforcementDialog_RightRebars.png)

Definire i dati per le barre di rinforzo sul lato destro.

13. Impostare i dati per le armature di taglio a destra in modo simile ai dati delle armature di taglio a sinistra.

14. Cliccare su OK o su Applica per generare l'armatura.

15. Cliccare Cancella per uscire dalla finestra di dialogo.

## Proprietà

**Stirrups:**

**Staffe:**

- Dati**Left Cover**: la distanza tra l'estremità sinistra della staffa e la faccia sinistra della struttura - copriferro a sinistra.
- Dati**Right Cover**: la distanza tra l'estremità destra della staffa e la faccia destra della struttura - copriferro a destra.
- Dati**Top Cover**: la distanza tra la staffa e la faccia superiore della struttura.
- Dati**Bottom Cover**: la distanza tra la staffa e la faccia inferiore della struttura.
- Dati**Offset**: la distanza tra la staffa e la faccia selezionata indietro della struttura.
- Dati**Diameter**: diametro della staffa.
- Dati**Bent Angle**: l'angolo dipiega definisce l'angolo alle estremità di una staffa.
- Dati**Extension Factor**: il fattore di estensione definisce la lunghezza dell'estremità della staffa, espressa in numero di volte il diametro.
- Dati**Number**: il numero di staffe.
- Dati**Spacing**: la distanza tra gli assi di ogni staffa.

**Top/Bottom Reinforcement Rebars:** Rebars present at top/bottom side of beam

**Top/Bottom Reinforcement Rebars:** barre di armatura presenti nella parte superiore e inferiore della trave

- Dati**NumberDiameterOffset**: Una tupla della stringa Number#Diameter@Offset. Ogni elemento della tupla rappresenta il rinforzo per ogni nuovo livello.
- Dati**Rebar Type**: Elenco di tuple del tipo di barre di rinforzo.
- Dati**Hook Orientation**: Elenco di tuple di orientamento dei ganci a forma di L.
- Dati**Hook Extension**: Elenco di tuple di lunghezza del gancio a forma di L delle armature.
- Dati**Rounding**: Elenco di tuple del valore di arrotondamento da applicare agli angoli delle armature a forma di L, espresse in numero di volte il diametro.
- Dati**Layer Spacing**: Elenco di spaziatura tra due strati di rinforzo consecutivi.

**Left/Right Reinforcement Rebars:** Rebars present at left/right side of beam

**Left/Right Reinforcement Rebars:** barre di armatura presenti nella parte sinistra e destra della trave

- Dati**NumberDiameterOffset**: Stringa di Number#Diameter@Offset per barre di rinforzo..
- Dati**Rebar Type**: Elenco dei tipi di barre di rinforzo.
- Dati**Hook Orientation**: Lista per l'orientamento dei ganci a forma di L..
- Dati**Hook Extension**: Lista per la lunghezza del gancio a forma di L delle armature.
- Dati**Rounding**: Lista per il valore di arrotondamento da applicare agli angoli delle armature a forma di L, espresse in numero di volte il diametro.
- Dati**Rebar Spacing**: Elenco di spaziatura tra due strati di rinforzo consecutivi.

## Script

_Vedere anche:_ [API Arch](/Arch_API/it "Arch API/it"), [API di Reinforcement](/Reinforcement_API/it "Reinforcement API/it") e [Basi di script per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Rinforzo di trave può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") utilizzando la seguente funzione:

### Creare staffe con due ganci

```
RebarGroup = makeReinforcement(
    l_cover_of_stirrup,
    r_cover_of_stirrup,
    t_cover_of_stirrup,
    b_cover_of_stirrup,
    offset_of_stirrup,
    bent_angle,
    extension_factor,
    dia_of_stirrup,
    number_spacing_check,
    number_spacing_value,
    top_reinforcement_number_diameter_offset,
    top_reinforcement_rebar_type,
    top_reinforcement_layer_spacing,
    bottom_reinforcement_number_diameter_offset,
    bottom_reinforcement_rebar_type,
    bottom_reinforcement_layer_spacing,
    left_rebars_number_diameter_offset,
    left_rebars_type,
    left_rebars_spacing,
    right_rebars_number_diameter_offset,
    right_rebars_type,
    right_rebars_spacing,
    top_reinforcement_l_rebar_rounding=2,
    top_reinforcement_hook_extension=40,
    top_reinforcement_hook_orientation="Front Inside",
    bottom_reinforcement_l_rebar_rounding=2,
    bottom_reinforcement_hook_extension=40,
    bottom_reinforcement_hook_orientation="Front Inside",
    left_l_rebar_rounding=2,
    left_rebars_hook_extension=40,
    left_rebars_hook_orientation="Front Inside",
    right_l_rebar_rounding=2,
    right_rebars_hook_extension=40,
    right_rebars_hook_orientation="Front Inside",
    structure=None,
    facename=None,
)

```

- Crea un oggetto `RebarGroup` da una data `structure`, che è una [Struttura](/Arch_Structure/it "Arch Structure/it"), e da una `facename`, che è una faccia di quella struttura.
  - Se non vengono forniti né la `structure` né la `facename`, verrà utilizzata la faccia selezionata dall'utente come input.
- `l_cover_of_stirrup`, `r_cover_of_stirrup`, `t_cover_of_stirrup`, `b_cover_of_stirrup` e `offset_of_stirrup` sono le distanze di offset interne per gli elementi della staffa rispetto alle facce della struttura. Sono rispettivamente gli offset sinistro, destro, superiore, inferiore e anteriore/posteriore.
- `bent_angle` definisce l'angolo in punta dell'anello d'armatura della staffa.
- `extension_factor` definisce la lunghezza in punta dell'anello d'armatura della staffa, espressa in numero di volte il diametro.
- `dia_of_stirrup` è il diametro della staffa.
- `number_spacing_check` se è `True` creerà tante staffe quante indicate da `number_spacing_value`; se è `False` creerà una staffa distanziata come nel valore numerico di `number_spacing_value`.
- `number_spacing_value` specifica il numero di staffe, o il valore della spaziatura tra di loro, a seconda di `number_spacing_check`.
- `top_reinforcement_number_diameter_offset` e `bottom_reinforcement_number_diameter_offset` sono tuple della stringa number_diameter_offset. Ogni elemento della tupla rappresenta l'armatura per ogni nuovo livello.

```
   Syntax: (
               "number1#diameter1@offset1+number2#diameter2@offset2+...",
               "number3#diameter3@offset3+number4#diameter4@offset4+...",
               ...,
           )

```

- `top_reinforcement_rebar_type` e `bottom_reinforcement_rebar_type` specificano il tipo di barre d'armatura superiori/inferiori.

```
   Valori possibili:
   1. 'StraightRebar' or 'LShapeRebar'
   2. ('<rebar_type>', '<rebar_type>', ...) e il numero di elementi della tupla deve essere uguale al numero di strati di rinforzo.
   3. [
          ('<rebar_type>', '<rebar_type>', ...),
          ('<rebar_type>', '<rebar_type>', ...),
          ...,
      ]
      ogni elemento della lista è una tupla, che specifica il tipo di armatura di ogni livello di armatura. E ogni elemento della tupla rappresenta rabar_type per ogni insieme di armature.
   4. [
          <rebar_type>,
          ('<rebar_type>', '<rebar_type>', ...),
          ...,
      ]

```

- `top_reinforcement_layer_spacing` e `bottom_reinforcement_layer_spacing` è la spaziatura tra due strati di rinforzo consecutivi.

```
   Valori possibili:
   1. <layer_spacing>
   2. (<spacing in layer1 and layer2>, <spacing in layer2 and layer3>, ...) e il numero di elementi della tupla deve essere uguale al numero di strati meno uno.

```

- `left_rebars_number_diameter_offset` e `right_rebars_number_diameter_offset` sono stringhe di number_diameter_offset.

```
   Sintassi: "number1#diameter1@offset1+number2#diameter2@offset2+..."

```

- `left_rebars_type` e `right_rebars_type` specificano il tipo di barre d'armatura sinistra/destra.

```
   Valori possibili:
   1. 'StraightRebar' or 'LShapeRebar'
   2. ('<rebar_type>', '<rebar_type>', ...) e ogni elemento della tupla rappresenta rabar_type per ogni insieme di armature.

```

- `left_rebars_spacing` e `right_rebars_spacing` sono la spaziatura netta tra barre d'armatura consecutive.
- `top_reinforcement_l_rebar_rounding` e `bottom_reinforcement_l_rebar_rounding` è il parametro che determina il raggio di curvatura delle barre superiori/inferiori a forma di L, espresso come multiplo del diametro. La sintassi possibile è simile a quella discussa sopra per `top_reinforcement_rebar_type` / `bottom_reinforcement_rebar_type`.
- `top_reinforcement_hook_extension` e `bottom_reinforcement_hook_extension` sono la lunghezza del gancio delle armature a forma di L. La sintassi possibile è simile a quella discussa sopra per `top_reinforcement_rebar_type` / `bottom_reinforcement_rebar_type`.
- `top_reinforcement_hook_orientation` e `bottom_reinforcement_hook_orientation` specificano l'orientamento del hook LShaped; può essere `"Front Inside"`, `"Front Outside"`, `"Rear Inside"` o `"Rear Outside"`. La sintassi possibile è simile a quella discussa sopra per `top_reinforcement_rebar_type` / `bottom_reinforcement_rebar_type`.
- `left_l_rebar_rounding` e `right_l_rebar_rounding` è il parametro che determina il raggio di curvatura delle barre d'armatura sinistra/destra a forma di L, espresso come multiplo del diametro. La sintassi possibile è simile a quella discussa sopra per `left_rebars_type` / `right_rebars_type`.
- `left_rebars_hook_extension` e `right_rebars_hook_extension` è la lunghezza del gancio delle armature a forma di L. La sintassi possibile è simile a quella discussa sopra per `left_rebars_type` / `right_rebars_type`.
- `left_rebars_hook_orientation` e `right_rebars_hook_orientation` specificano l'orientamento del gancio a forma di L; può essere `"Front Inside"`, `"Front Outside"`, `"Rear Inside"` o `"Rear Outside"`. La sintassi possibile è simile a quella discussa sopra per `left_rebars_type` / `right_rebars_type`.

#### Esempio

```
import FreeCAD, Arch
from BeamReinforcement import TwoLeggedBeam

Structure = Arch.makeStructure(length=3000.0,width=200.0,height=400.0)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

RebarGroup = TwoLeggedBeam.makeReinforcement(
    l_cover_of_stirrup=20,
    r_cover_of_stirrup=20,
    t_cover_of_stirrup=20,
    b_cover_of_stirrup=20,
    offset_of_stirrup=100,
    bent_angle=135,
    extension_factor=4,
    dia_of_stirrup=8,
    number_spacing_check=False,
    number_spacing_value=200,
    top_reinforcement_number_diameter_offset=("1#20@-60+2#16@-60+1#20@-60", "3#16@-100"),
    top_reinforcement_rebar_type="LShapeRebar",
    top_reinforcement_layer_spacing=30,
    bottom_reinforcement_number_diameter_offset=("1#20@-60+2#16@-60+1#20@-60", "3#16@-100"),
    bottom_reinforcement_rebar_type="LShapeRebar",
    bottom_reinforcement_layer_spacing=30,
    left_rebars_number_diameter_offset="1#16@-100+1#16@-100+1#16@-100",
    left_rebars_type="LShapeRebar",
    left_rebars_spacing=30,
    right_rebars_number_diameter_offset="1#16@-100+1#16@-100+1#16@-100",
    right_rebars_type="LShapeRebar",
    right_rebars_spacing=30,
    top_reinforcement_l_rebar_rounding=2,
    top_reinforcement_hook_extension=100,
    top_reinforcement_hook_orientation="Rear Outside",
    bottom_reinforcement_l_rebar_rounding=2,
    bottom_reinforcement_hook_extension=100,
    bottom_reinforcement_hook_orientation="Rear Outside",
    left_l_rebar_rounding=2,
    left_rebars_hook_extension=80,
    left_rebars_hook_orientation=("Rear Inside", "Front Inside", "Rear Inside"),
    right_l_rebar_rounding=2,
    right_rebars_hook_extension=80,
    right_rebars_hook_orientation=("Front Inside", "Rear Inside", "Front Inside"),
    structure=Structure,
    facename="Face6",
)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_BeamRebars/it&oldid=1433573>"
