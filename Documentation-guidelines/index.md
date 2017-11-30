---
title: Documentation guidelines
---

# Documentation guidelines

This section describes how we manage software documentation.

## To update existing content

Use the link `Edit this page` on the bottom of each page to find the right file in the repository, and update the contents directly using the GitHub markdown editor.

You can also clone the entire repo `https://github.com/eea/docs` and use the standard git commands to edit. This is useful if you intend to edit several pages at once.

## To add new content

Here in the repository [https://github.com/eea/docs/tree/gh-pages](https://github.com/eea/docs/tree/gh-pages), 

1. add a new folder in the format `My-new-folder-name`
2. add a new file to the folder named `index.md`
3. update [https://github.com/eea/docs/blob/gh-pages/_data/menu.yml](https://github.com/eea/docs/blob/gh-pages/_data/menu.yml) accordingly. Each menu item is described by two lines - first line is the menu title, second line is the URL to the folder just created.

## To update documentation within "IT-systems" section

**IT-systems** documentation is generated automatically based on documentation found on each github repo within https://github.com/eea. Thus, in order to update docs for one section under **IT-systems** all you have to do is to update github repo README and wait for the documentation to be regenerated. For example, in order to update documentation for **EEA Faceted Navigation** you will need to edit https://github.com/eea/eea.facetednavigation/blob/master/README.rst

Documentation within **IT-systems** section is updated nightly by this [Jenkins job](http://ci.eionet.europa.eu/view/Plone/view/documentation/job/eea-markdown-docs). 
If you don't want a github repo to be present within documentation, then you can edit the above Jenkins job and add the repo to the `BLACKLIST`-ed repos.
Also, you can mannually run this Jenkins job if you need documentation updated before the nightly build.
