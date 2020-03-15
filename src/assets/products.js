const mbAirImage = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1541713862468'
const mbPro13 = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-201807?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1529520060550'
const mbPro16 = 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1572825197207'

export const products = {
  mb_air: [
    {
      id: 1,
      title: '1.6GHz Dual-Core Processor with Turbo Boost up to 3.6GHz 128GB Storage Touch ID',
      price: 1099,
      description: 'Retina display with True Tone\n' +
        '1.6GHz dual-core 8th-generation Intel Core i5 processor with Turbo Boost up to 3.6GHz\n' +
        '8GB 2133MHz LPDDR3 memory\n' +
        '128GB SSD storage¹\n' +
        'Intel UHD Graphics 617\n' +
        'Touch ID\n' +
        'Force Touch trackpad\n' +
        'Two Thunderbolt 3 ports',
      image: mbAirImage
    },
    {
      id: 2,
      title: '1.6GHz Dual-Core Processor with Turbo Boost up to 3.6GHz 256GB Storage Touch ID',
      price: 1299,
      description: 'Retina display with True Tone\n' +
        '1.6GHz dual-core 8th-generation Intel Core i5 processor with Turbo Boost up to 3.6GHz\n' +
        '8GB 2133MHz LPDDR3 memory\n' +
        '256GB SSD storage¹\n' +
        'Intel UHD Graphics 617\n' +
        'Touch ID\n' +
        'Force Touch trackpad\n' +
        'Two Thunderbolt 3 ports',
      image: mbAirImage
    }
  ],
  mb_pro_13: [
    {
      id: 3,
      title: '1.4GHz Quad-Core Processor with Turbo Boost up to 3.9GHz 128GB Storage Touch Bar and Touch ID',
      price: 1299,
      description: '1.4GHz quad-core 8th-generation Intel Core i5 processor\n' +
        'Turbo Boost up to 3.9GHz\n' +
        'Intel Iris Plus Graphics 645\n' +
        '8GB 2133MHz LPDDR3 memory\n' +
        '128GB SSD storage¹\n' +
        'Retina display with True Tone\n' +
        'Touch Bar and Touch ID\n' +
        'Two Thunderbolt 3 ports',
      image: mbPro13
    },
    {
      id: 4,
      title: '1.4GHz Quad-Core Processor with Turbo Boost up to 3.9GHz 256GB Storage Touch Bar and Touch ID',
      price: 1499,
      description: '1.4GHz quad-core 8th-generation Intel Core i5 processor\n' +
        'Turbo Boost up to 3.9GHz\n' +
        'Intel Iris Plus Graphics 645\n' +
        '8GB 2133MHz LPDDR3 memory\n' +
        '256GB SSD storage¹\n' +
        'Retina display with True Tone\n' +
        'Touch Bar and Touch ID\n' +
        'Two Thunderbolt 3 ports',
      image: mbPro13
    },
    {
      id: 5,
      title: '2.4GHz Quad-Core Processor with Turbo Boost up to 4.1GHz 256GB Storage Touch Bar and Touch ID',
      price: 1799,
      description: '2.4GHz quad-core 8th-generation Intel Core i5 processor\n' +
        'Turbo Boost up to 4.1GHz\n' +
        'Intel Iris Plus Graphics 645\n' +
        '8GB 2133MHz LPDDR3 memory\n' +
        '256GB SSD storage¹\n' +
        'Retina display with True Tone\n' +
        'Touch Bar and Touch ID\n' +
        'Two Thunderbolt 3 ports',
      image: mbPro13
    },
    {
      id: 6,
      title: '2.4GHz Quad-Core Processor with Turbo Boost up to 4.1GHz 512GB Storage Touch Bar and Touch ID',
      price: 1999,
      description: '2.4GHz quad-core 8th-generation Intel Core i5 processor\n' +
        'Turbo Boost up to 4.1GHz\n' +
        'Intel Iris Plus Graphics 645\n' +
        '8GB 2133MHz LPDDR3 memory\n' +
        '512GB SSD storage¹\n' +
        'Retina display with True Tone\n' +
        'Touch Bar and Touch ID\n' +
        'Two Thunderbolt 3 ports',
      image: mbPro13
    }
  ],
  mb_pro_16: [
    {
      id: 7,
      title: '2.6GHz 6-Core Processor 512GB Storage AMD Radeon Pro 5300M',
      price: 2399,
      description: '2.6GHz 6-core 9th-generation Intel Core i7 processor\n' +
        'Turbo Boost up to 4.5GHz\n' +
        'AMD Radeon Pro 5300M with 4GB of GDDR6 memory\n' +
        '16GB 2666MHz DDR4 memory\n' +
        '512GB SSD storage¹\n' +
        '16-inch Retina display with True Tone\n' +
        'Touch Bar and Touch ID\n' +
        'Four Thunderbolt 3 ports',
      image: mbPro16
    },
    {
      id: 8,
      title: '2.3GHz 8-Core Processor 1TB Storage AMD Radeon Pro 5500M',
      price: 2799,
      description: '2.3GHz 8-core 9th-generation Intel Core i9 processor\n' +
        'Turbo Boost up to 4.8GHz\n' +
        'AMD Radeon Pro 5500M with 4GB of GDDR6 memory\n' +
        '16GB 2666MHz DDR4 memory\n' +
        '1TB SSD storage¹\n' +
        '16-inch Retina display with True Tone\n' +
        'Touch Bar and Touch ID\n' +
        'Four Thunderbolt 3 ports',
      image: mbPro16
    }
  ]
}
