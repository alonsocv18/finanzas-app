import Button from '@/components/ui/Button'
import GoogleButton from '@/components/ui/GoogleButton'

export default function Example() {
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
            Inicia sesión
          </h2>
        </div>

        <div className="mt-6 m-2 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form action="#" method="POST" className="space-y-6">
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
                  <a href="#" className=" mr-2 font-semibold text-white/50 hover:text-white/80">
                    ¿Olvidaste tu contraseña?
                  </a>
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

            <Button className="w-full h-10 py-2 text-lg rounded-xl">Iniciar sesión</Button>
            <GoogleButton />
          </form>
        </div>
      </div>
    </>
  )
}
