---
title: Installation sous Linux
---
## Présentation

L'installation de FreeCAD sur la plupart des systèmes Linux connus est validée par la communauté. FreeCAD est disponible via le gestionnaire de paquets sur ces systèmes. L'équipe de FreeCAD fournit également des :

* Paquets "officiels" lorsque les nouvelles versions sont disponibles via les [paquets Snap](/Ubuntu_Snap/fr "Ubuntu Snap/fr"), [AppImages](/AppImage/fr "AppImage/fr"), [Flatpaks](/Flatpak/fr "Flatpak/fr") et le [PPA](#Le_PPA_de_la_version_stable).
* Des versions expérimentales sont disponibles via les dépôts quotidiens [PPA](#Le_PPA_de_la_version_en_cours_de_développement), [AppImages](/AppImage/fr "AppImage/fr") et [Ubuntu Snaps](/Ubuntu_Snap/fr "Ubuntu Snap/fr").

## Ubuntu et systèmes dérivés

De nombreuses distributions Linux sont basées sur Ubuntu et en partagent les dépôts. Outre les variantes officielles (Kubuntu, Lubuntu et Xubuntu), il existe des variantes non-officielles telles que Linux Mint, Voyager ou autres. Les options d'installation (**Afficher**) ci-dessous devraient être compatibles avec ces systèmes.

### Version officielle

FreeCAD est disponible dans les dépôts officiels d'Ubuntu et peut être installé via le **Software Center** ou depuis le terminal :

```
sudo apt install freecad

```

*Remarque :* le dépôt d'Ubuntu peut être obsolète. L'empaquetage peut prendre du retard par rapport au dernier code source stable. Dans ce cas, il est suggéré d'installer le package à partir du PPA `-stable` ci-dessous. De plus, l'installation du package `-daily` peut être effectuée pour tester la branche de développement.

### Le PPA de la version stable

**Attention :** le PPA de FreeCAD n'est actuellement pas maintenu et [recherche des volontaires](https://forum.freecadweb.org/viewtopic.php?f=42&t=69055&start=20). Veuillez utiliser une alternative (snap, appimage) jusqu'à ce que le problème soit résolu !

Les archives de packages personnels (PPA) pour la version stable de FreeCAD sont gérées par la communauté FreeCAD sur Launchpad. Le dépôt Launchpad est appelé [FreeCAD Stable Releases](https://launchpad.net/~freecad-maintainers/+archive/freecad-stable).

#### Interface graphique

Pour installer le PPA stable depuis l'interface graphique utilisateur (GUI) :

:   1. Accédez à **Logiciel Ubuntu → Logiciels et mises à jour → Sources de logiciels → Autres logiciels**.
:   2. Cliquez sur Ajouter, puis copiez et collez la ligne suivante

    :   ```
        ppa:freecad-maintainers/freecad-stable

        ```

:   3. Ajoutez la source, fermez la fenêtre de dialogue et rechargez vos sources de logiciels, si nécessaire.

Vous pouvez maintenant trouver et installer la dernière version stable de FreeCAD à partir du **Ubuntu Software Center**.

#### Commandes en ligne

Pour installer le PPA stable via l'interface de ligne de commande (CLI) :

:   1. Ajoutez le PPA à vos sources de logiciels :

    :   ```
        sudo add-apt-repository ppa:freecad-maintainers/freecad-stable

        ```

:   2. Récupérer les listes de paquets mis à jour :

    :   ```
        sudo apt update

        ```

:   3. Ensuite, installez FreeCAD avec sa documentation hors ligne :

    :   ```
        sudo apt install freecad freecad-doc

        ```

*Remarque :* en raison de problèmes d'empaquetage, dans certaines versions d'Ubuntu, le paquet `freecad-doc` est entré en collision avec l'installation de FreeCAD ou de l'une de ses dépendances. Si c'est le cas, supprimez le paquet `freecad-doc` et installez uniquement le paquet `freecad`. Si le paquet `freecad-doc` n'existe pas, ignorez-le.

#### Vérification de l'installation

:   4. Une fois que vous avez ajouté le PPA stable à vos sources en utilisant l'une des méthodes ci-dessus, le paquet `freecad` installera cette version de PPA par dessus celle fournie par le dépôt d'Ubuntu Universe. Vous pouvez voir les versions disponibles avec la commande `apt-cache` suivante :
:   ```
    apt-cache policy freecad

    ```

:   Le résultat devrait ressembler à ce qui suit (bien sûr, les informations de version varieront) :

```
freecad:
  Installed: (none)
  Candidate: 2:0.18.4+dfsg1~201911060029~ubuntu18.04.1
  Version table:
     2:0.18.4+dfsg1~201911060029~ubuntu18.04.1 500
        500 http://ppa.launchpad.net/freecad-maintainers/freecad-stable/ubuntu bionic/main amd64 Packages
     0.16.6712+dfsg1-1ubuntu2 500
        500 http://archive.ubuntu.com/ubuntu bionic/universe amd64 Packages
ubuntu@ubuntu:~$ apt-cache policy freecad-doc

```

:   5. Exécutez la version stable (PPA) de FreeCAD à partir de l'interface graphique (GUI) ou par la commande en ligne (CLI). Cette dernière méthode est la suivante :
:   ```
    ./freecad

    ```

### Le PPA de la version en cours de développement

Comme FreeCAD est en constant développement, vous souhaiterez peut-être installer la version *daily* pour suivre les dernières améliorations et corrections de bogues. Le dépôt est également hébergé sur Launchpad et s'appelle [freecad-daily](https://launchpad.net/~freecad-maintainers/+archive/freecad-daily).

Cette version est compilée quotidiennement à partir du dépôt officiel maître. Attention, bien qu'elle contienne de nouvelles fonctionnalités et corrections de bogues, elle peut aussi avoir des bogues plus récents et être instable.

Ajoutez le daily PPA à vos sources logicielles, mettez à jour les listes de paquets et installez le daily package :

```
sudo add-apt-repository ppa:freecad-maintainers/freecad-daily
sudo apt-get update
sudo apt-get install freecad-daily

```

Chaque jour, vous pouvez mettre à jour la dernière version en cours :

```
sudo apt-get update
sudo apt-get install freecad-daily

```

*Remarque :* dans certains cas, le nouveau code ou les dépendances ajoutés à FreeCAD provoqueront des erreurs d'empaquetage. Si cela se produit, le daily package ne peut pas être généré tant que les responsables ne résolvent pas les problèmes manuellement. Si vous souhaitez continuer à tester le dernier code, vous devez obtenir le code source et compiler directement FreeCAD. Pour plus d'instructions, voir [compilation](/Compiling/fr "Compiling/fr").

Lancez la version daily (PPA) de FreeCAD :

:   ```
    freecad-daily

    ```

*Remarque :* il est possible d'installer les paquets `-stable` et `-daily` dans le même système. Cela est utile si vous souhaitez utiliser une version stable et pouvoir toujours tester les dernières fonctionnalités en développement. Notez que l'exécutable pour la version quotidienne est `freecad-daily`, mais pour la version stable, il s'agit simplement de `freecad`.

## Debian et autre dérivés de Debian

Depuis la version Debian Lenny, FreeCAD est disponible depuis les dépôts Debian et peut être installé par Synaptic ou simplement par :

```
sudo apt-get install freecad

```

## OpenSUSE

FreeCAD est généralement installé avec YAST (Yet another Setup Tool), l’outil de configuration et de configuration du système d’exploitation Linux, ou dans n’importe quel terminal/console (les droits en mode root sont requis) avec :

:   ```
    zypper install FreeCAD

    ```

*Remarque :* cette procédure ne couvre que l'installation des versions du programme FreeCAD **stables** officiellement publiées en fonction des liens installés vers les dépôts de packages de programmes de votre version de système d'exploitation. Le package openSUSE *peut être obsolète* car le package peut être en retard sur le dernier code source stable. Dans ce cas, il est suggéré d'installer le package manuellement à partir des dépôts sources indiqués ci-dessous (Expand).

Un vaste programme de version pour les versions de packages FreeCAD est proposé. Veuillez visiter pour un aperçu :

**[Survey of repositories on openSUSE](https://software.opensuse.org/search?utf8=%E2%9C%93&baseproject=ALL&q=FreeCAD)**

Généralement, pour sélectionner la bonne distribution openSUSE, il est nécessaire de cliquer sur le bouton View.

### Stable

La version stable du package : [Stable repositories on openSUSE](https://software.opensuse.org/package/FreeCAD). La version de distribution openSUSE correcte doit être sélectionnée dans la partie inférieure de la page Web.

Remarque : openSUSE propose plusieurs options lors du téléchargement de FreeCAD. Pour afficher ces options, visitez [Survey of stable repositories on openSUSE](https://software.opensuse.org/search?utf8=%E2%9C%93&baseproject=ALL&q=FreeCAD).

### Développement

Les dernières versions de développement *unstable*: [Unstable repositories listings on openSUSE](https://software.opensuse.org/download.html?project=science%3Aunstable&package=FreeCAD)

Il est recommandé de récupérer les paquets binaires directement. Sélectionnez ensuite la distribution appropriée pour votre OS openSUSE installé.

## Gentoo

FreeCAD peut être compilé ou installé simplement avec cette commande :

```
emerge freecad

```

## Fedora

FreeCAD est inclus dans les packages officiels de Fedora depuis Fedora 20. Il peut être installé par ligne de commande en faisant :

```
sudo dnf install freecad

```

Sur les versions précédentes de Fedora, c’était :

```
sudo yum install freecad

```

Les gestionnaires de paquets d'interface graphique peuvent également être utilisés. Rechercher "freecad".
La version officielle du paquet a tendance à être en retard sur les versions de FreeCAD. [Package: freecad](http://rpms.remirepo.net/rpmphp/zoom.php?rpm=freecad) affiche les versions incluses dans les référentiels Fedora dans le temps et les versions.

Des versions plus récentes peuvent être obtenues en téléchargeant l’un des fichiers [.AppImage](https://github.com/FreeCAD/FreeCAD/releases/)Les versions du logiciel sont dans les dépôts de github et fonctionnent très bien sur Fedora.

Si vous souhaitez obtenir les dernières versions en cours de développement, FreeCAD est également disponible sur [copr](https://copr.fedorainfracloud.org/groups/g/freecad/coprs/). Pour installer la version, dans un terminal, tapez :

```
sudo dnf copr enable @freecad/nightly
sudo dnf install freecad

```

Cela laisse le copr
dépôt actif.

```
sudo dnf upgrade

```

La commande ci-dessus ou l'équivalent mettra à jour vers la dernière version de FreeCAD avec les mises à jour de n’importe quel autre dépôt actif. Si vous voulez quelque chose d'un peu plus stable, vous pouvez désactiver @freecad/nightly à nouveau après l’installation initiale. Le copr
dépôt ne conserve que les versions des 2 dernières semaines. Ce n'est pas une solution si vous voulez choisir une version particulière plus ancienne.

Des instructions sont également disponibles sur [compiler FreeCAD vous-même](/Compile_on_Linux/fr "Compile on Linux/fr"), y compris un script spécifiquement pour Fedora. Avec une modification mineure, pour extraire le commit spécifique du git, n'importe quelle version depuis FreeCAD 0.15 peut être construite sur n'importe quelle distribution depuis Fedora 21.

## Arch

Installer FreeCAD sur Arch Linux et ses dérivés (ex. Manjaro) :

```
pacman -S freecad

```

## Autres

Si votre distribution Linux offre FreeCAD mais qu'elle n'est pas documentée sur cette page, merci de nous le dire sur le [forum](http://forum.freecadweb.org/viewforum.php?f=21)!

De nombreux paquets alternatifs et non officiels de FreeCAD sont disponibles sur le net, par exemple pour des systèmes tels que slackware ou fedora. Une recherche sur le net peut rapidement vous donner quelques résultats.

### Installation sous d'autres systèmes Linux/Unix

De nombreuses distributions Linux courantes incluent maintenant un FreeCAD précompilé dans les packages standard. C'est souvent obsolète, mais c'est un endroit pour commencer. Vérifiez les gestionnaires de paquets standard pour votre système. L'une des listes de commandes (partielles) suivantes pourrait installer la version officielle de FreeCAD pour votre distribution à partir du terminal. Ceux-ci ont probablement besoin de privilèges d'administrateur.

```
apt-get install freecad
dnf install freecad
emerge freecad
slackpkg install freecad
yum install freecad
zypper install freecad
pacman -Sy freecad

```

Le nom du paquet est sensible à la casse, donc essayez "FreeCAD" ainsi que "freecad". Si cela ne fonctionne pas pour vous, soit parce que votre gestionnaire de paquets n'a pas de version FreeCAD précompilée disponible, soit parce que la version disponible est trop ancienne pour vos besoins, vous pouvez essayer d'installer les paquets [Flatpak](/Flatpak/fr "Flatpak/fr") ou [Snap](/Ubuntu_Snap/fr "Ubuntu Snap/fr") (ceux-ci fonctionnent sur la plupart des distributions Linux x86\_64) ou essayer de télécharger l'un des programmes suivants [.AppImage](https://github.com/FreeCAD/FreeCAD/releases/)
disponibles à partir du dépôt github. Elles ont également tendance à fonctionner sur la plupart des distributions Linux x86\_64, sans installation particulière. Assurez-vous simplement que le fichier téléchargé est marqué comme exécutable, puis exécutez-le.

Si cela ne suffit toujours pas et que vous ne pouvez pas localiser une autre source d'un paquet précompilé, vous devrez [compiler FreeCAD vous-même](/Compile_on_Linux/fr "Compile on Linux/fr").

## Etape suivante

Une fois FreeCAD installé, il est temps de [commencer](/Getting_started/fr "Getting started/fr")!

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_on_Linux/fr&oldid=1495703>"