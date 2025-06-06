---
title: Sketcher Exemples
---

:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

## Introduction

Je pense que l'![](/images/Workbench_Sketcher.svg) [atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") a besoin de quelques exemples qui ne sont pas des tutoriels détaillés ou des vidéos...

## Charnière film

Une charnière film est le petit morceau de plastique pliable qui relie les deux côtés d'un objet moulé par injection, tel qu'un conduit avec un couvercle, ou les deux moitiés d'un boîtier de bouchon protégeant de la poussière.

Cet exemple utilise une sorte d'esquisse principale pour empiler des esquisses dépendantes. Il montre également comment attacher et animer un simple clip basé sur les fonctions de ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") et les contraintes de ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"). L'utilisation des ![](/images/Bound-expression.svg) [expressions](/Expressions/fr "Expressions/fr") comme décrit ci-dessous nécessite FreeCAD **V 0.21 ou plus**.

### Esquisse de base

En général, un objet est modélisé dans un environnement fermé. Plus tard, la partie mobile doit être retournée de 180° pour être moulée à l'état ouvert.  
La bande pliable est représentée par un arc de cercle pour l'état fermé et par une ligne droite pour l'état ouvert, les deux ayant le même point de départ.  
Le point médian d'une ligne reliant les deux extrémités indique la position de l'axe de retournement, qui est normal au plan de l'esquisse. (Il est placé sur l'origine de l'esquisse afin que l'axe global normal au plan de l'esquisse puisse être utilisé comme axe de basculement).

