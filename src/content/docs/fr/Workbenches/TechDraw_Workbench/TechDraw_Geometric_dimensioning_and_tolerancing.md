---
title: TechDraw Dimensionnement géométrique et tolérance
---
## Concept

Le but principal d'un dessin technique est que les autres comprennent ce que le concepteur a créé avec quelles tolérances ET comment fabriquer le dessin. Étant donné que la plupart des pièces doivent s'adapter aux assemblages, les relations géométriques avec les autres pièces sont également importantes. Pour y parvenir, le système de [Geometric Dimensioning and Tolerancing](https://en.wikipedia.org/wiki/Geometric_dimensioning_and_tolerancing) (GD&T) a été développé.

Prenons par exemple cette pièce :

![](/images/TechDraw_Hole-Position-Example.png)

Dans l'application, un axe doit être passé à travers les 2 trous de la pièce. Cela signifie que nous devons spécifier les éléments suivants

* Le diamètre des trous et leurs positions.
* Que les trous sont le long d'un certain axe qui n'est pas perpendiculaire au plan de base XZ.
* Que la partie axe doit avoir une certaine rectitude.

La rectitude est importante car un axe tordu ne passerait pas à travers les trous. L'alignement des trous est important car le simple fait de percer chaque trou à la position donnée sans prendre soin de l'axe conduirait à des trous à travers lesquels l'axe ne s'adapterait pas. Il ne suffit donc pas de spécifier la cote et la position du trou. Le premier point est le cotation "classique" tandis que les 2 autres sont des informations géométriques, ainsi GD&T entre en jeu. L'exemple montre également clairement que GD&T est essentiel pour garantir que les pièces s'adaptent bien aux assemblages.

Si vous n'êtes pas familier avec le concept de GD&T, nous vous recommandons vivement de vous renseigner dès maintenant. Par exemple, une brève introduction est donnée dans [cette vidéo](https://www.youtube.com/watch?v=P5GT9ZSRYl0). Pour plus d'informations sur le concept de "condition matérielle maximale", jetez un œil à [cette vidéo](https://www.youtube.com/watch?v=UXZjTb3ZUQI). Pour plus de détails sur toutes sortes de fonctionnalités GD&T, regardez autour de vous sur Internet. Par exemple, [cette chaîne YouTube](https://www.youtube.com/c/Gdandtbasics/videos) fournit quelques bonnes explications.

GD&T est défini dans les normes [ISO 1101](http://geo-dim-tol.ir/files/iso1101.pdf) and [ASME Y14.5](http://www.sharifcadcam.ir/uploaded/2e22f9ef-dfc5-47bc-a126-cc51e9686c4f.pdf).

Les possibilités de TechDraws pour répondre aux normes GD&T courantes sont limitées (à partir de FreeCAD 0.20), mais vous pouvez déjà accomplir beaucoup de choses. Cette page Wiki explique ce qui est implémenté et quelles astuces peuvent être utilisées pour les fonctionnalités non implémentées. **Remarque :** cette page Wiki n'est pas là pour enseigner GD&T!

## Cotations

TechDraw fournit plusieurs outils pour créer différents types de cotations. Veuillez consulter les [differentes cotations](/TechDraw_Workbench/fr#Cotes "TechDraw Workbench/fr") pour savoir comment les créer et les modifier.

### Mise en forme

La police par défaut pour la nouvelle cote est déterminée par le paramètre **Police des étiquettes** des [préférences](/TechDraw_Preferences/fr#.C3.89tiquettes "TechDraw Preferences/fr"). La taille de la police par défaut est spécifiée par le paramètre **Taille de la police** des [préférences](/TechDraw_Workbench/fr#Cotations "TechDraw Workbench/fr").  
**Remarque :** il est recommandé d'utiliser une police où le signe moins a la même largeur que le signe plus, car cela garantit que les tolérances seront formatées comme proposé par les normes GD&T. Une bonne police est par exemple *osifont* qui fait partie de toutes les installations FreeCAD.

Le format par défaut des nouveaux numéros de cote dépend des options **Utiliser les paramètres système pour les décimales** et **Nombre personnalisé de décimales** des [préférences](/TechDraw_Workbench/fr#Cotations "TechDraw Workbench/fr"). Cela spécifie le nombre de décimales, mais dans tous les cas, la cote est un nombre à virgule flottante. Par exemple, si le paramètre doit avoir 2 décimales, le spécificateur de format utilisé est "%.2f" (nombre à virgule flottante avec 2 décimales).

Le format des nombres peut être modifié :

1. Double-cliquez sur la cote dans le dessin ou sur l'objet cote dans la vue en arborescence du modèle
2. Dans la fenêtre de dialogue de la cote qui apparaît, se trouve le champ **Spécificateur de format**, modifiez-le en fonction de vos besoins.

La syntaxe du spécificateur de format est [expliqué ici](https://www.cplusplus.com/reference/cstdio/printf/). Vous pouvez également utiliser [cet outil en ligne](https://onlinetexttools.com/printf-text) pour voir quel spécificateur de formatage formatera les nombres.

**Exemples :**

* Vous utilisez 2 décimales, mais pour un angle, vous voulez n'avoir qu'une seule décimale, utilisez le spécificateur de format *%.1f*.
* Vous utilisez 2 décimales mais n'aimez pas que les zéros à la fin soient affichés (vous préférez *4* au lieu de *4.00*). Utilisez ce spécificateur de format : *%g*. Le "g" utilisera la valeur de sortie la plus courte possible et omettra les zéros à la fin. De plus, il passera automatiquement en [notation scientifique](https://fr.wikipedia.org/wiki/Notation_scientifique#Notation_E) si nécessaire.

Avec la propriété Données**Inverted**, vous pouvez rendre les cotes de longueur négatives et inverser les angles de la plage 0 - 180° à la plage symétrique 180° - 360°.

L'option **Théoriquement exact** dans la fenêtre de dialogue des cotes marque la cote comme théoriquement exacte en l'entourant d'un cadre.

Vous pouvez utiliser votre propre texte au lieu d'un nombre formaté en sélectionnant l'option **Texte arbitraire** dans la fenêtre de dialogue, par la suite le contenu du champ **Spécificateur de format** sera affiché comme une cote.

Avec les propriétés Données**X** et Données**Y**, vous pouvez modifier la position horizontale et verticale du texte de la cote par rapport à la vue. Vous pouvez également modifier la position en faisant glisser le numéro de la cote ou le texte.

### Tolérances

#### Création

1. Créez une [cote](/TechDraw_Workbench/fr#Cotes "TechDraw Workbench/fr") dans votre dessin
2. Double-cliquez sur la cote dans le dessin ou sur l'objet cote dans la vue en arborescence du modèle
3. Dans la fenêtre de dialogue qui apparaît, spécifiez comme **Tolérance supérieure** la valeur pour laquelle la cote peut être dépassée.  
    Cela entraînera une tolérance égale comme celle-ci: ![](/images/TechDraw_equal-tolerance.png)
4. Si vous avez des tolérances inégales, spécifiez **Tolérance inférieure** la valeur de laquelle la cote peut être plus petite et décochez l'option **Tolérance symétrique**.  
    Cela entraînera une tolérance inégale comme ceci : ![](/images/TechDraw_Non-equal-tolerance.png)

#### Suppression

Pour se débarrasser d'une tolérance, remplacez **Tolérance supérieure** et **Tolérance inférieure** par zéro.

#### Mise en forme

La police par défaut pour les nouvelles tolérances est la même que pour les cotes. La taille de police par défaut est spécifiée par le paramètre **Échelle du texte des tolérances** des [préférences](/TechDraw_Preferences/fr#Dimensions_2 "TechDraw Preferences/fr"). Cette échelle est un facteur de la taille de police utilisée pour les cotes.

Le format des nombres par défaut pour les nouvelles tolérances est par défaut le même format que pour la cote. Il peut être modifié dans la fenêtre de dialogue de la cote.

Vous pouvez également utiliser votre propre texte au lieu d'un nombre formaté en sélectionnant l'option **Texte de la tolérance arbitraire** dans la fenêtre de dialogue, par la suite le contenu de **Spécifier le format de la tolérance** sera utilisé comme texte des tolérances.

## Tolérance géométrique

Les tolérances sont créées à l'aide de la fonction [Infobulle](/TechDraw_Balloon/fr "TechDraw Balloon/fr") de TechDraw. Comme pour la plupart des fonctionnalités, un cadre est requis, il est utile de changer dans les [préférences](/TechDraw_Preferences/fr#Annotation "TechDraw Preferences/fr"), la **forme de l'infobulle** en **rectangle**.

### Indicateur de tolérance

![](/images/TechDraw_GD%26T-Toleranced-rod.png)

Exemple d'une tige tolérancée. (Le décentrement définit déjà la rectitude, il n'est là qu'à titre d'exemple.)

L'indicateur de tolérance de GD&T est une trame, également appelée "trame de contrôle de fonction". Il peut être créé en utilisant la fonction [infobulle](/TechDraw_Balloon/fr "TechDraw Balloon/fr") de TechDraw :

* après avoir ajouté une infobulle et si sa forme n'est pas déjà un cadre, double-cliquez dessus dans l'arbre du modèle et définissez dans la fenêtre de dialogue qui apparaît la **forme** à **rectangle**.
* ajoutez le caractère Unicode correspondant à la fonctionnalité dont vous avez besoin dans l'infobulle **Texte**. (Vous pouvez les copier à partir des tables de référence [dessous](#R.C3.A9f.C3.A9rencement_de_symboles) ou utiliser [Personnaliser l'infobulle](/TechDraw_ExtensionCustomizeFormat/fr "TechDraw ExtensionCustomizeFormat/fr").)
* en ajoutant le caractère '|' au **Texte**, vous démarrez un nouveau champ indicateur.

Aucune règle ne définit si ou comment l'indicateur de tolérance doit avoir une ligne de repère ou non, vous pouvez donc:

* définissez la propriété **Ligne visible** sur **False** dans la boîte de dialogue de l'infobulle.
* définissez **Symbole de fin** sur **Flèche pleine** ou **Point**.

L'exemple sur le côté droit montre les deux dispositions d'indicateur de tolérance possibles.

### Points de référence

Les points de référence au sens de la GD&T sont des surfaces auxquelles votre tolérance est relative. Ils sont créés comme des infobulles :

* après avoir ajouté une infobulle, définissez **Symbole de fin** à **Triangle rempli** dans la fenêtre de dialogue de l'infobulle.
* si la forme de l'infobulle n'est pas déjà un cadre, réglez **Forme de l'infobulle** sur **Rectangle**.
* faites glisser l'infobulle avec la souris de façon à ce que le triangle pointe en s'éloignant de la surface de référence.
* Comme il est courant d'avoir une ligne droite pour les points de référence, à moins que la surface du point de référence ne soit pas perpendiculaire à X ou Y, assurez-vous que les propriétés Données**X** et Données**Origin X** ou Données**Y** et Données**Origin Y** sont égales pour obtenir une ligne de l'infobulle droite.

![](/images/TechDraw_GD%26T-Datum.png)

Exemple de référence dans un dessin

### Référencement de symboles

Pour insérer des symboles GD&T, TechDraw propose la fonction [TechDraw Personnaliser l'infobulle](/TechDraw_ExtensionCustomizeFormat/fr "TechDraw ExtensionCustomizeFormat/fr").

À titre de référence, voici des listes de caractères à utiliser pour le tolérancement géométrique:

Tableau de référence des tolérances géométriques (selon le tableau 2 dans [ISO 1101-2017](http://geo-dim-tol.ir/files/iso1101.pdf))

| Type de controle | Caractéristiques géométriques | Symbole | Caractère [Unicode](https://fr.wikipedia.org/wiki/Unicode) | Données nécessaires | Remarques |
| --- | --- | --- | --- | --- | --- |
| Forme | Rectitude |  | ⏤ U+23E4 | non |  |
| Forme | Planéité |  | ⏥ U+23E5 | non |  |
| Forme | Rondité |  | ○ U+25CB | non | Dans les normes plus anciennes, également appelé circularité |
| Forme | Cylindricité |  | ⌭ U+232D | non |  |
| Forme / Orientation / Location | Profil de ligne |  | ⌒ U+2312 | oui | Aucune donnée n'est nécessaire lorsqu'elle est utilisée à des fins de formulaire |
| Forme / Orientation / Location | Profil de surface |  | ⌓ U+2313 | oui | Aucune donnée n'est nécessaire lorsqu'elle est utilisée à des fins de formulaire |
| Orientation | Parallélisme |  | ∥ U+2225 | oui |  |
| Orientation | Perpendicularité |  | ⟂ U+27C2 | oui |  |
| Orientation | Inclinaison |  | ∠ U+2220 | oui |  |
| Location | Localisation |  | ⌖ U+2316 | oui | Aucune donnée n'est nécessaire lorsque l'on travaille avec la norme ISO 5458. |
| Location | Concentricité / Coaxialité |  | ◎ U+25CE | oui | Dénommé concentricité lorsqu'il est utilisé pour les points centraux et coaxialité lorsqu'il est utilisé pour les lignes médianes. Dans la norme ASME Y14.5, elle a été éliminée depuis la version de 2018. |
| Location | Symétrie |  | ⌯ U+232F | oui | Dans la norme ASME Y14.5 de 2018, la symétrie a été éliminée. |
| [Battement](https://en.wikipedia.org/wiki/Run-out) | Battement circulaire |  | ↗ U+2197 | oui |  |
| [Battement](https://en.wikipedia.org/wiki/Run-out) | Battement total |  | ⌰ U+2330 | oui |  |

Symboles utilisés dans le cadre de contrôle d'entités pour spécifier la description, la tolérance, le modificateur et les références d'une fonction

| Symbol | Caractère [Unicode](https://fr.wikipedia.org/wiki/Unicode) | Modificateur | Remarques |
| --- | --- | --- | --- |
|  | Ⓕ U+24BB | État libre | S'applique uniquement lorsqu'une partie est par ailleurs restreinte |
|  | Ⓛ U+24C1 | État au minimum de matière (LMC) | Utile pour maintenir une épaisseur de paroi minimale |
|  | Ⓜ U+24C2 | État au maximum de matière (MMC) | Tolérance de majoration uniquement pour une caractéristique de taille |
|  | Ⓟ U+24C5 | Zone de tolérance projetée | Utile sur les trous filetés pour les longs goujons |
|  | Ⓢ U+24C8 | Indépendamment des cotes de l’élément (RFS) | Ne fait pas partie de la version de 1994. Voir le paragraphe A5, point 3. Voir également le paragraphe D3. Voir également la figure 3-8. |
|  | Ⓣ U+24C9 | Plan tangent | Utile pour les interfaces où la forme n'est pas requise |
|  | — | Élément continu | Identifie un groupe de caractéristiques qui doivent être traitées géométriquement comme une seule fonction. |
|  | — | Tolérance statistique | Apparaît dans la version 1994 de la norme, suppose un contrôle statistique approprié du processus. |
|  | Ⓤ U+24CA | Profil inégalement disposé | Ajouté dans la version 2009 de la norme, et fait référence à la distribution inégale des profils. Le numéro qui suit ce symbole indique la tolérance dans le sens "plus de matière". |

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Geometric_dimensioning_and_tolerancing/fr&oldid=1550482>"