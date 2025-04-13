---
title: Svg Namespace
---
:::caution
Le développement de l'atelier Drawings'est arrêté, et un nouvel atelierTechdrawvisant à le remplacer, a été introduit dans la version 0.17. Les deux ateliers ont été livrés de la v0.17 à la v0.20, mais depuis la v0.21, l'atelier Drawing n'est plus inclus.
:::

Actuellement, l'atelier TechDraw utilise toujours l'attribut **freecad:EditableText** et la déclaration d'espace de noms correspondante dans ses modèles aujourd'hui.

## Introduction

FreeCAD peut importer et exporter des documents [SVG](https://fr.wikipedia.org/wiki/Scalable_Vector_Graphics) contenant du code appartenant à un certain **espace de noms** qui est un sous-ensemble d'instructions XML.

Comme tout document XML, un document SVG se compose de deux sections :

* [en-tête](#L'en-tête) : une seule ligne pour déclarer la version du langage XML utilisée pour les instructions dans le corps de ce document.
* [Le corps](#Le_corps) : une liste d'instructions. Les documents SVG contiennent toutes les instructions dans des balises `<svg>`.

:   La balise d'ouverture contient des informations sur la taille et les espaces de noms SVG utilisés.

## Espace des noms par défaut

L'espace ded noms SVG par défaut utilisé par FreeCAD est déclaré par cette ligne :

```
xmlns="http://www.w3.org/2000/svg" version="1.1"

```

Le lien externe mène à un site web contenant des informations sur l'espace des noms et son ensemble d'instructions. Les attributs de cet espace de noms sont utilisés sans préfixe.

## Extension de l'espace des noms

Les attributs manquants dans l'espace des noms SVG peuvent être ajoutés par des extensions d'espace de noms. FreeCAD utilise une telle extension pour les modèles de dessin. La déclaration d'espace des noms connexe, utilisée pour introduire le préfixe `freecad:`, renvoie au site web connexe, **cette page** :

```
xmlns:freecad="http://www.freecad.org/wiki/index.php?title=Svg_Namespace"

```

Le lien n'est pas utilisé pour récupérer des informations ou des valeurs au moment de l'exécution, mais c'est la clé qui permet d'activer les attributs personnalisés.

### Modèles et symbols de TechDraw

L'atelier TechDraw utilise des modèles SVG pour créer des dessins. Il ne peut pas créer et exporter des modèles mais s'appuie sur des modèles créés en externe avec des attributs insérés manuellement :

* [freecad:editable](#freecad:editable) active les entrées éditables dans les blocs de titre.
* [freecad:autofill](#freecad:autofill) ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")) ajouté à ce qui précède, marque le texte à remplir automatiquement lors de la création du modèle.

Les symboles sont un autre type de fichiers SVG qui peuvent être utilisés dans les vues de dessin, par exemple pour des annotations de type timbre. Ils doivent également être créés en externe et peuvent utiliser les attributs mentionnés ci-dessus.

### Migration vers freecad.org

Avant la migration du wiki FreeCAD, y compris **cette page** de **freecadweb.org** à **freecad.org** dans la version 0.21, le lien vers cette page était :

**xmlns:freecad="http://www.freecadweb.org/wiki/index.php?title=Svg\_Namespace"**

Les mises à jour des modèles TechDraw contiennent maintenant une clé qui ne peut pas activer les attributs personnalisés lorsqu'ils sont utilisés avec FreeCAD version 0.20 et précédentes par conséquent, les textes éditables des modèles récents ne sont pas reconnus et sont donc traités comme du texte brut.

:   Dans de tels cas, le "web" doit être réinséré manuellement dans la déclaration de l'espace de noms du modèle.

Il semble que version 0.21 et suivantes puisse traiter l'une ou l'autre adresse de lien.

## Utilisation

### Rappel au sujet du fichier SVG

Les modèles TechDraw sont des fichiers SVG utilisés pour créer le cadre des dessins techniques dans FreeCAD, tandis que les symboles ajoutent des éléments d'annotation graphique.

Le format SVG est un sous-ensemble du format XML. C'est pourquoi un fichier SVG, comme tout fichier XML, se compose de deux parties :

* Un  **en-tête** contenant une déclaration de format.
* Un **corps** contenant l'information de ce qu'il faut montrer et où la placer.

#### L'en-tête

L'en-tête n'est qu'une ligne pour déclarer quelle version du langage XML, un interpréteur doit utiliser pour traiter les instructions du corps.

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>

```

#### Le corps

Le corps d'un fichier SVG commence par une balise d'ouverture `<svg>` qui contient des informations sur les espaces des noms, la taille du modèle et l'endroit où le placer. Il se termine par une balise de fermeture `</svg>`. Toutes les instructions relatives à la création et à la modification des éléments géométriques et textuels seront insérées entre ces deux balises.

```
<svg
  xmlns="http://www.w3.org/2000/svg" version="1.1"
  width="420mm"
  height="297mm"
  viewBox="0 0 420 297">
</svg>

```

Les balises peuvent contenir des attributs contrôlant les éléments situés entre la paire de balises d'ouverture et de fermeture :

:   **xmlns='**"<http://www.w3.org/2000/svg>" : lien externe vers l'espace de noms xml pour consulter les commandes xml standard.
:   **version=** "1.1" : jeu d'instructions de la version 1.1 de xml est utilisé.
:   **width=** "420mm" : largeur de la zone de dessin
:   **height=** "297mm" : hauteur de la zone de dessin
:   **viewBox=** "0 0 420 297" : position du coin supérieur gauche (0;0) et du coin inférieur droit (420;297) dans l'espace de construction svg (en unités svg).

La combinaison de `width`, `height` et `viewBox` définit **1 unité svg = 1 mm** pour l'ensemble du document afin de permettre l'impression à l'échelle, c'est-à-dire que toutes les dimensions en unités svg sont interprétées en millimètres et qu'une unité dimensionnelle peut être omise à partir de maintenant. (Les valeurs de l'exemple définissent la surface d'une feuille A3 en orientation paysage)

### Activer l'extension de l'espace des noms de FreeCAD

Pour activer l'[extension de l'espace des noms](#Extension_de_l'espace_des_noms), la déclaration de l'espace des noms doit être ajoutée aux attributs de la balise d'ouverture `<svg>`. Il en résulte un cadre de base pour un fichier modèle, une feuille A3 vierge en orientation paysage préparée pour `freecad:` [attributs](#Attributs) :

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
  xmlns="http://www.w3.org/2000/svg" version="1.1"
  xmlns:freecad="http://www.freecad.org/wiki/index.php?title=Svg_Namespace"
  width="420mm"
  height="297mm"
  viewBox="0 0 420 297">
</svg>

```

## Attributs

Si [l'espace des noms de FreeCAD est activé](#Activer_l'extension_de_l'espace_des_noms_de_FreeCAD), les attributs suivants `freecad:` peuvent maintenant être utilisés dans les balises d'ouverture `<text>` dans le document SVG :

### freecad:editable

L'attribut freecad:editable est utilisé pour marquer les textes éditables dans les fichiers SVG. La valeur de cet attribut peut être modifiée :

* avec la boîte de dialogue "Changer le champ éditable" dans les modèles.
* en éditant la liste contenue dans la propriété Editable Texts des symboles.

Le texte par défaut doit être entouré de balises tspan, sinon le texte affiché dans le modèle/symbole ne sera pas synchronisé avec le contenu modifié de la variable.

Exemple :

```
<text freecad:editable="MyTitleText">
    <tspan>This is a title</tspan>
</text>

```

### freecad:autofill

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : marque un texte éditable dans un modèle pour qu'il soit rempli automatiquement lorsqu'un modèle est inséré. (Ceci est ajouté à un attribut freecad:editable existant)

Exemple :

```
<text freecad:editable="MyTitleText"; freecad:autofill="AutofillElement" >
    <tspan>This is a title</tspan>
</text>

```

Les "AutofillElements" suivants sont encore implémentés :

1. freecad:autofill="author" insère la valeur de BaseApp/Preferences/Document/prefAuthor.
2. freecad:autofill="date" insère la valeur de currentDateTime().
3. freecad:autofill="organization" insère la valeur de BaseApp/Preferences/Document/prefCompany.
4. freecad:autofill="scale" insère la propriété d'échelle de la page.
5. freecad:autofill="sheet" insère le numéro de page/le nombre de pages.
6. freecad:autofill="title" insère la valeur de la propriété Label du document courant.

### Rappel au sujet du traitement du texte

Les exemples ci-dessus sont incomplets car ils se concentrent uniquement sur les attributs `freecad:`, mais le texte a besoin de plus d'informations pour être affiché à l'endroit souhaité, avec un style spécifique, et éventuellement une rotation.

Omettre les attributs pour utiliser les valeurs par défaut, cela améliore la lisibilité et permet d'obtenir un fichier assez court et facile à maintenir.

Chaque chaîne de texte est intégrée entre les balises `<text>` et `</text>`. Un texte modifiable doit également être inséré entre les balises `<tspan>` et `</tspan>`, faute de quoi il ne sera pas modifiable.

Les textes sont insérés par défaut à `0;0`. Insérez les coordonnées du point d'ancrage `x` et `y` dans la balise `<text>` pour positionner le texte comme vous le souhaitez. Gardez à l'esprit que la direction y dans le fichier SVG est vers le bas.

Il est recommandé de regrouper les textes qui ont plusieurs propriétés en commun (c'est-à-dire d'intégrer le texte entre les balises `<g>` et `</g>`). De cette manière, les attributs communs peuvent être définis dans la balise de groupe `<g>` tandis que les attributs individuels peuvent être définis dans la balise `<text>`. Les attributs de texte intégrés ont la priorité sur les attributs de groupe environnants.

Exemple :

```
<g id="text-non-editable"
  font-family="osifont"
  font-size="10"
  text-anchor="start">
    <text x="10" y="20">A simple text</text>
    <text x="10" y="40" font-color:"blue">another simple text</text>
</g>

```

Dans cet exemple, les deux textes groupés sont affichés à l'aide d'un osifont de 10 mm de haut et leurs points d'ancrage sont situés au niveau du premier caractère. Le premier est coloré en noir (couleur par défaut) et le second en bleu.

```
<g id="text-editable"
  style="font-family:osifont; font-size:15; text-anchor:start; fill:blue">
    <text freecad:editable="Text1" x="50" y="40">  <tspan>Editable text in blue</tspan>. </text>
    <text freecad:editable="Text2" x="50" y="60" fill="red" text-anchor="middle">
        <tspan>Centered editable text in red</tspan>
    </text>
    <text freecad:editable="Text3" x="50" y="80" transform="rotate(90,50,80)>
        <tspan>Rotated editable text in blue</tspan>
    </text>
</g>

```

Dans cet exemple, les trois textes modifiables groupés sont affichés en utilisant une police osifont de 15 mm de haut en bleu et avec leurs points d'ancrage au premier caractère. Text2 a la couleur déviante rouge et est centré, Text3 est tourné de 90° dans le sens horaire, le centre de rotation coïncidant avec le point d'ancrage.

Les exemples utilisent deux manières différentes de définir les paramètres de police, des attributs séparés dans le premier et combinés dans un seul attribut de style dans le second.

Il est recommandé d'utiliser l'attribut ID dans les balises de groupe pour décrire grosso modo le type d'éléments regroupés.

Les attributs de transformation fonctionnent bien avec tous les textes, mais les textes éditables perdront la connexion avec leurs marques d'édition (soulignés bleus par défaut) car elles ne suivront pas le mouvement du texte. C'est pourquoi les textes simples peuvent être regroupés avec la géométrie du cartouche et déplacés avec une seule translation, alors que les textes éditables doivent être positionnés individuellement. Les rotations dont le point d'ancrage et le centre de rotation correspondent, contrairement aux autres transformations, peuvent être utilisées en toute sécurité dans les balises `<text>`, car le texte et la marque d'édition ne s'éloigneront pas l'un de l'autre.

### Exemple de code freecad:editable

#### 1 : Titre sans textedit

![](/images/Svg_Namespace_01.png)

```
  <g
     id="g3587">
    <text
       sodipodi:linespacing="119.00001%"
       id="text3482"
       y="229.10912"
       x="220.8476"
       style="font-size:1.97555566px;font-style:normal;font-weight:normal;line-height:119.00000572%;letter-spacing:0.01975556px;word-spacing:0.00846667px;writing-mode:lr-tb;fill:#000000;fill-opacity:1;stroke:none;font-family:Sans;-inkscape-font-specification:Sans"
       xml:space="preserve"><tspan
         y="229.10912"
         x="220.8476"
         id="tspan3484"
         sodipodi:role="line">AUTHOR NAME :</tspan></text>

```

#### 2 : Titre avec textedit

![](/images/Svg_Namespace_02.png)

```
  <g
     style="fill:none;stroke:#000000;stroke-width:0.13;stroke-linecap:butt;stroke-linejoin:miter"
     id="g578-7"
     transform="translate(0,4)">
    <text
       xml:space="preserve"
       style="font-size:4px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:125%;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;font-family:sans;-inkscape-font-specification:sans"
       x="220.9935"
       y="228.95425"
       id="text3331"
       sodipodi:linespacing="125%"
       freecad:editable="AuthorName"><tspan
         sodipodi:role="line"
         id="tspan3333"
         x="220.9935"
         y="228.95425">AUTHOR NAME</tspan></text>
    <text
    ...
    ...
    ...
    ... </text>
  
  </g>

```

#### Explications

```
  <g

```

Début du cadre

```
     style="fill:none;stroke:#000000;stroke-width:0.13;stroke-linecap:butt;stroke-linejoin:miter"
     id="g578-7"
     transform="translate(0,4)">

```

Données dans le cadre

```
    <text

```

Début du bloc de textes

```
       xml:space="preserve"
       style="font-size:4px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:125%;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;font-family:sans;-inkscape-font-specification:sans"

```

Toutes les informations sur le texte qui va être affiché

```
       x="220.9935"
       y="228.95425"
       id="text3331"
       sodipodi:linespacing="125%"

```

Coordonnées et renseignements du texte qui va être affiché.

```
       freecad:editable="AuthorName"><tspan

```

Ici **AuthorName** est la variable qui va mémoriser la chaîne **freecad:editable** qui sera modifiée et affichée dans la feuille.

```
         sodipodi:role="line"
         id="tspan3333"
         x="220.9935"
         y="228.95425">AUTHOR NAME</tspan></text>

```

Coordonnées et renseignements sur le texte qui est affiché par défaut, la balise **</text>** délimite la fin du bloc texte.

```
    <text
    ...
    ...
    ...
    ... </text>
  </g>

```

Autres blocs textes et la balise **</g>** détermine la fin du groupe de textes.

Il est possible qu'après avoir travaillé dans le fichier SVG avec Inkscape le fichier ne fonctionne plus, il est possible que des informations aient disparu.

Ensuite, vérifiez que **freecad:editable:** n'est pas modifié.

Exemple:

* **editable** = "AuthorName"
* replacer par **freecad:editable** = "AuthorName"

Retrieved from "<http://wiki.freecad.org/index.php?title=Svg_Namespace/fr&oldid=1484982>"