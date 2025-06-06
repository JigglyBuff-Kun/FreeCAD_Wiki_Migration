---
title: Díl Zaoblení
---
|  |
| --- |
| Díl Zaoblení |
| Umístění Menu |
| Díl → Zaoblení |
| Pracovní stoly |
| [Díl](/Part_Workbench/cs "Part Workbench/cs"), Kompletace |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Díl Zkosení](/Part_Chamfer/cs "Part Chamfer/cs") |
|  |

#### Popis

Tento nástroj vytváří zaoblení na vybraných hranách objektu. Dialogové okno umožňuje vybrat objekty a hrany pro zaoblení.

**Part Fillet** creates fillets (rounds) on the selected edges of a shape. A dialog allows choosing which shape and which edges to work on.

#### Použití

* Spusťte nástroj z nástrojového pruhu Díl nebo z menu. Objekt můžete vybrat buď před nebo po spuštění nástroje.
* Pokud nebyl objekt vybrán před spuštěním nástroje, vyberte jej v rozbalovacím menu Tvar v panelu Úkolů.
* Vyberte typ zaoblení, buď pevný poloměr (defaultní) nebo proměnný poloměr.
* Vyberte hrany. Buď ve 3D pohledu nebo jejích výběrem v seznamu hran v panelu Úkolů.
* Nastavte hodnotu poloměru.
* Potvrďte kliknutím na OK.

* Invoke the tool from the Part toolbar or from the **Part → Fillet...** menu. You can select the shape before invoking the tool.
* If the shape was not selected prior to invoking the tool, select it in the Shape drop down list in the [Task Panel](/Task_panel "Task panel").
* Select the fillet type, either constant radius (default) or variable radius.
* Select the edges either in the [3D view](/3D_view "3D view"), or by ticking them in the edge list in [Task Panel](/Task_panel "Task panel").
* Set the radius value.
* Click OK to validate.

![](/images/Dialog-fillet.jpg)

## Part Fillet VS. PartDesign Fillet

### Díl Zaoblení VS. Návrh dílu Zaoblení

V pracovní ploše Návrh dílu je jiný nástroj pro zaoblení. Pamatujte si prosím, že jejich funkce jsou docela odlišné. Projděte si referenční stránku [Návrh dílu Zaoblení](/PartDesign_Fillet/cs "PartDesign Fillet/cs"), kde je podrobnější popis rozdílů.

## Notes on application of Part Fillet

Part Fillet might do nothing if the result would touch or cross the next adjacent edge. Consequently, if you do not obtain the expected result, try with a smaller **Radius** value. This is the same for ![](/images/Part_Chamfer.svg) [Part Chamfer](/Part_Chamfer "Part Chamfer").

The fillet tool sometimes fails when trying to fillet complex shapes. A common cause of this may be that the shape being filleted is not geometrically correct. This may be the result of lines/planes etc not being removed after previous operations used to construct the shape ( e.g. Cut/Intersection/Fusion). A number of steps can be used to minimize problems:

* Where possible leave filleting a part until the part is completely generated. This will minimize interaction of fillets with subsequent Boolean operations;
* Use the **Part → Check Geometry** to check for any errors in the shape geometry and correct;
* Use **Part → Create a copy → Refine shape** to remove any artifacts introduced by previous Boolean operations before filleting (and in some cases between filleting operations in sequence);
* Consider using **Edit → Preferences → PartDesign** to enable automatic checking and refining of the model after Boolean and sketch based operations (performance may be affected if these options are left switched on).

The fillet tool is affected by the [topological naming problem](/Topological_naming_problem "Topological naming problem") when making a change to a modeling step earlier in the chain that affects the number of faces or vertices. This could cause unpredictable results. Until this problem is resolved it is advised to apply chamfer and fillet operations as the last steps in the modelling chain.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Fillet/cs&oldid=1518631>"