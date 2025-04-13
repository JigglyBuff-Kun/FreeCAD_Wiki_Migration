---
title: Arch Parte di edificio
---

:::caution
THIS COMMAND IS OBSOLETEIt is not available in1.0 and above. UseArch Floorinstead.
:::

|                                                                                        |
| -------------------------------------------------------------------------------------- |
| Parte di edificio                                                                      |
| Posizione nel menu                                                                     |
| Arch → Parte di edificio                                                               |
| Ambiente                                                                               |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                         |
| Avvio veloce                                                                           |
| _Nessuno_                                                                              |
| Introdotto nella versione                                                              |
| 0.18                                                                                   |
| Vedere anche                                                                           |
| [Edificio](/Arch_Building/it "Arch Building/it"), [Sito](/Arch_Site/it "Arch Site/it") |
|                                                                                        |

## Descrizione

Parti di edificio sostituisce i vecchi [Piano](/Arch_Floor/it "Arch Floor/it") e [Edificio](/Arch_Building/it "Arch Building/it") di Arch con una versione più capace che può essere utilizzata non solo per creare Piani o Livelli, ma anche tutti i tipi di situazioni in cui è necessario raggruppare oggetti Arch o BIM diversi e quel gruppo può aver bisogno di essere gestito come un oggetto o replicato.

## Utilizzo

1. Facoltativamente, selezionare uno o più oggetti da includere nella nuova Parte dell'edificio.
2. Premere il pulsante ![](/images/Arch_BuildingPart.svg) Parte di edificio.

### Note

Parte di edificio incorpora implicitamente un [Piano di sezione](/Arch_SectionPlane/it "Arch SectionPlane/it").

Questo piano di sezione è sempre parallelo al piano di base di Parte di edificio, ma è possibile specificare l'offset tra di loro. Quindi tutti gli strumenti che funzionano con un piano di sezione, come [Vista profilo 2D](/Draft_Shape2DView/it "Draft Shape2DView/it") di Draft e [Vista di Arch](/TechDraw_ArchView/it "TechDraw ArchView/it") di TechDraw funzionano anche con Parte di edificio.

## Opzioni

- Dopo aver creato una Parte di edificio, è possibile aggiungere più oggetti trascinandoli nella Vista ad albero o usando lo strumento ![](/images/Arch_Add.svg) [Aggiungi componente](/Arch_Add/it "Arch Add/it").
- Per rimuovere oggetti da una Parte di edificio trascinarli nella vista ad albero o usare lo strumento ![](/images/Arch_Remove.svg) [Rimuovi componente](/Arch_Remove/it "Arch Remove/it").
- Facendo doppio clic sull'oggetto Parte di edificio nella vista ad albero, il [Piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") viene impostato sulla sua posizione e la Parte di edificio diventa attiva, il che significa che i nuovi oggetti vengono aggiunti automaticamente ad esso. Facendo nuovamente doppio clic su Parte di edificio, essa si disattiva e si imposta il piano di lavoro nella posizione precedente (per essere disponibile questa opzione, deve essere impostata su true, nel pannello Visualizza combinata, la proprietà - Interaction - Double Click Activates).
- Parte di edificio può visualizzare un marchio nella vista 3D con una etichetta e con l'indicazione del livello.
- Quando un oggetto Parte di edificio viene spostato o ruotato, tutti i suoi figli che non hanno alcuna proprietà Dati**Move With Host** o che hanno questa proprietà attivata, si spostano o ruotano insieme.
- Parte di edificio può essere [clonato](/Draft_Clone/it "Draft Clone/it")
- Parte di edificio può assumere qualsiasi tipo di IFC. La sua proprietà **IFC Type** ne determina l'utilizzo. Se la si imposta su **Building Storey** si comporta come livello. Se la si imposta su **Building** si comporta come un edificio e se la si imposta su **Element Assembly** si comporta come un assemblaggio. La sua icona cambia per riflettere questa impostazione, ma a parte questo non ha nessun altro impatto in FreeCAD. Tuttavia, l'esportazione in IFC in un tipo o un altro tipo può avere un impatto in altre applicazioni BIM.
- Le parti dell'edificio consentono di definire una **Auto-group capture box**. I successivi oggetti Draft e Arch, o qualsiasi altra cosa che utilizzi Draft.autogroup(), verranno automaticamente aggiunti a quella parte di edificio se si trovano completamente all'interno della casella di acquisizione. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Una Parte di Edificio di Arch deriva da un oggetto [App GeoFeature](/App_GeoFeature/it "App GeoFeature/it") e ne eredita tutte le proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Dati

Base

- Dati**Group** (`LinkList`): Elenco degli oggetti referenziati.
- Dati (Hidden)**\_ Group Touched** (`Bool`)

Building Part

- Dati**Area** (`Area`): La superficie calcolata di questo piano.
- Dati**Height** (`Length`): L'altezza di questo oggetto e dei suoi oggetti secondari. Gli oggetti figli potrebbero essere, ad esempio, [Muri di Arch](/Arch_Wall/it "Arch Wall/it"). L'altezza di ogni muro deve essere impostata su `0` (zero), quindi la proprietà altezza di BuildingPart si propaga agli oggetti al suo interno.
- Dati**Level Offset** (`Length`): Il livello del punto (0,0,0) di questo livello. Questo valore viene aggiunto all'attributo `Placement.Base.z` di BuildingPart, per indicare un offset verticale senza spostare effettivamente l'oggetto. L'offset risultante viene visualizzato se Vista**Show Level** è `true`.
- Dati (Hidden)**Materials Table** (`Map`): Una mappa MaterialName:SolidIndexesList che mette in relazione i nomi dei materiali con gli indici solidi da utilizzare quando si fa riferimento a questo oggetto da altri file.
- Dati**Only Solids** (`Bool`): Se vero, solo i solidi verranno raccolti da questo oggetto quando è referenziato da altri file.
- Dati (Hidden)**Saved Inventor** (`FileIncluded`): Questa proprietà memorizza una rappresentazione dell'inventore per questo oggetto.
- Dati (Hidden)**Shape** (`PartShape`): La forma di questo oggetto.

