import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/ui/Header";
import BannerSlider from "@/components/BannerSlider";
import ClubSection from "@/components/ClubSection";
import CallToActionOne from "@/components/CallToActionOne";
import Testimonials from "@/components/Testmonials";
import Partners from "@/components/Partners";
import CallToActionTwo from "@/components/CallToActionTwo";
import FAQ from "@/components/FAQ";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import WhatsappButton from "@/components/ui/WhatsappButton";
import BlockedPage from "@/components/ui/Blocked";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isBlocked = true;

  return (
    <>
      <Head>
        <title>Clube Bancorbrás - serviços de turismo!</title>
        <meta
          name="description"
          content="Pacotes de viagem, passagens aéreas, grupos de viagem e tudo que você precisa para uma viagem completa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        {isBlocked ? (
          <BlockedPage />
        ) : (
          <>
            <Header />
            <BannerSlider openModal={() => setIsOpen(true)} />
            <ClubSection openModal={() => setIsOpen(true)} />
            <CallToActionOne openModal={() => setIsOpen(true)} />
            <Partners />
            <Testimonials />
            <FAQ />
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <WhatsappButton />
          </>
        )}
      </main>
    </>
  );
}
