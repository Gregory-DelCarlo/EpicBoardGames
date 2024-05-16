export interface Game {
  _id?: string;
  name: string;
  type: "base game" | "expansion" | "art";
  description?: string;
  rating?: number;
  creator?: string;
  features: Array<String>;
  price: number;
  release_date?: Date;
  add_ons?: Array<String>;
  editions?: Array<String>;
  base_game?: Array<String>;
};
