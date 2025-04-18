---
title: Intégrer FreeCAD
---
## Introduction

FreeCAD peut être importé en tant que module [Python](/Python/fr "Python/fr") dans d'autres programmes ou dans une console Python autonome, avec tous ses modules et composants. Il est même possible d'importer l'interface utilisateur de FreeCAD en tant que module python mais avec certaines restrictions indiquées dans [Avertissements](#Avertissements).

## Utilisation de FreeCAD sans interface graphique (GUI)

La première application, directe, facile et utile que vous pouvez faire est d'importer des documents FreeCAD dans votre programme. Dans l'exemple suivant, nous allons importer une géometrie de Part d'un document FreeCAD dans [blender](http://www.blender.org). Voici le script complet. J'espère que vous serez impressionné par sa simplicité :

```
FREECADPATH = '/usr/lib/freecad-python3/lib/' # path to your FreeCAD.so or FreeCAD.pyd file,
# for Windows you must either use \\ or / in the path, using a single \ is problematic
# FREECADPATH = 'C:\\FreeCAD\\bin'
import Blender, sys
sys.path.append(FREECADPATH)
 
def import_fcstd(filename):
   try:
       import FreeCAD
   except ValueError:
       Blender.Draw.PupMenu('Error%t|FreeCAD library not found. Please check the FREECADPATH variable in the import script is correct')
   else:
       scene = Blender.Scene.GetCurrent()
       import Part
       doc = FreeCAD.open(filename)
       objects = doc.Objects
       for ob in objects:
           if ob.Type[:4] == 'Part':
               shape = ob.Shape
               if shape.Faces:
                   mesh = Blender.Mesh.New()
                   rawdata = shape.tessellate(1)
                   for v in rawdata[0]:
                       mesh.verts.append((v.x,v.y,v.z))
                   for f in rawdata[1]:
                       mesh.faces.append.append(f)
                   scene.objects.new(mesh,ob.Name)
       Blender.Redraw()

def main():
   Blender.Window.FileSelector(import_fcstd, 'IMPORT FCSTD', 
                        Blender.sys.makename(ext='.fcstd'))    
 
# This lets you import the script without running it
if __name__=='__main__':
   main()

```

La première chose importante est de s'assurer que Python trouvera notre bibliothèque FreeCAD. Une fois qu'il l'a trouvé, tous les modules FreeCAD tels que Part (que nous utiliserons également) seront disponibles automatiquement. Nous prenons donc simplement la variable `sys.path`, qui est l'endroit où Python recherche les modules et nous ajoutons le chemin de la bibliothèque FreeCAD. Cette modification n'est que temporaire et sera perdue lorsque nous fermerons notre interpréteur Python. Une autre façon pourrait être : de créer un lien vers votre bibliothèque FreeCAD dans l'un des chemins de recherche Python. J'ai stocké le chemin dans une constante (`FREECADPATH`) donc il sera plus facile pour un autre utilisateur du script de le configurer sur son propre système. Pour les utilisateurs de Windows, il est important que le chemin d'accès soit spécifié en utilisant `\\` ou `/` comme séparateur au lieu de simplement `\` car il s'agit d'un caractère d'échappement.

```
FREECADPATH = 'C:\\FreeCAD\\bin' # path to your FreeCAD.so or FreeCAD.pyd file
import sys
sys.path.append(FREECADPATH)

```

Une fois certain que la bibliothèque a été chargée (la séquence `try`/`except`), nous pourrons travailler avec FreeCAD, de la même manière que si nous le ferions à l'intérieur de l’interpréteur Python de FreeCAD. Nous ouvrons le document FreeCAD que nous avons chargé avec la fonction `main()` et nous listons ses objets. Ensuite, comme nous avons choisi de ne nous soucier que de la géométrie de la pièce, nous vérifions si la propriété Type de chaque objet contient "`Part`" puis nous la tesselons.

```
import Part
       doc = FreeCAD.open(filename)
       objects = doc.Objects
       for ob in objects:
           if ob.Type[:4] == 'Part':

```

La tesselation produit une liste de **sommets** (Vertex) et une liste de **faces** définis par les indices de sommets.
C'est parfait, puisque c'est exactement de cette manière que Blender définit les mailles.
Donc, notre tâche est ridiculement simple, nous ajoutons juste les deux listes des **sommets** et **faces** comme un maillage de Blender.
Une fois fait, nous allons juste redessiner l'écran et, c'est fini !

```
if ob.Type[:4] == 'Part':
               shape = ob.Shape
               if shape.Faces:
                   mesh = Blender.Mesh.New()
                   rawdata = shape.tessellate(1)
                   for v in rawdata[0]:
                       mesh.verts.append((v.x,v.y,v.z))
                   for f in rawdata[1]:
                       mesh.faces.append.append(f)
                   scene.objects.new(mesh,ob.Name)
       Blender.Redraw()

