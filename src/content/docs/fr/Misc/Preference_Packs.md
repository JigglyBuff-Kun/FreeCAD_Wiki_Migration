---
title: Kits de préférences
---
## Introduction

Un **kit de préférences** est un ensemble de préférences de l'utilisateur ([introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")) qui peut être installée comme une extension et appliquée comme un seul ensemble. N'importe quel paramètre de l'utilisateur qui peut être défini dans le fichier user.cfg peut être inclus dans un kit de préférences. L'application d'un kit de préférences définit toutes les variables du fichier CFG fourni sans modifier aucun autre paramètre utilisateur. Par exemple, ces kitx peuvent être utilisés pour créer des "Thèmes" en regroupant une feuille de style personnalisée avec un ensemble de préférences utilisateur qui définit les différentes couleurs et styles d'éléments dans FreeCAD qui ne sont pas contrôlés par la feuille de style.

## Interface des kits de préférences

La plupart des interactions de l'utilisateur avec les kits de préférences installés se font via l'onglet **Général** de la section **Paramètres généraux** de l'[Éditeur des préférences](/Preferences_Editor/fr "Preferences Editor/fr")

![](/images/PreferencePacks_MainInterface.png)

## Appliquer un kit installé

Pour appliquer un kit de préférences, cliquez sur le bouton Appliquer à côté de son nom dans l'onglet *Général* de [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr"). Le cœur d'un kit de préférences est un ensemble de préférences de l'utilisateur. Lors de l'application d'un kit, chacune de ces préférences est modifiée à la valeur définie dans le kit. A titre facultatif, l'auteur du kit peut avoir inclus une macro pré- et/ou post-application qui peut également être exécutée. Comme les kits peuvent potentiellement apporter des modifications importantes (et éventuellement indésirables) à vos préférences utilisateur, une sauvegarde horodatée de vos préférences d'origine est effectuée et stockée dans FREECAD\_USER\_DATA/SavedPreferencePacks/Backups. Ces sauvegardes sont conservées pendant une semaine.

## Créer un nouveau kit

Les kits peuvent être créés à la main ou lancés en utilisant le bouton Save new... dans l'onglet *Général* de [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr"). Cliquer sur le bouton affiche une fenêtre de dialogue demandant un nom pour le nouveau kit, et affiche un ensemble de cases à cocher permettant de ne stocker qu'un sous-ensemble de préférences.

![](/images/PreferencePacks_SaveNewPack.png)

En raison de la façon dont FreeCAD utilise les préférences en interne, seuls les éléments contenus dans ces fichiers modèles peuvent être enregistrés automatiquement en utilisant cette procédure. Les éléments non inclus dans les fichiers modèles doivent être inclus manuellement dans le fichier \*.cfg du kit. Il n'y a pas de limite intégrée aux éléments de préférences qui peuvent être inclus dans un kit de préférences, mais il est fortement déconseillé aux auteurs de changer la langue de l'utilisateur, ou de modifier la liste des fichiers récents, ou de changer quoi que ce soit lié à un état temporaire de l'interface utilisateur (par exemple, la taille enregistrée d'une fenêtre redimensionnable, etc).

### Détails du modèle

Ces sections répertorient toutes les préférences contenues dans les modèles intégrés. Pour l'instant, elles se concentrent sur les éléments liés à l'apparence, mais les demandes de téléchargement et les suggestions du forum pour des inclusions supplémentaires sont les bienvenues. Les modules complémentaires installés peuvent également fournir leurs propres modèles (non documentés ici). Cliquez sur "Développer" à l'extrême droite de chaque entrée pour voir la liste.

**Couleurs de Arch**

* Preferences/Mod/Arch/WallColor
* Preferences/Mod/Arch/StructureColor
* Preferences/Mod/Arch/RebarColor
* Preferences/Mod/Arch/WindowColor
* Preferences/Mod/Arch/WindowGlassColor
* Preferences/Mod/Arch/PanelColor
* Preferences/Mod/Arch/ColorHelpers
* Preferences/Mod/Arch/defaultSpaceColor

