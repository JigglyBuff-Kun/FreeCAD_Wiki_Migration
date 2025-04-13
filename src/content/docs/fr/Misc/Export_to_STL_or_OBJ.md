---
title: Exporter des STL ou OBJ
---
|  |
| --- |
| Tutoriel |
| Thème |
| Exporter des STL ou OBJ |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| 20 minutes |
| Auteurs |
| r-frank |
| Version de FreeCAD |
| 0.16.6703 |
| Fichiers exemples |
| *None* |
| Voir aussi |
| *None* |
|  |

## Introduction

Dans ce tutoriel, nous allons découvrir comment exporter les fichiers de FreeCAD au formats STL/OBJ. Les formats de maillage STL/OBJ n'ont aucune dimension. L'exportation par FreeCAD supposera que l'unité utilisée dans le modèle est exprimée en mm. Si ce n'est pas le cas, vous devez mettre votre modèle à l'échelle. Une façon de le faire est d'utiliser ![](/images/Draft_Scale.svg) [Draft Échelle](/Draft_Scale/fr "Draft Scale/fr").

## Faire un test

Vous pouvez utiliser votre propre fichier FreeCAD, mais vous pouvez aussi créer un fichier test :

1. Lancer FreeCAD.
2. Créer un nouveau document.
3. Basculer sur l'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr").
4. Insérer un ![](/images/Part_Box.svg) [Part Cube](/Part_Box/fr "Part Box/fr").
5. Insérer un ![](/images/Part_Cone.svg) [Part Cône](/Part_Cone/fr "Part Cone/fr").
6. Sélectionnez les deux objets dans la [vue en arborescence](/Tree_view/fr "Tree view/fr")
7. Créer une fusion avec les deux éléments ![](/images/Part_Fuse.svg) [Part Union](/Part_Fuse/fr "Part Fuse/fr").
8. Sauvegarder votre fichier.

## Méthode d'exportation 1 : utilisation de "Fichier → Exporter"

1. Avec les paramètres par défaut, cette méthode crée un maillage avec des courbes sensiblement irrégulières. Pour obtenir une finition plus lisse lors de l'impression 3D, par exemple, la résolution du maillage doit être configurée :
   1. Assurez-vous que l'![](/images/Workbench_Mesh.svg) [atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") a été chargé (il n'est pas chargé par défaut).
   2. Allez dans **Édition → Préférences... → Importer/Exporter → Formats du maillage**.
   3. Modifier **Déviation maximale du maillage**. Une valeur plus faible produira un maillage avec une résolution plus élevée.
2. Sélectionnez le solide à exporter dans la vue en arborescence.
3. Choisissez **Fichier → Exporter...** et définissez le type de fichier à **STL mesh (\*.stl \*.ast)**.
4. Entrez votre nom de fichier. L'extension par défaut est .stl. Vous devez inclure l'extension .ast pour produire un fichier .ast.
5. Choisissez Enregistrer.

## Méthode d'exportation 2 : utilisation de l'atelier Mesh dans FreeCAD

1. Basculez vers l'![](/images/Workbench_Mesh.svg) [Atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr").
2. Sélectionnez le solide à mailler dans la vue arborescente.
3. Choisissez **Maillages** → ![](/images/Mesh_FromPartShape.svg) Créez un maillage à partir de la forme... à partir du menu principal (supérieur).
4. Sélectionnez l'un des mailleurs disponibles et spécifiez les options disponibles. Pour plus d'informations, voir [Mesh Maillage à partir d'une forme‏‎](/Mesh_FromPartShape/fr "Mesh FromPartShape/fr").
5. Choisissez OK. L'objet maillé sera créé dans l'arborescence (avec l'icône de maillage verte ![](/images/Workbench_Mesh.svg)).
6. Cliquez avec le bouton droit de la souris sur l’objet maillé dans l’arborescence et choisissez **![](/images/Mesh_ExportMesh.png) Exporter le maillage...**.
7. Remplissez le nom du fichier. L'extension n'est pas nécessaire. L'extension sera définie en fonction du type de fichier. Si vous incluez une extension qui ne correspond pas au type de fichier sélectionné, une extension pour le type sélectionné sera ajoutée lors de l'enregistrement du fichier.
8. Le type de fichier par défaut est **Binary STL (\*.stl)**. Changez le type si vous le souhaitez.
9. Choisissez Sauvegarder.

## Quelle méthode choisir?

* La méthode 1 peut être utilisée dans la plupart des cas où un fichier de maillage est nécessaire.
* Avec la méthode 2, vous pouvez vérifier le maillage dans FreeCAD. Et si vous avez plus d'un solide à convertir, vous pouvez utiliser les outils de l'[atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr"). Par exemple, vous pouvez fusionner des maillages avant de les exporter.

## Liens

* [Importer un fichier STL ou OBJ](/Import_from_STL_or_OBJ/fr "Import from STL or OBJ/fr")
* [Import Export](/Import_Export/fr "Import Export/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Export_to_STL_or_OBJ/fr&oldid=1334605>"