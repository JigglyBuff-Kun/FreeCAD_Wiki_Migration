---
title: API de l'atelier Draft
---
:::caution
(Novembre 2018) Ces informations peuvent être incomplètes et obsolètes. Pour la dernière API, voir l'auto-génération de la documentation de l'API.
:::

Ces fonctions font partie de l'établi [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), et, une fois que le module a été importé, elles peuvent être utilisées, dans les scripts, les [macros](/Macros/fr "Macros/fr"), ou dans l'interpréteur [Python](/Python/fr "Python/fr").

Exemple:

```
import FreeCAD, Draft

myrect = Draft.makeRectangle(4, 3)
mydistance = FreeCAD.Vector(2, 2, 0)
Draft.move(myrect, mydistance)

```

![](/images/Method.png) **cut(***FreeCAD.Object, FreeCAD.Object***)**

**Description**: Renvoie un objet construit, à partir de la différence de la coupe des 2 objets sélectionnés. Les objets originaux obtenu sont cachés.

**Returns**: Un nouvel objet est créé

![](/images/Method.png) **extrude(***FreeCAD.Object, Vector***)**

**Description**: Extrude l'objet sélectionné dans la direction donnée par le vecteur. L'objet d'origine est caché.

**Returns**: Un nouvel objet est créé

![](/images/Method.png) **formatObject(***FreeCAD.Object, [FreeCAD.Object]***)**

**Description**: Cette fonction s'applique à l'objet cible, compte tenu des propriétés actuelles, fixées sur la barre d'outils Draft (couleur et largeur de la ligne), ou, le cas échéant copie les propriétés d'un deuxième objet. Il met également l'objet dans le groupe de construction si le bouton de construction est pressé.

**Returns**: Aucun

![](/images/Method.png) **fuse(***FreeCAD.Object, FreeCAD.Object***)**

**Description**: Retourne un objet fabriqué à partir de la fusion des 2 objets sélectionnés. Si les objets sont coplanaires, un **Draft Wire** spécial est utilisé, sinon l'objet final est une fusion standard (standard Part fuse).

**Returns**: Un nouvel objet est créé

![](/images/Method.png) **getDraftPath(***[string]***)**

**Description**: Retourne le chemin d'accès utilisateur, ou système, à partir duquel, le Draft module est exécuté. Si un sous-dossier ou un nom de fichier est fourni, le chemin complet vers le sous-dossier de l'intérieur du Draft module est renvoyé.

**Returns**: Le chemin du fichier

![](/images/Method.png) **getGroupContents(***list***)**

**Description**: Scanne récursivement la liste de données pour les groupes. Si les groupes sont trouvés, leur contenu est ajouté à la liste.

**Returns**: Une liste d'Objets FreeCAD

![](/images/Method.png) **getRealName(***string***)**

**Description**: Sépare le numéro du nom de l'objet.

**Returns**: Le nom dépouillé de l'objet

![](/images/Method.png) **getSelection(****)**

**Description**: Retourne la sélection actuelle FreeCAD.

**Returns**: Retourne la sélection actuelle FreeCAD.

![](/images/Method.png) **makeCircle(***radius, [placement], [facemode], [startangle], [endangle]***)**

**Description**: Crée un objet cercle de rayon donné. Si une coordonnée est fournie, elle est utilisée. Si **facemode est False**, le cercle est représenté comme un fil de fer (filaire), sinon, comme une face. Si **startAngle** et **endAngle** (en degrés) sont donnés, ils sont utilisés et l'objet apparaîtra comme un arc.

**Returns**: Un nouvel objet est créé.

![](/images/Method.png) **makeDimension(***Vector, Vector, [Vector] or FreeCAD.Object, int, int, [Vector]***)**

**Description**: Crée un objet **Cotation**, mesure la distance entre le premier et le deuxième vecteur, avec la dimension de la ligne passant par le troisième vecteur, s'il est fourni. La largeur de ligne et la couleur affichée sur de la barre d'outils du projet seront utilisés. Au lieu de 2 vecteurs, vous pouvez également créer un objet FreeCAD de deux entiers (et éventuellement un vecteur) où la ligne de cotation doit passer. Dans ce cas, la dimension sera **associée** à l'objet, et la mesure des deux sommets, indiquée par les deux chiffres à l'indice donné.

**Returns**: Un nouvel objet est créé.

![](/images/Method.png) **makeLine(***Vector, Vector***)**

**Description**: Crée une ligne entre les deux vecteurs donnés. La largeur de ligne, et, la couleur courante sélectionnés dans la barre d'outils Draft seront utilisés.

