---
title: Arquitectura Proyecto
---
:::caution
THIS COMMAND IS OBSOLETEIt is not available in1.0 and above. UseBIM Projectinstead.
:::

|  |
| --- |
| Arquitectura Proyecto |
| Ubicación en el Menú |
| Arquitectura → Proyecto |
| Entornos de trabajo |
| [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| P O |
| Introducido en versión |
| - |
| Ver también |
| [Proyecto Sitio](/Arch_Site/es "Arch Site/es"), [Proyecto Edificio](/Arch_Building/es "Arch Building/es") |
|  |

## Descripción

El Arquitectura Proyecto es un objeto especial adecuado para añadir una mejor compatibilidad con los archivos [IFC](/Arch_IFC/es "Arch IFC/es"). Cada archivo IFC debe contener una entidad [IfcProject](https://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/schema/ifckernel/lexical/ifcproject.htm). El IfcProject se utiliza sobre todo para definir la configuración general del proyecto, como los sistemas de proyección, para la compatibilidad con los SIG, o los sistemas de unidades.

Al exportar un modelo de FreeCAD al formato de archivo IFC, si tu modelo no contiene ningún objeto de Proyecto, se creará automáticamente uno por defecto, que en la mayoría de los casos será suficiente. Sin embargo, es posible que desees poder ajustar la configuración del proyecto, en cuyo caso puede ser útil añadir un objeto de proyecto. Al importar un archivo IFC, siempre se creará un objeto de proyecto. Sin embargo, si no lo utiliza específicamente, puede simplemente eliminarlo después de la importación.

Tenga en cuenta que, aunque se puede añadir cualquier otro objeto BIM a un proyecto, algo que el estándar IFC no prohíbe, lo habitual es tener siempre sólo [Sitios](/Arch_Site/es "Arch Site/es") o [edificios](/Arch_Building/es "Arch Building/es") como hijos directos de un proyecto. Todos los demás objetos BIM deben estar dentro de estos sitios o edificios. El proyecto en sí debe estar siempre en la parte superior de la estructura de su modelo, es decir, no debe estar incluido en ningún otro objeto.

## Utilización

1. Pulse el ![](/images/Arch_Project.svg) Arquitectura Proyecto, o pulse las teclas P y luego O.
2. Añade cualquier objeto a tu proyecto arrastrándolo y soltándolo sobre el proyecto en la [Vista de árbol](/Tree_view/es "Tree view/es").

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Project/es&oldid=1467151>"