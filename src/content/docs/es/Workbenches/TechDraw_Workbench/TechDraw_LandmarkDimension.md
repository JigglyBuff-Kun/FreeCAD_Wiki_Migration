---
title: TechDraw LandmarkDimension
---
|  |
| --- |
| TechDraw LandmarkDimension |
| Menu location |
| TechDraw → Dimensions → Insert Landmark Dimension - EXPERIMENTAL |
| Workbenches |
| [TechDraw](/TechDraw_Workbench/es "TechDraw Workbench/es") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.19 |
| See also |
| [TechDraw HorizontalDimension](/TechDraw_HorizontalDimension/es "TechDraw HorizontalDimension/es"), [TechDraw VerticalDimension](/TechDraw_VerticalDimension/es "TechDraw VerticalDimension/es") |
|  |

## Descripción

La herramienta **TechDraw LandmarkDimension** agrega una dimensión lineal a una Vista. La dimensión se basa en dos objetos punto (objetos [Draft Point](/Draft_Point/es "Draft Point/es") o [Part Point](/Part_Point/es "Part Point/es")) del modelo 3D.

El propósito de esta herramienta es proporcionar una solución alternativa a la corrupción de dimensiones causada por los problemas de "[denominación topologica](/Topological_naming_problem/es "Topological naming problem/es")". Los puntos de origen deben utilizar [Expresiones](/Expressions/es "Expressions/es") u otros mecanismos de contención para establecer su posición. Dado que los puntos son [Objetos de documento](/index.php?title=App_DocumentObject/es&action=edit&redlink=1 "App DocumentObject/es (page does not exist)") y no componentes de forma, su nombre no cambia con los nuevos cálculos y, por lo tanto, se encuentran fácilmente.

Vea [TechDraw LengthDimension](/TechDraw_LengthDimension/es#Limitation "TechDraw LengthDimension/es") para obtener más información sobre dimensiones y denominación topológica.

## Uso

1. Seleccione dos objetos punto en la [vista 3D](/3D_view/es "3D view/es") o la [vista de árbol](/Tree_view/es "Tree view/es").
2. Agregue la vista TechDraw correcta a la selección seleccionándola en la [vista de árbol](/Tree_view/es "Tree view/es").
3. Hay varias formas de invocar la herramienta:
   * Presione el botón ![](/images/TechDraw_LandmarkDimension.svg) [Insertar cota Landmark - EXPERIMENTAL](/TechDraw_LandmarkDimension "TechDraw LandmarkDimension").
   * Seleccione la opción **TechDraw → Dimensions → ![](/images/TechDraw_LandmarkDimension.svg) Insertat cota Landmark - EXPERIMENTAL** del menú.
4. Se agrega una dimensión a la Vista.
5. La dimensión se puede arrastrar a la posición deseada.
6. Si es necesario, agregue tolerancias como se describe en [esta página](/index.php?title=TechDraw_Geometric_dimensioning_and_tolerancing/es&action=edit&redlink=1 "TechDraw Geometric dimensioning and tolerancing/es (page does not exist)").

### Cambiar propiedades

Para cambiar las propiedades de un objeto de dimensión, haga doble clic en él en el dibujo o en la [vista de árbol](/Tree_view "Tree view"). Esto abrirá el [diálogo de dimensión](/TechDraw_LengthDimension/es#Dimension_dialog "TechDraw LengthDimension/es").

## Limitaciones

La herramienta Cota de referencia está inicialmente limitada a cotas de "Distancia". Se pueden agregar otros tipos si la demanda lo amerita.

## Notas

Vea [TechDraw LengthDimension](/TechDraw_LengthDimension/es#Notes "TechDraw LengthDimension/es").

## Propiedades

Vea [TechDraw LengthDimension](/TechDraw_LengthDimension/es#Properties "TechDraw LengthDimension/es").

## Programación

Ver también: [Documentación de la API autogenerada](https://freecad.github.io/SourceDoc/) y [Fundamentos de FreeCAD Guión](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

La herramienta Cota de referencia se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de [Python](/Python/es "Python/es") utilizando las siguientes funciones:

```
dim1 = FreeCAD.ActiveDocument.addObject("TechDraw::LandmarkDimension", "Landmark")
dim1.Type = "Distance"
dim1.References2D = [(TDView, "Vertex1")]
dim1.References3D = [(Point3d1, "Vertex1")]
dim1.References3D = [(Point3d2, "Vertex1")]
page.addView(dim1)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_LandmarkDimension/es&oldid=1342694>"