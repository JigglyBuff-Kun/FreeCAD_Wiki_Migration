---
title: Drawing Insérer une vue
---
|  |
| --- |
| Drawing Insérer une vue |
| Emplacement du menu |
| Drawing → Insérer une vue dans la page |
| Ateliers |
| [Drawing](/Drawing_Workbench/fr "Drawing Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Feuille A3 Paysage](/Drawing_Landscape_A3/fr "Drawing Landscape A3/fr") |
|  |

Cet outil créé une nouvelle vue de l'objet sélectionné dans la feuille de dessin active.

![Une feuille de dessin avec trois vues : face, dessus et isométrique.](/images/Drawing_Views_fr.png)

### Utilisation

Sélectionnez un objet, soit dans la vue 3D, soit l'arborescence de projet, puis cliquez sur l'outil Vue de dessin. Par défaut, une vue de dessus à l'échelle de 1:1 (taille réelle) sera placée en haut à gauche de la page. Elle pourrait ne pas être visible si elle est trop petite ou trop grande pour la page.

Un objet **View** est ajouté sous l'objet **Page** dans l'arborescence de projet. Pour les vues suivantes, un nombre à trois chiffres sera ajouté au nom. Cliquez sur la flèche en face de l'objet Page pour le déplier et afficher les vues qu'il contient.

Si seul l'objet est sélectionné dans l'arborescence du projet, la vue est ajoutée à la première page du projet. Si vous avez plusieurs pages dans votre projet, veuillez sélectionner l'objet et la page à laquelle il devrait être ajouté. Cliquez ensuite sur l'icône pour ajouter la vue à la page sélectionnée.

### Modifier une vue existante

Dépliez l'objet Page dans l'arborescence de projet, puis sélectionnez la vue à modifier. Ses paramètres peuvent être édités dans l'onglet Données de l'Affichage des propriétés.

![](/images/Drawing_View_Properties_fr.png)

![](/images/Drawing_View_Iso.png)

Vue isométrique avec « smooth lines visibility » désactivée

![](/images/Drawing_View_Iso_SmoothLines.png)

Vue isométrique avec « smooth lines visibility » activée

* **Label** : change l'étiquette de la vue dans l'arborescence de projet. Vous pouvez aussi faire un clic droit sur la vue dans l'arborescence puis → Renommer, ou encore appuyer sur F2.
* **Rotation** : Effectue une rotation de la vue. Par exemple, une vue isométrique requiert une rotation de 60 degrés (voir aussi le paramètre Direction ci-dessous)
* **Scale** : définit l'échelle de la vue.
* **X** : définit la position horizontale sur la page en millimètres.
* **Y** : définit la position verticale sur la page en millimètres. À noter que les coordonnées (0,0) sont situées en haut et à gauche de la page, et une valeur plus grande fera descendre la vue sur la page.
* **Direction** : définit la direction de la vue. Les valeurs XYZ établissent un vecteur directionnel normal à la page. Une vue de dessus aura pour vecteur (0,0,1), alors qu'une vue isométrique aura un vecteur de (1,1,1). Les valeurs peuvent être négatives.
* **Show Hidden Lines** : bascule la visibilité des lignes cachées en sélectionnant *True* (vrai) ou *False* (faux).
* **Show Smooth Lines** : bascule la visibilité des lignes douces en sélectionnant *True* (vrai) ou *False* (faux). Les lignes douces sont aussi appelées lignes de tangence ; il s'agit de lignes de démarcation entre deux surfaces tangentes.

### Autre

Si vous recherchez un basculement orthogonal en perspective dans la vue 3D, vérifiez [Std PerspectiveCamera](/Std_PerspectiveCamera/fr "Std PerspectiveCamera/fr") et [Std OrthographicCamera](/Std_OrthographicCamera/fr "Std OrthographicCamera/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_View/fr&oldid=1461815>"