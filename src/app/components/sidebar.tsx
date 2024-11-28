import Image from "next/image";
import {
  Bell,
  Flag,
  CalendarCog,
  MessageCircle,
  Tent,
  CircleUserRound,
  UserRoundCog,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { label: "Browse Events", icon: Flag },
    { label: "My Events", icon: CalendarCog },
    { label: "Messages", icon: MessageCircle },
    { label: "My Horses", icon: Tent },
    { label: "My Points", icon: UserRoundCog },
    { label: "My Profile", icon: CircleUserRound },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg transition-all duration-300 ease-in-out p-6 flex flex-col md:w-20 lg:w-64">
      {/* Logo Section */}
      <div className="flex items-center justify-between mb-8">
        {/* Logo */}
        <div className="hidden md:block">
          <Image
            decoding="async"
            src="https://framerusercontent.com/images/ubOFczMYrFQjarYF0WCFiDP9to.svg"
            alt="Bridle Logo"
            width={130}
            height={100}
          />
        </div>
        {/* Notification Icon */}
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-700 hover:text-purple-500 transition duration-300" />
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
            3
          </span>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-2 flex-1">
        {menuItems.map(({ label, icon: Icon }, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center gap-4 p-3 text-gray-700 rounded-lg hover:bg-purple-100 transition-all duration-300 ease-in-out"
          >
            {/* Icon */}
            <Icon className="w-5 h-5 text-gray-700 hover:text-purple-500 transition duration-300" />
            {/* Label */}
            <span className="font-medium hidden md:block hover:font-bold transition duration-300">
              {label}
            </span>
          </a>
        ))}
      </nav>

      {/* Footer Section */}
      <div className="mt-auto text-center text-sm text-gray-500 flex items-center justify-start space-x-2">
        {/* LogOut Icon */}
        <LogOut className="w-5 h-5 text-gray-600" />
        {/* Sign Out Text */}
        <span className="text-gray-700">Sign Out</span>
      </div>
    </aside>
  );
}
