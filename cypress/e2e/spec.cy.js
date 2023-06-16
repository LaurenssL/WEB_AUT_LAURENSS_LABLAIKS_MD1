import gridPage from "../pageObjects/grid.page";

describe("DemoQA spec", () => {
  context("Validating grid numbers", () => {
    beforeEach(() => {
      gridPage.visit();
    });

    it.only("1. Validating grid numbers", () =>{
      gridPage.selectGridButton.click();
      gridPage.numberTwoButton.click();
      gridPage.numberFourButton.click();
      gridPage.numberSixButton.click();
      gridPage.numberEightButton.click();

      gridPage.numberTwoButton.should("have.class", "active");
      gridPage.numberFourButton.should("have.class", "active");
      gridPage.numberSixButton.should("have.class", "active");
      gridPage.numberEightButton.should("have.class", "active");
      
      gridPage.numberOneButton.should("not.have.class", "active");
      gridPage.numberThreeButton.should("not.have.class", "active");
      gridPage.numberFiveButton.should("not.have.class", "active");
      gridPage.numberSevenButton.should("not.have.class", "active");
      gridPage.numberNineButton.should("not.have.class", "active");
    });
  });
});