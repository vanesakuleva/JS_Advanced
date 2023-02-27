const findNewApartment= require ('./findApartment.js');
const {assert, expect} = require('chai');

describe("findNewApartment",()=> {
    describe("isGoodLocation",()=> {
        it("throw an error if the city is type int", function() {
            expect(() => findNewApartment.isGoodLocation(55, true).to.throw('Invalid input!'));
        });
        it('throw an error if the boolean type string', () => {
            expect(() => findNewApartment.isGoodLocation("test", "test").to.throw('Invalid input!'));
        });
        it('throw an error if both of types not correct', () => {
            expect(() => findNewApartment.isGoodLocation(true, 88).to.throw('Invalid input!'));
        });
        it('throw an error if the city type is object', () => {
            expect(() => findNewApartment.isGoodLocation({},true).to.throw('Invalid input!'));
        });
        it('throw an error if the bool type is object', () => {
            expect(() => findNewApartment.isGoodLocation('test', {}).to.throw('Invalid input!'));
        });
        it('throw an error if the bool type is array', () => {
            expect(() => findNewApartment.isGoodLocation('test', []).to.throw('Invalid input!'));
        });
        it('throw an error if the city type is array', () => {
            expect(() => findNewApartment.isGoodLocation([], true).to.throw('Invalid input!'));
        });
        it('check for "This location is not suitable for you"', () => {
            expect(findNewApartment.isGoodLocation("Ruse", true)).to.equal(`This location is not suitable for you.`);
        });
        it('check for "You can go on home tour!" location is Varna and have transport', () => {
            expect(findNewApartment.isGoodLocation("Varna", true)).to.equal(`You can go on home tour!`);
        });
        it('check for "You can go on home tour!"location is Sofia and have transport', () => {
            expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal(`You can go on home tour!`);
        });
        it('check for "You can go on home tour!" location is Plovdiv and have transport', () => {
            expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.equal(`You can go on home tour!`);
        });
        it('check for "There is no public transport in area." location is Plovdiv and dont have have transport', () => {
            expect(findNewApartment.isGoodLocation("Plovdiv", false)).to.equal(`There is no public transport in area.`);
        });
        it('check for "There is no public transport in area." location is Varna and dont have have transport', () => {
            expect(findNewApartment.isGoodLocation("Varna", false)).to.equal(`There is no public transport in area.`);
        });
        it('check for "There is no public transport in area." location is Sofia and dont have have transport', () => {
            expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal(`There is no public transport in area.`);
        });

     });

     describe('isLargeEnough', () => {
        let result = [];
        it('if appartament is > from minimal meters', () => {
            assert.equal(findNewApartment.isLargeEnough([20], 10), 20)
        });
        it('two of apartments is large enougth', () => {
            assert.equal(findNewApartment.isLargeEnough([10], 10), 10)
        });
        it('throw an error if the apartments not an array', () => {
            expect(() => findNewApartment.isGoodLocation("test", 69).to.throw('Invalid input!'));
        });
        it('throw an error if the apartmants is an array but it length is 0', () => {
            expect(() => findNewApartment.isGoodLocation([], 69).to.throw('Invalid input!'));
        });
        it('throw an error if the apartmants are null', () => {
            expect(() => findNewApartment.isGoodLocation(null, 88).to.throw('Invalid input!'));
        });
        it('throw an error if the apartmants are object', () => {
            expect(() => findNewApartment.isGoodLocation({}, 88).to.throw('Invalid input!'));
        });
        it('throw an error if the apartmants are number', () => {
            expect(() => findNewApartment.isGoodLocation(44, 88).to.throw('Invalid input!'));
        });
        it('throw an error if the minimal metres are string', () => {
            expect(() => findNewApartment.isGoodLocation([40, 50], '').to.throw('Invalid input!'));
        });
        it('throw an error if the minimal metres are float', () => {
            expect(() => findNewApartment.isGoodLocation([40, 50], 22.5).to.throw('Invalid input!'));
        });
        it('throw an error if the minimal metres are object', () => {
            expect(() => findNewApartment.isGoodLocation([20, 30], {}).to.throw('Invalid input!'));
        });
        it('throw an error if the minimal metres are array', () => {
            expect(() => findNewApartment.isGoodLocation([20, 30], []).to.throw('Invalid input!'));
        });
        it('throw an error if the minimal metres are null', () => {
            expect(() => findNewApartment.isGoodLocation([40, 50], null).to.throw('Invalid input!'));
        });






        describe('isItAffordable', () => {
            it('throw an error if the price are string', () => {
                expect(() => findNewApartment.isItAffordable("test", 69).to.throw('Invalid input!'));
            });
            it('throw an error if the price are object', () => {
                expect(() => findNewApartment.isItAffordable({}, 69).to.throw('Invalid input!'));
            });
            it('throw an error if the price are array', () => {
                expect(() => findNewApartment.isItAffordable([], 69).to.throw('Invalid input!'));
            });
            it('throw an error if the price are float', () => {
                expect(() => findNewApartment.isItAffordable(12.2, 69).to.throw('Invalid input!'));
            });
            it('throw an error if the budget are float', () => {
                expect(() => findNewApartment.isItAffordable(12, 22.4).to.throw('Invalid input!'));
            });
            it('throw an error if the budget are array', () => {
                expect(() => findNewApartment.isItAffordable(12, []).to.throw('Invalid input!'));
            });
            it('throw an error if the budget are object', () => {
                expect(() => findNewApartment.isItAffordable(12, {}).to.throw('Invalid input!'));
            });
            it('throw an error if the budget are string', () => {
                expect(() => findNewApartment.isItAffordable(12, "").to.throw('Invalid input!'));
            });
            it('throw an error if the budget are less than 0', () => {
                expect(() => findNewApartment.isItAffordable(12, -10).to.throw('Invalid input!'));
            });
            it('throw an error if the price are less than 0', () => {
                expect(() => findNewApartment.isItAffordable(-10, 10).to.throw('Invalid input!'));
            });
            it('throw an error if the budget and price are less than 0', () => {
                expect(() => findNewApartment.isItAffordable(-12, -10).to.throw('Invalid input!'));
            });
            it('throw an error if the price are equal to  0', () => {
                expect(() => findNewApartment.isItAffordable(0, 10).to.throw('Invalid input!'));
            });
            it('throw an error if the budget are equal to 0', () => {
                expect(() => findNewApartment.isItAffordable(10, 0).to.throw('Invalid input!'));
            });
            it('check if the result is less than 0', () => {
                expect(findNewApartment.isItAffordable(20, 10)).to.equal(`You don't have enough money for this house!`);
            });
            it('check if the result is more than 0', () => {
                expect(findNewApartment.isItAffordable(10, 20)).to.equal(`You can afford this home!`);
            });
        });
    });
});
