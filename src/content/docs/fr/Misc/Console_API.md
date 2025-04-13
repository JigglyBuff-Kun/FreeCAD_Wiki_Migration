---
title: API de la console
---
:::caution
(octobre 2019) Ne pas éditer cette page. L'information est incomplète et obsolète. Pour la dernière API, voir ladocumentation de l'API générée automatiquement, ou générez la documentation vous-même, voirDocumentation du code source.
:::

Ce module est contenu dans le module FreeCAD et contient des méthodes pour envoyer le texte à la console de sortie FreeCAD et à la barre d'état. Les messages seront de couleur différente suivant s'ils sont des messages, des avertissements ou des erreurs.

Exemple:

```
import FreeCAD
FreeCAD.Console.PrintMessage("Hello World!\n")

```

![](/images/Method.png)  **GetStatus (** *"Connexion" ou "Msg" ou "Avert" ou "Err"* **)**

**Description**: Obtenir le statut soit pour la Connexion, Msg, Avert ou erreur pour un observateur

**Returns**: . Une chaîne d'état

![](/images/Method.png)  **PrintError (** *chaîne* **)**

**Description**: Imprime un message d'erreur à la sortie

**Returns**: rien

![](/images/Method.png)  **PRINTLOG (** *chaîne* **)**

**Description**: Imprime un message de de connexion à la sortie

**Returns**: rien

![](/images/Method.png)  **PrintMessage (** *chaîne* **)**

**Description**: Imprime un message à la sortie

**Returns**: rien

![](/images/Method.png)  **PrintWarning (** *chaîne* **)**

**Description**: Imprime un avertissement à la sortie

**Returns**: rien

![](/images/Method.png)  **SetStatus (** *chaîne* **)**

**Description**: Définir les états pour soit Connexion, Msg, Avert ou erreur pour un observateur

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=Console_API/fr&oldid=1356249>"