---
title: Object API
---
:::caution
(October 2019) Do not edit this page. The information is incomplete and outdated. For the latest API, see theautogenerated API documentation, or generate the documentation yourself, seeSource documentation.
:::

Siendo paramétricos, los objetos del documento en FreeCAD pueden tener diversas propiedades adicionales, pero éstas son las básicas, presentes en cada objeto del documento de FreeCAD. Los objetos se pueden recuperar fácilmente por su nombre. Por ejemplo:

```
myObj = FreeCAD.ActiveDocument.myObjectName
print myObj.PropertiesList

```

![](/images/Property.png) **Content**

**Returns**: Una representación XML de las propiedades de un objeto.

![](/images/Property.png) **Label**

**Returns**: Obtiene/establece la etiqueta de los objetos. La cadena de texto puede ser unicode.

![](/images/Property.png) **Name**

**Returns**: El nombre único de un objeto.

![](/images/Property.png) **Placement**

**Returns**: Obtiene/establece la ubicación de un objeto. Una ubicación define una orientación (rotación) y una posición (base) en el espacio 3D. Se utiliza cuando es necesario no escalar u otra distorsión.

![](/images/Property.png) **PropertiesList**

**Returns**: Una lista de las propiedades de un objeto.

![](/images/Property.png) **State**

**Returns**: El estado de FreeCAD de un objeto (por ejemplo si necesita ser recalculado).

![](/images/Property.png) **Type**

**Returns**: Una cadena de texto describiendo el tipo del objeto.

![](/images/Property.png) **ViewObject**

**Returns**: El Proveedor de Vista asociado (objeto FreeCADGUI) a un objeto.

![](/images/Method.png) **getAllDerivedFrom(****)**

**Description**:

**Returns**: Todos los descendientes de este objeto.

![](/images/Method.png) **getDocumentationOfProperty(****)**

**Description**:

**Returns**: La cadena de texto de documentación de la propiedad de esta clase.

![](/images/Method.png) **getGroupOfProperty(****)**

**Description**:

**Returns**: El nombre del grupo al cual pertenece el objeto en esta clase. Las propiedades ordenadas en diferentes grupos denominados según convenga.

![](/images/Method.png) **getPropertyByName(****)**

**Description**:

**Returns**: El valor de una propiedad denominada.

![](/images/Method.png) **getTypeOfProperty(****)**

**Description**:

**Returns**: tEl tipo de una propiedad denominada. Esto puede ser (Hidden,ReadOnly,Output) o cualquier combinación.

![](/images/Method.png) **isDerivedFrom(****)**

**Description**:

**Returns**: True si el tipo dado es un padre.

![](/images/Method.png) **purgeTouched(****)**

**Description**: Marca el objeto como unchanged

**Returns**:

![](/images/Method.png) **touch(****)**

**Description**: Marca el objeto como changed (tocado)

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=Object_API/es&oldid=632476>"