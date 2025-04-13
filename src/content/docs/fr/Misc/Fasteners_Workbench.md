---
title: Atelier Fasteners
---

![](/images/Fasteners_workbench_icon.svg)

Icône de l'atelier externe Fasteners

## Introduction

L'![](/images/Fasteners_workbench_icon.svg) atelier Fasteners est un [atelier externe](/External_workbenches/fr "External workbenches/fr") qui permet d'ajouter diverses fixations aux pièces.

![](/images/Fasteners_Toolbars.png)

La barre d'outils unique optionnelle de l'atelier.  
Les fixations à dimensions métriques ont des icônes orange.  
Les fixations dont les dimensions sont en pouces ont des icônes vertes.

## Installation

1. Installer l'atelier Fasteners via le ![](/images/AddonManager.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Pour une installation manuelle, voir [Installer des ateliers supplémentaires](/Installing_more_workbenches/fr "Installing more workbenches/fr").
2. Redémarrer FreeCAD.
3. Créer un nouveau document.
4. Sélectionner l'![](/images/Fasteners_workbench_icon.svg) atelier Fasteners dans le [sélecteur d'atelier](/Std_Workbench/fr "Std Workbench/fr").
5. Vous pouvez modifier la barre d'outils et la disposition du menu :
   1. Allez à : **Édition → Préférences... → Fasteners → General settings**.
   2. Sélectionner l'une des options disponibles de **Groupement des icônes de vis** :
      - **Rien** : toutes les fixations apparaissent dans une seule barre d'outils. Pour voir tous les boutons disponibles, utilisez le bouton >> pour la développer.
      - **Barres d'outils séparées** : les fixations sont regroupées dans plusieurs barres d'outils. Il s'agit de la disposition par défaut.
      - **Boutons déroulants** : les fixations sont regroupées dans des barres d'outils avec des boutons déroulants.
   3. Vous pouvez décocher une ou plusieurs options du panneau **Les normes de fixation sont indiquées dans les barres d'outils**. Les options de standard non cochées sont toujours disponibles dans le menu.
   4. Redémarrez FreeCAD.

## Utilisation

Les fixations peuvent être attachées ou non attachées. Les fixations attachées ont une Données**Base Object**, un bord circulaire, et leur Données**Placement** est dynamiquement lié à cet objet. La commande ![](/images/Fasteners_Move.svg) [Fasteners Déplacer](/Fasteners_Move/fr "Fasteners Move/fr") peut être utilisée pour fixer ou détacher une fixation.

### Fixations non attachées

1. Sélectionner la fixation souhaitée en cliquant sur son bouton ou en la choisissant dans le menu.
2. Une fixation est créée à l'origine.
3. Vous pouvez modifier les dimensions et les autres propriétés de la fixation :
   1. Sélectionner la fixation.
   2. Aller dans l'onglet **Data** de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").
   3. Modifier les propriétés requises.

### Fixations attachées

![](/images/Fasteners_Attached_Selected.png) ![](/images/Fasteners_Attached_Created.png)

À gauche, deux bords circulaires sélectionnés. À droite, les fixations attachées.

1. Sélectionner des trous comme trous de taraudage ou trous de passage en sélectionnant ![](/images/Fasteners_MatchTypeInner.svg) [Fasteners Adapter pour le trou taraudé](/Fasteners_MatchTypeInner/fr "Fasteners MatchTypeInner/fr") ou ![](/images/Fasteners_MatchTypeOuter.svg) [Fasteners Adapter pour le trou de passage](/Fasteners_MatchTypeOuter/fr "Fasteners MatchTypeOuter/fr") respectivement (non utilisé pour les vis à tête fraisée).
2. Sélectionner une ou plusieurs arêtes circulaires et/ou faces avec des arêtes circulaires. Pour les vis fraisées, le bord supérieur du trou chanfreiné doit être sélectionné.
3. Sélectionner la fixation souhaitée en cliquant sur son bouton ou en la choisissant dans le menu.
4. Une fixation est attachée à chacun de ses points sélectionnés.
5. Les dimensions par défaut de chaque fixation dépendent du rayon du bord circulaire sur lequel elle est fixée. Les vis à tête fraisée sont assorties au diamètre de leur tête, les autres fixations sont assorties au diamètre de leur tige.
6. Vous pouvez également modifier les dimensions et les autres propriétés des fixations. Voir ci-dessus.
7. Les fixations qui apparaissent à l'envers peuvent être inversées avec la commande ![](/images/Fasteners_Flip.svg) [Inverser la fixation](/Fasteners_Flip/fr "Fasteners Flip/fr") ou en modifiant leur propriété Données**Invert**.
8. Vous pouvez changer la propriété Données**Offset** pour créer un espace entre les fixations et les bords auxquels elles sont attachées.

