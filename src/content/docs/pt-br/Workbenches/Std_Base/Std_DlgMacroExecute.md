---
title: Caixa de Diálogo para Execução de Macro (Std DlgMacroExecute)
---
|  |
| --- |
| Std DlgMacroExecute |
| Menu location |
| Macro → Macros... |
| Workbenches |
| Todos |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Std DlgMacroExecuteDirect](/index.php?title=Std_DlgMacroExecuteDirect/pt-br&action=edit&redlink=1 "Std DlgMacroExecuteDirect/pt-br (page does not exist)") |
|  |

## Descrição

O comando **Std DlgMacroExecute** abre a caixa de diálogo Executar macro. A partir dessa caixa de diálogo, as macros podem ser executadas, editadas e gerenciadas.

![](/images/Std_DlgMacroExecute_dialog.png)

A caixa de diálogo Executar macro

## Utilização

1. Existem várias maneiras de invocar o comando:
   * Pressione o ![](/images/Std_DlgMacroExecute.svg) Macros....
   * Selecione a opção **Macro → ![](/images/Std_DlgMacroExecute.svg) Macros...** no menu.
2. A caixa de diálogo **Executar macro** será aberta. Veja [Opções](#Options/pt-br).

## Opções

### Encontrar arquivo / Encontrar em arquivos

[introduzido na versão 1.0](/Release_notes_1.0 "Release notes 1.0")

:   Essas duas caixas de entrada podem ser usadas para filtrar macros na lista de arquivos na aba **Macros do Usuário** ou na aba **Macros do Sistema**. Você pode usar expressões regulares ou simplesmente inserir texto. Todas as correspondências não são sensíveis a maiúsculas e minúsculas.

:   **Encontrar arquivo** filtra a lista pelo nome do arquivo. Apenas os nomes de arquivos que correspondem ao texto inserido aparecerão na lista. **Encontrar em arquivos** filtra a lista pelo conteúdo do arquivo. Apenas os arquivos cujo conteúdo de texto corresponda ao texto inserido aparecerão na lista.

:   Remova todo o texto da caixa de entrada de um filtro para desativá-lo. Se ambas as caixas de entrada contiverem texto, ambos os filtros serão aplicados. A filtragem pode resultar em uma lista vazia.

### Macros do Usuário

:   A aba **Macros do Usuário** lista as macros disponíveis no **Local de macros do usuário**.

1. Clique em uma macro na lista para selecioná-la.
2. O nome da macro selecionada aparecerá na caixa **Nome da macro**.

### Macros do Sistema

:   Para utilizar a aba **Macros do Sistema**, você deve criar uma pasta chamada Macro como uma pasta irmã da pasta bin onde o FreeCAD está instalado e colocar algumas macros lá.

:   Para encontrar a pasta bin, digite o seguinte na [Console do Python](/Python_console/pt-br "Python console/pt-br"):

:   ```
    App.getHomePath()

    ```

1. Clique em uma macro na lista para selecioná-la.
2. O nome da macro selecionada aparecerá na caixa **Nome da macro**.

### Local de macros do usuário

1. Pressione o botão ... para alterar o local das macros do usuário.
2. Navegue até uma pasta diferente e selecione-a.

### Executar

1. Para executar uma macro, faça uma das seguintes ações:
   * Selecione a macro na lista e pressione o botão Executar.
   * Dê um duplo clique na macro na lista.
2. A caixa de diálogo será fechada.
3. A macro será executada.

### Fechar

1. Pressione Esc ou o botão Fechar para fechar a caixa de diálogo.

### Criar

1. Pressione o botão Criar para criar um novo arquivo de macro.
2. Digite um nome na caixa de diálogo que aparecer. Você não precisa incluir a extensão .FCMacro.
3. Pressione Enter ou o botão OK.
4. Ambas as caixas de diálogo serão fechadas.
5. O novo arquivo será aberto no editor de macros.

### Excluir

1. Selecione a macro que você deseja excluir na lista.
2. Pressione o botão Excluir.
3. Pressione o botão Sim na caixa de diálogo de confirmação que aparecer.

### Editar

1. Selecione a macro que você deseja editar na lista.
2. Pressione o botão Editar.
3. A caixa de diálogo será fechada.
4. O arquivo selecionado será aberto no editor de macros.

### Renomear

1. Selecione a macro que você deseja renomear na lista.
2. Pressione o botão Renomear.
3. Digite um novo nome na caixa de diálogo que aparecer. Você não precisa incluir a extensão .FCMacro.
4. Pressione Enter ou o botão OK.

### Duplicar

1. Selecione a macro que você deseja duplicar na lista.
2. Pressione o botão Duplicar.
3. Digite um novo nome na caixa de diálogo que aparecer. Você não precisa incluir a extensão .FCMacro.
4. Pressione Enter ou o botão OK.

### Barra de ferramentas

1. Selecione a macro que você deseja adicionar a uma barra de ferramentas personalizada na lista.
2. Pressione o botão Barra de ferramentas.
3. Duas caixas de diálogo 'guias' irão orientá-lo pelos passos necessários. Consulte [Personalização da Interface](/Interface_Customization/pt-br "Interface Customization/pt-br") para mais informações.

### Baixar(Download)

1. Pressione o botão Baixar para iniciar o [Gerenciador de Complementos](/Std_AddonMgr/pt-br "Std AddonMgr/pt-br").

## Notas

* Para saber mais sobre macros, veja a página [Macros](/Macros/pt-br "Macros/pt-br").

## Preferências

Veja também: [Editor de Preferências](/Preferences_Editor/pt-br "Preferences Editor/pt-br").

* O local das macros do usuário também pode ser alterado nas preferências: **Editar → Preferências... → Python → Macro → Caminho da macro**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DlgMacroExecute/pt-br&oldid=1514808>"