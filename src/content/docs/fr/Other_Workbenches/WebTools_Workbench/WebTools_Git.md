---
title: WebTools Git
---
|  |
| --- |
| WebTools Git‏‎ |
| Emplacement du menu |
| Web Tools → Git |
| Ateliers |
| [WebTools](/WebTools_Workbench/fr "WebTools Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| *Aucun* |
|  |

:::caution
A partir de FreeCAD v0.17, cet outil a été enlevé de l'atelier Arch et fait maintenant partie de l'atelier externe WebToolsqui peut être installé depuis le menu Outils →Gestionnaire des extensions.
:::

## Description

Cette commande permet de gérer le document actif via [GIT](https://en.wikipedia.org/wiki/Git_%28software%29). GIT est un puissant système de révisions de versions, peut gérer des versions différentes de fichiers et garder une trace des changements.

Git est un outil complexe, considérez d'en apprendre les bases avant d'utiliser cet outil, afin d'éviter des opérations malavisées qui pourraient causer des pertes de données. Une littérature abondante sur Git est disponible et facile à trouver sur Internet.

**Prérequis:** pour pouvoir utiliser cette commande, le paquet [gitpython](https://github.com/gitpython-developers/GitPython) doit être installé sur votre système. Sur la plupart des distributions Linux, gitpython est disponible à partir des dépôts de logiciels standards sous le nom *gitpython* ou *python-git*.

## Utilisation

1. Assurez-vous que la [vue rapport](/Report_view/fr "Report view/fr") est ouverte car les messages Git y seront affichés.
2. Enregistrez le document actif actuel en vous assurant que le fichier enregistré se trouve dans un dépôt git existant. Cela peut être dans un sous-répertoire.
3. Sélectionnez le menu **Web Tools → ![](/images/WebTools_Git.svg) Git**
4. Ceci ouvre un [panneau des tâches](/Task_panel/fr "Task panel/fr") dans la [vue combo](/Combo_view/fr "Combo view/fr").

## Options

![](/images/Arch_Git_panel.jpg)

Onglet Tâches affichant l'interface Git

* Le bouton **Log** fera apparaître une boîte de dialogue affichant les entrées de journal les plus récentes. La sortie correspond à `git log`.
* Le bouton **Refresh** analysera à nouveau le dépôt pour les fichiers modifiés. Après avoir enregistré votre travail, vous devez effectuer une mise à jour manuelle.
* Le bouton **Diff** affichera les différences entre la version actuelle d'un fichier sélectionné et la version la plus récente stockée dans le dépôt. La sortie correspond à `git diff`.
  + Par défaut, un diff binaire est fait, vous devez configurer l'outil `fcinfo` pour la différence textuelle.
* Le bouton **Select all** sélectionnera tous les fichiers à valider.
* Le bouton **Commit** validera les fichiers sélectionnés. Veillez à rédiger un message de validation décrivant les modifications que vous effectuez.
* Le bouton **Pull** va **télécharger** toutes les nouvelles modifications apportées au dépôt à partir du dépôt sélectionné. Si le fichier actuellement ouvert dans FreeCAD est en cours de modification par pull (extraction), un message d'avertissement vous en informera afin que vous puissiez soit enregistrer à nouveau le fichier, soit l'enregistrer ailleurs.
* Le bouton **Push** va **télécharger** votre ou vos derniers commit(s) sur le dépôt sélectionné.

## Limitations

* L'outil ne peut pas créer de nouveaux dépôts pour l'instant. Vous devez avoir créé au préalable un dépôt local. (FreeCAD vérifiera si le document courant est dans un dépôt Git.)
* L'outil ne peut pas changer ou créer des branches. Vous devez le faire manuellement avec les outils Git standard.

## Activation des différences lisibles pour les fichiers FCStd avec l'utilitaire fcinfo

Le [format de fichier FCStd](/File_Format_FCStd/fr "File Format FCStd/fr") de FreeCAD est un format binaire au format zip, pour lequel Git ne peut pas produire de diffs corrects. Cela signifie que vous ne pouvez pas voir ce qui a changé entre les versions et que chaque nouvelle version stockée dans le référentiel Git est une copie complète du fichier.

Bien que le second problème n’ait actuellement pas de solution, le premier peut être résolu avec un petit outil disponible dans le code source de FreeCAD, appelé [fcinfo](https://github.com/FreeCAD/FreeCAD/blob/master/src/Tools/fcinfo) . On peut dire à Git d’utiliser l’utilitaire fcinfo pour imprimer un rapport convivial pour un fichier FCStd et que, s’il est invité à produire un diff entre deux fichiers FCStd, il produira un diff entre les deux rapports fcinfo. Veuillez noter qu'il ne s'agit que d'un retour visuel. Une copie complète du fichier sera toujours stockée en interne.

Exemple de différences générées avec fcinfo:

```
diff --git a/testhouse.FcStd b/testhouse.FcStd
index 08077b6..985b1d8 100644
--- a/testhouse.FcStd
+++ b/testhouse.FcStd
@@ -1,26 +1,25 @@
-Document: /tmp/43un09_testhouse.FcStd (442K)
-   SHA1: 67c1985a45d93cba57d5bf44490897aba460100d
+Document: /tmp/zfXoDd_testhouse.FcStd (370K)
+   SHA1: db1cb5fca18af7bfdca849028f40550df4d845cb
    Comment : This is a test house to showcase FreeCAD's BIM worflow and IFC export capabilities
    Company : uncreated.net
    CreatedBy : Yorik van Havre
    CreationDate : Fri May  9 12:05:54 2014 
    FileVersion : 1
    Id : 
-   Label : testhouse
-   LastModifiedBy : Yorik van Havre
-   LastModifiedDate : 2016-06-28T17:05:57-03:00
+   Label : testhouse2
+   LastModifiedBy : Yorik van Havre
+   LastModifiedDate : Sat Sep 13 20:46:36 2014
+
    License : CC-BY 3.0
    LicenseURL : http://creativecommons.org/licenses/by/3.0/
-   ProgramVersion : 0.17R7800 (Git)
-   TipName : 
+   ProgramVersion : 0.15R3989 (Git)
    Uid : 67e62d8a-6674-4358-92fe-615443be887a
-   Objects: (231)
+   Objects: (221)
        Annotation : Drawing::FeatureViewAnnotation
        Annotation001 : Drawing::FeatureViewAnnotation
        Annotation002 : Drawing::FeatureViewAnnotation
        Annotation003 : Drawing::FeatureViewAnnotation
-       Annotation004 : Drawing::FeatureViewAnnotation
-       Annotation005 : Drawing::FeatureViewAnnotation
        Array : Part::FeaturePython (9K)
        Box : Part::Box (2K)
        Building : App::DocumentObjectGroupPython
@@ -110,7 +109,7 @@ Document: /tmp/43un09_testhouse.FcStd (442K)
        Floor : App::DocumentObjectGroupPython
        Floor001 : App::DocumentObjectGroupPython
        Floor002 : App::DocumentObjectGroupPython
-       Frame : Part::FeaturePython (89K)

```

Chaque fichier FreeCAD contient un numéro de somme de contrôle SHA1, qui change à chaque sauvegarde du fichier, même si aucun contenu n'a été modifié. Donc, fcinfo imprimera toujours quelque chose, peu importe les changements de contenu.

Pour activer l'utilisation de fcinfo (Linux et Mac uniquement - TODO: ajouter des instructions Windows)

### Utilisation de fcinfo sur un seul dépôt Git

Voici les étapes pour permettre l'utilisation de l'outil fcinfo sur la base d'un dépôt.

* Sauvegardez le fichier fcinfo quelque part dans le chemin de votre système.

:   Note : depuis le 2023-12-09, sur les systèmes Arch Linux le script `fcinfo` est inclus dans le paquet `freecad`, [ici le patch](https://gitlab.archlinux.org/archlinux/packaging/packages/freecad/-/commit/4419bfbfdb670abebd7f2e6ed93194e819781f7d).

* Rendez-le exécutable.

:   Note : depuis le 2023-12-09, sur les systèmes Arch Linux, le script `fcinfo` est disponible à `/usr/bin/fcinfo`.

* Créez un fichier `.gitattributes` dans votre répertoire Git et ajoutez-y la ligne suivante :

:   ```
    *.FCStd diff=fcinfo

    ```

* Ajoutez les lignes suivantes au fichier `.gitconfig` dans votre répertoire personnel :

:   ```
    [diff "fcinfo"]
    textconv = /path/to/fcinfo

    ```

* Une autre solution consiste à lancer fcinfo avec des arguments (par exemple, `--gui`) en utilisant [cette approche](https://stackoverflow.com/questions/55601430/how-to-pass-a-filename-argument-gitconfig-diff-textconv) :

:   ```
    [diff "fcinfo"]
    textconv = sh -c '/path/to/fcinfo --gui "$0"'XD

    ```

Remarquez que si vous travaillez dans un projet collaboratif, vous pouvez vouloir inclure l'outil fcinfo dans votre dépôt. Dans ce cas, le chemin est relatif au répertoire racine de votre dépôt Git.

### Activer fcinfo globalement

Si vous travaillez sur de nombreux projets qui ont besoin de l'outil fcinfo, vous pouvez l'activer globalement pour votre utilisateur.

* Créez un fichier `$HOME/.config/git/attributes` et ajoutez-y la ligne suivante :

:   ```
    *.FCStd diff=fcinfo

    ```

* Ajoutez les lignes suivantes au fichier `$HOME/.config/git/config` :
  + La commande équivalente est `git config --global diff.fcinfo.textconv "/path/to/fcinfo"`.
  + Les utilisateurs d'Arch Linux utilisant le paquet `freecad` peuvent utiliser `{{{1}}}` puisqu'il est déjà installé sur leur système.

:   ```
    [diff "fcinfo"]
    textconv = /path/to/fcinfo

    ```

Remarquez que toute configuration effectuée dans un dépôt est prioritaire par rapport aux configurations globales.

Retrieved from "<http://wiki.freecad.org/index.php?title=WebTools_Git/fr&oldid=1365108>"