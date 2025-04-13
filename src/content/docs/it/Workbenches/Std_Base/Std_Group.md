---
title: Gruppo
---
|  |
| --- |
| Crea Gruppo |
| Posizione nel menu |
| Vista ad albero → Cliccare col destro sul nome del documento → Crea gruppo |
| Ambiente |
| Tutti |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Parte](/Std_Part/it "Std Part/it"), [Seleziona gruppo](/Draft_SelectGroup/it "Draft SelectGroup/it"), [Aggiungi al gruppo](/Draft_AddToGroup/it "Draft AddToGroup/it") |
|  |

## Descrizione

Un Gruppo (chiamato internamente [App DocumentObjectGroup](/App_DocumentObjectGroup/it "App DocumentObjectGroup/it")) è un contenitore per scopi generici che consente di raggruppare diversi tipi di oggetti nella [Vista ad albero](/Tree_view/it "Tree view/it"), indipendentemente dal tipo di dati. È usato come una semplice cartella per classificare e organizzare gli oggetti nel modello, al fine di mantenere una struttura logica. I gruppi possono essere nidificati all'interno di altri gruppi.

Lo strumento Gruppo non è definito da un particolare ambiente di lavoro, ma dal sistema base; di conseguenza lo si ritrova nella **barra degli strumenti struttura**, che è disponibile in tutti gli [ambienti di lavoro](/Workbenches/it "Workbenches/it").

Per raggruppare gli oggetti 3D come una singola unità, con l'intenzione di creare degli assiemi, utilizzare [Parte](/Std_Part/it "Std Part/it").

![](/images/Std_Group_example.png)

Vari elementi all'interno di Gruppo nella vista ad albero.

## Utilizzo

1. Effettuare una delle seguenti operazioni:
   * Fare clic con il pulsante destro del mouse sul nome del documento nella [Vista ad albero](/Tree_view "Tree view") e nel menu contestuale scegliere **Crea gruppo...**.
   * Premere il pulsante ![](/images/Std_Group.svg) [Crea gruppo](/Std_Group "Std Group").
2. Viene creato un gruppo vuoto.
3. Per aggiungere oggetti al gruppo, selezionarli nella [Vista ad albero](/Tree_view "Tree view") e trascinarli e rilasciarli nel gruppo.
4. Per rimuovere gli oggetti dal gruppo, trascinarli fuori dal gruppo e sull'etichetta del documento nella parte superiore della [Vista ad albero](/Tree_view "Tree view").
5. Gli oggetti possono anche essere aggiunti e rimossi modificando la proprietà Dati**Group** del gruppo.

## Proprietà

Il Gruppo è internamente chiamato [App DocumentObjectGroup](/App_DocumentObjectGroup/it "App DocumentObjectGroup/it") (`App::DocumentObjectGroup` class), è derivato dall'oggetto base [App DocumentObject](/App_DocumentObject/it "App DocumentObject/it") (`App::DocumentObject` class), pertanto eredita tutte le sue proprietà.

Il Gruppo ha le stesse proprietà di [App FeaturePython](/App_FeaturePython/it#Proprietà "App FeaturePython/it"), che è l'istanza più semplice di un [App DocumentObject](/App_DocumentObject/it "App DocumentObject/it"). Ha anche le seguenti proprietà aggiuntive nell'[editor di proprietà](/Property_editor/it "Property editor/it"). Le proprietà nascoste possono essere visualizzate utilizzando il comando **Mostra tutto** nel menu contestuale dell'[editor di proprietà](/Property_editor/it "Property editor/it").

### Dati

Base

* Dati**Group** (`LinkList`): un elenco di oggetti referenziati. Per impostazione predefinita, è vuoto `[]`.
* Dati (Hidden)**\_ Group Touched** (`Bool`): se il gruppo è touched o meno.

## Script

*Vedere anche:* [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it"), e [script di oggetti](/Scripted_objects/it "Scripted objects/it").

Vedi [Funzione Part](/Part_Feature/it "Part Feature/it") per le informazioni generali su come aggiungere oggetti al documento.

Un Gruppo ([App DocumentObjectGroup](/App_DocumentObjectGroup "App DocumentObjectGroup")) è creato con il metodo del documento `addObject()`. Una volta che un Gruppo esiste, altri oggetti possono essere aggiunti ad esso con i metodi `addObject()` o `addObjects()`.

```
import FreeCAD as App

doc = App.newDocument()
group = App.ActiveDocument.addObject("App::DocumentObjectGroup", "Group")

obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("Part::Box", "Box")

group.addObjects([obj1, obj2])
App.ActiveDocument.recompute()

```

Questo `App::DocumentObjectGroup` di base non ha un oggetto Proxy, quindi non può essere pienamente utilizzato per la sotto-classe.

Per la sottoclasse [Python](/Python/it "Python/it"), è necessario creare un oggetto `App::DocumentObjectGroupPython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::DocumentObjectGroupPython", "Name")
obj.Label = "Custom label"

```

Per esempio, un [Analisi FEM](/FEM_Analysis/it "FEM Analysis/it") è un oggetto `App::DocumentObjectGroupPython` con un'icona personalizzata e proprietà aggiuntive.

## Link

* [Esempio di utilizzo in Arch Tutorial](/Arch_tutorial/it#Organizzare_il_modello "Arch tutorial/it")
* [Struttura del documento](/Document_structure/it "Document structure/it")
* [Esempio di organizzazione del modello](http://www.freecadweb.org/wiki/index.php?title=Arch_tutorial#Organizing_your_model)

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Group/it&oldid=1560713>"