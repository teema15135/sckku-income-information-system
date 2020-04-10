export class Fee {
  month: string;
  year: string;
  fees: Item[];
}

export class Item {
  id: string;
  name: string;
  depth?: number;
  values: number[];
}
