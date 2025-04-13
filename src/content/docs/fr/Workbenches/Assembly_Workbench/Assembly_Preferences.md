---
title: Assembly Préférences
---
Les préférences pour l'![](/images/Workbench_Assembly.svg) [atelier Assembly](/Assembly_Workbench/fr "Assembly Workbench/fr") peuvent être trouvées dans [réglages des préférences](/Preferences_Editor/fr "Preferences Editor/fr"). Dans le menu, sélectionnez **Édition → Préférences...** puis **![](/images/Workbench_Assembly.svg) Assembly**. Ce groupe n'est disponible que si l'atelier Assembly a été chargé dans la session FreeCAD en cours.

Il n'y a qu'une seule page : Général.

![](/images/Preferences_Assembly_Page_General.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Échap pour quitter le mode édition** | Si cette case est cochée, presser sur la touche Échap permet de quitter le mode d'édition Assembly. |
| **Journal des étapes successives** | Si cette case est cochée, les étapes successives du solveur sont enregistrées. Utile si vous souhaitez signaler un bogue. Les fichiers se nomment runPreDrag.asmt et dragging.log et se trouvent dans le répertoire par défaut de `std::ofstream` (sous Windows, il s'agit du bureau). |
| **Bloquer la première pièce** | Lorsque vous [insérez](/Assembly_InsertLink/fr "Assembly InsertLink/fr") la première pièce de l'assemblage, vous pouvez choisir de bloquer la pièce automatiquement. Les options sont les suivantes :  * *Demander* * *Toujours* * *Jamais* |

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_Preferences/fr&oldid=1478478>"