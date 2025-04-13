---
title: FEM Contrainte de contact
---
|  |
| --- |
| FEM Contrainte de contact |
| Emplacement du menu |
| Modèle → Conditions limites et charges mécaniques → Contrainte de contact |
| Ateliers |
| [Atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Condition de limite fixe](/FEM_ConstraintFixed/fr "FEM ConstraintFixed/fr") |
|  |

| Solveurs |
| --- |
| CalculiX |

## Description

Crée une contrainte de contact entre deux surfaces. Contrairement au cas de la [contrainte de liaison](/FEM_ConstraintTie/fr "FEM ConstraintTie/fr"), les surfaces peuvent se séparer et glisser l'une sur l'autre (avec ou sans frottement) au cours de l'analyse.

![](/images/FEM_Contact_dialog.PNG)

Panneau des tâches de la contrainte de contact FEM

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ConstraintContact.svg) Contrainte de contact.
   * Sélectionnez l'option **Modèle → Conditions limites et charges mécaniques → ![](/images/FEM_ConstraintContact.svg) Contrainte de contact** du menu.
2. Sélectionnez la face principale. Cliquez sur le premier bouton Ajouter. Pour supprimer une face de la sélection, cliquez dessus et appuyez sur le premier bouton Supprimer.
3. Sélectionnez le face esclave. Appuyez sur le deuxième bouton Ajouter. Pour supprimer une face de la sélection, cliquez dessus et appuyez sur le deuxième bouton Supprimer.
4. Vous pouvez saisir une *rigidité de contact*.
5. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : vous pouvez saisir un *ajustement du jeu*. Tous les nœuds de la face esclave dont la distance par rapport à la face maître est inférieure ou égale à ce nombre seront déplacés pour se trouver sur la face maître au début de l'analyse. Cet ajustement ne provoque aucune contrainte.
6. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : vous pouvez cocher la case *Activer la friction* pour spécifier le coefficient de friction et la valeur de la pente de contact.
7. Entrer optionnellement un *coefficient de friction*. La valeur par défaut de 0 signifie un contact sans frottement.
8. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : vous pouvez saisir la *pente de la courbe de collage*. Il s'agit d'un équivalent de la rigidité de contact pour le comportement de frottements. Elle définit la pente de la relation linéaire entre la contrainte de cisaillement et le déplacement tangentiel relatif dans la plage de contact (avant que le glissement ne se produise).

![](/images/FEM_contact_animation.gif)

Exemple de contact : cube rigide appliqué contre un bloc déformable et glissant sur celui-ci. Sans définition du contact, ces deux parties ne se « verraient » pas.

## Limitations

* La contrainte de contact ne peut être appliquée qu'à deux faces et donc chaque paire de faces nécessite une contrainte de contact séparée.
* Tentative de développement pour plusieurs contacts à la fois : <https://forum.freecad.org/viewtopic.php?f=18&t=15699&start=130#p303275>
* Parce que les maillages multiples ne sont actuellement pas pris en charge, le contact doit être appliqué à des faces qui sont séparées par (au moins) une petite distance. Si les faces se touchaient (sans espace entre elles), le résultat d'une opération d'union booléenne ou de fragmentation booléenne (nécessaire pour éviter d'avoir des maillages multiples, ce qui n'est pas autorisé pour le moment) serait un maillage continu et donc plus besoin d'utiliser le contact. Voir [Discussion sur le forum](https://forum.freecad.org/viewtopic.php?f=18&t=62307).

## Remarques

### Astuces pour modéliser

* À partir de <https://forum.freecad.org/viewtopic.php?f=18&p=340874#p340494>
* L'utilisation d'éléments linéaires est recommandée. Dans le cas contraire, les calculs peuvent prendre beaucoup de temps.
* Affectation maître/esclave :
  + La plus grande des deux surfaces doit être la surface maîtresse.
  + Si les surfaces sont de taille comparable, la surface du corps le plus rigide doit être la surface maîtresse.
  + Si les surfaces sont de taille et de rigidité comparables, la surface dont le maillage est le plus grossier doit être considérée comme la surface maîtresse.

### CalculiX

* La rigidité de contact peut être estimée de 5 à 50 fois le module de Young du matériau. Plus la valeur de la rigidité de contact est élevée, plus le contact entre les surfaces est dur.
* La face esclave est la face qui pénètre dans la face maîtresse et subit donc une plus grande déformation.
* Le jeu de paramètres \*CONTACT PAIR est utilisée pour modéliser le contact dans CalculiX. La contrainte utilise le contact de pénalité Face-à-Face et la formulation du contact est expliquée en détail sur <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node112.html>.
* Vue d'ensemble des différents types de contact : <https://forum.freecad.org/viewtopic.php?f=18&t=15699&start=90#p188736>
* Autres informations intéressantes :
  + <https://forum.freecad.org/viewtopic.php?f=18&t=23102#p180709> et les posts suivants !!!
  + <https://forum.freecad.org/viewtopic.php?f=18&t=20276>
  + <https://forum.freecad.org/viewtopic.php?f=18&t=21331>
  + <https://forum.freecad.org/viewtopic.php?f=18&t=15699> (sujet sur le contact initial)

* Un exemple de contact très détaillé avec CalculiX. ([lien](http://dip28p.web.fc2.com/calculix/netgen2calculix/index.html))

* Un exemple intéressant dans le sous forum allemand. ([Lien](https://forum.freecad.org/viewtopic.php?f=13&t=39663&start=10#p337254))

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintContact/fr&oldid=1559862>"