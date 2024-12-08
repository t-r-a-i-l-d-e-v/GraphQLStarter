import { LightningElement } from 'lwc';

export default class GqlDemo extends LightningElement {

    // determines how many records per page
    pageSize = 10;

    // filters records displayed in results
    searchKey = '';

    // contains GraphQL results parsed to be readable by <c-gql-demo-table-tabset/>
    tabs = [];

    // contains any potential errors from GraphQL query
    errors;

    // holds the record selected from the result table
    selectedRow;

    get errorMsg() { return this.errors?.map(err => err.message); }

    handleRowSelection(e) {
        const { selectedRows } = e.detail;
        this.selectedRow = selectedRows.length ? selectedRows[0] : null;
    }

    handleSearchKeyChange(e) {
        this.searchKey = e.detail.value;
    }

}
