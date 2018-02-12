---
title: Dataflow checklist
---

# Dataflow checklist

A checklist for people involved in running and implementing a dataflow in Reportnet.

## Terms used
* ROD = Reporting Obligations Database
* DD = Data Dictionary
* CDR = Central Data Repository
* BDR = Business Data Repository
* ETC = European Topic Centre
* Converters = Quality Assessment and Conversion service (XMLCONV)
* CWS = Common WorkSpace
*	FME = Feature Manipulation Engine from Safe Software
*	CR = Content Registry
*	SVN = Subversion (version control system)
*	QC = Quality control

## Obligation in ROD
The obligations in ROD are used by the member states to find out what to report when, and in Reportnet the reporting obligation is used as metadata for the reports received and as a unique identifier to link things together (e.g. obligation and XML-schema).

Ensure the obligation is registered in the ROD. If not, the EEA dataflow steward needs to register it there.

* [Add/update a reporting obligation in ROD](https://github.com/eea/eionet.rod/blob/master/docs/ROD%20User%20Manual.odt?raw=true)

## XML-schema
If the reports submitted to Reportnet in the dataflow need to be automatically processed (e.g. quality control tests), then the de facto format in Reportnet is XML. Therefore an XML-schema needs to be produced, acting as a specification that also can be automatically verified (i.e. schema validation). This task normally lies with the developers, and the final schema needs to be published in DD.

Ensure that a schema exists/is produced and is placed in the DD schemas section.

* [Add/update an XML-schema in DD (similar to datasets)](https://github.com/eea/eionet.datadict/blob/master/doc/DD-User-Guide.odt?raw=true)

## Reporting tool
When the reporting format is XML, it often presents a problem for the member states to produce their data in a valid XML-format. Due to this, often a tool is developed to help them enter the data and from that produce the required XML-file and format. Common examples of such tools are Web questionnaires and Excel templates from dataset definitions in DD that are automatically converted to XML upon upload in CDR. Examples of questions to ask in order to find a suitable type of reporting tool are – Is the data structure simple enough to fit in a tabular format such as Excel? Is it likely that the reporters need to copy-paste a lot? Will they need to use it locally over a longer time or is it enough when the reporting opens? Do the reporters need direct feedback (QC) when filling in the data? Is one major reason to produce a reporting tool improved data quality? 

Ensure (via the dataflow steward) that the reporters can produce the XML-format requested, or develop and deploy/deliver a reporting tool that suits the dataflow requirements.

* [Define a DD dataset (to create an Excel template)](https://github.com/eea/eionet.datadict/blob/master/doc/DD-User-Guide.odt?raw=true)
* [Develop a webform](https://github.com/eea/eionet.webq/blob/master/docs/WebQ%20-%20Developers%20Manual.odt?raw=true)
* [Test a webform](https://github.com/eea/eionet.webq/blob/master/docs/WebQ%20-%20User%20Manual.odt?raw=true)

## Quality control
When designing the quality assurance for the dataflow, there are some options to elaborate with for getting the best quality data. Firstly, quality control can be implemented in the reporting tool in case one is provided, or there can even be a separate tool to run the quality control in Reportnet on a file provided. These options can provide early feedback to the reporters, but cannot block a delivery in CDR due to not meeting the quality criteria. These will be implemented with the technology that matches the one of the reporting tool and the work is done by the developers. 
Secondly, quality control can be implemented to run in CDR when the reporter submits the report (and potentially also in CDR just before submitting the report). This restricts the potential users to the list of officially designated reporters, but allows the system (CDR) to block the delivery in case the report does not meet the quality criteria. These quality control tests can be implemented using the technologies offered by Converters (currently XQuery and FME) and normally done by the developers. These tests can verify the data in the files submitted, but also verify the right number, or type of files are submitted (“envelope checks”).
Finally, quality control can also take place after the report is submitted as a manual step in the CDR reporting workflow after eventual automatic quality control. Often this is done by extracting the reported data into a database in CWS and there running queries or using dashboards to analyse the data. The extraction is often done with FME, the queries in MS SQL Server, and the dashboard in Tableau, all normally implemented by IDM3 staff/developers. These tests allow blocking the report due to not meeting the quality control criteria.

Ensure that a decision is made on whatever option or combination thereof is chosen, and that the quality control rules are specified (the rules themselves, but also the presentation of the possible outcomes to the reporter), implemented and deployed to the relevant application.

* [Add/update XQuery quality control tests](https://github.com/eea/eionet.xmlconv/blob/master/docs/QueryService%20User%20Manual.odt?raw=true)
* [Test quality control tests](Test-quality-control-tests)

## Reference data
Reference data is used in many locations and steps for a dataflow. One part is the fixed values in the data specification (XML-schema), used by for example the quality control tests and reporting tool (if one is produced). They are implemented in DD as vocabularies, a task that can be done by the ETC directly, or the developers. Another part is min/max thresholds, geographical boundaries etc. and previously reported data used for comparisons in quality control tests. These data can be stored in CR or Converters (files section), which is done by the developers.

Ensure it is clear what reference data to use, that it is up to date and published in the relevant locations.

* [Add/update a vocabulary in DD](https://github.com/eea/eionet.datadict/blob/master/doc/DD-User-Guide.odt?raw=true)
* [Add/update XML-files in Converters](https://github.com/eea/eionet.xmlconv/blob/master/docs/QueryService%20User%20Manual.odt?raw=true)
* [Basic info on CR usage](http://cr.eionet.europa.eu/documentation/generalprinciples)

## Labels and translations
Labels are for example used in eventual reporting tools (field labels and help texts), conversions to show the XML-file report in HTML- or Excel-format from CDR, and quality control test result presentations. Sometimes it is requested to translate them into other languages besides English. The same label should be re-used for the different locations, so the labels should be stored in XML-files (no good location currently, normally SVN) or in DD vocabularies, a task handled by the developers and ETC/developers respectively. Translations can sometimes be retrieved from the translations of the dataflow directive/implementing guidelines in EUR-Lex if they align with the reporting tool/quality control tests presentation etc. If they do not align, custom translations need to be requested from DG Translation; ideally, they should be in a machine-readable format such as XLIFF or custom XML. Translations should be provided by the EEA dataflow steward and are implemented by the developers.

Ensure the labels required are specified, translated if required and put in the appropriate location. During development, verify that all relevant texts in reporting tools etc. uses the labels (i.e. no hard-coded labels).

* [Add/update a vocabulary in DD](https://github.com/eea/eionet.datadict/blob/master/doc/DD-User-Guide.odt?raw=true)

## Pre-fill previous data
To ease the burden on the reporters we can choose to provide the previously reported data pre-filled in the reporting tool or in the correct reporting format as a starting point for the next reporting. When a webform is chosen as the reporting tool, the common approach is to pre-populate each new envelope created under the obligation with a copy of the previous report for the MS, that then can be further edited using the webform. For other reporting tools and when not using a reporting tools, the common procedure is not developed or not communicated.

Ensure that a decision has been made on whether to pre-fill or not, and if yes, that there is a procedure in place to facilitate the provision of this data to the reporters and that the correct data in the correct format is made available to the procedure.

* [Add/update pre-fill of previous data](Pre-fill-previous-data)

## Conversions
Due to the hard-to-read nature of XML for the average reporter, we can provide conversions to show the contents of their XML reports in HTML and Excel format. These presentations can for example be used by the reporter to verify visually the correctness of the report’s contents before submitting it, and for other interested parties to view it. This task is handled by the developers.

Ensure that a decision is made on what conversions to produce is made (if any), and that they are implemented and deployed on Converters.

* [Add/update conversions](https://github.com/eea/eionet.xmlconv/blob/master/docs/XMLCONV%20User%20Manual.odt?raw=true)

## Reporting workflow
Different variations of the workflow that controls the reporter’s process in CDR can be used, for example, a step can be added to force the reporter to run the quality control, or to add a manual review step for the EEA/ETC to review the report before it is accepted. The general idea is to re-use a smaller set of existing workflow configurations instead of developing new ones. The Eionet helpdesk can assist in selecting and setting up the right workflow.

Ensure that at least one of the standard workflows is chosen (often the dataflow steward can discuss this directly with the Eionet helpdesk) and configured in CDR for the reporting obligation.

* [More on defining a workflow](http://www.eionet.europa.eu/reportnet/How%20to%20create%20a%20Reportnet%20dataflow.pdf)

## Dataflow mappings
A dataflow can run in CDR without configuring a dataflow mapping entry (managed in CDR), which is a link between the reporting obligation and the XML-schema(s) for the dataflow. Although in the following situations such a mapping need to be configured. 
*	If XML-files with only the specified schemas should be allowed to be uploaded in the envelope. 
* If buttons to execute the quality control tests should be shown for the files in the envelope.
*	If a webform should be used for reporting, no link to it will be shown in the envelope without a mapping. 
*	If using DD Excel templates that should be converted into one XML-file instead of one XML-file per sheet (default).

Ensure whether any of these conditions apply, and if so, create the dataflow mapping – a task normally done by the Eionet helpdesk or the developers.

* [Add/update dataflow mappings](https://github.com/eea/Products.Reportek/blob/master/Products/Reportek/docs/Reportek%20administrator%20manual.docx?raw=true)

## Processing of the reports
When new reports are submitted to CDR for the dataflow, there is in general a procedure in place to extract the report’s contents for further processing. This means to first store the reports from all MS together in a database, where manual quality control can be performed and later products such as a European dataset and indicators can be produced from that source. The task is often handled by IDM3 and the database will be in CWS.

Ensure there is an agreement with the dataflow steward on whether any processing of the submitted reports is required, and if so, assure that a database for storage is set up and a corresponding ETL-workflow is developed and scheduled to run at a regular interval.

* No instructions yet, see [EU-ETS aggregation workflow](https://svn.eionet.europa.eu/repositories/Reportnet/Dataflows/EmissionTradingArticle21/database_fme/) for an example with MS Access.

## Confidentiality
In some dataflows, the reported data can contain information that should not be made public on CDR. Depending on the amount of sensitive data this can be handled in different ways. One option is to agree on using codes instead of real data for the relevant parts in the reports; the reporter then uploads a file with a reference table that links the reported codes to the real data, which is also in the file. The uploaded file is then marked as restricted to the public by the reporter. This way most part of the data can be made public and re-used for other purposes while still maintaining the confidentiality. A second option is to use a workflow with a step that automatically restricts the files with confidential information (e.g. quality control results) from public view when the reporter releases the envelope.

Ensure there are no potential confidentiality issues, but if so, decide on an appropriate approach to mitigate this with the dataflow steward.

* [Example workflow step code to restrict feedback](http://cdr.eionet.europa.eu/Applications/wise_soe2/RestrictFeedbacks/ZPythonScriptHTML_editForm)

## CDR collections
The collections are the higher-level folders in CDR under which the reporters create a final folder (envelope) in which they provide their files (the report). A reporter can manage the collections and envelopes for their MS hierarchy, but for a more consistent naming scheme to make them easier to find, the Eionet helpdesk usually create the collection structure for each dataflow beforehand. A URL pointing to the right place in this collection structure is then provided as a link for each MS in the reporting manual. 

Ensure that the list of which MS will report in this dataflow and that the Eionet helpdesk has set up the collections for the dataflow – a task that belong to the dataflow steward.

## Reporter permissions
For a person to be able to report under one of the country collections, the necessary permissions need to be assigned. Normally the dataflow steward receives the list from the Commission and asks the Eionet helpdesk to create any missing accounts, and assign the correct permissions to report.

Ensure that the nominated reporters are identified and have been given the permissions required.

## Reporting manual
To clarify the reporting process, and what information is expected, a reporting manual is created for most dataflows. The thematic part, covering the general process and requirements on the information requested, is normally drafted by the ETC or dataflow steward, while the details on the eventual reporting tool is often done by the developers. Useful is also to add the list of collections previously created as links each MS reporter can use to start reporting.

Ensure that an updated reporting manual exists, and that it is published in the CDR help section.

* On [using the Zope mgmt interface](http://zope.readthedocs.io/en/latest/zope2book/UsingZope.html) to add/update a document.

## IT-deadline
The dataflows are normally based on a reporting frequency/cycle (e.g. annually), and a specified date before which the MS have to submit their reports. When developing a reporting solution for a new- or updated dataflow, it is however important to capture the date for when the reporters are expected to begin reporting or begin using the eventual reporting tool. Depending on the dataflow, this IT-deadline before the reporting deadline can vary from a month to over six months. This deadline should be provided by the dataflow steward.

Ensure that all parties involved in the project are aware of the IT-deadline for which the reporting solution need to be tested and in production.

## Invitations to report
The reporting for a dataflow, in each occurrence in the reporting cycle, is opened by a formal letter to the MS (or companies in case of BDR reporting). This letter is normally drafted and sent by the Commission directly or by the EEA dataflow steward.

Ensure that the IT-deadline and the invitations to report are coordinated, so no reporters try to report before the reporting solution is fully put in place.

## Helpdesk
With few exceptions, there will be questions from the reporters on the thematic aspects of the reporting and on practicalities such as reporter permissions or service unavailability. Generally, these should be channelled to the Eionet helpdesk, but if there is an expectancy of a large number of thematic questions, preferably a dedicated helpdesk/email address should be set up for those. Arranging the helpdesk(s) needed is a task normally handled by the dataflow steward.

Ensure the probable helpdesk needs are clarified and appropriate helpdesks are set up and their contact information is communicated to the reporters.

_Note: See [How to create a dataflow in Reportnet](http://www.eionet.europa.eu/reportnet/How%20to%20create%20a%20Reportnet%20dataflow.pdf) for further instructions on setting up a dataflow._
