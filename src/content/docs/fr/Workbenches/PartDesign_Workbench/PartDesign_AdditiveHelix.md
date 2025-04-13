---
title: PartDesign Hélice additive
---
|  |
| --- |
| PartDesign Hélice additive |
| Emplacement du menu |
| PartDesign → Créer une fonction additive → Hélice additive |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [PartDesign Hélice soustractive](/PartDesign_SubtractiveHelix/fr "PartDesign SubtractiveHelix/fr") |
|  |

## Description

L'outil **Hélice additive** crée un solide en balayant une esquisse ou un objet 2D sélectionné le long d'une hélice.

![](/images/PartDesign_AdditiveHelix_example_overview.png)

*Le profil (B) est balayé autour de l'axe (A) afin de produire l'hélice solide (C)*

## Utilisation

1. Sélectionnez l'esquisse à balayer en hélice. Il est également possible d'utiliser une face sur le solide existant.
2. Appuyez sur le bouton ![](/images/PartDesign_AdditiveHelix.svg) Hélice additive.
3. Définissez les paramètres de l'hélice (voir la section suivante).
4. Inspectez l'hélice dans la fenêtre de vue pour vous assurer que les paramètres n'entraînent pas une hélice auto-sécante.
5. Appuyez sur OK.

## Options

Lors de la création d'une hélice additive, la boîte de dialogue **Paramètres de l'hélice** propose plusieurs paramètres spécifiant comment l'esquisse doit être balayée.

![](/images/PartDesign_AdditiveHelix_taskpanel.png)

### Axe

Cette option spécifie l'axe autour duquel l'esquisse doit être balayée.

* **Axe normal à l'esquisse** : sélectionne comme axe la normale de l'esquisse qui passe par l'origine de l'esquisse. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")
* **Axe vertical de l'esquisse** : sélectionne l'axe vertical de l'esquisse. C'est la valeur par défaut pour les nouvelles hélices.
* **Axe horizontal de l'esquisse** : sélectionne l'axe horizontal de l'esquisse.
* **Ligne de construction**  : sélectionne une ligne de construction contenue dans l'esquisse utilisée par l'hélice. La liste déroulante contiendra une entrée pour chaque ligne de construction. La première ligne de construction créée dans l'esquisse sera intitulée *Ligne de construction 1*.
* **Axes (X/Y/Z)** : sélectionne l'axe X, Y ou Z de l'origine du corps.
* **Sélectionner une référence...** : permet de sélectionner dans la vue 3D une arête sur le corps ou une [ligne de référence](/PartDesign_Line/fr "PartDesign Line/fr").

### Mode

Ceci contrôle les paramètres qui seront utilisés pour définir l'hélice. Les choix autorisés sont :

