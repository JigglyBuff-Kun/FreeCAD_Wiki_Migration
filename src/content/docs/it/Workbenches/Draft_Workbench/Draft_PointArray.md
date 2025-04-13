---
title: Draft Serie su punti
---
|  |
| --- |
| Draft Serie su punti |
| Posizione nel menu |
| Modifiche → Strumenti serie → Serie su punti Modifica → Serie su punti |
| Ambiente |
| [Draft](/Draft_Workbench/it "Draft Workbench/it"), [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.18 |
| Vedere anche |
| [Draft Serie ortogonale](/Draft_OrthoArray/it "Draft OrthoArray/it"), [Draft Serie polare](/Draft_PolarArray/it "Draft PolarArray/it"), [Draft Serie circolare](/Draft_CircularArray/it "Draft CircularArray/it"), [Draft Serie su tracciato](/Draft_PathArray/it "Draft PathArray/it"), [Draft Serie di link su tracciato](/Draft_PathLinkArray/it "Draft PathLinkArray/it"), [Draft Serie di link su punti](/Draft_PointLinkArray/it "Draft PointLinkArray/it") |
|  |

## Descrizione

Il comando ![](/images/Draft_PointArray.svg) **Serie su punti** crea una serie (array) regolare da un oggetto base selezionato posizionando copie nei punti da un oggetto punto. Utilizzare invece il comando [Serie di link su punti](/Draft_PointLinkArray/it "Draft PointLinkArray/it") per creare una serie [Link](/App_Link/it "App Link/it") più efficiente. Fatta eccezione per il tipo di matrice creata, Serie di link o Serie normale, il comando [Serie di link su punti](/Draft_PointLinkArray/it "Draft PointLinkArray/it") è identico a questo comando.

L'oggetto di base può essere un oggetto 2D creato con [Draft](/Draft_Workbench/it "Draft Workbench/it") o [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it"), ma anche un oggetto 3D come quelli creati con [Part](/Part_Workbench/it "Part Workbench/it"), [ [PartDesign\_Workbench/it|PartDesign]] o [BIM](/BIM_Workbench/it "BIM Workbench/it").

L'oggetto punto può essere qualsiasi oggetto con una forma e vertici (inclusa una [Parte](/Std_Part/it "Std Part/it") contenente uno o più di tali oggetti), così come un [mesh](/Mesh_Workbench/it "Mesh Workbench/it") e un [nuvola di punti](/Points_Workbench/it "Points Workbench/it"). I punti duplicati nell'oggetto punto vengono filtrati.

![](/images/Draft_PointArray_Example.png)

Serie su punti

## Utilizzo

1. Selezionare l'oggetto che si desidera allineare.
2. Aggiungere l'oggetto punto alla selezione.
3. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Draft_PointArray.svg) Serie su punti.
   * [Draft](/Draft_Workbench/it "Draft Workbench/it"): Selezionare l'opzione **Modifiche → Strumenti serie→ ![](/images/Draft_PointArray.svg) Serie su punti** dal menu.
   * [BIM](/BIM_Workbench/it "BIM Workbench/it"): Selezionare l'opzione **Modifica → ![](/images/Draft_PointArray.svg) Serie su punti** dal menu.
