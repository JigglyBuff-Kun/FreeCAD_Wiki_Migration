---
title: Draft Seleziona Piano
---
|  |
| --- |
| Draft Seleziona Piano |
| Posizione nel menu |
| Utilità → Seleziona Piano |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| Draft: W P |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Draft Piano di lavoro proxy](/Draft_WorkingPlaneProxy/it "Draft WorkingPlaneProxy/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_SelectPlane.svg) **Draft Seleziona Piano** definisce il piano di lavoro Draft corrente. Questo è il piano nella [Vista 3D](/3D_view/it "3D view/it") dove vengono creati i nuovi oggetti [Draft](/Draft_Workbench/it "Draft Workbench/it"). Un nuovo piano di lavoro può essere basato su una delle diverse [preimpostazioni](#Utilizzo_con_preimpostazioni) o su una selezione. La selezione può essere creata prima ([pre-selezione](#Utilizzo_con_pre-selezion)) o dopo ([post-selezione](#Utilizzo_wcon_post-selezione)) l'avvio del comando.

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): Per ogni vista 3D viene memorizzato un piano di lavoro separato.

Il pulsante ![](/images/Draft_tray_button_plane.png) nel [Vassoio di Draft](/Draft_Tray/it "Draft Tray/it") cambia a seconda del piano di lavoro corrente. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"): se il piano di lavoro non è impostato su **Auto** viene aggiunto un asterisco (**\***) all'etichetta del pulsante se l'origine del piano di lavoro non corrisponde l'origine globale.

![](/images/WorkingPlane_example.png)

Forme create su diversi piani di lavoro

## Utilizzo con pre-selezione

