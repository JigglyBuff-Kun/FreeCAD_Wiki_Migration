---
title: BIM  Library
---
|  |
| --- |
| BIM Library |
| Ubicación del menú |
| 3D Modeling → Library |
| Bancos de trabajo |
| [BIM](/BIM_Workbench/es "BIM Workbench/es") |
| Acceso directo |
| None |
| Ver también |
| [Arch Equipment](/Arch_Equipment/es "Arch Equipment/es") |
|  |
| Este comando es parte del **BIM AddOn**, que puedes instalar a través del menú Tools → Addons Manager |
|  |

## Descripción

La herramienta de biblioteca le permite colocar, en el modelo actual, un objeto de la [FreeCAD Parts Library](/Parts_Library "Parts Library"), que debe instalarse a través del [Addon Manager](/Std_AddonMgr "Std AddonMgr") para que esta herramienta esté disponible.

![](/images/BIM_Library_screenshot.png)

![](/images/BIM_Library_screenshot.png)

## Utilización

1. Presione el botón ![](/images/BIM_Library.png) **BIM Library**
2. Haga clic en un archivo de la biblioteca
3. Haga doble clic en él o presione el botón **Insert**
4. Haga clic en un punto en la vista 3D o ingrese una coordenada manualmente para colocar el objeto

## Opciones

* Los archivos FCStd, STEP y BREP son compatibles. Sólo los archivos STEP y BREP son colocables. Los archivos FCStd no le permitirán elegir una ubicación, ya que podrían estar compuestos por una serie compleja de objetos con posiciones significativas. Al elegir un archivo FCStd, su contenido se insertará en la posición que se define en el archivo.
* Los objetos PASO y BREP se insertan como [Equipments](/Arch_Equipment "Arch Equipment") sin forma de base separada. Agregar una forma de base a estos objetos después destruirá su forma actual.
* Al colocar un objeto, puede elegir su punto de inserción entre el original (el (0,0,0) punto definido en el archivo), superior, medio, inferior e izquierdo, central y derecho.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Library/es&oldid=1442989>"