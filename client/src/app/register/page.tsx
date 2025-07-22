'use client'
import Button from '@/components/ui/Button'
import GoogleButton from '@/components/ui/GoogleButton'

import { useState, FormEvent } from 'react'

export default function Register() {
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    // Validaciones básicas
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || 'Error al registrar')
      }

      // Redirigir al usuario después del registro exitoso
      window.location.href = '/login'
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al registrar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-4 sm:px-6 py-20 sm:py-12 mt-10 sm:mt-40 lg:mt-40 mx-auto w-full max-w-md rounded-xl ">
        <div className="mx-auto w-full max-w-sm">
          <img 
            alt="Your Company"
            src="/logo-web.png"
            className="h-15 sm:h-15 animate-bounce"
          />
          
          <h2 className="mt-2 ml-0.5 text-4xl/9 font-bold tracking-tight text-gray-100">
            Regístrate
          </h2>
        </div>

        <div className="mt-6 m-2 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-100/10 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block ml-1 text-lg/6 font-light text-white/40">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Ingresa tu nombre"
                  className="block w-full h-12 rounded-xl bg-zinc-800 px-3 py-1.5 text-lg text-gray-200 placeholder:text-gray-400/30 sm:text-lg/6 outline-0 "
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block ml-1 text-lg/6 font-light text-white/40">
                Correo
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Ingresa tu correo electrónico"
                  className="block w-full h-12 rounded-xl bg-zinc-800 px-3 py-1.5 text-lg text-gray-200 placeholder:text-gray-400/30 sm:text-lg/6 outline-0 "
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block ml-1 text-lg/6 font-light text-white/40">
                  Contraseña
                </label>
                <div className="text-sm">
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Ingresa tu contraseña"
                  className="block w-full h-12 rounded-xl bg-zinc-800 px-3 py-1.5 text-lg text-gray-200 placeholder:text-gray-400/30 sm:text-lg/6 outline-0"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-10 py-2 text-lg rounded-xl"
              disabled={loading}
            >
              {loading ? 'Registrando...' : 'Registrarme'}
            </Button>
            <GoogleButton />
          </form>
        </div>
      </div>
    </>
  )
}
