import Divider from '../ui/Divider'
import Avatar from '../ui/Avatar'
import { useState } from 'react'

interface DashboardAsideProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

function DashboardAside({ activeSection, onSectionChange }: DashboardAsideProps) {
  return (
    <aside className="flex flex-col w-60 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-950 dark:border-gray-700">
      <a href="#">
        <img className="w-auto h-14" src="/logo-web.png" alt="" />
      </a>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-">
          <div className="space-y-3 ">
            <button
              onClick={() => onSectionChange('home')}
              className={`flex w-full items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer ${
                activeSection === 'home' ? 'bg-gray-100 dark:bg-gray-800' : ''
              }`}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <span className="mx-2 text-sm font-medium">Home</span>
            </button>

            <button onClick={() => onSectionChange('informes')}
              className={`flex w-full items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer${
                activeSection === 'informes' ? 'bg-gray-100 dark:bg-gray-800' : ''
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                />
              </svg>
              <span className="mx-2 text-sm font-medium">Informes</span>
            </button>

            <button onClick={() => onSectionChange('movimientos')}
              className={`flex w-full items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer${
                activeSection === 'movimientos' ? 'bg-gray-100 dark:bg-gray-800' : ''
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path d="M3 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0M14 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0M3 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M9 17l5-1.5M6.5 8.5l7.81 5.37M7 7l8-1"></path>
              </svg>
              <span className="mx-2 text-sm font-medium">Movimientos</span>
            </button>

            <button onClick={() => onSectionChange('dashboard')}
              className={`flex w-full items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer${
                activeSection === 'dashboard' ? 'bg-gray-100 dark:bg-gray-800' : ''
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20.38 8.57l-1.23 1.85a8 8 0 01-.22 7.58H5.07A8 8 0 0115.58 6.85l1.85-1.23A10 10 0 003.35 19a2 2 0 001.72 1h13.85a2 2 0 001.74-1 10 10 0 00-.27-10.44z" />
                <path d="M10.59 15.41a2 2 0 002.83 0l5.66-8.49-8.49 5.66a2 2 0 000 2.83z" />
              </svg>
              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </button>

            <Divider />
          </div>

          <div className="space-y-3 ">
            <button
              onClick={() => onSectionChange('configuracion')}
              className={`flex w-full items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer ${
                activeSection === 'configuracion' ? 'bg-gray-100 dark:bg-gray-800' : ''
              }`}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="mx-2 text-sm font-medium">Configuración</span>
            </button>

            <button
              onClick={() => onSectionChange('about')}
              className={`flex w-full items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer ${
                activeSection === 'about' ? 'bg-gray-100 dark:bg-gray-800' : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <path d="M12.802 2.165l5.575 2.389c.48.206.863.589 1.07 1.07l2.388 5.574c.22.512.22 1.092 0 1.604l-2.389 5.575c-.206.48-.589.863-1.07 1.07l-5.574 2.388c-.512.22-1.092.22-1.604 0l-5.575-2.389a2.036 2.036 0 01-1.07-1.07l-2.388-5.574a2.036 2.036 0 010-1.604l2.389-5.575c.206-.48.589-.863 1.07-1.07l5.574-2.388a2.036 2.036 0 011.604 0zM12 16v.01" />
                <path d="M12 13a2 2 0 00.914-3.782 1.98 1.98 0 00-2.414.483" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="mx-2 text-sm font-medium">Acerca de</span>
            </button>

            <div className="ml-1 mb-1 absolute bottom-4 left-4">
              <Avatar />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}
export default DashboardAside
