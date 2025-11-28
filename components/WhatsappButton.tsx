import { IconBrandWhatsapp } from "@tabler/icons-react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "33615944934"; 
  const message = encodeURIComponent(
    "Bonjour, je serais intéressé par un projet. Merci !"
  );
  const link = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className=" flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 h-14 rounded-full shadow-lg hover:shadow-xl transition-all"
    >
   <IconBrandWhatsapp className="w-7 h-7"/>
    </a>
  );
}
