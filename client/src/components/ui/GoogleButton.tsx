
function GoogleButton() {
  return (
    <div>
      <button
        className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-3xl text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 cursor-pointer text-sm"
      >
        <img
          className="w-5 h-5"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Continuar con Google</span>
      </button>
    </div>
  );
}

export default GoogleButton;