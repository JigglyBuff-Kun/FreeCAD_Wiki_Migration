---
title: API de FreeCAD
---
:::caution
(octobre 2019) Ne pas éditer cette page. L'information est incomplète et obsolète. Pour la dernière API, voir ladocumentation de l'API générée automatiquement, ou générez la documentation vous-même, voirDocumentation du code source.
:::

C'est le module principal (root) de FreeCAD. Il peut également être appelé par "App" de l'interprète FreeCAD. Il contient tout ce qui est nécessaire pour manipuler des documents et leur contenu (objets)

Exemple:

```
import FreeCAD
print FreeCAD.listDocuments()
mydoc = FreeCAD.activeDocument()

```

![](/images/Method.png) **ConfigDump(****)**

**Description**: Imprime un dictionnaire contenant tout l'environnement de configuration FreeCAD.

**Returns**:

![](/images/Method.png) **ConfigGet(***[string]***)**

**Description**: Renvoie la valeur de la clé donnée. Si aucune clé n'est fournie, la configuration complète est renvoyée

**Returns**: Une chaîne.

![](/images/Method.png) **ConfigSet(***string, string***)**

**Description**: Définit la clé donnée (première chaîne) sur la valeur donnée (deuxième chaîne).

**Returns**:

![](/images/Method.png) **Version(****)**

**Description**: Imprime la version FreeCAD.

**Returns**:

![](/images/Method.png) **activeDocument(****)**

**Description**: Renvoie le document actif ou Aucun s'il n'y a pas de document actif.

**Returns**: Un document FreeCAD.

![](/images/Method.png) **addExportType(***string, string***)**

**Description**: Ajoute un nouveau type de fichier d'exportation à FreeCAD. La première chaîne doit être formatée comme cet exemple: "Document Word (\*.doc)". La deuxième chaîne est le nom d'un script/module python contenant une fonction export().

**Returns**:

![](/images/Method.png) **addImportType(***string, string***)**

**Description**: Ajoute un nouveau type de fichier d'importation à FreeCAD, fonctionne de la même manière que addExportType, le module de gestion python doit contenir une fonction open() et/ou import().

**Returns**:

![](/images/Method.png) **closeDocument(***Nom du document***)**

**Description**: Ferme le document donné

**Returns**:

![](/images/Method.png) **getDocument(***Nom du document***)**

**Description**: Renvoie un document ou déclenche une exception s'il n'y a pas de document avec le nom donné.

**Returns**:

![](/images/Method.png) **getExportType(***string***)**

**Description**: Renvoie le nom du module qui peut exporter le type de fichier spécifié.

**Returns**: Une chaîne.

![](/images/Method.png) **getImportType(***string***)**

**Description**: Renvoie le nom du module qui peut importer le type de fichier spécifié.

**Returns**: Une chaîne.

![](/images/Method.png) **listDocuments(****)**

**Description**: Renvoie un dictionnaire de noms et de pointeurs d'objet de tous les documents.

**Returns**: Un dictionnaire de noms et de pointeurs d'objet.

![](/images/Method.png) **newDocument(***[string], [hidden=False]***)**

**Description**: Crée et renvoie un nouveau document avec un nom donné. Le nom du document doit être unique, ce qui est vérifié automatiquement. Si aucun nom n'est fourni, le document sera nommé "Sans titre". Si hidden=True est passé, FreeCAD en mode GUI n'affichera pas le document et n'affichera pas d'onglet pour le document; cela permet d'effectuer des opérations automatiques sur un document temporaire (ou de créer un document et de l'enregistrer) sans perturber l'interface utilisateur.

**Returns**: Le document nouvellement créé.

![](/images/Method.png) **open(***string***)**

**Description**: Voir openDocument

**Returns**:

![](/images/Method.png) **openDocument(***filepath, [hidden]***)**

**Description**: Crée et renvoie un document et charge un fichier projet dans le document. L'argument chaîne doit pointer vers un fichier existant. Si le fichier n'existe pas ou si le fichier ne peut pas être chargé, une exception d'E / S est levée. Dans ce cas, le document créé est conservé, mais sera vide. Si hidden=True est passé, FreeCAD en mode GUI n'affichera pas le document et n'affichera pas d'onglet pour le document; cela permet d'effectuer des opérations automatiques sur un document et de le fermer sans perturber l'interface utilisateur.

**Returns**: Le document FreeCAD ouvert.

![](/images/Method.png) **setActiveDocument(***Nom du document***)**

**Description**: Définit le document actif par son nom.

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_API/fr&oldid=1356253>"