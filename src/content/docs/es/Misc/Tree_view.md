---
title: Vista de árbol
---
## Introducción

La vista de árbol aparece en la pestaña **Modelo** de la [vista combo](/Combo_view/es "Combo view/es"), uno de los paneles más importantes de la [interfaz](/Interface/es "Interface/es"); muestra todos los objetos definidos por el usuario que forman parte de un documento de FreeCAD. La vista de árbol es una representación de la [estructura del documento](/Document_structure/es "Document structure/es"), e indica qué información se guarda en el disco.

Estos objetos no tienen que ser necesariamente formas geométricas visibles en la [Vista 3D](/3D_view/es "3D view/es"), sino que también pueden ser objetos de datos de apoyo creados con cualquiera de los [Ambientes de trabajo](/Workbenches/es "Workbenches/es").

![](/images/FreeCAD_Tree_view.png)

La vista de árbol que muestra varios elementos del documento.

## Trabajando con la vista de árbol

By default, whenever a new object is created, it is added to the end of the list in the Tree view. The Tree view allows managing the objects to keep them organized; it permits creating [groups](/Std_Group "Std Group"), moving objects inside groups, moving groups inside other groups, relabeling objects, copying objects, deleting objects, and using options from its [context menu](#Context_menu).

Many operations create objects that are dependent on a previously existing object. In this case, the Tree view shows this relationship by absorbing the older object inside the new object. Expanding and collapsing the objects in the Tree view shows the parametric history of that object. Objects that are deeper inside others are older, while objects that are outside are newer, and are derived from the older objects. By modifying the interior objects, the parametric operations propagate all the way to the top, generating a new result.

![](/images/FreeCAD_Tree_view_parametric_history.png)

The topmost object is created by doing parametric operations on objects which themselves were created by previous operations.  
Fully expanding the tree reveals the original elements that were used to create the partial solids.

### Tree view columns

The Tree view always displays a column with the icons and labels of objects. Two additional columns can optionally be displayed as well. To enable these columns right-click the Tree view and in the context menu select **Tree settings** and then **Show description** ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) and/or **Show internal name** ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")). Column headings are added if more than one column is displayed. Note that the internal names of objects cannot be changed.

### Edit object label

Select an object in the first column and press F2 (on Windows and Linux), or Enter (on macOS), to edit its Datos**Label** property. This property can also be edited via the context menu option **Rename** or in the [Property editor](/Property_editor "Property editor").

### Edit object description

An object can optionally have a description. This information is stored in its Datos**Label2** property. If the description column is displayed you can edit this property by selecting an object in that column and pressing F2 (on Windows and Linux), or Enter (on macOS). The property can also be changed in the [Property editor](/Property_editor "Property editor").

### Context menu

The options in the context menu of the Tree view depend on the selected object(s) and the currently active workbench. To display this menu right-click the background of the list, right-click an object in the list, or select multiple objects in the list and then right-click one of them.

### Keyboard modifiers

The usual keyboard modifiers can be used in the Tree view. The modifiers can be combined as well.

* Ctrl: hold down this key to select multiple objects.
* Shift: hold down this key to select all objects between a previously selected object and the next selected object.

### Keyboard shortcuts

The following keyboard shortcuts are available when the focus is on the Tree view:

* Ctrl+F: opens a search box at the bottom of the tree, allowing to search and reach objects using their internal names or labels.
* Expand and collapse actions using Alt+Arrow combinations: [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
  + Alt+Left: collapses selected item(s).
  + Alt+Right: expands selected item(s).
  + Alt+Up: expands selected item(s) with all their tier-1 children collapsed (deeper children remain unchanged).
  + Alt+Down: expands selected item(s) with all their tier-1 children expanded as well (deeper children remain unchanged).

## Iconos superpuestos

Se pueden mostrar uno o varios iconos superpuestos más pequeños sobre el icono por defecto de un objeto en la vista de árbol. Los iconos superpuestos disponibles y su significado se enumeran a continuación. [introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")

### Marca de verificación blanca sobre fondo azul

Esto indica que el objeto tiene que ser [recalculado](/index.php?title=Std_Refresh/es&action=edit&redlink=1 "Std Refresh/es (page does not exist)"), debido a los cambios realizados en el modelo o porque el usuario marcó el objeto en el menú contextual de la vista de árbol para ser recalculado. En la mayoría de los casos los recálculos se activan automáticamente, pero a veces se retrasan por razones de rendimiento.

### Signo de exclamación blanco sobre fondo rojo

Esto indica que el objeto tiene un error que debe ser corregido. Después de volver a calcular todo el documento, se muestra un punto herramienta que describe el error cuando se pasa el ratón por encima del objeto en la vista de árbol. Nota: Todos los demás objetos que dependan de un objeto en ese estado de error no se volverán a calcular correctamente, por lo que pueden seguir mostrando algún estado antiguo.

### Cadena de eslabones púrpura sobre fondo blanco

Se muestra normalmente para [bocetos](/Sketch/es "Sketch/es"), primitivas geométricas, como caja, cilindro, etc. y geometría [Referencia](/index.php?title=Datum/es&action=edit&redlink=1 "Datum/es (page does not exist)"). Indica que el objeto no está unido a nada. No tiene desplazamiento de fijación y obtiene su posición y alineación únicamente de su propiedad [Colocación](/Placement/es "Placement/es").

Hay un [Tutorial Básico de Adjuntos](/index.php?title=Basic_Attachment_Tutorial/es&action=edit&redlink=1 "Basic Attachment Tutorial/es (page does not exist)") que explica cómo manejar tales objetos.

### Amarillo X

Esto sólo se utiliza para [bocetos](/Sketch/es "Sketch/es") e indica que el sketch no está completamente restringido. Dentro de [Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es") el número de grados de libertad restantes se muestra en los mensajes del solucionador.

### Flecha blanca sobre fondo verde

Indica la llamada [Punta](/PartDesign_Body/es#punta "PartDesign Body/es") de un cuerpo. Suele ser la última característica de un [DiseñoPieza Cuerpo](/PartDesign_Body/es "PartDesign Body/es") y representa todo el cuerpo para el mundo exterior al cuerpo, por ejemplo, cuando el cuerpo se exporta o se utiliza en operaciones [Pieza booleano](/Part_Boolean/es "Part Boolean/es"). La punta puede ser cambiada por el usuario.

### Red backslash

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

This indicates a suppressed [PartDesign](/PartDesign_Workbench "PartDesign Workbench") feature.

### White upwards curved arrow

This indicates a [linked](/Std_LinkMake "Std LinkMake") object.

### Two white upwards curved arrows

This indicates a [linked](/Std_LinkMake "Std LinkMake") object loaded from an external document.

### Eye symbol

This indicates that the object will be hidden in the Tree view if the **Show items hidden in Tree view** context menu option is unchecked.

### Cyan ice crystal

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

This indicates a [frozen](/Std_ToggleFreeze "Std ToggleFreeze") object that is not recomputed when its parents change.

## Preferences

See [Combo view](/Combo_view#Preferences "Combo view").

Retrieved from "<http://wiki.freecad.org/index.php?title=Tree_view/es&oldid=1495033>"