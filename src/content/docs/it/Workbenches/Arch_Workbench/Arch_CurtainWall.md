---
title: Arch Facciata continua
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                               |
| ----------------------------------------------------------------------------- |
| Facciata continua                                                             |
| Posizione nel menu                                                            |
| Arch → Facciata continua                                                      |
| Ambiente                                                                      |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                |
| Avvio veloce                                                                  |
| C W                                                                           |
| Introdotto nella versione                                                     |
| 0.19                                                                          |
| Vedere anche                                                                  |
| [Muro](/Arch_Wall/it "Arch Wall/it"), [Griglia](/Arch_Grid/it "Arch Grid/it") |
|                                                                               |

## Descrizione

Questo strumento crea una [facciata continua](<https://en.wikipedia.org/wiki/Curtain_wall_(architecture)>) suddividendo una faccia di base in facce quadrangolari, quindi creando montanti verticali sui bordi verticali, montanti orizzontali sui bordi orizzontali e riempiendo gli spazi tra i montanti con dei pannelli.

![](/images/Arch_CurtainWall_example.png)

Le facciate continue possono essere create da qualsiasi tipo di oggetto esistente, in questo caso tutte le facce dell'oggetto saranno suddivise. Funziona quindi meglio se usato con un oggetto che ha solo una faccia. In genere, si crea prima una faccia, preferibilmente delimitata da 4 bordi, che rappresenta l'area che si desidera riempire con una facciata continua, poi si applica lo strumento.

Le facciate continue possono anche essere costruite da un oggetto lineare, come una linea, un arco o una polilinea, come con un normale [muro](/Arch_Wall/it "Arch Wall/it").

Anche le facce con doppia curvatura o le facce con più di 4 spigoli funzionano, ma il risultato è meno prevedibile.

Le facce vengono divise in faccette quadrangolari. Se i 4 punti della faccetta sono complanari, viene creata una faccetta quadrata. In caso contrario, la faccetta viene divisa in due triangoli e viene aggiunto un montante diagonale.

Nel caso in cui sia necessaria una suddivisione non regolare, è anche possibile creare il proprio oggetto suddiviso, ad esempio utilizzando una [Griglia](/Arch_Grid/it "Arch Grid/it") di Arch, e impostando le suddivisioni verticale e orizzontale della facciata continua su 1.

Si può anche usare lo strumento Facciata continua senza alcun oggetto selezionato, nel qual caso è possibile disegnare una linea di base, che verrà estrusa verticalmente per formare la faccia su cui sarà costruita la facciata continua.

## Utilizzo

### Disegnare una facciata continua dall'inizio

1. Assicurarsi che non sia selezionato nulla
2. Premere il pulsante ![](/images/Arch_CurtainWall.svg) Facciata continua, o premere i tasti C e poi W
3. Fare clic su un primo punto nella vista 3D o digitare le coordinate
4. Fare clic su un secondo punto nella vista 3D o digitare le coordinate
5. Regolare le proprietà necessarie

### Creare una facciata continua da un oggetto selezionato

1. Selezionare uno o più oggetti di geometria di base (oggetto di Draft, schizzo, ecc.)
2. Premere il pulsante ![](/images/Arch_CurtainWall.svg) Facciata continua, o o i tasti C e poi W
3. Regolare le proprietà necessarie

## Opzioni

- Le facciate continue condividono le proprietà e i comportamenti comuni di tutti i [Componenti di Arch](/Arch_Component/it "Arch Component/it")
- I montanti per le facciate continue possono essere realizzati da un profilo quadrato automatico (impostare le proprietà **Dimensione del montante**) o da un profilo personalizzato (impostare la proprietà **Profilo del montante**). I montanti possono essere centrati su qualsiasi bordo o posizionati in relazione al punto (0,0,0) disattivando la proprietà **Profilo centrato**. Ad esempio, se si desidera posizionare un profilo leggermente dietro i pannelli, si deve disegnare il profilo leggermente spostato dal punto di origine (0,0,0)
- Le facciate continue supportano i [Multimaterial](/Arch_MultiMaterial/it "Arch MultiMaterial/it"). All'interno del multimateriale, per i montanti verrà utilizzato lo strato **Telaio** e lo strato **Pannello di vetro** per i pannelli, oppure **Pannello solido** se non è presente alcun pannello di vetro nel multi-materiale.
- Le facciate continue possono essere basate su un oggetto lineare come una linea, un arco o una polilinea. In tal caso, internamente, verrà costruita una superficie di base estrudendo l'oggetto lineare lungo la direzione data dalla proprietà **Direzione verticale**, per la lunghezza data dalla proprietà **Altezza**.

## Proprietà

An Arch CurtainWall object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

- Dati**Vertical Mullion Number**:Il numero di montanti verticali
- Dati**Vertical Mullion Alignment**: Se il profilo dei montanti verticali viene allineato o no alla superficie
- Dati**Vertical Sections**: Il numero di sezioni verticali di questa facciata continua
- Dati**Vertical Mullion Height**: L'altezza del profilo dei montanti verticali, se non viene utilizzato alcun profilo
- Dati**Vertical Mullion Width**: La larghezza del profilo dei montanti verticali, se non viene utilizzato alcun profilo
- Dati**Vertical Mullion Profile**: Un profilo per i montanti verticali (disabilita le dimensioni dei montanti verticali)
- Dati**Horizontal Mullion Number**: Il numero di montanti orizzontali
- Dati**Horizontal Mullion Alignment**: Se il profilo dei montanti orizzontali viene allineato o meno alla superficie
- Dati**Horizontal Sections**: Il numero di sezioni orizzontali di questa facciata continua
- Dati**Horizontal Mullion Height**: L'altezza del profilo dei montanti orizzontali, se non viene utilizzato alcun profilo
- Dati**Horizontal Mullion Width**: La larghezza del profilo dei montanti orizzontali, se non viene utilizzato alcun profilo
- Dati**Horizontal Mullion Profile**: Un profilo per i montanti orizzontali (disabilita la dimensione dei montanti orizzontali)
- Dati**Diagonal Mullion Number**: Il numero di montanti diagonali
- Dati**Diagonal Mullion Size**: La dimensione dei montanti diagonali, se presente, se non viene utilizzato alcun profilo
- Dati**Diagonal Mullion Profile**: Un profilo per i montanti diagonali, se presente (disabilita la dimensione dei montanti diagonali)
- Dati**Panel Number**: Il numero di pannelli
- Dati**Panel Thickness**: Lo spessore dei pannelli
- Dati**Swap Horizontal Vertical**: Scambia linee orizzontali e verticali
- Dati**Refine**: Esegue sottrazioni tra i componenti in modo che non ci siano sovrapposizioni
- Dati**Center Profiles**: Centra il profilo sui bordi o no
- Dati**Vertical Direction**: Il riferimento alla direzione verticale che verrà utilizzato da questo oggetto per dedurre le direzioni verticale / orizzontale. Tenerlo vicino alla direzione verticale effettiva della facciata continua
- Dati**Height**: L'altezza di questa facciata continua, nel caso in cui sia basata su un oggetto lineare
- Dati**Host**: L'ospite di questa facciata continua. La facciata continua apparirà incorporata nel suo oggetto host nella vista ad albero (non viene eseguita nessun'altra azione)

