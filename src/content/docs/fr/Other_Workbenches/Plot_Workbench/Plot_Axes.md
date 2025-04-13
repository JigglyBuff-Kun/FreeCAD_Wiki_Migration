---
title: Plot Axes
---
|  |
| --- |
| Plot Axes |
| Emplacement du menu |
| Plot → Configurer les axes‏‎ |
| Ateliers |
| [Plot](/Plot_Workbench/fr "Plot Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

Le module standard graphique fournit déjà un outil de base pour contrôler les axes du tracé ![](/images/Matplotlib_edit_subplot.png) mais cet outil est clairement insuffisant lorsque des tracés multi-axes doivent être manipulés, comme c'est le cas dans le [Tutoriel graphique à plusieurs axes](/Plot_MultiAxes_tutorial/fr "Plot MultiAxes tutorial/fr"). Pour surmonter cette limitation, vous pouvez installer l'![](/images/Workbench_Plot.svg) [atelier Plot](/Plot_Workbench/fr "Plot Workbench/fr") en utilisant le [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"), ainsi un outil plus complet pour éditer les axes du tracé sera disponible.

![](/images/Plot_MultiAxes_Example.png)

## Utilisation

Sélectionnez l'onglet du graphique que vous souhaitez modifier, puis lancez cet outil.

Il est fortement recommandé de commencer à mettre à l'échelle l'ensemble du graphique afin d'être sûr qu'il tiendra dans l'espace disponible. Pour cela, activez l'option **Appliquer à tous les axes**.

![Apply to all axes](/images/Apply_To_All_Axes.png)

Sélecteur pour la commande Appliquer à tous les axes

Ensuite, vous pouvez mettre à l'échelle l'ensemble du graphique pour l'adapter à la zone visible, en utilisant les quatre curseurs suivants

![Plot area controlling sliders](/images/Plot_Axes_Sliders.png)

Curseurs pour mettre à l'échelle le graphique

Lorsque vous êtes satisfait de la taille générale du tracé, vous pouvez désélectionner **Appliquer à tous les axes** et affiner chaque ensemble d'axes indépendamment. Il suffit de sélectionner l'ensemble des axes que vous souhaitez modifier en haut de la page.

![Plot axes selector](/images/Plot_Axes_Active.png)

Sélecteur pour l'ensemble des axes à éditer

.

Vous pouvez à nouveau utiliser les curseurs pour contrôler la zone couverte par ce ce graphique secondaire. Vous pouvez également contrôler l'emplacement des points et des titres pour l'axe X et l'axe Y.

![Plot axes position editor](/images/Plot_Axes_Position.png)

Éditeur de positions pour les axes sélectionnés

Plus précisément, vous pouvez définir si l'axe X est affiché en dessous ou au dessus du tracé, ainsi que si l'axe Y est affiché à gauche ou à droite du tracé. Vous pouvez même définir le décalage des deux axes par rapport à la ligne de base du tracé.

Enfin, vous pouvez définir les valeurs minimales et maximales prises en compte pour chaque ensemble d'axes, ce que l'on appelle le zoom.

![Plot zoom editor](/images/Plot_Axes_Zoom.png)

Editeur des valeurs minimales et maximales considérées

Retrieved from "<http://wiki.freecad.org/index.php?title=Plot_Axes/fr&oldid=1210451>"