---
title: FaceToSketch
---

|                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FaceToSketch                                                                                                                                                                                                                                               |
| Description                                                                                                                                                                                                                                                |
| Convertit une face en un sketch sans contraintes. Version macro : 1.0 Date dernière modification : 2013-12-23 Version FreeCAD : All Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/6e/Macro_FaceToSketch.png) Auteur: Jreinhardt |
| Auteur                                                                                                                                                                                                                                                     |
| [Jreinhardt](/index.php?title=User:Jreinhardt&action=edit&redlink=1 "User:Jreinhardt (page does not exist)")                                                                                                                                               |
| Téléchargement                                                                                                                                                                                                                                             |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/6e/Macro_FaceToSketch.png)                                                                                                                                                                         |
| Liens                                                                                                                                                                                                                                                      |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                           |
| Version Macro                                                                                                                                                                                                                                              |
| 1.0                                                                                                                                                                                                                                                        |
| Dernière modification                                                                                                                                                                                                                                      |
| 2013-12-23                                                                                                                                                                                                                                                 |
| Version(s) FreeCAD                                                                                                                                                                                                                                         |
| All                                                                                                                                                                                                                                                        |
| Raccourci clavier                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                     |
| Voir aussi                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                            |

## Description

Cette macro décompose votre forme avec la fonction ![](/images/Draft_Downgrade.svg) [Draft Downgrade](/Draft_Downgrade/fr "Draft Downgrade/fr") et transforme la face sélectionnée en une esquisse sans contraintes et prête à être modifiée.

## Script

Icône de la barre d'outils ![](/images/Macro_FaceToSketch.png)

**Macro_FaceToSketch.FCMacro**

```
import Draft

wires,_faces = Draft.downgrade(FreeCADGui.Selection.getSelection(),delete=True)

sketch = Draft.makeSketch(wires[0:1])
for wire in wires[1:]:
    Draft.makeSketch([wire],addTo=sketch)

for wire in wires:
    FreeCAD.ActiveDocument.removeObject(wire.Name)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FaceToSketch/fr&oldid=915256>"
