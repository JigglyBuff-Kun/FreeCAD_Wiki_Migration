---
title: API de l'interface graphique de FreeCAD
---
:::caution
(octobre 2019) Ne pas éditer cette page. L'information est incomplète et obsolète. Pour la dernière API, voir ladocumentation de l'API générée automatiquement, ou générez la documentation vous-même, voirDocumentation du code source.
:::

Ce module est le pendant du module FreeCAD. Il contient tout ce qui touche à l'interface utilisateur et les vues 3D. Exemple:

```
import FreeCAD as App
import FreeCADGui as Gui

# get the 3D model document
doc = App.ActiveDocument    

# get the visual representation model document
gui_doc = Gui.ActiveDocument

gui_doc.activateWorkbench("myWorkbench")

```

![](/images/Method.png)  **activate Workbench (** *chaîne* **)**

**Description**: Active un atelier par nom

**Returns**: rien

![](/images/Method.png)  **activeDocument (****)**

**Description**:

**Returns**: le document actif ou None si rien n'existe

![](/images/Method.png)  **activeWorkbench (****)**

**Description**:

**Returns**: l'objet de l'atelier actif

![](/images/Method.png)  **addCommand (** *chaîne, object* **)**

**Description**: Ajoute une commande FreeCAD. Chaîne est le nom de la commande et l'objet est un nom de classe définissant la commande

**Returns**:

![](/images/Method.png)  **AddIcon (** *chaîne, chaîne or liste* **)**

**Description**: Ajoute une icône comme nom de fichier ou dans le format XPM du système

**Returns**:

![](/images/Method.png)  **addIconPath (** *chaîne* **)**

**Description**: Ajouter un nouveau chemin d'accès au système où trouver les fichiers d'icônes

**Returns**:

![](/images/Method.png)  **addPreferencePage (** *chaîne, chaîne* **)**

**Description**: Ajoute une forme d'interface utilisateur pour la boîte de dialogue des préférences. Le premier argument spécifie le nom du fichier et le second spécifie le nom du groupe

**Returns**:

![](/images/Method.png)  **addWorkbench (** *chaîne, object* **)**

**Description**: Ajoute un atelier sous un nom défini. La chaîne est le nom de l'atelier et l'objet est un nom de classe définissant l'atelier

**Returns**:

![](/images/Method.png)  **createDialog (** *chaîne* **)**

**Description**: Ouvre un fichier d'interface

**Returns**:

![](/images/Method.png)  **getDocument (** *chaîne* **)**

**Description**: Obtient un document par son nom

**Returns**: le document

![](/images/Method.png)  **getWorkbench (** *chaîne* **)**

**Description**: Obtient un atelier par son nom

**Returns**: l'atelier

![](/images/Method.png)  **Insert (** *chaîne* **)**

**Description**: Ouvrir une macro, Inventor ou un fichier VRML

**Returns**: document

![](/images/Method.png)  **listWorkbenches (****)**

**Description**: Affiche une liste de toutes les ateliers

**Returns**: liste

![](/images/Method.png)  **open (** *chaîne* **)**

**Description**: Ouvre une macro, Inventor ou un fichier VRML

**Returns**: le document ouvert

![](/images/Method.png)  **removeWorkbench (** *chaîne* **)**

**Description**: Supprime un atelier par nom

**Returns**:

![](/images/Method.png)  **RunCommand (** *chaîne* **)**

**Description**: Exécute une commande FreeCAD par nom

**Returns**:

![](/images/Method.png)  **updateGui (****)**

**Description**: Mise à jour de la fenêtre principale et toutes ses fenêtres

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCADGui_API/fr&oldid=1356255>"