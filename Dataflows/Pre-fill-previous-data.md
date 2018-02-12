---
title: Pre-fill previous data
---

# Pre-fill previous data

To ease the burden on the reporters we can choose to provide the previously reported data pre-filled in the reporting tool or the in correct reporting format as a starting point for the next reporting. When a webform is chosen as the reporting tool, the common approach is to pre-populate each new envelope created under the obligation with a copy of the previous report for the MS, that then can be further edited using the webform. For other reporting tools and when not using a reporting tools, there is no common procedure yet.

## Pre-fill with a webform

The outcome here should be that when a new envelope is created for the the reporting obligation in question, an XML-file with the previous data for this MS is copied into the envelope and can be opened directly with the webform.

* Assemble the XML-files to use for each MS and name them according to the following naming scheme - `<country-code>`_`<obligation name>`.xml, e.g. `ee_mmr-pam_report.xml` for Estonia and the MMR policies and measures reporting. 
* In CDR-Test and CDR, place the files in a folder named after the reporting obligation under http://cdr[test].eionet.europa.eu/xmlexports, e.g. http://cdr.eionet.europa.eu/xmlexports/mmr_pam/.
* Add the [`PrepareDelivery`-step](http://cdr.eionet.europa.eu/Applications/mmr_pam_reporting/PrepareDelivery/ZPythonScriptHTML_editForm) to your workflow before the `Draft`-step to facilitate the copying of the files.

This procedure could be automated using a ETL-workflow like https://svn.eionet.europa.eu/repositories/Reportnet/Dataflows/MMR-PAMs/prefill.