**Couleurs de la console**

* Preferences/OutputWindow/colorText
* Preferences/OutputWindow/colorLogging
* Preferences/OutputWindow/colorWarning
* Preferences/OutputWindow/colorError

**Couleurs de Draft**

* Preferences/Mod/Draft/constructioncolor
* Preferences/Mod/Draft/gridTransparency
* Preferences/Mod/Draft/gridColor
* Preferences/Mod/Draft/snapcolor

**Couleurs de l'éditeur**

* Preferences/Editor/Text
* Preferences/Editor/Bookmark
* Preferences/Editor/Breakpoint
* Preferences/Editor/Keyword
* Preferences/Editor/Comment
* Preferences/Editor/Block comment
* Preferences/Editor/Number
* Preferences/Editor/String
* Preferences/Editor/Character
* Preferences/Editor/Class name
* Preferences/Editor/Define name
* Preferences/Editor/Operator
* Preferences/Editor/Python output
* Preferences/Editor/Python error
* Preferences/Editor/Current line highlight

**Police de l'éditeur**

* Preferences/Editor/FontSize
* Preferences/Editor/Font

**Mise en page de la fenêtre principale**

* Preferences/MainWindow/DockWindows/Std\_SelectionView
* Preferences/MainWindow/DockWindows/Std\_ComboView
* Preferences/MainWindow/DockWindows/Std\_ReportView
* Preferences/MainWindow/DockWindows/Std\_PythonView
* Preferences/MainWindow/DockWindows/Std\_TreeView
* Preferences/MainWindow/DockWindows/Std\_PropertyView
* Preferences/MainWindow/DockWindows/Std\_DAGView
* Preferences/MainWindow/Toolbars/File
* Preferences/MainWindow/Toolbars/Workbench
* Preferences/MainWindow/Toolbars/Macro
* Preferences/MainWindow/Toolbars/View
* Preferences/MainWindow/Toolbars/Structure
* Preferences/MainWindow/Toolbars/Navigation

**Couleurs de Path**

* Preferences/Mod/Path/DefaultNormalPathColor
* Preferences/Mod/Path/DefaultRapidPathColor
* Preferences/Mod/Path/DefaultPathMarkerColor
* Preferences/Mod/Path/DefaultExtentsColor
* Preferences/Mod/Path/DefaultProbePathColor
* Preferences/Mod/Path/DefaultHighlightPathColor
* Preferences/Mod/Path/DefaultBBoxSelectionColor
* Preferences/Mod/Path/DefaultBBoxNormalColor

**Couleurs de Sketcher**

* Preferences/View/SketchEdgeColor
* Preferences/View/SketchVertexColor
* Preferences/View/EditedEdgeColor
* Preferences/View/EditedVertexColor
* Preferences/View/ConstructionColor
* Preferences/View/ExternalColor
* Preferences/View/InvalidSketchColor
* Preferences/View/FullyConstrainedColor
* Preferences/View/InternalAlignedGeoColor
* Preferences/View/FullyConstraintElementColor
* Preferences/View/FullyConstraintConstructionElementColor
* Preferences/View/FullyConstraintInternalAlignmentColor
* Preferences/View/FullyConstraintConstructionPointColor
* Preferences/View/ConstrainedIcoColor
* Preferences/View/NonDrivingConstrDimColor
* Preferences/View/ConstrainedDimColor
* Preferences/View/ExprBasedConstrDimColor
* Preferences/View/DeactivatedConstrDimColor
* Preferences/View/CursorTextColor
* Preferences/View/CursorCrosshairColor
* Preferences/View/CreateLineColor

**Couleurs de Start**