## Remarques

- Pour générer des filetages, la propriété Données**Thread** d'une fixation doit être changée en `true`. La génération de filetages est coûteuse. Les recalculs prennent beaucoup plus de temps s'il y a beaucoup de fixations avec des filetages dans un document.
- La propriété Données**Invert** et la propriété Données**Offset** sont ignorées pour les fixations non attachées.

## Commandes

- ![](/images/Fasteners_Flip.svg) [Inverser la fixation](/Fasteners_Flip/fr "Fasteners Flip/fr") : inverse l'orientation des fixations attachées.

- ![](/images/Fasteners_Move.svg) [Déplacer la fixation](/Fasteners_Move/fr "Fasteners Move/fr") : déplace et fixe une fixation sur un bord circulaire. Peut également être utilisé pour détacher une fixation.

- ![](/images/Fasteners_Simplify.svg) [Simplifier la forme](/Fasteners_Simplify/fr "Fasteners Simplify/fr") : crée des copies non paramétriques des fixations.

- ![](/images/Fasteners_MatchTypeInner.svg) [Adapter pour le trou taraudé](/Fasteners_MatchTypeInner/fr "Fasteners MatchTypeInner/fr") : prend les bords circulaires comme des trous à fileter lorsque de nouvelles fixations y sont attachées.

- ![](/images/Fasteners_MatchTypeOuter.svg) [Adapter pour le trou de passage](/Fasteners_MatchTypeOuter/fr "Fasteners MatchTypeOuter/fr") : prend les bords circulaires comme des trous de passage lorsque de nouvelles fixations y sont attachées.

- ![](/images/Fasteners_BOM.svg) [Nomenclature](/Fasteners_BOM/fr "Fasteners BOM/fr") : crée une feuille de calcul avec une nomenclature pour les fixations du document.

- ![](/images/Fasteners_ScrewCalculator.svg) [Calculateur de trous de vis](/Fasteners_ScrewCalculator/fr "Fasteners ScrewCalculator/fr") : affiche une calculatrice pour déterminer la taille des trous de vis.

- ![](/images/Fasteners_ChangeParameters.svg) [Paramètres de la fixation](/Fasteners_ChangeParameters/fr "Fasteners ChangeParameters/fr") : change les paramètres des fixations.

## Fixations

Les fixations avec des dimensions métriques ont des icônes orange. Les fixations aux dimensions en pouces ont des icônes vertes.

### Vis et boulons à tête hexagonale

- ![](/images/Fasteners_ASMEB18.2.1.6.svg) **ASME B18.2.1.6** Vis à tête hexagonale UNC.

- ![](/images/Fasteners_ASMEB18.2.1.8.svg) **ASME B18.2.1.8** Vis à tête hexagonale UNC avec bride.

- ![](/images/Fasteners_DIN571.svg) **DIN 571** Tirefond vis à bois à tête hexagonale.

- ![](/images/Fasteners_ISO4017.svg) **DIN 933** Vis à tête hexagonale.

- ![](/images/Fasteners_ISO4017.svg) **DIN 961** Vis à tête hexagonale.

- ![](/images/Fasteners_EN1662.svg) **EN 1662** Boulon à tête hexagonale avec embase, série étroite.

- ![](/images/Fasteners_EN1665.svg) **EN 1665** Boulon à tête hexagonale avec embase, série large.

- ![](/images/Fasteners_ISO4014.svg) **ISO 4014** Boulon à tête hexagonale. _Grades A et B._

- ![](/images/Fasteners_ISO4014.svg) **ISO 4015** Boulon à tête hexagonale avec tige réduite.

- ![](/images/Fasteners_ISO4014.svg) **ISO 4016** Boulon à tête hexagonale. _Grade C._

- ![](/images/Fasteners_ISO4017.svg) **ISO 4017** Vis à tête hexagonale. _Grades A et B._

- ![](/images/Fasteners_ISO4017.svg) **ISO 4018** Vis à tête hexagonale. _Grade C._

- ![](/images/Fasteners_EN1662.svg) **ISO 4162** Boulon hexagonal à embase cylindro-tronconique, série étroite. _Grade A avec entraînement de grade B._

- ![](/images/Fasteners_ISO4017.svg) **ISO 8676** Vis à tête hexagonale à filetage métrique à pas fin entièrement filetées. _Grades A et B._

