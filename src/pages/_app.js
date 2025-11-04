import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar2";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Read session user
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const raw = localStorage.getItem('fakeUser');
    try { setUser(raw ? JSON.parse(raw) : null); } catch { setUser(null); }
  }, [router.pathname]);

  // Route guard: only '/' is public (login)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isLogged = !!localStorage.getItem('fakeUser');
    const publicRoutes = ['/'];
    const path = router.pathname;
    if (!isLogged && !publicRoutes.includes(path)) {
      router.replace('/');
    }
  }, [router.pathname]);

  function logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('fakeUser');
      setUser(null);
      router.push('/');
    }
  }

  const isPublic = router.pathname === '/';

  if (isPublic) {
    // Login page without app chrome
    return <Component {...pageProps} />;
  }

  return (
    <div className="min-h-screen ui-shell flex">
      <Sidebar />
      <main className="flex-1">
        {user && (
          <div className="px-4 py-2 border-b border-gray-200 bg-white/90 flex items-center justify-between">
            <div className="text-sm text-gray-800">Sessão: <span className="font-medium">{user.name}</span></div>
            <button onClick={logout} className="text-xs text-gray-600 underline">Sair</button>
          </div>
        )}
        <Component {...pageProps} />
      </main>
    </div>
  );
}
