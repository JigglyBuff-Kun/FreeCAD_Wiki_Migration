---
title: Méthodes FeaturePython
---
## Introduction

Cette page sert de référence pour les méthodes de contournement disponibles pour [Créer un objet FeaturePython partie I](/Create_a_FeaturePython_object_part_I/fr "Create a FeaturePython object part I/fr") ou [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr").

## Référence primaire

Les méthodes ci-dessous représentent ~ 99% des cas d'utilisation que les utilisateurs expérimentés peuvent avoir pour les classes proxy Python.

|  |  |  |
| --- | --- | --- |
| `execute(self, obj)` | Appelé pendant le recalcul du document | N'appelez pas `recompute()` depuis cette méthode (ou n'importe quelle méthode appelée depuis `execute()`) car cela provoque un recalcul imbriqué. |
| `onBeforeChange(self, obj, prop)` | Appelé avant la modification d'une valeur de propriété | `prop` est le nom de la propriété à modifier, pas l'objet de propriété lui-même. Les modifications de propriété ne peuvent pas être annulées. Les valeurs de propriétés précédentes/suivantes ne sont pas disponibles simultanément pour la comparaison. |
| `onChanged(self, obj, prop)` | Appelé après la modification d'une propriété | `prop` est le nom de la propriété à modifier, pas l'objet de propriété lui-même. |
| `onDocumentRestored(self, obj)` | Appelé après la restauration d'un document ou la copie d'un objet FeaturePython. | Parfois, les références à l'objet FeaturePython de la classe ou à la classe de l'objet FeaturePython peuvent être cassées, car la méthode des classes `__init__()` n'est pas appelée lors de la reconstruction de l'objet. L'ajout de `self.Object = obj` ou `obj.Proxy = self` résout souvent ces problèmes. |

Il n'est pas rare de rencontrer une situation où les rappels Python ne sont pas déclenchés comme ils le devraient. Les débutants dans ce domaine peuvent être assurés que le système de rappel FeaturePython n'est pas fragile ou cassé. Invariablement, lorsque les rappels ne s'exécutent pas, c'est parce qu'une référence est perdue ou indéfinie dans le code sous-jacent. Si, cependant, les rappels semblent interrompre sans explication, fournir des références d'objet/proxy dans le rappel `onDocumentRestored()` (comme indiqué dans le premier tableau ci-dessus) peut atténuer ces problèmes. Tant que vous n'êtes pas à l'aise avec le système de rappel, il peut être utile d'ajouter des instructions d'impression dans chaque rappel pour imprimer des messages sur la console pendant le développement.

## Méthodes supplémentaires

Les méthodes ci-dessous sont destinées à une utilisation **avancée** des classes proxy Python et vous n'en aurez pas besoin la plupart du temps.

* mustExecute
* getViewProviderName
* getSubObject
* getSubObjects
* getLinkedObject
* hasChildElement
* isElementVisible
* canLinkProperties
* allowDuplicateLabel
* redirectSubName
* canLoadPartial
* onBeforeChangeLabel

## Déterminer les méthodes Python disponibles

Dans le [modèle de classe FeaturePython](https://github.com/FreeCAD/FreeCAD/blob/76e74294894bbce46d006e149315c6274d206278/src/App/FeaturePython.h#L161-L351), il existe plusieurs appels `imp-><method name>()`.

Chacun d'entre eux correspond à une méthode Python liée disponible.

Par exemple, `imp->execute()` [en ligne 193](https://github.com/FreeCAD/FreeCAD/blob/76e74294894bbce46d006e149315c6274d206278/src/App/FeaturePython.h#L193) signifie que la méthode `execute` est disponible.

Remarquez que `getPyObject()` et `init()` sont des cas particuliers et ne suivent pas l'heuristique ci-dessus.

### Voir aussi

* [FreeCAD GitHub: FeaturePython.h - public API](https://github.com/FreeCAD/FreeCAD/blob/76e74294894bbce46d006e149315c6274d206278/src/App/FeaturePython.h#L44-L86)
* [FreeCAD GitHub: FeaturePythonT template class](https://github.com/FreeCAD/FreeCAD/blob/76e74294894bbce46d006e149315c6274d206278/src/App/FeaturePython.h#L167)
* [FreeCAD Forum Discussion: Scripted Objects Complete Method Reference](https://forum.freecadweb.org/viewtopic.php?f=22&t=49194)

Retrieved from "<http://wiki.freecad.org/index.php?title=FeaturePython_methods/fr&oldid=870811>"