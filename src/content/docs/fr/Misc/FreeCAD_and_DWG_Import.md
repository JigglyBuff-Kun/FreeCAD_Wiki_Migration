---
title: FreeCAD et l'importation DWG
---
< Retour à [FreeCAD comment importer exporter](/index.php?title=FreeCAD_Howto_Import_Export/fr&action=edit&redlink=1 "FreeCAD Howto Import Export/fr (page does not exist)")

## Pourquoi est-il difficile de prendre en charge les fichiers DWG dans FreeCAD?

Le **format DWG est un format de fichier binaire fermé** (propriétaire) qui n'est pas directement pris en charge par FreeCAD. Il faut un convertisseur de fichiers tiers externe pour convertir les fichiers DWG en fichiers DXF et vice-versa.

## De quoi ai-je besoin pour pouvoir importer des fichiers DWG ?

### LibreDWG

* page d'accueil: <https://www.gnu.org/software/libredwg/>
* licence: [GPLv3-or-later](https://savannah.gnu.org/projects/libredwg/)
* facultatif, utilisé pour activer l'importation et l'exportation de fichiers DWG

GNU LibreDWG est une bibliothèque libre en C pour manipuler les fichiers DWG. Elle vise à remplacer librement les bibliothèques Drawings SDK de l'Open Design Alliance. Soyez conscient que, puisque libreDWG est un travail en cours, il manque le support de certaines entités DWG.

#### Installation sous Windows

Télécharger et décompresser le [binaire Windows précompilé](https://github.com/LibreDWG/libredwg/releases) approprié. Placer l'exécutable dans le chemin de recherche du système d'exploitation, `os.getenv("PATH")`, pour une détection automatique ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) ou définir le chemin manuellement. Voir [Préférences Importer/Exporter](/Import_Export_Preferences/fr#DWG "Import Export Preferences/fr").

#### Installation sous des systèmes Linux/Unix

```
git clone --recurse-submodules https://github.com/LibreDWG/libredwg.git
cd libredwg
mkdir build
cd build
cmake ..
make
make install # or use checkinstall, or simply locate & copy the dwg2dxf 
             # utility to your executables path, it will be then autodetected by FreeCAD

```

Placer l'exécutable dans le chemin de recherche du système d'exploitation, `os.getenv("PATH")`, pour une détection automatique ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) ou définir le chemin manuellement. Voir [Préférences Importer/Exporter](/Import_Export_Preferences/fr#DWG "Import Export Preferences/fr").

#### Installation sous openSUSE

Pour éviter les problèmes, vous devez utiliser le paquetage LibreDWG compilé pour la distribution openSUSE OS installée. LibreDWG est généralement installé avec **YAST** (abréviation de Yet another Setup Tool), l'outil d'installation et de configuration du système d'exploitation Linux.

L'utilisateur plus expérimenté obtient d'abord un aperçu des paquets possibles fournis. **Remarque:** openSUSE a plusieurs options à choisir lors du téléchargement de LibreDWG. Pour voir ces options, allez sur [Survey of provided LibreDWG packages on openSUSE](https://software.opensuse.org/search?utf8=%E2%9C%93&baseproject=ALL&q=libredwg).

Pour les ordinateurs de bureau, les ordinateurs portables et les serveurs Intel ou AMD 64 bits, la version (x86\_64) est à choisir. Ainsi, **libredwg0** et **libredwg-tools** sont le bon choix à installer.

Il est recommandé de récupérer les paquets binaires directement. Sélectionnez ensuite la distribution appropriée pour votre OS openSUSE installé.

Dans n'importe quel terminal/console (droits root requis), l'installation s'effectuera avec :

```
zypper install libredwg0 libredwg-tools

```

Placer l'exécutable dans le chemin de recherche du système d'exploitation, `os.getenv("PATH")`, pour une détection automatique ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) ou définir le chemin manuellement. Voir [Préférences Importer/Exporter](/Import_Export_Preferences/fr#DWG "Import Export Preferences/fr").

### Convertisseur fichier ODA

* Page d'accueil : <https://www.opendesign.com/guestfiles/oda_file_converter>
* licence : freeware
* optionnel, utilisé pour permettre l'importation et l'exportation de fichiers DWG

Le convertisseur de fichier ODA est un petit utilitaire disponible gratuitement qui permet de convertir plusieurs versions de fichiers DWG et DXF. FreeCAD peut l'utiliser pour permettre l'importation et l'exportation DWG, en convertissant de manière transparente les fichiers DWG au format DXF , puis FreeCAD utilise son importateur DXF standard pour importer le contenu du fichier. Les restrictions de l'[importateur DXF](/Draft_DXF/fr "Draft DXF/fr") s'appliquent.

#### Installation

Si l'utilitaire n'est pas trouvé automatiquement par FreeCAD après l'installation, vous devez définir manuellement le chemin de l'exécutable. Voir [Préférences Importer/Exporter](/Import_Export_Preferences/fr#DWG "Import Export Preferences/fr").

### QCAD pro

[introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

* page d'accueil : [QCAD pro](https://qcad.org/en/qcad-command-line-tools#dwg2dwg)
* licence : commerciale
* optionnel, utilisé pour permettre l'importation et l'exportation de fichiers DWG

QCAD est une plateforme de CAO 2D open-source bien connue, basée sur le format DXF. Elle offre également une version pro payante, qui est essentiellement la version open-source plus le support du format DWG. En achetant la version pro, QCAD inclut également un utilitaire de conversion DWG vers DXF qui peut être utilisé par FreeCAD.

#### Installation

Si l'utilitaire n'est pas trouvé automatiquement par FreeCAD après l'installation ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")), vous devez définir manuellement le chemin d'accès au fichier bash (Linux et macOS) ou au fichier batch (Windows). Voir [Préférences Importer/Exporter](/Import_Export_Preferences/fr#DWG "Import Export Preferences/fr").

### Atelier CADExchanger

L'installation de l'atelier CADExchanger permet de travailler avec des fichiers DWG grâce à l'intégration avec le produit de conversion de fichiers commercial payant [CADExchanger](https://cadexchanger.com/). Suivez simplement les instructions du [dépôt GitHub](https://github.com/yorikvanhavre/CADExchanger). Vous pouvez discuter de cet atelier sur [son fil de discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=22227&p=462421).

Pour le moment, la méthode CADExchanger est la seule qui permet de travailler avec des fichiers DWG 3D, en les convertissant dans d'autres formats 3D.

## Quelles sont les alternatives?

### DoubleCAD XT

Il y a aussi DoubleCAD XT (<https://www.turbocad.com/content/doublecad-xt-v5>). Ce programme est libre d'utilisation pour une utilisation personnelle ou commerciale. Vous devez vous enregistrer pour recevoir le code d'activation via E-Mail. Ce programme ne fonctionne que sous Windows. À noter qu'il ne semble pas avoir été mis à jour depuis des années.

### NanoCAD 5.0

Il y a aussi nanoCAD 5.0 (<https://nanocad.com/products/nanoCAD/download/>). Le programme est gratuit pour un usage personnel et commercial. Il demande une inscription gratuite pour recevoir un code d'activation par e-mail. Ce programme est sous Windows uniquement.

### Exporter vos fichiers AutoCAD dans un format convivial

Exportez votre fichier AutoCAD dans un des nombreux formats reconnu par FreeCAD, à savoir DXF R12 ou R14, SVG et si votre version le supporte IGES. Toutes ces versions sont de meilleures alternatives au format DWG lorsque vous utilisez FreeCAD.

Il est important de noter qu'il n'y a aucune différence entre le contenu d'un fichier enregistré aux formats DWG ou DXF, à condition qu'il s'agisse de la même version (ex. DWG 2014 vs. DXF 2014). Les deux formats sont maintenus par Autodesk, et ils prennent en charge exactement les mêmes fonctionnalités. La différence est que le DWG est fermé (fichier codé) tandis que le DXF est ouvert.

## Que puis-je faire pour aider ?

### Promouvoir l'utilisation des formats alternatifs

Autrement dit, n'acceptez plus des travaux effectués au format DWG. Dans la pratique, c'est plus facile à dire qu'à faire. Pourtant, ce ne serait pas une mauvaise pratique pour les utilisateurs et les partisans de FreeCAD d'éviter d'utiliser le format DWG chaque fois que c'est possible.

### Utiliser la bibliothèque LibreDWG et rapporter des bogues

Dans la version de développement comme mentionné ci-dessus, vous pouvez passer du convertisseur ODA propriétaire à la bibliothèque du logiciel libre LibreDWG pour les fichiers DWG (et DXF). Veuillez le faire et signaler tout problème que vous rencontrez.

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_and_DWG_Import/fr&oldid=1501168>"