---
title: Asymptote
---
## Description

[Asymptote](https://asymptote.sourceforge.io/) est un langage vectoriel pour l'infographie 2D et 3D. Le code Asymptote peut être inclus dans des documents [LaTeX](https://www.latex-project.org/) ou utilisé pour générer [PostScript](https://fr.wikipedia.org/wiki/PostScript), [PDF](/PDF/fr "PDF/fr"), [SVG](/SVG/fr "SVG/fr"), [WebGL](https://www.khronos.org/webgl/) et [PRC](https://fr.wikipedia.org/wiki/PRC_(fichier)). Les fichiers PDF 3D interactifs créés à partir du code Asymptote nécessitent Acrobat Reader version 9 ou supérieure.

Le support d'Asymptote a été ajouté dans la version 0.19 de FreeCAD.

## Exporter

1. Vous pouvez attribuer des couleurs aux faces de l'objet que vous souhaitez exporter avec la commande ![](/images/Part_ColorPerFace.svg) [Part Couleur par face](/Part_ColorPerFace/fr "Part ColorPerFace/fr").
2. Passez à l'![](/images/Workbench_Mesh.svg) [atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr").
3. Créez un maillage à partir de l'objet avec la commande ![](/images/Mesh_FromPartShape.svg) [Mesh Tesselation](/Mesh_FromPartShape/fr "Mesh FromPartShape/fr").
4. Sélectionnez le nouvel objet maillage.
5. Appelez la commande ![](/images/Mesh_Export.svg) [Mesh Exporter un maillage](/Mesh_Export/fr "Mesh Export/fr").
6. Sélectionnez le format de fichier \*.asy dans la fenêtre de dialogue.
7. Entrez un nom de fichier.
8. Appuyez sur le bouton Enregistrer.

## Convertir

Vous avez besoin du [compilateur Asymptote](https://sourceforge.net/projects/asymptote/) pour convertir les fichiers \*.asy. Pour convertir en PDF, [LaTeX](https://www.latex-project.org/get/) est également requis.

Le compilateur est un outil de ligne de commande. Pour convertir en PDF, vous pouvez utiliser cette syntaxe :

```
PathToAsyExecutable/asy -f pdf AsymptoteFileName.asy

```

## En relation

* [Import Export](/Import_Export/fr "Import Export/fr")

## Tutoriels vidéo

Les vidéos suivantes sont en espagnol :

* [Une manière de générer des fichiers PDF-3D interactifs. (1/3) (à partir de FreeCAD, MeshLab et LaTeX)](https://www.youtube.com/watch?v=U0m3643Vb1Q)
* [Une manière de générer des fichiers PDF-3D interactifs. (2/3) (De Asymptote et LaTex)](https://www.youtube.com/watch?v=PhVNvDZIerM)
* [Une manière de générer des fichiers PDF-3D interactifs. (3/3) (à partir de FreeCAD, Asymptote et LaTeX)](https://www.youtube.com/watch?v=Q_ufaCN2hb4)

Retrieved from "<http://wiki.freecad.org/index.php?title=Asymptote/fr&oldid=1496008>"