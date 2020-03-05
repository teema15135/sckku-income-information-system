export class Fee {
  fees: Item[];
}

export class Item {
  id: string;
  name: string;
  depth?: number;
  values: number[];
}
