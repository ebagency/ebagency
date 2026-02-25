interface AdminCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
}

export function AdminCard({ title, value, icon, trend }: AdminCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-[#1A1A1A]">{value}</p>
          {trend && (
            <p className="mt-2 text-sm text-gray-500">{trend}</p>
          )}
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#5D4940]/10 text-[#5D4940]">
          {icon}
        </div>
      </div>
    </div>
  );
}
