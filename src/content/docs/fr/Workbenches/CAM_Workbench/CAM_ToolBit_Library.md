---
title: CAM Bibliothèque des outils coupants
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

## Description

Dans le système des [CAM Outils](/CAM_Tools/fr "CAM Tools/fr"), les outils coupants sont organisés en bibliothèques. Une bibliothèque est simplement une liste d'outils coupants et peut être utilisée par l'utilisateur dans n'importe quel but. Une bibliothèque d'outils est néanmoins une excellente représentation pour un regroupement physique d'outils, comme dans un changeur automatique d'outils. Les outils peuvent également être regroupés par utilisation prévue, par exemple tous les outils de découpe du plastique.

Une bibliothèque d'outils est un fichier (JSON) contenant une correspondance entre l'identifiant de l'outil et le chemin du fichier toolbit. Par conséquent, chaque toolbit peut se trouver dans plusieurs bibliothèques.

Comme chaque outil est stocké dans son propre fichier et que le stockage et l'organisation de ces fichiers sont très souples, l'importance d'une bibliothèque d'outils à des fins d'organisation est très réduite. L'utilisateur est libre d'organiser ses outils dans la hiérarchie de répertoires qu'il juge appropriée et peut également les nommer en fonction de leur utilisation et de leur organisation.

## Identifiants de l'outil coupant

L'outil coupant n'a pas d'identifiant propre. L'identifiant est une propriété de la bibliothèque. Lorsqu'un outil coupant est utilisé pour créer un contrôleur d'outils, l'identifiant de la bibliothèque en cours devient le numéro d'outil par défaut dans le contrôleur. Bien entendu, le numéro d'outil peut être modifié dans le contrôleur d'outils.

## Utilisation

## Exportation

Une bibliothèque d'outil coupants peut être exportée pour créer une [LinuxCNC Table d'outils](http://wiki.linuxcnc.org/cgi-bin/wiki.pl?ToolTable) (.tbl).

## Structure JSON

```
{
  "tools": [
    {
      "nr": 1,
      "path": "t1.fctb"
    },
    {
      "nr": 2,
      "path": "t2.fctb"
    },
    {
      "nr": 3,
      "path": "t3.fctb"
    }
  ],
  "version": 1
}

```

## Options

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_ToolBit_Library/fr&oldid=1390887>"