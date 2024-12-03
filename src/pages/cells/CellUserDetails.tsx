import React from 'react'
import CellBanner from '../../sections/cells/CellBanner';

const CellUserDetails = () => {
  return (
    <div className='h-full flex flex-col px-2 md:px-8 gap-3'>
        <CellBanner title='Dada Oladimeji' status='Overdue' isCell={false} />
    </div>
  )
}

export default CellUserDetails;
