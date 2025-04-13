---
title: Part Décaler en 3D
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Part Décaler en 3D |
| Emplacement du menu |
| Part → Décaler en 3D... |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Part Évider](/Part_Thickness/fr "Part Thickness/fr"), [Part Décaler en 2D](/Part_Offset2D/fr "Part Offset2D/fr") |
|  |

## Description

L'outil ![](/images/Part_Offset.svg) **Part Décaler en 3D** crée des copies parallèles d'une forme sélectionnée à une certaine distance de la forme de base, créant ainsi un nouvel objet.

![](/images/PartOffset0.png) → ![](/images/PartOffset1.png)

## Utilisation

1. Sélectionnez un objet à décaler.
2. Appuyez sur le bouton ![](/images/Part_Offset.svg) Décaler en 3D.
3. Ajustez la distance et les paramètres en fonction de l'objet d'origine et de la validité des objets résultants.

## Remarques

* Les objets [App Link](/App_Link/fr "App Link/fr") liés aux types d'objets appropriés et les conteneurs [App Part](/App_Part/fr "App Part/fr") contenant les objets visibles appropriés peuvent également être utilisés comme objets sources. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

## Exemples

![](/images/PartOffset0.png) → ![](/images/PartOffset1.png)

Objet avec petits coins décalés et arrondis (arc).

![](/images/PartOffset3.png)

Le même objet avec des angles vifs (intersection).

![](/images/PartOffset2.png)

Même objet avec une distance importante qui déborde de l'espace avant gauche et des intersections autorisées.

![](/images/PartOffset4.png)

Forme arbitraire ([Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr")) avec un décalage 3D (ignore le paramètre MODE).

![](/images/PartOffset5.png)

La même forme avec un décalage 3D comme une Peau et un décalage *rempli*.

![](/images/PartOffset6.png)

Décalage *rempli* avec 2 cylindres créant des coupes booléennes. Le cylindre A passe par le REMPLISSAGE tandis que le cylindre B ne traverse que le REMPLISSAGE et non la forme 2D source.

## Propriétés

* Données**Offset** : distance pour décaler les faces de la forme.
* Données**Mode** : mode de création. *Peau* crée une nouvelle forme autour de la forme source. *Tuyau* (à faire). *Recto/verso* (à faire).
* Données**Join type** : la manière dont les nouveaux coins sont construits. *Intersection* donne des angles vifs par extension linéaire des arêtes. *Arc* et *Tangent* donnent des angles arrondis.

1. Option : Intersection : permet aux décalages pointant vers l'intérieur de "déborder" l'espace en intersectant la forme résultante jusqu'à ce que des faces opposées soient atteintes.
2. Option : Auto-intersection : (à faire).
3. Option : Remplir le décalage : lorsque la forme est bidimensionnelle, l'espace entre les deux formes est rempli. Le remplissage est maintenant un solide, et la forme source n'est donc pas un solide. Les opérations booléennes peuvent donc conduire à des résultats étranges. (voir l'exemple ci-dessous).

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Offset/fr&oldid=1476575>"