---
title: Std Graphe des dépendances
---
|  |
| --- |
| Std Graphe des dépendances |
| Emplacement du menu |
| Outils → Graphe des dépendances... |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Std Exporter le graphe des dépendances](/Std_ExportDependencyGraph "Std ExportDependencyGraph") |
|  |

## Description

La commande **Std Graphe des dépendances** affiche les dépendances entre les objets du document actif dans un graphe. Contrairement à la [vue en arborescence](/Tree_view/fr "Tree view/fr"), les objets sont listés dans l'ordre chronologique inverse, le premier objet créé se trouvant en bas de la liste.

Il peut être utile pour analyser un document FreeCAD et localiser des fourches dans l'arborescence. La forme du graphe dépendra de l'atelier utilisé pour créer les objets du document. Par exemple, un modèle créé exclusivement dans l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") peut afficher un graphe de dépendances linéaire avec une seule branche verticale. Un modèle fait sous l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") sera formé de plusieurs branches, mais pour une pièce unique, celles-ci se joindront au sommet après des opérations [booléennes](/Part_Boolean/fr "Part Boolean/fr"). Si ce n'est pas le cas alors il s'agit d'objets distincts.

Le graphe des dépendances est purement un outil de visualisation. Il ne peut donc pas être modifié. Il se met automatiquement à jour si des changements sont apportés au modèle.

![](/images/Std_DependencyGraph_example.svg)

Exemple de graphe des dépendances avec un PartDesign corps à gauche et un objet créé avec des Part opérations à droite

## Installation