Children

- Dati**Height Propagate** (`Bool`): Se vero, il valore dell'altezza si propaga agli oggetti contenuti. Vedere la proprietà Dati**Height** per ulteriori informazioni.

IFC

- Dati (Hidden)**Ifc Data** (`Map`): dati IFC.
- Dati (Hidden)**Ifc Properties** (`Map`): Proprietà IFC di questo oggetto.
- Dati**Ifc Type** (`Enumeration`): Il tipo IFC di questo oggetto.

IFC Attributes

- Dati**Description** (`String`): Una descrizione facoltativa per questo componente
- Dati**Global Id** (`String`)
- Dati**Object Type** (`String`)
- Dati**Overall Height** (`Length`)
- Dati**Overall Width** (`Length`)
- Dati**Partitioning Type** (`Enumeration`)
- Dati**Predefined Type** (`Enumeration`)
- Dati**Tag** (`String`): Un tag facoltativo per questo componente.
- Dati**User Defined Partitioning Type** (`String`)

### Vista

Auto Group

- Vista**Autogroup Autosize** (`Bool`): Imposta automaticamente la dimensione della casella di acquisizione dal contenuto della parte di edificio. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")
- Vista**Autogroup Box** (`Bool`): Attiva/disattiva il raggruppamento automatico (e la visualizzazione della casella di acquisizione). [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")
- Vista**Autogroup Margin** (`Length`): Un margine da utilizzare quando il ridimensionamento automatico è attivato. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")
- Vista**Autogroup Size** (`IntegerList`): La casella di acquisizione per gli oggetti appena creati espressi come [XMin,YMin,ZMin,XMax,YMax,ZMax]. [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

Building Part

- Vista (Hidden)**Diffuse Color** (`ColorList`): I colori individuali della faccia.
- Vista**Display Offset** (`Placement`): Una trasformazione da applicare al segno di livello.
- Vista**Font Name** (`Font`): Il carattere da utilizzare per i testi.
- Vista**Font Size** (`Length`): La dimensione del carattere dei testi.
- Vista**Line Width** (`Float`): Lo spessore della linea di questo oggetto.
- Vista**Origin Offset** (`Bool`): Se vero, quando attivato, l'offset del display influenzerà anche il segno di origine.
- Vista**Override Unit** (`String`): Un'unità opzionale per esprimere i livelli.
- Vista**Show Label** (`Bool`): Se vero, quando attivato, viene visualizzata l'etichetta dell'oggetto.
- Vista**Show Level** (`Bool`): Se vero, mostra il livello.
- Vista**Show Unit** (`Bool`): Se vero, mostra l'unità sull'etichetta del livello.

Children

- Vista**Children Line Color** (`Color`): Il colore della linea da applicare agli elementi figlio di questa parte dell'edificio.
- Vista**Children Line Width** (`Float`): Lo spessore della linea da applicare agli elementi figlio di questa parte dell'edificio.
- Vista**Children Override** (`Bool`): Se vero, gli oggetti contenuti in questa parte di edificio adotteranno queste impostazioni di linea, colore e trasparenza.
- Vista**Children Shape Color** (`Color`): Il colore della forma da applicare agli elementi figlio di questa parte dell'edificio.
- Vista**Children Transparency** (`Percent`): La trasparenza da applicare ai figli di questa Parte Edile.

Clip

- Vista**Auto Cut View** (`Bool`): Attivare il taglio quando si attiva questo livello.
- Vista**Cut Margin** (`Length`): La distanza tra il piano del livello e la linea di taglio.
- Vista**Cut View** (`Bool`): Taglia la vista sopra questo livello.

Interactions

- Vista**Auto Working Plane** (`Bool`): Se impostato su True, il piano di lavoro verrà mantenuto in modalità Auto.
- Vista**Double Click Activates** (`Bool`): Se True, facendo doppio clic su questo oggetto nell'albero lo si attiva.
- Vista**Restore View** (`Bool`): Se impostata, la vista memorizzata in questo oggetto verrà ripristinata con un doppio clic.
- Vista**Save Inventor** (`Bool`): Se è abilitato, la rappresentazione dell'inventore di questo oggetto verrà salvata nel file di FreeCAD, consentendo di farvi riferimento in altri file in modalità leggera.
- Vista (Hidden)**Saved Inventor** (`FileIncluded`): Uno slot per salvare la rappresentazione dell'inventore di questo oggetto, se abilitato.
- Vista**Set Working Plane** (`Bool`): Se vero, una volta attivato, il piano di lavoro si adatterà automaticamente a questa parte dell'edificio.
- Vista (Hidden)**View Data** (`FloatList`): Dati sulla posizione della telecamera associati a questo oggetto.

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Parte di edificio può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
BuildingPart = makeBuildingPart(objectslist=None)

```

- Crea un oggetto `BuildingPart` da una `objectslist`, che è una lista di oggetti.

Esempio:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
FreeCAD.ActiveDocument.recompute()

BuildingPart = Arch.makeBuildingPart([Wall1, Wall2])

Floor = Arch.makeFloor([BuildingPart])
Building = Arch.makeBuilding([Floor])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_BuildingPart/it&oldid=1467171>"
