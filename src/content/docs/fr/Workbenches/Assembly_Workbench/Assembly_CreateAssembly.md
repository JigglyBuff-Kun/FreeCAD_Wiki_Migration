---
title: Assembly Assemblage
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly Assemblage |
| Emplacement du menu |
| Assemblage → Créer un assemblage |
| Ateliers |
| [Assembly](/Assembly_Workbench/fr "Assembly Workbench/fr") |
| Raccourci par défaut |
| A |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Assembly_CreateAssembly.svg) Assembly Assemblage crée un assemblage racine (objet Assemblage) dans le document en cours ou un sous-assemblage d'un assemblage actif préexistant. Un document ne peut contenir qu'un seul assemblage racine.

Chaque objet Assembly est créé avec un objet [Origin](/App_OriginGroupExtension/fr "App OriginGroupExtension/fr") et un conteneur Joints vide par défaut.

## Utilisation

1. Si le document contient déjà un ou plusieurs assemblages : activer un assemblage.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Assembly_CreateAssembly.svg) Créer un assemblage.
   * Sélectionnez l'option **Assemblage → ![](/images/Assembly_CreateAssembly.svg) Créer un assemblage** du menu.
   * Utilisez le raccourci clavier : A.
3. Un nouvel objet Assembly est créé, soit dans le document, soit dans l'assemblage activé.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **Assembly**, ou formellement un `Assembly::AssemblyObject`, possède les propriétés suivantes :

### Données

Base

* Données**Type** (`String`) :
* Données**Material** (`Link`) :
* Données (Hidden)**Meta** (`Map`) :
* Données**Id** (`String`) :
* Données (Hidden)**Uid** (`UUID`) :
* Données**License** (`String`) :
* Données**License URL** (`String`) :
* Données**Color** (`Color`) :
* Données**Placement** (`Placement`) :
* Données**Label** (`String`) :
* Données (Hidden)**Label2** (`String`) :
* Données (Hidden)**Expression Engine** (`ExpressionEngine`) :
* Données (Hidden)**Visibility** (`Bool`) :
* Données (Hidden)**Origin** (`Link`) :
* Données**Group** (`LinkList`) :
* Données (Hidden)**\_ Group Touched** (`Bool`) :

### Vue

Display Options

* Vue**Display Mode** (`Enumeration`): `Group` (la seule option pour l'instant).
* Vue**Show In Tree** (`Bool`): `true` par défaut.
* Vue**Visibility** (`Bool`): `true` par défaut.

Selection

* Vue**On Top When Selected** (`Enumeration`) :
* Vue**Selection Style** (`Enumeration`) :

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateAssembly/fr&oldid=1501762>"