```

Bien sûr ce script est très simple (en fait j'ai fait un [Importateur FreeCAD vers Blender](https://yorik.uncreated.net/archive/scripts/blender24/import_freecad.py) plus avancé), vous voudrez peut-être l'améliorer, par exemple en important des objets maillés aussi ou en important une géométrie de Part qui n'a pas de faces, ou en important d'autres formats de fichier que FreeCAD peut lire. Vous pouvez également exporter la géométrie vers un document FreeCAD, ce qui peut être fait de la même manière. Vous voudrez peut-être aussi créer une fenêtre de dialogue, afin que l'utilisateur puisse choisir quoi importer, etc... La beauté de tout cela réside en fait dans le fait que vous laissez FreeCAD faire le travail de fond tout en présentant ses résultats dans le programme de votre choix .

*Remarque :* consultez [FreeCAD sans interface graphique](/Headless_FreeCAD/fr "Headless FreeCAD/fr") pour exécuter FreeCAD sans l'interface graphique.

## Utilisation de FreeCAD avec interface graphique (GUI)

Depuis la version 4.2 de Qt, Qt a la capacité d'intégrer des plugins **Qt-GUI** dépendants d'applications hôtes non-Qt, et, de partager la boucle évènementielle de l'hôte.

En particulier, pour FreeCAD, cela signifie qu'il peut être importé à partir d'une autre application avec l'ensemble de son interface utilisateur, l'application hôte ayant alors un contrôle total sur FreeCAD.

L'ensemble du code Python nécessaire pour atteindre ce but, n'a que deux lignes :

```
import FreeCADGui 
FreeCADGui.showMainWindow()

```

Si, l'application hôte est basée sur Qt, alors cette solution devrait fonctionner sur toutes les plates-formes supportées par Qt. **Toutefois**, l'hôte doit être de la même version Qt que la version utilisée pour FreeCAD, sinon, vous pouvez obtenir des erreurs d'exécution inattendues.

Cependant, pour les applications non-Qt, il ya quelques restrictions, que vous devez connaitre :

* Cette solution ne fonctionnera probablement pas avec tous les autres outils (toolkit) :
  + Pour Windows, il fonctionnera aussi longtemps que l'application hôte utilisée est compatible avec **Win32** ou, tout autres outils (toolkit) qui utilisent l'**API Win32**, comme **wxWidgets**, **MFC** ou **WinForms**.
  + Pour le faire fonctionner sous **[X11](http://fr.wikipedia.org/wiki/X_Window_System)** (Linux), l'application hôte doit utiliser la bibliothèque **"[glib](http://developer.gnome.org/glib/)"**.

Remarque : pour toute application console, cette solution ne fonctionne évidemment pas parce qu'il n'y a pas de boucle d'événements en cours.

## Avertissements

Bien qu'il soit possible d'importer FreeCAD vers un interpréteur Python externe, il ne s'agit pas d'un scénario d'utilisation courant et cela nécessite quelques précautions. En règle générale, il est préférable d'utiliser le Python fourni avec FreeCAD, d'exécuter FreeCAD via une ligne de commande, ou en tant que sous-processus. Voir [Démarrage et configuration](/Start_up_and_Configuration/fr "Start up and Configuration/fr") pour plus d'informations sur les deux dernières options.

Puisque le module Python de FreeCAD est compilé à partir de C ++ (plutôt que d'être un pur module Python), il ne peut être importé qu'à partir d'un interpréteur Python compatible. Cela signifie généralement que l'interpréteur Python doit être compilé avec le même compilateur C que celui utilisé pour construire FreeCAD. Les informations sur le compilateur utilisé pour construire un interpréteur Python (y compris celui construit avec FreeCAD) peuvent être trouvés comme suit:

```
>>> import sys
>>> sys.version
'2.7.13 (default, Dec 17 2016, 23:03:43) \n[GCC 4.2.1 Compatible Apple LLVM 8.0.0 (clang-800.0.42.1)]'

```

## En relation

* [FreeCAD sans interface graphique](/Headless_FreeCAD/fr "Headless FreeCAD/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Embedding_FreeCAD/fr&oldid=1496087>"