## Realizzare pareti con telaio

Le facciate continue sono convenienti da utilizzare insieme a [walls](/Arch_Wall/it "Arch Wall/it") per creare muri con telaio (muri in cui uno strato strutturale interno è costituito da una serie di telai, solitamente in legno o metallo, invece che di un materiale omogeneo come cemento o mattoni).

![](/images/Frame_wall_example.png)

La procedura descritta di seguito crea un muro e una facciata continua riferita alla stessa linea di base, quindi crea un muro multimateriale che lascia uno spazio vuoto, dove viene posizionata la facciata continua:

1. Creare un [Muro ad arco](/Arch_Wall/it "Arch Wall/it") normale, facendo clic su due punti o su un oggetto lineare esistente
2. Selezionare l'oggetto alla base del muro ad arco appena creato
3. Premere il pulsante ![](/images/Arch_CurtainWall.svg) Facciata continua, oppure premere i tasti C e quindi W per creare una facciata continua dalla stessa linea di base del muro
4. Assicurarsi che sia il muro che la facciata continua abbiano lo stesso valore di **Height**
5. Impostare il numero di **horizontal sections** della facciata continua su zero se si desiderano solo telai verticali
6. Impostare **horizontal mullion width** e **horizontal mullion height** desiderati (o utilizzare un profilo del montante)
7. Preparare due (o più) [materiali](/Arch_SetMaterial/it "Arch SetMaterial/it"), uno per i pannelli e uno per il vuoto dove verrà posizionata la cornice
8. Creare un [multi-materiale](/Arch_MultiMaterial/it "Arch MultiMaterial/it"), utilizzando uno strato del materiale del pannello, uno strato del materiale vuoto con un valore di larghezza negativo (che lo renderà non disegnato) corrispondente all'altezza del montante verticale della facciata continua, ed un altro strato di materiale del pannello
9. Attribuire il multimateriale al muro
10. Impostare la proprietà **Host** della facciata continua sul muro creato nel primo punto

## Script

_Vedere anche:_ [Arch API](/Arch_API/it "Arch API/it") e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Facciata continua può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
MyCurtainWall = makeCurtainWall(baseobj)

```

Esempio:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseface = FreeCAD.ActiveDocument.addObject('Part::Extrusion','Extrusion')
baseface.Base = baseline
baseface.DirMode = "Normal"
baseface.LengthFwd = 2000
curtainwall = Arch.makeCurtainWall(baseface)
curtainwall.VerticalSections = 6
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CurtainWall/it&oldid=1543689>"
