import { NextRequest, NextResponse } from "next/server";

const CHECKOUT_ROUTES = {
  "kit-1":
    "https://entrega.logzz.com.br/pay/mem26548v/progressiva-vegetal-havana-1x198",
  "kit-2":
    "https://entrega.logzz.com.br/pay/mem26548v/02-progressiva-2x247",
  "kit-3":
    "https://entrega.logzz.com.br/pay/mem26548v/03-progressiva-vegetal-havana-398",
} as const;

export async function GET(request: NextRequest) {
  const offer = request.nextUrl.searchParams.get("offer");

  if (!offer || !(offer in CHECKOUT_ROUTES)) {
    const fallbackUrl = new URL("/#ofertas", request.url);

    return NextResponse.redirect(fallbackUrl, {
      status: 302,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }

  const checkoutUrl =
    CHECKOUT_ROUTES[offer as keyof typeof CHECKOUT_ROUTES];

  return NextResponse.redirect(checkoutUrl, {
    status: 302,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
