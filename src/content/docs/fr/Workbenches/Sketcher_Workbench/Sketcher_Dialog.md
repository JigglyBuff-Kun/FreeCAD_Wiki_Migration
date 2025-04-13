---
title: Sketcher Fenêtre de dialogue
---
## Introduction

Lorsqu'une esquisse est en cours d'édition, la fenêtre de dialogue de Sketcher s'affiche dans l'onglet Tâche de la [vue combinée](/Combo_view/fr "Combo view/fr").

Pour mettre une esquisse en mode d'édition, voir ![](/images/Sketcher_EditSketch.svg) [Sketcher Modifier une esquisse](/Sketcher_EditSketch/fr "Sketcher EditSketch/fr"). Pour quitter le mode d'édition, voir ![](/images/Sketcher_LeaveSketch.svg) [Sketcher Quitter l'esquisse](/Sketcher_LeaveSketch/fr "Sketcher LeaveSketch/fr").

La fenêtre de dialogue de Sketcher a les sections suivantes :

## Paramètres d'outils

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Certains outils ajoutent une section de paramètres en haut de la fenêtre de dialogue. Les options et/ou modes disponibles dépendent de l'outil.

![](/images/Sketcher_Dialog_Line_parameters.png)

La section des paramètres de l'outil [Sketcher Ligne](/Sketcher_CreateLine/fr "Sketcher CreateLine/fr").

## Messages du solveur

Cette section renseigne sur l'état de l'esquisse.

Les messages possibles sont les suivants :

* Esquisse vide
* Esquisse sur-contrainte : (#, #, #)
* Esquisse avec contraintes défectueuses : (#, #, #)
* Esquisse avec contraintes redondantes : (#, #, #)
* Esquisse avec contraintes partiellement redondantes : (#, #, #)
* Le solveur n'a pas pu converger
* Sous contrainte : n degré(s) de liberté
* Esquisse entièrement contrainte

Si une esquisse est sous-contrainte, le nombre de degrés de liberté (ou DoF) est indiqué. Un clic sur le texte souligné permet de sélectionner les éléments de l'esquisse sous-contraints. Voir ![](/images/Sketcher_SelectElementsWithDoFs.svg) [Sketcher Degrés de liberté non contraints](/Sketcher_SelectElementsWithDoFs/fr "Sketcher SelectElementsWithDoFs/fr").

Si une esquisse a des contraintes redondantes ou est surcontrainte, les indices des contraintes impliquées sont indiqués. Cliquer sur le texte souligné permet de les sélectionner. Voir ![](/images/Sketcher_SelectRedundantConstraints.svg) [Sketcher Contraintes redondantes](/Sketcher_SelectRedundantConstraints/fr "Sketcher SelectRedundantConstraints/fr") et ![](/images/Sketcher_SelectConflictingConstraints.svg) [Sketcher Contraintes conflictuelles](/Sketcher_SelectConflictingConstraints/fr "Sketcher SelectConflictingConstraints/fr").

Les contraintes défectueuses peuvent être corrigées avec ![](/images/Sketcher_ValidateSketch.svg) [Sketcher Valider une esquisse](/Sketcher_ValidateSketch/fr "Sketcher ValidateSketch/fr").

Certains messages sont affichés en rouge pour une raison précise : il s'agit d'avertissements qui ne doivent pas être ignorés. Ils signalent des problèmes qui doivent être résolus car ils interfèrent avec le solveur. Les messages ne s'excluent pas mutuellement. Si plusieurs messages s'appliquent, seul le premier de la liste est affiché.

Pour modifier les couleurs utilisées des messages, voir [Réglage fin](/Fine-tuning/fr#Couleurs_des_étiquettes_de_contraintes "Fine-tuning/fr").

Options disponibles :

| Option | Description |
| --- | --- |
|  | Ce bouton ouvre un menu :  * **Mise à jour automatique** : si cette option est cochée, l'ensemble du document est recalculé après chaque action d'esquisse. Déconseillé pour les documents complexes. |

## Contrôle avancé du solveur

Cette section n'apparaîtra que si vous cochez l'option **Afficher la section "Contrôle avancé du solveur"** dans les [préférences de Sketcher](/Sketcher_Preferences/fr "Sketcher Preferences/fr").

Remarquez que la plupart des options de cette section n'ont pas d'utilité pratique. Elles peuvent cependant aider à tester et à comprendre les solveurs.

Les options disponibles :

| Option | Description |
| --- | --- |
| **Solveur par défaut** | Le solveur utilisé pour résoudre la géométrie. L'**[algorithme Levenberg-Marquardt](https://fr.wikipedia.org/wiki/Algorithme_de_Levenberg-Marquardt)** et l'algorithme **DogLeg** sont des algorithmes d'optimisation des [régions de confiance](https://fr.wikipedia.org/wiki/Algorithme_%C3%A0_r%C3%A9gions_de_confiance). Le solveur **BFGS** utilise l'[algorithme Broyden–Fletcher–Goldfarb–Shanno](https://fr.wikipedia.org/wiki/M%C3%A9thode_de_Broyden-Fletcher-Goldfarb-Shanno). |
| **Niveau de DogLeg Gauss** | Ce paramètre est uniquement disponible pour le solveur **DogLeg**. C'est le type d'étape utilisé dans l'algorithme DogLeg. |
| **Itérations maximum** | Si le solveur a besoin de plus d'itérations pour trouver une convergence vers une solution, il s'arrête et génère le résultat de son échec. |
| **Multiplicateur par la taille de l'esquisse** | Si coché, le maximum d'itérations est multiplié par le nombre de paramètres. L'idée est que les esquisses plus grandes nécessitent plus d'itérations pour converger. |
| **Convergence** | Le seuil de l'erreur au carré. Cette erreur est utilisée pour déterminer si une solution converge ou non. |
| **Eps/Eps1/Tau** | Ces paramètres ne sont disponibles que pour le solveur **Levenberg-Marquardt**. Vous ne devriez changer quelque chose que si vous comprenez parfaitement le fonctionnement du solveur LevenbergMarquardt. |
| **Tolg/Tolx/Tolf** | Ces paramètres ne sont disponibles que pour le solveur **DogLeg**. Vous ne devriez changer quelque chose que si vous comprenez parfaitement le fonctionnement du solveur DogLeg. |
| **Algorithme QR** | Pendant le diagnostic, le rang de la matrice est calculé, ce qui permet d'analyser plus en détail le système de contraintes pour déterminer s'il existe des contraintes redondantes/conflictuelles. La décomposition révélatrice utilisée dans FreeCAD est QR. Il existe deux algorithmes : **Eigen Dense QR** est une matrice QR dense à pivotement complet, c'est un algorithme éprouvé qui fonctionne très bien, mais qui est plutôt lent à mesure que le système se développe. L'algorithme **Eigen Sparse QR** est une optimisation pour les matrices creuses (avec beaucoup de zéros), qui est généralement beaucoup plus rapide, car les systèmes de FreeCAD ont beaucoup de zéros. |
| **Seuil de pivot** | Lorsque vous faites un QR, les valeurs situées sous le seuil de pivot sont considérées comme nulles. |
| **Solveur des redondances** | Le solveur utilisé lors du diagnostic pour déterminer si un groupe est redondant ou en conflit. |
| **Itérations maximum pour les redondances** | Le même que **Itérations maximum**, mais pour la résolution des redondances. |
| **Multiplicateur par la taille de l'esquisse pour les redondances** | Le même que **Multiplicateur par la taille de l'esquisse**, mais pour la résolution des redondances. |
| **Convergence pour les redondances** | Le même que **Convergence**, mais pour la résolution des redondances. |
| **R.Eps/R.Eps1/R.Tau** | Le même que **Eps/Eps1/Tau**, mais pour la résolution des redondances. |
| **R.Tolg/R.Tolx/R.Tolf** | Le même que **Tolg/Tolx/Tolf**, mais pour la résolution des redondances. |
| **Mode de la console de débogage** | Réglage permettant de spécifier la verbosité de la sortie de la console. |
| Résoudre | Ce bouton lance explicitement le solveur. |
| Rétablir les paramètres par défaut | Ce bouton rétablit les paramètres par défaut du solveur. |

## Contraintes

Cette section dresse la liste des contraintes présentes dans l'esquisse. Si vous décochez une contrainte dans la liste, elle sera masquée dans l'esquisse. Les contraintes peuvent être sélectionnées dans la liste ainsi que dans l'esquisse.

Les contraintes peuvent également être (dé)masquées avec ![](/images/Sketcher_SwitchVirtualSpace.svg) [Sketcher Basculer l'espace virtuel](/Sketcher_SwitchVirtualSpace/fr "Sketcher SwitchVirtualSpace/fr").

Les options disponibles :

| Option | Description |
| --- | --- |
| Filtre | Si la case Filtre est cochée, la liste déroulante Filtre contrôle les contraintes qui sont listées :  * **Tout** : toutes les contraintes. * **Contraintes géométriques** : contraintes géométriques. * **Contraintes pilotantes** : contraintes dimensionnelles [pilotantes](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr"). Ne fonctionne pas correctement : toutes les contraintes dimensionnelles sont filtrées. * **Contraintes nommés** : contraintes nommées. Ne fonctionne pas. * **Contraintes pilotées** : contraintes dimensionnelles [pilotées](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr"). Ne fonctionne pas. * **Contraintes sélectionnées** : contraintes sélectionnées dans l'esquisse. * **Contraintes associées** : contraintes associées aux éléments sélectionnés dans l'esquisse. |
|  | Ce bouton permet d'activer la visibilité des contraintes répertoriées dans l'esquisse. |
|  | Ce bouton ouvre un menu :  * **Contraintes automatiques** : si cette option est cochée, certaines contraintes géométriques sont appliquées automatiquement aux nouveaux éléments. * **Suppression automatique des redondances** : si cette option est cochée, les nouvelles contraintes qui sont redondantes sont automatiquement supprimées. * **Afficher uniquement les contraintes filtrées** : si cette option est cochée, seules les contraintes répertoriées sont affichées dans l'esquisse. * **Informations complémentaires (dans le widget)** : si cette option est cochée, des informations complémentaires sont ajoutées dans ce formulaire :   `[(GeoID1,PosID1),(GeoID2,PosID2),(GeoID3,PosID3)]`  Le GeoID est un index à base zéro pour la géométrie non externe. L'axe X a le GeoID -1, l'axe Y le GeoID -2. Les GeoID -3, -4, etc. sont utilisés pour la géométrie externe.  PosID peut avoir les valeurs suivantes :  0 = bord, 1 = point de départ, 2 = point d'arrivée, 3 = point central.  Par exemple, une cote allant de l'origine au centre d'un cercle qui est le 2e élément non externe de l'esquisse aura ces informations étendues :  `[(-1,1),(1,3)]`   * **Masquer l'alignement interne (dans le widget)** : si cette option est cochée, les contraintes associées aux alignements internes sont cachées dans la liste. L'outil  [Géométrie interne d'alignement](/Sketcher_RestoreInternalAlignmentGeometry/fr "Sketcher RestoreInternalAlignmentGeometry/fr") peut également masquer ces contraintes, mais masquera également les alignements internes de l'esquisse. |
| **Menu contextuel** | Un clic droit sur l'arrière-plan de la liste ou un clic droit sur les contraintes sélectionnées dans la liste ouvre un menu contextuel. Le menu propose les options suivantes :  * **Changer la valeur** : modifie la valeur d'une contrainte dimensionnelle. Ne fonctionne que pour une seule contrainte. Vous pouvez également double-cliquer sur la contrainte dans la liste, ou double-cliquer sur sa valeur dans la [vue 3D](/3D_view/fr "3D view/fr"). * **Basculer vers/depuis la référence** : voir [Sketcher Basculer les contraintes pilotantes](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr"). * **Désactiver** ou **Activer** : voir [Sketcher Activer les contraintes](/Sketcher_ToggleActiveConstraint/fr "Sketcher ToggleActiveConstraint/fr"). * **Afficher les contraintes** : identique à la case à cocher des contraintes. Mais, contrairement à la case à cocher, fonctionne également pour plus d'une contrainte. * **Masquer les contraintes** : identique à la désactivation de la case à cocher des contraintes. Idem. * **Sélectionner les éléments** : voir [Sketcher Éléments associés aux contraintes](/Sketcher_SelectElementsAssociatedWithConstraints/fr "Sketcher SelectElementsAssociatedWithConstraints/fr"). * **Renommer** : renomme la contrainte. * **Centrer l'esquisse** : centre la vue 3D autour des contraintes sélectionnées. * **Supprimer** : supprime les contraintes sélectionnées. La touche Supprimer peut également être utilisée. * **Échanger les noms des contraintes** : échange les noms des contraintes sélectionnées. Ne fonctionne que si deux contraintes avec des noms donnés par l'utilisateur sont sélectionnées. |

## Éléments

Cette section répertorie les éléments de l'esquisse. Si vous décochez un élément dans la liste, il sera masqué dans l'esquisse. Les éléments peuvent être sélectionnés dans la liste ainsi que dans l'esquisse.

Les options disponibles :

| Option | Description |
| --- | --- |
| Filtre | Si la case Filtre est cochée, la liste déroulante Filtre contrôle les éléments qui sont listés :  * **Normal** : géométrie normale : géométrie qui n'entre pas dans les trois catégories suivantes. * **Géométrie de construction** : [géométrie de construction](/Sketcher_ToggleConstruction/fr "Sketcher ToggleConstruction/fr"). * **Géométrie interne** : [géométrie interne d'alignement](/Sketcher_RestoreInternalAlignmentGeometry/fr "Sketcher RestoreInternalAlignmentGeometry/fr"). * **Géométrie externe** : [géométrie externe](/Sketcher_External/fr "Sketcher External/fr"). * **Tous les types** : tous les types de géométrie. Des types spécifiques peuvent être sélectionnés dans le reste de la liste :   + **Point**   + **Ligne**   + **Cercle**   + **Ellipse**   + **Arc de cercle**   + **Arc d'ellipse**   + **Arc d'hyperbole**   + **Arc de parabole**   + **B-spline** |
|  | Ce bouton ouvre un menu :  * **Informations complémentaires** : si cette case est cochée, des informations complémentaires sur l'élément sont fournies.   Pour les géométries non externes, les informations de la liste passent alors de :  `<N>-<TYPE>`  à :  `<TYPE>(Edge<N>#ID<GeoID>#<VLX>)[-Construction]`  <TYPE> : Type d'élément.  <N> : indice basé sur 1 qui indique l'ordre de création de l'élément.  <GeoID> : voir [Contraintes](#Contraintes).  <VLX> : calque d'élément. Voir ci-dessous. |
|  | Chaque élément de la liste comporte de 1 à 4 boutons organisés en 4 colonnes. Ces boutons permettent de sélectionner une partie spécifique de l'élément. Seuls les boutons applicables sont affichés.  * Bouton de la colonne 1 : sélectionne le bord de l'élément. * Bouton de la colonne 2 : sélectionne le point de départ de l'élément. * Bouton de la colonne 3 : sélectionne le point final de l'élément. * Bouton de la colonne 4 : sélectionne le point central de l'élément.   Cliquer sur le texte a le même effet que de cliquer sur le premier bouton disponible de l'élément.  *Dans l'image, le bord d'une ligne et le centre d'un arc ont été sélectionnés.*  *La ligne n'a pas de bouton dans la colonne 4 car elle n'a pas de centre.* |
| **Menu contextuel** | Un clic droit sur l'arrière-plan de la liste ou un clic droit sur les contraintes sélectionnées dans la liste ouvre un menu contextuel. Le menu contient les [outils de contrainte géométrique](/Sketcher_Workbench/fr#Contraintes_géométriques "Sketcher Workbench/fr"), les [Outils de contrainte dimensionnelle](/Sketcher_Workbench/fr#Contraintes_dimensionnelles "Sketcher Workbench/fr") et les options supplémentaires suivantes :  * **Basculer le mode de la géométrie de construction** : voir [Sketcher Basculer en géométrie de construction](/Sketcher_ToggleConstruction/fr "Sketcher ToggleConstruction/fr"). * **Sélectionner les contraintes** : voir [Sketcher Sélecteur de contraintes associées](/Sketcher_SelectConstraints/fr "Sketcher SelectConstraints/fr"). * **Sélectionner l'origine** : voir [Sketcher Sélectionner l'origine](/Sketcher_SelectOrigin/fr "Sketcher SelectOrigin/fr"). * **Sélectionner l'axe horizontal** : voir [Sketcher Sélection axe horizontal](/Sketcher_SelectHorizontalAxis/fr "Sketcher SelectHorizontalAxis/fr"). * **Sélectionner l'axe vertical** : voir [Sketcher Sélection axe vertical](/Sketcher_SelectVerticalAxis/fr "Sketcher SelectVerticalAxis/fr"). * **Calque** : 3 calques sont disponibles :   + **Calque 0** : indiqué comme `VL0` dans les informations étendues. Il s'agit du calque par défaut. Les éléments de ce calque sont affichés avec un type de ligne solide.   + **Calque 1** : indiqué comme `VL1` dans les informations étendues. Les éléments de ce calque sont affichés avec un type de ligne en pointillé.   + **Caché** : indiqué comme `VL2` dans les informations complémentaires. Les éléments de ce calque sont cachés dans l'esquisse.   L'ordre de rendu des calques 0 et 1 est tel que lors de la sélection de points coïncidents dans la [vue 3D](/3D_view/fr "3D view/fr"), les éléments du calque 0 sont sélectionnés en faveur de ceux du calque 1.   * **Supprimer** : supprime les éléments sélectionnés. La touche Suppr peut également être utilisée. |

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Dialog/fr&oldid=1510997>"