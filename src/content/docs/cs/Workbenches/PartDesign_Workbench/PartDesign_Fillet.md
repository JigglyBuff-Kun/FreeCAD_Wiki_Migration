---
title: Návrh dílu Zaoblení
---
|  |
| --- |
| PartDesign Fillet |
| Umístění Menu |
| PartDesign → Fillet |
| Pracovní stoly |
| [PartDesign](/PartDesign_Workbench/cs "PartDesign Workbench/cs"), Complete |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Part Fillet](/Part_Fillet/cs "Part Fillet/cs") |
|  |

### Popis

Tento nástroj vytváří zaoblení na vybrané hraně objektu. Ve stromu projektu je vytvořena nová samostatné položka (následovaná pořadovým číslem jestliže v dokumentu už zaoblení existuje).

The ![](/images/PartDesign_Fillet.svg) **PartDesign Fillet** tool creates fillets (rounds) on the selected edges of an object. It adds a **Fillet** object to the document with its corresponding representation in the [Tree view](/Tree_view "Tree view").

![](/images/PartDesign_Fillet-01.png)

Vyberte hrany na objektu před tím než použijete tento nástroj.

![](/images/PartDesign_Fillet-02.png)

V parametrech Zaoblení nastavte poloměr zaoblení.

![](/images/PartDesign_Fillet-03.png)

Do stromu projektu je přidán objekt Zaoblení.

#### Použití

* Vyberte jednu nebo více hran objektu, potom spusťte tento nástroj buď kliknutím na jeho ikonu nebo výběrem v menu.
* Na panelu nástrojů v parametrech zaoblení nastavte poloměr zaoblení buď číslem nebo klikáním na šipky nahoru/dolu. Zadané zaoblení se zobrazí v reálném čase.
* Klikněte na OK pro potvrzení.
* Pro více zaoblení, která se vzájemně dotýkají (řetězec), může být vybrána jedna hrana; zaoblení se protáhne přes celý řetězec.
* Chcete-li zaoblení po potvrzení dodatečně upravit, buď dvojklikněte na položku zaoblení ve stromu projektu nebo klikněte pravým tlačítkem na zaoblení a vyberte **Edit Fillet** (Úprava zaoblení).

#### Návrh dílu Zaoblení VS. Zaoblení dílu

**Návrh dílu Zaoblení nelze zaměňovat s jeho [Protějškem na pracovní ploše Díl](/Part_Fillet "Part Fillet")**. Ačkoliv používají stejnou ikonu, není to to samé a ani nejsou stejně používány.
Zde je uvedeno čím se vzájemně liší:

* Návrh dílu Zaoblení je *parametrické*. Po aplikaci zaoblení může být jeho poloměr upraven; to není možné u Zaoblení dílu.
* Hrany na objektu musí být vybrány před aktivací Návrh dílu Zaoblení. Při použití Zaoblení dílu může být nástroj spuštěn a potom teprve vybráno těleso a hrany.
* Návrh dílu Zaoblení vytváří samostatný objekt ve stromu projektu (pokud je jich více, jsou sekvenčně očíslovány). Zaoblení dílu se stává rodičem objektu, na který bylo aplikováno.
* Návrh dílu Zaoblení nabízí náhled přidávaného zaoblení před tím než je potvrzeno.
* Zaoblení dílu podporuje proměnný poloměr (s počátečním úhlem a koncovým úhlem). Návrh dílu Zaoblení to neumožňuje.

### Add a fillet

