
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-200 to-blue-300 ">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 ">HealthLink Pro</h1>
          <div className="space-x-4">
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded "
            >
              Patient Login
            </Link>
            <Link
              to="/doctorlogin"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Doctor Login
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Welcome to Our Medical Portal</h2>
        <p className="text-center text-xl mb-8">
          Access your health information, schedule appointments, and connect with your healthcare providers.
        </p>
      </main>
      

      <footer className="bg-gray-200 py-4">
        <p className="text-center text-gray-600">© 2023 Medical Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;