- ![](/images/Fasteners_ISO4014.svg) **ISO 8765** Vis à tête hexagonale partiellement filetées, à pas fin.

- ![](/images/Fasteners_EN1662.svg) **ISO 15071** Vis à tête hexagonale à embase cylindro-tronconique, série étroite. _Grade A_

- ![](/images/Fasteners_EN1662.svg) **ISO 15072** Vis à tête hexagonale à embase cylindro-tronconique, à filetage métrique à pas fin, série étroite. _Grade A._

### Vis à six pans creux

- ![](/images/Fasteners_ASMEB18.3.1A.svg) **ASME B18.3.1A** Vis à tête cylindrique à six pans creux UNC.

- ![](/images/Fasteners_ASMEB18.3.1G.svg) **ASME B18.3.1G** Vis à tête cylindrique à six pans creux UNC à tête basse.

- ![](/images/Fasteners_ASMEB18.3.2.svg) **ASME B18.3.2** Vis à tête fraisée à six pans creux UNC.

- ![](/images/Fasteners_ASMEB18.3.3A.svg) **ASME B18.3.3A** Vis à tête ronde à six pans creux UNC.

- ![](/images/Fasteners_ASMEB18.3.3B.svg) **ASME B18.3.3B** Vis à tête ronde à six pans creux UNC avec bride.

- ![](/images/Fasteners_ASMEB18.3.4.svg) **ASME B18.3.4** Vis à épaulement à tête creuse hexagonale UNC.

- ![](/images/Fasteners_DIN6912.svg) **DIN 6912** Vis à tête cylindrique à six pans creux à tête basse avec téton de sécurité.

- ![](/images/Fasteners_DIN7984.svg) **DIN 7984** Vis à tête cylindrique à six pans creux à tête basse.

- ![](/images/Fasteners_ISO2936.svg) **ISO 2936** Clé pour vis à six pans creux.

- ![](/images/Fasteners_ISO4762.svg) **ISO 4762** Vis à tête cylindrique à six pans creux.

- ![](/images/Fasteners_ISO7379.svg) **ISO 7379** Vis à épaulement à six pans creux.

- ![](/images/Fasteners_ISO7380.svg) **ISO 7380-1** Vis à tête ronde à six pans creux.

- ![](/images/Fasteners_ISO7380-2.svg) **ISO 7380-2** Vis à tête ronde à six pans creux avec embase.

- ![](/images/Fasteners_ISO10642.svg) **ISO 10642** Vis à tête fraisée à six pans creux.

### Vis à tête creuse torx

- ![](/images/Fasteners_ISO14579.svg) **ISO 14579** Vis à métaux tête cylindrique torx.

- ![](/images/Fasteners_ISO14580.svg) **ISO 14580** Vis à métaux tête cylindrique basse torx.

- ![](/images/Fasteners_ISO14581.svg) **ISO 14581** Vis à tête fraisée réduite à six lobes internes.

- ![](/images/Fasteners_ISO14582.svg) **ISO 14582** Vis à tête fraisée à six pans creux, tête haute.

- ![](/images/Fasteners_ISO14583.svg) **ISO 14583** Vis à tête cylindrique à six pans creux.

- ![](/images/Fasteners_ISO14584.svg) **ISO 14584** Vis à tête fraisée à six pans creux.

### Vis à tête fendue

- ![](/images/Fasteners_ASMEB18.6.1.2.svg) **ASME B18.6.1.2** Vis à bois à tête fraisée plate et fendue.

- ![](/images/Fasteners_ASMEB18.6.1.4.svg) **ASME B18.6.1.4** Vis à bois à tête fraisée ovale et fendue.

- ![](/images/Fasteners_ASMEB18.6.3.1A.svg) **ASME B18.6.3.1A** Vis à tête plate fendue et fraisée UNC.

- ![](/images/Fasteners_ASMEB18.6.3.4A.svg) **ASME B18.6.3.4A** Vis à tête fraisée ovale et fendue UNC.

- ![](/images/Fasteners_ASMEB18.6.3.9A.svg) **ASME B18.6.3.9A** Vis à tête cylindrique fendue UNC.

- ![](/images/Fasteners_ASMEB18.6.3.10A.svg) **ASME B18.6.3.10A** Vis à tête cylindrique ovale fendue UNC.

- ![](/images/Fasteners_ASMEB18.6.3.12A.svg) **ASME B18.6.3.12A** Vis à tête bombée fendue UNC.

- ![](/images/Fasteners_ASMEB18.6.3.16A.svg) **ASME B18.6.3.16A** Vis à tête ronde fendue UNC.

