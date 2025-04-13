---
title: Sketcher Constrângere de rază
---
|  |
| --- |
| Sketcher ConstrainRadius |
| Menu location |
| Sketch → Sketcher constraints → Constrain radius |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Constrain distance](/Sketcher_ConstrainDistance "Sketcher ConstrainDistance"), [Constrain horizontal distance](/Sketcher_ConstrainDistanceX "Sketcher ConstrainDistanceX"), [Constrain vertical distance](/Sketcher_ConstrainDistanceY "Sketcher ConstrainDistanceY") |
|  |

## Descriere

Această constrângere obligă valoarea razei unui cerc sau a unui arc de cerc să aibă o valoare specifică. Dacă este selectat mai mult de un cerc sau un arc de cerc înainte de lansarea comenzii, un dialog contextual vă va întreba dacă toate elementele selectate ar trebui să partajeze aceeași rază. În cazul unui răspuns afirmativ, se va adăuga o constrângere de rază și o [equal length](/Sketcher_ConstrainEqual "Sketcher ConstrainEqual") va fi adăugată la toate elementele.
În negativ, vor fi create constrângeri separate de rază pentru fiecare cerc / arc, dar cu valori egale care vor fi editate separat după crearea.

The ![](/images/Sketcher_ConstrainRadius.svg) [Sketcher ConstrainRadius](/Sketcher_ConstrainRadius "Sketcher ConstrainRadius") tool fixes the radius of circles, arcs and [B-spline weight circles](/Sketcher_CreateBSpline#Notes "Sketcher CreateBSpline").

![](/images/Sketcher_ConstrainRadius_example.png)

## Cum se folosește

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Selectați una sau mai multe cercuri sau arce e cerc.
2. Apăsați butonul ![](/images/Sketcher_ConstrainRadius.png) **Constrain radius** .
3. Un dialog contextual se deschide pentru a edita sau a confirma vloarea. Apăsați OK pentru a valida.În cazul în care au fost selectate mai multe cercuri/arce, toate constrângerile vor adopta această valoare. Editați valorile lor separat făcând dublu clic pe cota/eticheta de dimensiuni din vizualizarea 3D; sau în lista Constrângeri, faceți dublu clic pe constrângere sau faceți clic dreapta și selectați**Change value**.
4. Opțional, eticheta/cota și linia de cotă pot fi mutate și rotite în vizualizarea 3D făcând clic pe valoare și tragând în timp ce mențineți apăsat butonul stânga al mouse-ului.

### Run-once mode

See [Sketcher ConstrainRadiam](/Sketcher_ConstrainRadiam#Run-once_mode "Sketcher ConstrainRadiam").

## Scripting

```
Sketch.addConstraint(Sketcher.Constraint('Radius', ArcOrCircle, App.Units.Quantity('123.0 mm')))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `ArcOrCircle`, and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainRadius/ro&oldid=1461125>"