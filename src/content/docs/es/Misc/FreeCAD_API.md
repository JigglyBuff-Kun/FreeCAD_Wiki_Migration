---
title: FreeCAD API
---
:::caution
(Octubre 2019) No editar esta página. La información está incompleta y desactualizada. Para obtener la API más reciente, consulte ladocumentación de API generada automáticamenteo genere la documentación usted mismo, consulteDocumentación de fuente.
:::

Este es el módulo principal (raíz) de FreeCAD. También puede ser llamado por "App" desde el interprete de FreeCAD. Contiene todo lo que es necesario para manipular documentos y sus contenidos (objectos).

Ejemplo:

```
import FreeCAD
print FreeCAD.listDocuments()
mydoc = FreeCAD.activeDocument()

```

![](/images/Method.png) **ConfigDump** (  )

**Descripción**: Muestra un diccionario conteniendo todo el entorno de configuración de FreeCAD.

**Devuelve**:

![](/images/Method.png) **ConfigGet** ( *[string]* )

**Descripción**: Devuelve el valor de una clave dada. Si no se indica la clave, devuelve la configuración completa.

**Devuelve**: Una cadena de texto.

![](/images/Method.png) **ConfigSet** ( *string, string* )

**Descripción**: Establece la clave dada (primera cadena de texto) al valor indicado (segunda cadena de texto).

**Devuelve**:

![](/images/Method.png) **Version** (  )

**Descripción**: Muestra la versión de FreeCAD.

**Devuelve**:

![](/images/Method.png) **activeDocument** (  )

**Descripción**:

**Devuelve**: Devuelve el documento activo o Nada si no hay ningún documento activo.

![](/images/Method.png) **addExportType** ( *string, string* )

**Descripción**: Añade un nuevo tipo de formato de archivo de exportación a FreeCAD. La primera cadena de texto debe estar formada como en este ejemplo: "Documento de Word (\*.doc)". La segunda cadena es el nombre de un archivo de guión / módulo de Python conteniendo una función export().

**Devuelve**:

![](/images/Method.png) **addImportType** ( *string, string* )

**Descripción**: Añade un nuevo tipo de formato de archivo de importación a FreeCAD, funciona del mismo modo que addExportType, el módulo de Python debe contener una función open() y/o import().

**Devuelve**:

![](/images/Method.png) **closeDocument** ( *Document name* )

**Descripción**: Cierra el documento indicado

**Devuelve**:

![](/images/Method.png) **getDocument** ( *Document name* )

**Descripción**: Devuelve un documento o eleva una excepción si no existe un documento con el nombre indicado.

**Devuelve**:

![](/images/Method.png) **getExportType** ( *string* )

**Descripción**: Devuelve el nombre del módulo que puede exportar el tipo de archivo especificado.

**Devuelve**: Una cadena de texto.

![](/images/Method.png) **getImportType** ( *string* )

**Descripción**: Devuelve el nombre del módulo que puede exportar el tipo de archivo especificado.

**Devuelve**: Una cadena de texto.

![](/images/Method.png) **listDocuments** (  )

**Descripción**: Devuelve una lista de nombres de todos los documentos.

**Devuelve**: Una lista de nombres.

![](/images/Method.png) **newDocument** ( *[string]* )

**Descripción**: Crea y devuelve un nuevo documento con el nombre indicado. El nombre del documento debe ser único, lo que se comprueba de forma automática. Si no se indica ningún nombre, el documento se llamará "Untitled". Si se pasa hidden=True, entonces FreeCAD en modo GUI no mostrará el documento y no mostrará una pestaña para el documento; esto permite realizar operaciones automáticas en un documento y cerrarlo sin interrumpir la interfaz de usuario.

**Devuelve**: El nuevo documento creado.

![](/images/Method.png) **open** ( *string* )

**Descripción**: Ver openDocument

**Devuelve**:

![](/images/Method.png) **openDocument** ( *filepath, [hidden]* )

**Descripción**: Crea y devuelve un documento y carga un archivo de proyecto dentro del documento. La cadena de texto del argumento debe apuntar a un archivo existente. Si no existe el archivo o si no puede cargarse se lanza una excepción I/O. En este caso el documento creado se guarda, pero estará vacío. Si se pasa hidden=True, entonces FreeCAD en modo GUI no mostrará el documento y no mostrará una pestaña para el documento; esto permite realizar operaciones automáticas en un documento y cerrarlo sin interrumpir la interfaz de usuario.

**Devuelve**: El documento de FreeCAD abierto.

![](/images/Method.png) **setActiveDocument** ( *Document name* )

**Descripción**: Establece el documento activo por su nombre.

**Devuelve**:

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_API/es&oldid=1317854>"