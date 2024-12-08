import { LightningElement, api } from 'lwc';

export default class GqlDemoTableTab extends LightningElement {

    @api tab;
    @api pageSize = 10;
    @api maxRowSelection = 0;
    
    handleRowSelection(e) {
        const { selectedRows } = e.detail;
        this.dispatchEvent(new CustomEvent('rowselection', { detail: { selectedRows }}));
    }

}