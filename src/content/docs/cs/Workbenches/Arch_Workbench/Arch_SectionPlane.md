---
title: Architektura Rovina řezu
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch SectionPlane |
| Umístění Menu |
| Arch → Section Plane |
| Pracovní stoly |
| [Arch](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| S P |
| Představen ve verzi |
| - |
| Viz také |
| *Nikdo* |
|  |

## Popis

Tento nástroj umístí do aktuálního dokumentu pomůcku Rovina řezu, která definuje rovinu řezu nebo pohledu. Tato pomůcka může být přemístěna a přeorientována pomocí posunování a otáčení tak, abyste získali 2D pohled, který chcete získat. Objekt Rovina řezu bere ohled pouze na objekty, které byly vybrány v době jeho vytvoření. Objekty mohou být později přidávány do nebo odebírány z objektu Rovina řezu pomocí nástrojů [Přidat](/Arch_Add "Arch Add") a [Odebrat](/Arch_Remove "Arch Remove").

Po vytvoření objekt Rovina řezu také vkládá [pohled](/Drawing_View "Drawing View") sama sebe do aktivní [Vykreslovací stránky](/Drawing_Workbench "Drawing Workbench") nebo vytváří novou stránku, pokud žádná neexistuje. Můžete také přidat pohled Roviny řezu přímo do dokumentu použitím nástroje [2D kreslení](/Draft_Shape2DView "Draft Shape2DView") s vybranou rovinou řezu.

![](/images/Arch_SectionPlane_example.jpg)

## Použití

1. Vyberte objekty které chcete zahrnout do roviny pohledu
2. Stiskněte tlačítko ![](/images/Arch_SectionPlane.png) **Rovina řezu** nebo stiskněte klávesy S a P
3. [Posun](/Draft_Move "Draft Move")/[otočení](/Draft_Rotate "Draft Rotate") nastaví rovinu řezu do požadované pozice
4. Stiskněte tlačítko ![](/images/Std_Recompute.png) **Přepočítat** pro aktualizaci pohledu

## Volby

* The Section plane object will only consider a certain set of objects, not all the objects of the document. Objects can be added or removed from a SectionPlane object by using the [Arch Add](/Arch_Add "Arch Add") and [Arch Remove](/Arch_Remove "Arch Remove") tools, or by double-clicking the Section Plane in the tree view, selecting objects either in the list of in the 3D scene, and pressing the **add** or **remove** buttons.

* S vybraným objektem Rovina řezu použijte nástroj [2D kreslení](/Draft_Shape2DView "Draft Shape2DView") k vytvoření tvaru reprezentujícího pohled řezu v dokumentu

![](/images/Arch_Section_example2.jpg)

* Vytvořit další [pohledy](/Drawing_View "Drawing View") z roviny řezu lze po jeho vybrání udělat použitím nástroje [Kreslení](/Draft_Drawing "Draft Drawing")

![](/images/Arch_Section_example3.jpg)

* The Section Plane can also be used to show the entire 3D view cut by an infinite plane. This is only visual, and won't affect the geometry of the objects being cut.

![](/images/Arch_SectionPlane_CutView.jpg)

## Vlastnosti

* Pohled**Rozměr zobrazení**: Velikost pomůcky Rovina řezu ve 3D pohledu

![](/images/Arch_SectionPlane_ClipView.png)

The Arch SectionPlane with the clip view option will behave like a camera, limiting the field of view.

## Tweaks

* Adding manually a property named **RotateSolidRender** of type **App::PropertyAngle** to the section plane's **View** properties (right-click the properties view -> show hidden, right-click again -> add property) allows to rotate the render when using Solid mode. This is useful when a rendered view has for example both Arch and Draft elements, and the rendering of the Arch elements is rotated in relation to the Draft elements.

## Scripting

## Skriptování

Nástroj Rovina řezu může být využit v [makrech](/Macros "Macros") a z konzoly Pythonu použitím následující funkce:

```
Section = makeSectionPlane(objectslist=None, name="Section")

```

:   Vytvoří objekt Rovina řezu zahrnující zadané objekty.

Příklad:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
Structure = Arch.makeStructure(length=1000, width=1000, height=200)
FreeCAD.ActiveDocument.recompute()

BuildingPart = Arch.makeBuildingPart([Wall1, Wall2])

Floor = Arch.makeFloor([BuildingPart])
Building = Arch.makeBuilding([Floor, Structure])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

Section1 = Arch.makeSectionPlane([Wall1, Wall2])
Section2 = Arch.makeSectionPlane([Structure])
Section3 = Arch.makeSectionPlane([Site])
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SectionPlane/cs&oldid=1560777>"