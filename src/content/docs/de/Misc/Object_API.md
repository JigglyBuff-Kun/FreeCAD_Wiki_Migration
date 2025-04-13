---
title: Object API/de
---
:::caution
(Oktober 2019) Bearbeite diese Seiten nicht. Die Informationen sind unvollständig und veraltet. Die neueste API findest Du in derautogenerierten API-Dokumentationoder generiere die Dokumentation selbst, sieheQuelldokumentation.
:::

Being parametric, document objects in FreeCAD can have a lot of additional properties, but these are the basic ones, present in every FreeCAD Document Object. Objects can be retrieved simply by their name. Example:

```
myObj = FreeCAD.ActiveDocument.myObjectName
print myObj.PropertiesList

```

![](/images/Property.png) **Content**

**Returns**: An XML representation of the properties of an object.

![](/images/Property.png) **Label**

**Returns**: Gets/sets the objects label. The string can be unicode.

![](/images/Property.png) **Name**

**Returns**: The unique name of an object.

![](/images/Property.png) **Placement**

**Returns**: Gets/sets the Placement of an object. A placement defines an orientation (rotation) and a position (base) in 3D space. It is used when no scaling or other distortion is needed.

![](/images/Property.png) **PropertiesList**

**Returns**: A list of the properties of an object

![](/images/Property.png) **State**

**Returns**: The FreeCAD state of an object (ie. if it needs to be recomputed)

![](/images/Property.png) **Type**

**Returns**: A string describing the type of an object

![](/images/Property.png) **ViewObject**

**Returns**: The associated View Provider (FreeCADGUI object) of an object

![](/images/Method.png) **getAllDerivedFrom(****)**

**Description**:

**Returns**: All descendants of this object

![](/images/Method.png) **getDocumentationOfProperty(****)**

**Description**:

**Returns**: The documentation string of the property of this class.

![](/images/Method.png) **getGroupOfProperty(****)**

**Description**:

**Returns**: The name of the group which the property belongs to in this class. The properties are sorted in different named groups for convenience.

![](/images/Method.png) **getPropertyByName(****)**

**Description**:

**Returns**: The value of a named property.

![](/images/Method.png) **getTypeOfProperty(****)**

**Description**:

**Returns**: The type of a named property. This can be (Hidden,ReadOnly,Output) or any combination.

![](/images/Method.png) **isDerivedFrom(****)**

**Description**:

**Returns**: True if given type is a father

![](/images/Method.png) **purgeTouched(****)**

**Description**: Marks the object as unchanged

**Returns**:

![](/images/Method.png) **touch(****)**

**Description**: Marks the object as changed (touched)

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=Object_API/de&oldid=1014176>"