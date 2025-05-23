---
title: Assembly3 Tutoriel de contrôleur cinématique
---
|  |
| --- |
| Tutoriel |
| Thème |
| Contrôleur cinématique créé avec Python |
| Niveau |
| Des connaissances de base en Python sont utiles |
| Temps d'exécution estimé |
| 1 heure |
| Auteurs |
| [FBXL5](/User:FBXL5 "User:FBXL5") |
| Version de FreeCAD |
| 0.20 et ultérieur |
| Fichiers exemples |
| *None* |
| Voir aussi |
| *None* |
|  |

## Introduction

Ce tutoriel décrit comment générer un contrôleur cinématique simple à utiliser avec les assemblages créés avec l'[atelier Assembly3](/Assembly3_Workbench/fr "Assembly3 Workbench/fr") à partir de quelques lignes de code Python.

N'importe quel éditeur de texte peut être utilisé pour coder. Mon choix se porte sur Atom, mais l'éditeur intégré de FreeCAD fonctionne bien aussi.

Les exemples de code suivants peuvent être copiés et collés dans un fichier texte vide, puis enregistrés sous le nom de votre choix comme fichier \*.py ou \*.FCMacro.

## Sections macro

### Structure de base

```
#! python
# -*- coding: utf-8 -*-
# (c) 2022 Your name LGPL

def main():
    pass

if __name__ == "__main__":
    # This will be true only if the file is "executed"
    # but not if imported as a module
    main()

```

La structure de base consiste en une fonction `main()` et un commutateur pour vérifier si la macro est utilisée comme un conteneur pour les classes, les méthodes, etc. ou si elle est exécutée seule. Seule la deuxième option lancera la fonction `main()`. Cette fonction est vide pour le moment.

### Trouver les contraintes pilotes

Les contraintes pilotes sont des objets dans un document FreeCAD. Elles doivent être marquées pour pouvoir être trouvées.

Pour ce contrôleur, le suffixe `"Driver"` doit être attaché au label d'une contrainte pilote. Il peut être séparé par un `"."` ou `"-"` pour plus de clarté, car nous ne vérifierons que si le label se termine par `"Driver"`.

Une fonction qui reçoit un objet document et renvoie une liste de contraintes pilotes (les noms dans ce cas) fera l'affaire.

```
def findTheDrivingConstraints(document_object):
    # search through the Objects and find the driving constraint
    driver_list = []
    for each in document_object.Objects:
        if each.Label.endswith("Driver"):
            driving_constraint = each.Name
            driver_list.append(driving_constraint)
    return driver_list

```

La fonction `main()` charge le document actif dans la variable `kin_doc`, puis appelle la fonction `findTheDrivingConstraints()` et lui transmet le contenu de `kin_doc`. La liste retournée est chargée dans `drivers` qui est ensuite vérifiée pour contenir au moins un élément. Si c'est le cas, la liste est finalement imprimée dans la [Vue rapport](/Report_view/fr "Report view/fr").

```
def main():
    kin_doc = App.ActiveDocument # Kinematic Document
    drivers = findTheDrivingConstraints(kin_doc)
    if len(drivers) < 1:
        print("No driver found!")
    else:
        print(drivers)

```

**La macro jusqu'à présent...**

```
#! python
# -*- coding: utf-8 -*-
# (c) 2021 Your name LGPL

def findTheDrivingConstraints(document_object):
    # search through the Objects and find the driving constraint
    driver_list = []
    for each in document_object.Objects:
        if each.Label.endswith("Driver"):
            driving_constraint = each.Name
            driver_list.append(driving_constraint)
    return driver_list

def main():
    kin_doc = App.ActiveDocument # Kinematic Document
    drivers = findTheDrivingConstraints(kin_doc)
    if len(drivers) < 1:
        print("No driver found!")
    else:
        print(drivers)

if __name__ == "__main__":
    # This will be true only if the file is "executed"
    # but not if imported as a module
    main()

```

