import styled from 'styled-components';

import { IndentsType, SizesType, TypographyColorType } from '@layouts/Lampastar/types';

const Icon = styled.i<{
  size?: keyof SizesType;
  color?: keyof TypographyColorType;
  mr?: keyof IndentsType;
  ml?: keyof IndentsType;
}>`
  :before {
    font-family: 'Lampastar', sans-serif !important;
    font-size: ${({ theme, size }) => (size ? theme.sizes[size] : 'inherit')};
    font-weight: normal;
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-transform: none;
    speak: unset;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    align-content: center;
    ${({ theme, color }) => (color ? `color: ${theme.color.text[color]}` : '')};
    ${({ theme, mr }) => (mr ? `margin-right: ${theme.indents[mr]}` : '')};
    ${({ theme, ml }) => (ml ? `margin-left: ${theme.indents[ml]}` : '')};
  }
`;

export const LikeIcon = styled(Icon)`
  :before {
    content: '\\e904';
  }
`;

export const LikeActiveIcon = styled(Icon)`
  :before {
    content: '\\e90c';
  }
`;

export const PlasticCardIcon = styled(Icon)`
  :before {
    content: '\\e900';
  }
`;

export const BasketIcon = styled(Icon)`
  :before {
    content: '\\e901';
  }
`;

export const EyeAltIcon = styled(Icon)`
  :before {
    content: '\\e902';
  }
`;

export const FilterIcon = styled(Icon)`
  :before {
    content: '\\e903';
  }
`;

export const BoxIcon = styled(Icon)`
  :before {
    content: '\\e905';
  }
`;

export const SendIcon = styled(Icon)`
  :before {
    content: '\\e906';
  }
`;

export const ShareIcon = styled(Icon)`
  :before {
    content: '\\e907';
  }
`;

export const DeleteIcon = styled(Icon)`
  :before {
    content: '\\e908';
  }
`;

export const AirplaneIcon = styled(Icon)`
  :before {
    content: '\\e909';
  }
`;

export const MenuRightIcon = styled(Icon)`
  :before {
    content: '\\e90a';
  }
`;

export const BuildingsIcon = styled(Icon)`
  :before {
    content: '\\e90b';
  }
`;

export const ClockIcon = styled(Icon)`
  :before {
    content: '\\e90e';
  }
`;

export const CoinIcon = styled(Icon)`
  :before {
    content: '\\e90f';
  }
`;

export const PlasticCardAltIcon = styled(Icon)`
  :before {
    content: '\\e910';
  }
`;

export const DeliveryIcon = styled(Icon)`
  :before {
    content: '\\e911';
  }
`;

export const ArrowBottomIcon = styled(Icon)`
  :before {
    content: '\\e912';
  }
`;

export const MailIcon = styled(Icon)`
  :before {
    content: '\\e913';
  }
`;

export const EyeIcon = styled(Icon)`
  :before {
    content: '\\e915';
  }
`;

export const CalendarIcon = styled(Icon)`
  :before {
    content: '\\e918';
  }
`;

export const InstagramIcon = styled(Icon)`
  :before {
    content: '\\e919';
  }
`;

export const GoBackIcon = styled(Icon)`
  :before {
    content: '\\e91a';
  }
`;

export const ArrowLeftIcon = styled(Icon)`
  :before {
    content: '\\e91b';
  }
`;

export const ListIcon = styled(Icon)`
  :before {
    content: '\\e91c';
  }
`;

export const GeoIcon = styled(Icon)`
  :before {
    content: '\\e91e';
  }
`;

export const MoneyIcon = styled(Icon)`
  :before {
    content: '\\e91f';
  }
`;

export const PackageIcon = styled(Icon)`
  :before {
    content: '\\e920';
  }
`;

export const PhoneIcon = styled(Icon)`
  :before {
    content: '\\e921';
  }
`;

export const ReceiptIcon = styled(Icon)`
  :before {
    content: '\\e922';
  }
`;

export const GoForwardIcon = styled(Icon)`
  :before {
    content: '\\e923';
  }
`;

export const ArrowRightIcon = styled(Icon)`
  :before {
    content: '\\e924';
  }
`;

export const SearchIcon = styled(Icon)`
  :before {
    content: '\\e925';
  }
`;

export const ShopIcon = styled(Icon)`
  :before {
    content: '\\e927';
  }
`;

export const SortAscIcon = styled(Icon)`
  :before {
    content: '\\e929';
  }
`;

export const SortDescIcon = styled(Icon)`
  :before {
    content: '\\e92a';
  }
`;

export const StarIcon = styled(Icon)`
  :before {
    content: '\\e92b';
  }
`;

export const GridIcon = styled(Icon)`
  :before {
    content: '\\e92c';
  }
`;

export const TruckIcon = styled(Icon)`
  :before {
    content: '\\e92e';
  }
`;

export const ArrowTopIcon = styled(Icon)`
  :before {
    content: '\\e92f';
  }
`;

export const UserIcon = styled(Icon)`
  :before {
    content: '\\e930';
  }
`;

export const CloseIcon = styled(Icon)`
  :before {
    content: '\\e931';
  }
`;

export const WhatsappIcon = styled(Icon)`
  :before {
    content: '\\e90d';
  }
`;

export const ViberIcon = styled(Icon)`
  :before {
    content: '\\e914';
  }
`;

export const MinusIcon = styled(Icon)`
  :before {
    content: '\\e916';
  }
`;

export const PlusIcon = styled(Icon)`
  :before {
    content: '\\e917';
  }
`;
