---
title: App Origin
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

## Introduction

Un objet App Origin, ou formellement un `App::OriginGroupExtension`, est une classe fournissant des éléments sélectionnables qui représentent les trois axes standard (X, Y, Z) et les trois plans standard (XY, XZ et YZ) aux objets destinés à disposer différents types de géométrie dans l'espace.

Les objets ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr") [(App Part)](/App_Part/fr "App Part/fr") et les objets
![](/images/PartDesign_Body.svg) [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") sont créés avec des objets Origin par défaut. Si nécessaire, des objets Origin peuvent être aussi ajoutés à des objets ![](/images/Assembly_Assembly_Tree.svg) [Assembly](/Assembly3_CreateAssembly/fr "Assembly3 CreateAssembly/fr") de l'atelier ![](/images/Assembly3_workbench_icon.svg) [Assembly3](/Assembly3_Workbench/fr "Assembly3 Workbench/fr").

![Tree view](/images/App_OriginGroupExtension_example.png) ![3D view](/images/App_OriginGroupExtension-02.png)

A gauche : La [Vue en arborescence](/Tree_view/fr "Tree view/fr") montrant trois objets qui utilisent des objets Origin. A droite : Représentation des éléments d'origine dans la [Vue 3D](/3D_view/fr "3D view/fr").

Les axes et les plans sont des objets de type `App::Line` et `App::Plane` respectivement. Chacun de ces éléments peut être masqué et démasqué individuellement avec la barre Espace. Cela peut être utile pour sélectionner la référence correcte pour créer d'autres objets, par exemple des [esquisses](/Sketch/fr "Sketch/fr").

![](/images/FreeCAD_core_objects.svg)

Diagramme simplifié des relations entre les objets principaux du programme. Deux d'entre eux ont un objet Origine pour contrôler le placement des objets regroupés sous eux.

Retrieved from "<http://wiki.freecad.org/index.php?title=App_OriginGroupExtension/fr&oldid=1102651>"