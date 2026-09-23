"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/utils/supabase/client";
import { initializePaddle, Paddle, CheckoutEventNames } from "@paddle/paddle-js";
import { toast } from "sonner"; // 👈 Sonner import kiya

// Import Split Components
import PricingHero from "../../../components/Pricing/PricingHeader";
import PricingPlans from "../../../components/Pricing/PricingPlans";
import PricingComparison from "../../../components/Pricing/PriceComparison";

const PRO_MONTHLY_PRICE_ID = process.env.NEXT_PUBLIC_PADDLE_PRICE_ID!;

export default function PricingPage() {
  const router = useRouter();
  const [paddle, setPaddle] = useState<Paddle | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isYearly, setIsYearly] = useState(false);

  /* ── Auth + Paddle Init (PRESERVED UNCHANGED LOGIC) ── */
  useEffect(() => {
    let isMounted = true;

    async function verifyUserAndInitializePaddle() {
      const supabase = getSupabaseBrowserClient();
      try {
        const {
          data: { user: verifiedUser },
          error: authError,
        } = await supabase.auth.getUser();
        if (authError) {
          // 👈 Console error ko sonner toast mein badla
          toast.error(`Verification failed: ${authError.message}`);
        }
        if (isMounted && verifiedUser) setUser(verifiedUser);
      } catch (err) {
        toast.error("Database authentication sync exception occurred.");
      } finally {
        if (isMounted) setCheckingAuth(false);
      }
    }

    verifyUserAndInitializePaddle();

    const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
    if (token) {
      initializePaddle({
        environment: "sandbox",
        token: token,
        eventCallback: (event) => {
          if (!isMounted) return;
          if (event.name === ("checkout.closed" as CheckoutEventNames)) setLoading(false);
          if (event.name === ("checkout.error" as CheckoutEventNames)) {
            // 👈 Checkout error par toast dikhayega
            toast.error("Paddle Checkout encountered an error.");
            setLoading(false);
          }
        },
      }).then((paddleInstance) => {
        if (isMounted && paddleInstance) setPaddle(paddleInstance);
      });
    } else {
      toast.error("Paddle configuration error: Client token missing.");
    }

    return () => {
      isMounted = false;
    };
  }, []);

  /* ── Subscribe Handler (PRESERVED UNCHANGED LOGIC) ── */
  const handleSubscribe = async (priceId: string) => {
    if (!user) {
      router.push("/auth/login");
      return;
    }
    if (!paddle) {
      toast.error("Payment system is loading. Please try again in a moment.");
      return;
    }
    if (!priceId) {
      toast.error("Invalid product configuration: Price ID missing.");
      return;
    }

    setLoading(true);
    paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
      customer: { email: user.email },
      customData: { userId: user.id },
      settings: { displayMode: "overlay", theme: "dark", locale: "en" },
    });
  };

  const monthlyPrice = 9.9;
  const yearlyPrice = 7.92;
  const displayPrice = isYearly ? yearlyPrice : monthlyPrice;

  return (
    <div className="min-h-screen w-full bg-white text-[#000000] font-sans antialiased selection:bg-[#0091ff]/20">
      {/* 1. HERO COMPONENT */}
      <PricingHero />

      {/* 2. CHECKOUT PLANS COMPONENT */}
      <section className="relative pb-20 sm:pb-28">
        <PricingPlans
          isYearly={isYearly}
          setIsYearly={setIsYearly}
          displayPrice={displayPrice}
          yearlyPrice={yearlyPrice}
          handleSubscribe={handleSubscribe}
          loading={loading}
          checkingAuth={checkingAuth}
          user={user}
          paddle={paddle}
          priceId={PRO_MONTHLY_PRICE_ID}
        />

        {/* 3. COMPARISON COMPONENT (Matrix Table + Benefits + FAQ + CTA) */}
        <PricingComparison />
      </section>
    </div>
  );
}
