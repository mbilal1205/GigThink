"use client";

import { useState, FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  CheckSquare,
  LayoutDashboard,
  Kanban,
  Workflow,
  MessageSquare,
  PhoneCall,
  Inbox,
  Video,
  BellRing,
  Mail,
  FileEdit,
  FileText,
  Edit3,
  FileSearch,
  BookOpen,
  CheckSquare2,
  Calendar,
  Zap,
  Timer,
  Grid,
  Puzzle,
  BookMarked,
  PlayCircle,
  Sparkles,
  Users,
  Target,
  Compass,
  ChevronDown,
  X,
  Menu,
} from "lucide-react";

/* ============================================================
   MEGA MENU TYPES
   ============================================================ */
interface MegaMenuColumn {
  category: string;
  items: {
    title: string;
    desc: string;
    href: string;
    icon: React.ReactNode;
    color: string;
  }[];
}

interface NavItem {
  label: string;
  href: string;
  megaMenu?: MegaMenuColumn[];
}

/* ---------- Logo ---------- */
const GigThinkLogo: FC = () => (
  <Link href="/" className="flex items-center gap-2.5 group select-none">
    <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden">
      <Image
        src="/giglogo.png"
        alt="GigThink Logo"
        width={32}
        height={32}
        priority
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <span className="text-[20px] font-black tracking-tight text-foreground flex items-start">
      GigThink
      <span className="text-[10px] font-bold text-muted-foreground ml-0.5 relative -top-1">
        TM
      </span>
    </span>
  </Link>
);