- ![](/images/Fasteners_ISO1207.svg) **DIN 84 (remplacée par ISO 1207)** Vis à tête cylindrique fendue. _Grade A._

- ![](/images/Fasteners_DIN96.svg) **DIN 96** Vis à bois à tête demi-ronde fendue.

- ![](/images/Fasteners_DIN96.svg) **GOST 1144-1** Vis à bois à tête demi-ronde fendue.

- ![](/images/Fasteners_DIN96.svg) **GOST 1144-2** Vis à bois à tête demi-ronde fendue.

- ![](/images/Fasteners_ISO1207.svg) **ISO 1207** Vis à tête cylindrique fendue. _Grade A_.

- ![](/images/Fasteners_ISO1580.svg) **ISO 1580** Vis à tête cylindrique fendue. _Grade A_.

- ![](/images/Fasteners_ISO2009.svg) **ISO 2009** Vis à tête plate fendue et fraisée. _Grade A_.

- ![](/images/Fasteners_ISO2010.svg) **ISO 2010** Vis à tête fraisée surélevée fendue. _Grade A_.

### Vis type H à tête cruciforme

- ![](/images/Fasteners_ASMEB18.6.1.3.svg) **ASME B18.6.1.3** Vis à bois à tête fraisée plate.

- ![](/images/Fasteners_ASMEB18.6.1.5.svg) **ASME B18.6.1.5** Vis à bois à tête fraisée ovale.

- ![](/images/Fasteners_ASMEB18.6.3.1B.svg) **ASME B18.6.3.1B** Vis à tête fraisée plate UNC.

- ![](/images/Fasteners_ASMEB18.6.3.4B.svg) **ASME B18.6.3.4B** Vis à tête fraisée ovale UNC.

- ![](/images/Fasteners_ASMEB18.6.3.9B.svg) **ASME B18.6.3.9B** Vis à tête cylindrique UNC.

- ![](/images/Fasteners_ASMEB18.6.3.10B.svg) **ASME B18.6.3.10B** Vis à tête cylindrique bombée UNC.

- ![](/images/Fasteners_ASMEB18.6.3.12C.svg) **ASME B18.6.3.12C** Vis à tête bombée UNC.

- ![](/images/Fasteners_ASMEB18.6.3.16B.svg) **ASME B18.6.3.16B** Vis à tête ronde UNC.

- ![](/images/Fasteners_DIN967.svg) **DIN 967** Vis à tête cylindrique avec collerette.

- ![](/images/Fasteners_DIN7996.svg) **DIN 7996** Vis à bois à tête cylindrique.

- ![](/images/Fasteners_DIN7996.svg) **GOST 1144-3** Vis à bois à tête cylindrique.

- ![](/images/Fasteners_DIN7996.svg) **GOST 1144-4** Vis à bois à tête cylindrique.

- ![](/images/Fasteners_ISO7045.svg) **ISO 7045** Vis à tête cylindrique bombée. _Grade A._

- ![](/images/Fasteners_ISO7046.svg) **ISO 7046** Vis à tête plate fraisée. _Grade A._

- ![](/images/Fasteners_ISO7047.svg) **ISO 7047** Vis à tête fraisée surélevée. _Grade A._

- ![](/images/Fasteners_ISO7048.svg) **ISO 7048** Vis à tête cylindrique bombée réduite.

- ![](/images/Fasteners_DIN7996.svg) **ISO 7049-C** Vis autotaraudeuses à tête cylindrique à pointe conique.

- ![](/images/Fasteners_ISO7049-F.svg) **ISO 7049-F** Vis autotaraudeuses à tête cylindrique avec pointe plate.

- ![](/images/Fasteners_DIN7996.svg) **ISO 7049-R** Vis autotaraudeuses à tête cylindrique avec pointe arrondie.

### Autres têtes de boulon

- ![](/images/Fasteners_ASMEB18.2.1.1.svg) **ASME B18.2.1.1** Boulon à tête carrée UNC.

- ![](/images/Fasteners_ASMEB18.5.2.svg) **ASME B18.5** Boulon à tête carrée - boulon de carrosserie.

- ![](/images/Fasteners_DIN478.svg) **DIN 478** Boulon à tête carrée avec collerette.

- ![](/images/Fasteners_DIN603.svg) **DIN 603** Boulon à tête carrée - boulon de carrosserie.

- ![](/images/Fasteners_ISO2342.svg) **ISO 2342** Vis sans tête fendue, à fût.

### Vis de réglage

