---
title: FEM Installation des composants requis
---
## Introduction

Pour pouvoir effectuer une analyse par éléments finis dans l'![](/images/Workbench_FEM.svg) [atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr"), FreeCAD utilise deux programmes externes : l’un est utilisé pour générer le [FEM maillage](/FEM_Mesh/fr "FEM Mesh/fr") et l'autre pour la résolution numérique de l'analyse proprement dite. Vous pouvez tester si votre installation FreeCAD est prête pour une analyse par éléments finis en exécutant l’exemple [FEM CalculiX Cantilever 3D](/FEM_CalculiX_Cantilever_3D/fr "FEM CalculiX Cantilever 3D/fr") fourni avec l'installation de FreeCAD depuis la v0.17.

![](/images/FEM_Workbench_workflow.svg)

Flux de travail de l'atelier FEM. L'atelier fait appel à deux programmes externes pour effectuer le maillage d'un objet solide et pour résoudre le problème des éléments finis

### Solveur FEM

Le solveur par défaut pour effectuer des calculs par éléments finis est [CalculiX](/FEM_CalculiX/fr "FEM CalculiX/fr"), un solveur simple pour l'analyse de structures. FreeCAD écrit un fichier d'entrée CalculiX, lance le solveur et lit le résultat qui peut ensuite être présenté visuellement dans la fenêtre d'affichage. Cela signifie que le binaire CalculiX est autonome et indépendant de FreeCAD. Etant donné que de nombreux programmes peuvent générer un maillage, **il est recommandé d’installer le solveur et de s’assurer qu’il fonctionne en premier**.

Si le solveur est correctement installé, vous pouvez exécuter la commande unique `ccx` dans le terminal pour obtenir une réponse simple :

User@PC:~$ ccx

```
Usage: CalculiX.exe -i jobname

```

Si le solveur est installé, assurez-vous que l'atelier FEM est capable de trouver le binaire. Allez à **Édition → Préférences → FEM → CalculiX → Rechercher dans les répertoires des binaires connus**. Si vous avez compilé le solveur vous-même, décochez l'option et indiquez le chemin correct au fichier binaire. Pour les autres solveurs pouvant être utilisés avec FreeCAD, voir [FEM Solveur](/FEM_Solver/fr "FEM Solver/fr").

### Générateur de maillage FEM

