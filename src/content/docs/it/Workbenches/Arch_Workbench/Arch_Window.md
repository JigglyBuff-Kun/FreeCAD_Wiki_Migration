---
title: Arch Finestra
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                         |
| --------------------------------------------------------------------------------------- |
| Finestra                                                                                |
| Posizione nel menu                                                                      |
| Arch → Finestra                                                                         |
| Ambiente                                                                                |
| [Architettura](/Arch_Workbench/it "Arch Workbench/it")                                  |
| Avvio veloce                                                                            |
| W I                                                                                     |
| Introdotto nella versione                                                               |
| -                                                                                       |
| Vedere anche                                                                            |
| [Muro](/Arch_Wall/it "Arch Wall/it"), [Aggiungi componente](/Arch_Add/it "Arch Add/it") |
|                                                                                         |

## Descrizione

La Finestra è l'oggetto di base per tutti i tipi di oggetti "incorporabili", quali le finestre, le porte, ecc.. È progettato per essere un elemento indipendente, oppure "ospitato" all'interno di un altro componente come ad esempio in un [Muro](/Arch_Wall/it "Arch Wall/it"), in una [Struttura](/Arch_Structure/it "Arch Structure/it"), o in un [Tetto](/Arch_Roof/it "Arch Roof/it").
Esso ha una propria geometria, che può essere formata da diversi componenti solidi (ad es. il telaio o i pannelli interni), e definisce anche un volume da sottrarre all'oggetto ospite, in modo da creare un'apertura. Il volume da sottrarre viene calcolato automaticamente.

Le finestre sono basate su oggetti 2D chiusi, quali ad esempio, dei rettangoli di [Draft](/Draft_Rectangle/it "Draft Rectangle/it") o di [Schizzo](/Sketcher_Workbench/it "Sketcher Workbench/it"), ambienti che sono utilizzati anche per definire i componenti interni. L'oggetto 2D di base deve contenere diversi contorni chiusi, che possono essere combinati per formare dei pannelli pieni (richiedono un contorno) o delle cornici (richiedono più contorni).

