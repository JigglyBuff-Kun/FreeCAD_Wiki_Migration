---
title: Part Révolution
---
|  |
| --- |
| Part Révolution |
| Emplacement du menu |
| Part → Créer une révolution... |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

Fait pivoter l'objet sélectionné autour d'un axe donné. Les formes initiales suivantes sont autorisées et amènent aux formes de sortie énumérées :

| Objet initial | Objet résultant |
| --- | --- |
| Sommet | Arête |
| Arête | Face |
| Polyligne | Enveloppe |
| Face | Solide |
| Coque | Solide composé (Compsolid) |

Une [esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr") peut également être utilisée. Les solides ou les solides composés ne sont pas autorisés comme formes de départ. Les composés normaux ne sont actuellement pas autorisés non plus.

![](/images/Dialog-revolve.png)

L'argument Angle précise de combien l'objet doit être pivoté. Les coordonnées déplacent l'origine de l'axe de rotation, par rapport à l'origine du système de coordonnées.

Si vous sélectionnez un axe défini par l'utilisateur, les nombres définissent la direction de l'axe de rotation par rapport au système de coordonnées d'origine: Si la coordonnée Z est 0 et les coordonnées Y et X ne sont pas nulles, alors l'axe se trouvera dans le Plan X-Y. Son angle est tel que sa tangente est le rapport entre les coordonnées X et Y.

## Remarques

* Les objets [App Link](/App_Link/fr "App Link/fr") liés aux types d'objets appropriés peuvent également être utilisés comme formes et pour spécifier l'axe. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")
* Si l'objet à faire pivoter coupe l'axe de rotation, l'opération échouera dans la plupart des cas.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Revolve/fr&oldid=1567122>"