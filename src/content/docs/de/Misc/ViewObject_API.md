---
title: ViewObject API/de
---
:::caution
(Oktober 2019) Bearbeite diese Seiten nicht. Die Informationen sind unvollständig und veraltet. Die neueste API findest Du in derautogenerierten API-Dokumentationoder generiere die Dokumentation selbst, sieheQuelldokumentation.
:::

Wenn die GUI aktiv ist, hat jedes Objekt im FreeCAD-Dokument ein zugeordnetes ViewObject, das sich im FreeCADGui-Dokument-Gegenstück befindet. Ein Ansicht-Objekt kann auf zwei Arten abgefragt werden. Beispiel:

```
myViewObj = FreeCAD.ActiveDocument.myObjectName.ViewObject
myViewObj = FreeCADGui.ActiveDocument.myObjectName
print myViewObj.IV

```

![](/images/Property.png) **Annotation**

**Returns**: the annotation node of a ViewObject

![](/images/Property.png) **BoundingBox**

**Returns**: the bounding box

![](/images/Property.png) **Content**

**Returns**: an XML representation of a ViewObject's properties

![](/images/Property.png) **DisplayMode**

**Returns**: the current display mode

![](/images/Property.png) **IV**

**Returns**: an Inventor representation of the ViewObject

![](/images/Property.png) **Object**

**Returns**: the associated FreeCAD Document Object of this ViewObject

![](/images/Property.png) **PropertiesList**

**Returns**: a list of properties of this ViewObject

![](/images/Property.png) **RootNode**

**Returns**: the Inventor node of this ViewObject (pivy.coin object)

![](/images/Property.png) **Selectable**

**Returns**: True if the object is selectable

![](/images/Property.png) **Type**

**Returns**: the type of this ViewObject

![](/images/Property.png) **Visibility**

**Returns**: True if the viewObject is visible

![](/images/Method.png) **getAllDerivedFrom(****)**

**Description**:

**Returns**: all descentences of this object

![](/images/Method.png) **getDocumentationOfProperty(****)**

**Description**:

**Returns**: the documentation string of the property of this class.

![](/images/Method.png) **getGroupOfProperty(****)**

**Description**:

**Returns**: the name of the group which the property belongs to in this class. The properties sorted in differnt named groups for convenience.

![](/images/Method.png) **getPropertyByName(****)**

**Description**:

**Returns**: the value of a named property.

![](/images/Method.png) **getTypeOfProperty(****)**

**Description**:

**Returns**: the type of a named property. This can be (Hidden,ReadOnly,Output) or any combination.

![](/images/Method.png) **hide(****)**

**Description**: Hides the object.

**Returns**:

![](/images/Method.png) **isDerivedFrom(***string***)**

**Description**: Checks if this object is derived from the given object type

**Returns**: True if given type is a father

![](/images/Method.png) **isVisible(****)**

**Description**: Checks if the object is visible

**Returns**: a boolean

![](/images/Method.png) **listDisplayModes(****)**

**Description**: Shows a list of all display modes

**Returns**: a list

![](/images/Method.png) **setTransformation(***coin.SoTransform***)**

**Description**: Sets a transformation on the Inventor node

**Returns**: nothing

![](/images/Method.png) **show(****)**

**Description**: Shows the object if hidden

**Returns**: nothing

![](/images/Method.png) **toString(****)**

**Description**:

**Returns**: a string representation of the Inventor node

![](/images/Method.png) **update(****)**

**Description**: Updates the view representation of the object

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=ViewObject_API/de&oldid=1024634>"