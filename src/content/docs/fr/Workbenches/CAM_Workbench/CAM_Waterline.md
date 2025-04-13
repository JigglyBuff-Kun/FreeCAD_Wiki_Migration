---
title: CAM Lignes de niveau
---
:::caution
Il s'agit d'une fonctionnalité expérimentale inachevée.CAM Fonctions expérimentales
:::
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| CAM Lignes de niveau |
| Emplacement du menu |
| CAM → Lignes de niveau |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/CAM_Waterline.svg) Lignes de niveau crée une nouvelle opération de lignes de niveau. A partir de 0.19\_pre, l'opération fonctionne sur l'ensemble du modèle pour générer le G-code de la tâche. Actuellement, dans les paramètres de l'opération, il n'y a pas de fonctionnalité pour sélectionner des zones, des faces ou des régions spécifiques du modèle.

L'opération Lignes de niveau a deux algorithmes : OCL Drop Cutter et Experimental.

* L'algorithme OCL Drop Cutter s'interface avec OCL.pyd, un module Open Source tiers intitulé [OpenCamLib](/OpenCamLib/fr "OpenCamLib/fr") qui génère des chemins d'outils à partir d'un modèle 3D. OpenCamLib n'est pas intégré directement dans FreeCAD.
* L'algorithme expérimental utilise la classe intégrée Path.Area().

**Remarque :** pour utiliser les Lignes de niveau, vous devez :

1. Installer correctement [OpenCamLib](/OpenCamLib/fr "OpenCamLib/fr").
2. Activez les [Fonctions expérimentales](/CAM_experimental/fr "CAM experimental/fr") de l'atelier CAM.
3. Vérifiez **Édition → Préférences... → CAM → Avancé → Activer les fonctions dépendantes d'openCAMlib**.

## Utilisation

Les instructions d'utilisation pour plusieurs variantes des Lignes de niveau sont présentées ici.

#### Opération de base

1. Appuyer sur l'icône ![](/images/CAM_Waterline.svg) Lignes de niveau ou sélectionnez l'outil Lignes de niveau du menu **CAM**.
2. Sélectionner le contrôleur d'outil pour l'opération dans la fenêtre de dialogue du contrôleur d'outil.
3. Ajuster les profondeurs d'opération selon les besoins dans l'onglet Depths : Profondeur de départ, Profondeur de fin, Pas de descente.
4. Effectuer des ajustements dans l'onglet Hauteurs si nécessaire.
5. Configurer les paramètres dans l'onglet Opérations en fonction de l'algorithme sélectionné :
   1. OCL Dropcutter
      1. Choisir Boîte englobante : Brut ou Boîte englobante de base.
      2. Définir le mode de passe : Une seule passe ou Multi-passe.
      3. Définir l'intervalle d'échantillonnage utilisé pour l'analyse OCL.
   2. Expérimental
      1. Choisir Boîte englobante : Brut ou Boîte englobante de base.
      2. Définir le mode de passe : Une seule passe ou Multi-passe.
      3. Définir le motif de passe si vous souhaitez nettoyer chaque passe.
      4. Définir l'ajustement des limites (allocation de matière).
6. Si vous souhaitez prévisualiser le résultat avant d'accepter les paramètres, cliquez sur Appliquer
7. Cliquez sur le bouton **OK** pour confirmer et générer des parcours.

Pour obtenir des effets différents ou plus complexes, définissez des propriétés d'opération supplémentaires dans l'onglet Data de la vue Propriétés pour l'opération.

##### Remarques sur l'algorithme expérimental

* Il ne gère pas correctement les surplombs.
* Il ne renvoie que les chemins pour une fraise de type fraise en bout (outil).
* Il peut ne pas capturer correctement toutes les caractéristiques intérieures.
* C'est juste ça, expérimental, et pas prêt pour l'intégration grand public. Veuillez inspecter les parcours avec le ![](/images/Path_Simulator.svg) [CAM Simulateur de parcours](/CAM_Simulator/fr "CAM Simulator/fr") ou d'autres outils d'inspection g-code tiers, avant de couper avec votre machine.

#### Formes d'outils (de coupe) disponibles

Lorsque vous utilisez l'algorithme  ***OCL Dropcutter*** , l'opération Lignes de niveau utilise OpenCamLib [OCL/fr|OCL] pour extraire les parcours de la base de la pièce. En tant que tel, une traduction d'outil est nécessaire entre le contrôleur d'outil FreeCAD et OCL afin de terminer l'analyse avec la forme d'outil (cutter) choisie. Ces formes d'outils sont (doivent être) respectées et disponibles pour le Dropcutter OCL tant que les formes d'outils intégrées sont utilisées, qu'il s'agisse d'outils hérités ou d'outils coupants :

* Fraise en bout
* Fraise à boule
* Fraise en bout de nez
* Chanfrein
* Graveur

#### Remarques additionnelles

