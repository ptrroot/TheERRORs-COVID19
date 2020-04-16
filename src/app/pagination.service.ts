export class PaginationService{
    currentPage: {numero: number } = {numero:1};
    moveToPage(newPage : number){
        this.currentPage.numero = newPage;
        console.log(this.currentPage);
    }
}