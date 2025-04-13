---
title: Draft Piano di lavoro proxy
---
|  |
| --- |
| Draft Piano di lavoro proxy |
| Posizione nel menu |
| Utilità → Crea piano di lavoro Proxy Utilità → Crea piano di lavoro Proxy |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Draft Seleziona piano](/Draft_SelectPlane/it "Draft SelectPlane/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_WorkingPlaneProxy.svg) **Draft Piano di lavoro proxy** crea un piano di lavoro proxy per salvare il [Draft Piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") corrente. È possibile utilizzare piano di lavoro proxy per ripristinare rapidamente un piano di lavoro. La posizione della telecamera e la visibilità degli oggetti nella [Vista 3D](/3D_view/it "3D view/it") vengono salvate anche nel piano di lavoro proxy e possono, [facoltativamente](#Proprietà), essere ripristinate.

![](/images/Draft_WPProxy_example.png)

Tre Piani di lavoro proxy con diversi orientamenti e offset

## Utilizzo

1. Facoltativamente modificare il [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it").
2. Facoltativamente modificare la [Vista 3D](/3D_view/it "3D view/it").
3. Facoltativamente, modificare lo stato di visibilità degli oggetti nel documento.
4. Esistono diversi modi per richiamare il comando:
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Premere il pulsante ![](/images/Draft_WorkingPlaneProxy.svg) Crea piano di lavoro proxy.
   * Draft: Selezionare l'opzione **Utilità → ![](/images/Draft_WorkingPlaneProxy.svg) Crea piano di lavoro proxy** dal menu, o dalla [Vista ad albero](/Tree_view/it "Tree view/it") o dal menu contestuale della [Vista 3D](/3D_view/it "3D view/it").
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **Utilità → ![](/images/Draft_WorkingPlaneProxy.svg) Crea piano di lavoro proxy** dal menu.
5. Viene creato un Piano di lavoro proxy.
6. Per allineare il [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") con un Piano di lavoro proxy, fare doppio clic sul Piano di lavoro proxy nella [Vista ad albero](/Tree_view/it "Tree view/it") o utilizzarlo con il comando [Draft Seleziona piano](/Draft_SelectPlane/it "Draft SelectPlane/it").

## Menù contestuale

Per un Draft Piano di lavoro proxy queste opzioni aggiuntive sono disponibili nel menu contestuale [Vista ad albero](/Tree_view/it "Tree view/it"):

* **![](/images/Draft_SelectPlane.svg) Memorizza la posizione della telecamera**: aggiorna la proprietà Vista**View Data** del Piano di lavoro proxy con le impostazioni correnti della [Vista 3D](/3D_view/it "3D view/it") della telecamera.
* **![](/images/Draft_SelectPlane.svg) Memorizza stato oggetti**: aggiorna la proprietà Vista**Visibility Map** del Piano di lavoro proxy con lo stato di visibilità corrente degli oggetti nel documento.

## Note

* I Piani di lavoro proxy possono essere [spostati](/Draft_Move/it "Draft Move/it") e [ruotati](/Draft_Rotate/it "Draft Rotate/it") come qualsiasi altro oggetto. Utilizzare ![](/images/Draft_Snap_Center.svg) [Draft Aggancia Centro](/Draft_Snap_Center/it "Draft Snap Center/it") per eseguire l'aggancio al punto Dati**Placement**.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Draft WorkingPlaneProxy deriva da un oggetto [App FeaturePython](/App_FeaturePython/it "App FeaturePython/it") ed eredita tutte le sue proprietà. Ha inoltre le seguenti proprietà aggiuntive:

### Data

Base

* Dati**Placement** (`Placement`): specifica la posizione del Piano di lavoro proxy nella [Vista 3D](/3D_view/it "3D view/it"). Vedere [Posizionamento](/index.php?title=Posizionamento/it&action=edit&redlink=1 "Posizionamento/it (page does not exist)").
* Dati (Hidden)**Shape** (`Shape`): specifica la forma del Piano di lavoro proxy.

### View

Base

* Vista**Line Color** (`Color`): specifica il colore di tutti gli elementi del Piano di lavoro proxy.
* Vista**Line Width** (`Float`): specifica lo spessore della linea degli assi e dei simboli freccia.
* Vista**Restore State** (`Bool`): specifica se Vista**Visibility Map** viene ripristinato quando il [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") è allineato con il Piano di lavoro proxy.
* Vista**Restore View** (`Bool`): specifica se Vista**View Data** viene ripristinato quando il [piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") è allineato con il Piano di lavoro proxy
* Vista**Transparency** (`Percent`): specifica la trasparenza della faccia del Piano di lavoro proxy.
* Vista**View Data** (`FloatList`): specifica la posizione e le impostazioni della telecamera.
* Vista (Hidden)**Visibility Map** (`Map`): specifica lo stato di visibilità degli oggetti.

Draft

* Vista**Arrow Size** (`Length`): specifica la dimensione dei simboli freccia visualizzati sulla punta dei tre assi.
* Vista**Display Size** (`Length`): specifica la lunghezza e la larghezza del Piano di lavoro proxy.

## Script

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per creare un Draft WorkingPlaneProxy utilizzare il metodo `make_workingplaneproxy` del modulo Draft.

Se [Draft](/Draft_Workbench/it "Draft Workbench/it") è attivo, l'oggetto dell'applicazione FreeCAD ha una proprietà `DraftWorkingPlane` che memorizza il piano di lavoro corrente. L'`Placement` del metodo `getPlacement` dell'oggetto `DraftWorkingPlane` può essere utilizzato per creare un Piano di lavoro proxy allineato. L'`Placement` di un Piano di lavoro proxy a sua volta può essere utilizzato per riallineare il piano di lavoro.

```
# This code only works if the Draft Workbench is active!

import FreeCAD as App
import FreeCADGui as Gui
import Draft

doc = App.newDocument()

workplane = App.DraftWorkingPlane
place = workplane.getPlacement()

proxy = Draft.make_workingplaneproxy(place)
proxy.ViewObject.DisplaySize = 3000
proxy.ViewObject.ArrowSize = 200

axis2 = App.Vector(1, 1, 1)
point2 = App.Vector(3000, 0, 0)
place2 = App.Placement(point2, App.Rotation(axis2, 90))

proxy2 = Draft.make_workingplaneproxy(place2)
proxy2.ViewObject.DisplaySize = 3000
proxy2.ViewObject.ArrowSize = 200

workplane.setFromPlacement(proxy2.Placement, rebase=True)
Gui.Snapper.setGrid()

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_WorkingPlaneProxy/it&oldid=1474321>"