'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { FiHome, FiFileText, FiMapPin, FiMail, FiSettings, FiLogOut } from 'react-icons/fi';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/admin', icon: <FiHome size={20} /> },
  { label: 'Blog', href: '/admin/blog', icon: <FiFileText size={20} /> },
  { label: 'Biens', href: '/admin/biens', icon: <FiMapPin size={20} /> },
  { label: 'Contacts', href: '/admin/contacts', icon: <FiMail size={20} /> },
  { label: 'Settings', href: '/admin/settings', icon: <FiSettings size={20} /> },
];

export function AdminSidebar() {
  const pathname = usePathname();

  function isActive(href: string): boolean {
    if (href === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(href);
  }

  return (
    <aside className="flex flex-col h-screen w-64 bg-[#1A1A1A] text-white fixed left-0 top-0 z-40">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b border-white/10">
        <Link href="/admin" className="text-xl font-bold tracking-wide text-white">
          EB Agency
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    active
                      ? 'bg-[#5D4940] text-white'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-white/10">
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-red-500/20 hover:text-red-400 transition-colors duration-200"
        >
          <FiLogOut size={20} />
          Déconnexion
        </button>
      </div>
    </aside>
  );
}
