import React from 'react'
import CellBanner from '../../sections/cells/CellBanner';
import Info from '../../components/infos/Info';
import ExportBtn from '../../components/buttons/ExportBtn';
import Updates from '../../sections/cells/Updates';
import CellHistoryTable from '../../sections/cells/CellHistoryTable';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



const CellUserDetails = () => {
  
  const navigate = useNavigate();

  return (
    <div className='h-full flex flex-col px-2 md:px-8 gap-3'>
        <CellBanner title='Dada Oladimeji' status='Overdue' isCell={false} cell/>

        <div className='flex flex-col border-[1px] rounded-3xl gap-4 p-4 w-full'>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <ArrowBack style={{ color: 'gray', cursor: 'ponter' }} onClick={() => navigate('/cells/:id')}/>
            <Info text='Contribution History'/>
          </div>

          <div className="flex items-end justify-end gap-4">
            <ExportBtn text='Export' onClick={() => {}}/>
          </div>
        </div>

        <div className="flex gap-3 m-1">
          <CellHistoryTable/>
          <div className="border-r-2 w-[1px]"></div>
          <Updates title='Activity Logs'/>
        </div>
        </div>
    </div>
  )
}


export default CellUserDetails;
