---
title: Source code management
---
## Introduction

The main source code management tool for the FreeCAD project is [Git](http://en.wikipedia.org/wiki/Git_%28software%29), which can be easily installed in most operating systems from a package manager or directly from [Git's website](https://git-scm.com/). You are advised to become familiar with Git before working with the FreeCAD source code directly. Visit the [Git documentation](https://git-scm.com/doc) page for the reference manual, as well as the [Pro Git book](https://git-scm.com/book/en/v2) to learn to use the system in a general way. The present document focuses on the use of Git for FreeCAD development. Compiling FreeCAD is described in [Compiling](/Compiling "Compiling").

While Git is primarily a terminal application, there are many graphical clients for it which facilitate working with branches, applying patches, and submitting pull requests to a main branch. Examples include [gitk](https://git-scm.com/docs/gitk) (the first graphical interface developed), [gitg](https://wiki.gnome.org/Apps/Gitg/) (Gnome), [qgit](https://github.com/tibirna/qgit) (Qt), [tig](https://jonas.github.io/tig/) (Ncurses), [git-cola](http://github.com/git-cola/git-cola), and [GitKraken](https://www.gitkraken.com/) (proprietary). Please see [Developing FreeCAD with GitKraken](/Developing_FreeCAD_with_GitKraken "Developing FreeCAD with GitKraken") for a cursory introduction to this tool.

Note: if any of this is starting to make you dizzy, there is a very good non-technical series on how to use git and Github called '[Git and Github for Poets](https://youtu.be/BCQHnlnPusY)'

## Source code access

Everybody can access and get a copy of the FreeCAD source code, but only the FreeCAD project managers have write access to it. You can get a copy of the code, study it and modify it as you wish, but if you want your changes to be included in the official source code, you need to perform a "pull request" against the main repository so that your modifications can be reviewed by the managers. This style of development is known as the [Dictator and lieutenants workflow](https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows), as the core developers (dictators) and trusted developers (lieutenants) filter the code that is submitted by independent developers and users.

If your source code changes are significant, you are advised to explain them in the pull request section of the [FreeCAD forum](http://forum.freecadweb.org/viewforum.php?f=17).

![](/images/FreeCAD_git_workflow.svg)

Generic workflow to develop code for FreeCAD; everybody can get the code from the main repository, but the main developers have the exclusive right to review and merge submissions by other developers.

### Official GitHub repository

The FreeCAD source code is hosted on Github, `https://github.com/FreeCAD/FreeCAD`

In order to contribute code, you need to have a [GitHub account](https://github.com/join).

In the past, the source code was hosted as an SVN repository, `https://free-cad.svn.sourceforge.net/svnroot/free-cad`. This was moved to GitHub on 2011 October 10th, with [commit 120ca87015](https://github.com/FreeCAD/FreeCAD/commit/120ca87015).

:   Therefore, there are many changes that were made before this time which are not recorded in the modern Git commit history. Read more about this on the [History](/History "History") page.

### Setting your Git username

### Configurando tu nombre de usuario en Git

Los usuarios deberían enviar a sus repositorios de proyecto utilizando sus nombres de usuario de SourceForge.net. Si no está definido globalmente, lo puedes definir localmente para el repositorio de Gir actual así:

```
git config user.name "YOUR_NAME"
git config user.email GITHUB_USERNAME@users.noreply.github.com

```

Where `"YOUR_NAME"` represents your full name or nickname, used to identify the author of a particular commit, and `GITHUB_USERNAME` indicates the name of your account on GitHub.

### Remote repositories

Please read [What is the difference between origin and upstream on GitHub?](https://stackoverflow.com/questions/9257533/what-is-the-difference-between-origin-and-upstream-on-github#9257901) (Stackoverflow) to help you understand the difference between `origin` and `upstream` in the context of Git. This section explains how to set the correct repositories for development.
Essentially:

* `origin` is your personal fork of the official FreeCAD repository, that is, `https://github.com/GITHUB_USERNAME/FreeCAD`
* `upstream` is the official FreeCAD repository, that is, `https://github.com/FreeCAD/FreeCAD`

This distinction is important, as you should write code in your own copy of the repository first, before pushing those changes to the official repository.

Based on the above, there are two ways to setup your Git development environment:

* 1st Method: fork on GitHub and clone your fork locally
* 2nd Method: clone FreeCAD directly to your local machine, and adjust the remote servers

We recommend the 1st method because it's one step faster.

#### 1st Method: Fork on GitHub and clone your fork locally

First you will fork the FreeCAD repository in GitHub, then clone this personal fork to your computer, and finally set the `upstream` repository.

* [Log in](https://github.com/join) to your GitHub account.
* Go to the official FreeCAD repository: `https://github.com/FreeCAD/FreeCAD`
* In the top right of the page press the "Fork" button. This will create a personal copy of the FreeCAD repository under your GitHub username: `https://github.com/GITHUB_USERNAME/FreeCAD`
* On your machine, clone your newly created FreeCAD fork. It will be created inside a directory `freecad-source`.

```
git clone https://github.com/GITHUB_USERNAME/FreeCAD.git freecad-source

```

* Once the download is complete, enter the new source directory and set the `upstream` repository.

```
cd  freecad-source
git remote add upstream https://github.com/FreeCAD/FreeCAD.git

```

* Confirm your remote repositories with `git remote -v`; the output should be similar to this

```
origin	https://github.com/GITHUB_USERNAME/FreeCAD.git (fetch)
origin	https://github.com/GITHUB_USERNAME/FreeCAD.git (push)
upstream	https://github.com/FreeCAD/FreeCAD.git (fetch)
upstream	https://github.com/FreeCAD/FreeCAD.git (push)

```

* Now development can begin.

#### 2nd Method: Clone FreeCAD directly to your local machine

First you will fork the FreeCAD repository in GitHub, however, you will clone the original FreeCAD repository to your local machine, and then alter your remotes via the terminal.

* [Log in](https://github.com/join) to your GitHub account.
* Go to the official FreeCAD repository: `https://github.com/FreeCAD/FreeCAD`
* In the top right of the page press the "Fork" button. This will create a personal copy of the FreeCAD repository under your GitHub username: `https://github.com/GITHUB_USERNAME/FreeCAD`
* Clone the original FreeCAD repository. It will be created inside a directory `freecad-source`.

```
git clone https://github.com/FreeCAD/FreeCAD.git freecad-source

```

* Once the download is complete, enter the new source directory and set the `origin` repository.

```
cd freecad-source
git remote add origin https://github.com/GITHUB_USERNAME/FreeCAD.git

```

* Then set up the `upstream` repository.

```
git remote add upstream https://github.com/FreeCAD/FreeCAD.git

```

* Confirm your remote repositories with `git remote -v`; the output should be similar to this

```
origin	https://github.com/GITHUB_USERNAME/FreeCAD.git (fetch)
origin	https://github.com/GITHUB_USERNAME/FreeCAD.git (push)
upstream	https://github.com/FreeCAD/FreeCAD.git (fetch)
upstream	https://github.com/FreeCAD/FreeCAD.git (push)

```

* Now development can begin.

If for some reason the remote repositories exist but point to the wrong address, you can remedy the situation by renaming the remote repository's name. For example, `origin` should point to your personal fork; if it is pointing to the original FreeCAD repository, change the name of this remote to `upstream`, and manually add the `origin` repository.

```
git remote rename origin upstream
git remote add origin https://github.com/GITHUB_USERNAME/FreeCAD.git
git remote -v

```

You can also show more information with the `show` keyword.

```
git remote show origin
git remote show upstream

```

## Git development process

## En desarrollo

Antes de nada **nunca desarrolles en el** ramal principal**! Crea un ramal local para el desarrollo.** 
Puedes aprender a hacer esto [aquí](http://book.git-scm.com/3_basic_branching_and_merging.html).

![](/images/FreeCAD_git_branches_workflow.svg)

Generic workflow to develop code for FreeCAD using `git`; the main repository is forked online and cloned to an offline computer (0); new branches (1) are used to commit local changes and additions to the code (2); the branches are rebased to the latest online code (3), and then are pushed to the remote repository (4); then a pull request is created in order to merge the code into the main repository (5). Then the personal clone is updated with the new main code (a); this updated main is also pushed to the remote repository (b) in order to have the same code both online and offline.

### Ramificado

Una importante característica de Git es que es extremadamente sencillo trabajar con ramas y fusionarlas. La mejor forma de trabajar recomienda crear una nueva rama siempre que quieras trabajar en una nueva característica. La creación de una rama se hace con:

Instead of working on the main version of the code, best practices with Git recommend creating a new branch whenever you want to work on a new feature. Branches are inexpensive, they don't copy the entire source tree, but merely create a point in time on top of which you will write code; thus branches help keep work in progress separate from the main code.

Using a new branch is done in two steps, first your create the branch, and then you switch to it:

```
git branch myNewBranch
git checkout myNewBranch

```

o, ambas operaciones en una:

```
git checkout -b myNewBranch

```

siempre puedes comprobar con que rama estas:

```
git branch
git branch -vv

```

After you've made changes and committed those changes use the `log` operation with the following options to visualize the branches

```
git log --oneline --decorate --graph --all

```

### Envío

Una vez que hagas algo de trabajo, envíalo con:

Once you are inside a new branch, edit the source files that you want with a text editor. To see which files were modified use the `status` and `diff` operations; when you are satisfied with the modifications, save the changes with the `commit` operation:

```
git status
git diff
git commit -a

```

A diferencia de SVN, tienes que especificar los archivos que quieres enviar (o todos con la opción -a). Tu editor de texto se abrirá para permitirte escribir un mensaje de envío.

Alternatively add the message in the commit itself:

```
git commit -a -m "Fix the bug in the clone function."

```

If you create new files or directories, you must use the `add` operation first to add them to the local repository before committing the changes.

```
git add path
git commit -a

```

Where `path` can be any directory or file.

### Writing good commit messages

### Escribiendo buenos mensajes de envío

Deberías tratar de trabajar en pedazos pequeños. Si no puedes resumir tus cambios en una frase, entonces posiblemente ha pasado pasado demasiado tiempo desde que hiciste un envío. También es importante que ofrezcas descripciones de tu trabajo que sean útiles y ayuden. Para los mensajes de envío, FreeCAD ha adoptado un formato mencionado en el libro Pro Git (mira [#Otras lecturas](#Otras_lecturas)).

For big changes, it is important that you have helpful and useful descriptions of your work. FreeCAD has adopted a format mentioned in the [Pro Git](https://git-scm.com/book/en/v2) book, which consists of a short message, and then a larger descriptive paragraph.

```
Resumen corto (50 caracteres o menos) de cambios

```

```
Texto de explicación más detallado, si es necesario. En unos 72 caracteres.
En algunos contextos, la primera línea es tratada como el tema
de un email y el resto del texto como el cuerpo. La línea en blanco
separando el tema del cuerpo es crítica (a menos que omitas el cuerpo por
completo); las herramientas de recálculo se pueden confundir si pones los
dos juntos.

Más párrafos van después de líneas en blanco. 

 - Las listas con viñetas también están bien

 - Tipicamente un guión o asterisco se utiliza para la viñeta, precedido 
   por un espacio en blanco, con líneas en blanco en medio, pero las 
   convenciones aquí varían

```

Si estas haciendo un montón de trabajo relacionado, se sugiere [aquí](http://forum.freecadweb.org/viewtopic.php?f=10&t=2062&p=14887#p14886) que deberías hacer tantos envíos grandes o pequeños como sea necesario para que tengan sentido en lo que estés trabajando utilizado los mensajes cortos de envío. Cuando quieras fusionarlos, haz un registro master..BRANCH y utiliza el resultado para tu mensaje de envío. Cuando fusionas con el principal utiliza la opción --squash y envía con tu mensaje de envío. Esto te permitirá ser muy liberal con tus envíos y ayudar a proporcionar un buen nivel de detalle en los mensajes de envío sin demasiadas descripciones distintas.

```
git log main..myNewBranch

```

to see the individual commit messages. Then you can write a high quality message when performing a merge.

When you merge to main use the `--squash` option and commit with your quality commit message. This will allow you to be very liberal with your commits and help to provide a good level of detail in commit messages without so many distinct descriptions.

### Squashing commits

Squashing refers to the process of combining various consecutive commits into one. This may be desirable if you made many small commits that you want to present as a single commit, for example, when changing a single variable, correcting spelling mistakes, and adjusting the spacing of the code. You should squash only small commits to a single file; big changes to the code across multiple files should contain the full commit history.

With `git log --oneline` you can see many commits in sequence, with the newest commit on top. In this example, starting from "feature A" many commits are made to implement "feature B"; we would like to squash all commits belonging to "feature B" into one.

```
871adb OK, feature B is fully implemented
1c3317 Whoops, it is not ready yet...
87871a I'm almost ready!
643d0e Code cleanup
af2581 Fix this and that
4e9baa Good implementation
d94e78 Prepare the module for feature B
6394da Feature A

```

Use the `rebase` operation with the `--interactive` or `-i` option to select various commits and squash them. Use the hash of the commit just before the first one that you want to squash, in this case the one corresponding to "feature A".

```
git rebase -i 6394da

```

(TIP: If you know how many commits you want to edit, you can use `git rebase -i HEAD~n` to work on the last `n` commits)

The command line editor, like `nano` or `vim`, will open to show you the commits again, now with the older commit on top. Before each commit, the word `pick` will be shown. Delete the word `pick`, and write the word `squash` or just the letter `s` instead, with the exception of the first entry; this commit is the oldest one, so all future commits will be squashed into it.

```
pick d94e78 Prepare the module for feature B
s 4e9baa Good implementation
s af2581 Fix this and that
s 643d0e Code cleanup
s 87871a I'm almost ready!
s 1c3317 Whoops, it is not ready yet...
s 871adb OK, feature B is fully implemented

```

Save the file and close the editor.

The editor will open up again. Now you can add a longer message that describes all changes as if they were a single commit. Save the file and close the editor once more. This will finish combining those commits into one, with the new commit message that you wrote.

You can use `git log --oneline` again to observe the new commit history. In this case only a single commit for "feature B" will appear, on top of the unmodified commit for "feature A".

```
c83d67 OK, feature B is fully implemented now, with proper module setup, and clean code.
6394da Feature A

```

When coding for FreeCAD, we ask that you begin each commit message with the module that it affects. For example, a commit message for a change to sketcher might be:

```
Sketcher: make straight lines curve a bit

Straight lines are sort of ugly, so this commit adds a little bit of curvature to them, so
they are more visually pleasing. They also sparkle some, and change colors over time.

Fixes bug #1234.

```

Your PR will be easier to review, and faster to be merged, if you are careful to use rebase to structure and describe your commits before submitting.

### Publicación de tu trabajo en el repositorio de sourceforge

Después de hacer algunos cambios en tu ramal local y enviarlos (es decir, enviarlos "localmente") puedes enviar tu repositorio al servidor. Esto abre tu ramal al público y permite que los desarrolladores principales revisen e integren tu ramal en el *principal*.

The local branches in your computer aren't automatically synchronized with the remote servers that you have specified as `origin` or `upstream` (see [Remote repositories](#Remote_repositories)); you have to explicitly push the branches to the remote servers, for which you must have write access. Once you do this, the branches become public, and available for review by other developers.

For FreeCAD, you should push your local branch to the `origin` remote repository, that is, `https://github.com/GITHUB_USERNAME/FreeCAD`. You need to enter your username and password every time you push, unless you have set up [Credential caching](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage#_credential_caching). Please read [Pushing commits to a remote repository](https://help.github.com/articles/pushing-to-a-remote/) for more information.

```
git push origin myNewBranch

```

When you work with a single branch, you may need to interactively rebase, squash, and fix commits many times. In this case, your branch history will not be simple, and you will not be able to push it to the remote repository. You may get a message like the following, saying that it is not possible to do a "fast-forward" push.

```
error: failed to push some refs to 'https://github.com/USER/FreeCAD.git'
hint: Updates were rejected because a pushed branch tip is behind its remote
hint: counterpart. Check out this branch and integrate the remote changes
hint: (e.g. 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

```

In order to finally push your branch to the remote repository you need to "force push" it. This will completely overwrite your remote branch with the actual branch that you have offline.

```
git push -f origin myNewBranch

```

The regular developer doesn't have write access to the `upstream` repository `https://github.com/FreeCAD/FreeCAD`, therefore, you should never push code to this remote server.

### Rebasing from upstream

While you work on your own branch, the official FreeCAD code keeps "moving forward" with commits from other developers, and thus starts diverging from the code that you have in your personal fork.

```
      .-----A origin/myNewBranch
     / 
-----o-----------Z FreeCAD upstream/main

```

Therefore, when you are ready to merge your branch to the main FreeCAD repository, you must "rebase" your own copy of the repository, so that it is as close as possible to the official repository. See [Git Branching - Rebasing](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) for more information.

```
git checkout myNewBranch
git pull --rebase upstream main

```

This will download the code from the `main` branch of the `upstream` repository (the official FreeCAD source), and will merge it with your current branch (`myNewBranch`), so that your changes will appear on top of the latest official code. If nobody modified the same files that you did, then the merge will succeed without problems. If some files were changed at the same time by different people, there may be a conflict that needs to be resolved.

```
                  .-----A' origin/myNewBranch
                 /
-----o-----------Z FreeCAD upstream/main

```

To summarize, you need to be in the appropriate branch, rebase the upstream code, and then proceed with the push.

```
git checkout myNewBranch
git pull --rebase upstream main
git push origin myNewBranch

```

The `pull` operation is equivalent to a `fetch` followed by a `merge`. When the `--rebase` option is used, instead of doing a simple `merge`, it runs the `rebase` operation.

```
git pull upstream

git fetch upstream
git merge FETCH_HEAD

```

```
git pull --rebase upstream main

git fetch upstream
git rebase main

```

### Merging the branch (pull request)

Once you have committed your changes locally, rebased your branch from the upstream repository, and pushed your branch online, you can initiate a "pull request". A [pull request](https://help.github.com/articles/about-pull-requests/) tells the administrators of the official FreeCAD repository that you want to merge the new code in your branch with the official code.

To recap, the development process looks like this:

1. Fork FreeCAD and get a local copy of that fork.
2. Create a branch on your fork and change to that branch.
3. Code! Commit and much or as little as you like, writing good commit messages to keep track of what you are doing.
4. When you are satisfied with your work, use `git rebase -i HEAD~n` (where n is the total number of commits you've made) to collapse your commits into a logical set with good commit messages (each message should begin with the name of the module it affects, e.g. "Sketcher: make straight lines curve a bit").
5. Use GitHub to submit your code as a "Pull Request (PR)" as described below.

As soon as you push the code to your `origin` repository `https://github.com/GITHUB_USERNAME/FreeCAD`, GitHub will give you the option of comparing and creating a pull request against the `upstream` repository. By pressing Compare & pull request you will open an interface that will allow you to pick which repository is the "base", target of the merge, and which is the "head", your additional code. A quick check will be done by the system telling you if there are no conflicts with the files that you modified; if you worked on files that nobody has touched, your branch will be able to merge cleanly.

GitHub will show you a text editor so you can write a message documenting your changes: this editor will be pre-filled with a welcome message (that you can delete), a checklist (that you should go through), and a reminder to document your change on the wiki when it's accepted. To use the checklist, go through each item in turn and change the `[ ]` to `[X]` to indicate that you've done that step. GitHub will also display the number of commits in your branch, the number of files that were modified, and a view showing you the differences between the "base" and the "head" so that everybody can immediately see your intended modifications. Double-check these for things like stray blank lines you didn't mean to add, or huge formatting changes that your IDE decided to make behind your back.

```
base repository: FreeCAD/FreeCAD    base: main  <----  head repository: GITHUB_USERNAME/FreeCAD    compare: myNewBranch

Able to merge. These branches can be automatically merged.

```

Click Create pull request to proceed. A message will appear indicating that some checks need to be done on the code. This is a system that compiles FreeCAD automatically and runs the unit tests. If the tests pass, the pull request will have a better chance of being merged into the main code, otherwise a report will be made indicating the errors encountered. See [FreeCAD pull requests](https://travis-ci.org/FreeCAD/FreeCAD/pull_requests).

```
Some checks haven’t completed yet

* continuous-integration/travis-ci/pr Pending — The Travis CI build is in progress  |Required|

```

If the tests succeed, you will see a message such as the following

All checks have passed

```
* continuous-integration/travis-ci/pr — The Travis CI build passed  |Required|

```

This branch has no conflicts with the base branch
Only those with write access to this repository can merge pull requests.

Now you must wait for the administrators to merge your branch; you will be notified when this happens.

```
Pull request successfully merged and closed

You’re all set — the GITHUB_USERNAME:myNewBranch branch can be safely deleted.
If you wish, you can also delete your fork of FreeCAD/FreeCAD.

```

If you wish, you may delete the branch that was just merged, or even your entire FreeCAD fork, as your own code is already included at the end of the main branch.

```
-----o-----------Z----A' FreeCAD upstream/main

```

*Note:* you may continue working (`git commit -a`) on the same branch while you wait for merge approval; if you `git push` again, a second merge commit will be queued in the same pull request, and another automated test will be done. That is, while your merges aren't yet approved by the administrators, you may keep pushing changes to your `origin` repository, and this will queue those commits in the same pull request to the `upstream` repository. Using a single pull request to queue many individual commits is often desirable for small changes. For big additions to the source code, you should create another branch, develop your features there, and then submit a separate pull request for this branch.

The pull request interface can be used whenever you want to submit code from your own repositories to another repository in GitHub. You can use it to merge code in the opposite direction as well, from other people's branches to your own, or even between your own branches. In the last case, since you own the branches, the merges can be approved by yourself immediately.

```
base repository: SomeProject/Some_Software  base: main       <----  head repository: GITHUB_USERNAME/Some_Software  compare: add_new_functions
base repository: GITHUB_USERNAME/FreeCAD    base: myNewBranch  <----  head repository: FreeCAD/FreeCAD                compare: main
base repository: GITHUB_USERNAME/FreeCAD    base: myNewBranch  <----  head repository: GITHUB_USERNAME/FreeCAD        compare: fix-many-bugs-branch

```

### Keeping the GitHub repository up to date

Once you've forked FreeCAD, your personal repository exists independently from the original. When the original repository has new commits, GitHub will inform you that your personal repository is behind in number of commits:

```
This branch is 5 commits behind FreeCAD:main.

```

In similar way, if you created a development branch with new code, GitHub will inform you that this branch is ahead in number of commits; that is, this branch has changes that haven't been merged into the official FreeCAD repository:

```
This branch is 3 commits ahead of FreeCAD:main.

```

While developing, both cases are possible, as your own branch may lack commits made by other developers, but include new commits by you:

```
This branch is 2 commits ahead, 14 commits behind FreeCAD:main.

```

When developing code it is recommended that you rebase the branch in which you are currently working, as that will put your branch always ahead of the FreeCAD main code.

As for your original `main` branch, it will never be automatically updated by GitHub; this is something that you must do yourself. Switch to the `main` branch, then `pull` from `upstream` (which performs a `fetch` and `merge`), and then push this updated `main` branch to your remote `origin` repository.

```
git checkout main
git pull upstream main
git push origin main

```

After this is done, GitHub will let you know that your are synchronized with the `upstream` repository.

```
This branch is even with FreeCAD:main.

```

Now that your `main` is up to date, you may decide to switch to it, and delete the other branch that you used previously to develop a feature.

```
git checkout main
git branch -d myNewBranch

```

To delete the branch in the `origin` remote repository, you can use the `push` operation. Normally, you push a local branch; this creates a remote branch with the same name as your local branch.

```
git push origin myNewBranch

```

However, if you use the notation `local_name:remote_name`, the local branch is created in the remote repository under a different name:

```
git push origin myNewBranch:someRemoteBranch

```

Therefore, you can delete the remote branch by pushing an empty local branch:

```
git push origin :myNewBranch
git push origin :someRemoteBranch

```

Now that you only have an up-to-date `main`, you can create a new branch, and repeat the steps of changing files, committing, pushing, submitting a pull request, merging, and updating.

```
git checkout main
git checkout -b anotherBranch

```

If you don't want to delete your already custom branch, you may force updating it to be equal to the updated `main`; then you can do whatever you want with it, including adding more commits and pushing it to the remote `origin` repository.

```
git checkout myNewBranch
git reset --hard main
git push -f origin myNewBranch

```

Hard resetting a branch like this is usually not needed. In most cases, you want to follow the sequence of creating a new branch, committing changes, pushing those changes, merging the branch, and then deleting the branch.

## Advanced Git operations

### Searching

Some handy tools to help you find what you're looking for:

#### Search filenames

Use `git ls-files` to search the repository for file that contains a certain string in a filename. The example below will return all instances of the files that contain the 'dxf' in their filenames.

```
git ls-files *dxf*

```

#### Search for a string

Use `git grep` to search the repository for file that contains a certain string with the files themselves. The example below will return all instances of the files that contain the 'dxf' within each and every file.

```
git grep dxf

```

### Resolving merge conflicts

Merging branches with `git merge`, or rebasing your branch with `git rebase`, will occasionally present conflicts, as files may have been modified by another author at the same time. If this happens you should see the changes of both sides, the other author's, and your own, and then make a decision on how to include both sets of changes in the best way possible. This is normally a manual process that cannot be automated; the programmer must understand the code, and decide what code to move, re-write, or drop to solve the conflict.

Once a conflict occurs, a message like this may appear.

```
CONFLICT (content): Merge conflict in src/Mod/source_code.py
error: Failed to merge in the changes.
Patch failed at 1234 Some commit message when editing source_code.py

```

If a specialized diff tool is installed and configured for Git, for example, Gnome's [Meld](https://wiki.gnome.org/Apps/Meld), the conflict can be examined and solved by using the `mergetool` operation.

```
git mergetool

```

The Meld tool normally displays three columns; the two columns on the sides display the two conflicting files, while the column on the middle displays the new code that will be saved and committed finally. Therefore, this central column should be edited in a way that it integrates the code of both side columns. Once the conflict is solved and the new source code (the central column) is saved, the Meld tool can be closed. Then the `merge` or `rebase` operation can continue.

```
git merge --continue
git rebase --continue

```

For more information on merging and solving conflicts see:

* [How merge conflicts are presented](https://git-scm.com/docs/git-merge#_how_conflicts_are_presented) with `git merge`.
* [Basic merge conflicts](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merge_conflicts) and [Git Tools - Advanced Merging](https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging).
* [Resolving a merge conflict using the command line](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/).
* [External merge and diff tools](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#_external_merge_tools) to use when you encounter a Git conflict.

### Inspect changes

Inspect the history of a single file through various commits with the `log` operation:

```
git log --patch path

```

Where `path` can be any directory or file. Instead of `--patch`, also the shorthands `-p` or `-u` can be used.

### Inspect changes between two branches

Inspect the changes between two branches with the `log` and `diff` operations with the names of the branches:

```
git log main..myBranch
git diff main..myBranch

```

The `log` operation shows the commits, while `diff` shows the actual changes in the files.

### Reset files and directories

If you accidentally made modifications to a file or directory, you may want to completely revert these changes, to get the previous state of the source code.

This can be done quickly using the `checkout` operation:

```
git checkout path
git checkout .

```

This will restore the `path` (a file or a directory) to the state it is at the tip of the branch, discarding changes that haven't been committed. If `path` is the single dot `.`, it will restore all files in the current directory.

If you have accidentally added files and directories you can use the `clean` operation:

```
git clean -df

```

This will forcefully delete all files and directories (`-df`) that are not being tracked by the repository, that is, those that have not been included previously with the `add` operation.

To completely reset the repository, losing all uncommitted modifications, use the `reset` operation:

```
git fetch
git reset --hard FETCH_HEAD

```

Where `FETCH_HEAD` is the the tip of the `upstream` repository. Another commit can also be used.

The `revert` operation also reverts changes. However, this command does this by adding another commit to the history; in many cases this is not desired.

### Pruning old branches

If you have committed many branches to the `upstream` repository, you may wish to remove these branches from your local system as they have already been merged. The branch in the `origin` repository online can be deleted immediately after merging. Then you can remove the local references to that branch, using the `--prune` or `prune` options to the `fetch` and `remote` operations.

```
git fetch --prune origin
git remote prune origin

```

Finally you can delete the branches locally

```
git branch -D myBranch

```

It is also a good practice to do garbage collection after a while, by using the `gc` operation. This will cleanup unnecessary files, and compress local file revisions, in order to optimize local disk usage of the repository.

```
git gc

```

### Working with patches

Although Git allows you to merge different branches of code with `git merge` (in your computer) or a pull request (remote repository), there are times when it may be desirable to create a traditional "patch", which can be sent as an attachment through email. The following workflow explains how to do this.

#### Creating patches

* You should be developing your new code in a secondary branch of your repository, and not in the main branch. So the first step is to make sure you are in the correct branch.

```
git branch -v
git checkout myBranch

```

* Now use `git format-patch` against the main branch, and use the `--stdout` option to redirect the result to standard output; then redirect the standard output to a file, which for convenience is created above the source code directory.

```
git format-patch main --stdout > ../myCode.patch

```

* Another method is

```
git format-patch HEAD^
git format-patch HEAD~1

```

The number of circumflex carets `^` or the number `1` indicate the number of commits that should be considered, that is, `^^^` or `~3` will create three patches for three commits.

```
git format-patch HEAD^

```

This will create a patch or series of patches with the following naming convention

```
XXXX-commit-message.patch

```

where `XXXX` is a number from `0000` to `9999`, and the commit message forms the majority of the file name, for example,

```
0001-fix-ViewProjMatrix-getProjectionMatrix.patch

```

#### Applying patches

Git can merge patches or diffs. To know more about this process read [Applying patches with Git](https://www.drupal.org/node/1399218).

If you already have the patch file in your system, just apply it.

```
git apply myCode.patch

```

You can use `curl` to download a patch from a website, and then apply it through `git`.

```
curl -O https://some.website.org/code/myCode.patch
git apply myCode.patch

```

Add `.diff` or `.patch` at the end of the URL of a GitHub commit, pull request, or compare view so that the website shows you the plain text view of that page.

* Regular commit page: `https://github.com/FreeCAD/FreeCAD/commit/c476589652a0f67b544735740e20ff702e8d0621`
* Diff page: `https://github.com/FreeCAD/FreeCAD/commit/c476589652a0f67b544735740e20ff702e8d0621.diff`
* Patch page: `https://github.com/FreeCAD/FreeCAD/commit/c476589652a0f67b544735740e20ff702e8d0621.patch`

You can point `curl` to a particular commit patch in the repository, and pipe it directly to `git` to apply the patch.

```
curl https://github.com/FreeCAD/FreeCAD/commit/c476589652a0f67b544735740e20ff702e8d0621.patch | git apply -

```

#### Reversing a patch

When you apply a patch you modify some files. However, these modifications aren't permanent until you commit the changes. Therefore, if you want to revert a patch use the following instructions.

This will revert the changes applied, if you still have access to the original patch file.

```
git apply -R myCode.patch

```

Alternatively, this will remove non-committed changes to the branch.

```
git checkout -f

```

### Stashing git commits

Say that you're working on a branch and you find yourself making some modifications to the source that are out of the scope of your current branch; in other words, those changes would be better in another branch instead of the current one. The `git stash` command can be used to temporarily store those uncommitted local changes.

```
git stash

```

If in the future you want to use those commits, you can "pop" the commits out of the stash, and into your working branch.

```
git stash pop

```

Or if you decide that you don't like those saved commits anymore, you may drop the commits from the stash entirely.

```
git stash drop

```

You can list multiple stash commits with

```
git stash list

```

To learn more, read [Useful tricks you might not know about Git stash](https://medium.freecodecamp.org/useful-tricks-you-might-not-know-about-git-stash-e8a9490f0a1a).

### Check out GitHub requests locally

[Checkout GitHub pull requests locally](https://gist.github.com/piscisaureus/3342247)

### Blaming

:::caution
Section TBD
:::

Add content from <https://forum.freecadweb.org/viewtopic.php?f=23&t=55943&p=481483#p481287>

### Bisect

`git bisect` is a method to find the specific commit that introduced a bug.

You need to find 2 commits:

* A good commit (for example `abcd`) before the system broke.
* A bad commit (for example `efgh`) after the system broke.

Then enter this from the terminal:

```
git bisect start
git bisect good abcd
git bisect bad efgh

```

Result: `git` will check out the mid point between the two commits.

The next step is to build and test the code. If the system works, continue the process by typing:

```
git bisect good

```

Repeat the previous step of building the code and testing it.

If the system is broken, type:

```
git bisect bad

```

Repeat the previous steps applying `good` or `bad` depending on the outcome of your tests.

Eventually, `git` will tell you that `wxyz` is the first bad commit.

Finally, to exit the bisect process, type:

```
git bisect reset

```

Note: `git bisect` takes a long time if good and bad are far apart.

## FreeCAD revision number

In contrast to subversion, which uses a consecutive number for its revisions, Git produces [SHA-1 hash values](https://en.wikipedia.org/wiki/SHA-1) with every commit. A hash value is a long alphanumeric string that looks like this

```
9b3ffef570596e184006287434fba54a4b03ccc3

```

### Latest revision number

To find the latest revision number of a particular branch use the `rev-list` operation with the `--count` option. Give the name of the branch, remote repository, tag, or a special pointer like `HEAD`, to indicate the last commit in that particular object.

```
git rev-list --count main
git rev-list --count HEAD
git rev-list --count origin

```

Or browse [the repository on GitHub](https://github.com/FreeCAD/FreeCAD), and read the amount of commits reported in the particular branch.

### Revision number of a specific commit hash

Since the hash is an alphanumeric string it is not very useful to decide if a certain commit is older or newer than another hash. To find the revision number of a particular hash, again use the `rev-list` operation; the input can be the full hash, or a partial hash that is unique, usually the first 7 digits are enough.

```
git rev-list --count ab1520b872821414c6ce4a15fb85d471ac2a2b03
git rev-list --count 9948ee4

```

### Revision hash of a specific commit number

If we have the commit number, say, 15000, and we want to find the corresponding hash, we need to calculate the number of commits since this point until the last commit (`HEAD`). First, get the latest commit number.

```
git rev-list --count HEAD
17465

```

Then subtract the commit that we want.

```
17465 - 15000 = 2465

```

Then use the `log` operation to show all commits and hashes. The `--skip` option jumps the difference in commits that we calculated so that we go directly to the hash that we are looking for.

```
git log --skip=2465
commit 44c2f19e380e76b567d114a6360519d66f7a9e24

```

Since the log may show you two close commits, confirm it's the right commit number. If it's off by one, just pick the next commit in the sequence (before or after) and check again.

```
git rev-list --count 44c2f19e38
15000

```

* [Show the commits](https://forum.freecadweb.org/viewtopic.php?f=10&t=26673) immediately before a particular commit in GitHub: in the address bar of the browser, change the word `commit` to `commits` to show a list.
* [Finding the revision number of the commit](https://forum.freecadweb.org/viewtopic.php?t=5308)
* [Finding the revision number of the commit](https://forum.freecadweb.org/viewtopic.php?f=18&t=12883&p=103207#p103203)
* [Finding the corresponding hash value to a particular commit number](https://forum.freecadweb.org/viewtopic.php?f=10&t=31118)

### Revision number in FreeCAD's interface

The version number that appears with the [Std About](/Std_About "Std About") tool is defined in `src/Build/Version.h`, which is created at compile time when the `cmake` tool is run. Read [Extract version number from git source](https://forum.freecadweb.org/viewtopic.php?f=4&t=3025) for more information.

## Adding other repositories (remotes)

Several collaborators of the FreeCAD project have their own Git repositories where they build up their work or where they experiment new ideas before they are ready to be included in the official source code. You may want to get their sources in order to test their code yourself when they make a pull request.

Use the `git remote` command to add these other repositories so that you can `fetch` and `pull` their code.

```
git checkout main
git remote add OTHER_USER OTHER_URL
git fetch OTHER_USER
git checkout -b OTHER_BRANCH OTHER_USER/OTHER_BRANCH

```

For example, lets add Bernd's remote repository:

```
git remote add bernd http://github.com/berndhahnebach/FreeCAD_bhb

```

The `git fetch` command downloads the references from that remote repository.

```
git fetch bernd

```

List all branches in your own repository, and those from your added remotes. Bernd's branches will display as `remotes/bernd/<branchname>`.

```
git branch -a

```

Now, lets view a summarized list of the last 10 commits of bernd's `femdev` branch.

```
git log -10 --oneline remotes/bernd/femdev

```

Now we can checkout the desired branch to inspect.

```
git checkout remotes/bernd/femdev

```

Then we can create a local branch that is based on the remote branch. This local branch we can modify, and add our own code to it.

```
git checkout -b local_branch_name /remotes/bernd/femdev

```

You may wish to `git rebase` the newly obtained branch onto the `upstream/main` branch to make sure it is using the latest code. If there are conflicts, they will have to be solved at this point.

```
git pull --rebase upstream main

```

The new branch is ready to be modified and compiled as described in [Compiling](/Compiling "Compiling").

Head to the development section of the [FreeCAD forum](https://forum.freecadweb.org/viewforum.php?f=6) to discuss more about development.

## Otras lecturas

* [Git para los perezosos](http://spheredev.org/wiki/Git_for_the_lazy)
* [Git pro libro on-line](http://progit.org/book/)

Retrieved from "<http://wiki.freecad.org/index.php?title=Source_code_management/es&oldid=1481428>"