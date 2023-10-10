import { LinkButton } from '../../../ui/LinkButton';

export const Widget = ({ header, data, to, overall }) => {
   return (
      <div className='border border-primaryBlack w-72 rounded-md p-4 space-y-4'>
         <p className='font-semibold text-lg'>{header}:</p>
         <div className='flex items-center gap-4 pb-2'>
            <p className='text-3xl font-bold'>{overall || 'overall'}</p>
            <span>|</span>
            <p>this month: {data}</p>
         </div>
         <LinkButton customClass='underline' to={`${'/admin/' + to}`}>
            See all {to}
         </LinkButton>
      </div>
   );
};