Afin de créer un [maillage FEM](/FEM_Mesh/fr "FEM Mesh/fr"), FreeCAD utilise [Gmsh](http://gmsh.info/) comme mailleur par défaut. En fonction de votre système d'exploitation et de votre installation de FreeCAD, Gmsh peut être inclus ou pas dans les binaires d'installation de FreeCAD. S'il n'est pas intégré, vous pouvez l'installer séparément de FreeCAD et ensuite utiliser le menu **Édition → Préférences → FEM → Gmsh** pour définir le chemin vers *gmsh.exe*.

Si le programme est correctement installé, vous pouvez exécuter la commande `gmsh` dans le terminal pour lancer l'interface graphique du programme. Cette interface n’est pas utilisée par FreeCAD mais montre que le programme est installé.

User@PC:~$ gmsh -info

```
Version          : 3.0.6
License          : GNU General Public License
Build OS         : Linux64
Build date       : 20171107
Build host       : lgw01-amd64-034
Build options    : 64Bit Ann Bamg Bfgs Blas(Generic) Blossom C++11 Cgns Chaco DIntegration Dlopen Fltk Gmm Jpeg Kbipack Lapack(Generic) LinuxJoystick MPI MathEx Med Mesh Mmg3d Mpeg NativeFileChooser Netgen ONELAB ONELABMetamodel OpenCASCADE OpenGL OptHom Parser Plugins Png Post Python Solver TetGen/BR Tetgen Voro3D Zlib
FLTK version     : 1.3.4
OCC version      : 6.9.1
MED version      : 3.0.6
Packaged by      : buildd
Web site         : http://gmsh.info
Mailing list     : gmsh@onelab.info

```

Si le mailleur est installé, assurez-vous que l'atelier FEM est capable de trouver le binaire. Allez à **Édition → Préférences → FEM → Gmsh → Rechercher dans les répertoires des binaires connus**. Si vous avez compilé le mailleur vous-même, décochez l'option et indiquez le chemin correct au fichier binaire. Voir [FEM Mesh](/FEM_Mesh/fr "FEM Mesh/fr") pour les différentes possibilités d'obtenir un maillage valide pour l'analyse.

### Netgen

Pour créer un maillage FEM, vous pouvez utiliser *Netgen* comme alternative à *Gmsh*. Selon votre système d'exploitation et votre installation de FreeCAD, Netgen peut être fourni avec les binaires d'installation de FreeCAD.

Si le programme est correctement installé, vous pouvez lancer la commande `netgen` dans le terminal sous Linux pour lancer l'interface graphique du programme :

User@PC:~$ netgen -V

version 1.0 et suivantes : une nouvelle implémentation améliorée de Netgen est disponible. Grâce à elle, Netgen peut enfin être utilisé avec FreeCAD sur Linux. Les extensions Python de Netgen doivent être installées pour utiliser la nouvelle implémentation :

```
pip install --upgrade ngsolve

```

Si la commande ci-dessus n'est pas suffisante, on peut essayer ce qui suit à partir de la [console Python](/Python_console/fr "Python console/fr") dans FreeCAD :

```
import os, subprocess
temp_dir = os.path.dirname(os.sys.executable)
py_path = os.path.join(temp_dir, "python")
subprocess.run([py_path, "-m", "pip", "install", "--user", "netgen-mesher"])

```

ou compiler Netgen à partir des sources. Cela peut s'avérer nécessaire pour les utilisateurs de Windows et les ordinateurs dotés de vieux processeurs. Une explication peut être trouvée dans [ce fil](https://forum.ngsolve.org/t/problems-with-netgen-pip-package/3078/2) sur le forum Netgen.

## Installation sous Windows

Les paquets FreeCAD disponibles à partir de la page [Téléchargements](/Download/fr "Download/fr") incluent déjà Netgen et CalculiX, donc aucun logiciel supplémentaire ne doit être installé. Quelques liens pour obtenir un meilleur exécutable CalculiX que celui inclus dans FreeCAD peuvent être trouvés ici [alternative ccx executables](https://forum.freecadweb.org/viewtopic.php?f=18&t=58792&start=10#p506164).

## Installation sous Linux

Les distributions Linux ont différentes manières d'installer un logiciel. De nombreuses distributions ont des référentiels de logiciels et des gestionnaires de paquets; avant de compiler le code source, recherchez dans votre gestionnaire de paquets pour `netgen`, `gmsh`, `calculix-ccx` ou `ccx` et installez-les d'après les instructions de votre propre distribution.

### PPA Ubuntu

Les versions PPA (Personal Package Archives) [stable de Freecad](https://launchpad.net/~freecad-maintainers/+archive/ubuntu/freecad-stable) et [développement de Freecad](https://launchpad.net/~freecad-maintainers/+archive/ubuntu/freecad-daily) fournissent une version de FreeCAD plus récente que celle disponible dans les dépôts officiels d'Ubuntu. Ces PPA incluent également les derniers `netgen`, `gmsh` et `calculix-ccx`. Voir [Installation sous Linux](/Installing_on_Linux/fr "Installing on Linux/fr") pour plus d'informations sur la configuration des référentiels.

Si un PPA est déjà ajouté à votre système, installez les packages comme suit

```
sudo apt-get install netgen
sudo apt-get install gmsh
sudo apt-get install calculix-ccx

```

Le PPA [freecad-community](https://launchpad.net/~freecad-community/+archive/ubuntu/ppa) fournit également les paquets `netgen`, `gmsh` et `calculix-ccx` à tester. S'ils sont suffisamment stables, ils peuvent être ajoutés aux dépôts quotidiens ou stables. Les binaires pour ccx 2.14 fonctionnent sur Debian Stretch mais pas sur Debian Buster en raison de problèmes de dépendance.

*Note :* le fil [Ubuntu Repository](http://forum.freecadweb.org/viewtopic.php?f=18&t=10393) traite de la création des packages PPA Ubuntu. Au moment de sa rédaction, CalculiX n'était pas inclus dans les référentiels Debian. Il y avait donc plusieurs paquets personnels dans Launchpad. Un seul paquet doit être installé.

### Arch Linux

Récupérez le package CalculiX à partir de [AUR repository](https://aur.archlinux.org/packages/calculix/).

### Debian

* Debian 9 Buster : les paquets [dépôts](https://packages.debian.org/buster/calculix-ccx) sont obsolètes, mais vous pouvez utiliser les paquets du PPA Ubuntu (`freecad-community`). Voir [Gmsh 4 package available for testing in Community Extras PPA](https://forum.freecadweb.org/viewtopic.php?f=18&t=31360&start=10#p279925) (message sur le forum).
* Debian 8 Stretch : les paquets [dépôts](https://packages.debian.org/stretch/calculix-ccx) sont obsolètes, mais vous pouvez utiliser les packages de la PPA Ubuntu (`freecad-community`). Voir [Gmsh 4 package available for testing in Community Extras PPA](https://forum.freecadweb.org/viewtopic.php?f=18&t=31360&p=279925#p260872) (message sur le forum).
* Debian 7 Jessie : installez les paquets à partir de Debian 8 Stretch en utilisant `dpkg`. Voir [Debian source package for Calculix](http://forum.freecadweb.org/viewtopic.php?f=4&t=5975&p=110597#p110597) (message sur le forum).

### openSUSE

* [openSUSE:Science Math](https://en.opensuse.org/openSUSE:Science_Math#Mesh_Generation_and_Related_Tools)
* [netgen Automatic 3D tetrahedral mesh generator](https://software.opensuse.org/package/netgen)
* [gmsh A three-dimensional finite element mesh generator](https://software.opensuse.org/package/gmsh)
* [ccx An open source finite element package](https://software.opensuse.org/package/ccx)

Les paquets supplémentaires sont généralement installés avec YAST (abbr. Yet another Setup Tool), l'outil d'installation et de configuration du système d'exploitation Linux ou dans n'importe quel terminal/console (droits root requis) avec :

:   ```
    zypper install netgen
    zypper install gmsh
    zypper install ccx

    ```

### Binaire CalculiX

Les auteurs CalculiX fournissent un binaire Linux précompilé du solveur. Il peut être téléchargé à partir du [site web des auteurs](http://www.dhondt.de/). Cependant, étant donné que les différentes distributions Linux ont des chemins de bibliothèque différents, ce binaire ne fonctionnera probablement pas sans certains ajustements.

Pour utiliser le binaire avec Fedora 21, voir le fil [Making FEM run on linux fedora 21](http://forum.freecadweb.org/viewtopic.php?f=18&t=10140). Pour les versions plus récentes de Fedora, vous devez compiler CalculiX vous-même.

Si vous utilisez ce binaire, vérifiez que le binaire est exécutable, qu'il se trouve dans le `$PATH` exécutable de votre système et que vous disposez de la version nécessaire des bibliothèques (`libgfortran`, `liblapack`, `libblas`, etc.) pour lequel il a été compilé. Ceci est mentionné dans le message du forum [atelier FEM](http://forum.freecadweb.org/viewtopic.php?f=3&t=11830&start=20#p95741).

Utilisez la commande `ldd` pour voir les bibliothèques liées par le binaire. Installez les dépendances manquantes.

User@PC:~$ ldd /usr/bin/ccx

```
linux-vdso.so.1 (0x00007fffbabdc000)
 libspooles.so.2.2 => /usr/lib/x86_64-linux-gnu/libspooles.so.2.2 (0x00007fe9bd042000)
 libpthread.so.0 => /lib/x86_64-linux-gnu/libpthread.so.0 (0x00007fe9bce23000)
 libarpack.so.2 => /usr/lib/x86_64-linux-gnu/libarpack.so.2 (0x00007fe9bcbd9000)
 liblapack.so.3 => /usr/lib/x86_64-linux-gnu/liblapack.so.3 (0x00007fe9bc353000)
 libgfortran.so.4 => /usr/lib/x86_64-linux-gnu/libgfortran.so.4 (0x00007fe9bbf74000)
 libm.so.6 => /lib/x86_64-linux-gnu/libm.so.6 (0x00007fe9bbbd6000)
 libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007fe9bb7e5000)
 libgcc_s.so.1 => /lib/x86_64-linux-gnu/libgcc_s.so.1 (0x00007fe9bb5cd000)
 libmpi.so.20 => /usr/lib/x86_64-linux-gnu/libmpi.so.20 (0x00007fe9bb2db000)
 /lib64/ld-linux-x86-64.so.2 (0x00007fe9bdaa9000)
 libblas.so.3 => /usr/lib/x86_64-linux-gnu/libblas.so.3 (0x00007fe9bb080000)
 libopenblas.so.0 => /usr/lib/x86_64-linux-gnu/libopenblas.so.0 (0x00007fe9b8dda000)
 libquadmath.so.0 => /usr/lib/x86_64-linux-gnu/libquadmath.so.0 (0x00007fe9b8b9a000)
 libopen-rte.so.20 => /usr/lib/x86_64-linux-gnu/libopen-rte.so.20 (0x00007fe9b8912000)
 libopen-pal.so.20 => /usr/lib/x86_64-linux-gnu/libopen-pal.so.20 (0x00007fe9b8660000)
 librt.so.1 => /lib/x86_64-linux-gnu/librt.so.1 (0x00007fe9b8458000)
 libhwloc.so.5 => /usr/lib/x86_64-linux-gnu/libhwloc.so.5 (0x00007fe9b821b000)
 libdl.so.2 => /lib/x86_64-linux-gnu/libdl.so.2 (0x00007fe9b8017000)
 libutil.so.1 => /lib/x86_64-linux-gnu/libutil.so.1 (0x00007fe9b7e14000)
 libnuma.so.1 => /usr/lib/x86_64-linux-gnu/libnuma.so.1 (0x00007fe9b7c09000)
 libltdl.so.7 => /usr/lib/x86_64-linux-gnu/libltdl.so.7 (0x00007fe9b79ff000)

```

Une des dépendances mentionnées ci-dessus (`libgfortran.so.4`) nécessaire à CalculiX peut causer des problèmes avec les nouvelles versions d'Ubuntu où seul `libgfortran5` est disponible. En plus d'utiliser l'ancienne version de CalculiX (2.17) disponible via `sudo apt-get install calculix-ccx`, il est possible de compiler une nouvelle version de CalculiX. Il n'est pas nécessaire de le faire manuellement puisqu'il existe un script hébergé sur [ce site](https://www.feacluster.com/install/install) qui peut être obtenu et utilisé avec les commandes suivantes :

```
wget https://feacluster.com/install/install
perl install

```

Le script est interactif et demande quelques informations comme le type de solveur de matrice (Spooles ou Pardiso). Pour construire une version différente de CalculiX, il suffit de changer la ligne suivante dans le script :

```
$version = '2.2x';

```

### Compiler CalculiX

CalculiX étant une application autonome, vous pouvez installer un fichier binaire empaqueté pour votre distribution ou le compiler vous-même. A partir de la version 2.7.x, CalculiX devrait fonctionner avec FreeCAD. Etant donné que le code n'a pas beaucoup changé depuis des années, des versions plus basses que la version 2.7.x peuvent également fonctionner.

Compiler CalculiX est une tâche pour des utilisateurs expérimentés, nécessitant la modification des Makefiles et des options de construction de différentes plates-formes. Voir les informations suivantes :

* Debian : [Debian source package for Calculix](http://forum.freecadweb.org/viewtopic.php?f=4&t=5975&start=10), [Gmsh 4 package available for testing in Community Extras PPA](https://forum.freecadweb.org/viewtopic.php?f=18&t=31360&start=10#p260506), [Compiling CalculiX ccx on fedora, ubuntu and debian](https://forum.freecadweb.org/viewtopic.php?f=18&t=34024).
* Fedora 27, 28, 29 : [Compiling CalculiX ccx on fedora, ubuntu and debian](https://forum.freecadweb.org/viewtopic.php?f=18&t=34024).
* Il existe une version CMake du paquet source dans un [dépôt github](https://github.com/ricortiz/CalculiX-cmake), mais sur les forums FreeCAD, personne n'a signalé si ce paquet fonctionnait.

### Compiler Netgen

Netgen était initialement lié par FreeCAD lorsque FreeCAD a utilisé OCE, le fork de la communauté d'OpenCascade (OCCT). Alors que OCE accusait un retard de développement par rapport à OCCT, FreeCAD est revenu à OCCT. Cela a rompu la liaison de Netgen, qui ne pouvait se lier qu'à OCCT 6.9 ou à OCE 0.18 et au-dessous. Les versions OCCT 7.x améliorant la fonctionnalité de base de FreeCAD, il a été décidé de supprimer le support Netgen au profit de Gmsh.

Depuis lors, quelques succès ont été obtenus en corrigeant et en liant les nouvelles versions de Netgen avec OCCT 7.x. Néanmoins, l'inclusion de Netgen avec FreeCAD reste problématique.

## Installation sous Mac OSX

:::caution
Ces informations peuvent être obsolètes. Si vous êtes un utilisateur OSX, veuillez tester et corriger cette section
:::

Les packages de développement OSX [development packages](https://github.com/FreeCAD/FreeCAD/releases) de FreeCAD peuvent inclure Netgen mais ne peuvent pas inclure CalculiX.

Voir cet article du forum [FEM on Mac OSX](https://forum.freecadweb.org/viewtopic.php?f=18&t=10979&p=198652#p198642) pour plus d'informations sur l'installation de CalculiX et un [updated post](https://forum.freecadweb.org/viewtopic.php?f=18&t=10979&start=90#p273746) pour des informations plus récentes.

CalculiX :

* [installer CalculiX avec brew](https://forum.freecadweb.org/viewtopic.php?f=18&t=10979&start=90#p508724)

Les articles suivants peuvent être dépassés :

* [FEM on Mac OSX, post 1](http://forum.freecadweb.org/viewtopic.php?f=18&t=10979)
* [MacPorts users: CalculiX port test request](http://forum.freecadweb.org/viewtopic.php?f=8&t=14497)

## Plus d'informations

L'[atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr") est en développement constant. Les informations les plus récentes se trouvent sur le [FreeCAD forum](https://forum.freecad.org/viewforum.php?f=18).

Si vous rencontrez des problèmes pour installer Netgen, Gmsh ou CalculiX, ou un autre outil externe, commencez par rechercher le forum correspondant :

* [netgen site:forum.freecad.org](https://www.google.com/search?q=netgen+site%3Aforum.freecad.org)
* [gmsh site:forum.freecad.org](https://www.google.com/search?q=gmsh+site%3Aforum.freecad.org)
* [calculix site:forum.freecad.org](https://www.google.com/search?q=calculix+site%3Aforum.freecad.org)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Install/fr&oldid=1552838>"