- ![](/images/Fasteners_ASMEB18.3.5A.svg) **ASME B18.3.5A** Vis à tête hexagonale UNC à bout plat.

- ![](/images/Fasteners_ASMEB18.3.5B.svg) **ASME B18.3.5B** Vis à tête hexagonale UNC à bout tronconique.

- ![](/images/Fasteners_ASMEB18.3.5C.svg) **ASME B18.3.5C** Vis sans tête à six pans creux UNC à téton.

- ![](/images/Fasteners_ASMEB18.3.5D.svg) **ASME B18.3.5D** Vis à tête hexagonale UNC à bout cuvette.

- ![](/images/Fasteners_ISO4026.svg) **ISO 4026** Vis sans tête à six pans creux à bout plat.

- ![](/images/Fasteners_ISO4027.svg) **ISO 4027** Vis sans tête à six pans creux à bout tronconique.

- ![](/images/Fasteners_ISO4028.svg) **ISO 4028** Vis sans tête à six pans creux à téton cylindrique.

- ![](/images/Fasteners_ISO4029.svg) **ISO 4029** Vis sans tête à six pans creux à bout cuvette.

- ![](/images/Fasteners_ISO4026.svg) **ISO 4766** Vis à tête fendue à pointe plate.

- ![](/images/Fasteners_ISO4027.svg) **ISO 7434** Vis à tête fendue à pointe conique.

- ![](/images/Fasteners_ISO4028.svg) **ISO 7435** Vis à tête fendue à pointe longue.

- ![](/images/Fasteners_ISO4029.svg) **ISO 7436** Vis à tête fendue à bout cuvette.

### Vis moletées

- ![](/images/Fasteners_DIN464.svg) **DIN 464** Vis moletée épaulée, forme haute.

- ![](/images/Fasteners_DIN465.svg) **DIN 465** Vis moletée épaulée fendue, forme haute.

- ![](/images/Fasteners_DIN653.svg) **DIN 653** Vis moletée épaulée, forme basse.

### Vis de terre

- ![](/images/Fasteners_GroundScrew.svg) **Vis de terre** Vis de terre à plaque ronde.

### Écrous

- ![](/images/Fasteners_ASMEB18.2.2.1A.svg) **ASME B18.2.2.1A** Écrou hexagonal filetage UNC.

- ![](/images/Fasteners_ASMEB18.2.2.1B.svg) **ASME B18.2.2.1B** Écrou carré filetage UNC.

- ![](/images/Fasteners_ASMEB18.2.2.2.svg) **ASME 18.2.2.2** Écrou carré UNC.

- ![](/images/Fasteners_ASMEB18.2.2.1A.svg) **ASME B18.2.2.4A** Écrou hexagonal UNC.

- ![](/images/Fasteners_ASMEB18.2.2.4B.svg) **ASME B18.2.2.4B** Écrou mince hexagonal UNC.

- ![](/images/Fasteners_ASMEB18.2.2.5.svg) **ASME 18.2.2.5** Écrou hexagonal à créneaux UNC.

- ![](/images/Fasteners_ASMEB18.2.2.12.svg) **ASME 18.2.2.12** Écrou hexagonal avec embase UNC.

- ![](/images/Fasteners_ASMEB18.2.2.13.svg) **ASME 18.2.2.13** Écrou de rallonge hexagonal UNC.

- ![](/images/Fasteners_ASMEB18.6.9A.svg) **ASME 18.6.9A** Écrou à oreilles, type A.

- ![](/images/Fasteners_DIN315.svg) **DIN 315** Écrou à oreilles.

- ![](/images/Fasteners_DIN557.svg) **DIN 557** Écrou carré.

- ![](/images/Fasteners_DIN562.svg) **DIN 562** Écrou carré.

- ![](/images/Fasteners_DIN917.svg) **DIN 917** Écrou borgne, forme basse.

- ![](/images/Fasteners_DIN928.svg) **DIN 928** Écrou à souder carré

- ![](/images/Fasteners_DIN929.svg) **DIN 929** Écrou hexagonal à souder.

- ![](/images/Fasteners_ISO4032.svg) **DIN 934 (remplacé par ISO 4035 et ISO 8673)** Écrou mince hexagonal, chanfreiné. _Grades A et B._

- ![](/images/Fasteners_DIN935.svg) **DIN 935** Écrou hexagonal à créneaux.

- ![](/images/Fasteners_DIN985.svg) **DIN 985** Écrou Nylstop.

- ![](/images/Fasteners_DIN1587.svg) **DIN 1587** Écrou borgne.