**Returns**: Un nouvel objet est créé.

![](/images/Method.png) **makeRectangle(***length, width, [placement], [facemode]***)**

**Description**: Crée un objet Rectangle avec une longueur dans la direction X et la hauteur dans la direction Y. Si une position est donnée, elle est utilisée. Si **facemode est False**, le rectangle est représenté comme un fil de fer (filaire), sinon, comme une face. La largeur de ligne et la couleur courante sélectionnés dans la barre d'outils Draft seront utilisés.

**Returns**: Un nouvel objet est créé.

![](/images/Method.png) **makeText(***string or list, [Vector], [screenmode]***)**

**Description**: Crée un **objet Texte**, au point donné, contenant la chaîne ou les chaînes figurant dans la liste, une chaîne par ligne. La couleur actuelle de la barre d'outils Projet la hauteur du texte et la police spécifiée dans les préférences sont utilisés. Si **screenmode est sur True**, le texte fait toujours face à la direction de la vue, sinon il se trouve sur le plan **X, Y**.

**Returns**: Un nouvel objet est créé.

![](/images/Method.png) **makeWire(***list or Part.Wire, [closed], [placement], [facemode]***)**

**Description**: Crée un objet (wire) dans la liste de données des vecteurs ou du fil donné. Si c'est un objet fermé (True), ou, si le premier et le dernier point sont identique, le fil est fermé. Si **facemode est (True)** (le fil est fermé), le fil, apparaîtra rempli. La largeur de ligne et la couleur courante sélectionnés dans la barre d'outils seront utilisés.

**Returns**: Un nouvel objet est créé.

![](/images/Method.png) **move(***FreeCAD.Object or list, Vector, [copymode]***)**

**Description**: Déplace l'objet ou les objets sélectionnés contenus dans la liste donnée ,dans la direction et la distance indiquée par le vecteur. Si **CopyMode** est sur True les objets réels ne sont pas déplacés, mais copiés à sa (leur) place.

**Returns**: L'objet ou les objets (ou leurs copies, si **CopyMode** était sur True).

![](/images/Method.png) **precision(****)**

**Description**: Retourne la valeur de précision définie dans les paramètres utilisateur.

**Returns**: Un integer.

![](/images/Method.png) **rotate(***FreeCAD.Object or list, angle, [center], [axis] ,[copymode]***)**

**Description**: Tourne l'objet donné ou les objets sélectionnés à l'angle donné et autour du centre donnée s'ils sont fourni, en utilisant l'axe comme un axe de rotation. Si l'axe est omis, la rotation se fera autour de l'axe vertical **Z**. Si **CopyMode** est sur True, les objets réels ne sont pas déplacés, mais les copies sont créées à leur place.

**Returns**: Les objets (ou leurs copies).

![](/images/Method.png) **scale(***FreeCAD.Object or list, vector, [center], [copymode]***)**

**Description**: Redimensionne l'objet donné ou les objets sélectionnés au facteur d'échelle définis par le vecteur de donnés **(X, Y et Z)** autour du centre donné s'il est fourni. Si **CopyMode** est sur True les objets réels ne sont pas déplacés, mais les copies sont créées à la place.

**Returns**: Les objets (ou leurs copies).

![](/images/Method.png) **select(***FreeCAD.Object***)**

**Description**: Désélectionne tout, et, sélectionne uniquement l'objet survolé

**Returns**: Aucune.

![](/images/Method.png) **shapify(***FreeCAD.Object***)**

**Description**: Transforme un objet de forme **paramétrique** en objet **non-paramétrique**.

**Returns**: Un nouvel objet est créé.

![](/images/Method.png) **draftify(***FreeCAD.Object or list***)**

**Description**: Met l'objet, ou, chaque objet sélectionné(s) en fils paramétriques Projet.

**Returns**: Aucune.

![](/images/Method.png) **getSVG(***FreeCAD.Object, [linemodifier], [textmodifier], [(u,v)]***)**

**Description**: Crée une représentation SVG de l'objet donné. L'attribut **linemodifier** est le facteur d'échelle (en pourcent) pour la largeur de la ligne, et **textmodifier** pour la taille du texte. Vous pouvez également éventuellement fournir un tuple de vecteurs pour définir un plan de projection, sinon la forme géométrique sera projetée sur le plan **X, Y**.

**Returns**: Une chaîne contenant la représentation SVG de l'objet sélectionné.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_API/fr&oldid=1356251>"