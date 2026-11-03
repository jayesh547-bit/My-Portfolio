import { motion } from 'framer-motion';
import { profile } from '../data/portfolio.js';

export default function WhatsAppButton() {
  return (
    <aside
      aria-label="Direct contact shortcut"
      className="fixed right-3.5 top-1/2 z-[95] -translate-y-1/2 sm:right-5"
    >
      <motion.a
        href={profile.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="focus-ring group relative flex h-[58px] w-[58px] items-center justify-center rounded-full border border-white/40 bg-gradient-to-br from-[#2fe171]/95 to-[#20ba59]/95 text-white shadow-[0_0_24px_rgba(37,211,102,0.45),0_12px_28px_rgba(17,17,15,0.18),inset_0_1px_1.5px_rgba(255,255,255,0.7)] backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_0_36px_rgba(37,211,102,0.65),0_16px_36px_rgba(17,17,15,0.24)] sm:h-[62px] sm:w-[62px]"
        aria-label="Chat with Jayesh on WhatsApp (opens in new tab)"
        title="Chat on WhatsApp"
      >
        {/* Soft Ambient Green Glow */}
        <span
          className="pointer-events-none absolute -inset-1 rounded-full bg-[#25D366]/30 blur-md transition duration-500 group-hover:bg-[#25D366]/50 group-hover:blur-lg"
          aria-hidden="true"
        />

        {/* Clean White WhatsApp Symbol */}
        <svg
          className="relative h-7 w-7 fill-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)] sm:h-[30px] sm:w-[30px]"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </aside>
  );
}
