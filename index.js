'use strict'

function toBinary(Decimal, IsNumber, Negative) {
    let NegativeTrue = false;
    if (Decimal.startsWith("-")) {
        Decimal = Decimal.replace("-", "").replace("+", "").trim()
        NegativeTrue = true;
    }

    if (NegativeTrue == true && Negative == false) {
        return "Negative is false"
    }

    if (isNaN(Decimal) && isNaN(parseFloat(Decimal))) {
        return "Is NaN";
    }

    if (!Number.isInteger(Number(Decimal))) {
        return "Only integer values are allowed.";
    }

    let NumberDecimal = parseInt(Decimal)
    let NamuageArgs = []

    while (NumberDecimal > 0) {
        let Slash = Math.floor(NumberDecimal / 2);
        let Namuage = NumberDecimal % 2;

        NumberDecimal = Slash;
        NamuageArgs.push(Namuage.toString())
    }

    let BinaryResult = [...NamuageArgs].reverse().join("");

    if (Negative == true) {
        if (NegativeTrue == true) {
            BinaryResult = "1" + BinaryResult
                    .split("")
                    .map(ch => ch === "1" ? "0" : "1")
                    .join("");

            let result = "";
            let added = false;

            for (let i = BinaryResult.length - 1; i >= 0; i--) {
                const bit = BinaryResult[i];

                if (!added) {
                    if (bit === '0') {
                        result = '1' + result;
                        added = true;
                    } else {
                        result = '0' + result;
                    }
                } else {
                    result = bit + result;
                }
            }

            if (!added) {
                result = '1' + result;
            }

            BinaryResult = result
        }
        else {
            BinaryResult = "0" + BinaryResult
        }
    }

    if (IsNumber == true) {
        return BinaryResult
    }
    else {
        return BinaryResult.toString()
    }
}

function toDecimal(size, Separator, IsNumber) { //B -> KB or MB, GB, TB ...
    if (!size.endsWith("B")) /**is not B(byte)*/ return "Only B(Byte) value"

    size = size.replace("B", "").trim()
    size = parseFloat(size)

    let unitVal = 0; //1: KB, 2: MB

    while (true) {
        size /= 1024
        unitVal++

        if (size >= 1024 && unitVal < 10) /**9이하, 10 X*/ continue

        if (isNaN(size)) return "Is NaN"

        if (Separator == true) {
            if (IsNumber == true) {
                return "Is string value"
            }
            
            return size + " " + unit[unitVal]
        }

        if (IsNumber == true) return parseFloat(size)

        return size.toString()
    }
    
}

module.exports = {
    toBinary,
    toDecimal
}