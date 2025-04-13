---
title: BIM Classification
---
|  |
| --- |
| BIM Classification |
| Emplacement du menu |
| Gestion → Gérer la classification... |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Classification** vous permet d'attribuer une classe standard à un objet ou à un matériau BIM. Les systèmes standards ne sont pas inclus dans FreeCAD, et vous devez télécharger ceux que vous souhaitez utiliser avant d'utiliser cet outil. Voir la section [Télécharger des systèmes de classification](#Télécharger_des_systèmes_de_classification) ci-dessous.

![](/images/BIM_classification_screenshot.png)

Gestionnaire de classifications

## Utilisation

1. Installez un ou plusieurs fichiers XML ou IFC standard de classification comme expliqué ci-dessus.
2. Si vous souhaitez ajouter ou modifier une classe pour un objet, sélectionnez cet objet et appuyez sur le bouton Classification BIM.
3. Si vous souhaitez ajouter ou modifier une classe pour un matériau, ne sélectionnez rien et appuyez sur le bouton Classification BIM. Vous pourrez parcourir les matériaux directement à partir de la fenêtre du gestionnaire de classification.

## Télécharger des systèmes de classification

Plusieurs systèmes de classification sont disponibles en format XML ou IFC (les deux sont pris en charge par cet outil) sur le site <https://github.com/Moult/IfcClassification>, ou directement auprès de leurs éditeurs, ou encore sur le site <https://www.graphisoft.com/downloads/archicad/BIM_Data.html>. Pour que ces fichiers XML ou IFC soient connus de FreeCAD, ils doivent être placés dans un sous-dossier BIM de votre dossier d'utilisateur de FreeCAD. L'emplacement exact de votre système est indiqué dans la fenêtre de dialogue de classification BIM. Si un fichier IFC et un fichier XML sont tous deux disponibles, l'outil de classification BIM préférera le fichier IFC.

Il existe une [macro](/Macro_Download_Classifications/fr "Macro Download Classifications/fr") qui permet de télécharger tous les systèmes disponibles sur <https://github.com/Moult/IfcClassification> et de les placer directement dans le bon dossier. Après avoir exécuté la macro, tout est prêt pour utiliser cet outil.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Classification/fr&oldid=1534802>"