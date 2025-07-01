declare function toBinary(Decimal: string, IsNumber: boolean = true, Negative: boolean = false): string | number
declare function toReadBytes(size: string, Separator: boolean, IsNumber: boolean): string | number

declare namespace toBinary{}
declare namespace toReadBytes{}

export { toBinary, toReadBytes };