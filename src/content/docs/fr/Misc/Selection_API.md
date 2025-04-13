---
title: API du sous-module de sélection
---
:::caution
(octobre 2019) Ne pas éditer cette page. L'information est incomplète et obsolète. Pour la dernière API, voir ladocumentation de l'API générée automatiquement, ou générez la documentation vous-même, voirDocumentation du code source.
:::

Le sous-module de sélection fait partie du module FreeCADGui. Exemple:

```
import FreeCADGui
sel = FreeCADGui.Selection.getSelection()

```

![](/images/Method.png) **addSelection(***FreeCAD.Objet***)**

**Description**: Ajoute un objet à la sélection

**Returns**:

![](/images/Method.png) **clearSelection(***[chaîne]***)**

**Description**: Efface la sélection du nom de document donné. Si aucun document n'est donné la sélection complète est effacée

**Returns**: .

![](/images/Method.png) **getSelection(***[chaîne]***)**

**Description**: Renvoie une liste d'objets de documents sélectionnés pour un nom de document donné. Si aucun document n'est donné la sélection complète est retourné

**Returns**: . Une liste d'objets de documents dans l'ordre où ils ont été sélectionnés

.

![](/images/Method.png) **getSelectionEx(***[chaîne]***)**

**Description**: Renvoie une liste de Sélection d'Objet pour un nom de document donné. Si aucun document n'est donné la sélection complète est retournée. Utilisé pour sélectionner les sous-objets (ex certaines arêtes d'une face)

**Returns**: . Une liste de Sélection d'Objets dans l'ordre où ils ont été sélectionnés

![](/images/Method.png) **isSelected(***FreeCAD.Objet***)**

**Description**: Vérifie si un objet donné est sélectionné

**Returns**:

![](/images/Method.png) **removeSelection(***FreeCAD.Objet***)**

**Description**: Supprime un objet de la sélection

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=Selection_API/fr&oldid=1356267>"