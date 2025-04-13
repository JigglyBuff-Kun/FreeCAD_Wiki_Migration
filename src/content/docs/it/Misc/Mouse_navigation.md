---
title: Navigare col mouse
---
## Panoramica

La funzione **Navigare col mouse** di FreeCAD comprende i comandi utilizzati per navigare visivamente lo spazio 3D e per interagire con gli oggetti visualizzati. FreeCAD offre diversi stili di navigazione con il mouse. Lo stile di navigazione predefinito, denominato ["Navigazione CAD​​"](#Navigazione_CAD), è molto semplice e pratico, ma FreeCAD fornisce anche diversi stili di navigazione alternativi tra cui puoi scegliere. Lo stile selezionato sarà utilizzato per tutti gli ambienti di lavoro.

Per ulteriori informazione riguardo la selezione degli oggetti vedere [modi di selezione](/Selection_methods/it "Selection methods/it")

Per ulteriori informazioni riguardo la manipolazione degli oggetti vedere [Std TransformManip](/Std_TransformManip/it "Std TransformManip/it")

## Selezionare uno stile di navigazione

1. Effettuare una delle seguenti operazioni:
   * Premere il bottone ![](/images/NavigationCAD_dark.svg) sulla [barra di stato](/Status_bar/it "Status bar/it").
   * Cliccare su un area vuota della [vista 3D](/3D_view/it "3D view/it"), e selezionare **Stile di navigazione** dal menu contestuale.
   * Utilizzare l'[Editor delle preferenze](/Preferences_Editor/it#Navigation "Preferences Editor/it"). Dal menu selezionare **Modifica → Preferenze** e poi **Visualizzazione → Navigazione → Navigazione 3D**.
2. Seleziona uno stile dalla lista.
3. Facoltativamente cambiare lo **Stile Orbita**: premere il bottone ![](/images/NavigationCAD_dark.svg) sulla [barra di Stato](/Status_bar/it "Status bar/it") e poi scegliere **Impostazioni → Stile Orbita**. Vedere l'[Editor delle Preferenze](/Preferences_Editor/it#Navigazione "Preferences Editor/it").

## Stili di navigazione disponibili

Con tutti gli stili di navigazione, a meno che non si selezionino oggetti da uno schizzo in modalità di modifica, è necessario tenere premuto Ctrl per selezionare più oggetti.

Per tutti gli stili sono disponibili le seguenti opzioni della tastiera:

* Ctrl + ![](/images/Ascii_043.svg) e Ctrl + ![](/images/Ascii_022.svg) o PgUp e PgDn per ingrandire e rimpicciolire, rispettivamente.
* I tasti freccia, ![](/images/Ascii_017.svg)![](/images/Ascii_016.svg)![](/images/Ascii_030.svg)![](/images/Ascii_031.svg), per spostare la vista a sinistra/destra e in alto/in basso.
* Shift + ![](/images/Ascii_017.svg) e Shift + ![](/images/Ascii_016.svg) per ruotare la vista di 90 gradi.

### Navigazione Blender

La navigazione Blender si basa sul modello [Blender](https://www.blender.org).

| Selezione | Zoom | Rotazione vista | Traslazione | |
| --- | --- | --- | --- | --- |
|  |  |  |  | |
|  |  |  | Shift+ |  |
| Premere il pulsante sinistro del mouse sull'oggetto che si vuole selezionare. | Utilizzare la rotellina del mouse per ingrandire e rimpicciolire. | Tenere premuto il pulsante centrale del mouse, quindi spostare il puntatore. | Tenere premuto Shift e il pulsante centrale del mouse, quindi spostare il puntatore. In alternativa, tenere premuti i pulsanti sinistro e destro del mouse, quindi spostare il puntatore. | |

### Navigazione CAD

Questo è lo stile di navigazione predefinito. Consente all'utente un semplice controllo della vista, e non richiede l'uso dei tasti della tastiera se non per effettuare selezioni multiple.

| Selezione | Zoom | Rotazione vista Primo metodo | Rotazione vista Metodo alternativo | Traslazione |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
| Premere il pulsante sinistro del mouse sull'oggetto che si vuole selezionare. | Utilizzare la rotellina del mouse per ingrandire e rimpicciolire. Facendo clic sul pulsante centrale del mouse si ricentra la vista sulla posizione del cursore. | Tenere premuto il pulsante centrale del mouse, quindi premere e tenere premuto il pulsante sinistro del mouse, quindi spostare il puntatore. Se i pulsanti vengono rilasciati prima di interrompere il movimento del mouse, la vista continua a ruotare, se questa opzione è abilitata. | Tenere premuto il pulsante centrale del mouse, quindi premere e tenere premuto il pulsante destro del mouse, quindi spostare il puntatore. Con questo metodo il pulsante centrale del mouse può essere rilasciato dopo aver tenuto premuto il pulsante destro del mouse.  Gli utenti che utilizzano il mouse con la mano destra potrebbero trovare questo metodo più semplice rispetto al primo. | Tenere premuto il pulsante centrale del mouse, quindi spostare il puntatore. |
|  | Ctrl+Shift+ | Shift+ |  | Ctrl+ |
|  | Modalità Zoom: tenere premuti i tasti Ctrl e Shift, premere il pulsante destro del mouse una volta, quindi spostare il puntatore. | Modalità di rotazione: tenere premuto il tasto Shift, premere il pulsante destro del mouse una volta, quindi spostare il puntatore. |  | Modalità Spostamento: tenere premuto il tasto Ctrl, premere una volta il pulsante destro del mouse, quindi spostare il puntatore. |

### Navigazione Gesture

Questo stile è stato pensato per l'uso con un touchscreen e una penna. Tuttavia, può essere utilizzato anche con un mouse ed è consigliato quando si utilizza un Mac con trackpad.

| Selezione | Zoom | Rotazione vista | Traslazione | | Inclinazione vista |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | |  |
|  |  |  |  | |  |
| Premere il pulsante sinistro del mouse sull'oggetto che si vuole selezionare. | Utilizzare la rotellina del mouse per ingrandire e rimpicciolire. | Tenere premuto il pulsante sinistro del mouse, quindi spostare il puntatore. In [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") e in altre modalità di modifica, questo comportamento è disabilitato. Tenere premuto Alt mentre si preme il pulsante del mouse per accedere alla modalità di rotazione.  Per impostare il punto di messa a fuoco della fotocamera per la rotazione, fare clic su un punto con il pulsante centrale del mouse. In alternativa, puntare il cursore su un punto e premere H sulla tastiera. | Tenere premuto il pulsante destro del mouse, quindi spostare il puntatore. | | Tenere premuti entrambi i pulsanti sinistro e destro del mouse, quindi spostare il puntatore lateralmente. |
|  |  |  |  |  |  |
| Toccare per selezionare. | Trascinare due dita (pizzicare) stringendo o allargando. | Trascinare con un dito per ruotare. Tenere premuto Alt quando ci si trova in [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it"). | Trascinare con due dita. In alternativa, toccare e tenere premuto, quindi trascinare. Questo simula la traslazione con il tasto destro del mouse. | | Ruotare la linea immaginaria formata dai due punti di contatto. Questo metodo è disabilitato per impostazione predefinita. Per abilitarlo, andare in  **Modifica → Preferenze → Visualizzazione → Navigazione** e deselezionare la casella di controllo "Disabilita l'inclinazione touchscreen". |

### Navigazione Maya-Gesture

Nella navigazione Maya-Gesture, lo spostamento, lo zoom e la rotazione della vista richiedono il tasto Alt insieme a un pulsante del mouse; pertanto, è necessario un mouse a tre pulsanti. È anche possibile utilizzare le gesture poiché questo stile è stato sviluppato sullo stile della [Navigazione Gesture](#Navigazione_Gesture).

| Selezione | Zoom | | Rotazione vista | Traslazione | Inclinazione vista |
| --- | --- | --- | --- | --- | --- |
|  |  | |  |  |  |
|  |  | Alt+ | Alt+ | Alt+ | Alt+ |
| Premere il pulsante sinistro del mouse sull'oggetto che si vuole selezionare. | Utilizzare la rotellina del mouse per ingrandire e rimpicciolire. In alternativa, tenere premuto Alt e il pulsante destro del mouse, quindi spostare il puntatore. | | Tenere premuto Alt e il pulsante sinistro del mouse, quindi spostare il puntatore. | Tenere premuto Alt e il pulsante centrale del mouse, quindi spostare il puntatore. | Tenere premuti Alt ed entrambi i pulsanti sinistro e destro del mouse, quindi spostare il puntatore lateralmente. |

### Navigazione OpenCascade

La navigazione OpenCascade si basa sul modello [OpenCascade](https://www.opencascade.com/).

| Selezione | Zoom | | Rotazione vista | | Traslazione | |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | |  | |  | |
|  |  | Ctrl+ |  | Ctrl+ |  | Ctrl+ |
| Premere il pulsante sinistro del mouse sull'oggetto che si vuole selezionare. | Utilizzare la rotellina del mouse per ingrandire e rimpicciolire. In alternativa, tenere premuto Ctrl e il tasto sinistro del mouse, quindi spostare il puntatore. | | Tenere premuto il pulsante centrale del mouse, quindi premere e tenere premuto il pulsante destro del mouse, quindi spostare il puntatore. In alternativa, tenere premuto Ctrl e il pulsante destro del mouse, quindi spostare il puntatore. | | Tenere premuto il pulsante centrale del mouse, quindi spostare il puntatore. È possibile tenere premuto Ctrl. | |

### Navigazione OpenInventor

La Navigazione OpenInventor (formalmente Inventor) si basa sul modello [Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor). Per selezionare gli oggetti, è necessario tenere premuto il tasto Shift o Ctrl.

Questo stile non è basato su Autodesk Inventor.

| Selezione | Zoom | | Rotazione vista | Traslazione |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
| Shift+ |  |  |  |  |
| Tenere premuto Shift, quindi premere il pulsante sinistro del mouse sull'oggetto che si desidera selezionare. Tenere invece premuto Ctrl per selezionare più oggetti. | Utilizzare la rotellina del mouse per ingrandire e rimpicciolire. In alternativa, tenere premuto il pulsante centrale del mouse, quindi premere e tenere premuto il pulsante sinistro del mouse, quindi spostare il puntatore. | | Tenere premuto il pulsante sinistro del mouse, quindi spostare il puntatore. | Tenere premuto il pulsante centrale del mouse, quindi spostare il puntatore. |

### Navigazione OpenSCAD

La Navigazione OpenSCAD si basa sul modello [OpenSCAD](https://openscad.org/).

| Selezione | Zoom | | | Rotazione vista | | Traslazione |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | | |  | |  |
|  |  |  | Shift+ |  |  |  |
| Premere il pulsante sinistro del mouse sull'oggetto che si vuole selezionare. versione 0.21 e precedenti Tenere premuto Ctrl e Shift quando si preme il pulsante del mouse per trascinare un oggetto in uno schizzo in modalità di modifica. | Utilizzare la rotellina del mouse per ingrandire e rimpicciolire. In alternativa, tenere premuto il pulsante centrale del mouse, quindi spostare il puntatore.  Oppure tenere premuto Shift e il pulsante destro del mouse, quindi spostare il puntatore. | | | Tenere premuto il pulsante sinistro del mouse, quindi spostare il puntatore. In alternativa, e quando uno schizzo è in modalità di modifica, tenere premuto il pulsante centrale del mouse, quindi tenere premuto il pulsante destro del mouse, quindi spostare il puntatore. | | tenere premuto il pulsante destro del mouse, quindi spostare il puntatore. |

### Navigazione Revit

La Navigazione Revit si basa sul modello [Revit](https://en.wikipedia.org/wiki/Autodesk_Revit).

| Selezione | Zoom | Rotazione vista | | Traslazione | |
| --- | --- | --- | --- | --- | --- |
|  |  |  | |  | |
|  |  | Shift+ |  |  |  |
| Premere il pulsante sinistro del mouse sull'oggetto che si vuole selezionare. | Utilizzare la rotellina del mouse per ingrandire e rimpicciolire. | Tenere premuto Shift e il pulsante centrale del mouse, quindi spostare il puntatore. In alternativa, tenere premuto il pulsante centrale del mouse, quindi tenere premuto il pulsante destro del mouse, quindi spostare il puntatore. | | Tenere premuto il pulsante centrale del mouse, quindi spostare il puntatore. In alternativa, tenere premuti entrambi i pulsanti sinistro e destro del mouse, quindi spostare il puntatore. | |

### Navigazione SolidWorks

[disponibile dalla versione 1.1](/Release_notes_1.1/it "Release notes 1.1/it")

Lo stile di navigazione di SolidWorks è stato modellato su [SolidWorks](https://en.wikipedia.org/wiki/SolidWorks).

| Selezione | Zoom | | Rotazione vista | Traslazione |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
|  |  | Shift+ |  | Ctrl+ |
| Premere il pulsante sinistro del mouse sull'oggetto che si vuole selezionare. | Utilizzare la rotellina del mouse per ingrandire e rimpicciolire. In alternativa, tenere premuto Shift e il pulsante centrale del mouse, quindi spostare il puntatore.  Facendo clic sul pulsante centrale del mouse si ricentra la vista sulla posizione del cursore. | | Tenere premuto il pulsante centrale del mouse, quindi spostare il puntatore. | Tenere premuto Ctrl e il pulsante centrale del mouse, quindi spostare il puntatore. |

### Navigazione TinkerCAD

La Navigazione TinkerCAD si basa sul modello [TinkerCAD](https://en.wikipedia.org/wiki/Tinkercad).

| Selezione | Zoom | Rotazione vista | Traslazione |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
| Premere il pulsante sinistro del mouse sull'oggetto che si vuole selezionare. | Utilizzare la rotellina del mouse per ingrandire e rimpicciolire. | Premere il pulsante destro del mouse, quindi spostare il puntatore. | Tenere premuto il pulsante centrale del mouse, quindi spostare il puntatore. |

### Navigazione Touchpad

Con la Navigazione touchpad, lo spostamento, lo zoom e la rotazione della vista richiedono un tasto modificatore insieme al touchpad. Questo stile può essere utilizzato anche con il mouse.

| Selezione | Zoom | Rotazione vista | | Traslazione |
| --- | --- | --- | --- | --- |
|  |  |  | |  |
|  | Ctrl+Shift+ | Alt+ | Shift+ | Shift+ |
| Premere il pulsante sinistro del mouse sull'oggetto che si vuole selezionare. | tenere premuto Ctrl e Shift, quindi spostare il puntatore. | Tenere premuto Alt, quindi spostare il puntatore. In alternativa, tenere premuto Shift e il pulsante sinistro, quindi spostare il puntatore. | | Tenere premuto Shift, quindi spostare il puntatore. |

## Supporto Hardware

FreeCAD supporta anche i [dispositivi di input 3D](/3D_input_devices/it "3D input devices/it").

## Navigazione consigliata per macOS

Sui MacBook con trackpad la navigazione gestuale funziona molto bene, ma i gesti hanno un significato speciale:

* Zoom: trascina con due dita.
* Ruota: trascina con tre dita.
* Panoramica: Ctrl + tre dita.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mouse_navigation/it&oldid=1552971>"