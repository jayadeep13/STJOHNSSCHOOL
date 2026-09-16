import Image from "next/image";
import Script from "next/script";
import {
  Phone,
  MessageCircle,
  Mail,
  ShieldCheck,
  Banknote,
  Smartphone,
  Globe2,
  QrCode,
} from "lucide-react";

export const metadata = {
  title: "Donate",
  description:
    "Donate to The Joshua Foundation to sponsor a child's education at St. John's School, Dantherapalli, India. Every rupee sends a child to school instead of the field.",
};

const WAYS_TO_GIVE = [
  {
    icon: Smartphone,
    title: "UPI",
    body: "Instant transfer from any UPI app. Call or WhatsApp us and we'll share the UPI ID right away.",
  },
  {
    icon: Banknote,
    title: "Bank Transfer",
    body: "Direct NEFT/IMPS transfer to The Joshua Foundation's trust account. Ask us for account details.",
  },
  {
    icon: Globe2,
    title: "International Donors",
    body: "Supporting from outside India? Give securely online above — all major cards and currencies are accepted.",
  },
];

export default function DonatePage() {
  return (
    <>
      {/* DONATE ONLINE + QR */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-display text-2xl font-semibold text-indigo sm:text-3xl">Donate Online</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink/65">
              Give securely online below, or scan the QR code with your phone to donate instantly.
            </p>
          </div>

          <div className="flex flex-col items-start justify-center gap-8 lg:flex-row">
            {/* Donorbox embedded form */}
            <iframe
              src="https://donorbox.org/embed/sowers-ministry-2?default_interval=o"
              name="donorbox"
              allowpaymentrequest="true"
              seamless
              frameBorder="0"
              scrolling="no"
              allow="payment"
              className="mx-auto block h-[640px] w-full max-w-[500px] overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm lg:mx-0"
              title="Donate to The Joshua Foundation via Donorbox"
            />

            {/* QR code */}
            <div className="mx-auto flex w-full max-w-xs flex-col items-center gap-5 rounded-3xl border border-ink/10 bg-white p-8 text-center shadow-sm lg:mx-0 lg:w-auto">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-ink/50">
                <QrCode className="h-3.5 w-3.5" />
                Scan to donate
              </div>
              <div className="rounded-2xl border border-ink/10 bg-white p-3 shadow-sm">
                <Image
                  src="/images/qrcode.png"
                  alt="QR code to donate via Donorbox"
                  width={200}
                  height={200}
                  className="h-44 w-44 sm:h-52 sm:w-52"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Script src="https://donorbox.org/widget.js" strategy="afterInteractive" paypalExpress="false" />

      {/* WAYS TO GIVE */}
      <section className="bg-paper pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {WAYS_TO_GIVE.map((w) => (
              <div key={w.title} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-marigold/15">
                  <w.icon className="h-5 w-5 text-marigold-dark" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-indigo">{w.title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-ink/10 bg-white/70 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="flex items-center justify-center gap-2 text-sm font-semibold text-ink sm:justify-start">
                <ShieldCheck className="h-4 w-4 text-marigold-dark" />
                Reach us to complete your donation
              </p>
              <p className="mt-1 text-sm text-ink/60">
                Call, WhatsApp or email us for account and UPI details.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+919618841290"
                className="inline-flex items-center gap-2 rounded-full bg-brick px-5 py-3 text-sm font-semibold text-paper shadow-lg shadow-brick/30 hover:bg-brick-dark transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 96188 41290
              </a>
              <a
                href="https://wa.me/919618841290"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink hover:border-brick hover:text-brick transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="mailto:gosa.karna@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink hover:border-brick hover:text-brick transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
