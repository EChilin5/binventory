import React from 'react'
import "./DashboardCard.scss"

import  { type LucideIcon } from 'lucide-react';

interface DashBoardCardProps {
    icon: LucideIcon,
    title: string,
    value: string
}

const DashboardCard = ({icon: Icon, title, value} : DashBoardCardProps) => {
  return (
    <div className='dashboard-card'>
      <div className='dashboard-card-icon'><Icon /></div>
      <p className='dashboard-card-title'>{title}</p>
      <p className="dashboard-card-value">{value}</p>
    </div>
  )
}

export default DashboardCard