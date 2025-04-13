---
title: FreeCADの組み込み
---
## 概要

モジュールやその他の部分を含むFreeCAD一式を、他のプログラムやスタンドアローンのPythonコンソールから、[Python](/Python/ja "Python/ja")モジュールとしてインポートすることができます。多少の制約はありますが、FreeCADのユーザーインタフェースをPythonモジュールとしてインポートすることさえできます。

## GUIなしでFreeCADを利用

最も直接的で簡単かつ便利な応用は、FreeCADドキュメントファイルをあなたのプログラムにインポートすることです。以下の例では、FreeCADドキュメントのパート（Part）ジオメトリーを[blender](http://www.blender.org)にインポートします。以下がその完全なスクリプトです。そのシンプルさに驚くことでしょう。

```
FREECADPATH = '/usr/lib/freecad-python3/lib/' # path to your FreeCAD.so or FreeCAD.pyd file,
# for Windows you must either use \\ or / in the path, using a single \ is problematic
# FREECADPATH = 'C:\\FreeCAD\\bin'
import Blender, sys
sys.path.append(FREECADPATH)
 
def import_fcstd(filename):
   try:
       import FreeCAD
   except ValueError:
       Blender.Draw.PupMenu('Error%t|FreeCAD library not found. Please check the FREECADPATH variable in the import script is correct')
   else:
       scene = Blender.Scene.GetCurrent()
       import Part
       doc = FreeCAD.open(filename)
       objects = doc.Objects
       for ob in objects:
           if ob.Type[:4] == 'Part':
               shape = ob.Shape
               if shape.Faces:
                   mesh = Blender.Mesh.New()
                   rawdata = shape.tessellate(1)
                   for v in rawdata[0]:
                       mesh.verts.append((v.x,v.y,v.z))
                   for f in rawdata[1]:
                       mesh.faces.append.append(f)
                   scene.objects.new(mesh,ob.Name)
       Blender.Redraw()

def main():
   Blender.Window.FileSelector(import_fcstd, 'IMPORT FCSTD', 
                        Blender.sys.makename(ext='.fcstd'))    
 
# This lets you import the script without running it
if __name__=='__main__':
   main()

```

最初に、PythonがきちんとFreeCADライブラリを見つけ出せているかの確認が重要です。それが済めば、今回使用するパート（Part）モジュールを含む全てのFreeCADモジュールを自動的に利用できるようになります。そこで、Pythonがモジュールを検索するパスを保持する`sys.path`変数にFreeCADのライブラリのパスを追加します。この変更は一時的なもので、Pythonインタプリタの終了時に消えます。FreeCADライブラリへのリンクを、Pythonの検索パスにあるディレクトリのいずれかの中に作成する方法もあります。スクリプトの利用者が自身の環境に合わせて簡単に設定できるよう、以下の例ではFreeCADライブラリのパスを`FREECADPATH`という定数に格納しました。Windowsユーザーの場合は、単独の`\`はエスケープ文字として解釈されてしまうため、パスの区切り文字として`\\`または`/`を使用なければならないことに注意してください。

```
FREECADPATH = 'C:\\FreeCAD\\bin' # path to your FreeCAD.so or FreeCAD.pyd file
import sys
sys.path.append(FREECADPATH)

```

いったんライブラリのロード（`try`/`except部分`）が終われば、FreeCADを使って作業を行うことができます。やり方は、FreeCADの内部Pythonコンソールを使う時と同じです。まず`main()`関数をから渡されたFreeCADドキュメントを開き、その中のオブジェクトのリストを作成します。次に、いま関心を持っているパート（Part）ジオメトリーだけを選び出すために、各オブジェクトのTypeプロパティに「`Part`」が入っているかどうかを確認し、該当するオブジェクトをテセレーション（ポリゴンメッシュ化処理）します。

```
import Part
       doc = FreeCAD.open(filename)
       objects = doc.Objects
       for ob in objects:
           if ob.Type[:4] == 'Part':

```

テセレーション（ポリゴンメッシュ化処理）の結果、頂点のリストと、頂点をインデックスとして定義された面のリストが作成されます。これはBlenderのメッシュの定義方法と全く同じなので、これで全てです。後の作業は驚くほど簡単です。生成された2つのリストの内容をBlenderメッシュの頂点（verts）と面（faces）にそのまま追加するだけです。すべての処理が完了したら、画面を再描画して終わりです！

```
if ob.Type[:4] == 'Part':
               shape = ob.Shape
               if shape.Faces:
                   mesh = Blender.Mesh.New()
                   rawdata = shape.tessellate(1)
                   for v in rawdata[0]:
                       mesh.verts.append((v.x,v.y,v.z))
                   for f in rawdata[1]:
                       mesh.faces.append.append(f)
                   scene.objects.new(mesh,ob.Name)
       Blender.Redraw()

```

もちろんこのスクリプトは非常に簡単なものなので（実を言うともっと高度な[FreeCADからBlenderへのインポート機能](https://yorik.uncreated.net/archive/scripts/blender24/import_freecad.py)を作ってあります）、いろいろと拡張したくなるかもしれません。例えばメッシュオブジェクトのインポート、面の無いPartジオメトリーのインポート、FreeCADで読める他のファイルフォーマットのインポートといったものが考えられます。また、ジオメトリーをFreeCADドキュメントとしてエクスポートすることも可能です。同様の方法で実装できますし、ダイアログを用意して、ユーザーがインポート対象を選択できるようにすることも考えられます。これらすべてに共通する魅力は、FreeCADに基礎的な処理を任せつつ、その結果をあなたが選んだプログラム内で活用できる点にあります。

*注意：* GUIを使わないでFreeCADを動作させる方法の詳細について、[ヘッドレスFreeCAD](/Headless_FreeCAD/ja "Headless FreeCAD/ja")も参照してください。

## GUIありでFreeCADを使用

バージョン4.2からQtには興味深い機能が追加されました。Qt-GUI依存のプラグインを非Qtなホストアプリケーションに埋め込み、ホスト側のイベントループを共有できるようになったのです。

特にFreeCADについて言えば、これは別のアプリケーション内から全体のユーザーインターフェイスごとFreeCADをインポートでき、ホストアプリケーションがFreeCADを完全に制御できるということを意味します。

これを行うためのPythonコードは全部でたったの2行です。

```
import FreeCADGui 
FreeCADGui.showMainWindow()

```

もしホストアプリケーションがQtベースであればこの方法はQtがサポートされている全てのプラットフォームで動作します。ただしホスト側はFreeCADと同じバージョンのQtとリンクされている必要があります。さもないと予期しない実行時エラーが起きる可能性があります。

非Qtなアプリケーションでも知っておく必要のある制約はごくわずかです。この方法は恐らく他のツールキットと一緒に使っても動作しません。
Windowsの場合、ホストアプリケーションはWin32を直接使用しているかwxWidgets、MFC、WinFormなど内部でWin32APIを使用しているツールキットを使用していなければなりません。X11下で動作するためにはホストアプリケーションは"glib"ライブラリをリンクしている必要があります。

またコンソールアプリケーションではこの方法は使えないことに注意してください。なぜならイベントループ実行が存在しないからです。

## 注意事項

FreeCADを外部のPythonインタプリタにインポートすることは可能ですが、これは一般的な使用方法ではなく注意が必要です。通常は、FreeCADに同梱されているPythonを使用するか、コマンドラインからFreeCADを実行するか、サブプロセスとして実行するのがよいでしょう。 最後の2つの方法の詳細については、[起動方法と設定](/Start_up_and_Configuration/ja "Start up and Configuration/ja")を参照してください。

FreeCADは（純粋なPythonモジュールではなく）C++を使ったモジュールのため、互換性のあるPythonインタプリターでのみ動作します。一般的に、FreeCADをコンパイルしたC++コンパイラーと同じコンパイラーでPythonインタプリターがコンパイルされている必要があります。コンパイラーの情報は、Pythonインタプリターで（FreeCAD組み込みのインタプリターでも）以下の方法で確認できます。

```
>>> import sys
>>> sys.version
'2.7.13 (default, Dec 17 2016, 23:03:43) \n[GCC 4.2.1 Compatible Apple LLVM 8.0.0 (clang-800.0.42.1)]'

```

## 関連情報

* [ヘッドレスFreeCAD](/Headless_FreeCAD/ja "Headless FreeCAD/ja")

Retrieved from "<http://wiki.freecad.org/index.php?title=Embedding_FreeCAD/ja&oldid=1544081>"