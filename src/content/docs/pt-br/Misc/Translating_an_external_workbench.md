---
title: Traduzindo uma bancada externa
---
Nas notas a seguir, `"contexto"` deve ser o nome do seu addon ou bancada (workbench), por exemplo, `"MeuSuperAddon"` ou `"DraftPlus"`, ou qualquer outro. A capitalização importa aqui: `"Contexto"` não é o mesmo que `"contexto"`, por exemplo. O contexto faz com que todas as traduções do seu código sejam agrupadas sob o mesmo nome, para serem mais facilmente identificadas pelos tradutores. Ou seja, eles saberão exatamente a qual addon ou bancada uma determinada string pertence.

**Observação**: Aqui está um script completo que automatiza todo o procedimento mencionado abaixo (ainda é recomendável ler o procedimento para saber o que o script deve fazer, no entanto): <https://github.com/yorikvanhavre/BIM_Workbench/blob/master/utils/updateTranslations.py>

## Preparando os códigos fonte

### Geral

* Adicione uma pasta `translations/`. Você pode nomeá-la de outra forma, mas isso será mais fácil, pois é o padrão em todo o FreeCAD. Nessa pasta, você colocará os arquivos `.ts` (arquivos "fonte" de tradução) e os arquivos `.qm` (arquivos de tradução compilados).
* Apenas o texto que é exibido ao usuário na interface do FreeCAD deve ser traduzido. Textos que são exibidos apenas no console do Python não devem ser traduzidos.
* Textos que são impressos no `FreeCAD.Console` são exibidos no painel "Ver relatório" e, portanto, devem ser traduzidos. O "Ver relatório" é diferente do console do Python.

### Em todo arquivo Python .py

* Em cada arquivo onde você precisar traduzir textos, será necessária uma função `translate()` definida. Ela deve ser nomeada exatamente como `translate`: o extrator de strings depende desse nome exato. Você pode usar o nome totalmente qualificado do Qt, mas é um pouco mais organizado usar:

:   ```
    import FreeCAD
    translate = FreeCAD.Qt.translate

    ```

* Todo texto que precisa ser traduzido deve ser passado pela função `translate()`:

:   ```
    print("My text")

    ```

:   deve ser:

:   ```
    print(translate("context", "My text"))

    ```

:   Esteja ciente de que `translate()` não é apenas uma função normal: ela também serve como uma "etiqueta" para a ferramenta de processamento de texto `lupdate`, portanto, deve ser nomeada exatamente como "translate". O programa `lupdate` é um processador de texto simples e não executa seu código. Você deve passar literais de string diretamente para a função `translate()`: não é possível passar variáveis, constantes, etc. Por exemplo:

:   ```
    # This works:
    FreeCAD.Console.PrintMessage(translate("context", "My text") + "\n")

    # This does not, lupdate only sees the word "a_variable", and doesn't know what that is:
    a_variable = "My text"
    FreeCAD.Console.PrintMessage(translate("context", a_variable ) + "\n")

    # But this works -- a_variable will contain the translated string:
    a_variable = translate("context", "My text")
    FreeCAD.Console.PrintMessage(a_variable  + "\n")

    ```

Isso pode ser usado em qualquer lugar: em `print()`, em `FreeCAD.Console.PrintMessage()`, em diálogos Qt, etc. As funções `FreeCAD.Console` não adicionam automaticamente o caractere de nova linha (`\n`), então ele deve ser adicionado ao final, se desejado. Esse caractere também não precisa de tradução, então ele pode estar fora da função de tradução:

:   ```
    FreeCAD.Console.PrintMessage(translate("context", "My text") + "\n")

    ```

* Se você estiver usando arquivos `.ui` criados com o QtDesigner, nada de especial precisa ser feito com eles.
* Ao criar novos objetos, não traduza o "Nome" do objeto. Em vez disso, traduza o "Rótulo" do objeto. A diferença é que um "Nome" é único; ele permanece o mesmo durante toda a vida do objeto; por outro lado, um "Rótulo" pode ser alterado pelo usuário conforme desejado.
* Ao criar propriedades para seus objetos, não traduza o nome da propriedade. Mas coloque a descrição dentro de `QT_TRANSLATE_NOOP`:

:   ```
    obj.addProperty("App::PropertyBool", "MyProperty", "PropertyGroup", QT_TRANSLATE_NOOP("App::Property", "This is what My Property does"))

    ```

:   Não use seu próprio `"contexto"` neste caso específico. Mantenha `"App::Property"`.

### Em InitGui.py

* Adicione a seguinte linha no início do arquivo:

:   ```
    def QT_TRANSLATE_NOOP(context, text):
        return text

    ```

:   A macro `QT_TRANSLATE_NOOP` não faz nada, mas marca textos para serem capturados pela ferramenta `lupdate` posteriormente. Nós a usamos apenas em casos especiais em que o FreeCAD cuida de tudo automaticamente.