1. Optionally [activate](/PartDesign_Body#Active_status "PartDesign Body") the Body to fillet.
2. There are several ways to select edges to fillet:
   * Select one or more edges of the Body individually.
   * Select one or more faces of the Body to select all their edges.
   * Select a feature (usually the last feature) of the Body to select all its edges.
3. For a chain of tangentially connected edges only a single edge needs to be selected, the fillet will propagate along the chain.
4. There are several ways to invoke the tool:
   * Press the ![](/images/PartDesign_Fillet.svg) [Fillet](/PartDesign_Fillet "PartDesign Fillet") button.
   * Select the **Part Design → Apply a dress-up feature → ![](/images/PartDesign_Fillet.svg) Fillet** option from the menu.
5. If there is no active Body, and there are two or more Bodies in the document, the **Active Body Required** dialog will open and prompt you to activate one. If there is a single Body it will be activated automatically.
6. The **Fillet parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
7. Press the OK button to finish.

### Edit a fillet

1. Do one of the following:
   * Double-click the Fillet object in the [Tree view](/Tree_view "Tree view")
   * Right-click the Fillet object in the [Tree view](/Tree_view "Tree view") and select **Edit Fillet** from the context menu.
2. The **Fillet parameters** [task panel](/Task_panel "Task panel") opens.See [Options](#Options) for more information.
3. Press the OK button to finish.

## Options

* To add edges do one of the following:
  + Press the Add button to start selecting edges and/or faces in the [3D view](/3D_view "3D view").
  + To select all remaining edges do the following:
    1. If required press the Add button.
    2. Use the Ctrl+Shift+A keyboard shortcut, or right-click the list and select **Add all edges** from the context menu.
* To remove edges do one of the following:
  + Press the Remove button to start deselecting edges and/or faces in the [3D view](/3D_view "3D view"). Selected elements are highlighted in purple.
  + Select one or more elements in the list and press the Del key, or right-click the list and select **Remove** from the context menu.
* Set the **Radius** of the fillet.
* Check the **Use all edges** checkbox to select all edges of the previous feature. This deactivates the selection list and the related buttons.

## Notes

* PartDesign Fillet should not be confused with [Part Fillet](/Part_Fillet "Part Fillet"). Unless you know what you are doing, [Part Fillet](/Part_Fillet "Part Fillet") should not be used on a PartDesign Body. See [Part and PartDesign](/Part_and_PartDesign "Part and PartDesign").
* Fillets cannot completely consume the adjacent faces.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A PartDesign Fillet object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Údaje**Base** (`LinkSub`): Link to the selected edges and faces of the parent feature. Can be a link to only the parent feature if Údaje**Use All Edges** is `true`.
* Údaje**Support Transform** (`Bool`): If `true` the filleted shape of the additive/subtractive parent feature will be used when the fillet object is included in a [pattern](/PartDesign_Workbench#Transformation_tools "PartDesign Workbench"), else only the shape of the fillet itself will be used. The default is `false`.
* Údaje (hidden)**Add Sub Shape** (`PartShape`)
* Údaje (hidden)**Base Feature** (`Link`): Link to the parent feature.
* Údaje (hidden)**\_ Body** (`LinkHidden`): Link to the parent body.

Fillet

* Údaje**Radius** (`QuantityConstraint`): The fillet radius. The default is `1 mm`.
* Údaje**Use All Edges** (`Bool`): If `true` all edges of the feature are filleted, and the edges specified by Údaje**Base** are ignored. The default is `false`.

Part Design

* Údaje**Refine** (`Bool`): If `true` redundant edges are removed from the result of the operation. The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

## Known issues

Fillets, chamfers, and other features that operate on solid bodies depend on the underlying [OpenCASCADE](/OpenCASCADE "OpenCASCADE") Technology (OCCT) kernel that FreeCAD uses. The OCCT kernel occasionally has difficulty handling coincident sharp edges, where two faces meet. If this is the case FreeCAD may crash without an explanation.

If run from the terminal, FreeCAD may output a log like this after a crash:

```
#1  0x7fff63d660ba in BRep_Tool::Curve(TopoDS_Edge const&, TopLoc_Location&, double&, double&) from /usr/lib/x86_64-linux-gnu/libTKBRep.so.7+0x2a
#2  0x7fff63d69546 in BRep_Tool::Curve(TopoDS_Edge const&, double&, double&) from /usr/lib/x86_64-linux-gnu/libTKBRep.so.7+0x46
#3  0x7fff71f4fef5 in ChFi3d_Builder::PerformIntersectionAtEnd(int) from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x3b05
#4  0x7fff71f58307 in ChFi3d_Builder::PerformOneCorner(int, bool) from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x1097
#5  0x7fff71ef6218 in ChFi3d_Builder::PerformFilletOnVertex(int) from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x4e8
#6  0x7fff71ef71d1 in ChFi3d_Builder::Compute() from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0xe31
#7  0x7fff720ad7c3 in BRepFilletAPI_MakeChamfer::Build() from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x33
#8  0x7fff723be48e in PartDesign::Chamfer::execute() from /usr/lib/freecad-daily/lib/_PartDesign.so+0x60e
...

```

This output references functions from OCCT libraries. If this type of crash occurs, the problem may need to be reported and solved in OCCT rather than in FreeCAD.

See the forum threads for more information:

* [Bug Chamfer bigger than 2mm crashes freecad](https://forum.freecadweb.org/viewtopic.php?p=263818#p263818)
* [Segfault when using part design fillet](https://forum.freecadweb.org/viewtopic.php?p=264827#p264827)

### Topological naming

Edge numbers are not completely stable, therefore it is advisable that you finish the main design work of your solid body before applying features like fillets and chamfers, otherwise edges could change names and filleted edges would likely become invalid. When the Údaje**Use All Edges** property is `true` there is some protection from this. Because in such cases all the edges of the base object are used and there is no dependence on individual edge names.

Read more in [topological naming problem](/Topological_naming_problem "Topological naming problem").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Fillet/cs&oldid=1515572>"