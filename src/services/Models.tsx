export interface Goods {
  Item: {
    // src: string;
    // itemName: string;
    // itemCaption: string;
    // itemPrice: number;
    // itemUrl: string;
    // genreId: string;
    affiliateRate: number;
    affiliateUrl: string;
    asurakuArea: string;
    asurakuClosingTime: string;
    asurakuFlag: number;
    availability: number;
    catchcopy: string;
    creditCardFlag: number;
    endTime: string;
    genreId: string;
    giftFlag: number;
    imageFlag: number;
    itemCaption: string;
    itemCode: string;
    itemName: string;
    itemPrice: number;
    itemUrl: string;
    mediumImageUrls: Array<{ imageUrl: string }>;
    pointRate: number;
    pointRateEndTime: string;
    pointRateStartTime: string;
    postageFlag: number;
    reviewAverage: number;
    reviewCount: number;
    shipOverseasArea: string;
    shipOverseasFlag: number;
    shopAffiliateUrl: string;
    shopCode: string;
    shopName: string;
    shopOfTheYearFlag: number;
    shopUrl: string;
    smallImageUrls: Array<{ imageUrl: string }>;
    startTime: string;
    tagIds: Array<number>;
    taxFlag: number;
  };
}

export interface User {
  name: string;
  email: string;
  uid: string;
  age: string;
}
