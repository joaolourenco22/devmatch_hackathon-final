import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  function handleLogin() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('fakeUser', JSON.stringify({ name: 'Recrutadora', role: 'recruiter' }));
      router.push('/dashboard');
    }
  }

  return (
    <div className="min-h-screen ui-shell flex items-center justify-center p-4">
      <div className="ui-panel max-w-md w-full p-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <img
            src="/devmatch.png"
            alt="DevMatch"
            className="w-36 h-36 object-contain rounded-full border border-gray-200"
            onError={(e) => { e.currentTarget.src = '/logo.jpg'; }}
          />
        </div>
        <h1 className="text-xl font-semibold text-gray-900">DevMatch</h1>
        <p className="mt-1 text-sm text-gray-600">Entrar como <span className="font-medium">Recrutadora</span></p>

        <button
          type="button"
          className="ui-button-primary w-full mt-5"
          onClick={handleLogin}
        >
          Entrar
        </button>

        <p className="mt-3 text-xs text-gray-500">
          Login fictício para demonstração. Não requer credenciais.
        </p>
      </div>
    </div>
  );
}
