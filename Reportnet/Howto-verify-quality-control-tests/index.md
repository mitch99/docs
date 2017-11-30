# How to verify quality control tests

Part of the dataflow quality assurance is often to develop quality control tests that are set to run on the data reported. This guide aims to explain how to help us verify that the underlying business rules have been correctly implemented in these tests, by subjecting them to different sets of specially crafted test data and verifying that the desired result is produced in each case.

The most straight-forward way to perform such a verification is to:

1.	Prepare the test data files.
2.	Navigate to the test version of the Central Data Repository (CDR) - [http://cdrtest.eionet.europa.eu](http://cdrtest.eionet.europa.eu), and login using the test account (supplied upon request).
3.	Navigate to a folder matching the reporting obligation, e.g. [http://cdrtest.eionet.europa.eu/ee/eu/colwzwtva](http://cdrtest.eionet.europa.eu/ee/eu/colwzwtva) for UWWTD article 15, and create a new envelope (using the `“New envelope”` button).
4.	Open the envelope created and activate the draft task (`“Activate task”` on the right) and upload the prepared test data (one or more files).
5.	In the envelope, there will now be a button for all applicable quality control tests (matched on the file type and XML schema) next to each file. Run a set of tests (i.e. a "script") by clicking the matching `“Run QA #...”` button (hover the button to see which tests it represents).

_Note:_ there is one caveat in this - for files deemed too large to run ad-hoc quality control on, there will be no buttons displayed to run the tests. In such case, or when the desire is to run all tests on all applicable files in the envelope, there is the option of releasing the envelope (by clicking the button `“Release envelope”`). In this case, once finished, the result of the quality control tests will be added as feedback items that can be found just below the list of files in the envelope.

## Alternative approach

The QA Sandbox is another tool to verify the quality control tests. Unlike the approach explained above, here you can only run one set of tests (i.e. a quality control script) on one file at a time. But instead it offers a simple way to use existing reports (files) from CDR as test data, provided the same data specification is used (i.e. the same XML-schema). 

To use the QA sandbox, proceed as follows:

1. First put your test data in an online location that can be accessed without password protection (e.g. in an envelope on the test version of CDR - [http://cdrtest.eionet.europa.eu](http://cdrtest.eionet.europa.eu)). To use existing reports from CDR as test data, just continue to the next step.
2. Navigate to the QA Sandbox - [http://converterstest.eionet.europa.eu/do/qaSandboxForm](http://converterstest.eionet.europa.eu/do/qaSandboxForm)
   - To use your own test data, paste the URL of your test data file in the corresponding form field, and click the button `“Extract schema and find QA scripts”` to see a list of matching quality control scripts. Select the preferred script.
   - To use an existing file from CDR as test data, select the matching XML-schema in the list and click the buttons `“Search XML from CR”` and `“Find QA scripts”` respectively to see a list of files and matching quality control scripts. Select the preferred file and script.
3.  Click the button `“Run script”`.
