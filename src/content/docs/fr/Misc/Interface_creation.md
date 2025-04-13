---
title: Création d'interface
---
## Introduction

Les utilisateurs avancés ont la possibilité de créer des interfaces pour les aider à produire des outils complexes pour leurs [extensions](/Addon/fr "Addon/fr") personnalisées, tels que des [macros](/Macros/fr "Macros/fr") ou des [ateliers](/Workbenches/fr "Workbenches/fr") complets.

Les interfaces sont créées en utilisant [PySide](/PySide/fr "PySide/fr"), qui est une bibliothèque permettant d'utiliser Qt avec [Python](/Python/fr "Python/fr").

![](/images/FreeCAD_creating_interfaces.svg)

Deux méthodes générales pour créer des interfaces, en incluant l'interface dans le fichier Python, ou en utilisant des fichiers `.ui`.

## Description

Il existe généralement deux façons de créer des interfaces avec PySide.

### Interface dans un fichier .ui

Dans cette méthode, l'interface est définie dans un fichier `.ui` (un document XML qui définit la structure de l'interface), qui est ensuite importé dans le code [Python](/Python/fr "Python/fr") qui l'utilise. C'est l'approche recommandée.

* Il permet au programmeur de travailler avec l'interface graphique séparément de la logique qui l'utilisera.
* Il permet à quiconque de regarder l'interface seule, c'est-à-dire le fichier `.ui`, sans avoir à exécuter du code Python.
* Le fichier `.ui` peut être conçu par n'importe qui sans connaissances en programmation.
* L'interface `.ui` peut être utilisée dans une fenêtre autonome (modale), ou dans une fenêtre intégrée (non modale); par conséquent, cette méthode est idéale pour créer des [Panneau des tâches](/Task_panel/fr "Task panel/fr") personnalisés.
* Puisque le fichier `.ui` décrit juste "l'apparence" de l'interface, il n'a pas besoin d'être lié à un langage de programmation particulier; il peut être utilisé à la fois dans le code [Python](/Python/fr "Python/fr") et C++.

### Interface complètement en code Python

Dans cette méthode, toute l'interface est définie par plusieurs appels Python.

* Il s'agit d'une ancienne façon de travailler avec les interfaces.
* Cette méthode produit un code très détaillé car de nombreux détails de l'interface doivent être spécifiés à la main.
* Il n'est pas simple de séparer l'interface de la logique qui utilise ce code, ce qui signifie qu'un utilisateur aurait besoin d'exécuter le fichier [Python](/Python/fr "Python/fr") dans le bon contexte afin de voir à quoi ressemblerait l'interface.
* Cette méthode a l'avantage que plusieurs interfaces peuvent être contenues dans un seul document, au détriment de rendre le fichier très volumineux.
* Cette méthode n'est recommandée que pour les petites interfaces qui ne définissent pas plus de quelques widgets, par exemple dans [macros](/Macros/fr "Macros/fr").

Pour des exemples sur cette méthode, voir [Création d'interface complètement en Python](/Dialog_creation/fr "Dialog creation/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Interface_creation/fr&oldid=1565403>"