1. Effettuare una delle seguenti operazioni:
   * Selezionare un singolo oggetto. Sono supportati i seguenti oggetti:
     + [Draft Piano di lavoro proxy](/Draft_WorkingPlaneProxy/it "Draft WorkingPlaneProxy/it"): la Vista**View Data** (la posizione della telecamera) e la Vista**Visibility Map** (la visibilità salvata degli oggetti) del piano di lavoro proxy sono anche ripristinati.
     + [Arch Assi](/Arch_Axis/it "Arch Axis/it") ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"))
     + [Arch Sistema di Assi](/Arch_AxisSystem/it "Arch AxisSystem/it") ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"))
     + [Arch Parti di edificio](/Arch_BuildingPart/it "Arch BuildingPart/it").
     + [Arch Piani di sezione](/Arch_SectionPlane/it "Arch SectionPlane/it").
     + [Oggetti Part](/Std_Part/it "Std Part/it"): per evitare di selezionare sottoelementi si consiglia di selezionarli nella [Vista ad albero](/Tree_view/it "Tree view/it").
     + Oggetti non solidi che consistono in una singola faccia piana o un singolo bordo curvo o ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")) che hanno tre o più vertici.
     + Oggetti solidi o oggetti senza forma che hanno una proprietà Dati**Placement**. ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"))
   * Selezionare uno o più sottoelementi. E' possibile selezionare:
     + Una faccia piatta.
     + Un bordo curvo.
     + Tre vertici.
     + Uno spigolo e un vertice, oppure due spigoli. I vertici combinati devono definire un piano. ([disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"))
2. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_tray_button_plane.png) nella [Barra Draft](/Draft_Tray/it "Draft Tray/it").
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Utilità → ![](/images/Draft_SelectPlane.svg) Seleziona Piano** dal menu, o dalla [Vista ad albero](/Tree_view/it "Tree view/it") o dal menu contestuale della [Vista 3D](/3D_view/it "3D view/it").
   * Draft: Usare la scorciatoia da tastiera: W poi P.
3. Il piano di lavoro e il pulsante nella [Barra Draft](/Draft_Tray/it "Draft Tray/it") vengono aggiornati.

## Utilizzo con post-selezione

1. Invocare il comando come spiegato sopra.
2. Si apre il pannello azioni **Impostazione piano di lavoro**. Vedere [Opzioni](#Opzioni) per maggiori informazioni.
3. Effettuare una delle seguenti operazioni:
   * Selezionare un singolo oggetto. Vedere il [paragrafo precedente](#Utilizzo_con_pre-selezione).
   * Selezionare uno o più sottoelementi. Vedere il [paragrafo precedente](#Utilizzo_con_preselezione).
4. Fare clic in un punto qualsiasi della [Vista 3D](/3D_view/it "3D view/it") per confermare la selezione e terminare il comando.
5. Il piano di lavoro e il pulsante nella [Barra Draft](/Draft_Tray/it "Draft Tray/it") vengono aggiornati.

## Utilizzo con preimpostazioni

1. Invocare il comando come spiegato sopra.
2. Si apre il pannello azioni **Impostazione piano di lavoro**. Vedere [Opzioni](#Opzioni) per maggiori informazioni.
3. Premere uno qualsiasi dei pulsanti per terminare il comando.
4. Il piano di lavoro e il pulsante nella [Barra Draft](/Draft_Tray/it "Draft Tray/it") vengono aggiornati.

## Opzioni

* Premere il pulsante ![](/images/View-top.svg) Dall'alto (XY) per allineare il piano di lavoro con il piano XY del sistema di coordinate globale.
* Premere il pulsante ![](/images/View-front.svg) Frontale (XZ) per allineare il piano di lavoro con il piano XZ del sistema di coordinate globale.
* Premere il pulsante ![](/images/View-right.svg) Laterale (YZ) per allineare il piano di lavoro con il piano YZ del sistema di coordinate globale.
* Premere il pulsante ![](/images/View-isometric.svg) Allinea alla vista per allineare il piano di lavoro con la [Vista 3D](/3D_view/it "3D view/it") corrente. Se la casella di controllo **Centra piano sulla vista** non è selezionata, l'origine del piano di lavoro corrisponderà all'origine del sistema di coordinate globali, altrimenti corrisponderà al centro dell'attuale [Vista 3D](/3D_view/it "3D view/it").
* Premere il pulsante ![](/images/View-axonometric.svg) Automatico per impostare il piano di lavoro su **Auto**. Un piano di lavoro impostato su **Auto** si allineerà automaticamente con la [Vista 3D](/3D_view/it "3D view/it") corrente ogni volta che viene avviato un comando Draft o [BIM](/BIM_Workbench/it "BIM Workbench/it") che richiede l'immissione di punti. Ciò equivale a premere il pulsante ![](/images/View-isometric.svg) Allinea alla vista prima di utilizzare il comando. Inoltre, il piano di lavoro si allineerà alle facce planari selezionate prima di avviare il comando o quando vengono selezionati punti sulle facce planari durante il comando.
* **Offset** definisce la distanza perpendicolare tra il piano calcolato e il piano di lavoro effettivo.
* Selezionare la casella **Centra piano su vista corrente** per mettere l'origine del piano di lavoro al centro della [Vista 3D](/3D_view/it "3D view/it") corrente. Questa opzione può essere utile in combinazione con il pulsante ![](/images/View-isometric.svg) Allinea alla vista.
* Selezionare un vertice nella [Vista 3D](/3D_view/it "3D view/it") e premere il pulsante ![](/images/Draft_Move.svg) Sposta piano di lavoro per spostare il piano di lavoro in modo che la sua origine corrisponda alla posizione del vertice selezionato.
* Il pulsante **Colore griglia** consente di cambiare rapidamente il colore della griglia. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
* **Spaziatura della griglia** definisce la distanza tra le linee della griglia.
* Il valore **Linea principale ogni** determina dove vengono disegnate le linee principali della griglia. Le linee principali della griglia sono leggermente più spesse delle linee secondarie della griglia. Ad esempio, se la spaziatura della griglia è `0.5 m` e c'è una linea principale ogni `10 riquadri`, tale linea si ripeterà ogni `5 m`.
* Il valore **Dimensione della griglia** determina il numero di riquadri principali nelle direzioni X e Y della griglia.
* Il **Raggio di aggancio** è la distanza massima alla quale [Draft Snap Grid](/Draft_Snap_Grid/it "Draft Snap Grid/it") rileva le intersezioni delle linee della griglia.
* Premere il pulsante ![](/images/View-fullscreen.svg) Centra la vista per allineare la [vista 3D](/3D_view/it "3D view/it") con il piano di lavoro corrente.
* Premere il pulsante ![](/images/Sel-back.svg) Precedente per reimpostare il piano di lavoro nella posizione precedente.
* Premere il pulsante Successivo ![](/images/Sel-forward.svg) per reimpostare il piano di lavoro nella posizione successiva. [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")
* Premere Esc o il pulsante Chiudi per interrompere il comando.

## Note

* Può essere utile allineare la [Vista 3D](/3D_view/it "3D view/it") con il piano di lavoro Draft selezionato. Ad esempio, dopo aver impostato il piano di lavoro su Frontale, si potrebbe voler passare anche alla [Vista frontale](/Std_ViewFront/it "Std ViewFront/it").
* La griglia può essere commutata con il comando [Draft Attiva Griglia](/Draft_ToggleGrid/it "Draft ToggleGrid/it").
* Facendo doppio clic su [Draft Piano di lavoro proxy](/Draft_WorkingPlaneProxy/it "Draft WorkingPlaneProxy/it") nella [Vista ad albero](/Tree_view/it "Tree view/it") è possibile passare rapidamente da un piano di lavoro all'altro.

## Preferenze

Vedere anche: [Impostare le preferenze](/Preferences_Editor/it "Preferences Editor/it") e [Preferenze per l'ambiente Draft](/Draft_Preferences/it "Draft Preferences/it").

* Le impostazioni della griglia nel pannello delle attività così come molte altre impostazioni della griglia sono disponibili come preferenze: **Modifica → Preferenze... → Draft → Griglia e snap**.
* Il raggio di Aggancio può anche essere modificato al volo (vedi [Draft Snap](/Draft_Snap/it#Preferenze "Draft Snap/it")) o modificando: **Strumenti → Modifica parametri... → BaseApp → Preferences → Mod → Draft → snapRange**.

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it"):

Il modulo WorkingPlane offre due classi per creare oggetti del piano di lavoro: la classe `PlaneBase` e la classe `PlaneGui`. La seconda classe eredita dalla prima. Gli oggetti della classe `PlaneGui` interagiscono con la GUI (il pulsante [Draft Tray](/Draft_Tray/it "Draft Tray/it")), la [vista 3D](/3D_view/it "3D view/it") e la [griglia](/Draft_Snap_Grid/it "Draft Snap Grid/it"). Gli oggetti `PlaneBase` no.

Utilizzare il metodo `get_working_plane()` del modulo WorkingPlane per ottenere un'istanza della classe `PlaneGui` collegata alla vista 3D corrente. Il metodo restituisce il piano di lavoro esistente collegato alla vista o crea un nuovo piano di lavoro, se necessario.

```
import FreeCAD as App
import WorkingPlane

wp = WorkingPlane.get_working_plane()

origin = App.Vector(0, 0, 0)
normal = App.Vector(1, 1, 1).normalize()
offset = 17
wp.align_to_point_and_axis(origin, normal, offset)

point = App.Vector(10, 15, 2)
projection = wp.project_point(point)
print(projection)

```

La classe `PlaneBase` può essere utilizzata per creare piani di lavoro indipendenti dalla GUI:

```
import WorkingPlane

wp = WorkingPlane.PlaneBase()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SelectPlane/it&oldid=1513760>"