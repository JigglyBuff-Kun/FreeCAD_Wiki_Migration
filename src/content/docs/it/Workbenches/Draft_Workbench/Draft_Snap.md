---
title: Draft Aggancio
---

## Descrizione

Negli ambienti ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/it "Draft Workbench/it") e ![](/images/Workbench_BIM.svg) [BIM](/BIM_Workbench/it "BIM Workbench/it") è possibile creare la geometria selezionando i punti nella [Vista 3D](/3D_view/it "3D view/it") o inserendo le coordinate nel [pannello delle attività](/Task_panel/it "Task panel/it") dei comandi. Un altro modo per selezionare i punti è mediante l'aggancio (snap). L'aggancio consente di selezionare punti geometrici precisi o definiti da oggetti esistenti o dalla griglia. Si può ad esempio eseguire l'aggancio al punto finale di una linea, al centro di un cerchio o all'intersezione di due bordi.

L'aggancio è disponibile con la maggior parte dei comandi [Draft](/Draft_Workbench/it "Draft Workbench/it") e [BIM](/BIM_Workbench/it "BIM Workbench/it").

![](/images/Draft_Snap_Endpoint_example.png)

Aggancio al punto finale di un bordo

## Strumenti per l'aggancio

Questi strumenti sono disponibili nella barra degli strumenti Snap Draft e nel [Widget Snap Draft](/Draft_snap_widget/it "Draft snap widget/it").

Tenere presente che i bordi circolari non devono essere cerchi completi.

- ![](/images/Draft_Snap_Lock.svg) [Blocca aggancio](/Draft_Snap_Lock/it "Draft Snap Lock/it"): abilita o disabilita l'aggancio a livello globale.

- ![](/images/Draft_Snap_Endpoint.svg) [Aggancia Punto Finale](/Draft_Snap_Endpoint/it "Draft Snap Endpoint/it"): aggancia ai punti finali dei bordi.

- ![](/images/Draft_Snap_Midpoint.svg) [Aggancia Punto Medio](/Draft_Snap_Midpoint/it "Draft Snap Midpoint/it"): aggancia al punto medio dei bordi.

- ![](/images/Draft_Snap_Center.svg) [Aggancia Centro](/Draft_Snap_Center/it "Draft Snap Center/it"): aggancia al punto centrale delle facce e dei bordi circolari e al punto Dati**Placement** di [Piani di lavoro proxy di Draft](/Draft_WorkingPlaneProxy/it "Draft WorkingPlaneProxy/it") e [Parti di edificio Arch](/Arch_BuildingPart/it "Arch BuildingPart/it").

- ![](/images/Draft_Snap_Angle.svg) [Aggancia Angolo](/Draft_Snap_Angle/it "Draft Snap Angle/it"): aggancia a punti cardinali speciali sui bordi circolari, a multipli di 30° e 45°.

- ![](/images/Draft_Snap_Intersection.svg) [Aggancia Intersezione](/Draft_Snap_Intersection/it "Draft Snap Intersection/it"): aggancia all'intersezione di due bordi.

- ![](/images/Draft_Snap_Perpendicular.svg) [Aggancia Perpendicolare](/Draft_Snap_Perpendicular/it "Draft Snap Perpendicular/it"): aggancia ai punti perpendicolari sulle facce ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")) e sui bordi.

- ![](/images/Draft_Snap_Extension.svg) [Aggancia Estensione](/Draft_Snap_Extension/it "Draft Snap Extension/it"): aggancia a una linea immaginaria che si estende oltre i punti finali dei bordi diritti.

- ![](/images/Draft_Snap_Parallel.svg) [Aggancia Parallelo](/Draft_Snap_Parallel/it "Draft Snap Parallel/it"): aggancia a una linea immaginaria parallela ai bordi diritti.

- ![](/images/Draft_Snap_Special.svg) [Aggancia Speciale](/Draft_Snap_Special/it "Draft Snap Special/it"): aggancia a punti speciali definiti dall'oggetto.

- ![](/images/Draft_Snap_Near.svg) [Aggancia Vicino](/Draft_Snap_Near/it "Draft Snap Near/it"): aggancia al punto più vicino su facce e bordi.

- ![](/images/Draft_Snap_Ortho.svg) [Aggancia Ortogonale](/Draft_Snap_Ortho/it "Draft Snap Ortho/it"): aggancia alle linee immaginarie che attraversano il punto precedente a multipli di 45°.

- ![](/images/Draft_Snap_Grid.svg) [Aggancia Griglia](/Draft_Snap_Grid/it "Draft Snap Grid/it"): aggancia alle intersezioni delle linee della griglia.

