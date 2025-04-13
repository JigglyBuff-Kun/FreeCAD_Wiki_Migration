---
title: Sketcher Ghid sau constrângeri definitive
---
|  |
| --- |
| Sketcher ToggleConstraint |
| Menu location |
| Sketch → Sketcher constraints → Toggle reference/driving constraint |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench"), [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Toggle Construction](/Sketcher_ToggleConstruction "Sketcher ToggleConstruction") |
|  |

## Descriere

Iconița **Toggle Constraint** comută constrângerile dimensionale (bloc, distanță orizontală sau verticală, lungime, rază și unghi) în modul de referință și invers. Pictogramele din bara de instrumente devin albastre și, în locul constrângerilor dimensionale, se creează dimensiuni de referință. Dimensiunile de referință nu leagă schița. Poate fi utilă crearea unor dimensiuni de referință într-o schiță ca modalitate de verificare a măsurătorilor; când li se dă un nume, ele pot fi, de asemenea, folosite pentru a ghida constrângerile într-o altă schiță prin [expressions](/Expressions "Expressions").

Contrary to driving constraints, reference constraints do not constrain the sketch, their value depends on other constraints, they are driven. They can be useful to verify measurements. They can be used in [expressions](/Expressions "Expressions"), but not in the sketch itself.

![](/images/Sketcher_ToggleConstraint_example.png)

*O constrângere la distanță orizontală (50 mm), o constrângere verticală (30 mm) și o constrângere de unghi (75 °) au fost stabilite pentru a defini profilul; o dimensiune de referință a fost adăugată segmentului de linie înclinată pentru a cunoaște lungimea sa (31.0583 mm).*

## Cum se folosește

### Toggle tools

1. Se apasă butonul ![](/images/Sketcher_ToggleConstraint.png) **Toggle reference/driving constraint** . Iconițele constrângerilor dimensiuonale în bara de instrumente Sketcher Constraints se schimbă din culaorea roșie în culoarea albastră.
2. The usual method of creating dimensional constraints works the same, but a blue reference dimension is added instead.
3. To turn the Sketcher Constraints toolbar back to constraint mode (red), press the Toggle Constraint button again.
4. Pentru a transforma o constrângere dimensională într-o dimensiune de referință sau pentru viceversa, selectați-o și apăsați butonul Toggle Constraint.

### Toggle constraints

1. Select one or more dimensional constraints.
2. Invoke the tool as described above, or with one of the following additional options:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ToggleDrivingConstraint.svg) Toggle driving/reference constraint** option from the context menu.
   * Right-click in the **Constraints** section of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog") and select the **Toggle to/from reference** option from the context menu.
3. The selected constraints are changed from driving to reference mode or vice versa. Their appearance changes accordingly.
4. The mode of the dimensional constraint creation tools is not changed.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ToggleDrivingConstraint/ro&oldid=1402403>"