* Si vous choisissez d'exécuter le simulateur de parcours, ![](/images/CAM_Simulator.svg) [CAM Simulateur de parcours](/CAM_Simulator/fr "CAM Simulator/fr") dans l'atelier CAM, vous pourriez ne pas voir d'enlèvement de matière spécifique à la forme de l'outil. Prudence donc. Un petit travail d'essai utilisant de la mousse ou un autre matériau très peu dense est recommandé pour vérifier que les parcours sont corrects avec le contrôleur d'outil sélectionné.
* À compter de mai 2020, seule la fraise en bout dispose de tout type de test pour déterminer l'exactitude de la traduction des paramètres de l'outil FreeCAD vers OCL. Veuillez publier tout commentaire concernant une utilisation non-finale dans la section [Path/CAM](https://forum.freecadweb.org/viewforum.php?f=15) des forums de FreeCAD.

## Propriétés

***Remarque*** : toutes ces propriétés ne sont pas disponibles dans l'éditeur de fenêtre de tâches. Certaines ne sont accessibles que dans l'onglet Données du panneau Vue de propriétés pour cette opération.

Base

Remarque : il est conseillé de ne pas modifier la propriété Placement des opérations de parcours. Il convient plutôt de déplacer ou de faire pivoter le modèle de la Tâche de CAM selon les besoins.

* Données**Placement** : placement global [position et rotation] de l'objet - par rapport à l'origine (ou à l'origine du conteneur d'objet parent)
  + Données**Angle** : angle en degrés appliqué à la rotation de l'objet autour de la valeur de la propriété Axis
  + Données**Axis** : axe (un ou plusieurs) autour duquel faire pivoter l'objet, défini dans les sous-propriétés : X, Y, Z
    - Données**X** : valeur de l'axe X
    - Données**Y** : valeur de l'axe Y
    - Données**Z** : valeur de l'axe Z
  + Données**Position** : Position de l'objet, définie dans les sous-propriétés : X, Y, Z - par rapport à l'origine (ou à l'origine du conteneur de l'objet parent)
    - Données**X** : valeur de distance X
    - Données**Y** : valeur de distance Y
    - Données**Z** : valeur de distance Z
* Données**Label** : nom de l'objet fourni par l'utilisateur (UTF-8)

Clearing Options

* Données**Algorithm** : bibliothèque à utiliser pour générer le parcours
* Données**BoundBox** : détermine si l'opération doit être limitée par l'objet brut ou par la boîte englobante de l'objet de base
* Données**Clear Last Layer** : permet de supprimer la dernière passe lors d'une opération "multi-passes".
* Données**Cut Mode** : direction dans laquelle le parcours d'outil doit aller autour de la pièce : usinage en avalant (sens des aiguilles) ou usinage en opposition (sens inverse des aiguilles)
* Données**Cut Pattern** : motif d'effacement à utiliser
* Données**Depth Offset** :
* Données**Ignorer Outer Above** :
* Données**Layer Mode** : mode de complétion de l'opération : simple ou multi-passes
* Données**Step Over** :

Depth

* Données**Clearance Height** : hauteur nécessaire pour eviter les pinces et les obstructions.
* Données**Final Depth** : profondeur finale de l'outil - valeur la plus basse de Z.
* Données**Safe Height** : seuil supérieur duquel les mouvements rapides sont autorisés.
* Données**Start Depth** : profondeur initiale de l'outil - première profondeur de coupe en Z.
* Données**Step Down** : abaissement incrémentiel de l'outil.

Path

* Données**Active** : mettre à False pour empêcher l'opération de générer du code.
* Données**Base** : géométrie de base pour cette opération.
* Données**Comment** : commentaire facultatif pour cette opération.
* Données**Coolant Mode** :
* Données**Cycle Time** :
* Données**Tool Controller** : définit le contrôleur d'outil utilisé dans l'opération.
* Données**User Label** : étiquette attribuée par l'utilisateur.

Start Point

* Données**Start Point** : point de départ personnalisé pour le chemin de cette opération.
  + Données**X** : valeur de distance X.
  + Données**Y** : valeur de distance Y.
  + Données**Z** : valeur de distance Z.
* Données**Use Start Point** : mis à True, si vous spécifiez manuellement un point de départ.

## Disposition de l'éditeur de la fenêtre des tâches

*Les descriptions des paramètres sont fournies dans la liste des propriétés ci-dessus.*

Cette section est simplement une représentation des paramètres de l’éditeur de fenêtres pour l’opération.

### Localisation de la base

* **Ajouter** : ajoute le(s) élément(s) sélectionné(s) qui doit(vent) être la(les) base(s) pour le(s) parcours.
* **Enlever** : supprime le ou les éléments sélectionnés dans la liste de la géométrie de base.
* **Réinitialiser** : efface tous les éléments de la liste de la géométrie de base.

### Profondeurs

* Données**Start Depth**
* Données**Final Depth**
* Données**Step Down**

### Hauteurs

* Données**Safe Height**
* Données**Clearance Height**

### Opération

* Données**Tool Controller**
* Données**Coolant Mode**
* Données**Algorithm**
* Données**BoundBox**
* Données**Layer Mode**
* Données**Cut Pattern**~
* Données**Boundary Adjustment**~
* Données**Sample Interval**~

~ La visibilité change avec d'autres paramètres.

## Ressources

* Simulateur de G-code (parcours) : [NCViewer](https://ncviewer.com/)
* Simulateur de G-code (parcours) : [CAMotics](https://www.camotics.org/)

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Waterline/fr&oldid=1476209>"