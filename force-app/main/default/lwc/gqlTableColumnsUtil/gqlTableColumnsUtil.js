import accountColumns from "./columns/accountColumns";
import contactColumns from "./columns/contactColumns";  
import testObjectColumns from "./columns/testObjectColumns";

const columnsMapping = {
    'Account': accountColumns,
    'Contact': contactColumns,
    'TestObject__c': testObjectColumns
}

export { columnsMapping };