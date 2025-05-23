---
title: Part Filtre de composé
---
|  |
| --- |
| Part Filtre de composé |
| Emplacement du menu |
| Part → Composés → Filtre de composé |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| *Aucun* |
|  |

![](/images/CompoundFilter.png)

## Description

Le Filtre de composé peut être utilisé pour extraire chacune des parties du résultat par exemple, une opération [Part Scinder](/Part_Slice/fr "Part Slice/fr") avec laquelle vous avez divisé un objet.

Il peut extraire les formes enfants à l'aide de leurs index, les tester pour détecter les collisions avec la forme du gabarit et les filtrer en fonction de leurs propriétés, telles que la longueur, la surface, le volume.

S'il n'y a qu'une seule forme enfant dans le résultat, la résultat est l'enfant. S'il y a plus d'un enfant à générer, le résultat est un nouveau composé.

## Utilisation

1. Sélectionnez l'objet découpé
2. Appliquez **Part → Composés → Filtre de composé**
3. Sélectionnez l'objet CompoundFilter dans l'arborescence
4. Dans l'onglet Propriétés, définissez "Type de filtre" sur "éléments spécifiques".
5. Définissez les éléments à extraire
   1. Pour une seule pièce, il s’agit d’un nombre commençant par 0. Si vous souhaitez extraire le premier élément, entrez 0 dans ce champ, 1 pour l’élément suivant ...
   2. Si vous voulez extraire plus d’une pièce à la fois, séparez les nombres par ";", par ex. une valeur de "0; 2" extraira le premier et le troisième élément
   3. Le cas général - qui couvre également les possibilités mentionnées ci-dessus - est une liste de plages d’index, spécifiées en notation Python, mais sans crochets. Les plages peuvent être chaînées avec un point-virgule. Par exemple:
      * 7:10 prend les enfants des index 7, 8 et 9 (les index sont basés sur zéro; les index range-to sont exclus).
      * 1;2  prennent les enfants 1 et 2 (la première plage est l'enfant 1, la deuxième plage est l'enfant 2, les plages jointes par un point-virgule)
      * 0;-1 prend le premier enfant (indice 0) et le dernier (indice -1 signifie le dernier enfant, -2 signifie l'avant-dernier et ainsi de suite)
      * 1:  prend tout sauf le premier enfant (l'index manquant signifie "jusqu'au bout").
      * ::-1 prend tous les enfants dans l'ordre inverse
      * ::2  prennent tous les enfants impairs indexés, c'est-à-dire les indices 1,3,5, ..., qui sont les éléments 2,4,6, ...
      * :;:  répéter le composé en entrée deux fois
6. Si vous voulez extraire une autre pièce, sélectionnez à nouveau l'objet découpé. Il est maintenant placé sous le CompoundFilter dans l’arborescence
7. Répétez la procédure de sélection ci-dessus. La tranche et ses sous-éléments seront affichés sous les deux CompoundFilters. Ils ne sont bien sûr pas répétés dans le modèle. Un moyen très rapide d’extraire une autre pièce est de copier le CompoundFilter. Mais **attention** : on vous demande également si vous voulez copier les éléments sous CompoundFilter, auxquels vous devez répondre par *non*, vous ne voulez pas les copier, vous ne faites que les référencer.

## Propriétés

* Données**Base** : objet à filtrer.
* Données**Filter Type** options sélectionnables :
  + bypass : pas de filtre. Le composé d'origine est sorti, inchangé.
  + specific items : extraire les éléments listés dans la propriété "items"
  + collision-pass : extraire les morceaux qui se touchent ou se croisent avec la forme "gabarit".
  + window-volume (par défaut) : extraire toutes les pièces dont le volume est compris entre "Window From" et "Window To", où 100% est la pièce la plus grosse et l'objet non découpé. La valeur de 100% est une valeur de référence qui peut être remplacée par "OverrideMaxVal".
  + window-area : identique à window-volume où la zone découpée détermine la sélection au lieu du volume.
  + window-length : identique à window-volume où la longueur des bords détermine la sélection à la place du volume.
  + window-distance : extraire les enfants dont la distance à la forme "Stencil" est dans la fenêtre de valeur, définie par les propriétés "Window From", "Window To", "Override Max Val".
* Données**Invert** : s'il est défini sur true, la liste décrite ci-dessus est exclue au lieu d'être incluse.
* Données**Override Max Val** : la plage de la fenêtre de valeurs est définie en pourcentage de la valeur maximale. La valeur maximale est calculée en fonction des règles suivantes :
  + si "OverrideMaxVal" est différent de zéro, utilisez-le.
  + sinon, si le lien "Stencil" est fourni, il calcule la valeur correspondante de la forme du gabarit (ne s'applique pas à la distance de fenêtre "FilterType")
  + sinon, prenez la valeur maximale pour les enfants du composé à filtrer.
* Données**Stencil** : lien vers une forme de gabarit. Pour les types de filtres de type collision-pass et fenêtre-distance, le gabarit est l'objet contre lequel tester la collision/distance. Pour les autres types de filtres "window-\*\*\*", le gabarit sert à fournir une valeur de référence pour les pourcentages de fenêtre (remplacement de la valeur maximale). Dans tous les autres modes, "Stencil" est ignoré.
* Données**Window From** : pourcentage de seuil supérieur pour la sélection de pièces, 100% par rapport à la pièce la plus grande.
* Données**Window To** : pourcentage de seuil inférieur pour la sélection de pièces, 100% est relatif à la plus grande pièce.
* Données**items** : liste ou plage d'éléments à sélectionner si le type de filtre est "éléments spécifiques".

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_CompoundFilter/fr&oldid=1518735>"