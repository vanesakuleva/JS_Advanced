class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = null;
    }
    reserveABottle(wineName, wineType, price) {
        if (this.space <= 0) {
            throw new Error('Not enough space in the cellar.');
        }
        let newWine = {
            wineName,
            wineType,
            price: price,
            paid: false
        };
        this.space -= 1
        this.wines.push(newWine);
        return (`You reserved a bottle of ${wineName} ${wineType} wine.`);
    }
    payWineBottle(wineName, price) {
        let currentWine = this.wines.find(x => x.wineName == wineName);
        if (!currentWine) {
            throw new Error(`${wineName} is not in the cellar.`);
        } if (currentWine.paid == true) {
            throw new Error(`${wineName} has already been paid.`)
        }
        currentWine.paid = true;
        this.bill += currentWine.price;
        return `You bought a ${wineName} for a ${price}$.`;
    }
 
    openBottle(wineName) {
        let currentWine = this.wines.find(x => x.wineName == wineName);
        if (!currentWine) {
            throw new Error(`The wine, you're looking for, is not found.`);
        } if (currentWine.paid == false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }
 
        this.wines = this.wines.filter(x => x.wineName != wineName);
        return `You drank a bottle of ${wineName}.`;
    }
    cellarRevision(wineType) {
        let result = [];
        this.wines.map((x) => {
            if (x.paid == true) {
                x.paid = 'Has Paid';
            } else {
                x.paid = 'Not Paid';
            }
 
        })
        if (!wineType) {
            result.push(`You have space for ${this.space} bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);
            this.wines.sort((b, a) => (b.wineName > a.wineName) ? 1 : ((a.wineName > b.wineName) ? -1 : 0))
            .map((x) => result.push(`${x.wineName} > ${x.wineType} - ${x.paid}.`))
        } else {
            let currentWine = this.wines.find(x => x.wineType == wineType);
            if (!currentWine) {
                throw new Error(`There is no ${wineType} in the cellar.`)
            }
            result.push(`${currentWine.wineName} > ${wineType} - ${currentWine.paid}.`)
        }
 
        return result.join("\n");