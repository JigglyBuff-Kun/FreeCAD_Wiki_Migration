---
title: Modèle GuiCommand
---

:::caution
Cette page montre un modèle de pageGui Command. Sous la sectionBloc sélectionnableci-dessous, vous trouverez le même contenu que vous pouvez facilement sélectionner pour le coller dans une nouvelle page.
:::

|                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------- |
| Modèle GuiCommand                                                                                                      |
| Emplacement du menu                                                                                                    |
| Menu → Sousmenu → Texte de menu pour la commande                                                                       |
| Ateliers                                                                                                               |
| [Nom de l'atelier](/index.php?title=Workbench_Name/fr&action=edit&redlink=1 "Workbench Name/fr (page does not exist)") |
| Raccourci par défaut                                                                                                   |
| F C                                                                                                                    |
| Introduit dans la version                                                                                              |
| 0.19                                                                                                                   |
| Voir aussi                                                                                                             |
| _Aucun_                                                                                                                |
|                                                                                                                        |

## Description

Tant que la page est en construction, ajoutez le modèle [Template:UnfinishedDocu](/Template:UnfinishedDocu "Template:UnfinishedDocu") en haut de la page en tapant simplement : **{{UnfinishedDocu}}**.

Dans ce premier paragraphe, donnez une brève description de ce que fait la commande. La description peut faire référence à d'autres ateliers tels que l'![](/images/Workbench_Sketcher.svg) [Atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"). (_Note de l'éditeur:_ L'image fait 24px, pas 16px)

N'oubliez pas d'utiliser [Template:Version](/Template:Version "Template:Version"), [Template:VersionMinus](/Template:VersionMinus "Template:VersionMinus"), [Template:VersionPlus](/Template:VersionPlus "Template:VersionPlus") et [Template:Obsolete](/Template:Obsolete "Template:Obsolete"), ou leurs variantes en exposant [Template:VersionNote](/Template:VersionNote "Template:VersionNote"), [Template:VersionNoteMinus](/Template:VersionNoteMinus "Template:VersionNoteMinus"), [Template:VersionNotePlus](/Template:VersionNotePlus "Template:VersionNotePlus") et [Template:VersionNoteObsolete](/Template:VersionNoteObsolete "Template:VersionNoteObsolete") (pour éviter les crochets).

Par exemple :

- La fonctionnalité `App::Link` ([introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")) permet d'établir des liens entre les sous-assemblages, etc...

* ![](/images/Assembly_CreateSimulation.svg) [Simulation](/Assembly_CreateSimulation/fr "Assembly CreateSimulation/fr") : crée une simulation de l'assemblage en cours. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")

- ...ateliers, macros, kits de préférence, bundles[introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr"), et « autres » collections génériques d'outils[introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")...

Ajoutez une image si possible et suivez les instructions de [Ecrire une page Wiki](/WikiPages/fr#Illustrations "WikiPages/fr"). Exemple tiré de [Part Balayage](/Part_Sweep/fr "Part Sweep/fr") :

![](/images/Part_Sweep_simple.png)

Facultatif : ajoutez une légende sous l'image pour expliquer le fonctionnement de l'outil.

La fermeture et l’ouverture des balises de traduction doivent entourer les images et d’autres éléments fixes, s’ils ne nécessitent pas de traduction. La légende doit toujours être traduite.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   - Appuyez sur le bouton ![](/images/Std_Open.svg) Base ExampleCommandModel. (_Note de l'éditeur :_ ceci utilise le modèle [Template:Button](/Template:Button "Template:Button"), il est nécessaire de créer un lien vers la commande comme indiqué dans cet exemple)
   - Sélectionnez l'option **Menu → Sous-menu → ![](/images/Std_Open.svg) Texte du menu de la commande** du menu. (_Note de l'éditeur :_ ceci utilise le modèle [Template:MenuCommand](/Template:MenuCommand "Template:MenuCommand"))
   - Sélectionnez l'option **Submenu → ![](/images/Std_Open.svg) Texte du menu de la commande** dans le menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou de la [vue 3D](/3D_view/fr "3D view/fr"). (_Note de l'éditeur :_ ceci utilise également le modèle [Template:MenuCommand](/Template:MenuCommand "Template:MenuCommand"), toutes les commandes ne sont pas accessibles à partir d'un menu contextuel)
   - Utilisez le raccourci clavier F puis C ou Ctrl + Z. (_Note de l'éditeur:_ Ceci utilise le modèle [Template:KEY](/Template:KEY "Template:KEY"), toutes les commandes n'ont pas de raccourci clavier)
2. Étapes détaillées au besoin. Certaines étapes peuvent nécessiter Keyboard pressions tandis que d'autres peuvent nécessiter l'utilisation de la souris pour cliquer sur un Button.
3. Définissez les options et appuyez sur OK.

## Options

- Optionnel. Énumérez les options de commande ici. Voir par exemple [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr").

## Exemple

Optionnel.

## Remarques

- Optionnel. Utilisez une liste à puces s'il y a plusieurs éléments. Vous pouvez également mentionner les limitations ici.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet est généralement dérivé d'un objet de base. Vous ne devez pas énumérer les propriétés qui sont héritées de cet objet de base. Voir par exemple [Draft Polyligne](/Draft_Wire/fr#Propri.C3.A9t.C3.A9s "Draft Wire/fr").

### Données

Property Group

- Données**Property Name 1** (`PropertyType`) : description de la propriété. (_Note de l'éditeur :_ pour trouver `PropertyType`, sélectionnez **Afficher les propriétés cachées** dans le menu contextuel de l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"). L'infobulle de chaque propriété comprendra alors cette information. Mais `PropertyType` peut également être trouvé dans le code source).

### Vue

Property Group

- Vue**Property Name 2** (`PropertyType`) : description de la propriété

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil ExampleCommandModel peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
Object = makeExampleCommandModel(Data1, Data2)

```

- Créer un `Object` utilisant `Data1` et `Data2`.

Exemple :

```
import FreeCAD, Base

Model = Base.makeExampleCommandModel(FreeCAD.Data1, FreeCAD.Data2)

```

## Autre

Optionnel.

## Bloc sélectionnable

```
<languages/>
{{UnfinishedDocu}}
<translate>

{{Docnav
|[[Base_PreviousCommand|PreviousCommand]]
|[[Base_NextCommand|NextCommand]]
|[[Workbench_Name|Workbench]]
|IconL= <!--filename of icon with extension (e.g. svg, png)-->
|IconR= <!--filename of icon with extension (e.g. svg, png)-->
|IconC= <!--filename of icon with extension (e.g. svg, png)-->
}}

{{GuiCommand
|Name=Base ExampleCommandModel
|Icon= <!--filename of icon with extension (e.g. svg, png) if not the same name as command-->
|MenuLocation=Menu → Submenu → Menu text for the command
|Workbenches=[[Workbench_Name|Workbench]]
|Shortcut={{KEY|F}} {{KEY|C}}
|Version=0.19
|SeeAlso= <!--add links to similar commands and related pages-->
}}

== Description ==

While the page is under construction, add the [[Template:UnfinishedDocu]] template at the top of the page by simply typing: '''{{UnfinishedDocu}}'''

In this first paragraph give a short description of what the command does. The description can refer to other workbenches such as the [[Image:Workbench_Sketcher.svg|24px]] [[Sketcher_Workbench|Sketcher Workbench]]. (''Editor note:'' The image is 24px, not 16px)

Remember to use [[Template:Version]], [[Template:VersionMinus]], [[Template:VersionPlus]] and [[Template:Obsolete]], or their superscript variants [[Template:VersionNote]], [[Template:VersionNoteMinus]], [[Template:VersionNotePlus]] and [[Template:VersionNoteObsolete]] (to avoid brackets), when applicable.

For example:
* The {{incode|App::Link}} feature ({{Version|0.19}}) allows linking between sub-assemblies etc...
* [[Image:Assembly_CreateSimulation.svg|32px]] [[Assembly_CreateSimulation|Create Simulation]]: creates a simulation of the current assembly. {{Version|1.1}}
* ...workbenches, macros, preference packs, bundles{{VersionNote|1.1}}, and generic "other" collections of tools{{VersionNote|1.1}}...

Add an image if possible, and please follow the guidelines in [[WikiPages#Graphics|WikiPages]]. Example taken from [[Part_Sweep|Part Sweep]]:
</translate>
[[Image:Part_Sweep_simple.png|none]]
<translate>
{{Caption|Optional: add a caption below the image to explain what the tool does}}

Closing and opening translate tags should surround images, and other fixed elements, if they don't need to be translated. The caption should always be translated.

== Usage ==

# There are several ways to invoke the command:
#* Press the {{Button|[[Image:Std_Open.svg|16px]] [[GuiCommand_model|Base ExampleCommandModel]]}} button. (''Editor note:'' This uses the [[Template:Button]] template, it is necessary to link to the command as shown in this example)
#* Select the {{MenuCommand|Menu → Submenu → [[Image:Std_Open.svg|16px]] Menu text for the command}} option from the menu. (''Editor note:'' This uses the [[Template:MenuCommand]] template)
#* Select the {{MenuCommand|Submenu → [[Image:Std_Open.svg|16px]] Menu text for the command}} option from the [[Tree_view|Tree view]] context menu or [[3D_view|3D view]] context menu. (''Editor note:'' This also uses the [[Template:MenuCommand]] template, not all commands can be accessed from a context menu)
#* Use the keyboard shortcut {{KEY|F}} then {{KEY|C}} or {{KEY|Ctrl}}+{{KEY|Z}}. (''Editor note:'' This uses the [[Template:KEY]] template, not all commands have a keyboard shortcut)
# Detailed steps as needed. Some steps may need {{KEY|Keyboard}} presses while others may require using the mouse to click on a {{Button|Button}}.
# Set options and press {{Button|OK}}.

== Options ==

* Optional. List the command options here. See for example [[Draft_Wire|Draft Wire]].

== Example ==

Optional.

== Notes ==

* Optional. Use a bullet list if there are multiple items. You can also mention limitations here.

== Properties ==

See also: [[Property_editor|Property editor]].

An object is usually derived from a base object. You should not list the properties that are inherited from that base object. See for example [[Draft_Wire#Properties|Draft Wire]].

=== Data ===

{{Properties_Title|Property Group}}

* {{PropertyData|Property Name 1|PropertyType}}: Description of the property. (''Editor note:'' to find the {{Value|PropertyType}} select {{MenuCommand|Show hidden}} in the context menu of the [[Property_editor|Property editor]]. The tooltip of each property will then include this information. But the {{Value|PropertyType}} can also be found in the source code.)

=== View ===

{{Properties_Title|Property Group}}

* {{PropertyView|Property Name 2|PropertyType}}: Description of the property.

== Scripting ==

See also: [https://freecad.github.io/SourceDoc/ Autogenerated API documentation] and [[FreeCAD_Scripting_Basics|FreeCAD Scripting Basics]].

The ExampleCommandModel tool can be used in [[Macros|macros]] and from the [[Python|Python]] console by using the following function:

</translate>
{{Code|code=
Object = makeExampleCommandModel(Data1, Data2)
}}
<translate>

* Creates an {{incode|Object}} using {{incode|Data1}} and {{incode|Data2}}.

Example:

</translate>
{{Code|code=
import FreeCAD, Base

Model = Base.makeExampleCommandModel(FreeCAD.Data1, FreeCAD.Data2)
}}
<translate>

== Other ==

Optional.

{{Docnav
|[[Base_PreviousCommand|PreviousCommand]]
|[[Base_NextCommand|NextCommand]]
|[[Workbench_Name|Workbench]]
|IconL= <!--filename of icon with extension (e.g. svg, png)-->
|IconR= <!--filename of icon with extension (e.g. svg, png)-->
|IconC= <!--filename of icon with extension (e.g. svg, png)-->
}}

</translate>
{{Workbench_Tools_navi{{#translation:}}}} <!--use the Tools navi belonging to the workbench -->
{{Userdocnavi{{#translation:}}}}

```

[Template:Workbench Tools navi/fr](/index.php?title=Template:Workbench_Tools_navi/fr&action=edit&redlink=1 "Template:Workbench Tools navi/fr (page does not exist)")

Retrieved from "<http://wiki.freecad.org/index.php?title=GuiCommand_model/fr&oldid=1560989>"