(Quelques explications supplémentaires cachées et une description du flux de travail peuvent être développées ici. -->

![](/images/Sketcher_ExampleHinge-01.gif)

Esquisse maître et charnière du film final animé (cliquez sur l'image si l'animation s'est arrêtée après quelques répétitions)

Pour un demi-cercle, la longueur de l'arc est le rayon multiplié par Pi (_l = r \* Pi_). Le rayon est appelé NeutralRadius et la ligne est appelée DevelopedLength. Une expression pour la longueur développée relie les deux valeurs : `.Constraints.NeutralRadius * pi`

: Dans la même esquisse, une expression commence par un `.` suivi de ValueType.ValueName pour traiter une autre valeur.

### Esquisse intermédiaire

L'arc de cette charnière film a une longueur constante et un rayon variable. Une entrée est le NeutralRadius de l'esquisse de base. Pour l'avoir à portée de main dans cette esquisse, il est lié en tant que ![](/images/Sketcher_External.svg) [géométrie externe](/Sketcher_External/fr "Sketcher External/fr") ayant une dimension de référence appelée ReferenceRadius.

Un quartier de géométrie de construction affiche la relation entre l'arc et le rayon pour un angle donné.  
**InputLength = ReferenceRadius \* Pi**  
et  
**ArcLength = DynamicRadius \* Pi \* ArcAngle / 180°**  
de longueur constante se traduit par :  
**ReferenceRadius \* Pi = DynamicRadius \* Pi \* ArcAngle / 180°**  
et avec Pi éliminé, nous obtenons :  
**ReferenceRadius = DynamicRadius \* ArcAngle / 180°** or **DynamicRadius = ReferenceRadius \* 180° / ArcAngle**

: L'![](/images/Bound-expression.svg) [expression](/Expressions/fr "Expressions/fr") pour la valeur DynamicRadius : `.Constraints.ReferenceRadius * 180 ° / .Constraints.ArcAngle`

Une charnière film étant généralement symétrique, un autre arc avec le même point central, appelé HalfArc, est utilisé pour la sortie et représente une moitié de l'arc de la charnière.

: L'![](/images/Bound-expression.svg) [expression](/Expressions/fr "Expressions/fr") pour la valeur HalfArc : `.Constraints.ArcAngle / 2`

![](/images/Sketcher_ExampleHinge-02.png)

Esquisse intermédiaire montrant le DynamicRadius de l'arc de la charnière de 4 (mm) à un angle donné de 45° (et le demi-arc pour la sortie)

### Esquisse de la charnière film

Cette esquisse définit l'épaisseur et la géométrie adjacente de la charnière film. Par conséquent, nous chargeons le demi-arc de l'esquisse intermédiaire en tant que géométrie externe afin de l'utiliser comme base pour la partie film. (une fraction de 180° dans ce cas)

Cette charnière film est destinée à maintenir les parties connectées en contact l'une avec l'autre lorsqu'elles sont fermées. Pour ce faire, il suffit de calculer un arc de cercle de la longueur nécessaire, puis de créer une bande d'épaisseur constante et enfin d'appliquer des filets à l'endroit où la bande rencontre les moitiés de l'objet. La dernière étape raccourcit d'une certaine manière la boucle, mais dans le monde réel, ce n'est pas un problème, car l'arc ne sera jamais circulaire et les filets ont donc une influence sur la courbure de l'arc, mais pas sur sa fonctionnalité.

![](/images/Sketcher_ExampleHinge-03.png)

Esquisse de la charnière montrant le contour de la charnière sur la base de la géométrie extérieure à partir du demi-arc de cercle de l'esquisse intermédiaire.

![](/images/Sketcher_ExampleHinge-04.png)
![](/images/Sketcher_ExampleHinge-05.png)

A gauche : ![](/images/PartDesign_Pad.svg) [protrusion](/PartDesign_Pad "PartDesign Pad") de la demi-charnière avec esquisse visible. A droite : demi-charnière avec ajout de ![](/images/PartDesign_Fillet.svg) [congés](/PartDesign_Fillet/fr "PartDesign Fillet/fr")

![](/images/Sketcher_ExampleHinge-06.png) ![](/images/Button_right.svg)
![](/images/Sketcher_ExampleHinge-07.png)

Demi-charnière avec plan de symétrie sélectionné → charnière film [symétrisée](/PartDesign_Mirrored/fr "PartDesign Mirrored/fr")

Conseil : ![](/images/Part_Mirror.svg) [Part Objet en miroir](/Part_Mirror/fr "Part Mirror/fr") n'accepte que les trois plans de base et ne peut donc pas être utilisé dans ce cas.

: (Rétrospectivement, il était judicieux de commencer cet exemple avec la combinaison de PartDesign et de Sketcher).

Enfin, deux paramètres définissent la taille de la charnière-film :

- le NeutralRadius de l'esquisse de base
- la valeur de l'épaisseur de l'esquisse de la charnière-film

### Fléchir la charnière film

L'angle de courbure est contrôlé par la contrainte ArcAngle de l'esquisse intermédiaire et peut être modifié dans son éditeur de propriétés.  
Mais nous sommes de vrais concepteurs et nous avons nommé correctement les contraintes et les dimensions de nos esquisses, ce qui nous permet de contrôler l'angle de pliage via Python.  
Quelques lignes de code de base à intégrer dans un contexte d'interface graphique pourraient ressembler à ceci :

```
doc=App.ActiveDocument
sketch=doc.getObjectsByLabel('IntermediateSketch')[0]
 ...
sketch.getDatum('ArcAngle')
 ...
sketch.setDatum('ArcAngle',App.Units.Quantity('50.000000 deg'))
doc.recompute(None,True,True)

```

Une brève explication :

- `doc = App.ActiveDocument` : pour adresser le document actif par un alias appelé **doc**
- `sketch = doc.getObjectsByLabel('IntermediateSketch')[0]` : pour adresser l'esquisse concernée par l'alias **sketch**.
- : La méthode **getObjectsByLabel()** renvoie une liste d'objets et nous devons suffixer l'index `0` pour choisir le premier objet de la liste. (Nous ne nous attendons pas à ce qu'un autre objet ait le même label et nous n'avons donc pas à nous préoccuper des autres éléments de la liste).
- `sketch.getDatum('ArcAngle')` : renvoie la valeur en cours de la contrainte dimensionnelle **ArcAngle** (dans la vue rapport).
- `sketch.setDatum('ArcAngle', App.Units.Quantity('50.0 deg'))` : définit la valeur de **ArcAngle** à `50°`
- `doc.recompute(None,True,True)` : pour mettre à jour l'ensemble du document afin d'afficher également les modifications de la géométrie dépendante.

### Connexion de la géométrie

Les deux moitiés du truc du clip attendent d'être fixées à la charnière, l'une du côté statique et l'autre du côté mobile.

![](/images/Sketcher_ExampleHinge-08.png)

Deux moitiés d'un simple clip

Le côté statique est facile :

1. Activez le corps et ajustez les propriétés de position et d'orientation dans l'éditeur de propriétés jusqu'à ce qu'il corresponde à la charnière du film.
2. Activez le corps de la charnière.
3. Sélectionnez l'![](/images/PartDesign_Boolean.svg) [opération booléenne](/PartDesign_Boolean/fr "PartDesign Boolean/fr") avec l'option (par défaut) Union.
4. Dans la boîte de dialogue, appuyez sur le bouton Ajouter un corps.
5. Sélectionnez le **corps** de la moitié statique du clip.
6. Appuyez sur OK pour terminer et fermer la boîte de dialogue.

![](/images/Sketcher_ExampleHinge-09.png) ![](/images/Button_right.svg)
![](/images/Sketcher_ExampleHinge-10.png)

Charnière film et moitié statique en position de modélisation → charnière film avec la moitié statique repositionnée et [unie](/PartDesign_Boolean/fr "PartDesign Boolean/fr")

Mais le côté mobile est différent : la moitié concernée de la géométrie du clip doit se déplacer dans la bonne position avant que le (re)calcul d'une opération Union ne commence.

A ce stade, il me manque une fonction "Attachment with offset" comme celle d'Assembly3 pour attacher la géométrie du clip à l'une des faces mobiles. Mais après quelques expériences et ajustements, j'ai trouvé une solution :

- Les conteneurs ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr") et ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") ne sont pas pris en charge par ![](/images/Part_EditAttachment.svg) [Part Ancrage](/Part_EditAttachment/fr#Limitations "Part EditAttachment/fr").

Bien qu'il soit possible d'utiliser l'ancrage pour les aligner, l'ancrage ne sera pas paramétriquement lié.

- L'ancrage peut être appliqué à une fonction PartDesign. Cet élément et les éléments qui en dépendent sont repositionnés en fonction de la géométrie de base. Mais !
  - Les éléments indépendants de PartDesign ne bougeront pas, ce qui modifiera la forme résultante et la cassera à la fin.
  - Il est conseillé de garder les fonctions indépendantes pour éviter les impacts dus au [problème de dénomination topologique](/Topological_naming_problem "Topological naming problem").
- ![](/images/PartDesign_Clone.svg) [PartDesign Clone](/PartDesign_Clone/fr "PartDesign Clone/fr") crée un corps avec une seule fonction qui peut être utilisée avec l'ancrage.

Dans cette idée, un flux de travail pourrait ressembler à ce qui suit :

1. Sélectionner le corps de la moitié mobile.
2. Utilisez la commande ![](/images/PartDesign_Clone.svg) [Clone](/PartDesign_Clone/fr "PartDesign Clone/fr").
3. Dans le nouveau corps, sélectionnez l'objet Clone dans la vue en arborescence.
4. Utilisez la commande ![](/images/Part_EditAttachment.svg) [Part Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr") pour ajouter des propriétés d'ancrage à l'objet Clone.
5. La boîte de dialogue Ancrage s'ouvre.
   - Sélectionnez un sommet pour l'origine.
   - Sélectionnez une arête pour la première direction.
   - Sélectionnez une arête pour la deuxième direction.
   - Examinez les modes d'ancrage pour trouver celui qui convient le mieux.
   - Ajustez les valeurs de rotation et de coordonnées jusqu'à ce que la géométrie soit à nouveau en position de modélisation.
6. Appuyez sur OK pour fermer la boîte de dialogue.
7. Avec le corps de la charnière toujours actif, sélectionnez l'![](/images/PartDesign_Boolean.svg) [opération booléenne](/PartDesign_Boolean/fr "PartDesign Boolean/fr").
8. Dans la boîte de dialogue, cliquez sur le bouton Ajouter un corps.
9. Sélectionnez le corps de la moitié mobile.
10. Appuyez sur OK pour terminer et fermer la boîte de dialogue.

![](/images/Sketcher_ExampleHinge-14.png)

La moitié mobile sera ![](/images/Part_EditAttachment.svg) [ancrée](/Part_EditAttachment/fr "Part EditAttachment/fr") à un coin du côté de la charnière mobile (Mode associé OXZ : sommet, arête, arête)

Rétrospectivement, il aurait été plus judicieux de fournir la géométrie d'ancrage avec l'esquisse intermédiaire afin d'éviter une autre source de [problème de dénomination topologique](/Topological_naming_problem "Topological naming problem").

![](/images/Sketcher_ExampleHinge-11.png) ![](/images/Button_right.svg)
![](/images/Sketcher_ExampleHinge-12.png)

Le clip jusqu'à présent et la moitié mobile en position de modélisation → clip terminé avec la moitié mobile [ancrée](/Part_EditAttachment/fr "Part EditAttachment/fr") et [unie](/PartDesign_Boolean/fr "PartDesign Boolean/fr")

Le résultat devrait être un seul clip solide, qui peut être fermé et ouvert en changeant l'ArcAngle de la charnière film. Angles autorisés : 0,1° à 180°, la section film ne doit pas devenir droite et, plus que fermé cela n'a pas de sens. (À 180°, l'objet peut être fusionné dans les zones tangentes ou de chevauchement, mais un petit écart supplémentaire peut être utile si cela n'est pas acceptable).

![](/images/Sketcher_ExampleHinge-13.png) ![](/images/Button_right.svg)
![](/images/Sketcher_ExampleHinge-15.png) ![](/images/Button_right.svg)
![](/images/Sketcher_ExampleHinge-16.png)

Clip presque fermé → Clip à moitié fermé → Clip prêt à être moulé

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Examples/fr&oldid=1445176>"
