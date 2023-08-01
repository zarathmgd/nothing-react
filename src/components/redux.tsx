import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import BluePerfume from "../assets/Blue perfume.png";
import RedPerfume from "../assets/Red perfume.png";
import GreenPerfume from "../assets/Green perfume.png";
import SilverPerfume from "../assets/Silver perfume.png";
import BlueBottlePlant from "../assets/Blue perfume-plant.png";
import RedBottlePlant from "../assets/Red perfume-plant.png";
import GreenBottlePlant from "../assets/Green perfume-plant.png";
import SilverBottlePlant from "../assets/Silver perfume-plant.png";

export interface Iperfume {
  id: number;
  linkBottle: string;
  linkBottlePlant: string;
  name: string;
  description: string;
  notes: string;
  price: number;
  quantity: number;
}

const initialStateCart: Iperfume[] = [];

const cart = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    addItem: (state, action: PayloadAction<Iperfume>) => {
      const currentItem = state.find((item) => item.id === action.payload.id);
      currentItem ? currentItem.quantity++ : state.push({ ...action.payload, quantity: 1 });
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state = state.filter((item) => item.id !== action.payload);
      return state;
    },
  },
});

const initialStatePerfume: Array<Iperfume> = [
  {
    id: 1,
    linkBottle: BluePerfume,
    linkBottlePlant: BlueBottlePlant,
    name: "Aqua marine",
    description: "A fragrance with marine freshness that will take you on a journey under a gentle breeze of air.",
    notes: "Grapefruit, lemon, cedar and rosemary.",
    price: 50,
    quantity: 0,
  },
  {
    id: 2,
    linkBottle: RedPerfume,
    linkBottlePlant: RedBottlePlant,
    name: "Dark amber",
    description: "A fragrance with a woody density that will bring out your bravery and nobility.",
    notes: "Amber, cedar, cinnamon and vanilla.",
    price: 65,
    quantity: 0,
  },
  {
    id: 3,
    linkBottle: GreenPerfume,
    linkBottlePlant: GreenBottlePlant,
    name: "Natural wind",
    description: "A light fragrance that will take you for a walk in the heart of a green meadow.",
    notes: "Green tea, jasmin, violet and lemon.",
    price: 50,
    quantity: 0,
  },
  {
    id: 4,
    linkBottle: SilverPerfume,
    linkBottlePlant: SilverBottlePlant,
    name: "Silver tone",
    description: "A powerful and sparkling fragrance that will bring out your energy and determination.",
    notes: "Bergamot, apple, ginger and lavender.",
    price: 45,
    quantity: 0,
  },
];

const perfume = createSlice({
  name: "perfume",
  initialState: initialStatePerfume,
  reducers: {},
});

const cartVisibility = createSlice({
  name: "cartVisibility",
  initialState: false,
  reducers: {
    setCartVisibility: (state) => {
      state = !state;
      return state;
    },
  },
});

export const { addItem, removeItem } = cart.actions;
export const { setCartVisibility } = cartVisibility.actions;

export const store = configureStore({
  reducer: {
    cart: cart.reducer,
    perfume: perfume.reducer,
    cartVisibility: cartVisibility.reducer,
  },
});
