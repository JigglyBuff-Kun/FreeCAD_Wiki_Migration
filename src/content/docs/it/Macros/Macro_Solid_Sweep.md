---
title: Solid Sweep
---

|                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sweep solido                                                                                                                                                                                                                                                  |
| Descrizione                                                                                                                                                                                                                                                   |
| Crea un solido estrudendo un profilo lungo un percorso. Versione macro: 1.0 Ultima modifica: 2011-12-03 Versione FreeCAD: Tutte versione Download: [Icona per la ToolBar](https://www.freecadweb.org/wiki/images/6/6d/Macro_Solid_Sweep.png) Autore: Normandc |
| Autore                                                                                                                                                                                                                                                        |
| [Normandc](/User:Normandc "User:Normandc")                                                                                                                                                                                                                    |
| Download                                                                                                                                                                                                                                                      |
| [Icona per la ToolBar](https://www.freecadweb.org/wiki/images/6/6d/Macro_Solid_Sweep.png)                                                                                                                                                                     |
| Link                                                                                                                                                                                                                                                          |
| [Raccolta di macro](/Macros_recipes/it "Macros recipes/it") [Come installare le macro](/How_to_install_macros/it "How to install macros/it") [Personalizzare la toolbar](/Customize_Toolbars/it "Customize Toolbars/it")                                      |
| Versione macro                                                                                                                                                                                                                                                |
| 1.0                                                                                                                                                                                                                                                           |
| Data ultima modifica                                                                                                                                                                                                                                          |
| 2011-12-03                                                                                                                                                                                                                                                    |
| Versioni di FreeCAD                                                                                                                                                                                                                                           |
| Tutte versione                                                                                                                                                                                                                                                |
| Scorciatoia                                                                                                                                                                                                                                                   |
| _Nessuna_                                                                                                                                                                                                                                                     |
| Vedere anche                                                                                                                                                                                                                                                  |
| _Nessuno_                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                               |

## Descrizione

Questa macro crea un solido estrudendo un profilo 2D lungo una traiettoria precedentemente selezionata nella vista 3D.

Gli elementi 2D possono essere creati attraverso i normali strumenti della GUI di FreeCAD.

Notare che il solido risultante non è parametrico. Se si decide di modificare il profilo o il percorso, si deve nuovamente eseguire la macro.

Nella seguente figura tutte le estrusioni sono realizzate utilizzando la stessa sagoma, ma tre percorsi diversi.

![Alcuni esempi di estrusioni, tutte sono realizzate utilizzando la stessa sezione, ma su tre diverse traiettorie.](/images/Solid_sweep.png)

## Utilizzo

1. Creare due elementi 2D del tipo indicato sotto, uno per la sezione e uno per la traiettoria.
2. Selezionare, nella [Vista ad albero](/Tree_view/it "Tree view/it") del progetto o nella [Vista 3D](/3D_view/it "3D view/it"), prima la traiettoria e poi il profilo. (**L'ordine è importante!**):
   1. La traiettoria
   2. Poi il profilo

- Aprire il [Gestore Macro](/Macros/it "Macros/it")

1. Selezionare la **Solid Sweep** macro
2. Cliccare Esegui

**Risultato:** Un oggetto **Sweep** viene creato nella struttura del progetto

## Elementi 2D supportati

- Contorni polilinee

* ![](/images/Sketcher_NewSketch.svg) [Schizzi](/Sketcher_Workbench/it "Sketcher Workbench/it")
* ![](/images/Draft_BSpline.svg) [BSpline](/Draft_BSpline/it "Draft BSpline/it")

- Primitive 2D del menu _Part → ![](/images/Part_Primitives.svg) [Crea Primitive](/Part_Primitives/it "Part Primitives/it")..._ (circonferenza, elica)

## Avvertenze

- La **sezione** deve essere un profilo chiuso altrimenti il risultato non sarà un solido.
- Non è necessario che la sezione sia posizionata sulla traiettoria, ma è preferibile che sia normale (perpendicolare) alla traiettoria.
- La **traiettoria** può essere sia un profilo aperto che chiuso (cerchi, o segmenti e archi), ma tutti gli elementi devono essere tangenti o la forma risultante è inaspettata. Ad esempio, una traiettoria con angoli retti (come un rettangolo) non produce un solido.
- Se il solido diventa contorto, modificare la macro e impostare il valore _isFrenet_ a 0 (zero) e riprovare.
- Impostando nella macro la variabile _makeSolid_ a 0 (zero) si produce un insieme di superfici con le estremità aperte.

## La macro

ToolBar Icon ![](/images/Macro_Solid_Sweep.png)

**Macro_Solid_Sweep.FCMacro**

```
import Part, FreeCAD, math, PartGui, FreeCADGui
from FreeCAD import Base

# get the selected objects, with first selection for the trajectory and second for the section
s = FreeCADGui.Selection.getSelection()
try:
     shape1=s[0].Shape
     shape2=s[1].Shape
except:
     print "Wrong selection"

traj = Part.Wire([shape1])
section = Part.Wire([shape2])

# create Part objec in the current document
myObject=App.ActiveDocument.addObject("Part::Feature","Sweep")

# variable makeSolid = 1 to create solid, 0 to create surfaces
makeSolid = True #1
isFrenet = True #1

# create a 3D shape and assigh it to the current document
Sweep = Part.Wire(traj).makePipeShell([section],makeSolid,isFrenet)
myObject.Shape = Sweep
```

## Crediti

Grazie a [Wmayer](/User:Wmayer "User:Wmayer") per il suo aiuto nella stesura di questo script.

In [questa sezione del forum](https://forum.freecadweb.org/viewtopic.php?f=8&t=1222&start=50#p11120) si trovano due esempi di utlizzo e si trovano anche i collegamenti per scaricare i file FCStd.

Lo stesso argomento viene trattato anche in [questa discussione](http://forum.freecadweb.org/viewtopic.php?f=3&t=1461) con ragguagli su [Frenet](http://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas).

Utilizzando una elica come traiettoria, tramite uno sweep solido si può creare la filettatura di un bullone.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Solid_Sweep/it&oldid=1215150>"