* Preferences/Mod/Start/BackgroundColor1
* Preferences/Mod/Start/BackgroundTextColor
* Preferences/Mod/Start/PageColor
* Preferences/Mod/Start/PageTextColor
* Preferences/Mod/Start/BoxColor
* Preferences/Mod/Start/LinkColor
* Preferences/Mod/Start/BackgroundColor2

**Couleurs de TechDraw**

* Preferences/Mod/TechDraw/Decorations/SectionColor
* Preferences/Mod/TechDraw/Decorations/CenterColor
* Preferences/Mod/TechDraw/Decorations/VertexColor
* Preferences/Mod/TechDraw/Decorations/HighlightColor
* Preferences/Mod/TechDraw/Colors/Hatch
* Preferences/Mod/TechDraw/Colors/Background
* Preferences/Mod/TechDraw/Colors/PreSelectColor
* Preferences/Mod/TechDraw/Colors/HiddenColor
* Preferences/Mod/TechDraw/Colors/SelectColor
* Preferences/Mod/TechDraw/Colors/NormalColor
* Preferences/Mod/TechDraw/Colors/CutSurfaceColor
* Preferences/Mod/TechDraw/Colors/GeomHatch
* Preferences/Mod/TechDraw/Colors/FaceColor
* Preferences/Mod/TechDraw/Colors/ClearFace

**Couleurs de la fenêtre**

* Preferences/View/BacklightColor
* Preferences/View/BackgroundColor
* Preferences/View/BackgroundColor2
* Preferences/View/BackgroundColor3
* Preferences/View/BackgroundColor4
* Preferences/View/Simple
* Preferences/View/Gradient
* Preferences/View/UseBackgroundColorMid
* Preferences/View/HighlightColor
* Preferences/View/SelectionColor
* Preferences/View/DefaultShapeColor
* Preferences/View/RandomColor
* Preferences/TreeView/TreeEditColor
* Preferences/TreeView/TreeActiveColor
* Preferences/MainWindow/TiledBackground
* Preferences/MainWindow/StyleSheet

### Structure du kit de préférence

Bien que le noyau de la plupart des kits de préférences soit un seul fichier de configuration, en raison de leur conception pour la distribution, une structure auxiliaire est également nécessaire. Quatre fichiers de base définissent un kit, disposés dans la structure de répertoire suivante (pour un kit de préférence nommé "SamplePreferencePack") :

* package.xml
* SamplePreferencePack/
  + SamplePreferencePack.cfg
  + pre.FCMacro
  + post.FCMacro

