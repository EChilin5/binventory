import React from 'react'


interface RecentUpdatesProp{
    name: string,
    type:string,
    status: string,
    amount: string,

}

const RecentUpdates = ({name, type, status, amount}: RecentUpdatesProp) => {
  return (
    <div>
        <div className='ru-left'>
            <div>{name}</div>
            <div>{type}</div>
        </div>
        <div className='ru-right'>
            <div>{amount}</div>
            <div>{status}</div>
        </div>
    </div>
  )
}

export default RecentUpdates