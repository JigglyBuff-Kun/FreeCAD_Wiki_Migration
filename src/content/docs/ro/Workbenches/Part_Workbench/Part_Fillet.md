---
title: Part Racordarea/Rotunjirea colțurilor
---
|  |
| --- |
| Part Fillet |
| poziția meniului |
| Part → Fillet |
| Ateliere |
| [Part](/Part_Workbench/ro "Part Workbench/ro"), Complete |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Part Chamfer](/Part_Chamfer/ro "Part Chamfer/ro") |
|  |

#### Descriere

Acest instrument se aplică o pilire (rotunjite) la colțurile/muchiile selectate ale unui obiect. O casetă de dialog vă permite să alegeți obiectele și marginile pe care să lucrați.

**Part Fillet** creates fillets (rounds) on the selected edges of a shape. A dialog allows choosing which shape and which edges to work on.

#### Utilizare

* Porniți instrumentul din bara de instrumente Part sau din meniu. Puteți selecta obiectul înainte sau după pornirea instrumentului.
* Dacă forma nu a fost selectată înainte de a porni instrumentul, selectați-o din lista derulantă Shape din TaskPanel.
* Selectați tipul de rotunjire, fie cu raza constantă (implicită), fie cu raza variabilă.
* Selectați marginile fie în vizualizarea modelului 3D, fie bifând-le în lista de margini din TaskPanel.
* Setați valoarea razei.
* Click pe OK pentru a valida.

* Invoke the tool from the Part toolbar or from the **Part → Fillet...** menu. You can select the shape before invoking the tool.
* If the shape was not selected prior to invoking the tool, select it in the Shape drop down list in the [Task Panel](/Task_panel "Task panel").
* Select the fillet type, either constant radius (default) or variable radius.
* Select the edges either in the [3D view](/3D_view "3D view"), or by ticking them in the edge list in [Task Panel](/Task_panel "Task panel").
* Set the radius value.
* Click OK to validate.

![](/images/Dialog-fillet.png)
sau în Linux

![](/images/Dialog-fillet_it.png)

## Part Fillet VS. PartDesign Fillet

### Part Fillet VS. PartDesign Fillet

There is another fillet tool in the PartDesign workbench. Please note that their operation is quite different. Check out the [PartDesign Fillet](/PartDesign_Fillet "PartDesign Fillet") reference page for more details on their differences.

## Notes on application of Part Fillet

### Notes on application of Part Fillet

The fillet tool sometimes fails when trying to fillet complex objects.
A common cause of this may be that the shape being filleted is not geometrically correct. This may be the result of lines/planes etc not being removed after previous operations used to construct the shape ( e.g. Cut/Intersection/Fusion). A number of steps can be used to minimize problems:

* Where possible leave filleting a part until the part is completely generated. This will minimize interaction of fillets with subsequent Boolean operations;
* Use the Part → Check Geometry to check for any errors in the shape geometry and correct;
* Use Part → Refine shape to remove any artifacts introduced by previous Boolean operations before filleting (and in some cases between filleting operations in sequence);
* Consider using Edit → Preferences → PartDesign to enable automatic checking and refining of the model after Boolean and sketch based operations (performance may be affected if these options are left switched on).

The fillet tool sometimes fails when trying to fillet complex shapes. A common cause of this may be that the shape being filleted is not geometrically correct. This may be the result of lines/planes etc not being removed after previous operations used to construct the shape ( e.g. Cut/Intersection/Fusion). A number of steps can be used to minimize problems:

* Where possible leave filleting a part until the part is completely generated. This will minimize interaction of fillets with subsequent Boolean operations;
* Use the **Part → Check Geometry** to check for any errors in the shape geometry and correct;
* Use **Part → Create a copy → Refine shape** to remove any artifacts introduced by previous Boolean operations before filleting (and in some cases between filleting operations in sequence);
* Consider using **Edit → Preferences → PartDesign** to enable automatic checking and refining of the model after Boolean and sketch based operations (performance may be affected if these options are left switched on).

The fillet tool is affected by the [topological naming problem](/Topological_naming_problem "Topological naming problem") when making a change to a modeling step earlier in the chain that affects the number of faces or vertices. This could cause unpredictable results. Until this problem is resolved it is advised to apply chamfer and fillet operations as the last steps in the modelling chain.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Fillet/ro&oldid=1518635>"