Le fichier des [Métadonnées du package](/Package_Metadata/fr "Package Metadata/fr"), package.xml, définit le nom du kit de préférences et vous permet d'attribuer d'autres éléments de métadonnées tels qu'un numéro de version, des informations sur l'auteur et des balises (qui sont affichées dans l'interface principale sous forme de liste séparée par des virgules). Pour un kit de préférences enregistré à l'aide de l'interface graphique comme expliqué ci-dessus, un seul fichier package.xml est créé dans le répertoire FREECAD\_USER\_DATA/SavedPreferencePacks/. Ce fichier est utilisé pour décrire les détails tels que le nom et les balises de tous les kits de préférences enregistrés par l'utilisateur. Pour modifier le nom ou les étiquettes d'un kit, ce fichier doit être édité manuellement avec un éditeur de texte. Il peut également fournir un modèle pour les packs de préférences distribués : l'auteur d'un kit distribué peut choisir de commencer par sauvegarder un kit localement, puis de copier le sous-répertoire du kit et ce fichier global package.xml comme point de départ, en modifiant le fichier package.xml copié pour ne référencer que le kit en cours de distribution.

D'autres fichiers peuvent également être inclus dans une distribution, en fonction de ce qui est requis pour le kit. Un kit de préférences bien produit conçu pour distribuer un thème visuel appelé "DarkSide" pour FreeCAD pourrait ressembler à ceci :

* package.xml
* resources/
  + icons/
    - DarkSide.svg
* DarkSide/
  + DarkSide.cfg
  + DarkSide.qss

Notez l'omission des fichiers *pre.FCMacro* et *post.FCMacro*, qui sont souvent inutiles, ainsi que l'inclusion d'une icône (destinée à être affichée par le ![](/images/Std_AddonMgr.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr")), et l'inclusion d'un fichier qss (qui sera ensuite référencé dans le fichier de données de configuration *DarkSide.cfg*).

Les fichiers pré- et post-macro sont des macros FreeCAD Python standard, et peuvent contenir toutes les commandes valables dans une telle macro. Si la macro pre.FCMacro génère une exception (de quelque type que ce soit), l'application du kit de préférences est annulée. Si la post.FCMacro génère une exception (de quelque type que ce soit), l'application du kit est annulée à l'aide de la sauvegarde effectuée avant son application. Par exemple, ces macros peuvent être utilisées pour demander à l'utilisateur d'accepter la licence, ou pour vérifier qu'il est satisfait de l'état final de son système après application.

Le fichier package.xml pour ce kit d'exemple pourrait être :

```
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<package format="1" xmlns="https://wiki.freecad.org/Package_Metadata">
  <name>DarkSide Theme Package</name>
  <description>A preference pack including a stylesheet and other GUI color information for a Dark mode.</description>
  <version>1.0.0</version>
  <maintainer email="chennes@pioneerlibrarysystem.org">Chris Hennes</maintainer>
  <license file="LICENSE">GPLv3</license>
  <url type="repository" branch="main">https://github.com/chennes/DarkSideThemePackage</url>
  <icon>resources/icons/DarkSide.svg</icon>

  <content>
    <preferencepack>
      <name>DarkSide</name>
      <description>Dark mode color scheme</description>
      <tag>color</tag>
      <tag>stylesheet</tag>
      <tag>dark</tag>
      <file>DarkSide.qss</file>
    </preferencepack>
  </content>

</package>

```

### Inclure des modèles dans votre extension

De nombreuses extensions comportent des informations de préférence spécifiables par l'utilisateur qui sont ajoutées au fichier user.cfg. L'auteur d'une extension peut également choisir de fournir un fichier modèle de kit de préférences qui répertorie les variables de configuration de l'utilisateur pouvant être enregistrées automatiquement à l'aide de la méthode "Save new pack" décrite ci-dessus. Pour inclure ces fichiers modèles, les auteurs d'addons doivent créer un sous-répertoire dans leur paquet appelé "PreferencePackTemplates" ou "preference\_pack\_templates". Ce dossier doit contenir un ou plusieurs fichiers \*.cfg : chacun doit être un fichier XML user.cfg valide et bien formé contenant une ou plusieurs variables de configuration définies sur leurs valeurs par défaut. Le nom du fichier doit refléter son objectif, par exemple "colors.cfg", "active\_tabs.cfg", etc. Cet ensemble de fichiers sera présenté à l'utilisateur lorsqu'il enregistrera un nouveau kit de préférences, chaque fichier recevant une entrée cochable dans la liste des éléments à enregistrer. Le nom du fichier est utilisé pour générer l'entrée de l'interface utilisateur, les caractères de soulignement étant remplacés par des espaces (et l'extension étant omise).

## Distribuer un kit

Les kits de préférences sont distribués de manière identique aux [ateliers externes](/External_workbenches/fr "External workbenches/fr") par le biais du ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Pour installer un kit manuellement, utilisez git pour cloner le dépôt du kit dans votre répertoire de données FreeCAD ((entrez `App.getUserAppDataDir()` dans la [console Python](/Python_console/fr "Python console/fr") pour obtenir ce chemin)), dans un sous-répertoire appelé "Preference Packs". Notez que les paquets installés par l'utilisateur et portant le même nom qu'un paquet inclus sont prioritaires.

Voir aussi [Kits de préférences privés](/Private_Preference_Packs/fr "Private Preference Packs/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Preference_Packs/fr&oldid=1495855>"