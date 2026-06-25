import AppRouter from './routes/AppRouter.jsx';
import Navbar from './components/common/Navbar.jsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      <main className="flex-1 w-full">
        <AppRouter />
      </main>
    </div>
  );
}

export default App;