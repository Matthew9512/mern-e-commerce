import {
   AiOutlineGithub,
   AiOutlineLinkedin,
   AiOutlineClose,
   AiOutlineLoading3Quarters,
   AiOutlineUser,
   AiOutlineDelete,
} from 'react-icons/ai';
import { HiOutlineShoppingCart, HiShoppingCart } from 'react-icons/hi';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';

export const githubIcon = <AiOutlineGithub />;
export const linkedInIcon = <AiOutlineLinkedin />;
export const userIcon = <AiOutlineUser style={{ height: '24px', width: '24px' }} />;
export const closeIcon = <AiOutlineClose style={{ height: '14px', width: '14px' }} />;
export const shoppingCartOutlineIcon = <HiOutlineShoppingCart style={{ height: '24px', width: '24px' }} />;
export const shoppingCartFillIcon = <HiShoppingCart style={{ height: '24px', width: '24px' }} />;
export const loadingSpinnerIcon = <AiOutlineLoading3Quarters className='animate-spin' />;
export const deleteIcon = <AiOutlineDelete style={{ height: '20px', width: '20px' }} />;
export const logoIcon = <GiFullMotorcycleHelmet style={{ height: '30px', width: '30px' }} />;
