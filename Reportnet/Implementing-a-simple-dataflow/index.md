---
title: Reportnet for developers
---

# Implementing a simple dataflow
    
This section will show you the process of implementing a dataflow in Reportnet.
      
## 1.   Creating an XML schema

CDR doesn’t have a relational database such as SQL Server or MySQL. It is more like an advanced FTP-server, but using Web technology. When you make a delivery, you upload files, which are stored in a folder called an envelope. This happens both when you deliver regular files and XML. In the latter case you must define the XML file’s format in the XML schema language (or DTD language).
There are basically two ways to create the XML schema. One is to do it by hand, and the other is to use the data dictionary. Choosing which one is appropriate depends on your data.

### 1.1.   Storing the schema

It is best to store the XSD file at a persistent location. That way people can always find the newest version of the file. You then use the fully qualified URL as the schema identifier in the XML instance file. The instance file must have in its root element an `xsi:noNamespaceSchemaLocation` pointing to the schema and an `xmlns:xsi=-"http://www.w3.org/2001/XMLSchema-instance"`-attribute.

This noNamespaceSchemaLocation attribute (alternatively the schemaLocation attribute) is used in by Reportnet to find relevant QA scripts and conversions.