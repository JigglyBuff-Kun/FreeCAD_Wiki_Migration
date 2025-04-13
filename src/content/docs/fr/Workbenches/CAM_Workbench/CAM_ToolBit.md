---
title: CAM Outil coupant
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

## Description

Les outils coupants sont la base du système des [CAM Outils](/CAM_Tools/fr "CAM Tools/fr"). Ils représentent un outil spécifique qui peut être utilisé dans une tâche de CAM pour générer un parcours d'outil. Chaque outil coupant est enregistré dans un fichier JSON. JSON est une donnée structurée qui peut être facilement analysée par des macros ou des scripts en Python mais qui reste lisible. La description des outils coupants avec JSON offre la possibilité de créer automatiquement de grandes collections d'outils coupants précis ou avec un script.

L'enregistrement d'un outil sous forme de fichier JSON est une bonne idée, mais cela ne permet pas d'obtenir une représentation précise de la vignette ou du corps solide. D'autre part, si chaque outil coupant était créé en tant qu'objet FreeCAD, l'obtention du corps solide serait simple mais nécessiterait un stockage énorme pour les grandes collections d'outils. De plus, la création automatique d'outils coupants en tant qu'objets FreeCAD serait difficile, voire impossible.

Au lieu de cela, l'outil coupant est un hybride. Le fichier JSON contient le chemin d'accès au fichier forme de l'outil et les valeurs de tous les paramètres requis pour créer l'outil coupant spécifique.

Lorsqu'un outil est instancié dans un travail, un corps est créé à partir du modèle et les contraintes sont définies en fonction des valeurs du fichier JSON. Tous les paramètres supplémentaires sont créés en tant que propriétés de l'objet. Cela fournit la forme et les dimensions correctes qui peuvent être utilisées pour générer un nuage de points ou un maillage pour les algorithmes avancés (et potentiellement la simulation).

## Utilisation

Dans l'interface graphique de FreeCAD, le gestionnaire de bibliothèque des outils coupants de CAM fournit un mécanisme pour créer un nouveau outil coupant. Un même outil coupant peut exister dans plusieurs bibliothèques d'outils coupants.

1. Ouvrez le gestionnaire des outils coupants de CAM.
2. Sélectionnez une bibliothèque.
3. Créez un outil coupant.

## Structure JSON

```
{
  "version": 2,
  "name": "T1",
  "shape": "endmill.fcstd",
  "attribute": {},
  "parameter": {
    "CuttingEdgeHeight": "30.000 mm",
    "Diameter": "1.000 mm",
    "Length": "50.000 mm",
    "ShankDiameter": "3.000 mm"
  }
}

```

## Options

## En relation

* [CAM Outils](/CAM_Tools/fr "CAM Tools/fr")
* [CAM Bibliothèque des outils coupants](/CAM_ToolBitLibraryOpen/fr "CAM ToolBitLibraryOpen/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_ToolBit/fr&oldid=1491456>"