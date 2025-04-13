---
title: Atelier POV-Ray-Rendering
---

![](/images/POV-Ray-Rendering_workbench_icon.svg)

Icône de l'atelier POV-Ray-Rendering

## Introduction

L'atelier de rendu POV-Ray est un [Atelier externe](/External_workbenches/fr "External workbenches/fr") conçu pour faciliter le rendu, mais il offre également des options pour les utilisateurs avancés. L'atelier utilise le moteur de rendu [POV-Ray](http://www.povray.org/).

![](/images/POV-Ray-Rendering_Example.png)

## Fonctions

### Appliquer des textures

Il existe plus de 100 textures prédéfinies que vous pouvez appliquer, mais vous pouvez également définir vos propres textures.

![](/images/POV-Ray-Rendering_Textures.png)

#### Vignettes et aperçu en temps réel

Pour voir l'impact des options de texture sélectionnées, vous pouvez consulter la vignette pré-rendu ou utiliser l'aperçu en direct pour effectuer le rendu de la texture.

### Éclairage

Avec les trois types d'éclairage : éclairage de zone, éclairage ponctuel et éclairage ponctuel, et leurs différentes options, vous pouvez créer un éclairage avancé.

![](/images/POV-Ray-Rendering_Lights.png)

#### Éclairage indirect (GI)

L'atelier a la possibilité d'activer l'éclairage indirect pour créer des images plus réalistes.

![](/images/POV-Ray-Rendering_IndirectLighting.png)

### Environnements HDRI

Avec la prise en charge des environnements HDRI, les environnements remarquables sont simples à utiliser.

![](/images/POV-Ray-Rendering_HDRI.png)

### Fichier inc de l'utilisateur

Les utilisateurs expérimentés qui souhaitent accéder à toutes les options du moteur de rendu [POV-Ray](http://www.povray.org/) peuvent le faire en créant un fichier spécial. Pour plus de détails, voir la page [Power User](https://gitlab.com/usbhub/exporttopovray/-/blob/master/doc/PowerUser.md) sur notre Wiki.

## Utilisation

Voici une démonstration simple de l'atelier :

![](/images/POV-Ray-Rendering_Demo.gif)

Il existe de nombreuses autres options sur les autres onglets, veuillez les explorer vous-même, ou vous pouvez visiter notre Wiki : [atelier Wiki](https://gitlab.com/usbhub/exporttopovray/-/tree/master/doc)

## Installation

Cet atelier peut être installé et mis à jour à partir du ![](/images/AddonManager.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Le moteur de rendu [POV-Ray](http://www.povray.org/) utilisé par l'atelier doit être installé séparément. Voir [Installer POV](http://wiki.povray.org/content/HowTo:Install_POV). Pour les utilisateurs de Windows, le programme d'installation peut être téléchargé depuis la [POV-Ray Download Page](https://www.povray.org/download/), pour les utilisateurs de Linux, il peut généralement être installé depuis le gestionnaire de paquets. Consultez les instructions détaillées sur le [wiki de POV-Ray](https://wiki.povray.org/content/HowTo:Install_POV) si vous êtes sur Mac.

Pour terminer l'installation, le chemin d'accès à l'exécutable POV-Ray doit être défini dans les préférences de l'atelier :

- **Windows :** C:/Program Files/POV-Ray/v3.7/bin/pvengine64.exe (le dossier v\*.\* peut changer en fonction de la version de POV-Ray)
- **Linux :** /usr/bin/povray
- **MacOS :** non disponible. Si vous avez plus d'informations, n'hésitez pas à nous en faire part.

![](/images/POV-Ray-Rendering_ExePath.png)

## Outils

- ![](/images/POV-Ray-Rendering_OpenDialog.svg) OpenDialog : Ouvre le dialogue où la plupart du travail est fait. Ici, vous pouvez appliquer des textures, ajouter des environnements HDRI, etc. et démarrer le rendu.

- ![](/images/POV-Ray-Rendering_PointLight.svg) Point Light : Insère une lumière ponctuelle.

- ![](/images/POV-Ray-Rendering_AreaLight.svg) Area Light : Insère une lumière de zone.

- ![](/images/POV-Ray-Rendering_SpotLight.svg) Spot Light : Insère un spot lumineux.

## Références

- Auteurs :
  - Usb Hub : <https://gitlab.com/usbhub>
  - DerUhrmacher : <https://gitlab.com/DerUhrmacher>
- Code source sur GitHub : <https://github.com/TheRaytracers/freecad-povray-render>

## Liens vers l'atelier POV-Ray

- Wiki de l'atelier: <https://gitlab.com/usbhub/exporttopovray/-/tree/master/doc>
- Forum FreeCAD : <https://forum.freecadweb.org/viewtopic.php?f=9&t=48629>
- Signalez les bogues : Veuillez signaler les bogues sur GitHub ou sur le forum FreeCAD.

## Autres liens intéressants

- [Ateliers externes](/External_workbenches/fr "External workbenches/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=POV-Ray-Rendering_Workbench/fr&oldid=1303136>"
