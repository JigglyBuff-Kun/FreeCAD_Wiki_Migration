---
title: Réglage des préférences
---
## Introduction

Pour lancer l'**Éditeur de préférences**, sélectionnez l'option **Édition → Préférences...** du menu ou ([introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")) utiliser le raccourci clavier Ctrl+,. Sur macOS, l'option **Préférences...** apparaît dans le menu **FreeCAD** à la place (c'est l'emplacement par défaut des préférences sur Mac).

FreeCAD utilise un concept d'atelier, où chaque atelier est responsable de tâches et de fonctions spécifiques. Un atelier peut avoir ses propres préférences. Celles-ci n'apparaîtront dans l'éditeur de préférences, généralement dans un groupe dédié, que si l'atelier a été chargé dans la session FreeCAD en cours. Certains ateliers prennent en charge des formats d'importation et d'exportation spécifiques. S'il y a des préférences associées, elles apparaîtront sur une ou plusieurs pages supplémentaires dans le groupe [Importer/Exporter](#Importer/Exporter) de l'éditeur de préférences.

Pour préserver les ressources, FreeCAD ne charge pas automatiquement tous les ateliers disponibles. Voir [Ateliers](#Ateliers) pour plus d'informations. Pour une liste des préférences relatives aux ateliers, voir [Préférences liées aux ateliers](#Préférences_liées_aux_ateliers).

Si aucun atelier n'est chargé, sept groupes apparaissent dans l'éditeur de préférences : [Général](#G.C3.A9n.C3.A9ral), [Affichage](#Affichage), [Ateliers](#Ateliers), [Python](#Python), [Gestionnaire des extensions](#Gestionnaire_des_extensions), [Importer/Exporter](#Importer/Exporter) et [Mesure](#Mesure). Tous les ateliers qui ont été chargés et qui ont leurs propres préférences, apparaîtront en dessous de ceux-ci.

En appuyant sur le bouton Réinitialiser dans le coin inférieur gauche de la fenêtre de dialogue de Préférences, vous ouvrez un menu ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")) avec des options permettant de réinitialiser les préférences à leurs valeurs par défaut. Vous pouvez réinitialiser l'onglet en cours, la page en cours ou toutes les préférences. Dans version 0.21 et précédentes, le bouton réinitialise **toutes** les préférences.

Certaines préférences avancées ne peuvent être modifiées que dans l'[Éditeur de paramètres](/Std_DlgParameter/fr "Std DlgParameter/fr"). La page [Réglage fin](/Fine-tuning/fr "Fine-tuning/fr") en liste quelques-unes.

Cette page a été mise à jour pour la version 1.0.

## Général

Ce groupe de préférences comporte sept pages : Général, Document, Sélection, Cache, Zone de notification, Vue rapport et Aide.

Dans version 0.21 et précédentes, la septième page, Aide, n'est disponible que si l'[extension Help](https://github.com/FreeCAD/FreeCAD-Help) a été [installé](/Std_AddonMgr/fr "Std AddonMgr/fr").

### Général

![](/images/Preferences_General_Page_General.png)

Dans cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Langue** | Langue de l'interface utilisateur de l'application. |
| **Système d'unités par défaut** | Système d'unité pour toutes les parties de l'application. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : utilisé par défaut pour le [système d'unité du document](/Std_ProjectInfo/fr "Std ProjectInfo/fr") des nouveaux documents.}}. Le système d'unités du document actif remplace le système d'unités par défaut, sauf si l'option suivante est cochée. |
| **Ignorer le système d'unités du projet et utiliser le système par défaut** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | Si cette case est cochée, les systèmes d'unités du projet sont ignorés et ne remplacent pas le système d'unités par défaut. |
| **Nombre de décimales** | Le nombre de décimales à afficher pour les nombres et les dimensions. |
| **Fraction minimale de pouce** [introduit dans la version 0.22](/Release_notes_0.22/fr "Release notes 0.22/fr") | Fraction minimale de pouce qui doit être indiquée pour les nombres et les dimensions. Disponible uniquement pour les systèmes d'unités avec des pouces fractionnaires. |
| **Format des nombres** | Spécifie le format des nombres. Les options sont les suivantes :  * **Système d'exploitation** : le séparateur décimal défini par le système d'exploitation est utilisé. * **Langue sélectionnée** : le séparateur décimal de la langue sélectionnée de l'interface de FreeCAD est utilisé. * **C/POSIX** : un point est utilisé comme séparateur décimal. |
| **Remplacer le séparateur décimal** | Si cette option est cochée, le séparateur décimal du clavier numérique sera remplacé par le séparateur défini par le paramètre **Format des nombres**. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") : Notez que si cette préférence est activée, l'utilisation du séparateur décimal du clavier numérique imprimera toujours un point dans la [console Python](/Python_console/fr "Python console/fr") et l'[éditeur de macro](/Std_DlgMacroExecute/fr#Éditer "Std DlgMacroExecute/fr"). |
| **Thème** | Spécifie un [thème](/Interface_Customization/fr#Thèmes "Interface Customization/fr") pour personnaliser l'apparence de l'interface utilisateur. |
| **Taille des icônes de la barre d'outils** | Spécifie la taille des icônes de la barre d'outils. Les options sont les suivantes :  * **Petit (16px)** * **Moyen (24px)** * **Grand (32px)** * **Très grand (48px)** |
| **Mode d'affichage de l'arborescence et des propriétés** | Définit la manière dont l'arborescence est affichée dans l'interface utilisateur (redémarrage requis). Les options sont les suivantes :  * **Combiné** : combine la [vue en arborescence](/Tree_view/fr "Tree view/fr") et l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") en une seule [vue combinée](/Combo_view/fr "Combo view/fr"). * **Indépendant** : divise la vue en arborescence et l'éditeur des propriétés en deux panneaux distincts. |
| **Taille de la liste des fichiers récents** | Spécifie combien de fichiers doivent être listés dans la liste des fichiers récents. Les fichiers importés peuvent être exclus de cette liste et les fichiers exportés peuvent y être inclus. Voir [Réglage fin](/Fine-tuning/fr "Fine-tuning/fr"). |
| **Activer l'arrière-plan en mosaïque** | Si cette option est cochée, l'arrière-plan de la fenêtre principale de FreeCAD sera par défaut constitué de tuiles de cette image :  Cette option n'a d'effet que si aucune **Feuille de style** n'est sélectionnée.  L'image peut être modifiée en ajoutant les dossiers Gui/Images dans le dossier :  [%APPDATA%](https://www.howtogeek.com/318177/what-is-the-appdata-folder-in-windows/)/FreeCAD (sous Windows),  $HOME/.FreeCAD (sous Linux) ou  $HOME/Library/Preferences/FreeCAD (sous macOS).  Placez un fichier nommé background.png dans le dossier Images et décochez/cochez cette option pour voir le fichier modifié. |
| **Activer l'écran d'accueil au démarrage** | Si cette option est cochée, un écran d'accueil s'affiche au démarrage de FreeCAD. L'image de l'écran de démarrage peut être modifiée en plaçant un fichier nommé splash\_image.png dans le dossier Images déjà mentionné sous **Activer l'arrière-plan en mosaïque**. |
| **Activer le clignotement du curseur** | Si la case est cochée, le curseur texte dans la [console Python](/Python_console/fr "Python console/fr") et l'[éditeur de macro](/Std_DlgMacroExecute/fr#Editer "Std DlgMacroExecute/fr") clignotera. |
| **Activer la gestion de la superposition** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | Si cette option est cochée, les fenêtres ancrées peuvent être gérées comme des superpositions transparentes. |
| **Kits de préférences** | Liste les [kits de préférences](/Preference_Packs/fr "Preference Packs/fr") disponibles et vous permet également de les importer, de les sauvegarder, de les gérer et de les inverser. |

### Document

![](/images/Preferences_General_Page_Document.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Créer un nouveau document au démarrage** | Si coché, FreeCAD créera un nouveau document au démarrage. |
| **Niveau de compression de sauvegarde du document** | Spécifie le niveau de compression pour les fichiers FCStd. Les fichiers FCStd sont des fichiers compressés ZIP. Par conséquent, vous pouvez renommer leur suffixe .FCStd en .zip et les ouvrir avec un programme d'archive ZIP. |
| **Utilisation des fonctions Annuler/Rétablir sur les documents** | Si cette case est cochée, toutes les modifications apportées aux documents sont stockées afin de pouvoir être annulées /refaites. |
| **Nombre maximum d'étapes d'annulation/de rétablissement** | Spécifie le nombre d'étapes Annuler/Rétablir à enregistrer |
| **Autoriser l'interruption du recalcul** | Permet d'interrompre le recalcul du document en appuyant sur Echap. Cela peut augmenter légèrement le temps de recalcul. |
| **Exécuter la récupération automatique au démarrage** | Si un fichier de récupération est disponible, FreeCAD exécutera automatiquement une récupération de fichier au démarrage. De cette façon, les fichiers peuvent être restaurés en cas de panne. |
| **Enregistrer les informations de récupération automatique tous les** | Spécifie la fréquence d'écriture d'un fichier de récupération. |
| **Enregistrer la miniature dans le fichier de projet lors de l'enregistrement du document** | Si cette case est cochée, une miniature sera également stockée lors de l'enregistrement du document. La vignette sera par exemple affichée dans la liste des fichiers récents dans la page Start. Il est possible de sélectionner une **Taille** entre 128 × 128 et 512 × 512 pixels pour la vignette. Les tailles courantes sont les puissances de deux: 128, 256, 512. |
| **Ajouter le logo du programme à la miniature générée** | Si cette case est cochée, le logo du programme FreeCAD  sera ajouté à la vignette. Cette option n'a d'effet que si  **Enregistrer la miniature dans le fichier de projet lors de l'enregistrement du document** est utilisé. |
| **Nombre maximal de fichiers de sauvegarde à conserver lors de la réenregistrement de document** | Si cette case est cochée, les fichiers de sauvegarde seront conservés lors de l'enregistrement du document. Vous pouvez spécifier combien de fichiers de sauvegarde seront conservés. Ils contiennent la version du document précédemment enregistrée. |
| **Utiliser la date et l'extension FCBak** | Si coché, les fichiers de sauvegarde auront l'extension *.FCbak* et leurs noms de fichiers auront un suffixe de date selon le **Format de date** spécifié. Pour une description du format de date, voir [Aide-mémoire sur les formats de date et d'heure](https://devhints.io/datetime). Avec les paramètres par défaut, le fichier de sauvegarde obtiendra par exemple ce nom TD-Cube.20200315-215654.FCBak (le nom de fichier d'origine est TD-Cube.FCStd). |
| **Autoriser les étiquettes d'objet en double dans un document** | Si coché, les objets peuvent avoir le même label/nom. Par exemple, différentes parties ou fonctions peuvent avoir le même nom dans le même document. |
| **Désactiver le chargement partiel des objets liés externes** | Activez le chargement partiel du document lié externe. Lorsque cette option est activée, seuls les objets référencés et leurs dépendances seront chargés lorsqu'un document lié est ouvert automatiquement avec le document principal. Un document partiellement chargé ne peut pas être modifié. Double-cliquez sur l'icône du document dans l'arborescence pour le recharger complètement. Une explication plus détaillée de la fonctionnalité peut être trouvée sur la page de documentation [Assembly3 documentation page](https://github.com/realthunder/FreeCAD_assembly3/wiki/Core-Changes#partial-document-loading). |
| **Nom de l'auteur** | Tous les documents qui seront créés obtiendront le nom d'auteur spécifié. Laissez le champ auteur vide pour un auteur anonyme. Si l'option **Défini lors de la sauvegarde** est cochée, le champ **Dernière modification par** sera défini sur l'auteur spécifié lors de l'enregistrement du fichier. Ce champ peut être affiché à l'aide du menu **Fichier → Informations sur le projet…**. |
| **Entreprise** | Tous les documents qui seront créés recevront le nom de l'entreprise spécifié. |
| **Licence par défaut** | Spécifie une licence par défaut pour les nouveaux documents. Pour une licence prédéfinie, **URL de licence** sera automatiquement définie en conséquence. Sélectionnez **Autre** pour une licence propre ou spéciale. |
| **URL de licence** | Spécifie une URL décrivant la licence sélectionnée dans **Licence par défaut**. |

### Sélection

![](/images/Preferences_General_Page_Selection.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Activer la présélection** | Si cette case est cochée, la présélection de la [vue 3D](/3D_view/fr "3D view/fr") est activée et la couleur spécifiée est utilisée pour cette présélection. La présélection signifie que, par exemple, les arêtes des objets seront mises en évidence lorsque vous les survolerez avec la souris pour indiquer qu'elles peuvent être sélectionnées. |
| **Activer la sélection** | Si cette case est cochée, la sélection dans la vue 3D est activée et la couleur spécifiée est utilisée. Si cette case n'est pas cochée, les objets ne peuvent être sélectionnés que dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Notez que les objets créés alors que cette option n'est pas cochée auront leur propriété Vue**Selectable** fixée à `false`. Avec cette valeur, ils ne sont pas sélectionnables dans la vue 3D, même si cette option est à nouveau cochée. |
| **Rayon de sélection du clic de la souris (px)** | Définit la zone de sélection des éléments dans la [vue 3D](/3D_view/fr "3D view/fr"). Une valeur plus grande facilite la prise d'éléments, mais peut rendre certains petits éléments impossibles à sélectionner. |
| **Basculer automatiquement vers la vue 3D contenant l'objet sélectionné** | Active le mode [Arborescence Synchroniser la vue](/Std_TreeSyncView/fr "Std TreeSyncView/fr"). |
| **Déplier automatiquement l'arborescence quand l'objet correspondant est sélectionné dans la vue 3D** | Active le mode [Arborescence Synchroniser la sélection](/Std_TreeSyncSelection/fr "Std TreeSyncSelection/fr"). |
| **Présélectionner l'objet dans la vue 3D quand la souris passe au-dessus d'un élément de l'arborescence** | Active le mode [Arborescence Préselection](/Std_TreePreSelection/fr "Std TreePreSelection/fr"). |
| **Sauvegarder la sélection dans l'arborescence pour aller en avant/arrière avec les boutons de navigation** | Active le mode [Arborescence Enregistrer la sélection](/Std_TreeRecordSelection/fr "Std TreeRecordSelection/fr"). |
| **Ajouter des cases à cocher pour la sélection dans l'arborescence des documents** | Chaque élément de la [vue en arborescence](/Tree_view/fr "Tree view/fr") sera doté d'une case à cocher. Ceci est par exemple utile pour sélectionner plusieurs éléments sur un écran tactile. |

### Cache

![](/images/Preferences_General_Page_Cache.png)

Ces préférences sont liées au répertoire de cache où FreeCAD stocke les fichiers temporaires.

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Emplacement (lecture seule)** | Affiche le chemin du répertoire de cache. Utilisez le bouton  pour parcourir le répertoire. |
| **Vérification périodique au démarrage du programme** | Contrôle la fréquence à laquelle la taille du répertoire est vérifiée. Les options sont :  * **Toujours** * **Quotidiennement** * **Hebdomadaire** * **Mensuel** * **Annuel** * **Jamais** |
| **Taille maximale du cache** | Spécifie la taille maximale du répertoire. Vous serez averti si une vérification est effectuée et que la taille dépasse cette valeur. Les options sont :  * **100 MB** * **300 MB** * **500 MB** * **1 GB** * **2 GB** * **3 GB** |
| **Taille actuelle du cache**. | Indique la taille en cours du répertoire, si elle est disponible. Appuyez sur le bouton Vérifier maintenant... pour mettre à jour la valeur. |

### Zone de notification

![](/images/Preferences_General_Page_Notification_Area.png)

Ces préférences contrôlent la zone de notification et ses notifications.

Dans l'onglet *Grille* ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")), vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Activer la zone de notification** | Si cette option est cochée, la zone de notification apparaîtra dans la barre d'état. |
| **Activer les notifications non intrusives** | Si cette option est cochée, les notifications non intrusives apparaîtront à côté de la zone de notification dans la barre d'état. |
| **Erreurs de débogage** | Si cette case est cochée, les erreurs destinées aux développeurs apparaîtront dans la zone de notification. |
| **Avertissements de débogage** | Si cette case est cochée, les avertissements destinés aux développeurs apparaîtront dans la zone de notification. |
| **Durée maximale** | Durée maximale pendant laquelle les notifications sont affichées (sauf si les boutons de la souris sont cliqués). |
| **Durée minimale** | Durée minimale (idem). |
| **Nombre maximum de notifications** | Nombre maximum de notifications affichées simultanément. |
| **Largeur de la notification** | Largeur de la zone de notification en pixels. |
| **Masquer quand une autre fenêtre est activée** | Si cette option est cochée, les notifications ouvertes disparaîtront lorsqu'une autre fenêtre sera activée. |
| **Ne pas afficher en cas d'inactivité** | Si cette option est cochée, les notifications n'apparaîtront pas si la fenêtre FreeCAD n'est pas la fenêtre active. |
| **Nombre maximum de messages (0 = sans limite)** | Le nombre maximum de messages conservés dans la liste. Définissez à 0 pour ne pas avoir de limite. |
| **Suppression automatique des notifications de l'utilisateur** | Si cette option est cochée, les notifications seront supprimées de la liste des messages lorsque la **Durée maximale** sera écoulée. |

### Vue rapport

![](/images/Preferences_General_Page_Report_view.png)

Ces préférences contrôlent le comportement de la [Vue rapport](/Report_view/fr "Report view/fr"). Ce panneau peut être ouvert à l'aide de l'option de menu **Affichage → Panneaux → Vue rapport**.

La vue rapport utilise les mêmes paramètres de police que l'[éditeur de macro](#Éditeur).

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Enregistrer les messages normaux** | Si cette case est cochée, les messages normaux seront enregistrés. Ils seront affichés dans la [vue rapport](/Report_view/fr "Report view/fr") avec la couleur définie sous **Messages normaux**. |
| **Enregistrer les logs** | Si cette case est cochée, les logs seront enregistrés. Ils seront affichés dans la [vue rapport](/Report_view/fr "Report view/fr") avec la couleur définie sous **Logs**. |
| **Enregistrer les avertissements** | Si cette case est cochée, les avertissements seront enregistrés. Ils seront affichés dans la [vue rapport](/Report_view/fr "Report view/fr") avec la couleur définie sous **Avertissements**. |
| **Enregistrer les messages d'erreur** | Si cette case est cochée, les messages d'erreur seront enregistrés. Ils seront affichés dans la [vue rapport](/Report_view/fr "Report view/fr") avec la couleur définie sous **Erreurs**. |
| **Afficher la vue rapport en présence d'erreurs** | Si cette case est cochée, la [vue rapport](/Report_view/fr "Report view/fr") s'affichera automatiquement lorsqu'une erreur est enregistrée. |
| **Afficher la vue rapport en présence d'avertissements** | Si cette case est cochée, la [vue rapport](/Report_view/fr "Report view/fr") s'affichera automatiquement lorsqu'un avertissement est enregistré. |
| **Afficher la vue rapport en présence de messages normaux** | Si cette case est cochée, la [vue rapport](/Report_view/fr "Report view/fr") s'affichera automatiquement lorsqu'un message normal sera enregistré. |
| **Afficher la vue rapport en présence de logs** | Si cette case est cochée, la [vue rapport](/Report_view/fr "Report view/fr") s'affichera automatiquement lorsqu'un log sera enregistré. |
| **Inclure un timecode pour chaque entrée** | Si cette case est cochée, chaque message et avertissement recevra un timecode. |
| **Messages normaux** | Spécificie la couleur de la police pour les messages normaux |
| **Logs** | Spécificie la couleur de la police pour les logs. |
| **Avertissements** | Spécificie la couleur de la police les messages d'avertissement. |
| **Erreurs** | Spécificie la couleur de la police les messages d'erreur. |
| **Rediriger les messages internes de Python vers la vue rapport** | Si cette case est cochée, les messages internes de Python seront redirigés de la [console Python](/Python_console/fr "Python console/fr") vers la [vue rapport](/Report_view/fr "Report view/fr"). |
| **Rediriger les erreurs internes de Python vers la vue rapport** | Si cette case est cochée, les messages d'erreur internes de Python seront redirigés de la [console Python](/Python_console/fr "Python console/fr") vers la [vue rapport](/Report_view/fr "Report view/fr"). |

### Aide

![](/images/Preferences_General_Page_Help.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Source** | Spécifie la source des fichiers d'aide. Les options sont les suivantes :  * **Wiki de FreeCAD (en ligne)** : * **Version de Markdown (en ligne)** : * **GitHub (en ligne)** : Ne peut être sélectionné. * **Emplacement personnalisé** : saisir le chemin d'accès où se trouve la documentation FreeCAD téléchargée. Pour télécharger la documentation, sélectionnez l'extension *offline-documentation* dans la liste des ateliers du [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").   **Suffixe de traduction** : pour l'option Wiki et l'option Markdown, un [suffixe de langue](https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1) peut être spécifié. Utilisez par exemple `fr` pour la traduction française. |
| **Affichage** | Spécifie l'endroit où la documentation doit être affichée. Les options sont les suivantes :  * **Dans votre navigateur web par défaut** : la documentation est affichée dans le navigateur web par défaut. * **Dans un onglet FreeCAD** : la documentation est affichée dans un nouvel onglet de la [zone d'affichage principale](/Main_view_area/fr "Main view area/fr"). [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : ne peut plus être utilisé. * **Dans une boîte de dialogue séparée, intégrable** : la documentation est affichée dans une boîte de dialogue. Cette boîte de dialogue peut être ancrée par dessus de la [vue combinée](/Combo_view/fr "Combo view/fr") par exemple. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : ne peut plus être utilisé. |
| **Feuille de style personnalisée** | Spécifie une feuille de style personnalisée facultative. Non utilisé pour le wiki. |

## Affichage

Ce groupe de préférences comporte six pages standard : Vue 3D, Sources de lumière, Interface utilisateur, Navigation, Couleurs et Avancé. Une septième page, Maillage, est ajoutée si l'[atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") a été chargé.

### Vue 3D

![](/images/Preferences_Display_Page_3D_View.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Afficher le système de coordonnées dans le coin** | Si cette option est cochée, le système de coordonnées principal sera affiché dans le coin inférieur droit de la [vue 3D](/3D_view/fr "3D view/fr"). La **Taille relative** définit la taille de la représentation en pourcentage de la taille de la vue (le minimum de sa hauteur et de sa largeur). **Couleur des lettres** définit la couleur des lettres de l'axe. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr") : les **Couleur de l'axe X**, **Couleur de l'axe Y** et **Couleur de l'axe Z** définissent les couleurs des axes. |
| **Afficher les axes du repère par défaut** | Si cette option est cochée, les axes du repère seronta affichés par défaut dans la [vue\_3D](/3D_view/fr "3D view/fr"). |
| **Afficher le compteur d'images par seconde** | Si cette case est cochée, le temps nécessaire à la dernière opération et le taux de rafraîchissement résultant du nombre d'[images par seconde](https://fr.wikipedia.org/wiki/Images_par_seconde) sera affiché dans le coin inférieur gauche de la [vue 3D](/3D_view/fr "3D view/fr"). |
| **Utiliser OpenGL par logiciel** | Si cette option est cochée, [OpenGL](https://fr.wikipedia.org/wiki/OpenGL) utilisera le CPU au lieu du GPU. Cette option est utile pour résoudre les problèmes liés aux cartes graphiques et aux pilotes. La modification de cette option nécessite un redémarrage de l'application. |
| **Utiliser OpenGL VBO (Vertex Buffer Object)** | Si cette option est cochée, [Vertex Buffer Objects](https://fr.wikipedia.org/wiki/Vertex_Buffer_Object) (VBO) sera utilisé. VBO est une fonctionnalité d'[OpenGL](https://fr.wikipedia.org/wiki/OpenGL) qui fournit des méthodes pour télécharger des données de vertex (position, vecteur normal, couleur, etc.) vers la carte graphique. Les VBO offrent des gains de performance substantiels car les données résident dans la mémoire graphique plutôt que dans la mémoire système et peuvent donc être rendues directement par le GPU. Pour plus d'informations, voir [Understanding OpenGL Objects](https://www.haroldserrano.com/blog/understanding-opengl-objects). |
| **Rendu accéléré** | Les options "Render Cache" ou "Render Acceleration" sont expliquées plus en détail dans [FreeCAD assembly3 render-caching](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link#render-caching). Les options sont les suivantes :  * **Auto** : laisse Coin3D décider où mettre en cache (par défaut). * **Distribué** : activation manuelle du cache pour tous les nœuds racines des fournisseurs de vues. * **Centralisé** : desactivation manuelle du cache pour tous les noeuds de tous les fournisseurs de vues, ne met en cache que le noeud racine du graphe de scène. Cette option offre la vitesse de rendu la plus rapide, mais une réponse plus lente aux changements de scène. |
| **Anticrénelage** | Spécifie si et quel type d'anticrénelage est utilisé, voir [multisample anti-aliasing](https://en.wikipedia.org/wiki/Multisample_anti-aliasing). |
| **Objets transparents** | Spécifie le type de rendu des objets transparents. Les options sont les suivantes :  * **Un seul passage** : le rendu est effectué en une seule passe (par défaut). Cela peut conduire à des artefacts triangulaires. Si ceux-ci se produisent, le type **Passage pour les faces arrières** peut être utilisé pour les éviter. * **Passage pour les faces arrières** : le rendu est effectué en deux passes. Les polygones orientés vers l'arrière sont rendus lors de la première passe et les polygones orientés vers l'avant lors de la deuxième passe. |
| **Taille des marqueurs** | Spécifie la taille des [vertices](/Glossary/fr#Vertex "Glossary/fr") (points) dans l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"). La zone cliquable des points peut être agrandie en augmentant le **Rayon de sélection**. |
| **Distance entre les yeux pour les modes stéréoscopiques** | Cette commande permet de spécifier la distance entre les yeux utilisée pour les projections stéréoscopiques. La valeur spécifiée est un facteur qui sera multiplié par la taille de la [boîte englobante](/Property_editor/fr#Vue "Property editor/fr") de l'objet 3D affiché. |
| **Couleur du rétroéclairage** | Si cette option est cochée, le rétroéclairage est activé avec la couleur définie. Le rétroéclairage est utilisé pour rendre les faces arrière des faces. Habituellement, vous ne les voyez pas dans les solides, à moins que vous n'en coupiez un avec un plan de coupe, ou que les faces ne soient pas orientées correctement. Elle n'est utilisée que pour les objets dont la propriété Lighting (dans l'onglet Vue) est réglée sur **One side**. Si elle est désactivée, la face arrière des faces de ces objets sera noire. Le paramètre **Intensité** correspondant spécifie l'intensité du rétroéclairage. |
| **Type de caméra** | Spécifie le type de projection de la caméra. Les options sont les suivantes :  * **Vue en perspective** : les objets apparaissent selon une [projection en perspective](/Std_PerspectiveCamera/fr "Std PerspectiveCamera/fr"). * **Vue orthographique** : les objets apparaîtront selon une [projection orthogonale](/Std_OrthographicCamera/fr "Std OrthographicCamera/fr"). |

### Sources de lumière

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

![](/images/Preferences_Display_Page_Light_Sources.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Source de lumière** | Si cette option est cochée, les objets de la [vue 3D](/3D_view/fr "3D view/fr") sont éclairés par une source de lumière directionnelle et la couleur spécifiée sera utilisée pour celle-ci. Sans cette option, tous les objets apparaissent en noir. |
| **Intensité** | Déplacez le curseur pour modifier l'intensité de la lumière. |
| **Direction** | L'aperçu montre le plan XY et une sphère, indiquant la source de lumière, reliée par une ligne à un cône, indiquant la direction. Tous les éléments de l'aperçu, la sphère, le petit cône qui lui est directement rattaché, la ligne et le grand cône, peuvent être déplacés pour modifier la direction de la lumière. Pour plus de précision, le vecteur de direction peut être défini en spécifiant les valeurs **x**, **y** et **z** ou les valeurs du [quaternion](https://fr.wikipedia.org/wiki/Quaternion) **q0** - **q3**. Vous pouvez agrandir ou réduire l'aperçu à l'aide des boutons situés dans le coin inférieur gauche. |

### Interface utilisateur

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

![](/images/Preferences_Display_Page_UI.png)

### Navigation

![](/images/Preferences_Display_Page_Navigation.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Cube de navigation** | Si cette case est cochée, le [cube de navigation](/Navigation_Cube/fr "Navigation Cube/fr") est affiché dans la [Vue 3D](/3D_view/fr "3D view/fr"). **Pas par tour** définit le nombre de pas nécessaires pour une rotation complète lors de l'utilisation des flèches de rotation du cube de navigation.  Si la case **Tourner au plus près** est cochée, la vue 3D est tournée vers la position logique la plus proche, en fonction de l'orientation en cours du cube, lorsque vous cliquez sur une face du cube. Si vous ne cliquez pas sur une face, vous obtiendrez toujours la même rotation.  **Taille du cube** définit la taille du cube.  **Couleur** définit la couleur de base de tous les éléments. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")  **Coin** définit l'endroit où le cube de navigation est affiché dans la [Vue 3D](/3D_view/fr "3D view/fr"). Les options sont :   * **En haut à gauche** * **En haut à droite** * **En bas à gauche** * **En bas à droite**   **Nom de la police** spécifie la police utilisée pour les textes du cube. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")  **Opacité en cas d'inactivité** : opacité du cube de navigation lorsqu'il n'est pas survolé par la souris. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") |
| **Indicateur de centre de rotation** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | Si cette case est cochée, le centre de rotation de la vue est affiché lorsque l'on fait glisser la souris. La **Taille de la sphère** et la **Couleurs et transparence** de l'indicateur peuvent être spécifiées. |
| **Navigation 3D** | Spécifie un [style de navigation de la souris](/Mouse_navigation/fr "Mouse navigation/fr"). Pour voir les détails de chaque style, sélectionnez-le et appuyez sur le bouton Souris.... |
| **Style d'orbite** | Spécifie le style d'orbite de rotation utilisé en mode de rotation. Les options sont :  * **Vue en rotation** : en déplaçant la souris, vous divisez la rotation en étapes, les rotations autour des différents axes sont effectuées séquentiellement. * **Trackball** : déplacer la souris horizontalement fera pivoter la vue autour de l'axe des Y. * **Vue en rotation libre** : comme **Trackball**, mais si possible l'axe de rotation est maintenu colinéaire avec l'axe global de la vue 3D. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") |
| **Mode de rotation** | Définit le centre de rotation. Les options sont les suivantes :  * **Centre de la fenêtre** * **Positionner au curseur** * **Centre de l'objet** |
| **Orientation par défaut de la caméra** | Spécifie l'orientation de la caméra pour les nouveaux documents. Ce paramètre est également utilisé par la commande [Std Accueil](/Std_ViewHome/fr "Std ViewHome/fr"). |
| **Zoom de la caméra** | Affecte le niveau de zoom initial de la caméra pour les nouveaux documents. La valeur que vous définissez est le diamètre d'une sphère qui tient dans la [vue 3D](/3D_view/fr "3D view/fr"). La valeur par défaut est de 100 mm. Elle définit également la taille initiale des caractéristiques d'origine (plans de base dans les nouveaux [PartDesign Corps](/PartDesign_Body/fr "PartDesign Body/fr") et [Std Parts](/Std_Part/fr "Std Part/fr")). |
| **Zoomer au curseur** | Si cette option est cochée, les opérations de zoom seront effectuées à la position du curseur de la souris. Sinon, les opérations de zoom seront effectuées au centre de la vue en cours. Le **Pas du zoom** définit l'ampleur du zoom. Un pas de zoom de **1** signifie un facteur de 7,5 pour chaque pas de zoom. |
| **Inverser le zoom** | Si cette option est cochée, la direction des opérations de zoom sera inversée. |
| **Désactiver le geste d'inclinaison de l'écran tactile** | Si cette option est cochée et que **Navigation 3D** est réglé sur **Gesture**, le geste d'inclinaison sera désactivé pour le zoom par pincement (zoom à deux doigts). |
| **Activer la prise en charge des anciennes SpaceMouse** [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr") | Si cette case est cochée, les anciens périphériques des SpaceMouse peuvent être utilisés. Peut être rétroporté à la version 1.0.1. |
| **Animations** | Si cette case est cochée, les rotations et les zooms de la vue, à l'exception de ceux qui sont déclenchés par des actions de la souris, sont animés. La **Durée des animations** peut être spécifiée. si la case **Activer les animations de rotation** est cochée et si **Navigation 3D** est réglé sur **CAD**, les rotations provoquées par la souris peuvent également être animées. Si la souris est déplacée alors que la molette de défilement et le bouton droit de la souris sont enfoncés, la vue est pivotée. Si l'on continue à déplacer la souris tout en relâchant le bouton droit de la souris, la rotation se poursuit. Pour mettre fin à cette animation, cliquez sur le bouton gauche de la souris. |

### Couleurs

![](/images/Preferences_Display_Page_Colors.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Couleur simple** | Si cette option est sélectionnée, l'arrière-plan de la [Vue 3D](/3D_view/fr "3D view/fr") aura la couleur spécifiée. |
| **Dégradé linéaire** | Si cette option est sélectionnée, l'arrière-plan de la [Vue 3D](/3D_view/fr "3D view/fr") aura un gradient de couleur vertical défini par les couleurs spécifiées pour **En haut** et pour **En bas**. Si cette option est activée, une couleur **Au milieu** peut également être spécifiée. Appuyez sur le bouton  ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) pour changer les couleurs du haut et du bas. |
| **Dégradé radial** [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") | Si cette option est sélectionnée, l'arrière-plan de la [Vue 3D](/3D_view/fr "3D view/fr") aura un gradient de couleur radial défini par les couleurs spécifiées pour **Au centre** et pour **Au bord**. Si cette option est activée, une couleur **Au milieu** peut également être spécifiée. Appuyez sur le bouton  pour changer les couleurs centrale et au bord. |
| **Objet en cours de modification** | Spécifie la couleur d'arrière-plan pour les objets de l'arborescence qui sont en cours d'édition. |
| **Conteneur actif** | Spécifie la couleur de fond pour les conteneurs actifs dans l'arborescence. Par exemple, un [PartDesign Corps actif](/PartDesign_Body/fr#Statut_actif "PartDesign Body/fr") aura cette couleur. |
| **Couleur du texte des étiquettes** | La couleur utilisée pour les étiquettes de la barre de couleurs. La barre de couleur est utilisée dans l'[atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") et l'[atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr"). |
| **Taille de la police des étiquettes** | La taille de ces étiquettes. |

### Avancé

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

![](/images/Preferences_Display_Page_Advanced.png)

### Vue du maillage

![](/images/Preferences_Display_Page_Mesh_view.png)

Cette page n'est disponible que si l'[atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") a été chargé.

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Couleur par défaut des maillages** | Spécifie la couleur de la face par défaut. |
| **Couleur de ligne par défaut** | Spécifie la couleur de ligne par défaut |
| **Transparence des maillages** | Spécifie la transparence du maillage par défaut |
| **Transparence de ligne** | Spécifie la transparence de ligne par défaut |
| **Rendu des deux côtés** | Si cette case est cochée, la valeur par défaut de la propriété Vue**Lighting** est `Two side` au lieu de `One side`. `Two side` signifie que la couleur de la face intérieure des faces est la même que celle de la face extérieure. `One side` signifie que leur couleur est soit la [couleur du rétroéclairage](#Vue_3D), si elle est activée, soit noir. |
| **Afficher la boîte englobante pour les mailles mises en évidence ou sélectionnées** | Si cette case est cochée, la valeur par défaut de la propriété Vue**Selection Style** est `BoundBox` au lieu de `Shape`. `BoundBox` signifie qu'une boîte de délimitation en surbrillance est affichée si les mailles sont en surbrillance ou sélectionnées. `Shape` signifie que la forme elle-même est alors mise en évidence. |
| **Définir les normales par les sommets** | Si cette case est cochée, l'[ombrage de Phong](https://fr.wikipedia.org/wiki/Ombrage_de_Phong) est utilisé, sinon c'est un ombrage plat. L'ombrage définit l'apparence des surfaces. Avec l'ombrage plat, les normales de la surface ne sont pas définies par sommet. Cela donne un aspect irréaliste aux surfaces courbes. L'ombrage de Phong donne un aspect plus réaliste et plus lisse. |
| **Angle de pliage** | L'angle de pliage est un angle seuil entre deux faces. Il ne peut être défini que si l'option **Définir les normales par les sommets** est utilisée. Si l'angle de face ≥ l'angle de pliage, l'ombrage de facette est utilisé.  Si l'angle de la face est < à l'angle de pliage, l'ombrage lisse est utilisé. |

## Ateliers

Ce groupe de préférences comporte une seule page : Ateliers disponibles.

### Ateliers disponibles

![](/images/Preferences_Workbenches_Page_Available_Workbenches.png)

Ces préférences contrôlent le chargement de l'atelier.

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Liste des ateliers** | La liste affiche tous les ateliers installés. La liste peut être réorganisée par un glisser-déposer ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) et triée par un clic droit sur la liste et en sélectionnant **Tri alphabétique** ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")). L'ordre de la liste détermine également l'ordre du [sélecteur d'atelier](/Std_Workbench/fr "Std Workbench/fr").  * [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") : **Première case à cocher de chaque ligne** : si cette case est cochée, l'atelier sera disponible dans le sélecteur d'atelier lors de la prochaine session FreeCAD. L'atelier de démarrage ne peut pas être décoché. Les ateliers non cochés sont déplacés vers le bas de la liste. * **Chargement automatique** : si cette option est cochée, l'atelier se chargera automatiquement au démarrage de FreeCAD. Le chargement d'un plus grand nombre d'ateliers ralentira le démarrage, mais le passage d'un atelier déjà chargé à un autre sera plus rapide. * Charger : appuyez sur ce bouton pour charger l'atelier dans la session FreeCAD en cours. |
| **Atelier de démarrage** | L'atelier qui est activé au démarrage de FreeCAD. |
| **Type de sélecteur d'atelier** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | Les options sont les suivantes :  * **Liste déroulante** : les ateliers peuvent être sélectionnés à partir d'une liste déroulante. * **Barre d'onglets** : les ateliers peuvent être sélectionnés à partir d'une barre d'onglets. Cette option nécessite moins de clics que la précédente, mais occupe plus d'espace à l'écran. |
| **Style des éléments du sélecteur d'atelier** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | Les options sont les suivantes  * **Icône & Texte** * **Icône** * **Texte** |

## Python

Ce groupe de préférences ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) comporte trois pages : Macro, Général et Éditeur.

### Macro

![](/images/Preferences_Python_Page_Macro.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Exécuter les macros dans l'environnement local** | Si cette case est cochée, les variables définies par les macros sont créées comme des variables locales, sinon comme des variables Python globales. |
| **Chemin des macros** | Spécifie le chemin pour les fichiers de macro. |
| **Enregistrer les commandes de l’interface graphique** | Si cette case est cochée, les [macros enregistrées](/Std_DlgMacroRecord/fr "Std DlgMacroRecord/fr") contiendront également des commandes d'interface utilisateur. |
| **Enregistrer comme un commentaire** | Si cette case est cochée, les [macros enregistrées](/Std_DlgMacroRecord/fr "Std DlgMacroRecord/fr") contiendront également des commandes d'interface utilisateur, mais sous forme de commentaires. Ceci est utile si vous ne voulez pas exécuter ces commandes lors de l'exécution de la macro, mais que vous voulez voir ce qui a été fait pendant l'enregistrement. |
| **Afficher les commandes des scripts dans la console Python** | Si cette option est cochée, les commandes exécutées par les scripts de macro sont affichées dans la console Python. Cette console s'affiche à l'aide de l'option de menu **Affichage → Panneaux → Console Python**. |
| **Taille de la liste des macros récentes** | Contrôle le nombre de macros récentes à afficher dans le menu. |
| **Nombre de raccourcis clavier** | Contrôle le nombre de macros récentes auxquelles sont attribués dynamiquement des raccourcis. |
| **Modificateurs de clavier** | Contrôle les modificateurs de clavier utilisés pour les raccourcis, par exemple **Ctrl+Shift+** crée des raccourcis sous la forme **Ctrl+Shift+1**, **Ctrl+Shift+2**, etc. |

### Général

![](/images/Preferences_Python_Page_General.png)

Ces préférences contrôlent le comportement de la [Console Python](/Python_console/fr "Python console/fr"). Cette console peut être ouverte à l'aide de l'option de menu **Affichage → Panneaux → Console Python**.

Notez que les paramètres de couleur et de police pour la console sont définis à la page [Éditeur](#.C3.89diteur).

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Activer le retour à la ligne** | Si cette case est cochée, les mots seront mis à la ligne s'ils dépassent l'espace horizontal disponible dans la console. |
| **Activer le curseur sous forme de bloc** | Si la case est cochée, le curseur aura la forme d'un bloc. |
| **Sauvegarder l'historique** | Si la case est cochée, l'historique de Python est sauvegardé entre les sessions. |
| **Intervalle du profileur de Python (millisecondes)** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | L'intervalle auquel le profileur s'exécute lorsqu'il y a du code Python en cours d'exécution (pour que l'interface graphique réponde). Mettez à 0 pour le désactiver. |
| **Chemin d'accès vers l'exécutable externe de Python (facultatif)** | Utilisé pour l'installation de paquets avec pip et le débogage avec debugpy. Auto-détecté si nécessaire et non spécifié. |

### Éditeur

![](/images/Preferences_Python_Page_Editor.png)

Ces préférences contrôlent le comportement de l'[éditeur de macros](/Std_DlgMacroExecute/fr#Editer "Std DlgMacroExecute/fr"). Cet éditeur peut être ouvert à l'aide de **Macro → Macros.... → Éditer** ou l'option de menu **Créer**.

Les paramètres de couleur et de police sont également utilisés par la [console Python](#Console_Python). Les paramètres de police sont également utilisés par la [vue rapport](/Report_view/fr "Report view/fr").

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Activer la numérotation des lignes** | Si coché, les lignes de code seront numérotées. |
| **Activer le curseur sous forme de bloc** | Si cette case est cochée, le curseur aura une forme de bloc. |
| **Taille de la tabulation** | Spécificie la trame de tabulation (combien d'espaces). Si elle est par exemple fixée à **6**, l'appui sur Tab fera sauter du caractère 7 ou 13 ou 19 etc. selon la position en cours du curseur. Ce paramètre n'est utilisé que si **Maintien des tabulations** est sélectionné. |
| **Taille de l'indentation** | Spécifie le nombre d'espaces qui seront insérés lorsque vous appuyez sur Tab. Ce paramètre n'est utilisé que si **Insérer des espaces** est sélectionné. |
| **Garder les tabulations** | Si cette option est sélectionnée, l'appui sur Tab insérera une tabulation avec la trame définie par **Taille des tabulations**. |
| **Insérer des espaces** | Si cette option est sélectionnée, l'appui sur Tab insérera le nombre d'espaces défini par **Taille de l'indentation**. |
| **Afficher les éléments** | Spécifie le type de code sur lequel les paramètres de couleur et de police seront appliqués. Le résultat peut être vérifié dans le champ **Aperçu**. |
| **Police** | Spécificie la famille de polices qui doit être utilisée pour le type de code sélectionné. |
| **Taille** | Spécificie la taille de la police à utiliser pour le type de code sélectionné. |
| **Couleur** | Spécificie la couleur qui doit être utilisée pour le type de code sélectionné. |

## Gestionnaire des extensions

Ce groupe de préférences comporte une seule page : Options du gestionnaire des extensions.

### Options du gestionnaire des extensions

![](/images/Preferences_Addon_Manager_Page_Addon_manager_options.png)

Ces préférences contrôlent le comportement du [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Vérifier automatiquement les mises à jour au démarrage (nécessite git)** | Si cette option est cochée, le gestionnaire des extensions vérifiera les mises à jour lors de son lancement. Git doit être installé pour que cela fonctionne. |
| **Télécharger les métadonnées des macros (environ 10 Mo)** | Si cette option est cochée, les métadonnées des macros sont téléchargées pour être affichées dans la liste principale des macros du gestionnaire des extensions. Ces données sont mises en cache localement. |
| **Fréquence de mise à jour du cache** | Contrôle la fréquence de mise à jour de la disponibilité des extensions et des métadonnées mises en cache localement. Les options sont les suivantes :  * **Manuel (pas de mises à jour automatiques)** * **Quotidien** * **Hebdomadaire** |
| **Masquer les extensions sans licence** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | Si cette option est cochée, les extensions complémentaires sans licence ne sont pas incluses dans la liste. |
| **Masquer les extensions avec une licence non-FSF Free/Libre** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | Si cette case est cochée, les extensions complémentaires dont la licence Free/Libre n'est pas publiée par la [Free Software Foundation](https://www.fsf.org/licensing) ne sont pas incluses dans la liste. |
| **Masquer les extensions avec une licence non approuvée par l'OSI** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | Si cette case est cochée, les extensions complémentaires dont la licence n'est pas approuvée par l'[Open Source Initiative](https://opensource.org/licenses) ne sont pas incluses dans la liste. |
| **Masquer les extensions marquées Python 2 uniquement** | Si cette case est cochée, les extensions marquées "Python 2 Only" ne sont pas inclus dans la liste. Il est peu probable que ces extensions fonctionnent dans la version en cours de FreeCAD. |
| **Masquer les extensions marquérs comme obsolètes** | Si cette case est cochée, les extensions marquées comme "Obsolete" ne sont pas inclus dans la liste. |
| **Masquer les extensions qui nécessitent une version plus récente de FreeCAD** | Si cette case est cochée, les extensions qui nécessitent une version plus récente de FreeCAD ne sont pas inclus dans la liste. |
| **Dépôts personnalisés** | Les dépôts personnalisés peuvent être spécifiés ici. Pour ajouter un dépôt, cliquez sur le bouton . L'**URL du dépôt** et la **Branche**, généralement `maître` ou `principale`, doivent être spécifiées dans la boîte de dialogue qui s'ouvre. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")  Pour supprimer un dépôt, sélectionnez-le dans la liste et appuyez sur le bouton . [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") |
| **Proxy** | Le gestionnaire des extensions inclut une prise en charge expérimentale des proxys nécessitant une authentification, configurés comme des proxys définis par l'utilisateur. |
| **Source URL** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | L'URL pour les données de score de l'addon. Voir le [gestionnaire des extensions](/Std_AddonMgr/fr#Tri_par_score "Std AddonMgr/fr") pour les détails de formatage et d'hébergement. |
| **Chemin d'accès vers l'exécutable de git (facultatif)** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | Le gestionnaire des extensions tente de déterminer l'exécutable de git. Pour remplacer cette sélection, le chemin d'accès à l'exécutable peut être défini ici. |
| **Afficher l'option pour changer de branche (nécessite git)** | Si cette option est cochée, le gestionnaire des extensions fournit une interface sur l'écran de détails des extensions qui permet de changer la branche git actuellement extraite. Cette option est destinée aux utilisateurs avancés uniquement, car il est possible qu'une version d'une extension sans branche primaire puisse entraîner une instabilité et des problèmes de compatibilité. Git doit être installé pour que cela fonctionne. A utiliser avec précaution. |
| **Désactiver git (retour aux téléchargements ZIP uniquement)** [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") | Si cette case est cochée, les téléchargements git sont désactivés. |
| **Mode développeur des extensions**. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") | Si cette case est cochée, les options du gestionnaire des extensions destinées aux développeurs d'extensions sont activées. |

## Importer/Exporter

Les préférences d'importation et d'exportation affectent la manière dont les fichiers sont importés et exportés. Elles sont décrites sur la page [Préférences Importer/Exporter](/Import_Export_Preferences/fr "Import Export Preferences/fr").

## Mesure

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Ce groupe de préférences a une seule page : Apparence.

### Apparence

![](/images/Preferences_Measure_Page_Appearance.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Taille des textes** | Spécifie la taille des textes en pixels. |
| **Couleur des textes** | Spécifie la couleur des textes. |
| **Couleur des lignes** | Spécifie la couleur des lignes reliant les étiquettes de texte au(x) élément(s) mesuré(s). |
| **Couleur d'arrière-plan** | Spécifie la couleur d'arrière-plan des étiquettes de texte. |

## Préférences liées aux ateliers

Les préférences pour les ateliers intégrés sont liées ci-dessous. Ces liens sont également listés dans [Category:Preferences/fr](/Category:Preferences/fr "Category:Preferences/fr"). Certains ateliers n'ont pas de préférences.

* [Assembly Préférences](/Assembly_Preferences/fr "Assembly Preferences/fr")
* [BIM Préférences](/BIM_Preferences/fr "BIM Preferences/fr")
* [CAM Préférences](/CAM_Preferences/fr "CAM Preferences/fr")
* [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr")
* [FEM Préférences](/FEM_Preferences/fr "FEM Preferences/fr")
* Inspection Préférences (aucune)
* [Material Préférences](/Material_Preferences/fr "Material Preferences/fr")
* [Mesh Préférences](/Mesh_Workbench/fr#Pr.C3.A9f.C3.A9rences "Mesh Workbench/fr")
* [OpenSCAD Préférences](/OpenSCAD_Preferences/fr "OpenSCAD Preferences/fr")
* Part Préférences : l'atelier Part utilise aussi les [préférences de PartDesign](/PartDesign_Preferences/fr "PartDesign Preferences/fr")
* [PartDesign Préférences](/PartDesign_Preferences/fr "PartDesign Preferences/fr")
* Points Préférences (aucune)
* Reverse Engineering Préférences (aucune)
* Robot Préférences (aucune)
* [Sketcher Préférences](/Sketcher_Preferences/fr "Sketcher Preferences/fr")
* [Spreadsheet Préférences](/Spreadsheet_Preferences/fr "Spreadsheet Preferences/fr")
* Surface Préférences (aucune)
* [Spreadsheet Préférences](/Spreadsheet_Preferences/fr "Spreadsheet Preferences/fr")
* [TechDraw Préférences](/TechDraw_Preferences/fr "TechDraw Preferences/fr")
* Test Framework Préférences (aucune)

## Script

Voir [Std Éditeur de paramètres](/Std_DlgParameter/fr#Script "Std DlgParameter/fr").

## En relation

* [Éditeur de paramètres](/Std_DlgParameter/fr "Std DlgParameter/fr")
* [Réglage fin](/Fine-tuning/fr "Fine-tuning/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Preferences_Editor/fr&oldid=1565471>"