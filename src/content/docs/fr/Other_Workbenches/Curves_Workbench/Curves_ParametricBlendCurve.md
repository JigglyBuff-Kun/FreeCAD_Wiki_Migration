---
title: Curves Courbe de transition
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Curves Courbe de transition |
| Emplacement du menu |
| Curves → Blend curve |
| Ateliers |
| [Curves](/Curves_Workbench/fr "Curves Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Curves_ParametricBlendCurve.svg) **Curves Courbe de transition** crée une courbe de transition entre deux arêtes.

## Utilisation

1. Sélectionnez deux courbes.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_ParametricBlendCurve.svg) Blend curve.
   * Sélectionnez l'option **Curves → ![](/images/Curves_ParametricBlendCurve.svg) Blend curve** du menu.
3. Un objet **Blend\_Curve** est créé.
4. Vous pouvez ajustez les valeurs dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") :
   * Définissez les propriétés Données**Parameter1** et Données**Parameter2** à `0.0 mm` pour utiliser les sommets de départ des courbes sélectionnées afin de placer les sommets de départ et d'arrivée de la courbe de transition.
   * Définissez les propriétés Données**Reverse1** et Données**Reverse2** à `true` pour intervertir les sommets de début et de fin des courbes sélectionnées.

## Remarques

Pour inverser l'orientation des tangentes de début et de fin de la courbe de transition, préfixez `-` à la valeur de sa propriété Données**Scale1** ou Données**Scale2**.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **Blend\_Curve** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Blend Curve

* Données**Auto Scale** (`Bool`) : calcule les valeurs des échelles pour obtenir une courbure minimale le long de la courbe.
* Données**CurvePts** (`VectorList`) : pôles de la courbe de Bézier.
* Données**Output** (`Enumeration`) : type de résultat.
  + `Single` (par défaut) : le résultat se compose uniquement de la courbe de transition.
  + `Wire` : le résultat se compose de trois courbes distinctes, la courbe de transition et les deux courbes initiales.
  + `Joined` : le résultat consiste en une courbe continue composée de la courbe de transition et des deux courbes initiales.

Edge1

* Données**Continuity1** (`Enumeration`) : niveau de continuité.
  + `C0` (= G0) : les courbes se touchent au point de jonction.
  + `G1` (par défaut) : comme précédemment, les courbes partagent également une direction tangente commune au point de jonction.
  + `G2` : comme précédemment, les courbes partagent également un centre de courbure commun au point de jonction.
  + `G3` : comme précédemment, les courbes partagent également un taux de croissance de la courbure au point de jonction.
  + `G4` : comme précédemment, les courbes partagent également une accélération commune du taux de croissance de la courbure au point de jonction.
* Données**Edge1** (`LinkSub`) : arrête 1.
* Données**Parameter1** (`Distance`) : emplacement sur la première arête.
* Données**Reverse1** (`Bool`) : arrête inversée.
* Données**Scale1** (`Bool`) : valeur de l'échelle de la courbe de transition. Annulez la valeur pour inverser l'orientation de la tangente.

Edge2

* Données**Continuity2** (`Enumeration`) : niveau de continuité. (`C0`, `G1`, `G2`, `G3`, `G4`, voir ci-dessus)
* Données**Edge1** (`LinkSub`) : arrête 2.
* Données**Parameter2** (`Distance`) : emplacement sur la deuxième arête.
* Données**Reverse2** (`Bool`) : arrête inversée.
* Données**Scale2** (`Bool`) : échelle de la courbe de transtion. Annulez la valeur pour inverser l'orientation de la tangente.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_ParametricBlendCurve/fr&oldid=1568180>"