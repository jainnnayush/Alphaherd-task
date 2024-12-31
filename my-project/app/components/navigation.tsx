import Link from "next/link";
import Image from "next/image";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between h-[72px] w-full px-6 py-2 bg-[#1A1A1A] text-white font-sans">
      <div className="flex items-center space-x-10 w-[40%] justify-between">
        {/* Home */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-[#A2A3A3] hover:text-[#40C7B9] transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_44_106"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#38F8E6" />
            </mask>
            <g mask="url(#mask0_44_106)">
              <path
                d="M5 20V12H2L12 3L16 6.6V4H19V9.3L22 12H19V20H14V14H10V20H5ZM10 10.025H14C14 9.49167 13.8 9.05417 13.4 8.7125C13 8.37083 12.5333 8.2 12 8.2C11.4667 8.2 11 8.37083 10.6 8.7125C10.2 9.05417 10 9.49167 10 10.025Z"
                fill="#A2A3A3"
              />
              <rect x="10" y="8" width="4" height="4" fill="#A2A3A3" />
            </g>
          </svg>

          <span>Home</span>
        </Link>

        {/* Finances */}
        <Link
          href="/finances"
          className="flex items-center space-x-2 text-[#A2A3A3] hover:text-[#40C7B9] transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_44_113"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="white" />
            </mask>
            <g mask="url(#mask0_44_113)">
              <path
                d="M13.725 21L7 14V12H10.5C11.3833 12 12.1458 11.7125 12.7875 11.1375C13.4292 10.5625 13.8167 9.85 13.95 9H6V7H13.65C13.3667 6.41667 12.9458 5.9375 12.3875 5.5625C11.8292 5.1875 11.2 5 10.5 5H6V3H18V5H14.75C14.9833 5.28333 15.1917 5.59167 15.375 5.925C15.5583 6.25833 15.7 6.61667 15.8 7H18V9H15.975C15.8417 10.4167 15.2583 11.6042 14.225 12.5625C13.1917 13.5208 11.95 14 10.5 14H9.775L16.5 21H13.725Z"
                fill="#A2A3A3"
              />
            </g>
          </svg>

          <span>Finances</span>
        </Link>

        {/* Inventory */}
        <Link
          href="/inventory"
          className="flex items-center space-x-2 text-[#A2A3A3] hover:text-[#40C7B9] transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_44_119"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="white" />
            </mask>
            <g mask="url(#mask0_44_119)">
              <path
                d="M15.5 19.925L11.25 15.675L12.65 14.275L15.5 17.125L21.15 11.475L22.55 12.875L15.5 19.925ZM21 10H19V5H17V8H7V5H5V19H11V21H5C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H9.175C9.35833 2.41667 9.71667 1.9375 10.25 1.5625C10.7833 1.1875 11.3667 1 12 1C12.6667 1 13.2625 1.1875 13.7875 1.5625C14.3125 1.9375 14.6667 2.41667 14.85 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V10ZM12 5C12.2833 5 12.5208 4.90417 12.7125 4.7125C12.9042 4.52083 13 4.28333 13 4C13 3.71667 12.9042 3.47917 12.7125 3.2875C12.5208 3.09583 12.2833 3 12 3C11.7167 3 11.4792 3.09583 11.2875 3.2875C11.0958 3.47917 11 3.71667 11 4C11 4.28333 11.0958 4.52083 11.2875 4.7125C11.4792 4.90417 11.7167 5 12 5Z"
                fill="#A2A3A3"
              />
            </g>
          </svg>

          <span>Inventory</span>
        </Link>

        {/* Database (Active Link) */}
        <Link
          href="/database"
          className="flex items-center space-x-2 text-[#A2A3A3]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_44_125"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="white" />
            </mask>
            <g mask="url(#mask0_44_125)">
              <path
                d="M16 14C15.1667 14 14.4583 13.7083 13.875 13.125C13.2917 12.5417 13 11.8333 13 11C13 10.1667 13.2917 9.45833 13.875 8.875C14.4583 8.29167 15.1667 8 16 8C16.8333 8 17.5417 8.29167 18.125 8.875C18.7083 9.45833 19 10.1667 19 11C19 11.8333 18.7083 12.5417 18.125 13.125C17.5417 13.7083 16.8333 14 16 14ZM10 20V18.1C10 17.75 10.0833 17.4167 10.25 17.1C10.4167 16.7833 10.65 16.5333 10.95 16.35C11.7 15.9 12.4958 15.5625 13.3375 15.3375C14.1792 15.1125 15.0667 15 16 15C16.9333 15 17.8208 15.1125 18.6625 15.3375C19.5042 15.5625 20.3 15.9 21.05 16.35C21.35 16.5333 21.5833 16.7833 21.75 17.1C21.9167 17.4167 22 17.75 22 18.1V20H10ZM12.15 18H19.85C19.2667 17.6667 18.65 17.4167 18 17.25C17.35 17.0833 16.6833 17 16 17C15.3167 17 14.65 17.0833 14 17.25C13.35 17.4167 12.7333 17.6667 12.15 18ZM16 12C16.2833 12 16.5208 11.9042 16.7125 11.7125C16.9042 11.5208 17 11.2833 17 11C17 10.7167 16.9042 10.4792 16.7125 10.2875C16.5208 10.0958 16.2833 10 16 10C15.7167 10 15.4792 10.0958 15.2875 10.2875C15.0958 10.4792 15 10.7167 15 11C15 11.2833 15.0958 11.5208 15.2875 11.7125C15.4792 11.9042 15.7167 12 16 12ZM3 14V12H11V14H3ZM3 6V4H15V6H3ZM11.1 10H3V8H12C11.7667 8.28333 11.5792 8.59167 11.4375 8.925C11.2958 9.25833 11.1833 9.61667 11.1 10Z"
                fill="#38F8E6"
              />
              <path
                d="M12 17.5L16.5 16L20.5 17.5V19.5H12V17.5Z"
                fill="#38F8E6"
              />
              <path
                d="M14.5 11L16.5 9L18 11.5L16.5 13H15L14.5 11Z"
                fill="#38F8E6"
              />
            </g>
          </svg>

          <span>Database</span>
        </Link>
      </div>

      <div className="flex items-center space-x-8 w-[158px]">
        {/* Bell Icon */}
        <button className="hover:text-[#40C7B9] transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_44_136"  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" fill="#64737B"/>
</mask>
<g mask="url(#mask0_44_136)">
<path d="M4 19V17H6V10C6 8.61667 6.41667 7.3875 7.25 6.3125C8.08333 5.2375 9.16667 4.53333 10.5 4.2V3.5C10.5 3.08333 10.6458 2.72917 10.9375 2.4375C11.2292 2.14583 11.5833 2 12 2C12.4167 2 12.7708 2.14583 13.0625 2.4375C13.3542 2.72917 13.5 3.08333 13.5 3.5V4.2C14.8333 4.53333 15.9167 5.2375 16.75 6.3125C17.5833 7.3875 18 8.61667 18 10V17H20V19H4ZM12 22C11.45 22 10.9792 21.8042 10.5875 21.4125C10.1958 21.0208 10 20.55 10 20H14C14 20.55 13.8042 21.0208 13.4125 21.4125C13.0208 21.8042 12.55 22 12 22ZM8 17H16V10C16 8.9 15.6083 7.95833 14.825 7.175C14.0417 6.39167 13.1 6 12 6C10.9 6 9.95833 6.39167 9.175 7.175C8.39167 7.95833 8 8.9 8 10V17Z" fill="#A2A3A3"/>
<circle cx="18" cy="6" r="4" fill="#38F8E6"/>
</g>
</svg>

        </button>

        {/* User Icon */}
        <button className="hover:text-[#40C7B9] transition-colors">
            <Image
        src="/VeterinarianDoctorStaff.png" 
        alt="Home Icon"
        width={24}
        height={24}
        className="object-contain"
        />

        </button>

        {/* Arrow Icon */}
        <button className="bg-[#40C7B9] p-1 rounded-full hover:bg-[#3BB3A6] transition-colors">
        <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="18" fill="#38F8E6"/>
<path d="M24.9547 23.0918C22.387 22.4328 19.3017 13.2327 17.9801 8.36997C17.9312 8.18982 18.0858 8.02003 18.2712 8.04191C29.0843 9.31815 28.3611 19.0166 27.6379 21.5222C27.0525 23.5506 25.6052 23.4137 24.9547 23.0918Z" fill="#17181A"/>
<path d="M11.0454 23.0918C13.6131 22.4328 16.6984 13.2327 18.02 8.36997C18.069 8.18982 17.9143 8.02003 17.7289 8.04191C6.91578 9.31815 7.63898 19.0166 8.36218 21.5222C8.94761 23.5506 10.3949 23.4137 11.0454 23.0918Z" fill="#17181A"/>
<path d="M21.926 23.7385C22.3887 24.7608 22.6315 26.0556 21.7965 26.8052C20.9456 27.569 19.4451 27.9988 17.8802 27.9988C16.068 27.9988 14.3423 27.4225 13.6116 26.4187C13.1536 25.7895 13.3015 24.9299 13.6171 24.2186C14.2561 22.7782 15.561 21.3443 17.8802 21.3443C20.3536 21.3443 21.3245 22.4094 21.926 23.7385Z" fill="#17181A"/>
</svg>

        </button>
      </div>
    </nav>
  );
}
