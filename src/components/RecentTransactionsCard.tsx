import React from 'react'
import "./RecentTransactionsCard.scss"
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
    <div className='rct'>
        <div className='rct-left'><MoveDownRight /></div>
        <div className='rct-mid'>
            <div>{title}</div>
            <div className='rct-mid-info'><span>{productsoldtype}</span><span>{name}</span><span>{date}</span></div>
            <div>{productusetype}</div>
        </div>
        <div className='rct-right'>-1</div>
    </div>
  )
}

export default RecentTransactionsCard