* Para traduzir nomes de menus e barras de ferramentas, use a palavra `"Workbench"` como contexto:

:   ```
    self.appendMenu(QT_TRANSLATE_NOOP("Workbench", "My menu"), [list of commands, ...])
    self.appendToolbar(QT_TRANSLATE_NOOP("Workbench", "My toolbar"), [list of commands, ...])

    ```

* Adicione o caminho para a sua pasta `translations/` e atualize o local na função initializada:

:   ```
    FreeCADGui.addLanguagePath("/path/to/translations")
    FreeCADGui.updateLocale()

    ```

:   O arquivo `InitGui.py` não possui o atributo **file**, então não é fácil encontrar a localização relativa da pasta de traduções. Uma maneira simples de contornar isso é fazê-lo importar outro arquivo da mesma pasta e, nesse arquivo, fazer:

:   ```
    FreeCADGui.addLanguagePath(os.path.join(os.path.dirname(__file__), "translations"))
    FreeCADGui.updateLocale()

    ```

### Dentro de cada classe de comando do FreeCAD

* Adicione a seguinte linha no início do arquivo:

:   ```
    def QT_TRANSLATE_NOOP(context, text):
        return text

    ```

* Traduza o `'MenuText'` e o `'Tooltip'` do comando desta forma:

:   ```
    def GetResources(self):
        return {'Pixmap'  : "path/to/icon.svg"),
                'MenuText': QT_TRANSLATE_NOOP("CommandName", "My Command"),
                'ToolTip' : QT_TRANSLATE_NOOP("CommandName", "Describes what the command does"),
                'Accel'   : "Shift+A"
        }

    ```

:   onde `"CommandName"` é o nome do comando, definido por:

:   ```
    FreeCADGui.addCommand('CommandName', My_Command_Class())

    ```

## Coletar todas as strings do seu módulo

* Você precisará das ferramentas `lupdate`, `lconvert`, `lrelease` e `pylupdate` instaladas em seu sistema. Em distribuições Linux, elas geralmente vêm em pacotes chamados `pyside-tools` ou `pyside2-tools`. Em alguns sistemas, `lupdate` é chamado de `lupdate4` ou `lupdate5` ou `lupdate-qt4` ou similar. O mesmo vale para as outras ferramentas. Você pode usar a versão Qt4 ou Qt5 à sua escolha. No Qt6, não há um sistema de tradução separado para arquivos Python, `lupdate` é usado para extrair strings de todos os tipos de arquivos de código-fonte.
* Se você tiver arquivos `.ui`, precisará executar o `lupdate` primeiro:

:   ```
    lupdate *.ui -ts translations/uifiles.ts

    ```

:   This is recursive and will find `.ui` files inside your whole directory structure.

* If you have `.py` files, you need to run `pylupdate` too:

:   ```
    pylupdate *.py -ts translations/pyfiles.ts

    ```

* If you ran both operations, you now need to unify these two files into one:

:   ```
    lconvert -i translations/uifiles.ts translations/pyfiles.ts -o translations/MyModule.ts

    ```

* Check the contents of the three `.ts` files to make sure that they contain the strings, then you can delete both `pyfiles.ts` and `uifiles.ts`.
* You can do it all in one bash script like this:

:   ```
    #!/bin/sh
    lupdate *.ui -ts translations/uifiles.ts
    pylupdate *.py -ts translations/pyfiles.ts
    lconvert -i translations/uifiles.ts translations/pyfiles.ts -o translations/MyModule.ts
    rm translations/pyfiles.ts
    rm translations/uifiles.ts

    ```

## Send the .ts file to a translation platform

