const SHOP_DATA = [
  {
    title: "Hoodies",
    items: [
      {
        id: 1,
        name: "Scuba Full-Zip Hoodie Plush",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW4ATWS_067409_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 148,
      },
      {
        id: 2,
        name: "Scuba Oversized Pullover Hoodie",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW3HSXS_030699_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 118,
      },
      {
        id: 3,
        name: "Define Jacket Nulu",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW4CFOS_069753_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 118,
      },
      {
        id: 4,
        name: "Softstreme Jacket",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW3IV5S_055138_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 148,
      },
      {
        id: 5,
        name: "Smooth Spacer Classic-Fit Pullover Hoodie",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM3FDVS_068027_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 138,
      },
      {
        id: 6,
        name: "Steady State Crew",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM3FABS_031382_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 110,
      },
      {
        id: 7,
        name: "Soft Jersey Half Zip",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM3ES1S_063781_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 98,
      },
      {
        id: 8,
        name: "Crew Graphic",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM3ERYS_1263_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 108,
      },
    ],
  },
  {
    title: "Joggers",
    items: [
      {
        id: 9,
        name: "Scuba Mid-Rise Oversized Jogger",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW5GLNS_026458_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 118,
      },
      {
        id: 10,
        name: "Soft Jersey Classic-Fit Mid-Rise Jogger",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW5GCSS_063925_2?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 96,
      },
      {
        id: 11,
        name: "Dance Studio Mid-Rise Jogger",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW5ENMS_064820_2?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 98,
      },
      {
        id: 12,
        name: "Dance Studio Mid-Rise Jogger",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW5GIOS_031382_2?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 148,
      },
      {
        id: 13,
        name: "Soft Jersey Jogger Regular",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM5BBYS_063781_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 98,
      },
      {
        id: 14,
        name: "ABC Jogger Regular",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM5AMZS_026865_2?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 128,
      },
      {
        id: 15,
        name: "Zeroed In Classic-Fit Pant",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM5AZRS_047780_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 98,
      },
      {
        id: 16,
        name: "Smooth Spacer Jogger",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM5B18S_068027_2?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 128,
      },
    ],
  },
  {
    title: "Shoes",
    items: [
      {
        id: 17,
        name: "Women's Cityverse Sneaker",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW9FFIS_070042_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 138,
      },
      {
        id: 18,
        name: "Women's Chargefeel 2 Mid Workout Shoe",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW9EQ1S_062982_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 148,
      },
      {
        id: 19,
        name: "Women's Beyondfeel Running Shoe",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW9FGCS_070027_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 158,
      },
      {
        id: 20,
        name: "Women's Strongfeel Training Shoe",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW9EMKS_058658_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 128,
      },
      {
        id: 21,
        name: "Lunar New Year Men's Cityverse Sneaker",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM9B07S_070057_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 138,
      },
      {
        id: 22,
        name: "Men's Cityverse Sneaker",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM9AV8S_070042_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 138,
      },
      {
        id: 23,
        name: "Men's Trail Running Shoe",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM9AVES_070033_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 168,
      },
      {
        id: 24,
        name: "Men's Waterproof Running Shoe",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM9B08S_071697_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 168,
      },
    ],
  },
  {
    title: "Backpacks",
    items: [
      {
        id: 25,
        name: "Double-Zip Backpack 22L",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LU9BRIS_064774_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 98,
      },
      {
        id: 26,
        name: "Drawstring Bucket Backpack 10L",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW9FUKS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 116,
      },
      {
        id: 27,
        name: "Daily Tote Bag 20L",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LU9BN2S_064485_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 68,
      },
      {
        id: 28,
        name: "New Parent Backpack 17L",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LU9BJZS_050984_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 198,
      },
      {
        id: 29,
        name: "Cruiser Backpack 23L",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM9AQ0S_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 168,
      },
      {
        id: 30,
        name: "Active Backpack 10L",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LU9AVWS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 128,
      },
      {
        id: 31,
        name: "Wunderlust Backpack Mini 14L",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LU9B23S_0393_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 128,
      },
      {
        id: 32,
        name: "Travel Backpack 45L",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LU9BPFS_065082_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 198,
      },
    ],
  },
  {
    title: "Womens",
    items: [
      {
        id: 33,
        name: "StretchSeal Street Jacket",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW4CEVS_0001_1?wid=1125&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 398,
      },
      {
        id: 34,
        name: "Featherweight Puffer Vest",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW4CHQS_068605_1?wid=1125&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 298,
      },
      {
        id: 35,
        name: "Women's Performance Jacket",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW4CEGS_027597_1?wid=1125&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 198,
      },
      {
        id: 36,
        name: "Short-Sleeve Shirt",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW3GZHS_069113_1?wid=1125&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 68,
      },
      {
        id: 37,
        name: "Train High-Rise Tight",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW5DJ0S_068585_2?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 98,
      },
      {
        id: 38,
        name: "Wunder High-Rise Tight",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW5GJ4S_030210_2?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 128,
      },
      {
        id: 39,
        name: "Quick-Dry Polo Shirt",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW3HL7S_0002_2?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 78,
      },
      {
        id: 40,
        name: "Box-Pleat Tennis Skirt",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LW8ALDR_033476_2?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 88,
      },
    ],
  },
  {
    title: "Mens",
    items: [
      {
        id: 41,
        name: "Navigation Hoodie",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM4AH5S_031382_1?wid=1125&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 268,
      },
      {
        id: 42,
        name: "Wunder Puff Vest",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM4AIHS_0001_1?wid=1125&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 248,
      },
      {
        id: 43,
        name: "Long-Sleeve Shirt",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM3FHKS_0572_1?wid=1125&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 88,
      },
      {
        id: 44,
        name: "Classic-Fit VersaTwill",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM5AX5S_8206_2?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 120,
      },
      {
        id: 45,
        name: "ABC Jogger Tall",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM5AQLT_029283_2?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 128,
      },
      {
        id: 46,
        name: "Classic-Fit Short",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM7BMIS_032476_2?wid=1125&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 98,
      },
      {
        id: 47,
        name: "700-Down-Fill Hoodie",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM4AAES_047780_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 228,
      },
      {
        id: 48,
        name: "Evolution Polo Shirt",
        imageUrl:
          "https://images.lululemon.com/is/image/lululemon/LM3EQKS_059164_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        price: 98,
      },
    ],
  },
];

export default SHOP_DATA;
