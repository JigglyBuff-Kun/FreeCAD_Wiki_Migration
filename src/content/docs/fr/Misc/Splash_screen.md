---
title: Écran de démarrage
---
## Description

L'écran de démarrage est une image qui apparaît au démarrage de FreeCAD. Vous pouvez désactiver l'écran de démarrage dans les [réglages des préférences](/Preferences_Editor/fr#Général_2/fr "Preferences Editor/fr") en décochant l'option **Activer l'écran de démarrage**.

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'image de l'écran d'accueil est choisie de manière aléatoire parmi plusieurs images, y compris des modèles d'utilisateurs et des extensions.

## Écran de démarrage personnalisé

Pour utiliser un écran de démarrage personnalisé, vous devez placer une image nommée splash\_image.png dans l'un des répertoires suivants, en fonction du système d'exploitation :

* **Linux :** $XDG\_DATA\_HOME/FreeCAD/Gui/images/ (normalement cela correspond à ~/.local/share/FreeCAD/Gui/images/)
* **Windows :** %APPDATA%\NFreeCAD\Gui\images (normalement C:Úsers\username\AppData\Roaming\FreeCAD\Gui\images)
* **MacOS :** ~/Library/Application Support/FreeCAD/Gui/images/

Le répertoire peut être trouvé en utilisant la commande `App.getUserAppDataDir()` dans la [console Python](/Python_console/fr "Python console/fr"). Les dossiers `Gui` et `images` peuvent devoir être créés en premier. Le même écran de démarrage personnalisé sera utilisé pour toutes les versions de FreeCAD sur un ordinateur donné.

Retrieved from "<http://wiki.freecad.org/index.php?title=Splash_screen/fr&oldid=1488023>"