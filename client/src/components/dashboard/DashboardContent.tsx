'use client'
import { ReactNode } from 'react'
import { Home, Reports, Dashboard, About, Settings } from './views'

interface DashboardContentProps {
  activeSection: string
}

export default function DashboardContent({
  activeSection,
}: DashboardContentProps) {
  const renderContent = (): ReactNode => {
    switch (activeSection) {
      case 'home':
        return <Home />
      case 'informes':
        return <Reports />
      case 'movimientos':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Movimientos "POR VER SI LO DEJO"  
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Registra y visualiza todos tus movimientos financieros.
            </p>
          </div>
        )
      case 'dashboard':
        return <Dashboard />
      case 'configuracion':
        return <Settings />
      case 'about':
        return <About />
      default:
        return null
    }
  }

  return (
    <div className="flex-1 h-screen overflow-y-auto bg-gray-50 dark:bg-gray-900">
      {renderContent()}
    </div>
  )
}