[En haut](#top)

### Panneau de contrôle

Le panneau de contrôle est construit à partir de widgets Qt, une fenêtre principale contenant plusieurs widgets d'entrée/sortie.

Chaque widget doit être importé avant de pouvoir être utilisé, mais ils peuvent être importés en un seul ensemble. La ligne d'importation est placée en haut du fichier.

#### Fenêtre principale

Pour la fenêtre principale, la ligne d'importation ressemble à ceci :

```
from PySide2.QtWidgets import (QDialog)

```

La fenêtre principale appelée `ControlPanel` est un objet de classe instancié à partir du widget `QDialog`.

Elle possède deux méthodes init. `__init__()` initialise le nouvel objet de la classe, gère les arguments entrants et lance `initUI()` qui gère tous les widgets de la fenêtre principale.

```
class ControlPanel(QDialog):
    """
    docstring for ControlPanel.
    """
    def __init__(self, document, actuator):
        super(ControlPanel, self).__init__()
        self.initUI(document, actuator)

    def initUI(self, document, actuator):
        # Setting up class parameters
        # the window has 640 x 480 pixels and is centered by default
        # now make the window visible
        self.show()

```

Pour lancer un seul panneau de commande, une instance, appelée `panel`, de cette classe sera créée avec `kin_doc` (l'objet document) et `drivers[0]` (le premier de la liste des contraintes de conduite) transférés à cette instance. Enfin, la méthode `exec_()` de la classe ouvre la fenêtre de dialogue.

```
panel = ControlPanel(kin_doc, drivers[0])
panel.exec_()

```

Pour gérer plus d'un contrôleur (driver), nous devons vérifier la liste des contrôleurs et créer une instance pour chaque élément de la liste et transférer l'élément en cours.

```
panel_list = []
for each_driver in drivers:
    panel = ControlPanel(kin_doc, each_driver)
    panel_list.append(panel)
panel.exec_()

```

Ces lignes remplacent la commande `print()` dans la branche else de la fonction `main()`.

Remarque : La collecte d'une `panel_list` nous permet de lancer tous les panneaux en même temps. (Je ne peux pas encore expliquer ce comportement...)

L'exécution de la macro affichera une fenêtre de dialogue vide et propre, en attente de widgets :

![Une fenêtre de dialogue vide](/images/Tutorial_KinCon-01.png)

**La macro jusqu'à présent...**

```
#! python
# -*- coding: utf-8 -*-
# (c) 2021 Your name LGPL

# imports and constants
from PySide2.QtWidgets import (QDialog)

class ControlPanel(QDialog):
    """
    docstring for ControlPanel.
    """
    def __init__(self, document, actuator):
        super(ControlPanel, self).__init__()
        self.initUI(document, actuator)

    def initUI(self, document, actuator):
        # Setting up class parameters
        # the window has 640 x 480 pixels and is centered by default
        # now make the window visible
        self.show()

def findTheDrivingConstraints(document_object):
    # search through the Objects and find the driving constraint
    driver_list = []
    for each in document_object.Objects:
        if each.Label.endswith("Driver"):
            driving_constraint = each.Name
            driver_list.append(driving_constraint)
    return driver_list

def main():
    kin_doc = App.ActiveDocument # Kinematic Document
    drivers = findTheDrivingConstraints(kin_doc)
    if len(drivers) < 1:
        print("No driver found!")
    else:
        panel_list = []
        for each_driver in drivers:
            panel = ControlPanel(kin_doc, each_driver)
            panel_list.append(panel)
        panel.exec_()

if __name__ == "__main__":
    # This will be true only if the file is "executed"
    # but not if imported as a module
    main()

```

[En haut](#top)

#### Paramètres de réglage

Il est maintenant temps de remplir la méthode `initUI()` :

```
...
    def initUI(self, document, actuator):
        # Setting up class parameters
        self.actuator = document.getObject(actuator)
        self.driver_type = self.getDriverType(self.actuator)
        # the window has 640 x 480 pixels and is centered by default
        # now make the window visible
        self.show()
...

```

`self.actuator` représente la contrainte pilote et `self.driver_type` stocke un mot clé pour son type. Ce dernier est utilisé pour choisir la propriété correcte avec chaque contrainte.

##### Méthode getDriverType()

Pour une utilisation future, nous avons besoin du type de pilote (Angle, Distance, Longueur) et donc une méthode `getDriverType()` doit être définie :

```
...
    def getDriverType(self, constraint):
        ANGLE_CONSTRAINTS = [
            "PlaneCoincident",
            "AxialAlignment",
            "PlaneAlignment"
            ] # Angel constraints that use negative values, too
        ANGLE_DEG_CONSTRAINTS = [
            "Angle",
            ] # Angel constraints that use positive values only
        DISTANCE_CONSTRAINTS = [
            "PointDistance",
            "PointsDistance"
            ] # Lenght constraints that use positive values only
        if constraint.ConstraintType in ANGLE_CONSTRAINTS:
            return "Angle"
        elif constraint.ConstraintType in ANGLE_DEG_CONSTRAINTS:
            return "AnglePos"
        elif constraint.ConstraintType in DISTANCE_CONSTRAINTS:
            return "Distance"
        else:
            return "Length"
...

```

Cette méthode vérifie si le type de la contrainte donnée peut être trouvé dans l'une des listes, et renvoie le type de dimension qui doit être contrôlé.

On suppose que dans le document cinématique, le pilote est marqué correctement et fonctionne s'il était édité manuellement. Dans ce cas, il n'est pas nécessaire de filtrer les contraintes géométriques telles que Colinear ou PointsCoincidence (mais ce serait l'endroit pour le faire...).

##### Propriétés de la fenêtre

La taille de la fenêtre est définie par ses dimensions minimale et maximale. En utilisant les mêmes valeurs, on obtient une taille fixe.

Le titre indique le nom du pilote et précise s'il s'agit d'un angle, d'une distance ou d'une longueur. Enfin, on demande à la fenêtre de rester au dessus de toutes les fenêtres.

```
...
        # the window has 640 x 480 pixels and is centered by default
        #- set window dimensions
        self.setMaximumWidth(400)
        self.setMaximumHeight(200)
        self.setMinimumWidth(400)
        self.setMinimumHeight(200)
        self.setWindowTitle(self.actuator.Label + ": " + self.driver_type)
        self.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
        # now make the window visible
...

```

[En haut](#top)

#### Paramètres de réglage supplémentaires

L'étape suivante consiste à extraire la valeur actuelle du pilote et à définir les valeurs de début et de fin par défaut en fonction du type de pilote.

Une distance ne peut pas être négative et exactement nulle, ce qui rend le solveur perplexe. La valeur de départ est donc fixée à 0,001. Les angles acceptent des valeurs négatives et obtiennent des valeurs symétriques. (Si les longueurs acceptent des valeurs négatives reste à prouver finalement...)

Le suffixe de l'unité doit être conservé pour renvoyer la valeur à la propriété de la contrainte à la fin. Les distances et les longueurs nécessitent des valeurs avec des unités.

Le traitement des unités et l'affichage des valeurs sous forme de chaînes de caractères dans plusieurs widgets nécessitent de convertir assez souvent les chiffres en chaînes de caractères et inversement.

Pour compléter les paramètres, nous définissons un nombre de pas par défaut qui doivent être calculés lorsque le mouvement est automatisé et si le commutateur `self.sequence` est réglé sur `True`, une photo sera prise à chaque pas du mouvement.

```
...
        self.steps_value = 10
        self.sequence = False
        if self.driver_type == "Angle":
            self.current_value = self.actuator.Angle
            self.start_value = (self.current_value - 15)
            self.end_value = (self.current_value + 15)
            self.unit_suffix = (" °")
        elif self.driver_type == "AnglePos":
            self.current_value = float(str(self.actuator.Angle)[:-4])
            self.start_value = 0.001 # Angle must not be <= 0 and >=180
            self.end_value = 179.999
            self.unit_suffix = (" °")
        elif self.driver_type == "Distance":
            self.current_value = float(str(self.actuator.Distance)[:-3])
            self.start_value = 0.001 # Distance must not be <= 0
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")
        else:
            self.current_value = float(str(self.actuator.Offset)[:-3])
            self.start_value = (self.current_value - 10)
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")
...

```

[En haut](#top)

### Labels

Maintenant, trois labels sont ajoutés pour afficher le début, la fin et la valeur en cours.

Tout d'abord, la classe `QLabel` doit être importée, c'est-à-dire que la liste d'importation doit être étendue comme ceci :

```
from PySide2.QtWidgets import (QDialog, QLabel)

```

Dans la méthode `initUI()`, nous insérons :

```
...
        # create some labels
        self.label_start = QLabel("", self)
        self.label_start.setFont("osifont") # set to a non-proportional font
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        self.label_start.setGeometry(QtCore.QRect(30, 15, 60, 25))

        self.label_end = QLabel("", self)
        self.label_end.setFont("osifont")
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        self.label_end.setGeometry(QtCore.QRect(320, 15, 60, 25))

        self.label_current = QLabel("", self)
        self.label_current.setFont("osifont")
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        self.label_current.setGeometry(QtCore.QRect(130, 15, 150, 25))
...

```

Le placement est fait avec la méthode héritée `setGeometry()`. Dans ce cas, la description d'un rectangle est utilisée (position X, position Y, largeur, hauteur).

Les première et troisième lignes pourraient être combinées, mais cela n'est pas recommandé pour des raisons de clarté :

```
self.label_end = QLabel((str(round(self.end_value, 1)) + self.unit_suffix), self)

```

L'exécution de la macro avec un document d'assemblage cinématique créerait une fenêtre de dialogue comme celle-ci :

![Une fenêtre de dialogue affichant la valeur de départ, la valeur en vigueur et la valeur finale.](/images/Tutorial_KinCon-02.png)

La fenêtre de dialogue affiche le libellé de la contrainte et le type de pilote dans le titre, ainsi que la valeur de départ, la valeur en cours et la valeur finale sur la première ligne de la zone principale.

**La macro jusqu'à présent...**

```
#! python
# -*- coding: utf-8 -*-
# (c) 2021 Your name LGPL

# imports and constants
from PySide2.QtWidgets import (QDialog, QLabel)

class ControlPanel(QDialog):
    """
    docstring for ControlPanel.
    """
    def __init__(self, document, actuator):
        super(ControlPanel, self).__init__()
        self.initUI(document, actuator)

    def initUI(self, document, actuator):
        # Setting up class parameters
        self.actuator = document.getObject(actuator)
        self.driver_type = self.getDriverType(self.actuator)
        self.steps_value = 10
        self.sequence = False
        if self.driver_type == "Angle":
            self.current_value = self.actuator.Angle
            self.start_value = (self.current_value - 15)
            self.end_value = (self.current_value + 15)
            self.unit_suffix = (" °")
        elif self.driver_type == "AnglePos":
            self.current_value = float(str(self.actuator.Angle)[:-4])
            self.start_value = 0.001 # Angle must not be <= 0 and >=180
            self.end_value = 179.999
            self.unit_suffix = (" °")
        elif self.driver_type == "Distance":
            self.current_value = float(str(self.actuator.Distance)[:-3])
            self.start_value = 0.001 # Distance must not be <= 0
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")
        else:
            self.current_value = float(str(self.actuator.Offset)[:-3])
            self.start_value = (self.current_value - 10)
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")

        # the window has 640 x 480 pixels and is centered by default
        #- set window dimensions
        self.setMaximumWidth(400)
        self.setMaximumHeight(200)
        self.setMinimumWidth(400)
        self.setMinimumHeight(200)
        self.setWindowTitle(self.actuator.Label + ": " + self.driver_type)
        self.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)

        # create some labels
        self.label_start = QLabel("", self)
        self.label_start.setFont("osifont") # set to a non-proportional font
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        self.label_start.setGeometry(QtCore.QRect(30, 15, 60, 25))

        self.label_end = QLabel("", self)
        self.label_end.setFont("osifont")
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        self.label_end.setGeometry(QtCore.QRect(320, 15, 60, 25))

        self.label_current = QLabel("", self)
        self.label_current.setFont("osifont")
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        self.label_current.setGeometry(QtCore.QRect(130, 15, 150, 25))

        # now make the window visible
        self.show()

    def getDriverType(self, constraint):
        ANGLE_CONSTRAINTS = [
            "PlaneCoincident",
            "AxialAlignment",
            "PlaneAlignment"
            ] # Angel constraints that use negative values, too
        ANGLE_DEG_CONSTRAINTS = [
            "Angle",
            ] # Angel constraints that use positive values only
        DISTANCE_CONSTRAINTS = [
            "PointDistance",
            "PointsDistance"
            ]
        if constraint.ConstraintType in ANGLE_CONSTRAINTS:
            return "Angle"
        elif constraint.ConstraintType in ANGLE_DEG_CONSTRAINTS:
            return "AnglePos"
        elif constraint.ConstraintType in DISTANCE_CONSTRAINTS:
            return "Distance"
        else:
            return "Length"

# End of ControlPanel()
# Main section below:

def findTheDrivingConstraints(document_object):
    # search through the Objects and find the driving constraint
    driver_list = []
    for each in document_object.Objects:
        if each.Label.endswith("Driver"):
            driving_constraint = each.Name
            driver_list.append(driving_constraint)
    return driver_list

def main():
    kin_doc = App.ActiveDocument # Kinematic Document
    drivers = findTheDrivingConstraints(kin_doc)
    if len(drivers) < 1:
        print("No driver found!")
    else:
        panel_list = []
        for each_driver in drivers:
            panel = ControlPanel(kin_doc, each_driver)
            panel_list.append(panel)
        panel.exec_()

if __name__ == "__main__":
    # This will be true only if the file is "executed"
    # but not if imported as a module
    main()

```

[En haut](#top)

#### Curseur

Pour changer la valeur courante à n'importe quel nombre entre la valeur de début et la valeur de fin, un widget de curseur conviendrait.

Tout d'abord, la classe `QSlider` doit être importée, c'est-à-dire que la liste d'importation doit être étendue comme ceci :

```
from PySide2.QtWidgets import (QDialog, QLabel, QSlider)

```

De retour dans la méthode `initUI()` et juste après la section des labels, nous insérons :

```
...
        # Horizontal slider
        self.actuator_slider = QSlider(self)                             # create horizontalSlider
        self.actuator_slider.setOrientation(QtCore.Qt.Horizontal)        # orientation horizontal
        self.actuator_slider.setGeometry(QtCore.QRect(30, 50, 330, 25))  # position coordinates
        self.actuator_slider.setObjectName("horizontalSlider")           # object name
        self.actuator_slider.setInvertedAppearance(False)                # default: right to left
        self.actuator_slider.setRange(0, 100)                            # default: (0, 99)
        self.actuator_slider.setValue(self.current_value / self.stepRatio())
        self.actuator_slider.valueChanged.connect(self.onActuatorSlider)
...

```

Le bouton du curseur est placé avec la méthode `setValue()`. Sa valeur doit être calculée à partir de la valeur actuelle et d'un rapport de progression. Le rapport doit être calculé à chaque fois qu'une valeur de début ou de fin est modifiée. Nous insérons donc une autre méthode après la méthode `getDriverType()`.

Travailler avec un ratio au lieu de modifier les valeurs min et max du curseur présente l'avantage d'une résolution plus fine pour les petites valeurs.

```
...
    def stepRatio(self):
        ratio = (self.end_value - self.start_value) / 100
        return ratio
...

```

Et après celle-ci, vient une autre méthode définissant ce qu'il faut faire lorsque la position du curseur ou la valeur du curseur change. La méthode `onActuatorSlider()` est appelée par la méthode `connect()` qui fournit également la valeur du curseur comme argument.

Il recalcule la valeur courante à partir de la position du curseur, réécrit le texte du label `self.label_current` et modifie la propriété de la contrainte en fonction du type de curseur.

L'exécution de la commande `"asm3CmdQuickSolve"` lance le solveur pour réorganiser les pièces de l'assemblage avec la valeur modifiée.

```
...
    def onActuatorSlider(self, slider_value):
        self.current_value = slider_value * self.stepRatio() + self.start_value
        if self.driver_type == "Angle":
            self.actuator.Angle = self.current_value
        elif self.driver_type == "AnglePos":
            self.actuator.Angle = self.current_value
        elif self.driver_type == "Distance":
            self.actuator.Distance = self.current_value
        else:
            self.actuator.Offset = self.current_value
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        Gui.runCommand("asm3CmdQuickSolve", 0)
...

```

La fenêtre de dialogue avec le curseur doit ressembler à ceci et est prête à contrôler un mouvement :

![Deux fenêtres de dialogue avec un curseur](/images/Tutorial_KinCon-03.png)

Fenêtres de dialogue avec le curseur ajouté, une pour un pilote d'angle et une pour un pilote de distance

Nous pouvons lancer une fenêtre de dialogue pour n'importe quel document ouvert, elles n'interféreront pas entre elles.

[En haut](#top)

#### Champs de saisie de texte

Pour définir les valeurs de début et de fin, nous utilisons un widget d'édition de ligne.

Tout d'abord, la classe `QLineEdit` doit être importée, c'est-à-dire que la liste d'importation doit être étendue comme ceci :

```
from PySide2.QtWidgets import (QDialog, QLabel, QSlider, QLineEdit)

```

De retour dans la méthode `initUI()` et entre les labels et les sections du curseur, nous insérons :

```
...
        # text input field - Start value
        self.entry_start = QLineEdit(self)
        self.entry_start.setText(str(round(self.start_value, 1)))
        self.entry_start.setGeometry(QtCore.QRect(30, 80, 50, 25))
        self.entry_start.textChanged[str].connect(self.onEntryStart)

        # text input field - End value
        self.entry_end = QLineEdit(self)
        self.entry_end.setText(str(round(self.end_value, 1)))
        self.entry_end.setGeometry(QtCore.QRect(320, 80, 50, 25))
        self.entry_end.textChanged[str].connect(self.onEntryEnd)
...

```

Les champs de saisie affichent les valeurs de début et de fin par défaut. Ils ne sont pas complets tant que nous n'avons pas ajouté les méthodes permettant de traiter les entrées modifiées. Ceci sera fait par les méthodes `self.onEntryStart()` et `self.onEntryEnd()` qui sont insérées entre les méthodes `self.stepRatio()` et `self.onActuatorSlider()`.

```
...
    def onEntryStart(self, new_start):
        self.start_value = float(new_start)
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        # Update the slider
        slider_value = ((self.current_value - self.start_value) / self.stepRatio())
        self.actuator_slider.setValue(slider_value)

    def onEntryEnd(self, new_end):
        self.end_value = float(new_end)
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        # Update the slider
        slider_value = ((self.current_value - self.start_value) / self.stepRatio())
        self.actuator_slider.setValue(slider_value)
...

```

Les deux convertissent la valeur de la chaîne reçue en un nombre à virgule flottante et modifient soit `self.start_value` soit `self.end_value` et l'intitulé correspondant en conséquence. Ensuite, la valeur du curseur est mise à jour.

La fenêtre de dialogue avec les champs de saisie de texte doit ressembler à ceci et est prête à modifier la portée d'un mouvement :

![Deux fenêtres de dialogue avec champs d'édition de ligne](/images/Tutorial_KinCon-04.png)

Fenêtres de dialogue avec champs d'édition de ligne, à nouveau pour un pilote d'angle et de distance

.

**La macro jusqu'à présent...**

```
#! python
# -*- coding: utf-8 -*-
# (c) 2021 Your name LGPL

# imports and constants
from PySide2.QtWidgets import (QDialog, QLabel, QSlider, QLineEdit)

class ControlPanel(QDialog):
    """
    docstring for ControlPanel.
    """
    def __init__(self, document, actuator):
        super(ControlPanel, self).__init__()
        self.initUI(document, actuator)

    def initUI(self, document, actuator):
        # Setting up class parameters
        self.actuator = document.getObject(actuator)
        self.driver_type = self.getDriverType(self.actuator)
        self.steps_value = 10
        self.sequence = False
        if self.driver_type == "Angle":
            self.current_value = self.actuator.Angle
            self.start_value = (self.current_value - 15)
            self.end_value = (self.current_value + 15)
            self.unit_suffix = (" °")
        elif self.driver_type == "AnglePos":
            self.current_value = float(str(self.actuator.Angle)[:-4])
            self.start_value = 0.001 # Angle must not be <= 0 and >=180
            self.end_value = 179.999
            self.unit_suffix = (" °")
        elif self.driver_type == "Distance":
            self.current_value = float(str(self.actuator.Distance)[:-3])
            self.start_value = 0.001 # Distance must not be <= 0
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")
        else:
            self.current_value = float(str(self.actuator.Offset)[:-3])
            self.start_value = (self.current_value - 10)
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")

        # the window has 640 x 480 pixels and is centered by default
        #- set window dimensions
        self.setMaximumWidth(400)
        self.setMaximumHeight(200)
        self.setMinimumWidth(400)
        self.setMinimumHeight(200)
        self.setWindowTitle(self.actuator.Label + ": " + self.driver_type)
        self.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)

        # create some labels
        self.label_start = QLabel("", self)
        self.label_start.setFont("osifont") # set to a non-proportional font
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        self.label_start.setGeometry(QtCore.QRect(30, 15, 60, 25))

        self.label_end = QLabel("", self)
        self.label_end.setFont("osifont")
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        self.label_end.setGeometry(QtCore.QRect(320, 15, 60, 25))

        self.label_current = QLabel("", self)
        self.label_current.setFont("osifont")
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        self.label_current.setGeometry(QtCore.QRect(130, 15, 150, 25))

        # create some input elements

        # text input field - Start value
        self.entry_start = QLineEdit(self)
        self.entry_start.setText(str(round(self.start_value, 1)))
        self.entry_start.setGeometry(QtCore.QRect(30, 80, 50, 25))
        self.entry_start.textChanged[str].connect(self.onEntryStart)

        # text input field - End value
        self.entry_end = QLineEdit(self)
        self.entry_end.setText(str(round(self.end_value, 1)))
        self.entry_end.setGeometry(QtCore.QRect(320, 80, 50, 25))
        self.entry_end.textChanged[str].connect(self.onEntryEnd)

        # Horizontal slider
        self.actuator_slider = QSlider(self)                             # create horizontalSlider
        self.actuator_slider.setOrientation(QtCore.Qt.Horizontal)        # orientation horizontal
        self.actuator_slider.setGeometry(QtCore.QRect(30, 50, 330, 25))  # position coordinates
        self.actuator_slider.setObjectName("horizontalSlider")           # object name
        self.actuator_slider.setInvertedAppearance(False)                # default: right to left
        self.actuator_slider.setRange(0, 100)                            # default: (0, 99)
        self.actuator_slider.setValue(self.current_value / self.stepRatio())
        self.actuator_slider.valueChanged.connect(self.onActuatorSlider)

        # now make the window visible
        self.show()

    def getDriverType(self, constraint):
        ANGLE_CONSTRAINTS = [
            "PlaneCoincident",
            "AxialAlignment",
            "PlaneAlignment"
            ] # Angel constraints that use negative values, too
        ANGLE_DEG_CONSTRAINTS = [
            "Angle",
            ] # Angel constraints that use positive values only
        DISTANCE_CONSTRAINTS = [
            "PointDistance",
            "PointsDistance"
            ] # Lenght constraints that use positive values only
        if constraint.ConstraintType in ANGLE_CONSTRAINTS:
            return "Angle"
        elif constraint.ConstraintType in ANGLE_DEG_CONSTRAINTS:
            return "AnglePos"
        elif constraint.ConstraintType in DISTANCE_CONSTRAINTS:
            return "Distance"
        else:
            return "Length"

    def stepRatio(self):
        ratio = (self.end_value - self.start_value) / 100
        return ratio

    def onEntryStart(self, new_start):
        self.start_value = float(new_start)
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        # Update the slider
        slider_value = ((self.current_value - self.start_value) / self.stepRatio())
        self.actuator_slider.setValue(slider_value)

    def onEntryEnd(self, new_end):
        self.end_value = float(new_end)
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        # Update the slider
        slider_value = ((self.current_value - self.start_value) / self.stepRatio())
        self.actuator_slider.setValue(slider_value)

    def onActuatorSlider(self, slider_value):
        self.current_value = slider_value * self.stepRatio() + self.start_value
        if self.driver_type == "Angle":
            self.actuator.Angle = self.current_value
        elif self.driver_type == "AnglePos":
            self.actuator.Angle = self.current_value
        elif self.driver_type == "Distance":
            self.actuator.Distance = self.current_value
        else:
            self.actuator.Offset = self.current_value
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        Gui.runCommand("asm3CmdQuickSolve", 0)
        print(slider_value, self.current_value)

# End of ControlPanel()
# Main section below:

def findTheDrivingConstraints(document_object):
    # search through the Objects and find the driving constraint
    driver_list = []
    for each in document_object.Objects:
        if each.Label.endswith("Driver"):
            driving_constraint = each.Name
            driver_list.append(driving_constraint)
    return driver_list

def main():
    kin_doc = App.ActiveDocument # Kinematic Document
    drivers = findTheDrivingConstraints(kin_doc)
    if len(drivers) < 1:
        print("No driver found!")
    else:
        panel_list = []
        for each_driver in drivers:
            panel = ControlPanel(kin_doc, each_driver)
            panel_list.append(panel)
        panel.exec_()

if __name__ == "__main__":
    # This will be true only if the file is "executed"
    # but not if imported as a module
    main()

```

[En haut](#top)

### Mouvement

Pour mettre l'assemblage en mouvement, nous avons besoin :

* Des boutons pour déclencher le mouvement dans la direction souhaitée.
* Un champ de saisie pour modifier le nombre de pas pour des mouvements plus rapides ou plus doux.
* Une case à cocher pour indiquer si nous voulons prendre une séquence d'images.

#### Boutons avant et arrière

Pour déplacer automatiquement les pièces de l'assemblage, nous avons besoin de deux boutons pour déclencher les mouvements, un vers la position de départ et un vers la position d'arrivée. Ces deux boutons et un bouton de fermeture utiliseront un widget `QPushButton`.

Les petits assemblages calculent un peu trop vite et montrent des sauts au lieu d'un mouvement régulier. Pour le ralentir, nous utilisons la méthode `sleep()` du module `time` qui doit être importé en premier.

Another import and another widget:

```
import time
from PySide2.QtWidgets import (QDialog, QLabel, QSlider, QLineEdit, QPushButton)

```

Dans la méthode `initUI()`, nous insérons les boutons après la section du curseur :

```
...
        # forward button
        self.forward_button = QPushButton(">->", self)
        self.forward_button.setGeometry(QtCore.QRect(240, 80, 50, 25))
        self.forward_button.setAutoDefault(False)
        self.forward_button.clicked.connect(self.onForward)
        # backward button
        self.backward_button = QPushButton("<-<", self)
        self.backward_button.setGeometry(QtCore.QRect(100, 80, 50, 25))
        self.backward_button.setAutoDefault(False)
        self.backward_button.clicked.connect(self.onBackward)
        # close button
        self.close_button = QPushButton("Close window", self)
        self.close_button.setGeometry(QtCore.QRect(120, 160, 130, 25))
        self.close_button.setAutoDefault(False)
        self.close_button.clicked.connect(self.onClose)
...

```

Les méthodes traitant des boutons enfoncés sont `self.onForward()`, `self.onBackward()`, et `self.onClose()`. Ils sont insérés après la méthode `onActuatorSlider()`.

```
...
    def onForward(self):
        steps_left = self.steps_value
        print(self.steps_value)
        step = ((self.end_value - self.current_value) / steps_left)
        while steps_left > 0:
            self.current_value += step
            slider_value = ((self.current_value - self.start_value) / self.stepRatio())
            self.actuator_slider.setValue(slider_value)
            time.sleep(0.2)
            steps_left -= 1
        self.actuator_slider.setValue(100)

    def onBackward(self):
        steps_left = self.steps_value
        step = ((self.current_value - self.start_value) / steps_left)
        while steps_left > 0:
            self.current_value -= step
            slider_value = ((self.current_value - self.start_value) / self.stepRatio())
            self.actuator_slider.setValue(slider_value)
            time.sleep(0.2)
            steps_left -= 1
        self.actuator_slider.setValue(0)

    def onClose(self):
        self.result = "Closed"
        self.close()
...

```

La méthode `self.onClose()` fait appel à la méthode héritée `self.close()` qui ferme simplement la fenêtre de dialogue et clôt ainsi la macro.

Les deux `self.onForward()` et `self.onBackward()` comptent les pas qu'il reste à faire pour atteindre la position voulue et calculent la longueur d'un pas en fonction du nombre de pas. Pour l'instant, nous utilisons le nombre par défaut de 10 pas.

Chaque tour de la boucle while augmente/diminue la valeur en cours et met à jour les valeurs du curseur qui déclenche `onActuatorSlider()` en arrière-plan (voir [Paragraphe curseur](#Curseur)). Après une pause pour laisser l'ordinateur fournir une autre vue 3D actualisée, le décompte des étapes restantes termine la boucle.

S'il n'y a plus de pas, le curseur est placé sur la première/dernière position du curseur, juste au cas où une erreur d'arrondi se serait produite.

La fenêtre de dialogue avec les boutons doit ressembler à ceci et vous pouvez maintenant déplacer l'assemblage de 10 pas vers la position de début/fin souhaitée :

![Fenêtre de dialogue avec boutons](/images/Tutorial_KinCon-05.png)

Fenêtre de dialogue avec boutons

**La macro jusqu'à présent...**

```
#! python
# -*- coding: utf-8 -*-
# (c) 2021 Your name LGPL

# imports and constants
import time
from PySide2.QtWidgets import (QDialog, QLabel, QSlider, QLineEdit, QPushButton)

class ControlPanel(QDialog):
    """
    docstring for ControlPanel.
    """
    def __init__(self, document, actuator):
        super(ControlPanel, self).__init__()
        self.initUI(document, actuator)

    def initUI(self, document, actuator):
        # Setting up class parameters
        self.actuator = document.getObject(actuator)
        self.driver_type = self.getDriverType(self.actuator)
        self.steps_value = 10
        self.sequence = False
        if self.driver_type == "Angle":
            self.current_value = self.actuator.Angle
            self.start_value = (self.current_value - 15)
            self.end_value = (self.current_value + 15)
            self.unit_suffix = (" °")
        elif self.driver_type == "AnglePos":
            self.current_value = float(str(self.actuator.Angle)[:-4])
            self.start_value = 0.001 # Angle must not be <= 0 and >=180
            self.end_value = 179.999
            self.unit_suffix = (" °")
        elif self.driver_type == "Distance":
            self.current_value = float(str(self.actuator.Distance)[:-3])
            self.start_value = 0.001 # Distance must not be <= 0
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")
        else:
            self.current_value = float(str(self.actuator.Offset)[:-3])
            self.start_value = (self.current_value - 10)
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")

        # the window has 640 x 480 pixels and is centered by default
        #- set window dimensions
        self.setMaximumWidth(400)
        self.setMaximumHeight(200)
        self.setMinimumWidth(400)
        self.setMinimumHeight(200)
        self.setWindowTitle(self.actuator.Label + ": " + self.driver_type)
        self.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)

        # create some labels
        self.label_start = QLabel("", self)
        self.label_start.setFont("osifont") # set to a non-proportional font
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        self.label_start.setGeometry(QtCore.QRect(30, 15, 60, 25))

        self.label_end = QLabel("", self)
        self.label_end.setFont("osifont")
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        self.label_end.setGeometry(QtCore.QRect(320, 15, 60, 25))

        self.label_current = QLabel("", self)
        self.label_current.setFont("osifont")
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        self.label_current.setGeometry(QtCore.QRect(130, 15, 150, 25))

        # create some input elements

        # text input field - Start value
        self.entry_start = QLineEdit(self)
        self.entry_start.setText(str(round(self.start_value, 1)))
        self.entry_start.setGeometry(QtCore.QRect(30, 80, 50, 25))
        self.entry_start.textChanged[str].connect(self.onEntryStart)

        # text input field - End value
        self.entry_end = QLineEdit(self)
        self.entry_end.setText(str(round(self.end_value, 1)))
        self.entry_end.setGeometry(QtCore.QRect(320, 80, 50, 25))
        self.entry_end.textChanged[str].connect(self.onEntryEnd)

        # Horizontal slider
        self.actuator_slider = QSlider(self)                             # create horizontalSlider
        self.actuator_slider.setOrientation(QtCore.Qt.Horizontal)        # orientation horizontal
        self.actuator_slider.setGeometry(QtCore.QRect(30, 50, 330, 25))  # position coordinates
        self.actuator_slider.setObjectName("horizontalSlider")           # object name
        self.actuator_slider.setInvertedAppearance(False)                # default: right to left
        self.actuator_slider.setRange(0, 100)                            # default: (0, 99)
        self.actuator_slider.setValue(self.current_value / self.stepRatio())
        self.actuator_slider.valueChanged.connect(self.onActuatorSlider)

        # forward button
        self.forward_button = QPushButton(">->", self)
        self.forward_button.setGeometry(QtCore.QRect(240, 80, 50, 25))
        self.forward_button.setAutoDefault(False)
        self.forward_button.clicked.connect(self.onForward)
        # backward button
        self.backward_button = QPushButton("<-<", self)
        self.backward_button.setGeometry(QtCore.QRect(100, 80, 50, 25))
        self.backward_button.setAutoDefault(False)
        self.backward_button.clicked.connect(self.onBackward)
        # close button
        self.close_button = QPushButton("Close window", self)
        self.close_button.setGeometry(QtCore.QRect(120, 160, 130, 25))
        self.close_button.setAutoDefault(False)
        self.close_button.clicked.connect(self.onClose)

        # now make the window visible
        self.show()

    def getDriverType(self, constraint):
        ANGLE_CONSTRAINTS = [
            "PlaneCoincident",
            "AxialAlignment",
            "PlaneAlignment"
            ] # Angel constraints that use negative values, too
        ANGLE_DEG_CONSTRAINTS = [
            "Angle",
            ] # Angel constraints that use positive values only
        DISTANCE_CONSTRAINTS = [
            "PointDistance",
            "PointsDistance"
            ] # Lenght constraints that use positive values only
        if constraint.ConstraintType in ANGLE_CONSTRAINTS:
            return "Angle"
        elif constraint.ConstraintType in ANGLE_DEG_CONSTRAINTS:
            return "AnglePos"
        elif constraint.ConstraintType in DISTANCE_CONSTRAINTS:
            return "Distance"
        else:
            return "Length"

    def stepRatio(self):
        ratio = (self.end_value - self.start_value) / 100
        return ratio

    def onEntryStart(self, new_start):
        self.start_value = float(new_start)
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        # Update the slider
        slider_value = ((self.current_value - self.start_value) / self.stepRatio())
        self.actuator_slider.setValue(slider_value)

    def onEntryEnd(self, new_end):
        self.end_value = float(new_end)
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        # Update the slider
        slider_value = ((self.current_value - self.start_value) / self.stepRatio())
        self.actuator_slider.setValue(slider_value)

    def onActuatorSlider(self, slider_value):
        self.current_value = slider_value * self.stepRatio() + self.start_value
        if self.driver_type == "Angle":
            self.actuator.Angle = self.current_value
        elif self.driver_type == "AnglePos":
            self.actuator.Angle = self.current_value
        elif self.driver_type == "Distance":
            self.actuator.Distance = self.current_value
        else:
            self.actuator.Offset = self.current_value
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        FreeCADGui.updateGui() # screen update between steps
        Gui.runCommand("asm3CmdQuickSolve", 0)

    def onForward(self):
        steps_left = self.steps_value
        print(self.steps_value)
        step = ((self.end_value - self.current_value) / steps_left)
        while steps_left > 0:
            self.current_value += step
            slider_value = ((self.current_value - self.start_value) / self.stepRatio())
            self.actuator_slider.setValue(slider_value)
            time.sleep(0.2)
            steps_left -= 1
        self.actuator_slider.setValue(100)

    def onBackward(self):
        steps_left = self.steps_value
        step = ((self.current_value - self.start_value) / steps_left)
        while steps_left > 0:
            self.current_value -= step
            slider_value = ((self.current_value - self.start_value) / self.stepRatio())
            self.actuator_slider.setValue(slider_value)
            time.sleep(0.2)
            steps_left -= 1
        self.actuator_slider.setValue(0)

    def onClose(self):
        self.result = "Closed"
        self.close()

# End of ControlPanel()
# Main section below:

def findTheDrivingConstraints(document_object):
    # search through the Objects and find the driving constraint
    driver_list = []
    for each in document_object.Objects:
        if each.Label.endswith("Driver"):
            driving_constraint = each.Name
            driver_list.append(driving_constraint)
    return driver_list

def main():
    kin_doc = App.ActiveDocument # Kinematic Document
    drivers = findTheDrivingConstraints(kin_doc)
    if len(drivers) < 1:
        print("No driver found!")
    else:
        panel_list = []
        for each_driver in drivers:
            panel = ControlPanel(kin_doc, each_driver)
            panel_list.append(panel)
        panel.exec_()

if __name__ == "__main__":
    # This will be true only if the file is "executed"
    # but not if imported as a module
    main()

```

[En haut](#top)

#### Nombre d'étapes

Le paramètre par défaut est d'obtenir une impression rapide si l'assemblage se déroule comme prévu sans perdre trop de temps de calcul.

Si les pièces sautent au lieu de se déplacer en douceur, ou si les pilotes basés sur les angles ont tendance à poser des problèmes lorsque la différence entre deux angles est trop importante, ces deux problèmes peuvent être résolus en augmentant le nombre d'étapes.

Un autre widget d'édition de ligne est donc utilisé pour modifier le nombre d'étapes (placé après les widgets d'édition de ligne existants) :

```
...
        # text input field - number of steps
        self.entry_steps = QLineEdit(self)
        self.entry_steps.setText(str(int(self.steps_value)))
        self.entry_steps.setGeometry(QtCore.QRect(180, 80, 50, 25))
        self.entry_steps.textChanged[str].connect(self.onEntrySteps)
...

```

La méthode connexe `self.onEntrySteps()` remplit simplement le paramètre `self.step_value` avec la valeur saisie. Elle est insérée après la méthode `onEntryEnd()`.

```
...
    def onEntrySteps(self, new_steps):
        self.steps_value = int(new_steps)
...

```

La fenêtre de dialogue permettant de modifier le nombre d'étapes doit ressembler à ceci :

![Fenêtre de dialogue avec un autre champ de saisie de texte](/images/Tutorial_KinCon-06.png)

Fenêtre de dialogue avec un autre champ de saisie de texte

[En haut](#top)

#### Séquence d'images

Lorsque le mouvement de notre assemblage répond à nos attentes, nous pouvons prendre une photo de chaque étape. La séquence d'images qui en résulte peut être utilisée pour créer une courte animation gif.

Pour mettre en œuvre cette fonctionnalité, nous avons besoin d'un widget `QCheckBox`, et d'un répertoire pour stocker les images.

Une importation et un widget de plus :

```
import time
from PySide2.QtWidgets import (QDialog, QLabel, QSlider, QLineEdit, QPushButton, QCheckBox)

```

Dans la méthode `initUI()`, nous insérons la case à cocher après la section du curseur :

```
...
        # output check box
        self.output_check = QCheckBox(self)
        self.output_check.setGeometry(QtCore.QRect(40, 120, 300, 25))
        self.output_check.setChecked(False)
        self.output_check.setText("Check to record an image sequence")
        self.output_check.setObjectName("checkBoxOutput")
        self.output_check.clicked.connect(self.onOutputClicked)
...

```

La méthode `onOutputClicked()` synchronise le paramètre `self.sequence` et l'affichage de la coche.

```
...
    def onOutputClicked(self):
        if self.sequence == True:
            self.sequence = False
            self.output_check.setChecked(False)
        else:
            self.sequence = True
            self.output_check.setChecked(True)
...

```

Pour définir les paramètres de sortie, nous utilisons la méthode `output()` :

```
...
    def output(self, counter):
        if (self.sequence == True):
            image_path = ".../FreeCAD/ScreenShots/Sequence"
            file_tag = ".png"
            height = 640
            width = 480
            background = "Transparent"
            # dealing with leading zeros
            if (counter > 999) or (counter < 0):
                print("Out of Range")
            elif (counter < 10):
                number = "00" + str(counter)
            elif (counter < 100):
                number = "0" + str(counter)
            else:
                number = str(counter)
            # Screen shot
            Gui.activeDocument().activeView().saveImage(image_path + number + file_tag, height, width, background)
...

```

Tout d'abord, le chemin de l'image doit être adapté à votre système d'exploitation ; la dernière partie est le nom de l'image sans le numéro du moment et la balise du fichier. Ceci doit être fait manuellement pour le moment.

Ensuite, suivent la balise du fichier pour terminer le nom de l'image, la hauteur et la largeur de l'image, et la façon dont le fond doit être rempli (`"Current"` (fond de la vue 3D), `"White"`, `"Black"`, ou `"Transparent"`).

Pour avoir toujours un nombre à 3 chiffres, des zéros de tête doivent être préfixés au paramètre du compteur.

Enfin, la version scriptée de la commande ![](/images/Std_ViewScreenShot.svg) [Std Capture d'écran](/Std_ViewScreenShot/fr "Std ViewScreenShot/fr") est utilisée pour prendre une photo en fonction des paramètres mentionnés.

Toujours pas de photos prises !?! Pas de problème, car cette méthode n'est pas encore appelée, et nous devons donc insérer un appel dans la boucle while de `onForward()` et `onBackward()`. Juste après `time.sleep(0.2)`, nous insérons cette ligne :

```
...
            self.output(steps_left)
...

```

Maintenant, la macro devrait être prête à contrôler un assemblage et à prendre des photos pour un gif animé.

La version finale de la fenêtre de dialogue :

![Fenêtre de dialogue terminée](/images/Tutorial_KinCon-07.png)

Fenêtre de dialogue terminée

**Et finalement, la macro entière**

**N'oubliez pas de définir le chemin dans la méthode output() !**

```
#! python
# -*- coding: utf-8 -*-
# (c) 2021 Your name LGPL

# imports and constants
import time
from PySide2.QtWidgets import (QDialog, QLabel, QSlider, QLineEdit, QPushButton, QCheckBox)

class ControlPanel(QDialog):
    """
    docstring for ControlPanel.
    """
    def __init__(self, document, actuator):
        super(ControlPanel, self).__init__()
        self.initUI(document, actuator)

    def initUI(self, document, actuator):
        # Setting up class parameters
        self.actuator = document.getObject(actuator)
        self.driver_type = self.getDriverType(self.actuator)
        self.steps_value = 10
        self.sequence = False
        if self.driver_type == "Angle":
            self.current_value = self.actuator.Angle
            self.start_value = (self.current_value - 15)
            self.end_value = (self.current_value + 15)
            self.unit_suffix = (" °")
        elif self.driver_type == "AnglePos":
            self.current_value = float(str(self.actuator.Angle)[:-4])
            self.start_value = 0.001 # Angle must not be <= 0 and >=180
            self.end_value = 179.999
            self.unit_suffix = (" °")
        elif self.driver_type == "Distance":
            self.current_value = float(str(self.actuator.Distance)[:-3])
            self.start_value = 0.001 # Distance must not be <= 0
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")
        else:
            self.current_value = float(str(self.actuator.Offset)[:-3])
            self.start_value = (self.current_value - 10)
            self.end_value = (self.current_value + 10)
            self.unit_suffix = (" mm")

        # the window has 640 x 480 pixels and is centered by default
        #- set window dimensions
        self.setMaximumWidth(400)
        self.setMaximumHeight(200)
        self.setMinimumWidth(400)
        self.setMinimumHeight(200)
        self.setWindowTitle(self.actuator.Label + ": " + self.driver_type)
        self.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)

        # create some labels
        self.label_start = QLabel("", self)
        self.label_start.setFont("osifont") # set to a non-proportional font
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        self.label_start.setGeometry(QtCore.QRect(30, 15, 60, 25))

        self.label_end = QLabel("", self)
        self.label_end.setFont("osifont")
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        self.label_end.setGeometry(QtCore.QRect(320, 15, 60, 25))

        self.label_current = QLabel("", self)
        self.label_current.setFont("osifont")
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        self.label_current.setGeometry(QtCore.QRect(130, 15, 150, 25))

        # create some input elements

        # text input field - Start value
        self.entry_start = QLineEdit(self)
        self.entry_start.setText(str(round(self.start_value, 1)))
        self.entry_start.setGeometry(QtCore.QRect(30, 80, 50, 25))
        self.entry_start.textChanged[str].connect(self.onEntryStart)

        # text input field - End value
        self.entry_end = QLineEdit(self)
        self.entry_end.setText(str(round(self.end_value, 1)))
        self.entry_end.setGeometry(QtCore.QRect(320, 80, 50, 25))
        self.entry_end.textChanged[str].connect(self.onEntryEnd)

        # text input field - number of steps
        self.entry_steps = QLineEdit(self)
        self.entry_steps.setText(str(int(self.steps_value)))
        self.entry_steps.setGeometry(QtCore.QRect(180, 80, 50, 25))
        self.entry_steps.textChanged[str].connect(self.onEntrySteps)

        # Horizontal slider
        self.actuator_slider = QSlider(self)                             # create horizontalSlider
        self.actuator_slider.setOrientation(QtCore.Qt.Horizontal)        # orientation horizontal
        self.actuator_slider.setGeometry(QtCore.QRect(30, 50, 330, 25))  # position coordinates
        self.actuator_slider.setObjectName("horizontalSlider")           # object name
        self.actuator_slider.setInvertedAppearance(False)                # default: right to left
        self.actuator_slider.setRange(0, 100)                            # default: (0, 99)
        self.actuator_slider.setValue(self.current_value / self.stepRatio())
        self.actuator_slider.valueChanged.connect(self.onActuatorSlider)

        # output check box
        self.output_check = QCheckBox(self)
        self.output_check.setGeometry(QtCore.QRect(40, 120, 300, 25))
        self.output_check.setChecked(False)
        self.output_check.setText("Check to record an image sequence")
        self.output_check.setObjectName("checkBoxOutput")
        self.output_check.clicked.connect(self.onOutputClicked)

        # forward button
        self.forward_button = QPushButton(">->", self)
        self.forward_button.setGeometry(QtCore.QRect(240, 80, 50, 25))
        self.forward_button.setAutoDefault(False)
        self.forward_button.clicked.connect(self.onForward)
        # backward button
        self.backward_button = QPushButton("<-<", self)
        self.backward_button.setGeometry(QtCore.QRect(100, 80, 50, 25))
        self.backward_button.setAutoDefault(False)
        self.backward_button.clicked.connect(self.onBackward)
        # close button
        self.close_button = QPushButton("Close window", self)
        self.close_button.setGeometry(QtCore.QRect(120, 160, 130, 25))
        self.close_button.setAutoDefault(False)
        self.close_button.clicked.connect(self.onClose)

        # now make the window visible
        self.show()

    def getDriverType(self, constraint):
        ANGLE_CONSTRAINTS = [
            "PlaneCoincident",
            "AxialAlignment",
            "PlaneAlignment"
            ] # Angel constraints that use negative values, too
        ANGLE_DEG_CONSTRAINTS = [
            "Angle",
            ] # Angel constraints that use positive values only
        DISTANCE_CONSTRAINTS = [
            "PointDistance",
            "PointsDistance"
            ] # Lenght constraints that use positive values only
        if constraint.ConstraintType in ANGLE_CONSTRAINTS:
            return "Angle"
        elif constraint.ConstraintType in ANGLE_DEG_CONSTRAINTS:
            return "AnglePos"
        elif constraint.ConstraintType in DISTANCE_CONSTRAINTS:
            return "Distance"
        else:
            return "Length"

    def stepRatio(self):
        ratio = (self.end_value - self.start_value) / 100
        return ratio

    def onEntryStart(self, new_start):
        self.start_value = float(new_start)
        self.label_start.setText(str(round(self.start_value, 1)) + self.unit_suffix)
        # Update the slider
        slider_value = ((self.current_value - self.start_value) / self.stepRatio())
        self.actuator_slider.setValue(slider_value)

    def onEntryEnd(self, new_end):
        self.end_value = float(new_end)
        self.label_end.setText(str(round(self.end_value, 1)) + self.unit_suffix)
        # Update the slider
        slider_value = ((self.current_value - self.start_value) / self.stepRatio())
        self.actuator_slider.setValue(slider_value)

    def onEntrySteps(self, new_steps):
        self.steps_value = int(new_steps)

    def onActuatorSlider(self, slider_value):
        self.current_value = slider_value * self.stepRatio() + self.start_value
        if self.driver_type == "Angle":
            self.actuator.Angle = self.current_value
        elif self.driver_type == "AnglePos":
            self.actuator.Angle = self.current_value
        elif self.driver_type == "Distance":
            self.actuator.Distance = self.current_value
        else:
            self.actuator.Offset = self.current_value
        self.label_current.setText("Current value: " + str(round(self.current_value, 1)) + self.unit_suffix)
        FreeCADGui.updateGui() # screen update between steps
        Gui.runCommand("asm3CmdQuickSolve", 0)

    def onForward(self):
        steps_left = self.steps_value
        print(self.steps_value)
        step = ((self.end_value - self.current_value) / steps_left)
        while steps_left > 0:
            self.current_value += step
            slider_value = ((self.current_value - self.start_value) / self.stepRatio())
            self.actuator_slider.setValue(slider_value)
            time.sleep(0.2)
            self.output(steps_left)
            steps_left -= 1
        self.actuator_slider.setValue(100)

    def onBackward(self):
        steps_left = self.steps_value
        step = ((self.current_value - self.start_value) / steps_left)
        while steps_left > 0:
            self.current_value -= step
            slider_value = ((self.current_value - self.start_value) / self.stepRatio())
            self.actuator_slider.setValue(slider_value)
            time.sleep(0.2)
            self.output(steps_left)
            steps_left -= 1
        self.actuator_slider.setValue(0)

    def onClose(self):
        self.result = "Closed"
        self.close()

    def onOutputClicked(self):
        if self.sequence == True:
            self.sequence = False
            self.output_check.setChecked(False)
        else:
            self.sequence = True
            self.output_check.setChecked(True)

    def output(self, counter):
        if (self.sequence == True):
            image_path = ".../FreeCAD/ScreenShots/Sequence"
            file_tag = ".png"
            height = 640
            width = 480
            background = "Transparent"
            # dealing with leading zeros
            if (counter > 999) or (counter < 0):
                print("Out of Range")
            elif (counter < 10):
                number = "00" + str(counter)
            elif (counter < 100):
                number = "0" + str(counter)
            else:
                number = str(counter)
            # Screen shot
            Gui.activeDocument().activeView().saveImage(image_path + number + file_tag, height, width, background)

# End of ControlPanel()
# Main section below:

def findTheDrivingConstraints(document_object):
    # search through the Objects and find the driving constraint
    driver_list = []
    for each in document_object.Objects:
        if each.Label.endswith("Driver"):
            driving_constraint = each.Name
            driver_list.append(driving_constraint)
    return driver_list

def main():
    kin_doc = App.ActiveDocument # Kinematic Document
    drivers = findTheDrivingConstraints(kin_doc)
    if len(drivers) < 1:
        print("No driver found!")
    else:
        panel_list = []
        for each_driver in drivers:
            panel = ControlPanel(kin_doc, each_driver)
            panel_list.append(panel)
        panel.exec_()

if __name__ == "__main__":
    # This will be true only if the file is "executed"
    # but not if imported as a module
    main()

```

[En haut](#top)

## Quelques imperfections

* L'ordre de la séquence d'images est inversé car nous utilisons la variable steps\_left qui est décomptée.
* Le répertoire et le nom de l'image sont codés en dur.
* Les contrôleurs multiples ne sont pas synchronisés.

Retrieved from "<http://wiki.freecad.org/index.php?title=Tutorial_KinematicController/fr&oldid=1396653>"