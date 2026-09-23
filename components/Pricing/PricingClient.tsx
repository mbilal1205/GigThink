// app/(marketing)/pricing/PricingClient.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/utils/supabase/client";
import { initializePaddle, Paddle, CheckoutEventNames } from "@paddle/paddle-js";
import { toast } from "sonner";

import PricingHero from "./PricingHeader";
import PricingPlans from "./PricingPlans";
import PricingComparison from "./PriceComparison";

const PRO_MONTHLY_PRICE_ID = process.env.NEXT_PUBLIC_PADDLE_PRICE_ID!;

export default function PricingClient() {
  const router = useRouter();
  const [paddle, setPaddle] = useState<Paddle | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isYearly, setIsYearly] = useState(false);

  /* ── Auth + Paddle Init (UNCHANGED) ── */
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
          toast.error(`Verification failed: ${authError.message}`);
        }
        if (isMounted && verifiedUser) setUser(verifiedUser);
      } catch {
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

  /* ── Subscribe Handler (UNCHANGED) ── */
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
      <PricingHero />

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

        <PricingComparison />
      </section>
    </div>
  );
}