- ![](/images/Fasteners_DIN6330.svg) **DIN 6330** Écrou hexagonal de 1,5d de haut.

- ![](/images/Fasteners_DIN6331.svg) **DIN 6331** Écrou hexagonal avec collier de 1,5d de haut.

- ![](/images/Fasteners_DIN6334.svg) **DIN 6334** Écrou de rallonge hexagonal.

- ![](/images/Fasteners_DIN7967.svg) **DIN 7967** Écrou PAL auto-freinés.

- ![](/images/Fasteners_EN1661.svg) **EN 1661** Écrou hexagonal avec embase.

- ![](/images/Fasteners_DIN1587.svg) **GOST 11860-1** Écrou borgne.

- ![](/images/Fasteners_ISO4032.svg) **ISO 4032** Écrou hexagonal, style 1. _Grades A et B._

- ![](/images/Fasteners_ISO4033.svg) **ISO 4033** Écrou hexagonal, style 2. _Grades A et B._

- ![](/images/Fasteners_ISO4034.svg) **ISO 4034** Écrou hexagonal, style 1.

- ![](/images/Fasteners_ISO4035.svg) **ISO 4035** Écrou mince hexagonal, chanfreiné. _Grades A et B._

- ![](/images/Fasteners_EN1661.svg) **ISO 4161** Écrou hexagonal à embase cylindro-tronconique, style 2, filetage à pas gros.

- ![](/images/Fasteners_DIN985.svg) **ISO 7040** Écrou hexagonal normal autofreiné (à anneau non métallique)

- ![](/images/Fasteners_DIN985.svg) **ISO 7041** Écrou hexagonal autofreiné (à anneau non métallique), style 2.

- ![](/images/Fasteners_ISO7043.svg) **ISO 7043** Écrou hexagonal à embase, autofreiné (à anneau non métallique), style 2.

- ![](/images/Fasteners_ISO7044.svg) **ISO 7044** Écrou hexagonal à embase, autofreiné, tout métal, style 2.

- ![](/images/Fasteners_ISO7719.svg) **ISO 7719** Écrou hexagonal normal autofreiné, tout métal.

- ![](/images/Fasteners_ISO7719.svg) **ISO 7720** Écrou hexagonal autofreiné, tout métal, style 2.

- ![](/images/Fasteners_ISO8673.svg) **ISO 8673** Écrous hexagonaux normaux (style 1) à filetage métrique à pas fin. _Grades A et B._

- ![](/images/Fasteners_ISO8674.svg) **ISO 8674** Écrous hexagonaux hauts (style 2) à filetage métrique à pas fin. _Grades A et B._

- ![](/images/Fasteners_ISO8675.svg) **ISO 8675** Écrous bas hexagonaux chanfreinés (style 0) à filetage métrique à pas fin. _Grades A et B._

- ![](/images/Fasteners_DIN985.svg) **ISO 10511** Écrou hexagonal bas autofreiné (à anneau non métallique).

- ![](/images/Fasteners_DIN985.svg) **ISO 10512** Écrou hexagonal normal autofreiné (à anneau non métallique) à filetage métrique à pas fin.

- ![](/images/Fasteners_ISO7719.svg) **ISO 10513** Écrou hexagonal haut autofreiné, tout métal, à filetage métrique à pas fin.

- ![](/images/Fasteners_EN1661.svg) **ISO 10663** Écrou hexagonal à embase cylindro-tronconique, style 2, filetage à pas fin.

- ![](/images/Fasteners_ISO7043.svg) **ISO 12125** Écrou hexagonal à embase, autofreiné (à anneau non métallique), à filetage métrique à pas fin, style 2.

- ![](/images/Fasteners_ISO7044.svg) **ISO 12126** Écrou hexagonal à embase, autofreiné, tout métal, à filetage métrique à pas fin, style 2.

- ![](/images/Fasteners_ISO21670.svg) **ISO 21670** Écrou hexagonal à souder, à embase plate.

- ![](/images/Fasteners_SAEJ483a1.svg) **SAE J483a 1** Écrou borgne, forme basse.

- ![](/images/Fasteners_SAEJ483a2.svg) **SAE J483a 2** Écrou borgne, forme haute.

### Fixations pour rainures en T

- ![](/images/Fasteners_DIN508.svg) **DIN 508** Écrou pour rainures en T.

- ![](/images/Fasteners_GN505.svg) **GN 505** Écrou dentelé quart de tour à rainure en T.

- ![](/images/Fasteners_GN505.4.svg) **GN 505.4** Boulon à rainure en T dentelée.

- ![](/images/Fasteners_GN506.svg) **GN 506** Tasseaux.

