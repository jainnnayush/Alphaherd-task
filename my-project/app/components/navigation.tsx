import Link from 'next/link';
import { Home, DollarSign, Package, Database, Bell, User, ArrowUpCircle } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-[#1A1A1A] text-white font-sans">
      <div className="flex items-center space-x-10">
        {/* Home */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-[#A2A3A3] hover:text-[#40C7B9] transition-colors"
        >
          <Home size={18} />
          <span>Home</span>
        </Link>

        {/* Finances */}
        <Link
          href="/finances"
          className="flex items-center space-x-2 text-[#A2A3A3] hover:text-[#40C7B9] transition-colors"
        >
          <DollarSign size={18} />
          <span>Finances</span>
        </Link>

        {/* Inventory */}
        <Link
          href="/inventory"
          className="flex items-center space-x-2 text-[#A2A3A3] hover:text-[#40C7B9] transition-colors"
        >
          <Package size={18} />
          <span>Inventory</span>
        </Link>

        {/* Database (Active Link) */}
        <Link
          href="/database"
          className="flex items-center space-x-2 text-[#40C7B9]"
        >
          <Database size={18} />
          <span>Database</span>
        </Link>
      </div>

      <div className="flex items-center space-x-8">
        {/* Bell Icon */}
        <button className="hover:text-[#40C7B9] transition-colors">
          <Bell size={18} />
        </button>

        {/* User Icon */}
        <button className="hover:text-[#40C7B9] transition-colors">
          <User size={18} />
        </button>

        {/* Arrow Icon */}
        <button className="bg-[#40C7B9] p-1 rounded-full hover:bg-[#3BB3A6] transition-colors">
          <ArrowUpCircle size={18} />
        </button>
      </div>
    </nav>
  );
}
