---
title: Arch Telaio
---

:::caution
QUESTO COMANDO FA PARTE DELL'AMBIENTE BIMINTEGRATO NELLA V1.0Questa pagina è stata aggiornata per quella versione.
:::

|                                       |
| ------------------------------------- |
| Carpenteria                           |
| Posizione nel menu                    |
| 3D/BIM → Frame                        |
| Ambiente                              |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Avvio veloce                          |
| F R                                   |
| Introdotto nella versione             |
| -                                     |
| Vedere anche                          |
| _Nessuno_                             |
|                                       |

## Descrizione

Lo strumento **Arch Frame** viene utilizzato per costruire tutti i tipi di oggetti frame basati su un profilo e un layout. Il profilo viene estruso lungo i bordi del layout, che può essere qualsiasi oggetto 2D come [sketch](/Sketcher_Workbench "Sketcher Workbench"), o un [Draft object](/Draft_Workbench "Draft Workbench"). È particolarmente utile per creare ringhiere o pareti a telaio. Gli oggetti frame possono quindi essere facilmente trasformati in oggetti [Muro](/Arch_Wall "Arch Wall") o [Struttura](/Arch_Structure "Arch Structure").

![](/images/Arch_Frame_example.jpg)

Oggetto Carpenteria creato da una [schiera](/Draft_OrthoArray/it "Draft OrthoArray/it") derivata da una [linea](/Draft_Line/it "Draft Line/it"), utilizzando un [cerchio](/Draft_Circle/it "Draft Circle/it") come profilo.

## Utilizzo

1. Creare un oggetto tracciato e un oggetto profilo, ad esempio con [Draft](/Draft_Workbench/it "Draft Workbench/it") o con [Schizzo](/Sketcher_Workbench/it "Sketcher Workbench/it").
2. Selezionare l'oggetto tracciato, poi, con Ctrl premuto, selezionare l'oggetto profilo.
3. Premere il pulsante ![](/images/Arch_Frame.svg) Carpenteria, o premere i tasti F poi R.

## Opzioni

- Gli elementi Carpenteria condividono le proprietà e i comportamenti comuni di tutti i [Componenti Arch](/Arch_Component/it "Arch Component/it")
- Impostando la sua proprietà Offset, l'oggetto carpenteria può essere posizionato alla distanza voluta dall'oggetto tracciato.
- Il profilo viene copiato alla base di ciascun spigolo o linea dell'oggetto tracciato, quindi estruso lungo esso. È possibile stabilire la posizione del profilo alla base di ogni linea del tracciato tramite le proprietà Align e Rotation.

### Proprietà

An Arch Frame object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Component

- Dati**Base** (`Link`): The layout this frame is based on.

For the other properties in the group see [Arch Component](/Arch_Component#Properties "Arch Component").

Frame

- Dati**Align** (`Bool`): Specifica se il profilo deve essere ruotato per avere il suo asse normale allineato con ciascun bordo.
- Dati**Base Point** (`Integer`): Indice in base zero che indica il punto di incrocio del percorso sul profilo:
  - `0`: La **Base** del **Posizionamento** del profilo. Questo punto viene utilizzato anche in caso di indice non valido.
  - `1`: Il punto medio del primo bordo del profilo.
  - `2`: Il punto medio del 2° bordo del profilo.
  - `3`: Il punto medio del 2° bordo del profilo.
  - `4`: Il punto finale del 2° bordo del profilo.
  - ...
  - `n*2-1`: Il punto medio dell'ennesimo bordo del profilo.
  - `n*2`: Il punto finale dell'ennesimo bordo del profilo.
- Dati**Edges** (`Enumeration`): Il tipo di bordi da considerare. Le opzioni sono:
  - `All edges`
  - `Vertical edges`
  - `Horizontal edges`
  - `Bottom horizontal edges`: Basato sulla coordinata Z globale del centro di massa del bordo.
  - `Top horizontal edges`: Idem.
- Dati**Fuse** (`Bool`): Se vero, i solidi sovrapposti vengono fusi.
- Dati**Offset** (`VectorDistance`): Una distanza facoltativa tra l'oggetto del layout e l'oggetto cornice.
- Dati**Profile** (`Link`): Il profilo su cui si basa questo frame.
- Dati**Profile Placement** (`Placement`): Un posizionamento aggiuntivo facoltativo da aggiungere al profilo prima di estruderlo. Viene utilizzata solo la **Rotazione** del **Posizionamento**. Ignorato se Dati**Align** è `true`.
- Dati**Rotation** (`Angle`): La rotazione del profilo attorno al suo asse di estrusione.

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Carpenteria può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla [console di Python](/Python/it "Python/it") tramite la seguente funzione:

```
Frame = makeFrame(baseobj, profile)

```

- Crea un oggetto `Frame` da un dato `baseobj` e un `profile`.
  - `baseobj` è qualsiasi oggetto che contenga dei contorni, come una [Polilinea](/Draft_Wire/it "Draft Wire/it") o una [Schiera](/Draft_OrthoArray/it "Draft OrthoArray/it").
  - `profile` è un oggetto 2D estrudibile contenente facce o contorni chiusi.

Esempio:

```
import Draft, Arch

Line = Draft.makeLine(FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(0, 0, 2000))
baseobj = Draft.makeArray(Line, FreeCAD.Vector(1000, 0, 0), FreeCAD.Vector(0, 1, 0), 6, 1)

profile = Draft.makeCircle(200)
Frame = Arch.makeFrame(baseobj, profile)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Frame/it&oldid=1539677>"
