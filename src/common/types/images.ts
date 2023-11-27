import { StaticImageData } from 'next/image';

export type ImageWithSizeType = { id: number; image: StaticImageData; imageMin: StaticImageData; alt?: string };
