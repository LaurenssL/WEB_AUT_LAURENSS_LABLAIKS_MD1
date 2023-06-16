import basePage from "./base.page";

class gridPage extends basePage{
    static get url(){
        return "/selectable";
    }

    static get selectGridButton(){
        return cy.get("#demo-tab-grid");
    }

    static get numberButtons(){
        return cy.get(".list-group-item");
    }

    static get numberOneButton(){
        return this.numberButtons.contains("One");
    }

    static get numberTwoButton(){
        return this.numberButtons.contains("Two");
    }

    static get numberThreeButton(){
        return this.numberButtons.contains("Three");
    }

    static get numberFourButton(){
        return this.numberButtons.contains("Four");
    }

    static get numberFiveButton(){
        return this.numberButtons.contains("Five");
    }

    static get numberSixButton(){
        return this.numberButtons.contains("Six");
    }

    static get numberSevenButton(){
        return this.numberButtons.contains("Seven");
    }

    static get numberEightButton(){
        return this.numberButtons.contains("Eight");
    }
    
    static get numberNineButton(){
        return this.numberButtons.contains("Nine");
    }
}

export default gridPage;