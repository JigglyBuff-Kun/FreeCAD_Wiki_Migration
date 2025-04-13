---
title: CAM Chercher des erreurs
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| CAM Chercher des erreurs |
| Emplacement du menu |
| CAM → Chercher des erreurs dans la tâche |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| P S |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| *Aucun* |
|  |

## Description

De nombreux utilisateurs de CAM sont des amateurs et des bricoleurs. En tant que tels, ils utilisent leurs machines CNC pour exécuter le G-code qu'ils ont configuré et généré eux-mêmes. Ce n'est pas le cas de la plupart des utilisateurs professionnels/commerciaux. Dans les ateliers professionnels, les personnes chargées de créer le G-code (programmeurs CNC) et celles qui l'exécutent sur les machines (opérateurs CNC) sont différentes.

Les amateurs exécutent généralement le G-code quelques minutes après le post-traitement et probablement seulement une ou deux fois. Chez un professionnel, un G-code éprouvé peut être exécuté plusieurs fois pendant des mois ou des années après sa création initiale.

Un problème qui se pose dans un atelier CNC professionnel est qu'il existe de nombreuses hypothèses faites par le programmeur qui ne sont PAS communiquées dans le G-code lui-même. Par exemple, le G-code peut appeler un outil "T3" mais à moins qu'il ne soit commenté, le G-code ne dit pas à quel type d'outil "T3" se réfère. On suppose simplement que T3 dans le système CAM est le même que T3 sur la machine. Il existe de nombreuses hypothèses comme celle-ci concernant la configuration de la machine, l'outillage, le matériau, l'orientation des pièces, etc. Même si le G-code est parfait, si l'opérateur ne configure pas la machine avec les mêmes hypothèses, il peut planter.

Les entreprises commerciales créent souvent un "livre des configurations" qui documente toutes ces hypothèses et donne aux opérateurs ce dont ils ont besoin pour configurer la machine et produire une pièce.

![](/images/CAM_Sanity.svg) Chercher des erreurs est l'outil de l'atelier CAM pour générer ce type d'informations. La sortie de cette commande est un fichier .html avec des images intégrées.

![](/images/Sanity.jpg)

Ci-dessus : exemple de rapport généré par CAM Chercher des erreurs

## À propos du rapport

Autant que possible, le contenu est indépendant de FreeCAD. L'opérateur CNC ne peut jamais utiliser FreeCAD, donc la terminologie propre à FreeCAD/CAM prête à confusion. Le rapport comporte des sections distinctes et est formaté pour rendre la recherche des choses facile et prévisible.

### Informations sur les pièces

Cette section donne un aperçu de ce qui est fait. Idéalement, l'image doit montrer les objets de base. S'il existe plusieurs objets de base, l'image doit montrer comment ils s'imbriquent.

### Résumé de l'exécution

Donne une vue rapide des hauteurs minimales et maximales et des temps de fonctionnement.

### Brut grossier

Détaille l'objet Brut de la tâche. C'est un domaine dans lequel CAM bénéficierait d'une certaine amélioration. Une propriété matérielle rudimentaire pour le brut serait utile ici et pourrait également être utilisée pour aider à suggérer des alimentations/vitesses.

### Données de l'outil

Comporte des sous-sections pour chaque numéro d'outil utilisé dans la tâche. Elle détaille ce que le programmeur suppose être l'outil et quelles opérations l'utilisent. Cette section ne fonctionne qu'avec le nouveau système d'[outils coupants](/CAM_ToolBit/fr "CAM ToolBit/fr"). Il s'agit d'un autre domaine dans lequel CAM doit être amélioré. Plus précisément, les outils coupants ont besoin d'attributs supplémentaires relatif à l'outil, comme le fabricant, l'adresse et le numéro de pièce.

### Résultat

Donne des détails sur l'endroit et le moment où le G-code a été post-traité. Il indique également si la tâche contient des arrêts facultatifs/obligatoires afin que l'opérateur sache s'il peut s'éloigner de la machine en toute sécurité au cours d'une opération.

### Liquide de refroidissement

Le type de liquide de refroidissement nécessaire, le cas échéant.

### Fixations et outils de maintien

Affiche les pièces dans le contexte de l'enveloppe du brut et montre également l'origine de la pièce.

### Avertissements

Les avertissements et les erreurs détectés par CAM Chercher des erreurs. Il peut s'agir ou non de problèmes, mais ils sont signalés pour attirer l'attention. Par exemple, si le même numéro d'outil est utilisé pour différentes unités d'usinage, il s'agit d'une erreur. Si un contrôleur d'outil n'a pas d'avance/vitesse configurée, cela apparaîtra comme un avertissement. Il détectera également les contrôleurs d'outils inutilisés et émettra un avertissement à leur sujet. CAM bénéficierait ici de la possibilité d'ajouter des notes ou des avertissements arbitraires.

## Utilisation

1. Sélectionnez une ![](/images/CAM_Job.svg) [tâche](/CAM_Job/fr "CAM Job/fr") dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/CAM_Sanity.svg) Chercher des erreurs dans la tâche.
   * Sélectionnez **CAM → ![](/images/CAM_Sanity.svg) Chercher des erreurs dans la tâche** du menu.
   * Utilisez le raccourci clavier : P puis S.
3. Les informations pertinentes sont rassemblées dans un dictionnaire en Python puis formatées au format asciidoc.
4. Le fichier asciidoc est écrit sur le disque au même endroit que le fichier qui sera post-traité.
5. Un processus externe appelle asciidoctor pour lire le fichier asciidoc et générer le fichier .html.
6. Ceci lancera automatiquement le navigateur web du système pour visualiser le rapport HTML autonome généré.

## Remarques

* Asciidoc est un format de balisage léger pour la création de notes, d'articles, de livres, etc. Il est lisible par l'homme et facilement traduit dans d'autres formats.

* Asciidoctor est un processeur de texte open-source rapide pour la conversion d'asciidoc en HTML, PDF ou d'autres formats. Il est disponible pour Linux, Windows et MacOS. Asciidoctor n'est pas installé avec FreeCAD. Si vous utilisez **CAM Chercher des erreurs** sans installer Asciidoctor, le fichier source asciidoc sera généré mais le HTML résultant ne sera pas produit. Voir [Site d'Asciidoctor](https://asciidoctor.org/)

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Sanity/fr&oldid=1442373>"