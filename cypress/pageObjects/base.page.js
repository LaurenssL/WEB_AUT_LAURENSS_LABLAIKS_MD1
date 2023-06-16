class basePage{

    static get url(){
        return "/";
    }

    static visit(){
        cy.visit(this.url);
    }
}

export default basePage;