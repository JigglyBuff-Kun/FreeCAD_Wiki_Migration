---
title: CAM Post-traitement
---
|  |
| --- |
| CAM Post-traitement |
| Emplacement du menu |
| CAM → Post-traiter |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| P P |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/CAM_Post.svg) Post-traitement exporte la ![](/images/CAM_Job.svg) [CAM Tâche](/CAM_Job/fr "CAM Job/fr") sélectionnée vers un fichier G-code.

**Chaque contrôleur CNC parle un dialecte G-code spécifique, nécessitant un post-processeur à correction dialectale pour traduire la sortie finale à partir du dialecte G-code interne agnostique de FreeCAD**.

### Fonctions typiques du post-processeur

* L'utilisation d'une extension de fichier G-code correcte pour la sortie de la tâche.
* Sélection des commandes G-code. Les commandes numériques prennent généralement en charge un sous-ensemble de commandes G-code disponibles. Le super-ensemble de commandes G-code contient des commandes puissantes et spécialisées qui doivent être traitées à l'aide de plusieurs commandes plus simples. Les post-processeurs sont écrits pour sélectionner le meilleur G-code pour une opération, disponible sur la cible.
* Formatage de la syntaxe du G-code en réordonnant les entrées Feed (avance), X, Y, Z, A et B ainsi que la précision.
* Insertion d'un préambule pour définir les unités, le format des unités, le plan de travail, le système de coordonnées, etc...
* Insertion d'un post-amble pour stationner la machine, l'arrêter, traiter les arguments.
* Insérer des changements d'outils, ou les supprimer entre les opérations suivantes utilisant le même outil.
* Formatage des informations relatives à l'avance et à la vitesse en tours par minute ou par seconde.
* Formatage de l'appellation et de l'appel des fonctions.

### Personnalisation du post-processeur

Si vous souhaitez écrire votre propre post-processeur, consultez la page [CAM Personnaliser le post-processeur](/CAM_Postprocessor_Customization/fr "CAM Postprocessor Customization/fr").

**Remarque :** plusieurs post-processeurs fournis génèrent un code adapté à de nombreux contrôleurs CNC ou peuvent être utilisés comme modèles pour des modifications.

Les post-processeurs contiennent des indicateurs de configuration et sont conçus pour être ajustés en ajoutant des G-codes et M-codes aux définitions fournies pour :

* Initialisation de la machine
* Finalisation de la tâche
* Changements d'outils
* Refroidissement activé/désactivé
* Etc...

Les post-processeurs utilisent le [CAM\_scripting/fr#Le\_format\_G-code\_interne\_de\_FreeCAD|dialecte G-code interne de FreeCAD] en conjonction avec les définitions de configuration du post-processeur, afin de générer un G-code correct du point de vue dialectal pour les machines cibles. Cela permet à l'atelier CAM de générer du G-code correct pour cibler différents contrôleurs de machines CNC en appelant différents post-processeurs.

Les types de contrôleur de machine CNC comprennent :

* Fraiseuses CNC
* Tours CNC
* Imprimantes 3D
* Couteaux tractés
* Découpeurs laser
* Graveurs
* Découpeurs à torche plasma
* Cintreuses
* Usinage par décharge électrique
* Etc...

Si une seule machine CNC est utilisée ou si toutes les machines CNC partagent un post-processeur commun, l'atelier CAM ne doit inclure qu'un seul post-processeur. Si un seul post-processeur est insuffisant pour générer un G-code pour tous les contrôleurs CNC cibles, plusieurs post-processeurs doivent être installés.

## Utilisation

1. Sélectionnez une ![](/images/CAM_Job.svg) [CAM Tâche](/CAM_Job/fr "CAM Job/fr") dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/CAM_Post.svg) Post-traiter.
   * Sélectionnez l'option **CAM → ![](/images/CAM_Post.svg) Post-traiter**  du menu.
   * Utilisez le raccourci clavier : P puis P.
3. Confirmez le nom et le répertoire de **Fichier de sortie**.

## Options

Les propriétés du fichier de sortie et du post-processeur peuvent être définies dans la [tâche](/CAM_Job/fr "CAM Job/fr") à tout moment, avant de lancer le post-processeur.

Les post-processeurs fournis sont écrits avec des commentaires indiquant les zones contenant des balises, des variables de configuration et des sections de G-codes et de M-codes qui doivent être utilisés par le post-processeur pour configurer la sortie.

Les indicateurs True/False de la configuration type incluent :

* **OUTPUT\_COMMENTS** (True=Autoriser, False=Supprimer) : utilisé pour insérer des commentaires texte dans le fichier G-code de sortie.
* **OUTPUT\_HEADER** (True=Autoriser, False=Supprimer) : utilisé pour insérer des en-têtes de texte dans le fichier G-code de sortie.
* **OUTPUT\_LINE\_NUMBERS** (True=Autoriser, False=Supprimer) : utilisé pour insérer des numéros de ligne dans le fichier G-code de sortie.
* **SHOW\_EDITOR** (True=Autoriser, False=Supprimer) : utilisé pour afficher le G-code de sortie dans une fenêtre contextuelle lors de l'appel du Post-processeur.
* **MODAL** (True=Autoriser, False=Supprimer) : utilisé pour réduire le nombre de lignes G-code en sortie en supprimant les informations dU Mode lorsque le Mode ne change pas.

Les variables de configuration typiques incluent:

* **LINENR** (numéro de ligne) : utilisé pour définir l'index du numéro de ligne.
* **UNITS** (G20 ou G21) : utilisé pour communiquer explicitement au contrôleur CNC cible quelles unités utiliser pour interpréter le fichier de sortie final.
* **MACHINE\_NAME** (nom de la fraiseuse CNC cible) : utilisé pour insérer une étiquette de nom de machine dans le fichier de sortie final.
* **PRECISION** : utilisé pour définir le nombre de chiffres à inclure après la décimale dans le fichier de sortie final

Les sections de configuration typiques incluent:

* **PREAMBULE** : configuration du code insérée au début de la tâche.
* **POSTAMBLE** : configuration du code annexée à la tâche, permettant de stationner la machine, etc...
* **TOOL\_CHANGE** : code inséré avec chaque changement d'outil dans la tâche.

Édition → Préférences... → CAM → Préférences des tâches → Valeurs par défaut → Parcours permet de définir le post-processeur par défaut sélectionné lors de la création de la tâche. Ceci permet à l'atelier CAM d'être configuré pour n'afficher que les post-processeurs souhaités et de définir une valeur par défaut.

Les post-processeurs inclus sont enregistrés dans **FreeCAD/Mod/CAM/CAM/Post/scripts** par défaut :

* centroid
* comparams
* dxf
* dynapath
* grbl, y compris la prise en charge des blocs d'en-tête bCNC à l'aide de l'argument de sortie du travail --bcnc
* jtech (laser)
* [linuxcnc](http://linuxcnc.org/docs/html/gcode/g-code.html#gcode:g17-g19.1)
* mach3\_mach4
* nccad
* opensbp
* phillips
* refactorisé\* (Ces post-processeurs sont en cours d'élaboration et vont beaucoup évoluer)
* rml
* smoothie
* uccnc

## Limitations

N'utilisez **pas** le menu Fichier → Exporter pour exporter vers le G-code, cela produirait un G-code endommagé!

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Post/fr&oldid=1476110>"