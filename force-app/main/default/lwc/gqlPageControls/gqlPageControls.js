import { LightningElement, api, track } from 'lwc';

export default class PageControls extends LightningElement {

    @api cursor;
    @api pageSize = 10;
    @api total;

    get curPage() { return 1; }
    get totalPages() { return 1; }
    get hasNext() { return true; }
    get hasPrevious() { return true; }
    get isFirstPage() { return !this.hasPrevious; }
    get isLastPage() { return !this.hasNext; }

    handlePrevious(e) {
        
    }

    handleNext(e) {
        
    }

}