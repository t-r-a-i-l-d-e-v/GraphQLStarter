import { LightningElement, api } from 'lwc';

export default class GqlDemoTableTabset extends LightningElement {

    @api tabs;
    @api pageSize = 10;
    @api maxRowSelection = 0;
    
    handleRowSelection(e) {
        this.dispatchEvent(new CustomEvent('rowselection', { detail: e.detail}));
    }

}