* **Pas-Longueur-Angle** : définition via la hauteur par tour et la longueur totale
* **Pas-Tours-Angle** : définition via la hauteur par tour et le nombre de tours
* **Longueur-Tours-Angles** : définition via la longueur totale et le nombre de tours
* **Longueur-Tours-Croissance** [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr") : définition via la longueur totale, le nombre de tours et la croissance du rayon hélicoïdal. Ainsi, une longueur de zéro conduit à une trajectoire en forme de spirale. Une longueur et une croissance de zéro conduisent à une trajectoire en forme de cercle.

### Pas

La distance entre les tours dans l'hélice.

### Longueur

La longueur de l'hélice (centre-centre).

### Tours

Le nombre de tours dans l'hélice. Définit par le rapport longueur/pas.

### Angle du cône

Angle du cône qui forme une coque autour de l'hélice. Plage autorisée : [-89°, +89°].

### Pas à gauche

Si cette case est cochée, le sens de rotation de l'hélice est inversé, passant par défaut du sens horaire par défaut au sens antihoraire.

### Inverser

Si la case est cochée, la direction de l'axe de l'hélice est inversée par rapport à la valeur par défaut.

### Mettre à jour la vue

Si la case est cochée, l'hélice sera affichée dans la vue et la mise à jour sera automatique à chaque modification des paramètres.

## Préférences

* Une hélice additive qui n'intersecte pas le corps sera visible dans l'aperçu si **Outils → Éditer paramètres.... → BaseApp → Préférences → Mod → PartDesign → AdditiveHelixPreview** est réglé sur `true`. La valeur par défaut de cette préférence est `false`. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

## Propriétés

* Données**Pitch** : distance axiale entre deux spires.
* Données**Height** : longueur totale de l'hélice (sans tenir compte de l'étendue du profil)
* Données**Turns** : nombre de tours (ne doit pas être un nombre entier)
* Données**Left Handed** : voir [Pas à gauche](#Pas_à_gauche).
* Données**Reversed** : vrai ou faux. Voir [Inverser](#Inverser).
* Données**Angle** : rapport avec lequel le rayon de l'hélice augmente le long de l'axe. Plage admissible : [-89°, +89°].
* Données**Reference axis** : axe de l'hélice
* Données**Mode** : mode d'entrée de l'hélice (hauteur de pas, tours de pas, hauteur de tours)
* Données**Outside** : non utilisé (utilisé dans l'hélice soustractive)
* Données**Has Been Edited** : si faux, l'outil proposera une valeur initiale pour le pas basée sur la boîte englobante du profil, de sorte que l'auto-intersection soit évitée.
* Données**Refine** : vrai ou faux. Si la valeur est vraie, nettoie le solide des arêtes résiduelles laissées par les fonctions. Voir [Part Affiner la forme](/Part_RefineShape/fr "Part RefineShape/fr") pour plus de détails.
* Données**Profile** : soit une esquisse contenant un contour fermé, soit une face.
* Données**Midplane** : non utilisé.
* Données**Up to face** : non utilisé.
* Données**Allow multiple face** : non utilisé.

## Remarques

* Une ![](/images/PartDesign_ShapeBinder.svg) [PartDesign Forme liée](/PartDesign_ShapeBinder/fr "PartDesign ShapeBinder/fr") ne peut pas être utilisée pour le profil.
* Lors de l'utilisation d'une ![](/images/PartDesign_SubShapeBinder.svg) [PartDesign Sous forme liée](/PartDesign_SubShapeBinder/fr "PartDesign SubShapeBinder/fr") pour le profil, la sélection de la liaison dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") échouera, mais la face de la liaison devra être sélectionnée dans la [vue 3D](/3D_view/fr "3D view/fr").
* Les hélices sont très difficiles à calculer correctement pour le moteur sous-jacent, car les courbes impliquées poussent la précision de la virgule flottante à sa limite. Cela signifie que l'exécution d'autres opérations sur une hélice, comme la tentative d'opérations booléennes avec un autre objet, peut être très sensible à de petites modifications. Lorsqu'elles échouent, elles cassent souvent le modèle de manière surprenante. Pour éviter cela, vous devez essayer de faire en sorte que les opérations sur une hélice se chevauchent clairement (interfèrent) ou ne se chevauchent pas. Les correspondances exactes où la surface de l'hélice est parfaitement alignée avec la surface d'un autre objet sont fragiles. Un filetage autour d'un cylindre de boulon en est un exemple. Il peut même fonctionner dans un premier temps, puis se rompre par la suite lorsque les objets sont légèrement déplacés.

## Exemples

![](/images/PartDesign_AdditiveHelix_example_bspline.png)

Exemple d'hélice utilisant une [B-spline](/Sketcher_CreateBSpline/fr "Sketcher CreateBSpline/fr") dans l'esquisse

![](/images/PartDesign_AdditiveHelix_example_twisting_pad.png)

Exemple d'hélice où l'axe de l'hélice est normal au plan de l'esquisse, ce qui donne un effet de "protrusion avec torsion".

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveHelix/fr&oldid=1565249>"