- ![](/images/Fasteners_GN507.svg) **GN 507** Écrou pour rainures en T.

- ![](/images/Fasteners_DIN508.svg) **ISO 299** Écrou pour rainures en T.

### Rondelles

- ![](/images/Fasteners_ASMEB18.21.1.12A.svg) **ASME B18.21.1.12A** Rondelle UN, série étroite.

- ![](/images/Fasteners_ASMEB18.21.1.12B.svg) **ASME B18.21.1.12B** Rondelle UN, série normale.

- ![](/images/Fasteners_ASMEB18.21.1.12C.svg) **ASME B18.21.1.12C** Rondelle UN, série large.

- ![](/images/Fasteners_DIN6319C.svg) **DIN 6319C** Rondelle convexe.

- ![](/images/Fasteners_DIN6319D.svg) **DIN 6319D** Rondelle concave.

- ![](/images/Fasteners_DIN6319G.svg) **DIN 6319G** Rondelle portée sphérique concave.

- ![](/images/Fasteners_DIN6340.svg) **DIN 6340** Rondelle pour dispositifs de serrage.

- ![](/images/Fasteners_ISO7089.svg) **ISO 7089** Rondelle plate, série normale. _Grade A_.

- ![](/images/Fasteners_ISO7090.svg) **ISO 7090** Rondelle plate chanfreinée, série normale. _Grade A_.

- ![](/images/Fasteners_ISO7092.svg) **ISO 7092** Rondelle plate, série étroite. _Grade A_.

- ![](/images/Fasteners_ISO7093-1.svg) **ISO 7093-1** Rondelle plate, série large. _Grade A_.

- ![](/images/Fasteners_ISO7094.svg) **ISO 7094** Rondelle plate, série très large. _Grade C_.

- ![](/images/Fasteners_ISO8738.svg) **ISO 8738** Rondelle plate pour axes d'articulation.

- ![](/images/Fasteners_NFE27-619.svg) **NFE27-619** Rondelle cuvette décoletée.

### Tiges, tarauds et filières

- ![](/images/Fasteners_ScrewTapInch.svg) Taraud en inch.

- ![](/images/Fasteners_ScrewDieInch.svg) Filière en inch.

- ![](/images/Fasteners_ThreadedRodInch.svg) Tige filetée en inch UNC.

- ![](/images/Fasteners_ThreadedRod.svg) Tige filetée métrique DIN 975.

- ![](/images/Fasteners_ScrewTap.svg) Taraud métrique.

- ![](/images/Fasteners_ScrewDie.svg) Filière métrique.

### Inserts

- ![](/images/Fasteners_IUTHeatInsert.svg) Insert thermofixé.

- ![](/images/Fasteners_PEMPressNut.svg) Écrou à sertir.

- ![](/images/Fasteners_PEMStandoff.svg) Entretoise à sertir.

- ![](/images/Fasteners_PEMStud.svg) Goujon à sertir.

- ![](/images/Fasteners_PCBSpacer.svg) Entretoise femelle/femelle pour PCB.

- ![](/images/Fasteners_PCBStandoff.svg) Entretoise filetée femelle/mâle pour PCB.

- ![](/images/Fasteners_4PWTI.svg) Insert en bois fileté à 4 branches (écrous en T DIN 1624).

### Circlips

- ![](/images/Fasteners_DIN471.svg) **DIN 471** Circlip extérieur.

- ![](/images/Fasteners_DIN472.svg) **DIN 472** Circlip intérieur.

- ![](/images/Fasteners_DIN6799.svg) **DIN 6799** Bague d'arrêt pour arbre.

### Pointes

- ![](/images/Fasteners_DIN1143.svg) **DIN 1143** Pointe à tête ronde et plate pour utilisation dans les machines à clouer automatiques.

- ![](/images/Fasteners_DIN1144-A.svg) **DIN 1144-A** Pointe pour l'installation de panneaux composites en laine de bois, tête ronde de 20 mm.

- ![](/images/Fasteners_DIN1151-A.svg) **DIN 1151-A** Pointe tête plate.

- ![](/images/Fasteners_DIN1151-B.svg) **DIN 1151-B** Pointe tête fraisée.

- ![](/images/Fasteners_DIN1152.svg) **DIN 1152** Pointe tête ronde.

- ![](/images/Fasteners_DIN1151-A.svg) **DIN 1160-A** Pointe ou clou ardoise.

- ![](/images/Fasteners_DIN1151-A.svg) **DIN 1160-B** Pointe ou clou à tête large ardoise.

