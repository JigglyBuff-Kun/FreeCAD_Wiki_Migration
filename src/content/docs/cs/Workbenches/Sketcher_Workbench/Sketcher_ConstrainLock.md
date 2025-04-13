---
title: Vazba Uzamknout
---
|  |
| --- |
| Sketcher ConstrainLock |
| Umístění Menu |
| Sketch → Sketcher constraints → Constrain lock |
| Pracovní stoly |
| [Sketcher](/Sketcher_Workbench/cs "Sketcher Workbench/cs"), [PartDesign](/PartDesign_Workbench/cs "PartDesign Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Constraint Coincident](/index.php?title=Sketcher_ConstrainBlock/cs&action=edit&redlink=1 "Sketcher ConstrainBlock/cs (page does not exist)") |
|  |

"Vytvoření zámku na vybrané položce"

## Popis

Tento nástroj se pokusí *plně ustavit* jakoukoliv vybranou položku.

The ![](/images/Sketcher_ConstrainLock.svg) [Sketcher ConstrainLock](/Sketcher_ConstrainLock "Sketcher ConstrainLock") tool applies [Horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX") and [Vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY") constraints to points. If a single point is selected the constraints reference the origin of the sketch. If two or more points are selected the constraints reference the last point in the selection.

Díky tomu, že FreeCAD je stále ještě ve vývoji - tento nástroj předvádí podivné chování, když se pokouší 'zamknout' cokoliv jiného než bod. Například (jako ve V0.12 R4802), když uzamknete kružnici její obvodovou čárou a ne jejím středovým *bodem*, zobrazí se v dialogovém okně horizontální i vertikální vazební hodnoty, ale jsou nastaveny na nulu a nezobrazí se v grafickém okně.

## Postup

1. Nejdříve je nutné vysvítit položku, kterou chcete uzamknout. Z důvodů uvedených výše je rozumné vysvítit pouze *bod*.  
   ![](/images/LockConstraint1.png)
2. Vysvícení nakreselené položky je dosaženo posunutím myši nad položku a kliknutím na levé tlačítko myši.
   Vysvícená položka změní barvu na zelenou.  
   ![](/images/LockConstraint2.png)
3. Jakmile je položka vysvícena, kliknutím levým tlačítkem myši na vazbu *uzamknout* uzamčete položku na jejím místě. Obyčejně je to představováno jako dvě vazby: horizontální vzdálenost od počátku a vertikální vzdálenost od počátku. Tyto vzdálenosti jsou obecně nastaveny na aktuální koordináty bodu.  
   ![](/images/LockConstraint3.png)
4. Vertikální a horizontální vazba, které určují zámek mohou být editovány buď dvojklikem na příslušnou vazbu v náčrtu nebo v záložce vazeb rozbalovacího panelu pohledu. To otevře dialogové okno pro editaci vazeb. Kliknutí na horizontální vazbu vyvolá:  
   ![](/images/LockConstraint4.png).
5. Zadejte požadovanou hodnotu v dialogovém okně a klikněte na OK.  
   ![](/images/LockConstraint5.png)
6. Nová hodnota vazby je ihned aplikována výkres.  
   ![](/images/LockConstraint6.png)
7. Podobně může být editována i vertikální vazba pro ustavení bodu na požadovaném místě.  
   ![](/images/LockConstraint7.png)

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning constraints** [preference](/Sketcher_Preferences#General "Sketcher Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) button and select the **![](/images/Sketcher_ConstrainLock.svg) Constrain lock** option from the dropdown.
   * If this preference has a different value (and in 0.21 and below): press the ![](/images/Sketcher_ConstrainLock.svg) [Constrain lock](/Sketcher_ConstrainLock "Sketcher ConstrainLock") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainLock.svg) Constrain lock** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Dimension → ![](/images/Sketcher_ConstrainLock.svg) Constrain lock** option from the context menu.
   * Use the keyboard shortcut: K then L.
3. The cursor changes to a cross with the tool icon.
4. Select a single point.
5. Two constraints are added.
6. Optionally keep creating constraints.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Select one or more points.
2. Invoke the tool as explained above.
3. Depending on the selection two or more constraints are added.

## Notes

* There is no automatic prompt to edit the constraint values. If required values can be [edited manually](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainLock/cs&oldid=1413811>"