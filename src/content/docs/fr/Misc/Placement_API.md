---
title: API des positionnements
---
:::caution
(octobre 2019) Ne pas éditer cette page. L'information est incomplète et obsolète. Pour la dernière API, voir ladocumentation de l'API générée automatiquement, ou générez la documentation vous-même, voirDocumentation du code source.
:::

Dans FreeCAD,le Placement définit la position et la rotation d'un objet. Le concept de placement est expliqué en détail ici:  [Placement](/Placement "Placement").

Exemple de réglage du placement d'un document objet:

```
myObj = FreeCAD.ActiveDocument.ActiveObject
pl = FreeCAD.Placement()
pl.move(FreeCAD.Vector(2,0,0))
myObj.Placement = pl

```

![](/images/Class.png)  **Placement (***) ou (Placement) ou (Matrice) ou (Base, Rotation) ou (Base, Rotation, Centre) ou (Base, Axes, Angle* **)**

**Description**: Construit un placement, vide ou avec les arguments donnés, ou une copie de l'emplacement donné.

![](/images/Property.png)  **Base**

**Returns**: . Un vecteur représentant la position du Placement

![](/images/Property.png)  **Rotation**

**Returns**: . Un quaternion ( nombre complexe formé de quatre unités scalaires) représentant la rotation du Placement

![](/images/Method.png)  **inverse (****)**

**Description**: calcule le placement inverse

**Returns**: . Un placement

![](/images/Method.png)  **move (** *Vecteur* **)**

**Description**: déplace le placement le long du vecteur donnée

**Returns**: rien

{{APIFunction | multVec | Vecteur | applique le placement au vecteur donné | le vecteur résultant}.} {{APIFunction | multipliez | Placement | multiplie ce placement avec l'autre | le placement résultant}.}

![](/images/Method.png)  **toMatrix (****)**

**Description**:

**Returns**: . Une matrice représentant la transformation du placement

Retrieved from "<http://wiki.freecad.org/index.php?title=Placement_API/fr&oldid=1356263>"