### Goupilles

- ![](/images/Fasteners_ISO1234.svg) **ISO 1234** Goupille fendue.

- ![](/images/Fasteners_ISO2338.svg) **ISO 2338** Goupille parallèle.

- ![](/images/Fasteners_ISO2339.svg) **ISO 2339** Goupille conique.

- ![](/images/Fasteners_ISO2340A.svg) **ISO 2340A** Goujon non fileté.

- ![](/images/Fasteners_ISO2340B.svg) **ISO 2340B** Goujon non fileté sans tête (avec trous pour goupilles fendues).

- ![](/images/Fasteners_ISO2341A.svg) **ISO 2341A** Goujon non fileté avec tête.

- ![](/images/Fasteners_ISO2341B.svg) **ISO 2341B** Goujon non fileté avec tête (avec trous pour goupilles fendues).

- ![](/images/Fasteners_ISO8733.svg) **ISO 8733** Goupille parallèle avec filetage intérieur, non trempée.

- ![](/images/Fasteners_ISO8734.svg) **ISO 8734** Goupille cylindrique.

- ![](/images/Fasteners_ISO8735.svg) **ISO 8735** Goupille cylindrique à trou taraudé, trempée.

- ![](/images/Fasteners_ISO8736.svg) **ISO 8736** Goupille de position conique à trou taraudé, non trempée.

- ![](/images/Fasteners_ISO8737.svg) **ISO 8737** Goupille de position conique à longueur filetée, non trempée.

- ![](/images/Fasteners_ISO8739.svg) **ISO 8739** Goupille cannelée à cannelures constantes sur toute la longueur débouchantes, à bout pilote.

- ![](/images/Fasteners_ISO8740.svg) **ISO 8740** Goupille cannelée à cannelures constantes sur toute la longueur débouchantes, à chanfrein.

- ![](/images/Fasteners_ISO8741.svg) **ISO 8741** Goupille cannelée à cannelures progressives renversées sur la moitié de la longueur non débouchante.

- ![](/images/Fasteners_ISO8742.svg) **ISO 8742** Goupille cannelée à cannelures centrales constantes sur le tiers de la longueur non débouchante.

- ![](/images/Fasteners_ISO8743.svg) **ISO 8743** Goupille cannelée à cannelures centrales constantes sur la moitié de la longueur non débouchante.

- ![](/images/Fasteners_ISO8744.svg) **ISO 8744** Goupille cannelée à cannelures progressives sur toute la longueur (débouchante).

- ![](/images/Fasteners_ISO8745.svg) **ISO 8745** Goupille cannelée à cannelures progressives sur la moitié de la longueur (débouchante).

- ![](/images/Fasteners_ISO8746.svg) **ISO 8746** Clous cannelés à tête ronde.

- ![](/images/Fasteners_ISO8747.svg) **ISO 8747** Clou cannelé tête fraisée.

- ![](/images/Fasteners_ISO8748.svg) **ISO 8748** Goupille élastique spiralée, série épaisse.

- ![](/images/Fasteners_ISO8750.svg) **ISO 8750** Goupille élastique spiralée, série moyenne.

- ![](/images/Fasteners_ISO8751.svg) **ISO 8751** Goupille élastique spiralée, série mince.

- ![](/images/Fasteners_ISO8752.svg) **ISO 8752** Goupille cylindrique creuse, dites goupilles élastiques, série épaisse.

- ![](/images/Fasteners_ISO13337.svg) **ISO 13337** Goupille cylindrique creuse, dites goupilles élastiques, série mince.

## Obsolète

- ![](/images/Fasteners_ChamferHole.svg) [Fraisage](/Fasteners_ChamferHole/fr "Fasteners ChamferHole/fr") : chanfreine les trous pour les vis à tête fraisée. Non disponible dans version 0.5.13 et suivantes.

## Références

- Auteur : [shaise](http://theseger.com/projects/author/shaise/)
  - Concepteur d'objets : Ulrich Brammer
  - Architecture de l'atelier : Shai Seger
- Code source : <https://github.com/shaise/FreeCAD_FastenersWB>
- Rapports de bogues et demandes de fonctionnalités : <https://github.com/shaise/FreeCAD_FastenersWB/issues>
- Sujet de forum : <https://forum.freecadweb.org/viewtopic.php?t=11429>

## Liens

- [BOLTS](https://github.com/jreinhardt/BOLTS): une librairie ouverte pour les spécifications techniques

Retrieved from "<http://wiki.freecad.org/index.php?title=Fasteners_Workbench/fr&oldid=1568209>"
