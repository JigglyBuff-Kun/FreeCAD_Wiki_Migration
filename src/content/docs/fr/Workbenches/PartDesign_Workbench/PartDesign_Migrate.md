---
title: PartDesign Migrer
---
:::caution
Cet outil est obsolète, il n'est pas disponible dans laversion 1.0 et suivantes.
:::

|  |
| --- |
| PartDesign Migrer |
| Emplacement du menu |
| PartDesign → Migrer |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'atelier PartDesign dans FreeCAD V0.17 introduit de nouveaux outils et éléments qui ne sont pas reconnus par les anciennes versions FreeCAD (0.16 et plus anciennes).
Les documents FreeCAD créés dans des versions plus anciennes peuvent toujours être ouverts et modifiés.
Pour bénéficier des nouvelles fonctionnalités, vous devez les migrer via le menu PartDesign → Migrer.

[introduit dans la version 0.17](/Release_notes_0.17/fr "Release notes 0.17/fr")

## Utilisation

1. Ouvrez un document FreeCAD créé avec FreeCAD version 0.16 et précédentes.
2. Basculez vers l'atelier ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").
3. Aller au menu **PartDesign** → **Migrer**.
4. Si la migration fonctionne, un ![](/images/Std_Part.svg) [Part Conteneur](/Std_Part/fr "Std Part/fr") sera créé. Il contiendra un ou plusieurs ![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr"), chacun hébergeant une chaîne de fonctionnalités.

## Limitations

* Avant de commencer le processus de migration, vérifier si le modèle a été construit avec les options d'affinage automatique activées (**Édition → Préférences → PartDesign → Général**) et définir vos préférences en conséquence. Cela peut être facilement déterminé en basculant successivement la visibilité des entités dans l'arborescence du modèle. Si aucun bord résiduel n'est laissé entre les fonctions telles que des protrusions et des cavités, les options d'affinage automatique ont été désactivées.
* Si un document à migrer ne contient que des esquisses et des fonctions PartDesign, le processus de migration peut réussir. Certaines fonctionnalités telles que les chanfreins et les filets peuvent nécessiter une reconstruction.
* Si le document à migrer a un flux mixte de production Part/PartDesign/Draft, la conversion échouera très probablement ou au mieux produira des résultats inattendus et devra être migrée manuellement.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Migrate/fr&oldid=1459300>"