---
title: Std Vers la console Python
---
|  |
| --- |
| Std Vers la console Python |
| Emplacement du menu |
| Édition → Envoyer vers la console Python |
| Ateliers |
| Tous |
| Raccourci par défaut |
| Ctrl+Shift+P |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande **Std Vers la console Python** crée des variables dans la [console Python](/Python_console/fr "Python console/fr") référençant un objet sélectionné et ses sous-formes sélectionnées, ainsi que d'autres références utiles. Les variables et le code impliqué peuvent être utilisés dans le développement du code Python.

Les variables suivantes sont créées en fonction de l'objet sélectionné et des sous-formes sélectionnées, le cas échéant :

| Nom de la variable | Objet(s) référencé(s) |
| --- | --- |
| `doc` | Le document contenant l'objet sélectionné |
| `lnk` | L'objet Lien sélectionné (créé uniquement si l'objet sélectionné est un Lien) |
| `obj` | En fonction de l'objet sélectionné :  L'objet sélectionné lui-même (si l'objet sélectionné n'est pas un lien).  L'objet lié (si l'objet sélectionné est un lien) |
| `shp` | Selon le type de `obj` :  La propriété `Shape` de `obj` (pour les objets dérivés de la classe `Part::Feature`)  La propriété `Mesh` de `obj` (pour les objets Mesh)  La propriété `Points` de `obj` (pour les objets Points) |
| `sub` | La première sous-forme sélectionnée (créée uniquement si au moins une sous-forme est sélectionnée) |
| `subs` | Une liste contenant toutes les formes secondaires (créée uniquement si deux formes secondaires ou plus sont sélectionnées) |

```
>>> ### Begin command Std_SendToPythonConsole
>>> try:
>>>     del(doc,lnk,obj,shp,sub,subs)
>>> except Exception:
>>>     pass
>>> 
>>> doc = App.getDocument("Unnamed")
>>> lnk = doc.getObject("Link")
>>> obj = lnk.getLinkedObject()
>>> shp = obj.Shape
>>> sub = obj.getSubObject("Edge10")
>>> subs = [obj.getSubObject("Edge10"),obj.getSubObject("Face3"),obj.getSubObject("Vertex5"),]
>>> ### End command Std_SendToPythonConsole

```

Exemple de sortie : une arête, une face et un sommet d'un [Lien](/Std_LinkMake/fr "Std LinkMake/fr") vers un [Part Cube](/Part_Box/fr "Part Box/fr") ont été sélectionnés

## Utilisation

1. Sélectionnez un seul objet ou une ou plusieurs sous-formes appartenant à un seul objet.
2. Il existe plusieurs façons de lancer la commande :
   * Sélectionnez l'option **Édition → ![](/images/Std_SendToPythonConsole.svg) Envoyer vers la console Python** du menu.
   * Sélectionnez l'option **![](/images/Std_SendToPythonConsole.svg) Envoyer vers la console Python** du menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou du menu contextuel de la [vue 3D](/3D_view/fr "3D view/fr").
   * Utilisez le raccourci clavier : Ctrl+Shift+P.
3. Si nécessaire, la [console Python](/Python_console/fr "Python console/fr") s'ouvre.
4. La [console Python](/Python_console/fr "Python console/fr") est redirigée vers le clavier.

## Remarques

* Toutes les variables précédemment créées sont supprimées à chaque fois que la commande est exécutée.

* Si l'objet sélectionné est un Lien (`App::Link`) et que l'objet lié est dérivé de la classe `Part::Feature`, la variable `shp` sera la forme de l'objet lié. Si le lien a été transformé ou redimensionné et que vous souhaitez accéder à la forme redimensionnée/transformée, vous pouvez le faire avec ce code :

:   ```
    lnk_shp = Part.getShape(lnk)

    ```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SendToPythonConsole/fr&oldid=1481604>"