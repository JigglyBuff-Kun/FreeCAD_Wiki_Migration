---
title: FEM Tutoriel pour ajouter un bouton dans la barre d'outils FEM
---
|  |
| --- |
| Tutorial |
| Topic |
| FEM |
| Level |
| Avancé |
| Time to complete |
| 60 min |
| Authors |
| [JohnWang](/index.php?title=User:JohnWang&action=edit&redlink=1 "User:JohnWang (page does not exist)") |
| FreeCAD version |
| 0.19 |
| Example files |
| *None* |
| See also |
| *None* |
|  |

## Introduction

L'atelier FEM dispose de barres d'outils et de menus. Ce tutoriel montre comment ajouter un bouton de test à une barre d'outils. Il montre également comment ajouter un élément de menu à un menu.

La tâche peut être divisée en quatre parties :

* **Créer un nouveau fichier d'icône**.
* **Enregistrer le nouveau fichier d'icône**. Modification nécessaire dans `src/Mod/Fem//Gui/Resources/Fem.qrc`
* **Créer une nouvelle classe de commande**. Modification nécessaire dans `src/Mod/Fem/femcommands/commands.py`
* **Ajout d'une nouvelle commande à l'atelier**. Modification nécessaire dans `src/Mod/Fem/Gui/Workbench.cpp`

## Créer un nouveau fichier d'icône

Pour le bouton, nous avons besoin d'un fichier d'icône. Vous pouvez utiliser n'importe lequel de vos outils préférés pour le créer, mais il doit être au format SVG. Nous utiliserons ici le fichier FEM\_testButton.svg comme exemple.

Il doit être placé dans : `src/Mod/Fem/Gui/Resources/icons/`.

## Enregistrer le nouveau fichier d'icône

Le nouveau fichier icône SVG doit être enregistré pour le bouton GUI en l'insérant dans `src/Mod/Fem/Gui/Resources/Fem.qrc` :

```
<file>icons/FEM_testButton.svg</file>

```

## Créer une nouvelle classe de commande

Une nouvelle classe de commande doit être ajoutée au module `src/Mod/Fem/femcommands/commands.py`.

Il suffit de copier/coller une commande existante, puis d'ajuster l'icône, le texte du menu et l'infobulle dans `__init__(self)` :

```
class _testButton(CommandManager):
    "The FEM_testButton command definition"

    def __init__(self):
        super(_testButton, self).__init__()
        self.menuetext = "test Button"
        self.tooltip = "This is a test button"
        self.is_active = "always"
        #self.do_activated = "add_obj_on_gui_selobj_noset_edit"

```

N'oubliez pas d'enregistrer la commande au bas du fichier du module avec la méthode `addCommand(...)` :

```
FreeCADGui.addCommand(
    "FEM_testButton",
    _testButton()
)

```

**Remarque** : veuillez consulter ce [fil de discussion](https://forum.freecadweb.org/viewtopic.php?f=18&t=46693&start=10#p402004) dans le forum si des icônes sont impliquées.

## Ajouter une nouvelle commande à l'atelier

Nous allons ajouter la nouvelle commande à la fois à la barre d'outils *solve* et au menu *solve*.

Recherchez le bout de code suivant dans `/Gui/Workbench.cpp` et ajoutez la nouvelle commande :

```
Gui::ToolBarItem* solve = new Gui::ToolBarItem(root);
     solve->setCommand("Solve");
     *solve << "FEM_SolverCalculixCxxtools"
            << "FEM_SolverCalculiX"
            << "FEM_SolverElmer"
+           << "FEM_testButton"
            << "Separator"

```

Pour ajouter la commande au menu **solve** de l'atelier FEM, recherchez le bout de code suivant dans `Workbench.cpp` :

```
Gui::MenuItem* solve = new Gui::MenuItem;
    root->insertItem(item, solve);
    solve->setCommand("&Solve");
    *solve << "FEM_SolverCalculixCxxtools"
           << "FEM_SolverCalculiX"
           << "FEM_SolverElmer"
           << "FEM_SolverZ88"
+          << "FEM_testButton"
           << "Separator"

```

**Résultat** : vous devriez avoir ajouté avec succès un bouton de test à la barre d'outils et au menu d'un atelier FEM. Maintenant, vous pouvez [compiler FreeCAD](/Compiling/fr "Compiling/fr") et tester votre nouveau bouton.

## En relation

* [Tutoriel FEM Module d'extension](/Extend_FEM_Module/fr "Extend FEM Module/fr")
* [Page pour développeurs FEM](/Onboarding_FEM_Devs/fr "Onboarding FEM Devs/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Add_Button_to_FEM_Toolbar_Tutorial/fr&oldid=1354650>"