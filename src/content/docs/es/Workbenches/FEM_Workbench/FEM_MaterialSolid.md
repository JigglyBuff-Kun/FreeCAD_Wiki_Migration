---
title: FEM MaterialSolid
---
|  |
| --- |
| FEM MaterialSolid |
| Menu location |
| Model → FEM material for solid |
| Workbenches |
| [FEM](/FEM_Workbench "FEM Workbench") |
| Default shortcut |
| M,M |
| Introduced in version |
| - |
| See also |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|  |

## Descripción

Agrega propiedades de material a una parte.

![](/images/FEMMaterialSolidProperties.png)

The FEM material task panel

## Utilización

* Haga clic en ![](/images/FEM_MaterialSolid.png) o seleccione  Model →  ![](/images/FEM_MaterialSolid.png) Material de FEM para sólidos desde el menú superior.
* Haga doble clic en el objeto  ![](/images/FEM_MaterialSolid.png) SolidMaterial creado

![](/images/FEMMaterialProperties.PNG)

* + Seleccione un material. Para el análisis mecánico de ingeniería,  CalculiX-Steel es una opción típica.
  + Siempre que esté aplicando material a todo el objeto, no seleccione ninguna entidad geométrica (deje la lista de referencias vacía). El material se aplicará a todo el modelo. De lo contrario, asigne material a partes del modelo en particular manualmente seleccionando algunas de ellas para cada material insertado, pero no deje ninguna parte del modelo sin el material asignado.
  + Puedes ajustar las propiedades del material, como la densidad, el módulo de Young, el Coeficiente de Poisson, etc., sin embargo, la mayoría de los materiales comunes ya están disponibles en los ajustes preestablecidos y no necesitan ningún ajuste.
  + Si realiza modificaciones, puede guardar su material personalizado.
* Haga clic en Close para cerrar el cuadro de diálogo y crear ![](/images/FEM_MaterialSolid.png) SolidMaterial objeto

## Notas

1. El material mecánico utiliza la tarjeta \* MATERIAL en CalculiX. Los detalles sobre el material mecánico se explican enhttp://web.mit.edu/calculix\_v2.7/CalculiX/ccx\_2.7/doc/ccx/node216.html

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialSolid/es&oldid=1321977>"