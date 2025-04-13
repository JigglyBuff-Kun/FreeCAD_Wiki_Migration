---
title: Std Importer tous les liens
---
|  |
| --- |
| Std Importer tous les liens |
| Emplacement du menu |
| Aucun |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [Std Créer un lien](/Std_LinkMake/fr "Std LinkMake/fr"), [Std Créer un lien relatif](/Std_LinkMakeRelative/fr "Std LinkMakeRelative/fr"), [Std Importer des liens](/Std_LinkImport/fr "Std LinkImport/fr") |
|  |

## Description

![](/images/Std_LinkImportAll.svg) Std Importer tous les liens importe toutes les Données**Linked Object** des liens dans le document en cours puis modifie la dépendance pour qu'elle pointe vers ces objets importés.

Cette commande exécute essentiellement ![](/images/Std_LinkImport.svg) [Std Importer des liens](/Std_LinkImport/fr "Std LinkImport/fr") pour tous les liens d'un document.

## Utilisation

1. Assurez-vous d'avoir un document "source" avec les objets originaux et un deuxième document "cible" avec des liens vers ces objets.
2. Ouvrez le document cible et appuyez sur ![](/images/Std_LinkImportAll.svg) Std Importer tous les liens.

![](/images/Std_Link_tree_import_all_1_example.png) ![](/images/Std_Link_tree_import_all_2_example.png)

À gauche : divers liens qui pointent vers des objets dans le document "source".  
À droite : les objets originaux ont été importés (copiés) dans le document "cible" et les liens existants ont été modifiés pour pointer vers ces copies, de sorte qu'ils ne pointent plus vers des objets dans "source".

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkImportAll/fr&oldid=1459454>"