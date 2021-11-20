export type ColourDatum = {
  title: string;
  category: '赤と青' | '派手と地味';
  description: string;
  designer: string;
  before: string;
  after: string[];
};
export const colourData: ColourDatum[] = [
  {
    title: 'タイトル',
    category: '派手と地味',
    description: '説明文だよ',
    designer: 'hiroki',
    before: '',
    after: [''],
  },
];
