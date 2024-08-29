<p align="center">
  <img src="https://github.com/user-attachments/assets/a6a0c2eb-7307-4fc5-8e1c-7068a15c1147" alt="Description of Image">
</p>

**An Open Sourced CLI tool designed for developers to quickly scaffold (generate and add boilerplate code) directly to files or a directories using terminal prompts. It also includes a Code Snippet Management tool with Contextual Search, making it easy to organize and retrieve your code snippets.**

---
<div align="center">
<p>
   
![Visitors](https://api.visitorbadge.io/api/visitors?path=debarshee2004/scaffoldgen&countColor=%23263759&style=flat)
![GitHub forks](https://img.shields.io/github/forks/debarshee2004/scaffoldgen?style=flat&logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/debarshee2004/scaffoldgen?style=flat&logo=github)
![GitHub contributors](https://img.shields.io/github/contributors/debarshee2004/scaffoldgen)
![GitHub repo size](https://img.shields.io/github/repo-size/debarshee2004/scaffoldgen)
![Github](https://img.shields.io/github/license/debarshee2004/scaffoldgen)
</br>
![GitHub last commit](https://img.shields.io/github/last-commit/debarshee2004/scaffoldgen)
![GitHub issues](https://img.shields.io/github/issues/debarshee2004/scaffoldgen)
![GitHub closed issues](https://img.shields.io/github/issues-closed/debarshee2004/scaffoldgen)
![GitHub pull requests](https://img.shields.io/github/issues-pr/debarshee2004/scaffoldgen)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/debarshee2004/scaffoldgen)

</p>
</div>

---

### How to use this tool?

Let's start with an empty repository with no file. In this demo we will write a command to write **MongoDB database connection in JavaScript using Mongoose** (_which is a predefined example in the library_).

```
~ scaffoldgen -scaf mongoose/mongodb-connect -path connection.js
Or in short
~ sfgen --s mongoose/mongodb-connect --p connection.js
```

it will generate the code in the `connection.js` file in the current working directory.

**Basic syntax which is followed while scaffolding code into a file:**

```
~ scaffoldgen -scaf {name_of_the_snippet} -path {file_name}
```

**Basic syntax which is followed while scaffolding code into a directory (by adding the `-dir` flag):**

```
~ scaffoldgen -dir -scaf {name_of_the_snippet} -path {folder_name}
```

### Why even use a tool like this?

**This CLI tool is directly targeted at developers who often have to write the same code repeatedly. This tool will not only help developers maintain code snippets but also allow them to use these snippets easily via the terminal, increasing productivity and eliminating the need to write tedious boilerplate code every time.** _But we can keep the code snippets on GitHub._ **Just because you can doesn't mean you should. GitHub was never intended to be used that way, and this tool completely removes the hassle of _trying to remember which repository contains the code I need to use_.**

> For more information about the features of the application refer to [`features-guide.md`](./docs/features-guide.md) file. Here you can see all the existing features, worked on features and planed features for this application. You can submit your feature idea using **issues** via the `Feature request` template.

# Installation

> Currently this application under development, bulding and testing for **Linux**. So there is no active release, but you can build from source instruction is given in [`setup-guide.md`](./docs/setup-guide.md) file. First release is scheduled on **March 2025** (if everything goes as planed). Then information on how to install the tool for use will be given in the website on in [`installation.mdx`](./docs/scaffoldgencli-documentation/installation.mdx), from where you can get the full instruction on how to download the application.

# Releases

> Currently this application under development, bulding and testing for **Linux**. So there is no active release, but you can build from source instruction is given in [`setup-guide.md`](./docs/setup-guide.md) file. First release is scheduled on **February 2025** (if everything goes as planed). Then information about the releases of the application will be provided in [`releases.md`](./docs/releases.md) file.

# Contribution Guidelines

**If you are interested to contribute to ScaffoldGen Project, be sure to review the [contribution guidelines](./CONTRIBUTING.md), this will tell you certain methods and practices which are followed while contributing to this project. Then follow the process to setup the project locally or in a cloud by refering to [`setup-guide.md`](./docs/setup-guide.md). If you are a participant of [Hacktoberfest](./docs/opensource/hacktoberfest/CONTRIBUTING.md) or [Apertre](./docs/opensource/apertre/CONTRIBUTING.md) do checkout their contributing guidelines, which are being followed in this project for those specific cases.**

**[GitHub issues](https://github.com/debarshee2004/scaffoldgen/issues) are used tracking and managing and tracking requests, bugs and features. Check out the [Discussions](https://github.com/debarshee2004/scaffoldgen/discussions), or our [Discord Channel](https://discord.gg/4Jvs7vusND) section of this repository for general questions and answers.**

The ScaffoldGen project strives to abide by generally accepted best practices in open-source software development.

# Team

This project is maintained by members of [Resourcio Community](https://github.com/Resourcio-Community), [Soumyajit Mondal](https://github.com/Soumyajit2825) the founder, [Debarshee Chakraborty](https://github.com/debarshee2004) member of the Technical Team, [Abhraneel Karmakar](https://github.com/abhraneel2004) member of Design Team, and [Sayan Mallick](https://github.com/lmnzx) community advisor. You can connect with everyone in this project via GitHub and Discord.

# License

This project is subjected to [Apache Licence 2.0](./LICENSE).