/* ---------- Nav Items ---------- */
const NAV_ITEMS: NavItem[] = [
  {
    label: "Brain AI",
    href: "#",
    megaMenu: [
      {
        category: "INTELLIGENCE",
        items: [
          {
            title: "AI Proposals",
            desc: "Generate winning bids instantly",
            href: "/proposals",
            icon: <Sparkles className="w-4 h-4" />,
            color: "bg-primary/10 text-primary",
          },
          {
            title: "Smart Pitching",
            desc: "Automate outreach pipeline",
            href: "/pitching",
            icon: <Zap className="w-4 h-4" />,
            color: "bg-accent/10 text-accent-foreground",
          },
        ],
      },
    ],
  },
  {
    label: "Product",
    href: "#",
    megaMenu: [
      {
        category: "ALL PRODUCTS",
        items: [
          {
            title: "AI Parser",
            desc: "Parse documents with AI",
            href: "/products/ai-parser",
            icon: <FileSearch className="w-4 h-4" />,
            color: "bg-blue-100 text-blue-700",
          },
          {
            title: "Auto Follow-ups",
            desc: "Automate client follow-ups",
            href: "/products/autofollow-ups",
            icon: <BellRing className="w-4 h-4" />,
            color: "bg-emerald-100 text-emerald-700",
          },
          {
            title: "Client CRM",
            desc: "Manage client relationships",
            href: "/products/client-crm",
            icon: <Users className="w-4 h-4" />,
            color: "bg-indigo-100 text-indigo-700",
          },
          {
            title: "Email Automation",
            desc: "Automate email campaigns",
            href: "/products/email-automation",
            icon: <Mail className="w-4 h-4" />,
            color: "bg-rose-100 text-rose-700",
          },
          {
            title: "Lead Generation",
            desc: "Generate qualified leads",
            href: "/products/lead-generation",
            icon: <Target className="w-4 h-4" />,
            color: "bg-amber-100 text-amber-700",
          },
          {
            title: "Opportunity Discovery",
            desc: "Find new opportunities",
            href: "/products/opportunity-discovery",
            icon: <Compass className="w-4 h-4" />,
            color: "bg-purple-100 text-purple-700",
          },
          {
            title: "Proposal Studio",
            desc: "Create stunning proposals",
            href: "/products/proposal-studio",
            icon: <FileEdit className="w-4 h-4" />,
            color: "bg-pink-100 text-pink-700",
          },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "#",
    megaMenu: [
      {
        category: "BY ROLE",
        items: [
          {
            title: "For Freelancers",
            desc: "Solo developers & creators",
            href: "/solutions/freelancers",
            icon: <Users className="w-4 h-4" />,
            color: "bg-primary/10 text-primary",
          },
          {
            title: "For Agencies",
            desc: "Growing teams & studios",
            href: "/solutions/agencies",
            icon: <Grid className="w-4 h-4" />,
            color: "bg-accent/10 text-accent-foreground",
          },
        ],
      },
    ],
  },
  {
    label: "Learn",
    href: "#",
    megaMenu: [
      {
        category: "RESOURCES",
        items: [
          {
            title: "Blog & Guides",
            desc: "Expert tips and insights",
            href: "/blog",
            icon: <BookMarked className="w-4 h-4" />,
            color: "bg-emerald-100 text-emerald-700",
          }
        ],
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

/* ============================================================
   MAIN NAVBAR
   ============================================================ */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const toggleMobileAccordion = (label: string) => {
    setMobileAccordion(mobileAccordion === label ? null : label);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[90] bg-card/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.04)] dark:shadow-[0_1px_0_rgba(255,255,255,0.06)]">
        <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Left: Logo + Desktop Menu */}
          <div className="flex items-center gap-8">
            <GigThinkLogo />

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 lg:flex static">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="static"
                  onMouseEnter={() => item.megaMenu && setHoveredMenu(item.label)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-[14px] font-semibold text-muted-foreground transition-all hover:text-foreground hover:bg-muted/50"
                  >
                    {item.label}
                    {item.megaMenu && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          hoveredMenu === item.label
                            ? "rotate-180 text-foreground"
                            : "text-muted-foreground"
                        }`}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.megaMenu && hoveredMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-0 right-0 top-[70px] z-50 w-full bg-card/98 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-b border-border/40 py-8 px-6"
                      >
                        <div className="max-w-7xl mx-auto grid grid-flow-col auto-cols-max gap-12 justify-start">
                          {item.megaMenu.map((col, idx) => (
                            <div key={idx} className="w-[230px] space-y-3">
                              <div className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                                {col.category}
                              </div>
                              <div className="space-y-1">
                                {col.items.map((sub) => (
                                  <Link
                                    key={sub.title}
                                    href={sub.href}
                                    className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-muted/50"
                                  >
                                    <div
                                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${sub.color}`}
                                    >
                                      {sub.icon}
                                    </div>
                                    <div>
                                      <div className="text-[13px] font-bold text-foreground group-hover:text-primary transition-colors">
                                        {sub.title}
                                      </div>
                                      <div className="text-[11px] leading-tight text-muted-foreground mt-0.5">
                                        {sub.desc}
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="hidden items-center gap-3 lg:flex">
  <Link
    href="https://app.gigthink.com/auth/login"
    className="rounded-xl px-4 py-2 text-[14px] font-semibold text-foreground transition-colors hover:bg-muted/60"
  >
    Login
  </Link>
  
  {/* btn-gradient aur hover:opacity hata kar standard premium soft black implement kiya */}
  <Link
    href="https://app.gigthink.com/auth/signup"
    className="rounded-xl bg-neutral-900 px-5 py-2 text-[14px] font-bold text-white active:scale-95 hover:bg-neutral-800 transition-none"
  >
    Sign Up
  </Link>
</div>


          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground lg:hidden transition-colors hover:bg-muted/80"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[70px] z-[80] bg-background lg:hidden overflow-y-auto"
          >
            <div className="px-6 py-6 space-y-3">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-border pb-3">
                  {item.megaMenu ? (
                    <div>
                      <button
                        onClick={() => toggleMobileAccordion(item.label)}
                        className="flex w-full items-center justify-between py-2.5 text-[16px] font-bold text-foreground"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileAccordion === item.label
                              ? "rotate-180 text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileAccordion === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-2 space-y-4 border-l-2 border-border pl-4 pt-2 pb-3">
                              {item.megaMenu.map((col, idx) => (
                                <div key={idx} className="space-y-2">
                                  <div className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                                    {col.category}
                                  </div>
                                  <div className="space-y-1">
                                    {col.items.map((sub) => (
                                      <Link
                                        key={sub.title}
                                        href={sub.href}
                                        onClick={() => {
                                          setMobileOpen(false);
                                          setMobileAccordion(null);
                                        }}
                                        className="flex items-center gap-3 rounded-xl px-2.5 py-2 hover:bg-muted/50 transition-colors"
                                      >
                                        <div
                                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${sub.color}`}
                                        >
                                          {sub.icon}
                                        </div>
                                        <div>
                                          <div className="text-[13px] font-bold text-foreground">
                                            {sub.title}
                                          </div>
                                          <div className="text-[11px] text-muted-foreground">
                                            {sub.desc}
                                          </div>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 text-[16px] font-bold text-foreground"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 space-y-3">
                <Link
                  href="https://app.gigthink.com/auth/login"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center rounded-xl bg-muted py-3.5 text-[15px] font-bold text-foreground transition-colors hover:bg-muted/80"
                >
                  Login
                </Link>
                <Link
                  href="https://app.gigthink.com/auth/signup"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center rounded-xl btn-gradient py-3.5 text-[15px] font-bold text-white active:scale-95"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[70px]" />
    </>
  );
}