It is time to have your `.ts` file translated. You can choose to set up an account on a public translation platform such as [Crowdin](https://crowdin.com/) or [Transifex](https://www.transifex.com/), or you can benefit from our existing [FreeCAD-addons account at Crowdin](https://crowdin.com/project/freecad-addons), which has many users already, and therefore more chance to have your file translated quickly and by people who know FreeCAD.

If you wish to host your file on the FreeCAD Crowdin account, get in touch with [Yorik](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=68) on the [FreeCAD forum](https://forum.freecadweb.org/).

*Note:* some platforms like Crowdin can integrate with GitHub and do all the process from points 2, 3 and 4 automatically. For that, you can't use the FreeCAD Crowdin account; you will need to set up your own account.

## Merge the translations

Once your `.ts` file has been translated, even if partially, you can download the translations from the site:

* You will usually download a `.zip` file containing one `.ts` per language
* Place all the translated `.ts` files, together with your base `.ts` file, in the `translations/` folder

## Compile the translations

Now run the `lrelease` program on each file that you have:

```
lrelease "translations/Draft_de.ts"
lrelease "translations/Draft_fr.ts"
lrelease "translations/Draft_pt-BR.ts"

```

You can automate the process:

```
for f in translations/*_*.ts
do
    lrelease "translations/$f"
done

```

You should find one `.qm` file for each translated `.ts` file. The `.qm` files is what will be used by Qt and FreeCAD at runtime.

That's all you need. Note that certain parts of your workbench cannot be translated on-the-fly if you decide to switch languages. If this is the case, you will need to restart FreeCAD for the new language to take effect.

## Testing translations

1. Switch FreeCAD to a language you have translated (for example German)
2. Load translation into FreeCAD, ex. `FreeCADGui.addTranslationPath("/path/to/the/folder/containing/qmfile")`
3. Test something, for example `FreeCAD.Qt.translate("your context","some string")`

Result: This should give you the German translation. If this works, then the basic setup is OK. Then we can look at something else. For example, command names should always use a special context that is the name of the command as registered to FreeCAD.

### Important notes

* Make sure you are using a \*context\* and \*string\* that actually are in the ts/qm file of course.

## Convenience script

Yorik maintains a convenience script for the BIM workbench, that can gather, upload and download ts files.
You can just copy and adapt that script for your workbench:

<https://github.com/yorikvanhavre/BIM_Workbench/blob/master/utils/updateTranslations.py>

## Technical details and advanced usage

In the above examples there are two separate functions being used: `translate()` and `QT_TRANSLATE_NOOP`. You may also run across `tr()` and `QT_TR_NOOP`, which automatically provide the "context" argument based on their calling location. These two pairs of functions are fundamentally different.

`translate()` and `tr()` accomplish two separate tasks: at runtime they perform the actual translation from the string passed into them to the final translated string. This is true whether they are provided a literal string, or a variable, or a constant: the lookup is dynamic and real-time during the run of the code. However, they provide an additional non-runtime function: they are recognized by the `pylupdate` utility. If (and only if) they contain a string literal, that literal is extracted by the utility. ONLY string literals are extracted by `pylupdate` -- if a variable is passed it is ignored by the `pylupdate` utility. Qt will attempt to provide a translation at runtime, but this will only work if some other piece of code called one of the translation functions with the literal string that needs to be translated, so that `pylupdate` can extract it. Note that the code with the string literal need not actually ever execute, it must simply exist as a line of code in a file somewhere: `pylupdate` performs no analysis or code execution, it is simply performing a string search and extraction.

In contrast, `QT_TRANSLATE_NOOP` and `QT_TR_NOOP` do nothing at all at runtime: they are literal "no-ops", and are completely ignored by running code. Their only use is to mark a literal string for extraction by `pylupdate`: it never makes sense to place a variable within a call to one of these functions, it will have no effect. They are used in circumstances where `translate()` or `tr()` will be called with a variable containing the text to translate. For example, any code that is used to create a Command or a Property will use a NOOP-type function around the command menu text or tooltip, or the property docstring: at runtime when FreeCAD displays these items to the user it calls `translate()`: the literal strings must have been extracted by `pylupdate` at the point of creation, for example:

```
def GetResources(self):
    return {'Pixmap'  : "path/to/icon.svg",
            'MenuText': QT_TRANSLATE_NOOP("CommandName", "My Command"),
            'ToolTip' : QT_TRANSLATE_NOOP("CommandName", "Describes what the command does"),
            'Accel'   : "Shift+A"
    }

```

In this usage, at runtime the dictionary returned by this function is literally:

```
{ 
    'Pixmap'  : "path/to/icon.svg",
    'MenuText': "My Command",
    'ToolTip' : "Describes what the command does",
    'Accel'   : "Shift+A"
}

```

There is no reference to any type of translation information. When FreeCAD actually displays this information to the user, the pseudo-code is:

```
for command in commands:
    resources = command.GetResources()
    menu_text = translate(resources['MenuText'])

```

In this case, `lupdate` cannot extract any string from the call to `translate()` because it refers to a variable. So `lupdate` ignores that call, but at runtime Qt searches for the string that's passed to it. As long as someplace in the code there is a call to one of the translation functions with a matching literal string (in this case, in the `GetResources()` function), this translation call will succeed.

To verify that the expected strings are being extracted, you can manually run the `pylupdate` command:

```
pylupdate myfile.py -ts outfile.ts

```

The file `outfile.ts` will contain the set of strings that are uploaded to CrowdIn for translation.

## Important references

* Why and how to translate `openCommand()` functions ([forum thread](https://forum.freecadweb.org/viewtopic.php?f=10&t=55869))

## Related Pages

* [External Workbenches](/External_Workbenches "External Workbenches")
* [Localisation](/Localisation "Localisation")
* For more information make your requests here: [Translating external workbenches](https://forum.freecadweb.org/viewtopic.php?f=10&t=36413).

Retrieved from "<http://wiki.freecad.org/index.php?title=Translating_an_external_workbench/pt-br&oldid=1548469>"