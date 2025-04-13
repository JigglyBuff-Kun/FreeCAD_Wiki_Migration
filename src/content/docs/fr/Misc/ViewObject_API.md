---
title: API des ViewObject
---
:::caution
(octobre 2019) Ne pas éditer cette page. L'information est incomplète et obsolète. Pour la dernière API, voir ladocumentation de l'API générée automatiquement, ou générez la documentation vous-même, voirDocumentation du code source.
:::

Lorsque l'interface graphique est en place, chaque objet dans le document FreeCAD a une ViewObject associé, qui réside dans le document homologue FreeCAD Gui. Un ViewObject peut être récupéré par deux moyens. Exemple:

```
myViewObj = FreeCAD.ActiveDocument.myObjectName.ViewObject
myViewObj = FreeCADGui.ActiveDocument.myObjectName
print myViewObj.IV

```

![](/images/Property.png)  **Annotation**

**Returns**: le nœud d'annotation d'une vue Object

![](/images/Property.png)  **Boîte englobante**

**Returns**: la boîte englobante

![](/images/Property.png)  **Contenu**

**Returns**: une représentation XML des propriétés d'un ViewObject

![](/images/Property.png)  **DisplayMode**

**Returns**: le mode d'affichage actuel

![](/images/Property.png)  **IV**

**Returns**: une représentation Inventeur du ViewObject

![](/images/Property.png)  **objet**

**Returns**: L'objet de ce ViewObject FreeCAD Document associé

![](/images/Property.png)  **PropertiesList**

**Returns**: une liste de propriétés de ce ViewObject

![](/images/Property.png)  **RootNode**

**Returns**: le nœud Inventeur de cette ViewObject (objet pivy.coin)

![](/images/Property.png)  **sélectionnable**

**Returns**: True si l'objet est sélectionnable

![](/images/Property.png)  **Type**

**Returns**: le type de cette ViewObject

![](/images/Property.png)  **Visibilité**

**Returns**: Vrai si le ViewObject est visible

![](/images/Method.png)  **getAllDerivedFrom (****)**

**Description**:

**Returns**: toutes descentences de cet objet

![](/images/Method.png)  **getDocumentationOfProperty (****)**

**Description**:

**Returns**: la chaîne de documentation de la propriété de cette classe

![](/images/Method.png)  **getGroupOfProperty (****)**

**Description**:

**Returns**: le nom du groupe qui la propriété appartient à cette classe. Les biens immobiliers triés en groupes nommés differnt pour plus de commodité.

![](/images/Method.png)  **getPropertyByName (****)**

**Description**:

**Returns**: . La valeur d'une propriété nommée

![](/images/Method.png)  **getTypeOfProperty (****)**

**Description**:

**Returns**: le type d'une propriété nommée. Cela peut être (Hidden, ReadOnly, Output) ou toute combinaison.

![](/images/Method.png)  **hide (****)**

**Description**: Masque l'objet

**Returns**: .

![](/images/Method.png)  **isDerivedFrom (** *chaîne* **)**

**Description**: Vérifie si cet objet est dérivé du type d'objet donné

**Returns**: vrai si le type donné est un père

![](/images/Method.png)  **isVisible (****)**

**Description**: Vérifie si l'objet est visible

**Returns**: un booléen

![](/images/Method.png)  **listDisplayModes (****)**

**Description**: Affiche une liste de tous les modes d'affichage

**Returns**: liste

![](/images/Method.png)  **setTransformation (** *coin.SoTransform* **)**

**Description**: Définit une transformation sur le nœud Inventor

**Returns**: rien

![](/images/Method.png)  **spectacle (****)**

**Description**: Indique si l'objet est caché

**Returns**: rien

![](/images/Method.png)  **toString (****)**

**Description**:

**Returns**: une représentation de chaîne du nœud Inventor

![](/images/Method.png)  **Mise à jour (****)**

**Description**: Mise à jour de la vue de représentation de l'objet

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=ViewObject_API/fr&oldid=1356281>"