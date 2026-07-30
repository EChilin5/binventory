import React from 'react'

import { MoveDownRight } from 'lucide-react';

interface RecentTransactionsCard{
    title:string,
    productsoldtype: string,
    name: string,
    date: string,
    productusetype: string,
}
const RecentTransactionsCard = ({title, productsoldtype, name, date, productusetype} : RecentTransactionsCard) => {
  return (
    <div>
        <div className='rct-left'><MoveDownRight /></div>
        <div className='rct-mid'>
            <div>{title}</div>
            <div><span>{productsoldtype}</span><span>{name}</span><span>{date}</span></div>
            <div>{productusetype}</div>
        </div>
        <div className='rct-right'>-1</div>
    </div>
  )
}

export default RecentTransactionsCard