---
title: Creating faces from a DXF file
---

|                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Creating faces from a DXF file                                                                                                                                                                                                                                                                                        |
| Description                                                                                                                                                                                                                                                                                                           |
| Cette macro crée des faces à partir d'objets d'un fichier DXF. Version macro : 1.0 Date dernière modification : 2014-10-29 Version FreeCAD : Toutes versions Téléchargement : [Icône pour votre barre d'outils](https://www.freecadweb.org/wiki/images/0/03/Macro_Creating_faces_from_a_DXF_file.png) Auteur: shoogen |
| Auteur                                                                                                                                                                                                                                                                                                                |
| [shoogen](/index.php?title=User:Shoogen&action=edit&redlink=1 "User:Shoogen (page does not exist)")                                                                                                                                                                                                                   |
| Téléchargement                                                                                                                                                                                                                                                                                                        |
| [Icône pour votre barre d'outils](https://www.freecadweb.org/wiki/images/0/03/Macro_Creating_faces_from_a_DXF_file.png)                                                                                                                                                                                               |
| Liens                                                                                                                                                                                                                                                                                                                 |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                      |
| Version Macro                                                                                                                                                                                                                                                                                                         |
| 1.0                                                                                                                                                                                                                                                                                                                   |
| Dernière modification                                                                                                                                                                                                                                                                                                 |
| 2014-10-29                                                                                                                                                                                                                                                                                                            |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                    |
| Toutes versions                                                                                                                                                                                                                                                                                                       |
| Raccourci clavier                                                                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                                                                                |
| Voir aussi                                                                                                                                                                                                                                                                                                            |
| _None_                                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                       |

## Description

Cette macro crée des faces à partir des dessins extraits d' un fichier au format DXF, les **Layer** sont reconnus séparés et traités comme des groupes.

Il faut que le fichier dispose de groupes pour que la macro fonctionne.

## Utilisation

Lancer la macro tous les objets sont analysés et transformés en face(s).

Note : un objet non fermé retourne une erreur.

## Script

ToolBar Icon ![](/images/Macro_Creating_faces_from_a_DXF_file.png)

**Macro_Creating_faces_from_a_DXF_file.FCMacro**

```
import FreeCAD,Part,OpenSCAD2Dgeom
doc = App.ActiveDocument
for group in doc.findObjects('App::DocumentObjectGroup'):
    try:
        edges=sum((obj.Shape.Edges for obj in group.Group \
                if hasattr(obj,'Shape')),[])
        face = OpenSCAD2Dgeom.edgestofaces(edges)
        faceobj = doc.addObject('Part::Feature','face_%s' % group.Name)
        faceobj.Label = 'face_%s' % group.Label
        faceobj.Shape = face
    except Part.OCCError: # Exception: #
        FreeCAD.Console.PrintError('Error in Group %s (%s)' % (group.Name,group.Label)+"\n")
```

## Liens

La discussion sur le forum [Creating faces from a DXF file](http://forum.freecadweb.org/viewtopic.php?f=3&t=8144)

Ici un exemple d'utilisation de transformation d'une feuille 2D en objet 3D [Generate 3D solid from intersection of three imported 2D](http://forum.freecadweb.org/viewtopic.php?f=3&t=8280&p=67863#p67840)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Creating_faces_from_a_DXF_file/fr&oldid=692126>"
