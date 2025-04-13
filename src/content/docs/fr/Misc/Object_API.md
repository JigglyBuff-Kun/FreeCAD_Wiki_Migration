---
title: API des objets
---
:::caution
(octobre 2019) Ne pas éditer cette page. L'information est incomplète et obsolète. Pour la dernière API, voir ladocumentation de l'API générée automatiquement, ou générez la documentation vous-même, voirDocumentation du code source.
:::

Êtant paramétrique, les Objets Documents dans FreeCAD peuvent avoir beaucoup de propriétés supplémentaires, mais ce sont celles de base, présentes dans chaque Objet Document FreeCAD document. Les objets peuvent être récupérés tout simplement par leur nom. Exemple:

```
myObj = FreeCAD.ActiveDocument.myObjectName
print myObj.PropertiesList

```

![](/images/Property.png)  **Contenu**

**Returns**: . Une représentation XML des propriétés d'un objet

![](/images/Property.png)  **Label**

**Returns**: Obtient/définit l'étiquette des objets. La chaîne peut être unicode.

![](/images/Property.png) **Nom**

**Returns**: Le nom unique d'un objet.

![](/images/Property.png)  **Placement**

**Returns**: Obtient/définit le placement d'un objet. Un placement définit une orientation (rotation) et une position (de base) dans l'espace 3D. Il est utilisé lorsque aucune mise à l'échelle ou autre distorsion n'est nécessaire.

![](/images/Property.png)  **PropertiesList**

**Returns**: Une liste des propriétés d'un objet

![](/images/Property.png)  **État**

**Returns**: L'état FreeCAD d'un objet (.-À-dire se il doit être recalculé)

![](/images/Property.png)  **Type**

**Returns**: Une chaîne décrivant le type d'un objet

![](/images/Property.png)  **ViewObject**

**Returns**: The View fournisseur associé (objet FreeCADGUI) d'un objet

![](/images/Method.png)  **getAllDerivedFrom (****)**

**Description**:

**Returns**: Tous les descendants de cet objet

![](/images/Method.png)  **GetDocumentation propriété (****)**

**Description**:

**Returns**: . La chaîne de documentation de la propriété de cette classe

![](/images/Method.png)  **getGroupOfProperty (****)**

**Description**:

**Returns**: Le nom du groupe auquel la propriété appartient dans cette classe. Les propriétés sont classées dans différents groupes nommés pour plus de commodité.

![](/images/Method.png)  **getPropertyByName (****)**

**Description**:

**Returns**: . La valeur d'une propriété nommée

![](/images/Method.png)  **getTypeOfProperty (****)**

**Description**:

**Returns**: Le type d'une propriété nommée. Cela peut être (Hidden, ReadOnly,Output) ou toute combinaison.

![](/images/Method.png)  **isDerivedFrom (****)**

**Description**:

**Returns**: Vrai si le type donné est un père

![](/images/Method.png)  **purgeTouched (****)**

**Description**: Marque l'objet comme inchangé

**Returns**:

![](/images/Method.png)  **contact (****)**

**Description**: Marque l'objet comme modifié (touché)

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=Object_API/fr&oldid=1356261>"