---
title: Std Importer des liens
---
|  |
| --- |
| Std Importer des liens |
| Emplacement du menu |
| Aucun |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [Std Créer un lien](/Std_LinkMake/fr "Std LinkMake/fr"), [Std Créer un lien relatif](/Std_LinkMakeRelative/fr "Std LinkMakeRelative/fr"), [Std Importer tous les liens](/Std_LinkImportAll/fr "Std LinkImportAll/fr") |
|  |

## Description

![](/images/Std_LinkImport.svg) Std Importer des liens importe la Données**Linked Object** d'un lien dans le document en cours puis modifie la dépendance à cet objet.

Cette opération est utile lorsque vous travaillez avec des [assemblages](/Assembly/fr "Assembly/fr") afin d'organiser des modèles réutilisables qui peuvent se trouver dans d'autres documents.

Utilisez ![](/images/Std_LinkImportAll.svg) [Std Importer tous les liens](/Std_LinkImportAll/fr "Std LinkImportAll/fr") pour importer tous les objets liés.

## Utilisation

1. Assurez-vous que vous avez un document "source" avec un objet original, disons, un ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr") et une seconde "cible" document avec un lien vers cet objet.
2. Ouvrez le document cible et sélectionnez le lien vers l'objet. Sa Données**Linked Object** doit afficher quelque chose comme `source#Part`.
3. Appuyez sur ![](/images/Std_LinkImport.svg) Std Importer des liens.

Une copie du ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr") d'origine doit maintenant se trouver dans le document "cible" actuel. La propriété Données**Linked Object** du lien doit maintenant afficher `Part` indiquant que le lien ne pointe plus vers `Part` dans "source" mais vers `Part` dans le document en cours ("cible").

![](/images/Std_Link_tree_import_1_example.png) ![](/images/Std_Link_tree_import_2_example.png)

À gauche : un lien pointe vers l'objet dans le document "source".  
À droite : l'objet d'origine a été importé (copié) dans le document "cible" et le lien existant a été modifié pour pointer vers cette copie, de sorte qu'il ne pointe plus vers l'objet dans "source".

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkImport/fr&oldid=1528590>"