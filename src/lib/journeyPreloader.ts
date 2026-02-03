// All journey IDs used in the application
export const JOURNEY_IDS = {
  // Homepage calculator journeys (high priority - above the fold)
  homepage: 'ae206570-f6a9-11f0-a0ca-4bf89ca038a5',
  okostrom: 'acdd3710-f6a9-11f0-8690-bd699bceb8fd', // Also loaded on homepage
  gas: 'ac69b4c0-f6a9-11f0-bdea-71e0dd732fd3', // Also loaded on homepage
  // Other product pages
  warmestrom: 'ad3b3590-f6a9-11f0-a09d-79c81896a66f',
  ladestrom: 'ad09ec60-f6a9-11f0-a0ca-4bf89ca038a5',
  warmepumpe: '37881250-f6ea-11f0-a7a0-e7cdfacb21dc',
  wallbox: 'af941b10-f6e8-11f0-b5b3-751931812c7e',
  photovoltaik: '4fa8b7d0-f6eb-11f0-999c-9303fbefac6f',
  balkonkraftwerke: '8d321a90-fdbe-11f0-a4a6-6f54fcf2a600',
  fernwarme: '67cd2783-c5a6-4a61-b3c9-e4076eb723b3',
  // Service pages
  umzug: '34ecfce0-fdc0-11f0-86ba-f186dac4fe27',
  sepa: '72e3df50-fdc0-11f0-81ef-3f7d145b7846',
  abschlag: 'c0510a10-fdc0-11f0-a146-199ca6319320',
  kuendigung: 'c4c8eae0-fdf2-11f0-b1a3-71011c03c2f1',
  // Grid journeys
  fernwarmeGrid: '86f5bc40-7f2e-11f0-bc8c-7f288bdddcc4',
} as const;

export type JourneyKey = keyof typeof JOURNEY_IDS;
