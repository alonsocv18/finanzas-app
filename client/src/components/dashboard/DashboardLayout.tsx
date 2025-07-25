'use client'
import { useState } from 'react'
import DashboardAside from './DashboardAside'
import DashboardContent from './DashboardContent'

export default function DashboardLayout() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="flex">
      <DashboardAside activeSection={activeSection} onSectionChange={setActiveSection} />
      <DashboardContent activeSection={activeSection} />
    </div>
  )
}
