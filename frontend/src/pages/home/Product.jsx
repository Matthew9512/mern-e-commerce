import { useParams } from 'react-router-dom';
import { Section } from '../../ui/Section';

export const Product = () => {
   const { id } = useParams();

   return <Section variant='flexCol'></Section>;
};
