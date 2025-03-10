import InvoiceBanner from "@/components/banners/invoice-banner";
import PrivacyBanner from "@/components/banners/privacy-banner";
import QRBanner from "@/components/banners/qr-banner";
import ResumeBanner from "@/components/banners/resume-banner";
import WelcomeBanner from "@/components/banners/welcome-banner";

export default async function Page() {
  return (
    <section>
      <WelcomeBanner />
      <div className="grid lg:grid-cols-2 gap-[10px] p-[10px] sm:gap-[20px] lg:gap-[30px] sm:p-[20px] lg:p-[30px]">
        <ResumeBanner />
        <PrivacyBanner />
        <InvoiceBanner />
        <QRBanner />
      </div>
    </section>
  );
}
