---
title: Instalación en Linux
---
## Vista general

La instalación de FreeCAD en los sistemas Linux más conocidos ha sido aprobada por la comunidad, y FreeCAD debería estar disponible directamente a través del gestor de paquetes disponible en su distribución. El equipo de FreeCAD también proporciona algunos:

* Paquetes "oficiales" cuando se hacen nuevos lanzamientos
* Repositorios experimentales [Archivo de Paquetes Personales](https://help.ubuntu.com/community/PPA) (APP), [AppImages](/AppImage/es "AppImage/es"), y [Ubuntu Snaps](/Ubuntu_Snap/es "Ubuntu Snap/es") para probar las características de sangrado.

## Ubuntu y sistemas basados en Ubuntu

Muchas distribuciones de Linux están basadas en Ubuntu y comparten sus repositorios. Además de las variantes oficiales (Kubuntu, Lubuntu y Xubuntu), existen derivados no oficiales como Linux Mint, Voyager y otros. Las opciones de instalación que se indican a continuación (expandir) deberían ser compatibles con estos sistemas.

### Versión oficial

FreeCAD está disponible en el repositorio del Universo Ubuntu, y puede ser instalado a través del **Centro de Software** o desde la terminal:

```
sudo apt install freecad

```

*Nota:* el paquete del Universo Ubuntu puede estar desactualizado, ya que el paquete puede ir por detrás del último código fuente estable. En este caso, se sugiere instalar el paquete desde el `-estable` PPA abajo. Además, se puede instalar el paquete `-diario` para probar la rama de desarrollo.

### Versión estable PPA

**Warning:** The FreeCAD PPA is currently unmaintained and [looking for volunteers](https://forum.freecadweb.org/viewtopic.php?f=42&t=69055&start=20). Please use an alternative (snap, appimage) until the issue is fixed!

El Archivo de Paquetes Personales (APP) para la versión estable de FreeCAD es mantenido por la comunidad de FreeCAD en el Launchpad. El repositorio de Launchpad se llama [FreeCAD Lanzamientos estables](https://launchpad.net/~freecad-maintainers/+archive/freecad-stable) .

#### GUI

Instale el PPA estable a través de la Interfaz Gráfica de Usuario (GUI):

:   1. Navegue a **Ubuntu Software → Software y actualizaciones → Fuentes de software → Otro software**
:   2. Haga clic en Y, y luego copie y pegue la siguiente línea

    :   ```
        ppa:freecad-maintainers/freecad-stable

        ```

:   3. Añade la fuente, cierra el diálogo y recarga tus fuentes de software, si se te pide.

Ahora puedes encontrar e instalar la última versión estable de FreeCAD desde el **Centro de Software Ubuntu**.

#### CLI

Instale el APP estable a través de la Interfaz de Línea de Comando (CLI):

:   1. Añade la APP a tus fuentes de software:

    :   ```
        sudo add-apt-repository ppa:freecad-maintainers/freecad-stable

        ```

:   2. Recuperar las listas de paquetes actualizadas:

    :   ```
        sudo apt update

        ```

:   3. Entonces instala FreeCAD junto con su documentación offline:

    :   ```
        sudo apt install freecad freecad-doc

        ```

*Nota:* debido a problemas de empaquetado, en ciertas versiones de Ubuntu el paquete `freecad-doc` ha colisionado con la instalación de FreeCAD o una de sus dependencias; si este es el caso, retire el paquete `freecad-doc` y sólo instale el paquete `freecad`. Si el paquete `freecad-doc` no existe, entonces ignóralo.

#### Comprobando la instalación

:   4. Una vez que tenga el APP estable añadido a sus fuentes usando uno de los métodos anteriores, el paquete `freecad` instalará esta versión de PPA sobre la proporcionada por el repositorio del Universo Ubuntu. Puede ver las versiones disponibles con el siguiente comando `apt-cache`:
:   ```
    apt-cache policy freecad

    ```

:   La emisión debe ser similar a la siguiente (por supuesto la información de la versión variará):

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

:   5. Invoca la versión estable (PPA) de FreeCAD desde el GUI o CLI. Este último método es el siguiente:
:   ```
    ./freecad

    ```

### Desarrollo APP (Diario)

Como FreeCAD está en constante desarrollo, puede que desee instalar el paquete *diario* para estar al tanto de las últimas mejoras y correcciones de errores. El repositorio también está alojado en Launchpad y se llama [freecad-daily](https://launchpad.net/~freecad-maintainers/+archive/freecad-daily).

Esta versión se compila diariamente desde el repositorio maestro oficial. Por favor, tened cuidado de que aunque contenga nuevas características y correcciones de errores, también puede tener nuevos errores y ser inestable.

Añade la APP diaria a tus fuentes de software, actualiza las listas de paquetes e instala el paquete diario:

```
sudo add-apt-repository ppa:freecad-maintainers/freecad-daily
sudo apt-get update
sudo apt-get install freecad-daily

```

Todos los días puedes actualizarte con las últimas novedades:

```
sudo apt-get update
sudo apt-get install freecad-daily

```

*Nota:* en algunos casos el nuevo código o las dependencias añadidas a FreeCAD causarán errores de empaquetado; si esto ocurre, no se generará un paquete diario hasta que los mantenedores solucionen manualmente los problemas. Si desea continuar probando el último código, debería obtener el código fuente y compilar FreeCAD directamente; para instrucciones vea [compilar](/Compiling/es "Compiling/es").

Ejecute la versión diaria (APP) de FreeCAD:

:   ```
    freecad-daily

    ```

*Nota:* Es posible instalar los paquetes `-estable` y `-diario` en el mismo sistema. Esto es útil si desea trabajar con una versión estable, y aún así poder probar las últimas características en desarrollo. Fíjese que el ejecutable de la versión diaria es `freecad-daily`, pero el de la versión estable es sólo `freecad`.

## Debian y otros sistemas basados en Debian

A partir de Debian Lenny, FreeCAD está disponible directamente de los repositorios de software Debian y puede ser installado vía synaptic o simplemente con:

```
sudo apt-get install freecad

```

## OpenSUSE

FreeCAD se instala típicamente con YAST (abbr. Otra herramienta de configuración) la herramienta de configuración del sistema operativo Linux, o en cualquier terminal/consola (se requieren derechos de root) con:

:   ```
    zypper install FreeCAD

    ```

*Nota:* Este procedimiento sólo cubre la instalación de versiones del programa FreeCAD *estables*, dependiendo de los enlaces instalados a los repositorios de paquetes de programas de su versión de SO. El paquete openSUSE *puede estar desactualizado* ya que el paquete puede estar atrasado con respecto al último código fuente estable. En este caso, se sugiere instalar el paquete manualmente desde los repositorios de fuentes indicados abajo (Expandir).

Se ofrece un vasto programa de lanzamiento de paquetes de FreeCAD. Por favor, visite para una encuesta:

**[Estudio de los depósitos en openSUSE](https://software.opensuse.org/search?utf8=%E2%9C%93&baseproject=ALL&q=FreeCAD)**

Generalmente para seleccionar la distribución correcta de openSUSE que se necesita es necesario hacer clic en el botón particular View.

### Estable

La versión del paquete estable: [Repositorios estables en openSUSE](https://software.opensuse.org/package/FreeCAD). La versión correcta de la distribución de openSUSE debe ser seleccionada en la parte inferior de la página web.

Nota: openSUSE tiene varias opciones para elegir al descargar FreeCAD. Para ver estas opciones, visite [Encuesta sobre los repositorios estables en openSUSE](https://software.opensuse.org/search?utf8=%E2%9C%93&baseproject=ALL&q=FreeCAD).

### Desarrollo

El último desarrollo es también conocido como *inestable*: [Listados de repositorios inestables en openSUSE](https://software.opensuse.org/download.html?project=science%3Aunstable&package=FreeCAD)

Se recomienda tomar los paquetes binarios directamente. Luego seleccione la distribución correcta para su sistema operativo openSUSE instalado.

## Gentoo

FreeCAD se puede construir/instalar simplemente ejecutando:

```
emerge freecad

```

## Fedora

FreeCAD ha sido incluido en los paquetes oficiales de Fedora desde Fedora 20. Se puede instalar desde la línea de comandos con:

```
sudo dnf install freecad

```

En los antiguos lanzamientos de Fedora, eso era:

```
sudo yum install freecad

```

También se pueden utilizar los gestores de paquetes guiados. Busca por "freecad".
La versión oficial del paquete de lanzamiento tiende a estar muy por detrás de los lanzamientos de FreeCAD. [Paquete: freecad](http://rpms.remirepo.net/rpmphp/zoom.php?rpm=freecad) muestra las versiones incluidas en los repositorios de Fedora a lo largo del tiempo y las versiones.

Se pueden obtener versiones más actuales descargando una de las [.AppImage](https://github.com/FreeCAD/FreeCAD/releases/)... lanzamientos desde el depósito de github. Estas funcionan bien en Fedora.

Si quieres estar al día con las últimas novedades diarias, FreeCAD también está disponible en [copr](https://copr.fedorainfracloud.org/groups/g/freecad/coprs/). Para instalar la construcción desde allí, en una sesión de terminal, entra:

```
sudo dnf copr enable @freecad/nightly
sudo dnf install freecad

```

Eso deja a la copr
repositorio activo, así que

```
sudo dnf upgrade

```

o equivalente, se actualizará a la última versión de FreeCAD, junto con las actualizaciones de cualquiera de los otros repositorios activos. Si quieres algo un poco más estable, puedes deshabilitar @freecad/nightly de nuevo después de la instalación inicial. El copr
El depósito sólo guarda las construcciones de las últimas 2 semanas. Esta no es una solución si quieres elegir una versión antigua específica.

También hay instrucciones disponibles en [Compila FreeCAD tú mismo](/Compile_on_Linux/es "Compile on Linux/es"), incluyendo un script específico para Fedora. Con un pequeño cambio, para comprobar el commit específico de git, cualquier versión desde FreeCAD 0.15 puede ser construida en cualquier distribución desde Fedora 21.

## Arch

Instalando FreeCAD en Arch Linux y derivados (ex. Manjaro):

```
pacman -S freecad

```

## Otros

Si averiguas que tu sistema incorpora FreeCAD pero no está incluido en esta página, por favor dínoslo en los [foros](http://forum.freecadweb.org/viewforum.php?f=21)!

Diversos paquetes de FreeCAD alternativos, no oficiales están disponibles en la red, por ejemplo para sistemas como Slackware o Fedora. Una búsqueda en la red puede darte rápidamente algunos resultados.

### Instalación en otros sistemas Linux/Unix

Muchas distribuciones comunes de Linux ahora incluyen un FreeCAD precompilado como parte de los paquetes estándar. Esto está a menudo desactualizado, pero es un lugar para empezar. Revise los administradores de paquetes estándar de su sistema. Una de las siguientes listas (parciales) de comandos podría instalar la versión oficial de FreeCAD para su distribución desde la terminal. Estos probablemente necesitan privilegios de administrador.

```
apt-get install freecad
dnf install freecad
emerge freecad
slackpkg install freecad
yum install freecad
zypper install freecad
pacman -Sy freecad

```

El nombre del paquete es sensible a las mayúsculas y minúsculas, así que prueba con "FreeCAD" y "freecad". Si eso no funciona para usted, ya sea porque su administrador de paquetes no tiene una versión precompilada de FreeCAD disponible, o porque la versión disponible es demasiado vieja para sus necesidades, puede intentar instalar los paquetes [Flatpak](/Flatpak "Flatpak") o [Snap](/Ubuntu_Snap "Ubuntu Snap") o descargar uno de los [.AppImage](https://github.com/FreeCAD/FreeCAD/releases/)
... lanzamientos desde el depósito de github. Estas también tienden a funcionar en la mayoría de las distribuciones de Linux x86\_64, sin ninguna instalación especial. Sólo asegúrate de que el archivo descargado esté marcado como ejecutable, y luego ejecútalo.

Si eso todavía no es lo suficientemente bueno, y no puedes localizar otra fuente de un paquete precompilado para tu situación, necesitarás [Compilar FreeCAD tú mismo](/Compile_on_Linux/es "Compile on Linux/es").

## Próximo paso

Una vez tengas instalado FreeCAD, es hora de [dar tus primeros pasos](/Getting_started/es "Getting started/es")!

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_on_Linux/es&oldid=1343250>"