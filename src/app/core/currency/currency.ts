export interface ICoin {
  id: string;
  icon: string;
  name: string;
  symbol: string;
  rank: number;
  price: number;
  priceBtc: number;
  volume: number;
  marketCap: number;
  availableSupply: number;
  totalSupply: number;
  priceChange1h: number;
  priceChange1d: number;
  priceChange1w: number;
};

export interface IFiat {
  name: string;
  rate: number;
  symbol: string;
  imageUrl: string;
}

export interface ICoinMarket {
  price: number;
  exchange: string;
  pair: string;
  volume: number;
}

export interface ITickersResponse {
  tickers: ITicker[];
}

export interface ITicker {
  from: string;
  to: string;
  exchange: string;
  price: number;
}


export interface ICoinsResponse {
  coins: ICoin[];
}