Lo strumento Finestra dispone anche di diversi [preset](#Preset). Questi consentono all'utente di creare tipi comuni di finestre e porte con determinati parametri modificabili, senza la necessità di creare manualmente gli oggetti e i componenti 2D di base.

Tutte le informazioni applicabili ad una finestra si applicano anche ad una [Porta](/Arch_Door/it "Arch Door/it"), poiché l'oggetto sottostante è lo stesso.

![](/images/Arch_Window_example2.jpg)

Finestra complessa costruita sopra uno [Schizzo](/Sketcher_Workbench/it "Sketcher Workbench/it"). Quando si accede alla modalità di modifica della finestra, è possibile creare diversi componenti, impostare il loro spessore e selezionare e assegnare ad essa i contorni di uno schizzo.

## Utilizzo

### Utilizzare i modelli preimpostati

1. Premere il pulsante ![](/images/Arch_Window.svg) Finestra , oppure i tasti W e poi I.
2. Selezionare uno dei preset nella lista.
3. Compilare i parametri desiderati.
4. Nella [vista 3D](/3D_view/it "3D view/it"), spostare la finestra nella posizione in cui si desidera posizionarla. Se si sposta il puntatore su un [muro](/Arch_Wall/it "Arch Wall/it"), il contorno della finestra dovrebbe allinearsi con la faccia di quell'oggetto.

#### Preimpostazioni aggiuntive

In addition to the default presets, the window tool can also use custom presets. A custom preset is a FreeCAD file containing a single window based on a parametric sketch that has two named constrains: `Width` and `Height`. Custom presets can be placed in the following locations:

The window tool will always search this pair of locations:

$ROOT\_DIR/Arch/Doors/Custom/  
$ROOT_DIR/Arch/Windows/Custom/

Se si installa la [Ambiente Libreria di parti](/Parts_Library_Workbench/it "Parts Library Workbench/it") da [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it"), lo strumento finestra cercherà in questa libreria ulteriori preimpostazioni. Questi preset sono dei file di FreeCAD contenenti una singola finestra basata su uno schizzo parametrico che ha i vincoli definiti. Si possono aggiungere ulteriori preset nella directory parts_library in modo che vengano trovati dallo strumento finestra.

$ROOT\_DIR/Mod/parts\_library/Architectural Parts/Doors/Custom/  
$ROOT_DIR/Mod/parts_library/Architectural Parts/Windows/Custom/

- La $ROOT_DIR è la directory utente in cui sono archiviati i file di configurazione, le macro e gli ambienti di lavoro esterni di FreeCAD. Può essere trovata inserendo `FreeCAD.getUserAppDataDir()` nella [console di Python](/Python_console/it "Python console/it")
  - In linux di solito è /home/username/.local/share/FreeCAD/ (versione 0.20 e superiori) o /home/username/.FreeCAD/ (versione 0.19 e precedenti)
  - In windows di solito è C:\Users\username\Application Data\FreeCAD\
  - In Mac OSX di solito è /Users/username/Library/Preferences/FreeCAD/
- Il nome della subdirectory Custom è solo un suggerimento, è possibile utilizzare qualsiasi nome. Ma i file devono essere posizionati in una o più sottodirectory all'interno delle directory Doors o Windows.

Custom presets will be available in the window tool's presets dropdown menu. Presets in library locations will also be available in the Parts Library dialog.

### Creazione di una finestra personalizzata

1. Opzionalmente, selezionare una faccia sull'oggetto Arch in cui si desidera inserire la finestra.
2. Passare nell'ambiente [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it").
3. Creare un nuovo schizzo.
4. Disegnare uno o più contorni chiusi (anelli). Prestare molta attenzione all'ordine di creazione di questi contorni, da questo dipende la numerazione dei "wires" nel [pannello attività](/Task_panel/it "Task panel/it") ("Window elements").
5. Chiudere lo schizzo.
6. Tornare nell'ambiente [Arch](/Arch_Workbench/it "Arch Workbench/it").
7. Premere il pulsante ![](/images/Arch_Window.svg) Finestra , o premere i tasti W e poi I.
8. Per regolare i componenti della finestra e le varie proprietà, entrare nella finestra del [pannello Azioni](/Task_panel/it "Task panel/it") facendo doppio clic sull'oggetto creato nella [vista ad albero](/Tree_view/it "Tree view/it").
9. Si noti che poiché anche i componenti che seguono un componente incernierato saranno incernierati, tutti i componenti fissi devono essere creati prima.

## Presets

Sono disponibili i seguenti modelli preimpostati:

- ![Fisso](/images/ParametersWindowFixed.svg)

  Fisso

- ![1 pannello aperto](/images/ParametersWindowSimple.svg)

  1 pannello aperto

- ![2 pannelli aperti](/images/ParametersWindowDouble.svg)

  2 pannelli aperti

- ![Anta a 2 vetri](/images/ParametersWindowStash.svg)

  Anta a 2 vetri

- ![Scorrevole a 2 vetri](/images/ParametersWindowDouble.svg)

  Scorrevole a 2 vetri

- ![Porta semplice](/images/ParametersDoorSimple.svg)

  Porta semplice

- ![Porta di vetro](/images/ParametersDoorGlass.svg)

  Porta di vetro

- ![Scorrevole a 4 vetri](/images/ParametersWindowDouble.svg)

  Scorrevole a 4 vetri

- ![Tenda da sole](/images/ParametersWindowSimple.svg)

  Tenda da sole

- ![Solo apertura disponibile dalla versione 1.0](/images/ParametersOpening.svg)

  Solo apertura [disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

## Creare i componenti

La finestra può includere 4 tipi di componenti: telai, pannelli massicci, pannelli in vetro e persiane.
I pannelli e le persiane sono costituiti da un contorno chiuso che viene estruso. Le cornici sono formate da 2 o più contorni chiusi, entrambi estrusi, e quello più piccolo viene ![](/images/Arch_Remove.png) [sottratto](/Arch_Remove/it "Arch Remove/it") al più grande.
È possibile accedere, creare, modificare ed eliminare i componenti di una finestra in modalità di modifica (doppio clic sull'oggetto finestra nella struttura ad albero). I componenti hanno le seguenti proprietà:

- **Name** : Un nome per il componente
- **Type**: Il tipo di componente. Può essere "Frame", "Glass panel" "Solid panel", o "Louvres"
- **Wires** : Un elenco, separato da virgole, dei contorni su cui si basa il componente
- **Thickness** : Lo spessore di estrusione del componente
- **Z Offset** : La distanza tra il componente e la sua linea di base 2D
- **Hinge**: Ciò consente di selezionare un bordo nell'oggetto 2D di base, quindi impostare tale bordo come cerniera per questo componente e quelli successivi nell'elenco
- **Opening mode**: Se in questo componente o in qualsiasi altro precedente nell'elenco è stata definita una cerniera, l'impostazione della modalità di apertura consente alla finestra di apparire aperta o di visualizzare i simboli di apertura 2D in pianta o in elevazione.

![](/images/Arch_Window_options.jpg)

## Opzioni

- Gli elementi Finestra condividono le proprietà e i comportamenti comuni di tutti i [Componenti Arch](/Arch_Component/it "Arch Component/it")
- Se la casella **Auto-include** nel riquadro delle azioni di creazione della finestra non è selezionata, la finestra non verrà inserita in nessun oggetto ospite durante la creazione.
- Per inserire la finestra selezionata in un [muro](/Arch_Wall/it "Arch Wall/it"), selezionare entrambi, poi premere il pulsante ![](/images/Arch_Add.svg) [Aggiungi](/Arch_Add/it "Arch Add/it").
- Per rimuovere la finestra selezionata da un muro selezionare la finestra, poi premere il pulsante ![](/images/Arch_Remove.svg) [Rimuovi](/Arch_Remove/it "Arch Remove/it").
- Quando si utilizzano i preset, di solito conviene attivare lo [Snap](/Draft_Snap/it "Draft Snap/it") "Vicino", in questo modo è possibile agganciare la finestra a una faccia esistente.
- L'apertura creata da una finestra nel suo oggetto ospite è determinata da due proprietà: Dati**Hole Depth** e Dati**Hole Wire** ([disponibile dalla versione 0.17](/Release_notes_0.17/it "Release notes 0.17/it")). Il numero del Hole Wire può essere selezionato nella vista 3D dal pannello delle finestre disponibili quando si fa doppio clic sulla finestra nella vista ad albero
- La Finestra può utilizzare i [Multi-Materiali](/Arch_MultiMaterial/it "Arch MultiMaterial/it"). La finestra cerca nei multi-materiali allegati gli strati di materiale con lo stesso nome per ciascuna delle sue componenti e se è presente lo utilizza. Ad esempio, un componente denominato "OuterFrame" cerca nel Multi-Materiale collegato

uno strato di materiale denominato "OuterFrame". Se trova questo materiale lo attribuisce al componente OuterFrame. Il valore dello spessore dello strato di materiale viene ignorato.

## Aperture

_Vedere anche:_ il [Tutorial per finestre aperte](/Tutorial_for_open_windows/it "Tutorial for open windows/it").

Le porte e le finestre possono apparire parzialmente o completamente aperte nel modello 3D oppure si possono visualizzare i simboli di apertura sia in pianta che in altezza. Di conseguenza, queste appariranno anche nelle viste in 2D estratte e generate da [Draft Viste 2D](/Draft_Shape2DView/it "Draft Shape2DView/it") o [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it"). Per ottenere ciò, almeno uno dei componenti della finestra deve avere una cerniera e una modalità di apertura definita (vedere la sezione precedente "Componenti dell'edificio"). Quindi, usando le proprietà Dati**Opening**, Dati**Symbol Plan** o Dati**Symbol Elevation**, si può configurare l'aspetto della finestra:

![](/images/Arch_window_openings.png)

Una porta che mostra da sinistra a destra come lavorano le proprietà Symbol Plan, Symbol Elevation e Opening

## Definizione dei tipi di finestra

Windows può anche sfruttare altri strumenti, in particolare i flussi di lavoro [Part](/PartDesign_Workbench/it "PartDesign Workbench/it"), per definire un tipo. Un tipo è un oggetto che definisce la forma della finestra. Questo è particolarmente adatto per lavorare con [App Parts](/App_Part/it "App Part/it"):

![](/images/Arch_window_type_example.png)

[Scaricare il file di esempio mostrato sopra](https://github.com/FreeCAD/Examples/raw/master/Arch_Example_Files/Window_Type.FCStd)

### Esempio di flusso di lavoro

- Creare un oggetto telaio di finestra, un pannello di vetro e qualsiasi altro componente di finestra di cui c'è bisogno, utilizzando gli strumenti [Part](/Part/it "Part/it") o [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it").
- Ad esempio, creare uno schizzo rettangolare di base per la finestra, quindi uno schizzo del profilo per il telaio e creare un [Part_Sweep](/Part_Sweep "Part Sweep") per eseguire lo sweep del profilo attorno allo schizzo di base. Creare un [Part_Offset2D](/Part_Offset2D "Part Offset2D") dallo schizzo di base, quindi un [Part_Extrude](/Part_Extrude "Part Extrude") per creare il pannello di vetro
- Assicurarsi che tutti questi pezzi abbiano un nome univoco e significativo (ad esempio "Frame" o "Glass Panel")
- Creare un [App_Part](/App_Part "App Part") e inserire tutti i sottocomponenti al suo interno
- Creare un volume da sottrarre al muro, ad esempio estrudendo lo schizzo di base. Aggiungere questo volume alla parte app. Assicurarsi che il volume sia disattivato
- Se si utilizza FreeCAD versione 0.19 o successiva, è possibile aggiungere 3 proprietà alla parte app, facendo clic con il pulsante destro del mouse sulla visualizzazione delle proprietà e selezionando "Show All". Aggiungere le seguenti proprietà (tutte sono facoltative, il gruppo non ha importanza):
  - **Height** come PropertyLength e collegarlo, ad esempio, ad un vincolo verticale dello schizzo di base
  - **Width** come PropertyLength e collegarlo, ad esempio, ad un vincolo orizzontale dello schizzo di base
  - **Subvolume** come PropertyLink e collegarlo al volume da sottrarre che è stato creato sopra
  - **Tag** come PropertyString

Il tipo di finestra ora è pronto. Si possono creare oggetti finestra da esso, semplicemente selezionando la parte App e premendo il pulsante finestra. Le proprietà "Height", "Width", "Subvolume" e "Tag" della finestra verranno collegate alla corrispondente proprietà dell'App Part, se esistente.

### Materiali

Per creare un materiale per finestre basate sul tipo:

- Creare un [multimateriale](/Arch_MultiMaterial/it "Arch MultiMaterial/it")
- Creare una voce nel multimateriale per ogni componente della parte app. Ad esempio, un "Frame", un "Glass panel" come si è usato sopra. Assicurarsi di utilizzare esattamente lo stesso nome.
- Attribuire quel multimateriale a ciascuna delle finestre derivate dalla stessa tipologia

È possibile utilizzare qualsiasi altro tipo di flusso di lavoro diverso da quello sopra descritto, i punti importanti da ricordare sono:

- L'oggetto tipo deve essere un oggetto, indipendentemente dal tipo (App Part, PartDesign Body, Part Compound, o anche un altrop Arch Window)
- L'oggetto tipo deve avere una proprietà "Subvolume" (collegata alla proprietà Subvolume della finestra) affinché le aperture negli oggetti host funzionino
- L'oggetto tipo deve avere una proprietà "Group" con figli diversi con gli stessi nomi degli elementi multimateriale affinché i multimateriali funzionino

## Proprietà

An Arch Window object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Window

- Dati**Height**: L'altezza di questa finestra
- Dati**Width**: La larghezza di questa finestra
- Dati**Hole Depth**: La profondità dell'apertura creata dalla finestra nel suo oggetto ospite
- Dati**Hole Wire**: Il numero del contorno (wire) dell'oggetto base utilizzato per creare un'apertura nell'oggetto che ospita questa finestra. Questo valore può essere impostato graficamente facendo doppio clic sulla finestra nella vista ad albero. Impostando il valore 0, la finestra per creare il foro seleziona automaticamente il suo contorno più grande.
- Dati**Window Parts** : Una lista di stringhe (5 stringhe per ogni componente, che stabiliscono le opzioni dei componenti di cui sopra).
- Dati**Louvre Width**: Se uno dei componenti è impostato su "Louvres", questa proprietà definisce la dimensione delle lamelle della persiana
- Dati**Louvre Spacing**: Se uno dei componenti è impostato su "Louvres", questa proprietà definisce la spaziatura tra le lamelle
- Dati**Opening**: Tutti i componenti che hanno la loro modalità di apertura impostata e che hanno una cerniera definita in essi o in un componente precedente nell'elenco, appaiono aperti di una percentuale definita da questo valore
- Dati**Symbol Plan**: Mostra il simbolo 2D di apertura nel piano
- Dati**Symbol Elevation**: Mostra il simbolo 2D di apertura nell'elevazione

## Script

_Vedere anche:_ [API Arch](/Arch_API/it "Arch API/it") e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Finestra può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
Window = makeWindow(baseobj=None, width=None, height=None, parts=None, name="Window")

```

- Crea un oggetto `Window` basato su un `baseobj`, che deve essere un [Wire](/Draft_Wire/it "Draft Wire/it") o uno [Sketcher Schizzo](/Sketcher_Workbench/it "Sketcher Workbench/it") chiuso.
- Se disponibile, imposta `width`, `height`, e `name` (label) della finestra.
- Se `baseobj` non è una forma chiusa, lo strumento non può creare un oggetto solido corretto.

Esempio:

```
import FreeCAD, Draft, Arch

Rect1 = Draft.makeRectangle(length=900, height=3000)
Window = Arch.makeWindow(Rect1)
FreeCAD.ActiveDocument.recompute()

```

Si può anche creare una finestra da un modello preimpostato.

```
Window = makeWindowPreset(windowtype, width, height, h1, h2, h3, w1, w2, o1, o2, placement=None)

```

- Crea un oggetto `Window` basato su `windowtype`, che deve essere uno dei nomi definiti in `Arch.WindowPresets`.
- `width` e `height` definiscono la dimensione totale dell'oggetto, con unità in millimetri.
- I parametri `h1`, `h2`, `h3` (offset verticali), `w1`, `w2` (larghezze), `o1` e `o2` (offset orizzontali) specificano le rispettive distanze in millimetri e dipendono dal tipo di preset che si sta creando.
- Se viene fornito un `placement`, viene utilizzato.

Esempio:

```
import FreeCAD, Arch

base = FreeCAD.Vector(2000, 0, 0)
Axis = FreeCAD.Vector(1, 0, 0)
place=FreeCAD.Placement(base, FreeCAD.Rotation(Axis, 90))

Door = Arch.makeWindowPreset("Simple door",
                             width=900, height=2000,
                             h1=100, h2=100, h3=100, w1=200, w2=100, o1=0, o2=100,
                             placement=place)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Window/it&oldid=1539829>"
