---
title: Draft Widget d'échelle d'annotation
---
## Description

Le **Draft Widget d'échelle d'annotation** peut être utilisé pour spécifier la mise à l'échelle des annotations de Draft. Cette échelle détermine le Vue**Scale Multiplier** (facteur d'échelle) des nouveaux [Draft Textes](/Draft_Text/fr "Draft Text/fr"), [Draft Dimensions](/Draft_Dimension/fr "Draft Dimension/fr") et [Draft Étiquettes](/Draft_Label/fr "Draft Label/fr"). Le widget est seulement disponible dans l'![](/images/Workbench_Draft.svg) [atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr"). Il s'agit d'un élément de l'interface graphique [optionnel](#Pr.C3.A9f.C3.A9rences) qui se trouve dans la [barre d'état](/Status_bar/fr "Status bar/fr").

![](/images/Draft_annotation_scale_widget_button.png)

Le widget d'échelle d'annotation de Draft

## Utilisation

1. Appuyez sur le bouton x:x dans la [barre d'état](/Status_bar/fr "Status bar/fr"). Le bouton affiche l'échelle d'annotation actuelle.
2. Le menu d'échelle s'ouvre.
3. Effectuez l'une des opérations suivantes :
   * Sélectionnez l'une des échelles standards.
   * Sélectionnez l'option **Personnalisé** :
     + Dans la boîte de dialogue qui s'ouvre, saisissez une échelle personnalisée en utilisant le format `x:x` ou `x=x`.
     + Appuyez sur Entrée ou sur le bouton OK.

![](/images/Draft_annotation_scale_widget_menu.png)

Le menu du widget

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr") et [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr").

* Le widget d'échelle d'annotation de Draft est facultatif : **Édition → Préférences... → Draft → Interface → Afficher le widget d'échelle d'annotation dans l'atelier Draft**.
* Pour modifier l'échelle d'annotation sans le widget : **Outils → Éditeur de paramètres... → BaseApp → Preferences → Mod → Draft → DraftAnnotationScale**. L'échelle est définie par un seul nombre. Pour une échelle de `1:50`, entrez `0.02`.

## Remarques

* Voir aussi: [Draft Définir le style](/Draft_SetStyle/fr "Draft SetStyle/fr") et [Draft Appliquer le style](/Draft_ApplyStyle/fr "Draft ApplyStyle/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_annotation_scale_widget/fr&oldid=1344164>"