- ![](/images/Draft_Snap_WorkingPlane.svg) [Aggancia Piano di lavoro](/Draft_Snap_WorkingPlane/it "Draft Snap WorkingPlane/it"): proietta i punti di aggancio sul [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") corrente.

- ![](/images/Draft_Snap_Dimensions.svg) [Aggancia Quote](/Draft_Snap_Dimensions/it "Draft Snap Dimensions/it"): mostra le quote X e Y temporanee.

- ![](/images/Draft_ToggleGrid.svg) [Attiva/disattiva griglia](/Draft_ToggleGrid/it "Draft ToggleGrid/it"): cambia la visibilità della griglia.

## Aggancio avanzato

- È possibile ottenere ulteriori punti di aggancio combinando due opzioni di aggancio (snap). Ad esempio, combinando [Draft Aggancia Ortogonale](/Draft_Snap_Ortho/it "Draft Snap Ortho/it") e [Draft Aggancia Estensione](/Draft_Snap_Extension/it "Draft Snap Extension/it") si ottiene un punto di aggancio all'intersezione delle loro linee immaginarie.
- L'aggancio può essere combinato con [vincoli](/Draft_Constrain/it "Draft Constrain/it").
- Premere Q per inserire un "punto di attesa" nella posizione corrente del cursore. È possibile eseguire l'aggancio agli assi ortogonali dei punti di aggancio e alle intersezioni di questi assi. Se l'opzione [Draft Aggancia Punto medio](/Draft_Snap_Midpoint/it "Draft Snap Midpoint/it") è attiva, si può anche eseguire l'aggancio al punto medio tra due punti di attesa.
- Premere ` una o più volte per agganciare un oggetto oscurato da un'altra geometria. Questo si chiama "aggancio ciclico". Tenere presente che si deve spostare leggermente il cursore nella [Vista 3D](/3D_view/it "3D view/it") dopo aver premuto il tasto.

![](/images/Draft_Snap_example_cycling_1.png)

Ciclo di aggancio 1: il rettangolo rosso è stato creato per primo quindi ha priorità di aggancio. Senza il ciclo di aggancio non è possibile eseguire l'aggancio al rettangolo verde dove è sovrapposto al rettangolo rosso.

![](/images/Draft_Snap_example_cycling_2.png)

Ciclo di aggancio 2: dopo aver utilizzato una volta il tasto del ciclo di aggancio il rettangolo verde riceve la priorità di aggancio. Ora è possibile eseguire l'aggancio al punto medio del bordo verde sovrapposto.

## Note

- È possibile attivare più opzioni di aggancio (snap) contemporaneamente, ma è consigliabile attivare solo le opzioni di aggancio realmente necessarie. Attivarne troppe può rallentare le cose.
- Non è una buona idea avere [Draft Aggancio Vicino](/Draft_Snap_Near/it "Draft Snap Near/it") permanentemente attivo poiché ha la precedenza su molte altre opzioni di aggancio.

## Preferenze

Vedere anche: [Impostare le preferenze](/Preferences_Editor/it "Preferences Editor/it") e [Preferenze per l'ambiente Draft](/Draft_Preferences/it "Draft Preferences/it").

- Quando un comando [Draft](/Draft_Workbench/it "Draft Workbench/it") o [BIM](/BIM_Workbench/it "BIM Workbench/it") che richiede l'immissione di punti è attivo, la distanza massima alla quale [Draft Aggancia Griglia](/Draft_Snap_Grid/it "Draft Snap Grid/it") rileva le intersezioni delle linee della griglia può essere modificata al volo premendo P (tasto aumenta) o M (tasto diminuisci). Questa impostazione viene memorizzata: **Strumenti → Modifica parametri... → BaseApp → Preferenze → Mod → Draft → snapRange**. Può anche essere modificato nel pannello delle attività del comando [Draft Seleziona Piano](/Draft_SelectPlane/it "Draft SelectPlane/it").
- Per eseguire l'aggancio solo quando si tiene premuto il tasto **Modificatore aggancio**:
  - Deseleziona: **Modifica → Preferenze... → Draft → Griglia e aggancio → Aggancia sempre**.
  - Il tasto predefinito **Modificatore aggancio**, Ctrl, può essere modificato: **Modifica → Preferenze... → Draft → Griglia e aggancio → Modificatore aggancio**.
- Per mostrare la barra degli strumenti di aggancio Draft solo quando un comando è attivo, selezionare: **Modifica → Preferenze... → Draft → Interfaccia → Mostra solo la barra degli strumenti di aggancio Draft durante i comandi**. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
- I simboli di aggancio possono essere modificati: **Modifica → Preferenze... → Draft → Griglia e aggancio → Stile simbolo di aggancio**.
- Il colore dei simboli di aggancio e le dimensioni di [Draft Aggancia Quote](/Draft_Snap_Dimensions/it "Draft Snap Dimensions/it") possono essere modificati: **Modifica → Preferenze... → Draft → Griglia e aggancio → Colore simbolo di aggancio**.
- La dimensione dei simboli di snap dipende da: **Modifica → Preferenze... → Visualizzazione → Vista 3D → Dimensione marcatore**. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
- Le scorciatoie da tastiera a carattere singolo menzionate possono essere modificate: **Modifica → Preferenze... → Draft → Interfaccia → Scorciatoie comando**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap/it&oldid=1565076>"
