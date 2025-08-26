import React from "react";
import { PhoneForwarded } from "lucide-react";
import { MdOutlineEmail, MdOutlineLocationSearching } from "react-icons/md";
import { IoCopyOutline, IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import { toast } from "react-toastify";

const map = "https://maps.app.goo.gl/PVJ37QMmSoE88S669";

const ContactInfo = () => {
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`Copied: ${text}`);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  // open map
  const handleOpenMap = () => {
    window.open(map, "_blank");
  };

  return (
    <div className="flex flex-col gap-6 md:gap-10">
      {/* heading */}
      <div className="flex items-center gap-2">
        <PhoneForwarded
          size={30}
          className="p-1 rounded-sm bg-purple-200 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200"
        />
        <h1 className="text-2xl md:text-3xl text-primaryLight font-medium">
          Contact Information
        </h1>
      </div>

      {/* email */}
      <div className="flex items-start gap-3">
        <MdOutlineEmail
          size={36}
          className="p-1 text-2xl md:text-3xl shrink-0 rounded-sm bg-purple-200 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200"
        />
        <div className="text-sm w-full">
          <p className="font-medium text-gray-700 dark:text-gray-300">Email</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
            <p className="text-gray-700 dark:text-gray-300 break-words">
              naimurrahmun34@gmail.com
            </p>
            <IoCopyOutline
              className="cursor-pointer text-purple-700 shrink-0"
              onClick={() => handleCopy("naimurrahmun34@gmail.com")}
            />
          </div>
        </div>
      </div>

      {/* phone */}
      <div className="flex items-start gap-3">
        <MdOutlineLocalPhone
          size={36}
          className="p-1 text-2xl md:text-3xl shrink-0 rounded-sm bg-purple-200 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200"
        />
        <div className="text-sm w-full">
          <p className="font-medium text-gray-700 dark:text-gray-300">Phone</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
            <p className="text-gray-700 dark:text-gray-300 break-words">
              +8801568450889
            </p>
            <IoCopyOutline
              className="cursor-pointer text-purple-700 shrink-0"
              onClick={() => handleCopy("+8801568450889")}
            />
          </div>
        </div>
      </div>

      {/* location */}
      <div className="flex items-start gap-3">
        <IoLocationOutline
          size={36}
          className="p-1 text-2xl md:text-3xl shrink-0 rounded-sm bg-purple-200 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200"
        />
        <div className="text-sm w-full">
          <p className="font-medium text-gray-700 dark:text-gray-300">Location</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
            <p className="text-gray-700 dark:text-gray-300 break-words">
              Rangpur, Bangladesh
            </p>
            <MdOutlineLocationSearching
              className="cursor-pointer text-purple-700 shrink-0"
              onClick={handleOpenMap}
            />
          </div>
        </div>
      </div>

      {/* availability */}
      <div className="flex items-start gap-3">
        <IoMdTime
          size={36}
          className="p-1 text-2xl md:text-3xl shrink-0 rounded-sm bg-purple-200 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200"
        />
        <div className="text-sm">
          <p className="font-medium text-gray-700 dark:text-gray-300">Availability</p>
          <p className="text-gray-700 dark:text-gray-300">All Time</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