Pour utiliser la commande, un logiciel tiers nommé [Graphviz](https://graphviz.org/) doit être installé. Si vous ne l'avez pas préinstallé ou s'il est installé dans un emplacement non conventionnel, FreeCAD affichera la boîte de dialogue suivante :

![](/images/FreeCAD-0.17-missing-Graphviz-error-dialogue.png)

Le chemin d'accès sauvegardé peut être modifié dans l'[éditeur de paramètres](/Std_DlgParameter/fr "Std DlgParameter/fr") sous **BaseApp → Preferences → Paths → Graphviz**.

### Windows

Téléchargez le programme d'installation **graphviz-2.xx** depuis la page [page de téléchargement Graphviz](https://graphviz.org/download/#windows) puis lancez l'installation. Certaines versions plus anciennes semblent avoir des problèmes pour afficher le graphe. Les versions 2.38 et plus récentes sont connues pour être fiables. Vous pouvez trouver toutes les versions de Graphviz sur [Gitlab](https://gitlab.com/graphviz/graphviz/-/releases).

### macOS

Vous pouvez installer Graphviz à l'aide de [Homebrew](https://brew.sh/) si vous êtes en macOS Big Sur (11) (ou supérieur). Lors de l'installation de Homebrew, ne soyez pas nerveux si macOS vous demande d'installer des mises à jour, par exemple pour les outils de ligne de commande Xcode. Ces mises à jour sont effectuées plus tard par le processus d'installation.

```
brew install graphviz

```

Ceci installe les binaires Graphviz sous /usr/local/bin pour macOS sur Intel, ou /opt/homebrew pour macOS sur Apple Silicon/ARM. FreeCAD devrait trouver automatiquement ces emplacements. Si le programme Graphviz n'est pas trouvé, il vous sera demandé de spécifier un chemin. Malheureusement, nous ne pouvons pas naviguer directement vers le programme dans la fenêtre de dialogue du fichier qui s'affiche à partir de **Outils → Graphe des dépendances...**. Deux options s'offrent à vous : vous pouvez utiliser la combinaison de touches Cmd+Shift+. pour afficher les éléments cachés, ou vous pouvez utiliser la combinaison de touches Cmd+Shift+G pour obtenir un champ de saisie pour le chemin. Saisissez l'un de ces chemins dans le [terminal](https://fr.wikipedia.org/wiki/Terminal_(macOS)) :

```
/usr/local/bin

```

ou :

```
/opt/homebrew/bin

```

et confirmez le champ de saisie et la fenêtre de dialogue de sélection de fichier.

Dans le cas où les binaires de Graphviz sont installés dans un emplacement non standard, essayez de trouver le programme avec la commande :

```
type dot

```

Le résultat ressemblera à :

```
dot is /usr/local/bin/dot

```

Et vous pouvez dire à FreeCAD de regarder dans ce répertoire.

Si vous n'avez pas macOS Big Sur (11) (ou supérieur), Homebrew ne fonctionnera peut-être pas, mais vous pouvez utiliser [MacPorts](https://www.macports.org/index.php) à la place. Téléchargez simplement la [version appropriée pour votre OS](https://www.macports.org/install.php). Une fois l'installation terminée, entrez cette commande dans le [terminal](https://fr.wikipedia.org/wiki/Terminal_(macOS)) :

```
sudo port install graphviz

```

Entrez votre mot de passe et attendez que les dépendances soient téléchargées et installées (cela peut prendre un certain temps).

Les binaires de Graphviz peuvent être sous /usr/local/bin ou /opt/local/bin/dot. FreeCAD peut trouver automatiquement le programme Graphviz avec la boîte de dialogue des fichiers qui s'affiche à partir de **Outils → des dépendances...**, sinon entrez cette commande :

```
type dot

```

Le résultat ressemblera à :

```
dot is /opt/local/bin/dot

```

Et vous pouvez dire à FreeCAD de regarder dans ce répertoire comme expliqué précédemment.

Il est également possible de rendre visible le répertoire opt avec cette commande :

```
defaults write com.apple.finder AppleShowAllFiles YES;

```

puis :

```
killall Finder /System/Library/CoreServices/Finder.app;

```

Vous pouvez donc indiquer à FreeCAD de suivre ce chemin d'accès. Il a été testé avec succès sur macOS 10.13 (High Sierra).

### Linux

Sur la plupart des distributions Linux (Debian/Ubuntu, Fedora, OpenSUSE), il vous suffit d'installer le paquet Graphviz depuis les dépôts. Cependant, comme pour macOS, dans les cas où les binaires graphviz sont installés dans un emplacement non standard, essayez de trouver le programme avec la commande :

```
type dot

```

Le résultat pourrait être

```
dot is /usr/local/bin/dot

```

Et vous pouvez ensuite pointer FreeCAD vers ce répertoire.

## Utilisation

1. Sélectionnez l'option **Outils → ![](/images/Std_DependencyGraph.svg) Graphe des dépendances...** du menu.
2. Un nouvel onglet intitulé **Graphe des dépendances** s'ouvre dans la [zone de vue principale](/Main_view_area/fr "Main view area/fr").
3. Utilisez la molette de défilement de la souris pour effectuer un zoom avant ou arrière.
4. Utilisez les curseurs en bas et à droite de l'écran pour effectuer un panoramique de la vue. Vous pouvez aussi maintenir le bouton gauche de la souris enfoncé et déplacer la souris.

## Enregistrer

Vous pouvez enregistrer un graphe des dépendances :

1. Assurez-vous que l'onglet Graphe des dépendances est au premier plan.
2. Sélectionnez l'option **Fichier → [Enregistrer](/Std_Save/fr "Std Save/fr")** ou **Fichier → [Enregistrer sous](/Std_SaveAs/fr "Std SaveAs/fr")** du menu.
3. Saisissez un nom de fichier et sélectionnez le type de fichier (\*.gv, \*.png, \*.bmp, \*.gif, \*.jpg, \*.svg or \*.pdf).
4. Appuyez sur le bouton Enregistrer.

## Principes généraux

* Le graphe affiche les objets par ordre chronologique inversé, de bas en haut.
* La direction des flèches indiquant les dépendances doit toujours être dirigée vers le bas. Une flèche pointant vers le haut indique une dépendance cyclique, un problème qui doit être résolu.
* Une esquisse contenant des liens vers des [géométries externes](/Sketcher_External/fr "Sketcher External/fr") aura un numéro avec un suffixe "x" à côté de la flèche la reliant à son parent, indiquant le nombre de géométries externes liées dans l'esquisse.
* Des objets peuvent avoir des dépendances à plusieurs parents. Par exemple, pour un modèle construit dans l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"), une cavité peut être liée à son esquisse et à la fonction protrusion qui l’a précédée.
* Des dépendances non autorisées (par exemple, entre une opération de l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") et l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") et un élément à l'intérieur d'un [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr")) seront affichées avec une flèche rouge. Ce type de lien affiche généralement une erreur "Links go out of allowed scope" (Liens hors de portée autorisée) dans la [vue rapport](/Report_view/fr "Report view/fr").
* Un [Part Conteneur](/Std_Part/fr "Std Part/fr")  et le [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") englobent leur contenu dans un encadré avec un arrière-plan de couleur aléatoire. Leur origine englobe également leur contenu (plans et axes standard) dans un encadré.
* un [Groupe](/Std_Group/fr "Std Group/fr") est affiché comme un élément unique lié à son contenu.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DependencyGraph/fr&oldid=1536904>"