4. La serie viene creata.
5. Facoltativamente, modificare le [proprietà](#Proprietà) della serie nell'[Editor delle proprietà](/Property_editor/it "Property editor/it").

## Notes

* Fused Link arrays are not displayed properly, in the 3D view their elements always appear unfused.

## Proprietà

Vedere anche: [Editor delle proprietà](/Property_editor/it "Property editor/it").

Un oggetto Serie su punti è derivato da un oggetto [Part Feature](/Part_Feature/it "Part Feature/it") e ne eredita tutte le proprietà (ad eccezione di alcune proprietà View che non sono ereditate da Serie di Link). Le seguenti proprietà sono aggiuntive se non diversamente specificato:

### Data

Link

Le proprietà in questo gruppo sono disponibili solo per le serie di link. Vedere [Crea link](/Std_LinkMake/it#Proprietà "Std LinkMake/it") per ulteriori informazioni.

* Dati**Scale** (`Float`)
* Dati (Hidden)**Scale Vector** (`Vector`)
* Dati**Scale List** (`VectorList`)
* Dati (Hidden)**Visibility List** (`BoolList`)
* Dati (Hidden)**Placement List** (`PlacementList`)
* Dati (Hidden)**Element List** (`LinkList`)
* Dati (Hidden)**\_ Link Touched** (`Bool`)
* Dati (Hidden)**\_ Child Cache** (`LinkList`)
* Dati (Hidden)**Colored Elements** (`LinkSubHidden`)
* Dati**Link Transform** (`Bool`)

Draft

* Dati**Always Sync Placement** (`Bool`)

Objects

* Dati**Base** (`Link`): specifica l'oggetto da duplicare nella serie.
* Dati**Count** (`Integer`): (sola lettura) specifica il numero di elementi nella serie. Questo numero è determinato dal numero di punti nel Dati**Point Object**.
* Dati**Expand Array** (`Bool`): specifica se espandere la serie nella [Vista ad albero](/Tree_view/it "Tree view/it") per abilitare la selezione dei suoi singoli elementi. Disponibile solo per le serie di Link.
* Dati**Extra Placement** (`Placement`): specifica un ulteriore [posizionamento](/Placement/it "Placement/it"), traslazione e rotazione, per ogni elemento nella serie.
* Dati**Fuse** (`Bool`): specifica se gli elementi sovrapposti nell'array sono fusi o meno. Non utilizzato per per le serie di Link. [disponibile dalla versione 0.22](/Release_notes_0.22/it "Release notes 0.22/it")
* Dati**Point Object** (`Link`): specifica l'oggetto i cui punti vengono utilizzati per posizionare gli elementi nella serie.

### View

Link

Le proprietà in questo gruppo, ad eccezione della proprietà ereditata, sono disponibili solo per le serie di link. Vedere [Crea link](/Std_LinkMake/it#Proprietà "Std LinkMake/it") per ulteriori informazioni.

* Vista**Draw Style** (`Enumeration`)
* Vista**Line Width** (`FloatConstraint`)
* Vista**Override Material** (`Bool`)
* Vista**Point Size** (`FloatConstraint`)
* Vista**Selectable** (`Bool`): questa è una proprietà ereditata che appare nel gruppo Selezione per altre serie
* Vista**Shape Material** (`Material`)

Base

Le proprietà in questo gruppo, ad eccezione della proprietà ereditata, sono disponibili solo per le serie di link. Vedere [Crea link](/Std_LinkMake/it#Proprietà "Std LinkMake/it") per ulteriori informazioni.

* Vista (Hidden)**Child View Provider** (`PersistentObject`)
* Vista (Hidden)**Material List** (`MaterialList`)
* Vista (Hidden)**Override Color List** (`ColorList`)
* Vista (Hidden)**Override Material List** (`BoolList`)
* Vista (Hidden)**Proxy** (`PythonObject`): this is an inherited property.

Display Options

Le proprietà in questo gruppo sono proprietà ereditate. Vedere [Part Feature](/Part_Feature#Properties "Part Feature") per ulteriori informazioni.

* Vista**Bounding Box** (`Bool`): questa proprietà non è ereditata dalle serie di link.
* Vista**Modalità di visualizzazione** (`Enumeration`): per le serie di link può essere `Link` o `ChildView`. Per altre serie può essere: `Flat Lines`, `Shaded`, `Wireframe` o `Points`
* Vista**Show In Tree** (`Bool`)
* Vista**Visibility** (`Bool`)

Draft

* Vista**Pattern** (`Enumeration`): not used.
* Vista**Pattern Size** (`Float`): not used.

Object style

Le proprietà in questo gruppo non vengono ereditate dalle serie di link.

## Scripting

Vedere anche: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Per creare una serie di punti usare il metodo `make_point_array` ([disponibile dalla versione 0.19](/Release_notes_0.19/it "Release notes 0.19/it")) del modulo Draft. Questo metodo sostituisce il metodo deprecato `makePointArray`.

```
point_array = make_point_array(base_object, point_object, extra=None, use_link=True)

```

* `base_object` è l'oggetto da disporre in serie. Può anche essere la `Label` (string) di un oggetto nel documento corrente.
* `point_object` è l'oggetto che contiene i punti. Può anche essere la `Label` (string) di un oggetto nel documento corrente. Dovrebbe avere una proprietà `Geometry`, `Links` o `Components` contenente punti.
* `extra` è un `App.Placement`, un `App.Vector` o un `App.Rotation` che sposta ogni elemento.
* Se `use_link` è `True` gli elementi creati sono [App Links](/App_Link/it "App Link/it") invece di normali copie.

Esempio:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon = Draft.make_polygon(3, radius=500.0)

p1 = Draft.make_point(App.Vector(1500, 0, 0))
p2 = Draft.make_point(App.Vector(2500, 0, 0))
p3 = Draft.make_point(App.Vector(2000, 1000, 0))

compound = doc.addObject("Part::Compound", "Compound")
compound.Links = [p1, p2, p3]

point_array = Draft.make_point_array(polygon, compound)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PointArray/it&oldid=1557854>"